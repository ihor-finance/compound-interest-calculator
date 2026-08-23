import type { TranslationKeys } from '../types';

export const tl: TranslationKeys = {
  app: {
    title: 'Compound Interest',
    subtitle: 'Calculator',
    calculator: 'Calculator',
    scenarios: 'Mga senaryo',
    settings: 'Mga setting',
    theme: 'Tema',
    themeLight: 'Maliwanag na tema',
    themeDark: 'Madilim na tema',
    presets: 'Mga preset',
    conservative: 'Konserbatibo',
    balanced: 'Balanse',
    aggressive: 'Agresibo',
  },

  form: {
    noContribution: 'Walang dagdag na hulog',
    initialDeposit: 'Panimulang halaga',
    period: 'Tagal ng pamumuhunan',
    years: 'taon',
    annualReturn: 'Taunang kita',
    rateRange: 'Saklaw ng kita',
    minReturn: 'Pinakamababang kita',
    maxReturn: 'Pinakamataas na kita',
    compounding: 'Dalas ng pag-compound',
    compoundingDaily: 'Araw-araw',
    compoundingWeekly: 'Lingguhan',
    compoundingMonthly: 'Buwanan',
    compoundingQuarterly: 'Quarterly',
    compoundingSemiannual: 'Tuwing kalahating taon',
    compoundingAnnually: 'Taunan',
    contributions: 'Dagdag na hulog',
    contributionsMonthly: 'Buwanan',
    inflation: 'Implasyon',
    taxRate: 'Rate ng buwis',
    taxation: 'Pagbubuwis',
    taxAnnual: 'Taunan',
    taxOnExit: 'Sa paglabas',
  },

  hero: {
    badge: 'Pangunahing resulta',
    badgeWarning: 'Pangunahing resulta',
    title: 'Tunay na kapangyarihang bumili sa loob ng {years} taon',
    descriptionPositive: 'Mula sa {contributions} na inihulog mo, magkakaroon ka ng katumbas ng {result} sa halaga ng pera ngayon — {delta} iyan na mas malaki kaysa sa inilagay mo, kahit pagkatapos ng buwis at implasyon.',
    descriptionNegative: 'Mula sa {contributions} na inihulog mo, magkakaroon ka lamang ng katumbas ng {result} sa halaga ng pera ngayon — {delta} iyan na mas maliit kaysa sa inilagay mo. Mas malaki ang nakain ng implasyon at buwis kaysa sa kinita ng pamumuhunan.',
    descriptionNeutral: 'Mula sa {contributions} na inihulog mo, magkakaroon ka ng katumbas ng humigit-kumulang {result} sa halaga ng pera ngayon — halos katumbas lang ng nawala sa buwis at implasyon ang kinita ng pamumuhunan.',
    totalReturn: 'kabuuang kita',
  },

  metrics: {
    cagrLabel: 'Kita (CAGR)',
    netEffectLabel: 'netong epekto',
    rangeLabel: 'Saklaw',
  },

  satellites: {
    totalContributions: 'Kabuuang inihulog',
    nominalValue: 'Nominal na halaga',
    nominalAfterTax: 'Nominal pagkatapos ng buwis',
    withInflation: 'Isinaayos sa implasyon',

    subtitleContributions: 'Kabuuang inilagay sa buong panahon — panimulang halaga at lahat ng dagdag na hulog.',
    subtitleNominal: 'Kinita ng pamumuhunan bago ang buwis, sa nominal na halaga.',
    subtitleAfterTax: 'Netong kita (nominal na kita bawas ang buwis).',
    subtitleInflation: 'Halaga sa hinaharap na isinalin sa pera ngayon. Ipinapakita kung magkano ang mabibili ng pamumuhunan mo matapos isaalang-alang ang implasyon.',
  },

  deltas: {
    nominalLine1: 'Kita ng pamumuhunan: kumita ang pera mo ng {delta} nang higit sa inilagay mo — {pct} iyan ng kabuuang hulog.',
    nominalFormula: '{nominal} (nominal) − {contributions} (mga hulog) = {deltaSigned}',
    nominalFormulaPercent: '{delta} ÷ {contributions} × 100 = {pct}',

    taxLine1: 'Epekto ng buwis: binawasan ng buwis ang kabuuan ng {delta} — {pct} iyan ng nominal na halaga.',
    taxFormula: '{afterTax} (pagkatapos ng buwis) − {nominal} (bago ang buwis) = {deltaSigned}',
    taxFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',

    inflationLine1: 'Epekto ng implasyon: sa loob ng {years} taon sa {rate}% implasyon, nawalan ang pera ng {delta} sa kapangyarihang bumili — {pct} iyan ng nominal na halaga.',
    inflationFormula: '{withInflation} (tunay na halaga) − {nominal} (nominal) = {deltaSigned}',
    inflationFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',
  },

  heroReturn: {
    positive: 'Kabuuang tunay na paglago: ang mga hulog mo ({contributions}) ay lumago sa {result} sa halaga ng pera ngayon — {pct} iyan na netong kita pagkatapos ng buwis at implasyon.',
    negative: 'Kabuuang tunay na lugi: ang mga hulog mo ({contributions}) ay magkakahalaga lamang ng {result} sa pera ngayon — {pct} iyan. Mas malaki ang nakain ng implasyon at buwis kaysa sa kinita ng pamumuhunan.',
  },

  chart: {
    title: 'Talangguhit ng paglago',
    scenarios: 'Mga senaryo',
    nominal: 'Nominal',
    withInflation: 'Isinaayos sa implasyon',
    afterTaxAndInflation: 'Pagkatapos ng buwis at implasyon',
    contributions: 'Mga hulog',
    rateRange: 'Saklaw ng kita',
    optimistic: 'Optimistiko',
    pessimistic: 'Pesimistiko',
    disclaimer: 'Tantiya lamang at pang-ilustrasyon ang mga kalkulasyon. Maaaring magkaiba ang aktwal na resulta dahil sa pagbabago sa interes, implasyon, batas sa buwis, bayarin at iba pang salik sa merkado.',
  },

  donut: {
    title: 'Istruktura ng pamumuhunan',
    percent: 'Porsyento',
    amount: 'Halaga',
    initialDeposit: 'Panimulang halaga',
    contributions: 'Dagdag na hulog',
    netProfit: 'Netong kita pagkatapos ng buwis',
    taxesPaid: 'Nabayarang buwis',
    disclaimer: 'Tantiyang paghahati. Nakadepende ang aktwal na halaga sa napiling instrumento, rate ng buwis at mga kondisyon.',
    warningNegativeProfit: '* Negatibo ang netong kita — hindi natakpan ng pamumuhunan ang implasyon sa tunay na halaga.',
  },

  table: {
    yearLabel: 'Taon {n}',
    monthLabel: 'Buwan {n}',
    start: 'Simula',
    title: 'Talahanayan ng proyeksyon',
    monthly: 'Buwanan',
    yearly: 'Taunan',
    expand: 'Palawakin',
    showAll: 'Ipakita lahat ng {n} hilera',
    hiddenRows: '{n} nakatago',
    close: 'Isara',
    collapse: 'Itiklop',
    period: 'Panahon',
    contributions: 'Mga hulog',
    nominalValue: 'Nominal na halaga',
    withInflation: 'Isinaayos sa implasyon',
    nominalAfterTax: 'Nominal pagkatapos ng buwis',
    afterTaxAndInflation: 'Pagkatapos ng buwis at implasyon',
    taxesPaid: 'Nabayarang buwis',
    min: 'Min',
    base: 'Base',
    max: 'Max',
    swipeHint: '← i-swipe →',
  },

  warnings: {
    inflationExceeds: 'Hindi natatakpan ng kita ang implasyon.',
    inflationExceedsDetail: 'Sa kasalukuyang mga parameter (kita {rate}%, implasyon {inflation}%) hindi lumalago ang pamumuhunan mo sa tunay na halaga. Isaalang-alang ang instrumentong may mas mataas na kita o babaan ang inaasahang implasyon.',
    negativeCagr: 'Ang negatibong CAGR ay nangangahulugang mas malaki ang nakakain ng implasyon at buwis kaysa sa kinikita ng pamumuhunan.',
    negativeRateRange: 'Nagmomodelo ka ng senaryo ng lugi sa merkado. Ipapakita ng pesimistikong resulta sa talangguhit kung ano ang mangyayari kapag bumaba ang kita sa {minRate}% kada taon.',
  },

  disclaimer: {
    title: 'Tungkol sa mga resulta',
    text: 'Ipinapakita ng mga numero sa itaas ang tinatayang tunay na kapangyarihang bumili ng iyong pamumuhunan matapos magbayad ng buwis sa kita. Pang-impormasyon lamang ang mga kalkulasyon at hindi isinasaalang-alang ang posibleng pagbabago sa kalagayan ng merkado, interes at batas.',
    warning: 'Hindi ito payo sa pamumuhunan.',
    pastResults: 'Ang nakaraang resulta ay hindi garantiya ng resulta sa hinaharap.',
  },

  footer: {
    developer: 'Binuo ng',
    copyright: '© {year} Nakalaan ang lahat ng karapatan.',
    disclaimer: 'Hindi payo sa pananalapi.',
    privacy: 'Privacy',
    terms: 'Mga tuntunin',
    methodology: 'Metodolohiya',
  },

  tooltips: {
    initialDeposit: 'Ang halagang inilalagay mo sa simula.',
    period: 'Ilang taon mong balak hawakan ang pamumuhunan.',
    annualReturn: 'Ang inaasahang taunang porsyento ng kita mula sa iyong pamumuhunan.',
    rateRange: 'I-on para magmodelo ng optimistiko at pesimistikong senaryo gamit ang magkaibang rate.',
    compounding: 'Gaano kadalas idinadagdag sa balanse ang kinitang interes para kumita rin ito ng sarili nitong interes.',
    contributions: 'Regular na karagdagang hulog bukod sa panimulang pamumuhunan.',
    inflation: 'Ang inaasahang taunang bilis ng pagtaas ng presyo kung saan nawawalan ng halaga ang pera.',
    taxRate: 'Ang porsyento ng kita sa pamumuhunan na napupunta sa buwis.',
    taxation: 'Kailan binabayaran ang buwis: taunan (bawat taon sa kita ng taong iyon) o sa paglabas (isang beses, kapag kinuha mo ang pera).',

    totalContributions: 'Ang kabuuang ilalagay mo: panimulang halaga at lahat ng dagdag na hulog sa buong panahon.',
    nominalValue: 'Ang iyong ipon nang walang buwis o implasyon. Ito ang purong resulta ng compound interest — kung ano ang mayroon ka sa perpektong mundo na walang gastos.',
    nominalAfterTax: 'Ang natitira matapos magbayad ng buwis sa kita. HINDI kasama ang implasyon — nominal na numero ito gaya ng makikita sa account mo.',
    withInflation: 'Kung magkano ang mabibili ng pera mo sa loob ng {years} taon, isinaayos sa implasyon. HINDI kasama ang buwis — nasa naunang kahon ang epekto nito.',

    cagr: 'CAGR (taunang pinagsamang bilis ng paglago) — ang karaniwang taunang tunay na kita matapos ang buwis at implasyon. Sinasagot nito ang tanong: "Ilang porsyento lumago ang kapangyarihan kong bumili bawat taon?" Ang negatibong CAGR ay nangangahulugang mas mabilis kinakain ng implasyon ang kita kaysa sa bilis ng pagkita ng pamumuhunan.',
    netEffect: 'Ang pagkakaiba ng iyong tunay na kapangyarihang bumili sa dulo at ng kabuuang inilagay mo. Sa simpleng salita: gaano karaming "perang ngayon" ang mas marami (o mas kaunti) ang mayroon ka sa dulo kumpara sa inilagay mo.',
    range: 'Ang posibleng hangganan ng resulta mo: mula pesimistiko (mas mababang rate) hanggang optimistiko (mas mataas na rate). Nakakatulong tantiyahin ang kawalang-katiyakan ng proyeksyon — malamang nasa saklaw na ito ang tunay na resulta.',
    minReturn: 'Ang pinakamasamang taunang kita na inaasahan mo.',
    maxReturn: 'Ang pinakamagandang taunang kita na inaasahan mo.',
  },

  legal: {
    backToCalculator: 'Bumalik sa calculator',
    privacyTitle: 'Patakaran sa Privacy',
    termsTitle: 'Mga Tuntunin ng Paggamit',
    lastUpdated: 'Huling na-update: {date}',
    contact: 'Makipag-ugnayan sa amin sa {email}.',
  },
};
