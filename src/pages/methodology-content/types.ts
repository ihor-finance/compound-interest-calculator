/**
 * Shape of the methodology page's translatable text.
 *
 * Only prose lives here. Formulas, symbols and the worked example's numbers are
 * rendered by Methodology.tsx and are identical in every language — mathematics
 * does not need translating, and keeping the numbers in one place means a change
 * to the model can never leave 42 translations quietly wrong.
 *
 * Every locale file must satisfy this interface exactly, so TypeScript flags a
 * missing paragraph at build time rather than a user finding an empty section.
 */
export interface MethodologyContent {
  title: string;
  updated: string;

  /** Opening disclaimer — must come before anything else on the page. */
  disclaimerTitle: string;
  /** Three paragraphs: not advice · projection not forecast · no liability. */
  disclaimer: [string, string, string];

  /** Column headings reused by every table on the page. */
  colSymbol: string;
  colMeaning: string;
  colValue: string;
  colFrequency: string;
  colMonthlyAmount: string;

  inputsTitle: string;
  inputsIntro: string;
  /** Meanings for P0, Y, r, n, C, i, tau — in that order. */
  inputMeanings: [string, string, string, string, string, string, string];

  rateTitle: string;
  /** Paragraphs around the monthly-rate formula: before, after. */
  rateBefore: string;
  rateAfter: string;

  contribTitle: string;
  contribIntro: string;
  /** none, daily, weekly, monthly, quarterly, semi-annual, annual. */
  contribFrequencies: [string, string, string, string, string, string, string];
  contribNote: string;

  orderTitle: string;
  orderIntro: string;
  /** Interest, contribution, tax. */
  orderSteps: [string, string, string];
  orderNote: string;

  taxTitle: string;
  taxIntro: string;
  taxAnnualLabel: string;
  taxAnnualText: string;
  taxExitLabel: string;
  taxExitText: string;
  taxNote: string;

  inflationTitle: string;
  inflationIntro: string;
  inflationNote: string;

  figuresTitle: string;
  figuresIntro: string;
  /** Contributions, nominal, nominal after tax, real after tax and inflation. */
  figureNames: [string, string, string, string];
  figureNotes: [string, string, string, string];

  irrTitle: string;
  irrWhyNot: string;
  irrBefore: string;
  irrAfter: string;
  irrNote: string;

  rangeTitle: string;
  rangeText: string;

  exampleTitle: string;
  exampleIntro: string;
  exampleGivenTitle: string;
  /** Deposit, period, return, compounding, contribution, inflation, tax. */
  exampleGivenLabels: [string, string, string, string, string, string, string];
  exampleStepsTitle: string;
  /** One line of commentary per step of the first year. */
  exampleSteps: [string, string, string, string, string];
  exampleResultTitle: string;
  exampleResultLabels: [string, string, string, string, string];
  exampleClosing: string;

  excludedTitle: string;
  excludedIntro: string;
  /** Eight things the model deliberately leaves out. */
  excluded: [string, string, string, string, string, string, string, string];

  limitsTitle: string;
  /** Assumptions only · approximate · no claims. */
  limits: [string, string, string];
}
