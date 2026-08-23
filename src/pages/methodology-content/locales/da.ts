import type { MethodologyContent } from '../types';

export const da: MethodologyContent = {
  title: 'Beregningsmetode',
  updated: 'Gælder version {version}',

  disclaimerTitle: 'Læs dette først',
  disclaimer: [
    'Denne side findes, for at du selv kan efterprøve hvert eneste tal, beregneren viser. Den gennemgår alle formler, den rækkefølge de anvendes i, og et fuldt gennemregnet eksempel, som du kan gentage med papir og blyant. Det er oplysende materiale om, hvordan værktøjet fungerer — ikke finansiel, investerings-, skatte- eller juridisk rådgivning, og ingen anbefaling om at købe, sælge eller beholde noget.',
    'Alt, hvad beregneren giver, er en fremskrivning af de forudsætninger, du indtaster, ikke en prognose. Den antager konstant afkast, konstant inflation og konstant skattesats i hele perioden. Virkelige markeder opfører sig ikke sådan. De faktiske resultater vil afvige, og over lange perioder kan de afvige enormt.',
    'Tallene er omtrentlige og stilles til rådighed, som de er, uden nogen form for garanti. Enhver beslutning, du træffer efter at have brugt denne beregner, er alene din, og hverken forfatterne eller udgiveren påtager sig ansvar for tab eller skade, der følger heraf. Betyder penge noget for dig, så regn efter selv og tal med en kvalificeret rådgiver i dit land.',
  ],

  colSymbol: 'Symbol',
  colMeaning: 'Betydning',
  colValue: 'Værdi',
  colFrequency: 'Hyppighed',
  colMonthlyAmount: 'Beløb tilføjet den måned',

  inputsTitle: '1. Det du indtaster',
  inputsIntro: 'Dette er de eneste værdier, modellen bruger. Intet hentes fra internettet, og intet antages på dine vegne.',
  inputMeanings: [
    'Startindskud — det beløb, du begynder med',
    'Investeringsperiode i hele år',
    'Forventet årligt afkast, i procent',
    'Antal rentetilskrivninger om året (daglig = 365, månedlig = 12, kvartalsvis = 4, halvårlig = 2, årlig = 1)',
    'Indbetalingens størrelse, tilføjet med den hyppighed du vælger',
    'Forventet årlig inflation, i procent',
    'Skattesats på gevinst, i procent',
  ],

  rateTitle: '2. Omregning af din rente til månedsrente',
  rateBefore: 'Modellen bevæger sig en måned ad gangen, så den årsrente, du indtaster, skal udtrykkes som en tilsvarende månedsrente. Din rente tilskrives n gange om året, hver renteperiode giver altså r ÷ n, og en måned udgør n ÷ 12 af sådan en periode.',
  rateAfter: 'Det er eksponenten, der holder de to i overensstemmelse: tilskriver man denne månedsrente tolv gange, får man præcis din årsrente tilbage, så tallene ved årets udgang svarer til en direkte årsberegning. Med 8 % og årlig tilskrivning er månedsrenten 0,643403 %.',

  contribTitle: '3. Sådan tilføjes indbetalingerne',
  contribIntro: 'Da modellen arbejder månedsvis, omregnes indbetalinger, der sker oftere end månedligt, til et gennemsnitligt månedsbeløb, mens mindre hyppige indbetalinger kun tilføjes i de måneder, hvor de faktisk falder.',
  contribFrequencies: [
    'Ingen indbetalinger',
    'Dagligt',
    'Ugentligt',
    'Månedligt',
    'Kvartalsvis',
    'Halvårligt',
    'Årligt',
  ],
  contribNote: 'At gennemsnitsberegne daglige og ugentlige indbetalinger holder årssummen præcis — 365 daglige og 52 ugentlige betalinger er netop, hvad der faktisk bogføres på et år — på bekostning af nogle få dages rente hist og her. Den forskel er langt mindre end fejlen ved at gætte sit eget afkast.',

  orderTitle: '4. Hvad der sker hver måned',
  orderIntro: 'Hver af de 12 × Y måneder gennemgår de samme tre trin, i denne rækkefølge:',
  orderSteps: [
    'Der tilskrives rente på saldoen overført fra sidste måned.',
    'Din indbetaling for denne måned tilføjes.',
    'Skat trækkes fra, hvis der skal betales noget denne måned.',
  ],
  orderNote: 'Renten tilskrives før indbetalingen, hvilket betyder, at denne måneds indbetaling ikke giver noget i selve måneden. Det er konventionen for bagudbetalt annuitet og samtidig det forsigtige valg: en indbetaling i begyndelsen af måneden ville hæve sluttallet med omtrent en måneds vækst.',

  taxTitle: '5. Skat',
  taxIntro: 'Skatten lægges kun på gevinsten, aldrig på de penge du indbetaler. Hvornår den opkræves, vælger du selv.',
  taxAnnualLabel: 'Årligt',
  taxAnnualText: 'Ved udgangen af hver tolvte måned beskattes den gevinst, der er opnået i årets løb, og skatten trækkes straks fra saldoen. Gevinsten er den nuværende saldo, minus saldoen ved årets begyndelse, minus alt hvad du har indbetalt i årets løb. Ender året med tab, er gevinsten negativ og der opkræves ingen skat, men det tab føres ikke videre til modregning i senere år.',
  taxExitLabel: 'Ved udbetaling',
  taxExitText: 'Der trækkes intet fra før allersidste måned, hvor hele periodens samlede gevinst beskattes på én gang. Gevinsten er slutsaldoen minus alle indbetalinger, herunder startindskuddet.',
  taxNote: 'Over en lang periode adskiller de to former sig mærkbart, fordi skat betalt hvert år er penge, der holder op med at forrente sig. I eksemplet nedenfor koster årlig beskatning omkring 14 093 — det er værd at sammenligne begge, før du beslutter, hvilken der passer til din situation.',

  inflationTitle: '6. Inflation',
  inflationIntro: 'Inflationen trækkes ikke fra saldoen. Den anvendes til sidst, som en omregning af fremtidige penge til det, de ville købe i dag:',
  inflationNote: 't er antallet af forløbne år, så en værdi i måned m bruger t = m ÷ 12. Derfor er det «reale» tal altid lavere end det nominelle, så snart inflationen er over nul: pengene vokser, men hver enhed køber mindre.',

  figuresTitle: '7. De fire hovedtal',
  figuresIntro: 'Felterne under hovedresultatet er fire blik på den samme simulering. De adskiller sig kun ved, hvilke fradrag der allerede er foretaget.',
  figureNames: [
    'Samlet indbetalt',
    'Nominel værdi',
    'Nominel efter skat',
    'Inflationskorrigeret',
  ],
  figureNotes: [
    'Startindskuddet plus hver eneste indbetaling. Ingen vækst overhovedet. Det er de penge, der forlader din lomme.',
    'Saldoen med vækst, men uden nogen form for fradrag. Det største og mindst meningsfulde af de fire — og præcis det tal, de fleste beregnere viser alene.',
    'Samme saldo, med skat trukket fra på de tidspunkter, din valgte beskatningsform fastsætter.',
    'Saldoen efter skat omregnet til dagens købekraft. Det er tallet, der fremhæves øverst i appen, og det eneste, der svarer på, hvad pengene faktisk kommer til at købe.',
  ],

  irrTitle: '8. Det reale afkast',
  irrWhyNot: 'Procenten ved siden af «Afkast (CAGR)» er ikke slutværdien divideret med de samlede indbetalinger. Den genvej behandler hver månedlig indbetaling, som var den investeret på dag ét, og undervurderer dermed afkastet groft — i eksemplet nedenfor ville den vise omkring 2,6 % i stedet for 4,71 %.',
  irrBefore: 'I stedet finder beregneren den rentesats, hvor nutidsværdien af alt, du har indbetalt, er lig med den værdi, du ender med. Hver indbetaling omregnes først til nutidens penge, så svaret er et realt afkast, efter skat og efter inflation. Med c(m) som beløbet indbetalt i måned m og V som den reale slutsaldo er månedsrenten x løsningen til:',
  irrAfter: 'Den ligning har ingen lukket løsning og løses derfor numerisk ved halvering mellem −50 % og +50 % pr. måned, hvor intervallet indsnævres, indtil det er mindre end 10⁻¹². Månedsresultatet omregnes derefter til årsbasis:',
  irrNote: 'Dette er den interne rente, samme mål som bruges til at sammenligne investeringer med uregelmæssige betalingsstrømme. Fordi den tager højde for, hvornår hver indbetaling skete, kan den sammenlignes direkte med et oplyst årligt afkast — med den forskel, at dette tal allerede er renset for skat og inflation.',

  rangeTitle: '9. Det optimistiske og pessimistiske interval',
  rangeText: 'Når du slår renteintervallet til, køres hele simuleringen tre gange: én gang med din laveste rente, én med den forventede og én med den højeste. Alt andet er identisk. De tre resultater er ikke sandsynligheder og bærer intet konfidensniveau; de viser blot, hvad den samme plan giver under tre forskellige forudsætninger, du selv har valgt.',

  exampleTitle: '10. Et gennemregnet eksempel',
  exampleIntro: 'Dette er appens standardværdier. Hvert tal nedenfor kan regnes efter på en lommeregner og svarer nøjagtigt til det, appen viser.',
  exampleGivenTitle: 'Input',
  exampleGivenLabels: [
    'Startindskud',
    'Periode',
    'Årligt afkast',
    'Rentetilskrivning',
    'Indbetaling',
    'Inflation',
    'Skat',
  ],
  exampleStepsTitle: 'Første år, måned for måned',
  exampleSteps: [
    'Månedsrente: (1 + 0,08 ÷ 1) opløftet i 1 ÷ 12, minus 1 = 0,00643403.',
    'Måned 1: 10 000 × 1,00643403 = 10 064,34, plus indbetalingen på 500 = 10 564,34.',
    'Måned 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Fortsætter man til måned 12, når saldoen 17 016,94. I løbet af året indbetalte du 6 000 og begyndte med 10 000, så gevinsten er 17 016,94 − 16 000 = 1 016,94.',
    'Skatten på 15 % af den gevinst er 152,54, trukket fra straks, hvilket efterlader 16 864,40 til år to.',
  ],
  exampleResultTitle: 'Efter alle 15 år',
  exampleResultLabels: [
    'Samlet indbetalt',
    'Nominel værdi',
    'Nominel efter skat',
    'I dagens penge',
    'Realt afkast pr. år',
  ],
  exampleClosing: 'Læs den sidste linje omhyggeligt. Du indbetaler 100 000 og ender med købekraften af 133 640. De nominelle 200 525 ligner en fordobling, men skatten tager 20 663 af dem og inflationen yderligere 46 222. Netop det spring er hele grunden til, at denne beregner findes.',

  excludedTitle: '11. Hvad modellen ikke medregner',
  excludedIntro: 'Det er bevidste udeladelser. Kender du dem, ved du, hvor langt du kan stole på resultatet.',
  excluded: [
    'Kurtage, platformgebyrer, administrationsomkostninger i fonde og forskellen mellem købs- og salgskurs. Over en lang horisont kan 1 % i årligt gebyr æde en femtedel af den reale slutværdi.',
    'Progressive skatteskalaer, bundfradrag, modregning af tab og skattebegunstigede konti. Én flad sats anvendes på al gevinst.',
    'Valutaomveksling og kursbevægelser. Alle tal er i den enhed, du indtastede.',
    'Markedets udsving. Afkastet tilskrives jævnt hver måned, så risikoen ved afkastenes rækkefølge — den der betyder mest hen mod slutningen af en lang investering — er usynlig her.',
    'Enhver forøgelse af dine indbetalinger over tid, hvad enten den følger inflationen eller indkomsten.',
    'Hævninger, pauser eller tidligt exit før periodens udløb.',
    'Udbytte behandlet adskilt fra kursstigning; det indtastede afkast betragtes som totalafkast.',
    'Alt, der er særligt for dit land, din udbyder eller dine personlige forhold.',
  ],

  limitsTitle: '12. Værktøjets grænser',
  limits: [
    'Alt på denne side er en forudsætning og intet andet. Modellen udregner trofast konsekvenserne af de tal, du har tastet ind; den har ingen holdning til, om de tal er realistiske, og ingen mulighed for at vide det.',
    'Alle resultater er omtrentlige. Viste værdier afrundes af hensyn til læsbarheden, mens de underliggende beregninger bevarer fuld præcision, så en kontrol i hånden kan afvige på sidste ciffer eller to.',
    'Beregneren stilles til rådighed, som den er, uden nogen garanti. Der kan ikke rejses krav mod forfatterne eller udgiveren for nogen beslutning, noget tab eller nogen skade forbundet med brugen af den.',
  ],
};
