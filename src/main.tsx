import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { I18nProvider } from './i18n/useTranslation'
import { ErrorBoundary } from './ErrorBoundary'
import './index.css'
import App from './App.tsx'

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
