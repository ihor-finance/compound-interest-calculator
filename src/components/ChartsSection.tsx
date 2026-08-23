import { useTranslation } from '../i18n/useTranslation';
import React, { useState, useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  ArcElement,
  Filler
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import type { CalculationResult } from '../types';
import { formatCurrency } from '../utils/formatting';
import '../App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend,
  ArcElement,
  Filler
);

(ChartTooltip.positioners as any).mobileBottom = function(this: any, elements: any[], eventPosition: any) {
  if (window.innerWidth < 768) {
    return {
      x: this.chart.chartArea.left + (this.chart.chartArea.right - this.chart.chartArea.left) / 2,
      y: this.chart.chartArea.bottom - 40 // Fixed near the bottom of chart area
    };
  }
  return (ChartTooltip.positioners as any).average.call(this, elements, eventPosition);
};

interface Props {
  results: CalculationResult;
  
  theme: 'light' | 'dark';
}

export const ChartsSection = React.memo(({ results, theme  }: Props) => {
  const { t, locale: lang } = useTranslation();
  const expected = results.expected;
  const { yearlyData } = expected;
  const hasVariance = !!results.pessimistic && !!results.optimistic;
  
  const [donutMode, setDonutMode] = useState<'amount' | 'percentage'>('amount');
  const [hiddenDatasets, setHiddenDatasets] = useState<Record<number, boolean>>({});

  const lineChartRef = useRef<any>(null);
  const donutChartRef = useRef<any>(null);

  // A touch screen never fires mouseout, so a tooltip opened by a tap stays on
  // screen with no way to close it — and on a phone in landscape it covers the
  // whole chart. Dismiss it when the next tap lands anywhere else.
  useEffect(() => {
    const dismiss = (event: Event) => {
      for (const ref of [lineChartRef, donutChartRef]) {
        const chart = ref.current;
        if (!chart || !chart.canvas) continue;
        if (chart.canvas.contains(event.target as Node)) continue;
        if (!chart.tooltip?.getActiveElements()?.length) continue;
        chart.setActiveElements([]);
        chart.tooltip.setActiveElements([], { x: 0, y: 0 });
        chart.update('none');
      }
    };
    document.addEventListener('pointerdown', dismiss, true);
    return () => document.removeEventListener('pointerdown', dismiss, true);
  }, []);

  const toggleDataset = (index: number) => {
    setHiddenDatasets(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Chart styling based on new design variables
  const colorPrimaryDark = '#0F7A38';
  const colorSecondary = '#4F8FE0';
  const colorPrimaryAccent = '#86C95E';
  const colorNeutral = '#9AA3AE';

  const gridColor = theme === 'dark' ? '#2A333E' : '#F4F6F8';
  const tooltipBg = theme === 'dark' ? '#1C242E' : '#FFFFFF';
  const tooltipTextTitle = theme === 'dark' ? '#F2F4F7' : '#0F1B2D';
  const tooltipTextBody = theme === 'dark' ? '#A6B0BC' : '#5B6776';
  const tooltipBorder = theme === 'dark' ? '#2A333E' : '#E5E9EE';
  
  const datasets = [
      {
        label: t.chart.nominal,
        data: yearlyData.map(d => d.nominalValue),
        borderColor: colorPrimaryDark,
        backgroundColor: colorPrimaryDark,
        pointBackgroundColor: colorPrimaryDark,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: colorPrimaryDark,
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2,
        borderWidth: 2,
        hidden: hiddenDatasets[0] || false
      },
      {
        label: t.satellites.withInflation,
        data: yearlyData.map(d => d.inflationAdjustedValue),
        borderColor: colorSecondary,
        backgroundColor: colorSecondary,
        pointBackgroundColor: colorSecondary,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: colorSecondary,
        pointHoverBorderColor: '#fff',
        borderWidth: 2,
        hidden: hiddenDatasets[1] || false
      },
      {
        label: t.chart.afterTaxAndInflation,
        data: yearlyData.map(d => d.afterTaxAndInflation),
        borderColor: colorPrimaryAccent,
        backgroundColor: colorPrimaryAccent,
        pointBackgroundColor: colorPrimaryAccent,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: colorPrimaryAccent,
        pointHoverBorderColor: '#fff',
        borderWidth: 2,
        hidden: hiddenDatasets[2] || false
      },
      {
        label: t.chart.contributions,
        data: yearlyData.map(d => d.totalContributions),
        borderColor: colorNeutral,
        backgroundColor: colorNeutral,
        pointBackgroundColor: colorNeutral,
        borderDash: [4, 4],
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: colorNeutral,
        pointHoverBorderColor: '#fff',
        borderWidth: 2,
        hidden: hiddenDatasets[3] || false
      }
    ];

  if (hasVariance) {
    // Add pessimistic and optimistic bounds for the After Tax & Inflation line (index 2)
    datasets.push({
      label: t.chart.optimistic || 'Optimistic',
      data: results.optimistic!.yearlyData.map(d => d.afterTaxAndInflation),
      borderColor: '#16a34a',
      backgroundColor: theme === 'dark' ? 'rgba(22, 163, 74, 0.15)' : 'rgba(22, 163, 74, 0.15)',
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 0,
      borderWidth: 1.5,
      borderDash: [4, 2],
      fill: 2, // Fill down to the Expected dataset (index 2)
      hidden: hiddenDatasets[4] || false
    } as any);
    datasets.push({
      label: t.chart.pessimistic || 'Pessimistic',
      data: results.pessimistic!.yearlyData.map(d => d.afterTaxAndInflation),
      borderColor: '#dc2626',
      backgroundColor: theme === 'dark' ? 'rgba(220, 38, 38, 0.15)' : 'rgba(220, 38, 38, 0.15)',
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 0,
      borderWidth: 1.5,
      borderDash: [4, 2],
      fill: 2, // Fill up to the Expected dataset (index 2)
      hidden: hiddenDatasets[5] || false
    } as any);
  }

  const lineChartData = {
    labels: yearlyData.map(d => d.year),
    datasets: datasets as any
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        display: false // Using custom HTML legend
      },
      tooltip: {
        position: 'mobileBottom',
        backgroundColor: tooltipBg,
        titleColor: tooltipTextTitle,
        bodyColor: tooltipTextBody,
        borderColor: tooltipBorder,
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: false,
        titleFont: { family: "'Roboto', sans-serif", size: 14, weight: 'bold' },
        bodyFont: { family: "'Roboto', sans-serif", size: 13 },
        callbacks: {
          title: function(context: any) {
            // Was hardcoded English while the rest of the chart is translated.
            return (t.table.yearLabel || 'Year {n}').replace('{n}', String(context[0].label));
          },
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += formatCurrency(context.parsed.y, lang);
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { family: "'Roboto', sans-serif" }, color: tooltipTextBody }
      },
      y: {
        border: { display: false },
        grid: { color: gridColor },
        ticks: {
          color: tooltipTextBody,
          font: { family: "'Roboto', sans-serif" },
          callback: function(value: any) {
            return new Intl.NumberFormat(lang, {
              style: 'decimal',
              notation: 'compact',
              maximumFractionDigits: 1
            }).format(value);
          }
        }
      }
    }
  };

  // Initial deposit approximation for donut
  const initialDeposit = yearlyData.length > 0 ? yearlyData[0].totalContributions - (expected.totalContributions - yearlyData[0].totalContributions) / (yearlyData.length - 1 || 1) : 0;
  const contributionsOnly = expected.totalContributions - initialDeposit;
  
  // Net profit (after tax) for the donut segment
  const netProfitAfterTax = expected.afterTax - expected.totalContributions;

  const donutDataRaw = [
    { label: t.form.initialDeposit, value: initialDeposit, color: colorPrimaryDark },
    { label: t.chart.contributions, value: contributionsOnly, color: colorSecondary },
    { label: t.donut.netProfit, value: Math.max(0, netProfitAfterTax), color: colorPrimaryAccent }
  ];

  const doughnutData = {
    labels: donutDataRaw.map(d => d.label),
    datasets: [
      {
        data: donutDataRaw.map(d => d.value),
        backgroundColor: donutDataRaw.map(d => d.color),
        borderWidth: 0,
        hoverOffset: 8
      },
    ],
  };

  const totalForDonut = expected.afterTax;

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    layout: { padding: 10 },
    plugins: {
      legend: {
        display: false // We will build a custom HTML legend
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const val = context.parsed;
            if (donutMode === 'percentage') {
              const base = totalForDonut;
              const pct = base > 0 ? (val / base) * 100 : 0;
              return `${context.label}: ${pct.toFixed(1)}%`;
            }
            return `${context.label}: ${formatCurrency(val, lang)}`;
          }
        }
      }
    }
  };



  return (
    <div className="charts-section">
      <div className="chart-box chart-card line-chart card">
        <header className="chart-header">
          <h3 className="chart-title">{t.chart.title}</h3>
        </header>
        
        <div className="chart-content">
          <div className="chart-container">
            <Line ref={lineChartRef} key={`line-${theme}`} options={lineChartOptions as any} data={lineChartData} plugins={[]} />
          </div>
          
          <div className="chart-legend-side">
            <div className="legend-section">
              <div className="legend-section-title">{t.chart.scenarios || 'Scenarios'}</div>
              <div 
                className="legend-item" 
                onClick={() => toggleDataset(0)} 
                style={{ cursor: 'pointer', opacity: hiddenDatasets[0] ? 0.5 : 1, textDecoration: hiddenDatasets[0] ? 'line-through' : 'none' }}
              >
                <span className="dot" style={{backgroundColor: colorPrimaryDark}}></span>
                <span>{t.chart.nominal}</span>
              </div>
              <div 
                className="legend-item" 
                onClick={() => toggleDataset(1)} 
                style={{ cursor: 'pointer', opacity: hiddenDatasets[1] ? 0.5 : 1, textDecoration: hiddenDatasets[1] ? 'line-through' : 'none' }}
              >
                <span className="dot" style={{backgroundColor: colorSecondary}}></span>
                <span>{t.satellites.withInflation}</span>
              </div>
              <div 
                className="legend-item" 
                onClick={() => toggleDataset(2)} 
                style={{ cursor: 'pointer', opacity: hiddenDatasets[2] ? 0.5 : 1, textDecoration: hiddenDatasets[2] ? 'line-through' : 'none' }}
              >
                <span className="dot" style={{backgroundColor: colorPrimaryAccent}}></span>
                <span>{t.chart.afterTaxAndInflation}</span>
              </div>
              <div 
                className="legend-item" 
                onClick={() => toggleDataset(3)} 
                style={{ cursor: 'pointer', opacity: hiddenDatasets[3] ? 0.5 : 1, textDecoration: hiddenDatasets[3] ? 'line-through' : 'none' }}
              >
                <span className="dot" style={{backgroundColor: colorNeutral}}></span>
                <span>{t.chart.contributions}</span>
              </div>
            </div>
            
            {hasVariance && (
              <div className="legend-section">
                <div className="legend-section-title">{t.chart.rateRange || 'Rate range'}</div>
                <div 
                  className="legend-item" 
                  onClick={() => toggleDataset(4)} 
                  style={{ cursor: 'pointer', opacity: hiddenDatasets[4] ? 0.5 : 1, textDecoration: hiddenDatasets[4] ? 'line-through' : 'none' }}
                >
                  <span className="line-legend-marker" style={{backgroundColor: '#16a34a'}}></span>
                  <span>{t.chart.optimistic || 'Optimistic'}</span>
                </div>
                <div 
                  className="legend-item" 
                  onClick={() => toggleDataset(5)} 
                  style={{ cursor: 'pointer', opacity: hiddenDatasets[5] ? 0.5 : 1, textDecoration: hiddenDatasets[5] ? 'line-through' : 'none' }}
                >
                  <span className="line-legend-marker" style={{backgroundColor: '#dc2626'}}></span>
                  <span>{t.chart.pessimistic || 'Pessimistic'}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <footer className="chart-disclaimer">
          {t.chart.disclaimer || 'Calculations are approximate and illustrative. Actual results may differ.'}
        </footer>
      </div>
      
      <div className="structure-box chart-card card">
        <div className="structure-header">
          <h3 className="chart-title" style={{ marginBottom: 0 }}>{t.donut.title}</h3>
          <div className="structure-toggle">
            <div className="tax-mode-toggle" style={{ padding: '2px' }}>
              <button 
                className={`tax-mode-btn ${donutMode === 'percentage' ? 'active' : ''}`}
                style={{ padding: '4px 8px', fontSize: '13px' }}
                onClick={() => setDonutMode('percentage')}
              >{t.donut.percent}</button>
              <button 
                className={`tax-mode-btn ${donutMode === 'amount' ? 'active' : ''}`}
                style={{ padding: '4px 8px', fontSize: '13px' }}
                onClick={() => setDonutMode('amount')}
              >{t.donut.amount}</button>
            </div>
          </div>
        </div>
        
        <div className="structure-content">
          <div className="donut-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '280px', aspectRatio: '1/1' }}>
              <Doughnut ref={donutChartRef} key={`donut-${theme}`} options={doughnutOptions} data={doughnutData} />
            </div>
          </div>

          <div className="legend-container">
            {donutDataRaw.map((item) => {
              const base = totalForDonut;
              const pct = base > 0 ? (item.value / base) * 100 : 0;
              const displayVal = donutMode === 'percentage' 
                ? `${pct.toFixed(1)}%`
                : formatCurrency(item.value, lang);
              
              return (
                <div key={item.label} className="legend-row">
                  <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
                  <span className="legend-label">{item.label}</span>
                  <span className="legend-value numbers">{displayVal}</span>
                </div>
              );
            })}
            
            {/* Separate Taxes Paid row */}
            <div className="legend-row" style={{ borderTop: '1px solid var(--border)', paddingTop: '8px', marginTop: '4px' }}>
              <span className="legend-dot" style={{ backgroundColor: colorNeutral }}></span>
              <span className="legend-label">{t.donut.taxesPaid}</span>
              <span className="legend-value numbers">
                {donutMode === 'percentage' 
                  ? '-' 
                  : formatCurrency(expected.totalTaxes, lang)}
              </span>
            </div>
          </div>
        </div>
        
        {netProfitAfterTax < 0 && (
          <div style={{ marginBottom: '12px', fontSize: '13px', color: '#DC2626', fontStyle: 'italic' }}>
            {t.donut.warningNegativeProfit}
          </div>
        )}

        <footer className="structure-disclaimer">
          {t.donut.disclaimer || 'Approximate breakdown. Actual values depend on the chosen instrument, tax rates and conditions.'}
        </footer>
      </div>
    </div>
  );
});
