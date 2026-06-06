import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { en } from './en';
import { loadLocale, createTranslator, SUPPORTED_LOCALES } from './index';
import type { Locale, TranslationKeys } from './types';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof createTranslator>;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType>({
  locale: 'en',
  setLocale: () => {},
  t: createTranslator(en),
  isLoading: false,
});

export function I18nProvider({ children, defaultLocale = 'en' }: { 
  children: React.ReactNode; 
  defaultLocale?: Locale;
}) {
  const savedLocale = (localStorage.getItem('locale') as Locale) || defaultLocale;
  
  const [locale, setLocaleState] = useState<Locale>(savedLocale);
  const [translations, setTranslations] = useState<TranslationKeys>(en);
  const [isLoading, setIsLoading] = useState(true); // default true to avoid flicker on initial load of other language
  
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
    const localeConfig = SUPPORTED_LOCALES.find(l => l.code === newLocale);
    document.documentElement.dir = localeConfig?.dir || 'ltr';
  }, []);
  
  useEffect(() => {
    let isMounted = true;
    
    // Set initial lang attribute
    document.documentElement.lang = locale;
    const localeConfig = SUPPORTED_LOCALES.find(l => l.code === locale);
    document.documentElement.dir = localeConfig?.dir || 'ltr';

    if (locale === 'en') {
      setTranslations(en);
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    loadLocale(locale).then((loaded) => {
      if (isMounted) {
        setTranslations(loaded);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [locale]);
  
  // Memoize translator so it updates only when translations change
  const t = React.useMemo(() => createTranslator(translations), [translations]);
  
  return (
    <I18nContext.Provider value={{ locale, setLocale, t, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  return useContext(I18nContext);
}
