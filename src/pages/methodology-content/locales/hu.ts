import type { MethodologyContent } from '../types';

export const hu: MethodologyContent = {
  title: 'Számítási módszertan',
  updated: 'A {version} verzióra vonatkozik',

  disclaimerTitle: 'Ezt olvassa el először',
  disclaimer: [
    'Ez az oldal azért van, hogy minden számot ellenőrizni tudjon, amit a kalkulátor mutat. Felsorolja az összes képletet, alkalmazásuk sorrendjét, valamint egy teljesen végigszámolt példát, amelyet papíron, ceruzával is meg tud ismételni. Ez ismeretterjesztő tájékoztatás az eszköz működéséről — nem pénzügyi, befektetési, adó- vagy jogi tanácsadás, és nem javaslat bárminek a megvételére, eladására vagy tartására.',
    'Minden, amit a kalkulátor kiad, az Ön által megadott feltevésekből készült előrevetítés, nem pedig előrejelzés. Végig állandó hozamot, állandó inflációt és állandó adókulcsot feltételez. A valódi piacok nem így viselkednek. A tényleges eredmények eltérnek majd, hosszú távon akár rendkívüli mértékben.',
    'A számok közelítő értékek, és mindenféle jótállás nélkül, jelen állapotukban érhetők el. Minden döntés, amelyet a kalkulátor használata után hoz, kizárólag az Öné, és sem a szerzők, sem a kiadó nem vállal felelősséget az ebből eredő veszteségért vagy kárért. Ha a pénz számít Önnek, számoljon utána maga, és beszéljen egy szakképzett tanácsadóval a saját országában.',
  ],

  colSymbol: 'Jelölés',
  colMeaning: 'Jelentés',
  colValue: 'Érték',
  colFrequency: 'Gyakoriság',
  colMonthlyAmount: 'Az adott hónapban hozzáadott összeg',

  inputsTitle: '1. Amit Ön megad',
  inputsIntro: 'A modell kizárólag ezeket az értékeket használja. Semmit nem tölt le az internetről, és semmit nem feltételez Ön helyett.',
  inputMeanings: [
    'Kezdő befizetés — az az összeg, amellyel indul',
    'A befektetés futamideje egész években',
    'Várt éves hozam, százalékban',
    'Kamatperiódusok száma évente (napi = 365, havi = 12, negyedéves = 4, féléves = 2, éves = 1)',
    'A rendszeres befizetés összege, az Ön által választott gyakorisággal',
    'Várt éves infláció, százalékban',
    'A nyereséget terhelő adó kulcsa, százalékban',
  ],

  rateTitle: '2. A kamatláb átszámítása havira',
  rateBefore: 'A modell hónapról hónapra halad, ezért a megadott éves kamatlábat egyenértékű havi kamatlábként kell kifejezni. Az Ön kamatlába évente n alkalommal tőkésedik, tehát minden kamatperiódus r ÷ n hozamot ad, egy hónap pedig egy ilyen periódus n ÷ 12 része.',
  rateAfter: 'A kitevő tartja összhangban a kettőt: ha ezt a havi kamatlábat tizenkétszer tőkésítjük, pontosan az éves kamatlábat kapjuk vissza, így az évvégi számok megegyeznek a közvetlen éves számítással. Évi 8 % éves tőkésítés mellett a havi kamatláb 0,643403 %.',

  contribTitle: '3. Hogyan adódnak hozzá a befizetések',
  contribIntro: 'Mivel a modell havi alapon dolgozik, a havinál gyakoribb befizetéseket átlagos havi összeggé alakítja, a ritkábbakat pedig csak abban a hónapban adja hozzá, amelyre ténylegesen esnek.',
  contribFrequencies: [
    'Nincs befizetés',
    'Naponta',
    'Hetente',
    'Havonta',
    'Negyedévente',
    'Félévente',
    'Évente',
  ],
  contribNote: 'A napi és heti befizetések átlagolása pontosan tartja az éves összeget — egy év alatt valóban 365 napi, illetve 52 heti befizetés érkezik —, cserébe helyenként néhány nap kamata elcsúszik. Ez a különbség sokkal kisebb, mint a saját hozam megbecsülésében rejlő hiba.',

  orderTitle: '4. Mi történik minden hónapban',
  orderIntro: 'A 12 × Y hónap mindegyike ugyanazon a három lépésen megy át, ebben a sorrendben:',
  orderSteps: [
    'Kamat íródik jóvá az előző hónapról áthozott egyenlegre.',
    'Hozzáadódik az adott havi befizetése.',
    'Levonásra kerül az adó, ha ebben a hónapban esedékes.',
  ],
  orderNote: 'A kamat a befizetés előtt íródik jóvá, vagyis az e havi befizetés ebben a hónapban még semmit nem hoz. Ez az utólagos járadék szokásos feltevése, egyben az óvatosabb választás: a hónap elején teljesített befizetés nagyjából egy hónapnyi növekedéssel emelné a végösszeget.',

  taxTitle: '5. Adó',
  taxIntro: 'Az adó kizárólag a nyereséget terheli, a befizetett tőkét soha. Azt, hogy mikor vonják le, Ön választja meg.',
  taxAnnualLabel: 'Évente',
  taxAnnualText: 'Minden tizenkettedik hónap végén az abban az évben elért nyereség adózik, és az adó azonnal kikerül az egyenlegből. A nyereség: a jelenlegi egyenleg, mínusz az év eleji egyenleg, mínusz minden, amit az év során befizetett. Ha az év veszteséggel zárul, a nyereség negatív és nincs adó, de ez a veszteség nem vihető át a későbbi évek beszámítására.',
  taxExitLabel: 'Kiszálláskor',
  taxExitText: 'Az utolsó hónapig semmit nem vonnak le; akkor a teljes futamidő teljes nyeresége egy összegben adózik. A nyereség: a záró egyenleg mínusz az összes befizetés, beleértve a kezdő befizetést is.',
  taxNote: 'Hosszú távon a két megoldás jelentősen eltér, mert az évente megfizetett adó olyan pénz, amely megszűnik kamatozni. Az alábbi példában az éves adózás nagyjából 14 093-ba kerül — érdemes összevetni a kettőt, mielőtt eldönti, melyik illik a helyzetéhez.',

  inflationTitle: '6. Infláció',
  inflationIntro: 'Az inflációt nem vonjuk le az egyenlegből. A végén alkalmazzuk, a jövőbeli pénz mai vásárlóértékre való átszámításaként:',
  inflationNote: 't az eltelt évek száma, így az m-edik hónap értéke t = m ÷ 12 értékkel számol. Ezért van, hogy a «reál» szám mindig alacsonyabb a nominálisnál, amint az infláció nullánál nagyobb: a pénz nő, de minden egysége kevesebbet vásárol.',

  figuresTitle: '7. A négy fő szám',
  figuresIntro: 'A fő eredmény alatti négy mező ugyanannak a szimulációnak négy nézete. Csak abban különböznek, hogy mely levonások szerepelnek már bennük.',
  figureNames: [
    'Összes befizetés',
    'Nominális érték',
    'Nominális adózás után',
    'Inflációval korrigálva',
  ],
  figureNotes: [
    'A kezdő befizetés és minden további befizetése. Növekedés nélkül. Ez az a pénz, amely kikerül a zsebéből.',
    'Az egyenleg a növekedéssel, de minden levonás nélkül. A négy közül a legnagyobb és a legkevésbé beszédes — épp ezt a számot mutatja önmagában a legtöbb kalkulátor.',
    'Ugyanaz az egyenleg, a választott adózási móddal meghatározott időpontokban levont adóval.',
    'Az adózás utáni egyenleg mai vásárlóerőre átszámítva. Ez az alkalmazás tetején kiemelt szám, és az egyetlen, amely megválaszolja, mit vásárol majd ténylegesen ez a pénz.',
  ],

  irrTitle: '8. A reálhozam',
  irrWhyNot: 'A «Hozam (CAGR)» melletti százalék nem a végérték osztva az összes befizetéssel. Ez a rövidítés minden havi befizetést úgy kezel, mintha az első napon fektették volna be, és ezzel súlyosan alábecsüli a hozamot — az alábbi példában nagyjából 2,6 %-ot mutatna 4,71 % helyett.',
  irrBefore: 'A kalkulátor ehelyett azt a kamatlábat keresi meg, amely mellett minden befizetésének jelenértéke megegyezik azzal az értékkel, amellyel a végén rendelkezik. Minden befizetést először mai pénzre számít át, így a válasz reálhozam, adózás és infláció után. Ha c(m) az m-edik hónapban befizetett összeg, V pedig a záró reálegyenleg, akkor az x havi kamatláb a következő egyenlet megoldása:',
  irrAfter: 'Ennek az egyenletnek nincs zárt alakú megoldása, ezért numerikusan, felezéssel oldjuk meg havi −50 % és +50 % között, addig szűkítve az intervallumot, amíg 10⁻¹²-nél kisebb nem lesz. A havi eredményt ezután évesítjük:',
  irrNote: 'Ez a belső megtérülési ráta, ugyanaz a mérőszám, amellyel a szabálytalan pénzáramlású befektetéseket hasonlítják össze. Mivel figyelembe veszi, mikor történt az egyes befizetés, közvetlenül összevethető egy meghirdetett éves hozammal — azzal a különbséggel, hogy ez már adó és infláció után értendő.',

  rangeTitle: '9. Az optimista és pesszimista sáv',
  rangeText: 'Ha bekapcsolja a hozamsávot, a teljes szimuláció háromszor fut le: egyszer a minimális, egyszer a várt, egyszer pedig a maximális hozammal. Minden más változatlan marad. A három eredmény nem valószínűség, és nem tartozik hozzá megbízhatósági szint; egyszerűen azt mutatják, mit ad ugyanaz a terv három különböző, Ön által választott feltevés mellett.',

  exampleTitle: '10. Egy végigszámolt példa',
  exampleIntro: 'Ezek az alkalmazás alapértelmezett értékei. Az alábbi minden szám kiszámolható zsebszámológéppel, és pontosan megegyezik azzal, amit az alkalmazás mutat.',
  exampleGivenTitle: 'Bemenő adatok',
  exampleGivenLabels: [
    'Kezdő befizetés',
    'Futamidő',
    'Éves hozam',
    'Tőkésítés',
    'Befizetés',
    'Infláció',
    'Adó',
  ],
  exampleStepsTitle: 'Az első év, hónapról hónapra',
  exampleSteps: [
    'Havi kamatláb: (1 + 0,08 ÷ 1) az 1 ÷ 12 hatványon, mínusz 1 = 0,00643403.',
    '1. hónap: 10 000 × 1,00643403 = 10 064,34, plusz az 500-as befizetés = 10 564,34.',
    '2. hónap: 10 564,34 × 1,00643403 = 10 632,31, plusz 500 = 11 132,31.',
    'Így folytatva a 12. hónapig az egyenleg eléri a 17 016,94-et. Az év során 6 000-et fizetett be, és 10 000-rel indult, tehát a nyereség 17 016,94 − 16 000 = 1 016,94.',
    'Ennek 15 %-a, azaz 152,54 az adó, amelyet azonnal levonunk, így 16 864,40 megy át a második évre.',
  ],
  exampleResultTitle: 'A teljes 15 év után',
  exampleResultLabels: [
    'Összes befizetés',
    'Nominális érték',
    'Nominális adózás után',
    'Mai pénzben',
    'Éves reálhozam',
  ],
  exampleClosing: 'Olvassa el figyelmesen az utolsó sort. 100 000-et fizet be, és 133 640 vásárlóerejével zár. A nominális 200 525 duplázásnak látszik, de az adó elvisz belőle 20 663-at, az infláció pedig további 46 222-t. Pontosan ezért a résért létezik ez a kalkulátor.',

  excludedTitle: '11. Amit a modell nem tartalmaz',
  excludedIntro: 'Ezek szándékos kihagyások. Ha ismeri őket, tudja, meddig bízhat az eredményben.',
  excluded: [
    'Brókerjutalékok, platformdíjak, alapkezelési költségek és a vételi-eladási árrés. Hosszú távon egy évi 1 %-os díj a záró reálérték ötödét is felemésztheti.',
    'Sávos adókulcsok, adómentes keretek, veszteségelszámolás és adókedvezményes számlák. Minden nyereségre egyetlen, lineáris kulcs vonatkozik.',
    'Devizaváltás és árfolyammozgás. Minden szám abban az egységben szerepel, amelyet megadott.',
    'A piac ingadozása. A hozam minden hónapban egyenletesen kerül jóváírásra, így a hozamok sorrendjéből fakadó kockázat — amely egy hosszú befektetés vége felé a legfontosabb — itt láthatatlan marad.',
    'A befizetések bármilyen emelkedése az idő múlásával, akár az inflációval, akár a jövedelemmel.',
    'Kivétek, szünetek vagy a futamidő vége előtti kiszállás.',
    'Az árfolyam-növekedéstől külön kezelt osztalék; a megadott hozam teljes hozamnak minősül.',
    'Bármi, ami kifejezetten az Ön országára, szolgáltatójára vagy személyes körülményeire vonatkozik.',
  ],

  limitsTitle: '12. Az eszköz korlátai',
  limits: [
    'Minden, ami ezen az oldalon szerepel, feltevés és semmi több. A modell hűen kiszámolja a beírt számok következményeit; arról, hogy ezek a számok reálisak-e, nincs véleménye, és nincs is módja megtudni.',
    'Minden eredmény közelítő. A megjelenített értékeket az olvashatóság kedvéért kerekítjük, míg a háttérben teljes pontossággal számolunk, így a kézi ellenőrzés az utolsó egy-két jegyben eltérhet.',
    'A kalkulátort jelen állapotában, mindenféle jótállás nélkül bocsátjuk rendelkezésre. A szerzőkkel és a kiadóval szemben semmilyen igény nem érvényesíthető a használatával összefüggő döntés, veszteség vagy kár miatt.',
  ],
};
