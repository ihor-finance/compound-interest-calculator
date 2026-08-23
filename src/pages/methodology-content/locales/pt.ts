import type { MethodologyContent } from '../types';

export const pt: MethodologyContent = {
  title: 'Metodologia de cálculo',
  updated: 'Aplica-se à versão {version}',

  disclaimerTitle: 'Leia isto primeiro',
  disclaimer: [
    'Esta página existe para que possa conferir cada número mostrado pela calculadora. Apresenta todas as fórmulas, a ordem em que são aplicadas e um exemplo integralmente desenvolvido que pode refazer com papel e caneta. É informação educativa sobre o funcionamento da ferramenta — não é aconselhamento financeiro, de investimento, fiscal ou jurídico, nem uma recomendação de comprar, vender ou manter seja o que for.',
    'Tudo o que a calculadora produz é uma projeção a partir dos pressupostos que introduz, não uma previsão. Assume rendimento constante, inflação constante e taxa de imposto constante durante todo o período. Os mercados reais não se comportam assim. Os resultados efetivos serão diferentes e, em prazos longos, podem diferir enormemente.',
    'Os números são aproximados e fornecidos tal como estão, sem qualquer garantia. Qualquer decisão que tome depois de usar esta calculadora é apenas sua, e nem os autores nem o editor assumem responsabilidade por perdas ou danos daí resultantes. Se o dinheiro lhe importa, refaça as contas e fale com um consultor qualificado no seu país.',
  ],

  colSymbol: 'Símbolo',
  colMeaning: 'Significado',
  colValue: 'Valor',
  colFrequency: 'Periodicidade',
  colMonthlyAmount: 'Valor acrescentado nesse mês',

  inputsTitle: '1. O que introduz',
  inputsIntro: 'Estes são os únicos valores usados pelo modelo. Nada é obtido da internet e nada é assumido em seu nome.',
  inputMeanings: [
    'Depósito inicial — o montante com que começa',
    'Prazo do investimento em anos completos',
    'Rendimento anual esperado, em percentagem',
    'Períodos de capitalização por ano (diária = 365, mensal = 12, trimestral = 4, semestral = 2, anual = 1)',
    'Valor do reforço, acrescentado com a periodicidade que escolher',
    'Inflação anual esperada, em percentagem',
    'Taxa de imposto sobre os ganhos, em percentagem',
  ],

  rateTitle: '2. Converter a sua taxa numa taxa mensal',
  rateBefore: 'O modelo avança mês a mês, pelo que a taxa anual que introduz tem de ser expressa como taxa mensal equivalente. A sua taxa capitaliza n vezes por ano, portanto cada período de capitalização rende r ÷ n, e um mês corresponde a n ÷ 12 desse período.',
  rateAfter: 'É o expoente que mantém as duas coerentes: capitalizar esta taxa mensal doze vezes reproduz exatamente a sua taxa anual, pelo que os valores de fim de ano coincidem com um cálculo anual direto. Com 8 % capitalizados anualmente, a taxa mensal é de 0,643403 %.',

  contribTitle: '3. Como os reforços são acrescentados',
  contribIntro: 'Como o modelo funciona mensalmente, os reforços mais frequentes do que mensais são convertidos num valor mensal médio, e os menos frequentes são acrescentados apenas nos meses em que realmente ocorrem.',
  contribFrequencies: [
    'Sem reforços',
    'Diária',
    'Semanal',
    'Mensal',
    'Trimestral',
    'Semestral',
    'Anual',
  ],
  contribNote: 'Distribuir os reforços diários e semanais mantém o total anual exato — 365 pagamentos diários e 52 semanais são o que efetivamente é creditado num ano — ao custo de alguns dias de juros aqui e ali. A diferença é muito menor do que o erro de adivinhar o seu rendimento.',

  orderTitle: '4. O que acontece em cada mês',
  orderIntro: 'Cada um dos 12 × Y meses é processado nos mesmos três passos, por esta ordem:',
  orderSteps: [
    'São aplicados juros ao saldo transitado do mês anterior.',
    'É acrescentado o seu reforço deste mês.',
    'É deduzido o imposto, se for devido neste mês.',
  ],
  orderNote: 'Os juros são aplicados antes do reforço, ou seja, o pagamento deste mês não rende nada neste mês. É a convenção da renda postecipada e é a opção conservadora: pagar no início do mês elevaria o valor final em cerca de um mês de crescimento.',

  taxTitle: '5. Imposto',
  taxIntro: 'O imposto incide apenas sobre os ganhos, nunca sobre o dinheiro que investe. É você que escolhe quando é cobrado.',
  taxAnnualLabel: 'Anualmente',
  taxAnnualText: 'No fim de cada décimo segundo mês, o ganho obtido nesse ano é tributado e o imposto é retirado do saldo de imediato. O ganho é o saldo atual, menos o saldo no início do ano, menos tudo o que reforçou durante o ano. Se o ano terminar com prejuízo, o ganho é negativo e não há imposto, mas esse prejuízo não transita para compensar anos seguintes.',
  taxExitLabel: 'À saída',
  taxExitText: 'Nada é deduzido até ao último mês, quando todo o ganho do período inteiro é tributado de uma só vez. O ganho é o saldo final menos todos os reforços, incluindo o depósito inicial.',
  taxNote: 'Em prazos longos, os dois modos diferem substancialmente, porque o imposto pago todos os anos é dinheiro que deixa de capitalizar. No exemplo abaixo, a tributação anual custa cerca de 14 093 — vale a pena comparar antes de decidir qual corresponde à sua situação.',

  inflationTitle: '6. Inflação',
  inflationIntro: 'A inflação não é subtraída ao saldo. É aplicada no fim, como conversão do dinheiro futuro naquilo que compraria hoje:',
  inflationNote: 't é o número de anos decorridos, por isso um valor no mês m usa t = m ÷ 12. É por isso que o valor «real» é sempre inferior ao nominal quando a inflação é positiva: o dinheiro cresce, mas cada unidade compra menos.',

  figuresTitle: '7. Os quatro números principais',
  figuresIntro: 'Os cartões por baixo do resultado principal são quatro vistas da mesma simulação. Só diferem nas deduções já aplicadas.',
  figureNames: [
    'Total investido',
    'Valor nominal',
    'Nominal após imposto',
    'Ajustado à inflação',
  ],
  figureNotes: [
    'O depósito inicial mais todos os seus reforços. Sem qualquer crescimento. É o dinheiro que sai do seu bolso.',
    'O saldo com o crescimento aplicado mas sem qualquer dedução. É o maior e o menos significativo dos quatro — é o número que a maioria das calculadoras mostra sozinho.',
    'O mesmo saldo com o imposto retirado nos momentos definidos pelo seu modo de tributação.',
    'O saldo após imposto convertido no poder de compra de hoje. É o número em destaque no topo da aplicação e o único que responde ao que esse dinheiro irá realmente comprar.',
  ],

  irrTitle: '8. O rendimento real',
  irrWhyNot: 'A percentagem ao lado de «Rentabilidade (CAGR)» não é o valor final dividido pelo total investido. Esse atalho trata cada pagamento mensal como se tivesse sido investido no primeiro dia, o que subestima gravemente o rendimento: no exemplo abaixo indicaria cerca de 2,6 % em vez de 4,71 %.',
  irrBefore: 'Em vez disso, a calculadora procura a taxa que iguala o valor atual de tudo o que investiu ao valor com que fica no fim. Cada pagamento é primeiro convertido em dinheiro de hoje, pelo que a resposta é um rendimento real, após imposto e após inflação. Sendo c(m) o valor investido no mês m e V o saldo real final, a taxa mensal x é a solução de:',
  irrAfter: 'Essa equação não tem solução fechada, sendo por isso resolvida numericamente por bisseção entre −50 % e +50 % ao mês, estreitando o intervalo até ser inferior a 10⁻¹². O resultado mensal é depois anualizado:',
  irrNote: 'É a taxa interna de rentabilidade, a mesma medida usada para comparar investimentos com fluxos irregulares. Como tem em conta quando cada pagamento foi feito, é diretamente comparável com um rendimento anual anunciado — com a diferença de que este já está líquido de imposto e de inflação.',

  rangeTitle: '9. O intervalo otimista e pessimista',
  rangeText: 'Quando ativa o intervalo de taxas, toda a simulação é executada três vezes: uma com a taxa mínima, uma com a esperada e uma com a máxima. Tudo o resto permanece igual. Os três resultados não são probabilidades nem têm nível de confiança associado; mostram apenas o que o mesmo plano produz sob três pressupostos que você próprio escolheu.',

  exampleTitle: '10. Um exemplo desenvolvido',
  exampleIntro: 'Estes são os valores predefinidos da aplicação. Todos os números abaixo podem ser refeitos numa calculadora e correspondem exatamente ao que a aplicação mostra.',
  exampleGivenTitle: 'Dados de partida',
  exampleGivenLabels: [
    'Depósito inicial',
    'Prazo',
    'Rendimento anual',
    'Capitalização',
    'Reforço',
    'Inflação',
    'Imposto',
  ],
  exampleStepsTitle: 'O primeiro ano, mês a mês',
  exampleSteps: [
    'Taxa mensal: (1 + 0,08 ÷ 1) elevado a 1 ÷ 12, menos 1 = 0,00643403.',
    'Mês 1: 10 000 × 1,00643403 = 10 064,34, mais o reforço de 500 = 10 564,34.',
    'Mês 2: 10 564,34 × 1,00643403 = 10 632,31, mais 500 = 11 132,31.',
    'Continuando até ao mês 12, o saldo chega a 17 016,94. Durante o ano reforçou 6 000 e começou com 10 000, logo o ganho é 17 016,94 − 16 000 = 1 016,94.',
    'O imposto de 15 % sobre esse ganho é 152,54, deduzido de imediato, deixando 16 864,40 para transitar para o segundo ano.',
  ],
  exampleResultTitle: 'Ao fim dos 15 anos',
  exampleResultLabels: [
    'Total investido',
    'Valor nominal',
    'Nominal após imposto',
    'Em dinheiro de hoje',
    'Rendimento real anual',
  ],
  exampleClosing: 'Leia com atenção a última linha. Investe 100 000 e termina com o poder de compra de 133 640. Os 200 525 nominais parecem uma duplicação, mas o imposto leva 20 663 e a inflação mais 46 222. É precisamente por causa desta diferença que esta calculadora existe.',

  excludedTitle: '11. O que o modelo não inclui',
  excludedIntro: 'São omissões deliberadas. Conhecê-las diz-lhe até que ponto confiar no resultado.',
  excluded: [
    'Comissões de corretagem, custos de plataforma, encargos de gestão de fundos e diferenciais entre compra e venda. Num horizonte longo, uma comissão anual de 1 % pode consumir um quinto do valor real final.',
    'Escalões progressivos, deduções, compensação de perdas e contas com benefício fiscal. É aplicada uma única taxa fixa a todos os ganhos.',
    'Conversão cambial e variação de câmbios. Todos os números estão na unidade que introduziu.',
    'A volatilidade dos mercados. O rendimento é aplicado uniformemente todos os meses, pelo que o risco da sequência de rendimentos, o que mais pesa no final de um investimento longo, é aqui invisível.',
    'Qualquer aumento dos seus reforços ao longo do tempo, seja com a inflação seja com o rendimento.',
    'Levantamentos, pausas ou saída antecipada antes do fim do prazo.',
    'Dividendos tratados separadamente da valorização; assume-se que o rendimento introduzido é o rendimento total.',
    'Tudo o que seja específico do seu país, do seu intermediário ou das suas circunstâncias pessoais.',
  ],

  limitsTitle: '12. Limites desta ferramenta',
  limits: [
    'Tudo nesta página é um pressuposto e nada mais. O modelo calcula fielmente as consequências dos números que escreveu; não tem opinião sobre se esses números são realistas nem forma de o saber.',
    'Todos os resultados são aproximados. Os valores mostrados são arredondados para facilitar a leitura enquanto os cálculos internos mantêm a precisão total, pelo que uma verificação manual pode diferir no último algarismo ou nos dois últimos.',
    'A calculadora é fornecida tal como está, sem qualquer garantia. Não pode ser apresentada qualquer reclamação contra os autores ou o editor por decisões, perdas ou danos relacionados com a sua utilização.',
  ],
};
