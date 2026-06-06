const fs = require('fs');

let css = fs.readFileSync('src/App.css', 'utf8');

const structureCSS = `
/* Structure Box Refactor */
.structure-box {
  display: flex;
  flex-direction: column;
}

.structure-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.structure-header h3 {
  margin: 0;
}

.structure-header .tax-mode-toggle {
  margin: 0 !important; /* override inline if any */
}

.structure-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: center;
  flex: 1;
  margin-bottom: 16px;
}

.donut-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.donut-container canvas {
  width: 100% !important;
  max-width: 220px;
  height: auto !important;
  aspect-ratio: 1 / 1;
}

.legend-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}

.legend-row {
  display: grid;
  grid-template-columns: 12px 1fr auto;
  gap: 10px;
  align-items: center;
  font-size: 14px;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.legend-label {
  color: var(--text-primary);
}

.legend-value {
  font-weight: 600;
  color: var(--text-primary);
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.structure-disclaimer {
  font-size: 12px;
  color: var(--text-muted);
  font-style: italic;
  line-height: 1.4;
  margin-top: auto;
}

.chart-card {
  display: flex;
  flex-direction: column;
}

.chart-box .chart-container,
.structure-box .structure-content {
  flex: 1;
}

.chart-box .disclaimer,
.structure-box .structure-disclaimer {
  margin-top: auto;
}

/* Override existing charts-section to stretch items */
.charts-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
  align-items: stretch;
}

/* Responsive Overrides */
@media (min-width: 768px) and (max-width: 1023px) {
  .donut-container canvas {
    max-width: 180px;
  }
  .legend-row {
    font-size: 13px;
  }
}

@media (max-width: 767px) {
  .charts-section {
    grid-template-columns: 1fr;
  }
  .structure-content {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .donut-container canvas {
    max-width: 180px;
  }
  .structure-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .structure-header .structure-toggle {
    width: 100%;
  }
  .structure-header .tax-mode-toggle {
    width: 100%;
    display: flex;
  }
  .structure-header .tax-mode-toggle button {
    flex: 1;
  }
}
`;

fs.writeFileSync('src/App.css', css + '\n' + structureCSS);
console.log('App.css updated with structure styles');
