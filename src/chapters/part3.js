/* =========================================================================
   PART III: DIAGRAMS, ANALOG DATA VIZ & MATRICES (CHAPTERS 7–9)
   ========================================================================= */
import { gt } from '../data/glossary.js';
import { renderQuizHTML, initQuiz } from '../labs/quizEngine.js';
import { renderSketchpadHTML, initSketchpad } from '../labs/sketchpad.js';
import { renderChartPlotterHTML, initChartPlotter } from '../labs/chartPlotter.js';
import { DEEP_CONTENT_2 } from '../data/deepContent2.js';
import { MASTERCLASS_A } from '../data/masterclassA.js';

const CH7_QUIZ = [
  {
    q: 'Why does the "Stop-Short & Bridge" method produce dramatically cleaner rounded corners freehand than drawing a rectangle in one continuous loop?',
    opts: [
      'Because you use a compass for every corner',
      'Separating the 4 straight forearm pulls from the 4 tiny quarter-arc bridges prevents lumpy momentum wobbles',
      'Because rounded boxes only need 2 walls',
      'Because gel ink dries slower at corners'
    ],
    ans: 1,
    why: 'Long straight pulls use elbow momentum; tiny corner arcs use fine finger rotation. Stopping 0.5 dots short isolates both motions cleanly.'
  },
  {
    q: 'What is the #1 rule for lifting a brass or plastic stencil off wet fineliner ink without smudging?',
    opts: [
      'Slide it smoothly to the right',
      'Lift it straight up vertically like a helicopter',
      'Press down harder and rotate it 90°',
      'Blow on it while sliding'
    ],
    ans: 1,
    why: 'Sliding sideways drags pooled ink from the bevel across the page. Lifting strictly vertically (plus a masking-tape hover shim underneath) keeps edges razor clean.'
  }
];

const CH8_QUIZ = [
  {
    q: 'Why does a 5×2 or 10×10 Dot-Matrix chart beat a freehand Pie Chart in an analog dot-grid notebook?',
    opts: [
      'Humans judge circular pie angles poorly and freehand wedges distort ratios, whereas dots map directly to countable percentages (e.g., 1 circle = 5% or 10%)',
      'Pie charts cannot be drawn with blue ink',
      'Dot-matrix charts take 3 pages to draw',
      'Pie charts require alcohol markers'
    ],
    ans: 0,
    why: 'Dot-Matrix grids align natively to 5mm dots and let readers count exact shares (e.g., 8 Cyan / 2 Magenta = 80/20 split) without a protractor.'
  },
  {
    q: 'What is the Golden Scaling Rule before plotting any analog chart on a 5mm dot grid?',
    opts: [
      'Stretch the chart edge-to-edge regardless of odd fractions',
      'Assign 1 dot to a clean round unit (e.g., 1 dot = €5, 10%, or 2.5s) first so data points snap effortlessly to dots',
      'Estimate every bar height by eye without counting dots',
      'Only plot numbers between 1 and 5'
    ],
    ans: 1,
    why: 'Picking a clean round unit-per-dot eliminates mental math and makes every plotted point visually verifiable.'
  }
];

const CH9_QUIZ = [
  {
    q: 'How do you keep a hand-drawn dot-grid table airy and legible without turning it into a heavy prison grid?',
    opts: [
      'Draw thick 05 vertical and horizontal boxes around every single cell',
      'Use light horizontal row separators only (or alternating subtle Cool Grey bands), right-aligned tabular numbers, and zero inner vertical cage lines',
      'Write every cell in italics',
      'Use 6 different highlighter colors per row'
    ],
    ans: 1,
    why: 'Removing heavy vertical cell cages (Tufte\'s data-ink ratio) keeps eye movement smoothly horizontal while tabular column alignment handles vertical separation automatically.'
  },
  {
    q: 'On a horizontal German Verb-Tense Timeline, where does Plusquamperfekt sit relative to Perfekt/Präteritum?',
    opts: [
      'To the right of Präsens (future)',
      'Further to the left ("past before the past" — e.g., Nachdem ich die Steuer geprüft hatte, schickte ich sie ab)',
      'Directly stacked on top of Futur I',
      'It is not a time tense'
    ],
    ans: 1,
    why: 'Placing Plusquamperfekt on the far left anchor immediately clarifies its sequence role: an action completed prior to a second past action.'
  }
];

