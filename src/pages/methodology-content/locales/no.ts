import type { MethodologyContent } from '../types';

export const no: MethodologyContent = {
  title: 'Beregningsmetodikk',
  updated: 'Gjelder versjon {version}',

  disclaimerTitle: 'Les dette først',
  disclaimer: [
    'Denne siden finnes for at du selv skal kunne kontrollere hvert eneste tall kalkulatoren viser. Den setter opp alle formlene, rekkefølgen de brukes i, og et fullstendig gjennomregnet eksempel som du kan gjenta med papir og blyant. Dette er opplysende stoff om hvordan verktøyet virker — ikke finansiell, investerings-, skatte- eller juridisk rådgivning, og ingen anbefaling om å kjøpe, selge eller beholde noe.',
    'Alt kalkulatoren gir, er en framskrivning av forutsetningene du taster inn, ikke en prognose. Den forutsetter konstant avkastning, konstant inflasjon og konstant skattesats gjennom hele perioden. Virkelige markeder oppfører seg ikke slik. De faktiske resultatene vil avvike, og over lange perioder kan de avvike enormt.',
    'Tallene er omtrentlige og leveres som de er, uten noen form for garanti. Enhver beslutning du tar etter å ha brukt denne kalkulatoren, er utelukkende din egen, og verken forfatterne eller utgiveren tar ansvar for tap eller skade som følger av den. Betyr penger noe for deg, så regn etter selv og snakk med en kvalifisert rådgiver i landet ditt.',
  ],

  colSymbol: 'Symbol',
  colMeaning: 'Betydning',
  colValue: 'Verdi',
  colFrequency: 'Hyppighet',
  colMonthlyAmount: 'Beløp lagt til den måneden',

  inputsTitle: '1. Det du taster inn',
  inputsIntro: 'Dette er de eneste verdiene modellen bruker. Ingenting hentes fra internett, og ingenting antas på dine vegne.',
  inputMeanings: [
    'Startinnskudd — beløpet du begynner med',
    'Investeringstid i hele år',
    'Forventet årlig avkastning, i prosent',
    'Antall rentetilskrivinger per år (daglig = 365, månedlig = 12, kvartalsvis = 4, halvårlig = 2, årlig = 1)',
    'Innskuddsbeløp, lagt til med den hyppigheten du velger',
    'Forventet årlig inflasjon, i prosent',
    'Skattesats på gevinst, i prosent',
  ],

  rateTitle: '2. Regne om renten din til månedsrente',
  rateBefore: 'Modellen går fram én måned av gangen, så årsrenten du taster inn må uttrykkes som en tilsvarende månedsrente. Renten din tilskrives n ganger i året, hver renteperiode gir altså r ÷ n, og en måned utgjør n ÷ 12 av en slik periode.',
  rateAfter: 'Det er eksponenten som holder de to i samsvar: tilskriver du denne månedsrenten tolv ganger, får du nøyaktig årsrenten din tilbake, slik at tallene ved årsslutt blir de samme som ved en direkte årsberegning. Med 8 % og årlig tilskriving blir månedsrenten 0,643403 %.',

  contribTitle: '3. Slik legges innskuddene til',
  contribIntro: 'Fordi modellen arbeider månedsvis, regnes innskudd som skjer oftere enn månedlig om til et gjennomsnittlig månedsbeløp, mens sjeldnere innskudd bare legges til i de månedene de faktisk faller.',
  contribFrequencies: [
    'Ingen innskudd',
    'Daglig',
    'Ukentlig',
    'Månedlig',
    'Kvartalsvis',
    'Halvårlig',
    'Årlig',
  ],
  contribNote: 'Å beregne gjennomsnitt av daglige og ukentlige innskudd holder årssummen nøyaktig — 365 daglige og 52 ukentlige betalinger er nettopp det som faktisk godskrives i løpet av et år — mot at noen få dagers rente forskyver seg her og der. Den forskjellen er langt mindre enn feilen i å gjette sin egen avkastning.',

  orderTitle: '4. Hva som skjer hver måned',
  orderIntro: 'Hver av de 12 × Y månedene går gjennom de samme tre trinnene, i denne rekkefølgen:',
  orderSteps: [
    'Det tilskrives rente på saldoen overført fra forrige måned.',
    'Innskuddet ditt for denne måneden legges til.',
    'Skatt trekkes fra, dersom noe forfaller denne måneden.',
  ],
  orderNote: 'Renten tilskrives før innskuddet, noe som betyr at denne månedens innbetaling ikke gir noe i selve måneden. Det er konvensjonen for etterskuddsvis annuitet og samtidig det forsiktige valget: innbetaling ved månedens begynnelse ville hevet sluttallet med omtrent én måneds vekst.',

  taxTitle: '5. Skatt',
  taxIntro: 'Skatten treffer bare gevinsten, aldri pengene du setter inn. Når den kreves inn, velger du selv.',
  taxAnnualLabel: 'Årlig',
  taxAnnualText: 'Ved slutten av hver tolvte måned beskattes gevinsten som er oppnådd i løpet av året, og skatten trekkes umiddelbart fra saldoen. Gevinsten er nåværende saldo, minus saldoen ved årets begynnelse, minus alt du har skutt inn i løpet av året. Ender året med tap, er gevinsten negativ og det kreves ingen skatt, men det tapet føres ikke videre til fradrag i senere år.',
  taxExitLabel: 'Ved uttak',
  taxExitText: 'Ingenting trekkes fra før aller siste måned, da hele periodens samlede gevinst beskattes på én gang. Gevinsten er sluttsaldoen minus alle innskudd, medregnet startinnskuddet.',
  taxNote: 'Over lang tid skiller de to variantene seg merkbart, fordi skatt betalt hvert år er penger som slutter å forrente seg. I eksempelet under koster årlig beskatning omkring 14 093 — det er verdt å sammenligne begge før du bestemmer hvilken som passer din situasjon.',

  inflationTitle: '6. Inflasjon',
  inflationIntro: 'Inflasjonen trekkes ikke fra saldoen. Den brukes til slutt, som en omregning av framtidige penger til det de ville kjøpt i dag:',
  inflationNote: 't er antall år som har gått, så en verdi i måned m bruker t = m ÷ 12. Derfor er det «reelle» tallet alltid lavere enn det nominelle så snart inflasjonen er over null: pengene vokser, men hver enhet kjøper mindre.',

  figuresTitle: '7. De fire hovedtallene',
  figuresIntro: 'Rutene under hovedresultatet er fire blikk på den samme simuleringen. De skiller seg bare i hvilke fradrag som allerede er gjort.',
  figureNames: [
    'Totalt innskutt',
    'Nominell verdi',
    'Nominell etter skatt',
    'Inflasjonsjustert',
  ],
  figureNotes: [
    'Startinnskuddet pluss hvert eneste innskudd du gjør. Ingen vekst i det hele tatt. Dette er pengene som forlater lommeboken din.',
    'Saldoen med vekst, men uten noe fradrag. Det største og minst meningsfulle av de fire — og nettopp det tallet de fleste kalkulatorer viser alene.',
    'Samme saldo, med skatt trukket fra på de tidspunktene skattevalget ditt bestemmer.',
    'Saldoen etter skatt regnet om til dagens kjøpekraft. Dette er tallet som løftes fram øverst i appen, og det eneste som svarer på hva pengene faktisk vil kjøpe.',
  ],

  irrTitle: '8. Den reelle avkastningen',
  irrWhyNot: 'Prosenten ved siden av «Avkastning (CAGR)» er ikke sluttverdien delt på totale innskudd. Den snarveien behandler hvert månedlige innskudd som om det var investert dag én, og undervurderer dermed avkastningen kraftig — i eksempelet under ville den vist rundt 2,6 % i stedet for 4,71 %.',
  irrBefore: 'I stedet løser kalkulatoren for den rentesatsen der nåverdien av alt du har skutt inn er lik verdien du sitter igjen med. Hvert innskudd regnes først om til dagens penger, så svaret er en reell avkastning, etter skatt og etter inflasjon. Med c(m) som beløpet innbetalt i måned m og V som den reelle sluttsaldoen, er månedsrenten x løsningen av:',
  irrAfter: 'Denne ligningen har ingen lukket løsning, så den løses numerisk ved halvering mellom −50 % og +50 % per måned, der intervallet snevres inn til det er mindre enn 10⁻¹². Månedsresultatet regnes deretter om til årsbasis:',
  irrNote: 'Dette er internrenten, samme mål som brukes til å sammenligne investeringer med ujevne kontantstrømmer. Fordi den tar hensyn til når hvert innskudd ble gjort, kan den sammenlignes direkte med en oppgitt årlig avkastning — med den forskjellen at dette tallet allerede er renset for skatt og inflasjon.',

  rangeTitle: '9. Det optimistiske og pessimistiske intervallet',
  rangeText: 'Når du slår på renteintervallet, kjøres hele simuleringen tre ganger: én gang med din laveste rente, én med den forventede og én med den høyeste. Alt annet er identisk. De tre resultatene er ikke sannsynligheter og bærer ingen konfidensgrad; de viser rett og slett hva den samme planen gir under tre ulike forutsetninger du selv har valgt.',

  exampleTitle: '10. Et gjennomregnet eksempel',
  exampleIntro: 'Dette er appens standardverdier. Hvert tall under kan regnes etter på en kalkulator og stemmer nøyaktig med det appen viser.',
  exampleGivenTitle: 'Inndata',
  exampleGivenLabels: [
    'Startinnskudd',
    'Periode',
    'Årlig avkastning',
    'Rentetilskriving',
    'Innskudd',
    'Inflasjon',
    'Skatt',
  ],
  exampleStepsTitle: 'Første år, måned for måned',
  exampleSteps: [
    'Månedsrente: (1 + 0,08 ÷ 1) opphøyd i 1 ÷ 12, minus 1 = 0,00643403.',
    'Måned 1: 10 000 × 1,00643403 = 10 064,34, pluss innskuddet på 500 = 10 564,34.',
    'Måned 2: 10 564,34 × 1,00643403 = 10 632,31, pluss 500 = 11 132,31.',
    'Fortsetter man til måned 12, når saldoen 17 016,94. I løpet av året skjøt du inn 6 000 og begynte med 10 000, så gevinsten er 17 016,94 − 16 000 = 1 016,94.',
    'Skatt på 15 % av den gevinsten blir 152,54, trukket fra med én gang, og 16 864,40 tas med inn i år to.',
  ],
  exampleResultTitle: 'Etter alle de 15 årene',
  exampleResultLabels: [
    'Totalt innskutt',
    'Nominell verdi',
    'Nominell etter skatt',
    'I dagens penger',
    'Reell avkastning per år',
  ],
  exampleClosing: 'Les den siste linjen nøye. Du skyter inn 100 000 og ender med kjøpekraften til 133 640. De nominelle 200 525 ser ut som en dobling, men skatten tar 20 663 av dem og inflasjonen ytterligere 46 222. Nettopp det gapet er hele grunnen til at denne kalkulatoren finnes.',

  excludedTitle: '11. Hva modellen ikke tar med',
  excludedIntro: 'Dette er bevisste utelatelser. Kjenner du dem, vet du hvor langt du kan stole på resultatet.',
  excluded: [
    'Kurtasje, plattformgebyrer, forvaltningskostnader i fond og forskjellen mellom kjøps- og salgskurs. Over en lang horisont kan 1 % i årlig gebyr spise opp en femtedel av den reelle sluttverdien.',
    'Progressive skattetrinn, bunnfradrag, fradrag for tap og skattegunstige kontoer. Én flat sats brukes på all gevinst.',
    'Valutaveksling og kursbevegelser. Alle tall er i den enheten du tastet inn.',
    'Markedets svingninger. Avkastningen tilskrives jevnt hver måned, så risikoen knyttet til rekkefølgen på avkastningene — den som betyr mest mot slutten av en lang investering — er usynlig her.',
    'Enhver økning av innskuddene dine over tid, enten med inflasjonen eller med inntekten.',
    'Uttak, pauser eller å gå ut før periodens slutt.',
    'Utbytte behandlet atskilt fra kursvekst; avkastningen du taster inn regnes som totalavkastning.',
    'Alt som er særegent for landet ditt, tilbyderen din eller dine personlige forhold.',
  ],

  limitsTitle: '12. Verktøyets grenser',
  limits: [
    'Alt på denne siden er en forutsetning og ikke noe mer. Modellen regner trofast ut følgene av tallene du skrev inn; den har ingen mening om hvorvidt de tallene er realistiske, og ingen måte å vite det på.',
    'Alle resultater er omtrentlige. Viste verdier rundes av for lesbarhetens skyld mens den underliggende regningen beholder full presisjon, så en kontroll for hånd kan avvike på siste siffer eller to.',
    'Kalkulatoren leveres som den er, uten noen garanti. Det kan ikke rettes krav mot forfatterne eller utgiveren for noen beslutning, noe tap eller noen skade knyttet til bruken av den.',
  ],
};
