/**
 * Turns docs/store-assets/listings/*.md into one CSV for Play Console's bulk
 * store-listing import.
 *
 *   npm run assets:listings-csv
 *
 * Play Console takes "a structured file (like a CSV or Google Sheet)" for
 * listings but does not publish the column names anywhere; the import dialog is
 * the only place they appear. The header below is therefore a first guess —
 * rename the columns to match whatever the dialog asks for and run it again.
 * The work this script actually does is the part that would be tedious either
 * way: pulling three fields out of 43 files and mapping our language codes to
 * the ones Play uses.
 *
 * Output: docs/store-assets/listings.csv (gitignored — regenerate, don't commit)
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const listingsDir = path.join(root, 'docs/store-assets/listings');
const outFile = path.join(root, 'docs/store-assets/listings.csv');

/**
 * Our language code → the code Play Console uses.
 *
 * Three of these are not the obvious guess and cost a rejected row each:
 *   he → iw-IL   Play still uses the legacy ISO code for Hebrew
 *   tl → fil     the language is listed as Filipino, not Tagalog
 *   zh → zh-CN   Simplified; zh-TW is a separate listing
 *
 * The ones marked UNSURE are languages this project offers that may simply not
 * be on Play's list. The import will reject those rows and the dropdown in
 * "Manage languages" is the authority — check there before assuming a typo.
 */
const PLAY_LOCALE = {
  en: 'en-US',
  zh: 'zh-CN',
  hi: 'hi-IN',
  es: 'es-ES',
  ar: 'ar',
  fr: 'fr-FR',
  bn: 'bn-BD',
  pt: 'pt-PT',
  id: 'id',
  de: 'de-DE',
  ja: 'ja-JP',
  tr: 'tr-TR',
  vi: 'vi',
  tl: 'fil',
  ko: 'ko-KR',
  it: 'it-IT',
  th: 'th',
  pl: 'pl-PL',
  uk: 'uk',
  uz: 'uz',        // UNSURE
  ro: 'ro',
  nl: 'nl-NL',
  az: 'az-AZ',     // UNSURE
  kk: 'kk',        // UNSURE
  el: 'el-GR',
  sv: 'sv-SE',
  hu: 'hu-HU',
  sr: 'sr',
  cs: 'cs-CZ',
  he: 'iw-IL',
  bg: 'bg',
  sq: 'sq',        // UNSURE
  hr: 'hr',
  da: 'da-DK',
  fi: 'fi-FI',
  no: 'no-NO',
  sk: 'sk',
  be: 'be',        // UNSURE
  ka: 'ka-GE',
  lt: 'lt',
  sl: 'sl',
  lv: 'lv',
  et: 'et',
};

const UNSURE = new Set(['uz', 'az', 'kk', 'sq', 'be']);

/** The first fenced block after a heading that starts with `label`. */
function section(markdown, label) {
  const heading = markdown.indexOf(`## ${label}`);
  if (heading === -1) return null;
  const open = markdown.indexOf('```', heading);
  const close = markdown.indexOf('```', open + 3);
  if (open === -1 || close === -1) return null;
  return markdown.slice(open + 3, close).replace(/^\n/, '').replace(/\n$/, '');
}

/** RFC 4180: quote everything, double any embedded quote. Newlines are fine. */
const cell = (value) => `"${String(value).replace(/"/g, '""')}"`;

const LIMITS = { title: 30, short: 80, full: 4000 };

const rows = [];
const problems = [];

for (const file of fs.readdirSync(listingsDir).filter((f) => f.endsWith('.md')).sort()) {
  const code = file.replace(/\.md$/, '');
  const locale = PLAY_LOCALE[code];
  if (!locale) {
    problems.push(`${code}: no Play locale mapped`);
    continue;
  }

  // Normalised on read. Git is configured with core.autocrlf here, so a
  // checkout hands these files back with CRLF, and the trim in section() then
  // leaves a stray carriage return at each end — which showed up as every
  // title being exactly 3 characters over its limit.
  const raw = fs.readFileSync(path.join(listingsDir, file), 'utf8');
  const markdown = raw.replace(/\r\n/g, '\n');
  const title = section(markdown, 'Title');
  const short = section(markdown, 'Short description');
  const full = section(markdown, 'Full description');

  if (!title || !short || !full) {
    problems.push(`${code}: could not read all three fields`);
    continue;
  }
  // scripts/test-listings.ts already guards these; a second check here costs
  // nothing and this file is the one Play actually reads.
  if (title.length > LIMITS.title) problems.push(`${code}: title ${title.length}/${LIMITS.title}`);
  if (short.length > LIMITS.short) problems.push(`${code}: short ${short.length}/${LIMITS.short}`);
  if (full.length > LIMITS.full) problems.push(`${code}: full ${full.length}/${LIMITS.full}`);

  rows.push({ code, locale, title, short, full });
}

const header = ['locale', 'title', 'short_description', 'full_description'];
const csv = [
  header.join(','),
  ...rows.map((r) => [r.locale, r.title, r.short, r.full].map(cell).join(',')),
].join('\n');

fs.writeFileSync(outFile, '﻿' + csv, 'utf8'); // BOM: Excel opens UTF-8 correctly

console.log(`Wrote ${rows.length} listings to docs/store-assets/listings.csv\n`);
console.log('Longest fields:');
for (const key of ['title', 'short', 'full']) {
  const worst = rows.reduce((a, b) => (b[key].length > a[key].length ? b : a));
  console.log(`  ${key.padEnd(6)} ${String(worst[key].length).padStart(4)}/${LIMITS[key]}  (${worst.code})`);
}
const unsure = rows.filter((r) => UNSURE.has(r.code));
if (unsure.length) {
  console.log(`\nVerify these exist in Play's language list: ${unsure.map((r) => `${r.code}→${r.locale}`).join(', ')}`);
}
if (problems.length) {
  console.error(`\n✗ ${problems.length} problem(s):`);
  for (const p of problems) console.error(`   ${p}`);
  process.exit(1);
}
