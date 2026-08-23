import { useTranslation } from '../i18n/useTranslation';
import React, { useState } from 'react';
import type { CalculationResult, PeriodResult } from '../types';
import { formatCurrency } from '../utils/formatting';
import { Maximize2, ShieldCheck } from 'lucide-react';
import '../App.css';

interface Props {
  results: CalculationResult;
  
}

export const TableSection = React.memo(({ results}: Props) => {
  const { t, locale: lang } = useTranslation();
  const [periodType, setPeriodType] = useState<'yearly' | 'monthly'>('yearly');
  const [expanded, setExpanded] = useState(false);
  const [scenario, setScenario] = useState<'expected' | 'pessimistic' | 'optimistic'>('expected');
  const [isScrolledEnd, setIsScrolledEnd] = useState(false);
  
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const isEnd = target.scrollLeft + target.clientWidth >= target.scrollWidth - 2;
    setIsScrolledEnd(isEnd);
  };
  
  const hasVariance = !!results.pessimistic && !!results.optimistic;
  
  const currentScenarioResult = results[scenario] || results.expected;
  
  const dataToDisplay = periodType === 'yearly'
    ? currentScenarioResult.yearlyData
    : currentScenarioResult.monthlyData;
  const filteredData = periodType === 'monthly' ? dataToDisplay.filter((d: PeriodResult) => d.month !== 0) : dataToDisplay;

  // A 100-year monthly projection is 1200 rows × 7 cells. Rendering all of them
  // up front visibly stalls a mid-range phone, so hold back the tail until asked.
  const ROW_LIMIT = 120;
  const canExpand = filteredData.length > ROW_LIMIT;
  const isTruncated = canExpand && !expanded;
  const visibleData = isTruncated ? filteredData.slice(0, ROW_LIMIT) : filteredData;

  return (
    <div className="table-wrapper">
      <div className="table-section card">
        <div className="table-header">
          <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{t.table.title}</h3>
          
          <div className="table-controls">
            {hasVariance && (
              <div className="table-controls__toggle-group table-toggle">
                <button 
                  className={scenario === 'pessimistic' ? 'active' : ''}
                  onClick={() => setScenario('pessimistic')}
                >Min</button>
                <button 
                  className={scenario === 'expected' ? 'active' : ''}
                  onClick={() => setScenario('expected')}
                >Base</button>
                <button 
                  className={scenario === 'optimistic' ? 'active' : ''}
                  onClick={() => setScenario('optimistic')}
                >Max</button>
              </div>
            )}
            <div className="table-controls__toggle-group table-toggle">
              <button className={periodType === 'monthly' ? 'active' : ''} onClick={() => setPeriodType('monthly')}>{t.form.compoundingMonthly}</button>
              <button className={periodType === 'yearly' ? 'active' : ''} onClick={() => setPeriodType('yearly')}>{t.form.compoundingAnnually}</button>
            </div>
            {/* The table is no longer height-capped, so this only controls the
                row limit — which means it has nothing to do when every row of
                the current view already fits. */}
            {canExpand && (
              <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
                {expanded ? (t.table.collapse || 'Collapse') : (t.table.expand || 'Expand')}
                <Maximize2 size={14} style={{ transform: expanded ? 'rotate(180deg)' : 'none' }} />
              </button>
            )}
          </div>
        </div>
        
        <div 
          className={`table-container ${expanded ? 'expanded' : ''} ${isScrolledEnd ? 'scrolled-end' : ''}`}
          onScroll={handleScroll}
        >
          <table>
            <thead>
              <tr>
                <th>{t.table.period}</th>
                <th>{t.chart.contributions}</th>
                <th>{t.satellites.nominalValue}</th>
                <th>{t.satellites.withInflation}</th>
                <th>{t.table.nominalAfterTax || 'Nominal After Taxes'}</th>
                <th>{t.chart.afterTaxAndInflation}</th>
                <th>{t.donut.taxesPaid}</th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((row: PeriodResult) => {
                const key = periodType === 'monthly' ? `m_${row.month}` : `y_${row.year}`;

                return (
                  <tr key={key}>
                    <td>{(row.month ?? 0) === 0 && row.year === 0 ? (t.table.start || 'Start') : (periodType === 'monthly' ? (t.table.monthLabel || 'Month {n}').replace('{n}', (row.month ?? 0).toString()) : (row.year === 0 ? (t.table.start || 'Start') : (t.table.yearLabel || 'Year {n}').replace('{n}', row.year.toString())))}</td>
                    <td className="numbers">{formatCurrency(row.totalContributions, lang)}</td>
                    <td className="numbers">{formatCurrency(row.nominalValue, lang)}</td>
                    <td className="numbers text-secondary">{formatCurrency(row.inflationAdjustedValue, lang)}</td>
                    <td className="numbers" style={{ fontWeight: 500 }}>{formatCurrency((row as any).nominalAfterTax, lang)}</td>
                    <td className="numbers text-primary" style={{ fontWeight: 600 }}>{formatCurrency(row.afterTaxAndInflation, lang)}</td>
                    <td className="numbers text-secondary">{formatCurrency(row.taxesPaidCumulative, lang)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {isTruncated && (
          <button className="table-show-all" onClick={() => setExpanded(true)}>
            {(t.table.showAll || 'Show all {n} rows').replace('{n}', filteredData.length.toString())}
          </button>
        )}
      </div>
      
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
