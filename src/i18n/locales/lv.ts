import type { TranslationKeys } from '../index';

export const lv: TranslationKeys = {
  // =============================================
  // APP
  // =============================================
  app: {
    title: 'Saliktie procenti',
    subtitle: 'Kalkulators',
    calculator: 'Kalkulators',
    scenarios: 'Scenāriji',
    settings: 'Iestatījumi',
    presets: 'Sagataves',
    conservative: 'Konservatīvs',
    balanced: 'Sabalansēts',
    aggressive: 'Agresīvs',
  },

  // =============================================
  // INPUT FORM
  // =============================================
  form: {
    noContribution: 'Bez iemaksām',
    initialDeposit: 'Sākotnējais depozīts',
    period: 'Investīciju periods',
    years: 'gadi',
    annualReturn: 'Gada ienesīgums',
    rateRange: 'Likmju diapazons',
    minReturn: 'Min. ienesīgums',
    maxReturn: 'Maks. ienesīgums',
    compounding: 'Kapitalizācijas biežums',
    compoundingDaily: 'Katru dienu',
    compoundingWeekly: 'Katru nedēļu',
    compoundingMonthly: 'Katru mēnesi',
    compoundingQuarterly: 'Reizi ceturksnī',
    compoundingSemiannual: 'Reizi pusgadā',
    compoundingAnnually: 'Reizi gadā',
    contributions: 'Iemaksas',
    contributionsMonthly: 'Katru mēnesi',
    inflation: 'Inflācija',
    taxRate: 'Nodokļa likme',
    taxation: 'Nodokļu piemērošana',
    taxAnnual: 'Katru gadu',
    taxOnExit: 'Izņemot',
  },

  // =============================================
  // HERO SECTION
  // =============================================
  hero: {
    badge: 'Galvenais rezultāts',
    badgeWarning: 'Galvenais rezultāts',
    title: 'Reālā pirktspēja pēc {years} gadiem',
    descriptionPositive: 'No jūsu iemaksātajiem {contributions} jums būs ekvivalents {result} šodienas naudā — tas ir par {delta} vairāk nekā jūs ieguldījāt, pat pēc nodokļiem un inflācijas.',
    descriptionNegative: 'No jūsu iemaksātajiem {contributions} jums būs tikai {result} ekvivalents šodienas naudā — tas ir par {delta} mazāk nekā jūs ieguldījāt. Inflācija un nodokļi apēda vairāk, nekā ieguldījums nopelnīja.',
    descriptionNeutral: 'No jūsu iemaksātajiem {contributions} jums būs aptuveni {result} ekvivalents šodienas naudā — ieguldījums tik tikko sedz nodokļu un inflācijas zaudējumus.',
    totalReturn: 'kopējā atdeve',
  },

  // =============================================
  // HERO METRICS (sidebar)
  // =============================================
  metrics: {
    cagrLabel: 'Ienesīgums (CAGR)',
    netEffectLabel: 'neto efekts',
    rangeLabel: 'Diapazons',
  },

  // =============================================
  // SATELLITE TILES
  // =============================================
  satellites: {
    totalContributions: 'Kopējās iemaksas',
    nominalValue: 'Nominālā vērtība',
    nominalAfterTax: 'Nomināli pēc nodokļiem',
    withInflation: 'Pielāgots inflācijai',

    subtitleContributions: 'Kopā ieguldīts periodā — sākotnējais depozīts plus visi papildinājumi.',
    subtitleNominal: 'Cik ieguldījums nopelnīja pirms nodokļiem, nominālā izteiksmē.',
    subtitleAfterTax: 'Tīrā peļņa (nominālā peļņa mīnus nodokļi).',
    subtitleInflation: 'Nākotnes vērtība šodienas naudā. Parāda, cik daudz varēsiet nopirkt par savu ieguldījumu, ņemot vērā inflāciju.',
  },

  // =============================================
  // DELTA TOOLTIPS
  // =============================================
  deltas: {
    nominalLine1: 'Investīciju peļņa: jūsu nauda nopelnīja par {delta} vairāk nekā jūs ieguldījāt — tas ir {pct} no kopējām iemaksām.',
    nominalFormula: '{nominal} (nomināli) − {contributions} (iemaksas) = {deltaSigned}',
    nominalFormulaPercent: '{delta} ÷ {contributions} × 100 = {pct}',

    taxLine1: 'Nodokļu ietekme: nodokļi samazināja kopējo summu par {delta} — tas ir {pct} no nominālās vērtības.',
    taxFormula: '{afterTax} (pēc nodokļiem) − {nominal} (pirms nodokļiem) = {deltaSigned}',
    taxFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',

    inflationLine1: 'Inflācijas ietekme: {years} gadu laikā pie {rate}% inflācijas, nauda zaudēja {delta} no pirktspējas — tas ir {pct} no nominālās vērtības.',
    inflationFormula: '{withInflation} (reālā vērtība) − {nominal} (nomināli) = {deltaSigned}',
    inflationFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',
  },

  // =============================================
  // HERO TOTAL RETURN TOOLTIP
  // =============================================
  heroReturn: {
    positive: 'Kopējais reālais pieaugums: jūsu iemaksas ({contributions}) pieauga līdz {result} šodienas naudā — tas ir {pct} tīrais pieaugums pēc nodokļiem un inflācijas.',
    negative: 'Kopējie reālie zaudējumi: jūsu iemaksas ({contributions}) būs vērtas tikai {result} šodienas naudā — tas ir {pct}. Inflācija un nodokļi patērēja vairāk, nekā ieguldījums nopelnīja.',
  },

  // =============================================
  // CHART
  // =============================================
  chart: {
    title: 'Izaugsmes grafiks',
    scenarios: 'Scenāriji',
    nominal: 'Nomināli',
    withInflation: 'Pielāgots inflācijai',
    afterTaxAndInflation: 'Pēc nodokļiem un inflācijas',
    contributions: 'Iemaksas',
    rateRange: 'Likmju diapazons',
    optimistic: 'Optimistisks',
    pessimistic: 'Pesimistisks',
    disclaimer: 'Aprēķini ir aptuveni un ilustratīvi. Faktiskie rezultāti var atšķirties sakarā ar izmaiņām procentu likmēs, inflācijā, nodokļu likumdošanā, komisijas maksās un citos tirgus faktoros.',
  },

  // =============================================
  // DONUT CHART
  // =============================================
  donut: {
    title: 'Investīciju struktūra',
    percent: 'Procenti',
    amount: 'Summa',
    initialDeposit: 'Sākotnējais depozīts',
    contributions: 'Iemaksas',
    netProfit: 'Tīrā peļņa pēc nodokļiem',
    taxesPaid: 'Samaksātie nodokļi',
    disclaimer: 'Aptuvenais sadalījums. Faktiskās vērtības ir atkarīgas no izvēlētā instrumenta, nodokļu likmēm un nosacījumiem.',
    warningNegativeProfit: '* Tīrā peļņa ir negatīva — investīcija reāli nenosedza inflāciju.',
  },

  // =============================================
  // PROJECTION TABLE
  // =============================================
  table: {
    yearLabel: '{n}. gads',
    monthLabel: '{n}. mēnesis',
    start: 'Sākums',
    title: 'Projekciju tabula',
    monthly: 'Reizi mēnesī',
    yearly: 'Reizi gadā',
    expand: 'Izvērst',
    showAll: 'Rādīt visas {n} rindas',
    hiddenRows: '{n} paslēptas',
    close: 'Aizvērt',
    collapse: 'Sakļaut',
    period: 'Periods',
    contributions: 'Iemaksas',
    nominalValue: 'Nominālā vērtība',
    withInflation: 'Pielāgots inflācijai',
    nominalAfterTax: 'Nomināli pēc nodokļiem',
    afterTaxAndInflation: 'Pēc nodokļiem un inflācijas',
    taxesPaid: 'Samaksātie nodokļi',
    min: 'Min',
    base: 'Bāze',
    max: 'Maks',
    swipeHint: '← velciet →',
  },

  // =============================================
  // WARNINGS
  // =============================================
  warnings: {
    inflationExceeds: 'Atdeve nesedz inflāciju.',
    inflationExceedsDetail: 'Pie pašreizējiem parametriem (atdeve {rate}%, inflācija {inflation}%) jūsu ieguldījums reāli neaug. Apsveriet instrumentus ar augstāku ienesīgumu vai samaziniet gaidāmo inflāciju.',
    negativeCagr: 'Negatīvs CAGR nozīmē, ka inflācija + nodokļi patērē vairāk, nekā investīcija nopelna.',
    negativeRateRange: 'Jūs modelējat tirgus zaudējumu scenāriju. Pesimistiskais rezultāts diagrammā parādīs, kas notiktu, ja likme nokristos līdz {minRate}% gadā.',
  },

  // =============================================
  // DISCLAIMER SECTION
  // =============================================
  disclaimer: {
    title: 'Par rezultātiem',
    text: 'Iepriekš minētie skaitļi parāda jūsu ieguldījuma aptuveno reālo pirktspēju pēc ienākuma nodokļa nomaksas. Aprēķini ir informatīvi un neņem vērā iespējamās izmaiņas tirgus apstākļos, likmēs un likumdošanā.',
    warning: 'Tas nav ieguldījumu ieteikums.',
    pastResults: 'Pagātnes rezultāti negarantē nākotnes rezultātus.',
  },

  // =============================================
  // FOOTER
  // =============================================
  footer: {
    developer: 'Izstrādātājs',
    copyright: '© {year} Visas tiesības aizsargātas.',
    disclaimer: 'Nav finanšu konsultācija.',
    privacy: 'Privātums',
    terms: 'Noteikumi',
    cookies: 'Sīkdatnes',
    offer: 'Piedāvājums',
  },

  // =============================================
  // TOOLTIPS (on ⓘ icons)
  // =============================================
  tooltips: {
    initialDeposit: 'Summa, kuru ieguldāt sākumā.',
    period: 'Cik gadus plānojat saglabāt ieguldījumu.',
    annualReturn: 'Gaidāmā gada procentuālā atdeve jūsu ieguldījumam.',
    rateRange: 'Iespējojiet, lai modelētu optimistiskus un pesimistiskus scenārijus ar dažādām likmēm.',
    compounding: 'Cik bieži nopelnītie procenti tiek pievienoti jūsu bilancei un paši sāk pelnīt procentus.',
    contributions: 'Regulāri papildu depozīti virs sākotnējā ieguldījuma.',
    inflation: 'Paredzamā gada likme, par kādu pieaug cenas un nauda zaudē pirktspēju.',
    taxRate: 'Investīciju peļņas procentuālā daļa, kas tiek atvēlēta nodokļiem.',
    taxation: 'Kad tiek maksāti nodokļi: katru gadu (katru gadu par šī gada peļņu) vai izņemot (vienu reizi, kad izņemat naudu).',

    totalContributions: 'Kopējā summa, ko ieguldīsiet: sākotnējais depozīts plus visi papildinājumi šajā periodā.',
    nominalValue: 'Jūsu ietaupījumi bez nodokļiem vai inflācijas. Tas ir tīrais salikto procentu rezultāts — kas jums būtu ideālā pasaulē bez jebkādām izmaksām.',
    nominalAfterTax: 'Kas atliek pēc ienākuma nodokļa nomaksas. Inflācija NAV iekļauta — tie ir nominālie skaitļi, kādi tie parādītos jūsu kontā.',
    withInflation: 'Cik daudz par jūsu naudu varēs nopirkt pēc {years} gadiem, pielāgojot inflācijai. Nodokļi NAV iekļauti — to ietekme ir parādīta iepriekšējā flīzē.',

    cagr: 'CAGR (Saliktā gada izaugsmes likme) — vidējā gada reālā atdeve pēc nodokļiem un inflācijas. Tā atbild uz jautājumu: "Par cik procentiem katru gadu pieauga mana pirktspēja?" Negatīvs CAGR nozīmē, ka inflācija apēd jūsu peļņu ātrāk, nekā jūsu ieguldījums to nopelna.',
    netEffect: 'Atšķirība starp jūsu reālo pirktspēju beigās un kopējo ieguldīto summu. Vienkāršiem vārdiem: cik daudz vairāk (vai mazāk) "šodienas naudas" jums būs beigās, salīdzinot ar to, ko ielikāt.',
    range: 'Iespējamās jūsu rezultāta robežas: no pesimistiska (zemāka likme) līdz optimistiskam (augstāka likme). Palīdz novērtēt prognozes nenoteiktību — reālais iznākums visticamāk atradīsies kaut kur šajā diapazonā.',
    minReturn: 'Sliktākā gada atdeve, ko sagaidāt.',
    maxReturn: 'Labākā gada atdeve, ko sagaidāt.',
  },

  // =============================================
  // LEGAL PAGES
  // =============================================
  legal: {
    backToCalculator: 'Atpakaļ uz kalkulatoru',
    privacyTitle: 'Privātuma politika',
    termsTitle: 'Lietošanas noteikumi',
    cookiesTitle: 'Sīkdatņu politika',
    offerTitle: 'Publiskais piedāvājums',
    lastUpdated: 'Pēdējo reizi atjaunināts: {date}',
    contact: 'Sazinieties ar mums pa e-pastu {email}.',
  },
};
