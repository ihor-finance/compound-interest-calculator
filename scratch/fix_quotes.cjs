const fs = require('fs');
let code = fs.readFileSync('src/utils/i18n.ts', 'utf8');

// French and Italian quotes issue
code = code.replace(/Structure de l'investissement/g, "Structure de l\\'investissement");
code = code.replace(/Struttura dell'investimento/g, "Struttura dell\\'investimento");
code = code.replace(/selon l'instrument/g, "selon l\\'instrument");
code = code.replace(/de l'investissement/g, "de l\\'investissement");

fs.writeFileSync('src/utils/i18n.ts', code);
console.log('Fixed quotes.');
