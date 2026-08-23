export const en = {
  // =============================================
  // APP
  // =============================================
  app: {
    title: 'Compound Interest',
    subtitle: 'Calculator',
    calculator: 'Calculator',
    scenarios: 'Scenarios',
    settings: 'Settings',
    theme: 'Theme',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',
    presets: 'Presets',
    conservative: 'Conservative',
    balanced: 'Balanced',
    aggressive: 'Aggressive',
  },

  // =============================================
  // INPUT FORM
  // =============================================
  form: {
    noContribution: 'No contributions',
    initialDeposit: 'Initial deposit',
    period: 'Investment period',
    years: 'years',
    annualReturn: 'Annual return',
    rateRange: 'Rate range',
    minReturn: 'Min. return',
    maxReturn: 'Max. return',
    compounding: 'Compounding frequency',
    compoundingDaily: 'Daily',
    compoundingWeekly: 'Weekly',
    compoundingMonthly: 'Monthly',
    compoundingQuarterly: 'Quarterly',
    compoundingSemiannual: 'Semi-annual',
    compoundingAnnually: 'Annually',
    contributions: 'Contributions',
    contributionsMonthly: 'Monthly',
    inflation: 'Inflation',
    taxRate: 'Tax rate',
    taxation: 'Taxation',
    taxAnnual: 'Annual',
    taxOnExit: 'On exit',
  },

  // =============================================
  // HERO SECTION
  // =============================================
  hero: {
    badge: 'Key result',
    badgeWarning: 'Key result',
    title: 'Real purchasing power in {years} years',
    descriptionPositive: 'From your {contributions} in contributions you will have the equivalent of {result} in today\'s money — that\'s {delta} more than you invested, even after taxes and inflation.',
    descriptionNegative: 'From your {contributions} in contributions you will have the equivalent of only {result} in today\'s money — that\'s {delta} less than you invested. Inflation and taxes consumed more than the investment earned.',
    descriptionNeutral: 'From your {contributions} in contributions you will have the equivalent of approximately {result} in today\'s money — the investment barely covers the losses from taxes and inflation.',
    totalReturn: 'total return',
  },

  // =============================================
  // HERO METRICS (sidebar)
  // =============================================
  metrics: {
    cagrLabel: 'Profitability (CAGR)',
    netEffectLabel: 'net effect',
    rangeLabel: 'Range',
  },

  // =============================================
  // SATELLITE TILES
  // =============================================
  satellites: {
    totalContributions: 'Total contributions',
    nominalValue: 'Nominal value',
    nominalAfterTax: 'Nominal after tax',
    withInflation: 'Inflation-adjusted',

    subtitleContributions: 'Total invested over the period — initial deposit plus all top-ups.',
    subtitleNominal: 'What the investment earned before taxes, in nominal terms.',
    subtitleAfterTax: 'Net profit (nominal profit minus taxes).',
    subtitleInflation: 'Future value in today\'s money. Shows how much your investment will buy adjusted for inflation.',
  },

  // =============================================
  // DELTA TOOLTIPS
  // =============================================
  deltas: {
    nominalLine1: 'Investment profit: your money earned {delta} above what you invested — that\'s {pct} of total contributions.',
    nominalFormula: '{nominal} (nominal) − {contributions} (contributions) = {deltaSigned}',
    nominalFormulaPercent: '{delta} ÷ {contributions} × 100 = {pct}',

    taxLine1: 'Tax impact: taxes reduced the total by {delta} — that\'s {pct} of nominal value.',
    taxFormula: '{afterTax} (after tax) − {nominal} (before tax) = {deltaSigned}',
    taxFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',

    inflationLine1: 'Inflation impact: over {years} years at {rate}% inflation, money lost {delta} in purchasing power — that\'s {pct} of nominal value.',
    inflationFormula: '{withInflation} (real value) − {nominal} (nominal) = {deltaSigned}',
    inflationFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',
  },

  // =============================================
  // HERO TOTAL RETURN TOOLTIP
  // =============================================
  heroReturn: {
    positive: 'Total real growth: your contributions ({contributions}) grew to {result} in today\'s money — that\'s {pct} net gain after taxes and inflation.',
    negative: 'Total real loss: your contributions ({contributions}) will only be worth {result} in today\'s money — that\'s {pct}. Inflation and taxes consumed more than the investment earned.',
  },

  // =============================================
  // CHART
  // =============================================
  chart: {
    title: 'Growth chart',
    scenarios: 'Scenarios',
    nominal: 'Nominal',
    withInflation: 'Inflation-adjusted',
    afterTaxAndInflation: 'After tax & inflation',
    contributions: 'Contributions',
    rateRange: 'Rate range',
    optimistic: 'Optimistic',
    pessimistic: 'Pessimistic',
    disclaimer: 'Calculations are approximate and illustrative. Actual results may differ due to changes in interest rates, inflation, tax legislation, fees and other market factors.',
  },

  // =============================================
  // DONUT CHART
  // =============================================
  donut: {
    title: 'Investment structure',
    percent: 'Percent',
    amount: 'Amount',
    initialDeposit: 'Initial deposit',
    contributions: 'Contributions',
    netProfit: 'Net profit after taxes',
    taxesPaid: 'Taxes paid',
    disclaimer: 'Approximate breakdown. Actual values depend on the chosen instrument, tax rates and conditions.',
    warningNegativeProfit: '* Net profit is negative — the investment did not cover inflation in real terms.',
  },

  // =============================================
  // PROJECTION TABLE
  // =============================================
  table: {
    yearLabel: 'Year {n}',
    monthLabel: 'Month {n}',
    start: 'Start',
    title: 'Projection table',
    monthly: 'Monthly',
    yearly: 'Yearly',
    expand: 'Expand',
    showAll: 'Show all {n} rows',
    hiddenRows: '{n} hidden',
    close: 'Close',
    collapse: 'Collapse',
    period: 'Period',
    contributions: 'Contributions',
    nominalValue: 'Nominal value',
    withInflation: 'Inflation-adjusted',
    nominalAfterTax: 'Nominal after tax',
    afterTaxAndInflation: 'After tax & inflation',
    taxesPaid: 'Taxes paid',
    min: 'Min',
    base: 'Base',
    max: 'Max',
    swipeHint: '← swipe →',
  },

  // =============================================
  // WARNINGS
  // =============================================
  warnings: {
    inflationExceeds: 'Returns don\'t cover inflation.',
    inflationExceedsDetail: 'At current parameters (return {rate}%, inflation {inflation}%) your investment doesn\'t grow in real terms. Consider instruments with higher returns or reduce expected inflation.',
    negativeCagr: 'A negative CAGR means inflation + taxes consume more than the investment earns.',
    negativeRateRange: 'You are modeling a market loss scenario. The pessimistic result on the chart will show what would happen if the rate dropped to {minRate}% annually.',
  },

  // =============================================
  // DISCLAIMER SECTION
  // =============================================
  disclaimer: {
    title: 'About the results',
    text: 'The figures above show the approximate real purchasing power of your investment after paying income tax. The calculations are informational and do not account for possible changes in market conditions, rates and legislation.',
    warning: 'This is not investment advice.',
    pastResults: 'Past results do not guarantee future ones.',
  },

  // =============================================
  // FOOTER
  // =============================================
  footer: {
    developer: 'Developed by',
    copyright: '© {year} All rights reserved.',
    disclaimer: 'Not financial advice.',
    privacy: 'Privacy',
    terms: 'Terms',
    methodology: 'Methodology',
  },

  // =============================================
  // TOOLTIPS (on ⓘ icons)
  // =============================================
  tooltips: {
    initialDeposit: 'The amount you invest at the start.',
    period: 'How many years you plan to keep the investment.',
    annualReturn: 'The expected annual percentage return on your investment.',
    rateRange: 'Enable to model optimistic and pessimistic scenarios with different rates.',
    compounding: 'How often the earned interest is added to your balance and starts earning interest itself.',
    contributions: 'Regular additional deposits on top of the initial investment.',
    inflation: 'The expected annual rate at which prices increase and money loses purchasing power.',
    taxRate: 'The percentage of investment profit that goes to taxes.',
    taxation: 'When taxes are paid: annually (each year on that year\'s profit) or on exit (once, when you withdraw).',

    totalContributions: 'The total amount you\'ll invest: your initial deposit plus all top-ups over the period.',
    nominalValue: 'Your savings without taxes or inflation. This is the raw compound interest result — what you\'d have in an ideal world with no costs.',
    nominalAfterTax: 'What remains after paying income tax. Inflation is NOT factored in — these are nominal numbers as they\'d appear in your account.',
    withInflation: 'How much your money will buy in {years} years, adjusted for inflation. Taxes are NOT factored in — their impact is shown in the previous tile.',

    cagr: 'CAGR (Compound Annual Growth Rate) — the average annual real return after taxes and inflation. It answers: "By what percent did my purchasing power grow each year?" A negative CAGR means inflation eats your profit faster than your investment earns it.',
    netEffect: 'The difference between your real purchasing power at the end and the total amount you invested. In plain terms: how much more (or less) "today\'s money" you\'ll have at the end vs what you put in.',
    range: 'The possible boundaries of your result: from pessimistic (lower rate) to optimistic (upper rate). Helps assess forecast uncertainty — the real outcome will most likely fall somewhere in this range.',
    minReturn: 'The worst-case yearly return you expect.',
    maxReturn: 'The best-case yearly return you expect.',
  },

  // =============================================
  // LEGAL PAGES
  // =============================================
  legal: {
    backToCalculator: 'Back to calculator',
    privacyTitle: 'Privacy Policy',
    termsTitle: 'Terms of Use',
    cookiesTitle: 'Cookie Policy',
    offerTitle: 'Public Offer',
    lastUpdated: 'Last updated: {date}',
    contact: 'Contact us at {email}.',
  },
};

export type TranslationKeys = typeof en;
