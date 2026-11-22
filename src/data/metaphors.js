/* =========================================================================
   12 ILLUSTRATED LIGHT CYBERPUNK VISUAL METAPHORS + EDITORIAL ISOMETRIC HEROES
   ========================================================================= */

export const METAPHORS_12 = [
  {
    id: 'iceberg', cat: 'tax', title: '1. The Isometric Iceberg', concept: 'Hidden Statutory & System Depth',
    tip: '10% visible client UI or simple tax rate above water; 90% EU directives, VIES edge cases & German grammar rules submerged below.',
    svg: `<svg viewBox="0 0 240 140">
      <rect x="10" y="54" width="220" height="76" rx="6" fill="#0EA5E9" fill-opacity="0.14"/>
      <line x1="10" y1="54" x2="230" y2="54" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="5 3"/>
      <!-- Above Water Tip -->
      <polygon points="120,12 152,54 120,62 88,54" fill="#FFFFFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="120,12 152,54 120,62" fill="#E0F2FE" stroke="#141836" stroke-width="1.8"/>
      <!-- Submerged Massive Isometric Core -->
      <polygon points="88,54 120,62 120,124 58,92" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="2"/>
      <polygon points="152,54 120,62 120,124 182,92" fill="#0369A1" fill-opacity="0.45" stroke="#141836" stroke-width="2"/>
      <text x="196" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#141836">10% UI</text>
      <text x="196" y="106" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">90% RULES</text>
    </svg>`
  },
  {
    id: 'airlock', cat: 'ai', title: '2. The HITL Drawbridge / Airlock', concept: 'Human-in-the-Loop Governance',
    tip: 'Stateless reasoning sits on one bank; production write keys sit behind a Magenta security moat opened only by Partner approval.',
    svg: `<svg viewBox="0 0 240 140">
      <rect x="86" y="80" width="68" height="44" fill="#EC4899" fill-opacity="0.16"/>
      <polygon points="48,66 90,86 48,106 6,86" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
      <polygon points="192,66 234,86 192,106 150,86" fill="#D1FAE5" stroke="#141836" stroke-width="2"/>
      <polygon points="80,82 122,42 134,48 92,88" fill="#FFFDF5" stroke="#EC4899" stroke-width="2.2"/>
      <circle cx="152" cy="54" r="11" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/>
      <text x="152" y="58" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">OK</text>
      <text x="48" y="90" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">LLM</text>
      <text x="192" y="90" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">MCP</text>
      <text x="120" y="128" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">GOVERNANCE MOAT</text>
    </svg>`
  },
  {
    id: 'prism', cat: 'strategy', title: '3. The Cognitive Prism', concept: 'Compression & Decomposition',
    tip: 'Raw messy speech or a 40-page PDF enters one face of an isometric prism and exits split into Cyan Facts, Magenta Risks & Mint Actions.',
    svg: `<svg viewBox="0 0 240 140">
      <line x1="12" y1="74" x2="88" y2="74" stroke="#141836" stroke-width="4.5"/>
      <polygon points="120,24 160,104 80,104" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <polygon points="120,24 160,104 134,114 94,34" fill="#EEF2FC" fill-opacity="0.65" stroke="#141836" stroke-width="1.6"/>
      <line x1="142" y1="62" x2="226" y2="38" stroke="#0EA5E9" stroke-width="3.2"/>
      <line x1="148" y1="74" x2="226" y2="74" stroke="#EC4899" stroke-width="3.2"/>
      <line x1="154" y1="86" x2="226" y2="110" stroke="#10B981" stroke-width="3.2"/>
      <text x="44" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">RAW NOISE</text>
      <text x="200" y="30" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#0EA5E9">FACTS</text>
      <text x="200" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#BE185D">RISKS</text>
      <text x="200" y="124" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#047857">ACTIONS</text>
    </svg>`
  },
  {
    id: 'lighthouse', cat: 'strategy', title: '4. The Semantic Lighthouse', concept: 'Hierarchy Cutting Through Clutter',
    tip: 'A single high-contrast Cyan beam illuminates 3 key decisions inside a foggy sea of meeting notes.',
    svg: `<svg viewBox="0 0 240 140">
      <polygon points="74,40 226,14 226,86 74,56" fill="#F59E0B" fill-opacity="0.24"/>
      <polygon points="44,122 84,122 76,52 52,52" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="49,92 79,92 77,74 51,74" fill="#EC4899" fill-opacity="0.55"/>
      <rect x="52" y="36" width="24" height="16" rx="2" fill="#FEF3C7" stroke="#141836" stroke-width="2"/>
      <polygon points="48,36 64,20 80,36" fill="#141836"/>
      <circle cx="176" cy="48" r="9" fill="#0EA5E9" fill-opacity="0.45" stroke="#141836" stroke-width="1.8"/>
      <circle cx="206" cy="64" r="7" fill="#10B981" fill-opacity="0.45" stroke="#141836" stroke-width="1.8"/>
      <line x1="16" y1="122" x2="226" y2="122" stroke="#141836" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'conveyor', cat: 'ai', title: '5. The Triage Conveyor', concept: 'Automated Classification & Routing',
    tip: 'Draw an angled isometric belt passing beneath a glowing scanner arch that kicks complex items onto an alternate rail.',
    svg: `<svg viewBox="0 0 240 140">
      <polygon points="18,96 154,32 194,52 58,116" fill="#E2E8F0" stroke="#141836" stroke-width="2.2"/>
      <polygon points="58,116 194,52 194,66 58,130" fill="#94A3B8" stroke="#141836" stroke-width="1.8"/>
      <!-- Scanner Arch -->
      <path d="M 86 64 V 28 L 138 54 V 90" fill="none" stroke="#0EA5E9" stroke-width="6" stroke-linejoin="round"/>
      <path d="M 86 64 V 28 L 138 54 V 90" fill="none" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>
      <!-- Packet Cubes -->
      <polygon points="56,82 72,90 56,98 40,90" fill="#F59E0B" stroke="#141836" stroke-width="1.6"/>
      <polygon points="152,38 168,46 152,54 136,46" fill="#10B981" stroke="#141836" stroke-width="1.6"/>
      <text x="196" y="108" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0EA5E9">0.2s SCAN</text>
    </svg>`
  },
  {
    id: 'vault', cat: 'tax', title: '6. The Isometric Glass Vault', concept: 'Sandboxed Credentials & Data',
    tip: 'A translucent outer cube enclosing a Mint-locked core shows instantly that agents can inspect results without touching raw write keys.',
    svg: `<svg viewBox="0 0 240 140">
      <polygon points="120,16 184,48 120,80 56,48" fill="#E0F2FE" fill-opacity="0.35" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="4 3"/>
      <path d="M 56 48 V 100 L 120 132 L 184 100 V 48 M 120 80 V 132" fill="none" stroke="#0EA5E9" stroke-width="1.8" stroke-dasharray="4 3"/>
      <polygon points="120,56 148,70 120,84 92,70" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
      <polygon points="92,70 120,84 120,108 92,94" fill="#10B981" fill-opacity="0.45" stroke="#047857" stroke-width="2"/>
      <polygon points="148,70 120,84 120,108 148,94" fill="#047857" fill-opacity="0.6" stroke="#047857" stroke-width="2"/>
      <text x="120" y="74" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">KEY</text>
    </svg>`
  },
  {
    id: 'fulcrum', cat: 'tax', title: '7. The Isometric Fulcrum Scale', concept: 'Cost vs. Latency & Risk Tradeoffs',
    tip: 'Tilted beam balancing heavy single-LLM cost/risk against lightweight multi-agent speed + human verification.',
    svg: `<svg viewBox="0 0 240 140">
      <polygon points="120,76 144,122 96,122" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/>
      <line x1="34" y1="90" x2="206" y2="54" stroke="#141836" stroke-width="4" stroke-linecap="round"/>
      <rect x="34" y="48" width="42" height="36" rx="4" fill="#FCE7F3" stroke="#EC4899" stroke-width="2.2"/>
      <text x="55" y="70" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">€0.88</text>
      <circle cx="192" cy="40" r="14" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <text x="192" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">€0.04</text>
      <line x1="20" y1="122" x2="220" y2="122" stroke="#141836" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'bridge', cat: 'ai', title: '8. The Suspension Bridge', concept: 'MCP Integration & Analog↔Digital',
    tip: 'Two solid isometric cliffs connected by a glowing Cyan arch—works equally for API bridges or Paper→Obsidian workflows.',
    svg: `<svg viewBox="0 0 240 140">
      <polygon points="10,82 68,82 68,128 10,128" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="172,82 230,82 230,128 172,128" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <path d="M 62 82 Q 120 26 178 82" fill="none" stroke="#0EA5E9" stroke-width="4.5"/>
      <line x1="62" y1="82" x2="178" y2="82" stroke="#141836" stroke-width="3"/>
      <path d="M 90 66 V 82 M 120 54 V 82 M 150 66 V 82" stroke="#141836" stroke-width="1.6"/>
      <text x="39" y="109" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">PAPER</text>
      <text x="201" y="109" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">WIKI</text>
    </svg>`
  },
  {
    id: 'mountain', cat: 'deutsch', title: '9. The CEFR Basecamp Peak', concept: 'Staged Language & Skill Mastery',
    tip: 'Switchback path climbing an isometric mountain with flagged checkpoints (A1 → A2 → B1 → B2 Fachdeutsch).',
    svg: `<svg viewBox="0 0 240 140">
      <polygon points="120,16 218,124 22,124" fill="#EEF2FC" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>
      <polygon points="120,16 218,124 134,124" fill="#CBD5E1" fill-opacity="0.65" stroke="#141836" stroke-width="1.6"/>
      <polygon points="120,16 142,42 126,38 112,44 98,40" fill="#FFFFFF" stroke="#141836" stroke-width="1.4"/>
      <polyline points="54,116 116,96 86,74 136,54 120,24" fill="none" stroke="#EC4899" stroke-width="2.6" stroke-dasharray="4 3"/>
      <line x1="120" y1="16" x2="120" y2="4" stroke="#141836" stroke-width="2"/><polygon points="120,4 138,10 120,16" fill="#10B981" stroke="#141836" stroke-width="1.2"/>
      <text x="150" y="18" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">B2 / C1</text>
      <text x="48" y="114" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">A1</text>
    </svg>`
  },
  {
    id: 'dam', cat: 'tax', title: '10. The Floodgate Dam', concept: 'Triage, Rate-Limiting & Audit Buffer',
    tip: 'Holds back raw unstructured client requests on the left and releases metered, validated streams on the right.',
    svg: `<svg viewBox="0 0 240 140">
      <rect x="14" y="42" width="84" height="78" fill="#EC4899" fill-opacity="0.22"/>
      <path d="M 14 48 Q 36 38 56 48 T 98 48" fill="none" stroke="#EC4899" stroke-width="2.4"/>
      <polygon points="94,26 124,26 140,120 94,120" fill="#CBD5E1" stroke="#141836" stroke-width="2.4"/>
      <path d="M 134 86 H 222 M 136 104 H 222" stroke="#0EA5E9" stroke-width="3.6" stroke-linecap="round"/>
      <text x="54" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">RAW FLOOD</text>
      <text x="184" y="74" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0EA5E9">CLEAN FLOW</text>
    </svg>`
  },
  {
    id: 'archway', cat: 'deutsch', title: '11. The Satzklammer Gate', concept: 'German V2 → Verb-End Framing',
    tip: 'Two isometric pillars holding up a glowing bracket span: Pos-2 auxiliary on the left pillar, infinitive/participle locked on the right.',
    svg: `<svg viewBox="0 0 240 140">
      <rect x="26" y="44" width="38" height="78" rx="4" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
      <rect x="176" y="44" width="38" height="78" rx="4" fill="#FCE7F3" stroke="#141836" stroke-width="2.2"/>
      <path d="M 45 44 Q 120 4 195 44" fill="none" stroke="#7C3AED" stroke-width="3.5" stroke-dasharray="6 3"/>
      <rect x="74" y="76" width="92" height="32" rx="5" fill="#FFFDF5" stroke="#141836" stroke-width="1.8"/>
      <text x="45" y="86" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0EA5E9">V2</text>
      <text x="195" y="86" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">END</text>
      <text x="120" y="96" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Mittelfeld</text>
    </svg>`
  },
  {
    id: 'turbine', cat: 'deutsch', title: '12. The Compounding Flywheel', concept: 'Daily Habits & Anki Spaced Recall',
    tip: 'An isometric notched gear / turbine spinning faster with every 10-minute sketch drill and German sketch-card review.',
    svg: `<svg viewBox="0 0 240 140">
      <circle cx="120" cy="70" r="46" fill="#ECFDF5" stroke="#047857" stroke-width="2.4" stroke-dasharray="12 6"/>
      <circle cx="120" cy="70" r="26" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <path d="M 120 14 A 56 56 0 0 1 176 70" fill="none" stroke="#0EA5E9" stroke-width="3.2"/>
      <polygon points="176,74 170,63 182,63" fill="#0EA5E9"/>
      <path d="M 120 126 A 56 56 0 0 1 64 70" fill="none" stroke="#EC4899" stroke-width="3.2"/>
      <polygon points="64,66 70,77 58,77" fill="#EC4899"/>
      <text x="120" y="74" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">10m/DAY</text>
    </svg>`
  }
];

