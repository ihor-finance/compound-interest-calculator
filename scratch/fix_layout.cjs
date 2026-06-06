const fs = require('fs');

let css = fs.readFileSync('src/App.css', 'utf8');

// 1. Hero layout CSS
const heroCSS = `
/* Hero 2-column layout */
.hero-card {
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 32px;
  padding: 24px 32px;
  border: 2px solid var(--primary);
  border-radius: 16px;
  background: linear-gradient(135deg, var(--surface) 0%, rgba(16, 185, 129, 0.05) 100%);
  margin-bottom: 0;
}
.hero-left {
  display: flex;
  flex-direction: column;
}
.hero-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  border-left: 1px solid var(--border);
  padding-left: 32px;
}
.hero-metric-box {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.hero-metric-box .metric-label {
  font-size: 13px;
  color: var(--text-secondary);
}
.hero-metric-box .metric-value {
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

@media (max-width: 767px) {
  .hero-card {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 20px;
  }
  .hero-right {
    border-left: none;
    border-top: 1px solid var(--border);
    padding-left: 0;
    padding-top: 16px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
@media (max-width: 479px) {
  .hero-card {
    padding: 16px;
  }
}
`;

// Replace the old .hero-card block (which is around line 710)
css = css.replace(/\.hero-card\s*\{[\s\S]*?margin-bottom:\s*24px;\n\}/, '/* .hero-card replaced by fix_layout */');

// 2. Reduce gaps between sections
// The ResultsSection and main-panel have gap/margins.
// main-panel gap is 20px. Let's make it 12px for result sections.
const mainPanelCSS = `
.main-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}
.results-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.satellite-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 0;
}
.charts-section {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
`;
// Remove old .satellite-grid
css = css.replace(/\.satellite-grid\s*\{[\s\S]*?\n\}/, '/* .satellite-grid replaced */');

// 3. Chart height and padding
const chartCSS = `
.chart-card {
  padding: 20px;
  background-color: var(--surface);
  border-radius: 16px;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--border);
}
.chart-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
}
.donut-chart-container {
  width: 100%;
  max-width: 240px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
}
`;
css = css.replace(/\.chart-card\s*\{[\s\S]*?\n\}/, '/* .chart-card replaced */');
css = css.replace(/\.donut-chart-container\s*\{[\s\S]*?\n\}/, '/* .donut-chart-container replaced */');


// Base responsive changes to remove old satellite-grid rules
css = css.replace(/grid-template-columns: repeat\(5, 1fr\);/g, 'grid-template-columns: repeat(3, 1fr);');
css = css.replace(/\.hero-value\s*\{[\s\S]*?font-size:\s*48px;[\s\S]*?\n\}/, `
.hero-value {
  font-size: 38px;
  font-weight: 700;
  color: var(--primary);
  margin: 12px 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
}
`);


fs.writeFileSync('src/App.css', css + '\n' + heroCSS + '\n' + mainPanelCSS + '\n' + chartCSS);
console.log('App.css updated');
