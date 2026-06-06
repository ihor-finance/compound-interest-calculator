const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'src', 'i18n', 'locales');
const enFile = path.join(__dirname, '..', 'src', 'i18n', 'en.ts');

if (!fs.existsSync(enFile)) {
  console.error('Error: en.ts not found');
  process.exit(1);
}

const enContent = fs.readFileSync(enFile, 'utf8');

function extractStringValues(content) {
  const values = [];
  const regex = /:\s*['"](.*?)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    values.push(match[1]);
  }
  return values;
}

const enValues = extractStringValues(enContent);
if (enValues.length === 0) {
  console.warn('Warning: Could not extract keys from en.ts');
  process.exit(0);
}

const THRESHOLD = 0.5;
let failed = false;

if (fs.existsSync(localesDir)) {
  const files = fs.readdirSync(localesDir).filter(f => f.endsWith('.ts'));
  
  for (const file of files) {
    const filePath = path.join(localesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const values = extractStringValues(content);
    
    let matchCount = 0;
    for (let i = 0; i < values.length && i < enValues.length; i++) {
      if (values[i] === enValues[i]) {
        matchCount++;
      }
    }
    
    const matchRatio = matchCount / Math.max(enValues.length, 1);
    if (matchRatio > THRESHOLD) {
      console.error(`❌ Locale "${file}" appears to be untranslated (${(matchRatio * 100).toFixed(1)}% match with English).`);
      failed = true;
    } else {
      console.log(`✅ Locale "${file}" passed (${(matchRatio * 100).toFixed(1)}% match with English).`);
    }
  }
}

if (failed) {
  console.error('CI/Test Guard Failed: Some locales are just English placeholders.');
  process.exit(1);
} else {
  console.log('All locales verified successfully.');
  process.exit(0);
}
