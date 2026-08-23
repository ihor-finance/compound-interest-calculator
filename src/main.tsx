import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { I18nProvider } from './i18n/useTranslation'
import { ErrorBoundary } from './ErrorBoundary'
import './index.css'
import App from './App.tsx'

/**
 * Retires the splash painted by index.html once React has something on screen.
 * The minimum on-screen time stops it flashing past on a warm start, where the
 * bundle is cached and mounting takes a few milliseconds.
 */
function dismissSplash() {
  const splash = document.getElementById('app-splash');
  if (!splash) return;

  const MINIMUM_VISIBLE_MS = 1000;
  const FADE_MS = 350;
  const elapsed = performance.now();

  window.setTimeout(() => {
    splash.dataset.leaving = 'true';
    window.setTimeout(() => splash.remove(), FADE_MS);
  }, Math.max(0, MINIMUM_VISIBLE_MS - elapsed));
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <I18nProvider>
          <App />
        </I18nProvider>
      </HashRouter>
    </ErrorBoundary>
  </StrictMode>,
)

dismissSplash()
