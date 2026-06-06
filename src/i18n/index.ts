import { en } from './en';
export type TranslationKeys = typeof en;
export type Locale = typeof SUPPORTED_LOCALES[number]['code'];

export const SUPPORTED_LOCALES = [
  { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳', dir: 'ltr' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
  { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'pt', name: 'Português', flag: '🇵🇹', dir: 'ltr' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
  { code: 'ko', name: '한국어', flag: '🇰🇷', dir: 'ltr' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦', dir: 'ltr' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱', dir: 'ltr' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', dir: 'ltr' },
  { code: 'ro', name: 'Română', flag: '🇷🇴', dir: 'ltr' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺', dir: 'ltr' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷', dir: 'ltr' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿', dir: 'ltr' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪', dir: 'ltr' },
  { code: 'sr', name: 'Srpski', flag: '🇷🇸', dir: 'ltr' },
  { code: 'bg', name: 'Български', flag: '🇧🇬', dir: 'ltr' },
  { code: 'sq', name: 'Shqip', flag: '🇦🇱', dir: 'ltr' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰', dir: 'ltr' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷', dir: 'ltr' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮', dir: 'ltr' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰', dir: 'ltr' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴', dir: 'ltr' },
  { code: 'ka', name: 'ქართული', flag: '🇬🇪', dir: 'ltr' },
  { code: 'lt', name: 'Lietuvių', flag: '🇱🇹', dir: 'ltr' },
  { code: 'sl', name: 'Slovenščina', flag: '🇸🇮', dir: 'ltr' },
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻', dir: 'ltr' },
  { code: 'et', name: 'Eesti', flag: '🇪🇪', dir: 'ltr' },
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
