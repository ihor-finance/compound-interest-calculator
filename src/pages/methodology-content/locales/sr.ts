import type { MethodologyContent } from '../types';

export const sr: MethodologyContent = {
  title: 'Metodologija obračuna',
  updated: 'Odnosi se na verziju {version}',

  disclaimerTitle: 'Prvo pročitajte ovo',
  disclaimer: [
    'Ova stranica postoji da biste mogli da proverite svaki broj koji kalkulator prikazuje. Navodi sve formule, redosled njihove primene i potpuno razrađen primer koji možete da ponovite olovkom i papirom. Reč je o obrazovnoj informaciji o tome kako alat radi — nije finansijski, investicioni, poreski niti pravni savet, i nije preporuka da bilo šta kupite, prodate ili zadržite.',
    'Sve što kalkulator daje jeste projekcija zasnovana na pretpostavkama koje unesete, a ne prognoza. Pretpostavlja konstantan prinos, konstantnu inflaciju i konstantnu poresku stopu tokom celog perioda. Stvarna tržišta se tako ne ponašaju. Stvarni rezultati će se razlikovati, a na dugim rokovima mogu se razlikovati ogromno.',
    'Brojevi su približni i daju se takvi kakvi jesu, bez ikakve garancije. Svaka odluka koju donesete nakon korišćenja ovog kalkulatora isključivo je vaša, a ni autori ni izdavač ne snose odgovornost za bilo kakav gubitak ili štetu koji iz nje proistekne. Ako vam je novac važan, proverite brojeve sami i posavetujte se sa ovlašćenim stručnjakom u svojoj zemlji.',
  ],

  colSymbol: 'Oznaka',
  colMeaning: 'Značenje',
  colValue: 'Vrednost',
  colFrequency: 'Učestalost',
  colMonthlyAmount: 'Iznos dodat tog meseca',

  inputsTitle: '1. Šta unosite',
  inputsIntro: 'Model koristi isključivo ove vrednosti. Ništa se ne preuzima sa interneta i ništa se ne pretpostavlja umesto vas.',
  inputMeanings: [
    'Početni ulog — iznos sa kojim krećete',
    'Period ulaganja u punim godinama',
    'Očekivani godišnji prinos, u procentima',
    'Broj perioda kapitalizacije godišnje (dnevno = 365, mesečno = 12, kvartalno = 4, polugodišnje = 2, godišnje = 1)',
    'Iznos uplate, dodaje se učestalošću koju izaberete',
    'Očekivana godišnja inflacija, u procentima',
    'Poreska stopa na dobit, u procentima',
  ],

  rateTitle: '2. Pretvaranje vaše stope u mesečnu',
  rateBefore: 'Model napreduje mesec po mesec, pa godišnju stopu koju unesete treba izraziti kao ekvivalentnu mesečnu. Vaša stopa se kapitalizuje n puta godišnje, pa svaki period kapitalizacije donosi r ÷ n, a mesec čini n ÷ 12 takvog perioda.',
  rateAfter: 'Upravo izložilac drži to dvoje usklađenim: kapitalizujete li ovu mesečnu stopu dvanaest puta, dobijate tačno svoju godišnju stopu, pa se brojevi na kraju godine poklapaju sa direktnim godišnjim obračunom. Uz 8 % sa godišnjom kapitalizacijom, mesečna stopa iznosi 0,643403 %.',

  contribTitle: '3. Kako se dodaju uplate',
  contribIntro: 'Pošto model radi na mesečnom nivou, uplate češće od mesečnih preračunavaju se u prosečan mesečni iznos, dok se ređe dodaju samo u onim mesecima u koje zaista padaju.',
  contribFrequencies: [
    'Bez uplata',
    'Dnevno',
    'Nedeljno',
    'Mesečno',
    'Kvartalno',
    'Polugodišnje',
    'Godišnje',
  ],
  contribNote: 'Uprosečavanje dnevnih i nedeljnih uplata drži godišnji zbir tačnim — tokom godine se zaista knjiži 365 dnevnih, odnosno 52 nedeljne uplate — po cenu nekoliko dana kamate tu i tamo. Ta razlika je daleko manja od greške u proceni sopstvenog prinosa.',

  orderTitle: '4. Šta se dešava svakog meseca',
  orderIntro: 'Svaki od 12 × Y meseci prolazi kroz ista tri koraka, ovim redosledom:',
  orderSteps: [
    'Na stanje preneto iz prošlog meseca obračunava se kamata.',
    'Dodaje se vaša uplata za ovaj mesec.',
    'Odbija se porez, ako ga ovog meseca ima.',
  ],
  orderNote: 'Kamata se obračunava pre uplate, što znači da uplata iz ovog meseca u tom istom mesecu ne donosi ništa. To je konvencija anuiteta koji dospeva na kraju perioda i ujedno opreznije rešenje: uplata početkom meseca podigla bi konačni broj za otprilike jedan mesec rasta.',

  taxTitle: '5. Porez',
  taxIntro: 'Porez se plaća samo na dobit, nikada na novac koji ulažete. Kada se naplaćuje, birate vi.',
  taxAnnualLabel: 'Godišnje',
  taxAnnualText: 'Na kraju svakog dvanaestog meseca oporezuje se dobit ostvarena te godine, a porez se odmah skida sa stanja. Dobit je trenutno stanje, minus stanje na početku godine, minus sve što ste tokom godine uplatili. Ako se godina završi gubitkom, dobit je negativna i porez se ne plaća, ali taj gubitak se ne prenosi radi prebijanja u narednim godinama.',
  taxExitLabel: 'Pri isplati',
  taxExitText: 'Ništa se ne odbija sve do poslednjeg meseca, kada se celokupna dobit celog perioda oporezuje odjednom. Dobit je konačno stanje minus sve uplate, uključujući i početni ulog.',
  taxNote: 'Na dugom roku ova dva režima znatno se razlikuju, jer je porez plaćen svake godine novac koji prestaje da se kapitalizuje. U primeru ispod godišnje oporezivanje košta oko 14 093 — vredi uporediti oba pre nego što odlučite koji odgovara vašoj situaciji.',

  inflationTitle: '6. Inflacija',
  inflationIntro: 'Inflacija se ne oduzima od stanja. Primenjuje se na kraju, kao pretvaranje budućeg novca u ono što bi kupio danas:',
  inflationNote: 't je broj proteklih godina, pa vrednost u mesecu m koristi t = m ÷ 12. Zato je «realni» broj uvek niži od nominalnog čim je inflacija iznad nule: novca ima više, ali svaka jedinica kupuje manje.',

  figuresTitle: '7. Četiri glavna broja',
  figuresIntro: 'Polja ispod glavnog rezultata su četiri pogleda na istu simulaciju. Razlikuju se samo po tome koji su odbici već primenjeni.',
  figureNames: [
    'Ukupno uplaćeno',
    'Nominalna vrednost',
    'Nominalno posle poreza',
    'Prilagođeno inflaciji',
  ],
  figureNotes: [
    'Početni ulog plus svaka vaša uplata. Bez ikakvog rasta. To je novac koji odlazi iz vašeg džepa.',
    'Stanje sa rastom, ali bez ijednog odbitka. Najveći i najmanje smislen od četiri — i baš taj broj većina kalkulatora prikazuje samostalno.',
    'Isto stanje, sa porezom skinutim u trenucima koje određuje izabrani režim oporezivanja.',
    'Stanje posle poreza pretvoreno u današnju kupovnu moć. To je istaknuti broj na vrhu aplikacije i jedini koji odgovara na pitanje šta će taj novac zaista kupiti.',
  ],

  irrTitle: '8. Realni prinos',
  irrWhyNot: 'Procenat pored oznake «Profitabilnost (CAGR)» nije konačna vrednost podeljena ukupnim uplatama. Ta prečica tretira svaku mesečnu uplatu kao da je uložena prvog dana, čime ozbiljno potcenjuje prinos — u primeru ispod prikazala bi oko 2,6 % umesto 4,71 %.',
  irrBefore: 'Umesto toga, kalkulator traži stopu pri kojoj je sadašnja vrednost svega što ste uplatili jednaka vrednosti sa kojom završavate. Svaka uplata se najpre pretvara u današnji novac, pa je odgovor realan prinos, posle poreza i posle inflacije. Ako je c(m) iznos uplaćen u mesecu m, a V konačno realno stanje, mesečna stopa x je rešenje jednačine:',
  irrAfter: 'Ta jednačina nema rešenje u zatvorenom obliku, pa se rešava numerički metodom polovljenja između −50 % i +50 % mesečno, sužavajući interval dok ne postane manji od 10⁻¹². Mesečni rezultat se zatim svodi na godišnji nivo:',
  irrNote: 'Reč je o internoj stopi prinosa, istoj meri kojom se porede ulaganja sa neredovnim novčanim tokovima. Pošto uzima u obzir kada je koja uplata izvršena, direktno je uporediva sa objavljenim godišnjim prinosom — s tom razlikom što je ova već očišćena od poreza i inflacije.',

  rangeTitle: '9. Optimistički i pesimistički raspon',
  rangeText: 'Kada uključite raspon stopa, cela simulacija se izvršava tri puta: jednom sa vašom najnižom stopom, jednom sa očekivanom i jednom sa najvišom. Sve ostalo ostaje isto. Ta tri rezultata nisu verovatnoće i ne nose nikakav nivo pouzdanosti; oni samo pokazuju šta isti plan daje pod tri različite pretpostavke koje ste sami izabrali.',

  exampleTitle: '10. Razrađen primer',
  exampleIntro: 'Ovo su podrazumevane vrednosti aplikacije. Svaki broj ispod može se proveriti na digitronu i tačno odgovara onome što aplikacija prikazuje.',
  exampleGivenTitle: 'Ulazni podaci',
  exampleGivenLabels: [
    'Početni ulog',
    'Period',
    'Godišnji prinos',
    'Kapitalizacija',
    'Uplata',
    'Inflacija',
    'Porez',
  ],
  exampleStepsTitle: 'Prva godina, mesec po mesec',
  exampleSteps: [
    'Mesečna stopa: (1 + 0,08 ÷ 1) na stepen 1 ÷ 12, minus 1 = 0,00643403.',
    'Mesec 1: 10 000 × 1,00643403 = 10 064,34, plus uplata od 500 = 10 564,34.',
    'Mesec 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Nastavljajući do 12. meseca stanje dostiže 17 016,94. Tokom godine uplatili ste 6 000 i počeli sa 10 000, pa je dobit 17 016,94 − 16 000 = 1 016,94.',
    'Porez od 15 % na tu dobit iznosi 152,54, odbija se odmah, a u drugu godinu prelazi 16 864,40.',
  ],
  exampleResultTitle: 'Posle svih 15 godina',
  exampleResultLabels: [
    'Ukupno uplaćeno',
    'Nominalna vrednost',
    'Nominalno posle poreza',
    'U današnjem novcu',
    'Realni prinos godišnje',
  ],
  exampleClosing: 'Pročitajte pažljivo poslednji red. Ulažete 100 000 i završavate sa kupovnom moći od 133 640. Nominalnih 200 525 izgleda kao udvostručenje, ali porez od toga uzima 20 663, a inflacija još 46 222. Upravo zbog tog jaza ovaj kalkulator i postoji.',

  excludedTitle: '11. Šta model ne obuhvata',
  excludedIntro: 'Ovo su namerna izostavljanja. Kada ih znate, znate i koliko možete da verujete rezultatu.',
  excluded: [
    'Brokerske provizije, naknade platforme, troškove upravljanja fondom i raspon između kupovne i prodajne cene. Na dugom roku 1 % godišnje naknade može pojesti petinu konačne realne vrednosti.',
    'Progresivne poreske razrede, neoporezivi deo, prebijanje gubitaka i račune sa poreskim olakšicama. Na svu dobit primenjuje se jedna ravna stopa.',
    'Konverziju valuta i kretanje kursa. Svi brojevi su u jedinici koju ste uneli.',
    'Kolebanje tržišta. Prinos se pripisuje ravnomerno svakog meseca, pa rizik redosleda prinosa — onaj koji najviše znači pri kraju dugog ulaganja — ovde uopšte nije vidljiv.',
    'Bilo kakvo povećanje vaših uplata tokom vremena, bilo uz inflaciju bilo uz prihod.',
    'Isplate, pauze ili prevremeni izlazak pre isteka perioda.',
    'Dividende obrađene odvojeno od rasta cene; uneti prinos se smatra ukupnim prinosom.',
    'Sve što je svojstveno vašoj zemlji, vašem pružaocu usluge ili vašim ličnim okolnostima.',
  ],

  limitsTitle: '12. Granice ovog alata',
  limits: [
    'Sve na ovoj stranici je pretpostavka i ništa više. Model verno računa posledice brojeva koje ste ukucali; nema mišljenje o tome da li su ti brojevi realni, niti načina da to sazna.',
    'Svi rezultati su približni. Prikazane vrednosti se zaokružuju radi čitljivosti, dok unutrašnji račun zadržava punu preciznost, pa provera rukom može da se razlikuje u poslednjoj cifri ili dve.',
    'Kalkulator se pruža takav kakav jeste, bez ikakve garancije. Prema autorima ili izdavaču ne može se istaći nikakav zahtev povodom bilo koje odluke, gubitka ili štete povezanih sa njegovim korišćenjem.',
  ],
};
