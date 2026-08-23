import type { MethodologyContent } from '../types';

export const nl: MethodologyContent = {
  title: 'Rekenmethode',
  updated: 'Geldt voor versie {version}',

  disclaimerTitle: 'Lees dit eerst',
  disclaimer: [
    'Deze pagina bestaat zodat u elk getal dat de rekenmachine toont zelf kunt controleren. Ze zet alle formules uiteen, de volgorde waarin ze worden toegepast, en een volledig uitgewerkt voorbeeld dat u met pen en papier kunt narekenen. Het is uitleg over hoe het hulpmiddel werkt — geen financieel, beleggings-, fiscaal of juridisch advies, en geen aanbeveling om iets te kopen, te verkopen of aan te houden.',
    'Alles wat de rekenmachine oplevert is een projectie op basis van de aannames die u invoert, geen voorspelling. Ze gaat uit van een constant rendement, een constante inflatie en een constant belastingtarief gedurende de hele looptijd. Echte markten doen dat niet. De werkelijke uitkomsten zullen afwijken, en over lange perioden kunnen ze enorm afwijken.',
    'De getallen zijn benaderingen en worden geleverd zoals ze zijn, zonder enige garantie. Elke beslissing die u neemt na gebruik van deze rekenmachine is volledig de uwe, en noch de makers noch de uitgever aanvaarden aansprakelijkheid voor verlies of schade die daaruit voortvloeit. Als geld u aan het hart gaat, reken de getallen zelf na en raadpleeg een gekwalificeerd adviseur in uw land.',
  ],

  colSymbol: 'Symbool',
  colMeaning: 'Betekenis',
  colValue: 'Waarde',
  colFrequency: 'Frequentie',
  colMonthlyAmount: 'Bedrag dat die maand wordt toegevoegd',

  inputsTitle: '1. Wat u invult',
  inputsIntro: 'Dit zijn de enige waarden die het model gebruikt. Er wordt niets van internet opgehaald en niets namens u aangenomen.',
  inputMeanings: [
    'Startinleg — het bedrag waarmee u begint',
    'Beleggingsduur in hele jaren',
    'Verwacht jaarrendement, in procenten',
    'Aantal rentetermijnen per jaar (dagelijks = 365, maandelijks = 12, per kwartaal = 4, halfjaarlijks = 2, jaarlijks = 1)',
    'Inlegbedrag, toegevoegd met de frequentie die u kiest',
    'Verwachte jaarlijkse inflatie, in procenten',
    'Belastingtarief op winst, in procenten',
  ],

  rateTitle: '2. Uw rentepercentage omrekenen naar een maandpercentage',
  rateBefore: 'Het model rekent maand voor maand, dus het jaarpercentage dat u invult moet worden uitgedrukt als een gelijkwaardig maandpercentage. Uw percentage wordt n keer per jaar bijgeschreven, elke rentetermijn levert dus r ÷ n op, en een maand is n ÷ 12 van zo\'n termijn.',
  rateAfter: 'De exponent houdt beide met elkaar in overeenstemming: dit maandpercentage twaalf keer samengesteld levert exact uw jaarpercentage op, zodat de eindejaarscijfers gelijk zijn aan een rechtstreekse jaarberekening. Bij 8 % met jaarlijkse bijschrijving is het maandpercentage 0,643403 %.',

  contribTitle: '3. Hoe inleg wordt toegevoegd',
  contribIntro: 'Omdat het model per maand werkt, wordt inleg die vaker dan maandelijks plaatsvindt omgerekend naar een gemiddeld maandbedrag; minder frequente inleg wordt alleen toegevoegd in de maanden waarin ze werkelijk valt.',
  contribFrequencies: [
    'Geen inleg',
    'Dagelijks',
    'Wekelijks',
    'Maandelijks',
    'Per kwartaal',
    'Halfjaarlijks',
    'Jaarlijks',
  ],
  contribNote: 'Het middelen van dagelijkse en wekelijkse inleg houdt het jaartotaal exact — 365 dagelijkse en 52 wekelijkse stortingen zijn wat er in een jaar daadwerkelijk wordt bijgeschreven — ten koste van hier en daar een paar dagen rente. Dat verschil is veel kleiner dan de fout in het schatten van uw eigen rendement.',

  orderTitle: '4. Wat er elke maand gebeurt',
  orderIntro: 'Elk van de 12 × Y maanden doorloopt dezelfde drie stappen, in deze volgorde:',
  orderSteps: [
    'Er wordt rente bijgeschreven op het saldo van vorige maand.',
    'Uw inleg voor deze maand wordt toegevoegd.',
    'Belasting wordt afgetrokken, als die deze maand verschuldigd is.',
  ],
  orderNote: 'De rente wordt vóór de inleg bijgeschreven, wat betekent dat de storting van deze maand deze maand nog niets oplevert. Dat is de gebruikelijke aanname bij een postnumerando-annuïteit en tevens de voorzichtige keuze: storten aan het begin van de maand zou het eindbedrag met ongeveer één maand groei verhogen.',

  taxTitle: '5. Belasting',
  taxIntro: 'Belasting wordt alleen geheven over winst, nooit over het geld dat u inlegt. U kiest zelf wanneer ze wordt ingehouden.',
  taxAnnualLabel: 'Jaarlijks',
  taxAnnualText: 'Aan het einde van elke twaalfde maand wordt de in dat jaar behaalde winst belast en wordt de belasting meteen van het saldo afgehaald. De winst is het huidige saldo, min het saldo aan het begin van het jaar, min alles wat u dat jaar hebt ingelegd. Eindigt het jaar met verlies, dan is de winst negatief en wordt er geen belasting geheven, maar dat verlies wordt niet meegenomen naar latere jaren.',
  taxExitLabel: 'Bij opname',
  taxExitText: 'Er wordt niets ingehouden tot de allerlaatste maand; dan wordt de volledige winst over de hele looptijd in één keer belast. De winst is het eindsaldo min alle inleg, inclusief de startinleg.',
  taxNote: 'Over een lange looptijd lopen beide varianten flink uiteen, want jaarlijks betaalde belasting is geld dat niet langer meegroeit. In het voorbeeld hieronder kost jaarlijkse heffing zo\'n 14 093 — de moeite waard om beide te vergelijken voordat u kiest wat bij uw situatie past.',

  inflationTitle: '6. Inflatie',
  inflationIntro: 'Inflatie wordt niet van het saldo afgetrokken. Ze wordt aan het eind toegepast, als omrekening van toekomstig geld naar wat het vandaag zou kopen:',
  inflationNote: 't is het aantal verstreken jaren, dus een waarde in maand m gebruikt t = m ÷ 12. Daarom is het «reële» cijfer altijd lager dan het nominale zodra de inflatie boven nul ligt: het geld groeit, maar elke eenheid koopt minder.',

  figuresTitle: '7. De vier kerncijfers',
  figuresIntro: 'De tegels onder het hoofdresultaat zijn vier blikken op dezelfde simulatie. Ze verschillen alleen in welke aftrekposten al zijn verwerkt.',
  figureNames: [
    'Totale inleg',
    'Nominale waarde',
    'Nominaal na belasting',
    'Gecorrigeerd voor inflatie',
  ],
  figureNotes: [
    'De startinleg plus elke storting die u doet. Zonder enige groei. Dit is het geld dat uw zak verlaat.',
    'Het saldo mét groei maar zonder enige aftrek. Het grootste en minst betekenisvolle van de vier — precies het getal dat de meeste rekenmachines los tonen.',
    'Hetzelfde saldo, met belasting ingehouden op de momenten die uw belastingkeuze bepaalt.',
    'Het saldo na belasting, omgerekend naar de koopkracht van vandaag. Dit is het cijfer bovenaan de app en het enige dat antwoord geeft op wat het geld werkelijk zal kopen.',
  ],

  irrTitle: '8. Het reële rendement',
  irrWhyNot: 'Het percentage naast «Rendement (CAGR)» is niet de eindwaarde gedeeld door de totale inleg. Die kortere weg behandelt elke maandelijkse storting alsof ze op dag één was belegd, waardoor het rendement zwaar wordt onderschat — in het voorbeeld hieronder zou het ongeveer 2,6 % tonen in plaats van 4,71 %.',
  irrBefore: 'In plaats daarvan zoekt de rekenmachine het percentage waarbij de contante waarde van alles wat u hebt ingelegd gelijk is aan de waarde waarmee u eindigt. Elke storting wordt eerst omgerekend naar geld van vandaag, dus het antwoord is een reëel rendement, na belasting en na inflatie. Met c(m) als het bedrag dat in maand m is ingelegd en V als het reële eindsaldo is het maandpercentage x de oplossing van:',
  irrAfter: 'Die vergelijking heeft geen gesloten oplossing en wordt daarom numeriek opgelost met bisectie tussen −50 % en +50 % per maand, waarbij het interval wordt versmald tot het kleiner is dan 10⁻¹². Het maandresultaat wordt vervolgens naar een jaar herrekend:',
  irrNote: 'Dit is het interne rendement, dezelfde maatstaf waarmee beleggingen met onregelmatige kasstromen worden vergeleken. Omdat hij rekening houdt met het moment van elke storting, is hij rechtstreeks vergelijkbaar met een gepubliceerd jaarrendement — met dit verschil dat dit cijfer al schoon is van belasting en inflatie.',

  rangeTitle: '9. De optimistische en pessimistische bandbreedte',
  rangeText: 'Zet u de rentebandbreedte aan, dan wordt de hele simulatie drie keer doorgerekend: één keer met uw minimumpercentage, één keer met het verwachte en één keer met het maximum. Al het overige blijft gelijk. De drie uitkomsten zijn geen kansen en dragen geen betrouwbaarheidsniveau; ze laten simpelweg zien wat hetzelfde plan oplevert onder drie aannames die u zelf hebt gekozen.',

  exampleTitle: '10. Een uitgewerkt voorbeeld',
  exampleIntro: 'Dit zijn de standaardwaarden van de app. Elk getal hieronder is met een rekenmachine na te rekenen en komt exact overeen met wat de app toont.',
  exampleGivenTitle: 'Invoer',
  exampleGivenLabels: [
    'Startinleg',
    'Looptijd',
    'Jaarrendement',
    'Bijschrijving',
    'Inleg',
    'Inflatie',
    'Belasting',
  ],
  exampleStepsTitle: 'Het eerste jaar, maand voor maand',
  exampleSteps: [
    'Maandpercentage: (1 + 0,08 ÷ 1) tot de macht 1 ÷ 12, min 1 = 0,00643403.',
    'Maand 1: 10 000 × 1,00643403 = 10 064,34, plus de inleg van 500 = 10 564,34.',
    'Maand 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Zo doorgerekend tot maand 12 bereikt het saldo 17 016,94. In dat jaar legde u 6 000 in en begon u met 10 000, dus de winst is 17 016,94 − 16 000 = 1 016,94.',
    '15 % belasting over die winst is 152,54, meteen ingehouden, waardoor 16 864,40 doorgaat naar jaar twee.',
  ],
  exampleResultTitle: 'Na alle 15 jaar',
  exampleResultLabels: [
    'Totale inleg',
    'Nominale waarde',
    'Nominaal na belasting',
    'In geld van vandaag',
    'Reëel rendement per jaar',
  ],
  exampleClosing: 'Lees die laatste regel aandachtig. U legt 100 000 in en eindigt met de koopkracht van 133 640. De nominale 200 525 oogt als een verdubbeling, maar belasting haalt er 20 663 af en inflatie nog eens 46 222. Dat gat is precies de reden dat deze rekenmachine bestaat.',

  excludedTitle: '11. Wat het model niet meeneemt',
  excludedIntro: 'Dit zijn bewuste weglatingen. Ze kennen zegt u hoever u op de uitkomst kunt vertrouwen.',
  excluded: [
    'Transactiekosten, platformkosten, beheervergoedingen van fondsen en het verschil tussen bied- en laatprijs. Over een lange horizon kan 1 % jaarlijkse kosten een vijfde van de reële eindwaarde opslokken.',
    'Progressieve schijven, vrijstellingen, verliesverrekening en fiscaal vriendelijke rekeningen. Op alle winst wordt één vlak tarief toegepast.',
    'Valutaomrekening en wisselkoersbewegingen. Alle getallen staan in de eenheid die u hebt ingevuld.',
    'Marktvolatiliteit. Het rendement wordt elke maand gelijkmatig toegekend, waardoor het risico van de volgorde van rendementen — juist tegen het eind van een lange belegging het belangrijkst — hier onzichtbaar blijft.',
    'Elke verhoging van uw inleg in de loop van de tijd, of die nu met de inflatie of met uw inkomen meegroeit.',
    'Opnames, pauzes of vroegtijdig uitstappen vóór het einde van de looptijd.',
    'Dividend apart van koersgroei behandeld; het ingevulde rendement geldt als totaalrendement.',
    'Alles wat specifiek is voor uw land, uw aanbieder of uw persoonlijke omstandigheden.',
  ],

  limitsTitle: '12. Grenzen van dit hulpmiddel',
  limits: [
    'Alles op deze pagina is een aanname en niets meer. Het model berekent getrouw de gevolgen van de getallen die u hebt ingetypt; het heeft geen mening over de vraag of die getallen realistisch zijn en geen manier om dat te weten.',
    'Alle uitkomsten zijn benaderingen. Getoonde waarden worden afgerond voor de leesbaarheid terwijl er intern met volledige precisie wordt gerekend, dus een controle op papier kan in de laatste cijfer of twee afwijken.',
    'De rekenmachine wordt geleverd zoals ze is, zonder enige garantie. Er kan geen aanspraak worden gemaakt jegens de makers of de uitgever voor welke beslissing, welk verlies of welke schade dan ook die met het gebruik ervan samenhangt.',
  ],
};