export function renderMetaphorsLabHTML() {
  return `
    <div class="lab" id="metaphors-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Library // 12 Light Cyberpunk Visual Metaphors</span>
        <div class="segmented no-print" role="group">
          <button class="seg-btn met-flt active" data-c="all">All (12)</button>
          <button class="seg-btn met-flt" data-c="ai">AI / Tech</button>
          <button class="seg-btn met-flt" data-c="tax">Tax / Risk</button>
          <button class="seg-btn met-flt" data-c="deutsch">Deutsch</button>
          <button class="seg-btn met-flt" data-c="strategy">Strategy</button>
        </div>
      </div>
      <div class="lab-body">
        <div id="met-grid" class="grid-3"></div>
      </div>
    </div>
  `;
}

export function initMetaphorsLab() {
  const lab = document.getElementById('metaphors-lab');
  if (!lab) return;
  const render = (cat) => {
    const list = cat === 'all' ? METAPHORS_12 : METAPHORS_12.filter(m => m.cat === cat);
    document.getElementById('met-grid').innerHTML = list.map(m => `
      <div class="card">
        <div class="svg-box">${m.svg}</div>
        <div class="card-h">${m.title}</div>
        <div class="mono" style="font-size:10px; font-weight:700; color:var(--violet); text-transform:uppercase;">${m.concept}</div>
        <p class="card-p">${m.tip}</p>
      </div>`).join('');
  };
  lab.querySelectorAll('.met-flt').forEach(b => b.addEventListener('click', () => {
    lab.querySelectorAll('.met-flt').forEach(x => x.classList.toggle('active', x === b));
    render(b.dataset.c);
  }));
  render('all');
}

