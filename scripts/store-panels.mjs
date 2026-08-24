/**
 * The artwork that goes inside the phone frame on each Play Store card.
 *
 * These are drawn rather than screenshotted, because a real screen shrunk to
 * thumbnail size leaves the type about six pixels tall. Each panel redraws one
 * screen of the app larger and sparser.
 *
 * Drawn is not the same as invented, and that line matters: Play requires
 * screenshots to show the actual app. Every label here comes from the app's own
 * translation files and every number from its own calculation module, and the
 * layout of each panel mirrors the component it stands for. An audit against
 * the source removed seven things earlier drafts had added that the app does
 * not have — a stacked proportion bar, a shaded band under the chart lines, the
 * marker dots at the end of those lines, a summary card above the chart, a
 * percentage column in the donut legend, ISO code pills in the language list,
 * and a worked-rate box on the methodology page. If something is not in the
 * component, it does not belong here.
 */

const money = (n, locale) => new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(Math.round(n));
const pct = (n, locale, digits = 1) =>
  `${n >= 0 ? '+' : '−'}${new Intl.NumberFormat(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(Math.abs(n))}%`;

const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const fill = (template, values) =>
  String(template).replace(/\{(\w+)\}/g, (_, key) => (key in values ? values[key] : `{${key}}`));

/** Strips the leading number off a methodology heading lifted out of its page. */
const heading = text => esc(String(text).replace(/^\d+\.\s*/, ''));

/** Shared chrome: the app's card look, scaled for a 920px-wide design width. */
export const panelCss = `
  .screen {
    position: absolute; inset: 0; color: var(--ink); padding: 46px 40px;
    display: flex; flex-direction: column; gap: 26px;
    font-size: 34px; line-height: 1.35;
  }
  .card {
    background: var(--card); border-radius: 38px; padding: 40px 42px;
    border: 2px solid var(--hairline);
    box-shadow: 0 2px 12px rgba(15, 27, 45, .05);
  }
  .card.accent { border: 3px solid var(--green); background: var(--card-accent); }
  .card.fill { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; }
  .chip {
    display: inline-flex; align-items: center; gap: 12px; align-self: flex-start;
    background: var(--green-soft); color: var(--green-ink);
    font-size: 30px; font-weight: 700; padding: 14px 30px; border-radius: 99px;
  }
  .chip.bad { background: var(--red-soft); color: var(--red-ink); }
  .label { font-size: 32px; color: var(--muted); }
  .value { font-size: 54px; font-weight: 700; }
  .row { display: flex; align-items: center; gap: 22px; }
  .between { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
  .hairline { height: 2px; background: var(--hairline); }
  h2 { font-size: 44px; font-weight: 700; }
  .headline { font-size: 104px; font-weight: 800; color: var(--green-ink); letter-spacing: -3px; line-height: 1; }

  .field { display: flex; flex-direction: column; gap: 14px; }
  .field .label { font-weight: 600; color: var(--ink); font-size: 33px; }
  .input {
    display: flex; align-items: center; justify-content: space-between;
    border: 2px solid var(--hairline); border-radius: 26px;
    padding: 20px 30px; background: var(--card);
  }
  .icon {
    width: 68px; height: 68px; border-radius: 50%; flex: none;
    background: var(--green-soft); color: var(--green-ink);
    display: flex; align-items: center; justify-content: center;
  }
  .icon svg { width: 36px; height: 36px; stroke: currentColor; fill: none;
              stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
  .input .num { font-size: 48px; font-weight: 700; }
  .input .unit { color: var(--muted); font-weight: 500; font-size: 36px; }
  .select {
    display: flex; align-items: center; justify-content: space-between;
    border: 2px solid var(--hairline); border-radius: 26px;
    padding: 26px 30px; background: var(--card); font-size: 38px;
  }
  .select .caret { color: var(--muted); font-size: 30px; }

  table { width: 100%; border-collapse: collapse; }
  th {
    text-align: left; font-size: 27px; color: var(--muted); font-weight: 600;
    padding: 0 0 18px; border-bottom: 2px solid var(--hairline); white-space: nowrap;
  }
  td { font-size: 33px; padding: 18px 0; border-bottom: 2px solid var(--hairline); white-space: nowrap; }
  td.n, th.n { text-align: right; font-variant-numeric: tabular-nums; }
  tr:last-child td { border-bottom: none; }
  tr.highlight td { font-weight: 700; color: var(--green-ink); }

  .legend-title { font-size: 25px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted); font-weight: 700; }
  .legend { display: grid; grid-template-columns: 1fr 1fr; gap: 18px 22px; font-size: 29px; }
  .legend span { display: flex; align-items: center; gap: 14px; }
  .dot { width: 22px; height: 22px; border-radius: 50%; flex: none; }
  .legend-row { display: flex; align-items: center; gap: 20px; font-size: 31px; }
  .legend-row .grow { flex: 1 1 auto; color: var(--muted); }
  .legend-row .amount { font-weight: 700; font-variant-numeric: tabular-nums; }

  .lang { display: flex; align-items: center; gap: 22px; padding: 10px 18px; border-radius: 16px; }
  .lang.on { background: var(--green-soft); }
  .lang .flag { width: 52px; height: 35px; border-radius: 5px; overflow: hidden; flex: none;
                box-shadow: 0 0 0 2px var(--hairline) inset; }
  .lang .flag svg { display: block; width: 100%; height: 100%; }
  .lang .name { font-size: 32px; flex: 1 1 auto; }
  .lang .tick { color: var(--green-ink); font-size: 32px; font-weight: 700; }

  .formula {
    background: var(--green-soft); border-radius: 24px; padding: 26px 30px;
    font-size: 34px; text-align: center; color: var(--green-ink); font-weight: 600;
  }
`;

