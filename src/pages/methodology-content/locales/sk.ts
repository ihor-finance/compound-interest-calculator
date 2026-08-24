import type { MethodologyContent } from '../types';

export const sk: MethodologyContent = {
  title: 'Metodika výpočtu',
  updated: 'Platí pre verziu {version}',

  disclaimerTitle: 'Toto si prečítajte najskôr',
  disclaimer: [
    'Táto stránka existuje preto, aby ste si mohli overiť každé číslo, ktoré kalkulačka zobrazuje. Uvádza všetky vzorce, poradie ich použitia a úplne rozpísaný príklad, ktorý si viete zopakovať ceruzkou na papieri. Ide o vzdelávaciu informáciu o tom, ako nástroj funguje — nie je to finančné, investičné, daňové ani právne poradenstvo a nie je to odporúčanie čokoľvek kúpiť, predať či držať.',
    'Všetko, čo kalkulačka vydá, je projekcia vychádzajúca z predpokladov, ktoré zadáte, nie predpoveď. Predpokladá po celý čas konštantný výnos, konštantnú infláciu a konštantnú sadzbu dane. Skutočné trhy sa tak nesprávajú. Reálne výsledky sa budú líšiť a na dlhých horizontoch sa môžu líšiť obrovsky.',
    'Čísla sú približné a poskytujú sa tak, ako sú, bez akejkoľvek záruky. Každé rozhodnutie, ktoré po použití tejto kalkulačky urobíte, je len vaše, a ani autori, ani vydavateľ nenesú zodpovednosť za stratu či škodu, ktorá z neho vzíde. Ak vám na peniazoch záleží, prepočítajte si čísla sami a poraďte sa s kvalifikovaným odborníkom vo svojej krajine.',
  ],

  colSymbol: 'Značka',
  colMeaning: 'Význam',
  colValue: 'Hodnota',
  colFrequency: 'Frekvencia',
  colMonthlyAmount: 'Suma pripísaná v danom mesiaci',

  inputsTitle: '1. Čo zadávate',
  inputsIntro: 'Model pracuje výhradne s týmito hodnotami. Nič sa nesťahuje z internetu a nič sa za vás nepredpokladá.',
  inputMeanings: [
    'Počiatočný vklad — suma, s ktorou začínate',
    'Doba investície v celých rokoch',
    'Očakávaný ročný výnos v percentách',
    'Počet úrokovacích období za rok (denne = 365, mesačne = 12, štvrťročne = 4, polročne = 2, ročne = 1)',
    'Výška pravidelného vkladu, pripisuje sa vo zvolenej frekvencii',
    'Očakávaná ročná inflácia v percentách',
    'Sadzba dane zo zisku v percentách',
  ],

  rateTitle: '2. Prepočet vašej sadzby na mesačnú',
  rateBefore: 'Model postupuje po mesiacoch, takže ročnú sadzbu, ktorú zadáte, treba vyjadriť ako rovnocennú mesačnú. Vaša sadzba sa úročí n krát ročne, každé úrokovacie obdobie teda prinesie r ÷ n a jeden mesiac je n ÷ 12 takého obdobia.',
  rateAfter: 'Práve exponent drží obe hodnoty v súlade: ak túto mesačnú sadzbu úročíte dvanásťkrát, dostanete presne svoju ročnú sadzbu, takže čísla na konci roka zodpovedajú priamemu ročnému výpočtu. Pri 8 % s ročným úročením je mesačná sadzba 0,643403 %.',

  contribTitle: '3. Ako sa pripisujú vklady',
  contribIntro: 'Keďže model beží po mesiacoch, vklady častejšie než mesačné sa prepočítajú na priemernú mesačnú sumu, kým menej časté sa pripisujú len v tých mesiacoch, do ktorých naozaj spadajú.',
  contribFrequencies: [
    'Bez vkladov',
    'Denne',
    'Týždenne',
    'Mesačne',
    'Štvrťročne',
    'Polročne',
    'Ročne',
  ],
  contribNote: 'Spriemerovanie denných a týždenných vkladov udrží ročný súčet presný — za rok sa naozaj pripíše 365 denných, respektíve 52 týždenných platieb — za cenu niekoľkých dní úroku sem a tam. Tento rozdiel je omnoho menší než chyba v odhade vlastného výnosu.',

  orderTitle: '4. Čo sa deje každý mesiac',
  orderIntro: 'Každý z 12 × Y mesiacov prejde rovnakými tromi krokmi, a to v tomto poradí:',
  orderSteps: [
    'K zostatku prenesenému z minulého mesiaca sa pripíše úrok.',
    'Pridá sa váš vklad za tento mesiac.',
    'Odpočíta sa daň, ak v tomto mesiaci nejaká pripadá.',
  ],
  orderNote: 'Úrok sa pripisuje pred vkladom, čo znamená, že platba tohto mesiaca v tom istom mesiaci nič nezarobí. Ide o konvenciu anuity splatnej na konci obdobia a zároveň o opatrnejšiu voľbu: platba na začiatku mesiaca by konečné číslo zvýšila zhruba o jeden mesiac rastu.',

  taxTitle: '5. Daň',
  taxIntro: 'Zdaňuje sa len zisk, nikdy peniaze, ktoré vkladáte. Kedy sa vyberie, volíte vy.',
  taxAnnualLabel: 'Každý rok',
  taxAnnualText: 'Na konci každého dvanásteho mesiaca sa zdaní zisk dosiahnutý v danom roku a daň sa zo zostatku okamžite odpočíta. Zisk je aktuálny zostatok mínus zostatok na začiatku roka mínus všetko, čo ste počas roka vložili. Ak sa rok skončí stratou, zisk je záporný a daň sa neplatí, ale táto strata sa neprenáša na započítanie proti neskorším rokom.',
  taxExitLabel: 'Pri výbere',
  taxExitText: 'Až do posledného mesiaca sa neodpočítava nič; vtedy sa celý zisk za celé obdobie zdaní naraz. Zisk je konečný zostatok mínus všetky vklady vrátane počiatočného.',
  taxNote: 'Na dlhom horizonte sa oba režimy podstatne líšia, pretože daň platená každý rok sú peniaze, ktoré prestávajú pracovať na zloženom úroku. V príklade nižšie stojí ročné zdanenie približne 14 093 — oplatí sa obe varianty porovnať, kým sa rozhodnete, ktorá zodpovedá vašej situácii.',

  inflationTitle: '6. Inflácia',
  inflationIntro: 'Inflácia sa od zostatku neodpočítava. Uplatní sa až na konci, ako prevod budúcich peňazí na to, čo by kúpili dnes:',
  inflationNote: 't je počet uplynulých rokov, takže hodnota v mesiaci m používa t = m ÷ 12. Preto je «reálne» číslo vždy nižšie než nominálne, len čo je inflácia nad nulou: peňazí pribúda, ale každá jednotka kúpi menej.',

  figuresTitle: '7. Štyri hlavné čísla',
  figuresIntro: 'Dlaždice pod hlavným výsledkom sú štyri pohľady na tú istú simuláciu. Líšia sa len tým, ktoré odpočty už zahŕňajú.',
  figureNames: [
    'Spolu vložené',
    'Nominálna hodnota',
    'Nominálna po zdanení',
    'Očistené o infláciu',
  ],
  figureNotes: [
    'Počiatočný vklad plus každý váš pravidelný vklad. Žiadny rast. Toto sú peniaze, ktoré odchádzajú z vášho vrecka.',
    'Zostatok s rastom, ale bez akéhokoľvek odpočtu. Zo štyroch najväčší a najmenej výpovedný — a práve toto číslo väčšina kalkulačiek ukazuje samostatne.',
    'Ten istý zostatok s daňou odpočítanou v okamihoch, ktoré určuje zvolený režim zdanenia.',
    'Zostatok po zdanení prevedený na dnešnú kúpnu silu. Toto je hlavné číslo v hornej časti aplikácie a jediné, ktoré odpovedá na otázku, čo si za tie peniaze naozaj kúpite.',
  ],

  irrTitle: '8. Reálny výnos',
  irrWhyNot: 'Percento vedľa popisu «Výnosnosť (CAGR)» nie je konečná hodnota delená celkovými vkladmi. Táto skratka zaobchádza s každou mesačnou platbou tak, akoby bola investovaná prvý deň, čím výnos výrazne podhodnocuje — v príklade nižšie by ukázala asi 2,6 % namiesto 4,71 %.',
  irrBefore: 'Kalkulačka namiesto toho hľadá sadzbu, pri ktorej sa súčasná hodnota všetkého, čo ste vložili, rovná hodnote, s ktorou skončíte. Každá platba sa najprv prevedie na dnešné peniaze, takže výsledkom je reálny výnos po zdanení a po inflácii. Ak je c(m) suma vložená v mesiaci m a V konečný reálny zostatok, mesačná sadzba x je riešením rovnice:',
  irrAfter: 'Táto rovnica nemá riešenie v uzavretom tvare, preto sa rieši numericky metódou polenia intervalu medzi −50 % a +50 % mesačne, kým nie je interval menší než 10⁻¹². Mesačný výsledok sa potom prevedie na ročný:',
  irrNote: 'Ide o vnútorné výnosové percento, teda o tú istú mieru, akou sa porovnávajú investície s nepravidelnými peňažnými tokmi. Keďže zohľadňuje, kedy bola ktorá platba vykonaná, možno ju priamo porovnať s uvádzaným ročným výnosom — s tým rozdielom, že táto je už očistená o daň a infláciu.',

  rangeTitle: '9. Optimistické a pesimistické rozpätie',
  rangeText: 'Keď zapnete rozpätie sadzieb, celá simulácia prebehne trikrát: raz s vašou minimálnou sadzbou, raz s očakávanou a raz s maximálnou. Všetko ostatné zostáva rovnaké. Tieto tri výsledky nie sú pravdepodobnosti a nenesú žiadnu hladinu spoľahlivosti; iba ukazujú, čo ten istý plán prinesie za troch rôznych predpokladov, ktoré ste si sami zvolili.',

  exampleTitle: '10. Rozpísaný príklad',
  exampleIntro: 'Toto sú predvolené hodnoty aplikácie. Každé číslo nižšie si viete overiť na kalkulačke a všetky presne zodpovedajú tomu, čo aplikácia zobrazuje.',
  exampleGivenTitle: 'Vstupy',
  exampleGivenLabels: [
    'Počiatočný vklad',
    'Doba',
    'Ročný výnos',
    'Úročenie',
    'Vklad',
    'Inflácia',
    'Daň',
  ],
  exampleStepsTitle: 'Prvý rok, mesiac po mesiaci',
  exampleSteps: [
    'Mesačná sadzba: (1 + 0,08 ÷ 1) na 1 ÷ 12, mínus 1 = 0,00643403.',
    'Mesiac 1: 10 000 × 1,00643403 = 10 064,34, plus vklad 500 = 10 564,34.',
    'Mesiac 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Takto až do mesiaca 12 zostatok dosiahne 17 016,94. Za rok ste vložili 6 000 a začínali s 10 000, zisk je teda 17 016,94 − 16 000 = 1 016,94.',
    'Daň 15 % z tohto zisku je 152,54, odpočíta sa okamžite a do druhého roka prechádza 16 864,40.',
  ],
  exampleResultTitle: 'Po všetkých 15 rokoch',
  exampleResultLabels: [
    'Spolu vložené',
    'Nominálna hodnota',
    'Nominálna po zdanení',
    'V dnešných peniazoch',
    'Reálny výnos ročne',
  ],
  exampleClosing: 'Prečítajte si posledný riadok pozorne. Vložíte 100 000 a končíte s kúpnou silou 133 640. Nominálnych 200 525 vyzerá ako zdvojnásobenie, lenže daň z toho uberie 20 663 a inflácia ďalších 46 222. Práve pre túto medzeru táto kalkulačka existuje.',

  excludedTitle: '11. Čo model nezahŕňa',
  excludedIntro: 'Ide o zámerné vynechania. Keď ich poznáte, viete, nakoľko výsledku veriť.',
  excluded: [
    'Poplatky brokera, poplatky platformy, náklady na správu fondu a rozpätie medzi nákupnou a predajnou cenou. Na dlhom horizonte môže 1 % ročného poplatku pohltiť pätinu konečnej reálnej hodnoty.',
    'Progresívne daňové pásma, úľavy, započítanie strát a daňovo zvýhodnené účty. Na celý zisk sa uplatňuje jediná lineárna sadzba.',
    'Prevod mien a pohyb kurzov. Všetky čísla sú v jednotke, ktorú ste zadali.',
    'Volatilitu trhu. Výnos sa pripisuje každý mesiac rovnomerne, takže riziko poradia výnosov, ktoré je ku koncu dlhej investície najdôležitejšie, tu nie je vidieť.',
    'Akékoľvek navyšovanie vašich vkladov v čase, či už s infláciou, alebo s príjmom.',
    'Výbery, prestávky alebo predčasné ukončenie pred koncom obdobia.',
    'Dividendy riešené oddelene od rastu ceny; zadaný výnos sa považuje za celkový výnos.',
    'Čokoľvek špecifické pre vašu krajinu, vášho poskytovateľa alebo vašu osobnú situáciu.',
  ],

  limitsTitle: '12. Hranice tohto nástroja',
  limits: [
    'Všetko na tejto stránke je predpoklad a nič viac. Model verne vypočíta dôsledky čísel, ktoré ste zadali; nemá názor na to, či sú tie čísla realistické, a nemá ako to zistiť.',
    'Všetky výsledky sú približné. Zobrazené hodnoty sa pre čitateľnosť zaokrúhľujú, kým vnútorný výpočet si drží plnú presnosť, takže ručná kontrola sa môže líšiť v poslednej číslici alebo dvoch.',
    'Kalkulačka sa poskytuje tak, ako je, bez akejkoľvek záruky. Voči autorom ani vydavateľovi nemožno uplatniť žiadny nárok z akéhokoľvek rozhodnutia, straty či škody spojenej s jej používaním.',
  ],
};
