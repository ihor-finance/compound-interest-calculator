import type { MethodologyContent } from '../types';

export const hr: MethodologyContent = {
  title: 'Metodologija izračuna',
  updated: 'Odnosi se na verziju {version}',

  disclaimerTitle: 'Prvo pročitajte ovo',
  disclaimer: [
    'Ova stranica postoji kako biste mogli provjeriti svaki broj koji kalkulator prikazuje. Donosi sve formule, redoslijed njihove primjene i potpuno razrađen primjer koji možete ponoviti olovkom i papirom. Riječ je o obrazovnoj informaciji o tome kako alat radi — nije financijski, investicijski, porezni ni pravni savjet i nije preporuka da bilo što kupite, prodate ili zadržite.',
    'Sve što kalkulator daje projekcija je na temelju pretpostavki koje unesete, a ne prognoza. Pretpostavlja stalan prinos, stalnu inflaciju i stalnu poreznu stopu kroz cijelo razdoblje. Stvarna se tržišta tako ne ponašaju. Stvarni će se rezultati razlikovati, a na dugim rokovima mogu se razlikovati golemo.',
    'Brojevi su približni i pružaju se onakvi kakvi jesu, bez ikakvog jamstva. Svaka odluka koju donesete nakon korištenja ovog kalkulatora isključivo je vaša, a ni autori ni izdavač ne snose odgovornost za gubitak ili štetu koji iz nje proiziđu. Ako vam je novac važan, provjerite brojeve sami i posavjetujte se s ovlaštenim stručnjakom u svojoj zemlji.',
  ],

  colSymbol: 'Oznaka',
  colMeaning: 'Značenje',
  colValue: 'Vrijednost',
  colFrequency: 'Učestalost',
  colMonthlyAmount: 'Iznos dodan tog mjeseca',

  inputsTitle: '1. Što unosite',
  inputsIntro: 'Model koristi isključivo ove vrijednosti. Ništa se ne preuzima s interneta i ništa se ne pretpostavlja umjesto vas.',
  inputMeanings: [
    'Početni ulog — iznos s kojim krećete',
    'Razdoblje ulaganja u punim godinama',
    'Očekivani godišnji prinos, u postotku',
    'Broj razdoblja kapitalizacije godišnje (dnevno = 365, mjesečno = 12, tromjesečno = 4, polugodišnje = 2, godišnje = 1)',
    'Iznos uplate, dodaje se učestalošću koju odaberete',
    'Očekivana godišnja inflacija, u postotku',
    'Porezna stopa na dobit, u postotku',
  ],

  rateTitle: '2. Pretvaranje vaše stope u mjesečnu',
  rateBefore: 'Model napreduje mjesec po mjesec, pa godišnju stopu koju unesete treba izraziti kao istovrijednu mjesečnu. Vaša se stopa kapitalizira n puta godišnje, pa svako razdoblje kapitalizacije donosi r ÷ n, a mjesec čini n ÷ 12 takvog razdoblja.',
  rateAfter: 'Upravo eksponent drži to dvoje usklađenim: kapitalizirate li ovu mjesečnu stopu dvanaest puta, dobivate točno svoju godišnju stopu, pa se brojevi na kraju godine podudaraju s izravnim godišnjim izračunom. Uz 8 % s godišnjom kapitalizacijom, mjesečna stopa iznosi 0,643403 %.',

  contribTitle: '3. Kako se dodaju uplate',
  contribIntro: 'Budući da model radi na mjesečnoj razini, uplate češće od mjesečnih preračunavaju se u prosječan mjesečni iznos, dok se rjeđe dodaju samo u onim mjesecima u koje doista padaju.',
  contribFrequencies: [
    'Bez uplata',
    'Dnevno',
    'Tjedno',
    'Mjesečno',
    'Tromjesečno',
    'Polugodišnje',
    'Godišnje',
  ],
  contribNote: 'Prosječivanje dnevnih i tjednih uplata drži godišnji zbroj točnim — tijekom godine doista se knjiži 365 dnevnih, odnosno 52 tjedne uplate — po cijenu nekoliko dana kamata tu i tamo. Ta je razlika daleko manja od pogreške u procjeni vlastitog prinosa.',

  orderTitle: '4. Što se događa svakog mjeseca',
  orderIntro: 'Svaki od 12 × Y mjeseci prolazi kroz ista tri koraka, ovim redoslijedom:',
  orderSteps: [
    'Na stanje preneseno iz prošlog mjeseca obračunava se kamata.',
    'Dodaje se vaša uplata za ovaj mjesec.',
    'Odbija se porez, ako ga ovog mjeseca ima.',
  ],
  orderNote: 'Kamata se obračunava prije uplate, što znači da uplata iz ovog mjeseca u tom istom mjesecu ne donosi ništa. To je konvencija anuiteta koji dospijeva na kraju razdoblja i ujedno opreznije rješenje: uplata početkom mjeseca podigla bi konačni broj za otprilike jedan mjesec rasta.',

  taxTitle: '5. Porez',
  taxIntro: 'Porez se plaća samo na dobit, nikada na novac koji ulažete. Kada se naplaćuje, birate vi.',
  taxAnnualLabel: 'Godišnje',
  taxAnnualText: 'Na kraju svakog dvanaestog mjeseca oporezuje se dobit ostvarena te godine, a porez se odmah skida sa stanja. Dobit je trenutačno stanje, minus stanje na početku godine, minus sve što ste tijekom godine uplatili. Ako godina završi gubitkom, dobit je negativna i porez se ne plaća, ali se taj gubitak ne prenosi radi prijeboja u sljedećim godinama.',
  taxExitLabel: 'Pri isplati',
  taxExitText: 'Ništa se ne odbija sve do posljednjeg mjeseca, kada se cjelokupna dobit cijelog razdoblja oporezuje odjednom. Dobit je konačno stanje minus sve uplate, uključujući i početni ulog.',
  taxNote: 'Na dugom roku ova se dva režima znatno razlikuju, jer je porez plaćen svake godine novac koji prestaje raditi na složenu kamatu. U primjeru ispod godišnje oporezivanje stoji oko 14 093 — vrijedi usporediti oba prije nego što odlučite koji odgovara vašoj situaciji.',

  inflationTitle: '6. Inflacija',
  inflationIntro: 'Inflacija se ne oduzima od stanja. Primjenjuje se na kraju, kao pretvaranje budućeg novca u ono što bi kupio danas:',
  inflationNote: 't je broj proteklih godina, pa vrijednost u mjesecu m koristi t = m ÷ 12. Zato je «realni» broj uvijek niži od nominalnog čim je inflacija iznad nule: novca ima više, ali svaka jedinica kupuje manje.',

  figuresTitle: '7. Četiri glavna broja',
  figuresIntro: 'Polja ispod glavnog rezultata četiri su pogleda na istu simulaciju. Razlikuju se samo po tome koji su odbici već primijenjeni.',
  figureNames: [
    'Ukupno uplaćeno',
    'Nominalna vrijednost',
    'Nominalno nakon poreza',
    'Prilagođeno inflaciji',
  ],
  figureNotes: [
    'Početni ulog plus svaka vaša uplata. Bez ikakvog rasta. To je novac koji odlazi iz vašeg džepa.',
    'Stanje s rastom, ali bez ijednog odbitka. Najveći i najmanje smislen od četiri — i baš taj broj većina kalkulatora prikazuje samostalno.',
    'Isto stanje, s porezom skinutim u trenucima koje određuje odabrani režim oporezivanja.',
    'Stanje nakon poreza pretvoreno u današnju kupovnu moć. To je istaknuti broj na vrhu aplikacije i jedini koji odgovara na pitanje što će taj novac doista kupiti.',
  ],

  irrTitle: '8. Realni prinos',
  irrWhyNot: 'Postotak pokraj oznake «Profitabilnost (CAGR)» nije konačna vrijednost podijeljena ukupnim uplatama. Ta prečica tretira svaku mjesečnu uplatu kao da je uložena prvog dana, čime ozbiljno podcjenjuje prinos — u primjeru ispod prikazala bi oko 2,6 % umjesto 4,71 %.',
  irrBefore: 'Umjesto toga kalkulator traži stopu pri kojoj je sadašnja vrijednost svega što ste uplatili jednaka vrijednosti s kojom završavate. Svaka se uplata najprije pretvara u današnji novac, pa je odgovor realni prinos, nakon poreza i nakon inflacije. Ako je c(m) iznos uplaćen u mjesecu m, a V konačno realno stanje, mjesečna stopa x rješenje je jednadžbe:',
  irrAfter: 'Ta jednadžba nema rješenje u zatvorenom obliku, pa se rješava numerički metodom raspolavljanja između −50 % i +50 % mjesečno, sužavajući interval dok ne postane manji od 10⁻¹². Mjesečni se rezultat zatim svodi na godišnju razinu:',
  irrNote: 'Riječ je o internoj stopi povrata, istoj mjeri kojom se uspoređuju ulaganja s neredovitim novčanim tokovima. Budući da uzima u obzir kada je koja uplata izvršena, izravno je usporediva s objavljenim godišnjim prinosom — s tom razlikom što je ova već očišćena od poreza i inflacije.',

  rangeTitle: '9. Optimistični i pesimistični raspon',
  rangeText: 'Kada uključite raspon stopa, cijela se simulacija izvodi tri puta: jednom s vašom najnižom stopom, jednom s očekivanom i jednom s najvišom. Sve ostalo ostaje isto. Ta tri rezultata nisu vjerojatnosti i ne nose nikakvu razinu pouzdanosti; oni samo pokazuju što isti plan daje pod tri različite pretpostavke koje ste sami odabrali.',

  exampleTitle: '10. Razrađen primjer',
  exampleIntro: 'Ovo su zadane vrijednosti aplikacije. Svaki broj ispod može se provjeriti na kalkulatoru i točno odgovara onome što aplikacija prikazuje.',
  exampleGivenTitle: 'Ulazni podaci',
  exampleGivenLabels: [
    'Početni ulog',
    'Razdoblje',
    'Godišnji prinos',
    'Kapitalizacija',
    'Uplata',
    'Inflacija',
    'Porez',
  ],
  exampleStepsTitle: 'Prva godina, mjesec po mjesec',
  exampleSteps: [
    'Mjesečna stopa: (1 + 0,08 ÷ 1) na potenciju 1 ÷ 12, minus 1 = 0,00643403.',
    'Mjesec 1: 10 000 × 1,00643403 = 10 064,34, plus uplata od 500 = 10 564,34.',
    'Mjesec 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Nastavimo li do 12. mjeseca, stanje doseže 17 016,94. Tijekom godine uplatili ste 6 000 i počeli s 10 000, pa je dobit 17 016,94 − 16 000 = 1 016,94.',
    'Porez od 15 % na tu dobit iznosi 152,54, odbija se odmah, a u drugu godinu prelazi 16 864,40.',
  ],
  exampleResultTitle: 'Nakon svih 15 godina',
  exampleResultLabels: [
    'Ukupno uplaćeno',
    'Nominalna vrijednost',
    'Nominalno nakon poreza',
    'U današnjem novcu',
    'Realni prinos godišnje',
  ],
  exampleClosing: 'Pročitajte pozorno posljednji redak. Ulažete 100 000 i završavate s kupovnom moći od 133 640. Nominalnih 200 525 izgleda kao udvostručenje, ali porez od toga uzima 20 663, a inflacija još 46 222. Upravo zbog tog jaza ovaj kalkulator i postoji.',

  excludedTitle: '11. Što model ne obuhvaća',
  excludedIntro: 'Ovo su namjerna izostavljanja. Kada ih znate, znate i koliko možete vjerovati rezultatu.',
  excluded: [
    'Brokerske provizije, naknade platforme, troškove upravljanja fondom i raspon između kupovne i prodajne cijene. Na dugom roku 1 % godišnje naknade može pojesti petinu konačne realne vrijednosti.',
    'Progresivne porezne razrede, neoporezivi dio, prijeboj gubitaka i račune s poreznim olakšicama. Na svu se dobit primjenjuje jedna ravna stopa.',
    'Konverziju valuta i kretanje tečaja. Svi su brojevi u jedinici koju ste unijeli.',
    'Kolebanje tržišta. Prinos se pripisuje ravnomjerno svakog mjeseca, pa rizik redoslijeda prinosa — onaj koji najviše znači pri kraju dugog ulaganja — ovdje uopće nije vidljiv.',
    'Bilo kakvo povećanje vaših uplata tijekom vremena, bilo uz inflaciju bilo uz prihod.',
    'Isplate, stanke ili prijevremeni izlazak prije isteka razdoblja.',
    'Dividende obrađene odvojeno od rasta cijene; uneseni se prinos smatra ukupnim prinosom.',
    'Sve što je svojstveno vašoj zemlji, vašem pružatelju usluge ili vašim osobnim okolnostima.',
  ],

  limitsTitle: '12. Granice ovog alata',
  limits: [
    'Sve na ovoj stranici pretpostavka je i ništa više. Model vjerno računa posljedice brojeva koje ste upisali; nema mišljenje o tome jesu li ti brojevi realni, niti načina da to sazna.',
    'Svi su rezultati približni. Prikazane se vrijednosti zaokružuju radi čitljivosti, dok unutarnji račun zadržava punu preciznost, pa provjera rukom može odstupati u posljednjoj znamenki ili dvije.',
    'Kalkulator se pruža onakav kakav jest, bez ikakvog jamstva. Prema autorima ili izdavaču ne može se istaknuti nikakav zahtjev povodom bilo koje odluke, gubitka ili štete povezanih s njegovim korištenjem.',
  ],
};
