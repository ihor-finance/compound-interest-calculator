import { useState, useEffect, useMemo } from 'react';
import type { CalculatorInput, CalculationResult } from '../types';
import { calculateCompoundInterest } from '../utils/calculations';

const DEFAULT_INPUT: CalculatorInput = {
  initialDeposit: 10000,
  years: 15,
  annualRate: 8,
  monthlyContribution: 500,
  contributionFrequency: 'monthly',
  inflationRate: 2,
  taxRate: 15,
  taxMode: 'annual',
  compounding: 'annual',
  varianceEnabled: false,
  minReturnPct: 5,
  maxReturnPct: 15
};

export const useCalculatorForm = () => {
  const [input, setInput] = useState<CalculatorInput>(() => {
    const saved = localStorage.getItem('calculatorInput');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.taxMode) parsed.taxMode = 'annual'; // migration
        if (!parsed.contributionFrequency) parsed.contributionFrequency = 'monthly';
        return { ...DEFAULT_INPUT, ...parsed };
      } catch (e) {
        console.error('Failed to parse saved input', e);
      }
    }
    return DEFAULT_INPUT;
  });

  const [debouncedInput, setDebouncedInput] = useState<CalculatorInput>(input);

  // Debounce logic (200ms)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
      localStorage.setItem('calculatorInput', JSON.stringify(input));
    }, 200);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  const updateInput = (key: keyof CalculatorInput, value: number | string | boolean) => {
    setInput(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const results: CalculationResult = useMemo(() => {
    return calculateCompoundInterest(debouncedInput);
  }, [debouncedInput]);

  return {
    input,
    updateInput,
    results
  };
};
