import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from './i18n/useTranslation';
import { Layout } from './components/Layout';
import { useCalculatorForm } from './hooks/useCalculatorForm';
import { InputSection } from './components/InputSection';
import { ResultsSection } from './components/ResultsSection';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { CookiesPage } from './pages/CookiesPage';
import { PublicOffer } from './pages/PublicOffer';
import './App.css';

const ChartsSection = lazy(() => import('./components/ChartsSection').then(module => ({ default: module.ChartsSection })));
const TableSection = lazy(() => import('./components/TableSection').then(module => ({ default: module.TableSection })));

function CalculatorApp({ theme, toggleTheme, input, updateInput, results }: any) {
  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <div className="dashboard">
        <aside className="sidebar-left">
          <InputSection input={input} updateInput={updateInput} />
        </aside>
        
        <div className="main-panel">
          <ResultsSection results={results} />
          <Suspense fallback={<div className="loading-placeholder">Loading charts...</div>}>
            <ChartsSection results={results} theme={theme} />
          </Suspense>
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
  useEffect(() => {
    localStorage.removeItem('calc_lang');
    localStorage.removeItem('southKoreaProDialog');
    localStorage.removeItem('LabsBanner');
    localStorage.removeItem('cookieNotice');
    localStorage.removeItem('appBannerNotice');
  }, []);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { locale: lang } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  };

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
      <Route path="/" element={<CalculatorApp theme={theme} toggleTheme={toggleTheme} input={input} updateInput={updateInput} results={results} />} />
      <Route path="/privacy" element={<><PrivacyPolicy /><Footer variant="legal" /></>} />
      <Route path="/terms" element={<><TermsOfUse /><Footer variant="legal" /></>} />
      <Route path="/cookies" element={<><CookiesPage /><Footer variant="legal" /></>} />
      <Route path="/offer" element={<><PublicOffer /><Footer variant="legal" /></>} />
    </Routes>
  );
}

export default App;
