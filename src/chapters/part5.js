/* =========================================================================
   PART V: MASTERY, PHYSICS, DIGITAL BRIDGE & DIAGNOSTICS (CHAPTERS 14–18)
   ========================================================================= */
import { gt } from '../data/glossary.js';
import { getState, toggleGradCheck } from '../state.js';
import { renderQuizHTML, initQuiz } from '../labs/quizEngine.js';
import { renderSketchpadHTML, initSketchpad } from '../labs/sketchpad.js';
import { DIAGRAM_PATTERNS } from '../data/diagramPatterns.js';
import { HERO_ISO_BRIDGE } from '../data/metaphors.js';
import { DEEP_CONTENT_3 } from '../data/deepContent3.js';
import { MASTERCLASS_B } from '../data/masterclassB.js';

const CH14_QUIZ = [
  {
    q: 'On a standard 27×38 A5 5mm dot-grid page with 2-dot outer margins (23×34 usable dots), what is the exact column math for Equal Thirds?',
    opts: [
      '8 | 8 | 8 dots (no gutters)',
      '7 | 7 | 7 dots with two 1-dot gutters (7 + 1 + 7 + 1 + 7 = 23)',
      '10 | 10 | 3 dots',
      '5 | 5 | 5 dots'
    ],
    ans: 1,
    why: '23 usable dots split mathematically cleanly into three 7-dot pillars separated by two 1-dot gutters—zero ruler needed!'
  },
  {
    q: 'If you place a heavyweight shaded isometric stack in the top-left of a spread, how do you prevent the page from feeling lopsided?',
    opts: [
      'Stack all remaining heavy ink directly underneath it on the left',
      'Counter-balance it diagonally with a medium-weight Cost Ledger or Mint Stamp in the bottom-right',
      'Fill every blank white margin with heavy cross-hatching',
      'Remove all headers'
    ],
    ans: 1,
    why: 'Diagonal counter-balance anchors perceptual visual weight across the spread while preserving 30% airy whitespace.'
  }
];

const CH15_QUIZ = [
  {
    q: 'What causes ugly fuzzy "Paper Pilling" when shading with water-based markers (Mildliners / Tombow ABT)?',
    opts: [
      'Waiting 10 seconds between coats',
      'Scrubbing the marker nib back and forth repeatedly over wet paper fibers before Coat 1 dries',
      'Using 160gsm paper',
      'Adding a white gel pen rim after drying'
    ],
    ans: 1,
    why: 'Wet water-based ink softens cellulose fibers; scrubbing shreds them. Always pull smooth one-way parallel strokes, pause 10 seconds, then glaze Coat 2.'
  },
  {
    q: 'How does Atmospheric Perspective separate an active foreground AI/Tax system from legacy background context on paper?',
    opts: [
      'Both use thick 05 ink and heavy drop shadows',
      'Foreground uses bold 05 ink, saturated washes & shadows; background uses hairline 01 dashed lines & zero drop shadows',
      'Background is drawn twice as large',
      'Foreground is left completely unshaded'
    ],
    ans: 1,
    why: 'High contrast + bold 05 silhouettes pull elements forward visually; low-contrast 01 dashed lines push legacy context gracefully into the background.'
  }
];

const CH16_QUIZ = [
  {
    q: 'In a multi-lane Swimlane Architecture diagram, which direction should chronological time strictly flow?',
    opts: [
      'In a clockwise spiral',
      'Strictly left-to-right across horizontal dashed lanes so every vertical crossing exposes a handoff boundary',
      'Randomly wherever whitespace exists',
      'Bottom-to-top only'
    ],
    ans: 1,
    why: 'Locking time strictly left-to-right makes every cross-lane arrow immediately expose an actor or governance handoff (e.g., Triage → Reasoning → Partner HITL).'
  },
  {
    q: 'In our color-coded Binary Decision Trees, which exit directions and colors should stay locked globally?',
    opts: [
      'Acid Mint YES exits right (→); Hot Magenta NO exits downward (↓)',
      'Random colors per diamond',
      'Both YES and NO exit upward',
      'Squares for questions, diamonds for outcomes'
    ],
    ans: 0,
    why: 'Consistent spatial/color exits (Mint YES →, Magenta NO ↓) make statutory tax trees and German Dativ/Akkusativ trees readable in milliseconds.'
  }
];

const CH17_QUIZ = [
  {
    q: 'What is the single best lighting setup for scanning a physical dot-grid spread with your phone so dot grids vanish cleanly and colors stay crisp?',
    opts: [
      'Direct overhead flash directly above the notebook',
      'Even diffused natural window light from the side (no phone shadow), shot flat at 90° using Document/Photo Scan mode',
      'Dim yellow lamp behind your head casting a hand shadow',
      'Tilted 45° angle with flash ON'
    ],
    ans: 1,
    why: 'Direct flash creates glare hotspots and dark phone shadows; soft side window light + Document scan auto-levels the paper cleanly to pure white while keeping Cyan/Magenta washes luminous.'
  },
  {
    q: 'When bridging a physical notebook into a Markdown wiki (like TaxWiki or Obsidian) or Anki for German, what small analog habit makes retrieval effortless?',
    opts: [
      'Never numbering pages',
      'Writing a consistent Row-1 Micro-Header (Date | Topic | Page #) and tagging the digital note with the exact Notebook + Page ID (e.g., NB02-P14)',
      'Retyping every word from scratch without attaching the scan',
      'Throwing away the paper notebook immediately'
    ],
    ans: 1,
    why: 'Linking a clean scanned PNG + a 3-line searchable Markdown summary tagged with `NB02-P14` gives you analog spatial thinking AND instant full-text digital search.'
  }
];

const CH18_QUIZ = [
  {
    q: 'A colleague shows you an isometric cube diagram that looks "melted" and tilted awkwardly to the right. What is the exact mechanical root cause?',
    opts: [
      'They used Cool Grey shadows',
      'They allowed the vertical wall edges to lean off 90° plumb dot columns instead of keeping verticals strictly straight up-and-down',
      'They left 30% whitespace',
      'They wrote text before drawing the box'
    ],
    ans: 1,
    why: 'Only the top and bottom diagonals step 2-over, 1-up. Vertical walls must stay locked strictly 90° to the vertical dot columns.'
  },
  {
    q: 'What cures "Blank-Page Freeze" when sitting down to take visual notes during a fast-moving meeting?',
    opts: [
      'Waiting until the meeting ends to start drawing',
      'Using Two-Pass Notes: Pass 1 monochrome capture with generous gaps, followed by a 2-minute Pass 2 shadow & color polish',
      'Buying 12 more markers',
      'Drawing every container border first with a steel ruler'
    ],
    ans: 1,
    why: 'Decoupling thinking (Pass 1) from visual styling (Pass 2) removes perfectionism completely.'
  }
];

const GRAD_ITEMS = [
  '2-dot outer margins + Row-1 Micro-Header Strip cleanly drawn (e.g., 2026.11.22 | TOPIC | PG)',
  'Disciplined semantic palette: 1 Indigo fineliner + 2 functional accents + Cool Grey shadow (30% open paper)',
  'At least one 3D isometric stack, Swimlane, or Decision Tree with dedicated 4-dot Arrow Corridors',
  'At least one hand-plotted analog chart (Dumbbell, Dot-Matrix, Slopegraph, or German Tense Timeline)',
  'Pass 2 Polish completed: 05 silhouettes, Ambient Occlusion creases, White Gel Pop & APPROVED ✓ stamp'
];

