/* =========================================================================
   APPENDIX K: ISOMETRIC & EXPLODED-VIEW ILLUSTRATION MASTERCLASS
   Teaches 2-Over-1-Up Isometrics + Exploding Components (6 Live Interactive Scenes)
   ========================================================================= */

function plane(cx, y, rx, ry, h, topF, leftF, rightF, label = '', sub = '', textCol = '#141836', extra = '') {
  return `
    <g>
      <polygon points="${cx-rx},${y+ry} ${cx},${y+ry*2} ${cx},${y+ry*2+h} ${cx-rx},${y+ry+h}" fill="${leftF}" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="${cx+rx},${y+ry} ${cx},${y+ry*2} ${cx},${y+ry*2+h} ${cx+rx},${y+ry+h}" fill="${rightF}" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="${cx},${y} ${cx+rx},${y+ry} ${cx},${y+ry*2} ${cx-rx},${y+ry}" fill="${topF}" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
      ${extra}
      ${label ? `<text x="${cx}" y="${y + ry + 3}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="${textCol}">${label}</text>` : ''}
      ${sub ? `<text x="${cx + rx + 18}" y="${y + ry + 5}" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">← ${sub}</text>` : ''}
    </g>
  `;
}

export const EXPLODED_SCENES = [
  {
    id: 'ai-stack',
    short: '1. Exploded AI SaaS Stack',
    name: '1. Exploded 4-Layer AI Product Architecture',
    recipe: [
      'Draw one faint vertical center spine line straight down your dot-grid column—every exploded layer stays dead-centered on this rail!',
      'Draw 4 identical 2-over-1-up diamond slabs spaced 3–4 dot rows apart vertically (UI Top → Agent Router → RAG Memory → Ledger Base).',
      'Drop 4 faint dashed corner drop-lines linking matching corners vertically, then glaze left faces 1× light & right faces 2× dark!'
    ],
    render: (t, showGuides) => {
      const gap = Math.round(14 + t * 44);
      const y3 = 236, y2 = y3 - gap, y1 = y2 - gap, y0 = y1 - gap;
      return `<svg viewBox="0 0 680 350">
        ${showGuides ? `<g stroke="#0EA5E9" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.7">
          <line x1="280" y1="${y0}" x2="280" y2="${y3 + 80}"/>
          <line x1="170" y1="${y0 + 38}" x2="170" y2="${y3 + 48}"/>
          <line x1="390" y1="${y0 + 38}" x2="390" y2="${y3 + 48}"/>
        </g>` : ''}
        ${plane(280, y3, 110, 38, 16, '#D1FAE5', '#A7F3D0', '#10B981', '04 // LEDGER & DB', 'Read-Only Vault + Audit Trail', '#047857')}
        ${plane(280, y2, 110, 38, 14, '#EDE9FE', '#DDD6FE', '#7C3AED', '03 // RAG STATUTES', 'Chunked § Tax & Policy Vectors', '#6D28D9')}
        ${plane(280, y1, 110, 38, 14, '#FCE7F3', '#FBCFE8', '#EC4899', '02 // AI ORCHESTRATOR', 'Flash Triage + HITL Guardrails', '#BE185D')}
        ${plane(280, y0, 110, 38, 14, '#E0F2FE', '#BAE6FD', '#0EA5E9', '01 // PRODUCT UI', 'Clean Customer Canvas & Controls', '#0369A1')}
        <text x="280" y="336" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#525B7A">EXPLODE DISTANCE: ${Math.round(t * 100)}% // ALIGN ALL CORNERS ON VERTICAL DOT RAILS</text>
      </svg>`;
    }
  },
  {
    id: 'keyswitch',
    short: '2. Mechanical Key Switch',
    name: '2. Exploded Mechanical Keyboard Switch Cutaway',
    recipe: [
      'Start from the bottom green PCB diamond slab and mark the central socket hole.',
      'Float the helical wire spring (just 4 stacked zigzag loops!) + cross-stem plunger centered along the vertical axis.',
      'Float the sculpted chamfered Keycap lid at the very top and add crisp horizontal callout leader ticks right!'
    ],
    render: (t, showGuides) => {
      const gap = Math.round(10 + t * 44);
      const yBase = 248, yHouse = yBase - gap, yStem = yHouse - gap, yCap = yStem - gap;
      return `<svg viewBox="0 0 680 350">
        ${showGuides ? `<line x1="270" y1="${yCap + 10}" x2="270" y2="${yBase + 66}" stroke="#EC4899" stroke-width="1.5" stroke-dasharray="4 4"/>` : ''}
        ${plane(270, yBase, 118, 36, 12, '#D1FAE5', '#A7F3D0', '#047857', 'PCB CIRCUIT', 'Hot-Swap Socket & Copper Traces', '#047857')}
        ${plane(270, yHouse, 78, 26, 20, '#EEF2FC', '#CBD5E1', '#64748B', 'HOUSING', 'Translucent Switch Shell', '#141836')}
        <!-- Spring & Cross Stem -->
        <g transform="translate(270, ${yStem + 10})">
          <path d="M -14 26 L 14 20 L -14 14 L 14 8 L -14 2" fill="none" stroke="#B45309" stroke-width="2.4" stroke-linecap="round"/>
          <rect x="-12" y="-14" width="24" height="16" rx="3" fill="#0EA5E9" stroke="#141836" stroke-width="2"/>
          <path d="M -6 -22 H 6 M 0 -28 V -16" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
          <text x="128" y="4" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">← Tactile Cross-Stem + Coil Spring</text>
        </g>
        ${plane(270, yCap - 10, 74, 24, 18, '#FCE7F3', '#FBCFE8', '#EC4899', '⌘K CAP', 'Sculpted PBT Keycap Top', '#BE185D')}
      </svg>`;
    }
  },
  {
    id: 'tax-engine',
    short: '3. EU VAT Tax Engine',
    name: '3. Exploded EU VAT Cross-Border Calculation Engine',
    recipe: [
      'Stack 4 diamond processing plates showing how one customer purchase drops straight through tax logic.',
      'Draw vertical dashed Cyan data-flow arrows piercing downward from Checkout → Geo-IP → Rate Matrix → OSS Return.',
      'Tint the high-risk validation layer Magenta so compliance checkpoints leap off the page!'
    ],
    render: (t, showGuides) => {
      const gap = Math.round(14 + t * 44);
      const y3 = 236, y2 = y3 - gap, y1 = y2 - gap, y0 = y1 - gap;
      return `<svg viewBox="0 0 680 350">
        ${showGuides ? `<line x1="270" y1="${y0}" x2="270" y2="${y3 + 82}" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="5 4"/>` : ''}
        ${plane(270, y3, 108, 36, 14, '#D1FAE5', '#A7F3D0', '#10B981', 'ELSTER OSS', 'Quarterly 1-Stop Filing Output', '#047857')}
        ${plane(270, y2, 108, 36, 14, '#FEF3C7', '#FDE68A', '#F59E0B', '27-STATE RATES', 'DE 19% • FR 20% • NL 21%', '#B45309')}
        ${plane(270, y1, 108, 36, 14, '#FCE7F3', '#FBCFE8', '#EC4899', 'VIES & 2-PROOF', 'B2B §13b Gate / IP + BIN Match', '#BE185D')}
        ${plane(270, y0, 108, 36, 14, '#E0F2FE', '#BAE6FD', '#0EA5E9', 'CART EVENT', '€100 Digital SaaS Purchase', '#0369A1')}
      </svg>`;
    }
  },
  {
    id: 'app-screen',
    short: '4. Exploded UI Screen',
    name: '4. Exploded Mobile Product UI Z-Index Layers',
    recipe: [
      'Draw 3 stacked isometric phone-screen diamonds tilted along the same 2-over-1-up axis.',
      'Put Background Navigation Chrome on the bottom plate, Interactive Cards on the middle plate, and Modal/Toast Alerts floating on top!',
      'Essential product-design diagram for explaining overlays, loading states, and micro-interactions to engineers.'
    ],
    render: (t, showGuides) => {
      const gap = Math.round(16 + t * 50);
      const y2 = 228, y1 = y2 - gap, y0 = y1 - gap;
      return `<svg viewBox="0 0 680 350">
        ${showGuides ? `<g stroke="#7C3AED" stroke-width="1.3" stroke-dasharray="4 4">
          <line x1="166" y1="${y0 + 36}" x2="166" y2="${y2 + 44}"/>
          <line x1="374" y1="${y0 + 36}" x2="374" y2="${y2 + 44}"/>
        </g>` : ''}
        ${plane(270, y2, 104, 36, 12, '#EEF2FC', '#CBD5E1', '#64748B', 'Z-0 // CHROME', 'Bottom Tab Bar & Dot-Grid Canvas', '#141836')}
        ${plane(270, y1, 104, 36, 12, '#E0F2FE', '#BAE6FD', '#0EA5E9', 'Z-10 // CARDS', 'Interactive Content Bento Tiles', '#0369A1')}
        ${plane(270, y0, 74, 26, 10, '#FCE7F3', '#FBCFE8', '#EC4899', 'Z-50 // MODAL', 'Floating Confirmation / ⌘K Search', '#BE185D')}
      </svg>`;
    }
  },
  {
    id: 'desk-diorama',
    short: '5. Isometric Studio Desk',
    name: '5. Exploded Sketching Studio Desk Diorama',
    recipe: [
      'Build the thick isometric wooden tabletop slab first with 2-over-1-up diagonals.',
      'Place small isometric items directly on top (Dot-Grid Notebook, Coffee Cylinder, Monitor Slab) aligned to the exact same axes.',
      'Explode floating UI/Idea Holograms directly upward off the notebook & screen for instant Light Cyberpunk magic!'
    ],
    render: (t, showGuides) => {
      const lift = Math.round(t * 48);
      return `<svg viewBox="0 0 680 350">
        ${showGuides ? `<line x1="270" y1="60" x2="270" y2="290" stroke="#0EA5E9" stroke-width="1.4" stroke-dasharray="4 4"/>` : ''}
        ${plane(270, 206, 146, 48, 18, '#FEF3C7', '#FDE68A', '#D97706', '', 'Solid Studio Tabletop Base')}
        <!-- Notebook & Mug resting on desk -->
        ${plane(235, 214 - Math.round(lift * 0.45), 44, 16, 7, '#FFF', '#E2E8F0', '#94A3B8', 'A5 DOT', '')}
        ${plane(330, 206 - Math.round(lift * 0.7), 48, 18, 8, '#141836', '#334155', '#0F172A', 'LAPTOP', 'Workstation Layer', '#00D4FF')}
        <!-- Floating Hologram Idea Cards -->
        ${plane(270, 126 - lift, 96, 32, 10, '#E0F2FE', '#BAE6FD', '#0EA5E9', 'VISUAL IDEAS ✦', 'Exploded Floating Note Layer!', '#0369A1')}
      </svg>`;
    }
  },
  {
    id: 'german-cube',
    short: '6. Exploded Satzklammer',
    name: '6. Exploded German Sentence Architecture Cube',
    recipe: [
      'Stack the 4 structural floors of a German clause vertically so you see how they snap together.',
      'Color-code Pos 2 & End-Verb Magenta so the outer clamping bracket wraps the Cyan TeKaMoLo middle slab!',
      'Slide to 0% to see the completed spoken sentence cube—slide to 100% to dissect every grammatical piece!'
    ],
    render: (t, showGuides) => {
      const gap = Math.round(14 + t * 44);
      const y3 = 236, y2 = y3 - gap, y1 = y2 - gap, y0 = y1 - gap;
      return `<svg viewBox="0 0 680 350">
        ${showGuides ? `<line x1="270" y1="${y0}" x2="270" y2="${y3 + 80}" stroke="#EC4899" stroke-width="1.5" stroke-dasharray="4 4"/>` : ''}
        ${plane(270, y3, 104, 34, 14, '#FCE7F3', '#FBCFE8', '#EC4899', 'ENDE: prüfen.', 'Infinitive Closes Bracket', '#BE185D')}
        ${plane(270, y2, 104, 34, 14, '#D1FAE5', '#A7F3D0', '#10B981', 'Te • Ka • Mo • Lo', 'heute • schnell • im Büro', '#047857')}
        ${plane(270, y1, 104, 34, 14, '#FCE7F3', '#FBCFE8', '#EC4899', 'POS 2: muss', 'Conjugated Verb Locked #2', '#BE185D')}
        ${plane(270, y0, 104, 34, 14, '#E0F2FE', '#BAE6FD', '#0EA5E9', 'POS 1: Ich', 'Vorfeld Anchor Element', '#0369A1')}
      </svg>`;
    }
  }
];

export function renderExplodedIsoLabHTML() {
  return `
    <!-- 1. HOW TO DRAW ANY ISOMETRIC & EXPLODED VIEW ON STANDARD DOT GRID -->
    <section class="section-block">
      <h2>How to Draw Isometric &amp; Exploded Views on Normal Dot-Grid Paper</h2>
      <p>
        You do <strong>not</strong> need special triangular isometric paper! On any standard 5mm square dot-grid notebook, counting <strong>2 dots right + 1 dot up</strong> produces an angle of <code>26.57°</code>—visually indistinguishable from true 30° CAD isometrics—while locking every single corner cleanly onto printed dots!
      </p>
      <div class="grid-4">
        <div class="card">
          <span class="pill cyan" style="align-self:flex-start;">Step 01 // 2-Over-1-Up</span>
          <div class="card-h">Draw Top Diamond First</div>
          <p class="card-p">Mark a center top dot. Count 2 right + 1 down (repeat 2–3×) for the right roof edge; mirror 2 left + 1 down for the left edge. Close the diamond!</p>
        </div>
        <div class="card">
          <span class="pill violet" style="align-self:flex-start;">Step 02 // Vertical Drop</span>
          <div class="card-h">Extrude Straight Down</div>
          <p class="card-p">Pull 3 strictly vertical lines downward from the Left, Center, and Right corners of your diamond (1–3 dots tall for slabs, 4–6 dots for cubes).</p>
        </div>
        <div class="card">
          <span class="pill magenta" style="align-self:flex-start;">Step 03 // Explode Spine</span>
          <div class="card-h">Float &amp; Align Components</div>
          <p class="card-p">For exploded cutaways, draw ONE light vertical centerline spine first. Stack each floating component centered on that rail with 3–4 open dots of air between layers, linked by dashed corner drop-lines!</p>
        </div>
        <div class="card">
          <span class="pill mint" style="align-self:flex-start;">Step 04 // 3-Value Shade</span>
          <div class="card-h">Top White • L 1× • R 2×</div>
          <p class="card-p">Light hits from top-left: keep Top planes bright white or light tint, glaze Left walls 1× Cool Grey, glaze Right walls 2× Cool Grey, and trace the outer silhouette in bold 05 ink!</p>
        </div>
      </div>
    </section>

    <!-- 2. INTERACTIVE EXPLODED-VIEW ASSEMBLER & DISSECTOR -->
    <section class="lab cyan-accent" id="exp-iso-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Exploded-View Lab // 6 Isometric Cutaways (Drag to Explode!)</span>
        <label class="chk-lbl no-print"><input id="exp-guide-chk" type="checkbox" checked /> Vertical Alignment Drop-Lines</label>
      </div>
      <div class="lab-body">
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          ${EXPLODED_SCENES.map((s, i) => `<button class="seg-btn exp-tab ${i === 0 ? 'active' : ''}" data-id="${s.id}">${s.short}</button>`).join('')}
        </div>

        <div class="lab-ctrl no-print">
          <div class="slider-grp">
            <span>ASSEMBLED (0%)</span>
            <input id="exp-slider" type="range" min="0" max="100" value="75" style="width:220px;" />
            <span>EXPLODED (100%)</span>
          </div>
          <div style="display:flex; gap:7px;">
            <button id="exp-btn-close" class="btn secondary">Collapse 0%</button>
            <button id="exp-btn-open" class="btn magenta">Explode 100%</button>
          </div>
        </div>

        <div class="card tinted" style="border-color:var(--cyan);">
          <span id="exp-title" class="card-h" style="font-size:18px;"></span>
          <div id="exp-svg-box" class="svg-box" style="margin:6px 0;"></div>
          <div class="card" style="background:#FFF;">
            <div class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep);">3-STEP EXPLODED-VIEW FREEHAND RECIPE</div>
            <ol id="exp-recipe" style="padding-left:20px; font-size:14.2px; display:flex; flex-direction:column; gap:4px; color:var(--ink-body);"></ol>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initExplodedIsoLab() {
  const lab = document.getElementById('exp-iso-lab');
  if (!lab) return;

  let activeId = EXPLODED_SCENES[0].id;
  let pct = 0.75;
  let showGuides = true;

  const render = () => {
    const sc = EXPLODED_SCENES.find(x => x.id === activeId) || EXPLODED_SCENES[0];
    document.getElementById('exp-title').textContent = sc.name;
    document.getElementById('exp-svg-box').innerHTML = sc.render(pct, showGuides);
    document.getElementById('exp-recipe').innerHTML = sc.recipe.map(r => `<li>${r}</li>`).join('');
  };

  lab.querySelectorAll('.exp-tab').forEach(b => b.addEventListener('click', () => {
    activeId = b.dataset.id;
    lab.querySelectorAll('.exp-tab').forEach(x => x.classList.toggle('active', x === b));
    render();
  }));
  const slider = document.getElementById('exp-slider');
  slider?.addEventListener('input', (e) => { pct = Number(e.target.value) / 100; render(); });
  document.getElementById('exp-guide-chk')?.addEventListener('change', (e) => { showGuides = e.target.checked; render(); });
  document.getElementById('exp-btn-close')?.addEventListener('click', () => { pct = 0; slider.value = 0; render(); });
  document.getElementById('exp-btn-open')?.addEventListener('click', () => { pct = 1; slider.value = 100; render(); });

  render();
}
