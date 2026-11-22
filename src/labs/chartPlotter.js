/* =========================================================================
   CH 8 ANALOG DATA PLOTTER & 5mm DOT-GRID SCALER
   Enter custom 4-row data → Live SVG + Physical Dot-Counting Instructions
   ========================================================================= */
const PRESETS = {
  aiTax: {
    name: 'AI Tax Orchestration (Seconds)',
    unit: 's',
    maxScale: 50,
    dotsPerUnit: 0.4, // 20 dots = 50s -> 1 dot = 2.5s
    unitPerDot: 2.5,
    rows: [
      { label: 'DE VAT Routine', before: 42, after: 2 },
      { label: 'OSS Threshold', before: 35, after: 4 },
      { label: 'Statute Citation', before: 48, after: 18 },
      { label: 'Memo Draft', before: 30, after: 7 }
    ]
  },
  deutsch: {
    name: 'German B2 Weekly Study (Minutes)',
    unit: 'm',
    maxScale: 100,
    unitPerDot: 5,
    rows: [
      { label: 'Anki + Sketchcards', before: 20, after: 65 },
      { label: 'Dativ/Akkusativ Drill', before: 15, after: 55 },
      { label: 'Podcast Listening', before: 30, after: 85 },
      { label: 'Speaking Shadowing', before: 10, after: 45 }
    ]
  },
  vatCost: {
    name: 'Query Compute Cost (Cents €)',
    unit: '¢',
    maxScale: 100,
    unitPerDot: 5,
    rows: [
      { label: 'Deadline Lookup', before: 88, after: 2 },
      { label: 'B2B Invoice Check', before: 74, after: 5 },
      { label: 'Cross-Border VAT', before: 96, after: 32 },
      { label: 'Risk Register Sync', before: 65, after: 4 }
    ]
  }
};

export function renderChartPlotterHTML() {
  return `
    <div class="lab mint-accent" id="plotter-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // Analog Chart Plotter &amp; 5mm Dot-Grid Scaler</span>
        <span class="pill mint">Auto-Computes Physical Dot Counts</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            <button class="seg-btn plt-pre active" data-p="aiTax">AI Tax Latency</button>
            <button class="seg-btn plt-pre" data-p="deutsch">Deutsch B2 Study</button>
            <button class="seg-btn plt-pre" data-p="vatCost">Compute Cost (¢)</button>
          </div>
          <div class="segmented" role="group">
            <button class="seg-btn plt-type active" data-t="dumbbell">Dumbbell</button>
            <button class="seg-btn plt-type" data-t="slope">Slopegraph</button>
            <button class="seg-btn plt-type" data-t="bullet">Bullet Graph</button>
            <button class="seg-btn plt-type" data-t="dotmatrix">Dot-Matrix</button>
          </div>
        </div>

        <div id="plt-inputs" class="grid-2"></div>

        <div class="svg-box"><svg id="plt-svg" viewBox="0 0 760 250"></svg></div>
        <div id="plt-recipe" class="lab-cap"></div>
      </div>
    </div>
  `;
}

