/**
 * Builds the Play Store screenshots.
 *
 *   node --experimental-strip-types scripts/generate-store-frames.mjs --locales en,uk
 *   npm run assets:frames -- --locales en,uk
 *
 * Each card is 1080x1920: a soft green background carrying the same visual
 * language as docs/store-assets/feature-graphic.png, a headline with one word
 * picked out in green, and a phone frame that bleeds off the bottom edge.
 *
 * What goes inside the phone is drawn by scripts/store-panels.mjs, not
 * photographed. A real screenshot scaled down to fit a store thumbnail leaves
 * the type around six pixels tall — legible on a desktop monitor, mush on a
 * phone, and cheap-looking either way. The panels redraw each screen larger and
 * sparser, using the app's own translated labels and the numbers its own
 * calculation module produces for the default inputs.
 *
 * The whole composition is laid out in HTML and photographed by Chrome rather
 * than drawn with an image library, for one reason: text. The app ships in 43
 * languages including Georgian, Bengali, Thai, Hebrew and three CJK scripts. A
 * browser already has the fonts, the line breaking and the right-to-left
 * handling for all of them; an SVG renderer does not.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import net from 'node:net';

import { calculateCompoundInterest } from '../src/utils/calculations.ts';
import { en as enStrings } from '../src/i18n/en.ts';
import { en as enMethodology } from '../src/pages/methodology-content/en.ts';
import { PANELS, panelCss } from './store-panels.mjs';

const root = path.resolve(import.meta.dirname, '..');
const outRoot = path.join(root, 'docs/store-assets/play-frames');
const listingsDir = path.join(root, 'docs/store-assets/listings');

const args = Object.fromEntries(
  process.argv.slice(2).join(' ').split('--').filter(Boolean)
    .map(s => s.trim().split(/\s+/)).map(([k, ...v]) => [k, v.join(' ')]));

const PORT = 9333;
const BROWSERS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
];

/** Play's phone screenshot slot. 1080x1920 is the size every device shows well. */
const W = 1080, H = 1920;

/** The app's defaults — the state a user sees on first launch. */
const INPUT = {
  initialDeposit: 10000, years: 15, annualRate: 8,
  monthlyContribution: 500, contributionFrequency: 'monthly',
  inflationRate: 2, taxRate: 15, taxMode: 'annual', compounding: 'annual',
  varianceEnabled: false, minReturnPct: 5, maxReturnPct: 15,
};

/**
 * Each card stages two screens: the one the caption is about in front, and a
 * second behind it. The pairing is deliberate — the back phone should be the
 * screen a reader would naturally want next, so the card sells two things.
 */
const CARDS = [
  { id: '1-results', front: 'results', back: 'chart' },
  { id: '2-inputs', front: 'inputs', back: 'results' },
  { id: '3-chart', front: 'chart', back: 'table' },
  { id: '4-donut', front: 'donut', back: 'results' },
  { id: '5-table', front: 'table', back: 'inputs', dark: true },
  { id: '6-languages', front: 'languages', back: 'donut' },
  { id: '7-methodology', front: 'methodology', back: 'table' },
];

/**
 * Stands in for `||` while a caption line is split on `|`. A control
 * character, because anything printable could legitimately appear in a
 * caption and would then be mangled on the way back.
 */
const BREAK = '\u0000';

/** Used until a locale's listing file carries its own captions. */
const FALLBACK = [
  ['See what your money||*really* buys', 'Inflation and taxes taken off the top.'],
  ['Your plan,||your *numbers*', 'Deposit, top-ups, rate, compounding, inflation and tax.'],
  ['Four lines,||*one* honest picture', 'Nominal, after tax, after inflation, and what you put in.'],
  ['How much is *yours*,||how much is growth', 'The final pot, split into where each part came from.'],
  ['Every year,||down to the *month*', 'The full projection table, expandable to full screen.'],
  ['*43 languages*,||properly translated', 'Native names, and number formatting that follows each one.'],
  ['Check every||figure *by hand*', 'Every formula, in order, with a worked example.'],
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

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
  throw new Error(`Nothing listening on port ${port}`);
}

class Session {
  constructor(ws) {
    this.ws = ws; this.id = 0; this.pending = new Map();
    ws.addEventListener('message', ev => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      setTimeout(() => { if (this.pending.delete(id)) reject(new Error(`CDP timeout: ${method}`)); }, 30000);
    });
  }
}

/**
 * Reads the six captions for a locale out of its listing file.
 *
 * One caption per line, `headline|subtitle`, with `||` marking where the
 * headline should break and `*word*` marking the word drawn in green. Keeping
 * them beside the store description means one file per language holds
 * everything that language's Play page needs.
 */
