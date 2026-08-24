import type { MethodologyContent } from '../types';

export const lv: MethodologyContent = {
  title: 'Aprēķina metodika',
  updated: 'Attiecas uz versiju {version}',

  disclaimerTitle: 'Vispirms izlasiet šo',
  disclaimer: [
    'Šī lapa pastāv, lai jūs varētu pārbaudīt katru skaitli, ko kalkulators parāda. Tajā izklāstītas visas formulas, to piemērošanas secība un pilnībā izrēķināts piemērs, kuru varat atkārtot ar zīmuli un papīru. Tā ir izglītojoša informācija par to, kā rīks darbojas — tā nav finanšu, ieguldījumu, nodokļu vai juridiska konsultācija un nav ieteikums kaut ko pirkt, pārdot vai paturēt.',
    'Viss, ko kalkulators sniedz, ir prognoze pēc jūsu ievadītajiem pieņēmumiem, nevis nākotnes paredzējums. Tas pieņem nemainīgu ienesīgumu, nemainīgu inflāciju un nemainīgu nodokļa likmi visā periodā. Īsti tirgi tā neuzvedas. Patiesie rezultāti atšķirsies, un ilgos periodos tie var atšķirties milzīgi.',
    'Skaitļi ir aptuveni un tiek sniegti tādi, kādi tie ir, bez jebkādas garantijas. Jebkurš lēmums, ko pieņemat pēc šī kalkulatora izmantošanas, ir tikai jūsu, un ne autori, ne izdevējs neatbild par zaudējumiem vai kaitējumu, kas no tā izriet. Ja nauda jums ir svarīga, pārrēķiniet skaitļus paši un konsultējieties ar kvalificētu speciālistu savā valstī.',
  ],

  colSymbol: 'Apzīmējums',
  colMeaning: 'Nozīme',
  colValue: 'Vērtība',
  colFrequency: 'Biežums',
  colMonthlyAmount: 'Tajā mēnesī pievienotā summa',

  inputsTitle: '1. Ko jūs ievadāt',
  inputsIntro: 'Šīs ir vienīgās vērtības, ko modelis izmanto. Nekas netiek ielādēts no interneta un nekas netiek pieņemts jūsu vietā.',
  inputMeanings: [
    'Sākuma iemaksa — summa, ar kuru sākat',
    'Ieguldījuma termiņš pilnos gados',
    'Sagaidāmais gada ienesīgums procentos',
    'Kapitalizācijas periodu skaits gadā (dienas = 365, mēneša = 12, ceturkšņa = 4, pusgada = 2, gada = 1)',
    'Regulārās iemaksas apmērs, tiek pievienots jūsu izvēlētajā biežumā',
    'Sagaidāmā gada inflācija procentos',
    'Nodokļa likme peļņai procentos',
  ],

  rateTitle: '2. Jūsu likmes pārrēķins mēneša likmē',
  rateBefore: 'Modelis virzās pa vienam mēnesim, tāpēc ievadītā gada likme jāizsaka kā līdzvērtīga mēneša likme. Jūsu likme kapitalizējas n reizes gadā, tātad katrs kapitalizācijas periods dod r ÷ n, un viens mēnesis ir n ÷ 12 no šāda perioda.',
  rateAfter: 'Tieši kāpinātājs notur abus saskaņotus: kapitalizējot šo mēneša likmi divpadsmit reizes, iegūstat tieši savu gada likmi, tāpēc gada beigu skaitļi sakrīt ar tiešu gada aprēķinu. Pie 8 % ar gada kapitalizāciju mēneša likme ir 0,643403 %.',

  contribTitle: '3. Kā tiek pievienotas iemaksas',
  contribIntro: 'Tā kā modelis strādā pa mēnešiem, biežākas nekā ikmēneša iemaksas tiek pārrēķinātas vidējā mēneša summā, bet retākas tiek pievienotas tikai tajos mēnešos, kuros tās patiešām iekrīt.',
  contribFrequencies: [
    'Bez iemaksām',
    'Katru dienu',
    'Katru nedēļu',
    'Katru mēnesi',
    'Katru ceturksni',
    'Reizi pusgadā',
    'Reizi gadā',
  ],
  contribNote: 'Dienas un nedēļas iemaksu vidējošana notur gada kopsummu precīzu — gada laikā tiešām tiek ieskaitīti 365 dienas vai 52 nedēļas maksājumi — par cenu, ka šur tur nobīdās dažu dienu procenti. Šī starpība ir daudz mazāka nekā kļūda, minot pašam savu ienesīgumu.',

  orderTitle: '4. Kas notiek katru mēnesi',
  orderIntro: 'Katrs no 12 × Y mēnešiem iziet vienus un tos pašus trīs soļus šādā secībā:',
  orderSteps: [
    'Atlikumam, kas pārnests no iepriekšējā mēneša, tiek aprēķināti procenti.',
    'Tiek pievienota jūsu šī mēneša iemaksa.',
    'Tiek ieturēts nodoklis, ja šajā mēnesī tāds pienākas.',
  ],
  orderNote: 'Procenti tiek aprēķināti pirms iemaksas, kas nozīmē, ka šī mēneša maksājums tajā pašā mēnesī neko nenopelna. Tā ir perioda beigās maksājamas annuitātes pieņemtā kārtība un vienlaikus piesardzīgākā izvēle: maksājums mēneša sākumā galīgo skaitli paceltu par aptuveni viena mēneša pieaugumu.',

  taxTitle: '5. Nodoklis',
  taxIntro: 'Nodoklis tiek piemērots tikai peļņai, nekad tai naudai, ko jūs iemaksājat. Kad to ietur, izvēlaties jūs.',
  taxAnnualLabel: 'Katru gadu',
  taxAnnualText: 'Katra divpadsmitā mēneša beigās tajā gadā gūtā peļņa tiek aplikta ar nodokli, un nodoklis nekavējoties tiek noņemts no atlikuma. Peļņa ir pašreizējais atlikums, mīnus atlikums gada sākumā, mīnus viss, ko gada laikā esat iemaksājis. Ja gads noslēdzas ar zaudējumiem, peļņa ir negatīva un nodoklis netiek ieturēts, taču šie zaudējumi netiek pārnesti, lai tos ieskaitītu vēlākos gados.',
  taxExitLabel: 'Izņemot',
  taxExitText: 'Līdz pašam pēdējam mēnesim nekas netiek ieturēts; tad visa perioda kopējā peļņa tiek aplikta ar nodokli vienā reizē. Peļņa ir galīgais atlikums mīnus visas iemaksas, ieskaitot sākuma iemaksu.',
  taxNote: 'Ilgā termiņā abi režīmi ievērojami atšķiras, jo katru gadu samaksātais nodoklis ir nauda, kas pārstāj pelnīt saliktos procentus. Zemāk esošajā piemērā ikgadējā aplikšana izmaksā aptuveni 14 093 — ir vērts salīdzināt abus, pirms izlemjat, kurš atbilst jūsu situācijai.',

  inflationTitle: '6. Inflācija',
  inflationIntro: 'Inflācija netiek atskaitīta no atlikuma. Tā tiek piemērota beigās, kā nākotnes naudas pārvēršana tajā, ko tā nopirktu šodien:',
  inflationNote: 't ir pagājušo gadu skaits, tāpēc vērtība m mēnesī izmanto t = m ÷ 12. Tieši tāpēc «reālais» skaitlis vienmēr ir zemāks par nominālo, tiklīdz inflācija pārsniedz nulli: naudas kļūst vairāk, bet katra vienība nopērk mazāk.',

  figuresTitle: '7. Četri galvenie skaitļi',
  figuresIntro: 'Lodziņi zem galvenā rezultāta ir četri skatījumi uz vienu un to pašu simulāciju. Tie atšķiras tikai ar to, kuri atskaitījumi jau ir veikti.',
  figureNames: [
    'Kopā iemaksāts',
    'Nominālā vērtība',
    'Nominālā pēc nodokļiem',
    'Koriģēta ar inflāciju',
  ],
  figureNotes: [
    'Sākuma iemaksa plus katra jūsu iemaksa. Bez jebkāda pieauguma. Šī ir nauda, kas aiziet no jūsu kabatas.',
    'Atlikums ar pieaugumu, bet bez neviena atskaitījuma. Lielākais un vismazāk jēgpilnais no četriem — un tieši šo skaitli lielākā daļa kalkulatoru rāda atsevišķi.',
    'Tas pats atlikums ar nodokli, kas ieturēts brīžos, kurus nosaka jūsu izvēlētais aplikšanas veids.',
    'Atlikums pēc nodokļiem, pārrēķināts šodienas pirktspējā. Šis ir izceltais skaitlis lietotnes augšdaļā un vienīgais, kas atbild, ko šī nauda patiesībā nopirks.',
  ],

  irrTitle: '8. Reālais ienesīgums',
  irrWhyNot: 'Procents blakus uzrakstam «Ienesīgums (CAGR)» nav galīgā vērtība, dalīta ar kopējām iemaksām. Šis īsceļš izturas pret katru ikmēneša maksājumu tā, it kā tas būtu ieguldīts pirmajā dienā, un tādējādi būtiski novērtē ienesīgumu par zemu — zemāk esošajā piemērā tas rādītu aptuveni 2,6 % nevis 4,71 %.',
  irrBefore: 'Tā vietā kalkulators meklē likmi, pie kuras visa jūsu iemaksātā pašreizējā vērtība ir vienāda ar vērtību, ar kuru jūs beidzat. Katrs maksājums vispirms tiek pārrēķināts šodienas naudā, tāpēc atbilde ir reālais ienesīgums pēc nodokļiem un pēc inflācijas. Ja c(m) ir m mēnesī iemaksātā summa un V — galīgais reālais atlikums, tad mēneša likme x ir šī vienādojuma atrisinājums:',
  irrAfter: 'Šim vienādojumam nav slēgtas formas atrisinājuma, tāpēc to risina skaitliski ar dalīšanas uz pusēm metodi robežās no −50 % līdz +50 % mēnesī, sašaurinot intervālu, līdz tas kļūst mazāks par 10⁻¹². Pēc tam mēneša rezultāts tiek pārrēķināts gada izteiksmē:',
  irrNote: 'Šī ir iekšējā ienesīguma norma — tas pats rādītājs, ar kuru salīdzina ieguldījumus ar neregulārām naudas plūsmām. Tā kā tā ņem vērā, kad veikts katrs maksājums, to var tieši salīdzināt ar publicētu gada ienesīgumu — ar to atšķirību, ka šis jau ir attīrīts no nodokļiem un inflācijas.',

  rangeTitle: '9. Optimistiskais un pesimistiskais diapazons',
  rangeText: 'Ieslēdzot likmju diapazonu, visa simulācija tiek izpildīta trīs reizes: vienreiz ar jūsu minimālo likmi, vienreiz ar sagaidāmo un vienreiz ar maksimālo. Viss pārējais paliek nemainīgs. Šie trīs rezultāti nav varbūtības un nenes nekādu ticamības līmeni; tie vienkārši parāda, ko tas pats plāns dod pie trim dažādiem pieņēmumiem, kurus izvēlējāties pats.',

  exampleTitle: '10. Izrēķināts piemērs',
  exampleIntro: 'Šīs ir lietotnes noklusējuma vērtības. Katru zemāk esošo skaitli var pārbaudīt ar kalkulatoru, un tie precīzi atbilst tam, ko rāda lietotne.',
  exampleGivenTitle: 'Ievaddati',
  exampleGivenLabels: [
    'Sākuma iemaksa',
    'Termiņš',
    'Gada ienesīgums',
    'Kapitalizācija',
    'Iemaksa',
    'Inflācija',
    'Nodoklis',
  ],
  exampleStepsTitle: 'Pirmais gads, mēnesi pa mēnesim',
  exampleSteps: [
    'Mēneša likme: (1 + 0,08 ÷ 1) kāpināts pakāpē 1 ÷ 12, mīnus 1 = 0,00643403.',
    '1. mēnesis: 10 000 × 1,00643403 = 10 064,34, plus 500 iemaksa = 10 564,34.',
    '2. mēnesis: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Turpinot līdz 12. mēnesim, atlikums sasniedz 17 016,94. Gada laikā iemaksājāt 6 000 un sākāt ar 10 000, tātad peļņa ir 17 016,94 − 16 000 = 1 016,94.',
    '15 % nodoklis no šīs peļņas ir 152,54, tiek ieturēts nekavējoties, un otrajā gadā pāriet 16 864,40.',
  ],
  exampleResultTitle: 'Pēc visiem 15 gadiem',
  exampleResultLabels: [
    'Kopā iemaksāts',
    'Nominālā vērtība',
    'Nominālā pēc nodokļiem',
    'Šodienas naudā',
    'Reālais ienesīgums gadā',
  ],
  exampleClosing: 'Uzmanīgi izlasiet pēdējo rindu. Jūs iemaksājat 100 000 un beidzat ar 133 640 pirktspēju. Nominālie 200 525 izskatās pēc divkāršošanās, bet nodoklis no tiem paņem 20 663, bet inflācija vēl 46 222. Tieši šīs plaisas dēļ šis kalkulators pastāv.',

  excludedTitle: '11. Ko modelis neietver',
  excludedIntro: 'Tie ir apzināti izlaidumi. Tos zinot, jūs saprotat, cik lielā mērā rezultātam var uzticēties.',
  excluded: [
    'Brokeru komisijas, platformas maksas, fondu pārvaldīšanas izdevumus un starpību starp pirkšanas un pārdošanas cenu. Ilgā termiņā 1 % gada maksa var apēst piektdaļu no galīgās reālās vērtības.',
    'Progresīvās nodokļu likmes, neapliekamo minimumu, zaudējumu ieskaitu un nodokļu atvieglojumu kontus. Visai peļņai tiek piemērota viena vienota likme.',
    'Valūtas maiņu un kursa svārstības. Visi skaitļi ir tajā vienībā, kuru ievadījāt.',
    'Tirgus svārstīgumu. Ienesīgums tiek pieskaitīts vienmērīgi katru mēnesi, tāpēc ienesīgumu secības risks — tas, kas visvairāk nozīmē ilga ieguldījuma beigās — šeit nav redzams vispār.',
    'Jebkādu jūsu iemaksu palielinājumu laika gaitā, vai tas notiktu līdz ar inflāciju vai līdz ar ienākumiem.',
    'Izņemšanu, pārtraukumus vai priekšlaicīgu iziešanu pirms termiņa beigām.',
    'Dividendes, kas apskatītas atsevišķi no cenas pieauguma; ievadītais ienesīgums tiek uzskatīts par kopējo ienesīgumu.',
    'Visu, kas ir raksturīgs tieši jūsu valstij, jūsu pakalpojuma sniedzējam vai jūsu personīgajiem apstākļiem.',
  ],

  limitsTitle: '12. Šī rīka robežas',
  limits: [
    'Viss šajā lapā ir pieņēmums un nekas vairāk. Modelis uzticīgi aprēķina to skaitļu sekas, kurus ierakstījāt; tam nav viedokļa par to, vai šie skaitļi ir reāli, un nav arī nekāda veida, kā to uzzināt.',
    'Visi rezultāti ir aptuveni. Rādītās vērtības tiek noapaļotas lasāmības dēļ, kamēr iekšējie aprēķini saglabā pilnu precizitāti, tāpēc pārbaude ar roku var atšķirties pēdējā ciparā vai divos.',
    'Kalkulators tiek nodrošināts tāds, kāds tas ir, bez jebkādas garantijas. Pret autoriem vai izdevēju nevar izvirzīt nekādas prasības par jebkādu lēmumu, zaudējumu vai kaitējumu, kas saistīts ar tā lietošanu.',
  ],
};
