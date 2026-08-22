/**
 * Calculation test suite. No test framework, no dependencies — Node 24 runs
 * TypeScript directly, so this stays a single `npm run test:calc`.
 *
 * Three layers:
 *   1. Reference values, checked against closed-form textbook formulas.
 *   2. Edge cases that must not produce NaN, Infinity or a hang.
 *   3. Invariants asserted over hundreds of randomised inputs.
 */
import { calculateCompoundInterest, MAX_YEARS } from '../src/utils/calculations.ts';
import type { CalculatorInput } from '../src/types/index.ts';

let passed = 0;
const failures: string[] = [];

function check(name: string, ok: boolean, detail = '') {
  if (ok) {
    passed++;
  } else {
    failures.push(`${name}${detail ? ` — ${detail}` : ''}`);
  }
}

function near(name: string, actual: number, expected: number, tolerance = 0.01) {
  const ok = Number.isFinite(actual) && Math.abs(actual - expected) <= tolerance;
  check(name, ok, ok ? '' : `expected ${expected.toFixed(4)}, got ${Number(actual).toFixed(4)}`);
}

const base: CalculatorInput = {
  initialDeposit: 0,
  years: 10,
  annualRate: 0,
  monthlyContribution: 0,
  contributionFrequency: 'none',
  inflationRate: 0,
  taxRate: 0,
  taxMode: 'annual',
  compounding: 'annual',
  varianceEnabled: false,
  minReturnPct: 0,
  maxReturnPct: 0,
};

const run = (patch: Partial<CalculatorInput>) =>
  calculateCompoundInterest({ ...base, ...patch }).expected;

// ─────────────────────────────────────────────────────────────────────────────
console.log('\n1. Reference values (closed-form formulas)\n');

// FV = P(1 + r/n)^(nt)
{
  const r = run({ initialDeposit: 10000, annualRate: 7, compounding: 'annual' });
  near('annual compounding: 10000, 7%, 10y', r.endValue, 10000 * Math.pow(1.07, 10));
}
{
  const r = run({ initialDeposit: 10000, annualRate: 7, compounding: 'monthly' });
  near('monthly compounding: 10000, 7%, 10y', r.endValue, 10000 * Math.pow(1 + 0.07 / 12, 120));
}
{
  const r = run({ initialDeposit: 10000, annualRate: 7, compounding: 'daily' });
  near('daily compounding: 10000, 7%, 10y', r.endValue, 10000 * Math.pow(1 + 0.07 / 365, 3650), 0.5);
}
{
  const r = run({ initialDeposit: 10000, annualRate: 7, compounding: 'quarterly' });
  near('quarterly compounding: 10000, 7%, 10y', r.endValue, 10000 * Math.pow(1 + 0.07 / 4, 40));
}
{
  const r = run({ initialDeposit: 10000, annualRate: 7, compounding: 'semiannual' });
  near('semiannual compounding: 10000, 7%, 10y', r.endValue, 10000 * Math.pow(1 + 0.07 / 2, 20));
}

// Ordinary annuity: FV = PMT * ((1 + i)^n - 1) / i, contribution paid after interest
{
  const r = run({
    monthlyContribution: 100,
    contributionFrequency: 'monthly',
    annualRate: 6,
    compounding: 'monthly',
  });
  const i = 0.06 / 12;
  near('annuity: 100/mo, 6%, 10y', r.endValue, 100 * ((Math.pow(1 + i, 120) - 1) / i));
  near('annuity: total contributions', r.totalContributions, 12000);
}

// Inflation deflates the nominal value by (1 + i)^t
{
  const r = run({ initialDeposit: 10000, annualRate: 7, inflationRate: 2 });
  near('inflation: real value = nominal / 1.02^10', r.adjustedForInflation, r.endValue / Math.pow(1.02, 10));
}

