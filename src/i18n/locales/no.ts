import type { TranslationKeys } from '../index';

export const no: TranslationKeys = {
  // =============================================
  // APP
  // =============================================
  app: {
    title: 'Rentesrente',
    subtitle: 'Kalkulator',
    calculator: 'Kalkulator',
    scenarios: 'Scenarioer',
    settings: 'Innstillinger',
    theme: 'Tema',
    themeLight: 'Lyst tema',
    themeDark: 'Mørkt tema',
    presets: 'Forhåndsinnstillinger',
    conservative: 'Konservativ',
    balanced: 'Balansert',
    aggressive: 'Aggressiv',
  },

  // =============================================
  // INPUT FORM
  // =============================================
  form: {
    noContribution: 'Ingen innskudd',
    initialDeposit: 'Startinnskudd',
    period: 'Investeringsperiode',
    years: 'år',
    annualReturn: 'Årlig avkastning',
    rateRange: 'Rentemargin',
    minReturn: 'Min. avkastning',
    maxReturn: 'Maks. avkastning',
    compounding: 'Rentefrekvens',
    compoundingDaily: 'Daglig',
    compoundingWeekly: 'Ukentlig',
    compoundingMonthly: 'Månedlig',
    compoundingQuarterly: 'Kvartalsvis',
    compoundingSemiannual: 'Halvårlig',
    compoundingAnnually: 'Årlig',
    contributions: 'Innskudd',
    contributionsMonthly: 'Månedlig',
    inflation: 'Inflasjon',
    taxRate: 'Skattesats',
    taxation: 'Beskatning',
    taxAnnual: 'Årlig',
    taxOnExit: 'Ved uttak',
  },

  // =============================================
  // HERO SECTION
  // =============================================
  hero: {
    badge: 'Hovedresultat',
    badgeWarning: 'Hovedresultat',
    title: 'Reell kjøpekraft om {years} år',
    descriptionPositive: 'Fra dine innskudd på {contributions} vil du ha tilsvarende {result} i dagens verdi — det er {delta} mer enn du investerte, selv etter skatt og inflasjon.',
    descriptionNegative: 'Fra dine innskudd på {contributions} vil du kun ha tilsvarende {result} i dagens verdi — det er {delta} mindre enn du investerte. Inflasjon og skatt spiste opp mer enn investeringen tjente.',
    descriptionNeutral: 'Fra dine innskudd på {contributions} vil du ha tilsvarende omtrent {result} i dagens verdi — investeringen dekker så vidt tapene fra skatt og inflasjon.',
    totalReturn: 'totalavkastning',
  },

  // =============================================
  // HERO METRICS (sidebar)
  // =============================================
  metrics: {
    cagrLabel: 'Lønnsomhet (CAGR)',
    netEffectLabel: 'nettoeffekt',
    rangeLabel: 'Rekkevidde',
  },

  // =============================================
  // SATELLITE TILES
  // =============================================
  satellites: {
    totalContributions: 'Totale innskudd',
    nominalValue: 'Nominell verdi',
    nominalAfterTax: 'Nominell etter skatt',
    withInflation: 'Inflasjonsjustert',

    subtitleContributions: 'Totalt investert over perioden — startinnskudd pluss alle påfyll.',
    subtitleNominal: 'Hva investeringen tjente før skatt, nominelt.',
    subtitleAfterTax: 'Nettofortjeneste (nominell fortjeneste minus skatt).',
    subtitleInflation: 'Fremtidig verdi i dagens penger. Viser hvor mye investeringen din kan kjøpe, justert for inflasjon.',
  },

  // =============================================
  // DELTA TOOLTIPS
  // =============================================
  deltas: {
    nominalLine1: 'Investeringsfortjeneste: pengene dine tjente {delta} mer enn du investerte — det er {pct} av totale innskudd.',
    nominalFormula: '{nominal} (nominell) − {contributions} (innskudd) = {deltaSigned}',
    nominalFormulaPercent: '{delta} ÷ {contributions} × 100 = {pct}',

    taxLine1: 'Skatteeffekt: skatter reduserte totalen med {delta} — det er {pct} av nominell verdi.',
    taxFormula: '{afterTax} (etter skatt) − {nominal} (før skatt) = {deltaSigned}',
    taxFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',

    inflationLine1: 'Inflasjonseffekt: over {years} år med {rate}% inflasjon mistet pengene {delta} i kjøpekraft — det er {pct} av nominell verdi.',
    inflationFormula: '{withInflation} (reell verdi) − {nominal} (nominell) = {deltaSigned}',
    inflationFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',
  },

  // =============================================
  // HERO TOTAL RETURN TOOLTIP
  // =============================================
  heroReturn: {
    positive: 'Total reell vekst: dine innskudd ({contributions}) vokste til {result} i dagens penger — det er {pct} netto gevinst etter skatt og inflasjon.',
    negative: 'Totalt reelt tap: dine innskudd ({contributions}) vil bare være verdt {result} i dagens penger — det er {pct}. Inflasjon og skatt spiste opp mer enn investeringen tjente.',
  },

  // =============================================
  // CHART
  // =============================================
  chart: {
    title: 'Vekstgraf',
    scenarios: 'Scenarioer',
    nominal: 'Nominell',
    withInflation: 'Inflasjonsjustert',
    afterTaxAndInflation: 'Etter skatt og inflasjon',
    contributions: 'Innskudd',
    rateRange: 'Rentemargin',
    optimistic: 'Optimistisk',
    pessimistic: 'Pessimistisk',
    disclaimer: 'Beregningene er omtrentlige og illustrative. Faktiske resultater kan avvike på grunn av endringer i rentesatser, inflasjon, skattelovgivning, gebyrer og andre markedsfaktorer.',
  },

  // =============================================
  // DONUT CHART
  // =============================================
  donut: {
    title: 'Investeringsstruktur',
    percent: 'Prosent',
    amount: 'Beløp',
    initialDeposit: 'Startinnskudd',
    contributions: 'Innskudd',
    netProfit: 'Nettofortjeneste etter skatt',
    taxesPaid: 'Betalt skatt',
    disclaimer: 'Omtrentlig fordeling. Faktiske verdier avhenger av valgt instrument, skattesatser og betingelser.',
    warningNegativeProfit: '* Nettofortjeneste er negativ — investeringen dekket ikke inflasjonen reelt sett.',
  },

  // =============================================
  // PROJECTION TABLE
  // =============================================
  table: {
    yearLabel: 'År {n}',
    monthLabel: 'Måned {n}',
    start: 'Start',
    title: 'Projeksjonstabell',
    monthly: 'Månedlig',
    yearly: 'Årlig',
    expand: 'Utvid',
    showAll: 'Vis alle {n} rader',
    hiddenRows: '{n} skjult',
    close: 'Lukk',
    collapse: 'Skjul',
    period: 'Periode',
    contributions: 'Innskudd',
    nominalValue: 'Nominell verdi',
    withInflation: 'Inflasjonsjustert',
    nominalAfterTax: 'Nominell etter skatt',
    afterTaxAndInflation: 'Etter skatt og inflasjon',
    taxesPaid: 'Betalt skatt',
    min: 'Min',
    base: 'Base',
    max: 'Maks',
    swipeHint: '← sveip →',
  },

  // =============================================
  // WARNINGS
  // =============================================
  warnings: {
    inflationExceeds: 'Avkastningen dekker ikke inflasjonen.',
    inflationExceedsDetail: 'Med gjeldende parametere (avkastning {rate}%, inflasjon {inflation}%) vokser ikke investeringen din reelt sett. Vurder instrumenter med høyere avkastning eller reduser forventet inflasjon.',
    negativeCagr: 'En negativ CAGR betyr at inflasjon + skatt spiser mer enn investeringen tjener.',
    negativeRateRange: 'Du modellerer et scenario for markedstap. Det pessimistiske resultatet i grafen vil vise hva som skjer hvis renten faller til {minRate}% årlig.',
  },

  // =============================================
  // DISCLAIMER SECTION
  // =============================================
  disclaimer: {
    title: 'Om resultatene',
    text: 'Tallene ovenfor viser den omtrentlige reelle kjøpekraften av investeringen din etter å ha betalt inntektsskatt. Beregningene er til informasjon og tar ikke høyde for mulige endringer i markedsforhold, satser og lovgivning.',
    warning: 'Dette er ikke investeringsrådgivning.',
    pastResults: 'Tidligere resultater garanterer ikke fremtidige.',
  },

  // =============================================
  // FOOTER
  // =============================================
  footer: {
    developer: 'Utviklet av',
    copyright: '© {year} Med enerett.',
    disclaimer: 'Ikke finansiell rådgivning.',
    privacy: 'Personvern',
    terms: 'Vilkår',
    methodology: 'Metodikk',
    support: 'Støtt prosjektet',
    supportSoon: 'Snart — takk!',
  },

  // =============================================
  // TOOLTIPS (on ⓘ icons)
  // =============================================
  tooltips: {
    initialDeposit: 'Beløpet du investerer ved start.',
    period: 'Hvor mange år du planlegger å beholde investeringen.',
    annualReturn: 'Forventet årlig prosentvis avkastning på investeringen.',
    rateRange: 'Aktiver for å modellere optimistiske og pessimistiske scenarioer med ulike satser.',
    compounding: 'Hvor ofte de opptjente rentene legges til saldoen og begynner å tjene egne renter.',
    contributions: 'Regelmessige ekstra innskudd på toppen av startinvesteringen.',
    inflation: 'Den forventede årlige takten som prisene stiger med og pengene mister kjøpekraft.',
    taxRate: 'Prosentandelen av investeringsfortjenesten som går til skatt.',
    taxation: 'Når skatt betales: årlig (hvert år på det årets fortjeneste) eller ved uttak (en gang, når du tar ut pengene).',

    totalContributions: 'Det totale beløpet du vil investere: startinnskuddet pluss alle påfyll over perioden.',
    nominalValue: 'Dine sparepenger uten skatt eller inflasjon. Dette er det rene rentesrenteresultatet — hva du ville hatt i en ideell verden uten kostnader.',
    nominalAfterTax: 'Hva som gjenstår etter å ha betalt inntektsskatt. Inflasjon er IKKE tatt med — dette er nominelle tall slik de vil fremstå på kontoen din.',
    withInflation: 'Hvor mye pengene dine vil kunne kjøpe om {years} år, justert for inflasjon. Skatter er IKKE tatt med — effekten av dem vises i forrige rute.',

    cagr: 'CAGR (Compound Annual Growth Rate) — den gjennomsnittlige årlige reelle avkastningen etter skatt og inflasjon. Det svarer på: "Med hvor mange prosent vokste kjøpekraften min hvert år?" En negativ CAGR betyr at inflasjonen spiser opp fortjenesten raskere enn investeringen tjener inn.',
    netEffect: 'Forskjellen mellom din reelle kjøpekraft til slutt og det totale beløpet du investerte. Enkelt sagt: hvor mye mer (eller mindre) "dagens penger" du vil ha til slutt i forhold til hva du la inn.',
    range: 'De mulige grensene for resultatet ditt: fra pessimistisk (lavere sats) til optimistisk (høyere sats). Hjelper til å vurdere usikkerheten i prognosen — det reelle utfallet vil høyst sannsynlig falle et sted i dette området.',
    minReturn: 'Den dårligste årlige avkastningen du forventer.',
    maxReturn: 'Den beste årlige avkastningen du forventer.',
  },

  // =============================================
  // LEGAL PAGES
  // =============================================
  legal: {
    backToCalculator: 'Tilbake til kalkulatoren',
    privacyTitle: 'Personvernerklæring',
    termsTitle: 'Vilkår for bruk',
    lastUpdated: 'Sist oppdatert: {date}',
    contact: 'Kontakt oss på {email}.',
  },
};
