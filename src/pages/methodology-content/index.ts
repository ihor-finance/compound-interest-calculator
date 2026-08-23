import type { MethodologyContent } from './types';
import { en } from './en';

/**
 * Locales that have a translated methodology page. Anything not listed falls
 * back to English rather than rendering an empty page.
 */
const TRANSLATED = new Set([
  'ar', 'az', 'be', 'bg', 'bn', 'cs', 'da', 'de', 'el', 'es', 'et', 'fi', 'fr',
  'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'ka', 'kk', 'ko', 'lt', 'lv', 'nl',
  'no', 'pl', 'pt', 'ro', 'sk', 'sl', 'sq', 'sr', 'sv', 'th', 'tl', 'tr', 'uk',
  'uz', 'vi', 'zh',
]);

const loaded: Record<string, MethodologyContent> = { en };

export async function loadMethodology(locale: string): Promise<MethodologyContent> {
  if (loaded[locale]) return loaded[locale];
  if (!TRANSLATED.has(locale)) return en;

  try {
    const module = await import(`./locales/${locale}.ts`);
    const content: MethodologyContent = module[locale] || module.default;
    loaded[locale] = content;
    return content;
  } catch {
    console.warn(`Methodology text for "${locale}" is missing, showing English.`);
    return en;
  }
}

export type { MethodologyContent };
export { en };