const CH8_CHARTS = [
  ['comp', '1. Diverging Dumbbell / Gap Chart', 'Best for Before ○ vs. After ● cost or latency gaps (e.g., Single LLM $0.88 vs. Multi-Agent $0.04).', '<line x1="60" y1="30" x2="215" y2="30" stroke="#10B981" stroke-width="5.5" stroke-linecap="round"/><circle cx="60" cy="30" r="5.5" fill="#141836"/><circle cx="215" cy="30" r="6" fill="#FFF" stroke="#EC4899" stroke-width="2.4"/><line x1="94" y1="74" x2="195" y2="74" stroke="#0EA5E9" stroke-width="5.5" stroke-linecap="round"/><circle cx="94" cy="74" r="5.5" fill="#141836"/><circle cx="195" cy="74" r="6" fill="#FFF" stroke="#EC4899" stroke-width="2.4"/>'],
  ['prop', '2. Dot-Matrix Tracker (5×2 / 10×10)', 'Replaces messy freehand pie charts with exact countable dots (80% Cyan routine / 20% Magenta complex).', '<g stroke="#141836" stroke-width="1.8"><circle cx="48" cy="34" r="12" fill="#0EA5E9" fill-opacity="0.72"/><circle cx="88" cy="34" r="12" fill="#0EA5E9" fill-opacity="0.72"/><circle cx="128" cy="34" r="12" fill="#0EA5E9" fill-opacity="0.72"/><circle cx="168" cy="34" r="12" fill="#0EA5E9" fill-opacity="0.72"/><circle cx="208" cy="34" r="12" fill="#0EA5E9" fill-opacity="0.72"/><circle cx="48" cy="72" r="12" fill="#0EA5E9" fill-opacity="0.72"/><circle cx="88" cy="72" r="12" fill="#0EA5E9" fill-opacity="0.72"/><circle cx="128" cy="72" r="12" fill="#0EA5E9" fill-opacity="0.72"/><circle cx="168" cy="72" r="12" fill="#EC4899" fill-opacity="0.62"/><circle cx="208" cy="72" r="12" fill="#EC4899" fill-opacity="0.62"/></g>'],
  ['comp', '3. Margin Sparklines', 'Tiny 3-dot-wide trend curves tucked directly beside bulleted KPIs (Latency 42s → 3s or B2 Vocab Streak).', '<polyline points="18,30 44,36 70,48 94,54" fill="none" stroke="#10B981" stroke-width="2.6"/><circle cx="94" cy="54" r="3.5" fill="#10B981"/><text x="108" y="46" font-family="Patrick Hand, cursive" font-size="14.5">Latency 42s → 3.1s</text><polyline points="18,86 44,78 70,66 94,82" fill="none" stroke="#EC4899" stroke-width="2.6"/><text x="108" y="84" font-family="Patrick Hand, cursive" font-size="14.5">Q4 Audit Spike</text>'],
  ['comp', '4. Slopegraphs', 'Two parallel vertical axes (Q1 vs. Q4 or A2 vs. B2) connected by straight lines—Mint up, Magenta down.', '<line x1="64" y1="16" x2="64" y2="96" stroke="#141836" stroke-width="1.8"/><line x1="196" y1="16" x2="196" y2="96" stroke="#141836" stroke-width="1.8"/><line x1="64" y1="80" x2="196" y2="28" stroke="#10B981" stroke-width="2.8"/><line x1="64" y1="30" x2="196" y2="84" stroke="#EC4899" stroke-width="2.8"/>'],
  ['multi', '5. Small Multiples', 'A 2×3 grid of identical 6×4 dot mini-axes sharing one Y-scale so EU country outliers pop out.', '<g stroke="#141836" stroke-width="1.4" fill="none"><polyline points="20,18 20,48 78,48"/><polyline points="100,18 100,48 158,48"/><polyline points="180,18 180,48 238,48"/><polyline points="20,64 20,94 78,94"/><polyline points="100,64 100,94 158,94"/><polyline points="180,64 180,94 238,94"/></g><polyline points="24,42 50,32 74,24" fill="none" stroke="#0EA5E9" stroke-width="2"/><polyline points="184,44 206,22 234,20" fill="none" stroke="#EC4899" stroke-width="2.4"/>'],
  ['flow', '6. Hand-Drawn Sankey Flow Ribbons', 'Splits a 10-dot vertical intake bar into proportional colored routing ribbons (80% Fast / 20% Reasoning).', '<rect x="18" y="14" width="14" height="82" rx="2" fill="#141836"/><path d="M 32 14 C 96 14, 114 14, 180 14 V 66 C 114 66, 96 76, 32 76 Z" fill="#0EA5E9" fill-opacity="0.34" stroke="#0EA5E9"/><path d="M 32 76 C 96 76, 114 78, 180 78 V 96 C 114 96, 96 96, 32 96 Z" fill="#EC4899" fill-opacity="0.34" stroke="#BE185D"/>'],
  ['multi', '7. 2×2 Quadrant Matrix', 'Crosshair plotting Complexity vs. Audit Risk with leader lines and hatched top-right danger zone.', '<rect x="130" y="12" width="90" height="44" fill="#EC4899" fill-opacity="0.14" stroke="#EC4899" stroke-dasharray="4 3"/><line x1="40" y1="56" x2="220" y2="56" stroke="#141836" stroke-width="2"/><line x1="130" y1="12" x2="130" y2="100" stroke="#141836" stroke-width="2"/><circle cx="80" cy="80" r="5.5" fill="#0EA5E9"/><circle cx="182" cy="34" r="6" fill="#EC4899"/>'],
  ['multi', '8. Radial / Spider Chart', 'Concentric dashed template circles + 5 spokes comparing Speed, Cost, Accuracy, Governance, Autonomy.', '<circle cx="130" cy="56" r="40" fill="none" stroke="#CBD5E1" stroke-dasharray="4 3"/><circle cx="130" cy="56" r="22" fill="none" stroke="#CBD5E1" stroke-dasharray="4 3"/><polygon points="130,22 164,46 150,86 110,86 98,46" fill="#0EA5E9" fill-opacity="0.32" stroke="#141836" stroke-width="2"/>'],
  ['flow', '9. Exploded Isometric Stack', 'Three 2-over-1-up diamonds spaced vertically to show Cognitive, HITL Firewall, and MCP planes.', '<polygon points="130,64 176,80 130,96 84,80" fill="#10B981" fill-opacity="0.3" stroke="#141836" stroke-width="1.8"/><polygon points="130,38 176,54 130,70 84,54" fill="#EC4899" fill-opacity="0.24" stroke="#EC4899" stroke-dasharray="4 3"/><polygon points="130,12 176,28 130,44 84,28" fill="#0EA5E9" fill-opacity="0.3" stroke="#141836" stroke-width="1.8"/>'],
  ['comp', '10. Bullet Graph', 'Replaces clunky gauges with a shaded performance band, solid Actual bar, and Magenta Target tick.', '<rect x="18" y="34" width="224" height="32" rx="4" fill="#E2E8F0"/><rect x="18" y="34" width="140" height="32" rx="4" fill="#CBD5E1"/><rect x="18" y="44" width="186" height="12" rx="3" fill="#141836"/><line x1="194" y1="26" x2="194" y2="74" stroke="#EC4899" stroke-width="3.2"/>']
];

