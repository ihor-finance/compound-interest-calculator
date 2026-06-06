const fs = require('fs');

let css = fs.readFileSync('src/App.css', 'utf8');

// Strip all existing media queries
css = css.replace(/@media\s*\([^\{]+\)\s*\{[\s\S]*?\n\}\n?(?=\n|$)/g, '');
css = css.replace(/@media\s*\([^\{]+\)\s*\{[\s\S]*?\n\}\n?(?=\n|$)/g, ''); // run twice for nested or adjacent blocks just in case

// Add base responsive styles
const baseResponsive = `
/* ==========================================================================
   Global Responsive Breakpoints System
   ========================================================================== */

/* Max Width Container & Global Fixes */
.app-container {
  max-width: 1440px;
  margin: 0 auto;
}

.table-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 24px;
}

.table-container table {
  min-width: 600px;
}

.donut-chart-container {
  width: 100%;
  max-width: 280px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
}

/* Base styles for new Hero elements */
.hero-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.hero-main-group {
  margin-bottom: 12px;
}
.hero-subtitle {
  font-size: 16px;
  color: var(--text-primary);
  font-weight: 500;
  margin-top: 4px;
}
.hero-narrative {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 16px;
}
.hero-divider {
  border: 0;
  height: 1px;
  background: var(--border);
  margin: 16px 0;
}
.hero-inline-metrics {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 14px;
}
.inline-metric {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}
.metric-separator {
  color: var(--border);
}
.metric-label {
  color: var(--text-secondary);
  font-weight: 400;
}

/* Base Inputs Height Fix */
.input-field-wrapper, .form-input, .selector-trigger, .theme-btn {
  height: 40px !important;
}

/* ==========================================================================
   ≥1280px (Desktop)
   ========================================================================== */
@media (min-width: 1280px) {
  .satellite-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

/* ==========================================================================
   1024px - 1279px (Tablet Landscape)
   ========================================================================== */
@media (max-width: 1279px) and (min-width: 1024px) {
  .dashboard {
    grid-template-columns: 280px minmax(0, 1fr);
  }
  .satellite-grid {
    grid-template-columns: repeat(5, 1fr);
  }
  .satellite-tile {
    padding: 12px;
  }
  .satellite-value {
    font-size: 18px;
  }
}

/* ==========================================================================
   768px - 1023px (Tablet Portrait)
   ========================================================================== */
@media (max-width: 1023px) and (min-width: 768px) {
  .dashboard {
    grid-template-columns: 240px minmax(0, 1fr);
  }
  .satellite-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .chart-container-row {
    flex-direction: column;
  }
}

/* ==========================================================================
   <768px (Mobile & Small Tablet)
   ========================================================================== */
@media (max-width: 767px) {
  .dashboard {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .sidebar-left {
    position: relative;
    top: 0;
    width: 100%;
    margin-bottom: 24px;
  }
  
  .main-content {
    padding: 16px;
  }
  
  .hero-card {
    padding: 20px;
  }
  
  .hero-value {
    font-size: 36px;
  }
  
  .satellite-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  .donut-chart-container {
    max-width: 220px;
  }
  
  .chart-container-row {
    flex-direction: column;
  }
}

/* ==========================================================================
   <480px (Small Mobile)
   ========================================================================== */
@media (max-width: 479px) {
  .hero-card {
    padding: 16px;
  }
  
  .hero-value {
    font-size: 32px;
  }
  
  .hero-inline-metrics {
    gap: 8px;
  }
}
`;

fs.writeFileSync('src/App.css', css + '\n' + baseResponsive);
console.log('App.css updated with responsive rules');
