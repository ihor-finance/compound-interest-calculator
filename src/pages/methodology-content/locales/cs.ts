import type { MethodologyContent } from '../types';

export const cs: MethodologyContent = {
  title: 'Metodika výpočtu',
  updated: 'Platí pro verzi {version}',

  disclaimerTitle: 'Přečtěte si nejdřív tohle',
  disclaimer: [
    'Tato stránka existuje proto, abyste si mohli ověřit každé číslo, které kalkulačka zobrazuje. Uvádí všechny vzorce, pořadí, v jakém se používají, a plně rozepsaný příklad, který si můžete zopakovat s tužkou a papírem. Jde o vzdělávací informaci o tom, jak nástroj funguje — není to finanční, investiční, daňové ani právní poradenství a není to doporučení cokoli koupit, prodat či držet.',
    'Vše, co kalkulačka vydá, je projekce vycházející z předpokladů, které zadáte, nikoli předpověď. Předpokládá po celou dobu konstantní výnos, konstantní inflaci a konstantní sazbu daně. Skutečné trhy se tak nechovají. Reálné výsledky se budou lišit a na dlouhých horizontech se mohou lišit obrovsky.',
    'Čísla jsou přibližná a poskytují se tak, jak jsou, bez jakékoli záruky. Jakékoli rozhodnutí, které po použití této kalkulačky učiníte, je jen vaše, a ani autoři, ani vydavatel nenesou odpovědnost za ztrátu či škodu, která z něj vzejde. Pokud vám na penězích záleží, přepočítejte si čísla sami a poraďte se s kvalifikovaným odborníkem ve své zemi.',
  ],

  colSymbol: 'Značka',
  colMeaning: 'Význam',
  colValue: 'Hodnota',
  colFrequency: 'Četnost',
  colMonthlyAmount: 'Částka připsaná v daném měsíci',

  inputsTitle: '1. Co zadáváte',
  inputsIntro: 'Model pracuje pouze s těmito hodnotami. Nic se nestahuje z internetu a nic se za vás nepředpokládá.',
  inputMeanings: [
    'Počáteční vklad — částka, se kterou začínáte',
    'Doba investice v celých letech',
    'Očekávaný roční výnos v procentech',
    'Počet úrokovacích období za rok (denně = 365, měsíčně = 12, čtvrtletně = 4, pololetně = 2, ročně = 1)',
    'Výše pravidelného vkladu, připisovaná ve zvolené četnosti',
    'Očekávaná roční inflace v procentech',
    'Sazba daně ze zisku v procentech',
  ],

  rateTitle: '2. Převod vaší sazby na měsíční',
  rateBefore: 'Model postupuje po měsících, takže roční sazbu, kterou zadáte, je třeba vyjádřit jako rovnocennou měsíční sazbu. Vaše sazba se úročí n krát ročně, každé úrokovací období tedy vynese r ÷ n a jeden měsíc je n ÷ 12 takového období.',
  rateAfter: 'Právě exponent drží obě hodnoty v souladu: úročíte-li tuto měsíční sazbu dvanáctkrát, dostanete přesně svou roční sazbu, takže čísla na konci roku odpovídají přímému ročnímu výpočtu. Při 8 % s ročním úročením je měsíční sazba 0,643403 %.',

  contribTitle: '3. Jak se připisují vklady',
  contribIntro: 'Protože model běží po měsících, vklady častější než měsíční se přepočítají na průměrnou měsíční částku, zatímco méně časté se připisují jen v těch měsících, do kterých skutečně spadají.',
  contribFrequencies: [
    'Bez vkladů',
    'Denně',
    'Týdně',
    'Měsíčně',
    'Čtvrtletně',
    'Pololetně',
    'Ročně',
  ],
  contribNote: 'Zprůměrování denních a týdenních vkladů udrží roční součet přesný — za rok se skutečně připíše 365 denních, respektive 52 týdenních plateb — za cenu několika dnů úroku sem a tam. Tento rozdíl je mnohem menší než chyba v odhadu vlastního výnosu.',

  orderTitle: '4. Co se děje každý měsíc',
  orderIntro: 'Každý z 12 × Y měsíců projde stejnými třemi kroky, a to v tomto pořadí:',
  orderSteps: [
    'K zůstatku převedenému z minulého měsíce se připíše úrok.',
    'Přidá se váš vklad za tento měsíc.',
    'Odečte se daň, pokud v tomto měsíci nějaká připadá.',
  ],
  orderNote: 'Úrok se připisuje před vkladem, což znamená, že platba tohoto měsíce v tomtéž měsíci nic nevydělá. Jde o konvenci polhůtní anuity a zároveň o opatrnější volbu: platba na začátku měsíce by konečné číslo zvýšila zhruba o jeden měsíc růstu.',

  taxTitle: '5. Daň',
  taxIntro: 'Daní se pouze zisk, nikdy peníze, které vkládáte. Kdy se vybere, volíte vy.',
  taxAnnualLabel: 'Každý rok',
  taxAnnualText: 'Na konci každého dvanáctého měsíce se zdaní zisk dosažený v daném roce a daň se ze zůstatku okamžitě odečte. Zisk je aktuální zůstatek minus zůstatek na začátku roku minus vše, co jste během roku vložili. Skončí-li rok ztrátou, je zisk záporný a daň se neplatí, ale tato ztráta se nepřevádí k započtení proti pozdějším rokům.',
  taxExitLabel: 'Při výběru',
  taxExitText: 'Až do posledního měsíce se neodečítá nic; tehdy se celý zisk za celé období zdaní najednou. Zisk je konečný zůstatek minus všechny vklady včetně počátečního.',
  taxNote: 'Na dlouhém horizontu se oba režimy podstatně liší, protože daň placená každý rok jsou peníze, které přestávají pracovat na složeném úroku. V příkladu níže stojí roční zdanění zhruba 14 093 — vyplatí se obě varianty porovnat, než se rozhodnete, která odpovídá vaší situaci.',

  inflationTitle: '6. Inflace',
  inflationIntro: 'Inflace se od zůstatku neodečítá. Uplatní se až na konci, jako převod budoucích peněz na to, co by koupily dnes:',
  inflationNote: 't je počet uplynulých let, takže hodnota v měsíci m používá t = m ÷ 12. Proto je «reálné» číslo vždy nižší než nominální, jakmile je inflace nad nulou: peněz přibývá, ale každá jednotka koupí méně.',

  figuresTitle: '7. Čtyři hlavní čísla',
  figuresIntro: 'Dlaždice pod hlavním výsledkem jsou čtyři pohledy na tutéž simulaci. Liší se jen tím, které odpočty už jsou v nich zahrnuty.',
  figureNames: [
    'Celkem vloženo',
    'Nominální hodnota',
    'Nominální po zdanění',
    'Očištěno o inflaci',
  ],
  figureNotes: [
    'Počáteční vklad plus každý váš pravidelný vklad. Žádný růst. Tohle jsou peníze, které odcházejí z vaší kapsy.',
    'Zůstatek s růstem, ale bez jakéhokoli odpočtu. Ze čtyř největší a nejméně vypovídající — a právě to číslo většina kalkulaček ukazuje samostatně.',
    'Tentýž zůstatek s daní odečtenou v okamžicích, které určuje zvolený režim zdanění.',
    'Zůstatek po zdanění převedený na dnešní kupní sílu. Tohle je hlavní číslo v horní části aplikace a jediné, které odpovídá na otázku, co si za ty peníze skutečně koupíte.',
  ],

  irrTitle: '8. Reálný výnos',
  irrWhyNot: 'Procento vedle popisku «Výnosnost (CAGR)» není konečná hodnota dělená celkovými vklady. Tato zkratka zachází s každou měsíční platbou, jako by byla investována první den, čímž výnos výrazně podhodnocuje — v příkladu níže by ukázala asi 2,6 % místo 4,71 %.',
  irrBefore: 'Kalkulačka místo toho hledá sazbu, při které se současná hodnota všeho, co jste vložili, rovná hodnotě, se kterou skončíte. Každá platba se nejprve převede na dnešní peníze, takže výsledkem je reálný výnos po zdanění a po inflaci. Je-li c(m) částka vložená v měsíci m a V konečný reálný zůstatek, měsíční sazba x je řešením rovnice:',
  irrAfter: 'Tato rovnice nemá řešení v uzavřeném tvaru, řeší se proto numericky metodou půlení intervalu mezi −50 % a +50 % měsíčně, dokud není interval menší než 10⁻¹². Měsíční výsledek se pak převede na roční:',
  irrNote: 'Jde o vnitřní výnosové procento, tedy tutéž míru, jakou se porovnávají investice s nepravidelnými peněžními toky. Protože zohledňuje, kdy byla která platba provedena, lze ji přímo srovnávat s uváděným ročním výnosem — s tím rozdílem, že tato je již očištěná o daň a inflaci.',

  rangeTitle: '9. Optimistické a pesimistické rozpětí',
  rangeText: 'Když zapnete rozpětí sazeb, celá simulace proběhne třikrát: jednou s vaší minimální sazbou, jednou s očekávanou a jednou s maximální. Vše ostatní zůstává stejné. Tyto tři výsledky nejsou pravděpodobnosti a nenesou žádnou hladinu spolehlivosti; jen ukazují, co tentýž plán přinese za tří různých předpokladů, které jste si sami zvolili.',

  exampleTitle: '10. Rozepsaný příklad',
  exampleIntro: 'Toto jsou výchozí hodnoty aplikace. Každé číslo níže si lze ověřit na kalkulačce a všechna přesně odpovídají tomu, co aplikace zobrazuje.',
  exampleGivenTitle: 'Vstupy',
  exampleGivenLabels: [
    'Počáteční vklad',
    'Doba',
    'Roční výnos',
    'Úročení',
    'Vklad',
    'Inflace',
    'Daň',
  ],
  exampleStepsTitle: 'První rok, měsíc po měsíci',
  exampleSteps: [
    'Měsíční sazba: (1 + 0,08 ÷ 1) na 1 ÷ 12, minus 1 = 0,00643403.',
    'Měsíc 1: 10 000 × 1,00643403 = 10 064,34, plus vklad 500 = 10 564,34.',
    'Měsíc 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Takto až do měsíce 12 zůstatek dosáhne 17 016,94. Za rok jste vložili 6 000 a začínali s 10 000, zisk je tedy 17 016,94 − 16 000 = 1 016,94.',
    'Daň 15 % z tohoto zisku činí 152,54, odečte se okamžitě a do druhého roku přechází 16 864,40.',
  ],
  exampleResultTitle: 'Po všech 15 letech',
  exampleResultLabels: [
    'Celkem vloženo',
    'Nominální hodnota',
    'Nominální po zdanění',
    'V dnešních penězích',
    'Reálný výnos ročně',
  ],
  exampleClosing: 'Přečtěte si poslední řádek pozorně. Vložíte 100 000 a končíte s kupní silou 133 640. Nominálních 200 525 vypadá jako zdvojnásobení, jenže daň z toho ubere 20 663 a inflace dalších 46 222. Právě kvůli této mezeře tahle kalkulačka existuje.',

  excludedTitle: '11. Co model nezahrnuje',
  excludedIntro: 'Jde o záměrná vynechání. Když je znáte, víte, nakolik výsledku věřit.',
  excluded: [
    'Poplatky brokera, poplatky platformy, náklady na správu fondu a rozpětí mezi nákupní a prodejní cenou. Na dlouhém horizontu může 1 % ročního poplatku spolknout pětinu konečné reálné hodnoty.',
    'Progresivní daňová pásma, slevy, započtení ztrát a daňově zvýhodněné účty. Na veškerý zisk se uplatňuje jediná lineární sazba.',
    'Převod měn a pohyb kurzů. Všechna čísla jsou v jednotce, kterou jste zadali.',
    'Volatilitu trhu. Výnos se připisuje každý měsíc rovnoměrně, takže riziko pořadí výnosů, které je ke konci dlouhé investice nejdůležitější, tu není vidět.',
    'Jakékoli navyšování vašich vkladů v čase, ať už s inflací, nebo s příjmem.',
    'Výběry, přestávky nebo předčasné ukončení před koncem období.',
    'Dividendy řešené odděleně od růstu ceny; zadaný výnos se považuje za celkový výnos.',
    'Cokoli specifického pro vaši zemi, vašeho poskytovatele nebo vaši osobní situaci.',
  ],

  limitsTitle: '12. Meze tohoto nástroje',
  limits: [
    'Vše na této stránce je předpoklad a nic víc. Model věrně spočítá důsledky čísel, která jste zadali; nemá názor na to, zda jsou ta čísla realistická, a nemá jak to zjistit.',
    'Všechny výsledky jsou přibližné. Zobrazené hodnoty se pro čitelnost zaokrouhlují, zatímco vnitřní výpočet si drží plnou přesnost, takže ruční kontrola se může lišit v poslední číslici nebo dvou.',
    'Kalkulačka se poskytuje tak, jak je, bez jakékoli záruky. Vůči autorům ani vydavateli nelze uplatnit žádný nárok z jakéhokoli rozhodnutí, ztráty či škody spojené s jejím používáním.',
  ],
};
