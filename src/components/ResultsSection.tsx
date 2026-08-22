import { useTranslation } from '../i18n/useTranslation';
import React from 'react';
import type { CalculationResult } from '../types';
import { formatCurrency, formatNumber } from '../utils/formatting';
import { Tooltip } from './Tooltip';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import '../App.css';

interface Props {
  results: CalculationResult;
  
}


function getDeltaTooltip(tileType: 'nominal' | 'nominalAfterTax' | 'withInflation', values: any, t: any, lang: string) {
  const { 
    contributions, nominal, nominalAfterTax, withInflation,
    totalTax, years, inflationRate 
  } = values;
  
  const fmt = (n: number) => formatCurrency(Math.abs(n), lang);
  const fmtSigned = (n: number) => (n >= 0 ? '+' : '−') + ' ' + fmt(n);
  
  const pStr = (n: number) => {
      let str = Math.abs(n).toFixed(1);
      if (lang === 'uk' || lang === 'pl' || lang === 'de' || lang === 'fr' || lang === 'es' || lang === 'it' || lang === 'pt' || lang === 'tr') {
          str = str.replace('.', ',');
      }
      return (n >= 0 ? '+' : '−') + str + '%';
  };

  switch (tileType) {
    case 'nominal': {
      const d = nominal - contributions;
      const p = contributions > 0 ? (d / contributions) * 100 : 0;
      return {
        line1: (t.deltas.nominalLine1 || '').replace('{delta}', fmt(d)).replace('{pct}', pStr(p)),
        formula: `${fmt(nominal)} (${t.chart.nominal || 'nominal'}) − ${fmt(contributions)} (${t.chart.contributions || 'contributions'}) = ${fmtSigned(d)}`,
        pctValue: p
      };
    }
    case 'nominalAfterTax': {
      const d = nominalAfterTax - nominal;
      const p = contributions > 0 ? (d / contributions) * 100 : 0;
      return {
        line1: (t.deltas.taxLine1 || '').replace('{tax}', fmt(totalTax)).replace('{delta}', fmt(Math.abs(d))).replace('{pct}', pStr(p)),
        formula: `${fmt(nominalAfterTax)} (${t.satellites.nominalAfterTax || 'after tax'}) − ${fmt(nominal)} (${t.satellites.nominalValue || 'before tax'}) = ${fmtSigned(d)}`,
        pctValue: p
      };
    }
    case 'withInflation': {
      const d = withInflation - nominal;
      const p = contributions > 0 ? (d / contributions) * 100 : 0;
      return {
        line1: (t.deltas.inflationLine1 || '').replace('{years}', String(years)).replace('{rate}', String(inflationRate)).replace('{delta}', fmt(Math.abs(d))).replace('{pct}', pStr(p)),
        formula: `${fmt(withInflation)} (${t.satellites.withInflation || 'real value'}) − ${fmt(nominal)} (${t.chart.nominalValue || 'nominal'}) = ${fmtSigned(d)}`,
        pctValue: p
      };
    }
  }
}

function DeltaBadge({ value, formattedValue, tooltipData }: { value: number, formattedValue: string, tooltipData: { line1: string, formula: string, pctValue: number } }) {
  const isPositive = value >= 0;
  
  return (
    <div className="delta-badge-wrapper">
      <span 
        className={`delta-badge ${isPositive ? 'delta-badge--positive' : 'delta-badge--cost'}`}
        tabIndex={0}
        role="button"
        aria-label={tooltipData.line1}
      >
        {isPositive ? '+' : '−'}{formattedValue}
        
      </span>
      
      <div className="delta-tooltip" role="tooltip">
        <p className="delta-tooltip__explanation">{tooltipData.line1}</p>
        <p className="delta-tooltip__formula" style={{ whiteSpace: 'pre-wrap' }}>{tooltipData.formula}</p>
      </div>
    </div>
  );
}