export const PART5_RENDERERS = {
  // -------------------------------------------------------------------------
  // CHAPTER 14: ADVANCED COMPOSITION, EYE-TRACKING & A5 DOT-GRID MATH
  // -------------------------------------------------------------------------
  ch14: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill amber">${part.title}</span><span class="pill">Chapter 14 • ${ch.time}</span></div>
      <h1 class="script"><span class="hl-amber">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Direct reader attention effortlessly using the <strong>Three Natural Eye-Paths</strong> (Z-Path, Hub-and-Spoke, Split-Screen).</li>
        <li>Balance heavyweight dark/saturated anchors against airy whitespace so spreads never feel lopsided.</li>
        <li>Subdivide a standard <strong>27×38 A5 dot-grid page</strong> without a ruler using exact dot counts and ${gt('corner-ticks')}.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>14.1 The Three Natural Eye-Paths</h3>
      <p>
        Even when every individual box, icon, and chart looks sharp, a page still feels scattered if the reader's eye doesn't know where to enter or exit. Pick one of three proven spatial paths before your pen touches paper:
      </p>
    </div>

    <div class="grid-3">
      <div class="card">
        <div class="svg-box"><svg viewBox="0 0 240 165"><rect x="12" y="10" width="216" height="145" rx="6" fill="#FFF" stroke="#141836" stroke-width="1.8"/><rect x="24" y="22" width="76" height="42" rx="5" fill="#E0F2FE" stroke="#141836" stroke-width="1.6"/><rect x="140" y="22" width="76" height="42" rx="5" fill="#EEF2FC" stroke="#141836" stroke-width="1.6"/><rect x="24" y="100" width="76" height="42" rx="5" fill="#FCE7F3" stroke="#141836" stroke-width="1.6"/><rect x="140" y="100" width="76" height="42" rx="5" fill="#D1FAE5" stroke="#141836" stroke-width="1.6"/><path d="M 62 43 L 178 43 L 62 121 L 178 121" fill="none" stroke="#EC4899" stroke-width="3" stroke-dasharray="6 4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="62" cy="43" r="10" fill="#141836"/><text x="62" y="47" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">1</text><circle cx="178" cy="43" r="10" fill="#141836"/><text x="178" y="47" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">2</text><circle cx="62" cy="121" r="10" fill="#141836"/><text x="62" y="125" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">3</text><circle cx="178" cy="121" r="10" fill="#047857"/><text x="178" y="125" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">4</text></svg></div>
        <div class="card-h">1. The Z-Path</div>
        <p class="card-p">Chronological workflows: Trigger (top-left) → Processing (top-right) → Governance (bottom-left) → Outcome (bottom-right).</p>
      </div>
      <div class="card">
        <div class="svg-box"><svg viewBox="0 0 240 165"><rect x="12" y="10" width="216" height="145" rx="6" fill="#FFF" stroke="#141836" stroke-width="1.8"/><g stroke="#0EA5E9" stroke-width="1.8" stroke-dasharray="4 3"><line x1="120" y1="82" x2="54" y2="38"/><line x1="120" y1="82" x2="186" y2="38"/><line x1="120" y1="82" x2="54" y2="128"/><line x1="120" y1="82" x2="186" y2="128"/></g><rect x="26" y="22" width="56" height="28" rx="4" fill="#EEF2FC" stroke="#141836" stroke-width="1.5"/><rect x="158" y="22" width="56" height="28" rx="4" fill="#EEF2FC" stroke="#141836" stroke-width="1.5"/><rect x="26" y="114" width="56" height="28" rx="4" fill="#EEF2FC" stroke="#141836" stroke-width="1.5"/><rect x="158" y="114" width="56" height="28" rx="4" fill="#EEF2FC" stroke="#141836" stroke-width="1.5"/><polygon points="120,52 158,82 120,112 82,82" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="2.2"/><text x="120" y="86" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">HERO HUB</text></svg></div>
        <div class="card-h">2. Hub-and-Spoke</div>
        <p class="card-p">Concept maps &amp; German root-word families (e.g., <em>stellen</em> → <em>bestellen, vorstellen, herstellen, einstellen</em> orbiting a center hub).</p>
      </div>
      <div class="card">
        <div class="svg-box"><svg viewBox="0 0 240 165"><rect x="10" y="12" width="106" height="140" rx="5" fill="#F0FAFF" stroke="#141836" stroke-width="1.8"/><rect x="124" y="12" width="106" height="140" rx="5" fill="#FFF" stroke="#141836" stroke-width="1.8"/><line x1="120" y1="10" x2="120" y2="155" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4 3"/><polygon points="63,46 96,64 63,82 30,64" fill="#0EA5E9" fill-opacity="0.3" stroke="#141836" stroke-width="1.8"/><polygon points="63,76 96,94 63,112 30,94" fill="#10B981" fill-opacity="0.3" stroke="#141836" stroke-width="1.8"/><text x="63" y="138" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0EA5E9">LEFT: VISUAL</text><g stroke="#525B7A" stroke-width="1.8" stroke-linecap="round"><line x1="138" y1="36" x2="212" y2="36"/><line x1="138" y1="54" x2="202" y2="54"/><line x1="138" y1="72" x2="210" y2="72"/><line x1="138" y1="96" x2="196" y2="96"/></g><text x="177" y="138" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#141836">RIGHT: PROSE</text></svg></div>
        <div class="card-h">3. Split-Screen Spread</div>
        <p class="card-p">Dedicate the entire left page to one Hero diagram and the right page to ledgers, citations, and Dumbbell metrics.</p>
      </div>
    </div>

    <div class="compare-grid">
      <div class="compare-card mistake">
        <div class="compare-head"><span>✕ Common Mistake</span><span>Left-Heavy "Tipping" Spread</span></div>
        <div class="svg-box"><svg viewBox="0 0 360 128"><rect x="20" y="12" width="320" height="90" rx="6" fill="#FFF" stroke="#141836" stroke-width="1.8"/><rect x="30" y="20" width="128" height="74" rx="5" fill="#EC4899" fill-opacity="0.34" stroke="#141836" stroke-width="3"/><text x="94" y="61" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">ALL HEAVY INK</text><line x1="184" y1="38" x2="290" y2="38" stroke="#94A3B8" stroke-width="1.4"/><line x1="184" y1="54" x2="260" y2="54" stroke="#94A3B8" stroke-width="1.4"/><text x="180" y="120" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#BE185D">Unbalanced—right side feels empty &amp; abandoned</text></svg></div>
      </div>
      <div class="compare-card fix">
        <div class="compare-head"><span>✓ Pro Fix</span><span>Diagonal Counter-Balance</span></div>
        <div class="svg-box"><svg viewBox="0 0 360 128"><rect x="20" y="12" width="320" height="90" rx="6" fill="#FFF" stroke="#141836" stroke-width="1.8"/><rect x="30" y="20" width="136" height="50" rx="5" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="2.6"/><text x="98" y="49" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">HERO DIAGRAM</text><rect x="208" y="56" width="120" height="36" rx="5" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/><text x="268" y="78" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">LEDGER / STAMP</text><line x1="166" y1="45" x2="208" y2="72" stroke="#94A3B8" stroke-width="1.4" stroke-dasharray="4 3"/><text x="180" y="120" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#047857">Top-left hero balanced diagonally by bottom-right anchor</text></svg></div>
      </div>
    </div>

    <div class="prose-wrap">
      <h3>14.2 Exact A5 Dot-Grid Subdivision Math (27×38 Dots)</h3>
      <p>
        Enforcing a 2-dot outer margin around a standard 27×38 A5 dot page leaves an exact <strong>23 × 34 usable dot canvas</strong>. Drop tiny Magenta ${gt('corner-ticks')} at the top and bottom gutters before writing—zero ruler required:
      </p>
    </div>

    <div class="lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // A5 Dot-Grid Layout &amp; Corner-Tick Simulator (27×38 Dots)</span>
        <span class="pill amber">2-Dot Margin • 23×34 Usable</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            <button class="seg-btn ch14-lay active" data-l="bento">65/35 Bento (15|7)</button>
            <button class="seg-btn ch14-lay" data-l="half">50/50 Split (11|11)</button>
            <button class="seg-btn ch14-lay" data-l="thirds">Thirds (7|7|7)</button>
            <button class="seg-btn ch14-lay" data-l="vhalves">Vertical Halves (16/16)</button>
          </div>
          <span class="mono" style="font-size:11px; color:var(--magenta-deep);">Magenta ticks = Corner Tick rails</span>
        </div>
        <div class="svg-box"><svg id="ch14-svg" viewBox="0 0 760 320"></svg></div>
        <div id="ch14-cap" class="lab-cap"></div>
      </div>
    </div>

    ${DEEP_CONTENT_3.ch14}
    ${MASTERCLASS_B.ch14}

    ${renderQuizHTML('ch14', CH14_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (6 Minutes)</div>
      <p>
        Count your physical notebook's horizontal and vertical dots and write them inside the front cover. Mark a <strong>65/35 Golden Bento</strong> page with Magenta Corner Ticks at dot 15—no full center line—and draft a balanced spread. (Or print Sheet 6 from <button class="gloss-term" data-nav="appB" style="border:none; background:none; font:inherit;">Appendix B</button>!)
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 15: MARKER PHYSICS, GLAZING & ATMOSPHERIC DEPTH
  // -------------------------------------------------------------------------
  ch15: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill amber">${part.title}</span><span class="pill">Chapter 15 • ${ch.time}</span></div>
      <h1 class="script"><span class="hl-cyan">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Pull <strong>3 distinct tonal values</strong> from one single water-based marker using 10-second ${gt('glazing')}.</li>
        <li>Eliminate ${gt('paper-pilling')} and separate active foreground nodes from legacy background layers via <strong>Atmospheric Perspective</strong>.</li>
        <li>Practice live translucent multi-coat glazing + White Gel Pen rims in the <strong>Glazing Sketchpad</strong>.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>15.1 Glazing: The 3-Value Single-Marker Rule &amp; Preventing Pilling</h3>
      <p>
        Water-based markers (Mildliners, Tombow ABT) act like translucent stained glass over bright white paper. Lay <strong>Coat 1</strong> with smooth, one-way parallel strokes, <strong>pause 10 full seconds</strong> until the sheen vanishes, then glaze <strong>Coat 2</strong> across the midtone face and <strong>Coat 3</strong> inside the deepest core shadow. Never scrub back-and-forth on wet fibers—that shreds paper into ${gt('paper-pilling')}. Once fully dry, run a razor-thin opaque <strong>White Gel Pen</strong> highlight (<em>Sakura Gelly Roll 08</em>) along the top-left specular rim to make cubes gleam.
      </p>
    </div>

    <div class="compare-grid">
      <div class="compare-card mistake">
        <div class="compare-head"><span>✕ Common Mistake</span><span>Wet Scrubbing → Paper Pilling</span></div>
        <div class="svg-box"><svg viewBox="0 0 360 112"><rect x="44" y="16" width="272" height="58" rx="6" fill="#94A3B8" fill-opacity="0.38" stroke="#141836" stroke-width="1.8"/><path d="M 62 32 L 116 56 L 88 24 L 164 62 L 138 26 L 222 64 L 194 26 L 284 60" fill="none" stroke="#64748B" stroke-width="7" stroke-linecap="round" opacity="0.55"/><g fill="#475569"><circle cx="118" cy="46" r="3"/><circle cx="166" cy="40" r="2.8"/><circle cx="218" cy="52" r="3.2"/><circle cx="258" cy="36" r="2.6"/></g><text x="180" y="98" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#BE185D">Back-and-forth scrubbing shreds wet cellulose fibers</text></svg></div>
      </div>
      <div class="compare-card fix">
        <div class="compare-head"><span>✓ Pro Fix</span><span>One-Way Parallel Strokes + 10s Dry</span></div>
        <div class="svg-box"><svg viewBox="0 0 360 112"><rect x="44" y="16" width="272" height="58" rx="6" fill="#0EA5E9" fill-opacity="0.18" stroke="#141836" stroke-width="1.8"/><g stroke="#0EA5E9" stroke-width="4" stroke-linecap="round" opacity="0.45"><line x1="60" y1="28" x2="296" y2="28"/><line x1="60" y1="45" x2="296" y2="45"/><line x1="60" y1="62" x2="296" y2="62"/></g><polyline points="288,22 298,28 288,34" fill="none" stroke="#047857" stroke-width="2"/><text x="180" y="98" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#047857">Pull left-to-right once → wait 10s → glaze Coat 2</text></svg></div>
      </div>
    </div>

    <div class="lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // Marker Glazing, Atmospheric Depth &amp; White Gel Pen Simulator</span>
        <span class="pill cyan">Stack Physical Ink Layers Live</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div style="display:flex; flex-wrap:wrap; gap:12px;">
            <label class="chk-lbl"><input id="ch15-c1" type="checkbox" checked /> Coat 1 (Light Wash)</label>
            <label class="chk-lbl"><input id="ch15-c2" type="checkbox" checked /> Coat 2 (Midtone +10s)</label>
            <label class="chk-lbl"><input id="ch15-c3" type="checkbox" checked /> Coat 3 (Core Shadow +10s)</label>
            <label class="chk-lbl"><input id="ch15-bg" type="checkbox" checked /> Atmospheric 01 Background</label>
            <label class="chk-lbl"><input id="ch15-wp" type="checkbox" checked /> White Gel Pen "Pop"</label>
          </div>
        </div>
        <div class="svg-box"><svg id="ch15-svg" viewBox="0 0 760 265"></svg></div>
        <div id="ch15-cap" class="lab-cap"></div>
      </div>
    </div>

    <!-- HANDS-ON SKETCHPAD: GLAZING & WHITE GEL PEN -->
    ${renderSketchpadHTML('ch15', {
      title: 'Translucent Marker Glazing & White Gel Pen Practice Canvas',
      defaultTemplate: 'glazing',
      defaultTool: 'glaze',
      subtitle: 'Pick Cyan or Cool Grey + "Marker Glaze" and swipe once over Box 1, twice over Box 2, and three times over Box 3 to feel real multiplicative optical darkening—then switch to "White Gel" to trace the cube\'s top-left specular rim!'
    })}

    ${DEEP_CONTENT_3.ch15}
    ${MASTERCLASS_B.ch15}

    ${renderQuizHTML('ch15', CH15_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (6 Minutes)</div>
      <p>
        Create a 3-square physical Glazing Strip on 120–160gsm paper with a single Mildliner or Tombow (1x / 2x / 3x with 10-second dry pauses). Then shade an isometric cube overlapping a dashed <code>01</code> legacy cube and drop a crisp white gel rim on the front-left edge.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 16: COMPLEX DIAGRAMMING PATTERNS
  // -------------------------------------------------------------------------
  ch16: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill amber">${part.title}</span><span class="pill">Chapter 16 • ${ch.time}</span><span class="pill amber">AI/Tech • Tax • Deutsch</span></div>
      <h1 class="script"><span class="hl-magenta">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Upgrade from basic linear chains to 4 specialized patterns: <strong>Swimlanes, Binary Decision Trees, State Machines, and 45° ${gt('elbow-leader')} Anatomy Diagrams</strong>.</li>
        <li>Inspect zero-overlap blueprints across AI Tax Orchestration AND German Dativ/Akkusativ grammatical routing.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>16.1 Choosing the Right Structural Archetype (11-Pattern Catalog)</h3>
      <p>
        When a workflow involves multiple actors, API handshakes, statutory intersections, root-cause chains, or German word-family networks, a plain top-to-bottom flowchart turns into spaghetti. Pick the exact structural machine for the job:
      </p>
      <ul>
        <li><strong>Flow &amp; Protocol:</strong> <em>Swimlane Architecture</em> (cross-team handoffs), <em>Sequence Diagram</em> (time-ordered API/MCP calls), and <em>State Machine</em> (document/filing lifecycles).</li>
        <li><strong>Logic &amp; Classification:</strong> <em>Binary Decision Trees</em> (EU VAT routing &amp; German Dativ/Akkusativ) and <em>3-Way Venn / Euler Overlaps</em> (statutory trigger intersections).</li>
        <li><strong>Systems &amp; Root Cause:</strong> <em>Causal Loop / Flywheel</em> (compounding learning or growth loops), <em>Ishikawa Fishbone</em> (post-mortem root-cause analysis), and <em>Concentric Governance Onion</em> (defense-in-depth security).</li>
        <li><strong>Structure &amp; Knowledge:</strong> <em>45° ${gt('elbow-leader')} Anatomy</em> (dissecting isometric stacks or rulings) and <em>Entity-Relationship / Concept Graphs</em> (TaxWiki schemas &amp; German prefix families).</li>
      </ul>
    </div>

    <div class="lab magenta-accent">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // Complex Diagram Blueprint Encyclopedia (11 Archetypes)</span>
        <span class="pill magenta">Zero-Overlap Dot-Grid Recipes</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            ${DIAGRAM_PATTERNS.map((p, idx) => `<button class="seg-btn ch16-tab ${idx===0?'active':''}" data-t="${p.id}">${p.short}</button>`).join('')}
          </div>
        </div>
        <div id="ch16-title" class="card-h" style="font-size:16.5px;"></div>
        <div class="svg-box"><svg id="ch16-svg" viewBox="0 0 760 310"></svg></div>
        <div id="ch16-specs" class="grid-3"></div>
      </div>
    </div>

    ${DEEP_CONTENT_3.ch16}
    ${MASTERCLASS_B.ch16}

    ${renderQuizHTML('ch16', CH16_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (10 Minutes)</div>
      <p>
        Draw either (A) a 4-lane <strong>Swimlane Architecture</strong> of a client deliverable workflow, OR (B) the <strong>German Case Decision Tree</strong> (<code>Nominativ → Wechselpräposition? → Wohin (Akk) vs Wo (Dat)</code>) using locked Mint YES / Magenta NO exits.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 17 (NEW): THE ANALOG ↔ DIGITAL BRIDGE
  // -------------------------------------------------------------------------
  ch17: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill amber">${part.title}</span><span class="pill magenta">NEW CHAPTER 17 • ${ch.time}</span><span class="pill amber">AI/Tech • Tax • Deutsch</span></div>
      <h1 class="script"><span class="hl-cyan">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Digitize physical dot-grid spreads with razor-clean contrast and zero phone shadows in 20 seconds.</li>
        <li>Index paper notebooks into searchable Markdown wikis (<strong>Obsidian / TaxWiki</strong>) and visual <strong>Anki German Sketch-Cards</strong>.</li>
        <li>Translate the exact 7-Color Light Cyberpunk system cleanly to <strong>iPad (GoodNotes / Freeform)</strong> and <strong>Excalidraw</strong>.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>17.1 Why Paper + Digital Beats Either Alone</h3>
      <p>
        Paper wins during <strong>thinking, listening, and spatial synthesis</strong>—zero notifications, infinite spatial freedom, superior dual-coded recall. Digital wins during <strong>search, cross-linking, sharing, and spaced repetition</strong>. Closing the bridge takes a 60-second end-of-week ritual:
      </p>
      <ol>
        <li><strong>Diffuse Side-Light Scan:</strong> Place your notebook beside a bright window (never under a direct ceiling bulb, flash OFF). Shoot straight down at 90° in <em>Apple Notes / Adobe Scan / Genius Scan</em> using Color Document mode—the pale 5mm dot grid fades gently while Indigo ink and Cyan/Magenta washes pop crisply.</li>
        <li><strong>Tag with Notebook-Page ID:</strong> Name every scan <code>NB02-P14_eu-vat-orchestration.png</code> and embed it inside a tiny Markdown wrapper in Obsidian or TaxWiki with 4 searchable bullet takeaways + wikilinks.</li>
        <li><strong>German Anki Sketch-Card Pipeline:</strong> Photograph a single <code>der / die / das</code> mini-scene or <em>Satzklammer</em> diagram, crop tightly, paste into the Back of an Anki card (Front = spoken audio or English prompt; Back = your own color-coded hand sketch!). Visual self-drawn cards boost language retention dramatically over stock text flashcards.</li>
      </ol>
    </div>

    ${HERO_ISO_BRIDGE}

    <!-- Mistake vs Pro Fix -->
    <div class="compare-grid">
      <div class="compare-card mistake">
        <div class="compare-head"><span>✕ Common Mistake</span><span>Glare, Skew &amp; Unindexed Camera Roll</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 340 105">
            <polygon points="48,18 296,12 316,88 26,96" fill="#CBD5E1" stroke="#141836" stroke-width="1.6"/>
            <ellipse cx="148" cy="54" rx="54" ry="26" fill="#141836" fill-opacity="0.22"/>
            <text x="170" y="58" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#BE185D">IMG_4829.HEIC (skewed + shadow)</text>
          </svg>
        </div>
      </div>
      <div class="compare-card fix">
        <div class="compare-head"><span>✓ Pro Fix</span><span>Flat Side-Lit Scan + Markdown Wrapper</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 340 105">
            <rect x="26" y="14" width="124" height="76" rx="5" fill="#FFF" stroke="#0EA5E9" stroke-width="2"/>
            <text x="88" y="55" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0EA5E9">NB02-P14.PNG</text>
            <line x1="150" y1="52" x2="188" y2="52" stroke="#10B981" stroke-width="2.6"/>
            <rect x="188" y="14" width="128" height="76" rx="5" fill="#ECFDF5" stroke="#047857" stroke-width="2"/>
            <text x="252" y="42" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">OBSIDIAN / WIKI</text>
            <text x="252" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#141836">[[EU-VAT]] + OCR</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- NEW INTERACTIVE LAB: ANALOG ↔ DIGITAL TOOLKIT & WIKI BRIDGE GENERATOR -->
    <div class="lab cyan-accent" id="ch17-bridge-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // Analog ↔ Digital Palette Mapper &amp; Wiki Template</span>
        <span class="pill cyan">Paper → iPad → Excalidraw → Markdown</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            <button class="seg-btn ch17-t active" data-t="map">1. Tool &amp; Hex Mapping Table</button>
            <button class="seg-btn ch17-t" data-t="wiki">2. TaxWiki / Obsidian Note Template</button>
            <button class="seg-btn ch17-t" data-t="anki">3. German Anki Sketch-Card Recipe</button>
          </div>
          <button id="ch17-copy-btn" class="btn mint">⧉ Copy Template</button>
        </div>
        <div id="ch17-out"></div>
      </div>
    </div>

    ${DEEP_CONTENT_3.ch17}
    ${MASTERCLASS_B.ch17}

    ${renderQuizHTML('ch17', CH17_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (6 Minutes)</div>
      <p>
        Scan one finished page from your physical notebook beside a window using Document Scan mode, name it with your <code>NB01-P##</code> ID, and drop it into either a searchable Markdown wiki note OR a German Anki card.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 18: DIAGNOSTIC TROUBLESHOOTING MATRIX & FINAL CAPSTONE
  // -------------------------------------------------------------------------
  ch18: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill amber">${part.title}</span><span class="pill">Chapter 18 • ${ch.time}</span><span class="pill mint">Capstone</span></div>
      <h1 class="script"><span class="hl-mint">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Spot and repair all <strong>5 classic mechanical flaws</strong> live in the interactive Broken-Spread Diagnostic Game.</li>
        <li>Reference the 6-row <strong>Root-Cause Troubleshooting Matrix</strong> whenever a future notebook spread feels "off."</li>
        <li>Complete the <strong>Final Book Graduation Capstone Spread</strong>.</li>
      </ul>
    </div>

    <!-- NEW INTERACTIVE GAME: FIND THE 5 FLAWS ON THIS BROKEN SPREAD -->
    <div class="lab magenta-accent" id="ch18-game-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Diagnostic Game // Click the 5 Flaws on This Broken Spread</span>
        <span id="ch18-score-pill" class="pill magenta">0 / 5 Flaws Fixed</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <span class="mono" style="font-size:11.5px;">Click directly on each broken element below to diagnose its mechanical root cause and watch it snap into the Pro Fix!</span>
          <button id="ch18-reset-game" class="btn secondary">↺ Break Spread Again</button>
        </div>
        <div class="svg-box"><svg id="ch18-game-svg" viewBox="0 0 760 280"></svg></div>
        <div id="ch18-game-cap" class="lab-cap">Hint: Look for (1) Edge-to-edge zero margin rainbow title, (2) Cramped box-first text, (3) Arrow slicing through text, (4) Warped/melting isometric cube, and (5) Floating unshaded card with no drop shadow!</div>
      </div>
    </div>

    <!-- 6-SYMPTOM SPREAD DIAGNOSTIC TROUBLESHOOTER -->
    <div class="lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Reference // 6-Symptom Spread Troubleshooter</span>
        <span class="pill mint">Click Any Symptom to Compare</span>
      </div>
      <div class="lab-body">
        <div id="ch18-cards" class="grid-3"></div>
        <div id="ch18-detail" class="compare-grid"></div>
        <div id="ch18-cap" class="lab-cap"></div>
      </div>
    </div>

    <div class="table-wrap">
      <table class="t">
        <thead><tr><th>Visual Symptom</th><th>Mechanical Root Cause</th><th>Instant Next-Page Fix</th></tr></thead>
        <tbody>
          <tr><td><strong>1. Muddy / Chaotic Page</strong></td><td>4+ competing accent colors or zero open paper.</td><td>Reset to <strong>1 ink + 2 accents + Cool Grey</strong>; keep 30% open paper.</td></tr>
          <tr><td><strong>2. Flat &amp; Lifeless Diagrams</strong></td><td>Uniform <code>03</code> line weight and missing shadows.</td><td>Outline silhouettes in <code>05</code>, interior in <code>01</code>, add Cool Grey + AO creases.</td></tr>
          <tr><td><strong>3. Cramped / Hard-to-Scan Text</strong></td><td>Drawing boxes before text or bouncing x-heights.</td><td>Write <strong>Text First, Box Second</strong>; lock lowercase to 60% of dot row.</td></tr>
          <tr><td><strong>4. Arrows Crossing Text</strong></td><td>Diagram tiers stacked too tightly vertically.</td><td>Reserve <strong>3–4 blank dot rows</strong> as dedicated Arrow Corridors.</td></tr>
          <tr><td><strong>5. Warped / Melting Isometrics</strong></td><td>Vertical edges tilting off 90° plumb lines.</td><td>Lock verticals strictly to dot columns; only diagonals step 2-over, 1-up.</td></tr>
          <tr><td><strong>6. Blank-Page Freeze</strong></td><td>Designing and listening simultaneously.</td><td>Run <strong>Two-Pass Notes</strong>: Pass 1 plain ink with gaps; Pass 2 (2m) pop.</td></tr>
        </tbody>
      </table>
    </div>

    ${DEEP_CONTENT_3.ch18}
    ${MASTERCLASS_B.ch18}

    ${renderQuizHTML('ch18', CH18_QUIZ)}

    <!-- Final Book Capstone Exercise & Persisted Graduation Checklist -->
    <div class="studio-exercise" style="border-left-color:var(--mint); box-shadow:4px 4px 0 var(--mint); background:#F2FDF8;">
      <div class="callout-label" style="color:var(--mint-deep);">Final Book Capstone &amp; Persisted Graduation Checklist</div>
      <p>
        Pick one real topic from your work or German study and create one complete <strong>Split-Screen Spread</strong> in your physical 5mm dot-grid notebook, then scan it into your digital wiki/Anki system. Check off all five graduation criteria once done:
      </p>
      <div id="ch18-grad-list" style="display:flex; flex-direction:column; gap:8px; margin-top:6px;"></div>
    </div>
  `
};

export const PART5_INITS = {
  ch14: (onStateChange) => {
    let lay = 'bento';
    const render = () => {
      const svg = document.getElementById('ch14-svg');
      const cap = document.getElementById('ch14-cap');
      const ox = 46, oy = 18, step = 7.4, pw = 27 * step, ph = 38 * step;
      const ux = ox + 2 * step, uy = oy + 2 * step, uw = 23 * step, uh = 34 * step;
      let dots = '';
      for (let r = 0; r <= 38; r += 2) {
        for (let c = 0; c <= 27; c += 2) dots += `<circle cx="${(ox + c * step).toFixed(1)}" cy="${(oy + r * step).toFixed(1)}" r="0.9" fill="#94A3B8" opacity="0.65"/>`;
      }
      let zones = '', ticks = '', note = '', info = '';
      if (lay === 'bento') {
        const w1 = 15 * step, g = 1 * step, w2 = 7 * step;
        zones = `<rect x="${ux}" y="${uy}" width="${w1}" height="${uh}" rx="4" fill="#0EA5E9" fill-opacity="0.16" stroke="#0EA5E9" stroke-width="1.6"/><rect x="${ux+w1}" y="${uy}" width="${g}" height="${uh}" fill="#F59E0B" fill-opacity="0.28"/><rect x="${ux+w1+g}" y="${uy}" width="${w2}" height="${uh}" rx="4" fill="#10B981" fill-opacity="0.18" stroke="#047857" stroke-width="1.6"/><text x="${ux+w1/2}" y="${uy+uh/2}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">15 DOTS</text><text x="${ux+w1+g+w2/2}" y="${uy+uh/2}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">7 DOTS</text>`;
        const tx = ux + w1 + g / 2;
        ticks = `<line x1="${tx}" y1="${uy-7}" x2="${tx}" y2="${uy+6}" stroke="#EC4899" stroke-width="2.6"/><line x1="${tx}" y1="${uy+uh-6}" x2="${tx}" y2="${uy+uh+7}" stroke="#EC4899" stroke-width="2.6"/>`;
        info = `<text x="310" y="64" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700">65 / 35 GOLDEN BENTO (15 | 1 | 7)</text><text x="310" y="96" font-family="Patrick Hand, cursive" font-size="17">• Outer Margin: 2 dots all around (23 × 34 usable)</text><text x="310" y="124" font-family="Patrick Hand, cursive" font-size="17" fill="#0EA5E9">• Left Column (15 dots): Main diagram or call notes</text><text x="310" y="152" font-family="Patrick Hand, cursive" font-size="17" fill="#047857">• Right Column (7 dots): Actions □, Legend, Vocab</text><text x="310" y="180" font-family="Patrick Hand, cursive" font-size="17" fill="#BE185D">• Corner Ticks: Mark 15 dots in from left margin</text>`;
        note = '<strong>65/35 Golden Bento:</strong> Most versatile daily layout—generous diagram width on the left, clean actions & German vocab column on the right.';
      } else if (lay === 'half') {
        const w1 = 11 * step, g = 1 * step;
        zones = `<rect x="${ux}" y="${uy}" width="${w1}" height="${uh}" rx="4" fill="#0EA5E9" fill-opacity="0.16" stroke="#0EA5E9" stroke-width="1.6"/><rect x="${ux+w1}" y="${uy}" width="${g}" height="${uh}" fill="#F59E0B" fill-opacity="0.28"/><rect x="${ux+w1+g}" y="${uy}" width="${w1}" height="${uh}" rx="4" fill="#7C3AED" fill-opacity="0.15" stroke="#7C3AED" stroke-width="1.6"/><text x="${ux+w1/2}" y="${uy+uh/2}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">11 DOTS</text><text x="${ux+w1+g+w1/2}" y="${uy+uh/2}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#7C3AED">11 DOTS</text>`;
        const tx = ux + w1 + g / 2;
        ticks = `<line x1="${tx}" y1="${uy-7}" x2="${tx}" y2="${uy+6}" stroke="#EC4899" stroke-width="2.6"/><line x1="${tx}" y1="${uy+uh-6}" x2="${tx}" y2="${uy+uh+7}" stroke="#EC4899" stroke-width="2.6"/>`;
        info = `<text x="310" y="64" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700">50 / 50 EQUAL SPLIT (11 | 1 | 11)</text><text x="310" y="96" font-family="Patrick Hand, cursive" font-size="17">• Exact math: 11 + 1 + 11 = 23 usable dots</text><text x="310" y="124" font-family="Patrick Hand, cursive" font-size="17" fill="#0EA5E9">• Left Column (11 dots): Before / B2B / Deutsch</text><text x="310" y="152" font-family="Patrick Hand, cursive" font-size="17" fill="#7C3AED">• Right Column (11 dots): After / B2C / English</text>`;
        note = '<strong>50/50 Equal Split:</strong> Ideal for side-by-side statutory comparisons, pros/cons, or German-to-English bilingual study spreads.';
      } else if (lay === 'thirds') {
        const w = 7 * step, g = 1 * step;
        zones = `<rect x="${ux}" y="${uy}" width="${w}" height="${uh}" rx="4" fill="#0EA5E9" fill-opacity="0.16" stroke="#0EA5E9" stroke-width="1.5"/><rect x="${ux+w}" y="${uy}" width="${g}" height="${uh}" fill="#F59E0B" fill-opacity="0.28"/><rect x="${ux+w+g}" y="${uy}" width="${w}" height="${uh}" rx="4" fill="#7C3AED" fill-opacity="0.15" stroke="#7C3AED" stroke-width="1.5"/><rect x="${ux+2*w+g}" y="${uy}" width="${g}" height="${uh}" fill="#F59E0B" fill-opacity="0.28"/><rect x="${ux+2*w+2*g}" y="${uy}" width="${w}" height="${uh}" rx="4" fill="#10B981" fill-opacity="0.16" stroke="#047857" stroke-width="1.5"/><text x="${ux+w/2}" y="${uy+uh/2}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">7</text><text x="${ux+w+g+w/2}" y="${uy+uh/2}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">7</text><text x="${ux+2*w+2*g+w/2}" y="${uy+uh/2}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">7</text>`;
        const t1 = ux + w + g/2, t2 = ux + 2*w + 1.5*g;
        ticks = `<line x1="${t1}" y1="${uy-7}" x2="${t1}" y2="${uy+6}" stroke="#EC4899" stroke-width="2.4"/><line x1="${t1}" y1="${uy+uh-6}" x2="${t1}" y2="${uy+uh+7}" stroke="#EC4899" stroke-width="2.4"/><line x1="${t2}" y1="${uy-7}" x2="${t2}" y2="${uy+6}" stroke="#EC4899" stroke-width="2.4"/><line x1="${t2}" y1="${uy+uh-6}" x2="${t2}" y2="${uy+uh+7}" stroke="#EC4899" stroke-width="2.4"/>`;
        info = `<text x="310" y="64" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700">EQUAL THIRDS (7 | 1 | 7 | 1 | 7)</text><text x="310" y="96" font-family="Patrick Hand, cursive" font-size="17">• Exact math: 7 + 1 + 7 + 1 + 7 = 23 usable dots</text><text x="310" y="124" font-family="Patrick Hand, cursive" font-size="17" fill="#0EA5E9">• Built for 3-panel Storyboards &amp; 3-Pillar Book Maps</text>`;
        note = '<strong>Equal Thirds (7|7|7):</strong> Cleanest division for 3-pillar book syntheses and 3-panel visual storyboards.';
      } else {
        const h1 = 16 * step, g = 2 * step;
        zones = `<rect x="${ux}" y="${uy}" width="${uw}" height="${h1}" rx="4" fill="#0EA5E9" fill-opacity="0.16" stroke="#0EA5E9" stroke-width="1.6"/><rect x="${ux}" y="${uy+h1}" width="${uw}" height="${g}" fill="#F59E0B" fill-opacity="0.28"/><rect x="${ux}" y="${uy+h1+g}" width="${uw}" height="${h1}" rx="4" fill="#10B981" fill-opacity="0.16" stroke="#047857" stroke-width="1.6"/><text x="${ux+uw/2}" y="${uy+h1/2+4}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">TOP: 16 DOTS</text><text x="${ux+uw/2}" y="${uy+h1+g+h1/2+4}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">BOT: 16 DOTS</text>`;
        const ty = uy + h1 + g/2;
        ticks = `<line x1="${ux-7}" y1="${ty}" x2="${ux+6}" y2="${ty}" stroke="#EC4899" stroke-width="2.6"/><line x1="${ux+uw-6}" y1="${ty}" x2="${ux+uw+7}" y2="${ty}" stroke="#EC4899" stroke-width="2.6"/>`;
        info = `<text x="310" y="64" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700">VERTICAL HALVES (16 / 2 / 16)</text><text x="310" y="96" font-family="Patrick Hand, cursive" font-size="17">• Exact math: 16 + 2 + 16 = 34 usable rows</text><text x="310" y="124" font-family="Patrick Hand, cursive" font-size="17" fill="#0EA5E9">• Top: Wide Swimlane • Bottom: Dumbbell Chart</text>`;
        note = '<strong>Vertical Halves (16/16):</strong> Pair a full-width top architecture flow with a bottom data visualization separated by a 2-dot corridor.';
      }
      svg.innerHTML = `<rect x="${ox}" y="${oy}" width="${pw}" height="${ph}" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.2"/>${dots}<rect x="${ux}" y="${uy}" width="${uw}" height="${uh}" fill="none" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3 3"/>${zones}${ticks}<text x="${ox+pw/2}" y="${oy+ph+15}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#525B7A">A5 PAGE: 27×38 DOTS</text>${info}`;
      cap.innerHTML = note;
    };
    document.querySelectorAll('.ch14-lay').forEach(b => b.addEventListener('click', () => {
      lay = b.dataset.l;
      document.querySelectorAll('.ch14-lay').forEach(x => x.classList.toggle('active', x === b));
      render();
    }));
    render();
    initQuiz('ch14', CH14_QUIZ, onStateChange);
  },

  ch15: (onStateChange) => {
    const render = () => {
      const c1 = document.getElementById('ch15-c1').checked;
      const c2 = document.getElementById('ch15-c2').checked;
      const c3 = document.getElementById('ch15-c3').checked;
      const bg = document.getElementById('ch15-bg').checked;
      const wp = document.getElementById('ch15-wp').checked;
      const topFill = c1 ? '#0EA5E9' : '#FFFFFF', topOp = c1 ? '0.20' : '1';
      const leftFill = c2 ? '#0EA5E9' : (c1 ? '#0EA5E9' : '#FFFFFF'), leftOp = c2 ? '0.42' : (c1 ? '0.20' : '1');
      const rightFill = c3 ? '#0369A1' : (c2 ? '#0EA5E9' : (c1 ? '#0EA5E9' : '#FFFFFF')), rightOp = c3 ? '0.78' : (c2 ? '0.42' : (c1 ? '0.20' : '1'));

      const bgNode = bg ? `<g opacity="0.58"><polygon points="560,64 624,96 560,128 496,96" fill="#F8FAFC" stroke="#64748B" stroke-width="1.2" stroke-dasharray="5 4"/><polygon points="496,96 560,128 560,182 496,150" fill="#F1F5F9" stroke="#64748B" stroke-width="1.2" stroke-dasharray="5 4"/><polygon points="624,96 560,128 560,182 624,150" fill="#E2E8F0" stroke="#64748B" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="418" y1="128" x2="494" y2="128" stroke="#64748B" stroke-width="1.3" stroke-dasharray="4 4"/><text x="560" y="204" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#64748B">LEGACY / CONTEXT (01 DASHED)</text></g>` : '';
      const whitePop = wp ? `<polyline points="222,102 310,58 398,102" fill="none" stroke="#FFFFFF" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/><line x1="310" y1="146" x2="310" y2="210" stroke="#FFFFFF" stroke-width="2" opacity="0.7" stroke-linecap="round"/><circle cx="258" cy="148" r="10" fill="#EC4899" stroke="#141836" stroke-width="2"/><circle cx="255" cy="145" r="2.6" fill="#FFFFFF"/><circle cx="261" cy="151" r="1.4" fill="#FFFFFF"/>` : `<circle cx="258" cy="148" r="10" fill="#EC4899" stroke="#141836" stroke-width="2"/>`;

      document.getElementById('ch15-svg').innerHTML = `${bgNode}<polygon points="310,218 440,218 476,174 398,174" fill="#94A3B8" fill-opacity="0.38"/><polyline points="222,175 310,220 398,175" fill="none" stroke="#141836" stroke-width="5.5" stroke-linecap="round"/><polygon points="310,56 398,100 310,144 222,100" fill="${topFill}" fill-opacity="${topOp}" stroke="#141836" stroke-width="2.2"/><polygon points="222,100 310,144 310,216 222,172" fill="${leftFill}" fill-opacity="${leftOp}" stroke="#141836" stroke-width="2.2"/><polygon points="398,100 310,144 310,216 398,172" fill="${rightFill}" fill-opacity="${rightOp}" stroke="#141836" stroke-width="2.2"/><polygon points="310,56 398,100 398,172 310,216 222,172 222,100" fill="none" stroke="#141836" stroke-width="3.2" stroke-linejoin="round"/>${whitePop}<text x="128" y="88" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0EA5E9">TOP: ${c1 ? 'COAT 1 (1x)' : '0x WHITE'}</text><text x="128" y="152" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">LEFT: ${c2 ? 'COAT 2 (2x)' : c1 ? 'COAT 1' : 'UNSHADED'}</text><text x="310" y="246" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">RIGHT SHADOW: ${c3 ? 'COAT 3 (3x GLAZE)' : c2 ? 'COAT 2' : 'FLAT'}</text>`;
      const active = [c1 && 'Coat 1', c2 && 'Coat 2 (+10s)', c3 && 'Coat 3 (+10s)', bg && '01 Background', wp && 'White Gel Pop'].filter(Boolean);
      document.getElementById('ch15-cap').innerHTML = `<strong>Active Ink Stack:</strong> ${active.length ? active.join(' → ') : 'Bare Indigo Linework Only'}.`;
    };
    ['ch15-c1', 'ch15-c2', 'ch15-c3', 'ch15-bg', 'ch15-wp'].forEach(id => document.getElementById(id).addEventListener('change', render));
    render();
    initSketchpad('ch15', { defaultTemplate: 'glazing', defaultTool: 'glaze' });
    initQuiz('ch15', CH15_QUIZ, onStateChange);
  },

  ch16: (onStateChange) => {
    const setTab = (t) => {
      document.querySelectorAll('.ch16-tab').forEach(b => b.classList.toggle('active', b.dataset.t === t));
      const d = DIAGRAM_PATTERNS.find(p => p.id === t) || DIAGRAM_PATTERNS[0];
      document.getElementById('ch16-title').textContent = d.title;
      document.getElementById('ch16-svg').innerHTML = d.svg;
      document.getElementById('ch16-specs').innerHTML = d.specs.map(([h, p]) => `<div class="card tinted"><div class="mono" style="font-size:10.5px; font-weight:700; color:var(--violet); text-transform:uppercase;">${h}</div><div class="card-p">${p}</div></div>`).join('');
    };
    document.querySelectorAll('.ch16-tab').forEach(b => b.addEventListener('click', () => setTab(b.dataset.t)));
    setTab('swimlane');
    initQuiz('ch16', CH16_QUIZ, onStateChange);
  },

  ch17: (onStateChange) => {
    let tab = 'map';
    const WIKI_MD = `---
title: EU VAT Multi-Agent Orchestration
notebook_ref: NB02-P14
tags: [tax, eu-vat, ai-agents, sketch-spread]
created: 2026-11-22
---

# EU VAT Multi-Agent Orchestration (NB02-P14)

![[NB02-P14_eu-vat-orchestration.png]]

## 3 Searchable Takeaways
- **80% Fast Path:** Flash triage answers routine deadline questions in 0.2s (-97% cost).
- **HITL Governance Gate:** Reasoning LLM holds zero write credentials; Partner signs before MCP write.
- **Linked Concepts:** [[EU-VAT-Directive-Art-58]], [[OSS-B2C-Threshold]], [[MCP-Security-Firewall]]`;

    const ANKI_TXT = `ANKI GERMAN SKETCH-CARD RECIPE
──────────────────────────────
FRONT (Audio + Prompt):
  "Official tax assessment ruling (Masculine) + sentence with nachreichen"

BACK (Cropped Phone Scan of Your 3-Color Sketch-Card):
  [Cyan Bar] der Steuerbescheid (pl. die Steuerbescheide)
  [Bracket]  Wir [ müssen ] den Beleg bis Freitag [ nachreichen ].
  [Mini-Scene] Bean-Body handing Cyan Aktenordner across desk.

PRO TIP: Never copy dictionary definitions—your own 10-second sketch triggers 2x faster recall!`;

    const render = () => {
      const out = document.getElementById('ch17-out');
      const copyBtn = document.getElementById('ch17-copy-btn');
      if (tab === 'map') {
        copyBtn.style.display = 'none';
        out.innerHTML = `
          <div class="table-wrap">
            <table class="t">
              <thead><tr><th>Semantic Role</th><th>Analog Pen (Paper)</th><th>GoodNotes / iPad</th><th>Excalidraw / SVG Hex</th></tr></thead>
              <tbody>
                <tr><td><strong>Structural Ink</strong></td><td>Micron 01 / 03 / 05</td><td>0.35 / 0.5 / 0.8mm Fountain</td><td class="mono">#141836 (1.5 / 2.2 / 3.2px)</td></tr>
                <tr><td><strong>Active Flow / der</strong></td><td>Mildliner Cyan</td><td>Highlighter 30% opacity</td><td class="mono">#0EA5E9 (fill-opacity 0.22)</td></tr>
                <tr><td><strong>Risk / HITL / die</strong></td><td>Mildliner Magenta</td><td>Dashed stroke + 20% wash</td><td class="mono">#EC4899 (stroke-dasharray)</td></tr>
                <tr><td><strong>Approved / das</strong></td><td>Mildliner Green</td><td>Solid badge + Mint wash</td><td class="mono">#10B981 / #047857</td></tr>
                <tr><td><strong>3D Shadow</strong></td><td>Tombow N75 Gray</td><td>Straight-line 6mm tool</td><td class="mono">#94A3B8 (opacity 0.55)</td></tr>
              </tbody>
            </table>
          </div>`;
      } else if (tab === 'wiki') {
        copyBtn.style.display = 'inline-flex';
        out.innerHTML = `<pre class="mono" style="font-size:12.5px; line-height:1.6; background:var(--bg-paper); padding:14px; border:1.5px solid var(--ink); border-radius:8px; overflow-x:auto;">${WIKI_MD.replace(/</g, '&lt;')}</pre>`;
      } else {
        copyBtn.style.display = 'inline-flex';
        out.innerHTML = `<pre class="mono" style="font-size:12.5px; line-height:1.6; background:#FFFDF5; padding:14px; border:1.5px solid var(--ink); border-radius:8px; overflow-x:auto;">${ANKI_TXT}</pre>`;
      }
    };
    document.querySelectorAll('.ch17-t').forEach(b => b.addEventListener('click', () => {
      tab = b.dataset.t;
      document.querySelectorAll('.ch17-t').forEach(x => x.classList.toggle('active', x === b));
      render();
    }));
    document.getElementById('ch17-copy-btn').addEventListener('click', async () => {
      const txt = tab === 'wiki' ? WIKI_MD : ANKI_TXT;
      try { await navigator.clipboard.writeText(txt); document.getElementById('ch17-copy-btn').textContent = '✓ Copied!'; setTimeout(() => { document.getElementById('ch17-copy-btn').textContent = '⧉ Copy Template'; }, 1400); } catch (e) {}
    });
    render();
    initQuiz('ch17', CH17_QUIZ, onStateChange);
  },

  ch18: (onStateChange) => {
    // Interactive Game: Find the 5 Flaws
    const fixed = new Set();
    const FLAW_MSG = {
      1: '<strong>Flaw 1 Fixed (Zero Margins + Rainbow Header):</strong> Restored 2-dot perimeter margins and swapped the muddy rainbow stripe for a clean Cyan Highlighter-Drop title!',
      2: '<strong>Flaw 2 Fixed (Box-First Cramped Text):</strong> Expanded container cleanly around the word ("Text First, Box Second") so letters breathe!',
      3: '<strong>Flaw 3 Fixed (Arrow Slicing Through Text):</strong> Routed the connector cleanly through a 4-dot horizontal Arrow Corridor!',
      4: '<strong>Flaw 4 Fixed (Warped/Melting Isometric Cube):</strong> Locked all three vertical walls strictly to 90° plumb lines!',
      5: '<strong>Flaw 5 Fixed (Flat Floating Card):</strong> Upgraded outer silhouette to 05 bold ink + Cool Grey offset shadow + Ambient Occlusion crease!'
    };
    const renderGame = () => {
      const f1 = fixed.has(1), f2 = fixed.has(2), f3 = fixed.has(3), f4 = fixed.has(4), f5 = fixed.has(5);
      document.getElementById('ch18-score-pill').textContent = `${fixed.size} / 5 Flaws Fixed`;
      document.getElementById('ch18-score-pill').className = fixed.size === 5 ? 'pill mint' : 'pill magenta';
      document.getElementById('ch18-game-svg').innerHTML = `
        <rect x="14" y="10" width="732" height="260" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <!-- FLAW 1: Marginless rainbow header -->
        <g class="svg-hotspot" data-flaw="1">
          ${f1 ? `<rect x="38" y="34" width="286" height="14" rx="3" fill="#0EA5E9" fill-opacity="0.32"/><text x="44" y="42" font-family="Patrick Hand, cursive" font-size="20" font-weight="700" fill="#141836">Q4 VAT Agent Architecture ✓</text>`
               : `<rect x="16" y="12" width="728" height="28" fill="#F59E0B" fill-opacity="0.45"/><rect x="260" y="12" width="240" height="28" fill="#EC4899" fill-opacity="0.4"/><text x="22" y="32" font-family="Patrick Hand, cursive" font-size="19" fill="#BE185D">CRAMPED EDGE-TO-EDGE RAINBOW HEADER NO MARGIN!!</text>`}
        </g>
        <!-- FLAW 2: Box-first cramped text -->
        <g class="svg-hotspot" data-flaw="2">
          ${f2 ? `<rect x="38" y="74" width="194" height="54" rx="7" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/><text x="135" y="106" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="17" font-weight="700" fill="#047857">Orchestration ✓</text>`
               : `<rect x="38" y="74" width="106" height="54" rx="4" fill="#FFF" stroke="#EC4899" stroke-width="2"/><text x="44" y="106" font-family="Patrick Hand, cursive" font-size="18" fill="#BE185D">Orchestra-tion!</text>`}
        </g>
        <!-- FLAW 3: Arrow crossing text -->
        <g class="svg-hotspot" data-flaw="3">
          ${f3 ? `<path d="M 232 101 H 316 V 164 H 366" fill="none" stroke="#0EA5E9" stroke-width="2.8"/><text x="304" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">CLEAN CORRIDOR ✓</text>`
               : `<text x="292" y="128" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" font-weight="700" fill="#141836">Important Tax Rule</text><line x1="146" y1="101" x2="366" y2="164" stroke="#EC4899" stroke-width="3.5"/>`}
        </g>
        <!-- FLAW 4: Warped isometric cube -->
        <g class="svg-hotspot" data-flaw="4">
          ${f4 ? `<polygon points="135,160 185,184 135,208 85,184" fill="#FFF" stroke="#141836" stroke-width="2"/><polygon points="85,184 135,208 135,244 85,220" fill="#CBD5E1" stroke="#141836" stroke-width="2"/><polygon points="185,184 135,208 135,244 185,220" fill="#64748B" fill-opacity="0.8" stroke="#141836" stroke-width="2"/><text x="135" y="260" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">90° VERTICALS ✓</text>`
               : `<polygon points="135,160 192,182 128,206 78,182" fill="#FFF" stroke="#EC4899" stroke-width="2"/><polygon points="78,182 128,206 156,246 106,222" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/><polygon points="192,182 128,206 156,246 218,220" fill="#FBCFE8" stroke="#EC4899" stroke-width="2"/><text x="148" y="260" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">MELTING CUBE!</text>`}
        </g>
        <!-- FLAW 5: Flat floating card -->
        <g class="svg-hotspot" data-flaw="5">
          ${f5 ? `<path d="M 374 226 H 712 V 126" fill="none" stroke="#94A3B8" stroke-width="8" opacity="0.65"/><rect x="366" y="118" width="338" height="100" rx="8" fill="#ECFDF5" stroke="#141836" stroke-width="3.2"/><text x="535" y="164" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#047857">05 SILHOUETTE + SHADOW ✓</text><text x="535" y="188" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5">Grounded with crisp depth &amp; hierarchy!</text>`
               : `<rect x="366" y="118" width="338" height="100" rx="4" fill="#FFF" stroke="#94A3B8" stroke-width="1.2"/><text x="535" y="164" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" fill="#94A3B8">FLAT LIFELESS CARD (NO SHADOW)</text><text x="535" y="188" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" fill="#94A3B8">Uniform thin lines &amp; floating in empty space</text>`}
        </g>`;
      document.querySelectorAll('#ch18-game-svg .svg-hotspot').forEach(g => {
        g.addEventListener('click', () => {
          const id = Number(g.dataset.flaw);
          fixed.add(id);
          document.getElementById('ch18-game-cap').innerHTML = FLAW_MSG[id] + (fixed.size === 5 ? '<br/><strong style="color:var(--mint-deep);">★ All 5 mechanical flaws diagnosed and repaired!</strong>' : '');
          renderGame();
        });
      });
    };
    document.getElementById('ch18-reset-game').addEventListener('click', () => {
      fixed.clear();
      document.getElementById('ch18-game-cap').innerHTML = 'Spread reset! Click all 5 visual flaws to diagnose and repair them.';
      renderGame();
    });
    renderGame();

    // 6-Symptom Troubleshooter
    let sym = 0;
    const SYMS = [
      { title: '1. Muddy / Chaotic Page', cause: '4+ competing highlighter colors and zero whitespace flatten hierarchy.', fix: 'Reset to 1 neutral ink + 2 semantic accents + Cool Grey shadow; keep 30% open paper.', bad: '<rect x="18" y="14" width="136" height="42" fill="#EC4899" fill-opacity="0.45" stroke="#141836"/><rect x="164" y="14" width="136" height="42" fill="#F59E0B" fill-opacity="0.45" stroke="#141836"/><rect x="18" y="64" width="136" height="42" fill="#7C3AED" fill-opacity="0.45" stroke="#141836"/><rect x="164" y="64" width="136" height="42" fill="#10B981" fill-opacity="0.45" stroke="#141836"/>', good: '<rect x="24" y="18" width="128" height="36" rx="5" fill="#FFF" stroke="#141836" stroke-width="2"/><rect x="24" y="66" width="128" height="36" rx="5" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><rect x="176" y="42" width="120" height="42" rx="6" fill="#FCE7F3" stroke="#EC4899" stroke-width="2" stroke-dasharray="5 3"/>' },
      { title: '2. Flat & Lifeless Diagrams', cause: 'Uniform 03 thickness with zero drop shadow or contact crease.', fix: 'Trace outer silhouettes in 05, drop interior lines to 01, swipe Cool Grey right/bottom.', bad: '<rect x="86" y="24" width="148" height="68" fill="#FFF" stroke="#141836" stroke-width="1.4"/><line x1="86" y1="50" x2="234" y2="50" stroke="#141836" stroke-width="1.4"/>', good: '<path d="M 94 96 H 238 V 32" fill="none" stroke="#94A3B8" stroke-width="8" opacity="0.65"/><rect x="86" y="24" width="148" height="68" rx="6" fill="#FFF" stroke="#141836" stroke-width="3"/><line x1="86" y1="50" x2="234" y2="50" stroke="#525B7A" stroke-width="1"/>' },
      { title: '3. Cramped / Hard-to-Scan Text', cause: 'Drawing boxes before writing words or bouncing x-heights.', fix: 'Write Text First, Box Second—lock lowercase to 60% of a dot row.', bad: '<rect x="76" y="26" width="130" height="58" rx="4" fill="#FFF" stroke="#141836" stroke-width="2"/><text x="84" y="60" font-family="Patrick Hand, cursive" font-size="18" fill="#BE185D">Orchestra-tion!</text>', good: '<rect x="58" y="26" width="204" height="58" rx="6" fill="#FFF" stroke="#141836" stroke-width="2"/><text x="160" y="60" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="18" fill="#047857">Orchestration</text>' },
      { title: '4. Arrows Crossing Text', cause: 'Diagram rows packed tightly with zero vertical space.', fix: 'Reserve 3–4 blank dot rows between tiers as Arrow Corridors.', bad: '<rect x="24" y="18" width="90" height="32" fill="#FFF" stroke="#141836"/><rect x="206" y="62" width="90" height="32" fill="#FFF" stroke="#141836"/><text x="160" y="58" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15">Important Note</text><line x1="114" y1="34" x2="206" y2="78" stroke="#EC4899" stroke-width="2.6"/>', good: '<rect x="24" y="14" width="90" height="28" rx="4" fill="#FFF" stroke="#141836" stroke-width="1.8"/><rect x="206" y="72" width="90" height="28" rx="4" fill="#FFF" stroke="#141836" stroke-width="1.8"/><path d="M 114 28 H 160 V 86 H 206" fill="none" stroke="#0EA5E9" stroke-width="2.4"/><text x="236" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#047857">CLEAN CORRIDOR</text>' },
      { title: '5. Warped / Melting Isometrics', cause: 'Vertical walls leaning sideways off 90° dot columns.', fix: 'Lock all vertical walls strictly 90° straight up/down.', bad: '<polygon points="160,16 218,38 152,62 104,38" fill="#FFF" stroke="#EC4899" stroke-width="2"/><polygon points="104,38 152,62 174,102 124,78" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/>', good: '<polygon points="160,18 214,42 160,66 106,42" fill="#FFF" stroke="#141836" stroke-width="2"/><polygon points="106,42 160,66 160,104 106,80" fill="#CBD5E1" stroke="#141836" stroke-width="2"/><polygon points="214,42 160,66 160,104 214,80" fill="#94A3B8" stroke="#141836" stroke-width="2"/>' },
      { title: '6. Blank-Page Freeze', cause: 'Trying to think, listen, and style on the very first stroke.', fix: 'Run Two-Pass Notes: Pass 1 plain ink with gaps; Pass 2 (2m) pop.', bad: '<rect x="44" y="18" width="232" height="78" rx="6" fill="#FFF" stroke="#94A3B8" stroke-dasharray="5 4"/><text x="160" y="62" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" fill="#BE185D">Staring at empty paper…</text>', good: '<rect x="30" y="22" width="114" height="68" rx="6" fill="#FFF" stroke="#141836" stroke-width="2"/><text x="87" y="60" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">PASS 1: INK</text><text x="160" y="60" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14">→</text><rect x="176" y="22" width="114" height="68" rx="6" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><text x="233" y="60" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">PASS 2: POP</text>' }
    ];
    const renderSyms = () => {
      document.getElementById('ch18-cards').innerHTML = SYMS.map((s, i) => `
        <button class="check-btn ch18-sbtn ${i===sym?'done':''}" data-i="${i}" style="${i===sym?'background:var(--cyan-wash); border-color:var(--ink); box-shadow:3px 3px 0 var(--ink);':''}">
          <span class="chk-box" style="${i===sym?'background:var(--ink); color:#FFF;':''}">${i+1}</span>
          <span style="font-size:13.5px; font-weight:700; color:var(--ink);">${s.title}</span>
        </button>`).join('');
      document.querySelectorAll('.ch18-sbtn').forEach(b => b.addEventListener('click', () => { sym = Number(b.dataset.i); renderSyms(); }));
      const s = SYMS[sym];
      document.getElementById('ch18-detail').innerHTML = `
        <div class="compare-card mistake"><div class="compare-head"><span>✕ Broken Spread</span><span>${s.title}</span></div><div class="svg-box"><svg viewBox="0 0 320 114">${s.bad}</svg></div></div>
        <div class="compare-card fix"><div class="compare-head"><span>✓ Fixed Spread</span><span>Applied Prescription</span></div><div class="svg-box"><svg viewBox="0 0 320 114">${s.good}</svg></div></div>`;
      document.getElementById('ch18-cap').innerHTML = `<strong>Root Cause:</strong> ${s.cause}<br/><strong>Instant Next-Page Fix:</strong> ${s.fix}`;
    };
    renderSyms();

    // Persisted Graduation Checklist
    const renderGrad = () => {
      const done = getState().gradChecks;
      document.getElementById('ch18-grad-list').innerHTML = GRAD_ITEMS.map((item, i) => {
        const on = done.includes(i);
        return `<button class="check-btn ch18-gbtn ${on?'done':''}" data-i="${i}"><span class="chk-box">${on?'✓':''}</span><span class="chk-txt" style="font-size:14px;">${item}</span></button>`;
      }).join('');
      document.querySelectorAll('.ch18-gbtn').forEach(b => b.addEventListener('click', () => { toggleGradCheck(Number(b.dataset.i)); renderGrad(); }));
    };
    renderGrad();
    initQuiz('ch18', CH18_QUIZ, onStateChange);
  }
};
