import { useTranslation } from '../i18n/useTranslation';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // For basic styles

import { LogoIcon } from '../components/LogoIcon';

interface Props {
  children: React.ReactNode;
  
}

export const LegalPageLayout = ({ children}: Props) => {
  // Scroll to top when loading the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  
  return (
    <div className="legal-page-container">
      <header className="legal-header">
        <div className="legal-header-content">
          <Link to="/" className="back-button">
            &larr; {t.legal.backToCalculator || 'Back to calculator'}
          </Link>
          <div className="legal-brand">
            <span className="brand-icon"><LogoIcon width={24} height={24} /></span>
            <span className="brand-name">{t.app.title || 'Compound Interest'}</span>
          </div>
        </div>
      </header>
      
      <main className="legal-main">
        <div className="legal-content-wrapper">
          {children}
        </div>
      </main>
    </div>
  );
};
