const fs = require('fs');

let css = fs.readFileSync('src/App.css', 'utf8');

const lineChartCSS = `
/* Line Chart Refactor */
.chart-box {
  display: flex;
  flex-direction: column;
}

.chart-header h3 {
  margin: 0 0 20px 0;
}

.chart-content {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  flex: 1;
  margin-bottom: 16px;
  min-height: 280px;
}

.chart-container {
  display: flex;
  align-items: stretch;
  min-width: 0;
}

.chart-container canvas {
  width: 100% !important;
  height: 100% !important;
}

.chart-legend-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-size: 13px;
}

.legend-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.legend-section-title {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.line-legend-marker {
  width: 16px;
  height: 3px;
  border-radius: 2px;
  flex-shrink: 0;
}

.chart-disclaimer {
  margin-top: auto;
  font-size: 12px;
  color: var(--text-muted);
  font-style: italic;
  line-height: 1.4;
  padding-top: 16px;
  border-top: 1px solid var(--border-light);
}

@media (min-width: 768px) and (max-width: 1024px) {
  .chart-content {
    grid-template-columns: 4fr 1fr;
  }
  .chart-legend-side {
    font-size: 12px;
  }
}

@media (max-width: 767px) {
  .chart-content {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .chart-container {
    min-height: 240px;
  }
  
  .chart-legend-side {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
  }
  
  .legend-section {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
  }
  
  .legend-section-title {
    margin-bottom: 0;
    margin-right: 4px;
  }
}
`;

fs.writeFileSync('src/App.css', css + '\n' + lineChartCSS);
console.log('App.css updated with line chart styles');