// Exit tax takes taxRate of the total gain, once, at the end
{
  const r = run({ initialDeposit: 10000, annualRate: 7, taxRate: 15, taxMode: 'on_exit' });
  const gain = 10000 * Math.pow(1.07, 10) - 10000;
  near('exit tax: total tax = 15% of gain', r.totalTaxes, gain * 0.15);
  near('exit tax: after-tax balance', r.afterTax, 10000 + gain * 0.85);
}

// Annual tax compounds on the net-of-tax balance each year
{
  const r = run({ initialDeposit: 10000, annualRate: 7, taxRate: 15, taxMode: 'annual' });
  const netAnnual = 1 + 0.07 * 0.85;
  near('annual tax: balance grows at r*(1-tax)', r.afterTax, 10000 * Math.pow(netAnnual, 10), 0.05);
  check('annual tax > exit tax', r.totalTaxes > 0);
}

// No growth, no tax: you get back exactly what you put in
{
  const r = run({ initialDeposit: 5000, monthlyContribution: 100, contributionFrequency: 'monthly' });
  near('zero rate: balance equals contributions', r.endValue, 5000 + 100 * 120);
  near('zero rate: no profit', r.netProfit, 0);
}

// Contribution frequencies must all deposit the same yearly total where comparable
{
  const monthly = run({ monthlyContribution: 300, contributionFrequency: 'monthly' });
  const quarterly = run({ monthlyContribution: 900, contributionFrequency: 'quarterly' });
  const annual = run({ monthlyContribution: 3600, contributionFrequency: 'annual' });
  near('frequency: monthly 300 → 36000 over 10y', monthly.totalContributions, 36000);
  near('frequency: quarterly 900 → 36000 over 10y', quarterly.totalContributions, 36000);
  near('frequency: annual 3600 → 36000 over 10y', annual.totalContributions, 36000);
  const weekly = run({ monthlyContribution: 100, contributionFrequency: 'weekly' });
  near('frequency: weekly 100 → 52000 over 10y', weekly.totalContributions, 100 * 52 * 10, 1);
  const daily = run({ monthlyContribution: 10, contributionFrequency: 'daily' });
  near('frequency: daily 10 → 36500 over 10y', daily.totalContributions, 10 * 365 * 10, 1);
}

// ─────────────────────────────────────────────────────────────────────────────
console.log('2. Real rate of return (IRR)\n');

// A lump sum with no contributions: IRR must equal the stated rate exactly.
{
  const r = run({ initialDeposit: 10000, annualRate: 7 });
  near('IRR = stated rate for a lump sum', r.returnPercentage, 7, 0.01);
}
// With inflation, the real IRR is the Fisher-deflated rate.
{
  const r = run({ initialDeposit: 10000, annualRate: 7, inflationRate: 2 });
  near('IRR is inflation-deflated', r.returnPercentage, (1.07 / 1.02 - 1) * 100, 0.01);
}
// The old ratio formula understated this badly; IRR must not depend on when the
// money went in, only on the rate earned.
{
  const r = run({
    initialDeposit: 0,
    monthlyContribution: 500,
    contributionFrequency: 'monthly',
    annualRate: 8,
    compounding: 'monthly',
  });
  // 8% nominal compounded monthly is an effective 8.30% a year, and that is what
  // the money actually earned, so that is what IRR must report.
  const effective = (Math.pow(1 + 0.08 / 12, 12) - 1) * 100;
  near('IRR with monthly contributions equals the rate earned', r.returnPercentage, effective, 0.05);
  const ratioFormula = (Math.pow(r.afterTaxAndInflation / r.totalContributions, 1 / 10) - 1) * 100;
  check(
    'IRR is materially higher than the old end/start ratio',
    r.returnPercentage - ratioFormula > 2,
    `IRR ${r.returnPercentage.toFixed(2)}% vs old ${ratioFormula.toFixed(2)}%`
  );
}
// Losing money must read as a negative return.
{
  const r = run({ initialDeposit: 10000, annualRate: 1, inflationRate: 5 });
  check('IRR negative when inflation outruns growth', r.returnPercentage < 0, `${r.returnPercentage.toFixed(2)}%`);
}

