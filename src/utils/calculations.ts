import type { CalculatorInput, SimulationResult, CalculationResult, PeriodResult } from '../types';

const periodsPerYear = (compounding: string): number => {
  switch (compounding) {
    case 'daily': return 365;
    case 'monthly': return 12;
    case 'quarterly': return 4;
    case 'semiannual': return 2;
    case 'annual': return 1;
    default: return 12;
  }
};

const calculateSingleScenario = (input: CalculatorInput, overrideRate?: number): SimulationResult => {
  const initialDeposit = Number(input.initialDeposit) || 0;
  const years = Number(input.years) || 0;
  const annualReturnPct = overrideRate !== undefined ? overrideRate : (Number(input.annualRate) || 0);
  const rawContribution = Number(input.monthlyContribution) || 0;
  const contributionFrequency = input.contributionFrequency || 'monthly';
  let avgMonthlyContribution = 0;
  
  if (contributionFrequency === 'daily') {
    avgMonthlyContribution = rawContribution * (365 / 12);
  } else if (contributionFrequency === 'weekly') {
    avgMonthlyContribution = rawContribution * (52 / 12);
  } else if (contributionFrequency === 'monthly') {
    avgMonthlyContribution = rawContribution;
  } else if (contributionFrequency === 'none') {
    avgMonthlyContribution = 0;
  }

  const inflationRate = Number(input.inflationRate) || 0;
  const taxRate = Number(input.taxRate) || 0;
  const taxMode = input.taxMode;

  const n = periodsPerYear(input.compounding || 'monthly');
  let r = annualReturnPct / 100;
  
  if (r / n <= -1) {
    r = -0.99 * n; // clamp to prevent negative balance crash
  }

  const i = inflationRate / 100;
  const tax = taxRate / 100;

  const periodicRate = r / n;
  const monthlyRate = Math.pow(1 + periodicRate, n / 12) - 1;

  let balance = initialDeposit;
  let nominalBalance = initialDeposit;
  let contributions = initialDeposit;
  let taxesPaid = 0;
  let yearStartBalance = initialDeposit;
  let yearContributions = 0;

  const yearlyData: PeriodResult[] = [];
  const monthlyData: PeriodResult[] = [];

  monthlyData.push({
    year: 0,
    month: 0,
    label: 'Start',
    nominalValue: initialDeposit,
    inflationAdjustedValue: initialDeposit,
    nominalAfterTax: initialDeposit,
    afterTax: initialDeposit,
    afterTaxAndInflation: initialDeposit,
    totalContributions: initialDeposit,
    netProfit: 0,
    taxesPaidCumulative: 0
  });

  const totalMonths = years * 12;

  for (let month = 1; month <= totalMonths; month++) {
    // 1. Interest for the month
    balance = balance * (1 + monthlyRate);
    nominalBalance = nominalBalance * (1 + monthlyRate);

    // 2. Add contribution
    let currentMonthContribution = 0;
    if (contributionFrequency === 'daily' || contributionFrequency === 'weekly' || contributionFrequency === 'monthly') {
      currentMonthContribution = avgMonthlyContribution;
    } else if (contributionFrequency === 'quarterly' && month % 3 === 0) {
      currentMonthContribution = rawContribution;
    } else if (contributionFrequency === 'semiannual' && month % 6 === 0) {
      currentMonthContribution = rawContribution;
    } else if (contributionFrequency === 'annual' && month % 12 === 0) {
      currentMonthContribution = rawContribution;
    }

    balance += currentMonthContribution;
    nominalBalance += currentMonthContribution;
    contributions += currentMonthContribution;
    yearContributions += currentMonthContribution;

    // 3. Process taxes
    let currentMonthTax = 0;
    
    // Annual tax (end of year)
    if (taxMode === 'annual' && month % 12 === 0) {
      const yearGain = balance - yearStartBalance - yearContributions;
      if (yearGain > 0) {
        currentMonthTax = yearGain * tax;
      }
    }
    
    // Exit tax (end of term)
    if (taxMode === 'on_exit' && month === totalMonths) {
      const totalGain = balance - contributions;
      if (totalGain > 0) {
        currentMonthTax = totalGain * tax;
      }
    }

    if (currentMonthTax > 0) {
      balance -= currentMonthTax;
      taxesPaid += currentMonthTax;
    }

    // 4. Save monthly data
    const year = Math.ceil(month / 12);
    
    monthlyData.push({
      year,
      month,
      label: `Month ${month}`,
      nominalValue: nominalBalance,
      inflationAdjustedValue: nominalBalance / Math.pow(1 + i, month / 12),
      nominalAfterTax: balance,
      afterTax: balance,
      afterTaxAndInflation: balance / Math.pow(1 + i, month / 12),
      totalContributions: contributions,
      netProfit: nominalBalance - contributions,
      taxesPaidCumulative: taxesPaid
    });

    // 5. Save yearly data
    if (month % 12 === 0) {
      yearlyData.push({
        year,
        label: `Year ${year}`,
        nominalValue: nominalBalance,
        inflationAdjustedValue: nominalBalance / Math.pow(1 + i, year),
        nominalAfterTax: balance,
        afterTax: balance,
        afterTaxAndInflation: balance / Math.pow(1 + i, year),
        totalContributions: contributions,
        netProfit: nominalBalance - contributions,
        taxesPaidCumulative: taxesPaid
      });

      yearStartBalance = balance;
      yearContributions = 0;
    }
  }

  // Handle years == 0 edge case
  if (totalMonths === 0) {
    const defaultRow = {
        year: 0,
        label: 'Year 0',
        nominalValue: initialDeposit,
        inflationAdjustedValue: initialDeposit,
        nominalAfterTax: initialDeposit,
        afterTax: initialDeposit,
        afterTaxAndInflation: initialDeposit,
        totalContributions: initialDeposit,
        netProfit: 0,
        taxesPaidCumulative: 0
    };
    yearlyData.push(defaultRow);
  }

  const lastYear = yearlyData[yearlyData.length - 1] || yearlyData[0] || monthlyData[0];
  const userCagr = lastYear.totalContributions > 0 && years > 0
    ? (Math.pow(lastYear.afterTaxAndInflation / lastYear.totalContributions, 1 / years) - 1) * 100
    : 0;

  return {
    endValue: lastYear.nominalValue,
    adjustedForInflation: lastYear.inflationAdjustedValue,
    nominalAfterTax: lastYear.nominalAfterTax,
    afterTax: lastYear.afterTax,
    afterTaxAndInflation: lastYear.afterTaxAndInflation,
    returnPercentage: userCagr,
    totalContributions: lastYear.totalContributions,
    netProfit: lastYear.netProfit,
    totalTaxes: lastYear.taxesPaidCumulative,
    yearlyData,
    monthlyData
  };
};

export const calculateCompoundInterest = (input: CalculatorInput): CalculationResult => {
  if (!input.varianceEnabled) {
    return {
      expected: calculateSingleScenario(input),
      inputs: input
    };
  }

  const pessimistic = calculateSingleScenario(input, Number(input.minReturnPct) || 0);
  const expected = calculateSingleScenario(input, Number(input.annualRate) || 0);
  const optimistic = calculateSingleScenario(input, Number(input.maxReturnPct) || 0);

  return {
    expected,
    pessimistic,
    optimistic,
    inputs: input
  };
};
