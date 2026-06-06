const fs = require('fs');
let code = fs.readFileSync('src/utils/i18n.ts', 'utf8');

const translations = {
  en: { 
    descTotalContributions: 'Total amount contributed over the period — initial deposit plus all additions.',
    descNetProfit: 'Investment earnings before taxes, in nominal money.',
    descReturnCagr: 'Average annual real growth, accounting for taxes and inflation.'
  },
  uk: { 
    descTotalContributions: 'Скільки ви сумарно внесли за весь період — початковий внесок плюс усі поповнення.',
    descNetProfit: 'Скільки заробила інвестиція до сплати податків, у номінальних грошах.',
    descReturnCagr: 'Середньорічний реальний приріст з урахуванням податків та інфляції.'
  },
  pl: { 
    descTotalContributions: 'Łączna kwota wpłacona w całym okresie — depozyt początkowy plus wszystkie dopłaty.',
    descNetProfit: 'Zarobki z inwestycji przed opodatkowaniem, w pieniądzu nominalnym.',
    descReturnCagr: 'Średni roczny rzeczywisty wzrost, uwzględniający podatki i inflację.'
  },
  de: { 
    descTotalContributions: 'Gesamteingezahlter Betrag über den Zeitraum — Ersteinlage plus alle Einzahlungen.',
    descNetProfit: 'Kapitalerträge vor Steuern, in nominalem Geld.',
    descReturnCagr: 'Durchschnittliches jährliches reales Wachstum, bereinigt um Steuern und Inflation.'
  },
  fr: { 
    descTotalContributions: 'Montant total cotisé sur la période — dépôt initial plus tous les ajouts.',
    descNetProfit: 'Gains d\'investissement avant impôts, en monnaie nominale.',
    descReturnCagr: 'Croissance réelle annuelle moyenne, tenant compte des impôts et de l\'inflation.'
  },
  es: { 
    descTotalContributions: 'Cantidad total aportada durante el período: depósito inicial más todas las adiciones.',
    descNetProfit: 'Ganancias de inversión antes de impuestos, en dinero nominal.',
    descReturnCagr: 'Crecimiento real anual promedio, teniendo en cuenta impuestos e inflación.'
  },
  it: { 
    descTotalContributions: 'Importo totale versato nel periodo — deposito iniziale più tutte le integrazioni.',
    descNetProfit: 'Guadagni sugli investimenti al lordo delle imposte, in denaro nominale.',
    descReturnCagr: 'Crescita reale media annua, al netto di imposte e inflazione.'
  },
  pt: { 
    descTotalContributions: 'Montante total contribuído ao longo do período — depósito inicial mais todas as adições.',
    descNetProfit: 'Ganhos de investimento antes de impostos, em dinheiro nominal.',
    descReturnCagr: 'Crescimento real médio anual, contabilizando impostos e inflação.'
  },
  tr: { 
    descTotalContributions: 'Dönem boyunca yatırılan toplam tutar — ilk depozito artı tüm eklemeler.',
    descNetProfit: 'Vergi öncesi yatırım kazançları, nominal para cinsinden.',
    descReturnCagr: 'Vergiler ve enflasyon hesaba katılarak ortalama yıllık reel büyüme.'
  },
  "zh-CN": { 
    descTotalContributions: '期间内贡献的总金额 — 初始存款加上所有追加投资。',
    descNetProfit: '税前投资收益（名义货币）。',
    descReturnCagr: '平均年实际增长，考虑到税收和通货膨胀。'
  },
  ja: { 
    descTotalContributions: '期間中の拠出総額 — 初期預金にすべての追加分を加えたもの。',
    descNetProfit: '税引き前の投資収益（名目通貨ベース）。',
    descReturnCagr: '税金とインフレを考慮した平均年間実質成長率。'
  },
  ko: { 
    descTotalContributions: '기간 동안의 총 납입액 — 초기 예치금에 모든 추가금을 더한 금액.',
    descNetProfit: '세전 투자 수익 (명목 화폐 기준).',
    descReturnCagr: '세금과 인플레이션을 고려한 평균 연간 실질 성장률.'
  },
  hi: { 
    descTotalContributions: 'अवधि के दौरान योगदान की गई कुल राशि — प्रारंभिक जमा प्लस सभी परिवर्धन।',
    descNetProfit: 'कर से पहले निवेश आय, नाममात्र मुद्रा में।',
    descReturnCagr: 'कर और मुद्रास्फीति को ध्यान में रखते हुए औसत वार्षिक वास्तविक वृद्धि।'
  },
  ar: { 
    descTotalContributions: 'إجمالي المبلغ المساهم به خلال الفترة — الإيداع الأولي بالإضافة إلى جميع الإضافات.',
    descNetProfit: 'أرباح الاستثمار قبل الضرائب، بالمال الاسمي.',
    descReturnCagr: 'متوسط النمو الحقيقي السنوي، مع مراعاة الضرائب والتضخم.'
  }
};

for (const lang of Object.keys(translations)) {
  const t = translations[lang];
  code = code.replace(
    new RegExp(`(${lang}: \\{[\\s\\S]*?)returnCagr:`, 'm'),
    `$1descTotalContributions: '${t.descTotalContributions.replace(/'/g, "\\'")}',\n    descNetProfit: '${t.descNetProfit.replace(/'/g, "\\'")}',\n    descReturnCagr: '${t.descReturnCagr.replace(/'/g, "\\'")}',\n    returnCagr:`
  );
}

fs.writeFileSync('src/utils/i18n.ts', code);
console.log('Descriptions added.');
