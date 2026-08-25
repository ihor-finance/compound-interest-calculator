import type { LegalContent } from './types';
import { en } from './en';

/**
 * Languages with a translated pair of legal documents. Anything not listed
 * falls back to English rather than rendering an empty page.
 *
 * The list is deliberately the full set the app offers: a user browsing in
 * Kazakh should not meet an English privacy policy for an app that is otherwise
 * entirely in Kazakh, and Play checks these pages during review.
 */
const TRANSLATED = new Set([
  'ar', 'az', 'be', 'bg', 'bn', 'cs', 'da', 'de', 'el', 'es', 'et', 'fi', 'fr',
  'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'ka', 'kk', 'ko', 'lt', 'lv', 'nl',
  'no', 'pl', 'pt', 'ro', 'sk', 'sl', 'sq', 'sr', 'sv', 'th', 'tl', 'tr', 'uk',
  'uz', 'vi', 'zh',
]);

const loaded: Record<string, LegalContent> = { en };

export async function loadLegal(locale: string): Promise<LegalContent> {
  if (loaded[locale]) return loaded[locale];
  if (!TRANSLATED.has(locale)) return en;

  try {
    const module = await import(`./locales/${locale}.ts`);
    const content: LegalContent = module[locale] || module.default;
    loaded[locale] = content;
    return content;
  } catch {
    console.warn(`Legal text for "${locale}" is missing, showing English.`);
    return en;
  }
}

export type { LegalContent, LegalDocument, LegalSection } from './types';
export { en };
