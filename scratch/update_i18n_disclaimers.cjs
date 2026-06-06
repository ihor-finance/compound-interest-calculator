const fs = require('fs');
let code = fs.readFileSync('src/utils/i18n.ts', 'utf8');

const replacements = {
  en: { 
    breakdown: "Investment Breakdown", 
    disclaimerChart: "Calculations are approximate and for illustrative purposes. Actual performance may vary due to changes in interest rates, inflation, tax laws, management fees, and other market factors.", 
    disclaimerDonut: "The breakdown is approximate. Actual profit and taxes paid may vary depending on the chosen investment instrument, tax rates, and market conditions."
  },
  uk: { 
    breakdown: "Структура інвестиції", 
    disclaimerChart: "Розрахунки є приблизними та мають ілюстративний характер. Реальні показники можуть відрізнятися через зміну відсоткових ставок, рівня інфляції, податкового законодавства, комісій та інших ринкових факторів.", 
    disclaimerDonut: "Структура наведена орієнтовно. Фактичні суми прибутку та сплачених податків можуть відрізнятися залежно від обраного інвестиційного інструмента, ставок оподаткування та ринкових умов."
  },
  pl: { 
    breakdown: "Struktura inwestycji", 
    disclaimerChart: "Obliczenia są przybliżone. Rzeczywiste wyniki mogą się różnić w zależności od stóp procentowych, inflacji, podatków, prowizji i innych czynników rynkowych.", 
    disclaimerDonut: "Struktura jest przybliżona. Rzeczywiste zyski i podatki mogą się różnić w zależności od instrumentu inwestycyjnego, stawek podatkowych i warunków rynkowych."
  },
  de: { 
    breakdown: "Anlagestruktur", 
    disclaimerChart: "Berechnungen sind Richtwerte. Tatsächliche Ergebnisse können aufgrund von Zinssätzen, Inflation, Steuergesetzen, Gebühren und anderen Marktfaktoren abweichen.", 
    disclaimerDonut: "Die Struktur ist ein Richtwert. Tatsächliche Gewinne und Steuern können je nach Anlageinstrument, Steuersätzen und Marktbedingungen variieren."
  },
  fr: { 
    breakdown: "Structure de l'investissement", 
    disclaimerChart: "Les calculs sont approximatifs. Les performances réelles peuvent varier en fonction des taux, de l'inflation, des impôts, des frais et des conditions du marché.", 
    disclaimerDonut: "La structure est donnée à titre indicatif. Les bénéfices et impôts réels peuvent varier selon l'instrument d'investissement, les taux d'imposition et les conditions du marché."
  },
  es: { 
    breakdown: "Estructura de la inversión", 
    disclaimerChart: "Los cálculos son aproximados. El rendimiento real puede variar debido a cambios en las tasas, inflación, impuestos, comisiones y condiciones del mercado.", 
    disclaimerDonut: "La estructura es indicativa. Las ganancias e impuestos reales pueden variar según el instrumento de inversión, las tasas impositivas y las condiciones del mercado."
  },
  it: { 
    breakdown: "Struttura dell'investimento", 
    disclaimerChart: "I calcoli sono approssimativi. Le prestazioni reali possono variare a causa di tassi, inflazione, tasse, commissioni e altre condizioni di mercato.", 
    disclaimerDonut: "La struttura è indicativa. I profitti e le tasse reali possono variare a seconda dello strumento di investimento, delle aliquote fiscali e delle condizioni di mercato."
  },
  pt: { 
    breakdown: "Estrutura do investimento", 
    disclaimerChart: "Os cálculos são aproximados. O desempenho real pode variar devido a taxas, inflação, impostos, taxas de administração e condições de mercado.", 
    disclaimerDonut: "A estrutura é indicativa. O lucro e os impostos reais podem variar dependendo do instrumento de investimento, taxas de imposto e condições de mercado."
  },
  tr: { 
    breakdown: "Yatırım Dağılımı", 
    disclaimerChart: "Hesaplamalar yaklaşıktır. Gerçek performans oranlar, enflasyon, vergiler, komisyonlar ve piyasa koşullarına bağlı olarak değişebilir.", 
    disclaimerDonut: "Dağılım yaklaşıktır. Gerçek kar ve vergiler, yatırım aracına, vergi oranlarına ve piyasa koşullarına bağlı olarak değişebilir."
  },
  "zh-CN": { 
    breakdown: "投资结构", 
    disclaimerChart: "计算结果为近似值。实际表现可能因利率、通货膨胀、税法、管理费及其他市场因素而有所不同。", 
    disclaimerDonut: "结构仅供参考。实际利润和税收可能因投资工具、税率和市场条件而异。"
  },
  ja: { 
    breakdown: "投資構成", 
    disclaimerChart: "計算は概算です。実際のパフォーマンスは、金利、インフレ、税法、手数料、市場の状況によって異なる場合があります。", 
    disclaimerDonut: "構成は目安です。実際の利益と税金は、投資対象、税率、市場の状況によって異なる場合があります。"
  },
  ko: { 
    breakdown: "투자 구조", 
    disclaimerChart: "계산은 대략적입니다. 실제 성과는 이자율, 인플레이션, 세법, 수수료 및 기타 시장 요인에 따라 다를 수 있습니다.", 
    disclaimerDonut: "구조는 대략적입니다. 실제 수익과 세금은 투자 상품, 세율, 시장 상황에 따라 다를 수 있습니다."
  },
  hi: { 
    breakdown: "निवेश संरचना", 
    disclaimerChart: "गणना अनुमानित है। वास्तविक प्रदर्शन ब्याज दरों, मुद्रास्फीति, करों, शुल्क और बाजार की स्थितियों के कारण भिन्न हो सकता है।", 
    disclaimerDonut: "संरचना केवल सांकेतिक है। वास्तविक लाभ और कर निवेश उपकरण, कर दरों और बाजार की स्थितियों के आधार पर भिन्न हो सकते हैं।"
  },
  ar: { 
    breakdown: "توزيع الاستثمار", 
    disclaimerChart: "الحسابات تقريبية. قد يختلف الأداء الفعلي بسبب التغيرات في أسعار الفائدة والتضخم والضرائب والرسوم وظروف السوق.", 
    disclaimerDonut: "التوزيع تقريبي. قد تختلف الأرباح والضرائب الفعلية حسب أداة الاستثمار ومعدلات الضرائب وظروف السوق."
  }
};

for (const lang of Object.keys(replacements)) {
  const r = replacements[lang];
  code = code.replace(
    new RegExp(`(${lang}: \\{[\\s\\S]*?breakdown: ')(.*?)'`, 'm'),
    `$1${r.breakdown}'`
  );
  code = code.replace(
    new RegExp(`(${lang}: \\{[\\s\\S]*?disclaimerChart: ')(.*?)'`, 'm'),
    `$1${r.disclaimerChart}'`
  );
  code = code.replace(
    new RegExp(`(${lang}: \\{[\\s\\S]*?disclaimerDonut: ')(.*?)'`, 'm'),
    `$1${r.disclaimerDonut}'`
  );
}

fs.writeFileSync('src/utils/i18n.ts', code);
console.log('Disclaimers updated.');
