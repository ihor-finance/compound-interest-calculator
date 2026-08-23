import { useTranslation } from '../i18n/useTranslation';
import React, { useState, useEffect, useCallback } from 'react';
import type { CalculationResult, PeriodResult } from '../types';
import { formatCurrency } from '../utils/formatting';
import { Maximize2, ShieldCheck, X } from 'lucide-react';
import '../App.css';

interface Props {
  results: CalculationResult;
}

/** Rows shown inline before the table is worth collapsing at all. */
const INLINE_LIMIT = 12;
/** How many rows to keep at each end when it is. */
const PREVIEW_EDGE = 5;

export const TableSection = React.memo(({ results }: Props) => {
  const { t, locale: lang } = useTranslation();
  const [periodType, setPeriodType] = useState<'yearly' | 'monthly'>('yearly');
  const [scenario, setScenario] = useState<'expected' | 'pessimistic' | 'optimistic'>('expected');
  const [isFullTableOpen, setIsFullTableOpen] = useState(false);
  const [isScrolledEnd, setIsScrolledEnd] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    setIsScrolledEnd(target.scrollLeft + target.clientWidth >= target.scrollWidth - 2);
  };

  const closeFullTable = useCallback(() => setIsFullTableOpen(false), []);

  // While the full table is up it owns the screen: the page behind must not
  // scroll, and Escape has to get you out.
  useEffect(() => {
    if (!isFullTableOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeFullTable();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isFullTableOpen, closeFullTable]);

  const hasVariance = !!results.pessimistic && !!results.optimistic;
  const currentScenarioResult = results[scenario] || results.expected;

  const dataToDisplay = periodType === 'yearly'
    ? currentScenarioResult.yearlyData
    : currentScenarioResult.monthlyData;
  const rows = periodType === 'monthly'
    ? dataToDisplay.filter((d: PeriodResult) => d.month !== 0)
    : dataToDisplay;

  // Up to a dozen rows the whole projection fits without scrolling and reads
  // better whole. Past that, the interesting parts are the start and the end,
  // so keep five of each and move the middle into the full-screen view.
  const isCollapsed = rows.length > INLINE_LIMIT;
  const headRows = isCollapsed ? rows.slice(0, PREVIEW_EDGE) : rows;
  const tailRows = isCollapsed ? rows.slice(-PREVIEW_EDGE) : [];
  const hiddenCount = isCollapsed ? rows.length - PREVIEW_EDGE * 2 : 0;

  const periodLabel = (row: PeriodResult) => {
    if ((row.month ?? 0) === 0 && row.year === 0) return t.table.start || 'Start';
    if (periodType === 'monthly') {
      return (t.table.monthLabel || 'Month {n}').replace('{n}', String(row.month ?? 0));
    }
    if (row.year === 0) return t.table.start || 'Start';
    return (t.table.yearLabel || 'Year {n}').replace('{n}', String(row.year));
  };

  const headerRow = (
    <tr>
      <th>{t.table.period}</th>
      <th>{t.chart.contributions}</th>
      <th>{t.satellites.nominalValue}</th>
      <th>{t.satellites.withInflation}</th>
      <th>{t.table.nominalAfterTax || 'Nominal After Taxes'}</th>
      <th>{t.chart.afterTaxAndInflation}</th>
      <th>{t.donut.taxesPaid}</th>
    </tr>
  );

  const renderRow = (row: PeriodResult) => (
    <tr key={periodType === 'monthly' ? `m_${row.month}` : `y_${row.year}`}>
      <td>{periodLabel(row)}</td>
      <td className="numbers">{formatCurrency(row.totalContributions, lang)}</td>
      <td className="numbers">{formatCurrency(row.nominalValue, lang)}</td>
      <td className="numbers text-secondary">{formatCurrency(row.inflationAdjustedValue, lang)}</td>
      <td className="numbers" style={{ fontWeight: 500 }}>{formatCurrency(row.nominalAfterTax, lang)}</td>
      <td className="numbers text-primary" style={{ fontWeight: 600 }}>{formatCurrency(row.afterTaxAndInflation, lang)}</td>
      <td className="numbers text-secondary">{formatCurrency(row.taxesPaidCumulative, lang)}</td>
    </tr>
  );

  const periodToggle = (
    <div className="table-controls__toggle-group table-toggle">
      <button className={periodType === 'monthly' ? 'active' : ''} onClick={() => setPeriodType('monthly')}>{t.form.compoundingMonthly}</button>
      <button className={periodType === 'yearly' ? 'active' : ''} onClick={() => setPeriodType('yearly')}>{t.form.compoundingAnnually}</button>
    </div>
  );

  const scenarioToggle = hasVariance ? (
    <div className="table-controls__toggle-group table-toggle">
      <button className={scenario === 'pessimistic' ? 'active' : ''} onClick={() => setScenario('pessimistic')}>Min</button>
      <button className={scenario === 'expected' ? 'active' : ''} onClick={() => setScenario('expected')}>Base</button>
      <button className={scenario === 'optimistic' ? 'active' : ''} onClick={() => setScenario('optimistic')}>Max</button>
    </div>
  ) : null;

  return (
    <div className="table-wrapper">
      <div className="table-section card">
        <div className="table-header">
          <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{t.table.title}</h3>

          <div className="table-controls">
            {scenarioToggle}
            {periodToggle}
            {isCollapsed && (
              <button className="expand-btn" onClick={() => setIsFullTableOpen(true)}>
                {t.table.expand} <Maximize2 size={14} />
              </button>
            )}
          </div>
        </div>

        <div
          className={`table-container ${isScrolledEnd ? 'scrolled-end' : ''}`}
          onScroll={handleScroll}
        >
          <table>
            <thead>{headerRow}</thead>
            <tbody>
              {headRows.map(renderRow)}
              {isCollapsed && (
                <tr className="table-gap-row">
                  <td colSpan={7}>
                    <button className="table-gap-row__btn" onClick={() => setIsFullTableOpen(true)}>
                      <span className="table-gap-row__dots" aria-hidden="true">⋯</span>
                      {(t.table.showAll || 'Show all {n} rows').replace('{n}', String(rows.length))}
                      <span className="table-gap-row__hidden">
                        {(t.table.hiddenRows || '{n} hidden').replace('{n}', String(hiddenCount))}
                      </span>
                    </button>
                  </td>
                </tr>
              )}
              {tailRows.map(renderRow)}
            </tbody>
          </table>
        </div>
      </div>

      {isFullTableOpen && (
        <div
          className="table-modal"
          role="dialog"
          aria-modal="true"
          aria-label={t.table.title}
          onClick={closeFullTable}
        >
          <div className="table-modal__panel" onClick={(e) => e.stopPropagation()}>
            <header className="table-modal__header">
              <h3 className="table-modal__title">{t.table.title}</h3>
              <div className="table-controls">
                {scenarioToggle}
                {periodToggle}
              </div>
              <button
                className="table-modal__close"
                onClick={closeFullTable}
                aria-label={t.table.close || 'Close'}
              >
                <X size={20} />
              </button>
            </header>
            <div className="table-modal__body">
              <table>
                <thead>{headerRow}</thead>
                <tbody>{rows.map(renderRow)}</tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <div className="about-results card">
        <div className="about-header">
          <ShieldCheck size={20} className="text-primary" />
          <h4 style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{t.disclaimer.title}</h4>
        </div>
        <p className="text-secondary text-sm" dangerouslySetInnerHTML={{ __html: t.disclaimer.text }}></p>

        <div className="disclaimer-box">
          <div style={{ flex: 1 }}>
            <strong>{t.disclaimer.warning}</strong>
            <p>{t.disclaimer.pastResults}</p>
          </div>
        </div>
      </div>
    </div>
  );
});
