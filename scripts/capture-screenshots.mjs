/**
 * Captures real screenshots of the running app for the Play Store listing.
 *
 *   npm run preview                       # in another shell, or use .claude/launch.json
 *   node scripts/capture-screenshots.mjs [--locales en,uk,de] [--url http://localhost:4173]
 *
 * Drives an already-installed Chrome or Edge over the DevTools protocol. Nothing
 * is downloaded and no browser automation library is needed — Node's built-in
 * WebSocket is enough to speak CDP, and every Windows machine ships Edge.
 *
 * Google Play wants phone screenshots between 320px and 3840px on the short
 * edge, with the long edge no more than twice the short one. The phone frames
 * below are 1080x1920 and the tablet ones 1600x2560 / 2560x1600, all of which
 * satisfy that, and all of which are real device resolutions rather than
 * arbitrary numbers.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import net from 'node:net';

const root = path.resolve(import.meta.dirname, '..');
const outRoot = path.join(root, 'docs/store-assets/screenshots');

const args = Object.fromEntries(
  process.argv.slice(2).join(' ').split('--').filter(Boolean)
    .map(s => s.trim().split(/\s+/)).map(([k, ...v]) => [k, v.join(' ')]));

const URL_BASE = args.url || 'http://localhost:4173';
const PORT = 9222;

const BROWSERS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
];

/**
 * Each frame is a real device size. `mobile` matters beyond the width: it sets
 * the touch flags and the mobile user agent, so the app takes exactly the code
 * path a phone would.
 */
const FRAMES = [
  { id: 'phone-portrait', width: 1080, height: 1920, scale: 3, mobile: true },
  { id: 'phone-landscape', width: 1920, height: 1080, scale: 3, mobile: true },
  { id: 'tablet-portrait', width: 1600, height: 2560, scale: 2, mobile: true },
  { id: 'tablet-landscape', width: 2560, height: 1600, scale: 2, mobile: true },
];

/**
 * The pages worth showing in a store listing, in the order they tell the story.
 *
 * Routes carry the `#` because the app mounts a HashRouter. Without it every
 * route silently renders the calculator — the methodology shot came out byte
 * for byte identical to the first one until this was fixed.
 */
const SHOTS = [
  { id: '1-calculator', route: '#/', theme: 'light', prepare: null },
  { id: '2-result', route: '#/', theme: 'light', prepare: 'scrollToHero' },
  { id: '3-chart', route: '#/', theme: 'light', prepare: 'scrollToChart' },
  { id: '4-table', route: '#/', theme: 'light', prepare: 'openTable' },
  { id: '5-dark', route: '#/', theme: 'dark', prepare: 'scrollToHero' },
  { id: '6-methodology', route: '#/methodology', theme: 'light', prepare: 'top' },
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

/**
 * Shrinks a raw screenshot before it hits disk.
 *
 * App UI is flat colour over large areas, so a 256-colour palette is visually
 * lossless here and cuts each file by roughly three quarters — the difference
 * between a few megabytes per language and a few hundred across all 43. Falls
 * back to the raw PNG if sharp is not installed, since it is an optional tool.
 */
let sharp = null;
try { ({ default: sharp } = await import('sharp')); } catch { /* optional */ }
const compress = async buffer =>
  sharp ? sharp(buffer).png({ palette: true, quality: 90, compressionLevel: 9 }).toBuffer() : buffer;

async function waitForPort(port, timeoutMs = 20000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const ok = await new Promise(resolve => {
      const socket = net.connect(port, '127.0.0.1');
      socket.once('connect', () => { socket.destroy(); resolve(true); });
      socket.once('error', () => resolve(false));
    });
    if (ok) return;
    await sleep(200);
  }
  throw new Error(`Nothing listening on port ${port} after ${timeoutMs}ms`);
}

/** Minimal CDP client: send a command, await the matching id. */
class Session {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener('message', ev => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(`${msg.error.message} (${JSON.stringify(msg.error.data ?? '')})`)) : resolve(msg.result);
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      setTimeout(() => {
        if (this.pending.delete(id)) reject(new Error(`CDP timeout: ${method}`));
      }, 30000);
    });
  }
}

/**
 * Waits until the app is genuinely ready to be photographed.
 *
 * `.layout` alone is not enough: index.html paints a splash over everything and
 * main.tsx only removes it after a minimum on-screen time plus a fade. Shooting
 * before that leaves the splash ghosted over the form. Waiting for #app-splash
 * to leave the DOM is the reliable signal, since main.tsx removes the element
 * rather than just hiding it.
 */