/* =========================================================================
   EDITORIAL ISOMETRIC HERO VIGNETTES (COVER, CH 1, CH 6, CH 17)
   ========================================================================= */

export const HERO_ISO_COVER = `
  <div class="svg-box" style="padding:14px; background-color:#FFFFFF;">
    <svg viewBox="0 0 880 260">
      <!-- Floating Isometric Open Dot-Grid Sketchbook Base -->
      <polygon points="440,226 704,148 440,86 176,148" fill="#94A3B8" fill-opacity="0.22"/>
      <!-- Left Page Slab -->
      <polygon points="184,132 440,74 440,196 184,218" fill="#FFFFFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>
      <!-- Right Page Slab -->
      <polygon points="440,74 696,132 696,218 440,196" fill="#FAFBFD" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>
      <!-- Center Spine -->
      <line x1="440" y1="74" x2="440" y2="196" stroke="#141836" stroke-width="2.8"/>

      <!-- Left Rising Isometric Hologram: 3-Tier AI Tax Stack -->
      <g transform="translate(-14, 0)">
        <polygon points="318,128 386,154 318,180 250,154" fill="#10B981" fill-opacity="0.32" stroke="#141836" stroke-width="2"/>
        <polygon points="318,88 386,114 318,140 250,114" fill="#EC4899" fill-opacity="0.24" stroke="#EC4899" stroke-width="2" stroke-dasharray="5 3"/>
        <polygon points="318,48 386,74 318,100 250,74" fill="#0EA5E9" fill-opacity="0.34" stroke="#141836" stroke-width="2.4"/>
        <polyline points="252,74 318,50 384,74" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"/>
        <line x1="318" y1="100" x2="318" y2="114" stroke="#141836" stroke-width="1.8" stroke-dasharray="3 2"/>
        <line x1="318" y1="140" x2="318" y2="154" stroke="#141836" stroke-width="1.8" stroke-dasharray="3 2"/>
      </g>

      <!-- Right Rising Isometric Hologram: German Satzklammer Archway + Dumbbell Chart -->
      <g transform="translate(14, 0)">
        <polygon points="502,124 532,138 532,180 502,166" fill="#0EA5E9" fill-opacity="0.32" stroke="#141836" stroke-width="2"/>
        <polygon points="586,136 616,150 616,192 586,178" fill="#EC4899" fill-opacity="0.28" stroke="#141836" stroke-width="2"/>
        <path d="M 517 124 Q 560 54 601 136" fill="none" stroke="#7C3AED" stroke-width="3.2" stroke-dasharray="6 3"/>
        <rect x="528" y="42" width="76" height="24" rx="12" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.8"/>
        <text x="566" y="58" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#7C3AED">V2 → END</text>
        <!-- Floating Mini Dumbbell Card -->
        <rect x="466" y="76" width="112" height="36" rx="6" fill="#FFFDF5" stroke="#141836" stroke-width="1.8"/>
        <line x1="482" y1="94" x2="554" y2="94" stroke="#10B981" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="482" cy="94" r="4.5" fill="#141836"/><circle cx="554" cy="94" r="5" fill="#FFF" stroke="#EC4899" stroke-width="2"/>
      </g>

      <!-- Left & Right Elbow Callouts -->
      <g font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">
        <polyline points="236,74 176,42 30,42" fill="none" stroke="#0EA5E9" stroke-width="1.8"/><circle cx="236" cy="74" r="4" fill="#0EA5E9"/>
        <text x="30" y="34" fill="#0EA5E9">AI &amp; EU TAX ISOMETRICS</text>
        <polyline points="236,154 166,184 30,184" fill="none" stroke="#047857" stroke-width="1.8"/><circle cx="236" cy="154" r="4" fill="#047857"/>
        <text x="30" y="176" fill="#047857">3-WEIGHT LINES + AO</text>

        <polyline points="622,54 700,42 850,42" fill="none" stroke="#7C3AED" stroke-width="1.8"/><circle cx="622" cy="54" r="4" fill="#7C3AED"/>
        <text x="850" y="34" text-anchor="end" fill="#7C3AED">DEUTSCH SATZKLAMMER</text>
        <polyline points="640,164 714,184 850,184" fill="none" stroke="#BE185D" stroke-width="1.8"/><circle cx="640" cy="164" r="4" fill="#BE185D"/>
        <text x="850" y="176" text-anchor="end" fill="#BE185D">ANALOG DATA VIZ</text>
      </g>

      <!-- Isometric Micron Fineliner Resting Foreground -->
      <polygon points="338,224 530,224 544,230 530,236 338,236" fill="#141836" stroke="#141836" stroke-width="1.5"/>
      <rect x="380" y="226" width="94" height="8" rx="2" fill="#00D4FF"/>
      <text x="440" y="252" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#525B7A">5mm DOT GRID • 1 INDIGO INK + 2 SEMANTIC ACCENTS + COOL GREY</text>
    </svg>
  </div>
`;

