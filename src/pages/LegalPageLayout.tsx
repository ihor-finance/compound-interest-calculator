import { useTranslation } from '../i18n/useTranslation';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../App.css';

import { LogoIcon } from '../components/LogoIcon';

interface Props {
  children: React.ReactNode;
}

/** Ignore thumb jitter; only a deliberate drag should move the bar. */
const DIRECTION_THRESHOLD = 8;
/** Above this the bar is always out — there is nothing yet to scroll back to. */
const ALWAYS_SHOWN_ABOVE = 96;

/**
 * Frame for the policy, terms and methodology pages.
 *
 * These pages are long — the methodology runs past ten thousand pixels — and the
 * way out is a single link at the top. So the bar is pinned, and it gets out of
 * the way while you read: scrolling down slides it off, the first move back up
 * brings it straight back. That is cheaper than a second button at the bottom of
 * the screen, which would sit over the text the whole time to be useful twice.
 *
 * No swipe-to-dismiss here on purpose. On Android the edge swipe already *is*
 * the back gesture, and it now returns to the calculator (see
 * hooks/useAndroidBackButton). A second swipe of our own would be competing with
 * the system for the same drag.
 */
export const LegalPageLayout = ({ children }: Props) => {
  const { t } = useTranslation();
  const [barHidden, setBarHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    lastY.current = window.scrollY;

    // No requestAnimationFrame throttle here on purpose. Reading window.scrollY
    // costs nothing — it forces no layout — and React drops a setState that
    // does not change the value, so this re-renders only when the direction
    // actually flips. A rAF gate would also be a way to jam: if the callback is
    // never run, because the app is in the background or the frame is
    // throttled, the in-flight flag never clears and the bar stops responding
    // for good.
    const onScroll = () => {
      const y = window.scrollY;

      if (y < ALWAYS_SHOWN_ABOVE) {
        setBarHidden(false);
        lastY.current = y;
        return;
      }

      const delta = y - lastY.current;
      // Below the threshold, leave lastY alone so small moves accumulate
      // instead of being thrown away one by one.
      if (Math.abs(delta) < DIRECTION_THRESHOLD) return;

      setBarHidden(delta > 0);
      lastY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="legal-page-container">
      <header className={`legal-header ${barHidden ? 'legal-header--hidden' : ''}`}>
        <div className="legal-header-content">
          <Link to="/" className="back-button">
            <ArrowLeft size={16} strokeWidth={2.4} aria-hidden="true" />
            <span>{t.legal.backToCalculator || 'Back to calculator'}</span>
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
