/**
 * Builds standalone HTML copies of the privacy policy and terms of use.
 *
 *   npm run assets:legal-pages
 *
 * Google Play wants a public URL for the privacy policy, and the app's own
 * /privacy route is a hash route rendered by JavaScript: a person opening it
 * sees the policy, but the URL carries a "#" and the server returns the same
 * shell for every route. These files are plain HTML at a plain path, readable
 * with scripts switched off, so whatever opens them — a reviewer, a crawler, a
 * checker — reads the actual words.
 *
 * The text is not retyped here. It is read from src/pages/legal-content, the
 * same source the app renders, so the published policy cannot drift from the
 * one in the app. scripts/test-legal.ts fails the build if these files are
 * older than that source.
 *
 * Output goes to public/, which Vite copies into dist/ untouched, so the deploy
 * workflow publishes them without knowing they exist.
 */
import fs from 'node:fs';
import path from 'node:path';
import { en } from '../src/pages/legal-content/en.ts';

const root = path.resolve(import.meta.dirname, '..');
const outDir = path.join(root, 'public');

/**
 * Read from source rather than imported, for the same reason
 * scripts/test-legal.ts does it: src/i18n/index.ts imports './en' without an
 * extension, which the app's bundler resolves and Node's ESM loader does not.
 */
function supportedLocales() {
  const source = fs.readFileSync(path.join(root, 'src/i18n/index.ts'), 'utf8');
  const block = source.slice(source.indexOf('SUPPORTED_LOCALES'), source.indexOf('] as const;'));
  const pattern = /code: '([a-z-]+)', name: '([^']+)', flag: '[^']*', dir: '(ltr|rtl)'/g;
  return [...block.matchAll(pattern)].map(([, code, name, dir]) => ({ code, name, dir }));
}

const SUPPORTED_LOCALES = supportedLocales();

/** The app itself, for the "back to the calculator" link. */
const APP_URL = 'https://ihor-finance.github.io/compound-interest-calculator/';

const escape = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Every language's copy of both documents, English first. */
export async function loadAll() {
  const all = new Map([['en', en]]);
  for (const { code } of SUPPORTED_LOCALES) {
    if (code === 'en') continue;
    const module = await import(`../src/pages/legal-content/locales/${code}.ts`);
    all.set(code, module[code] ?? module.default);
  }
  return all;
}

function renderDocument(doc) {
  const parts = [`<h2>${escape(doc.title)}</h2>`, `<p class="updated">${escape(doc.updated)}</p>`];
  for (const section of doc.sections) {
    parts.push(`<h3>${escape(section.heading)}</h3>`);
    if (section.lead) parts.push(`<p><strong>${escape(section.lead)}</strong></p>`);
    section.paragraphs.forEach((paragraph, index) => {
      parts.push(`<p>${escape(paragraph)}</p>`);
      // The list belongs after the first paragraph, which introduces it —
      // the same order the app's LegalDocument component uses.
      if (index === 0 && section.list) {
        parts.push('<ul>' + section.list.map((item) => `<li>${escape(item)}</li>`).join('') + '</ul>');
      }
    });
  }
  return parts.join('\n');
}

const STYLE = `
:root {
  --bg: #ffffff; --fg: #17212e; --muted: #5b6776; --rule: #e5e9ee; --link: #0f7a38;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #0e1419; --fg: #f2f4f7; --muted: #a6b0bc; --rule: #2a333e; --link: #6fd79b; }
}
* { box-sizing: border-box; }
body {
  margin: 0; padding: 32px 20px 64px; background: var(--bg); color: var(--fg);
  font: 16px/1.65 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
}
main { max-width: 720px; margin: 0 auto; }
h1 { font-size: 26px; line-height: 1.25; margin: 0 0 4px; }
h2 { font-size: 21px; line-height: 1.3; margin: 0 0 4px; }
h3 { font-size: 17px; margin: 28px 0 8px; }
p { margin: 0 0 14px; color: var(--muted); }
p.updated { font-size: 14px; margin-bottom: 24px; }
strong { color: var(--fg); }
ul { margin: 0 0 14px; padding-inline-start: 22px; color: var(--muted); }
li { margin-bottom: 6px; }
a { color: var(--link); }
.site { font-size: 14px; color: var(--muted); margin: 0 0 28px; }
hr { border: 0; border-top: 1px solid var(--rule); margin: 40px 0; }
details { border-top: 1px solid var(--rule); padding: 14px 0; }
details[open] { padding-bottom: 28px; }
summary { cursor: pointer; font-weight: 600; color: var(--fg); }
/* Flex rather than inline text. The links are generated with no whitespace
   between them and each is nowrap, so an inline row has nowhere to break and
   runs 1900px off the side of the page. */
.langs { display: flex; flex-wrap: wrap; gap: 4px 14px; font-size: 14px; margin: 0 0 32px; }
.langs a { white-space: nowrap; }
`;

function renderPage(which, all) {
  const title = all.get('en')[which].title;
  const sections = [];

  for (const { code, name, dir } of SUPPORTED_LOCALES) {
    const doc = all.get(code)?.[which];
    if (!doc) continue;
    const body = renderDocument(doc);
    if (code === 'en') {
      // English stays open: it is what a Play reviewer reads, and it should be
      // on screen without anyone having to work out that the rest fold out.
      sections.push(`<section id="en" lang="en" dir="ltr">\n${body}\n</section>`);
    } else {
      sections.push(
        `<details id="${code}" lang="${code}" dir="${dir}">\n` +
          `<summary>${escape(name)} — ${escape(doc.title)}</summary>\n${body}\n</details>`
      );
    }
  }

  const langLinks = SUPPORTED_LOCALES.map(
    ({ code, name }) => `<a href="#${code}">${escape(name)}</a>`
  ).join('');

  const other = which === 'privacy' ? ['terms.html', 'Terms of Use'] : ['privacy.html', 'Privacy Policy'];

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)} — Compound Interest Calculator</title>
<meta name="description" content="${escape(title)} for the Compound Interest Calculator, in ${SUPPORTED_LOCALES.length} languages.">
<meta name="robots" content="index, follow">
<style>${STYLE}</style>
</head>
<body>
<main>
<h1>Compound Interest Calculator</h1>
<p class="site">${escape(title)} · <a href="${APP_URL}">Open the calculator</a> · <a href="${other[0]}">${other[1]}</a></p>
<nav class="langs" aria-label="Languages">${langLinks}</nav>
${sections.join('\n\n')}
<hr>
<p class="site">Operated by Ihor Pokhyton, a sole proprietor registered in Ukraine, trading as Redempsly. Questions: <a href="mailto:pokhyton.i@gmail.com">pokhyton.i@gmail.com</a></p>
</main>
</body>
</html>
`;
}

/** Exported so scripts/test-legal.ts can prove the files on disk are current. */
export async function buildPages() {
  const all = await loadAll();
  return {
    'privacy.html': renderPage('privacy', all),
    'terms.html': renderPage('terms', all),
  };
}

// Only write when run directly; the test imports buildPages and compares.
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  const pages = await buildPages();
  for (const [name, html] of Object.entries(pages)) {
    const target = path.join(outDir, name);
    fs.writeFileSync(target, html, 'utf8');
    console.log(`  ${name}  ${(html.length / 1024).toFixed(0)} KB`);
  }
  console.log(`\n✓ Wrote ${Object.keys(pages).length} pages for ${SUPPORTED_LOCALES.length} languages.`);
}
