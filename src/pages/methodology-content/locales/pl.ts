import type { MethodologyContent } from '../types';

export const pl: MethodologyContent = {
  title: 'Metodologia obliczeń',
  updated: 'Dotyczy wersji {version}',

  disclaimerTitle: 'Przeczytaj to najpierw',
  disclaimer: [
    'Ta strona istnieje po to, żebyś mógł sprawdzić każdą liczbę pokazywaną przez kalkulator. Podaje wszystkie wzory, kolejność ich stosowania oraz w pełni rozpisany przykład, który da się odtworzyć na kartce. To informacja edukacyjna o tym, jak działa narzędzie — nie jest to porada finansowa, inwestycyjna, podatkowa ani prawna, ani rekomendacja kupna, sprzedaży czy utrzymania czegokolwiek.',
    'Wszystko, co kalkulator wylicza, jest projekcją opartą na wprowadzonych przez Ciebie założeniach, a nie prognozą. Zakłada stałą stopę zwrotu, stałą inflację i stałą stawkę podatku przez cały okres. Prawdziwe rynki tak się nie zachowują. Rzeczywiste wyniki będą inne, a w długim okresie mogą różnić się ogromnie.',
    'Liczby są przybliżone i udostępniane w stanie, w jakim są, bez jakiejkolwiek gwarancji. Każda decyzja podjęta po skorzystaniu z tego kalkulatora należy wyłącznie do Ciebie, a ani autorzy, ani wydawca nie ponoszą odpowiedzialności za wynikające z niej straty lub szkody. Jeśli pieniądze mają dla Ciebie znaczenie, przelicz wszystko samodzielnie i porozmawiaj z wykwalifikowanym doradcą w swoim kraju.',
  ],

  colSymbol: 'Oznaczenie',
  colMeaning: 'Znaczenie',
  colValue: 'Wartość',
  colFrequency: 'Częstotliwość',
  colMonthlyAmount: 'Kwota dopisana w danym miesiącu',

  inputsTitle: '1. Co wprowadzasz',
  inputsIntro: 'To jedyne wartości, z których korzysta model. Nic nie jest pobierane z internetu i nic nie jest zakładane za Ciebie.',
  inputMeanings: [
    'Wpłata początkowa — kwota, od której zaczynasz',
    'Okres inwestowania w pełnych latach',
    'Oczekiwana roczna stopa zwrotu, w procentach',
    'Liczba okresów kapitalizacji w roku (dzienna = 365, miesięczna = 12, kwartalna = 4, półroczna = 2, roczna = 1)',
    'Kwota dopłaty, dodawana z wybraną przez Ciebie częstotliwością',
    'Oczekiwana roczna inflacja, w procentach',
    'Stawka podatku od zysków, w procentach',
  ],

  rateTitle: '2. Przeliczenie Twojej stopy na miesięczną',
  rateBefore: 'Model przesuwa się miesiąc po miesiącu, więc wprowadzoną stopę roczną trzeba wyrazić jako równoważną stopę miesięczną. Twoja stopa kapitalizuje się n razy w roku, zatem każdy okres kapitalizacji daje r ÷ n, a miesiąc to n ÷ 12 takiego okresu.',
  rateAfter: 'To wykładnik utrzymuje obie w zgodzie: skapitalizowanie tej stopy miesięcznej dwanaście razy odtwarza dokładnie Twoją stopę roczną, więc wartości na koniec roku pokrywają się ze zwykłym rachunkiem rocznym. Przy 8 % z kapitalizacją roczną stopa miesięczna wynosi 0,643403 %.',

  contribTitle: '3. Jak dodawane są dopłaty',
  contribIntro: 'Ponieważ model działa w ujęciu miesięcznym, dopłaty częstsze niż miesięczne są przeliczane na średnią kwotę miesięczną, a rzadsze dodawane tylko w tych miesiącach, w których faktycznie przypadają.',
  contribFrequencies: [
    'Bez dopłat',
    'Codziennie',
    'Co tydzień',
    'Co miesiąc',
    'Co kwartał',
    'Co pół roku',
    'Co rok',
  ],
  contribNote: 'Uśrednienie dopłat dziennych i tygodniowych zachowuje dokładną sumę roczną — 365 wpłat dziennych i 52 tygodniowe to tyle, ile rzeczywiście wpływa w ciągu roku — kosztem kilku dni odsetek tu i ówdzie. Ta różnica jest znacznie mniejsza niż błąd w oszacowaniu własnej stopy zwrotu.',

  orderTitle: '4. Co dzieje się w każdym miesiącu',
  orderIntro: 'Każdy z 12 × Y miesięcy przechodzi te same trzy kroki, w tej kolejności:',
  orderSteps: [
    'Do salda przeniesionego z poprzedniego miesiąca dopisywane są odsetki.',
    'Dodawana jest Twoja dopłata za ten miesiąc.',
    'Potrącany jest podatek, jeśli w tym miesiącu jest należny.',
  ],
  orderNote: 'Odsetki naliczane są przed dopłatą, więc wpłata z tego miesiąca w tym samym miesiącu nic nie zarabia. To konwencja renty płatnej z dołu i jednocześnie wybór ostrożniejszy: wpłata na początku miesiąca podniosłaby wynik końcowy o mniej więcej jeden miesiąc wzrostu.',

  taxTitle: '5. Podatek',
  taxIntro: 'Podatek obciąża wyłącznie zyski, nigdy wpłaconych przez Ciebie pieniędzy. To Ty wybierasz, kiedy jest pobierany.',
  taxAnnualLabel: 'Co roku',
  taxAnnualText: 'Na koniec każdego dwunastego miesiąca zysk wypracowany w danym roku jest opodatkowany, a podatek natychmiast zdejmowany z salda. Zysk to bieżące saldo minus saldo na początku roku minus wszystko, co dopłaciłeś w ciągu roku. Jeśli rok kończy się stratą, zysk jest ujemny i podatku nie ma, ale ta strata nie przechodzi na kolejne lata.',
  taxExitLabel: 'Przy wyjściu',
  taxExitText: 'Nic nie jest potrącane aż do ostatniego miesiąca, kiedy cały zysk z całego okresu zostaje opodatkowany jednorazowo. Zysk to saldo końcowe minus wszystkie wpłaty, łącznie z wpłatą początkową.',
  taxNote: 'W długim okresie oba tryby różnią się istotnie, bo podatek płacony co roku to pieniądze, które przestają procentować. W przykładzie poniżej opodatkowanie roczne kosztuje około 14 093 — warto porównać oba warianty, zanim zdecydujesz, który pasuje do Twojej sytuacji.',

  inflationTitle: '6. Inflacja',
  inflationIntro: 'Inflacja nie jest odejmowana od salda. Stosuje się ją na końcu, jako przeliczenie przyszłych pieniędzy na to, co kupiłyby dzisiaj:',
  inflationNote: 't to liczba minionych lat, więc wartość w miesiącu m używa t = m ÷ 12. Dlatego wartość «realna» jest zawsze niższa od nominalnej, gdy inflacja jest dodatnia: pieniędzy przybywa, ale każda jednostka kupuje mniej.',

  figuresTitle: '7. Cztery główne liczby',
  figuresIntro: 'Kafelki pod głównym wynikiem to cztery spojrzenia na tę samą symulację. Różnią się wyłącznie tym, które potrącenia już uwzględniono.',
  figureNames: [
    'Suma wpłat',
    'Wartość nominalna',
    'Nominalna po podatku',
    'Skorygowana o inflację',
  ],
  figureNotes: [
    'Wpłata początkowa plus każda Twoja dopłata. Bez żadnego wzrostu. To pieniądze, które wychodzą z Twojej kieszeni.',
    'Saldo ze wzrostem, ale bez jakichkolwiek potrąceń. Największa i najmniej znacząca z czterech — i akurat ta liczba, którą większość kalkulatorów pokazuje samodzielnie.',
    'To samo saldo z podatkiem pobranym w momentach wyznaczonych przez wybrany tryb opodatkowania.',
    'Saldo po podatku przeliczone na dzisiejszą siłę nabywczą. To główna liczba na górze aplikacji i jedyna, która odpowiada, co te pieniądze naprawdę kupią.',
  ],

  irrTitle: '8. Realna stopa zwrotu',
  irrWhyNot: 'Procent obok napisu «Rentowność (CAGR)» to nie wartość końcowa podzielona przez sumę wpłat. Taki skrót traktuje każdą miesięczną wpłatę tak, jakby została zainwestowana pierwszego dnia, co mocno zaniża zwrot — w przykładzie poniżej pokazałby około 2,6 % zamiast 4,71 %.',
  irrBefore: 'Zamiast tego kalkulator szuka stopy, przy której wartość bieżąca wszystkiego, co wpłaciłeś, równa się temu, co masz na końcu. Każda wpłata jest najpierw przeliczana na dzisiejsze pieniądze, więc odpowiedź to zwrot realny, po podatku i po inflacji. Gdzie c(m) to kwota wpłacona w miesiącu m, a V to końcowe saldo realne, stopa miesięczna x jest rozwiązaniem równania:',
  irrAfter: 'To równanie nie ma rozwiązania w postaci zamkniętej, więc rozwiązywane jest numerycznie metodą bisekcji w przedziale od −50 % do +50 % miesięcznie, zawężanym aż będzie mniejszy niż 10⁻¹². Wynik miesięczny jest następnie przeliczany na rok:',
  irrNote: 'To wewnętrzna stopa zwrotu, ta sama miara, którą porównuje się inwestycje o nieregularnych przepływach. Ponieważ uwzględnia moment każdej wpłaty, można ją bezpośrednio zestawiać z podawaną stopą roczną — z tą różnicą, że ta jest już po podatku i po inflacji.',

  rangeTitle: '9. Zakres optymistyczny i pesymistyczny',
  rangeText: 'Po włączeniu zakresu stóp cała symulacja przechodzi trzy razy: raz z Twoją stopą minimalną, raz z oczekiwaną i raz z maksymalną. Wszystko inne pozostaje takie samo. Te trzy wyniki nie są prawdopodobieństwami i nie mają poziomu ufności; pokazują po prostu, co daje ten sam plan przy trzech różnych założeniach, które sam wybrałeś.',

  exampleTitle: '10. Rozpisany przykład',
  exampleIntro: 'To domyślne wartości aplikacji. Każdą liczbę poniżej da się odtworzyć na kalkulatorze i wszystkie dokładnie odpowiadają temu, co pokazuje aplikacja.',
  exampleGivenTitle: 'Dane wejściowe',
  exampleGivenLabels: [
    'Wpłata początkowa',
    'Okres',
    'Roczna stopa zwrotu',
    'Kapitalizacja',
    'Dopłata',
    'Inflacja',
    'Podatek',
  ],
  exampleStepsTitle: 'Pierwszy rok, miesiąc po miesiącu',
  exampleSteps: [
    'Stopa miesięczna: (1 + 0,08 ÷ 1) do potęgi 1 ÷ 12, minus 1 = 0,00643403.',
    'Miesiąc 1: 10 000 × 1,00643403 = 10 064,34, plus dopłata 500 = 10 564,34.',
    'Miesiąc 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'Kontynuując do miesiąca 12, saldo osiąga 17 016,94. W ciągu roku dopłaciłeś 6 000 i zaczynałeś od 10 000, więc zysk wynosi 17 016,94 − 16 000 = 1 016,94.',
    'Podatek 15 % od tego zysku to 152,54, potrącony od razu, co pozostawia 16 864,40 na drugi rok.',
  ],
  exampleResultTitle: 'Po wszystkich 15 latach',
  exampleResultLabels: [
    'Suma wpłat',
    'Wartość nominalna',
    'Nominalna po podatku',
    'W dzisiejszych pieniądzach',
    'Realny zwrot rocznie',
  ],
  exampleClosing: 'Przeczytaj uważnie ostatni wiersz. Wpłacasz 100 000, a kończysz z siłą nabywczą 133 640. Nominalne 200 525 wygląda na podwojenie, ale podatek zabiera z tego 20 663, a inflacja kolejne 46 222. To właśnie dla tej różnicy ten kalkulator istnieje.',

  excludedTitle: '11. Czego model nie uwzględnia',
  excludedIntro: 'To celowe pominięcia. Ich znajomość mówi, na ile można ufać wynikowi.',
  excluded: [
    'Prowizji maklerskich, opłat platformy, kosztów zarządzania funduszem i spreadów. W długim horyzoncie 1 % opłaty rocznej potrafi pochłonąć piątą część końcowej wartości realnej.',
    'Progów podatkowych, kwot wolnych, rozliczania strat i kont z ulgą podatkową. Do wszystkich zysków stosowana jest jedna płaska stawka.',
    'Przewalutowania i zmian kursów. Wszystkie liczby są w tej jednostce, którą wpisałeś.',
    'Zmienności rynku. Stopa zwrotu naliczana jest równomiernie co miesiąc, więc ryzyko kolejności stóp zwrotu, najistotniejsze pod koniec długiej inwestycji, jest tu niewidoczne.',
    'Jakiegokolwiek wzrostu Twoich dopłat w czasie, czy to wraz z inflacją, czy z dochodem.',
    'Wypłat, przerw ani wcześniejszego zakończenia przed końcem okresu.',
    'Dywidend rozpatrywanych osobno od wzrostu ceny; wprowadzona stopa zwrotu jest traktowana jako zwrot całkowity.',
    'Wszystkiego, co specyficzne dla Twojego kraju, Twojego dostawcy lub Twojej sytuacji osobistej.',
  ],

  limitsTitle: '12. Ograniczenia tego narzędzia',
  limits: [
    'Wszystko na tej stronie to założenie i nic więcej. Model wiernie liczy konsekwencje liczb, które wpisałeś; nie ma zdania, czy te liczby są realistyczne, i nie ma jak tego sprawdzić.',
    'Wszystkie wyniki są przybliżone. Pokazywane wartości są zaokrąglane dla czytelności, podczas gdy obliczenia wewnętrzne zachowują pełną dokładność, więc sprawdzenie ręczne może różnić się na ostatniej cyfrze lub dwóch.',
    'Kalkulator udostępniany jest w stanie, w jakim jest, bez jakiejkolwiek gwarancji. Wobec autorów ani wydawcy nie można wysuwać roszczeń z tytułu decyzji, strat czy szkód związanych z jego użyciem.',
  ],
};
