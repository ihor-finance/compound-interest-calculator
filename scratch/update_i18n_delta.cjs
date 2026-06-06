const fs = require('fs');
let code = fs.readFileSync('src/utils/i18n.ts', 'utf8');

const translations = {
  en: { m: '×{val} of contributions', p: '{val}% of contributions' },
  uk: { m: '×{val} від внесків', p: '{val}% від внесків' },
  pl: { m: '×{val} wkładu', p: '{val}% wkładu' },
  de: { m: '×{val} der Beiträge', p: '{val}% der Beiträge' },
  fr: { m: '×{val} des contributions', p: '{val}% des contributions' },
  es: { m: '×{val} de contribuciones', p: '{val}% de contribuciones' },
  it: { m: '×{val} dei contributi', p: '{val}% dei contributi' },
  pt: { m: '×{val} das contribuições', p: '{val}% das contribuições' },
  tr: { m: 'katkı payının ×{val} katı', p: 'katkıların %{val}' },
  "zh-CN": { m: '×{val} 投入本金', p: '{val}% 的投入本金' },
  ja: { m: '×{val} 倍の拠出額', p: '拠出額の {val}%' },
  ko: { m: '납입액의 ×{val}배', p: '납입액의 {val}%' },
  hi: { m: '×{val} योगदान का', p: '{val}% योगदान का' },
  ar: { m: '×{val} من المساهمات', p: '{val}٪ من المساهمات' }
};

for (const lang of Object.keys(translations)) {
  const t = translations[lang];
  code = code.replace(
    new RegExp(`(${lang}: \\{[\\s\\S]*?)returnCagr:`, 'm'),
    `$1multiplierFromContributions: '${t.m.replace(/'/g, "\\'")}',\n    percentFromContributions: '${t.p.replace(/'/g, "\\'")}',\n    returnCagr:`
  );
}

fs.writeFileSync('src/utils/i18n.ts', code);
console.log('Delta descriptions added.');
