import { useEffect, useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { LegalPageLayout } from './LegalPageLayout';
import { loadMethodology, en, type MethodologyContent } from './methodology-content';
import './methodology-content/methodology.css';

/** Symbols used in the formulas. Identical in every language. */
const SYMBOLS = ['P₀', 'Y', 'r', 'n', 'C', 'i', 'τ'] as const;

/** Contribution frequency → how much lands in a given month. */
const CONTRIB_RULES = [
  '0',
  'C × 365 ÷ 12',
  'C × 52 ÷ 12',
  'C',
  'C, when the month number divides by 3',
  'C, when the month number divides by 6',
  'C, when the month number divides by 12',
] as const;

const EXAMPLE_INPUTS = ['10 000', '15', '8%', 'annual (n = 1)', '500 / month', '2%', '15%, annually'] as const;
const EXAMPLE_RESULTS = ['100 000.00', '200 524.84', '179 861.59', '133 639.81', '+4.71%'] as const;

const Formula = ({ children }: { children: React.ReactNode }) => (
  <div className="formula">{children}</div>
);

export const Methodology = () => {
  const { locale } = useTranslation();
  const [c, setC] = useState<MethodologyContent>(en);

  useEffect(() => {
    let active = true;
    loadMethodology(locale).then(content => { if (active) setC(content); });
    return () => { active = false; };
  }, [locale]);

  return (
    <LegalPageLayout>
      <div dir={locale === 'ar' || locale === 'he' ? 'rtl' : 'ltr'}>
        <h1>{c.title}</h1>
        <p className="last-updated">{c.updated}</p>

        <div className="methodology-notice">
          <h2>{c.disclaimerTitle}</h2>
          {c.disclaimer.map((p, k) => <p key={k}>{p}</p>)}
        </div>

        <h2>{c.inputsTitle}</h2>
        <p>{c.inputsIntro}</p>
        <div className="methodology-table-wrap">
          <table className="methodology-table">
            <thead>
              <tr><th>{c.colSymbol}</th><th>{c.colMeaning}</th></tr>
            </thead>
            <tbody>
              {SYMBOLS.map((s, k) => (
                <tr key={s}><td className="sym">{s}</td><td>{c.inputMeanings[k]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>{c.rateTitle}</h2>
        <p>{c.rateBefore}</p>
        <Formula>
          i<sub>m</sub> = (1 + r ÷ n)<sup>n ÷ 12</sup> − 1
        </Formula>
        <p>{c.rateAfter}</p>

        <h2>{c.contribTitle}</h2>
        <p>{c.contribIntro}</p>
        <div className="methodology-table-wrap">
          <table className="methodology-table">
            <thead>
              <tr><th>{c.colFrequency}</th><th>{c.colMonthlyAmount}</th></tr>
            </thead>
            <tbody>
              {c.contribFrequencies.map((f, k) => (
                <tr key={f}><td>{f}</td><td className="sym">{CONTRIB_RULES[k]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>{c.contribNote}</p>

        <h2>{c.orderTitle}</h2>
        <p>{c.orderIntro}</p>
        <ol className="methodology-steps">
          {c.orderSteps.map((s, k) => <li key={k}>{s}</li>)}
        </ol>
        <Formula>
          B ← B × (1 + i<sub>m</sub>) + c<sub>m</sub> − T<sub>m</sub>
        </Formula>
        <p>{c.orderNote}</p>

        <h2>{c.taxTitle}</h2>
        <p>{c.taxIntro}</p>
        <h3>{c.taxAnnualLabel}</h3>
        <p>{c.taxAnnualText}</p>
        <Formula>
          G<sub>year</sub> = B − B<sub>start of year</sub> − ΣC<sub>year</sub><br />
          T = max(0, G<sub>year</sub>) × τ
        </Formula>
        <h3>{c.taxExitLabel}</h3>
        <p>{c.taxExitText}</p>
        <Formula>
          G<sub>total</sub> = B<sub>final</sub> − (P₀ + ΣC)<br />
          T = max(0, G<sub>total</sub>) × τ
        </Formula>
        <p>{c.taxNote}</p>

        <h2>{c.inflationTitle}</h2>
        <p>{c.inflationIntro}</p>
        <Formula>
          V<sub>real</sub> = V<sub>nominal</sub> ÷ (1 + i)<sup>t</sup>
        </Formula>
        <p>{c.inflationNote}</p>

        <h2>{c.figuresTitle}</h2>
        <p>{c.figuresIntro}</p>
        <div className="methodology-table-wrap">
          <table className="methodology-table">
            <thead>
              <tr><th>{c.colMeaning}</th><th>{c.colValue}</th></tr>
            </thead>
            <tbody>
              {c.figureNames.map((name, k) => (
                <tr key={name}><td><strong>{name}</strong></td><td>{c.figureNotes[k]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>{c.irrTitle}</h2>
        <p>{c.irrWhyNot}</p>
        <p>{c.irrBefore}</p>
        <Formula>
          Σ<sub>m=0..N</sub> [ c(m) ÷ (1 + x)<sup>m</sup> ] = V ÷ (1 + x)<sup>N</sup>
        </Formula>
        <p>{c.irrAfter}</p>
        <Formula>
          annual return = (1 + x)<sup>12</sup> − 1
        </Formula>
        <p>{c.irrNote}</p>

        <h2>{c.rangeTitle}</h2>
        <p>{c.rangeText}</p>

        <h2>{c.exampleTitle}</h2>
        <p>{c.exampleIntro}</p>
        <h3>{c.exampleGivenTitle}</h3>
        <div className="methodology-table-wrap">
          <table className="methodology-table">
            <tbody>
              {c.exampleGivenLabels.map((label, k) => (
                <tr key={label}><td>{label}</td><td className="sym">{EXAMPLE_INPUTS[k]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3>{c.exampleStepsTitle}</h3>
        <ol className="methodology-steps">
          {c.exampleSteps.map((s, k) => <li key={k}>{s}</li>)}
        </ol>
        <h3>{c.exampleResultTitle}</h3>
        <div className="methodology-table-wrap">
          <table className="methodology-table">
            <tbody>
              {c.exampleResultLabels.map((label, k) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td className="sym"><strong>{EXAMPLE_RESULTS[k]}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>{c.exampleClosing}</p>

        <h2>{c.excludedTitle}</h2>
        <p>{c.excludedIntro}</p>
        <ul className="methodology-list">
          {c.excluded.map((item, k) => <li key={k}>{item}</li>)}
        </ul>

        <div className="methodology-notice methodology-notice--warning">
          <h2>{c.limitsTitle}</h2>
          {c.limits.map((p, k) => <p key={k}>{p}</p>)}
        </div>
      </div>
    </LegalPageLayout>
  );
};
