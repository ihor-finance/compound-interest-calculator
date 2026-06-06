const fs = require('fs');
let code = fs.readFileSync('src/utils/i18n.ts', 'utf8');

const weeklyTranslations = {
  en: 'Weekly',
  uk: 'Щотижня',
  pl: 'Co tydzień',
  de: 'Wöchentlich',
  fr: 'Hebdomadaire',
  es: 'Semanal',
  it: 'Settimanale',
  pt: 'Semanal',
  tr: 'Haftalık',
  "zh-CN": '按周',
  ja: '週次',
  ko: '매주',
  hi: 'साप्ताहिक',
  ar: 'أسبوعي'
};

for (const lang of Object.keys(weeklyTranslations)) {
  const t = weeklyTranslations[lang];
  // Insert weekly before monthly
  code = code.replace(
    new RegExp(`(${lang}: \\{[\\s\\S]*?)monthly:`, 'm'),
    `$1weekly: '${t}',\n    monthly:`
  );
  
  // Update the label "Monthly Contributions" -> "Contributions"
  if (lang === 'en') {
    code = code.replace(/monthlyContributions: 'Monthly Contributions'/, `monthlyContributions: 'Contributions'`);
  } else if (lang === 'uk') {
    code = code.replace(/monthlyContributions: 'Щомісячне поповнення'/, `monthlyContributions: 'Поповнення'`);
  } else if (lang === 'pl') {
    code = code.replace(/monthlyContributions: 'Miesięczne wpłaty'/, `monthlyContributions: 'Dopłaty'`);
  }
}

fs.writeFileSync('src/utils/i18n.ts', code);
console.log('Done');
