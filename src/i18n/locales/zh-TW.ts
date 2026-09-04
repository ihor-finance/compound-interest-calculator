import type { TranslationKeys } from '../index';

/**
 * Traditional Chinese, in the vocabulary used in Taiwan.
 *
 * Not a character-by-character conversion of zh.ts. The finance terms differ
 * between the two standards, and using the mainland ones would read as
 * translated-from-Simplified to anyone in Taipei or Hong Kong:
 *
 *   收益率  → 報酬率      rate of return
 *   名义    → 名目        nominal
 *   实际    → 實質        real, i.e. inflation-adjusted
 *   增长    → 成長        growth
 *   定投    → 定期投入    regular contributions
 *   场景    → 情境        scenario
 *   项目    → 專案        project
 *
 * The export is default because the locale code contains a hyphen and cannot be
 * a JavaScript identifier; every loader here already falls back to it.
 */
const zhTW: TranslationKeys = {
  // =============================================
  // APP
  // =============================================
  app: {
    title: '複利',
    subtitle: '計算機',
    calculator: '計算機',
    scenarios: '情境',
    settings: '設定',
    theme: '主題',
    themeLight: '淺色主題',
    themeDark: '深色主題',
    presets: '預設值',
    conservative: '保守',
    balanced: '平衡',
    aggressive: '積極',
  },

  // =============================================
  // INPUT FORM
  // =============================================
  form: {
    noContribution: '不定期投入',
    initialDeposit: '期初投入',
    period: '投資期間',
    years: '年',
    annualReturn: '年報酬率',
    rateRange: '報酬率區間',
    minReturn: '最低報酬率',
    maxReturn: '最高報酬率',
    compounding: '複利頻率',
    compoundingDaily: '每日',
    compoundingWeekly: '每週',
    compoundingMonthly: '每月',
    compoundingQuarterly: '每季',
    compoundingSemiannual: '每半年',
    compoundingAnnually: '每年',
    contributions: '定期投入',
    contributionsMonthly: '每月',
    inflation: '通貨膨脹率',
    taxRate: '稅率',
    taxation: '課稅方式',
    taxAnnual: '每年',
    taxOnExit: '出場時',
  },

  // =============================================
  // HERO SECTION
  // =============================================
  hero: {
    badge: '關鍵結果',
    badgeWarning: '關鍵結果',
    title: '{years} 年後的實質購買力',
    descriptionPositive: '在您投入 {contributions} 之後，您將擁有相當於今日幣值的 {result} — 即使扣除稅負與通膨，仍比您投入的多出 {delta}。',
    descriptionNegative: '在您投入 {contributions} 之後，您只會擁有相當於今日幣值的 {result} — 比您投入的少了 {delta}。通膨與稅負侵蝕掉的，多過投資賺回來的。',
    descriptionNeutral: '在您投入 {contributions} 之後，您將擁有相當於今日幣值約 {result} — 投資勉強補回了稅負與通膨造成的損失。',
    totalReturn: '總報酬',
  },

  // =============================================
  // HERO METRICS (sidebar)
  // =============================================
  metrics: {
    cagrLabel: '年複合成長率 (CAGR)',
    netEffectLabel: '淨效果',
    rangeLabel: '區間',
  },

  // =============================================
  // SATELLITE TILES
  // =============================================
  satellites: {
    totalContributions: '總投入',
    nominalValue: '名目價值',
    nominalAfterTax: '稅後名目價值',
    withInflation: '經通膨調整',

    subtitleContributions: '期間內的投資總額——期初投入加上所有後續投入。',
    subtitleNominal: '稅前的投資成果（名目上的）。',
    subtitleAfterTax: '淨利（名目獲利減去稅款）。',
    subtitleInflation: '以今日幣值計算的未來價值。顯示您的投資經通膨調整後的購買力。',
  },

  // =============================================
  // DELTA TOOLTIPS
  // =============================================
  deltas: {
    nominalLine1: '投資獲利：您賺到的錢比投入的多出 {delta} — 佔總投入的 {pct}。',
    nominalFormula: '{nominal}（名目）− {contributions}（投入）= {deltaSigned}',
    nominalFormulaPercent: '{delta} ÷ {contributions} × 100 = {pct}',

    taxLine1: '稅負影響：稅款使總額減少了 {delta} — 佔名目價值的 {pct}。',
    taxFormula: '{afterTax}（稅後）− {nominal}（稅前）= {deltaSigned}',
    taxFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',

    inflationLine1: '通膨影響：在 {years} 年間以 {rate}% 的通膨率計算，資金的購買力損失了 {delta} — 佔名目價值的 {pct}。',
    inflationFormula: '{withInflation}（實質價值）− {nominal}（名目）= {deltaSigned}',
    inflationFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',
  },

  // =============================================
  // HERO TOTAL RETURN TOOLTIP
  // =============================================
  heroReturn: {
    positive: '實質總成長：您投入的 {contributions} 以今日幣值計算成長至 {result} — 扣除稅負與通膨後淨賺 {pct}。',
    negative: '實質總損失：您投入的 {contributions} 以今日幣值計算僅值 {result} — 即 {pct}。通膨與稅負侵蝕掉的，多過投資賺回來的。',
  },

  // =============================================
  // CHART
  // =============================================
  chart: {
    title: '成長圖表',
    scenarios: '情境',
    nominal: '名目',
    withInflation: '經通膨調整',
    afterTaxAndInflation: '稅後與通膨後',
    contributions: '投入',
    rateRange: '報酬率區間',
    optimistic: '樂觀',
    pessimistic: '悲觀',
    disclaimer: '計算結果為近似值，僅供參考。實際結果可能因利率、通膨、稅法、費用及其他市場因素的變動而有所不同。',
  },

  // =============================================
  // DONUT CHART
  // =============================================
  donut: {
    title: '投資結構',
    percent: '百分比',
    amount: '金額',
    initialDeposit: '期初投入',
    contributions: '定期投入',
    netProfit: '稅後淨利',
    taxesPaid: '已繳稅款',
    disclaimer: '概略明細。實際數字取決於所選工具、稅率與條件。',
    warningNegativeProfit: '* 淨利為負 — 這筆投資實際上沒有跑贏通膨。',
  },

  // =============================================
  // PROJECTION TABLE
  // =============================================
  table: {
    yearLabel: '第 {n} 年',
    monthLabel: '第 {n} 個月',
    start: '起始',
    title: '預估表',
    monthly: '每月',
    yearly: '每年',
    expand: '展開',
    showAll: '顯示全部 {n} 列',
    hiddenRows: '隱藏 {n} 列',
    close: '關閉',
    collapse: '收合',
    period: '期間',
    contributions: '投入',
    nominalValue: '名目價值',
    withInflation: '經通膨調整',
    nominalAfterTax: '稅後名目價值',
    afterTaxAndInflation: '稅後與通膨後',
    taxesPaid: '已繳稅款',
    min: '最低',
    base: '基準',
    max: '最高',
    swipeHint: '← 滑動 →',
  },

  // =============================================
  // WARNINGS
  // =============================================
  warnings: {
    inflationExceeds: '報酬沒有跑贏通膨。',
    inflationExceedsDetail: '在目前的參數下（報酬率 {rate}%，通膨率 {inflation}%），您的投資沒有實質成長。可考慮報酬較高的工具，或調降預期通膨率。',
    negativeCagr: '負的 CAGR 表示通膨加上稅負侵蝕掉的資金，多過投資賺回來的。',
    negativeRateRange: '您正在模擬市場虧損的情境。圖表上的悲觀結果會顯示年報酬率降到 {minRate}% 時會發生什麼事。',
  },

  // =============================================
  // DISCLAIMER SECTION
  // =============================================
  disclaimer: {
    title: '關於這些結果',
    text: '以上數字顯示繳納所得稅後，您這筆投資概略的實質購買力。此計算僅供參考，未將市場狀況、利率與法規的可能變動納入考量。',
    warning: '這不構成投資建議。',
    pastResults: '過去績效不保證未來結果。',
  },

  // =============================================
  // FOOTER
  // =============================================
  footer: {
    developer: '開發者',
    copyright: '© {year} 版權所有。',
    disclaimer: '非財務建議。',
    privacy: '隱私權政策',
    terms: '服務條款',
    methodology: '計算方法',
    support: '支持這個專案',
    supportSoon: '敬請期待，謝謝！',
  },

  // =============================================
  // TOOLTIPS (on ⓘ icons)
  // =============================================
  tooltips: {
    initialDeposit: '您在一開始投入的金額。',
    period: '您打算持有這筆投資的年數。',
    annualReturn: '您預期這筆投資的年報酬率。',
    rateRange: '開啟後可用不同的報酬率模擬樂觀與悲觀情境。',
    compounding: '賺到的利息多久併入本金一次，並開始跟著生息。',
    contributions: '在期初投入之外，定期追加的金額。',
    inflation: '預期的物價年增率，也就是貨幣購買力下降的速度。',
    taxRate: '稅款佔投資獲利的百分比。',
    taxation: '何時繳稅：每年（就當年度獲利繳納）或出場時（提領時一次繳清）。',

    totalContributions: '您將投入的總金額：期初投入加上期間內所有的追加投入。',
    nominalValue: '不計稅負與通膨的累積金額。這是純粹的複利結果——在沒有任何成本的理想狀態下您會擁有的數字。',
    nominalAfterTax: '繳完所得稅後剩下的部分。未計入通膨——這只是帳戶上的名目數字。',
    withInflation: '經通膨調整後，您的錢在 {years} 年後買得到多少東西。未計入稅負——稅的影響在上一個區塊。',

    cagr: 'CAGR（年複合成長率）— 扣除稅負與通膨後的平均年度實質報酬。它回答的是：「我的購買力每年成長了百分之幾？」負的 CAGR 表示通膨吞噬獲利的速度，快過投資賺錢的速度。',
    netEffect: '期末的實質購買力與您投入總額之間的差距。白話說：到最後您手上比投入時多了（或少了）多少「今天的錢」。',
    range: '結果可能落在的範圍：從悲觀（較低報酬率）到樂觀（較高報酬率）。有助於評估預估的不確定性——實際結果極可能落在這個區間內。',
    minReturn: '您預期最差的年報酬率。',
    maxReturn: '您預期最好的年報酬率。',
  },

  // =============================================
  // LEGAL PAGES
  // =============================================
  legal: {
    backToCalculator: '返回計算機',
    privacyTitle: '隱私權政策',
    termsTitle: '使用條款',
    lastUpdated: '最後更新：{date}',
    contact: '請透過 {email} 與我們聯絡。',
  },
};

export default zhTW;
