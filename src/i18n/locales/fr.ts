import type { TranslationKeys } from '../index';

export const fr: TranslationKeys = {
  // =============================================
  // APP
  // =============================================
  app: {
    title: 'Intérêts Composés',
    subtitle: 'Calculatrice',
    calculator: 'Calculatrice',
    scenarios: 'Scénarios',
    settings: 'Paramètres',
    theme: 'Thème',
    themeLight: 'Thème clair',
    themeDark: 'Thème sombre',
    presets: 'Préréglages',
    conservative: 'Prudent',
    balanced: 'Équilibré',
    aggressive: 'Agressif',
  },

  // =============================================
  // INPUT FORM
  // =============================================
  form: {
    noContribution: 'Pas de versements',
    initialDeposit: 'Dépôt initial',
    period: 'Durée de placement',
    years: 'ans',
    annualReturn: 'Rendement annuel',
    rateRange: 'Plage de taux',
    minReturn: 'Rendement min.',
    maxReturn: 'Rendement max.',
    compounding: 'Fréquence de capitalisation',
    compoundingDaily: 'Journalière',
    compoundingWeekly: 'Hebdomadaire',
    compoundingMonthly: 'Mensuelle',
    compoundingQuarterly: 'Trimestrielle',
    compoundingSemiannual: 'Semestrielle',
    compoundingAnnually: 'Annuelle',
    contributions: 'Versements',
    contributionsMonthly: 'Mensuels',
    inflation: 'Inflation',
    taxRate: 'Taux d\'imposition',
    taxation: 'Imposition',
    taxAnnual: 'Annuelle',
    taxOnExit: 'À la sortie',
  },

  // =============================================
  // HERO SECTION
  // =============================================
  hero: {
    badge: 'Résultat clé',
    badgeWarning: 'Résultat clé',
    title: 'Pouvoir d\'achat réel dans {years} ans',
    descriptionPositive: 'À partir de vos {contributions} de versements, vous aurez l\'équivalent de {result} en monnaie d\'aujourd\'hui — soit {delta} de plus que ce que vous avez investi, même après impôts et inflation.',
    descriptionNegative: 'À partir de vos {contributions} de versements, vous n\'aurez que l\'équivalent de {result} en monnaie d\'aujourd\'hui — soit {delta} de moins que ce que vous avez investi. L\'inflation et les impôts ont consommé plus que ce que l\'investissement a rapporté.',
    descriptionNeutral: 'À partir de vos {contributions} de versements, vous aurez l\'équivalent d\'environ {result} en monnaie d\'aujourd\'hui — l\'investissement couvre à peine les pertes dues aux impôts et à l\'inflation.',
    totalReturn: 'rendement total',
  },

  // =============================================
  // HERO METRICS (sidebar)
  // =============================================
  metrics: {
    cagrLabel: 'Rentabilité (TCAC)',
    netEffectLabel: 'effet net',
    rangeLabel: 'Plage',
  },

  // =============================================
  // SATELLITE TILES
  // =============================================
  satellites: {
    totalContributions: 'Total des versements',
    nominalValue: 'Valeur nominale',
    nominalAfterTax: 'Nominal après impôts',
    withInflation: 'Ajusté à l\'inflation',

    subtitleContributions: 'Total investi sur la période — dépôt initial plus toutes les recharges.',
    subtitleNominal: 'Ce que l\'investissement a rapporté avant impôts, en termes nominaux.',
    subtitleAfterTax: 'Bénéfice net (bénéfice nominal moins impôts).',
    subtitleInflation: 'Valeur future en monnaie d\'aujourd\'hui. Montre combien votre investissement permettra d\'acheter, ajusté à l\'inflation.',
  },

  // =============================================
  // DELTA TOOLTIPS
  // =============================================
  deltas: {
    nominalLine1: 'Bénéfice de l\'investissement : votre argent a rapporté {delta} de plus que ce que vous avez investi — soit {pct} du total des versements.',
    nominalFormula: '{nominal} (nominal) − {contributions} (versements) = {deltaSigned}',
    nominalFormulaPercent: '{delta} ÷ {contributions} × 100 = {pct}',

    taxLine1: 'Impact fiscal : les impôts ont réduit le total de {delta} — soit {pct} de la valeur nominale.',
    taxFormula: '{afterTax} (après impôts) − {nominal} (avant impôts) = {deltaSigned}',
    taxFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',

    inflationLine1: 'Impact de l\'inflation : sur {years} ans à {rate}% d\'inflation, l\'argent a perdu {delta} en pouvoir d\'achat — soit {pct} de la valeur nominale.',
    inflationFormula: '{withInflation} (valeur réelle) − {nominal} (nominal) = {deltaSigned}',
    inflationFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',
  },

  // =============================================
  // HERO TOTAL RETURN TOOLTIP
  // =============================================
  heroReturn: {
    positive: 'Croissance réelle totale : vos versements ({contributions}) ont atteint {result} en monnaie d\'aujourd\'hui — soit un gain net de {pct} après impôts et inflation.',
    negative: 'Perte réelle totale : vos versements ({contributions}) ne vaudront plus que {result} en monnaie d\'aujourd\'hui — soit {pct}. L\'inflation et les impôts ont consommé plus que ce que l\'investissement a rapporté.',
  },

  // =============================================
  // CHART
  // =============================================
  chart: {
    title: 'Graphique de croissance',
    scenarios: 'Scénarios',
    nominal: 'Nominal',
    withInflation: 'Ajusté à l\'inflation',
    afterTaxAndInflation: 'Après impôts et inflation',
    contributions: 'Versements',
    rateRange: 'Plage de taux',
    optimistic: 'Optimiste',
    pessimistic: 'Pessimiste',
    disclaimer: 'Les calculs sont approximatifs et illustratifs. Les résultats réels peuvent différer en raison des variations des taux d\'intérêt, de l\'inflation, de la législation fiscale, des frais et d\'autres facteurs de marché.',
  },

  // =============================================
  // DONUT CHART
  // =============================================
  donut: {
    title: 'Structure de l\'investissement',
    percent: 'Pourcentage',
    amount: 'Montant',
    initialDeposit: 'Dépôt initial',
    contributions: 'Versements',
    netProfit: 'Bénéfice net après impôts',
    taxesPaid: 'Impôts payés',
    disclaimer: 'Répartition approximative. Les valeurs réelles dépendent de l\'instrument choisi, des taux d\'imposition et des conditions.',
    warningNegativeProfit: '* Le bénéfice net est négatif — l\'investissement n\'a pas couvert l\'inflation en termes réels.',
  },

  // =============================================
  // PROJECTION TABLE
  // =============================================
  table: {
    yearLabel: 'Année {n}',
    monthLabel: 'Mois {n}',
    start: 'Début',
    title: 'Tableau de projection',
    monthly: 'Mensuel',
    yearly: 'Annuel',
    expand: 'Développer',
    showAll: 'Afficher les {n} lignes',
    hiddenRows: '{n} masquées',
    close: 'Fermer',
    collapse: 'Réduire',
    period: 'Période',
    contributions: 'Versements',
    nominalValue: 'Valeur nominale',
    withInflation: 'Ajusté à l\'inflation',
    nominalAfterTax: 'Nominal après impôts',
    afterTaxAndInflation: 'Après imp. & inflation',
    taxesPaid: 'Impôts payés',
    min: 'Min',
    base: 'Base',
    max: 'Max',
    swipeHint: '← glisser →',
  },

  // =============================================
  // WARNINGS
  // =============================================
  warnings: {
    inflationExceeds: 'Les rendements ne couvrent pas l\'inflation.',
    inflationExceedsDetail: 'Avec les paramètres actuels (rendement {rate}%, inflation {inflation}%), votre investissement ne croît pas en termes réels. Envisagez des instruments à rendement plus élevé ou réduisez l\'inflation attendue.',
    negativeCagr: 'Un TCAC négatif signifie que l\'inflation et les impôts consomment plus que ce que l\'investissement rapporte.',
    negativeRateRange: 'Vous modélisez un scénario de perte de marché. Le résultat pessimiste sur le graphique montrera ce qui se passerait si le taux chutait à {minRate}% par an.',
  },

  // =============================================
  // DISCLAIMER SECTION
  // =============================================
  disclaimer: {
    title: 'À propos des résultats',
    text: 'Les chiffres ci-dessus montrent le pouvoir d\'achat réel approximatif de votre investissement après paiement de l\'impôt sur le revenu. Les calculs sont donnés à titre indicatif et ne tiennent pas compte des éventuelles modifications des conditions du marché, des taux et de la législation.',
    warning: 'Ceci ne constitue pas un conseil en investissement.',
    pastResults: 'Les performances passées ne préjugent pas des résultats futurs.',
  },

  // =============================================
  // FOOTER
  // =============================================
  footer: {
    developer: 'Développé par',
    copyright: '© {year} Tous droits réservés.',
    disclaimer: 'Ceci n\'est pas un conseil financier.',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    methodology: 'Méthodologie',
  },

  // =============================================
  // TOOLTIPS (on ⓘ icons)
  // =============================================
  tooltips: {
    initialDeposit: 'Le montant que vous investissez au départ.',
    period: 'Pendant combien d\'années vous prévoyez de conserver l\'investissement.',
    annualReturn: 'Le pourcentage de rendement annuel attendu de votre investissement.',
    rateRange: 'Activez pour modéliser des scénarios optimistes et pessimistes avec des taux différents.',
    compounding: 'À quelle fréquence les intérêts gagnés sont ajoutés à votre solde et commencent eux-mêmes à produire des intérêts.',
    contributions: 'Dépôts supplémentaires réguliers en plus de l\'investissement initial.',
    inflation: 'Le taux annuel attendu auquel les prix augmentent et l\'argent perd de son pouvoir d\'achat.',
    taxRate: 'Le pourcentage du bénéfice de l\'investissement qui va aux impôts.',
    taxation: 'Quand les impôts sont payés : annuellement (chaque année sur le bénéfice de cette année-là) ou à la sortie (une fois, au moment du retrait).',

    totalContributions: 'Le montant total que vous investirez : votre dépôt initial plus toutes les recharges sur la période.',
    nominalValue: 'Votre épargne sans impôts ni inflation. C\'est le résultat brut des intérêts composés — ce que vous auriez dans un monde idéal sans coûts.',
    nominalAfterTax: 'Ce qui reste après paiement de l\'impôt sur le revenu. L\'inflation N\'EST PAS prise en compte — ce sont des nombres nominaux tels qu\'ils apparaîtraient sur votre compte.',
    withInflation: 'Combien votre argent permettra d\'acheter dans {years} ans, ajusté à l\'inflation. Les impôts NE SONT PAS pris en compte — leur impact est indiqué dans la case précédente.',

    cagr: 'TCAC (Taux de Croissance Annuel Composé) — le rendement réel annuel moyen après impôts et inflation. Il répond à : "De quel pourcentage mon pouvoir d\'achat a-t-il augmenté chaque année ?" Un TCAC négatif signifie que l\'inflation ronge votre bénéfice plus vite que votre investissement ne le génère.',
    netEffect: 'La différence entre votre pouvoir d\'achat réel à la fin et le montant total que vous avez investi. En termes simples : combien de "monnaie d\'aujourd\'hui" en plus (ou en moins) vous aurez à la fin par rapport à ce que vous avez apporté.',
    range: 'Les limites possibles de votre résultat : de pessimiste (taux inférieur) à optimiste (taux supérieur). Aide à évaluer l\'incertitude des prévisions — le résultat réel se situera très probablement quelque part dans cette fourchette.',
    minReturn: 'Le pire rendement annuel que vous attendez.',
    maxReturn: 'Le meilleur rendement annuel que vous attendez.',
  },

  // =============================================
  // LEGAL PAGES
  // =============================================
  legal: {
    backToCalculator: 'Retour à la calculatrice',
    privacyTitle: 'Politique de confidentialité',
    termsTitle: 'Conditions d\'utilisation',
    lastUpdated: 'Dernière mise à jour : {date}',
    contact: 'Contactez-nous à {email}.',
  },
};
