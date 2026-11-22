/* =========================================================================
   PART I: FOUNDATIONS, COLOR & HARDWARE (CHAPTERS 1 & 2)
   ========================================================================= */
import { gt } from '../data/glossary.js';
import { renderQuizHTML, initQuiz } from '../labs/quizEngine.js';
import { DEEP_CONTENT_1 } from '../data/deepContent1.js';
import { MASTERCLASS_A } from '../data/masterclassA.js';
import { HERO_ISO_PRISM } from '../data/metaphors.js';

const CH1_QUIZ = [
  {
    q: 'Why does Dual-Coding Theory make dot-grid visual notes easier to recall than wall-to-wall linear prose?',
    opts: [
      'It activates both verbal and visual-spatial memory channels simultaneously',
      'It forces you to write down twice as many verbatim words',
      'Neon highlighter ink stimulates faster reading speed',
      'It eliminates the need for text labels completely'
    ],
    ans: 0,
    why: 'Paivio\'s Dual-Coding Theory shows that pairing concise text with spatial landmarks (boxes, arrows, consistent positions) creates two independent retrieval hooks.'
  },
  {
    q: 'Which Gestalt principle explains why leaving 3 blank dot rows between sections separates ideas better than drawing a heavy black border?',
    opts: ['Similarity', 'Proximity', 'Closure', 'Symmetry'],
    ans: 1,
    why: 'Proximity dictates that objects placed close together are perceived as a group; generous whitespace (3–4 dot rows) creates clean cognitive boundaries automatically.'
  },
  {
    q: 'In the Light Cyberpunk Sketchbook system, what is the disciplined per-spread color limit?',
    opts: [
      'All 7 colors used equally on every page',
      '1 neutral structural ink + 2 functional accent markers + 1 Cool Grey shadow pen',
      'Only monochrome black ink with zero color',
      '5 pastel highlighters rotated by paragraph'
    ],
    ans: 1,
    why: 'Restricting each spread to 1 structural ink + 2 semantic accents + Cool Grey protects visual hierarchy (60% paper / 30% ink / 10% accent).'
  }
];

const CH2_QUIZ = [
  {
    q: 'You write an outline in a standard water-soluble gel pen and immediately highlight over it with a Zebra Mildliner. What happens?',
    opts: [
      'Zero smudging because Mildliners are gentle',
      'The water-based marker re-dissolves the gel ink and smears black streaks across the page',
      'The paper turns waterproof',
      'The highlighter ink turns invisible'
    ],
    ans: 1,
    why: 'Gel inks remain water-soluble even after drying. Either outline with waterproof archival pigment (Micron/Uni Pin) OR highlight first and write with gel second.'
  },
  {
    q: 'Why should alcohol markers (like Copics) generally be avoided in bound A5 dot-grid notebooks—even at 160gsm?',
    opts: [
      'They fade within 24 hours',
      'Alcohol dissolves paper sizing and bleeds straight through onto the next sheet',
      'They cannot draw straight lines',
      'They only come in dark colors'
    ],
    ans: 1,
    why: 'Alcohol solvent penetrates cellulose sizing aggressively. Reserve bound notebooks for water-based markers (Mildliner, Tombow ABT) and use 120–160gsm paper.'
  },
  {
    q: 'What is the purpose of the 05 (0.45mm) fineliner in our 3-nib system (01 / 03 / 05)?',
    opts: [
      'Tiny tabular numbers and chart ticks',
      'Everyday body prose',
      'Bold outer silhouettes, Cyber Card frames, and Ambient Occlusion contact creases',
      'Faint background legacy diagrams'
    ],
    ans: 2,
    why: '05 anchors bold silhouettes and contact shadows, 03 carries everyday body prose, and 01 handles fine hatching, ticks, and hairline background layers.'
  }
];

