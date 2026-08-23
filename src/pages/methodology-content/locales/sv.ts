import type { MethodologyContent } from '../types';

export const sv: MethodologyContent = {
  title: 'Beräkningsmetodik',
  updated: 'Gäller version {version}',

  disclaimerTitle: 'Läs det här först',
  disclaimer: [
    'Den här sidan finns för att du ska kunna kontrollera varje siffra som räknaren visar. Här redovisas alla formler, i vilken ordning de tillämpas och ett fullständigt genomräknat exempel som du kan göra om med papper och penna. Det är förklarande information om hur verktyget fungerar — inte finansiell, investerings-, skatte- eller juridisk rådgivning, och ingen rekommendation att köpa, sälja eller behålla något.',
    'Allt räknaren ger är en framskrivning av de antaganden du matar in, inte en prognos. Den utgår från konstant avkastning, konstant inflation och konstant skattesats under hela perioden. Riktiga marknader beter sig inte så. De faktiska utfallen kommer att avvika, och över långa perioder kan de avvika enormt.',
    'Siffrorna är ungefärliga och tillhandahålls i befintligt skick, utan någon som helst garanti. Varje beslut du fattar efter att ha använt den här räknaren är helt ditt eget, och varken upphovsmännen eller utgivaren tar ansvar för förlust eller skada som följer av det. Om pengar betyder något för dig: räkna efter själv och tala med en kvalificerad rådgivare i ditt land.',
  ],

  colSymbol: 'Symbol',
  colMeaning: 'Betydelse',
  colValue: 'Värde',
  colFrequency: 'Frekvens',
  colMonthlyAmount: 'Belopp som läggs till den månaden',

  inputsTitle: '1. Det du matar in',
  inputsIntro: 'Detta är de enda värden modellen använder. Ingenting hämtas från internet och ingenting antas åt dig.',
  inputMeanings: [
    'Startbelopp — summan du börjar med',
    'Placeringstid i hela år',
    'Förväntad årlig avkastning, i procent',
    'Antal kapitaliseringar per år (daglig = 365, månadsvis = 12, kvartalsvis = 4, halvårsvis = 2, årlig = 1)',
    'Insättningsbelopp, läggs till med den frekvens du väljer',
    'Förväntad årlig inflation, i procent',
    'Skattesats på vinst, i procent',
  ],

  rateTitle: '2. Räkna om din räntesats till månadsränta',
  rateBefore: 'Modellen går fram en månad i taget, så den årsränta du matar in måste uttryckas som en likvärdig månadsränta. Din ränta kapitaliseras n gånger per år, alltså ger varje kapitaliseringsperiod r ÷ n, och en månad utgör n ÷ 12 av en sådan period.',
  rateAfter: 'Det är exponenten som håller de två i samklang: kapitaliserar man den här månadsräntan tolv gånger får man tillbaka exakt din årsränta, så årsslutssiffrorna blir desamma som vid en rak årsberäkning. Med 8 % kapitaliserat årligen blir månadsräntan 0,643403 %.',

  contribTitle: '3. Så läggs insättningarna till',
  contribIntro: 'Eftersom modellen arbetar månadsvis räknas insättningar oftare än varje månad om till ett genomsnittligt månadsbelopp, medan mer sällsynta insättningar bara läggs till de månader de faktiskt infaller.',
  contribFrequencies: [
    'Inga insättningar',
    'Dagligen',
    'Veckovis',
    'Månadsvis',
    'Kvartalsvis',
    'Halvårsvis',
    'Årligen',
  ],
  contribNote: 'Att medelvärdesberäkna dagliga och veckovisa insättningar håller årssumman exakt — 365 dagliga och 52 veckovisa betalningar är vad som faktiskt bokförs under ett år — till priset av några dagars ränta här och där. Den skillnaden är långt mindre än felet i att gissa din egen avkastning.',

  orderTitle: '4. Vad som händer varje månad',
  orderIntro: 'Var och en av de 12 × Y månaderna behandlas i samma tre steg, i den här ordningen:',
  orderSteps: [
    'Ränta läggs på saldot som förts över från förra månaden.',
    'Din insättning för den här månaden läggs till.',
    'Skatt dras av, om någon ska betalas denna månad.',
  ],
  orderNote: 'Räntan läggs på före insättningen, vilket betyder att månadens inbetalning inte ger något den månaden. Det är konventionen för efterskottsbetald annuitet och det försiktigare valet: en inbetalning i början av månaden skulle höja slutsiffran med ungefär en månads tillväxt.',

  taxTitle: '5. Skatt',
  taxIntro: 'Skatt tas ut enbart på vinst, aldrig på pengarna du sätter in. Du väljer själv när den tas ut.',
  taxAnnualLabel: 'Årligen',
  taxAnnualText: 'I slutet av var tolfte månad beskattas den vinst som uppstått under året, och skatten dras direkt från saldot. Vinsten är nuvarande saldo, minus saldot vid årets början, minus allt du satt in under året. Slutar året med förlust är vinsten negativ och ingen skatt tas ut, men den förlusten förs inte vidare för att kvittas mot senare år.',
  taxExitLabel: 'Vid uttag',
  taxExitText: 'Ingenting dras av förrän allra sista månaden, då hela periodens samlade vinst beskattas på en gång. Vinsten är slutsaldot minus alla insättningar, inklusive startbeloppet.',
  taxNote: 'Över lång tid skiljer sig de två varianterna påtagligt, eftersom skatt som betalas varje år är pengar som slutar växa med ränta på ränta. I exemplet nedan kostar årlig beskattning omkring 14 093 — värt att jämföra båda innan du bestämmer vilken som passar din situation.',

  inflationTitle: '6. Inflation',
  inflationIntro: 'Inflationen dras inte från saldot. Den tillämpas på slutet, som en omräkning av framtida pengar till vad de skulle köpa i dag:',
  inflationNote: 't är antalet gångna år, så ett värde i månad m använder t = m ÷ 12. Det är därför den «reala» siffran alltid är lägre än den nominella så snart inflationen är över noll: pengarna växer, men varje krona köper mindre.',

  figuresTitle: '7. De fyra nyckeltalen',
  figuresIntro: 'Rutorna under huvudresultatet är fyra vyer av samma simulering. De skiljer sig bara i vilka avdrag som redan gjorts.',
  figureNames: [
    'Totalt insatt',
    'Nominellt värde',
    'Nominellt efter skatt',
    'Inflationsjusterat',
  ],
  figureNotes: [
    'Startbeloppet plus varje insättning du gör. Ingen tillväxt alls. Det här är pengarna som lämnar din ficka.',
    'Saldot med tillväxt men utan några avdrag. Det största och minst meningsfulla av de fyra — och just den siffra de flesta räknare visar ensam.',
    'Samma saldo, med skatt avdragen vid de tidpunkter din skattevariant anger.',
    'Saldot efter skatt omräknat till dagens köpkraft. Det är den framhävda siffran högst upp i appen och den enda som svarar på vad pengarna faktiskt kommer att köpa.',
  ],

  irrTitle: '8. Den reala avkastningen',
  irrWhyNot: 'Procenttalet bredvid «Avkastning (CAGR)» är inte slutvärdet delat med totala insättningar. Den genvägen behandlar varje månadsinsättning som om den hade placerats dag ett, vilket kraftigt underskattar avkastningen — i exemplet nedan skulle den visa runt 2,6 % i stället för 4,71 %.',
  irrBefore: 'I stället löser räknaren ut den räntesats som gör nuvärdet av allt du satt in lika med det värde du slutar med. Varje insättning räknas först om till dagens pengar, så svaret är en real avkastning, efter skatt och efter inflation. Med c(m) som beloppet insatt i månad m och V som det reala slutsaldot är månadsräntan x lösningen till:',
  irrAfter: 'Den ekvationen har ingen sluten lösning, så den löses numeriskt med intervallhalvering mellan −50 % och +50 % per månad, tills intervallet är mindre än 10⁻¹². Månadsresultatet räknas sedan om till årstakt:',
  irrNote: 'Det här är internräntan, samma mått som används för att jämföra placeringar med ojämna betalningsströmmar. Eftersom den tar hänsyn till när varje insättning gjordes går den att jämföra direkt med en angiven årsavkastning — med skillnaden att den här är rensad från skatt och inflation.',

  rangeTitle: '9. Det optimistiska och pessimistiska intervallet',
  rangeText: 'När du slår på ränteintervallet körs hela simuleringen tre gånger: en gång med din lägsta ränta, en med den förväntade och en med den högsta. Allt annat är identiskt. De tre resultaten är inte sannolikheter och bär ingen konfidensnivå; de visar helt enkelt vad samma plan ger under tre olika antaganden som du själv valt.',

  exampleTitle: '10. Ett genomräknat exempel',
  exampleIntro: 'Det här är appens standardvärden. Varje siffra nedan går att räkna fram på en miniräknare och stämmer exakt med vad appen visar.',
  exampleGivenTitle: 'Indata',
  exampleGivenLabels: [
    'Startbelopp',
    'Period',
    'Årlig avkastning',
    'Kapitalisering',
    'Insättning',
    'Inflation',
    'Skatt',
  ],
  exampleStepsTitle: 'Första året, månad för månad',
  exampleSteps: [
    'Månadsränta: (1 + 0,08 ÷ 1) upphöjt till 1 ÷ 12, minus 1 = 0,00643403.',
    'Månad 1: 10 000 × 1,00643403 = 10 064,34, plus insättningen på 500 = 10 564,34.',
    'Månad 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Fortsätter man till månad 12 når saldot 17 016,94. Under året satte du in 6 000 och började med 10 000, så vinsten är 17 016,94 − 16 000 = 1 016,94.',
    'Skatten på 15 % av den vinsten blir 152,54, avdragen direkt, vilket lämnar 16 864,40 att ta med in i år två.',
  ],
  exampleResultTitle: 'Efter alla 15 åren',
  exampleResultLabels: [
    'Totalt insatt',
    'Nominellt värde',
    'Nominellt efter skatt',
    'I dagens pengar',
    'Real avkastning per år',
  ],
  exampleClosing: 'Läs den sista raden noga. Du sätter in 100 000 och slutar med köpkraften hos 133 640. De nominella 200 525 ser ut som en fördubbling, men skatten tar 20 663 av dem och inflationen ytterligare 46 222. Just det gapet är hela anledningen till att den här räknaren finns.',

  excludedTitle: '11. Vad modellen inte räknar med',
  excludedIntro: 'Detta är medvetna utelämnanden. Att känna till dem talar om hur långt du kan lita på resultatet.',
  excluded: [
    'Courtage, plattformsavgifter, fondförvaltningsavgifter och skillnaden mellan köp- och säljkurs. Över lång tid kan 1 % i årlig avgift äta upp en femtedel av det reala slutvärdet.',
    'Progressiva skatteskikt, grundavdrag, förlustkvittning och skattegynnade konton. En enda platt sats tillämpas på all vinst.',
    'Valutaväxling och växelkursrörelser. Alla siffror står i den enhet du matade in.',
    'Marknadens svängningar. Avkastningen läggs på jämnt varje månad, så avkastningsordningsrisken — den som betyder mest mot slutet av en lång placering — syns inte alls här.',
    'Varje ökning av dina insättningar över tid, vare sig med inflationen eller med inkomsten.',
    'Uttag, pauser eller att avsluta i förtid före periodens slut.',
    'Utdelningar behandlade skilt från kursuppgång; den avkastning du matar in antas vara totalavkastning.',
    'Allt som är specifikt för ditt land, din leverantör eller dina personliga förhållanden.',
  ],

  limitsTitle: '12. Verktygets gränser',
  limits: [
    'Allt på den här sidan är ett antagande och inget mer. Modellen räknar troget ut följderna av de siffror du skrev in; den har ingen uppfattning om huruvida de siffrorna är realistiska och inget sätt att veta.',
    'Alla resultat är ungefärliga. Visade värden avrundas för läsbarhetens skull medan den underliggande aritmetiken behåller full precision, så en kontroll för hand kan skilja på sista siffran eller två.',
    'Räknaren tillhandahålls i befintligt skick, utan någon garanti. Inga anspråk kan riktas mot upphovsmännen eller utgivaren för något beslut, någon förlust eller någon skada som hänger samman med användningen.',
  ],
};