function captionsFor(locale) {
  const file = path.join(listingsDir, `${locale}.md`);
  if (!fs.existsSync(file)) return FALLBACK;
  // Line endings normalised first: these files get rewritten by assorted tools
  // on Windows, and a stray CR before the fence makes the section look missing.
  const text = fs.readFileSync(file, 'utf8').split('\r\n').join('\n');
  const match = text.match(/^## Screenshot captions[^\n]*\n+```\n([\s\S]*?)\n```/m);
  if (!match) return FALLBACK;
  const lines = match[1].split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length !== CARDS.length) return FALLBACK;
  return lines.map(line => {
    // `||` is the line break inside the headline and `|` separates headline
    // from subtitle, so a plain split on `|` tears the break marker apart and
    // the second half of the headline silently becomes the subtitle. Park the
    // breaks somewhere the split cannot see them, then put them back.
    const [headline = '', subtitle = ''] = line.replaceAll('||', BREAK).split('|');
    return [headline.replaceAll(BREAK, '||'), subtitle];
  });
}

/** App UI strings, falling back to English for anything a locale has not got. */
async function stringsFor(locale) {
  if (locale === 'en') return enStrings;
  try {
    const module = await import(`../src/i18n/locales/${locale}.ts`);
    return module[locale] || module.default || enStrings;
  } catch { return enStrings; }
}

async function methodologyFor(locale) {
  if (locale === 'en') return enMethodology;
  try {
    const module = await import(`../src/pages/methodology-content/locales/${locale}.ts`);
    return module[locale] || module.default || enMethodology;
  } catch { return enMethodology; }
}

/**
 * The offered languages, read out of the source text rather than imported.
 *
 * src/i18n/index.ts imports './en' with no file extension — Vite resolves that,
 * Node's loader does not — so importing the module here fails outright.
 * scripts/test-locales.ts reads it the same way for the same reason.
 */
function supportedLocales() {
  const source = fs.readFileSync(path.join(root, 'src/i18n/index.ts'), 'utf8');
  const block = source.slice(source.indexOf('SUPPORTED_LOCALES'), source.indexOf('] as const;'));
  return [...block.matchAll(/code: '([a-z]+)',\s*name: '([^']+)'/g)]
    .map(([, code, name]) => ({ code, name }));
}
const LOCALE_TABLE = supportedLocales();

/**
 * Flag SVGs, read from the country-flag-icons package the app itself uses.
 * The code-to-country map mirrors FLAGS in src/components/Layout.tsx.
 */
const FLAG_COUNTRY = {
  ar: 'SA', az: 'AZ', be: 'BY', bg: 'BG', bn: 'BD', cs: 'CZ', da: 'DK', de: 'DE',
  el: 'GR', en: 'GB', es: 'ES', et: 'EE', fi: 'FI', fr: 'FR', he: 'IL', hi: 'IN',
  hr: 'HR', hu: 'HU', id: 'ID', it: 'IT', ja: 'JP', ka: 'GE', kk: 'KZ', ko: 'KR',
  lt: 'LT', lv: 'LV', nl: 'NL', no: 'NO', pl: 'PL', pt: 'PT', ro: 'RO', sk: 'SK',
  sl: 'SI', sq: 'AL', sr: 'RS', sv: 'SE', th: 'TH', tl: 'PH', tr: 'TR', uk: 'UA',
  uz: 'UZ', vi: 'VN', zh: 'CN',
};

const FLAGS = Object.fromEntries(Object.entries(FLAG_COUNTRY).flatMap(([code, country]) => {
  const file = path.join(root, 'node_modules/country-flag-icons/3x2', `${country}.svg`);
  return fs.existsSync(file) ? [[code, fs.readFileSync(file, 'utf8')]] : [];
}));

const escapeHtml = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/** `*word*` becomes the green accent; `||` becomes a hard line break. */
const renderHeadline = text =>
  escapeHtml(text).split('||').map(part => part.replace(/\*([^*]+)\*/g, '<em>$1</em>')).join('<br>');

/**
 * One card: a caption, then two overlapping phones on the pale green ground.
 *
 * Two phones rather than one is the whole fix for "it looks empty". A single
 * device leaves two tall gutters of flat background either side of it, and no
 * amount of styling on the background fills them convincingly. Every strong
 * listing in this category stages two or three devices, angled and overlapping,
 * so the product itself fills the frame. The back phone is also doing real
 * work: it shows a second screen, so each card advertises two features.
 *
 * Panels are authored once at a fixed 886x1580 and scaled to whatever the phone
 * is, which keeps type and spacing in proportion at any device size.
 */