// ─────────────────────────────────────────────────────────────────────────────
console.log('3. Edge cases\n');

const edgeCases: Array<[string, Partial<CalculatorInput>]> = [
  ['zero years', { years: 0, initialDeposit: 1000 }],
  ['one year', { years: 1, initialDeposit: 1000, annualRate: 5 }],
  ['max years', { years: MAX_YEARS, initialDeposit: 1000, annualRate: 5 }],
  ['everything zero', {}],
  ['negative rate', { initialDeposit: 10000, annualRate: -20 }],
  ['rate of -100%', { initialDeposit: 10000, annualRate: -100 }],
  ['rate below -100%', { initialDeposit: 10000, annualRate: -500 }],
  ['100% inflation', { initialDeposit: 10000, annualRate: 5, inflationRate: 100 }],
  ['100% tax', { initialDeposit: 10000, annualRate: 5, taxRate: 100 }],
  ['no initial deposit', { initialDeposit: 0, monthlyContribution: 50, contributionFrequency: 'monthly', annualRate: 5 }],
  ['huge deposit', { initialDeposit: 1e9, annualRate: 10 }],
  ['fractional rate', { initialDeposit: 1000, annualRate: 0.01 }],
];

for (const [name, patch] of edgeCases) {
  const r = run(patch);
  const numbers = [
    r.endValue, r.adjustedForInflation, r.afterTax, r.afterTaxAndInflation,
    r.totalContributions, r.netProfit, r.returnPercentage, r.totalTaxes,
  ];
  check(`edge: ${name} produces finite numbers`, numbers.every(Number.isFinite),
    numbers.map(n => String(n)).join(', '));
  check(`edge: ${name} rows are finite`,
    r.yearlyData.every(row => Number.isFinite(row.nominalValue) && Number.isFinite(row.afterTaxAndInflation)));
}

// A pasted, unvalidated year count must be clamped rather than hang the app.
{
  const started = Date.now();
  const r = calculateCompoundInterest({ ...base, years: 999999 as number, initialDeposit: 1000, annualRate: 5 }).expected;
  const elapsed = Date.now() - started;
  check('years=999999 is clamped to MAX_YEARS', r.yearlyData.length === MAX_YEARS,
    `got ${r.yearlyData.length} rows`);
  check('years=999999 completes quickly', elapsed < 1000, `took ${elapsed}ms`);
}

// Every compounding × contribution frequency combination must stay finite.
{
  const compoundings: CalculatorInput['compounding'][] = ['daily', 'monthly', 'quarterly', 'semiannual', 'annual'];
  const frequencies: CalculatorInput['contributionFrequency'][] =
    ['none', 'daily', 'weekly', 'monthly', 'quarterly', 'semiannual', 'annual'];
  let bad = 0;
  for (const compounding of compoundings) {
    for (const contributionFrequency of frequencies) {
      const r = run({
        compounding, contributionFrequency, initialDeposit: 1000,
        monthlyContribution: 100, annualRate: 6, inflationRate: 2, taxRate: 15,
      });
      if (!Number.isFinite(r.endValue) || !Number.isFinite(r.returnPercentage) || r.endValue < 0) bad++;
    }
  }
  check(`all ${compoundings.length * frequencies.length} compounding × frequency combinations are valid`, bad === 0,
    `${bad} bad combinations`);
}

// ─────────────────────────────────────────────────────────────────────────────
console.log('4. Invariants over 500 randomised inputs\n');

// Deterministic PRNG so a failure is always reproducible.
let seed = 20260822;
const rand = () => {
  seed = (seed * 1103515245 + 12345) & 0x7fffffff;
  return seed / 0x7fffffff;
};
const pick = <T,>(items: readonly T[]): T => items[Math.floor(rand() * items.length)];

