import type { MethodologyContent } from '../types';

export const de: MethodologyContent = {
  title: 'Berechnungsmethodik',
  updated: 'Gilt für Version {version}',

  disclaimerTitle: 'Bitte zuerst lesen',
  disclaimer: [
    'Diese Seite existiert, damit Sie jede Zahl des Rechners überprüfen können. Sie führt jede Formel auf, die Reihenfolge ihrer Anwendung und ein vollständig durchgerechnetes Beispiel, das Sie mit Stift und Papier nachvollziehen können. Es handelt sich um erläuternde Informationen zur Funktionsweise des Werkzeugs — nicht um Finanz-, Anlage-, Steuer- oder Rechtsberatung und nicht um eine Empfehlung, irgendetwas zu kaufen, zu verkaufen oder zu halten.',
    'Alles, was der Rechner ausgibt, ist eine Hochrechnung aus den von Ihnen eingegebenen Annahmen, keine Prognose. Er unterstellt eine konstante Rendite, eine konstante Inflationsrate und einen konstanten Steuersatz über den gesamten Zeitraum. Reale Märkte verhalten sich nicht so. Die tatsächlichen Ergebnisse werden abweichen, über lange Zeiträume mitunter erheblich.',
    'Die Zahlen sind Näherungswerte und werden ohne jede Gewähr bereitgestellt. Jede Entscheidung, die Sie nach der Nutzung dieses Rechners treffen, liegt allein bei Ihnen; weder die Autoren noch der Herausgeber übernehmen Haftung für daraus entstehende Verluste oder Schäden. Wenn es um Ihr Geld geht, rechnen Sie selbst nach und sprechen Sie mit einer qualifizierten Beratung in Ihrem Land.',
  ],

  colSymbol: 'Symbol',
  colMeaning: 'Bedeutung',
  colValue: 'Wert',
  colFrequency: 'Häufigkeit',
  colMonthlyAmount: 'In diesem Monat eingezahlt',

  inputsTitle: '1. Was Sie eingeben',
  inputsIntro: 'Dies sind die einzigen Werte, die das Modell verwendet. Nichts wird aus dem Internet geladen und nichts für Sie unterstellt.',
  inputMeanings: [
    'Anfangsbetrag — die Summe, mit der Sie starten',
    'Anlagedauer in vollen Jahren',
    'Erwartete jährliche Rendite in Prozent',
    'Zinsperioden pro Jahr (täglich = 365, monatlich = 12, vierteljährlich = 4, halbjährlich = 2, jährlich = 1)',
    'Höhe der Einzahlung, hinzugefügt in der von Ihnen gewählten Häufigkeit',
    'Erwartete jährliche Inflation in Prozent',
    'Steuersatz auf Erträge in Prozent',
  ],

  rateTitle: '2. Ihren Zinssatz in einen Monatssatz umrechnen',
  rateBefore: 'Das Modell rechnet Monat für Monat, daher muss der eingegebene Jahreszins als gleichwertiger Monatszins ausgedrückt werden. Ihr Zinssatz wird n-mal jährlich kapitalisiert, jede Zinsperiode bringt also r ÷ n, und ein Monat entspricht n ÷ 12 einer solchen Periode.',
  rateAfter: 'Der Exponent hält beides konsistent: Kapitalisiert man diesen Monatssatz zwölfmal, ergibt sich exakt Ihr Jahreszins, sodass die Jahresendwerte einer direkten Jahresrechnung entsprechen. Bei 8 % mit jährlicher Kapitalisierung beträgt der Monatssatz 0,643403 %.',

  contribTitle: '3. Wie Einzahlungen hinzugefügt werden',
  contribIntro: 'Da das Modell monatlich rechnet, werden häufiger als monatlich geleistete Einzahlungen in einen durchschnittlichen Monatsbetrag umgerechnet; seltenere werden nur in den Monaten hinzugefügt, in die sie tatsächlich fallen.',
  contribFrequencies: [
    'Keine Einzahlungen',
    'Täglich',
    'Wöchentlich',
    'Monatlich',
    'Vierteljährlich',
    'Halbjährlich',
    'Jährlich',
  ],
  contribNote: 'Die Mittelung täglicher und wöchentlicher Einzahlungen hält die Jahressumme exakt — 365 tägliche beziehungsweise 52 wöchentliche Zahlungen werden über ein Jahr tatsächlich gutgeschrieben — um den Preis von hier und da ein paar Tagen Zinsen. Dieser Unterschied ist weit kleiner als der Fehler beim Schätzen Ihrer Rendite.',

  orderTitle: '4. Was in jedem Monat passiert',
  orderIntro: 'Jeder der 12 × Y Monate wird in denselben drei Schritten verarbeitet, in dieser Reihenfolge:',
  orderSteps: [
    'Auf den aus dem Vormonat übertragenen Bestand werden Zinsen gutgeschrieben.',
    'Ihre Einzahlung für diesen Monat wird hinzugefügt.',
    'Steuer wird abgezogen, sofern in diesem Monat welche fällig ist.',
  ],
  orderNote: 'Zinsen werden vor der Einzahlung gutgeschrieben, die Zahlung dieses Monats bringt also in diesem Monat noch nichts ein. Das entspricht der nachschüssigen Rentenrechnung und ist die konservative Wahl: eine Zahlung zu Monatsbeginn würde das Endergebnis um etwa einen Monat Wachstum erhöhen.',

  taxTitle: '5. Steuern',
  taxIntro: 'Besteuert werden ausschließlich Erträge, niemals das von Ihnen eingezahlte Geld. Wann die Steuer anfällt, bestimmen Sie.',
  taxAnnualLabel: 'Jährlich',
  taxAnnualText: 'Am Ende jedes zwölften Monats wird der in diesem Jahr erzielte Ertrag besteuert und die Steuer sofort dem Bestand entnommen. Der Ertrag ist der aktuelle Bestand abzüglich des Bestands zu Jahresbeginn abzüglich aller Einzahlungen des Jahres. Endet das Jahr mit einem Verlust, ist der Ertrag negativ und es fällt keine Steuer an; dieser Verlust wird jedoch nicht in spätere Jahre vorgetragen.',
  taxExitLabel: 'Bei Auszahlung',
  taxExitText: 'Bis zum allerletzten Monat wird nichts abgezogen; dann wird der gesamte Ertrag des kompletten Zeitraums auf einmal besteuert. Der Ertrag ist der Endbestand abzüglich aller Einzahlungen einschließlich des Anfangsbetrags.',
  taxNote: 'Über lange Zeiträume unterscheiden sich beide Varianten deutlich, denn jährlich gezahlte Steuer ist Geld, das nicht weiter mitverzinst wird. Im Beispiel unten kostet die jährliche Besteuerung rund 14 093 — ein Vergleich lohnt sich, bevor Sie entscheiden, was zu Ihrer Situation passt.',

  inflationTitle: '6. Inflation',
  inflationIntro: 'Die Inflation wird nicht vom Bestand abgezogen. Sie wird am Ende angewandt, als Umrechnung künftigen Geldes in das, was es heute kaufen würde:',
  inflationNote: 't ist die Zahl der vergangenen Jahre, ein Wert im Monat m verwendet also t = m ÷ 12. Deshalb liegt die «reale» Zahl bei positiver Inflation immer unter der nominalen: das Geld wächst, aber jede Einheit kauft weniger.',

  figuresTitle: '7. Die vier Kennzahlen',
  figuresIntro: 'Die Kacheln unter dem Hauptergebnis sind vier Sichten auf dieselbe Simulation. Sie unterscheiden sich nur darin, welche Abzüge bereits berücksichtigt sind.',
  figureNames: [
    'Summe der Einzahlungen',
    'Nominalwert',
    'Nominal nach Steuern',
    'Inflationsbereinigt',
  ],
  figureNotes: [
    'Der Anfangsbetrag plus jede Ihrer Einzahlungen. Ganz ohne Wachstum. Das ist das Geld, das Ihre Tasche verlässt.',
    'Der Bestand mit Wachstum, aber ohne jeden Abzug. Die größte und aussageschwächste der vier — und genau die Zahl, die die meisten Rechner für sich allein zeigen.',
    'Derselbe Bestand, mit zu den Zeitpunkten Ihres Besteuerungsmodus entnommener Steuer.',
    'Der Bestand nach Steuern, umgerechnet in heutige Kaufkraft. Das ist die Hauptzahl oben in der App und die einzige, die beantwortet, was das Geld tatsächlich kaufen wird.',
  ],

  irrTitle: '8. Die reale Rendite',
  irrWhyNot: 'Der Prozentwert neben «Rendite (CAGR)» ist nicht der Endwert geteilt durch die Summe der Einzahlungen. Diese Abkürzung behandelt jede monatliche Zahlung so, als wäre sie am ersten Tag angelegt worden, und unterschätzt die Rendite dadurch erheblich — im Beispiel unten läge sie bei etwa 2,6 % statt 4,71 %.',
  irrBefore: 'Stattdessen ermittelt der Rechner den Zinssatz, bei dem der Barwert aller Einzahlungen dem Betrag entspricht, den Sie am Ende haben. Jede Zahlung wird zuvor in heutiges Geld umgerechnet, die Antwort ist also eine reale Rendite nach Steuern und nach Inflation. Mit c(m) als dem im Monat m eingezahlten Betrag und V als realem Endbestand ist der Monatszins x die Lösung von:',
  irrAfter: 'Diese Gleichung hat keine geschlossene Lösung und wird daher numerisch per Bisektion zwischen −50 % und +50 % pro Monat gelöst, bis das Intervall kleiner als 10⁻¹² ist. Anschließend wird der Monatswert auf ein Jahr hochgerechnet:',
  irrNote: 'Das ist der interne Zinsfuß, dasselbe Maß, mit dem Anlagen mit unregelmäßigen Zahlungsströmen verglichen werden. Da er berücksichtigt, wann jede Zahlung erfolgte, ist er unmittelbar mit einer ausgewiesenen Jahresrendite vergleichbar — mit dem Unterschied, dass dieser Wert bereits um Steuern und Inflation bereinigt ist.',

  rangeTitle: '9. Die optimistische und pessimistische Spanne',
  rangeText: 'Wenn Sie die Zinsspanne einschalten, wird die gesamte Simulation dreimal durchgerechnet: einmal mit Ihrem Mindestzins, einmal mit dem erwarteten und einmal mit dem Höchstzins. Alles Übrige bleibt gleich. Die drei Ergebnisse sind keine Wahrscheinlichkeiten und tragen kein Konfidenzniveau; sie zeigen lediglich, was derselbe Plan unter drei von Ihnen selbst gewählten Annahmen ergibt.',

  exampleTitle: '10. Ein durchgerechnetes Beispiel',
  exampleIntro: 'Dies sind die Standardwerte der App. Jede Zahl unten lässt sich mit einem Taschenrechner nachvollziehen und entspricht exakt dem, was die App anzeigt.',
  exampleGivenTitle: 'Eingaben',
  exampleGivenLabels: [
    'Anfangsbetrag',
    'Zeitraum',
    'Jährliche Rendite',
    'Kapitalisierung',
    'Einzahlung',
    'Inflation',
    'Steuer',
  ],
  exampleStepsTitle: 'Das erste Jahr, Monat für Monat',
  exampleSteps: [
    'Monatszins: (1 + 0,08 ÷ 1) hoch 1 ÷ 12, minus 1 = 0,00643403.',
    'Monat 1: 10 000 × 1,00643403 = 10 064,34, plus die Einzahlung von 500 = 10 564,34.',
    'Monat 2: 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'So fortgeführt erreicht der Bestand im zwölften Monat 17 016,94. Im Jahr haben Sie 6 000 eingezahlt und mit 10 000 begonnen, der Ertrag beträgt also 17 016,94 − 16 000 = 1 016,94.',
    '15 % Steuer auf diesen Ertrag sind 152,54, sofort abgezogen, sodass 16 864,40 ins zweite Jahr übergehen.',
  ],
  exampleResultTitle: 'Nach allen 15 Jahren',
  exampleResultLabels: [
    'Summe der Einzahlungen',
    'Nominalwert',
    'Nominal nach Steuern',
    'In heutigem Geld',
    'Reale Rendite pro Jahr',
  ],
  exampleClosing: 'Lesen Sie die letzte Zeile genau. Sie zahlen 100 000 ein und enden mit der Kaufkraft von 133 640. Die nominalen 200 525 sehen nach einer Verdopplung aus, doch die Steuer nimmt davon 20 663 und die Inflation weitere 46 222. Genau wegen dieser Lücke gibt es diesen Rechner.',

  excludedTitle: '11. Was das Modell nicht berücksichtigt',
  excludedIntro: 'Das sind bewusste Auslassungen. Wer sie kennt, weiß, wie weit dem Ergebnis zu trauen ist.',
  excluded: [
    'Ordergebühren, Depotkosten, Fondsverwaltungsgebühren und Geld-Brief-Spannen. Über einen langen Zeitraum kann eine jährliche Gebühr von 1 % ein Fünftel des realen Endwerts aufzehren.',
    'Progressive Steuertarife, Freibeträge, Verlustverrechnung und steuerbegünstigte Depots. Auf alle Erträge wird ein einziger fester Satz angewandt.',
    'Währungsumrechnung und Wechselkursbewegungen. Alle Zahlen stehen in der von Ihnen eingegebenen Einheit.',
    'Marktschwankungen. Die Rendite wird jeden Monat gleichmäßig gutgeschrieben, das Renditereihenfolge-Risiko, das gegen Ende einer langen Anlage am meisten zählt, bleibt hier unsichtbar.',
    'Jede Erhöhung Ihrer Einzahlungen im Zeitverlauf, sei es mit der Inflation oder mit dem Einkommen.',
    'Entnahmen, Pausen oder ein vorzeitiger Ausstieg vor Ende des Zeitraums.',
    'Dividenden getrennt vom Kurszuwachs; die eingegebene Rendite gilt als Gesamtrendite.',
    'Alles, was Ihr Land, Ihren Anbieter oder Ihre persönlichen Verhältnisse betrifft.',
  ],

  limitsTitle: '12. Grenzen dieses Werkzeugs',
  limits: [
    'Alles auf dieser Seite ist eine Annahme und nicht mehr. Das Modell berechnet die Folgen der von Ihnen eingegebenen Zahlen getreu; ob diese Zahlen realistisch sind, dazu hat es keine Meinung und keine Möglichkeit, es zu wissen.',
    'Alle Ergebnisse sind Näherungswerte. Angezeigte Werte werden zur besseren Lesbarkeit gerundet, während intern mit voller Genauigkeit gerechnet wird; eine Handprobe kann daher in der letzten Stelle oder den letzten beiden abweichen.',
    'Der Rechner wird ohne jede Gewährleistung bereitgestellt. Gegen die Autoren oder den Herausgeber können keine Ansprüche wegen Entscheidungen, Verlusten oder Schäden im Zusammenhang mit seiner Nutzung geltend gemacht werden.',
  ],
};
