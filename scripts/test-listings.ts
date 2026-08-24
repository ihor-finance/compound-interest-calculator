/**
 * Checks the Play Store listing texts in docs/store-assets/listings/.
 *
 *   npm run test:listings
 *
 * Play silently truncates anything over its limits, and it counts characters,
 * not bytes — so a Georgian title that looks short can still be rejected. Every
 * limit here is Google's, current as of the 1.08 release:
 *
 *   title              30 characters
 *   short description  80 characters
 *   full description   4000 characters
 *
 * A listing is also required to exist for every language the app itself offers,
 * otherwise a user browsing Play in Kazakh sees an English page for an app that
 * is fully translated into Kazakh.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const listingsDir = path.join(root, 'docs/store-assets/listings');

const LIMITS = { title: 30, short: 80, full: 4000 };

/** SUPPORTED_LOCALES read from source; see scripts/test-locales.ts for why by regex. */
function supportedLocales(): string[] {
  const source = fs.readFileSync(path.join(root, 'src/i18n/index.ts'), 'utf8');
  const block = source.slice(source.indexOf('SUPPORTED_LOCALES'), source.indexOf('] as const;'));
  return [...block.matchAll(/code: '([a-z]+)'/g)].map(m => m[1]);
}

interface Listing { title: string; short: string; full: string; captions: string; }

/** One card per screenshot; the generator refuses a set of any other size. */
const CARD_COUNT = 7;
/** Headlines have to survive being shrunk to a thumbnail, so they stay short. */
const HEADLINE_MAX = 46;
const SUBTITLE_MAX = 72;

/**
 * Pulls the three fields out of a listing file. The body of each section is
 * everything between its heading and the next one, fenced so that trailing
 * spaces — which Play counts — stay visible in review.
 */
function parse(file: string): Listing {
  // Normalised because these files get rewritten by assorted tools on Windows;
  // a stray CR before a fence made every section look missing.
  const text = fs.readFileSync(file, 'utf8').split('\r\n').join('\n');
  const grab = (heading: string): string => {
    const re = new RegExp(`^## ${heading}[^\\n]*\\n+\`\`\`\\n([\\s\\S]*?)\\n\`\`\``, 'm');
    const match = text.match(re);
    if (!match) throw new Error(`${path.basename(file)}: no "## ${heading}" section with a fenced block`);
    return match[1];
  };
  return {
    title: grab('Title'),
    short: grab('Short description'),
    full: grab('Full description'),
    captions: grab('Screenshot captions'),
  };
}

const locales = supportedLocales();
const problems: string[] = [];
let checked = 0;

if (!fs.existsSync(listingsDir)) {
  console.error(`Missing ${path.relative(root, listingsDir)}`);
  process.exit(1);
}

for (const locale of locales) {
  const file = path.join(listingsDir, `${locale}.md`);
  if (!fs.existsSync(file)) {
    problems.push(`${locale}: no listing file`);
    continue;
  }

  let listing: Listing;
  try {
    listing = parse(file);
  } catch (error) {
    problems.push(`${locale}: ${(error as Error).message}`);
    continue;
  }
  checked++;

  for (const [field, limit] of Object.entries(LIMITS) as [keyof Listing, number][]) {
    const value = listing[field];
    // Play counts Unicode code points, so surrogate pairs count once.
    const length = [...value].length;
    if (length > limit) {
      problems.push(`${locale}: ${field} is ${length} characters, limit is ${limit}`);
    }
    if (!value.trim()) {
      problems.push(`${locale}: ${field} is empty`);
    }
    if (value !== value.trim()) {
      problems.push(`${locale}: ${field} has leading or trailing whitespace`);
    }
  }

  // A description that still carries the English placeholder means the file was
  // copied and never translated.
  if (locale !== 'en' && listing.full.includes('WHAT MAKES IT DIFFERENT')) {
    problems.push(`${locale}: full description is still the English text`);
  }

  // Captions: one line per card, `headline|subtitle`, with `||` marking the
  // line break and `*word*` the word drawn in the accent colour. Both halves
  // are capped because the card renders them at a fixed size — an overlong
  // headline wraps to a third line and pushes the phone off the frame.
  const lines = listing.captions.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length !== CARD_COUNT) {
    problems.push(`${locale}: ${lines.length} screenshot captions, expected ${CARD_COUNT}`);
  }
  lines.forEach((line, i) => {
    // `||` is the headline's line break and `|` separates headline from
    // subtitle, so the break has to be parked somewhere the split cannot see it.
    const BREAK = '\u0000';
    const [headline = '', subtitle = ''] = line.replaceAll('||', BREAK).split('|');
    const plain = headline.replace(/\*/g, '');
    if ([...plain].length > HEADLINE_MAX) {
      problems.push(`${locale}: caption ${i + 1} headline is ${[...plain].length} chars, limit is ${HEADLINE_MAX}`);
    }
    if ([...subtitle].length > SUBTITLE_MAX) {
      problems.push(`${locale}: caption ${i + 1} subtitle is ${[...subtitle].length} chars, limit is ${SUBTITLE_MAX}`);
    }
    const stars = (headline.match(/\*/g) || []).length;
    if (stars % 2 !== 0) problems.push(`${locale}: caption ${i + 1} has an unclosed * accent marker`);
  });
}

const orphans = fs.readdirSync(listingsDir)
  .filter(f => f.endsWith('.md'))
  .map(f => f.replace(/\.md$/, ''))
  .filter(code => !locales.includes(code));
for (const code of orphans) problems.push(`${code}: listing exists but the app does not offer that language`);

console.log('─'.repeat(60));
if (problems.length) {
  console.error(`✗ ${problems.length} problem(s) in the store listings:\n`);
  for (const p of problems) console.error(`   ${p}`);
  process.exit(1);
}
console.log(`✓ All ${checked} store listings are within Play's limits.`);