export const PART1_RENDERERS = {
  // -------------------------------------------------------------------------
  // CHAPTER 1
  // -------------------------------------------------------------------------
  ch1: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill">Chapter 01 • ${ch.time}</span><span class="pill amber">AI/Tech • Tax • Deutsch</span></div>
      <h1 class="script"><span class="hl-cyan">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Explain how ${gt('dual-coding')} and spatial landmarks double long-term recall compared to linear bullet lists.</li>
        <li>Apply four ${gt('gestalt')} (Proximity, Alignment, Figure-Ground, Similarity) directly onto a 5mm dot grid.</li>
        <li>Deploy ${gt('semantic-color')} across three real domains: AI pipelines, EU tax governance, and German grammatical gender (<code>der / die / das</code>).</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>1.1 Why Visual Notes Work: Dual-Coding &amp; Spatial Memory</h3>
      <p>
        In 1971, cognitive psychologist Allan Paivio formulated ${gt('dual-coding')}, proving that human working memory operates along two distinct, parallel tracks: a <em>verbal-auditory track</em> (words, statutes, numbers, vocabulary) and a <em>visual-spatial track</em> (containers, arrows, relative geometry, color washes). Standard top-to-bottom linear note-taking hammers the verbal track while leaving 50% of your cortex idle.
      </p>
      <p>
        When you compress a complex idea into a short label inside a deliberately positioned frame, you forge <strong>two independent retrieval keys</strong>. Even a month later, before you consciously recall EU VAT Directive Article 58 or why a German preposition triggers Dativ, your spatial memory retrieves <em>"that rule lived inside the Magenta dashed zone at the top-right of Page 14."</em> That spatial anchor pulls the verbal details right back into focus.
      </p>
    </div>

    ${HERO_ISO_PRISM}

    <div class="prose-wrap">
      <h3>1.2 The Four Gestalt Principles on a 5mm Dot Grid</h3>
      <p>
        Your eye never reads a page pixel by pixel; before conscious reading even starts, your visual cortex applies ${gt('gestalt')} to group marks into meaning. Mastering four physical rules eliminates 90% of amateur notebook clutter:
      </p>
      <ul>
        <li><strong>Proximity (Spacing Beats Borders):</strong> Lines placed 1 dot apart read as one tightly coupled idea; blocks separated by 3–4 empty dot rows read as distinct modules. Whitespace is cleaner and stronger than drawing heavy dividing bars everywhere.</li>
        <li><strong>Alignment (Invisible Vertical Rails):</strong> Snap every card left-edge, bullet indent, and tabular ledger column to the exact same dot column. Unaligned indents force your eye to hunt horizontally on every line, causing silent reading fatigue.</li>
        <li><strong>${gt('figure-ground')} (60 / 30 / 10 Ratio):</strong> Keep ~60% of the page untouched bright paper (the quiet <em>ground</em>), ~30% crisp dark Indigo structural ink (the <em>figure</em>), and ~10% luminous neon washes (the high-signal alerts).</li>
        <li><strong>Similarity (Consistent Encoding):</strong> When every risk warning uses Magenta dashed borders and every approved state uses Acid Mint across your whole notebook, your brain decodes status in under 200 milliseconds without re-reading captions.</li>
      </ul>
    </div>

    <div class="mental-model">
      <span class="callout-label" style="color:var(--cyan);">Mental Model // Semantic Color vs. Decorative Rainbows</span>
      <p>
        Color in a technical or language notebook is <strong>data encoding, never wallpaper</strong>. Highlighting six sentences in six cheerful pastel shades actually <em>destroys</em> hierarchy because every line competes at the exact same perceptual volume. Lock each spread to <strong>1 neutral structural ink + 2 functional accent markers + 1 Cool Grey shadow pen</strong> (the only exception is a 3-color German gender matrix where Cyan/Magenta/Mint map strictly to <code>der/die/das</code>).
      </p>
    </div>

    <!-- Mistake vs Pro Fix -->
    <div class="compare-grid">
      <div class="compare-card mistake">
        <div class="compare-head"><span>✕ Common Mistake</span><span>Decorative Rainbow Highlighting</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 360 128">
            <rect x="16" y="12" width="328" height="22" rx="3" fill="#F59E0B" fill-opacity="0.45"/><text x="24" y="28" font-family="Patrick Hand, cursive" font-size="14.5">Every sentence highlighted in a random neon bar</text>
            <rect x="16" y="40" width="328" height="22" rx="3" fill="#EC4899" fill-opacity="0.4"/><text x="24" y="56" font-family="Patrick Hand, cursive" font-size="14.5">Zero whitespace between topics or decisions</text>
            <rect x="16" y="68" width="328" height="22" rx="3" fill="#10B981" fill-opacity="0.4"/><text x="24" y="84" font-family="Patrick Hand, cursive" font-size="14.5">Nothing stands out because EVERYTHING shouts</text>
            <text x="180" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">FIGURE-GROUND COLLAPSED → ZERO SCANNABILITY</text>
          </svg>
        </div>
      </div>
      <div class="compare-card fix">
        <div class="compare-head"><span>✓ Pro Fix</span><span>60/30/10 Semantic Discipline</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 360 128">
            <rect x="22" y="18" width="146" height="12" rx="3" fill="#0EA5E9" fill-opacity="0.32"/><text x="26" y="26" font-family="Patrick Hand, cursive" font-size="16" font-weight="700">EU VAT Fast-Path</text>
            <text x="26" y="54" font-family="Patrick Hand, cursive" font-size="14.5" fill="#252B48">• 80% routine lookups skip deep LLM</text>
            <rect x="22" y="68" width="314" height="30" rx="5" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.6" stroke-dasharray="5 3"/>
            <text x="32" y="88" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">! HITL GATE: Human signs before MCP write</text>
            <text x="180" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">60% PAPER • 30% INK • 10% HIGH-SIGNAL ACCENT</text>
          </svg>
        </div>
      </div>
    </div>

    <div class="prose-wrap"><h3>1.3 The 7-Color Light Cyberpunk Semantic System</h3></div>
    <div class="grid-4">
      ${[
        ['Deep Indigo', '#141836', 'Micron 05 Black/Blue-Black', 'All structural outlines, text & axes'],
        ['Electric Cyan', '#0EA5E9', 'Mildliner Cyan / Tombow 452', 'Active flows, routing, German der (Masc)'],
        ['Hot Magenta', '#EC4899', 'Mildliner Magenta / Tombow 725', 'Risks, HITL gates, German die (Fem)'],
        ['Ultraviolet', '#7C3AED', 'Mildliner Violet / Tombow 636', 'Drafting, open questions & verb brackets'],
        ['Acid Mint', '#10B981', 'Mildliner Green / Tombow 243', 'Approved writes, savings, German das (Neut)'],
        ['Cyber Amber', '#F59E0B', 'Mildliner Marigold / Tombow 025', 'Triggers, taped quotes & Plural/Verbs'],
        ['Cool Grey ★', '#94A3B8', 'Tombow N75 / Mildliner Gray', '3D drop shadows & bypassed cross-hatch']
      ].map(([n, hex, pen, use]) => `
        <div class="card">
          <div style="height:20px; border-radius:6px; background:${hex}; opacity:${hex==='#141836'?1:0.72}; border:1.5px solid #141836;"></div>
          <div class="card-h">${n} <span class="mono" style="font-size:10px; color:var(--ink-muted);">${hex}</span></div>
          <div class="mono" style="font-size:10.5px;">${pen}</div>
          <div class="card-p">${use}</div>
        </div>`).join('')}
    </div>

    <!-- Deutsch Domain Application Callout -->
    <div class="deutsch-box">
      <div class="callout-label" style="color:var(--amber-deep);">Deutsch Application // Semantic Gender &amp; Case Memory</div>
      <p style="font-size:15px;">
        Language learners lose months trying to memorize German noun genders by rote text repetition. Assign permanent semantic washes across your entire notebook: <strong>Electric Cyan = <code>der</code> (Masculine)</strong>, <strong>Hot Magenta = <code>die</code> (Feminine)</strong>, <strong>Acid Mint = <code>das</code> (Neuter)</strong>, and <strong>Cyber Amber = Plural / Verb</strong>. Write <em>der Steuerbescheid</em> (Cyan bar), <em>die Umsatzsteuer</em> (Magenta bar), <em>das Finanzamt</em> (Mint bar). Within two weeks, you remember the <em>color wash</em> before you consciously think about the article.
      </p>
    </div>

    <!-- INTERACTIVE LAB: SPREAD PALETTE & GESTALT SIMULATOR -->
    <div class="lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // Spread Palette &amp; Gestalt Simulator</span>
        <span class="pill violet">Toggle Domain Palette + Gestalt Alignment</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            <button class="seg-btn ch1-pal active" data-p="tax">AI + Tax (Cyan/Mag)</button>
            <button class="seg-btn ch1-pal" data-p="deutsch">Deutsch (der/die/das)</button>
            <button class="seg-btn ch1-pal" data-p="exec">Exec (Cyan/Amber)</button>
            <button class="seg-btn ch1-pal" data-p="audit">Audit (Mag/Mint)</button>
          </div>
          <label class="chk-lbl">
            <input id="ch1-gestalt" type="checkbox" checked />
            Gestalt Alignment &amp; 30% Whitespace ON
          </label>
        </div>
        <div class="svg-box"><svg id="ch1-svg" viewBox="0 0 780 220"></svg></div>
        <div id="ch1-cap" class="lab-cap"></div>
      </div>
    </div>

    ${DEEP_CONTENT_1.ch1}
    ${MASTERCLASS_A.ch1}

    ${renderQuizHTML('ch1', CH1_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (6 Minutes)</div>
      <p>
        Open to Page 1 of your physical 5mm dot-grid notebook. Write a compact 4-line <strong>Semantic Color Key</strong> in the upper-right margin (choosing either your Work Key or your Deutsch <code>der/die/das</code> Key). Sketch one 3-box diagram using ONLY that key + Cool Grey shadows, enforcing at least 30% untouched white paper.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 2
  // -------------------------------------------------------------------------
  ch2: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill">Chapter 02 • ${ch.time}</span></div>
      <h1 class="script"><span class="hl-amber">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Predict ${gt('ghosting')} vs. bleed-through from paper ${gt('gsm')} and cellulose surface sizing.</li>
        <li>Match ${gt('pigment-ink')} fineliners with water-based markers so lines never smear.</li>
        <li>Test pen/paper combinations in the interactive <strong>Ink × Paper Chemistry Lab</strong> and configure a tiered analog kit.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>2.1 Paper Physics: GSM, Sizing &amp; Bleed-Through</h3>
      <p>
        Paper is a pressed web of wood-pulp or cotton cellulose fibers coated with microscopic glue called <em>sizing</em>. Thin <strong>70–80gsm</strong> office paper has loose fibers and light sizing: liquid highlighter ink wicks straight through vertically (<strong>bleed-through</strong>) and spreads sideways (<strong>feathering</strong>), turning crisp 03 lines fuzzy.
      </p>
      <p>
        At <strong>120gsm</strong> (<em>Leuchtturm1917 Edition 120g</em>), the sheet stays thin enough to carry 200+ pages in a slim A5 hardcover while resisting almost all single-pass water-based marker washes. At <strong>160gsm</strong> (<em>Archer &amp; Olive</em>, <em>Dingbats* Pro</em>), the sheet feels like light watercolor stock—allowing 2–3 glazing coats with zero ghosting on the reverse side.
      </p>
      <p>
        <strong>Dot Spacing &amp; Contrast Matter Too:</strong> Stick to <strong>5mm dot grids</strong> printed in soft 15–20% cool grey. Dark black dots fight your handwriting; faint grey dots vanish as soon as you step back 30cm, leaving your diagrams floating cleanly in midair.
      </p>
    </div>

    <!-- Paper GSM Cross-Section SVG -->
    <div class="svg-box">
      <svg viewBox="0 0 820 190">
        <text x="410" y="22" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#141836">PAPER CROSS-SECTION: LIQUID INK ABSORPTION BY GSM WEIGHT</text>
        <g transform="translate(26,42)">
          <rect x="0" y="34" width="170" height="22" rx="3" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          <path d="M 45 34 Q 85 78 125 34 Z" fill="#EC4899" fill-opacity="0.55"/>
          <text x="85" y="22" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#BE185D">70gsm (Office)</text>
          <text x="85" y="96" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#BE185D">Ink punches right through</text>
          <text x="85" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">SEVERE BLEED</text>
        </g>
        <g transform="translate(226,42)">
          <rect x="0" y="30" width="170" height="30" rx="3" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          <path d="M 45 30 Q 85 60 125 30 Z" fill="#F59E0B" fill-opacity="0.5"/>
          <text x="85" y="20" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#B45309">100gsm (Mid)</text>
          <text x="85" y="96" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#B45309">Visible shadow on back</text>
          <text x="85" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">MODERATE GHOSTING</text>
        </g>
        <g transform="translate(426,42)">
          <rect x="0" y="24" width="170" height="42" rx="3" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
          <path d="M 45 24 Q 85 48 125 24 Z" fill="#0EA5E9" fill-opacity="0.45"/>
          <text x="85" y="16" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0EA5E9">120gsm ★ Sweet Spot</text>
          <text x="85" y="96" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#0EA5E9">Clean back, slim book</text>
          <text x="85" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0EA5E9">DAILY WORKHORSE</text>
        </g>
        <g transform="translate(626,42)">
          <rect x="0" y="18" width="170" height="54" rx="3" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
          <path d="M 45 18 Q 85 38 125 18 Z" fill="#10B981" fill-opacity="0.48"/>
          <text x="85" y="12" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">160gsm (Heavy)</text>
          <text x="85" y="96" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#047857">Handles multi-pass glaze</text>
          <text x="85" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">ZERO GHOSTING</text>
        </g>
      </svg>
    </div>

    <div class="prose-wrap">
      <h3>2.2 Ink Chemistry &amp; Nib Width Engineering</h3>
      <p>
        Every ruined, muddy highlight happens because two ink chemistries react on the page:
      </p>
      <ul>
        <li><strong>${gt('pigment-ink')} (Sakura Pigma Micron, Uni Pin):</strong> Microscopic insoluble carbon particles lock into paper fibers in ~5 seconds. You can sweep water-based highlighters directly over your lines with zero smearing.</li>
        <li><strong>Water-Soluble Gel Ink (Muji, Pilot G2, EnerGel):</strong> Feels buttery-smooth for fast writing, <em>but</em> re-dissolves instantly under a water-based marker. Golden workaround: <strong>Highlight first → write gel second</strong> (Highlighter-Drop method!).</li>
        <li><strong>Water-Based Markers (Zebra Mildliner, Tombow ABT Dual Brush):</strong> Safe for bound 120–160gsm dot grids, translucent for 3-value glazing, and odorless in meetings.</li>
        <li><strong>Alcohol Markers (Copic, Ohuhu):</strong> Brilliant on loose Bristol board, disastrous in bound notebooks—alcohol strips sizing and punches straight through to the next spread.</li>
      </ul>
    </div>

    <!-- Mistake vs Pro Fix -->
    <div class="compare-grid">
      <div class="compare-card mistake">
        <div class="compare-head"><span>✕ Common Mistake</span><span>Gel Pen + Immediate Highlight</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 360 105">
            <rect x="30" y="34" width="276" height="22" rx="4" fill="#0EA5E9" fill-opacity="0.34"/>
            <path d="M 38 45 H 294" stroke="#141836" stroke-width="11" stroke-opacity="0.22" stroke-linecap="round"/>
            <text x="38" y="51" font-family="Patrick Hand, cursive" font-size="21" fill="#141836">Umsatzsteuer → SMUDGE</text>
            <text x="180" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">WATER RE-DISSOLVES GEL PIGMENT</text>
          </svg>
        </div>
      </div>
      <div class="compare-card fix">
        <div class="compare-head"><span>✓ Pro Fix</span><span>Waterproof Pigment OR Stripe First</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 360 105">
            <rect x="30" y="42" width="276" height="16" rx="4" fill="#0EA5E9" fill-opacity="0.32"/>
            <text x="38" y="51" font-family="Patrick Hand, cursive" font-size="21" font-weight="700" fill="#141836">Umsatzsteuer → RAZOR CRISP</text>
            <text x="180" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">MICRON 03 + 5s DRY (OR STRIPE FIRST)</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- NEW INTERACTIVE LAB: INK × PAPER CHEMISTRY SIMULATOR -->
    <div class="lab magenta-accent" id="ch2-chem-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // Ink × Paper Chemistry Simulator</span>
        <span class="pill magenta">Test Smear &amp; Reverse-Side Bleed</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group" aria-label="Paper GSM">
            <button class="seg-btn ch2-gsm" data-v="70">70g Office</button>
            <button class="seg-btn ch2-gsm" data-v="100">100g Mid</button>
            <button class="seg-btn ch2-gsm active" data-v="120">120g Sweet</button>
            <button class="seg-btn ch2-gsm" data-v="160">160g Heavy</button>
          </div>
          <div class="segmented" role="group" aria-label="Outline Pen">
            <button class="seg-btn ch2-pen active" data-v="pigment">Pigment (Micron)</button>
            <button class="seg-btn ch2-pen" data-v="gel">Gel (G2/Muji)</button>
            <button class="seg-btn ch2-pen" data-v="fountain">Fountain (Dye)</button>
          </div>
          <div class="segmented" role="group" aria-label="Marker">
            <button class="seg-btn ch2-mrk active" data-v="water">Water Marker</button>
            <button class="seg-btn ch2-mrk" data-v="alcohol">Alcohol (Copic)</button>
          </div>
        </div>
        <div class="svg-box"><svg id="ch2-chem-svg" viewBox="0 0 760 195"></svg></div>
        <div id="ch2-chem-cap" class="lab-cap"></div>
      </div>
    </div>

    <!-- INTERACTIVE TOOL: 3-TIER STATIONERY KIT CONFIGURATOR -->
    <div class="lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Tool // 3-Tier Stationery Kit Configurator</span>
        <div class="segmented" role="group">
          <button class="seg-btn ch2-kit" data-k="budget">Budget (~€25)</button>
          <button class="seg-btn ch2-kit active" data-k="balanced">Balanced (~€47) ★</button>
          <button class="seg-btn ch2-kit" data-k="pro">Pro Studio (~€95)</button>
        </div>
      </div>
      <div class="lab-body">
        <div id="ch2-kit-box" class="receipt"></div>
      </div>
    </div>

    ${DEEP_CONTENT_1.ch2}
    ${MASTERCLASS_A.ch2}

    ${renderQuizHTML('ch2', CH2_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (5 Minutes)</div>
      <p>
        Flip to the <strong>very last page</strong> of your physical notebook and title it <code>BACK-PAGE PEN &amp; BLEED TEST</code>. Draw a 3×1 dot box with every outline pen you own, wait 5 seconds, swipe each highlighter over half the box, then flip the leaf to grade ghosting/bleed from 1–5.
      </p>
    </div>
  `
};

export const PART1_INITS = {
  ch1: (onStateChange) => {
    let ch1Pal = 'tax';
    const PALS = {
      tax:     ['#0EA5E9', '#EC4899', '#BE185D', 'AI Tax Orchestration', 'TRIAGE 0.2s', 'HITL GATE', '-97% COST'],
      deutsch: ['#0EA5E9', '#EC4899', '#BE185D', 'Deutsch: der / die / das', 'der Bescheid', 'die Frist', 'das Gesetz'],
      exec:    ['#0EA5E9', '#F59E0B', '#B45309', 'Q4 Executive Strategy', 'PILOT Q1', 'DECISION', '3 ACTIONS'],
      audit:   ['#EC4899', '#10B981', '#047857', 'Compliance Audit Sign-Off', 'RISK CHECK', 'SIGNED ✓', 'ZERO LEAK']
    };

    function render() {
      const [c1, c2, c2d, title, n1, n2, metric] = PALS[ch1Pal];
      const tidy = document.getElementById('ch1-gestalt').checked;
      const svg = document.getElementById('ch1-svg');
      if (tidy) {
        svg.innerHTML = `
          <rect x="16" y="12" width="364" height="196" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
          <rect x="400" y="12" width="364" height="196" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
          <line x1="390" y1="12" x2="390" y2="208" stroke="#94A3B8" stroke-width="2" stroke-dasharray="5 4"/>
          <rect x="36" y="34" width="236" height="14" rx="3" fill="${c1}" fill-opacity="0.3"/>
          <text x="42" y="42" font-family="Patrick Hand, cursive" font-size="19" font-weight="700" fill="#141836">${title}</text>
          <polygon points="118,76 174,98 118,120 62,98" fill="${c1}" fill-opacity="0.25" stroke="#141836" stroke-width="2"/>
          <text x="118" y="102" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">${n1}</text>
          <line x1="176" y1="98" x2="224" y2="98" stroke="#141836" stroke-width="2"/>
          <polygon points="280,76 336,98 280,120 224,98" fill="${c2}" fill-opacity="0.22" stroke="#141836" stroke-width="2"/>
          <text x="280" y="102" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">${n2}</text>
          <rect x="36" y="144" width="320" height="42" rx="7" fill="#F4F6FC" stroke="#141836" stroke-width="1.6"/>
          <line x1="58" y1="165" x2="238" y2="165" stroke="${ch1Pal==='deutsch'?'#10B981':c1}" stroke-width="6" stroke-linecap="round"/>
          <circle cx="58" cy="165" r="5.5" fill="#141836"/><circle cx="238" cy="165" r="6" fill="#FFF" stroke="${c2}" stroke-width="2.6"/>
          <text x="256" y="169" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">${metric}</text>
          <path d="M 432 98 H 742 V 36" fill="none" stroke="#94A3B8" stroke-width="7" opacity="0.6"/>
          <rect x="424" y="28" width="312" height="64" rx="7" fill="#FFF" stroke="#141836" stroke-width="2"/>
          <text x="438" y="54" font-family="Patrick Hand, cursive" font-size="16" font-weight="700">• Aligned to 2-dot vertical rails</text>
          <text x="438" y="76" font-family="Patrick Hand, cursive" font-size="16" fill="#525B7A">• 60% paper / 30% ink / 10% semantic wash</text>
          <rect x="424" y="114" width="312" height="72" rx="8" fill="${c2}" fill-opacity="0.1" stroke="${c2}" stroke-width="2" stroke-dasharray="6 4"/>
          <text x="440" y="140" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="${c2d}">SEMANTIC CALLOUT ZONE</text>
          <text x="440" y="164" font-family="Patrick Hand, cursive" font-size="15.5">Dual-coding locks concept + page position together.</text>`;
        document.getElementById('ch1-cap').innerHTML = `<strong>Gestalt Alignment ON (${title}):</strong> Crisp 2-dot margins, aligned cards, and restrained semantic encoding let your eye scan the spread in under 1 second.`;
      } else {
        svg.innerHTML = `
          <rect x="16" y="12" width="364" height="196" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
          <rect x="400" y="12" width="364" height="196" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
          <rect x="20" y="18" width="352" height="24" fill="#F59E0B" opacity="0.35"/><text x="26" y="35" font-family="Patrick Hand, cursive" font-size="17">CRAMPED EDGE-TO-EDGE NOTES NO MARGIN</text>
          <rect x="30" y="50" width="160" height="60" transform="rotate(-4 110 80)" fill="#EC4899" fill-opacity="0.22" stroke="#141836"/>
          <rect x="170" y="64" width="190" height="70" transform="rotate(3 260 99)" fill="#10B981" fill-opacity="0.22" stroke="#141836"/>
          <text x="40" y="155" font-family="Patrick Hand, cursive" font-size="15" fill="#BE185D">Random rainbow colors + zero alignment rails = cognitive overload.</text>
          <text x="414" y="44" font-family="Patrick Hand, cursive" font-size="15">Wall of ungrouped text crammed against the paper</text>
          <text x="424" y="68" font-family="Patrick Hand, cursive" font-size="15">with inconsistent indents and no figure-ground</text>
          <text x="408" y="92" font-family="Patrick Hand, cursive" font-size="15">contrast, forcing your brain to re-read every line</text>
          <text x="430" y="116" font-family="Patrick Hand, cursive" font-size="15">just to locate one single rule or German gender.</text>`;
        document.getElementById('ch1-cap').innerHTML = `<strong>Gestalt Alignment OFF:</strong> Notice how removing margins, alignment rails, and semantic restraint immediately makes the exact same facts exhausting to parse.`;
      }
    }

    document.querySelectorAll('.ch1-pal').forEach(btn => {
      btn.addEventListener('click', () => {
        ch1Pal = btn.dataset.p;
        document.querySelectorAll('.ch1-pal').forEach(b => b.classList.toggle('active', b === btn));
        render();
      });
    });
    document.getElementById('ch1-gestalt').addEventListener('change', render);
    render();
    initQuiz('ch1', CH1_QUIZ, onStateChange);
  },

  ch2: (onStateChange) => {
    let gsm = 120, pen = 'pigment', mrk = 'water';

    function renderChem() {
      const smears = (pen === 'gel' || pen === 'fountain') && mrk === 'water';
      const bleeds = mrk === 'alcohol' || gsm <= 70;
      const ghosts = !bleeds && (gsm === 100 || (pen === 'fountain' && gsm <= 120));
      const status = (smears || bleeds) ? 'FAIL — AVOID IN BOUND NOTEBOOKS' : ghosts ? 'CAUTION — MILD GHOSTING ON BACK' : 'OPTIMAL — STUDIO READY ★';
      const stCol = (smears || bleeds) ? '#BE185D' : ghosts ? '#B45309' : '#047857';

      document.getElementById('ch2-chem-svg').innerHTML = `
        <!-- Front Face -->
        <rect x="22" y="16" width="346" height="160" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <text x="38" y="38" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">FRONT PAGE (${gsm}gsm • ${pen.toUpperCase()} + ${mrk.toUpperCase()})</text>
        <rect x="44" y="66" width="290" height="32" rx="4" fill="${mrk==='alcohol'?'#EC4899':'#0EA5E9'}" fill-opacity="${mrk==='alcohol'?0.48:0.3}"/>
        ${smears ? `<rect x="46" y="72" width="280" height="18" rx="4" fill="#141836" fill-opacity="0.28"/>` : ''}
        <text x="54" y="88" font-family="Patrick Hand, cursive" font-size="22" font-weight="700" fill="#141836" opacity="${smears?0.85:1}">Art. 58 EU VAT • der Bescheid</text>
        <text x="38" y="148" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="${smears?'#BE185D':'#047857'}">SMEAR TEST: ${smears ? '✕ DARK SMEAR TRAIL!' : '✓ ZERO SMEARING'}</text>

        <!-- Reverse Side of Sheet -->
        <rect x="392" y="16" width="346" height="160" rx="8" fill="#FAFBFD" stroke="#141836" stroke-width="2"/>
        <text x="408" y="38" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#525B7A">REVERSE SIDE OF SHEET (BLEED / GHOST CHECK)</text>
        ${bleeds ? `
          <rect x="418" y="62" width="288" height="40" rx="6" fill="${mrk==='alcohol'?'#EC4899':'#0EA5E9'}" fill-opacity="0.62"/>
          <path d="M 432 82 H 690" stroke="#141836" stroke-width="8" opacity="0.38" stroke-dasharray="14 6"/>
          <text x="408" y="148" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">BACK CHECK: ✕ SEVERE BLEED-THROUGH!</text>
        ` : ghosts ? `
          <rect x="424" y="68" width="278" height="28" rx="4" fill="#0EA5E9" fill-opacity="0.14"/>
          <text x="434" y="88" font-family="Patrick Hand, cursive" font-size="20" fill="#141836" opacity="0.2">Art. 58 EU VAT • der Bescheid</text>
          <text x="408" y="148" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#B45309">BACK CHECK: ⚠ FAINT GHOSTING VISIBLE</text>
        ` : `
          <text x="565" y="92" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="17" fill="#047857">Crisp, untouched reverse side!</text>
          <text x="408" y="148" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">BACK CHECK: ✓ CLEAN REVERSE LEAF</text>
        `}
      `;

      let advice = '';
      if (mrk === 'alcohol') advice = 'Alcohol dissolves paper sizing and punches through even 160gsm sheets. Switch to water-based Zebra Mildliners or Tombow ABT.';
      else if (smears) advice = `Water-based markers re-dissolve ${pen} ink. Either switch outline pens to waterproof archival pigment (Micron 03/05) OR highlight first and write second.`;
      else if (bleeds) advice = '70gsm office sheets are too thin for liquid marker washes. Upgrade to 120gsm (daily workhorse) or 160gsm (heavy glazing).';
      else if (ghosts) advice = 'Usable for quick single-pass notes, though light shadowing shows through on the back. Step up to 120–160gsm for clean double-sided spreads.';
      else advice = 'Ideal Light Cyberpunk pairing: waterproof pigment bonds in 5 seconds, water-based marker glides cleanly over it, and heavy paper protects the reverse side.';

      document.getElementById('ch2-chem-cap').innerHTML = `<strong style="color:${stCol};">${status}</strong> — ${advice}`;
    }

    document.querySelectorAll('.ch2-gsm').forEach(b => b.addEventListener('click', () => {
      gsm = Number(b.dataset.v);
      document.querySelectorAll('.ch2-gsm').forEach(x => x.classList.toggle('active', x === b));
      renderChem();
    }));
    document.querySelectorAll('.ch2-pen').forEach(b => b.addEventListener('click', () => {
      pen = b.dataset.v;
      document.querySelectorAll('.ch2-pen').forEach(x => x.classList.toggle('active', x === b));
      renderChem();
    }));
    document.querySelectorAll('.ch2-mrk').forEach(b => b.addEventListener('click', () => {
      mrk = b.dataset.v;
      document.querySelectorAll('.ch2-mrk').forEach(x => x.classList.toggle('active', x === b));
      renderChem();
    }));
    renderChem();

    // 3-Tier Kit Configurator
    const KITS = {
      budget:   ['Budget Starter Kit (~€25)', [['Rhodia or Muji A5 Dot-Grid (90–100g)', '€11.00'], ['Sakura Pigma Micron 03 + 05', '€6.00'], ['Zebra Mildliner Cyan + Mild Gray', '€5.50'], ['15cm Clear Acrylic Ruler', '€2.50']], '~€25.00'],
      balanced: ['Balanced Field Kit (~€47) — Recommended ★', [['Leuchtturm1917 Edition 120g A5 Dot-Grid', '€22.00'], ['Sakura Pigma Micron 3-Pack (01, 03, 05)', '€9.00'], ['Zebra Mildliner 5-Pack (Cyan, Mag, Mint, Amber, Gray)', '€10.00'], ['Tombow Fudenosuke Hard-Tip Brush Pen', '€3.50'], ['15cm Clear Acrylic Ruler', '€2.50']], '~€47.00'],
      pro:      ['Pro Analog Studio Kit (~€95)', [['Archer & Olive 160gsm A5 Dot-Grid', '€34.00'], ['Sakura Pigma Micron 6-Pack + Gelly Roll 08 White', '€19.00'], ['Tombow ABT Dual Brush 6-Pack (incl. N75 Gray)', '€24.00'], ['Tombow Fudenosuke Hard + Soft Twin Pack', '€7.50'], ['Midori Brass Stencil + Helix Circle Template + Cream Tape', '€10.50']], '~€95.00']
    };
    function setKit(k) {
      const [title, rows, tot] = KITS[k];
      document.querySelectorAll('.ch2-kit').forEach(b => b.classList.toggle('active', b.dataset.k === k));
      document.getElementById('ch2-kit-box').innerHTML = `
        <div class="mono" style="font-size:12px; font-weight:700; color:var(--ink);">${title}</div>
        ${rows.map(([n, p]) => `<div class="r-row"><span>${n}</span><span class="mono" style="font-weight:600;">${p}</span></div>`).join('')}
        <div class="r-tot"><span>ESTIMATED TOTAL</span><span>${tot}</span></div>`;
    }
    document.querySelectorAll('.ch2-kit').forEach(b => b.addEventListener('click', () => setKit(b.dataset.k)));
    setKit('balanced');

    initQuiz('ch2', CH2_QUIZ, onStateChange);
  }
};
