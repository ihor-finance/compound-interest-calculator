import React, { useState } from 'react';
import type { CalculatorInput } from '../types';
import { useTranslation } from '../i18n/useTranslation';
import { Tooltip } from './Tooltip';
import { DollarSign, Calendar, TrendingUp, PiggyBank, Percent, Landmark, Info } from 'lucide-react';
import '../App.css';

interface Props {
  input: CalculatorInput;
  updateInput: (key: keyof CalculatorInput, value: number | string | boolean) => void;
}

export const InputSection = ({ input, updateInput }: Props) => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState<Partial<Record<keyof CalculatorInput, boolean>>>({});

  const validateAndParse = (key: keyof CalculatorInput, value: string, min?: number, max?: number) => {
    let num = parseFloat(value);
    let hasError = false;

    if (isNaN(num)) {
      num = 0;
      hasError = true;
    } else {
      if (min !== undefined && num < min) {
        num = min;
        hasError = true;
      }
      if (max !== undefined && num > max) {
        num = max;
        hasError = true;
      }
    }

    setErrors(prev => ({ ...prev, [key]: hasError }));
    updateInput(key, num);
  };

  const handleInputChange = (key: keyof CalculatorInput) => (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers, decimal point, and minus sign
    const val = e.target.value.replace(/[^0-9.-]/g, '');
    updateInput(key, val);
  };

  const handleBlur = (key: keyof CalculatorInput, min?: number, max?: number) => (e: React.FocusEvent<HTMLInputElement>) => {
    validateAndParse(key, e.target.value, min, max);
  };



  return (
    <div className="input-section">
      <div className="input-group">
        <label>
          {t.form.initialDeposit}
          <Tooltip content={t.tooltips.initialDeposit} position="bottom" />
        </label>
        <div className={`input-field-wrapper ${errors.initialDeposit ? 'error' : ''}`}>
          <div className="input-icon"><DollarSign size={16} /></div>
          <input dir="ltr" type="text" inputMode="decimal"
            value={input.initialDeposit} 
            onChange={handleInputChange('initialDeposit')} 
            onBlur={handleBlur('initialDeposit', 0)}
          />
        </div>
        {errors.initialDeposit && <div className="error-caption">Invalid amount</div>}
      </div>
      
      <div className="input-group">
        <label>
          {t.form.period}
          <Tooltip content={t.tooltips.period} position="bottom" />
        </label>
        <div className={`input-field-wrapper ${errors.years ? 'error' : ''}`}>
          <div className="input-icon"><Calendar size={16} /></div>
          <input dir="ltr" type="text" inputMode="numeric"
            value={input.years} 
            onChange={handleInputChange('years')} 
            onBlur={handleBlur('years', 1, 100)}
          />
          <span className="suffix">{t.form.years}</span>
        </div>
        {errors.years && <div className="error-caption">Must be between 1 and 100</div>}
      </div>
      
      <div className="input-group">
        <label>
          {t.form.annualReturn}
          <Tooltip content={t.tooltips.annualReturn} />
        </label>
        <div className={`input-field-wrapper ${errors.annualRate ? 'error' : ''}`}>
          <div className="input-icon"><TrendingUp size={16} /></div>
          <input dir="ltr" type="text" inputMode="decimal"
            value={input.annualRate} 
            onChange={handleInputChange('annualRate')} 
            onBlur={handleBlur('annualRate', -100, 1000)}
          />
          <span className="suffix">%</span>
        </div>
      </div>

      <div className="variance-toggle-group" style={{ marginBottom: '16px' }}>
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {t.form.rateRange}
            <Tooltip content={t.tooltips.rateRange} />
          </div>
          <div className={`switch-toggle ${input.varianceEnabled ? 'on' : 'off'}`} onClick={() => updateInput('varianceEnabled', !input.varianceEnabled as any)}>
            <div className="switch-knob"></div>
          </div>
        </label>
      </div>

      {input.varianceEnabled && (
        <div className="variance-inputs" style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
          <div className="input-group" style={{ flex: 1, marginBottom: 0 }}>
            <label style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {t.form.minReturn}
              <Tooltip content={t.tooltips.minReturn} />
            </label>
            <div className={`input-field-wrapper ${errors.minReturnPct || input.minReturnPct > input.maxReturnPct ? 'error' : ''}`} style={{ height: '36px' }}>
              <input dir="ltr" type="text" inputMode="decimal"
                value={input.minReturnPct} 
                onChange={handleInputChange('minReturnPct')} 
                onBlur={handleBlur('minReturnPct', -100, 1000)}
              />
              <span className="suffix">%</span>
            </div>
          </div>
          
          <div className="input-group" style={{ flex: 1, marginBottom: 0 }}>
            <label style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {t.form.maxReturn}
              <Tooltip content={t.tooltips.maxReturn} />
            </label>
            <div className={`input-field-wrapper ${errors.maxReturnPct || input.minReturnPct > input.maxReturnPct ? 'error' : ''}`} style={{ height: '36px' }}>
              <input dir="ltr" type="text" inputMode="decimal"
                value={input.maxReturnPct} 
                onChange={handleInputChange('maxReturnPct')} 
                onBlur={handleBlur('maxReturnPct', -100, 1000)}
              />
              <span className="suffix">%</span>
            </div>
          </div>
        </div>
      )}
      {input.varianceEnabled && input.minReturnPct > input.maxReturnPct && (
        <div className="error-caption" style={{ marginTop: '-12px', marginBottom: '16px' }}>Min should be ≤ Max</div>
      )}
      {input.varianceEnabled && input.minReturnPct < 0 && (
        <div className="rate-range-info" style={{ marginBottom: '16px' }}>
          <Info className="rate-range-info__icon" size={16} />
          <div className="rate-range-info__text">
            {(t.warnings.negativeRateRange || '').replace('{minRate}', input.minReturnPct.toString())}
          </div>
        </div>
      )}

      <div className="input-group">
        <label>
          {t.form.compounding}
          <Tooltip content={t.tooltips.compounding} />
        </label>
        <div className="selector-wrapper" style={{ width: '100%' }}>
          <select 
            className="input-field-wrapper"
            style={{ width: '100%', appearance: 'none', backgroundColor: 'var(--surface)', color: 'var(--text-primary)', backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239AA3AE%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px', paddingRight: '36px' }}
            value={input.compounding}
            onChange={(e) => updateInput('compounding', e.target.value)}
          >
            <option value="daily">{t.form.compoundingDaily}</option>
            <option value="monthly">{t.form.compoundingMonthly}</option>
            <option value="quarterly">{t.form.compoundingQuarterly}</option>
            <option value="semiannual">{t.form.compoundingSemiannual}</option>
            <option value="annual">{t.form.compoundingAnnually}</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>
          {t.form.contributions}
          <Tooltip content={t.tooltips.contributions} />
        </label>
        <div className="contributions-row" style={{ display: 'flex', gap: '8px' }}>
          <div className={`input-field-wrapper ${errors.monthlyContribution ? 'error' : ''} ${input.contributionFrequency === 'none' ? 'disabled' : ''}`} style={{ flex: 1, opacity: input.contributionFrequency === 'none' ? 0.5 : 1, pointerEvents: input.contributionFrequency === 'none' ? 'none' : 'auto' }}>
            <div className="input-icon"><PiggyBank size={16} /></div>
            <input dir="ltr" type="text" inputMode="decimal"
              value={input.monthlyContribution} 
              onChange={handleInputChange('monthlyContribution')} 
              onBlur={handleBlur('monthlyContribution', 0)}
              disabled={input.contributionFrequency === 'none'}
            />
          </div>
          <div className="selector-wrapper" style={{ width: '140px', flexShrink: 0 }}>
            <select 
              className="input-field-wrapper"
              style={{ width: '100%', height: '100%', appearance: 'none', backgroundColor: 'var(--surface)', color: 'var(--text-primary)', backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239AA3AE%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px', paddingRight: '36px' }}
              value={input.contributionFrequency || 'monthly'}
              onChange={(e) => updateInput('contributionFrequency', e.target.value)}
            >
              <option value="none">{(t.form as any).noContribution || 'No contributions'}</option>
              <option value="daily">{t.form.compoundingDaily}</option>
              <option value="weekly">{t.form.compoundingWeekly || 'Weekly'}</option>
              <option value="monthly">{t.form.compoundingMonthly}</option>
              <option value="quarterly">{t.form.compoundingQuarterly}</option>
              <option value="semiannual">{t.form.compoundingSemiannual}</option>
              <option value="annual">{t.form.compoundingAnnually}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="input-group">
        <label>
          {t.form.inflation}
          <Tooltip content={t.tooltips.inflation} />
        </label>
        <div className={`input-field-wrapper ${errors.inflationRate ? 'error' : ''}`}>
          <div className="input-icon"><Percent size={16} /></div>
          <input dir="ltr" type="text" inputMode="decimal"
            value={input.inflationRate} 
            onChange={handleInputChange('inflationRate')} 
            onBlur={handleBlur('inflationRate', 0, 100)}
          />
          <span className="suffix">%</span>
        </div>
      </div>

      <div className="input-group">
        <label>
          {t.form.taxRate}
          <Tooltip content={t.tooltips.taxRate} />
        </label>
        <div className={`input-field-wrapper ${errors.taxRate ? 'error' : ''}`}>
          <div className="input-icon"><Landmark size={16} /></div>
          <input dir="ltr" type="text" inputMode="decimal"
            value={input.taxRate} 
            onChange={handleInputChange('taxRate')} 
            onBlur={handleBlur('taxRate', 0, 100)}
          />
          <span className="suffix">%</span>
        </div>
      </div>

      <div className="input-group">
        <label>
          {t.form.taxation}
          <Tooltip content={t.tooltips.taxRate} />
        </label>
        <div className="tax-mode-toggle" style={{ display: 'flex', width: '100%' }}>
          <button 
            className={`tax-mode-btn ${input.taxMode === 'annual' ? 'active' : ''}`}
            onClick={() => updateInput('taxMode', 'annual')}
            style={{ whiteSpace: 'nowrap' }}
          >{t.form.taxAnnual}</button>
          <button 
            className={`tax-mode-btn ${input.taxMode === 'on_exit' ? 'active' : ''}`}
            onClick={() => updateInput('taxMode', 'on_exit')}
            style={{ whiteSpace: 'nowrap' }}
          >{t.form.taxOnExit}</button>
        </div>
      </div>
    </div>
  );
};
