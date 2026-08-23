import type { MethodologyContent } from '../types';

export const es: MethodologyContent = {
  title: 'Metodología de cálculo',
  updated: 'Aplicable a la versión {version}',

  disclaimerTitle: 'Léalo primero',
  disclaimer: [
    'Esta página existe para que pueda comprobar cada cifra que muestra la calculadora. Expone todas las fórmulas, el orden en que se aplican y un ejemplo completamente desarrollado que puede reproducir con papel y lápiz. Es información educativa sobre cómo funciona la herramienta: no es asesoramiento financiero, de inversión, fiscal ni legal, ni una recomendación de comprar, vender o mantener nada.',
    'Todo lo que produce la calculadora es una proyección basada en los supuestos que usted introduce, no un pronóstico. Asume una rentabilidad constante, una inflación constante y un tipo impositivo constante durante todo el periodo. Los mercados reales no se comportan así. Los resultados reales diferirán y, en plazos largos, pueden diferir enormemente.',
    'Las cifras son aproximadas y se ofrecen tal cual, sin garantía de ningún tipo. Cualquier decisión que tome tras usar esta calculadora es solo suya, y ni los autores ni el editor asumen responsabilidad alguna por pérdidas o daños derivados de ella. Si el dinero le importa, compruebe las cifras usted mismo y consulte a un asesor cualificado en su país.',
  ],

  colSymbol: 'Símbolo',
  colMeaning: 'Significado',
  colValue: 'Valor',
  colFrequency: 'Frecuencia',
  colMonthlyAmount: 'Importe añadido ese mes',

  inputsTitle: '1. Lo que usted introduce',
  inputsIntro: 'Estos son los únicos valores que utiliza el modelo. No se descarga nada de internet ni se supone nada en su nombre.',
  inputMeanings: [
    'Depósito inicial: la cantidad con la que empieza',
    'Periodo de inversión en años completos',
    'Rentabilidad anual esperada, en porcentaje',
    'Periodos de capitalización por año (diaria = 365, mensual = 12, trimestral = 4, semestral = 2, anual = 1)',
    'Importe de la aportación, añadido con la frecuencia que elija',
    'Inflación anual esperada, en porcentaje',
    'Tipo impositivo sobre las ganancias, en porcentaje',
  ],

  rateTitle: '2. Convertir su tipo en un tipo mensual',
  rateBefore: 'El modelo avanza mes a mes, por lo que el tipo anual que introduce debe expresarse como un tipo mensual equivalente. Su tipo capitaliza n veces al año, así que cada periodo de capitalización rinde r ÷ n, y un mes equivale a n ÷ 12 de ese periodo.',
  rateAfter: 'El exponente es lo que mantiene ambos coherentes: capitalizar este tipo mensual doce veces reproduce exactamente su tipo anual, de modo que las cifras de fin de año coinciden con un cálculo anual directo. Con un 8 % capitalizado anualmente, el tipo mensual es del 0,643403 %.',

  contribTitle: '3. Cómo se añaden las aportaciones',
  contribIntro: 'Como el modelo funciona mensualmente, las aportaciones más frecuentes que la mensual se convierten en un importe mensual medio, y las menos frecuentes se añaden solo en los meses en que realmente caen.',
  contribFrequencies: [
    'Sin aportaciones',
    'Diaria',
    'Semanal',
    'Mensual',
    'Trimestral',
    'Semestral',
    'Anual',
  ],
  contribNote: 'Promediar las aportaciones diarias y semanales mantiene exacto el total anual —365 pagos diarios y 52 semanales son los que realmente se abonan en un año— a costa de unos pocos días de intereses aquí y allá. La diferencia es mucho menor que el error de estimar su rentabilidad.',

  orderTitle: '4. Qué ocurre cada mes',
  orderIntro: 'Cada uno de los 12 × Y meses se procesa en los mismos tres pasos, en este orden:',
  orderSteps: [
    'Se aplican intereses al saldo arrastrado del mes anterior.',
    'Se añade su aportación de este mes.',
    'Se descuenta el impuesto, si corresponde pagarlo este mes.',
  ],
  orderNote: 'Los intereses se aplican antes que la aportación, lo que significa que el pago de este mes no rinde nada este mes. Es la convención de anualidad ordinaria y es la opción conservadora: pagar a principio de mes elevaría la cifra final en aproximadamente un mes de crecimiento.',

  taxTitle: '5. Impuestos',
  taxIntro: 'El impuesto grava solo las ganancias, nunca el dinero que usted aporta. Usted elige cuándo se cobra.',
  taxAnnualLabel: 'Anualmente',
  taxAnnualText: 'Al final de cada duodécimo mes, la ganancia obtenida durante ese año tributa y el impuesto se retira del saldo de inmediato. La ganancia es el saldo actual, menos el saldo al inicio del año, menos todo lo aportado durante el año. Si el año termina en pérdida, la ganancia es negativa y no se cobra impuesto, pero esa pérdida no se traslada para compensar años posteriores.',
  taxExitLabel: 'A la salida',
  taxExitText: 'No se descuenta nada hasta el último mes, cuando toda la ganancia del periodo completo tributa de una sola vez. La ganancia es el saldo final menos todas las aportaciones, incluido el depósito inicial.',
  taxNote: 'En plazos largos ambos modos difieren notablemente, porque el impuesto pagado cada año es dinero que deja de capitalizar. En el ejemplo de más abajo, la tributación anual cuesta unos 14 093; conviene comparar ambas opciones antes de decidir cuál se ajusta a su situación.',

  inflationTitle: '6. Inflación',
  inflationIntro: 'La inflación no se resta del saldo. Se aplica al final, como conversión del dinero futuro en lo que compraría hoy:',
  inflationNote: 't es el número de años transcurridos, así que un valor en el mes m usa t = m ÷ 12. Por eso la cifra «real» siempre es inferior a la nominal cuando la inflación es positiva: el dinero crece, pero cada unidad compra menos.',

  figuresTitle: '7. Las cuatro cifras principales',
  figuresIntro: 'Las tarjetas bajo el resultado principal son cuatro vistas distintas de la misma simulación. Solo se diferencian en qué deducciones se han aplicado.',
  figureNames: [
    'Aportaciones totales',
    'Valor nominal',
    'Nominal después de impuestos',
    'Ajustado por inflación',
  ],
  figureNotes: [
    'El depósito inicial más todas sus aportaciones. Sin crecimiento de ningún tipo. Es el dinero que sale de su bolsillo.',
    'El saldo con el crecimiento aplicado pero sin ninguna deducción. Es la mayor y la menos significativa de las cuatro: es la cifra que la mayoría de calculadoras muestra por sí sola.',
    'El mismo saldo con el impuesto retirado en los momentos que fija su modo de tributación.',
    'El saldo después de impuestos convertido al poder adquisitivo de hoy. Es la cifra destacada en la parte superior de la aplicación y la única que responde a qué comprará realmente ese dinero.',
  ],

  irrTitle: '8. La rentabilidad real',
  irrWhyNot: 'El porcentaje que aparece junto a «Rentabilidad (CAGR)» no es el valor final dividido entre las aportaciones totales. Ese atajo trata cada pago mensual como si se hubiera invertido el primer día, lo que subestima gravemente la rentabilidad: en el ejemplo de abajo indicaría cerca del 2,6 % en lugar del 4,71 %.',
  irrBefore: 'En su lugar, la calculadora resuelve el tipo que iguala el valor actual de todo lo aportado con el valor que usted acaba obteniendo. Cada pago se convierte primero a dinero de hoy, de modo que la respuesta es una rentabilidad real, después de impuestos y después de inflación. Siendo c(m) el importe aportado en el mes m y V el saldo real final, el tipo mensual x es la solución de:',
  irrAfter: 'Esa ecuación no tiene solución cerrada, por lo que se resuelve numéricamente por bisección entre −50 % y +50 % mensual, estrechando el intervalo hasta que sea menor que 10⁻¹². El resultado mensual se anualiza después:',
  irrNote: 'Es la tasa interna de retorno, la misma medida que se usa para comparar inversiones con flujos de caja irregulares. Como tiene en cuenta cuándo se hizo cada pago, es directamente comparable con una rentabilidad anual publicada, con la diferencia de que esta es neta de impuestos e inflación.',

  rangeTitle: '9. El rango optimista y pesimista',
  rangeText: 'Al activar el rango de tipos, la simulación completa se ejecuta tres veces: una con su tipo mínimo, otra con el esperado y otra con el máximo. Todo lo demás permanece idéntico. Los tres resultados no son probabilidades ni llevan nivel de confianza asociado; simplemente muestran qué produce el mismo plan bajo tres supuestos distintos que usted mismo eligió.',

  exampleTitle: '10. Un ejemplo desarrollado',
  exampleIntro: 'Estos son los valores por defecto de la aplicación. Todas las cifras siguientes pueden reproducirse con una calculadora y coinciden exactamente con lo que muestra la aplicación.',
  exampleGivenTitle: 'Datos de partida',
  exampleGivenLabels: [
    'Depósito inicial',
    'Periodo',
    'Rentabilidad anual',
    'Capitalización',
    'Aportación',
    'Inflación',
    'Impuesto',
  ],
  exampleStepsTitle: 'El primer año, mes a mes',
  exampleSteps: [
    'Tipo mensual: (1 + 0,08 ÷ 1) elevado a 1 ÷ 12, menos 1 = 0,00643403.',
    'Mes 1: 10 000 × 1,00643403 = 10 064,34, más la aportación de 500 = 10 564,34.',
    'Mes 2: 10 564,34 × 1,00643403 = 10 632,31, más 500 = 11 132,31.',
    'Continuando hasta el mes 12, el saldo alcanza 17 016,94. Durante el año aportó 6 000 y empezó con 10 000, así que la ganancia es 17 016,94 − 16 000 = 1 016,94.',
    'El impuesto del 15 % sobre esa ganancia es 152,54, descontado de inmediato, dejando 16 864,40 para arrastrar al segundo año.',
  ],
  exampleResultTitle: 'Después de los 15 años',
  exampleResultLabels: [
    'Aportaciones totales',
    'Valor nominal',
    'Nominal después de impuestos',
    'En dinero de hoy',
    'Rentabilidad real anual',
  ],
  exampleClosing: 'Lea con atención esa última línea. Aporta 100 000 y termina con el poder adquisitivo de 133 640. Los 200 525 nominales parecen una duplicación, pero los impuestos se llevan 20 663 y la inflación otros 46 222. Esa diferencia es la razón de ser de esta calculadora.',

  excludedTitle: '11. Lo que el modelo no incluye',
  excludedIntro: 'Son omisiones deliberadas. Conocerlas le indica hasta qué punto fiarse del resultado.',
  excluded: [
    'Comisiones de intermediación, tarifas de plataforma, gastos de gestión de fondos y horquillas de compraventa. En un horizonte largo, una comisión anual del 1 % puede consumir la quinta parte del valor real final.',
    'Tramos impositivos progresivos, mínimos exentos, compensación de pérdidas y cuentas con ventajas fiscales. Se aplica un tipo único y plano a todas las ganancias.',
    'Conversión de divisas y variación del tipo de cambio. Todas las cifras están en la unidad que usted introdujo.',
    'La volatilidad del mercado. La rentabilidad se aplica de forma uniforme cada mes, así que el riesgo de secuencia de rentabilidades, el que más importa al final de una inversión larga, aquí es invisible.',
    'Cualquier aumento de sus aportaciones con el tiempo, ya sea con la inflación o con los ingresos.',
    'Retiradas, pausas o salida anticipada antes del final del periodo.',
    'Dividendos tratados aparte de la revalorización; se supone que la rentabilidad introducida es la rentabilidad total.',
    'Todo lo específico de su país, su proveedor o sus circunstancias personales.',
  ],

  limitsTitle: '12. Límites de esta herramienta',
  limits: [
    'Todo lo que hay en esta página es un supuesto y nada más. El modelo calcula fielmente las consecuencias de las cifras que usted escribió; no opina sobre si esas cifras son realistas ni tiene modo de saberlo.',
    'Todos los resultados son aproximados. Los valores mostrados se redondean para facilitar la lectura, mientras que la aritmética interna conserva la precisión completa, por lo que una comprobación manual puede diferir en el último dígito o dos.',
    'La calculadora se ofrece tal cual, sin garantía alguna. No cabe reclamación contra los autores ni contra el editor por ninguna decisión, pérdida o daño relacionados con su uso.',
  ],
};
