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

/** Hard ceiling on the projection horizon. Mirrors the 1..100 range enforced by
 *  InputSection, but applied here too: the form only validates on blur, so a
 *  pasted "999999" would otherwise reach this loop and hang the WebView. */
export const MAX_YEARS = 100;

const clampYears = (value: number): number => {
  const years = Math.floor(Number(value) || 0);
  if (!Number.isFinite(years) || years < 0) return 0;
  return Math.min(years, MAX_YEARS);
};

/**
 * Money-weighted (internal) rate of return for the projection's actual cash
 * flows, solved by bisection on the monthly discount rate and annualised.
 *
 * Every contribution is an outflow on the month it is made and the final balance
 * is a single inflow at the end, so unlike a plain end/start ratio this does not
 * pretend that later contributions were invested from day one.
 */
const annualisedIrr = (monthlyOutflows: number[], finalValue: number): number => {
  // outflows[m] is the cash paid in month m; the horizon is the last index.
  const horizon = monthlyOutflows.length - 1;
  if (horizon <= 0) return 0;

  const totalOut = monthlyOutflows.reduce((sum, v) => sum + v, 0);
  if (totalOut <= 0 || finalValue <= 0) return 0;

  // npv is strictly decreasing in the rate, so a sign change brackets the root.
  const npv = (monthlyRate: number): number => {
    let value = finalValue / Math.pow(1 + monthlyRate, horizon);
    for (let m = 0; m <= horizon; m++) {
      if (monthlyOutflows[m] === 0) continue;
      value -= monthlyOutflows[m] / Math.pow(1 + monthlyRate, m);
    }
    return value;
  };

  // Monthly bounds of ±50% cover roughly -99.8%..+12800% a year — far wider than
  // any input the form accepts, while staying inside safe floating-point range.
  let low = -0.5;
  let high = 0.5;
  if (npv(low) <= 0) return (Math.pow(1 + low, 12) - 1) * 100;
  if (npv(high) >= 0) return (Math.pow(1 + high, 12) - 1) * 100;

  for (let iter = 0; iter < 200 && high - low > 1e-12; iter++) {
    const mid = (low + high) / 2;
    if (npv(mid) > 0) low = mid;
    else high = mid;
  }

  const annual = Math.pow(1 + (low + high) / 2, 12) - 1;
  return Number.isFinite(annual) ? annual * 100 : 0;
};

const calculateSingleScenario = (input: CalculatorInput, overrideRate?: number): SimulationResult => {
  const initialDeposit = Number(input.initialDeposit) || 0;
  const years = clampYears(input.years);
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
  /** Cash paid in each month, deflated to today's money — the input to the real IRR. */
  const realOutflows: number[] = [initialDeposit];

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
    realOutflows.push(currentMonthContribution / Math.pow(1 + i, month / 12));

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

  // Real, money-weighted annual return. Both sides of the ratio are expressed in
  // today's money, so the figure answers "by what percent did my purchasing power
  // grow each year" — which is what the UI label and tooltip promise.
  const userCagr = years > 0
    ? annualisedIrr(realOutflows, lastYear.afterTaxAndInflation)
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