export function initChartPlotter() {
  const lab = document.getElementById('plotter-lab');
  if (!lab) return;

  let chartType = 'dumbbell';
  let current = structuredClone(PRESETS.aiTax);

  function renderInputs() {
    const wrap = document.getElementById('plt-inputs');
    wrap.innerHTML = current.rows.map((r, i) => `
      <div style="display:flex; align-items:center; gap:6px; background:var(--bg-paper); padding:7px 9px; border:1.5px solid rgba(20,24,54,0.2); border-radius:8px;">
        <input class="txt-in plt-lbl" data-i="${i}" value="${r.label}" aria-label="Row label" />
        <span class="mono" style="font-size:10px; color:var(--magenta-deep);">A:</span>
        <input class="num-in plt-bef" data-i="${i}" type="number" min="0" max="500" value="${r.before}" aria-label="Before value" />
        <span class="mono" style="font-size:10px; color:var(--mint-deep);">B:</span>
        <input class="num-in plt-aft" data-i="${i}" type="number" min="0" max="500" value="${r.after}" aria-label="After value" />
      </div>
    `).join('');

    wrap.querySelectorAll('.plt-lbl').forEach(el => el.addEventListener('input', () => { current.rows[el.dataset.i].label = el.value; renderChart(); }));
    wrap.querySelectorAll('.plt-bef').forEach(el => el.addEventListener('input', () => { current.rows[el.dataset.i].before = Math.max(0, Number(el.value) || 0); renderChart(); }));
    wrap.querySelectorAll('.plt-aft').forEach(el => el.addEventListener('input', () => { current.rows[el.dataset.i].after = Math.max(0, Number(el.value) || 0); renderChart(); }));
  }

  function renderChart() {
    const svg = document.getElementById('plt-svg');
    const recipe = document.getElementById('plt-recipe');
    const maxVal = Math.max(10, ...current.rows.flatMap(r => [r.before, r.after]));
    // Pick a clean round scale for 20 physical dots
    const niceUnitPerDot = maxVal <= 20 ? 1 : maxVal <= 50 ? 2.5 : maxVal <= 100 ? 5 : maxVal <= 200 ? 10 : Math.ceil(maxVal / 20 / 5) * 5;
    const scaleMax = niceUnitPerDot * 20;

    if (chartType === 'dumbbell') {
      const leftX = 180, width = 500;
      let rowsSvg = '';
      // Draw 20 vertical dot-column ticks
      for (let d = 0; d <= 20; d += 2) {
        const x = leftX + (d / 20) * width;
        rowsSvg += `<line x1="${x}" y1="36" x2="${x}" y2="212" stroke="#CBD5E1" stroke-dasharray="3 3"/><text x="${x}" y="232" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A">${d}d (${(d * niceUnitPerDot).toFixed(0)}${current.unit})</text>`;
      }
      const steps = [];
      current.rows.forEach((r, i) => {
        const y = 62 + i * 42;
        const xA = leftX + (Math.min(r.before, scaleMax) / scaleMax) * width;
        const xB = leftX + (Math.min(r.after, scaleMax) / scaleMax) * width;
        const dA = (r.before / niceUnitPerDot).toFixed(1);
        const dB = (r.after / niceUnitPerDot).toFixed(1);
        const col = r.after <= r.before ? '#10B981' : '#0EA5E9';
        rowsSvg += `
          <text x="${leftX - 12}" y="${y + 4}" text-anchor="end" font-family="Patrick Hand, cursive" font-size="16" font-weight="700" fill="#141836">${r.label}</text>
          <line x1="${xA}" y1="${y}" x2="${xB}" y2="${y}" stroke="${col}" stroke-width="6.5" stroke-linecap="round"/>
          <circle cx="${xA}" cy="${y}" r="6.5" fill="#FFF" stroke="#EC4899" stroke-width="2.6"/>
          <circle cx="${xB}" cy="${y}" r="6" fill="#141836"/>
          <text x="${Math.max(xA, xB) + 12}" y="${y + 4}" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#141836">${r.before}→${r.after}${current.unit}</text>`;
        steps.push(`<strong>${r.label}:</strong> ○ at <code>${dA} dots</code>, ● at <code>${dB} dots</code>`);
      });
      svg.innerHTML = `
        <text x="18" y="22" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#141836">${current.name.toUpperCase()} — SCALE: 1 DOT = ${niceUnitPerDot}${current.unit} (20 DOTS WIDE)</text>
        ${rowsSvg}`;
      recipe.innerHTML = `<strong>Physical 5mm Dot-Grid Recipe (Dumbbell):</strong> Draw a 20-dot horizontal baseline (<code>1 dot = ${niceUnitPerDot}${current.unit}</code>). Space rows 2 dots apart vertically:<br/>• ${steps.join('<br/>• ')}`;
    } else if (chartType === 'slope') {
      const x1 = 220, x2 = 540, topY = 44, botY = 216;
      let lines = `
        <line x1="${x1}" y1="${topY}" x2="${x1}" y2="${botY}" stroke="#141836" stroke-width="2"/>
        <line x1="${x2}" y1="${topY}" x2="${x2}" y2="${botY}" stroke="#141836" stroke-width="2"/>
        <text x="${x1}" y="28" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#BE185D">BEFORE (A)</text>
        <text x="${x2}" y="28" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">AFTER (B)</text>`;
      const steps = [];
      // Compute raw coordinates then de-collide right-side labels so close values stay legible
      const pts = current.rows.map((r) => ({
        r,
        y1: botY - (Math.min(r.before, scaleMax) / scaleMax) * (botY - topY),
        y2: botY - (Math.min(r.after, scaleMax) / scaleMax) * (botY - topY)
      }));
      const sortedRight = [...pts].sort((a, b) => a.y2 - b.y2);
      sortedRight.forEach((p, idx) => {
        p.lblY2 = p.y2;
        if (idx > 0 && p.lblY2 - sortedRight[idx - 1].lblY2 < 16) {
          p.lblY2 = sortedRight[idx - 1].lblY2 + 16;
        }
      });
      pts.forEach(({ r, y1, y2, lblY2 }) => {
        const col = r.after >= r.before ? '#10B981' : '#0EA5E9';
        lines += `
          <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="3"/>
          <circle cx="${x1}" cy="${y1}" r="5" fill="#EC4899"/><circle cx="${x2}" cy="${y2}" r="5" fill="#141836"/>
          <text x="${x1 - 12}" y="${y1 + 4}" text-anchor="end" font-family="Patrick Hand, cursive" font-size="14.5">${r.label} (${r.before}${current.unit})</text>
          <text x="${x2 + 12}" y="${lblY2 + 4}" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">${r.after}${current.unit}</text>`;
        steps.push(`<strong>${r.label}:</strong> Left axis up <code>${(r.before / scaleMax * 10).toFixed(1)} dots</code> → Right axis up <code>${(r.after / scaleMax * 10).toFixed(1)} dots</code>`);
      });
      svg.innerHTML = lines;
      recipe.innerHTML = `<strong>Physical 5mm Dot-Grid Recipe (Slopegraph):</strong> Draw two vertical 10-dot axes spaced 12 dots apart (<code>1 dot vertical = ${(scaleMax / 10).toFixed(1)}${current.unit}</code>):<br/>• ${steps.join('<br/>• ')}`;
    } else if (chartType === 'bullet') {
      const leftX = 180, width = 500;
      let rowsSvg = '';
      current.rows.forEach((r, i) => {
        const y = 52 + i * 46;
        const wA = (Math.min(r.before, scaleMax) / scaleMax) * width;
        const wB = (Math.min(r.after, scaleMax) / scaleMax) * width;
        rowsSvg += `
          <text x="${leftX - 12}" y="${y + 18}" text-anchor="end" font-family="Patrick Hand, cursive" font-size="16" font-weight="700">${r.label}</text>
          <rect x="${leftX}" y="${y}" width="${width}" height="26" rx="4" fill="#E2E8F0"/>
          <rect x="${leftX}" y="${y}" width="${width * 0.65}" height="26" rx="4" fill="#CBD5E1"/>
          <rect x="${leftX}" y="${y + 7}" width="${wB}" height="12" rx="2" fill="#141836"/>
          <line x1="${leftX + wA}" y1="${y - 4}" x2="${leftX + wA}" y2="${y + 30}" stroke="#EC4899" stroke-width="3.2"/>
          <text x="${leftX + width + 10}" y="${y + 17}" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">${r.after}${current.unit}</text>`;
      });
      svg.innerHTML = `<text x="18" y="24" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700">BULLET GRAPH // SOLID BAR = B (AFTER) • MAGENTA TICK = A (BENCHMARK)</text>${rowsSvg}`;
      recipe.innerHTML = `<strong>Physical 5mm Dot-Grid Recipe (Bullet Graph):</strong> Shade a 20-dot Cool Grey performance strip (1 dot tall), draw a bold <code>05</code> actual bar inside it, and snap a vertical Magenta benchmark tick at Value A.`;
    } else {
      // Dot-Matrix 20-dot proportional breakdown of Value B across all 4 rows
      const totB = Math.max(1, current.rows.reduce((s, r) => s + r.after, 0));
      const palette = ['#0EA5E9', '#EC4899', '#10B981', '#F59E0B'];
      let dots = [];
      let assigned = 0;
      current.rows.forEach((r, i) => {
        const count = i === current.rows.length - 1 ? Math.max(0, 20 - assigned) : Math.round((r.after / totB) * 20);
        assigned += count;
        for (let k = 0; k < count && dots.length < 20; k++) dots.push({ col: palette[i], lbl: r.label });
      });
      let gridSvg = '';
      dots.forEach((d, idx) => {
        const col = idx % 10, row = Math.floor(idx / 10);
        gridSvg += `<circle cx="${86 + col * 58}" cy="${74 + row * 60}" r="20" fill="${d.col}" fill-opacity="0.68" stroke="#141836" stroke-width="2"/>`;
      });
      const legend = current.rows.map((r, i) => {
        const pct = Math.round((r.after / totB) * 100);
        return `<g transform="translate(${46 + i * 176}, 196)"><rect width="14" height="14" rx="3" fill="${palette[i]}" stroke="#141836"/><text x="20" y="11" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">${r.label.slice(0,14)} (${pct}%)</text></g>`;
      }).join('');
      svg.innerHTML = `<text x="18" y="26" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700">20-DOT PROPORTIONAL MATRIX (EACH CIRCLE = 5% OF TOTAL VALUE B)</text>${gridSvg}${legend}`;
      recipe.innerHTML = `<strong>Physical 5mm Dot-Grid Recipe (Dot-Matrix):</strong> Draw a crisp 10×2 grid of circles (using your Helix circle template or freehand ovals). Each circle equals <strong>5%</strong>—zero pie-chart angle guessing!`;
    }
  }

  lab.querySelectorAll('.plt-pre').forEach(btn => {
    btn.addEventListener('click', () => {
      current = structuredClone(PRESETS[btn.dataset.p]);
      lab.querySelectorAll('.plt-pre').forEach(b => b.classList.toggle('active', b === btn));
      renderInputs();
      renderChart();
    });
  });

  lab.querySelectorAll('.plt-type').forEach(btn => {
    btn.addEventListener('click', () => {
      chartType = btn.dataset.t;
      lab.querySelectorAll('.plt-type').forEach(b => b.classList.toggle('active', b === btn));
      renderChart();
    });
  });

  renderInputs();
  renderChart();
}
