import type { TranslationKeys } from '../index';

export const lt: TranslationKeys = {
  // =============================================
  // APP
  // =============================================
  app: {
    title: 'Sudėtinės palūkanos',
    subtitle: 'Skaičiuoklė',
    calculator: 'Skaičiuoklė',
    scenarios: 'Scenarijai',
    settings: 'Nustatymai',
    presets: 'Išankstiniai nustatymai',
    conservative: 'Konservatyvus',
    balanced: 'Subalansuotas',
    aggressive: 'Agresyvus',
  },

  // =============================================
  // INPUT FORM
  // =============================================
  form: {
    noContribution: 'Be įmokų',
    initialDeposit: 'Pradinis įnašas',
    period: 'Investavimo laikotarpis',
    years: 'metai',
    annualReturn: 'Metinė grąža',
    rateRange: 'Normos intervalas',
    minReturn: 'Min. grąža',
    maxReturn: 'Maks. grąža',
    compounding: 'Kapitalizavimo dažnumas',
    compoundingDaily: 'Kasdien',
    compoundingWeekly: 'Kas savaitę',
    compoundingMonthly: 'Kas mėnesį',
    compoundingQuarterly: 'Kas ketvirtį',
    compoundingSemiannual: 'Kas pusmetį',
    compoundingAnnually: 'Kasmet',
    contributions: 'Įmokos',
    contributionsMonthly: 'Kas mėnesį',
    inflation: 'Infliacija',
    taxRate: 'Mokesčių tarifas',
    taxation: 'Apmokestinimas',
    taxAnnual: 'Kasmet',
    taxOnExit: 'Išsiimant',
  },

  // =============================================
  // HERO SECTION
  // =============================================
  hero: {
    badge: 'Pagrindinis rezultatas',
    badgeWarning: 'Pagrindinis rezultatas',
    title: 'Reali perkamoji galia po {years} metų',
    descriptionPositive: 'Iš jūsų {contributions} įmokų turėsite ekvivalentą {result} šios dienos pinigais — tai {delta} daugiau nei investavote, net po mokesčių ir infliacijos.',
    descriptionNegative: 'Iš jūsų {contributions} įmokų turėsite ekvivalentą tik {result} šios dienos pinigais — tai {delta} mažiau nei investavote. Infliacija ir mokesčiai sunaudojo daugiau nei investicija uždirbo.',
    descriptionNeutral: 'Iš jūsų {contributions} įmokų turėsite ekvivalentą maždaug {result} šios dienos pinigais — investicija vos padengia nuostolius dėl mokesčių ir infliacijos.',
    totalReturn: 'bendra grąža',
  },

  // =============================================
  // HERO METRICS (sidebar)
  // =============================================
  metrics: {
    cagrLabel: 'Pelningumas (CAGR)',
    netEffectLabel: 'grynasis poveikis',
    rangeLabel: 'Intervalas',
  },

  // =============================================
  // SATELLITE TILES
  // =============================================
  satellites: {
    totalContributions: 'Iš viso įmokų',
    nominalValue: 'Nominali vertė',
    nominalAfterTax: 'Nominali po mokesčių',
    withInflation: 'Įvertinus infliaciją',

    subtitleContributions: 'Iš viso investuota per laikotarpį — pradinis įnašas plius visi papildymai.',
    subtitleNominal: 'Kiek investicija uždirbo prieš mokesčius, nominalia verte.',
    subtitleAfterTax: 'Grynasis pelnas (nominalus pelnas atėmus mokesčius).',
    subtitleInflation: 'Būsima vertė šios dienos pinigais. Rodo, kiek galėsite nupirkti už investiciją, įvertinus infliaciją.',
  },

  // =============================================
  // DELTA TOOLTIPS
  // =============================================
  deltas: {
    nominalLine1: 'Investicijų pelnas: jūsų pinigai uždirbo {delta} virš to, ką investavote — tai {pct} nuo bendrų įmokų.',
    nominalFormula: '{nominal} (nominali) − {contributions} (įmokos) = {deltaSigned}',
    nominalFormulaPercent: '{delta} ÷ {contributions} × 100 = {pct}',

    taxLine1: 'Mokesčių poveikis: mokesčiai sumažino bendrą sumą {delta} — tai {pct} nuo nominalios vertės.',
    taxFormula: '{afterTax} (po mokesčių) − {nominal} (prieš mokesčius) = {deltaSigned}',
    taxFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',

    inflationLine1: 'Infliacijos poveikis: per {years} metų esant {rate}% infliacijai, pinigai prarado {delta} perkamosios galios — tai {pct} nuo nominalios vertės.',
    inflationFormula: '{withInflation} (reali vertė) − {nominal} (nominali) = {deltaSigned}',
    inflationFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',
  },

  // =============================================
  // HERO TOTAL RETURN TOOLTIP
  // =============================================
  heroReturn: {
    positive: 'Bendras realus augimas: jūsų įmokos ({contributions}) išaugo iki {result} šios dienos pinigais — tai {pct} grynasis pelnas po mokesčių ir infliacijos.',
    negative: 'Bendras realus nuostolis: jūsų įmokos ({contributions}) bus vertos tik {result} šios dienos pinigais — tai {pct}. Infliacija ir mokesčiai sunaudojo daugiau nei investicija uždirbo.',
  },

  // =============================================
  // CHART
  // =============================================
  chart: {
    title: 'Augimo grafikas',
    scenarios: 'Scenarijai',
    nominal: 'Nominali',
    withInflation: 'Įvertinus infliaciją',
    afterTaxAndInflation: 'Po mokesčių ir infliacijos',
    contributions: 'Įmokos',
    rateRange: 'Normos intervalas',
    optimistic: 'Optimistinis',
    pessimistic: 'Pesimistinis',
    disclaimer: 'Skaičiavimai yra apytiksliai ir iliustraciniai. Faktiniai rezultatai gali skirtis dėl palūkanų normų, infliacijos, mokesčių įstatymų, mokesčių ir kitų rinkos veiksnių pokyčių.',
  },

  // =============================================
  // DONUT CHART
  // =============================================
  donut: {
    title: 'Investicijų struktūra',
    percent: 'Procentai',
    amount: 'Suma',
    initialDeposit: 'Pradinis įnašas',
    contributions: 'Įmokos',
    netProfit: 'Grynasis pelnas po mokesčių',
    taxesPaid: 'Sumokėti mokesčiai',
    disclaimer: 'Apytikslis pasiskirstymas. Faktinės vertės priklauso nuo pasirinkto instrumento, mokesčių tarifų ir sąlygų.',
    warningNegativeProfit: '* Grynasis pelnas yra neigiamas — investicija realiai nepadengė infliacijos.',
  },

  // =============================================
  // PROJECTION TABLE
  // =============================================
  table: {
    yearLabel: '{n} metai',
    monthLabel: '{n} mėnuo',
    start: 'Pradžia',
    title: 'Prognozių lentelė',
    monthly: 'Kas mėnesį',
    yearly: 'Kasmet',
    expand: 'Išskleisti',
    showAll: 'Rodyti visas {n} eilutes',
    hiddenRows: '{n} paslėpta',
    close: 'Uždaryti',
    collapse: 'Suskleisti',
    period: 'Laikotarpis',
    contributions: 'Įmokos',
    nominalValue: 'Nominali vertė',
    withInflation: 'Įvertinus infliaciją',
    nominalAfterTax: 'Nominali po mokesčių',
    afterTaxAndInflation: 'Po mokesčių ir infliacijos',
    taxesPaid: 'Sumokėti mokesčiai',
    min: 'Min',
    base: 'Bazė',
    max: 'Maks',
    swipeHint: '← braukti →',
  },

  // =============================================
  // WARNINGS
  // =============================================
  warnings: {
    inflationExceeds: 'Grąža nepadengia infliacijos.',
    inflationExceedsDetail: 'Esant dabartiniams parametrams (grąža {rate}%, infliacija {inflation}%) jūsų investicija realiai neauga. Apsvarstykite instrumentus su didesne grąža arba sumažinkite tikėtiną infliaciją.',
    negativeCagr: 'Neigiamas CAGR reiškia, kad infliacija + mokesčiai sunaudoja daugiau, nei investicija uždirba.',
    negativeRateRange: 'Jūs modeliuojate rinkos nuostolių scenarijų. Pesimistinis rezultatas grafike parodys, kas nutiktų, jei norma nukristų iki {minRate}% per metus.',
  },

  // =============================================
  // DISCLAIMER SECTION
  // =============================================
  disclaimer: {
    title: 'Apie rezultatus',
    text: 'Aukščiau pateikti skaičiai rodo apytikslę jūsų investicijos realią perkamąją galią sumokėjus pajamų mokestį. Skaičiavimai yra informacinio pobūdžio ir neatsižvelgia į galimus rinkos sąlygų, normų ir teisės aktų pokyčius.',
    warning: 'Tai nėra investavimo patarimas.',
    pastResults: 'Praeities rezultatai negarantuoja ateities rezultatų.',
  },

  // =============================================
  // FOOTER
  // =============================================
  footer: {
    developer: 'Sukurta',
    copyright: '© {year} Visos teisės saugomos.',
    disclaimer: 'Ne finansinis patarimas.',
    privacy: 'Privatumas',
    terms: 'Sąlygos',
    cookies: 'Slapukai',
    offer: 'Pasiūlymas',
  },

  // =============================================
  // TOOLTIPS (on ⓘ icons)
  // =============================================
  tooltips: {
    initialDeposit: 'Suma, kurią investuojate pradžioje.',
    period: 'Kiek metų planuojate išlaikyti investiciją.',
    annualReturn: 'Tikėtina metinė procentinė investicijų grąža.',
    rateRange: 'Įgalinti, kad modeliuotumėte optimistinius ir pesimistinius scenarijus su skirtingomis normomis.',
    compounding: 'Kaip dažnai uždirbtos palūkanos pridedamos prie jūsų likučio ir pradeda pačios uždirbti palūkanas.',
    contributions: 'Reguliarios papildomos įmokos be pradinės investicijos.',
    inflation: 'Tikėtina metinė norma, kuria didėja kainos ir pinigai praranda perkamąją galią.',
    taxRate: 'Investicijų pelno procentas, tenkantis mokesčiams.',
    taxation: 'Kada mokami mokesčiai: kasmet (kiekvienais metais nuo tų metų pelno) arba išeinant (vieną kartą, kai išsiimate).',

    totalContributions: 'Bendra suma, kurią investuosite: pradinis įnašas plius visi papildymai per laikotarpį.',
    nominalValue: 'Jūsų santaupos be mokesčių ar infliacijos. Tai grynas sudėtinių palūkanų rezultatas — ką turėtumėte idealiame pasaulyje be jokių išlaidų.',
    nominalAfterTax: 'Kas lieka sumokėjus pajamų mokestį. Infliacija NĖRA įtraukta — tai nominalūs skaičiai, kokie jie atsirastų jūsų sąskaitoje.',
    withInflation: 'Kiek jūsų pinigai galės nupirkti po {years} metų, įvertinus infliaciją. Mokesčiai NĖRA įtraukti — jų poveikis parodytas ankstesnėje plytelėje.',

    cagr: 'CAGR (Sudėtinė metinė augimo norma) — vidutinė metinė reali grąža po mokesčių ir infliacijos. Atsako į klausimą: "Keliais procentais kasmet išaugo mano perkamoji galia?" Neigiamas CAGR reiškia, kad infliacija suvalgo jūsų pelną greičiau, nei jūsų investicija jį uždirba.',
    netEffect: 'Skirtumas tarp jūsų realios perkamosios galios pabaigoje ir bendros investuotos sumos. Paprastai tariant: kiek daugiau (ar mažiau) "šios dienos pinigų" turėsite pabaigoje, palyginti su tuo, ką įdėjote.',
    range: 'Galimos jūsų rezultato ribos: nuo pesimistinio (žemesnė norma) iki optimistinio (aukštesnė norma). Padeda įvertinti prognozės neapibrėžtumą — realus rezultatas greičiausiai atsidurs kažkur šiame intervale.',
    minReturn: 'Blogiausia metinė grąža, kurios tikitės.',
    maxReturn: 'Geriausia metinė grąža, kurios tikitės.',
  },

  // =============================================
  // LEGAL PAGES
  // =============================================
  legal: {
    backToCalculator: 'Atgal į skaičiuoklę',
    privacyTitle: 'Privatumo politika',
    termsTitle: 'Naudojimo sąlygos',
    cookiesTitle: 'Slapukų politika',
    offerTitle: 'Viešoji oferta',
    lastUpdated: 'Paskutinį kartą atnaujinta: {date}',
    contact: 'Susisiekite su mumis {email}.',
  },
};
