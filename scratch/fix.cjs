const fs = require('fs');
let lines = fs.readFileSync('src/utils/i18n.ts', 'utf8').split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('disclaimerChart: ') || lines[i].includes('disclaimerDonut: ')) {
    const m = lines[i].match(/^(.*?:\s*'.*?'),?(.*)$/);
    if (m && m[2].trim()) {
      lines[i] = m[1] + ',';
    }
  }
}
fs.writeFileSync('src/utils/i18n.ts', lines.join('\n'));
console.log('Fixed syntax in i18n.ts');
