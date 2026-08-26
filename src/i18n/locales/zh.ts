import type { TranslationKeys } from '../index';

export const zh: TranslationKeys = {
  // =============================================
  // APP
  // =============================================
  app: {
    title: '复利',
    subtitle: '计算器',
    calculator: '计算器',
    scenarios: '场景',
    settings: '设置',
    theme: '主题',
    themeLight: '浅色主题',
    themeDark: '深色主题',
    presets: '预设',
    conservative: '保守',
    balanced: '平衡',
    aggressive: '激进',
  },

  // =============================================
  // INPUT FORM
  // =============================================
  form: {
    noContribution: '无定投',
    initialDeposit: '初始存款',
    period: '投资期限',
    years: '年',
    annualReturn: '年化收益率',
    rateRange: '收益率范围',
    minReturn: '最低收益率',
    maxReturn: '最高收益率',
    compounding: '复利频率',
    compoundingDaily: '按日',
    compoundingWeekly: '按周',
    compoundingMonthly: '按月',
    compoundingQuarterly: '按季度',
    compoundingSemiannual: '每半年',
    compoundingAnnually: '按年',
    contributions: '定投金额',
    contributionsMonthly: '每月',
    inflation: '通货膨胀率',
    taxRate: '税率',
    taxation: '纳税方式',
    taxAnnual: '每年',
    taxOnExit: '退出时',
  },

  // =============================================
  // HERO SECTION
  // =============================================
  hero: {
    badge: '关键结果',
    badgeWarning: '关键结果',
    title: '{years}年后的实际购买力',
    descriptionPositive: '在您投入的 {contributions} 之后，您将拥有相当于今天货币价值的 {result} — 即使扣除税收和通货膨胀，这比您的投资多出 {delta}。',
    descriptionNegative: '在您投入的 {contributions} 之后，您将只拥有相当于今天货币价值的 {result} — 这比您的投资少了 {delta}。通货膨胀和税收消耗了比投资收益更多的资金。',
    descriptionNeutral: '在您投入的 {contributions} 之后，您将拥有相当于今天货币价值约 {result} — 投资勉强弥补了税收和通胀造成的损失。',
    totalReturn: '总回报',
  },

  // =============================================
  // HERO METRICS (sidebar)
  // =============================================
  metrics: {
    cagrLabel: '年复合收益率 (CAGR)',
    netEffectLabel: '净效应',
    rangeLabel: '范围',
  },

  // =============================================
  // SATELLITE TILES
  // =============================================
  satellites: {
    totalContributions: '总投入',
    nominalValue: '名义价值',
    nominalAfterTax: '税后名义价值',
    withInflation: '经通胀调整',

    subtitleContributions: '期内总投资——初始存款加上所有追加投资。',
    subtitleNominal: '税前的投资收益（名义上的）。',
    subtitleAfterTax: '净利润（名义利润减去税费）。',
    subtitleInflation: '按今天货币计算的未来价值。显示您的投资经过通货膨胀调整后的购买力。',
  },

  // =============================================
  // DELTA TOOLTIPS
  // =============================================
  deltas: {
    nominalLine1: '投资利润：您赚取的资金比投资多出 {delta} — 占总投入的 {pct}。',
    nominalFormula: '{nominal} (名义) − {contributions} (投入) = {deltaSigned}',
    nominalFormulaPercent: '{delta} ÷ {contributions} × 100 = {pct}',

    taxLine1: '税收影响：税收使总额减少了 {delta} — 占名义价值的 {pct}。',
    taxFormula: '{afterTax} (税后) − {nominal} (税前) = {deltaSigned}',
    taxFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',

    inflationLine1: '通胀影响：在 {years} 年内以 {rate}% 的通胀率计算，资金的购买力损失了 {delta} — 占名义价值的 {pct}。',
    inflationFormula: '{withInflation} (实际价值) − {nominal} (名义) = {deltaSigned}',
    inflationFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',
  },

  // =============================================
  // HERO TOTAL RETURN TOOLTIP
  // =============================================
  heroReturn: {
    positive: '实际总增长：您的投入 ({contributions}) 在今天货币价值下增长至 {result} — 扣除税收和通货膨胀后净收益为 {pct}。',
    negative: '实际总损失：您的投入 ({contributions}) 在今天货币价值下仅值 {result} — 即 {pct}。通货膨胀和税收消耗了比投资收益更多的资金。',
  },

  // =============================================
  // CHART
  // =============================================
  chart: {
    title: '增长图表',
    scenarios: '场景',
    nominal: '名义',
    withInflation: '经通胀调整',
    afterTaxAndInflation: '税后及通胀后',
    contributions: '投入',
    rateRange: '收益率范围',
    optimistic: '乐观',
    pessimistic: '悲观',
    disclaimer: '计算结果为近似值，仅供参考。由于利率、通货膨胀、税收立法、费用及其他市场因素的变化，实际结果可能会有所不同。',
  },

  // =============================================
  // DONUT CHART
  // =============================================
  donut: {
    title: '投资结构',
    percent: '百分比',
    amount: '金额',
    initialDeposit: '初始存款',
    contributions: '定投',
    netProfit: '税后净利润',
    taxesPaid: '已缴税款',
    disclaimer: '近似明细。实际价值取决于所选工具、税率和条件。',
    warningNegativeProfit: '* 净利润为负 — 实际上投资未能跑赢通胀。',
  },

  // =============================================
  // PROJECTION TABLE
  // =============================================
  table: {
    yearLabel: '第{n}年',
    monthLabel: '第{n}个月',
    start: '开始',
    title: '预测表',
    monthly: '每月',
    yearly: '每年',
    expand: '展开',
    showAll: '显示全部 {n} 行',
    hiddenRows: '隐藏 {n} 行',
    close: '关闭',
    collapse: '收起',
    period: '期间',
    contributions: '投入',
    nominalValue: '名义价值',
    withInflation: '经通胀调整',
    nominalAfterTax: '税后名义价值',
    afterTaxAndInflation: '税后及通胀后',
    taxesPaid: '已缴税款',
    min: '最低',
    base: '基准',
    max: '最高',
    swipeHint: '← 滑动 →',
  },

  // =============================================
  // WARNINGS
  // =============================================
  warnings: {
    inflationExceeds: '回报未能跑赢通胀。',
    inflationExceedsDetail: '在当前参数下（收益率 {rate}%，通胀率 {inflation}%），您的投资没有实现实际增长。请考虑更高收益的工具或降低预期通胀率。',
    negativeCagr: '负向的CAGR意味着通货膨胀加上税收消耗的资金大于投资收益。',
    negativeRateRange: '您正在模拟市场亏损情景。图表上的悲观结果将显示当年化利率降至 {minRate}% 时会发生什么。',
  },

  // =============================================
  // DISCLAIMER SECTION
  // =============================================
  disclaimer: {
    title: '关于结果',
    text: '上述数据展示了缴纳所得税后您的投资近似的实际购买力。该计算仅供参考，未考虑市场条件、利率及立法的潜在变化。',
    warning: '这不构成投资建议。',
    pastResults: '过往业绩不保证未来结果。',
  },

  // =============================================
  // FOOTER
  // =============================================
  footer: {
    developer: '开发者',
    copyright: '© {year} 保留所有权利。',
    disclaimer: '非财务建议。',
    privacy: '隐私政策',
    terms: '服务条款',
    methodology: '计算方法',
    support: '支持这个项目',
    supportSoon: '即将推出，谢谢！',
  },

  // =============================================
  // TOOLTIPS (on ⓘ icons)
  // =============================================
  tooltips: {
    initialDeposit: '您在开始时投入的金额。',
    period: '您计划持有投资的年数。',
    annualReturn: '您的投资的预期年化收益率。',
    rateRange: '启用以模拟具有不同收益率的乐观和悲观场景。',
    compounding: '赚取的利息多长时间加到余额中并开始产生利息。',
    contributions: '在初始投资之上的定期追加存款。',
    inflation: '预期的物价上涨和货币购买力下降的年化比率。',
    taxRate: '缴纳税款所占投资利润的百分比。',
    taxation: '缴纳税款的时间：每年（当年针对当年利润）或在退出时（提取时一次性缴纳）。',

    totalContributions: '您将投资的总金额：初始存款加上期内所有追加资金。',
    nominalValue: '没有税收或通胀因素的储蓄。这是纯粹的复利结果——在理想无成本状态下您将拥有的金额。',
    nominalAfterTax: '缴纳所得税后的剩余部分。未将通货膨胀计入其中——这些只是您的账户账面上的名义数字。',
    withInflation: '根据通货膨胀调整后，您的资金在 {years} 年后能买多少东西。未将税收计入其中——其影响在上一板块中显示。',

    cagr: 'CAGR（复合年均增长率）— 扣除税收和通货膨胀后的平均年度实际回报率。它回答了：“我的购买力每年增长了百分之几？” 负的 CAGR 意味着通货膨胀吞噬利润的速度快于投资赚取利润的速度。',
    netEffect: '结束时您的实际购买力与您投资的总额之间的差额。简单来说：到最后您拥有比您投入多（或少）多少的“今天的货币”。',
    range: '结果的可能边界：从悲观（较低利率）到乐观（较高利率）。有助于评估预测的不确定性——实际结果极有可能落在这个范围内。',
    minReturn: '您预期的最差年化收益率。',
    maxReturn: '您预期的最好年化收益率。',
  },

  // =============================================
  // LEGAL PAGES
  // =============================================
  legal: {
    backToCalculator: '返回计算器',
    privacyTitle: '隐私政策',
    termsTitle: '使用条款',
    lastUpdated: '最后更新: {date}',
    contact: '请通过 {email} 联系我们。',
  },
};
