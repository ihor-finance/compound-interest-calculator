const fs = require('fs');
let code = fs.readFileSync('src/utils/i18n.ts', 'utf8');

const noContributionTranslations = {
  en: 'No contribution',
  uk: 'Без поповнення',
  pl: 'Brak dopłat',
  de: 'Keine Einzahlung',
  fr: 'Aucune contribution',
  es: 'Sin aportación',
  it: 'Nessun contributo',
  pt: 'Sem contribuição',
  tr: 'Katkı yok',
  "zh-CN": '无存款',
  ja: '追加なし',
  ko: '추가 납입 없음',
  hi: 'कोई योगदान नहीं',
  ar: 'لا مساهمة'
};

for (const lang of Object.keys(noContributionTranslations)) {
  const t = noContributionTranslations[lang];
  // Insert noContribution before weekly
  code = code.replace(
    new RegExp(`(${lang}: \\{[\\s\\S]*?)weekly:`, 'm'),
    `$1noContribution: '${t}',\n    weekly:`
  );
}

fs.writeFileSync('src/utils/i18n.ts', code);
console.log('Done');