export const ResultsSection = React.memo(({ results}: Props) => {
  const { t, locale: lang } = useTranslation();
  const expected = results.expected;
  const pessimistic = results.pessimistic;
  const optimistic = results.optimistic;
  const inputs = results.inputs;
  
  const hasVariance = !!pessimistic && !!optimistic;
  const isLossReal = expected.afterTaxAndInflation < expected.totalContributions;
  const cagr = expected.returnPercentage;
  const isCagrNegative = cagr < 0;
  const r = inputs.annualRate;
  const infl = inputs.inflationRate;
  const years = inputs.years;
  const currency = '';

  let warningHtml = '';
  if (r <= infl) {
    warningHtml = t.warnings.inflationExceedsDetail.replace('{rate}', r.toString()).replace('{inflation}', infl.toString());
  } else if (isCagrNegative) {
    warningHtml = t.warnings.inflationExceeds;
  }

  // Format numbers for locale
  const formatLocal = (val: number) => formatCurrency(val, lang);

  // Narrative logic
  const diff = expected.afterTaxAndInflation - expected.totalContributions;
  const absDiff = Math.abs(diff);
  const diffRatio = diff / expected.totalContributions;
  
  let narrativeText: string;
  if (diffRatio > 0.01) narrativeText = t.hero.descriptionPositive;
  else if (diffRatio < -0.01) narrativeText = t.hero.descriptionNegative;
  else narrativeText = t.hero.descriptionNeutral;
  narrativeText = narrativeText || '';
  narrativeText = narrativeText
    .replace('{contributions}', formatLocal(expected.totalContributions))
    .replace('{result}', formatLocal(expected.afterTaxAndInflation))
    .replace('{delta}', formatLocal(absDiff))
    .replace(/{currency}/g, currency);

  const heroSubtitle = (t.hero.title || 'Real purchasing power in {years} years').replace('{years}', years.toString());



  return (
    <div className="results-section">
      {warningHtml && (
        <section className="warning-banner">
          <span dangerouslySetInnerHTML={{ __html: warningHtml }}></span>
        </section>
      )}

      <div className="hero-card">
        <div className="hero-left">
          <div className="hero-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span className="primary-badge" style={isLossReal ? { backgroundColor: '#FEE2E2', color: '#EF4444' } : {}}>
              {isLossReal ? '⚠' : '★'} {t.hero.badge}
            </span>
          </div>
          
          <div className="hero-main-group">
            <div className="hero-result-row">
              <div className="hero-value numbers" style={isLossReal ? { color: '#EF4444' } : {}}>
                {formatLocal(expected.afterTaxAndInflation)}
              </div>
              {(() => {
                const totalReturnPct = expected.totalContributions > 0 
                  ? ((expected.afterTaxAndInflation - expected.totalContributions) / expected.totalContributions) * 100
                  : 0;
                let heroReturnBadgeTooltip: string;
                if (totalReturnPct > 0) {
                  heroReturnBadgeTooltip = (t.heroReturn.positive || '').replace('{contributions}', formatLocal(expected.totalContributions)).replace('{result}', formatLocal(expected.afterTaxAndInflation)).replace('{pct}', '+' + totalReturnPct.toFixed(1) + '%');
                } else if (totalReturnPct < 0) {
                  heroReturnBadgeTooltip = (t.heroReturn.negative || '').replace('{contributions}', formatLocal(expected.totalContributions)).replace('{result}', formatLocal(expected.afterTaxAndInflation)).replace('{pct}', totalReturnPct.toFixed(1).replace('-', '−') + '%');
                } else {
                  heroReturnBadgeTooltip = (t.heroReturn.positive || '').replace('{contributions}', formatLocal(expected.totalContributions)).replace('{result}', formatLocal(expected.afterTaxAndInflation)).replace('{pct}', '0%');
                }
                
                let badgeClass = 'hero-total-return--neutral';
                let icon = '';
                let sign = '';
                if (totalReturnPct > 0) {
                  badgeClass = 'hero-total-return--positive';
                  icon = '↗';
                  sign = '+';
                } else if (totalReturnPct < 0) {
                  badgeClass = 'hero-total-return--negative';
                  icon = '↘';
                }

                return (
                  <Tooltip content={heroReturnBadgeTooltip} position="bottom">
                    <span 
                      className={`hero-total-return ${badgeClass}`}
                      style={{ cursor: 'help' }}
                    >
                      {icon} {sign}{totalReturnPct.toFixed(1)}%
                    </span>
                  </Tooltip>
                );
              })()}
            </div>
            <div className="hero-subtitle">
              {heroSubtitle}
            </div>
          </div>

          <div className="hero-narrative">
            {narrativeText}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-metric-box">
            <div className="metric-label">
              <div className="metric-with-tooltip">
                {t.metrics.cagrLabel || 'Return CAGR'}
                <Tooltip content={(t.tooltips as any).cagr} />
              </div>
            </div>
            <div className="metric-value numbers" style={isCagrNegative ? { color: '#EF4444' } : { color: '#0F7A38' }}>
              {isCagrNegative ? <TrendingDown size={18} /> : (cagr > 0 ? <TrendingUp size={18} /> : <Minus size={18} />)}
              <span>{cagr > 0 ? '+' : ''}{formatNumber(cagr, lang, 2)}%</span>
            </div>
            {isCagrNegative && (
              <div className="cagr-negative-hint">
                {t.warnings.negativeCagr}
              </div>
            )}
          </div>
          
          <div className="hero-metric-box">
            <div className="metric-label">
              <div className="metric-with-tooltip">
                {t.metrics.netEffectLabel || 'Net Effect'}
                <Tooltip content={(t.tooltips as any).netEffect} />
              </div>
            </div>
            <div className="metric-value numbers" style={diff < 0 ? { color: '#EF4444' } : { color: '#0F7A38' }}>
              {diff > 0 ? '+' : ''}{formatLocal(diff)}
            </div>
          </div>

          {hasVariance && (
             <div className="hero-metric-box">
               <div className="metric-label">
                 <div className="metric-with-tooltip">
                   {t.metrics.rangeLabel || 'Range'}
                   <Tooltip content={(t.tooltips as any).range} />
                 </div>
               </div>
               <div className="metric-value numbers text-secondary" style={{ fontSize: '15px' }}>
                 {formatLocal(pessimistic.afterTaxAndInflation)} – {formatLocal(optimistic.afterTaxAndInflation)}
               </div>
             </div>
          )}
        </div>
      </div>

      <section className="satellite-grid">
        <div className="satellite-tile">
          <div className="satellite-tile__header">
            <span className="satellite-tile__label">
              {t.satellites.totalContributions}
              <Tooltip content={(t.tooltips as any).totalContributions} />
            </span>
          </div>
          <div className="satellite-tile__value numbers">{formatLocal(expected.totalContributions)}</div>
          <div className="satellite-tile__subtitle">{t.satellites.subtitleContributions}</div>
        </div>

        <div className="satellite-tile">
          <div className="satellite-tile__header">
            <span className="satellite-tile__label">
              {t.satellites.nominalValue}
              <Tooltip content={(t.tooltips as any).nominalValue} />
            </span>
            {/* Nominal Delta */}
            <DeltaBadge 
              value={expected.endValue - expected.totalContributions} 
              formattedValue={formatLocal(Math.abs(expected.endValue - expected.totalContributions))}
              tooltipData={getDeltaTooltip('nominal', {
                contributions: expected.totalContributions,
                nominal: expected.endValue,
                nominalAfterTax: (expected as any).nominalAfterTax,
                withInflation: expected.adjustedForInflation,
                totalTax: expected.endValue - (expected as any).nominalAfterTax,
                years,
                inflationRate: infl
              }, t, lang)}
            />
          </div>
          <div className="satellite-tile__value numbers">{formatLocal(expected.endValue)}
            <Tooltip content={(() => {
                if (expected.totalContributions <= 0) return '';
                const p = ((expected.endValue - expected.totalContributions) / expected.totalContributions) * 100;
                const d = Math.abs(expected.endValue - expected.totalContributions);
                const s = p >= 0 ? '+' : '−';
                let str = Math.abs(p).toFixed(1);
                if (lang === 'uk' || lang === 'pl' || lang === 'de' || lang === 'fr' || lang === 'es' || lang === 'it' || lang === 'pt' || lang === 'tr') {
                  str = str.replace('.', ',');
                }
                return (t.deltas.nominalFormulaPercent || 'Growth:<br />{result} − {contributions} = {delta}<br />{delta} ÷ {contributions} × 100 = {pct}')
                  .replaceAll('{result}', formatLocal(expected.endValue))
                  .replaceAll('{contributions}', formatLocal(expected.totalContributions))
                  .replaceAll('{delta}', s + ' ' + formatLocal(d))
                  .replaceAll('{pct}', s + str + '%');
              })()} position="top">
              <span className="satellite-tile__pct" style={{ fontSize: '15px', opacity: 0.7, marginLeft: '6px', fontWeight: 600, cursor: 'help' }}>
                {(() => {
                if (expected.totalContributions <= 0) return null;
                const pct = ((expected.endValue - expected.totalContributions) / expected.totalContributions) * 100;
                const sign = pct >= 0 ? '+' : '−';
                let str = Math.abs(pct).toFixed(1);
                if (lang === 'uk' || lang === 'pl' || lang === 'de' || lang === 'fr' || lang === 'es' || lang === 'it' || lang === 'pt' || lang === 'tr') {
                  str = str.replace('.', ',');
                }
                return `(${sign}${str}%)`;
              })()}
              </span>
            </Tooltip></div>
          <div className="satellite-tile__subtitle">{t.satellites.subtitleNominal}</div>
        </div>

        <div className="satellite-tile">
          <div className="satellite-tile__header">
            <span className="satellite-tile__label">
              {t.satellites.nominalAfterTax || 'Nominal After Taxes'}
              <Tooltip content={((t.tooltips as any).nominalAfterTax || '').replace('{N}', years.toString())} />
            </span>
            {/* Tax Delta */}
            <DeltaBadge 
              value={(expected as any).nominalAfterTax - expected.endValue} 
              formattedValue={formatLocal(Math.abs(expected.endValue - (expected as any).nominalAfterTax))}
              tooltipData={getDeltaTooltip('nominalAfterTax', {
                contributions: expected.totalContributions,
                nominal: expected.endValue,
                nominalAfterTax: (expected as any).nominalAfterTax,
                withInflation: expected.adjustedForInflation,
                totalTax: expected.endValue - (expected as any).nominalAfterTax,
                years,
                inflationRate: infl
              }, t, lang)}
            />
          </div>
          <div className="satellite-tile__value numbers">{formatLocal((expected as any).nominalAfterTax)}
            <Tooltip content={(() => {
                if (expected.totalContributions <= 0) return '';
                const p = (((expected as any).nominalAfterTax - expected.totalContributions) / expected.totalContributions) * 100;
                const d = Math.abs((expected as any).nominalAfterTax - expected.totalContributions);
                const s = p >= 0 ? '+' : '−';
                let str = Math.abs(p).toFixed(1);
                if (lang === 'uk' || lang === 'pl' || lang === 'de' || lang === 'fr' || lang === 'es' || lang === 'it' || lang === 'pt' || lang === 'tr') {
                  str = str.replace('.', ',');
                }
                return (t.deltas.nominalFormulaPercent || 'Growth:<br />{result} − {contributions} = {delta}<br />{delta} ÷ {contributions} × 100 = {pct}')
                  .replaceAll('{result}', formatLocal((expected as any).nominalAfterTax))
                  .replaceAll('{contributions}', formatLocal(expected.totalContributions))
                  .replaceAll('{delta}', s + ' ' + formatLocal(d))
                  .replaceAll('{pct}', s + str + '%');
              })()} position="top">
              <span className="satellite-tile__pct" style={{ fontSize: '15px', opacity: 0.7, marginLeft: '6px', fontWeight: 600, cursor: 'help' }}>
                {(() => {
                if (expected.totalContributions <= 0) return null;
                const pct = (((expected as any).nominalAfterTax - expected.totalContributions) / expected.totalContributions) * 100;
                const sign = pct >= 0 ? '+' : '−';
                let str = Math.abs(pct).toFixed(1);
                if (lang === 'uk' || lang === 'pl' || lang === 'de' || lang === 'fr' || lang === 'es' || lang === 'it' || lang === 'pt' || lang === 'tr') {
                  str = str.replace('.', ',');
                }
                return `(${sign}${str}%)`;
              })()}
              </span>
            </Tooltip></div>
          <div className="satellite-tile__subtitle">{t.satellites.subtitleAfterTax}</div>
        </div>

        <div className="satellite-tile">
          <div className="satellite-tile__header">
            <span className="satellite-tile__label">
              {t.satellites.withInflation}
              <Tooltip content={(t.tooltips as any).withInflation} />
            </span>
            {/* Inflation Delta */}
            <DeltaBadge 
              value={expected.adjustedForInflation - expected.endValue} 
              formattedValue={formatLocal(Math.abs(expected.adjustedForInflation - expected.endValue))}
              tooltipData={getDeltaTooltip('withInflation', {
                contributions: expected.totalContributions,
                nominal: expected.endValue,
                nominalAfterTax: (expected as any).nominalAfterTax,
                withInflation: expected.adjustedForInflation,
                totalTax: expected.endValue - (expected as any).nominalAfterTax,
                years,
                inflationRate: infl
              }, t, lang)}
            />
          </div>
          <div className="satellite-tile__value numbers">{formatLocal(expected.adjustedForInflation)}
            <Tooltip content={(() => {
                if (expected.totalContributions <= 0) return '';
                const p = ((expected.adjustedForInflation - expected.totalContributions) / expected.totalContributions) * 100;
                const d = Math.abs(expected.adjustedForInflation - expected.totalContributions);
                const s = p >= 0 ? '+' : '−';
                let str = Math.abs(p).toFixed(1);
                if (lang === 'uk' || lang === 'pl' || lang === 'de' || lang === 'fr' || lang === 'es' || lang === 'it' || lang === 'pt' || lang === 'tr') {
                  str = str.replace('.', ',');
                }
                return (t.deltas.nominalFormulaPercent || 'Growth:<br />{result} − {contributions} = {delta}<br />{delta} ÷ {contributions} × 100 = {pct}')
                  .replaceAll('{result}', formatLocal(expected.adjustedForInflation))
                  .replaceAll('{contributions}', formatLocal(expected.totalContributions))
                  .replaceAll('{delta}', s + ' ' + formatLocal(d))
                  .replaceAll('{pct}', s + str + '%');
              })()} position="top">
              <span className="satellite-tile__pct" style={{ fontSize: '15px', opacity: 0.7, marginLeft: '6px', fontWeight: 600, cursor: 'help' }}>
                {(() => {
                if (expected.totalContributions <= 0) return null;
                const pct = ((expected.adjustedForInflation - expected.totalContributions) / expected.totalContributions) * 100;
                const sign = pct >= 0 ? '+' : '−';
                let str = Math.abs(pct).toFixed(1);
                if (lang === 'uk' || lang === 'pl' || lang === 'de' || lang === 'fr' || lang === 'es' || lang === 'it' || lang === 'pt' || lang === 'tr') {
                  str = str.replace('.', ',');
                }
                return `(${sign}${str}%)`;
              })()}
              </span>
            </Tooltip></div>
          <div className="satellite-tile__subtitle">{t.satellites.subtitleInflation}</div>
        </div>
      </section>
    </div>
  );
});
