import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAndroidBackButton } from './hooks/useAndroidBackButton';
import { Capacitor } from '@capacitor/core';
import type { PluginListenerHandle } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { useTranslation } from './i18n/useTranslation';
import type { CalculatorInput, CalculationResult } from './types';
import { Layout } from './components/Layout';
import { useCalculatorForm } from './hooks/useCalculatorForm';
import { InputSection } from './components/InputSection';
import { ResultsSection } from './components/ResultsSection';
import { AdSlot } from './components/AdSlot';
import { Footer } from './components/Footer';
import { PrivacyPolicy, TermsOfUse } from './pages/LegalDocument';
import { Methodology } from './pages/Methodology';
import './App.css';

const ChartsSection = lazy(() => import('./components/ChartsSection').then(module => ({ default: module.ChartsSection })));
const TableSection = lazy(() => import('./components/TableSection').then(module => ({ default: module.TableSection })));

/**
 * How the Android status bar is dressed for each theme.
 *
 * These are literals, and they must stay literals. The colour used to be read
 * back out of the computed style — `getPropertyValue('--surface')` — which is
 * fine in the source, where index.css says #FFFFFF, and broken in a release
 * build, where the CSS minifier shortens that to #fff. Android's
 * Color.parseColor accepts #RRGGBB and #AARRGGBB and throws on three-digit hex,
 * so setBackgroundColor rejected the light theme's colour while the dark
 * theme's #161d25 sailed through.
 *
 * The failure was silent and one-sided: switching to dark worked, switching
 * back to light left the bar dark while setStyle went ahead and put the light
 * theme's dark icons on it. Black icons on a black bar — the clock and the
 * battery simply vanished. A TypeScript string is not something the CSS
 * minifier can reach.
 *
 * Keep these in step with --surface in index.css by hand, and keep them six
 * digits. Style.Light means dark icons for a light bar, and vice versa.
 */
const STATUS_BAR = {
  light: { background: '#FFFFFF', style: Style.Light },
  dark: { background: '#161D25', style: Style.Dark },
} as const;

interface CalculatorAppProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  input: CalculatorInput;
  updateInput: (key: keyof CalculatorInput, value: number | string | boolean) => void;
  results: CalculationResult;
}

function CalculatorApp({ theme, setTheme, input, updateInput, results }: CalculatorAppProps) {
  return (
    <Layout theme={theme} setTheme={setTheme}>
      <div className="dashboard">
        <aside className="sidebar-left">
          <InputSection input={input} updateInput={updateInput} />
        </aside>
        
        <div className="main-panel">
          <ResultsSection results={results} />
          <Suspense fallback={<div className="loading-placeholder">Loading charts...</div>}>
            <ChartsSection results={results} theme={theme} />
          </Suspense>
          <AdSlot placement="inline-card" />
          <Suspense fallback={<div className="loading-placeholder">Loading tables...</div>}>
            <TableSection results={results} />
          </Suspense>
        </div>
      </div>
      <Footer variant="calculator" />
    </Layout>
  );
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );
  const { locale: lang } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;
    const bar = STATUS_BAR[theme];

    const apply = async () => {
      try {
        // Re-asserted every time rather than left to the config. The background
        // colour only takes on a bar the app actually owns; once anything has
        // put the window back into overlay mode, setBackgroundColor becomes a
        // silent no-op and the old colour stays put.
        await StatusBar.setOverlaysWebView({ overlay: false });
        // Background before style, so the icons are chosen for the colour that
        // is already there rather than the one on its way.
        await StatusBar.setBackgroundColor({ color: bar.background });
        await StatusBar.setStyle({ style: bar.style });
      } catch {
        // Android 15+ enforces edge-to-edge and refuses the background outright.
        // The icon style is the half that still lands, so it gets its own try.
        StatusBar.setStyle({ style: bar.style }).catch(() => {});
      }
    };

    apply();

    // Returning from the background can hand the bar back to the system.
    let handle: PluginListenerHandle | undefined;
    let cancelled = false;
    CapacitorApp.addListener('resume', apply).then(registered => {
      if (cancelled) registered.remove();
      else handle = registered;
    });

    return () => {
      cancelled = true;
      handle?.remove();
    };
  }, [theme]);

  const { input, updateInput, results } = useCalculatorForm();

  // Android's back button: without this it closes the app from any inner page.
  useAndroidBackButton();

  useEffect(() => {
    const titles: Record<string, string> = {
      en: 'Compound Interest Calculator',
      uk: 'Калькулятор складного відсотка',
      pl: 'Kalkulator procentu składanego',
      de: 'Zinseszinsrechner',
      fr: 'Calculateur d\'intérêts composés',
      es: 'Calculadora de interés compuesto',
      it: 'Calcolatore di interesse composto',
      pt: 'Calculadora de juros compostos',
      tr: 'Bileşik Faiz Hesaplayıcı',
      zh: '复利计算器',
      ja: '複利計算機',
      ko: '복리 계산기',
      hi: 'चक्रवृद्धि ब्याज कैलकुलेटर',
      ar: 'حاسبة الفائدة المركبة',
      nl: 'Rente-op-rente Calculator',
      ro: 'Calculator Dobândă Compusă',
      hu: 'Kamatos Kamat Kalkulátor',
      el: 'Υπολογιστής Ανατοκισμού',
      cs: 'Kalkulačka složeného úročení',
      sv: 'Ränta på ränta-kalkylator',
      sr: 'Kalkulator Složene Kamate',
      bg: 'Калкулатор за сложна лихва',
      sq: 'Llogaritësi i Interesit të Përbërë',
      da: 'Rentes rente Beregner',
      hr: 'Kalkulator Složene Kamate',
      fi: 'Korkoa korolle -laskuri',
      sk: 'Kalkulačka zloženého úročenia',
      no: 'Rentes rente Kalkulator',
      ka: 'რთული პროცენტის კალკულატორი',
      lt: 'Sudėtinių palūkanų skaičiuoklė',
      sl: 'Kalkulator obrestnih obresti',
      lv: 'Salikto procentu kalkulators',
      et: 'Liitintressi kalkulaator'
    };
    document.title = titles[lang] || 'Compound Interest Calculator';
  }, [lang]);

  return (
    <Routes>
      <Route path="/" element={<CalculatorApp theme={theme} setTheme={setTheme} input={input} updateInput={updateInput} results={results} />} />
      <Route path="/privacy" element={<><PrivacyPolicy /><Footer variant="legal" /></>} />
      <Route path="/terms" element={<><TermsOfUse /><Footer variant="legal" /></>} />
      <Route path="/methodology" element={<><Methodology /><Footer variant="legal" /></>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