export const HERO_ISO_PRISM = `
  <div class="svg-box">
    <svg viewBox="0 0 760 160">
      <text x="380" y="20" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">VISUAL METAPHOR // DUAL-CODING CRYSTAL: VERBAL + SPATIAL MEMORY FUSION</text>
      <!-- Verbal Beam -->
      <rect x="34" y="42" width="166" height="32" rx="6" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/><text x="117" y="62" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0EA5E9">VERBAL CHANNEL (Words)</text>
      <line x1="200" y1="58" x2="316" y2="86" stroke="#0EA5E9" stroke-width="3.2"/>
      <!-- Spatial Beam -->
      <rect x="34" y="98" width="166" height="32" rx="6" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/><text x="117" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">VISUAL CHANNEL (Space)</text>
      <line x1="200" y1="114" x2="316" y2="86" stroke="#EC4899" stroke-width="3.2"/>
      <!-- Isometric Crystal Prism -->
      <polygon points="364,38 412,66 364,94 316,66" fill="#FFFFFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="316,66 364,94 364,136 316,108" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="2.2"/>
      <polygon points="412,66 364,94 364,136 412,108" fill="#7C3AED" fill-opacity="0.34" stroke="#141836" stroke-width="2.2"/>
      <!-- Dual-Coded Output -->
      <line x1="414" y1="86" x2="500" y2="86" stroke="#10B981" stroke-width="4"/><polygon points="506,86 494,79 494,93" fill="#10B981"/>
      <rect x="510" y="54" width="218" height="64" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <text x="619" y="80" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">2× RETRIEVAL HOOKS ★</text>
      <text x="619" y="102" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">"Magenta dashed box, top-right!"</text>
    </svg>
  </div>
`;