function page({ headline, subtitle, front, back, rtl, shade = 0, dark = false }) {
  // A slight walk across the six cards so the strip reads as one set.
  const tint = ['#eaf6ee', '#e8f5ed', '#e5f3eb', '#e3f2e9', '#e0f0e7', '#deeee5', '#dbece3', '#d9ebe1'][shade] || '#e6f4ec';

  const ground = dark
    ? `radial-gradient(1100px 850px at 88% -8%, #123b2a 0%, transparent 62%),
       radial-gradient(900px 700px at -12% 46%, #102f24 0%, transparent 58%),
       linear-gradient(168deg, #0c1a15 0%, #08120f 100%)`
    : `radial-gradient(1100px 850px at 88% -8%, #d6efe1 0%, transparent 62%),
       radial-gradient(900px 700px at -12% 46%, #e3f3ea 0%, transparent 58%),
       linear-gradient(168deg, #f8fbf9 0%, ${tint} 100%)`;

  // Scale from the *inner* width — the window inside the bezel — otherwise the
  // panel is drawn 28px wider than the screen it has to fit in and spills out
  // the right-hand side. Height follows so the panel reaches the bottom of the
  // window exactly.
  const PAD = 14;
  const phone = (w, h) => {
    const inner = w - PAD * 2;
    return { w, h, k: inner / 920, fitH: Math.round((h - PAD * 2) * 920 / inner) };
  };
  const FRONT = phone(844, 1500);
  const BACK = phone(731, 1300);

  return `<!doctype html>
<html lang="x" dir="${rtl ? 'rtl' : 'ltr'}">
<head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${W}px; height: ${H}px; overflow: hidden; }
  :root {
    --ink: ${dark ? '#e8eef4' : '#0f1b2d'};
    --muted: ${dark ? '#8ea0b2' : '#64748b'};
    --card: ${dark ? '#141d28' : '#ffffff'};
    --card-accent: ${dark ? '#10241b' : '#f4fbf6'};
    --hairline: ${dark ? '#26333f' : '#e8edf2'};
    --green: ${dark ? '#22c55e' : '#16a34a'};
    --green-ink: ${dark ? '#4ade80' : '#15803d'};
    --green-soft: ${dark ? '#12301f' : '#e7f6ec'};
    --red-soft: ${dark ? '#331818' : '#fdecec'};
    --red-ink: ${dark ? '#f87171' : '#b91c1c'};
  }
  body {
    position: relative; overflow: hidden;
    background: ${ground};
    /* A wide stack so every script the app supports has a face to land on. */
    font-family: 'Segoe UI Variable Display', 'Segoe UI', 'Nirmala UI', 'Leelawadee UI',
                 'Yu Gothic UI', 'Malgun Gothic', 'Microsoft YaHei UI', 'Sylfaen',
                 'Noto Sans', system-ui, sans-serif;
    color: var(--ink);
    display: flex; flex-direction: column; align-items: center;
    padding: 74px 56px 0;
  }

  .copy { position: relative; z-index: 3; width: 100%; text-align: center; }
  h1 { font-size: 62px; line-height: 1.14; font-weight: 800; letter-spacing: -1.2px;
       color: ${dark ? '#ffffff' : '#0f1b2d'}; }
  h1 em { font-style: normal; color: ${dark ? '#86efac' : '#15803d'}; }
  .copy p { font-size: 30px; line-height: 1.4; margin: 16px auto 0; max-width: 820px;
            color: ${dark ? 'rgba(255,255,255,.72)' : '#5a6b7d'}; }

  /* The staging area the two phones sit in. */
  .stage { position: relative; flex: 1 1 auto; width: 100%; min-height: 0; margin-top: 24px; }

  .phone {
    position: absolute; border-radius: 58px; padding: 14px;
    background: ${dark ? '#1b2530' : '#ffffff'};
    box-shadow: ${dark
      ? '0 46px 96px rgba(0, 0, 0, .55), 0 8px 22px rgba(0, 0, 0, .35)'
      : '0 46px 96px rgba(10, 40, 26, .26), 0 8px 22px rgba(10, 40, 26, .12)'};
  }
  .phone > .win {
    position: absolute; inset: 14px; border-radius: 46px; overflow: hidden;
    background: ${dark ? '#0d141c' : '#f6f8fa'};
  }
  /* Panels are written for one size and scaled here, so the same markup can
     serve a 700px hero phone and a 560px supporting one without restyling. */
  .fit { position: absolute; top: 0; left: 0; width: 920px; transform-origin: top left; }

  .phone.back {
    width: ${BACK.w}px; height: ${BACK.h}px;
    left: -60px; top: 170px; transform: rotate(-7deg); z-index: 1;
  }
  .phone.back .fit { height: ${BACK.fitH}px; transform: scale(${BACK.k.toFixed(4)}); }
  /* Knocked back so the front phone clearly reads as the subject. */
  .phone.back::after {
    content: ''; position: absolute; inset: 14px; border-radius: 46px;
    background: ${dark ? 'rgba(4, 20, 13, .34)' : 'rgba(12, 60, 38, .16)'}; z-index: 2;
  }

  .phone.front {
    width: ${FRONT.w}px; height: ${FRONT.h}px;
    right: -40px; top: 16px; transform: rotate(3deg); z-index: 2;
  }
  .phone.front .fit { height: ${FRONT.fitH}px; transform: scale(${FRONT.k.toFixed(4)}); }

  ${panelCss}
</style></head>
<body>
  <div class="copy">
    <h1>${renderHeadline(headline)}</h1>
    ${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ''}
  </div>
  <div class="stage">
    <div class="phone back"><div class="win"><div class="fit">${back}</div></div></div>
    <div class="phone front"><div class="win"><div class="fit">${front}</div></div></div>
  </div>
</body></html>`;
}