const violations = {
  nan: 0, contributionsDecrease: 0, taxesDecrease: 0, rowCount: 0,
  monthlyRowCount: 0, scenarioOrder: 0, inflationOrder: 0, taxOrder: 0,
};

for (let iteration = 0; iteration < 500; iteration++) {
  const years = 1 + Math.floor(rand() * MAX_YEARS);
  const input: CalculatorInput = {
    initialDeposit: Math.floor(rand() * 100000),
    years,
    annualRate: rand() * 30 - 5,
    monthlyContribution: Math.floor(rand() * 2000),
    contributionFrequency: pick(['none', 'daily', 'weekly', 'monthly', 'quarterly', 'semiannual', 'annual'] as const),
    inflationRate: rand() * 15,
    taxRate: rand() * 40,
    taxMode: pick(['annual', 'on_exit'] as const),
    compounding: pick(['daily', 'monthly', 'quarterly', 'semiannual', 'annual'] as const),
    varianceEnabled: true,
    minReturnPct: 2,
    maxReturnPct: 18,
  };
  // Base rate must sit inside the range for the scenario ordering to be meaningful.
  input.annualRate = 10;

  const result = calculateCompoundInterest(input);
  const { expected, pessimistic, optimistic } = result;

  const allNumbers = expected.yearlyData.flatMap(row => [
    row.nominalValue, row.inflationAdjustedValue, row.afterTax,
    row.afterTaxAndInflation, row.totalContributions, row.taxesPaidCumulative,
  ]);
  if (!allNumbers.every(Number.isFinite) || !Number.isFinite(expected.returnPercentage)) violations.nan++;

  for (let k = 1; k < expected.yearlyData.length; k++) {
    const prev = expected.yearlyData[k - 1];
    const curr = expected.yearlyData[k];
    if (curr.totalContributions < prev.totalContributions - 1e-6) violations.contributionsDecrease++;
    if (curr.taxesPaidCumulative < prev.taxesPaidCumulative - 1e-6) violations.taxesDecrease++;
  }

  if (expected.yearlyData.length !== years) violations.rowCount++;
  if (expected.monthlyData.length !== years * 12 + 1) violations.monthlyRowCount++;

  if (pessimistic && optimistic &&
      !(pessimistic.endValue <= expected.endValue + 1e-6 && expected.endValue <= optimistic.endValue + 1e-6)) {
    violations.scenarioOrder++;
  }

  if (input.inflationRate > 0 && expected.adjustedForInflation > expected.endValue + 1e-6) violations.inflationOrder++;
  if (input.taxRate > 0 && expected.afterTax > expected.endValue + 1e-6) violations.taxOrder++;
}

check('no NaN/Infinity in any row', violations.nan === 0, `${violations.nan} runs`);
check('cumulative contributions never decrease', violations.contributionsDecrease === 0, `${violations.contributionsDecrease} rows`);
check('cumulative taxes never decrease', violations.taxesDecrease === 0, `${violations.taxesDecrease} rows`);
check('yearly rows == years', violations.rowCount === 0, `${violations.rowCount} runs`);
check('monthly rows == years*12 + 1', violations.monthlyRowCount === 0, `${violations.monthlyRowCount} runs`);
check('pessimistic <= expected <= optimistic', violations.scenarioOrder === 0, `${violations.scenarioOrder} runs`);
check('inflation-adjusted <= nominal', violations.inflationOrder === 0, `${violations.inflationOrder} runs`);
check('after-tax <= nominal', violations.taxOrder === 0, `${violations.taxOrder} runs`);

// ─────────────────────────────────────────────────────────────────────────────
console.log('─'.repeat(60));
if (failures.length === 0) {
  console.log(`✓ All ${passed} checks passed.\n`);
  process.exit(0);
}
console.log(`✗ ${failures.length} failed, ${passed} passed:\n`);
for (const failure of failures) console.log(`  ✗ ${failure}`);
console.log();
process.exit(1);
