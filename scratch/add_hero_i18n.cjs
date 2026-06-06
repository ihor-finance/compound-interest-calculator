const fs = require('fs');

const translations = {
  en: {
    heroSubtitle: "Real purchasing power in {years} years",
    heroNarrativeWin: "From your {contributions} {currency} in contributions, you will have the equivalent of {result} {currency} in today's money — that's {difference} {currency} more than you invested, even after accounting for taxes and inflation.",
    heroNarrativeLoss: "From your {contributions} {currency} in contributions, you will have the equivalent of only {result} {currency} in today's money — that's {difference} {currency} less than you invested. Inflation and taxes consumed more than the investment earned.",
    heroNarrativeBreakeven: "From your {contributions} {currency} in contributions, you will have the equivalent of {result} {currency} in today's money — roughly the same as you invested. Your investment barely covers inflation.",
    realGrowth: "real growth",
    netEffect: "net effect"
  },
  uk: {
    heroSubtitle: "Реальна купівельна спроможність через {years} років",
    heroNarrativeWin: "З ваших {contributions} {currency} внесків ви матимете еквівалент {result} {currency} у сьогоднішніх грошах — це на {difference} {currency} більше, ніж ви вклали, навіть з урахуванням податків та інфляції.",
    heroNarrativeLoss: "З ваших {contributions} {currency} внесків ви матимете еквівалент лише {result} {currency} у сьогоднішніх грошах — це на {difference} {currency} менше, ніж ви вклали. Інфляція і податки з'їли більше, ніж заробила інвестиція.",
    heroNarrativeBreakeven: "З ваших {contributions} {currency} внесків ви матимете еквівалент {result} {currency} у сьогоднішніх грошах — приблизно стільки ж, скільки вклали. Ваша інвестиція ледь покриває інфляцію.",
    realGrowth: "реального приросту",
    netEffect: "чистого ефекту"
  },
  pl: {
    heroSubtitle: "Realna siła nabywcza za {years} lat",
    heroNarrativeWin: "Z Twoich {contributions} {currency} wkładów uzyskasz równowartość {result} {currency} w dzisiejszych pieniądzach — to o {difference} {currency} więcej niż zainwestowałeś, nawet po uwzględnieniu podatków i inflacji.",
    heroNarrativeLoss: "Z Twoich {contributions} {currency} wkładów uzyskasz równowartość jedynie {result} {currency} w dzisiejszych pieniądzach — to o {difference} {currency} mniej niż zainwestowałeś. Inflacja i podatki pochłonęły więcej, niż zarobiła inwestycja.",
    heroNarrativeBreakeven: "Z Twoich {contributions} {currency} wkładów uzyskasz równowartość {result} {currency} w dzisiejszych pieniądzach — mniej więcej tyle samo, ile zainwestowałeś. Twoja inwestycja ledwo pokrywa inflację.",
    realGrowth: "realnego wzrostu",
    netEffect: "efektu netto"
  },
  de: {
    heroSubtitle: "Reale Kaufkraft in {years} Jahren",
    heroNarrativeWin: "Aus Ihren {contributions} {currency} Einzahlungen erhalten Sie den Gegenwert von {result} {currency} in heutigem Geld — das sind {difference} {currency} mehr, als Sie investiert haben, selbst nach Steuern und Inflation.",
    heroNarrativeLoss: "Aus Ihren {contributions} {currency} Einzahlungen erhalten Sie nur den Gegenwert von {result} {currency} in heutigem Geld — das sind {difference} {currency} weniger, als Sie investiert haben. Inflation und Steuern haben mehr verschlungen, als die Investition eingebracht hat.",
    heroNarrativeBreakeven: "Aus Ihren {contributions} {currency} Einzahlungen erhalten Sie den Gegenwert von {result} {currency} in heutigem Geld — ungefähr so viel, wie Sie investiert haben. Ihre Investition deckt kaum die Inflation.",
    realGrowth: "reales Wachstum",
    netEffect: "Nettoeffekt"
  },
  fr: {
    heroSubtitle: "Pouvoir d'achat réel dans {years} ans",
    heroNarrativeWin: "À partir de vos {contributions} {currency} de contributions, vous aurez l'équivalent de {result} {currency} en monnaie d'aujourd'hui — soit {difference} {currency} de plus que votre investissement, même après impôts et inflation.",
    heroNarrativeLoss: "À partir de vos {contributions} {currency} de contributions, vous n'aurez l'équivalent que de {result} {currency} en monnaie d'aujourd'hui — soit {difference} {currency} de moins que votre investissement. L'inflation et les impôts ont consommé plus que ce que l'investissement a rapporté.",
    heroNarrativeBreakeven: "À partir de vos {contributions} {currency} de contributions, vous aurez l'équivalent de {result} {currency} en monnaie d'aujourd'hui — environ ce que vous avez investi. Votre investissement couvre à peine l'inflation.",
    realGrowth: "croissance réelle",
    netEffect: "effet net"
  },
  es: {
    heroSubtitle: "Poder adquisitivo real en {years} años",
    heroNarrativeWin: "De tus {contributions} {currency} en contribuciones, tendrás el equivalente a {result} {currency} en dinero de hoy — eso es {difference} {currency} más de lo que invertiste, incluso después de impuestos e inflación.",
    heroNarrativeLoss: "De tus {contributions} {currency} en contribuciones, tendrás el equivalente a solo {result} {currency} en dinero de hoy — eso es {difference} {currency} menos de lo que invertiste. La inflación y los impuestos consumieron más de lo que ganó la inversión.",
    heroNarrativeBreakeven: "De tus {contributions} {currency} en contribuciones, tendrás el equivalente a {result} {currency} en dinero de hoy — aproximadamente lo mismo que invertiste. Tu inversión apenas cubre la inflación.",
    realGrowth: "crecimiento real",
    netEffect: "efecto neto"
  },
  it: {
    heroSubtitle: "Potere d'acquisto reale in {years} anni",
    heroNarrativeWin: "Dai tuoi {contributions} {currency} di contributi, avrai l'equivalente di {result} {currency} nel denaro di oggi — ovvero {difference} {currency} in più rispetto a quanto investito, anche dopo tasse e inflazione.",
    heroNarrativeLoss: "Dai tuoi {contributions} {currency} di contributi, avrai l'equivalente di soli {result} {currency} nel denaro di oggi — ovvero {difference} {currency} in meno rispetto a quanto investito. L'inflazione e le tasse hanno consumato più di quanto l'investimento abbia guadagnato.",
    heroNarrativeBreakeven: "Dai tuoi {contributions} {currency} di contributi, avrai l'equivalente di {result} {currency} nel denaro di oggi — all'incirca quanto hai investito. Il tuo investimento copre a malapena l'inflazione.",
    realGrowth: "crescita reale",
    netEffect: "effetto netto"
  },
  pt: {
    heroSubtitle: "Poder de compra real em {years} anos",
    heroNarrativeWin: "De suas contribuições de {contributions} {currency}, você terá o equivalente a {result} {currency} no dinheiro de hoje — isso é {difference} {currency} a mais do que você investiu, mesmo após impostos e inflação.",
    heroNarrativeLoss: "De suas contribuições de {contributions} {currency}, você terá o equivalente a apenas {result} {currency} no dinheiro de hoje — isso é {difference} {currency} a menos do que você investiu. A inflação e os impostos consumiram mais do que o investimento rendeu.",
    heroNarrativeBreakeven: "De suas contribuições de {contributions} {currency}, você terá o equivalente a {result} {currency} no dinheiro de hoje — aproximadamente o mesmo que você investiu. Seu investimento mal cobre a inflação.",
    realGrowth: "crescimento real",
    netEffect: "efeito líquido"
  },
  tr: {
    heroSubtitle: "{years} yıl içinde reel satın alma gücü",
    heroNarrativeWin: "{contributions} {currency} katkınızdan, bugünün parasıyla {result} {currency} eşdeğerine sahip olacaksınız — bu, vergiler ve enflasyon hesaba katıldıktan sonra bile yatırdığınızdan {difference} {currency} daha fazla.",
    heroNarrativeLoss: "{contributions} {currency} katkınızdan, bugünün parasıyla yalnızca {result} {currency} eşdeğerine sahip olacaksınız — bu, yatırdığınızdan {difference} {currency} daha az. Enflasyon ve vergiler, yatırımın kazandırdığından fazlasını tüketti.",
    heroNarrativeBreakeven: "{contributions} {currency} katkınızdan, bugünün parasıyla {result} {currency} eşdeğerine sahip olacaksınız — yatırdığınızla hemen hemen aynı. Yatırımınız enflasyonu zar zor karşılıyor.",
    realGrowth: "reel büyüme",
    netEffect: "net etki"
  },
  "zh-CN": {
    heroSubtitle: "{years}年后的实际购买力",
    heroNarrativeWin: "从您投入的 {contributions} {currency} 中，您将拥有相当于今天 {result} {currency} 的金额 — 即使在扣除税费和通货膨胀后，也比您的投资多出 {difference} {currency}。",
    heroNarrativeLoss: "从您投入的 {contributions} {currency} 中，您将只拥有相当于今天 {result} {currency} 的金额 — 比您的投资少了 {difference} {currency}。通货膨胀和税收消耗的比投资赚取的还要多。",
    heroNarrativeBreakeven: "从您投入的 {contributions} {currency} 中，您将拥有相当于今天 {result} {currency} 的金额 — 约等于您的投资。您的投资勉强能抵御通货膨胀。",
    realGrowth: "实际增长",
    netEffect: "净影响"
  },
  ja: {
    heroSubtitle: "{years}年後の実質購買力",
    heroNarrativeWin: "投資した {contributions} {currency} から、今日の貨幣価値で {result} {currency} に相当する額になります。税金やインフレを考慮しても、投資額より {difference} {currency} 多くなります。",
    heroNarrativeLoss: "投資した {contributions} {currency} から、今日の貨幣価値でわずか {result} {currency} に相当する額になります。投資額より {difference} {currency} 減っています。インフレと税金が投資の利益を上回りました。",
    heroNarrativeBreakeven: "投資した {contributions} {currency} から、今日の貨幣価値で {result} {currency} に相当する額になります。投資額とほぼ同じです。投資はかろうじてインフレをカバーしています。",
    realGrowth: "実質成長",
    netEffect: "純効果"
  },
  ko: {
    heroSubtitle: "{years}년 후 실질 구매력",
    heroNarrativeWin: "투자한 {contributions} {currency}에서 현재 가치로 {result} {currency}에 해당하는 금액을 갖게 됩니다. 세금과 인플레이션을 고려하더라도 투자한 금액보다 {difference} {currency} 더 많습니다.",
    heroNarrativeLoss: "투자한 {contributions} {currency}에서 현재 가치로 단지 {result} {currency}에 해당하는 금액을 갖게 됩니다. 투자한 금액보다 {difference} {currency} 적습니다. 인플레이션과 세금이 투자 수익보다 더 많이 소모되었습니다.",
    heroNarrativeBreakeven: "투자한 {contributions} {currency}에서 현재 가치로 {result} {currency}에 해당하는 금액을 갖게 됩니다. 투자한 금액과 거의 비슷합니다. 투자가 인플레이션을 간신히 방어하고 있습니다.",
    realGrowth: "실질 성장",
    netEffect: "순 효과"
  },
  hi: {
    heroSubtitle: "{years} वर्षों में वास्तविक क्रय शक्ति",
    heroNarrativeWin: "आपके {contributions} {currency} के योगदान से, आपके पास आज के पैसे में {result} {currency} के बराबर होगा — करों और मुद्रास्फीति के बाद भी, आपके द्वारा निवेश किए गए पैसे से {difference} {currency} अधिक।",
    heroNarrativeLoss: "आपके {contributions} {currency} के योगदान से, आपके पास आज के पैसे में केवल {result} {currency} के बराबर होगा — आपके द्वारा निवेश किए गए पैसे से {difference} {currency} कम। मुद्रास्फीति और करों ने निवेश से अर्जित लाभ से अधिक का उपभोग किया।",
    heroNarrativeBreakeven: "आपके {contributions} {currency} के योगदान से, आपके पास आज के पैसे में {result} {currency} के बराबर होगा — लगभग उतना ही जितना आपने निवेश किया था। आपका निवेश बमुश्किल मुद्रास्फीति को कवर करता है।",
    realGrowth: "वास्तविक विकास",
    netEffect: "शुद्ध प्रभाव"
  },
  ar: {
    heroSubtitle: "القوة الشرائية الحقيقية في {years} سنوات",
    heroNarrativeWin: "من مساهماتك البالغة {contributions} {currency}، سيكون لديك ما يعادل {result} {currency} بأموال اليوم — أي أكثر مما استثمرته بمقدار {difference} {currency}، حتى بعد احتساب الضرائب والتضخم.",
    heroNarrativeLoss: "من مساهماتك البالغة {contributions} {currency}، سيكون لديك ما يعادل فقط {result} {currency} بأموال اليوم — أي أقل مما استثمرته بمقدار {difference} {currency}. لقد استهلك التضخم والضرائب أكثر مما ربحه الاستثمار.",
    heroNarrativeBreakeven: "من مساهماتك البالغة {contributions} {currency}، سيكون لديك ما يعادل {result} {currency} بأموال اليوم — أي تقريبًا نفس المبلغ الذي استثمرته. استثمارك بالكاد يغطي التضخم.",
    realGrowth: "النمو الحقيقي",
    netEffect: "التأثير الصافي"
  }
};

let code = fs.readFileSync('src/utils/i18n.ts', 'utf8');

for (const lang of Object.keys(translations)) {
  const t = translations[lang];
  // Format the properties correctly (escape single quotes if needed)
  const toInject = `\n    heroSubtitle: '${t.heroSubtitle.replace(/'/g, "\\'")}',\n    heroNarrativeWin: '${t.heroNarrativeWin.replace(/'/g, "\\'")}',\n    heroNarrativeLoss: '${t.heroNarrativeLoss.replace(/'/g, "\\'")}',\n    heroNarrativeBreakeven: '${t.heroNarrativeBreakeven.replace(/'/g, "\\'")}',\n    realGrowth: '${t.realGrowth.replace(/'/g, "\\'")}',\n    netEffect: '${t.netEffect.replace(/'/g, "\\'")}',`;
  
  // Find the language block start and inject right after it
  const regex = new RegExp(`(${lang}: \\{\n)`, 'm');
  code = code.replace(regex, `$1${toInject}`);
}

fs.writeFileSync('src/utils/i18n.ts', code);
console.log('Added hero translations to i18n.ts');
