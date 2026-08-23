import type { TranslationKeys } from '../index';

export const et: TranslationKeys = {
  // =============================================
  // APP
  // =============================================
  app: {
    title: 'Liitintress',
    subtitle: 'Kalkulaator',
    calculator: 'Kalkulaator',
    scenarios: 'Stsenaariumid',
    settings: 'Seaded',
    theme: 'Teema',
    themeLight: 'Hele teema',
    themeDark: 'Tume teema',
    presets: 'Eelseaded',
    conservative: 'Konservatiivne',
    balanced: 'Tasakaalustatud',
    aggressive: 'Agressiivne',
  },

  // =============================================
  // INPUT FORM
  // =============================================
  form: {
    noContribution: 'Ilma sissemakseteta',
    initialDeposit: 'Algne hoius',
    period: 'Investeerimisperiood',
    years: 'aastat',
    annualReturn: 'Aastane tootlus',
    rateRange: 'Määra vahemik',
    minReturn: 'Min. tootlus',
    maxReturn: 'Max. tootlus',
    compounding: 'Kapitaliseerimise sagedus',
    compoundingDaily: 'Igapäevaselt',
    compoundingWeekly: 'Iganädalaselt',
    compoundingMonthly: 'Iga kuu',
    compoundingQuarterly: 'Kvartalis',
    compoundingSemiannual: 'Poolaastas',
    compoundingAnnually: 'Igal aastal',
    contributions: 'Sissemaksed',
    contributionsMonthly: 'Iga kuu',
    inflation: 'Inflatsioon',
    taxRate: 'Maksumäär',
    taxation: 'Maksustamine',
    taxAnnual: 'Igal aastal',
    taxOnExit: 'Väljavõtmisel',
  },

  // =============================================
  // HERO SECTION
  // =============================================
  hero: {
    badge: 'Peamine tulemus',
    badgeWarning: 'Peamine tulemus',
    title: 'Reaalne ostujõud {years} aasta pärast',
    descriptionPositive: 'Teie {contributions} sissemaksetest on teil ekvivalent {result} tänases rahas — see on {delta} rohkem kui investeerisite, isegi pärast makse ja inflatsiooni.',
    descriptionNegative: 'Teie {contributions} sissemaksetest on teil ainult ekvivalent {result} tänases rahas — see on {delta} vähem kui investeerisite. Inflatsioon ja maksud sõid ära rohkem, kui investeering teenis.',
    descriptionNeutral: 'Teie {contributions} sissemaksetest on teil ligikaudu ekvivalent {result} tänases rahas — investeering katab vaevu maksude ja inflatsiooni kaotused.',
    totalReturn: 'kogutootlus',
  },

  // =============================================
  // HERO METRICS (sidebar)
  // =============================================
  metrics: {
    cagrLabel: 'Tasuvus (CAGR)',
    netEffectLabel: 'netomõju',
    rangeLabel: 'Vahemik',
  },

  // =============================================
  // SATELLITE TILES
  // =============================================
  satellites: {
    totalContributions: 'Kogusissemaksed',
    nominalValue: 'Nominaalväärtus',
    nominalAfterTax: 'Nominaalne pärast makse',
    withInflation: 'Inflatsiooniga kohandatud',

    subtitleContributions: 'Kokku investeeritud perioodi jooksul — algne hoius pluss kõik lisamised.',
    subtitleNominal: 'Mida investeering teenis enne makse, nominaalväärtuses.',
    subtitleAfterTax: 'Puhaskasum (nominaalne kasum miinus maksud).',
    subtitleInflation: 'Tuleviku väärtus tänases rahas. Näitab, kui palju saate oma investeeringu eest osta, arvestades inflatsiooni.',
  },

  // =============================================
  // DELTA TOOLTIPS
  // =============================================
  deltas: {
    nominalLine1: 'Investeeringu kasum: teie raha teenis {delta} rohkem kui investeerisite — see on {pct} kogusissemaksetest.',
    nominalFormula: '{nominal} (nominaalne) − {contributions} (sissemaksed) = {deltaSigned}',
    nominalFormulaPercent: '{delta} ÷ {contributions} × 100 = {pct}',

    taxLine1: 'Maksude mõju: maksud vähendasid kogusummat {delta} võrra — see on {pct} nominaalväärtusest.',
    taxFormula: '{afterTax} (pärast makse) − {nominal} (enne makse) = {deltaSigned}',
    taxFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',

    inflationLine1: 'Inflatsiooni mõju: {years} aasta jooksul {rate}% inflatsiooniga kaotas raha {delta} ostujõudu — see on {pct} nominaalväärtusest.',
    inflationFormula: '{withInflation} (reaalväärtus) − {nominal} (nominaalne) = {deltaSigned}',
    inflationFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',
  },

  // =============================================
  // HERO TOTAL RETURN TOOLTIP
  // =============================================
  heroReturn: {
    positive: 'Kogureaalne kasv: teie sissemaksed ({contributions}) kasvasid {result}-ni tänases rahas — see on {pct} puhaskasum pärast makse ja inflatsiooni.',
    negative: 'Kogureaalne kahjum: teie sissemaksed ({contributions}) on väärt ainult {result} tänases rahas — see on {pct}. Inflatsioon ja maksud tarbisid rohkem, kui investeering teenis.',
  },

  // =============================================
  // CHART
  // =============================================
  chart: {
    title: 'Kasvugraafik',
    scenarios: 'Stsenaariumid',
    nominal: 'Nominaalne',
    withInflation: 'Inflatsiooniga kohandatud',
    afterTaxAndInflation: 'Pärast makse ja inflatsiooni',
    contributions: 'Sissemaksed',
    rateRange: 'Määra vahemik',
    optimistic: 'Optimistlik',
    pessimistic: 'Pessimistlik',
    disclaimer: 'Arvutused on ligikaudsed ja illustratiivsed. Tegelikud tulemused võivad erineda intressimäärade, inflatsiooni, maksuseadusandluse, tasude ja muude turufaktorite muutuste tõttu.',
  },

  // =============================================
  // DONUT CHART
  // =============================================
  donut: {
    title: 'Investeeringu struktuur',
    percent: 'Protsent',
    amount: 'Summa',
    initialDeposit: 'Algne hoius',
    contributions: 'Sissemaksed',
    netProfit: 'Puhaskasum pärast makse',
    taxesPaid: 'Makstud maksud',
    disclaimer: 'Ligikaudne jaotus. Tegelikud väärtused sõltuvad valitud instrumendist, maksumääradest ja tingimustest.',
    warningNegativeProfit: '* Puhaskasum on negatiivne — investeering ei katnud reaalselt inflatsiooni.',
  },

  // =============================================
  // PROJECTION TABLE
  // =============================================
  table: {
    yearLabel: '{n}. aasta',
    monthLabel: '{n}. kuu',
    start: 'Algus',
    title: 'Projektsioonide tabel',
    monthly: 'Kord kuus',
    yearly: 'Kord aastas',
    expand: 'Laienda',
    showAll: 'Näita kõiki {n} rida',
    hiddenRows: '{n} peidetud',
    close: 'Sulge',
    collapse: 'Ahenda',
    period: 'Periood',
    contributions: 'Sissemaksed',
    nominalValue: 'Nominaalväärtus',
    withInflation: 'Inflatsiooniga kohandatud',
    nominalAfterTax: 'Nominaalne pärast makse',
    afterTaxAndInflation: 'Pärast makse ja inflatsiooni',
    taxesPaid: 'Makstud maksud',
    min: 'Min',
    base: 'Baas',
    max: 'Max',
    swipeHint: '← libista →',
  },

  // =============================================
  // WARNINGS
  // =============================================
  warnings: {
    inflationExceeds: 'Tootlus ei kata inflatsiooni.',
    inflationExceedsDetail: 'Praeguste parameetritega (tootlus {rate}%, inflatsioon {inflation}%) teie investeering reaalselt ei kasva. Kaaluge kõrgema tootlusega instrumente või vähendage oodatavat inflatsiooni.',
    negativeCagr: 'Negatiivne CAGR tähendab, et inflatsioon + maksud tarbivad rohkem, kui investeering teenib.',
    negativeRateRange: 'Te modelleerite turu kahjumi stsenaariumi. Pessimistlik tulemus graafikul näitab, mis juhtuks, kui määr langeks {minRate}%-ni aastas.',
  },

  // =============================================
  // DISCLAIMER SECTION
  // =============================================
  disclaimer: {
    title: 'Tulemustest',
    text: 'Ülaltoodud numbrid näitavad teie investeeringu ligikaudset reaalset ostujõudu pärast tulumaksu tasumist. Arvutused on informatiivsed ega arvesta võimalikke muutusi turutingimustes, määrades ja seadusandluses.',
    warning: 'See ei ole investeerimisnõustamine.',
    pastResults: 'Varasemad tulemused ei garanteeri tulevasi.',
  },

  // =============================================
  // FOOTER
  // =============================================
  footer: {
    developer: 'Arendaja',
    copyright: '© {year} Kõik õigused kaitstud.',
    disclaimer: 'Ei ole finantsnõustamine.',
    privacy: 'Privaatsus',
    terms: 'Tingimused',
    methodology: 'Metoodika',
  },

  // =============================================
  // TOOLTIPS (on ⓘ icons)
  // =============================================
  tooltips: {
    initialDeposit: 'Summa, mille alguses investeerite.',
    period: 'Mitu aastat plaanite investeeringut hoida.',
    annualReturn: 'Oodatav aastane protsentuaalne tootlus teie investeeringult.',
    rateRange: 'Lubage, et modelleerida optimistlikke ja pessimistlikke stsenaariume erinevate määradega.',
    compounding: 'Kui tihti teenitud intress lisatakse teie saldole ja hakkab ise intressi teenima.',
    contributions: 'Regulaarsed täiendavad sissemaksed lisaks algsele investeeringule.',
    inflation: 'Oodatav aastane määr, millega hinnad tõusevad ja raha kaotab ostujõudu.',
    taxRate: 'Investeeringu kasumi protsent, mis läheb maksudeks.',
    taxation: 'Millal makse makstakse: igal aastal (igal aastal selle aasta kasumilt) või väljavõtmisel (üks kord, kui raha välja võtate).',

    totalContributions: 'Kogusumma, mille investeerite: teie algne hoius pluss kõik lisamised perioodi jooksul.',
    nominalValue: 'Teie säästud ilma maksude või inflatsioonita. See on puhas liitintressi tulemus — mis teil oleks ideaalses maailmas ilma kuludeta.',
    nominalAfterTax: 'Mis jääb järele pärast tulumaksu tasumist. Inflatsiooni EI OLE arvestatud — need on nominaalsed numbrid, nagu need teie kontol ilmneksid.',
    withInflation: 'Kui palju saate oma rahaga osta {years} aasta pärast, inflatsiooniga kohandatuna. Makse EI OLE arvestatud — nende mõju on näidatud eelmises paanis.',

    cagr: 'CAGR (Liitaastane kasvumäär) — keskmine aastane reaalne tootlus pärast makse ja inflatsiooni. See vastab küsimusele: "Mitme protsendi võrra kasvas minu ostujõud igal aastal?" Negatiivne CAGR tähendab, et inflatsioon sööb teie kasumi kiiremini, kui teie investeering selle teenib.',
    netEffect: 'Erinevus teie reaalse ostujõu lõpus ja kogu investeeritud summa vahel. Lihtsalt öeldes: kui palju rohkem (või vähem) "tänast raha" teil lõpuks on võrreldes sellega, mis te sisse panite.',
    range: 'Teie tulemuse võimalikud piirid: pessimistlikust (madalam määr) optimistlikuni (kõrgem määr). Aitab hinnata prognoosi ebakindlust — tegelik tulemus jääb suure tõenäosusega kuskile sellesse vahemikku.',
    minReturn: 'Halvim oodatav aastane tootlus.',
    maxReturn: 'Parim oodatav aastane tootlus.',
  },

  // =============================================
  // LEGAL PAGES
  // =============================================
  legal: {
    backToCalculator: 'Tagasi kalkulaatorisse',
    privacyTitle: 'Privaatsuspoliitika',
    termsTitle: 'Kasutustingimused',
    cookiesTitle: 'Küpsiste poliitika',
    offerTitle: 'Avalik pakkumine',
    lastUpdated: 'Viimati uuendatud: {date}',
    contact: 'Võtke meiega ühendust aadressil {email}.',
  },
};
