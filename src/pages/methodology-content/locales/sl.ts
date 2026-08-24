import type { MethodologyContent } from '../types';

export const sl: MethodologyContent = {
  title: 'Metodologija izračuna',
  updated: 'Velja za različico {version}',

  disclaimerTitle: 'Najprej preberite to',
  disclaimer: [
    'Ta stran obstaja zato, da lahko preverite vsako številko, ki jo kalkulator prikaže. Navaja vse formule, vrstni red njihove uporabe in v celoti izpeljan primer, ki ga lahko ponovite s svinčnikom in papirjem. Gre za izobraževalno informacijo o tem, kako orodje deluje — ni finančni, naložbeni, davčni ali pravni nasvet in ni priporočilo, da kar koli kupite, prodate ali obdržite.',
    'Vse, kar kalkulator izračuna, je projekcija na podlagi predpostavk, ki jih vnesete, in ne napoved. Predpostavlja stalno donosnost, stalno inflacijo in stalno davčno stopnjo skozi celotno obdobje. Resnični trgi se ne obnašajo tako. Dejanski rezultati se bodo razlikovali, na dolgih obdobjih pa se lahko razlikujejo izjemno.',
    'Številke so približne in so na voljo takšne, kot so, brez kakršnega koli jamstva. Vsaka odločitev, ki jo sprejmete po uporabi tega kalkulatorja, je izključno vaša, avtorji in izdajatelj pa ne prevzemajo odgovornosti za morebitno izgubo ali škodo, ki iz nje izhaja. Če vam je denar pomemben, preverite številke sami in se posvetujte z usposobljenim svetovalcem v svoji državi.',
  ],

  colSymbol: 'Oznaka',
  colMeaning: 'Pomen',
  colValue: 'Vrednost',
  colFrequency: 'Pogostost',
  colMonthlyAmount: 'Znesek, dodan tisti mesec',

  inputsTitle: '1. Kaj vnesete',
  inputsIntro: 'Model uporablja izključno te vrednosti. Nič se ne prenaša z interneta in nič se ne predpostavlja namesto vas.',
  inputMeanings: [
    'Začetni vložek — znesek, s katerim začnete',
    'Doba naložbe v polnih letih',
    'Pričakovana letna donosnost, v odstotkih',
    'Število obdobij obrestovanja na leto (dnevno = 365, mesečno = 12, četrtletno = 4, polletno = 2, letno = 1)',
    'Znesek vplačila, dodan s pogostostjo, ki jo izberete',
    'Pričakovana letna inflacija, v odstotkih',
    'Davčna stopnja na dobiček, v odstotkih',
  ],

  rateTitle: '2. Pretvorba vaše stopnje v mesečno',
  rateBefore: 'Model napreduje mesec za mesecem, zato je treba letno stopnjo, ki jo vnesete, izraziti kot enakovredno mesečno. Vaša stopnja se obrestuje n-krat letno, tako da vsako obdobje obrestovanja prinese r ÷ n, mesec pa je n ÷ 12 takega obdobja.',
  rateAfter: 'Prav eksponent ohranja oboje usklajeno: če to mesečno stopnjo obrestujete dvanajstkrat, dobite natanko svojo letno stopnjo, zato se številke ob koncu leta ujemajo z neposrednim letnim izračunom. Pri 8 % z letnim obrestovanjem znaša mesečna stopnja 0,643403 %.',

  contribTitle: '3. Kako se dodajajo vplačila',
  contribIntro: 'Ker model deluje na mesečni ravni, se vplačila, pogostejša od mesečnih, preračunajo v povprečen mesečni znesek, redkejša pa se dodajo le v tistih mesecih, v katere dejansko padejo.',
  contribFrequencies: [
    'Brez vplačil',
    'Dnevno',
    'Tedensko',
    'Mesečno',
    'Četrtletno',
    'Polletno',
    'Letno',
  ],
  contribNote: 'Povprečenje dnevnih in tedenskih vplačil ohrani letno vsoto natančno — v enem letu se res pripiše 365 dnevnih oziroma 52 tedenskih plačil — za ceno nekaj dni obresti tu in tam. Ta razlika je precej manjša od napake pri ugibanju lastne donosnosti.',

  orderTitle: '4. Kaj se zgodi vsak mesec',
  orderIntro: 'Vsak od 12 × Y mesecev gre skozi iste tri korake, in sicer v tem vrstnem redu:',
  orderSteps: [
    'Na stanje, preneseno iz prejšnjega meseca, se obračunajo obresti.',
    'Doda se vaše vplačilo za ta mesec.',
    'Odbije se davek, če v tem mesecu zapade.',
  ],
  orderNote: 'Obresti se obračunajo pred vplačilom, kar pomeni, da vplačilo tega meseca v istem mesecu ne prinese ničesar. To je dogovor za anuiteto, ki zapade ob koncu obdobja, in hkrati previdnejša izbira: plačilo na začetku meseca bi končno številko dvignilo za približno en mesec rasti.',

  taxTitle: '5. Davek',
  taxIntro: 'Davek se obračuna samo od dobička, nikoli od denarja, ki ga vložite. Kdaj se odtegne, izberete vi.',
  taxAnnualLabel: 'Vsako leto',
  taxAnnualText: 'Ob koncu vsakega dvanajstega meseca se obdavči dobiček, dosežen v tistem letu, davek pa se takoj odšteje od stanja. Dobiček je trenutno stanje, minus stanje na začetku leta, minus vse, kar ste med letom vplačali. Če se leto konča z izgubo, je dobiček negativen in davka ni, vendar se ta izguba ne prenaša za pobot v poznejših letih.',
  taxExitLabel: 'Ob izplačilu',
  taxExitText: 'Do zadnjega meseca se ne odbije nič; takrat se celoten dobiček celotnega obdobja obdavči naenkrat. Dobiček je končno stanje minus vsa vplačila, vključno z začetnim vložkom.',
  taxNote: 'Na dolgi rok se načina bistveno razlikujeta, saj je davek, plačan vsako leto, denar, ki se neha obrestovati. V spodnjem primeru letno obdavčenje stane približno 14 093 — pred odločitvijo, kateri ustreza vaši situaciji, se splača primerjati oba.',

  inflationTitle: '6. Inflacija',
  inflationIntro: 'Inflacija se ne odšteva od stanja. Uporabi se na koncu, kot pretvorba prihodnjega denarja v to, kar bi kupil danes:',
  inflationNote: 't je število preteklih let, zato vrednost v mesecu m uporablja t = m ÷ 12. Zato je «realna» številka vedno nižja od nominalne, takoj ko je inflacija nad ničlo: denarja je več, a vsaka enota kupi manj.',

  figuresTitle: '7. Štiri glavne številke',
  figuresIntro: 'Ploščice pod glavnim rezultatom so štirje pogledi na isto simulacijo. Razlikujejo se le po tem, kateri odbitki so že upoštevani.',
  figureNames: [
    'Skupaj vplačano',
    'Nominalna vrednost',
    'Nominalna po davku',
    'Prilagojeno inflaciji',
  ],
  figureNotes: [
    'Začetni vložek in vsako vaše vplačilo. Brez kakršne koli rasti. To je denar, ki odide iz vašega žepa.',
    'Stanje z rastjo, a brez katerega koli odbitka. Največje in najmanj pomenljivo od štirih — in prav to številko večina kalkulatorjev prikazuje samostojno.',
    'Isto stanje, z davkom, odtegnjenim ob trenutkih, ki jih določa izbrani način obdavčitve.',
    'Stanje po davku, pretvorjeno v današnjo kupno moč. To je izpostavljena številka na vrhu aplikacije in edina, ki odgovarja na vprašanje, kaj bo ta denar v resnici kupil.',
  ],

  irrTitle: '8. Realna donosnost',
  irrWhyNot: 'Odstotek ob napisu «Donosnost (CAGR)» ni končna vrednost, deljena s skupnimi vplačili. Ta bližnjica obravnava vsako mesečno vplačilo, kot da bi bilo naloženo prvi dan, in s tem donosnost močno podceni — v spodnjem primeru bi pokazala okoli 2,6 % namesto 4,71 %.',
  irrBefore: 'Namesto tega kalkulator poišče stopnjo, pri kateri je sedanja vrednost vsega vplačanega enaka vrednosti, s katero končate. Vsako vplačilo se najprej pretvori v današnji denar, zato je odgovor realna donosnost, po davkih in po inflaciji. Če je c(m) znesek, vplačan v mesecu m, in V končno realno stanje, je mesečna stopnja x rešitev enačbe:',
  irrAfter: 'Ta enačba nima rešitve v zaključeni obliki, zato se rešuje numerično z bisekcijo med −50 % in +50 % mesečno, pri čemer se interval oži, dokler ni manjši od 10⁻¹². Mesečni rezultat se nato preračuna na letno raven:',
  irrNote: 'To je notranja stopnja donosa, ista mera, s katero se primerjajo naložbe z neenakomernimi denarnimi tokovi. Ker upošteva, kdaj je bilo posamezno vplačilo izvedeno, jo je mogoče neposredno primerjati z objavljeno letno donosnostjo — z razliko, da je ta že očiščena davkov in inflacije.',

  rangeTitle: '9. Optimistični in pesimistični razpon',
  rangeText: 'Ko vklopite razpon stopenj, se celotna simulacija izvede trikrat: enkrat z najnižjo stopnjo, enkrat s pričakovano in enkrat z najvišjo. Vse drugo ostane enako. Ti trije rezultati niso verjetnosti in ne nosijo nobene stopnje zaupanja; le pokažejo, kaj isti načrt prinese ob treh različnih predpostavkah, ki ste jih izbrali sami.',

  exampleTitle: '10. Izpeljan primer',
  exampleIntro: 'To so privzete vrednosti aplikacije. Vsako spodnjo številko je mogoče preveriti s kalkulatorjem in se natanko ujema s tem, kar prikazuje aplikacija.',
  exampleGivenTitle: 'Vhodni podatki',
  exampleGivenLabels: [
    'Začetni vložek',
    'Obdobje',
    'Letna donosnost',
    'Obrestovanje',
    'Vplačilo',
    'Inflacija',
    'Davek',
  ],
  exampleStepsTitle: 'Prvo leto, mesec za mesecem',
  exampleSteps: [
    'Mesečna stopnja: (1 + 0,08 ÷ 1) na potenco 1 ÷ 12, minus 1 = 0,00643403.',
    'Mesec 1: 10 000 × 1,00643403 = 10 064,34, plus vplačilo 500 = 10 564,34.',
    'Mesec 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Če nadaljujemo do meseca 12, stanje doseže 17 016,94. Med letom ste vplačali 6 000 in začeli z 10 000, torej je dobiček 17 016,94 − 16 000 = 1 016,94.',
    'Davek 15 % od tega dobička znaša 152,54, odbije se takoj, v drugo leto pa preide 16 864,40.',
  ],
  exampleResultTitle: 'Po vseh 15 letih',
  exampleResultLabels: [
    'Skupaj vplačano',
    'Nominalna vrednost',
    'Nominalna po davku',
    'V današnjem denarju',
    'Realna donosnost na leto',
  ],
  exampleClosing: 'Pozorno preberite zadnjo vrstico. Vplačate 100 000 in končate s kupno močjo 133 640. Nominalnih 200 525 je videti kot podvojitev, a davek od tega vzame 20 663, inflacija pa še 46 222. Prav zaradi te vrzeli ta kalkulator obstaja.',

  excludedTitle: '11. Česa model ne zajema',
  excludedIntro: 'To so namerne izpustitve. Ko jih poznate, veste, koliko lahko rezultatu zaupate.',
  excluded: [
    'Borznoposredniške provizije, stroške platforme, stroške upravljanja skladov in razliko med nakupno in prodajno ceno. Na dolgi rok lahko 1 % letnih stroškov pogoltne petino končne realne vrednosti.',
    'Progresivne davčne razrede, olajšave, pobot izgub in davčno ugodne račune. Za ves dobiček velja ena sama enotna stopnja.',
    'Menjavo valut in gibanje tečajev. Vse številke so v enoti, ki ste jo vnesli.',
    'Nihanje trga. Donosnost se pripisuje enakomerno vsak mesec, zato tveganje zaporedja donosov — tisto, ki največ šteje proti koncu dolge naložbe — tu sploh ni vidno.',
    'Kakršno koli povečanje vaših vplačil skozi čas, bodisi z inflacijo bodisi z dohodkom.',
    'Izplačila, premore ali predčasen izstop pred koncem obdobja.',
    'Dividende, obravnavane ločeno od rasti cene; vnesena donosnost velja za skupno donosnost.',
    'Vse, kar je značilno za vašo državo, vašega ponudnika ali vaše osebne okoliščine.',
  ],

  limitsTitle: '12. Meje tega orodja',
  limits: [
    'Vse na tej strani je predpostavka in nič več. Model zvesto izračuna posledice številk, ki ste jih vnesli; o tem, ali so te številke realne, nima mnenja in tega nikakor ne more vedeti.',
    'Vsi rezultati so približni. Prikazane vrednosti se zaradi berljivosti zaokrožujejo, medtem ko notranji izračun ohranja polno natančnost, zato se lahko ročno preverjanje razlikuje pri zadnji števki ali dveh.',
    'Kalkulator je na voljo takšen, kot je, brez kakršnega koli jamstva. Zoper avtorje ali izdajatelja ni mogoče uveljavljati nobenega zahtevka zaradi katere koli odločitve, izgube ali škode, povezane z njegovo uporabo.',
  ],
};
