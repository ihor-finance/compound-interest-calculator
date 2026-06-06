export interface CalculatorInput {
  initialDeposit: number;
  years: number;
  annualRate: number;
  monthlyContribution: number; // Keeping name for backwards compatibility, but it represents the amount per frequency
  contributionFrequency: 'none' | 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'semiannual' | 'annual';
  inflationRate: number;
  taxRate: number;
  taxMode: 'annual' | 'on_exit';
  compounding: 'daily' | 'monthly' | 'quarterly' | 'semiannual' | 'annual';
  varianceEnabled: boolean;
  minReturnPct: number;
  maxReturnPct: number;
}

export interface PeriodResult {
  year: number;
  month?: number;
  label: string;
  nominalValue: number;
  inflationAdjustedValue: number;
  nominalAfterTax: number;
  afterTaxAndInflation: number;
  afterTax: number;
  totalContributions: number;
  netProfit: number;
  taxesPaidCumulative: number;
}

export interface SimulationResult {
  endValue: number;
  adjustedForInflation: number;
  nominalAfterTax: number;
  afterTax: number;
  afterTaxAndInflation: number;
  totalContributions: number;
  netProfit: number;
  returnPercentage: number;
  totalTaxes: number;
  yearlyData: PeriodResult[];
  monthlyData: PeriodResult[];
}

export interface CalculationResult {
  expected: SimulationResult;
  pessimistic?: SimulationResult;
  optimistic?: SimulationResult;
  inputs: CalculatorInput;
}