export const PART3_RENDERERS = {
  // -------------------------------------------------------------------------
  // CHAPTER 7: CONTAINERS, STENCILS, PERFECT BORDER RADII & ARROW GRAMMAR
  // -------------------------------------------------------------------------
  ch7: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill magenta">${part.title}</span><span class="pill">Chapter 07 • ${ch.time}</span></div>
      <h1 class="script"><span class="hl-magenta">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Encode system states instantly using 4 container archetypes and a disciplined <strong>Arrow Grammar</strong>.</li>
        <li>Master brass &amp; plastic stencils without ink bleed using the <strong>5 Anti-Smudge Stencil Rules</strong>.</li>
        <li>Practice symmetrical ${gt('stop-short')} rounded corners and ${gt('chamfer')} cards directly in the live sketchpad.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>7.1 Container Archetypes &amp; Arrow Grammar</h3>
      <p>
        A container border is never just an outline—it communicates operational status before your reader reads a single noun. Reserve solid <strong>Cyber Cards</strong> (Cool Grey right/bottom offset shadow) for verified facts and active components, <strong>Taped Slips</strong> for human sign-offs or verbatim statutory quotes, <strong>Magenta Dashed Zones</strong> for high-compute reasoning or compliance risk boundaries, and tilted double-bordered <strong>Rubber Stamps</strong> (<code>APPROVED ✓</code> / <code>GEPRÜFT ✓</code>) for immutable checkpoints.
      </p>
      <p>
        Pair every container with strict <strong>Arrow Grammar</strong>: <strong>Solid 05 arrows</strong> mark primary synchronous execution; <strong>Dashed 03 arrows</strong> mark asynchronous API/MCP tool lookups; <strong>45° diagonal cross-hatching</strong> across a box marks a bypassed component; and tiny <strong>inline pill badges</strong> seated right on an arrow carry latency or conditions (<code>0.2s</code>, <code>B2B</code>, <code>+Dativ</code>).
      </p>
    </div>

    <div class="grid-4">
      <div class="card"><div class="svg-box"><svg viewBox="0 0 180 80"><path d="M 24 64 H 158 V 18" fill="none" stroke="#94A3B8" stroke-width="7" opacity="0.65"/><rect x="16" y="10" width="136" height="50" rx="6" fill="#FFF" stroke="#141836" stroke-width="2"/><text x="84" y="40" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" font-weight="700">Cyber Card</text></svg></div><div class="card-p">Hard Cool-Grey offset shadow.</div></div>
      <div class="card"><div class="svg-box"><svg viewBox="0 0 180 80"><rect x="22" y="14" width="136" height="50" rx="3" fill="#FFFDF5" stroke="#141836" stroke-width="2"/><polygon points="10,20 34,4 42,12 18,28" fill="#F59E0B" opacity="0.5" stroke="#141836"/><polygon points="138,4 162,20 154,28 130,12" fill="#F59E0B" opacity="0.5" stroke="#141836"/><text x="90" y="44" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" font-weight="700">Taped Slip</text></svg></div><div class="card-p">HITL quotes &amp; German Merksätze.</div></div>
      <div class="card"><div class="svg-box"><svg viewBox="0 0 180 80"><rect x="14" y="18" width="152" height="48" rx="8" fill="rgba(236,72,153,0.08)" stroke="#EC4899" stroke-width="2" stroke-dasharray="6 4"/><rect x="24" y="8" width="84" height="16" rx="8" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.3"/><text x="66" y="19" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#BE185D">HIGH COMPUTE</text><text x="90" y="48" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" font-weight="700">Dashed Zone</text></svg></div><div class="card-p">Audit risk or heavy reasoning.</div></div>
      <div class="card"><div class="svg-box"><svg viewBox="0 0 180 80"><g transform="rotate(-7 90 40)"><rect x="26" y="20" width="128" height="38" rx="5" fill="#ECFDF5" stroke="#047857" stroke-width="3"/><rect x="31" y="25" width="118" height="28" rx="3" fill="none" stroke="#047857" stroke-width="1.2"/><text x="90" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#047857">APPROVED ✓</text></g></svg></div><div class="card-p">Tilted double-border stamp.</div></div>
    </div>

    <div class="prose-wrap">
      <h3>7.2 Stencil Craft &amp; Perfect Freehand Radii (${gt('stop-short')})</h3>
      <p>
        Industrial designers rely on pocket stencils (<em>Midori Brass Clip Stencil</em> for banners/checkboxes and a <em>Helix Circle Template</em> for Dot-Matrix &amp; Radial charts). Keep every edge crisp with five habits: (1) <strong>Lift straight up vertically</strong>—never slide sideways; (2) <strong>Hold the fineliner at 90° vertical</strong>; (3) Stick to <strong>03/05 pigment ink</strong> (skip pooling gel); (4) Add two tiny <strong>masking-tape shims</strong> underneath flat plastic stencils so they hover 0.2mm off wet ink; and (5) <strong>Blot the underside every 3 shapes</strong>.
      </p>
    </div>

    <!-- Mistake vs Pro Fix -->
    <div class="compare-grid">
      <div class="compare-card mistake">
        <div class="compare-head"><span>✕ Common Mistake</span><span>Continuous One-Loop Rounded Box</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 360 116">
            <path d="M 46 28 C 90 22, 260 32, 312 24 C 324 38, 308 82, 316 94 C 260 100, 96 86, 42 96 C 32 76, 52 44, 46 28 Z" fill="#FFF" stroke="#EC4899" stroke-width="2.2"/>
            <text x="180" y="66" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" fill="#BE185D">Momentum wobbles turn corners lumpy &amp; uneven</text>
          </svg>
        </div>
      </div>
      <div class="compare-card fix">
        <div class="compare-head"><span>✓ Pro Fix</span><span>Stop-Short &amp; Bridge (4 Walls → 4 Arcs)</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 360 116">
            <line x1="60" y1="22" x2="300" y2="22" stroke="#141836" stroke-width="2.4"/><line x1="60" y1="94" x2="300" y2="94" stroke="#141836" stroke-width="2.4"/>
            <line x1="40" y1="42" x2="40" y2="74" stroke="#141836" stroke-width="2.4"/><line x1="320" y1="42" x2="320" y2="74" stroke="#141836" stroke-width="2.4"/>
            <path d="M 40 42 Q 40 22 60 22 M 300 22 Q 320 22 320 42 M 320 74 Q 320 94 300 94 M 60 94 Q 40 94 40 74" fill="none" stroke="#10B981" stroke-width="3.2"/>
            <text x="180" y="63" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" font-weight="700" fill="#047857">Stop 0.5 dots short → Bridge 4 clean arcs</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- INTERACTIVE LAB: BORDER-RADIUS & CYBER FRAME LAB -->
    <div class="lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // Border-Radius &amp; Cyber Frame Explorer</span>
        <span class="pill violet">5 Frame Styles + Semantic Shadow</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            <button class="seg-btn ch7-fr" data-f="sharp">Sharp 90°</button>
            <button class="seg-btn ch7-fr" data-f="chamfer">Chamfer 45°</button>
            <button class="seg-btn ch7-fr active" data-f="tight">Tight 2.5mm</button>
            <button class="seg-btn ch7-fr" data-f="pill">Soft Pill</button>
            <button class="seg-btn ch7-fr" data-f="double">Double-Sketch</button>
          </div>
          <div class="segmented" role="group">
            <button class="seg-btn ch7-sh active" data-s="#94A3B8">Grey</button>
            <button class="seg-btn ch7-sh" data-s="#0EA5E9">Cyan</button>
            <button class="seg-btn ch7-sh" data-s="#EC4899">Magenta</button>
            <button class="seg-btn ch7-sh" data-s="#10B981">Mint</button>
          </div>
        </div>
        <div class="svg-box"><svg id="ch7-svg" viewBox="0 0 760 185"></svg></div>
        <div id="ch7-cap" class="lab-cap"></div>
      </div>
    </div>

    <!-- HANDS-ON SKETCHPAD: CORNERS & CHAMFERS -->
    ${renderSketchpadHTML('ch7', {
      title: 'Stop-Short & Bridge + Chamfered 45° Practice Canvas',
      defaultTemplate: 'corners',
      defaultTool: 'nib05',
      subtitle: 'Trace the 4 straight walls first, then bridge the pink arcs. Next, trace the green 45° Chamfered HUD frame and add a Cool Grey Marker Glaze shadow along its right and bottom edges.'
    })}

    ${DEEP_CONTENT_2.ch7}
    ${MASTERCLASS_A.ch7}

    ${renderQuizHTML('ch7', CH7_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (6 Minutes)</div>
      <p>
        On your physical dot grid, sketch a 3-node AI or German grammar flow using 1 <strong>Stop-Short &amp; Bridge</strong> card, 1 <strong>Chamfered 45°</strong> card, and 1 <strong>Magenta Dashed Zone</strong>. Connect them with 1 solid arrow and 1 dashed MCP arrow, cross-hatch a bypassed node, and finish with a tilted <code>APPROVED ✓</code> stamp.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 8: ANALOG DATA VISUALIZATION
  // -------------------------------------------------------------------------
  ch8: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill magenta">${part.title}</span><span class="pill">Chapter 08 • ${ch.time}</span><span class="pill amber">AI/Tech • Tax • Deutsch</span></div>
      <h1 class="script"><span class="hl-mint">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Explain why plotting real datasets by hand on 5mm dots reveals analytical gaps that auto-generated spreadsheets obscure.</li>
        <li>Match analytical jobs (Comparison, Proportion, Flow, Multi-Variable) to the right chart across <strong>10 Analog Chart Archetypes</strong>.</li>
        <li>Enter your own data into the <strong>Analog Chart Plotter &amp; Dot-Grid Scaler</strong> to generate exact physical dot-counting instructions.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>8.1 Why Plot Real Data by Hand?</h3>
      <p>
        Inspired by Giorgia Lupi &amp; Stefanie Posavec's <em>Dear Data</em> and editorial dot-grid journalism, plotting numbers by hand forces genuine analytical interrogation. When Excel spits out a 3D pie chart in 0.1 seconds, nobody questions the denominator. When you physically count 16 dots across a page for <code>Single LLM ($0.88)</code> versus 1 dot for <code>Multi-Agent ($0.04)</code>, the 97% cost gap imprints permanently into both your memory and your executive pitch.
      </p>
    </div>

    <div class="mental-model">
      <span class="callout-label" style="color:var(--cyan);">Scaling Rule // Make 1 Dot Equal a Clean Round Number</span>
      <p>
        Never stretch a chart awkwardly to fill 13.7 dots. Lock a clean scale first—e.g., <strong>20 dots = 100% (1 dot = 5%)</strong>, or <strong>1 dot = 2.5 seconds</strong>—so every data point snaps crisply onto or halfway between visible 5mm dots with zero calculator friction.
      </p>
    </div>

    <!-- Mistake vs Pro Fix: Freehand Pie vs Dot-Matrix -->
    <div class="compare-grid">
      <div class="compare-card mistake">
        <div class="compare-head"><span>✕ Common Mistake</span><span>Freehand Pie Chart (Distorted Angles)</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 340 105">
            <circle cx="96" cy="52" r="38" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="2"/>
            <path d="M 96 52 L 96 14 A 38 38 0 0 1 133 44 Z" fill="#EC4899" fill-opacity="0.5" stroke="#141836" stroke-width="1.8"/>
            <text x="156" y="46" font-family="Patrick Hand, cursive" font-size="15" fill="#BE185D">Is that slice 18% or 27%?</text>
            <text x="156" y="68" font-family="Patrick Hand, cursive" font-size="14" fill="#525B7A">Hard to draw &amp; harder to read.</text>
          </svg>
        </div>
      </div>
      <div class="compare-card fix">
        <div class="compare-head"><span>✓ Pro Fix</span><span>10-Circle Dot-Matrix (1 Dot = 10%)</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 340 105">
            <g stroke="#141836" stroke-width="1.6">
              ${[0,1,2,3,4,5,6,7,8,9].map(i => `<circle cx="${38 + (i%5)*34}" cy="${34 + Math.floor(i/5)*36}" r="12" fill="${i<8?'#0EA5E9':'#EC4899'}" fill-opacity="0.65"/>`).join('')}
            </g>
            <text x="206" y="46" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#0EA5E9">80% FAST PATH</text>
            <text x="206" y="70" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#BE185D">20% REASONING</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- NEW INTERACTIVE LAB: ANALOG DATA PLOTTER & DOT-GRID SCALER -->
    ${renderChartPlotterHTML()}

    <!-- Filterable 10-Chart Gallery -->
    <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:10px;">
      <span class="mono" style="font-size:12px; font-weight:700; text-transform:uppercase;">10 Core Analog Charts (Filter by Analytical Job)</span>
      <div class="segmented no-print" role="group">
        <button class="seg-btn ch8-flt active" data-f="all">All (10)</button>
        <button class="seg-btn ch8-flt" data-f="comp">Comparison</button>
        <button class="seg-btn ch8-flt" data-f="prop">Proportion</button>
        <button class="seg-btn ch8-flt" data-f="flow">Flow</button>
        <button class="seg-btn ch8-flt" data-f="multi">Multi-Variable</button>
      </div>
    </div>
    <div id="ch8-grid" class="grid-2"></div>

    ${DEEP_CONTENT_2.ch8}
    ${MASTERCLASS_A.ch8}

    ${renderQuizHTML('ch8', CH8_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (8 Minutes)</div>
      <p>
        Enter 4 real numbers from your week (e.g., German study minutes per skill or task durations before/after AI automation) into the <strong>Analog Chart Plotter</strong> above, then follow its exact dot-counting recipe to hand-plot a crisp ${gt('dumbbell-chart')} on physical dot-grid paper.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 9 (NEW): TIMELINES, ROADMAPS, TABLES & PROCESS MATRICES
  // -------------------------------------------------------------------------
  ch9: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill magenta">${part.title}</span><span class="pill magenta">NEW CHAPTER 09 • ${ch.time}</span><span class="pill amber">Tax • Deutsch • AI/Tech</span></div>
      <h1 class="script"><span class="hl-amber">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Draw airy, Tufte-inspired <strong>Cage-Free Tables</strong> and <strong>Weighted Decision Matrices</strong> without cluttering pages with vertical grid lines.</li>
        <li>Plot <strong>Dot-Grid Gantt Roadmaps</strong> and statutory tax filing calendars using crisp horizontal highlighter bars and diamond milestones.</li>
        <li>Map the entire <strong>German 6-Tense Verb System</strong> onto a single spatial timeline so tense sequence clicks effortlessly.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>9.1 Everyday Workhorse Visuals Beyond Charts</h3>
      <p>
        In real advisory work, product launches, and language study, 70% of what you need to organize isn't a scatter plot—it's <strong>time sequences, parallel schedules, and multi-criteria comparisons</strong>. A 5mm dot grid is secretly the world's best timeline and table engine when you follow three rules:
      </p>
      <ul>
        <li><strong>Rule 1 — Kill Vertical Cell Cages:</strong> Never draw dark vertical boxes around every column of a table. Instead, align text strictly to Corner Ticks, right-align Tabular Numbers, and draw only faint hairline horizontal separators (<code>01</code> nib) or alternating 1-pass Cool Grey stripes.</li>
        <li><strong>Rule 2 — Bar = Duration, Diamond = Milestone:</strong> On any roadmap or tax compliance calendar, draw a 1-dot-tall Cyan/Mint highlighter bar for work duration, and stamp a crisp hollow or Magenta <strong>Diamond (◆)</strong> for hard statutory deadlines (e.g., 10th of the month <em>UStVA</em> filing).</li>
        <li><strong>Rule 3 — Spatialize Time Left-to-Right:</strong> Grammar tenses and project phases obey the exact same mental model: far left = earliest past, center vertical line = <code>NOW / JETZT</code>, right = future projections.</li>
      </ul>
    </div>

    <!-- Mistake vs Pro Fix: Prison-Cage Table vs Airy Editorial Table -->
    <div class="compare-grid">
      <div class="compare-card mistake">
        <div class="compare-head"><span>✕ Common Mistake</span><span>Heavy "Prison-Cage" Grid Table</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 340 105">
            <rect x="20" y="14" width="300" height="76" fill="#FFF" stroke="#141836" stroke-width="2.6"/>
            <path d="M 20 40 H 320 M 20 65 H 320 M 130 14 V 90 M 225 14 V 90" stroke="#141836" stroke-width="2.4"/>
            <text x="30" y="31" font-family="IBM Plex Mono, monospace" font-size="10">MODEL</text><text x="140" y="31" font-family="IBM Plex Mono, monospace" font-size="10">COST</text><text x="235" y="31" font-family="IBM Plex Mono, monospace" font-size="10">SPEED</text>
            <text x="30" y="56" font-family="Patrick Hand, cursive" font-size="14">Flash</text><text x="140" y="56" font-family="Patrick Hand, cursive" font-size="14">$0.001</text><text x="235" y="56" font-family="Patrick Hand, cursive" font-size="14">0.2s</text>
            <text x="30" y="81" font-family="Patrick Hand, cursive" font-size="14">Reason</text><text x="140" y="81" font-family="Patrick Hand, cursive" font-size="14">$0.88</text><text x="235" y="81" font-family="Patrick Hand, cursive" font-size="14">42s</text>
          </svg>
        </div>
      </div>
      <div class="compare-card fix">
        <div class="compare-head"><span>✓ Pro Fix</span><span>Airy Cage-Free Editorial Table</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 340 105">
            <rect x="20" y="14" width="300" height="24" fill="#EEF2FC"/>
            <line x1="20" y1="38" x2="320" y2="38" stroke="#141836" stroke-width="2"/>
            <line x1="20" y1="64" x2="320" y2="64" stroke="#CBD5E1" stroke-width="1.2"/>
            <text x="28" y="30" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">MODEL</text><text x="206" y="30" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">COST</text><text x="310" y="30" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">SPEED</text>
            <text x="28" y="55" font-family="Patrick Hand, cursive" font-size="15" font-weight="700">Flash Triage</text><text x="206" y="55" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#047857">$Ø.ØØ1</text><text x="310" y="55" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="11.5">Ø.2s</text>
            <text x="28" y="81" font-family="Patrick Hand, cursive" font-size="15">Deep Reasoning</text><text x="206" y="81" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="11.5" fill="#BE185D">$Ø.88Ø</text><text x="310" y="81" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="11.5">42.Øs</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- NEW INTERACTIVE LAB: TIMELINES, GANTT & DECISION MATRIX BLUEPRINT LAB -->
    <div class="lab" id="ch9-mat-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // Timelines, Gantt &amp; Decision Matrix Blueprints</span>
        <span class="pill violet">3 Workhorse Domain Templates</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            <button class="seg-btn ch9-tab active" data-t="deutsch">1. German 6-Tense Timeline</button>
            <button class="seg-btn ch9-tab" data-t="tax">2. Q1 EU VAT Gantt &amp; Deadlines</button>
            <button class="seg-btn ch9-tab" data-t="matrix">3. Weighted AI Stack Matrix</button>
          </div>
        </div>
        <div class="svg-box"><svg id="ch9-svg" viewBox="0 0 760 250"></svg></div>
        <div id="ch9-cap" class="lab-cap"></div>
      </div>
    </div>

    ${DEEP_CONTENT_2.ch9}
    ${MASTERCLASS_A.ch9}

    ${renderQuizHTML('ch9', CH9_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (8 Minutes)</div>
      <p>
        Sketch either (A) your next 4-week project/filing calendar as a <strong>Dot-Grid Gantt</strong> with Magenta ◆ deadline diamonds, OR (B) the <strong>German 6-Tense Timeline</strong> using one real sentence conjugated across all 6 slots (e.g., <em>prüfen</em> or <em>einreichen</em>).
      </p>
    </div>
  `
};

export const PART3_INITS = {
  ch7: (onStateChange) => {
    let frame = 'tight', sh = '#94A3B8';
    function render() {
      const map = {
        sharp:   { svg: `<rect x="216" y="34" width="328" height="108" fill="${sh}" opacity="0.45" transform="translate(8,8)"/><rect x="216" y="34" width="328" height="108" fill="#FFF" stroke="#141836" stroke-width="2.4"/><text x="380" y="93" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700">SHARP 90° // STATUTORY LEDGER</text>`, cap: '<strong>Sharp 90° Frame:</strong> Formal, rigid, and authoritative—ideal for ledgers, tax tables, and legal specifications.' },
        chamfer: { svg: `<polygon points="232,34 528,34 544,50 544,126 528,142 232,142 216,126 216,50" fill="${sh}" opacity="0.45" transform="translate(8,8)"/><polygon points="232,34 528,34 544,50 544,126 528,142 232,142 216,126 216,50" fill="#FFF" stroke="#141836" stroke-width="2.4"/><text x="380" y="93" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700">CHAMFERED 45° // CYBER HUD</text>`, cap: '<strong>Chamfered 45° Frame:</strong> Stop 1 full dot short of each corner and connect diagonally. Unmistakable Light Cyberpunk aesthetic with zero freehand curves.' },
        tight:   { svg: `<rect x="216" y="34" width="328" height="108" rx="10" fill="${sh}" opacity="0.45" transform="translate(8,8)"/><rect x="216" y="34" width="328" height="108" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.4"/><text x="380" y="93" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700">TIGHT 2.5mm // CLEAN UI CARD</text>`, cap: '<strong>Tight 2.5mm Radius:</strong> The everyday workhorse. Stop 0.5 dots short of each corner and bridge cleanly.' },
        pill:    { svg: `<rect x="200" y="52" width="360" height="72" rx="36" fill="${sh}" opacity="0.42" transform="translate(7,7)"/><rect x="200" y="52" width="360" height="72" rx="36" fill="#FFF" stroke="#141836" stroke-width="2.4"/><text x="380" y="93" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700">SOFT PILL // STATE MACHINE NODE</text>`, cap: '<strong>Soft Pill Frame:</strong> Ideal for status tags, cost badges, and State Machine lifecycle nodes.' },
        double:  { svg: `<rect x="216" y="34" width="328" height="108" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.2"/><rect x="223" y="41" width="328" height="108" rx="8" fill="none" stroke="${sh}" stroke-width="2" stroke-dasharray="6 4"/><text x="380" y="93" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700">DOUBLE-SKETCH // OFFSET FRAME</text>`, cap: '<strong>Double-Sketch Frame:</strong> Adds hand-drawn editorial polish—and doubles as a clean fix whenever a first wall goes slightly crooked!' }
      };
      document.getElementById('ch7-svg').innerHTML = map[frame].svg;
      document.getElementById('ch7-cap').innerHTML = map[frame].cap;
    }
    document.querySelectorAll('.ch7-fr').forEach(b => b.addEventListener('click', () => {
      frame = b.dataset.f;
      document.querySelectorAll('.ch7-fr').forEach(x => x.classList.toggle('active', x === b));
      render();
    }));
    document.querySelectorAll('.ch7-sh').forEach(b => b.addEventListener('click', () => {
      sh = b.dataset.s;
      document.querySelectorAll('.ch7-sh').forEach(x => x.classList.toggle('active', x === b));
      render();
    }));
    render();
    initSketchpad('ch7', { defaultTemplate: 'corners', defaultTool: 'nib05' });
    initQuiz('ch7', CH7_QUIZ, onStateChange);
  },

  ch8: (onStateChange) => {
    initChartPlotter();
    function filter(f) {
      document.querySelectorAll('.ch8-flt').forEach(b => b.classList.toggle('active', b.dataset.f === f));
      const list = f === 'all' ? CH8_CHARTS : CH8_CHARTS.filter(c => c[0] === f);
      document.getElementById('ch8-grid').innerHTML = list.map(([, title, desc, svg]) => `
        <div class="card"><div class="svg-box"><svg viewBox="0 0 260 110">${svg}</svg></div><div class="card-h">${title}</div><div class="card-p">${desc}</div></div>`).join('');
    }
    document.querySelectorAll('.ch8-flt').forEach(b => b.addEventListener('click', () => filter(b.dataset.f)));
    filter('all');
    initQuiz('ch8', CH8_QUIZ, onStateChange);
  },

  ch9: (onStateChange) => {
    const VIEWS = {
      deutsch: {
        svg: `
          <!-- Main Horizontal Time Axis -->
          <line x1="28" y1="126" x2="732" y2="126" stroke="#141836" stroke-width="3"/>
          <polygon points="734,126 722,119 722,133" fill="#141836"/>
          <!-- NOW Vertical Anchor -->
          <line x1="454" y1="24" x2="454" y2="226" stroke="#0EA5E9" stroke-width="2.4" stroke-dasharray="5 4"/>
          <rect x="414" y="10" width="80" height="22" rx="11" fill="#0EA5E9"/><text x="454" y="25" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">JETZT</text>
          <!-- 1. Plusquamperfekt -->
          <circle cx="96" cy="126" r="8" fill="#7C3AED" stroke="#141836" stroke-width="2"/>
          <rect x="26" y="48" width="144" height="58" rx="6" fill="#EDE9FE" stroke="#141836" stroke-width="1.8"/>
          <text x="98" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#7C3AED">PLUSQUAMPERFEKT</text>
          <text x="98" y="90" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">ich hatte geprüft</text>
          <!-- 2. Präteritum & Perfekt -->
          <circle cx="272" cy="126" r="8" fill="#EC4899" stroke="#141836" stroke-width="2"/>
          <rect x="192" y="148" width="166" height="74" rx="6" fill="#FCE7F3" stroke="#141836" stroke-width="1.8"/>
          <text x="275" y="168" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">PRÄTERITUM / PERFEKT</text>
          <text x="275" y="190" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">ich prüfte (Schrift)</text>
          <text x="275" y="210" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">ich habe geprüft (Rede)</text>
          <!-- 3. Präsens -->
          <circle cx="454" cy="126" r="9" fill="#0EA5E9" stroke="#141836" stroke-width="2.2"/>
          <rect x="386" y="48" width="136" height="58" rx="6" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
          <text x="454" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0EA5E9">PRÄSENS</text>
          <text x="454" y="90" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" font-weight="700">ich prüfe</text>
          <!-- 4. Futur I -->
          <circle cx="586" cy="126" r="8" fill="#10B981" stroke="#141836" stroke-width="2"/>
          <rect x="522" y="148" width="130" height="58" rx="6" fill="#D1FAE5" stroke="#141836" stroke-width="1.8"/>
          <text x="587" y="168" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">FUTUR I</text>
          <text x="587" y="190" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">ich werde prüfen</text>
          <!-- 5. Futur II -->
          <circle cx="696" cy="126" r="7" fill="#F59E0B" stroke="#141836" stroke-width="2"/>
          <rect x="614" y="48" width="132" height="58" rx="6" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/>
          <text x="680" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">FUTUR II</text>
          <text x="680" y="90" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">werde geprüft haben</text>`,
        cap: '<strong>German 6-Tense Spatial Timeline:</strong> Stagger cards alternating above & below the timeline so labels never collide. Notice how <em>Plusquamperfekt</em> anchors the far left and <em>Präteritum vs. Perfekt</em> sit together at the same past coordinate.'
      },
      tax: {
        svg: `
          <text x="24" y="26" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700">Q1 DEUTSCHE UStVA &amp; EU OSS FILING GANTT (1 DOT = 3 DAYS)</text>
          ${['JAN', 'FEB', 'MAR', 'APR'].map((m, i) => `<line x1="${196 + i * 136}" y1="40" x2="${196 + i * 136}" y2="218" stroke="#CBD5E1" stroke-dasharray="4 3"/><text x="${264 + i * 136}" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#525B7A">${m}</text>`).join('')}
          <!-- Row 1 -->
          <text x="184" y="90" text-anchor="end" font-family="Patrick Hand, cursive" font-size="15.5" font-weight="700">LEDGER EXTRACT</text>
          <rect x="200" y="74" width="128" height="22" rx="4" fill="#0EA5E9" fill-opacity="0.34" stroke="#0EA5E9" stroke-width="1.8"/>
          <rect x="336" y="74" width="128" height="22" rx="4" fill="#0EA5E9" fill-opacity="0.34" stroke="#0EA5E9" stroke-width="1.8"/>
          <!-- Row 2 -->
          <text x="184" y="136" text-anchor="end" font-family="Patrick Hand, cursive" font-size="15.5" font-weight="700">PARTNER HITL QA</text>
          <rect x="304" y="120" width="60" height="22" rx="4" fill="#7C3AED" fill-opacity="0.28" stroke="#7C3AED" stroke-width="1.8"/>
          <rect x="440" y="120" width="60" height="22" rx="4" fill="#7C3AED" fill-opacity="0.28" stroke="#7C3AED" stroke-width="1.8"/>
          <!-- Row 3 -->
          <text x="184" y="182" text-anchor="end" font-family="Patrick Hand, cursive" font-size="15.5" font-weight="700">STATUTORY DUE ◆</text>
          <polygon points="376,160 390,174 376,188 362,174" fill="#EC4899" stroke="#141836" stroke-width="2"/><text x="376" y="206" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">FEB 10 UStVA</text>
          <polygon points="512,160 526,174 512,188 498,174" fill="#EC4899" stroke="#141836" stroke-width="2"/><text x="512" y="206" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">MAR 10 UStVA</text>
          <polygon points="692,160 706,174 692,188 678,174" fill="#10B981" stroke="#141836" stroke-width="2"/><text x="692" y="206" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">APR 30 EU OSS</text>`,
        cap: '<strong>Dot-Grid Tax Gantt:</strong> Horizontal highlighter stripes show prep windows; Magenta ◆ diamonds anchor hard statutory filing deadlines so partner HITL reviews never run late.'
      },
      matrix: {
        svg: `
          <text x="28" y="26" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700">WEIGHTED DECISION MATRIX (CAGE-FREE EDITORIAL TABLE • ●●● = 3 PTS)</text>
          <rect x="26" y="38" width="708" height="28" fill="#EEF2FC"/>
          <line x1="26" y1="66" x2="734" y2="66" stroke="#141836" stroke-width="2"/>
          <g font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">
            <text x="38" y="56">CRITERION (WEIGHT)</text><text x="330" y="56">SINGLE FRONTIER</text><text x="492" y="56">MULTI-AGENT ★</text><text x="646" y="56">RULES ONLY</text>
          </g>
          ${[
            ['Cost Efficiency (×3)', '●○○ (3)', '●●● (9)', '●●● (9)', 98],
            ['Statutory Nuance (×3)', '●●● (9)', '●●● (9)', '●○○ (3)', 138],
            ['Write Safety / HITL (×2)', '●○○ (2)', '●●● (6)', '●●○ (4)', 178]
          ].map(([c, a, b, d, y]) => `
            <line x1="26" y1="${y+12}" x2="734" y2="${y+12}" stroke="#CBD5E1"/>
            <text x="38" y="${y}" font-family="Patrick Hand, cursive" font-size="16" font-weight="700">${c}</text>
            <text x="330" y="${y}" font-family="IBM Plex Mono, monospace" font-size="12" fill="#525B7A">${a}</text>
            <text x="492" y="${y}" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#047857">${b}</text>
            <text x="646" y="${y}" font-family="IBM Plex Mono, monospace" font-size="12" fill="#525B7A">${d}</text>
          `).join('')}
          <rect x="480" y="198" width="136" height="32" rx="6" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
          <text x="38" y="219" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700">WEIGHTED TOTAL</text>
          <text x="330" y="219" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700" fill="#525B7A">14 / 24</text>
          <text x="548" y="219" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700" fill="#047857">24 / 24 ✓</text>
          <text x="646" y="219" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700" fill="#525B7A">16 / 24</text>`,
        cap: '<strong>Cage-Free Weighted Matrix:</strong> Filled vs. hollow Harvey balls (<code>●●● / ●○○</code>) scan 5× faster than raw numbers, and a single Mint pill highlights the winner without heavy vertical borders.'
      }
    };

    function setTab(t) {
      document.querySelectorAll('.ch9-tab').forEach(b => b.classList.toggle('active', b.dataset.t === t));
      document.getElementById('ch9-svg').innerHTML = VIEWS[t].svg;
      document.getElementById('ch9-cap').innerHTML = VIEWS[t].cap;
    }
    document.querySelectorAll('.ch9-tab').forEach(b => b.addEventListener('click', () => setTab(b.dataset.t)));
    setTab('deutsch');
    initQuiz('ch9', CH9_QUIZ, onStateChange);
  }
};