export const HERO_ISO_COMPRESSOR = `
  <div class="svg-box">
    <svg viewBox="0 0 760 160">
      <text x="380" y="20" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">VISUAL METAPHOR // THE 100 → 7 ISOMETRIC AUDIO COMPRESSOR</text>
      <!-- Raw Audio Wave -->
      <path d="M 32 88 Q 48 44 64 88 T 96 88 T 128 88 T 160 88 T 192 88 T 224 88" fill="none" stroke="#EC4899" stroke-width="3"/>
      <text x="128" y="132" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">150 WORDS/MIN SPEECH</text>
      <!-- Isometric Compression Block -->
      <polygon points="360,36 436,74 360,112 284,74" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
      <polygon points="284,74 360,112 360,138 284,100" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="436,74 360,112 360,138 436,100" fill="#64748B" stroke="#141836" stroke-width="2"/>
      <text x="360" y="78" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">3-SIEVE FILTER</text>
      <line x1="232" y1="88" x2="282" y2="88" stroke="#141836" stroke-width="2.6"/>
      <line x1="438" y1="88" x2="504" y2="88" stroke="#10B981" stroke-width="3.6"/><polygon points="510,88 498,81 498,95" fill="#10B981"/>
      <!-- Output Crystal Card -->
      <path d="M 522 126 H 728 V 56" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.6"/>
      <rect x="514" y="48" width="208" height="72" rx="7" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <text x="618" y="76" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">7-WORD VISUAL ATOM</text>
      <text x="618" y="100" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15">Subject → Verb → Delta!</text>
    </svg>
  </div>
`;

