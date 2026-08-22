import type { TranslationKeys } from '../index';

export const sl: TranslationKeys = {
  // =============================================
  // APP
  // =============================================
  app: {
    title: 'Obrestno obrestovanje',
    subtitle: 'Kalkulator',
    calculator: 'Kalkulator',
    scenarios: 'Scenariji',
    settings: 'Nastavitve',
    presets: 'Prednastavitve',
    conservative: 'Konservativno',
    balanced: 'Uravnoteženo',
    aggressive: 'Agresivno',
  },

  // =============================================
  // INPUT FORM
  // =============================================
  form: {
    noContribution: 'Brez vplačil',
    initialDeposit: 'Začetni vložek',
    period: 'Obdobje vlaganja',
    years: 'let',
    annualReturn: 'Letni donos',
    rateRange: 'Razpon donosa',
    minReturn: 'Min. donos',
    maxReturn: 'Maks. donos',
    compounding: 'Pogostost pripisa obresti',
    compoundingDaily: 'Dnevno',
    compoundingWeekly: 'Tedensko',
    compoundingMonthly: 'Mesečno',
    compoundingQuarterly: 'Četrtletno',
    compoundingSemiannual: 'Polletno',
    compoundingAnnually: 'Letno',
    contributions: 'Vplačila',
    contributionsMonthly: 'Mesečno',
    inflation: 'Inflacija',
    taxRate: 'Davčna stopnja',
    taxation: 'Obdavčitev',
    taxAnnual: 'Letno',
    taxOnExit: 'Ob izplačilu',
  },

  // =============================================
  // HERO SECTION
  // =============================================
  hero: {
    badge: 'Ključni rezultat',
    badgeWarning: 'Ključni rezultat',
    title: 'Realna kupna moč čez {years} let',
    descriptionPositive: 'Iz vaših {contributions} vplačil boste imeli protivrednost {result} v današnjem denarju — to je {delta} več, kot ste vložili, tudi po davkih in inflaciji.',
    descriptionNegative: 'Iz vaših {contributions} vplačil boste imeli samo protivrednost {result} v današnjem denarju — to je {delta} manj, kot ste vložili. Inflacija in davki so porabili več, kot je naložba zaslužila.',
    descriptionNeutral: 'Iz vaših {contributions} vplačil boste imeli protivrednost približno {result} v današnjem denarju — naložba komaj pokriva izgube zaradi davkov in inflacije.',
    totalReturn: 'skupni donos',
  },

  // =============================================
  // HERO METRICS (sidebar)
  // =============================================
  metrics: {
    cagrLabel: 'Donosnost (CAGR)',
    netEffectLabel: 'neto učinek',
    rangeLabel: 'Razpon',
  },

  // =============================================
  // SATELLITE TILES
  // =============================================
  satellites: {
    totalContributions: 'Skupna vplačila',
    nominalValue: 'Nominalna vrednost',
    nominalAfterTax: 'Nominalno po davkih',
    withInflation: 'Prilagojeno za inflacijo',

    subtitleContributions: 'Skupaj vloženo v tem obdobju — začetni vložek plus vsa doplačila.',
    subtitleNominal: 'Koliko je naložba zaslužila pred davki, v nominalnem smislu.',
    subtitleAfterTax: 'Čisti dobiček (nominalni dobiček minus davki).',
    subtitleInflation: 'Prihodnja vrednost v današnjem denarju. Prikazuje, koliko boste lahko kupili z vašo naložbo ob upoštevanju inflacije.',
  },

  // =============================================
  // DELTA TOOLTIPS
  // =============================================
  deltas: {
    nominalLine1: 'Dobiček naložbe: vaš denar je zaslužil {delta} nad tistim, kar ste vložili — to je {pct} vseh vplačil.',
    nominalFormula: '{nominal} (nominalno) − {contributions} (vplačila) = {deltaSigned}',
    nominalFormulaPercent: '{delta} ÷ {contributions} × 100 = {pct}',

    taxLine1: 'Vpliv davkov: davki so znižali skupni znesek za {delta} — to je {pct} nominalne vrednosti.',
    taxFormula: '{afterTax} (po davkih) − {nominal} (pred davki) = {deltaSigned}',
    taxFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',

    inflationLine1: 'Vpliv inflacije: v {years} letih pri {rate}% inflaciji je denar izgubil {delta} kupne moči — to je {pct} nominalne vrednosti.',
    inflationFormula: '{withInflation} (realna vrednost) − {nominal} (nominalno) = {deltaSigned}',
    inflationFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',
  },

  // =============================================
  // HERO TOTAL RETURN TOOLTIP
  // =============================================
  heroReturn: {
    positive: 'Skupna realna rast: vaša vplačila ({contributions}) so zrasla na {result} v današnjem denarju — to je {pct} čisti dobiček po davkih in inflaciji.',
    negative: 'Skupna realna izguba: vaša vplačila ({contributions}) bodo vredna samo {result} v današnjem denarju — to je {pct}. Inflacija in davki so porabili več, kot je naložba zaslužila.',
  },

  // =============================================
  // CHART
  // =============================================
  chart: {
    title: 'Graf rasti',
    scenarios: 'Scenariji',
    nominal: 'Nominalno',
    withInflation: 'Prilagojeno za inflacijo',
    afterTaxAndInflation: 'Po davkih in inflaciji',
    contributions: 'Vplačila',
    rateRange: 'Razpon donosa',
    optimistic: 'Optimistično',
    pessimistic: 'Pesimistično',
    disclaimer: 'Izračuni so približni in informativni. Dejanski rezultati se lahko razlikujejo zaradi sprememb obrestnih mer, inflacije, davčne zakonodaje, provizij in drugih tržnih dejavnikov.',
  },

  // =============================================
  // DONUT CHART
  // =============================================
  donut: {
    title: 'Struktura naložbe',
    percent: 'Odstotek',
    amount: 'Znesek',
    initialDeposit: 'Začetni vložek',
    contributions: 'Vplačila',
    netProfit: 'Čisti dobiček po davkih',
    taxesPaid: 'Plačani davki',
    disclaimer: 'Približna razčlenitev. Dejanske vrednosti so odvisne od izbranega instrumenta, davčnih stopenj in pogojev.',
    warningNegativeProfit: '* Čisti dobiček je negativen — naložba v realnem smislu ni pokrila inflacije.',
  },

  // =============================================
  // PROJECTION TABLE
  // =============================================
  table: {
    yearLabel: 'Leto {n}',
    monthLabel: 'Mesec {n}',
    start: 'Začetek',
    title: 'Tabela projekcij',
    monthly: 'Mesečno',
    yearly: 'Letno',
    expand: 'Razširi',
    showAll: 'Prikaži vseh {n} vrstic',
    collapse: 'Strni',
    period: 'Obdobje',
    contributions: 'Vplačila',
    nominalValue: 'Nominalna vrednost',
    withInflation: 'Prilagojeno za inflacijo',
    nominalAfterTax: 'Nominalno po davkih',
    afterTaxAndInflation: 'Po davkih in inflaciji',
    taxesPaid: 'Plačani davki',
    min: 'Min',
    base: 'Osnova',
    max: 'Maks',
    swipeHint: '← povlecite →',
  },

  // =============================================
  // WARNINGS
  // =============================================
  warnings: {
    inflationExceeds: 'Donosi ne pokrijejo inflacije.',
    inflationExceedsDetail: 'Pri trenutnih parametrih (donos {rate}%, inflacija {inflation}%) vaša naložba realno ne raste. Razmislite o instrumentih z višjimi donosi ali zmanjšajte pričakovano inflacijo.',
    negativeCagr: 'Negativen CAGR pomeni, da inflacija + davki porabijo več, kot naložba zasluži.',
    negativeRateRange: 'Modelirate scenarij tržne izgube. Pesimističen rezultat na grafu bo pokazal, kaj bi se zgodilo, če bi obrestna mera padla na {minRate}% letno.',
  },

  // =============================================
  // DISCLAIMER SECTION
  // =============================================
  disclaimer: {
    title: 'O rezultatih',
    text: 'Zgornje številke prikazujejo približno realno kupno moč vaše naložbe po plačilu dohodnine. Izračuni so informativne narave in ne upoštevajo morebitnih sprememb tržnih pogojev, obrestnih mer in zakonodaje.',
    warning: 'To ni investicijski nasvet.',
    pastResults: 'Pretekli rezultati ne zagotavljajo prihodnjih.',
  },

  // =============================================
  // FOOTER
  // =============================================
  footer: {
    developer: 'Razvil',
    copyright: '© {year} Vse pravice pridržane.',
    disclaimer: 'Ni finančni nasvet.',
    privacy: 'Zasebnost',
    terms: 'Pogoji',
    cookies: 'Piškotki',
    offer: 'Ponudba',
  },

  // =============================================
  // TOOLTIPS (on ⓘ icons)
  // =============================================
  tooltips: {
    initialDeposit: 'Znesek, ki ga vložite na začetku.',
    period: 'Koliko let nameravate obdržati naložbo.',
    annualReturn: 'Pričakovan letni odstotni donos na vašo naložbo.',
    rateRange: 'Vklopite za modeliranje optimističnih in pesimističnih scenarijev z različnimi obrestnimi merami.',
    compounding: 'Kako pogosto se prislužene obresti pripišejo vašemu stanju in začnejo same prinašati obresti.',
    contributions: 'Redna dodatna vplačila poleg začetnega vložka.',
    inflation: 'Pričakovana letna stopnja rasti cen, pri kateri denar izgublja kupno moč.',
    taxRate: 'Odstotek dobička od naložbe, ki gre za davke.',
    taxation: 'Kdaj se plačajo davki: letno (vsako leto od dobička tega leta) ali ob izplačilu (enkrat, ko dvignete sredstva).',

    totalContributions: 'Skupni znesek, ki ga boste vložili: vaš začetni vložek plus vsa doplačila v tem obdobju.',
    nominalValue: 'Vaši prihranki brez davkov ali inflacije. To je čisti rezultat obrestnega obrestovanja — kar bi imeli v idealnem svetu brez stroškov.',
    nominalAfterTax: 'Kar ostane po plačilu dohodnine. Inflacija NI upoštevana — to so nominalne številke, kot bi se pojavile na vašem računu.',
    withInflation: 'Koliko boste lahko kupili z vašim denarjem čez {years} let, prilagojeno za inflacijo. Davki NISO upoštevani — njihov vpliv je prikazan v prejšnjem polju.',

    cagr: 'CAGR (Sestavljena letna stopnja rasti) — povprečen letni realni donos po davkih in inflaciji. Odgovarja na vprašanje: "Za koliko odstotkov se je vsako leto povečala moja kupna moč?" Negativen CAGR pomeni, da inflacija poje vaš dobiček hitreje, kot ga vaša naložba ustvarja.',
    netEffect: 'Razlika med vašo realno kupno močjo na koncu in skupnim zneskom, ki ste ga vložili. Preprosto rečeno: koliko več (ali manj) "današnjega denarja" boste imeli na koncu v primerjavi s tem, kar ste vložili.',
    range: 'Možne meje vašega rezultata: od pesimističnega (nižja stopnja) do optimističnega (višja stopnja). Pomaga oceniti negotovost napovedi — dejanski rezultat bo najverjetneje nekje v tem razponu.',
    minReturn: 'Najslabši možen letni donos, ki ga pričakujete.',
    maxReturn: 'Najboljši možen letni donos, ki ga pričakujete.',
  },

  // =============================================
  // LEGAL PAGES
  // =============================================
  legal: {
    backToCalculator: 'Nazaj na kalkulator',
    privacyTitle: 'Politika zasebnosti',
    termsTitle: 'Pogoji uporabe',
    cookiesTitle: 'Politika piškotkov',
    offerTitle: 'Javna ponudba',
    lastUpdated: 'Zadnja posodobitev: {date}',
    contact: 'Kontaktirajte nas na {email}.',
  },
};
