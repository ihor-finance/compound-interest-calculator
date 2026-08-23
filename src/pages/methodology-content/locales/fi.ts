import type { MethodologyContent } from '../types';

export const fi: MethodologyContent = {
  title: 'Laskentamenetelmä',
  updated: 'Koskee versiota {version}',

  disclaimerTitle: 'Lue tämä ensin',
  disclaimer: [
    'Tämä sivu on olemassa, jotta voit tarkistaa jokaisen laskurin näyttämän luvun. Se esittää kaikki kaavat, niiden soveltamisjärjestyksen sekä kokonaan auki lasketun esimerkin, jonka voit toistaa kynällä ja paperilla. Kyse on opastavasta tiedosta työkalun toiminnasta — ei rahoitus-, sijoitus-, vero- tai oikeudellisesta neuvonnasta eikä suosituksesta ostaa, myydä tai pitää mitään.',
    'Kaikki, mitä laskuri tuottaa, on ennuste-ennakointi antamistasi oletuksista, ei ennuste markkinoista. Se olettaa tuoton, inflaation ja veroprosentin pysyvän muuttumattomina koko ajanjakson. Todelliset markkinat eivät käyttäydy näin. Toteutuvat tulokset poikkeavat, ja pitkillä jaksoilla ne voivat poiketa valtavasti.',
    'Luvut ovat likimääräisiä ja tarjotaan sellaisinaan ilman minkäänlaista takuuta. Jokainen päätös, jonka teet tämän laskurin käytön jälkeen, on yksin sinun, eivätkä tekijät tai julkaisija vastaa siitä aiheutuvasta tappiosta tai vahingosta. Jos raha merkitsee sinulle, laske luvut itse ja keskustele pätevän neuvonantajan kanssa omassa maassasi.',
  ],

  colSymbol: 'Merkintä',
  colMeaning: 'Merkitys',
  colValue: 'Arvo',
  colFrequency: 'Tiheys',
  colMonthlyAmount: 'Kyseisenä kuukautena lisättävä summa',

  inputsTitle: '1. Mitä syötät',
  inputsIntro: 'Nämä ovat ainoat arvot, joita malli käyttää. Mitään ei haeta internetistä eikä mitään oleteta puolestasi.',
  inputMeanings: [
    'Alkupääoma — summa, jolla aloitat',
    'Sijoitusaika täysinä vuosina',
    'Odotettu vuosituotto prosentteina',
    'Korkojaksoja vuodessa (päivittäin = 365, kuukausittain = 12, neljännesvuosittain = 4, puolivuosittain = 2, vuosittain = 1)',
    'Lisäsijoituksen määrä, lisätään valitsemallasi tiheydellä',
    'Odotettu vuosi-inflaatio prosentteina',
    'Voitosta perittävä veroprosentti',
  ],

  rateTitle: '2. Koron muuntaminen kuukausikoroksi',
  rateBefore: 'Malli etenee kuukausi kerrallaan, joten syöttämäsi vuosikorko on ilmaistava vastaavana kuukausikorkona. Korkosi pääomittuu n kertaa vuodessa, joten kukin korkojakso tuottaa r ÷ n, ja yksi kuukausi on n ÷ 12 sellaisesta jaksosta.',
  rateAfter: 'Juuri eksponentti pitää nämä kaksi yhtäpitävinä: kun tämä kuukausikorko pääomitetaan kaksitoista kertaa, saadaan täsmälleen vuosikorkosi, joten vuoden lopun luvut vastaavat suoraa vuosilaskentaa. Kun tuotto on 8 % ja pääomitus vuosittainen, kuukausikorko on 0,643403 %.',

  contribTitle: '3. Miten lisäsijoitukset lisätään',
  contribIntro: 'Koska malli toimii kuukausitasolla, kuukautta tiheämmät lisäsijoitukset muunnetaan keskimääräiseksi kuukausisummaksi, ja harvemmat lisätään vain niihin kuukausiin, joihin ne tosiasiassa osuvat.',
  contribFrequencies: [
    'Ei lisäsijoituksia',
    'Päivittäin',
    'Viikoittain',
    'Kuukausittain',
    'Neljännesvuosittain',
    'Puolivuosittain',
    'Vuosittain',
  ],
  contribNote: 'Päivittäisten ja viikoittaisten lisäysten keskiarvoistaminen pitää vuosisumman täsmällisenä — vuoden aikana kirjautuu todella 365 päivittäistä tai 52 viikoittaista maksua — hintana muutaman päivän korko siellä täällä. Tämä ero on paljon pienempi kuin virhe oman tuoton arvaamisessa.',

  orderTitle: '4. Mitä joka kuukausi tapahtuu',
  orderIntro: 'Jokainen 12 × Y kuukaudesta käy läpi samat kolme vaihetta tässä järjestyksessä:',
  orderSteps: [
    'Edelliseltä kuukaudelta siirtyneelle saldolle lasketaan korko.',
    'Lisätään kuluvan kuukauden lisäsijoituksesi.',
    'Vähennetään vero, jos sitä lankeaa tänä kuukautena.',
  ],
  orderNote: 'Korko lasketaan ennen lisäsijoitusta, eli tämän kuukauden maksu ei tuota mitään saman kuukauden aikana. Tämä on jälkikäteen maksettavan annuiteetin käytäntö ja samalla varovaisempi valinta: kuukauden alussa maksaminen nostaisi loppusummaa noin yhden kuukauden kasvun verran.',

  taxTitle: '5. Vero',
  taxIntro: 'Vero peritään vain voitosta, ei koskaan sijoittamastasi pääomasta. Sen perimisajankohdan valitset itse.',
  taxAnnualLabel: 'Vuosittain',
  taxAnnualText: 'Joka kahdennentoista kuukauden lopussa kyseisenä vuonna kertynyt voitto verotetaan ja vero otetaan saldosta heti pois. Voitto on nykyinen saldo miinus saldo vuoden alussa miinus kaikki vuoden aikana tekemäsi lisäykset. Jos vuosi päättyy tappiolliseksi, voitto on negatiivinen eikä veroa peritä, mutta tuota tappiota ei siirretä vähennettäväksi myöhemmistä vuosista.',
  taxExitLabel: 'Nostettaessa',
  taxExitText: 'Mitään ei vähennetä ennen aivan viimeistä kuukautta, jolloin koko jakson voitto verotetaan kerralla. Voitto on loppusaldo miinus kaikki sijoitukset alkupääoma mukaan lukien.',
  taxNote: 'Pitkällä jaksolla nämä kaksi tapaa eroavat huomattavasti, koska vuosittain maksettu vero on rahaa, joka lakkaa kasvamasta korkoa korolle. Alla olevassa esimerkissä vuosittainen verotus maksaa noin 14 093 — kannattaa verrata molempia ennen kuin päätät, kumpi vastaa tilannettasi.',

  inflationTitle: '6. Inflaatio',
  inflationIntro: 'Inflaatiota ei vähennetä saldosta. Se sovelletaan lopuksi muuntamalla tulevaisuuden raha siksi, mitä se ostaisi tänään:',
  inflationNote: 't on kuluneiden vuosien määrä, joten kuukauden m arvo käyttää t = m ÷ 12. Siksi «reaalinen» luku on aina nimellistä pienempi heti kun inflaatio on nollaa suurempi: raha kasvaa, mutta jokainen yksikkö ostaa vähemmän.',

  figuresTitle: '7. Neljä keskeistä lukua',
  figuresIntro: 'Päätuloksen alla olevat ruudut ovat neljä näkymää samaan simulaatioon. Ne eroavat vain siinä, mitkä vähennykset niissä on jo tehty.',
  figureNames: [
    'Sijoitettu yhteensä',
    'Nimellisarvo',
    'Nimellinen verojen jälkeen',
    'Inflaatiokorjattu',
  ],
  figureNotes: [
    'Alkupääoma ja jokainen tekemäsi lisäsijoitus. Ei minkäänlaista kasvua. Tämä on raha, joka lähtee taskustasi.',
    'Saldo kasvun kanssa mutta ilman yhtään vähennystä. Neljästä suurin ja vähiten kertova — juuri se luku, jonka useimmat laskurit näyttävät yksinään.',
    'Sama saldo, vero vähennettynä niinä hetkinä, jotka valitsemasi verotustapa määrää.',
    'Verojen jälkeinen saldo muunnettuna tämän päivän ostovoimaksi. Tämä on sovelluksen yläosassa korostettu luku ja ainoa, joka vastaa siihen, mitä raha todella ostaa.',
  ],

  irrTitle: '8. Reaalituotto',
  irrWhyNot: 'Kohdan «Tuotto (CAGR)» vieressä näkyvä prosentti ei ole loppuarvo jaettuna sijoitusten summalla. Tuo oikotie kohtelee jokaista kuukausisijoitusta niin kuin se olisi sijoitettu ensimmäisenä päivänä, mikä aliarvioi tuoton pahasti — alla olevassa esimerkissä se näyttäisi noin 2,6 % eikä 4,71 %.',
  irrBefore: 'Sen sijaan laskuri ratkaisee koron, jolla kaiken sijoittamasi nykyarvo on yhtä suuri kuin arvo, joka sinulla lopussa on. Jokainen maksu muunnetaan ensin tämän päivän rahaksi, joten vastaus on reaalituotto verojen ja inflaation jälkeen. Kun c(m) on kuukautena m maksettu summa ja V lopullinen reaalisaldo, kuukausikorko x on yhtälön ratkaisu:',
  irrAfter: 'Yhtälöllä ei ole suljettua ratkaisua, joten se ratkaistaan numeerisesti puolitusmenetelmällä välillä −50 % ja +50 % kuukaudessa kaventaen väliä, kunnes se on pienempi kuin 10⁻¹². Kuukausitulos muunnetaan sen jälkeen vuositasolle:',
  irrNote: 'Tämä on sisäinen korkokanta, sama mittari, jolla verrataan sijoituksia, joiden kassavirrat ovat epäsäännöllisiä. Koska se ottaa huomioon, milloin kukin maksu tehtiin, sitä voi verrata suoraan ilmoitettuun vuosituottoon — sillä erolla, että tämä luku on jo puhdistettu veroista ja inflaatiosta.',

  rangeTitle: '9. Optimistinen ja pessimistinen vaihteluväli',
  rangeText: 'Kun kytket tuoton vaihteluvälin päälle, koko simulaatio ajetaan kolmesti: kerran vähimmäistuotolla, kerran odotetulla ja kerran enimmäistuotolla. Kaikki muu pysyy samana. Nämä kolme tulosta eivät ole todennäköisyyksiä eikä niihin liity luottamustasoa; ne vain näyttävät, mitä sama suunnitelma tuottaa kolmella eri oletuksella, jotka valitsit itse.',

  exampleTitle: '10. Auki laskettu esimerkki',
  exampleIntro: 'Nämä ovat sovelluksen oletusarvot. Jokainen alla oleva luku on toistettavissa taskulaskimella ja vastaa täsmälleen sitä, mitä sovellus näyttää.',
  exampleGivenTitle: 'Lähtötiedot',
  exampleGivenLabels: [
    'Alkupääoma',
    'Kesto',
    'Vuosituotto',
    'Pääomitus',
    'Lisäsijoitus',
    'Inflaatio',
    'Vero',
  ],
  exampleStepsTitle: 'Ensimmäinen vuosi kuukausi kerrallaan',
  exampleSteps: [
    'Kuukausikorko: (1 + 0,08 ÷ 1) potenssiin 1 ÷ 12, miinus 1 = 0,00643403.',
    'Kuukausi 1: 10 000 × 1,00643403 = 10 064,34, plus 500:n lisäsijoitus = 10 564,34.',
    'Kuukausi 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Näin jatkaen kuukauteen 12 saldo yltää lukuun 17 016,94. Vuoden aikana sijoitit 6 000 ja aloitit 10 000:lla, joten voitto on 17 016,94 − 16 000 = 1 016,94.',
    'Vero 15 % tuosta voitosta on 152,54, vähennetään heti, ja toiseen vuoteen siirtyy 16 864,40.',
  ],
  exampleResultTitle: 'Kaikkien 15 vuoden jälkeen',
  exampleResultLabels: [
    'Sijoitettu yhteensä',
    'Nimellisarvo',
    'Nimellinen verojen jälkeen',
    'Tämän päivän rahassa',
    'Reaalituotto vuodessa',
  ],
  exampleClosing: 'Lue viimeinen rivi tarkasti. Sijoitat 100 000 ja päädyt 133 640:n ostovoimaan. Nimellinen 200 525 näyttää kaksinkertaistumiselta, mutta vero vie siitä 20 663 ja inflaatio vielä 46 222. Juuri tuon eron takia tämä laskuri on olemassa.',

  excludedTitle: '11. Mitä malli ei sisällä',
  excludedIntro: 'Nämä ovat tarkoituksellisia poisjättöjä. Kun tiedät ne, tiedät myös, kuinka pitkälle tulokseen voi luottaa.',
  excluded: [
    'Välityspalkkiot, alustamaksut, rahastojen hallinnointikulut ja osto- ja myyntikurssin erotus. Pitkällä aikavälillä 1 %:n vuosikulu voi syödä viidenneksen lopullisesta reaaliarvosta.',
    'Progressiiviset veroasteikot, vähennykset, tappioiden kuittaus ja verotuetut tilit. Kaikkiin voittoihin sovelletaan yhtä tasaprosenttia.',
    'Valuutanvaihto ja kurssimuutokset. Kaikki luvut ovat siinä yksikössä, jonka syötit.',
    'Markkinoiden heilunta. Tuotto lisätään joka kuukausi tasaisesti, joten tuottojen järjestyksestä johtuva riski — se joka painaa eniten pitkän sijoituksen loppupuolella — ei näy tässä lainkaan.',
    'Lisäsijoitustesi kasvattaminen ajan myötä, oli se sitten inflaation tai tulojen tahdissa.',
    'Nostot, tauot tai ennenaikainen irtautuminen ennen jakson loppua.',
    'Osingot erikseen kurssinoususta; syöttämäsi tuotto oletetaan kokonaistuotoksi.',
    'Kaikki, mikä liittyy nimenomaan maahasi, palveluntarjoajaasi tai henkilökohtaisiin oloihisi.',
  ],

  limitsTitle: '12. Työkalun rajat',
  limits: [
    'Kaikki tällä sivulla on oletus eikä mitään muuta. Malli laskee uskollisesti syöttämiesi lukujen seuraukset; sillä ei ole näkemystä siitä, ovatko ne luvut realistisia, eikä keinoa tietää sitä.',
    'Kaikki tulokset ovat likimääräisiä. Näytetyt arvot pyöristetään luettavuuden vuoksi, kun taas taustalaskenta säilyttää täyden tarkkuuden, joten käsin tehty tarkistus voi poiketa viimeisen numeron tai kahden osalta.',
    'Laskuri tarjotaan sellaisenaan ilman mitään takuuta. Tekijöihin tai julkaisijaan ei voi kohdistaa vaatimuksia mistään päätöksestä, tappiosta tai vahingosta, joka liittyy sen käyttöön.',
  ],
};
