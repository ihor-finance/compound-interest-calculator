const fs = require('fs');

const css = `

/* Hero + Satellites Layout */
.hero-card {
  padding: 32px;
  border: 2px solid var(--primary);
  border-radius: 16px;
  background: linear-gradient(135deg, var(--surface) 0%, rgba(16, 185, 129, 0.05) 100%);
  margin-bottom: 24px;
}

.hero-value {
  font-size: 48px;
  font-weight: 700;
  color: var(--primary);
  margin: 16px 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
}

.hero-description {
  font-size: 16px;
  color: var(--text-secondary);
}

.satellite-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.satellite-tile {
  padding: 16px;
  background-color: var(--surface);
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}

.satellite-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.satellite-value {
  font-size: 22px;
  font-weight: 600;
  color: var(--text-primary);
}

@media (max-width: 900px) {
  .satellite-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .hero-card {
    padding: 24px;
  }
  .hero-value {
    font-size: 36px;
  }
  .satellite-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
`;

fs.appendFileSync('src/App.css', css);
console.log('Done');
