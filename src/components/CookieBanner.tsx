import { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/useTranslation';

export const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieNotice');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const handleAccept = () => {
    localStorage.setItem('cookieNotice', 'accepted');
    setIsVisible(false);
  };

  return (
    <div className="cookie-banner" style={{
      position: 'fixed',
      bottom: '80px', // Above bottom nav
      left: '16px',
      right: '16px',
      backgroundColor: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      zIndex: 1000
    }}>
      <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
        {(t.app as any).cookieBannerText || 'We use essential technical cookies to remember your preferences and ensure the site works properly.'}
      </p>
      <button onClick={handleAccept} style={{
        padding: '8px 16px',
        backgroundColor: 'var(--primary)',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 600,
        fontSize: '14px',
        cursor: 'pointer',
        alignSelf: 'flex-end'
      }}>
        {(t.app as any).cookieBannerBtn || 'Got it'}
      </button>
    </div>
  );
};
