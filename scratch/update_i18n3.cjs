const fs = require('fs');
let code = fs.readFileSync('src/utils/i18n.ts', 'utf8');

const translations = {
  en: { optimistic: 'Optimistic', pessimistic: 'Pessimistic', range: 'Range' },
  uk: { optimistic: 'Оптимістичний', pessimistic: 'Песимістичний', range: 'Діапазон' },
  pl: { optimistic: 'Optymistyczny', pessimistic: 'Pesymistyczny', range: 'Zakres' },
  de: { optimistic: 'Optimistisch', pessimistic: 'Pessimistisch', range: 'Bereich' },
  fr: { optimistic: 'Optimiste', pessimistic: 'Pessimiste', range: 'Plage' },
  es: { optimistic: 'Optimista', pessimistic: 'Pesimista', range: 'Rango' },
  it: { optimistic: 'Ottimistico', pessimistic: 'Pessimistico', range: 'Intervallo' },
  pt: { optimistic: 'Otimista', pessimistic: 'Pessimista', range: 'Intervalo' },
  tr: { optimistic: 'İyimser', pessimistic: 'Kötümser', range: 'Aralık' },
  "zh-CN": { optimistic: '乐观', pessimistic: '悲观', range: '范围' },
  ja: { optimistic: '楽観的', pessimistic: '悲観的', range: '範囲' },
  ko: { optimistic: '낙관적', pessimistic: '비관적', range: '범위' },
  hi: { optimistic: 'आशावादी', pessimistic: 'निराशावादी', range: 'रेंज' },
  ar: { optimistic: 'متفائل', pessimistic: 'متشائم', range: 'النطاق' }
};

for (const lang of Object.keys(translations)) {
  const t = translations[lang];
  code = code.replace(
    new RegExp(`(${lang}: \\{[\\s\\S]*?)noContribution:`, 'm'),
    `$1optimistic: '${t.optimistic}',\n    pessimistic: '${t.pessimistic}',\n    range: '${t.range}',\n    noContribution:`
  );
}

fs.writeFileSync('src/utils/i18n.ts', code);
console.log('Translations updated.');