/** Lucide-shaped icons, matching the ones the form actually renders. */
const ICONS = {
  dollar: '<svg viewBox="0 0 24 24"><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  trending: '<svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  piggy: '<svg viewBox="0 0 24 24"><path d="M19 10h2v4h-2"/><path d="M3 12a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v3a2 2 0 0 1-2 2h-1v2h-3v-2H9v2H6v-2a3 3 0 0 1-3-3z"/><circle cx="9" cy="11" r="1"/></svg>',
  percent: '<svg viewBox="0 0 24 24"><path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
  landmark: '<svg viewBox="0 0 24 24"><path d="M3 22h18M4 10v8M9 10v8M15 10v8M20 10v8M2 10h20L12 3z"/></svg>',
};

/**
 * The growth chart.
 *
 * Four plain lines and nothing else: the app's datasets carry no fill and set
 * pointRadius to 0, so a shaded band or a marker at the end of each line would
 * be showing something the user will never see. `tension: 0.4` in the app is
 * reproduced with a Catmull-Rom spline so the curves bend the same way.
 */
function chartSvg(years, series) {
  const W = 760, H = 995, padB = 14, padT = 18;
  const max = Math.max(...series.flatMap(s => s.points));
  const x = i => (i / (years - 1)) * W;
  const y = v => (H - padB) - (v / max) * (H - padB - padT);

  /** Catmull-Rom through the points, converted to cubic beziers. */
  const smooth = points => {
    const p = points.map((v, i) => [x(i), y(v)]);
    if (p.length < 2) return '';
    let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
      const t = 0.4 / 3;
      const c1 = [p1[0] + (p2[0] - p0[0]) * t, p1[1] + (p2[1] - p0[1]) * t];
      const c2 = [p2[0] - (p3[0] - p1[0]) * t, p2[1] - (p3[1] - p1[1]) * t];
      d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d;
  };

  const gridlines = [0.25, 0.5, 0.75, 1]
    .map(f => {
      const gy = (padT + (H - padB - padT) * (1 - f)).toFixed(1);
      return `<line x1="0" y1="${gy}" x2="${W}" y2="${gy}" stroke="var(--hairline)" stroke-width="2"/>`;
    }).join('');

  const lines = series.map(s =>
    `<path d="${smooth(s.points)}" fill="none" stroke="${s.color}" stroke-width="8"
       stroke-linecap="round" stroke-linejoin="round"${s.dashed ? ' stroke-dasharray="18 16"' : ''}/>`).join('');

  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet"
    style="display:block;width:100%;height:100%">${gridlines}${lines}</svg>`;
}

/** The investment-structure ring: three slices, drawn as arcs on one circle. */
function donutSvg(slices) {
  const size = 460, stroke = 92, r = (size - stroke) / 2, c = 2 * Math.PI * r;
  const total = slices.reduce((sum, s) => sum + s.value, 0) || 1;

  let offset = 0;
  const arcs = slices.map(slice => {
    const len = (slice.value / total) * c;
    const arc = `<circle cx="${size / 2}" cy="${size / 2}" r="${r}"
      fill="none" stroke="${slice.color}" stroke-width="${stroke}"
      stroke-dasharray="${len.toFixed(2)} ${(c - len).toFixed(2)}"
      stroke-dashoffset="${(-offset).toFixed(2)}"
      transform="rotate(-90 ${size / 2} ${size / 2})"/>`;
    offset += len;
    return arc;
  }).join('');

  return `<svg viewBox="0 0 ${size} ${size}" style="display:block;width:100%;height:100%">${arcs}</svg>`;
}

export const PANELS = {
  /** The results screen: the key-result card, then the four summary tiles. */
  results: ({ t, r, input, locale }) => {
    const netEffect = r.afterTaxAndInflation - r.totalContributions;
    const totalReturnPct = (netEffect / r.totalContributions) * 100;
    const description = fill(t.hero.descriptionPositive, {
      contributions: money(r.totalContributions, locale),
      result: money(r.afterTaxAndInflation, locale),
      delta: money(netEffect, locale),
    });

    const tile = (label, value, delta, good) => `
      <div class="card" style="flex:1 1 0;display:flex;flex-direction:column;justify-content:center;gap:12px">
        <div class="between">
          <span class="label" style="font-size:29px">${esc(label)}</span>
          ${delta ? `<span class="chip${good ? '' : ' bad'}" style="font-size:25px;padding:9px 20px">${delta}</span>` : ''}
        </div>
        <div class="value" style="font-size:52px">${value}</div>
      </div>`;

    return `
    <div class="screen">
      <div class="card accent" style="display:flex;flex-direction:column;gap:24px">
        <span class="chip">★ ${esc(t.hero.badge)}</span>
        <div class="row" style="gap:24px;flex-wrap:wrap">
          <span class="headline">${money(r.afterTaxAndInflation, locale)}</span>
          <span class="chip">↗ ${pct(totalReturnPct, locale)}</span>
        </div>
        <div style="font-size:38px;font-weight:700;line-height:1.25">
          ${esc(fill(t.hero.title, { years: input.years }))}
        </div>
        <div class="label" style="font-size:29px;line-height:1.45">${esc(description)}</div>
        <div class="hairline"></div>
        <div class="between">
          <span class="label">${esc(t.metrics.cagrLabel)}</span>
          <span class="value" style="color:var(--green-ink)">${pct(r.returnPercentage, locale, 2)}</span>
        </div>
      </div>
      ${tile(t.satellites.totalContributions, money(r.totalContributions, locale), '', true)}
      ${tile(t.satellites.nominalValue, money(r.endValue, locale), `+${money(r.endValue - r.totalContributions, locale)}`, true)}
      ${tile(t.satellites.nominalAfterTax, money(r.nominalAfterTax, locale), `−${money(r.endValue - r.nominalAfterTax, locale)}`, false)}
      ${tile(t.satellites.withInflation, money(r.adjustedForInflation, locale), `−${money(r.endValue - r.adjustedForInflation, locale)}`, false)}
    </div>`;
  },

  inputs: ({ t, input, locale }) => {
    const field = (label, icon, num, unit = '') => `
      <div class="field">
        <div class="label">${esc(label)}</div>
        <div class="input">
          <span class="icon">${icon}</span>
          <span><span class="num">${esc(num)}</span>${unit ? ` <span class="unit">${esc(unit)}</span>` : ''}</span>
        </div>
      </div>`;
    return `
    <div class="screen">
      <div class="card fill" style="gap:24px;justify-content:space-between">
        ${field(t.form.initialDeposit, ICONS.dollar, money(input.initialDeposit, locale))}
        ${field(t.form.period, ICONS.calendar, String(input.years), t.form.years)}
        ${field(t.form.annualReturn, ICONS.trending, String(input.annualRate), '%')}
        <div class="field">
          <div class="label">${esc(t.form.compounding)}</div>
          <div class="select">
            <span>${esc(t.form.compoundingAnnually)}</span>
            <span class="caret">▾</span>
          </div>
        </div>
        ${field(t.form.contributions, ICONS.piggy, money(input.monthlyContribution, locale), t.form.compoundingMonthly)}
        ${field(t.form.inflation, ICONS.percent, String(input.inflationRate), '%')}
        ${field(t.form.taxRate, ICONS.landmark, String(input.taxRate), '%')}
      </div>
    </div>`;
  },

  chart: ({ t, r, input }) => {
    const pick = key => r.yearlyData.map(row => row[key]);
    const series = [
      { color: '#15803d', points: pick('nominalValue') },
      { color: '#3b82f6', points: pick('inflationAdjustedValue') },
      { color: '#84cc16', points: pick('afterTaxAndInflation') },
      { color: '#94a3b8', points: pick('totalContributions'), dashed: true },
    ];
    const swatch = (color, label, dashed) =>
      `<span><i class="dot" style="background:${color}${dashed ? ';opacity:.7' : ''}"></i>${esc(label)}</span>`;
    return `
    <div class="screen">
      <div class="card fill" style="gap:26px">
        <h2>${esc(t.chart.title)}</h2>
        <div style="flex:1 1 auto;min-height:0">${chartSvg(input.years, series)}</div>
        <div class="legend-title">${esc(t.chart.scenarios)}</div>
        <div class="legend">
          ${swatch('#15803d', t.chart.nominal)}
          ${swatch('#3b82f6', t.satellites.withInflation)}
          ${swatch('#84cc16', t.chart.afterTaxAndInflation)}
          ${swatch('#94a3b8', t.chart.contributions, true)}
        </div>
        <div class="label" style="font-size:25px;line-height:1.4">${esc(t.chart.disclaimer)}</div>
      </div>
    </div>`;
  },

  donut: ({ t, r, input, locale }) => {
    // The app derives the opening deposit by stepping the first year back by one
    // period's worth of top-ups; mirrored here so the slices match the screen.
    const perYear = r.yearlyData.length > 1
      ? (r.totalContributions - r.yearlyData[0].totalContributions) / (r.yearlyData.length - 1)
      : 0;
    const initial = r.yearlyData.length ? r.yearlyData[0].totalContributions - perYear : input.initialDeposit;
    const topUps = r.totalContributions - initial;
    const profitAfterTax = Math.max(0, r.afterTax - r.totalContributions);

    const slices = [
      { label: t.form.initialDeposit, value: initial, color: '#15803d' },
      { label: t.chart.contributions, value: topUps, color: '#3b82f6' },
      { label: t.donut.netProfit, value: profitAfterTax, color: '#84cc16' },
    ];

    // In "Amount" mode the app's legend shows the currency figure alone.
    const line = (color, label, value) => `
      <div class="legend-row">
        <i class="dot" style="background:${color}"></i>
        <span class="grow">${esc(label)}</span>
        <span class="amount">${money(value, locale)}</span>
      </div>`;

    return `
    <div class="screen">
      <div class="card fill" style="gap:24px">
        <div class="between">
          <h2>${esc(t.donut.title)}</h2>
          <span class="chip" style="font-size:26px;padding:10px 22px">${esc(t.donut.amount)}</span>
        </div>
        <div style="flex:1 1 auto;min-height:0;display:flex;align-items:center;justify-content:center">
          ${donutSvg(slices)}
        </div>
        <div style="display:flex;flex-direction:column;gap:18px">
          ${slices.map(sl => line(sl.color, sl.label, sl.value)).join('')}
          <div class="hairline"></div>
          ${line('#94a3b8', t.donut.taxesPaid, r.totalTaxes)}
        </div>
        <div class="label" style="font-size:25px;line-height:1.4">${esc(t.donut.disclaimer)}</div>
      </div>
    </div>`;
  },

  table: ({ t, r, locale }) => {
    const rows = r.yearlyData.filter((_, i) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14].includes(i));
    const body = rows.map((row, i) => `
      <tr${i === rows.length - 1 ? ' class="highlight"' : ''}>
        <td>${esc(fill(t.table.yearLabel, { n: row.year }))}</td>
        <td class="n">${money(row.totalContributions, locale)}</td>
        <td class="n">${money(row.nominalValue, locale)}</td>
        <td class="n">${money(row.afterTaxAndInflation, locale)}</td>
      </tr>`).join('');
    return `
    <div class="screen">
      <div class="card fill" style="gap:24px">
        <h2>${esc(t.table.title)}</h2>
        <table>
          <thead><tr>
            <th>${esc(t.table.period)}</th>
            <th class="n">${esc(t.table.contributions)}</th>
            <th class="n">${esc(t.table.nominalValue)}</th>
            <th class="n">${esc(t.satellites.withInflation)}</th>
          </tr></thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    </div>`;
  },

  /**
   * The language picker.
   *
   * Flags and native names come straight from the app; the heading, the count
   * and the tick are presentation. They state things that are true of the real
   * screen — the app carries 43 languages and marks the active one — rather
   * than implying a feature that is not there, which is the line that matters
   * for a store screenshot.
   */
  languages: ({ t, locales, locale, flags }) => {
    const shown = locales.slice(0, 20);
    const row = entry => `
      <div class="lang${entry.code === locale ? ' on' : ''}">
        <span class="flag">${flags[entry.code] || ''}</span>
        <span class="name">${esc(entry.name)}</span>
        ${entry.code === locale ? '<span class="tick">✓</span>' : ''}
      </div>`;
    return `
    <div class="screen">
      <div class="card fill" style="gap:18px">
        <div class="between">
          <h2>${esc(t.app.title)}</h2>
          <span class="chip" style="font-size:26px;padding:10px 22px">${locales.length}</span>
        </div>
        <div class="hairline"></div>
        <div style="display:flex;flex-direction:column;gap:6px">
          ${shown.map(row).join('')}
        </div>
      </div>
    </div>`;
  },

  methodology: ({ m, input }) => {
    // A function replacement, not a template string: `$1${input.years}` would
    // expand to "$115" and JS would read that as capture group 115.
    const intro = esc(String(m.orderIntro).replace(/(×\s*)Y(?![\p{L}])/u, (_, before) => before + input.years));

    return `
    <div class="screen">
      <div class="card fill" style="gap:24px;justify-content:space-between">
        <h2>${esc(m.title)}</h2>

        <div>
          <div class="label" style="margin-bottom:12px">${heading(m.rateTitle)}</div>
          <div class="formula">i<sub>m</sub> = (1 + r ÷ n)<sup>n ÷ 12</sup> − 1</div>
        </div>
        <div>
          <div class="label" style="margin-bottom:12px">${heading(m.inflationTitle)}</div>
          <div class="formula">V<sub>real</sub> = V<sub>nominal</sub> ÷ (1 + i)<sup>t</sup></div>
        </div>
        <div>
          <div class="label" style="margin-bottom:12px">${heading(m.irrTitle)}</div>
          <div class="formula" style="font-size:30px">annual return = (1 + x)<sup>12</sup> − 1</div>
        </div>

        <div class="hairline"></div>
        <div class="label" style="font-size:30px;line-height:1.45">${intro}</div>
        <div style="display:flex;flex-direction:column;gap:16px">
          ${m.orderSteps.map((step, i) => `
            <div class="row" style="align-items:flex-start">
              <span class="icon" style="width:48px;height:48px;font-size:26px;font-weight:700">${i + 1}</span>
              <span class="label" style="font-size:30px">${esc(step)}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
  },
};
