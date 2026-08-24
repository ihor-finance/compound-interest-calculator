import { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown, Sun, Moon } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import { AdSlot } from './AdSlot';
import { useTranslation } from '../i18n/useTranslation';
import type { Locale } from '../i18n/types';
import { SUPPORTED_LOCALES } from '../i18n';
import '../App.css';
import { GB, CN, IN, ES, SA, FR, PT, JP, DE, TR, KR, IT, UA, PL, NL, RO, HU, GR, CZ, SE, RS, BG, AL, DK, HR, FI, SK, NO, GE, LT, SI, LV, EE, AZ, BY, BD, IL, ID, KZ, TH, PH, UZ, VN } from 'country-flag-icons/react/3x2';

interface LayoutProps {
  children: ReactNode;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}
/**
 * Flags only. Language codes, native names and text direction live in
 * SUPPORTED_LOCALES so the two lists can never drift apart — a language present
 * in one and missing from the other used to be an easy mistake to make.
 */
const FLAGS: Record<string, React.ReactElement> = {
  ar: <SA className="flag-icon" />, az: <AZ className="flag-icon" />, be: <BY className="flag-icon" />,
  bg: <BG className="flag-icon" />, bn: <BD className="flag-icon" />, cs: <CZ className="flag-icon" />,
  da: <DK className="flag-icon" />, de: <DE className="flag-icon" />, el: <GR className="flag-icon" />,
  en: <GB className="flag-icon" />, es: <ES className="flag-icon" />, et: <EE className="flag-icon" />,
  fi: <FI className="flag-icon" />, fr: <FR className="flag-icon" />, he: <IL className="flag-icon" />,
  hi: <IN className="flag-icon" />, hr: <HR className="flag-icon" />, hu: <HU className="flag-icon" />,
  id: <ID className="flag-icon" />, it: <IT className="flag-icon" />, ja: <JP className="flag-icon" />,
  ka: <GE className="flag-icon" />, kk: <KZ className="flag-icon" />, ko: <KR className="flag-icon" />,
  lt: <LT className="flag-icon" />, lv: <LV className="flag-icon" />, nl: <NL className="flag-icon" />,
  no: <NO className="flag-icon" />, pl: <PL className="flag-icon" />, pt: <PT className="flag-icon" />,
  ro: <RO className="flag-icon" />, sk: <SK className="flag-icon" />, sl: <SI className="flag-icon" />,
  sq: <AL className="flag-icon" />, sr: <RS className="flag-icon" />, sv: <SE className="flag-icon" />,
  th: <TH className="flag-icon" />, tl: <PH className="flag-icon" />, tr: <TR className="flag-icon" />,
  uk: <UA className="flag-icon" />, uz: <UZ className="flag-icon" />, vi: <VN className="flag-icon" />,
  zh: <CN className="flag-icon" />,
};
export const Layout = ({ children, theme, setTheme }: LayoutProps) => {
  const { locale: lang, setLocale: setLang, t } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const logoText = { title: t.app.title || 'Compound Interest', subtitle: t.app.subtitle || 'Calculator' };

  // Shown in SUPPORTED_LOCALES order, which is by speaker count worldwide, so
  // English leads and the widely spoken languages are reachable without
  // scrolling. The language in use is not pulled to the top — that would push
  // English down — it is marked with the `active` class where it sits.
  const languages = SUPPORTED_LOCALES;

  return (
    <div className="layout">
      <header className="top-header">
        <div className="logo-section">
          <LogoIcon />
          <div>
            <h1 className="logo-title">{logoText.title}</h1>
            <p className="logo-subtitle">{logoText.subtitle}</p>
          </div>
        </div>
        
        <div className="header-actions">
          <div className="selector-wrapper" ref={dropdownRef} onClick={() => setIsLangOpen(!isLangOpen)} style={{ position: 'relative' }}>
            <div className="selector-trigger">
              <span className="flag-container">{FLAGS[lang]}</span>
              <ChevronDown size={14} className="text-muted" />
            </div>
            {isLangOpen && (
              <div className="custom-dropdown-menu">
                {languages.map(l => (
                  <div
                    key={l.code}
                    className={`custom-dropdown-item ${l.code === lang ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLang(l.code as Locale);
                      setIsLangOpen(false);
                    }}
                  >
                    <span className="dropdown-flag">{FLAGS[l.code]}</span>
                    <span>{l.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Two real buttons rather than one toggle: tapping the sun always
              means light and the moon always means dark, so you never have to
              work out which state you are in first. The thumb slides between
              them; the icons are SVG because emoji render differently on every
              Android version and were jumping around as the state changed. */}
          <div className="theme-switch" data-theme={theme} role="group" aria-label={t.app.theme || 'Theme'}>
            <span className="theme-switch__thumb" aria-hidden="true" />
            <button
              type="button"
              className={`theme-switch__option ${theme === 'light' ? 'is-active' : ''}`}
              aria-pressed={theme === 'light'}
              aria-label={t.app.themeLight || 'Light theme'}
              onClick={() => setTheme('light')}
            >
              <Sun size={16} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              className={`theme-switch__option ${theme === 'dark' ? 'is-active' : ''}`}
              aria-pressed={theme === 'dark'}
              aria-label={t.app.themeDark || 'Dark theme'}
              onClick={() => setTheme('dark')}
            >
              <Moon size={16} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </header>
      
      <main className="main-content">
        {children}
      </main>

      {/* Anchored ad shelf. Renders nothing until ads are configured — see docs/ADS.md */}
      <AdSlot placement="bottom-anchor" />

      <style>{`
        .flag-icon { width: 24px !important; height: 16px !important; min-width: 24px !important; display: block; border-radius: 2px; }
        .flag-container { display: flex; align-items: center; justify-content: center; width: 32px; height: 24px; border-radius: 6px; overflow: hidden; flex-shrink: 0; }
      `}</style>
    </div>
  );
};
