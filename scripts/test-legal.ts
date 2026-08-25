/**
 * Checks the privacy policy and terms of use in src/pages/legal-content/.
 *
 *   npm run test:legal
 *
 * These pages used to live as flat key maps inside the page components, in 14
 * of the app's 43 languages, with no way to notice the gap. Play reads them
 * during review and a user browsing in Georgian should not be shown English
 * legalese for an app that is otherwise entirely translated, so this walks
 * every offered language and proves both documents are there and complete.
 *
 * It also guards two things that are easy to get wrong and expensive to get
 * wrong: every document has to name the operator (Redempsly is a trade name,
 * not a legal person, and Play verifies the developer against real documents),
 * and none of them may claim the app uses analytics — it makes no network
 * requests at all, and saying otherwise contradicts the Data Safety
 * declaration filed alongside the release.
 */
import fs from 'node:fs';
import path from 'node:path';
import { en } from '../src/pages/legal-content/en.ts';
import { PRIVACY_SECTIONS, TERMS_SECTIONS } from '../src/pages/legal-content/types.ts';
import type { LegalContent, LegalDocument } from '../src/pages/legal-content/types.ts';

const root = path.resolve(import.meta.dirname, '..');
const localesDir = path.join(root, 'src/pages/legal-content/locales');

/** SUPPORTED_LOCALES read from source; see scripts/test-locales.ts for why by regex. */
function supportedLocales(): string[] {
  const source = fs.readFileSync(path.join(root, 'src/i18n/index.ts'), 'utf8');
  const block = source.slice(source.indexOf('SUPPORTED_LOCALES'), source.indexOf('] as const;'));
  return [...block.matchAll(/code: '([a-z]+)'/g)].map(m => m[1]);
}

/** The operator has to be identifiable; the surname is the anchor. */
const OPERATOR_NAMES = ['Pokhyton', 'Похитон', 'פוחיטון', 'بوخيتون'];

/** Claims the app cannot support, in any language's spelling of them. */
const FORBIDDEN = [/google analytics/i, /\bgtag\b/i, /\bfirebase\b/i];

const problems: string[] = [];

function checkDocument(locale: string, name: string, doc: LegalDocument, expectedSections: number) {
  if (!doc) {
    problems.push(`${locale}: ${name} is missing`);
    return;
  }
  if (!doc.title?.trim()) problems.push(`${locale}: ${name} has no title`);
  if (!doc.updated?.trim()) problems.push(`${locale}: ${name} has no "last updated" line`);

  const sections = doc.sections ?? [];
  if (sections.length !== expectedSections) {
    problems.push(`${locale}: ${name} has ${sections.length} sections, expected ${expectedSections}`);
  }

  sections.forEach((section, index) => {
    const where = `${locale}: ${name} section ${index + 1}`;
    if (!section.heading?.trim()) problems.push(`${where} has no heading`);
    if (!section.paragraphs?.length) problems.push(`${where} has no paragraphs`);
    section.paragraphs?.forEach((paragraph, k) => {
      if (!paragraph.trim()) problems.push(`${where} paragraph ${k + 1} is empty`);
    });
    section.list?.forEach((item, k) => {
      if (!item.trim()) problems.push(`${where} list item ${k + 1} is empty`);
    });
  });

  // The English list lengths are the contract; a translation that drops a
  // bullet drops a legal statement with it.
  const reference = (en as LegalContent)[name === 'privacy' ? 'privacy' : 'terms'];
  reference.sections.forEach((refSection, index) => {
    const section = sections[index];
    if (!section) return;
    const refList = refSection.list?.length ?? 0;
    const gotList = section.list?.length ?? 0;
    if (refList !== gotList) {
      problems.push(`${where(index)} has ${gotList} list items, English has ${refList}`);
    }
    if (!!refSection.lead !== !!section.lead) {
      problems.push(`${where(index)} ${refSection.lead ? 'is missing its' : 'has an unexpected'} bold lead line`);
    }
    function where(i: number) { return `${locale}: ${name} section ${i + 1}`; }
  });

  const text = JSON.stringify(doc);
  if (!OPERATOR_NAMES.some(operator => text.includes(operator))) {
    problems.push(`${locale}: ${name} never names the operator`);
  }
  for (const claim of FORBIDDEN) {
    if (claim.test(text)) {
      problems.push(`${locale}: ${name} claims "${claim.source}" — the app makes no network requests`);
    }
  }
}

const locales = supportedLocales();
let checked = 0;

for (const locale of locales) {
  let content: LegalContent;
  if (locale === 'en') {
    content = en;
  } else {
    const file = path.join(localesDir, `${locale}.ts`);
    if (!fs.existsSync(file)) {
      problems.push(`${locale}: no legal file`);
      continue;
    }
    try {
      const module = await import(`../src/pages/legal-content/locales/${locale}.ts`);
      content = module[locale] || module.default;
    } catch (error) {
      problems.push(`${locale}: failed to load — ${(error as Error).message}`);
      continue;
    }
  }
  checked++;
  checkDocument(locale, 'privacy', content?.privacy, PRIVACY_SECTIONS);
  checkDocument(locale, 'terms', content?.terms, TERMS_SECTIONS);
}

console.log('─'.repeat(60));
if (problems.length) {
  console.error(`✗ ${problems.length} problem(s) in the legal pages:\n`);
  for (const p of problems.slice(0, 40)) console.error(`   ${p}`);
  if (problems.length > 40) console.error(`   … and ${problems.length - 40} more`);
  process.exit(1);
}
console.log(`✓ Privacy policy and terms complete in all ${checked} languages.`);
