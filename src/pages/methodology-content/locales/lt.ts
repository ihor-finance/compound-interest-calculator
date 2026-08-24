import type { MethodologyContent } from '../types';

export const lt: MethodologyContent = {
  title: 'Skaičiavimo metodika',
  updated: 'Taikoma {version} versijai',

  disclaimerTitle: 'Pirmiausia perskaitykite tai',
  disclaimer: [
    'Šis puslapis skirtas tam, kad galėtumėte patikrinti kiekvieną skaičiuoklės rodomą skaičių. Jame išdėstytos visos formulės, jų taikymo eiliškumas ir iki galo išspręstas pavyzdys, kurį galite pakartoti su popieriumi ir pieštuku. Tai šviečiamojo pobūdžio informacija apie tai, kaip veikia įrankis — ne finansinė, investavimo, mokestinė ar teisinė konsultacija ir ne rekomendacija ką nors pirkti, parduoti ar laikyti.',
    'Viskas, ką skaičiuoklė pateikia, yra projekcija pagal jūsų įvestas prielaidas, o ne prognozė. Ji laiko, kad grąža, infliacija ir mokesčio tarifas visą laikotarpį išlieka pastovūs. Tikros rinkos taip nesielgia. Faktiniai rezultatai skirsis, o ilgais laikotarpiais gali skirtis milžiniškai.',
    'Skaičiai yra apytiksliai ir pateikiami tokie, kokie yra, be jokių garantijų. Bet koks sprendimas, kurį priimate pasinaudoję šia skaičiuokle, yra tik jūsų, o nei autoriai, nei leidėjas neatsako už dėl to patirtus nuostolius ar žalą. Jei pinigai jums svarbūs, persiskaičiuokite patys ir pasitarkite su kvalifikuotu konsultantu savo šalyje.',
  ],

  colSymbol: 'Žymuo',
  colMeaning: 'Reikšmė',
  colValue: 'Vertė',
  colFrequency: 'Dažnumas',
  colMonthlyAmount: 'Tą mėnesį pridedama suma',

  inputsTitle: '1. Ką įvedate',
  inputsIntro: 'Tai vienintelės reikšmės, kurias naudoja modelis. Niekas neatsiunčiama iš interneto ir niekas už jus neprielaidžiama.',
  inputMeanings: [
    'Pradinis įnašas — suma, nuo kurios pradedate',
    'Investavimo trukmė pilnais metais',
    'Tikėtina metinė grąža procentais',
    'Kapitalizavimo laikotarpių per metus (kasdien = 365, kas mėnesį = 12, kas ketvirtį = 4, kas pusmetį = 2, kasmet = 1)',
    'Papildomo įnašo dydis, pridedamas jūsų pasirinktu dažnumu',
    'Tikėtina metinė infliacija procentais',
    'Pelno mokesčio tarifas procentais',
  ],

  rateTitle: '2. Jūsų palūkanų normos vertimas į mėnesinę',
  rateBefore: 'Modelis juda mėnuo po mėnesio, todėl jūsų įvestą metinę normą reikia išreikšti lygiaverte mėnesine. Jūsų norma kapitalizuojama n kartų per metus, taigi kiekvienas kapitalizavimo laikotarpis duoda r ÷ n, o mėnuo sudaro n ÷ 12 tokio laikotarpio.',
  rateAfter: 'Būtent laipsnio rodiklis išlaiko abu dydžius suderintus: sukapitalizavus šią mėnesinę normą dvylika kartų gaunama tiksliai jūsų metinė norma, todėl metų pabaigos skaičiai sutampa su tiesioginiu metiniu skaičiavimu. Esant 8 % su metine kapitalizacija, mėnesinė norma yra 0,643403 %.',

  contribTitle: '3. Kaip pridedami įnašai',
  contribIntro: 'Kadangi modelis dirba mėnesiniu pagrindu, dažnesni nei mėnesiniai įnašai perskaičiuojami į vidutinę mėnesinę sumą, o retesni pridedami tik tais mėnesiais, į kuriuos iš tikrųjų patenka.',
  contribFrequencies: [
    'Be įnašų',
    'Kasdien',
    'Kas savaitę',
    'Kas mėnesį',
    'Kas ketvirtį',
    'Kas pusmetį',
    'Kasmet',
  ],
  contribNote: 'Kasdienių ir savaitinių įnašų vidurkinimas išlaiko metinę sumą tikslią — per metus iš tiesų įskaitoma 365 kasdieniai arba 52 savaitiniai mokėjimai — kaina yra kelios palūkanų dienos šen bei ten. Šis skirtumas gerokai mažesnis už paklaidą spėjant savo pačių grąžą.',

  orderTitle: '4. Kas vyksta kiekvieną mėnesį',
  orderIntro: 'Kiekvienas iš 12 × Y mėnesių praeina tuos pačius tris žingsnius tokia tvarka:',
  orderSteps: [
    'Iš praėjusio mėnesio perkeltam likučiui priskaičiuojamos palūkanos.',
    'Pridedamas jūsų šio mėnesio įnašas.',
    'Atskaitomas mokestis, jei šį mėnesį jis mokėtinas.',
  ],
  orderNote: 'Palūkanos priskaičiuojamos prieš įnašą, vadinasi, šio mėnesio įmoka tą patį mėnesį nieko neuždirba. Tai laikotarpio pabaigoje mokamos anuiteto įmokos susitarimas ir kartu atsargesnis pasirinkimas: mokėjimas mėnesio pradžioje galutinį skaičių pakeltų maždaug vieno mėnesio augimu.',

  taxTitle: '5. Mokestis',
  taxIntro: 'Mokestis imamas tik nuo pelno, niekada nuo jūsų įneštų pinigų. Kada jis nuskaičiuojamas, renkatės jūs.',
  taxAnnualLabel: 'Kasmet',
  taxAnnualText: 'Kiekvieno dvyliktojo mėnesio pabaigoje tais metais uždirbtas pelnas apmokestinamas, o mokestis iš karto nuskaitomas nuo likučio. Pelnas — tai dabartinis likutis, atėmus likutį metų pradžioje ir viską, ką per metus įnešėte. Jei metai baigiasi nuostoliu, pelnas neigiamas ir mokesčio nėra, tačiau tas nuostolis neperkeliamas įskaityti vėlesniais metais.',
  taxExitLabel: 'Išimant',
  taxExitText: 'Iki pat paskutinio mėnesio niekas neatskaitoma; tada visas viso laikotarpio pelnas apmokestinamas iš karto. Pelnas — tai galutinis likutis atėmus visus įnašus, įskaitant pradinį.',
  taxNote: 'Per ilgą laikotarpį abu būdai skiriasi iš esmės, nes kasmet sumokėtas mokestis yra pinigai, kurie nustoja kauptis. Toliau pateiktame pavyzdyje metinis apmokestinimas kainuoja apie 14 093 — verta palyginti abu variantus prieš nusprendžiant, kuris atitinka jūsų padėtį.',

  inflationTitle: '6. Infliacija',
  inflationIntro: 'Infliacija nuo likučio neatimama. Ji pritaikoma pabaigoje, kaip ateities pinigų pavertimas tuo, ką jie nupirktų šiandien:',
  inflationNote: 't yra praėjusių metų skaičius, todėl reikšmė m mėnesį naudoja t = m ÷ 12. Dėl to «realusis» skaičius visada mažesnis už nominalųjį, kai tik infliacija didesnė už nulį: pinigų daugėja, bet kiekvienas vienetas nuperka mažiau.',

  figuresTitle: '7. Keturi pagrindiniai skaičiai',
  figuresIntro: 'Langeliai po pagrindiniu rezultatu yra keturi to paties modeliavimo pjūviai. Jie skiriasi tik tuo, kurie atskaitymai jau pritaikyti.',
  figureNames: [
    'Iš viso įnešta',
    'Nominalioji vertė',
    'Nominalioji po mokesčių',
    'Pakoreguota pagal infliaciją',
  ],
  figureNotes: [
    'Pradinis įnašas ir kiekvienas jūsų papildomas įnašas. Jokio augimo. Tai pinigai, kurie išeina iš jūsų kišenės.',
    'Likutis su augimu, bet be jokių atskaitymų. Didžiausias ir mažiausiai prasmingas iš keturių — būtent šį skaičių dauguma skaičiuoklių rodo atskirai.',
    'Tas pats likutis su mokesčiu, nuskaitytu tais momentais, kuriuos nustato pasirinktas apmokestinimo būdas.',
    'Likutis po mokesčių, paverstas šiandienos perkamąja galia. Tai išryškintas skaičius programėlės viršuje ir vienintelis, atsakantis, ką tie pinigai iš tikrųjų nupirks.',
  ],

  irrTitle: '8. Realioji grąža',
  irrWhyNot: 'Procentas šalia užrašo «Pelningumas (CAGR)» nėra galutinė vertė, padalyta iš visų įnašų. Tas trumpesnis kelias kiekvieną mėnesinę įmoką traktuoja taip, tarsi ji būtų investuota pirmąją dieną, ir smarkiai sumažina grąžą — toliau pateiktame pavyzdyje jis parodytų apie 2,6 % vietoj 4,71 %.',
  irrBefore: 'Vietoj to skaičiuoklė ieško normos, prie kurios visų jūsų įneštų sumų dabartinė vertė lygi vertei, su kuria baigiate. Kiekviena įmoka pirmiausia paverčiama šiandienos pinigais, todėl atsakymas yra realioji grąža po mokesčių ir po infliacijos. Jei c(m) yra m mėnesį įnešta suma, o V — galutinis realusis likutis, mėnesinė norma x yra šios lygties sprendinys:',
  irrAfter: 'Ši lygtis neturi sprendinio uždaru pavidalu, todėl sprendžiama skaitiniu būdu dalijant intervalą pusiau tarp −50 % ir +50 % per mėnesį, siaurinant jį, kol taps mažesnis nei 10⁻¹². Mėnesinis rezultatas paskui perskaičiuojamas į metinį:',
  irrNote: 'Tai vidinė grąžos norma — tas pats rodiklis, kuriuo lyginamos investicijos su netolygiais pinigų srautais. Kadangi ji atsižvelgia į tai, kada atlikta kiekviena įmoka, ją galima tiesiogiai lyginti su skelbiama metine grąža — su ta išlyga, kad ši jau išvalyta nuo mokesčių ir infliacijos.',

  rangeTitle: '9. Optimistinis ir pesimistinis intervalas',
  rangeText: 'Įjungus grąžos intervalą, visas modeliavimas atliekamas tris kartus: kartą su mažiausia jūsų norma, kartą su tikėtina ir kartą su didžiausia. Visa kita lieka nepakitę. Šie trys rezultatai nėra tikimybės ir neturi jokio pasikliovimo lygmens; jie tiesiog rodo, ką tas pats planas duoda esant trims skirtingoms prielaidoms, kurias pasirinkote patys.',

  exampleTitle: '10. Išspręstas pavyzdys',
  exampleIntro: 'Tai numatytosios programėlės reikšmės. Kiekvieną toliau pateiktą skaičių galima persiskaičiuoti skaičiuotuvu ir jie tiksliai atitinka tai, ką rodo programėlė.',
  exampleGivenTitle: 'Pradiniai duomenys',
  exampleGivenLabels: [
    'Pradinis įnašas',
    'Laikotarpis',
    'Metinė grąža',
    'Kapitalizavimas',
    'Įnašas',
    'Infliacija',
    'Mokestis',
  ],
  exampleStepsTitle: 'Pirmieji metai, mėnuo po mėnesio',
  exampleSteps: [
    'Mėnesinė norma: (1 + 0,08 ÷ 1) pakelta 1 ÷ 12 laipsniu, minus 1 = 0,00643403.',
    '1 mėnuo: 10 000 × 1,00643403 = 10 064,34, plius 500 įnašas = 10 564,34.',
    '2 mėnuo: 10 564,34 × 1,00643403 = 10 632,31, plius 500 = 11 132,31.',
    'Tęsiant iki 12 mėnesio likutis pasiekia 17 016,94. Per metus įnešėte 6 000 ir pradėjote nuo 10 000, taigi pelnas yra 17 016,94 − 16 000 = 1 016,94.',
    '15 % mokestis nuo šio pelno yra 152,54, nuskaitomas iš karto, o į antruosius metus pereina 16 864,40.',
  ],
  exampleResultTitle: 'Po visų 15 metų',
  exampleResultLabels: [
    'Iš viso įnešta',
    'Nominalioji vertė',
    'Nominalioji po mokesčių',
    'Šiandienos pinigais',
    'Realioji grąža per metus',
  ],
  exampleClosing: 'Atidžiai perskaitykite paskutinę eilutę. Įnešate 100 000 ir baigiate su 133 640 perkamąja galia. Nominalūs 200 525 atrodo kaip padvigubėjimas, bet mokestis iš jų paima 20 663, o infliacija dar 46 222. Būtent dėl šio atotrūkio ši skaičiuoklė ir egzistuoja.',

  excludedTitle: '11. Ko modelis neįtraukia',
  excludedIntro: 'Tai sąmoningi praleidimai. Juos žinodami suprasite, kiek galima pasitikėti rezultatu.',
  excluded: [
    'Tarpininkavimo komisinių, platformos mokesčių, fondo valdymo išlaidų ir pirkimo bei pardavimo kainų skirtumo. Ilgu laikotarpiu 1 % metinis mokestis gali suėsti penktadalį galutinės realiosios vertės.',
    'Progresinių mokesčių pakopų, neapmokestinamųjų dydžių, nuostolių įskaitymo ir mokesčių lengvatas turinčių sąskaitų. Visam pelnui taikomas vienas vienodas tarifas.',
    'Valiutos keitimo ir kurso svyravimų. Visi skaičiai yra ta valiuta, kurią įvedėte.',
    'Rinkos svyravimų. Grąža priskaičiuojama tolygiai kiekvieną mėnesį, todėl grąžų eiliškumo rizika — ta, kuri svarbiausia ilgos investicijos pabaigoje — čia visai nematoma.',
    'Bet kokio jūsų įnašų didėjimo laikui bėgant, ar tai būtų kartu su infliacija, ar su pajamomis.',
    'Išėmimų, pertraukų ar ankstyvo pasitraukimo iki laikotarpio pabaigos.',
    'Dividendų, nagrinėjamų atskirai nuo kainos augimo; įvesta grąža laikoma bendrąja grąža.',
    'Visko, kas būdinga būtent jūsų šaliai, jūsų paslaugų teikėjui ar jūsų asmeninėms aplinkybėms.',
  ],

  limitsTitle: '12. Šio įrankio ribos',
  limits: [
    'Viskas šiame puslapyje yra prielaida ir nieko daugiau. Modelis ištikimai apskaičiuoja jūsų įvestų skaičių pasekmes; jis neturi nuomonės, ar tie skaičiai realūs, ir neturi kaip to sužinoti.',
    'Visi rezultatai apytiksliai. Rodomos reikšmės apvalinamos dėl skaitomumo, o vidinis skaičiavimas išlaiko visą tikslumą, todėl patikra ranka gali skirtis paskutiniu skaitmeniu ar dviem.',
    'Skaičiuoklė teikiama tokia, kokia yra, be jokios garantijos. Autoriams ar leidėjui negali būti reiškiami jokie reikalavimai dėl bet kokio sprendimo, nuostolio ar žalos, susijusių su jos naudojimu.',
  ],
};
