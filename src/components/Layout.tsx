import { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import { AdSlot } from './AdSlot';
import { useTranslation } from '../i18n/useTranslation';
import type { Locale } from '../i18n/types';
import '../App.css';
import { GB, CN, IN, ES, SA, FR, PT, JP, DE, TR, KR, IT, UA, PL, NL, RO, HU, GR, CZ, SE, RS, BG, AL, DK, HR, FI, SK, NO, GE, LT, SI, LV, EE } from 'country-flag-icons/react/3x2';

interface LayoutProps {
  children: ReactNode;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
const LANGUAGES = [
  { code: 'en', label: 'English', icon: <GB title="English" className="flag-icon" /> },
  { code: 'zh', label: '简体中文', icon: <CN title="Chinese" className="flag-icon" /> },
  { code: 'hi', label: 'हिन्दी', icon: <IN title="Hindi" className="flag-icon" /> },
  { code: 'es', label: 'Español', icon: <ES title="Spanish" className="flag-icon" /> },
  { code: 'ar', label: 'العربية', icon: <SA title="Arabic" className="flag-icon" /> },
  { code: 'fr', label: 'Français', icon: <FR title="French" className="flag-icon" /> },
  { code: 'pt', label: 'Português', icon: <PT title="Portuguese" className="flag-icon" /> },
  { code: 'ja', label: '日本語', icon: <JP title="Japanese" className="flag-icon" /> },
  { code: 'de', label: 'Deutsch', icon: <DE title="German" className="flag-icon" /> },
  { code: 'tr', label: 'Türkçe', icon: <TR title="Turkish" className="flag-icon" /> },
  { code: 'ko', label: '한국어', icon: <KR title="Korean" className="flag-icon" /> },
  { code: 'it', label: 'Italiano', icon: <IT title="Italian" className="flag-icon" /> },
  { code: 'uk', label: 'Українська', icon: <UA title="Ukrainian" className="flag-icon" /> },
  { code: 'pl', label: 'Polski', icon: <PL title="Polish" className="flag-icon" /> },
  { code: 'nl', label: 'Nederlands', icon: <NL title="Dutch" className="flag-icon" /> },
  { code: 'ro', label: 'Română', icon: <RO title="Romanian" className="flag-icon" /> },
  { code: 'hu', label: 'Magyar', icon: <HU title="Hungarian" className="flag-icon" /> },
  { code: 'el', label: 'Ελληνικά', icon: <GR title="Greek" className="flag-icon" /> },
  { code: 'cs', label: 'Čeština', icon: <CZ title="Czech" className="flag-icon" /> },
  { code: 'sv', label: 'Svenska', icon: <SE title="Swedish" className="flag-icon" /> },
  { code: 'sr', label: 'Srpski', icon: <RS title="Serbian" className="flag-icon" /> },
  { code: 'bg', label: 'Български', icon: <BG title="Bulgarian" className="flag-icon" /> },
  { code: 'sq', label: 'Shqip', icon: <AL title="Albanian" className="flag-icon" /> },
  { code: 'da', label: 'Dansk', icon: <DK title="Danish" className="flag-icon" /> },
  { code: 'hr', label: 'Hrvatski', icon: <HR title="Croatian" className="flag-icon" /> },
  { code: 'fi', label: 'Suomi', icon: <FI title="Finnish" className="flag-icon" /> },
  { code: 'sk', label: 'Slovenčina', icon: <SK title="Slovak" className="flag-icon" /> },
  { code: 'no', label: 'Norsk', icon: <NO title="Norwegian" className="flag-icon" /> },
  { code: 'ka', label: 'ქართული', icon: <GE title="Georgian" className="flag-icon" /> },
  { code: 'lt', label: 'Lietuvių', icon: <LT title="Lithuanian" className="flag-icon" /> },
  { code: 'sl', label: 'Slovenščina', icon: <SI title="Slovenian" className="flag-icon" /> },
  { code: 'lv', label: 'Latviešu', icon: <LV title="Latvian" className="flag-icon" /> },
  { code: 'et', label: 'Eesti', icon: <EE title="Estonian" className="flag-icon" /> }
];
export const Layout = ({ children, theme, toggleTheme }: LayoutProps) => {
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
              <span className="flag-container">{LANGUAGES.find(l => l.code === lang)?.icon}</span>
              <ChevronDown size={14} className="text-muted" />
            </div>
            {isLangOpen && (
              <div className="custom-dropdown-menu">
                {LANGUAGES.map(l => (
                  <div 
                    key={l.code} 
                    className={`custom-dropdown-item ${l.code === lang ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLang(l.code as Locale);
                      setIsLangOpen(false);
                    }}
                  >
                    <span className="dropdown-flag">{l.icon}</span>
                    <span>{l.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="theme-toggle-group">
            <button className={`theme-btn ${theme === 'light' ? 'active' : ''}`} onClick={() => theme !== 'light' && toggleTheme()}>☀️</button>
            <button className={`theme-btn ${theme === 'dark' ? 'active' : ''}`} onClick={() => theme !== 'dark' && toggleTheme()}>🌙</button>
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
