import { en } from './en';
export type TranslationKeys = typeof en;
export type Locale = typeof SUPPORTED_LOCALES[number]['code'];

/**
 * Every language the app offers, ordered by how many people speak it worldwide
 * (first language plus second language, rounded). This is the order the picker
 * shows, so English is always first and the long tail of small languages sits at
 * the bottom where it belongs.
 *
 * The order is data, not preference: adding a language means slotting it in by
 * speaker count, not appending it. `dir` drives the document's text direction.
 */
export const SUPPORTED_LOCALES = [
  { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },            // 1.5B
  { code: 'zh', name: '简体中文', flag: '🇨🇳', dir: 'ltr' },              // 1.14B
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },              // 610M
  { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },            // 560M
  { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },            // 420M
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },           // 310M
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩', dir: 'ltr' },              // 285M
  { code: 'pt', name: 'Português', flag: '🇵🇹', dir: 'ltr' },          // 265M
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩', dir: 'ltr' },   // 200M
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },            // 135M
  { code: 'ja', name: '日本語', flag: '🇯🇵', dir: 'ltr' },                // 125M
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },             // 90M
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳', dir: 'ltr' },         // 86M
  { code: 'tl', name: 'Filipino', flag: '🇵🇭', dir: 'ltr' },           // 85M
  { code: 'ko', name: '한국어', flag: '🇰🇷', dir: 'ltr' },                // 82M
  { code: 'it', name: 'Italiano', flag: '🇮🇹', dir: 'ltr' },           // 68M
  { code: 'th', name: 'ไทย', flag: '🇹🇭', dir: 'ltr' },                 // 61M
  { code: 'pl', name: 'Polski', flag: '🇵🇱', dir: 'ltr' },             // 41M
  { code: 'uk', name: 'Українська', flag: '🇺🇦', dir: 'ltr' },         // 39M
  { code: 'uz', name: 'Oʻzbek', flag: '🇺🇿', dir: 'ltr' },             // 36M
  { code: 'ro', name: 'Română', flag: '🇷🇴', dir: 'ltr' },             // 25M
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', dir: 'ltr' },         // 25M
  { code: 'az', name: 'Azərbaycan', flag: '🇦🇿', dir: 'ltr' },         // 24M
  { code: 'kk', name: 'Қазақша', flag: '🇰🇿', dir: 'ltr' },            // 17M
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷', dir: 'ltr' },           // 13.5M
  { code: 'sv', name: 'Svenska', flag: '🇸🇪', dir: 'ltr' },            // 13M
  { code: 'hu', name: 'Magyar', flag: '🇭🇺', dir: 'ltr' },             // 13M
  { code: 'sr', name: 'Srpski', flag: '🇷🇸', dir: 'ltr' },             // 12M
  { code: 'cs', name: 'Čeština', flag: '🇨🇿', dir: 'ltr' },            // 11M
  { code: 'he', name: 'עברית', flag: '🇮🇱', dir: 'rtl' },              // 9M
  { code: 'bg', name: 'Български', flag: '🇧🇬', dir: 'ltr' },          // 8M
  { code: 'sq', name: 'Shqip', flag: '🇦🇱', dir: 'ltr' },              // 7.5M
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷', dir: 'ltr' },           // 6.8M
  { code: 'da', name: 'Dansk', flag: '🇩🇰', dir: 'ltr' },              // 6M
  { code: 'fi', name: 'Suomi', flag: '🇫🇮', dir: 'ltr' },              // 5.4M
  { code: 'no', name: 'Norsk', flag: '🇳🇴', dir: 'ltr' },              // 5.3M
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰', dir: 'ltr' },         // 5.2M
  { code: 'be', name: 'Беларуская', flag: '🇧🇾', dir: 'ltr' },         // 5M
  { code: 'ka', name: 'ქართული', flag: '🇬🇪', dir: 'ltr' },            // 4M
  { code: 'lt', name: 'Lietuvių', flag: '🇱🇹', dir: 'ltr' },           // 3M
  { code: 'sl', name: 'Slovenščina', flag: '🇸🇮', dir: 'ltr' },        // 2.5M
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻', dir: 'ltr' },           // 1.9M
  { code: 'et', name: 'Eesti', flag: '🇪🇪', dir: 'ltr' },              // 1.1M
] as const;

const loadedLocales: Partial<Record<string, TranslationKeys>> = { en };

export async function loadLocale(locale: string): Promise<TranslationKeys> {
  if (loadedLocales[locale]) return loadedLocales[locale]!;
  try {
    const module = await import(`./locales/${locale}.ts`);
    loadedLocales[locale] = module[locale] || module.default;
    return loadedLocales[locale]!;
  } catch {
    console.warn(`Locale "${locale}" not found, falling back to English`);
    return en;
  }
}

// Отримати значення за вкладеним ключем: t('hero.title') або t.hero.title
export function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((acc, key) => acc?.[key], obj) ?? path;
}

// Підстановка змінних: t('hero.title', { years: 10 }) → "...через 10 років"
export function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return Object.entries(vars).reduce(
    (str, [key, val]) => str.replace(new RegExp(`\\{${key}\\}`, 'g'), String(val)),
    template
  );
}

// Головна функція перекладу
export function createTranslator(translations: TranslationKeys) {
  const translatorFn = function t(key: string, vars?: Record<string, string | number>): string {
    const value = getNestedValue(translations, key);
    return interpolate(value, vars);
  };
  
  // Attach all top-level keys to the function so `t.form.initialDeposit` works
  Object.assign(translatorFn, translations);
  
  // Додаємо Proxy для безпечного fallback
  return new Proxy(translatorFn as any, {
    get(target, prop: string) {
      if (prop in target) {
        if (typeof target[prop] === 'object' && target[prop] !== null) {
          // Якщо це вкладений об'єкт (напр. t.form), ми маємо повертати його, 
          // але з підтримкою змінних, якщо потрібно (наразі змінні підтримуються тільки через t(key, vars)).
          // Для простоти повертаємо об'єкт як є, бо в компонентах пишуть: {t.form.years}
          return target[prop];
        }
        return target[prop];
      }
      return en[prop as keyof typeof en] || prop;
    }
  }) as typeof translatorFn & TranslationKeys;
}

export { en };
