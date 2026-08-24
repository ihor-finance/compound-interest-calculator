import type { MethodologyContent } from '../types';

export const et: MethodologyContent = {
  title: 'Arvutuse metoodika',
  updated: 'Kehtib versioonile {version}',

  disclaimerTitle: 'Lugege kõigepealt see läbi',
  disclaimer: [
    'See lehekülg on olemas selleks, et saaksite üle kontrollida iga arvu, mille kalkulaator kuvab. Siin on kirjas kõik valemid, nende rakendamise järjekord ja lõpuni lahendatud näide, mille saate pliiatsi ja paberiga järele teha. Tegemist on harivate selgitustega selle kohta, kuidas tööriist töötab — mitte finants-, investeerimis-, maksu- ega õigusnõuandega ega soovitusega midagi osta, müüa või hoida.',
    'Kõik, mida kalkulaator annab, on projektsioon teie sisestatud eelduste põhjal, mitte ennustus. See eeldab, et tootlus, inflatsioon ja maksumäär püsivad kogu perioodi vältel muutumatuna. Päris turud nii ei käitu. Tegelikud tulemused erinevad, ja pikkade perioodide puhul võivad need erineda tohutult.',
    'Arvud on ligikaudsed ja esitatakse sellisena, nagu need on, ilma igasuguse garantiita. Iga otsus, mille pärast selle kalkulaatori kasutamist teete, on üksnes teie oma, ning ei autorid ega väljaandja ei vastuta sellest tuleneva kahju ega kaotuse eest. Kui raha teie jaoks loeb, arvutage numbrid ise üle ja pidage nõu oma riigi pädeva nõustajaga.',
  ],

  colSymbol: 'Tähis',
  colMeaning: 'Tähendus',
  colValue: 'Väärtus',
  colFrequency: 'Sagedus',
  colMonthlyAmount: 'Sel kuul lisatav summa',

  inputsTitle: '1. Mida te sisestate',
  inputsIntro: 'Need on ainsad väärtused, mida mudel kasutab. Midagi ei tõmmata internetist ja midagi ei eeldata teie eest.',
  inputMeanings: [
    'Algne sissemakse — summa, millega alustate',
    'Investeerimisperiood täisaastates',
    'Oodatav aastane tootlus protsentides',
    'Liitmisperioode aastas (päevas = 365, kuus = 12, kvartalis = 4, poolaastas = 2, aastas = 1)',
    'Regulaarse sissemakse suurus, lisatakse teie valitud sagedusega',
    'Oodatav aastane inflatsioon protsentides',
    'Kasumi maksumäär protsentides',
  ],

  rateTitle: '2. Teie määra teisendamine kuumääraks',
  rateBefore: 'Mudel liigub kuu kaupa, seega tuleb teie sisestatud aastane määr väljendada samaväärse kuumäärana. Teie määr liitub n korda aastas, seega iga liitmisperiood annab r ÷ n ja üks kuu on n ÷ 12 sellisest perioodist.',
  rateAfter: 'Just astendaja hoiab need kaks kooskõlas: kui liita see kuumäär kaksteist korda, saate täpselt oma aastase määra, nii et aastalõpu arvud langevad kokku otsese aastase arvutusega. 8 % puhul aastase liitmisega on kuumäär 0,643403 %.',

  contribTitle: '3. Kuidas sissemakseid lisatakse',
  contribIntro: 'Kuna mudel töötab kuupõhiselt, teisendatakse kuust sagedasemad sissemaksed keskmiseks kuusummaks, harvemad aga lisatakse ainult neis kuudes, kuhu need tegelikult langevad.',
  contribFrequencies: [
    'Sissemakseteta',
    'Iga päev',
    'Iga nädal',
    'Iga kuu',
    'Iga kvartal',
    'Iga poolaasta',
    'Iga aasta',
  ],
  contribNote: 'Päeva- ja nädalasissemaksete keskmistamine hoiab aastasumma täpsena — aasta jooksul laekub tõepoolest 365 päeva- või 52 nädalamakset — hinnaga, et siin-seal nihkub paar päeva intressi. See erinevus on tunduvalt väiksem kui viga, mille teete omaenda tootlust oletades.',

  orderTitle: '4. Mis toimub igal kuul',
  orderIntro: 'Iga 12 × Y kuust läbib samad kolm sammu, selles järjekorras:',
  orderSteps: [
    'Eelmisest kuust üle kantud jäägile arvestatakse intress.',
    'Lisatakse teie selle kuu sissemakse.',
    'Peetakse kinni maks, kui see sel kuul kuulub tasumisele.',
  ],
  orderNote: 'Intress arvestatakse enne sissemakset, mis tähendab, et selle kuu makse ei teeni samal kuul midagi. See on perioodi lõpus tasutava annuiteedi tavapärane eeldus ja ühtlasi ettevaatlikum valik: kuu alguses tehtav makse tõstaks lõppsummat umbes ühe kuu kasvu võrra.',

  taxTitle: '5. Maks',
  taxIntro: 'Maksu arvestatakse ainult kasumilt, mitte kunagi rahalt, mille te ise sisse maksate. Millal see kinni peetakse, valite teie.',
  taxAnnualLabel: 'Igal aastal',
  taxAnnualText: 'Iga kaheteistkümnenda kuu lõpus maksustatakse sel aastal teenitud kasum ja maks võetakse jäägist kohe maha. Kasum on praegune jääk, miinus jääk aasta alguses, miinus kõik, mille olete aasta jooksul sisse maksnud. Kui aasta lõpeb kahjumiga, on kasum negatiivne ja maksu ei võeta, kuid seda kahjumit ei kanta edasi hilisemate aastate vastu arvestamiseks.',
  taxExitLabel: 'Väljumisel',
  taxExitText: 'Kuni viimase kuuni ei peeta midagi kinni; siis maksustatakse kogu perioodi kasum korraga. Kasum on lõppjääk miinus kõik sissemaksed, kaasa arvatud algne.',
  taxNote: 'Pika perioodi jooksul erinevad need kaks režiimi oluliselt, sest igal aastal makstud maks on raha, mis lakkab kasvamast. Allolevas näites läheb iga-aastane maksustamine maksma umbes 14 093 — enne otsustamist, kumb teie olukorrale sobib, tasub mõlemat võrrelda.',

  inflationTitle: '6. Inflatsioon',
  inflationIntro: 'Inflatsiooni ei arvestata jäägist maha. Seda rakendatakse lõpus, teisendades tulevase raha selleks, mida see täna ostaks:',
  inflationNote: 't on möödunud aastate arv, seega kuu m väärtus kasutab t = m ÷ 12. Just seetõttu on «reaalne» arv alati nominaalsest väiksem, niipea kui inflatsioon on nullist suurem: raha on rohkem, aga iga ühik ostab vähem.',

  figuresTitle: '7. Neli põhinäitajat',
  figuresIntro: 'Põhitulemuse all olevad kaardid on neli vaadet samale simulatsioonile. Nad erinevad üksnes selle poolest, millised mahaarvamised on juba tehtud.',
  figureNames: [
    'Kokku sisse makstud',
    'Nominaalväärtus',
    'Nominaalne pärast makse',
    'Inflatsiooniga korrigeeritud',
  ],
  figureNotes: [
    'Algne sissemakse pluss iga teie sissemakse. Ilma igasuguse kasvuta. See on raha, mis teie taskust välja läheb.',
    'Jääk koos kasvuga, kuid ilma ühegi mahaarvamiseta. Neljast suurim ja kõige vähem sisukas — ja just selle arvu näitab enamik kalkulaatoreid üksinda.',
    'Sama jääk, kusjuures maks on kinni peetud nendel hetkedel, mille määrab teie valitud maksustamisviis.',
    'Maksujärgne jääk, teisendatud tänasesse ostujõusse. See on rakenduse ülaosas esile tõstetud arv ja ainus, mis vastab küsimusele, mida see raha tegelikult ostab.',
  ],

  irrTitle: '8. Tegelik tootlus',
  irrWhyNot: 'Protsent sildi «Tootlus (CAGR)» kõrval ei ole lõppväärtus jagatuna kogusissemaksetega. See otsetee kohtleb iga kuumakset nii, nagu oleks see investeeritud esimesel päeval, ja alahindab tootlust tõsiselt — allolevas näites näitaks see 4,71 % asemel umbes 2,6 %.',
  irrBefore: 'Selle asemel otsib kalkulaator määra, mille juures kõige teie sisse makstu nüüdisväärtus võrdub väärtusega, millega te lõpetate. Iga makse teisendatakse esmalt tänasesse rahasse, seega on vastuseks reaaltootlus pärast makse ja pärast inflatsiooni. Kui c(m) on kuul m sisse makstud summa ja V lõplik reaalne jääk, siis kuumäär x on selle võrrandi lahend:',
  irrAfter: 'Sellel võrrandil pole kinnisel kujul lahendit, seega lahendatakse see arvuliselt poolitamismeetodiga vahemikus −50 % kuni +50 % kuus, kitsendades vahemikku, kuni see on väiksem kui 10⁻¹². Seejärel teisendatakse kuutulemus aastaseks:',
  irrNote: 'See on sisemine tulumäär — sama näitaja, millega võrreldakse ebaühtlaste rahavoogudega investeeringuid. Kuna see arvestab, millal iga makse tehti, saab seda otse võrrelda avaldatud aastase tootlusega — selle vahega, et siit on maksud ja inflatsioon juba maha arvatud.',

  rangeTitle: '9. Optimistlik ja pessimistlik vahemik',
  rangeText: 'Kui lülitate määrade vahemiku sisse, käivitatakse kogu simulatsioon kolm korda: korra teie madalaima määraga, korra oodatavaga ja korra kõrgeimaga. Kõik muu jääb samaks. Need kolm tulemust ei ole tõenäosused ega kanna mingit usaldusnivood; nad lihtsalt näitavad, mida sama plaan annab kolme erineva eelduse juures, mille te ise valisite.',

  exampleTitle: '10. Lahendatud näide',
  exampleIntro: 'Need on rakenduse vaikeväärtused. Iga alljärgnevat arvu saab kalkulaatoriga järele kontrollida ja need vastavad täpselt sellele, mida rakendus näitab.',
  exampleGivenTitle: 'Lähteandmed',
  exampleGivenLabels: [
    'Algne sissemakse',
    'Periood',
    'Aastane tootlus',
    'Liitmine',
    'Sissemakse',
    'Inflatsioon',
    'Maks',
  ],
  exampleStepsTitle: 'Esimene aasta, kuu kaupa',
  exampleSteps: [
    'Kuumäär: (1 + 0,08 ÷ 1) astmes 1 ÷ 12, miinus 1 = 0,00643403.',
    'Kuu 1: 10 000 × 1,00643403 = 10 064,34, pluss 500 sissemakse = 10 564,34.',
    'Kuu 2: 10 564,34 × 1,00643403 = 10 632,31, pluss 500 = 11 132,31.',
    'Jätkates kuuni 12, jõuab jääk 17 016,94-ni. Aasta jooksul maksite sisse 6 000 ja alustasite 10 000-ga, seega on kasum 17 016,94 − 16 000 = 1 016,94.',
    'Sellelt kasumilt 15 % maks on 152,54, see peetakse kohe kinni ja teise aastasse kantakse üle 16 864,40.',
  ],
  exampleResultTitle: 'Pärast kõiki 15 aastat',
  exampleResultLabels: [
    'Kokku sisse makstud',
    'Nominaalväärtus',
    'Nominaalne pärast makse',
    'Tänases rahas',
    'Reaaltootlus aastas',
  ],
  exampleClosing: 'Lugege viimane rida tähelepanelikult läbi. Te maksate sisse 100 000 ja lõpetate 133 640 ostujõuga. Nominaalne 200 525 näeb välja nagu kahekordistumine, kuid maks võtab sellest 20 663 ja inflatsioon veel 46 222. Just selle vahe pärast see kalkulaator olemas ongi.',

  excludedTitle: '11. Mida mudel ei sisalda',
  excludedIntro: 'Need on teadlikud väljajätmised. Kui te neid teate, teate ka, kui palju tulemust usaldada.',
  excluded: [
    'Maakleri vahendustasud, platvormi tasud, fondi valitsemiskulud ja ostu- ning müügihinna vahe. Pika horisondi jooksul võib 1 % aastatasu ära süüa viiendiku lõplikust reaalväärtusest.',
    'Astmelised maksumäärad, maksuvaba miinimum, kahjumi arvestamine ja maksusoodustusega kontod. Kogu kasumile rakendatakse üht ühtset määra.',
    'Valuutavahetus ja kursimuutused. Kõik arvud on selles ühikus, mille te sisestasite.',
    'Turu kõikumine. Tootlus lisatakse ühtlaselt igal kuul, seega tootluste järjestuse risk — see, mis loeb kõige rohkem pika investeeringu lõpus — ei ole siin üldse näha.',
    'Teie sissemaksete kasv aja jooksul, olgu koos inflatsiooni või sissetulekuga.',
    'Väljavõtmised, pausid või ennetähtaegne väljumine enne perioodi lõppu.',
    'Dividendid, mida käsitletaks hinnakasvust eraldi; sisestatud tootlust loetakse kogutootluseks.',
    'Kõik, mis on omane just teie riigile, teie teenusepakkujale või teie isiklikele asjaoludele.',
  ],

  limitsTitle: '12. Selle tööriista piirid',
  limits: [
    'Kõik sellel lehel on eeldus ja ei midagi enamat. Mudel arvutab ustavalt välja teie sisestatud arvude tagajärjed; tal ei ole arvamust selle kohta, kas need arvud on realistlikud, ega ka mingit võimalust seda teada saada.',
    'Kõik tulemused on ligikaudsed. Kuvatavaid väärtusi ümardatakse loetavuse huvides, samal ajal kui sisemine arvutus säilitab täieliku täpsuse, nii et käsitsi kontrollimine võib erineda viimase numbrikoha või paari võrra.',
    'Kalkulaator antakse sellisena, nagu see on, ilma igasuguse garantiita. Autorite ega väljaandja vastu ei saa esitada mingeid nõudeid ühegi otsuse, kaotuse ega kahju eest, mis on seotud selle kasutamisega.',
  ],
};
