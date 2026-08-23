import type { MethodologyContent } from '../types';

export const it: MethodologyContent = {
  title: 'Metodologia di calcolo',
  updated: 'Riferito alla versione {version}',

  disclaimerTitle: 'Da leggere per primo',
  disclaimer: [
    'Questa pagina esiste perché possiate verificare ogni cifra mostrata dal calcolatore. Riporta tutte le formule, l\'ordine in cui vengono applicate e un esempio interamente sviluppato che potete rifare con carta e penna. Sono informazioni didattiche sul funzionamento dello strumento: non costituiscono consulenza finanziaria, di investimento, fiscale o legale, né una raccomandazione ad acquistare, vendere o detenere alcunché.',
    'Tutto ciò che il calcolatore produce è una proiezione basata sulle ipotesi che inserite, non una previsione. Presuppone un rendimento costante, un\'inflazione costante e un\'aliquota fiscale costante per l\'intero periodo. I mercati reali non si comportano così. I risultati effettivi saranno diversi e, su orizzonti lunghi, possono differire enormemente.',
    'Le cifre sono approssimative e vengono fornite così come sono, senza alcuna garanzia. Qualsiasi decisione presa dopo aver usato questo calcolatore è esclusivamente vostra e né gli autori né l\'editore si assumono responsabilità per perdite o danni che ne derivino. Se i soldi contano per voi, rifate i conti da soli e rivolgetevi a un consulente qualificato nel vostro paese.',
  ],

  colSymbol: 'Simbolo',
  colMeaning: 'Significato',
  colValue: 'Valore',
  colFrequency: 'Frequenza',
  colMonthlyAmount: 'Importo aggiunto quel mese',

  inputsTitle: '1. Ciò che inserite',
  inputsIntro: 'Questi sono gli unici valori usati dal modello. Nulla viene scaricato da internet e nulla viene ipotizzato al posto vostro.',
  inputMeanings: [
    'Deposito iniziale — la somma con cui iniziate',
    'Durata dell\'investimento in anni interi',
    'Rendimento annuo atteso, in percentuale',
    'Periodi di capitalizzazione all\'anno (giornaliera = 365, mensile = 12, trimestrale = 4, semestrale = 2, annuale = 1)',
    'Importo del versamento, aggiunto con la frequenza che scegliete',
    'Inflazione annua attesa, in percentuale',
    'Aliquota fiscale sui guadagni, in percentuale',
  ],

  rateTitle: '2. Convertire il vostro tasso in un tasso mensile',
  rateBefore: 'Il modello avanza mese per mese, quindi il tasso annuo inserito va espresso come tasso mensile equivalente. Il vostro tasso capitalizza n volte l\'anno, perciò ogni periodo di capitalizzazione rende r ÷ n e un mese equivale a n ÷ 12 di tale periodo.',
  rateAfter: 'È l\'esponente a mantenerli coerenti: capitalizzare questo tasso mensile dodici volte riproduce esattamente il vostro tasso annuo, così i valori di fine anno coincidono con un calcolo annuale diretto. Con l\'8 % capitalizzato annualmente il tasso mensile è dello 0,643403 %.',

  contribTitle: '3. Come vengono aggiunti i versamenti',
  contribIntro: 'Poiché il modello lavora su base mensile, i versamenti più frequenti del mese vengono convertiti in un importo mensile medio, mentre quelli meno frequenti vengono aggiunti solo nei mesi in cui cadono davvero.',
  contribFrequencies: [
    'Nessun versamento',
    'Giornaliero',
    'Settimanale',
    'Mensile',
    'Trimestrale',
    'Semestrale',
    'Annuale',
  ],
  contribNote: 'Mediare i versamenti giornalieri e settimanali mantiene esatto il totale annuo — 365 pagamenti giornalieri e 52 settimanali sono ciò che viene realmente accreditato in un anno — al prezzo di qualche giorno di interessi qua e là. La differenza è molto minore dell\'errore che si commette stimando il proprio rendimento.',

  orderTitle: '4. Cosa succede ogni mese',
  orderIntro: 'Ciascuno dei 12 × Y mesi viene elaborato negli stessi tre passaggi, in quest\'ordine:',
  orderSteps: [
    'Gli interessi vengono applicati al saldo riportato dal mese precedente.',
    'Viene aggiunto il vostro versamento di questo mese.',
    'Viene detratta l\'imposta, se dovuta in questo mese.',
  ],
  orderNote: 'Gli interessi vengono applicati prima del versamento, quindi il pagamento di questo mese non rende nulla nel mese stesso. È la convenzione della rendita posticipata ed è la scelta prudenziale: pagare a inizio mese alzerebbe il risultato finale di circa un mese di crescita.',

  taxTitle: '5. Imposte',
  taxIntro: 'L\'imposta colpisce solo i guadagni, mai il denaro che versate. Siete voi a scegliere quando viene prelevata.',
  taxAnnualLabel: 'Ogni anno',
  taxAnnualText: 'Alla fine di ogni dodicesimo mese il guadagno maturato in quell\'anno viene tassato e l\'imposta viene sottratta subito dal saldo. Il guadagno è il saldo attuale, meno il saldo a inizio anno, meno tutto ciò che avete versato durante l\'anno. Se l\'anno si chiude in perdita il guadagno è negativo e non si paga imposta, ma quella perdita non viene riportata a compensare gli anni successivi.',
  taxExitLabel: 'All\'uscita',
  taxExitText: 'Non viene detratto nulla fino all\'ultimissimo mese, quando l\'intero guadagno dell\'intero periodo viene tassato in una sola volta. Il guadagno è il saldo finale meno tutti i versamenti, deposito iniziale compreso.',
  taxNote: 'Su orizzonti lunghi le due modalità differiscono in modo sostanziale, perché l\'imposta pagata ogni anno è denaro che smette di capitalizzare. Nell\'esempio più sotto la tassazione annuale costa circa 14 093: vale la pena confrontare le due opzioni prima di decidere quale rispecchia la vostra situazione.',

  inflationTitle: '6. Inflazione',
  inflationIntro: 'L\'inflazione non viene sottratta dal saldo. Viene applicata alla fine, come conversione del denaro futuro in ciò che comprerebbe oggi:',
  inflationNote: 't è il numero di anni trascorsi, quindi un valore al mese m usa t = m ÷ 12. Per questo la cifra «reale» è sempre inferiore a quella nominale quando l\'inflazione è positiva: il denaro cresce, ma ogni unità compra meno.',

  figuresTitle: '7. Le quattro cifre principali',
  figuresIntro: 'I riquadri sotto il risultato principale sono quattro viste della stessa simulazione. Differiscono solo per quali detrazioni sono già state applicate.',
  figureNames: [
    'Totale versato',
    'Valore nominale',
    'Nominale al netto delle imposte',
    'Corretto per l\'inflazione',
  ],
  figureNotes: [
    'Il deposito iniziale più ogni vostro versamento. Nessuna crescita di alcun tipo. È il denaro che esce dalla vostra tasca.',
    'Il saldo con la crescita applicata ma senza alcuna detrazione. È il più grande e il meno significativo dei quattro: è la cifra che la maggior parte dei calcolatori mostra da sola.',
    'Lo stesso saldo con l\'imposta prelevata nei momenti stabiliti dalla modalità di tassazione scelta.',
    'Il saldo al netto delle imposte convertito nel potere d\'acquisto di oggi. È la cifra in evidenza in cima all\'app e l\'unica che risponde a cosa quel denaro comprerà davvero.',
  ],

  irrTitle: '8. Il rendimento reale',
  irrWhyNot: 'La percentuale accanto a «Redditività (CAGR)» non è il valore finale diviso per il totale versato. Quella scorciatoia tratta ogni versamento mensile come se fosse stato investito il primo giorno, sottostimando pesantemente il rendimento: nell\'esempio qui sotto indicherebbe circa il 2,6 % invece del 4,71 %.',
  irrBefore: 'Il calcolatore cerca invece il tasso che rende il valore attuale di tutto ciò che avete versato pari al valore che vi ritrovate alla fine. Ogni versamento viene prima convertito in denaro di oggi, quindi la risposta è un rendimento reale, al netto di imposte e inflazione. Con c(m) l\'importo versato nel mese m e V il saldo reale finale, il tasso mensile x è la soluzione di:',
  irrAfter: 'Quell\'equazione non ha soluzione in forma chiusa, perciò viene risolta numericamente per bisezione tra −50 % e +50 % mensile, restringendo l\'intervallo finché non è inferiore a 10⁻¹². Il risultato mensile viene poi annualizzato:',
  irrNote: 'È il tasso interno di rendimento, la stessa misura usata per confrontare investimenti con flussi di cassa irregolari. Poiché tiene conto di quando è stato fatto ogni versamento, è direttamente confrontabile con un rendimento annuo dichiarato, con la differenza che questo è già al netto di imposte e inflazione.',

  rangeTitle: '9. L\'intervallo ottimistico e pessimistico',
  rangeText: 'Quando attivate l\'intervallo di tassi, l\'intera simulazione viene eseguita tre volte: una con il tasso minimo, una con quello atteso e una con il massimo. Tutto il resto resta identico. I tre risultati non sono probabilità e non hanno alcun livello di confidenza; mostrano semplicemente cosa produce lo stesso piano sotto tre ipotesi diverse che avete scelto voi.',

  exampleTitle: '10. Un esempio svolto',
  exampleIntro: 'Questi sono i valori predefiniti dell\'app. Ogni cifra qui sotto è riproducibile con una calcolatrice e coincide esattamente con quanto mostra l\'app.',
  exampleGivenTitle: 'Dati di partenza',
  exampleGivenLabels: [
    'Deposito iniziale',
    'Durata',
    'Rendimento annuo',
    'Capitalizzazione',
    'Versamento',
    'Inflazione',
    'Imposta',
  ],
  exampleStepsTitle: 'Il primo anno, mese per mese',
  exampleSteps: [
    'Tasso mensile: (1 + 0,08 ÷ 1) elevato a 1 ÷ 12, meno 1 = 0,00643403.',
    'Mese 1: 10 000 × 1,00643403 = 10 064,34, più il versamento di 500 = 10 564,34.',
    'Mese 2: 10 564,34 × 1,00643403 = 10 632,31, più 500 = 11 132,31.',
    'Proseguendo fino al mese 12 il saldo raggiunge 17 016,94. Nell\'anno avete versato 6 000 e siete partiti da 10 000, quindi il guadagno è 17 016,94 − 16 000 = 1 016,94.',
    'L\'imposta del 15 % su quel guadagno è 152,54, detratta subito, lasciando 16 864,40 da riportare al secondo anno.',
  ],
  exampleResultTitle: 'Dopo tutti i 15 anni',
  exampleResultLabels: [
    'Totale versato',
    'Valore nominale',
    'Nominale al netto delle imposte',
    'In denaro di oggi',
    'Rendimento reale annuo',
  ],
  exampleClosing: 'Leggete con attenzione l\'ultima riga. Versate 100 000 e finite con il potere d\'acquisto di 133 640. I 200 525 nominali sembrano un raddoppio, ma le imposte ne tolgono 20 663 e l\'inflazione altri 46 222. È esattamente per questo divario che esiste questo calcolatore.',

  excludedTitle: '11. Cosa il modello non comprende',
  excludedIntro: 'Sono omissioni volute. Conoscerle vi dice quanto fidarvi del risultato.',
  excluded: [
    'Commissioni di negoziazione, costi di piattaforma, spese di gestione dei fondi e spread denaro-lettera. Su un orizzonte lungo una commissione annua dell\'1 % può erodere un quinto del valore reale finale.',
    'Scaglioni fiscali progressivi, franchigie, compensazione delle minusvalenze e conti a fiscalità agevolata. A tutti i guadagni viene applicata un\'unica aliquota fissa.',
    'La conversione valutaria e le variazioni dei cambi. Tutte le cifre sono nell\'unità che avete inserito.',
    'La volatilità dei mercati. Il rendimento viene applicato in modo uniforme ogni mese, quindi il rischio legato alla sequenza dei rendimenti, quello che pesa di più verso la fine di un investimento lungo, qui è invisibile.',
    'Qualsiasi aumento dei vostri versamenti nel tempo, sia con l\'inflazione sia con il reddito.',
    'Prelievi, sospensioni o uscita anticipata prima della fine del periodo.',
    'I dividendi trattati separatamente dalla crescita dei prezzi; il rendimento inserito è considerato rendimento totale.',
    'Tutto ciò che riguarda specificamente il vostro paese, il vostro intermediario o la vostra situazione personale.',
  ],

  limitsTitle: '12. Limiti di questo strumento',
  limits: [
    'Tutto ciò che c\'è in questa pagina è un\'ipotesi e nulla di più. Il modello calcola fedelmente le conseguenze delle cifre che avete digitato; non ha alcuna opinione sul fatto che quelle cifre siano realistiche, né modo di saperlo.',
    'Tutti i risultati sono approssimativi. I valori mostrati sono arrotondati per leggibilità mentre i calcoli interni conservano la piena precisione: una verifica a mano può quindi differire nell\'ultima cifra o nelle ultime due.',
    'Il calcolatore è fornito così com\'è, senza alcuna garanzia. Nessuna pretesa può essere avanzata nei confronti degli autori o dell\'editore per decisioni, perdite o danni legati al suo utilizzo.',
  ],
};
