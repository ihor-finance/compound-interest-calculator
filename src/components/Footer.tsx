import { useTranslation } from '../i18n/useTranslation';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

interface Props {
  
  variant?: 'calculator' | 'legal';
}

import { LogoIcon } from './LogoIcon';

const LegalPageFooter = ({}: { }) => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const copyStr = t.footer.copyright?.replace('{year}', year.toString()) || `© ${year} All rights reserved.`;

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-icon"><LogoIcon width={24} height={24} /></span>
            <span className="brand-name">{t.app.title || 'Compound Interest'}</span>
          </div>
          <div className="footer-developer">
            <span className="dev-label">{t.footer.developer || 'Developed by'}</span>
            <a href="https://redempsly.com" target="_blank" rel="noopener noreferrer" className="dev-link">Redempsly</a>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-links">
            <Link to="/privacy">{t.footer.privacy || 'Privacy Policy'}</Link>
            <Link to="/terms">{t.footer.terms || 'Terms of Use'}</Link>
            <Link to="/cookies">{t.footer.cookies || 'Cookie Policy'}</Link>
            <Link to="/offer">{t.footer.offer || 'Public Offer'}</Link>
          </div>
          
          <div className="footer-legal">
            <p className="copyright">{copyStr}</p>
            <p className="disclaimer">{t.disclaimer.text || 'This calculator is for informational purposes only and does not constitute financial advice.'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CalcFooter = ({}: { }) => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  
  return (
    <footer className="calc-footer">
      <div className="calc-footer__main">
        <span className="calc-footer__brand">{t.app.title || 'Compound Interest'}</span>
        <span className="calc-footer__sep">·</span>
        <span className="calc-footer__dev">
          {t.footer.developer || 'Developed by'} <a href="https://redempsly.com" target="_blank" rel="noopener noreferrer">Redempsly</a>
        </span>
        <span className="calc-footer__sep">·</span>
        <span className="calc-footer__copy">© {year}</span>
      </div>
      
      <nav className="calc-footer__links">
        <Link to="/privacy">{t.footer.privacy || 'Privacy'}</Link>
        <span className="calc-footer__sep">·</span>
        <Link to="/terms">{t.footer.terms || 'Terms'}</Link>
        <span className="calc-footer__sep">·</span>
        <Link to="/cookies">{t.footer.cookies || 'Cookies'}</Link>
        <span className="calc-footer__sep">·</span>
        <Link to="/offer">{t.footer.offer || 'Offer'}</Link>
      </nav>
      
      <p className="calc-footer__note">{t.footer.disclaimer || 'Not financial advice.'}</p>
    </footer>
  );
};

export const Footer = React.memo(({ variant = 'calculator' }: Props) => {
  if (variant === 'legal') {
    return <LegalPageFooter />;
  }
  return <CalcFooter />;
});
