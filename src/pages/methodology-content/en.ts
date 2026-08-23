import type { MethodologyContent } from './types';

export const en: MethodologyContent = {
  title: 'Calculation methodology',
  updated: 'Applies to version 1.02',

  disclaimerTitle: 'Read this first',
  disclaimer: [
    'This page exists so that you can check every number the calculator shows. It sets out each formula, the order they are applied in, and a fully worked example you can reproduce with a pen and paper. It is educational information about how the tool works — it is not financial, investment, tax or legal advice, and it is not a recommendation to buy, sell or hold anything.',
    'Everything the calculator produces is a projection from the assumptions you type in, not a forecast. It assumes a constant rate of return, a constant rate of inflation and a constant tax rate for the whole period. Real markets do none of those things. Actual results will differ, and over long periods they can differ enormously.',
    'The figures are approximate and are provided as they are, with no warranty of any kind. Any decision you take after using this calculator is yours alone, and neither the authors nor the publisher accept any liability for any loss or damage arising from it. If money matters to you, check the numbers yourself and speak to a qualified adviser in your country.',
  ],

  colSymbol: 'Symbol',
  colMeaning: 'Meaning',
  colValue: 'Value',
  colFrequency: 'Frequency',
  colMonthlyAmount: 'Amount added that month',

  inputsTitle: '1. What you enter',
  inputsIntro: 'These are the only values the model uses. Nothing is fetched from the internet and nothing is assumed on your behalf.',
  inputMeanings: [
    'Initial deposit — the amount you start with',
    'Investment period in whole years',
    'Expected annual return, as a percentage',
    'Compounding periods per year (daily = 365, monthly = 12, quarterly = 4, semi-annual = 2, annual = 1)',
    'Contribution amount, added at the frequency you choose',
    'Expected annual inflation, as a percentage',
    'Tax rate on gains, as a percentage',
  ],

  rateTitle: '2. Converting your rate to a monthly rate',
  rateBefore: 'The model advances one month at a time, so the annual rate you enter has to be expressed as an equivalent monthly rate. Your rate compounds n times a year, so each compounding period earns r ÷ n, and a month is n ÷ 12 of one such period.',
  rateAfter: 'The exponent is what keeps the two consistent: compounding this monthly rate twelve times reproduces your annual rate exactly, so the year-end figures are the same as they would be with a straight annual calculation. With 8% compounded annually the monthly rate is 0.643403%.',

  contribTitle: '3. How contributions are added',
  contribIntro: 'Because the model runs monthly, contributions made more often than monthly are converted to an average monthly amount, and contributions made less often are added only in the months they actually fall in.',
  contribFrequencies: [
    'No contributions',
    'Daily',
    'Weekly',
    'Monthly',
    'Quarterly',
    'Semi-annual',
    'Annual',
  ],
  contribNote: 'Averaging daily and weekly contributions keeps the yearly total exact — 365 daily payments and 52 weekly payments are what is actually credited over a year — at the cost of a few days of interest here and there. The difference is far smaller than the error in guessing your rate of return.',

  orderTitle: '4. What happens each month',
  orderIntro: 'Every one of the 12 × Y months is processed in the same three steps, in this order:',
  orderSteps: [
    'Interest is applied to the balance carried over from last month.',
    'Your contribution for this month is added.',
    'Tax is deducted, if any is due this month.',
  ],
  orderNote: 'Interest is applied before the contribution, which means this month\'s payment earns nothing this month. This is the ordinary-annuity convention and it is the conservative choice: paying at the start of the month instead would raise the final figure by roughly one month of growth.',

  taxTitle: '5. Tax',
  taxIntro: 'Tax is charged on gains only, never on the money you put in. You choose when it is charged.',
  taxAnnualLabel: 'Annually',
  taxAnnualText: 'At the end of each twelfth month, the gain earned during that year is taxed and the tax is taken out of the balance immediately. The gain is the balance now, less the balance at the start of the year, less everything you contributed during the year. If the year ended in a loss the gain is negative and no tax is charged, but the loss is not carried forward to offset a later year.',
  taxExitLabel: 'On exit',
  taxExitText: 'Nothing is deducted until the very last month, when the whole gain over the entire period is taxed at once. The gain is the final balance less every contribution including the initial deposit.',
  taxNote: 'Over a long period the two modes differ substantially, because tax paid annually is money that stops compounding. On the worked example below, annual taxation costs about 14,093 while exit taxation on the same inputs costs less in present-value terms — worth comparing before you decide which matches your situation.',

  inflationTitle: '6. Inflation',
  inflationIntro: 'Inflation is not subtracted from the balance. It is applied at the end, as a conversion of future money into what it would buy today:',
  inflationNote: 't is the number of years elapsed, so a value at month m uses t = m ÷ 12. This is why the "real" figure is always lower than the nominal one whenever inflation is above zero: the money grows, but each unit of it buys less.',

  figuresTitle: '7. The four headline figures',
  figuresIntro: 'The tiles below the main result are four different views of the same simulation. They differ only in which deductions have been applied.',
  figureNames: [
    'Total contributions',
    'Nominal value',
    'Nominal after tax',
    'Inflation-adjusted',
  ],
  figureNotes: [
    'The initial deposit plus every contribution you make. No growth of any kind. This is the money that leaves your pocket.',
    'The balance with growth applied but nothing deducted. This is the largest and least meaningful of the four — it is the number most calculators show on its own.',
    'The same balance with tax taken out at the times set by your tax mode.',
    'The after-tax balance converted into today\'s purchasing power. This is the headline figure at the top of the app, and the only one that answers what the money will actually buy.',
  ],

  irrTitle: '8. The real rate of return',
  irrWhyNot: 'The percentage shown next to "Profitability (CAGR)" is not the final value divided by the total contributions. That shortcut treats every monthly payment as though it had been invested on day one, which understates the return badly — on the worked example below it would report about 2.6% instead of 4.71%.',
  irrBefore: 'Instead the calculator solves for the rate that makes the present value of everything you paid in equal to the value you end up with. Each payment is first converted into today\'s money, so the answer is a real return, after tax and after inflation. With c(m) as the amount paid in month m and V as the final real balance, the monthly rate x is the solution of:',
  irrAfter: 'That equation has no closed-form solution, so it is solved numerically by bisection between −50% and +50% per month, narrowing until the interval is smaller than 10⁻¹². The monthly result is then annualised:',
  irrNote: 'This is the internal rate of return, the same measure used to compare investments with irregular cash flows. Because it accounts for when each payment was made, it is directly comparable with a quoted annual return — with the difference that this one is net of tax and inflation.',

  rangeTitle: '9. The optimistic and pessimistic range',
  rangeText: 'When you switch on the rate range, the entire simulation is run three times over — once with your minimum rate, once with your expected rate and once with your maximum rate. Everything else stays identical. The three results are not probabilities and carry no confidence level; they simply show what the same plan produces under three different assumptions you chose yourself.',

  exampleTitle: '10. A worked example',
  exampleIntro: 'These are the app\'s default values. Every number below can be reproduced on a calculator, and they match exactly what the app displays.',
  exampleGivenTitle: 'Inputs',
  exampleGivenLabels: [
    'Initial deposit',
    'Period',
    'Annual return',
    'Compounding',
    'Contribution',
    'Inflation',
    'Tax',
  ],
  exampleStepsTitle: 'The first year, month by month',
  exampleSteps: [
    'Monthly rate: (1 + 0.08 ÷ 1) raised to the power 1 ÷ 12, minus 1 = 0.00643403.',
    'Month 1: 10,000 × 1.00643403 = 10,064.34, plus the 500 contribution = 10,564.34.',
    'Month 2: 10,564.34 × 1.00643403 = 10,632.31, plus 500 = 11,132.31.',
    'Carrying on to month 12 the balance reaches 17,016.94. Over the year you contributed 6,000 and started with 10,000, so the gain is 17,016.94 − 16,000 = 1,016.94.',
    'Tax at 15% of that gain is 152.54, deducted immediately, leaving 16,864.40 to carry into year two.',
  ],
  exampleResultTitle: 'After all 15 years',
  exampleResultLabels: [
    'Total contributions',
    'Nominal value',
    'Nominal after tax',
    'In today\'s money',
    'Real return per year',
  ],
  exampleClosing: 'Read that last line carefully. You put in 100,000 and finish with the purchasing power of 133,640 — the nominal 200,525 looks like a doubling, but tax removes 20,663 of it and inflation removes a further 46,222. That gap is the whole reason this calculator exists.',

  excludedTitle: '11. What the model does not include',
  excludedIntro: 'These are deliberate omissions. Knowing them tells you how far to trust the result.',
  excluded: [
    'Broker commissions, platform fees, fund management charges and bid-ask spreads. On a long horizon a 1% annual fee can consume a fifth of the final real value.',
    'Progressive tax bands, personal allowances, loss relief and tax-sheltered accounts. A single flat rate is applied to all gains.',
    'Currency conversion and exchange-rate movement. Every figure is in whatever unit you entered.',
    'Market volatility. The return is applied evenly every month, so the sequence-of-returns risk that matters most near the end of a long investment is invisible here.',
    'Any increase in your contributions over time, whether with inflation or with income.',
    'Withdrawals, pauses or early exit before the end of the period.',
    'Dividends handled separately from price growth; the return you enter is assumed to be total return.',
    'Anything specific to your country, your provider or your personal circumstances.',
  ],

  limitsTitle: '12. Limits of this tool',
  limits: [
    'Everything on this page is an assumption and nothing more. The model faithfully computes the consequences of the numbers you typed; it has no opinion on whether those numbers are realistic, and no way of knowing.',
    'All results are approximate. Displayed values are rounded for readability while the underlying arithmetic keeps full precision, so a hand check may differ in the last digit or two.',
    'The calculator is provided as is, without any warranty. No claim can be made against the authors or the publisher in respect of any decision, loss or damage connected with its use.',
  ],
};