export const HERO_ISO_BRIDGE = `
  <div class="svg-box">
    <svg viewBox="0 0 760 170">
      <text x="380" y="20" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">ISOMETRIC METAPHOR // ANALOG PAPER ISLAND ⇄ DIGITAL WIKI &amp; ANKI ISLAND</text>
      <!-- Left Paper Island -->
      <polygon points="154,78 244,116 154,154 64,116" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
      <polygon points="64,116 154,154 154,166 64,128" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>
      <polygon points="244,116 154,154 154,166 244,128" fill="#94A3B8" stroke="#141836" stroke-width="1.8"/>
      <text x="154" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">A5 DOT GRID</text>
      <text x="154" y="130" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#525B7A">Think &amp; Sketch</text>

      <!-- Right Digital Island -->
      <polygon points="606,78 696,116 606,154 516,116" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
      <polygon points="516,116 606,154 606,166 516,128" fill="#94A3B8" stroke="#141836" stroke-width="1.8"/>
      <polygon points="696,116 606,154 606,166 696,128" fill="#64748B" stroke="#141836" stroke-width="1.8"/>
      <text x="606" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0EA5E9">TAXWIKI + ANKI</text>
      <text x="606" y="130" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">Search &amp; Recall</text>

      <!-- Glowing Arched Bridge + Floating Scanned Card -->
      <path d="M 224 108 Q 380 26 536 108" fill="none" stroke="#0EA5E9" stroke-width="4"/>
      <path d="M 224 118 Q 380 42 536 118" fill="none" stroke="#141836" stroke-width="2" stroke-dasharray="5 3"/>
      <rect x="316" y="42" width="128" height="44" rx="6" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
      <text x="380" y="61" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">NB02-P14.PNG</text>
      <text x="380" y="77" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#141836">90° SIDE-LIT SCAN</text>
    </svg>
  </div>
`;
