import type { TranslationKeys } from '../index';

export const es: TranslationKeys = {
  // =============================================
  // APP
  // =============================================
  app: {
    title: 'Interés Compuesto',
    subtitle: 'Calculadora',
    calculator: 'Calculadora',
    scenarios: 'Escenarios',
    settings: 'Ajustes',
    theme: 'Tema',
    themeLight: 'Tema claro',
    themeDark: 'Tema oscuro',
    presets: 'Ajustes preestablecidos',
    conservative: 'Conservador',
    balanced: 'Equilibrado',
    aggressive: 'Agresivo',
  },

  // =============================================
  // INPUT FORM
  // =============================================
  form: {
    noContribution: 'Sin aportaciones',
    initialDeposit: 'Depósito inicial',
    period: 'Período de inversión',
    years: 'años',
    annualReturn: 'Rendimiento anual',
    rateRange: 'Rango de tasas',
    minReturn: 'Rend. mín.',
    maxReturn: 'Rend. máx.',
    compounding: 'Frecuencia de capitalización',
    compoundingDaily: 'Diaria',
    compoundingWeekly: 'Semanal',
    compoundingMonthly: 'Mensual',
    compoundingQuarterly: 'Trimestral',
    compoundingSemiannual: 'Semestral',
    compoundingAnnually: 'Anual',
    contributions: 'Aportaciones',
    contributionsMonthly: 'Mensuales',
    inflation: 'Inflación',
    taxRate: 'Tasa impositiva',
    taxation: 'Tributación',
    taxAnnual: 'Anual',
    taxOnExit: 'Al salir',
  },

  // =============================================
  // HERO SECTION
  // =============================================
  hero: {
    badge: 'Resultado clave',
    badgeWarning: 'Resultado clave',
    title: 'Poder adquisitivo real en {years} años',
    descriptionPositive: 'De sus {contributions} en aportaciones, tendrá el equivalente a {result} en dinero de hoy — esto es {delta} más de lo que invirtió, incluso después de impuestos e inflación.',
    descriptionNegative: 'De sus {contributions} en aportaciones, tendrá el equivalente a solo {result} en dinero de hoy — esto es {delta} menos de lo que invirtió. La inflación y los impuestos consumieron más de lo que ganó la inversión.',
    descriptionNeutral: 'De sus {contributions} en aportaciones, tendrá el equivalente a aproximadamente {result} en dinero de hoy — la inversión apenas cubre las pérdidas por impuestos e inflación.',
    totalReturn: 'retorno total',
  },

  // =============================================
  // HERO METRICS (sidebar)
  // =============================================
  metrics: {
    cagrLabel: 'Rentabilidad (CAGR)',
    netEffectLabel: 'efecto neto',
    rangeLabel: 'Rango',
  },

  // =============================================
  // SATELLITE TILES
  // =============================================
  satellites: {
    totalContributions: 'Aportaciones totales',
    nominalValue: 'Valor nominal',
    nominalAfterTax: 'Nominal después de impuestos',
    withInflation: 'Ajustado por inflación',

    subtitleContributions: 'Total invertido durante el período — depósito inicial más todas las aportaciones.',
    subtitleNominal: 'Lo que ganó la inversión antes de impuestos, en términos nominales.',
    subtitleAfterTax: 'Beneficio neto (beneficio nominal menos impuestos).',
    subtitleInflation: 'Valor futuro en dinero de hoy. Muestra cuánto comprará su inversión ajustada a la inflación.',
  },

  // =============================================
  // DELTA TOOLTIPS
  // =============================================
  deltas: {
    nominalLine1: 'Beneficio de inversión: su dinero ganó {delta} por encima de lo que invirtió — eso es el {pct} de las aportaciones totales.',
    nominalFormula: '{nominal} (nominal) − {contributions} (aportaciones) = {deltaSigned}',
    nominalFormulaPercent: '{delta} ÷ {contributions} × 100 = {pct}',

    taxLine1: 'Impacto fiscal: los impuestos redujeron el total en {delta} — eso es el {pct} del valor nominal.',
    taxFormula: '{afterTax} (después de impuestos) − {nominal} (antes de impuestos) = {deltaSigned}',
    taxFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',

    inflationLine1: 'Impacto de la inflación: en {years} años al {rate}% de inflación, el dinero perdió {delta} en poder adquisitivo — eso es el {pct} del valor nominal.',
    inflationFormula: '{withInflation} (valor real) − {nominal} (nominal) = {deltaSigned}',
    inflationFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',
  },

  // =============================================
  // HERO TOTAL RETURN TOOLTIP
  // =============================================
  heroReturn: {
    positive: 'Crecimiento real total: sus aportaciones ({contributions}) crecieron a {result} en dinero de hoy — eso es una ganancia neta del {pct} después de impuestos e inflación.',
    negative: 'Pérdida real total: sus aportaciones ({contributions}) solo valdrán {result} en dinero de hoy — eso es el {pct}. La inflación y los impuestos consumieron más de lo que ganó la inversión.',
  },

  // =============================================
  // CHART
  // =============================================
  chart: {
    title: 'Gráfico de crecimiento',
    scenarios: 'Escenarios',
    nominal: 'Nominal',
    withInflation: 'Ajustado por inflación',
    afterTaxAndInflation: 'Después de impuestos e inflación',
    contributions: 'Aportaciones',
    rateRange: 'Rango de tasas',
    optimistic: 'Optimista',
    pessimistic: 'Pesimista',
    disclaimer: 'Los cálculos son aproximados e ilustrativos. Los resultados reales pueden diferir debido a cambios en las tasas de interés, inflación, legislación fiscal, comisiones y otros factores del mercado.',
  },

  // =============================================
  // DONUT CHART
  // =============================================
  donut: {
    title: 'Estructura de inversión',
    percent: 'Porcentaje',
    amount: 'Cantidad',
    initialDeposit: 'Depósito inicial',
    contributions: 'Aportaciones',
    netProfit: 'Beneficio neto',
    taxesPaid: 'Impuestos pagados',
    disclaimer: 'Desglose aproximado. Los valores reales dependen del instrumento elegido, tasas impositivas y condiciones.',
    warningNegativeProfit: '* El beneficio neto es negativo — la inversión no cubrió la inflación en términos reales.',
  },

  // =============================================
  // PROJECTION TABLE
  // =============================================
  table: {
    yearLabel: 'Año {n}',
    monthLabel: 'Mes {n}',
    start: 'Inicio',
    title: 'Tabla de proyección',
    monthly: 'Mensual',
    yearly: 'Anual',
    expand: 'Expandir',
    showAll: 'Mostrar las {n} filas',
    hiddenRows: '{n} ocultas',
    close: 'Cerrar',
    collapse: 'Contraer',
    period: 'Período',
    contributions: 'Aportaciones',
    nominalValue: 'Valor nominal',
    withInflation: 'Ajustado por inflación',
    nominalAfterTax: 'Nominal después de imp.',
    afterTaxAndInflation: 'Después imp. e inflación',
    taxesPaid: 'Impuestos pagados',
    min: 'Mín',
    base: 'Base',
    max: 'Máx',
    swipeHint: '← deslizar →',
  },

  // =============================================
  // WARNINGS
  // =============================================
  warnings: {
    inflationExceeds: 'Los rendimientos no cubren la inflación.',
    inflationExceedsDetail: 'Con los parámetros actuales (rendimiento {rate}%, inflación {inflation}%) su inversión no crece en términos reales. Considere instrumentos con mayores rendimientos o reduzca la inflación esperada.',
    negativeCagr: 'Un CAGR negativo significa que la inflación + impuestos consumen más de lo que gana la inversión.',
    negativeRateRange: 'Está modelando un escenario de pérdida de mercado. El resultado pesimista en el gráfico mostrará qué sucedería si la tasa cayera al {minRate}% anual.',
  },

  // =============================================
  // DISCLAIMER SECTION
  // =============================================
  disclaimer: {
    title: 'Sobre los resultados',
    text: 'Las cifras anteriores muestran el poder adquisitivo real aproximado de su inversión después de pagar el impuesto sobre la renta. Los cálculos son informativos y no tienen en cuenta posibles cambios en las condiciones del mercado, tasas y legislación.',
    warning: 'Esto no es un consejo de inversión.',
    pastResults: 'Los resultados pasados no garantizan los futuros.',
  },

  // =============================================
  // FOOTER
  // =============================================
  footer: {
    developer: 'Desarrollado por',
    copyright: '© {year} Todos los derechos reservados.',
    disclaimer: 'No es asesoramiento financiero.',
    privacy: 'Privacidad',
    terms: 'Términos',
    methodology: 'Metodología',
  },

  // =============================================
  // TOOLTIPS (on ⓘ icons)
  // =============================================
  tooltips: {
    initialDeposit: 'La cantidad que invierte al principio.',
    period: 'Cuántos años planea mantener la inversión.',
    annualReturn: 'El porcentaje de rendimiento anual esperado de su inversión.',
    rateRange: 'Habilitar para modelar escenarios optimistas y pesimistas con diferentes tasas.',
    compounding: 'Con qué frecuencia los intereses ganados se suman a su saldo y comienzan a ganar intereses.',
    contributions: 'Depósitos adicionales regulares además de la inversión inicial.',
    inflation: 'La tasa anual esperada a la que aumentan los precios y el dinero pierde poder adquisitivo.',
    taxRate: 'El porcentaje del beneficio de la inversión que se destina a impuestos.',
    taxation: 'Cuándo se pagan los impuestos: anualmente (cada año sobre el beneficio de ese año) o al salir (una vez, cuando se retira).',

    totalContributions: 'La cantidad total que invertirá: su depósito inicial más todas las recargas durante el período.',
    nominalValue: 'Sus ahorros sin impuestos ni inflación. Este es el resultado en bruto del interés compuesto: lo que tendría en un mundo ideal sin costos.',
    nominalAfterTax: 'Lo que queda después de pagar el impuesto sobre la renta. La inflación NO se tiene en cuenta: estos son números nominales tal como aparecerían en su cuenta.',
    withInflation: 'Cuánto podrá comprar con su dinero en {years} años, ajustado por la inflación. Los impuestos NO se tienen en cuenta: su impacto se muestra en el panel anterior.',

    cagr: 'CAGR (Tasa de Crecimiento Anual Compuesta): el rendimiento real anual promedio después de impuestos e inflación. Responde: "¿En qué porcentaje creció mi poder adquisitivo cada año?" Un CAGR negativo significa que la inflación devora sus ganancias más rápido de lo que su inversión las genera.',
    netEffect: 'La diferencia entre su poder adquisitivo real al final y la cantidad total que invirtió. En términos sencillos: cuánto "dinero de hoy" de más (o de menos) tendrá al final en comparación con lo que aportó.',
    range: 'Los posibles límites de su resultado: desde pesimista (tasa más baja) hasta optimista (tasa más alta). Ayuda a evaluar la incertidumbre de la previsión: el resultado real probablemente caerá en algún lugar dentro de este rango.',
    minReturn: 'El peor rendimiento anual que espera.',
    maxReturn: 'El mejor rendimiento anual que espera.',
  },

  // =============================================
  // LEGAL PAGES
  // =============================================
  legal: {
    backToCalculator: 'Volver a la calculadora',
    privacyTitle: 'Política de Privacidad',
    termsTitle: 'Términos de Uso',
    lastUpdated: 'Última actualización: {date}',
    contact: 'Contáctenos en {email}.',
  },
};
