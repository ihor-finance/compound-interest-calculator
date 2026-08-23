import type { MethodologyContent } from '../types';

export const ro: MethodologyContent = {
  title: 'Metodologia de calcul',
  updated: 'Se aplică versiunii {version}',

  disclaimerTitle: 'Citiți mai întâi acest lucru',
  disclaimer: [
    'Această pagină există pentru ca dumneavoastră să puteți verifica fiecare cifră afișată de calculator. Prezintă toate formulele, ordinea în care se aplică și un exemplu rezolvat integral, pe care îl puteți reface cu creionul pe hârtie. Este o informație explicativă despre modul în care funcționează instrumentul — nu este consultanță financiară, de investiții, fiscală sau juridică și nu este o recomandare de a cumpăra, vinde ori păstra ceva.',
    'Tot ce produce calculatorul este o proiecție pornind de la ipotezele pe care le introduceți, nu o prognoză. Presupune un randament constant, o inflație constantă și o cotă de impozit constantă pe toată perioada. Piețele reale nu se comportă așa. Rezultatele efective vor diferi, iar pe termen lung pot diferi enorm.',
    'Cifrele sunt aproximative și sunt oferite ca atare, fără nicio garanție. Orice decizie pe care o luați după ce ați folosit acest calculator vă aparține în întregime, iar nici autorii, nici editorul nu își asumă răspunderea pentru vreo pierdere sau pagubă care decurge din ea. Dacă banii contează pentru dumneavoastră, verificați singur cifrele și discutați cu un consultant autorizat din țara dumneavoastră.',
  ],

  colSymbol: 'Simbol',
  colMeaning: 'Semnificație',
  colValue: 'Valoare',
  colFrequency: 'Frecvență',
  colMonthlyAmount: 'Suma adăugată în luna respectivă',

  inputsTitle: '1. Ce introduceți',
  inputsIntro: 'Acestea sunt singurele valori folosite de model. Nu se descarcă nimic de pe internet și nu se presupune nimic în locul dumneavoastră.',
  inputMeanings: [
    'Depunerea inițială — suma cu care porniți',
    'Perioada de investiție, în ani întregi',
    'Randamentul anual așteptat, în procente',
    'Numărul de capitalizări pe an (zilnic = 365, lunar = 12, trimestrial = 4, semestrial = 2, anual = 1)',
    'Suma contribuției, adăugată cu frecvența pe care o alegeți',
    'Inflația anuală așteptată, în procente',
    'Cota de impozit pe câștig, în procente',
  ],

  rateTitle: '2. Transformarea ratei în rată lunară',
  rateBefore: 'Modelul avansează lună de lună, așa că rata anuală introdusă trebuie exprimată ca rată lunară echivalentă. Rata se capitalizează de n ori pe an, deci fiecare perioadă de capitalizare aduce r ÷ n, iar o lună reprezintă n ÷ 12 dintr-o astfel de perioadă.',
  rateAfter: 'Exponentul este cel care le păstrează coerente: capitalizând această rată lunară de douăsprezece ori se obține exact rata anuală, astfel încât cifrele de la final de an coincid cu un calcul anual direct. La 8 % cu capitalizare anuală, rata lunară este 0,643403 %.',

  contribTitle: '3. Cum se adaugă contribuțiile',
  contribIntro: 'Deoarece modelul lucrează lunar, contribuțiile mai dese decât lunar se transformă într-o sumă lunară medie, iar cele mai rare se adaugă doar în lunile în care cad efectiv.',
  contribFrequencies: [
    'Fără contribuții',
    'Zilnic',
    'Săptămânal',
    'Lunar',
    'Trimestrial',
    'Semestrial',
    'Anual',
  ],
  contribNote: 'Medierea contribuțiilor zilnice și săptămânale păstrează totalul anual exact — 365 de plăți zilnice și 52 săptămânale sunt exact ce se creditează într-un an — cu prețul câtorva zile de dobândă ici și colo. Diferența este cu mult mai mică decât eroarea din estimarea propriului randament.',

  orderTitle: '4. Ce se întâmplă în fiecare lună',
  orderIntro: 'Fiecare dintre cele 12 × Y luni parcurge aceiași trei pași, în această ordine:',
  orderSteps: [
    'Se aplică dobânda asupra soldului reportat din luna precedentă.',
    'Se adaugă contribuția dumneavoastră pentru luna curentă.',
    'Se scade impozitul, dacă este datorat în luna aceasta.',
  ],
  orderNote: 'Dobânda se aplică înaintea contribuției, ceea ce înseamnă că suma depusă în luna curentă nu produce nimic în acea lună. Este convenția anuității posticipate și totodată alegerea prudentă: o plată la începutul lunii ar ridica cifra finală cu aproximativ o lună de creștere.',

  taxTitle: '5. Impozitul',
  taxIntro: 'Impozitul se aplică doar câștigului, niciodată banilor pe care îi depuneți. Când se percepe alegeți dumneavoastră.',
  taxAnnualLabel: 'Anual',
  taxAnnualText: 'La sfârșitul fiecărei a douăsprezecea luni, câștigul obținut în anul respectiv se impozitează, iar impozitul se scade imediat din sold. Câștigul este soldul curent, minus soldul de la începutul anului, minus tot ce ați contribuit în cursul anului. Dacă anul se încheie în pierdere, câștigul este negativ și nu se percepe impozit, dar acea pierdere nu se reportează pentru a compensa anii următori.',
  taxExitLabel: 'La retragere',
  taxExitText: 'Nu se scade nimic până în ultima lună, când întregul câștig al perioadei este impozitat dintr-o dată. Câștigul este soldul final minus toate contribuțiile, inclusiv depunerea inițială.',
  taxNote: 'Pe termen lung cele două variante diferă considerabil, pentru că impozitul plătit anual este bani care încetează să se capitalizeze. În exemplul de mai jos, impozitarea anuală costă circa 14 093 — merită comparate ambele înainte de a decide care se potrivește situației dumneavoastră.',

  inflationTitle: '6. Inflația',
  inflationIntro: 'Inflația nu se scade din sold. Se aplică la final, ca o transformare a banilor viitori în ceea ce ar cumpăra astăzi:',
  inflationNote: 't este numărul de ani scurși, deci o valoare din luna m folosește t = m ÷ 12. De aceea cifra «reală» este întotdeauna mai mică decât cea nominală atunci când inflația depășește zero: banii cresc, dar fiecare unitate cumpără mai puțin.',

  figuresTitle: '7. Cele patru cifre principale',
  figuresIntro: 'Casetele de sub rezultatul principal sunt patru perspective asupra aceleiași simulări. Diferă doar prin deducerile deja aplicate.',
  figureNames: [
    'Total contribuit',
    'Valoare nominală',
    'Nominal după impozit',
    'Ajustat cu inflația',
  ],
  figureNotes: [
    'Depunerea inițială plus fiecare contribuție a dumneavoastră. Fără nicio creștere. Aceștia sunt banii care ies din buzunarul dumneavoastră.',
    'Soldul cu creșterea aplicată, dar fără nicio deducere. Cea mai mare și cea mai puțin relevantă dintre cele patru — exact cifra pe care majoritatea calculatoarelor o afișează singură.',
    'Același sold, cu impozitul scăzut la momentele stabilite de modul de impozitare ales.',
    'Soldul după impozit, transformat în puterea de cumpărare de astăzi. Este cifra evidențiată în partea de sus a aplicației și singura care răspunde la întrebarea ce vor cumpăra efectiv acei bani.',
  ],

  irrTitle: '8. Randamentul real',
  irrWhyNot: 'Procentul de lângă «Randament (CAGR)» nu este valoarea finală împărțită la totalul contribuțiilor. Această scurtătură tratează fiecare plată lunară ca și cum ar fi fost investită în prima zi, subestimând grav randamentul — în exemplul de mai jos ar arăta aproximativ 2,6 % în loc de 4,71 %.',
  irrBefore: 'În schimb, calculatorul caută rata la care valoarea actuală a tot ce ați depus este egală cu valoarea cu care rămâneți. Fiecare plată este mai întâi transformată în bani de astăzi, așa că răspunsul este un randament real, după impozit și după inflație. Cu c(m) suma depusă în luna m și V soldul real final, rata lunară x este soluția ecuației:',
  irrAfter: 'Ecuația nu are soluție în formă închisă, așa că se rezolvă numeric prin bisecție între −50 % și +50 % pe lună, îngustând intervalul până când devine mai mic decât 10⁻¹². Rezultatul lunar se transformă apoi în rată anuală:',
  irrNote: 'Aceasta este rata internă de rentabilitate, aceeași măsură folosită pentru a compara investiții cu fluxuri de numerar neregulate. Deoarece ține cont de momentul fiecărei plăți, se poate compara direct cu un randament anual anunțat — cu diferența că acesta este deja net de impozit și de inflație.',

  rangeTitle: '9. Intervalul optimist și pesimist',
  rangeText: 'Când activați intervalul de rate, întreaga simulare rulează de trei ori: o dată cu rata minimă, o dată cu cea așteptată și o dată cu cea maximă. Restul rămâne identic. Cele trei rezultate nu sunt probabilități și nu au niciun nivel de încredere asociat; ele arată pur și simplu ce produce același plan în trei ipoteze diferite pe care le-ați ales dumneavoastră.',

  exampleTitle: '10. Un exemplu rezolvat',
  exampleIntro: 'Acestea sunt valorile implicite ale aplicației. Fiecare cifră de mai jos poate fi refăcută pe un calculator de buzunar și corespunde exact cu ceea ce afișează aplicația.',
  exampleGivenTitle: 'Date de intrare',
  exampleGivenLabels: [
    'Depunerea inițială',
    'Perioada',
    'Randament anual',
    'Capitalizare',
    'Contribuție',
    'Inflație',
    'Impozit',
  ],
  exampleStepsTitle: 'Primul an, lună de lună',
  exampleSteps: [
    'Rata lunară: (1 + 0,08 ÷ 1) la puterea 1 ÷ 12, minus 1 = 0,00643403.',
    'Luna 1: 10 000 × 1,00643403 = 10 064,34, plus contribuția de 500 = 10 564,34.',
    'Luna 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Continuând până în luna 12, soldul ajunge la 17 016,94. În cursul anului ați contribuit cu 6 000 și ați început cu 10 000, deci câștigul este 17 016,94 − 16 000 = 1 016,94.',
    'Impozitul de 15 % din acest câștig este 152,54, scăzut imediat, rămânând 16 864,40 pentru anul al doilea.',
  ],
  exampleResultTitle: 'După toți cei 15 ani',
  exampleResultLabels: [
    'Total contribuit',
    'Valoare nominală',
    'Nominal după impozit',
    'În bani de astăzi',
    'Randament real pe an',
  ],
  exampleClosing: 'Citiți cu atenție ultimul rând. Depuneți 100 000 și încheiați cu puterea de cumpărare a 133 640. Cei 200 525 nominali par o dublare, dar impozitul ia din ei 20 663, iar inflația încă 46 222. Tocmai această diferență este motivul pentru care există acest calculator.',

  excludedTitle: '11. Ce nu include modelul',
  excludedIntro: 'Sunt omisiuni deliberate. Cunoscându-le, știți cât de mult vă puteți încrede în rezultat.',
  excluded: [
    'Comisioanele de brokeraj, taxele de platformă, cheltuielile de administrare a fondurilor și diferența dintre prețul de cumpărare și cel de vânzare. Pe termen lung, un comision anual de 1 % poate consuma o cincime din valoarea reală finală.',
    'Tranșele de impozitare progresivă, deducerile personale, compensarea pierderilor și conturile cu avantaje fiscale. Tuturor câștigurilor li se aplică o singură cotă fixă.',
    'Conversia valutară și mișcarea cursului de schimb. Toate cifrele sunt în unitatea pe care ați introdus-o.',
    'Volatilitatea pieței. Randamentul se aplică uniform în fiecare lună, așa că riscul legat de ordinea randamentelor, cel mai important spre finalul unei investiții lungi, este invizibil aici.',
    'Orice creștere a contribuțiilor dumneavoastră în timp, fie odată cu inflația, fie odată cu venitul.',
    'Retragerile, pauzele sau ieșirea anticipată înainte de finalul perioadei.',
    'Dividendele tratate separat de creșterea prețului; randamentul introdus este considerat randament total.',
    'Orice ține în mod specific de țara dumneavoastră, de furnizorul dumneavoastră sau de situația personală.',
  ],

  limitsTitle: '12. Limitele acestui instrument',
  limits: [
    'Tot ce se află pe această pagină este o ipoteză și nimic mai mult. Modelul calculează fidel consecințele cifrelor pe care le-ați scris; nu are nicio opinie despre cât de realiste sunt acele cifre și niciun mijloc de a afla.',
    'Toate rezultatele sunt aproximative. Valorile afișate sunt rotunjite pentru lizibilitate, în timp ce calculul intern păstrează precizia completă, așa că o verificare manuală poate diferi la ultima cifră sau la ultimele două.',
    'Calculatorul este oferit ca atare, fără nicio garanție. Nu se poate formula nicio pretenție împotriva autorilor sau a editorului pentru vreo decizie, pierdere sau pagubă legată de utilizarea lui.',
  ],
};
