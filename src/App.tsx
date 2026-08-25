import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';
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

    if (!Capacitor.isNativePlatform()) return;

    // Without this Android paints its own default bar above the app — a dark
    // strip sitting on top of a white header. Reading --surface rather than
    // repeating the hex keeps the bar in step with the palette in index.css.
    const surface = getComputedStyle(document.documentElement)
      .getPropertyValue('--surface').trim();

    // Style.Light means dark icons for a light bar, and vice versa.
    StatusBar.setStyle({ style: theme === 'dark' ? Style.Dark : Style.Light }).catch(() => {});
    // A no-op on Android 15+, where edge-to-edge is enforced and the bar is
    // always transparent; setStyle is what matters there.
    if (surface) StatusBar.setBackgroundColor({ color: surface }).catch(() => {});
  }, [theme]);

  const { input, updateInput, results } = useCalculatorForm();

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
