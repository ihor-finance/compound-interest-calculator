import type { MethodologyContent } from '../types';

export const sq: MethodologyContent = {
  title: 'Metodologjia e llogaritjes',
  updated: 'Vlen për versionin {version}',

  disclaimerTitle: 'Lexojeni këtë së pari',
  disclaimer: [
    'Kjo faqe ekziston që ju të mund të verifikoni çdo shifër që shfaq llogaritësi. Këtu janë të gjitha formulat, radha në të cilën zbatohen dhe një shembull i zgjidhur deri në fund, të cilin mund ta përsërisni me laps e letër. Ky është informacion edukativ mbi mënyrën se si punon mjeti — nuk është këshillë financiare, investuese, tatimore apo ligjore dhe nuk është rekomandim për të blerë, shitur apo mbajtur asgjë.',
    'Gjithçka që jep llogaritësi është një projeksion mbi supozimet që futni ju, jo një parashikim. Ai supozon kthim konstant, inflacion konstant dhe normë tatimore konstante gjatë gjithë periudhës. Tregjet e vërteta nuk sillen kështu. Rezultatet reale do të ndryshojnë, dhe në periudha të gjata mund të ndryshojnë jashtëzakonisht.',
    'Shifrat janë të përafërta dhe jepen ashtu siç janë, pa asnjë garanci. Çdo vendim që merrni pas përdorimit të këtij llogaritësi është vetëm i juaji, dhe as autorët as botuesi nuk mbajnë përgjegjësi për humbje ose dëme që rrjedhin prej tij. Nëse paratë kanë rëndësi për ju, rillogaritini shifrat vetë dhe këshillohuni me një profesionist të kualifikuar në vendin tuaj.',
  ],

  colSymbol: 'Simboli',
  colMeaning: 'Kuptimi',
  colValue: 'Vlera',
  colFrequency: 'Frekuenca',
  colMonthlyAmount: 'Shuma e shtuar atë muaj',

  inputsTitle: '1. Çfarë futni ju',
  inputsIntro: 'Këto janë të vetmet vlera që përdor modeli. Asgjë nuk merret nga interneti dhe asgjë nuk supozohet në vend të jush.',
  inputMeanings: [
    'Depozita fillestare — shuma me të cilën nisni',
    'Kohëzgjatja e investimit në vite të plota',
    'Kthimi vjetor i pritshëm, në përqindje',
    'Periudha kapitalizimi në vit (ditore = 365, mujore = 12, tremujore = 4, gjashtëmujore = 2, vjetore = 1)',
    'Madhësia e kontributit të rregullt, shtohet me frekuencën që zgjidhni',
    'Inflacioni vjetor i pritshëm, në përqindje',
    'Norma e tatimit mbi fitimin, në përqindje',
  ],

  rateTitle: '2. Shndërrimi i normës suaj në mujore',
  rateBefore: 'Modeli ecën muaj pas muaji, prandaj norma vjetore që futni duhet shprehur si normë mujore ekuivalente. Norma juaj kapitalizohet n herë në vit, pra çdo periudhë kapitalizimi jep r ÷ n, dhe një muaj është n ÷ 12 e asaj periudhe.',
  rateAfter: 'Është pikërisht eksponenti që i mban të dyja në përputhje: nëse e kapitalizoni këtë normë mujore dymbëdhjetë herë, merrni saktësisht normën tuaj vjetore, kështu që shifrat në fund të vitit përputhen me një llogaritje të drejtpërdrejtë vjetore. Me 8 % dhe kapitalizim vjetor, norma mujore është 0,643403 %.',

  contribTitle: '3. Si shtohen kontributet',
  contribIntro: 'Duke qenë se modeli punon mbi bazë mujore, kontributet më të shpeshta se mujore kthehen në një shumë mesatare mujore, ndërsa ato më të rralla shtohen vetëm në muajt ku bien vërtet.',
  contribFrequencies: [
    'Pa kontribute',
    'Çdo ditë',
    'Çdo javë',
    'Çdo muaj',
    'Çdo tremujor',
    'Çdo gjashtë muaj',
    'Çdo vit',
  ],
  contribNote: 'Mesatarizimi i kontributeve ditore dhe javore e mban shumën vjetore të saktë — brenda një viti hyjnë vërtet 365 pagesa ditore ose 52 javore — me çmimin e disa ditëve interesi andej-këndej. Ky ndryshim është shumë më i vogël se gabimi që bëni duke hamendësuar kthimin tuaj.',

  orderTitle: '4. Çfarë ndodh çdo muaj',
  orderIntro: 'Secili nga 12 × Y muajt kalon të njëjtat tre hapa, në këtë radhë:',
  orderSteps: [
    'Interesi llogaritet mbi gjendjen e bartur nga muaji i kaluar.',
    'Shtohet kontributi juaj i këtij muaji.',
    'Zbritet tatimi, nëse ky muaj e ka të detyrueshëm.',
  ],
  orderNote: 'Interesi llogaritet përpara kontributit, që do të thotë se pagesa e këtij muaji nuk fiton asgjë brenda të njëjtit muaj. Kjo është konventa e një anuiteti të pagueshëm në fund të periudhës dhe njëkohësisht zgjedhja më e kujdesshme: një pagesë në fillim të muajit do ta ngrinte shifrën përfundimtare me rreth një muaj rritje.',

  taxTitle: '5. Tatimi',
  taxIntro: 'Tatimi zbatohet vetëm mbi fitimin, kurrë mbi paratë që vendosni ju. Kur mbahet, e zgjidhni ju.',
  taxAnnualLabel: 'Çdo vit',
  taxAnnualText: 'Në fund të çdo muaji të dymbëdhjetë, fitimi i realizuar atë vit tatohet dhe tatimi hiqet menjëherë nga gjendja. Fitimi është gjendja aktuale, minus gjendja në fillim të vitit, minus gjithçka që keni derdhur gjatë vitit. Nëse viti mbyllet me humbje, fitimi është negativ dhe nuk ka tatim, por ajo humbje nuk bartet për t’u zbritur nga vitet e mëpasme.',
  taxExitLabel: 'Në dalje',
  taxExitText: 'Asgjë nuk zbritet deri në muajin e fundit; atëherë i gjithë fitimi i të gjithë periudhës tatohet përnjëherë. Fitimi është gjendja përfundimtare minus të gjitha kontributet, përfshirë depozitën fillestare.',
  taxNote: 'Në një periudhë të gjatë të dy regjimet ndryshojnë ndjeshëm, sepse tatimi i paguar çdo vit janë para që pushojnë së kapitalizuari. Në shembullin më poshtë, tatimi vjetor kushton rreth 14 093 — ia vlen t’i krahasoni të dy përpara se të vendosni cili i përshtatet situatës suaj.',

  inflationTitle: '6. Inflacioni',
  inflationIntro: 'Inflacioni nuk zbritet nga gjendja. Ai zbatohet në fund, si shndërrim i parave të së ardhmes në atë që do të blinin sot:',
  inflationNote: 't është numri i viteve të kaluara, prandaj një vlerë në muajin m përdor t = m ÷ 12. Prandaj shifra «reale» është gjithmonë më e ulët se ajo nominale, sapo inflacioni kalon zeron: paratë shtohen, por çdo njësi blen më pak.',

  figuresTitle: '7. Katër shifrat kryesore',
  figuresIntro: 'Kartat nën rezultatin kryesor janë katër pamje të të njëjtit simulim. Ndryshojnë vetëm nga zbritjet që janë kryer tashmë.',
  figureNames: [
    'Totali i derdhur',
    'Vlera nominale',
    'Nominale pas tatimit',
    'E rregulluar me inflacionin',
  ],
  figureNotes: [
    'Depozita fillestare plus çdo kontribut i juaji. Pa asnjë rritje. Këto janë paratë që dalin nga xhepi juaj.',
    'Gjendja me rritjen e llogaritur, por pa asnjë zbritje. Më e madhja dhe më pak kuptimplota nga të katërta — dhe pikërisht këtë shifër shumica e llogaritësve e shfaqin të vetme.',
    'E njëjta gjendje, me tatimin e mbajtur në momentet që përcakton mënyra e tatimit që zgjodhët.',
    'Gjendja pas tatimit, e kthyer në fuqinë blerëse të sotme. Kjo është shifra e theksuar në krye të aplikacionit dhe e vetmja që i përgjigjet pyetjes se çfarë do të blejnë vërtet ato para.',
  ],

  irrTitle: '8. Kthimi real',
  irrWhyNot: 'Përqindja pranë etiketës «Kthimi (CAGR)» nuk është vlera përfundimtare pjesëtuar me kontributet totale. Ajo rrugë e shkurtër e trajton çdo pagesë mujore sikur të ishte investuar ditën e parë dhe e nënvlerëson rëndë kthimin — në shembullin më poshtë do të tregonte rreth 2,6 % në vend të 4,71 %.',
  irrBefore: 'Në vend të kësaj, llogaritësi kërkon normën në të cilën vlera e sotme e gjithçkaje që keni derdhur barazon vlerën me të cilën përfundoni. Çdo pagesë kthehet së pari në para të sotme, kështu që përgjigjja është kthim real, pas tatimit dhe pas inflacionit. Nëse c(m) është shuma e derdhur në muajin m dhe V gjendja reale përfundimtare, norma mujore x është zgjidhja e:',
  irrAfter: 'Ky ekuacion nuk ka zgjidhje në formë të mbyllur, prandaj zgjidhet numerikisht me përgjysmim ndërmjet −50 % dhe +50 % në muaj, duke ngushtuar intervalin derisa të bjerë nën 10⁻¹². Rezultati mujor pastaj kthehet në bazë vjetore:',
  irrNote: 'Kjo është norma e brendshme e kthimit — i njëjti tregues me të cilin krahasohen investimet me flukse të parregullta parash. Meqë merr parasysh kur është bërë secila pagesë, krahasohet drejtpërdrejt me një kthim vjetor të publikuar, me ndryshimin se ky është pastruar tashmë nga tatimet dhe inflacioni.',

  rangeTitle: '9. Diapazoni optimist dhe pesimist',
  rangeText: 'Kur aktivizoni diapazonin e normave, i gjithë simulimi kryhet tri herë: një herë me normën tuaj më të ulët, një herë me atë të pritshme dhe një herë me më të lartën. Gjithçka tjetër mbetet e njëjtë. Këto tri rezultate nuk janë probabilitete dhe nuk mbartin asnjë nivel besimi; ato thjesht tregojnë çfarë jep i njëjti plan nën tri supozime të ndryshme që i zgjodhët vetë.',

  exampleTitle: '10. Shembull i zgjidhur',
  exampleIntro: 'Këto janë vlerat e parazgjedhura të aplikacionit. Çdo shifër më poshtë mund të kontrollohet me një makinë llogaritëse dhe përputhet saktësisht me atë që shfaq aplikacioni.',
  exampleGivenTitle: 'Të dhënat',
  exampleGivenLabels: [
    'Depozita fillestare',
    'Kohëzgjatja',
    'Kthimi vjetor',
    'Kapitalizimi',
    'Kontributi',
    'Inflacioni',
    'Tatimi',
  ],
  exampleStepsTitle: 'Viti i parë, muaj pas muaji',
  exampleSteps: [
    'Norma mujore: (1 + 0,08 ÷ 1) në fuqinë 1 ÷ 12, minus 1 = 0,00643403.',
    'Muaji 1: 10 000 × 1,00643403 = 10 064,34, plus kontributi 500 = 10 564,34.',
    'Muaji 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Duke vazhduar deri në muajin 12, gjendja arrin 17 016,94. Gjatë vitit derdhët 6 000 dhe nisët me 10 000, pra fitimi është 17 016,94 − 16 000 = 1 016,94.',
    'Tatimi 15 % mbi këtë fitim është 152,54, mbahet menjëherë, dhe në vitin e dytë kalojnë 16 864,40.',
  ],
  exampleResultTitle: 'Pas të gjithë 15 viteve',
  exampleResultLabels: [
    'Totali i derdhur',
    'Vlera nominale',
    'Nominale pas tatimit',
    'Në para të sotme',
    'Kthimi real në vit',
  ],
  exampleClosing: 'Lexojeni me kujdes rreshtin e fundit. Ju derdhni 100 000 dhe përfundoni me fuqinë blerëse të 133 640. Shifra nominale 200 525 duket si dyfishim, por tatimi merr prej saj 20 663 dhe inflacioni edhe 46 222. Pikërisht për këtë hendek ekziston ky llogaritës.',

  excludedTitle: '11. Çfarë nuk përfshin modeli',
  excludedIntro: 'Këto janë lëshime të qëllimshme. Duke i ditur, ju e dini sa mund t’i besoni rezultatit.',
  excluded: [
    'Komisionet e brokerit, tarifat e platformës, kostot e administrimit të fondit dhe diferencën ndërmjet çmimit të blerjes dhe të shitjes. Në horizont të gjatë, një tarifë vjetore prej 1 % mund të hajë një të pestën e vlerës reale përfundimtare.',
    'Shkallët progresive të tatimit, pragjet e patatueshme, njohjen e humbjeve dhe llogaritë me lehtësi tatimore. Mbi të gjithë fitimin zbatohet një normë e vetme e sheshtë.',
    'Këmbimin valutor dhe lëvizjen e kursit. Të gjitha shifrat janë në njësinë që futët.',
    'Luhatjet e tregut. Kthimi shtohet në mënyrë të njëtrajtshme çdo muaj, kështu që rreziku i renditjes së kthimeve — ai që peshon më shumë drejt fundit të një investimi të gjatë — këtu nuk duket fare.',
    'Çdo rritje të kontributeve tuaja me kalimin e kohës, qoftë me inflacionin apo me të ardhurat.',
    'Tërheqjet, ndërprerjet ose daljen para afatit.',
    'Dividendët e trajtuar veçmas nga rritja e çmimit; kthimi i futur konsiderohet kthim total.',
    'Gjithçka që është specifike për vendin tuaj, ofruesin tuaj ose rrethanat tuaja personale.',
  ],

  limitsTitle: '12. Kufijtë e këtij mjeti',
  limits: [
    'Gjithçka në këtë faqe është supozim dhe asgjë më shumë. Modeli llogarit besnikërisht pasojat e shifrave që shkruat; ai nuk ka mendim nëse ato shifra janë realiste dhe as ndonjë mënyrë për ta ditur.',
    'Të gjitha rezultatet janë të përafërta. Vlerat e shfaqura rrumbullakosen për lexueshmëri, ndërsa llogaritja e brendshme ruan saktësinë e plotë, prandaj një kontroll me dorë mund të ndryshojë në shifrën e fundit ose dy.',
    'Llogaritësi ofrohet ashtu siç është, pa asnjë garanci. Ndaj autorëve ose botuesit nuk mund të ngrihet asnjë pretendim për ndonjë vendim, humbje apo dëm të lidhur me përdorimin e tij.',
  ],
};