async function settle(cdp) {
  for (let i = 0; i < 100; i++) {
    const { result } = await cdp.send('Runtime.evaluate', {
      expression: `document.readyState === 'complete'
        && !!document.querySelector('.layout')
        && !document.getElementById('app-splash')`,
      returnByValue: true,
    });
    if (result.value) break;
    await sleep(150);
  }
  await cdp.send('Runtime.evaluate', { expression: `document.fonts.ready.then(() => 'ok')`, awaitPromise: true, returnByValue: true });
  // Chart.js animates on mount; let it finish so the screenshot is not mid-frame.
  await sleep(900);
}

/** Waits for a selector to exist, so a click's effect is on screen before the shot. */
async function waitFor(cdp, selector, timeoutMs = 5000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const { result } = await cdp.send('Runtime.evaluate', {
      expression: `!!document.querySelector(${JSON.stringify(selector)})`,
      returnByValue: true,
    });
    if (result.value) return true;
    await sleep(100);
  }
  return false;
}

const PREPARE = {
  scrollToHero: {
    script: `const el = document.querySelector('.hero-card');
             if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
             !!el`,
    settled: null,
  },
  // 'start', not 'center': on a landscape phone the chart is taller than the
  // viewport, and centring it crops the card's title off the top.
  scrollToChart: {
    script: `const el = document.querySelector('canvas')?.closest('.card') || document.querySelector('canvas');
             if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
             !!el`,
    settled: null,
  },
  top: {
    script: `window.scrollTo(0, 0); true`,
    settled: null,
  },
  openTable: {
    script: `const btn = document.querySelector('.expand-btn') || document.querySelector('.table-gap-row__btn');
             if (btn) btn.click();
             !!btn`,
    settled: '.table-modal',
  },
};

const browser = BROWSERS.find(fs.existsSync);
if (!browser) throw new Error(`No Chrome or Edge found. Looked in:\n  ${BROWSERS.join('\n  ')}`);

const profile = path.join(process.env.TEMP || '/tmp', 'calc-shot-profile');
fs.rmSync(profile, { recursive: true, force: true });

const chrome = spawn(browser, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profile}`,
  '--no-first-run', '--no-default-browser-check',
  '--disable-extensions', '--disable-background-networking',
  '--hide-scrollbars',
  '--force-color-profile=srgb',
], { stdio: 'ignore' });

const locales = (args.locales || 'en').split(',').map(s => s.trim()).filter(Boolean);
const written = [];

try {
  await waitForPort(PORT);
  const targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
  let page = targets.find(t => t.type === 'page');
  if (!page) {
    await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' });
    page = (await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()).find(t => t.type === 'page');
  }

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });
  const cdp = new Session(ws);
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');

  for (const locale of locales) {
    for (const frame of FRAMES) {
      await cdp.send('Emulation.setDeviceMetricsOverride', {
        width: Math.round(frame.width / frame.scale),
        height: Math.round(frame.height / frame.scale),
        deviceScaleFactor: frame.scale,
        mobile: frame.mobile,
      });

      for (const shot of SHOTS) {
        // Land on the target route, write the settings, then reload so the app
        // boots with them. A second Page.navigate would not do: adding a hash to
        // the current URL is a same-document navigation, so React never
        // remounts and the new locale and theme are simply ignored.
        await cdp.send('Page.navigate', { url: `${URL_BASE}/${shot.route}` });
        await settle(cdp);
        await cdp.send('Runtime.evaluate', {
          expression: `localStorage.setItem('locale', ${JSON.stringify(locale)});
                       localStorage.setItem('theme', ${JSON.stringify(shot.theme)}); 'ok'`,
          returnByValue: true,
        });
        await cdp.send('Page.reload', {});
        await settle(cdp);

        if (shot.prepare) {
          const step = PREPARE[shot.prepare];
          const { result } = await cdp.send('Runtime.evaluate', { expression: step.script, returnByValue: true });
          if (!result.value) throw new Error(`${shot.id}: "${shot.prepare}" found nothing to act on`);
          if (step.settled && !await waitFor(cdp, step.settled)) {
            throw new Error(`${shot.id}: "${step.settled}" never appeared after "${shot.prepare}"`);
          }
          await sleep(700);
        }

        const { data } = await cdp.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
        const dir = path.join(outRoot, locale, frame.id);
        fs.mkdirSync(dir, { recursive: true });
        const file = path.join(dir, `${shot.id}.png`);
        fs.writeFileSync(file, await compress(Buffer.from(data, 'base64')));
        written.push(path.relative(root, file));
      }
    }
    console.log(`  ${locale}: ${FRAMES.length * SHOTS.length} shots`);
  }

  ws.close();
} finally {
  chrome.kill();
}

console.log(`\nWrote ${written.length} screenshots under docs/store-assets/screenshots/`);
console.log(`Browser used: ${browser}`);
