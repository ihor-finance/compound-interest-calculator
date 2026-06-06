const fs = require('fs');
let code = fs.readFileSync('src/utils/i18n.ts', 'utf8');

const strings = {
  en: 'Can be negative (e.g., -10%) to model a crisis or recession year. Real investments can lose value during bad periods.',
  uk: 'Можна задати від\'ємне значення (наприклад, -10%), щоб змоделювати кризовий або рецесійний рік. Реальні інвестиції в погані періоди можуть втрачати у вартості.',
  pl: 'Można podać wartość ujemną (np. -10%), aby zasymulować rok kryzysu. Rzeczywiste inwestycje mogą tracić na wartości.',
  de: 'Kann negativ sein (z. B. -10%), um Krisenjahre zu simulieren.',
  fr: 'Peut être négatif (ex. -10%) pour modéliser une année de crise.',
  es: 'Puede ser negativo (ej. -10%) para simular un año de crisis.',
  it: 'Può essere negativo (es. -10%) per simulare un anno di crisi.',
  pt: 'Pode ser negativo (ex. -10%) para simular um ano de crise.',
  tr: 'Kriz yılını simüle etmek için negatif (örn. -10%) olabilir.',
  "zh-CN": '可以为负数（例如 -10%）以模拟危机年份。',
  ja: '危機の年をシミュレートするためにマイナス（例：-10％）にすることができます。',
  ko: '위기의 해를 시뮬레이션하기 위해 음수(예: -10%)가 될 수 있습니다.',
  hi: 'संकट के वर्ष का अनुकरण करने के लिए नकारात्मक (जैसे, -10%) हो सकता है।',
  ar: 'يمكن أن يكون سالبًا (مثل -10٪) لمحاكاة عام الأزمة.'
};

for (const lang of Object.keys(strings)) {
  const t = strings[lang];
  code = code.replace(
    new RegExp(`(${lang}: \\{[\\s\\S]*?tooltips: \\{[\\s\\S]*?)minReturn:`, 'm'),
    `$1negativeRateAllowed: '${t}',\n      minReturn:`
  );
}

fs.writeFileSync('src/utils/i18n.ts', code);
console.log('Tooltip updated.');