const RTL = new Set(['ar', 'he']);

const browser = BROWSERS.find(fs.existsSync);
if (!browser) throw new Error('No Chrome or Edge found');

const profile = path.join(process.env.TEMP || '/tmp', 'calc-frame-profile');
fs.rmSync(profile, { recursive: true, force: true });
const tmpHtml = path.join(process.env.TEMP || '/tmp', 'calc-frame.html');

const chrome = spawn(browser, [
  '--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`,
  '--no-first-run', '--no-default-browser-check', '--hide-scrollbars',
  '--force-color-profile=srgb', '--allow-file-access-from-files',
], { stdio: 'ignore' });

let sharp = null;
try { ({ default: sharp } = await import('sharp')); } catch { /* optional */ }
/**
 * Play asks for "JPEG or 24-bit PNG, with no alpha channel". Chrome hands back
 * an RGBA capture, and a palette PNG — while free of transparency — is 8-bit
 * indexed rather than 24-bit. flatten() drops the alpha onto white and
 * palette:false keeps it truecolour, so the file matches the stated spec
 * exactly instead of relying on the uploader being lenient.
 */
const compress = async buffer => {
  if (!sharp) return buffer;
  return sharp(buffer)
    .flatten({ background: '#ffffff' })
    .png({ palette: false, compressionLevel: 9 })
    .toBuffer();
};

const locales = (args.locales || 'en').split(',').map(s => s.trim()).filter(Boolean);
const results = calculateCompoundInterest(INPUT);
let written = 0;

try {
  await waitForPort(PORT);
  const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
  const ws = new WebSocket(list.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((res, rej) => {
    ws.addEventListener('open', res, { once: true });
    ws.addEventListener('error', rej, { once: true });
  });
  const cdp = new Session(ws);
  await cdp.send('Page.enable');
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });

  for (const locale of locales) {
    const t = await stringsFor(locale);
    const m = await methodologyFor(locale);
    const captions = captionsFor(locale);
    const outDir = path.join(outRoot, locale);
    fs.mkdirSync(outDir, { recursive: true });

    for (const [index, card] of CARDS.entries()) {
      const [headline, subtitle] = captions[index];
      const draw = name => PANELS[name]({ t, m, r: results.expected, input: INPUT, locale, locales: LOCALE_TABLE, flags: FLAGS });
      fs.writeFileSync(tmpHtml, page({
        headline, subtitle,
        front: draw(card.front), back: draw(card.back),
        rtl: RTL.has(locale), shade: index, dark: !!card.dark,
      }));

      await cdp.send('Page.navigate', { url: `file:///${tmpHtml.replace(/\\/g, '/')}` });
      await sleep(240);
      await cdp.send('Runtime.evaluate', { expression: `document.fonts.ready.then(() => 'ok')`, awaitPromise: true, returnByValue: true });
      await sleep(120);

      const { data } = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(outDir, `${card.id}.png`), await compress(Buffer.from(data, 'base64')));
      written++;
    }
    console.log(`  ${locale}: ${CARDS.length} store frames`);
  }
  ws.close();
} finally {
  chrome.kill();
}

console.log(`\nWrote ${written} frames to docs/store-assets/play-frames/`);
