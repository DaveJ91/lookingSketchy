/* =========================================================================
   PART IV: NON-ARTIST'S ILLUSTRATION, SHADOW & STORYTELLING (CHAPTERS 10–13)
   ========================================================================= */
import { gt } from '../data/glossary.js';
import { ICONS_24 } from '../data/icons.js';
import { getState, toggleBootcampDay, clearBootcampDays } from '../state.js';
import { renderQuizHTML, initQuiz } from '../labs/quizEngine.js';
import { renderSketchpadHTML, initSketchpad } from '../labs/sketchpad.js';
import { renderIsoGalleryHTML, initIsoGallery } from '../labs/isoGallery.js';
import { renderMetaphorsLabHTML, initMetaphorsLab } from '../data/metaphors.js';
import { DEEP_CONTENT_2 } from '../data/deepContent2.js';
import { DEEP_CONTENT_3 } from '../data/deepContent3.js';
import { MASTERCLASS_B } from '../data/masterclassB.js';

const CH10_QUIZ = [
  {
    q: 'What happens to a cylinder\'s circular rim as it moves further BELOW your eye level (horizon line)?',
    opts: [
      'It flattens into a razor-thin horizontal line',
      'It opens up wider into a rounder ellipse (larger vertical radius)',
      'It turns into a sharp diamond',
      'It disappears completely'
    ],
    ans: 1,
    why: 'That is Ellipse Foreshortening: rims near eye level flatten toward a line, while rims further away (like the bottom of a mug sitting on a desk) curve noticeably rounder.'
  },
  {
    q: 'When drawing a "2-Over, 1-Up" isometric cube on a 5mm dot grid, what angle must ALL vertical wall edges stay locked to?',
    opts: ['30° right tilt', '45° diagonal', 'Strictly 90° straight up-and-down along vertical dot columns', 'Tilted toward a center vanishing point'],
    ans: 2,
    why: 'Only the top/bottom diagonal edges follow the 2-over, 1-up step. Allowing vertical corners to lean off 90° causes "melting/warped" isometrics.'
  }
];

const CH11_QUIZ = [
  {
    q: 'What is the #1 fastest trick for non-artists to stop 3D drawings from looking like they are floating awkwardly in space?',
    opts: [
      'Drawing a thick black frame around the whole page',
      'Adding an Ambient Occlusion (AO) dark 05 contact crease directly under the resting base',
      'Using 4 different neon highlighters on the cube',
      'Drawing every interior line with a bold 05 pen'
    ],
    ans: 1,
    why: 'Almost zero light enters the tight crevice where an object physically touches a table. A dark 05 contact crease immediately glues the form to the ground with physical weight.'
  },
  {
    q: 'In the 3-Weight Line Hierarchy (05 / 03 / 01), where does the boldest 05 nib go?',
    opts: [
      'Fine surface cross-hatching',
      'Tiny tabular footnotes',
      'The outer silhouette perimeter and Ambient Occlusion contact creases',
      'Dashed background context objects'
    ],
    ans: 2,
    why: 'Bold 05 silhouettes separate the object cleanly from the background, 03 defines interior edges, and 01 handles delicate hatching and textures.'
  }
];

const CH12_QUIZ = [
  {
    q: 'Why do Bean-Body People outperform detailed human anatomy or stick figures in visual notes?',
    opts: [
      'They take 4 seconds to draw, carry clear posture/emotion via head tilt & arms, and never trigger perfectionism',
      'They require a brass stencil to draw',
      'They look photorealistic',
      'They cannot hold props or speech bubbles'
    ],
    ans: 0,
    why: 'A soft rounded torso + floating circle head + 2 gesture arms immediately reads as human emotion without bogging you down in facial proportions.'
  },
  {
    q: 'How many strokes should a reliable "10-Second Icon" in your visual vocabulary take?',
    opts: ['15–20 fine lines', '3–4 deliberate geometric strokes', '1 continuous scribble', 'At least 8 shaded planes'],
    ans: 1,
    why: 'Keeping every core icon to 3–4 simple strokes guarantees you can draw them effortlessly mid-meeting or while studying German vocabulary.'
  }
];

const CH13_QUIZ = [
  {
    q: 'What is the ideal sequence of a 5-Beat Executive Narrative Spread?',
    opts: [
      'Random facts → Appendix → Title → Conclusion',
      'Hook (Context) → Tension (Problem/Risk) → Mechanism (How it Works) → Proof (Analog Chart) → Decision/Action',
      'Only a dense table with zero diagrams',
      'Start with the budget receipt and skip the problem statement'
    ],
    ans: 1,
    why: 'Executives and clients act fastest when a visual spread walks smoothly from shared context and tension through the mechanism and quantitative proof into a boxed Decision.'
  },
  {
    q: 'Why are 3-panel illustrated mini-scenes especially powerful for German language learning?',
    opts: [
      'They eliminate all grammar rules',
      'Tying a German dialogue phrase to a concrete spatial scene (e.g., Beim Finanzamt / Im Meeting) activates episodic + visual memory together',
      'They replace speaking practice completely',
      'German has only 3 verb tenses'
    ],
    ans: 1,
    why: 'Episodic context (who is speaking, what prop they hold, emotional tone) turns abstract flashcards into vivid situational triggers you recall effortlessly in real conversation.'
  }
];

const BOOT_DAYS = [
  'Day 1: Back-page Pen Test & 2-dot outer margins',
  'Day 2: Forearm straight-line pulls & locked 60% x-height',
  'Day 3: Architect\'s Print A–Z & Tabular numbers (Ø)',
  'Day 4: Faux Calligraphy headers & Highlighter-Drop',
  'Day 5: Cyber Cards, Taped Slips & Dashed Zones',
  'Day 6: Stop-Short & Bridge + Chamfered 45° corners',
  'Day 7: 5 Geometric Primitives construction sheet',
  'Day 8: 2-Over, 1-Up isometric platforms & cubes',
  'Day 9: Cylinder ellipses above & below eye level',
  'Day 10: 1-Point & 2-Point Perspective boxes',
  'Day 11: 10 o\'Clock Sun & 3-Value marker glazing',
  'Day 12: Ambient Occlusion contact creases & 3-weight lines',
  'Day 13: 12 Icons, 6 Bean-Body people & Dumbbell Chart',
  'Day 14: Capstone Two-Pass Illustrated Split-Screen Spread'
];

// Timer module state (cleaned up automatically when navigating away)
let ch12TimerSecs = 600;
let ch12TimerId = null;
export function stopCh12Timer() {
  if (ch12TimerId) { clearInterval(ch12TimerId); ch12TimerId = null; }
}

export const PART4_RENDERERS = {
  // -------------------------------------------------------------------------
  // CHAPTER 10: BREAKING SYMBOL DRAWING — PRIMITIVES, 3D EXTRUSION & PERSPECTIVE
  // -------------------------------------------------------------------------
  ch10: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill mint">${part.title}</span><span class="pill">Chapter 10 • ${ch.time}</span></div>
      <h1 class="script"><span class="hl-cyan">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Replace flat 2D ${gt('symbol-drawing')} with 3D <strong>Form Construction</strong> using the 5 Geometric Primitives.</li>
        <li>Inspect everyday objects in the <strong>Form X-Ray Breakdown Lab</strong> and build ${gt('isometric')} platforms on 5mm dots.</li>
        <li>Master ${gt('foreshortening')}, parallel extrusion, 1PT/2PT perspective, and practice directly on the Isometric Sketchpad.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>10.1 Symbol Drawing vs. 3D Form Construction</h3>
      <p>
        Adults who say <em>"I still draw like a 7-year-old"</em> are experiencing ${gt('symbol-drawing')}: when asked to sketch a coffee mug, laptop, or server rack, the brain retrieves a flat 2D cartoon icon instead of a physical 3D volume. Industrial designers bypass symbol drawing completely by decomposing every real object into the <strong>5 Geometric Primitives</strong>: <em>Cube, Cylinder, Sphere, Cone, and Pyramid</em>. Once you can draw a believable box and cylinder from any angle, you can illustrate virtually any workspace, server architecture, or product scene.
      </p>
    </div>

    <!-- 5 Primitives Strip -->
    <div class="svg-box">
      <svg viewBox="0 0 840 135">
        <g transform="translate(20,10)"><polygon points="62,14 106,34 62,54 18,34" fill="#FFF" stroke="#141836" stroke-width="2"/><polygon points="18,34 62,54 62,96 18,76" fill="#E2E8F0" stroke="#141836" stroke-width="2"/><polygon points="106,34 62,54 62,96 106,76" fill="#94A3B8" stroke="#141836" stroke-width="2"/><text x="62" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">1. CUBE</text></g>
        <g transform="translate(186,10)"><path d="M 24 32 V 86 A 38 13 0 0 0 100 86 V 32" fill="#E2E8F0" stroke="#141836" stroke-width="2"/><ellipse cx="62" cy="32" rx="38" ry="13" fill="#FFF" stroke="#141836" stroke-width="2"/><text x="62" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">2. CYLINDER</text></g>
        <g transform="translate(352,10)"><circle cx="62" cy="56" r="38" fill="#FFF" stroke="#141836" stroke-width="2"/><path d="M 38 86 A 38 38 0 0 0 96 36 A 32 34 0 0 1 38 86 Z" fill="#94A3B8" fill-opacity="0.65"/><text x="62" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">3. SPHERE</text></g>
        <g transform="translate(518,10)"><path d="M 62 14 L 24 88 A 38 12 0 0 0 100 88 Z" fill="#E2E8F0" stroke="#141836" stroke-width="2"/><text x="62" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">4. CONE</text></g>
        <g transform="translate(684,10)"><polygon points="62,14 20,82 66,98" fill="#E2E8F0" stroke="#141836" stroke-width="2"/><polygon points="62,14 66,98 106,80" fill="#94A3B8" stroke="#141836" stroke-width="2"/><text x="62" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">5. PYRAMID</text></g>
      </svg>
    </div>

    <!-- NEW INTERACTIVE LAB: FORM X-RAY BREAKDOWN SLIDER -->
    <div class="lab mint-accent" id="ch10-xray-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab 1 // Form X-Ray Breakdown (Symbol → Primitive → 3D Form)</span>
        <span class="pill mint">Break Symbol Drawing Live</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            <button class="seg-btn ch10-obj active" data-o="mug">Coffee Mug</button>
            <button class="seg-btn ch10-obj" data-o="laptop">Laptop</button>
            <button class="seg-btn ch10-obj" data-o="server">AI Server Rack</button>
            <button class="seg-btn ch10-obj" data-o="binder">German Tax Ordner</button>
          </div>
          <div class="segmented" role="group">
            <button class="seg-btn ch10-xr" data-x="0">1. Flat Symbol ✕</button>
            <button class="seg-btn ch10-xr" data-x="1">2. Primitive Wireframe</button>
            <button class="seg-btn ch10-xr active" data-x="2">3. Shaded 3D Form ✓</button>
          </div>
        </div>
        <div class="svg-box"><svg id="ch10-xray-svg" viewBox="0 0 760 200"></svg></div>
        <div id="ch10-xray-cap" class="lab-cap"></div>
      </div>
    </div>

    <!-- LAB 2: 5-STEP 2-OVER 1-UP ISOMETRIC ENGINE -->
    <div class="lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab 2 // 5-Step "2-Over, 1-Up" Isometric Platform Engine</span>
        <div class="segmented" role="group">
          <button class="seg-btn ch10-iso active" data-s="all">Show All</button>
          <button class="seg-btn ch10-iso" data-s="1">1</button>
          <button class="seg-btn ch10-iso" data-s="2">2</button>
          <button class="seg-btn ch10-iso" data-s="3">3</button>
          <button class="seg-btn ch10-iso" data-s="4">4</button>
          <button class="seg-btn ch10-iso" data-s="5">5</button>
        </div>
      </div>
      <div class="lab-body">
        <div class="grid-5">
          <div class="iso-step" data-s="1"><span class="mono" style="font-size:10px; font-weight:700; color:var(--cyan);">01 // 2R, 1U</span><div class="svg-box"><svg viewBox="0 0 150 96"><polyline points="26,50 74,50 74,26" fill="none" stroke="#EC4899" stroke-width="1.4" stroke-dasharray="3 3"/><line x1="26" y1="50" x2="74" y2="26" stroke="#141836" stroke-width="2.4"/><circle cx="26" cy="50" r="3.5" fill="#EC4899"/><circle cx="74" cy="26" r="3.5" fill="#0EA5E9"/></svg></div></div>
          <div class="iso-step" data-s="2"><span class="mono" style="font-size:10px; font-weight:700; color:var(--cyan);">02 // 2R, 1D</span><div class="svg-box"><svg viewBox="0 0 150 96"><polyline points="26,50 74,26 122,50" fill="none" stroke="#141836" stroke-width="2.4"/></svg></div></div>
          <div class="iso-step" data-s="3"><span class="mono" style="font-size:10px; font-weight:700; color:var(--cyan);">03 // CLOSE</span><div class="svg-box"><svg viewBox="0 0 150 96"><polygon points="74,26 122,50 74,74 26,50" fill="#FFF" stroke="#141836" stroke-width="2.4"/></svg></div></div>
          <div class="iso-step" data-s="4"><span class="mono" style="font-size:10px; font-weight:700; color:var(--cyan);">04 // DROP 1</span><div class="svg-box"><svg viewBox="0 0 150 96"><polygon points="74,26 122,50 74,74 26,50" fill="#FFF" stroke="#141836" stroke-width="2"/><path d="M 26 50 V 68 L 74 92 L 122 68 V 50 M 74 74 V 92" fill="none" stroke="#141836" stroke-width="2"/></svg></div></div>
          <div class="iso-step" data-s="5"><span class="mono" style="font-size:10px; font-weight:700; color:var(--cyan);">05 // WASH</span><div class="svg-box"><svg viewBox="0 0 150 96"><polygon points="74,26 122,50 74,74 26,50" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="2"/><polygon points="26,50 74,74 74,92 26,68" fill="#E2E8F0" stroke="#141836" stroke-width="1.8"/><polygon points="122,50 74,74 74,92 122,68" fill="#94A3B8" fill-opacity="0.72" stroke="#141836" stroke-width="1.8"/></svg></div></div>
        </div>
      </div>
    </div>

    <!-- LAB 2B: 8-PIECE ISOMETRIC ILLUSTRATION STUDIO -->
    ${renderIsoGalleryHTML()}

    <!-- LAB 3: CYLINDER EYE-LEVEL & 3D EXTRUSION -->
    <div class="lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab 3 // Cylinder Eye-Level &amp; 3D Extrusion Lab</span>
        <div class="segmented" role="group">
          <button id="ch10-m-cyl" class="seg-btn active">Cylinder Eye-Level</button>
          <button id="ch10-m-ext" class="seg-btn">3D Extrusion Depth</button>
        </div>
      </div>
      <div class="lab-body">
        <div id="ch10-ctrl-cyl" class="lab-ctrl">
          <div class="slider-grp">
            <label for="ch10-eye">Cylinder vs. Horizon:</label>
            <input id="ch10-eye" type="range" min="-75" max="75" value="44" />
            <span id="ch10-eye-lbl" class="pill magenta">Below Horizon</span>
          </div>
          <span class="mono" style="font-size:11px; color:var(--ink-muted);">Rims flatten near eye level and open rounder further away!</span>
        </div>
        <div id="ch10-ctrl-ext" class="lab-ctrl" style="display:none;">
          <div class="slider-grp">
            <label for="ch10-dep">Extrusion Depth:</label>
            <input id="ch10-dep" type="range" min="0" max="40" value="22" />
            <span id="ch10-dep-lbl" class="pill cyan">22px</span>
          </div>
          <span class="mono" style="font-size:11px; color:var(--ink-muted);">Shift flat silhouette right &amp; down → connect corners</span>
        </div>
        <div class="svg-box"><svg id="ch10-l2-svg" viewBox="0 0 760 245"></svg></div>
        <div id="ch10-l2-cap" class="lab-cap"></div>
      </div>
    </div>

    <!-- LAB 4: 1-POINT VS 2-POINT PERSPECTIVE -->
    <div class="lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab 4 // 1-Point vs. 2-Point Perspective Playground</span>
        <div class="segmented" role="group">
          <button id="ch10-p-1pt" class="seg-btn active">1-Point Perspective</button>
          <button id="ch10-p-2pt" class="seg-btn">2-Point Perspective</button>
        </div>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="slider-grp">
            <label for="ch10-hy">Horizon Line (Eye Level):</label>
            <input id="ch10-hy" type="range" min="45" max="230" value="88" />
            <span id="ch10-hy-lbl" class="pill cyan">y = 88</span>
          </div>
          <span class="mono" style="font-size:11px; color:var(--ink-muted);">Space 2-Point VPs wide apart to prevent fisheye warping!</span>
        </div>
        <div class="svg-box"><svg id="ch10-p-svg" viewBox="0 0 760 270"></svg></div>
        <div id="ch10-p-cap" class="lab-cap"></div>
      </div>
    </div>

    <!-- HANDS-ON SKETCHPAD: ISOMETRICS & CYLINDERS -->
    ${renderSketchpadHTML('ch10', {
      title: '2-Over, 1-Up Isometric Cube & Cylinder Practice Pad',
      defaultTemplate: 'isometric',
      defaultTool: 'nib03',
      subtitle: 'Trace the Cyan isometric cube keeping all three vertical drops strictly 90°, then trace the pink cylinder making sure the bottom curve is noticeably rounder than the top ellipse.'
    })}

    ${DEEP_CONTENT_2.ch10}
    ${MASTERCLASS_B.ch10}

    ${renderQuizHTML('ch10', CH10_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (10 Minutes)</div>
      <p>
        Draw 3 stacked <strong>2-Over, 1-Up</strong> isometric platforms for your AI or Tax stack, then draw a German <em>Aktenordner</em> (lever-arch binder) and coffee mug sitting beside it using Cylinder + Box primitives.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 11: LIGHT PHYSICS, 5 PARTS OF SHADOW & LINE-WEIGHT HIERARCHY
  // -------------------------------------------------------------------------
  ch11: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill mint">${part.title}</span><span class="pill">Chapter 11 • ${ch.time}</span></div>
      <h1 class="script"><span class="hl-magenta">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Treat shading as predictable ray geometry across the <strong>5 Parts of Shadow</strong> (Highlight, Halftone, ${gt('terminator')}, Reflected Light, Cast Shadow).</li>
        <li>Anchor floating illustrations instantly using ${gt('ambient-occlusion')} contact creases and ${gt('line-weight')}.</li>
        <li>Explore Cube, Sphere, Cylinder &amp; Cone lighting live and pass the interactive <strong>Click-the-Shadow-Zone</strong> challenge.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>11.1 Light Physics: The 5 Parts of Shadow &amp; Contact Creases</h3>
      <p>
        Non-artists often smudge random gray shading around edges hoping a drawing will look 3D. Professional illustrators treat light as pure physics: pick <strong>one consistent sun angle</strong> across the entire spread (our default: <strong>Top-Left at 10 o'clock</strong>). Every solid form immediately splits into five logical zones: (1) <strong>Highlight</strong> (untouched paper facing light), (2) <strong>Halftone</strong> (1 light Cool Grey coat), (3) <strong>${gt('terminator')}</strong> (the darkest band turning away from light), (4) <strong>Reflected Light</strong> (a soft sliver bounced off the bright paper table), and (5) <strong>Cast Shadow</strong> projected away from the sun.
      </p>
      <p>
        Then add the single highest-ROI detail in analog sketching: ${gt('ambient-occlusion')}. Right where a server cube or mug touches the ground, almost zero ambient light squeezes into that crevice. Tracing that resting seam with a bold <code>05</code> nib glues the object solidly to the table.
      </p>
    </div>

    <!-- Mistake vs Pro Fix -->
    <div class="compare-grid">
      <div class="compare-card mistake">
        <div class="compare-head"><span>✕ Common Mistake</span><span>Uniform 03 Lines + Missing Contact Shadow</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 340 112">
            <polygon points="170,18 222,42 170,66 118,42" fill="#FFF" stroke="#141836" stroke-width="1.4"/>
            <polygon points="118,42 170,66 170,102 118,78" fill="#FFF" stroke="#141836" stroke-width="1.4"/>
            <polygon points="222,42 170,66 170,102 222,78" fill="#FFF" stroke="#141836" stroke-width="1.4"/>
            <text x="170" y="109" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#BE185D">Feels flat &amp; weightless—floating in space</text>
          </svg>
        </div>
      </div>
      <div class="compare-card fix">
        <div class="compare-head"><span>✓ Pro Fix</span><span>05 Silhouette + 3 Values + AO Crease</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 340 112">
            <polygon points="170,96 248,96 276,72 222,72" fill="#94A3B8" fill-opacity="0.4"/>
            <polyline points="118,73 170,98 222,73" fill="none" stroke="#141836" stroke-width="5.5" stroke-linecap="round"/>
            <polygon points="170,12 222,36 170,60 118,36" fill="#FFF" stroke="#141836" stroke-width="1.3"/>
            <polygon points="118,36 170,60 170,96 118,72" fill="#CBD5E1" stroke="#141836" stroke-width="1.3"/>
            <polygon points="222,36 170,60 170,96 222,72" fill="#64748B" fill-opacity="0.8" stroke="#141836" stroke-width="1.3"/>
            <polygon points="170,12 222,36 222,72 170,96 118,72 118,36" fill="none" stroke="#141836" stroke-width="3.2"/>
            <text x="170" y="110" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#047857">Glued to the table with instant 3D mass!</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- UPGRADED INTERACTIVE LAB 1: LIGHT PHYSICS (CUBE, SPHERE, CYLINDER & CONE) -->
    <div class="lab magenta-accent">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab 1 // Light Physics &amp; 5-Part Shadow Simulator (4 Primitives)</span>
        <span class="pill magenta">4 Sun Angles + AO, Reflected Light &amp; 3-Weight</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            <button class="seg-btn ch11-sun active" data-s="tl">Top-Left (10:00)</button>
            <button class="seg-btn ch11-sun" data-s="top">Overhead (12:00)</button>
            <button class="seg-btn ch11-sun" data-s="sr">Side-Right (2:00)</button>
            <button class="seg-btn ch11-sun" data-s="low">Low Dramatic (9:00)</button>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:12px;">
            <label class="chk-lbl"><input id="ch11-ao" type="checkbox" checked /> Ambient Occlusion</label>
            <label class="chk-lbl"><input id="ch11-ref" type="checkbox" checked /> Reflected Light</label>
            <label class="chk-lbl"><input id="ch11-lw" type="checkbox" checked /> 3-Weight Silhouette</label>
          </div>
        </div>
        <div class="svg-box"><svg id="ch11-svg" viewBox="0 0 760 250"></svg></div>
        <div id="ch11-cap" class="lab-cap"></div>
      </div>
    </div>

    <!-- NEW INTERACTIVE LAB 2: CLICK-THE-SHADOW-ZONE SPOT-CHECK -->
    <div class="lab cyan-accent" id="ch11-spot-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab 2 // Click-the-Shadow-Zone Visual Check</span>
        <span id="ch11-spot-prompt" class="pill cyan">Target: Click the CORE SHADOW (Terminator)</span>
      </div>
      <div class="lab-body">
        <div class="svg-box">
          <svg id="ch11-spot-svg" viewBox="0 0 760 190">
            <g transform="translate(86,44)"><circle r="14" fill="#F59E0B" fill-opacity="0.38" stroke="#B45309" stroke-width="2"/><text y="28" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#B45309">10:00 SUN</text></g>
            <g transform="translate(380,98)">
              <ellipse class="svg-hotspot" data-zone="cast" cx="56" cy="54" rx="76" ry="16" fill="#94A3B8" fill-opacity="0.45" stroke="#141836" stroke-dasharray="3 2"/>
              <ellipse class="svg-hotspot" data-zone="ao" cx="0" cy="54" rx="24" ry="6" fill="#141836"/>
              <circle class="svg-hotspot" data-zone="halftone" r="54" fill="#E2E8F0" stroke="#141836" stroke-width="2.6"/>
              <ellipse class="svg-hotspot" data-zone="highlight" cx="-22" cy="-22" rx="18" ry="13" fill="#FFFFFF" stroke="#0EA5E9" stroke-dasharray="3 2"/>
              <path class="svg-hotspot" data-zone="core" d="M -14 52 A 54 54 0 0 0 52 -12 A 42 48 0 0 1 -14 52 Z" fill="#475569"/>
              <path class="svg-hotspot" data-zone="reflected" d="M 10 47 A 48 48 0 0 0 47 10" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round"/>
            </g>
            <text x="580" y="72" font-family="Patrick Hand, cursive" font-size="16" fill="#525B7A">Click directly on the sphere</text>
            <text x="580" y="96" font-family="Patrick Hand, cursive" font-size="16" fill="#525B7A">or cast shadow to identify</text>
            <text x="580" y="120" font-family="Patrick Hand, cursive" font-size="16" fill="#525B7A">each physical light zone!</text>
          </svg>
        </div>
        <div id="ch11-spot-fb" class="lab-cap">Click directly on the requested zone on the sphere above to test your eye!</div>
      </div>
    </div>

    <div class="prose-wrap"><h3>11.2 The 4 Analog Shading Methods</h3></div>
    <div class="grid-4">
      ${[
        ['1. Parallel Hatching', 'Clean 45° strokes; lift the pen after every stroke—never zigzag.', '<rect x="18" y="14" width="124" height="68" rx="5" fill="#FFF" stroke="#141836" stroke-width="2"/><path d="M 28 82 L 68 14 M 44 82 L 84 14 M 60 82 L 100 14 M 76 82 L 116 14 M 92 82 L 132 14" stroke="#141836" stroke-width="1.4"/>'],
        ['2. Cross-Hatching', 'Layer a 2nd pass at 30°–45° (avoid stiff 90° mechanical grids).', '<rect x="18" y="14" width="124" height="68" rx="5" fill="#FFF" stroke="#141836" stroke-width="2"/><path d="M 28 82 L 68 14 M 48 82 L 88 14 M 68 82 L 108 14 M 88 82 L 128 14" stroke="#141836" stroke-width="1.2"/><path d="M 18 36 L 142 58 M 18 52 L 142 74" stroke="#0EA5E9" stroke-width="1.2"/>'],
        ['3. Stippling', 'Clustered 01 dots—denser in shadow, sparse toward light.', '<rect x="18" y="14" width="124" height="68" rx="5" fill="#FFF" stroke="#141836" stroke-width="2"/><g fill="#141836"><circle cx="34" cy="30" r="1.4"/><circle cx="48" cy="48" r="1.4"/><circle cx="64" cy="34" r="1.4"/><circle cx="80" cy="54" r="1.4"/><circle cx="96" cy="28" r="1.5"/><circle cx="104" cy="46" r="1.5"/><circle cx="114" cy="64" r="1.6"/><circle cx="124" cy="34" r="1.6"/><circle cx="128" cy="52" r="1.6"/><circle cx="132" cy="70" r="1.6"/></g>'],
        ['4. Cool-Grey Flat Wash', '1 marker = 3 values: 0x White, 1x Midtone, 2x Deep Shadow.', '<rect x="14" y="14" width="42" height="68" rx="4" fill="#FFF" stroke="#141836" stroke-width="1.8"/><rect x="59" y="14" width="42" height="68" rx="4" fill="#94A3B8" fill-opacity="0.38" stroke="#141836" stroke-width="1.8"/><rect x="104" y="14" width="42" height="68" rx="4" fill="#64748B" fill-opacity="0.76" stroke="#141836" stroke-width="1.8"/>']
      ].map(([t, d, svg]) => `
        <div class="card">
          <div class="svg-box"><svg viewBox="0 0 160 96">${svg}</svg></div>
          <div class="card-h">${t}</div>
          <div class="card-p">${d}</div>
        </div>`).join('')}
    </div>

    ${DEEP_CONTENT_2.ch11}
    ${MASTERCLASS_B.ch11}

    ${renderQuizHTML('ch11', CH11_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (8 Minutes)</div>
      <p>
        Draw a Cube, Cylinder, and Cone side by side on your dot grid under a <strong>10 o'clock sun</strong>. Trace outer silhouettes in <code>05</code>, apply 1-pass and 2-pass Cool Grey washes, leave a crisp sliver of Reflected Light on the cylinder, and glue all three shapes to the page with bold <code>05</code> Ambient Occlusion creases.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 12: VISUAL VOCABULARY, EXPRESSIVE PEOPLE & 14-DAY BOOTCAMP
  // -------------------------------------------------------------------------
  ch12: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill mint">${part.title}</span><span class="pill">Chapter 12 • ${ch.time}</span><span class="pill amber">AI/Tech • Tax • Deutsch</span></div>
      <h1 class="script"><span class="hl-mint">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Master a 24-icon <strong>10-Second Visual Vocabulary</strong> (AI, Systems, Tax &amp; Deutsch) using step-by-step animated stroke playback.</li>
        <li>Compose expressive ${gt('bean-body')} poses, props, and dialogue bubbles in 4 seconds flat.</li>
        <li>Run the <strong>10-Minute First-Page Drill</strong> and track your persistent <strong>14-Day Studio Bootcamp</strong>.</li>
      </ul>
    </div>

    <!-- NEW INTERACTIVE LAB 1: ANIMATED 24-ICON STROKE-ORDER PLAYER -->
    <div class="lab cyan-accent" id="ch12-stroke-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab 1 // 24 Ten-Second Icons + Animated Stroke-Order Player</span>
        <button id="ch12-play-btn" class="btn mint">▶ Replay Stroke Order</button>
      </div>
      <div class="lab-body">
        <div class="grid-2" style="align-items:center;">
          <div class="svg-box" style="max-width:340px; margin:0 auto; width:100%;">
            <svg id="ch12-stage-svg" viewBox="0 0 60 56" style="max-height:190px;"></svg>
          </div>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div id="ch12-stage-title" class="card-h" style="font-size:18px;"></div>
            <div id="ch12-steps-list" style="display:flex; flex-direction:column; gap:6px;"></div>
          </div>
        </div>
        <div class="lab-ctrl no-print">
          <input id="ch12-search" class="search-in" type="text" placeholder="Filter 24 icons (e.g. api, tax, satz, vocab)..." />
          <div class="segmented" role="group">
            <button class="seg-btn ch12-cat active" data-c="all">All (24)</button>
            <button class="seg-btn ch12-cat" data-c="tech">AI/Tech</button>
            <button class="seg-btn ch12-cat" data-c="sys">Systems</button>
            <button class="seg-btn ch12-cat" data-c="biz">Tax/Biz</button>
            <button class="seg-btn ch12-cat" data-c="ppl">Deutsch/People</button>
          </div>
        </div>
        <div id="ch12-icons" class="grid-4"></div>
      </div>
    </div>

    <!-- NEW INTERACTIVE LAB 2: BEAN-BODY POSE & EMOTION COMPOSER -->
    <div class="lab" id="ch12-bean-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab 2 // Bean-Body Person Pose &amp; Dialogue Builder</span>
        <span class="pill violet">4-Second Expressive Figures</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            <button class="seg-btn ch12-emo active" data-e="presenting">Presenting</button>
            <button class="seg-btn ch12-emo" data-e="excited">Breakthrough!</button>
            <button class="seg-btn ch12-emo" data-e="confused">Confused (?)</button>
            <button class="seg-btn ch12-emo" data-e="exhausted">Audit Fatigue</button>
          </div>
          <div class="segmented" role="group">
            <button class="seg-btn ch12-prop active" data-p="board">Whiteboard</button>
            <button class="seg-btn ch12-prop" data-p="laptop">Laptop</button>
            <button class="seg-btn ch12-prop" data-p="ordner">Steuer-Ordner</button>
          </div>
          <div class="segmented" role="group">
            <button class="seg-btn ch12-lang active" data-l="en">English</button>
            <button class="seg-btn ch12-lang" data-l="de">Deutsch</button>
          </div>
        </div>
        <div class="svg-box"><svg id="ch12-bean-svg" viewBox="0 0 760 195"></svg></div>
        <div id="ch12-bean-cap" class="lab-cap"></div>
      </div>
    </div>

    <div class="prose-wrap">
      <h3>12.2 The 12-Metaphor Light Cyberpunk Visual Vault</h3>
      <p>
        Abstract concepts like <em>zero-trust governance, statutory tax scope, cognitive compression,</em> or <em>German verb brackets</em> become instantly memorable when anchored to a physical, spatial metaphor. Filter by domain below to inspect 12 studio-grade isometric and schematic metaphors you can drop straight onto any notebook spread:
      </p>
    </div>
    ${renderMetaphorsLabHTML()}

    <!-- PRACTICE STUDIO: 10M TIMER + 14-DAY BOOTCAMP -->
    <div class="lab mint-accent">
      <div class="lab-head">
        <span class="lab-title">Interactive Practice Studio // 10-Minute Drill &amp; 14-Day Bootcamp</span>
        <span id="ch12-boot-pill" class="pill mint">0 / 14 Days Done</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl no-print">
          <div style="display:flex; align-items:center; gap:12px;">
            <span class="pill cyan">First-Page Timer</span>
            <span id="ch12-clock" class="mono" style="font-size:24px; font-weight:700;">10:00</span>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            <button id="ch12-tbtn" class="btn mint">▶ Start 10m</button>
            <button id="ch12-treset" class="btn secondary">↺ Reset</button>
            <button id="ch12-bclear" class="btn secondary">↺ Clear 14 Days</button>
          </div>
        </div>
        <div class="progress-rail"><div id="ch12-boot-bar" class="progress-fill"></div></div>
        <div id="ch12-boot-grid" class="grid-2"></div>
      </div>
    </div>

    ${DEEP_CONTENT_2.ch12}
    ${MASTERCLASS_B.ch12}

    ${renderQuizHTML('ch12', CH12_QUIZ)}
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 13 (NEW): MINI-SCENES, EVERYDAY OBJECTS & VISUAL STORYTELLING
  // -------------------------------------------------------------------------
  ch13: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill mint">${part.title}</span><span class="pill magenta">NEW CHAPTER 13 • ${ch.time}</span><span class="pill amber">Tax • Deutsch • AI/Tech</span></div>
      <h1 class="script"><span class="hl-amber">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Combine Bean-Body people + 2 simple props + a ground line into crisp <strong>3-Panel Mini-Scenes</strong>.</li>
        <li>Structure persuasive presentations and client memos along the <strong>5-Beat Executive Narrative Arc</strong>.</li>
        <li>Use illustrated German dialogue scenes (<em>Beim Finanzamt / Im Büro</em>) to lock idioms and cases into episodic memory.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>13.1 The 3-Ingredient Mini-Scene Formula</h3>
      <p>
        You never need background scenery, perspective streets, or detailed furniture to tell a visual story. Every convincing mini-scene in a notebook requires just <strong>three marks</strong>: (1) a single <strong>horizontal ground line</strong> (so people and desks don't float), (2) <strong>1–2 Bean-Body characters</strong> angled toward each other, and (3) <strong>1 anchor prop</strong> (a laptop, whiteboard, or stacked tax binder) plus a crisp speech bubble or action caption.
      </p>

      <h3>13.2 The 5-Beat Executive Narrative Arc</h3>
      <p>
        When explaining a new AI architecture or advising a client on cross-border VAT exposure, raw diagrams without narrative order force your audience to guess the punchline. Arrange your spread across five left-to-right beats:
      </p>
      <ol>
        <li><strong>Beat 1 — Hook (Status Quo):</strong> One simple scene or metric showing today's baseline.</li>
        <li><strong>Beat 2 — Tension (The Pain/Risk):</strong> Highlight the bottleneck or statutory penalty in Hot Magenta.</li>
        <li><strong>Beat 3 — Mechanism (The Fix):</strong> Your clean 3-node diagram showing <em>how</em> the solution works.</li>
        <li><strong>Beat 4 — Proof (The Delta):</strong> A compact Dumbbell Chart or Bullet Graph proving the saving.</li>
        <li><strong>Beat 5 — Decision (Call to Action):</strong> A Taped Decision Slip + 3 checkboxes (<code>□</code>) with owner &amp; date.</li>
      </ol>
    </div>

    <!-- Mistake vs Pro Fix -->
    <div class="compare-grid">
      <div class="compare-card mistake">
        <div class="compare-head"><span>✕ Common Mistake</span><span>Floating Disconnected Doodles</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 340 105">
            <circle cx="80" cy="30" r="10" fill="#FFF" stroke="#141836" stroke-width="1.8"/><rect x="70" y="42" width="20" height="28" rx="8" fill="#EEF2FC" stroke="#141836" stroke-width="1.8"/>
            <rect x="210" y="20" width="54" height="34" rx="4" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
            <text x="170" y="94" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#BE185D">No ground line, no panel frame, no sequence</text>
          </svg>
        </div>
      </div>
      <div class="compare-card fix">
        <div class="compare-head"><span>✓ Pro Fix</span><span>Framed 3-Panel Storyboard + Ground Line</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 340 105">
            <rect x="14" y="14" width="94" height="72" rx="5" fill="#FFF" stroke="#141836" stroke-width="1.8"/><line x1="22" y1="74" x2="100" y2="74" stroke="#94A3B8" stroke-width="2"/><text x="61" y="50" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">1. TENSION</text>
            <rect x="123" y="14" width="94" height="72" rx="5" fill="#E0F2FE" stroke="#141836" stroke-width="1.8"/><line x1="131" y1="74" x2="209" y2="74" stroke="#94A3B8" stroke-width="2"/><text x="170" y="50" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0EA5E9">2. MECHANISM</text>
            <rect x="232" y="14" width="94" height="72" rx="5" fill="#D1FAE5" stroke="#047857" stroke-width="1.8"/><line x1="240" y1="74" x2="318" y2="74" stroke="#94A3B8" stroke-width="2"/><text x="279" y="50" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">3. OUTCOME ✓</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- NEW INTERACTIVE LAB: 3-PANEL STORYBOARD & DIALOGUE SCENE COMPOSER -->
    <div class="lab" id="ch13-story-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // 3-Panel Storyboard &amp; Dialogue Scene Explorer</span>
        <span class="pill violet">3 Complete Illustrated Narratives</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            <button class="seg-btn ch13-sc active" data-s="deutsch">1. Deutsch: Beim Finanzamt (B2)</button>
            <button class="seg-btn ch13-sc" data-s="tax">2. Tax Advisory: Client Journey</button>
            <button class="seg-btn ch13-sc" data-s="ai">3. AI Product: HITL Launch Pitch</button>
          </div>
        </div>
        <div class="svg-box"><svg id="ch13-svg" viewBox="0 0 760 225"></svg></div>
        <div id="ch13-cap" class="lab-cap"></div>
      </div>
    </div>

    ${DEEP_CONTENT_3.ch13}
    ${MASTERCLASS_B.ch13}

    ${renderQuizHTML('ch13', CH13_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (10 Minutes)</div>
      <p>
        Draw 3 equal horizontal boxes (7 dots wide each on an A5 page) with a shared ground line. Sketch either a <strong>3-panel German everyday dialogue</strong> (using a real phrase you learned this week) OR a <strong>Before → Mechanism → After</strong> client tax workflow.
      </p>
    </div>
  `
};

export const PART4_INITS = {
  ch10: (onStateChange) => {
    // Lab 1: Form X-Ray Breakdown
    let obj = 'mug', xr = 2;
    const XRAY = {
      mug: {
        0: '<rect x="330" y="42" width="90" height="96" fill="#FFF" stroke="#EC4899" stroke-width="2.2"/><path d="M 420 62 C 454 62 454 114 420 114" fill="none" stroke="#EC4899" stroke-width="2.2"/><text x="380" y="176" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" fill="#BE185D">Flat 2D childhood symbol: rectangle + C-loop</text>',
        1: '<ellipse cx="380" cy="48" rx="46" ry="14" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="4 3"/><ellipse cx="380" cy="136" rx="46" ry="20" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="4 3"/><line x1="334" y1="48" x2="334" y2="136" stroke="#0EA5E9" stroke-width="2"/><line x1="426" y1="48" x2="426" y2="136" stroke="#0EA5E9" stroke-width="2"/><line x1="380" y1="26" x2="380" y2="162" stroke="#EC4899" stroke-width="1.4" stroke-dasharray="4 3"/><text x="380" y="184" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0EA5E9">PRIMITIVE: VERTICAL CYLINDER (ROUNDER BOTTOM ELLIPSE)</text>',
        2: '<ellipse cx="404" cy="144" rx="64" ry="14" fill="#94A3B8" fill-opacity="0.42"/><path d="M 334 48 V 136 A 46 20 0 0 0 426 136 V 48" fill="#E2E8F0" stroke="#141836" stroke-width="2.6"/><ellipse cx="380" cy="48" rx="46" ry="14" fill="#FFF" stroke="#141836" stroke-width="2.4"/><path d="M 426 68 C 460 68 460 116 426 116" fill="none" stroke="#141836" stroke-width="8" stroke-linecap="round"/><path d="M 426 68 C 460 68 460 116 426 116" fill="none" stroke="#FFF" stroke-width="3.2" stroke-linecap="round"/><text x="380" y="184" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">SHADED 3D MUG + THICK HANDLE + CAST SHADOW</text>'
      },
      laptop: {
        0: '<rect x="304" y="42" width="152" height="92" fill="#FFF" stroke="#EC4899" stroke-width="2.2"/><line x1="286" y1="142" x2="474" y2="142" stroke="#EC4899" stroke-width="3"/><text x="380" y="178" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" fill="#BE185D">Flat 2D screen box sitting on a single line</text>',
        1: '<polygon points="326,30 436,56 436,120 326,94" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="5 3"/><polygon points="326,94 436,120 366,154 256,128" fill="none" stroke="#EC4899" stroke-width="2" stroke-dasharray="5 3"/><text x="380" y="184" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0EA5E9">PRIMITIVE: TWO HINGED THIN ISOMETRIC PLANES</text>',
        2: '<polygon points="266,136 376,162 456,124 346,98" fill="#94A3B8" fill-opacity="0.38"/><polygon points="326,28 436,54 436,118 326,92" fill="#E0F2FE" stroke="#141836" stroke-width="2.6"/><polygon points="326,92 436,118 366,152 256,126" fill="#CBD5E1" stroke="#141836" stroke-width="2.6"/><line x1="256" y1="126" x2="366" y2="152" stroke="#141836" stroke-width="5"/><text x="380" y="184" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">3D ISOMETRIC LAPTOP + CYAN SCREEN GLOW</text>'
      },
      server: {
        0: '<rect x="334" y="24" width="92" height="124" fill="#FFF" stroke="#EC4899" stroke-width="2.2"/><path d="M 346 50 H 414 M 346 80 H 414 M 346 110 H 414" stroke="#EC4899" stroke-width="2"/><text x="380" y="180" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" fill="#BE185D">Flat 2D rectangle with 3 horizontal stripes</text>',
        1: '<polygon points="380,22 444,50 380,78 316,50" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="4 3"/><path d="M 316 50 V 142 L 380 170 L 444 142 V 50 M 380 78 V 170" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="4 3"/><text x="380" y="190" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0EA5E9">PRIMITIVE: TALL 2-OVER, 1-UP ISOMETRIC TOWER</text>',
        2: '<polygon points="380,164 468,164 494,138 444,138" fill="#94A3B8" fill-opacity="0.4"/><polygon points="380,20 444,48 380,76 316,48" fill="#FFF" stroke="#141836" stroke-width="2.4"/><polygon points="316,48 380,76 380,162 316,134" fill="#E2E8F0" stroke="#141836" stroke-width="2.4"/><polygon points="444,48 380,76 380,162 444,134" fill="#64748B" fill-opacity="0.82" stroke="#141836" stroke-width="2.4"/><circle cx="332" cy="76" r="3.5" fill="#10B981"/><circle cx="332" cy="104" r="3.5" fill="#0EA5E9"/><circle cx="332" cy="130" r="3.5" fill="#EC4899"/><text x="380" y="190" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">3D AI SERVER TOWER + STATUS LEDS + AO CREASE</text>'
      },
      binder: {
        0: '<rect x="348" y="26" width="64" height="122" fill="#FFF" stroke="#EC4899" stroke-width="2.2"/><circle cx="380" cy="122" r="9" fill="none" stroke="#EC4899" stroke-width="2"/><text x="380" y="180" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" fill="#BE185D">Flat 2D spine with a circle</text>',
        1: '<polygon points="366,24 434,50 400,64 332,38" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="4 3"/><path d="M 332 38 V 142 L 400 168 L 434 154 V 50 M 400 64 V 168" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="4 3"/><text x="380" y="190" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0EA5E9">PRIMITIVE: NARROW VERTICAL SLAB BOX (DER ORDNER)</text>',
        2: '<polygon points="366,24 434,50 400,64 332,38" fill="#FFF" stroke="#141836" stroke-width="2.2"/><polygon points="332,38 400,64 400,164 332,138" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="2.4"/><polygon points="400,64 434,50 434,150 400,164" fill="#141836" fill-opacity="0.82" stroke="#141836" stroke-width="2.4"/><rect x="344" y="64" width="42" height="24" rx="3" fill="#FFF" stroke="#141836"/><text x="365" y="80" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">USt</text><circle cx="365" cy="128" r="8" fill="#FFF" stroke="#141836" stroke-width="2"/><text x="380" y="190" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">3D GERMAN AKTENORDNER (CYAN = DER ORDNER)</text>'
      }
    };
    const renderXray = () => {
      document.getElementById('ch10-xray-svg').innerHTML = XRAY[obj][xr];
      const names = ['Flat 2D Symbol', '3D Primitive Wireframe', 'Shaded 3D Form'];
      document.getElementById('ch10-xray-cap').innerHTML = `<strong>Stage ${xr + 1}: ${names[xr]}</strong> — Step from 1 → 2 → 3 to see how industrial designers construct everyday workspace objects from simple boxes and cylinders.`;
    };
    document.querySelectorAll('.ch10-obj').forEach(b => b.addEventListener('click', () => {
      obj = b.dataset.o;
      document.querySelectorAll('.ch10-obj').forEach(x => x.classList.toggle('active', x === b));
      renderXray();
    }));
    document.querySelectorAll('.ch10-xr').forEach(b => b.addEventListener('click', () => {
      xr = Number(b.dataset.x);
      document.querySelectorAll('.ch10-xr').forEach(x => x.classList.toggle('active', x === b));
      renderXray();
    }));
    renderXray();

    // Lab 2: Iso Stepper
    const setIso = (s) => {
      document.querySelectorAll('.ch10-iso').forEach(b => b.classList.toggle('active', b.dataset.s === s));
      document.querySelectorAll('.iso-step').forEach(c => {
        if (s === 'all') c.classList.remove('dim', 'focus');
        else { c.classList.toggle('focus', c.dataset.s === s); c.classList.toggle('dim', c.dataset.s !== s); }
      });
    };
    document.querySelectorAll('.ch10-iso').forEach(b => b.addEventListener('click', () => setIso(b.dataset.s)));
    document.querySelectorAll('.iso-step').forEach(c => c.addEventListener('click', () => setIso(c.dataset.s)));

    // Lab 2B: 8-Piece Isometric Illustration Library
    initIsoGallery();

    // Lab 3: Cylinder & Extrusion
    let l2Mode = 'cyl';
    const renderL2 = () => {
      const svg = document.getElementById('ch10-l2-svg');
      const cap = document.getElementById('ch10-l2-cap');
      if (l2Mode === 'cyl') {
        const off = Number(document.getElementById('ch10-eye').value);
        const eyeY = 122, cy = eyeY + off, topY = cy - 38, botY = cy + 38, rx = 66;
        const tRy = Math.max(2, Math.abs(topY - eyeY) * 0.28), bRy = Math.max(2, Math.abs(botY - eyeY) * 0.28);
        const st = off < -10 ? 'Above Horizon' : off > 10 ? 'Below Horizon' : 'At Horizon';
        document.getElementById('ch10-eye-lbl').textContent = st;
        svg.innerHTML = `
          <line x1="20" y1="${eyeY}" x2="740" y2="${eyeY}" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="8 5"/>
          <text x="32" y="${eyeY - 8}" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0EA5E9">EYE LEVEL (HORIZON)</text>
          <path d="M ${380-rx} ${topY} V ${botY} A ${rx} ${bRy} 0 0 0 ${380+rx} ${botY} V ${topY}" fill="#E2E8F0" stroke="#141836" stroke-width="2.4"/>
          <ellipse cx="380" cy="${botY}" rx="${rx}" ry="${bRy}" fill="${botY < eyeY ? '#EC4899' : '#CBD5E1'}" fill-opacity="0.28" stroke="#141836" stroke-width="2.2"/>
          <ellipse cx="380" cy="${topY}" rx="${rx}" ry="${tRy}" fill="${topY > eyeY ? '#10B981' : '#FFF'}" fill-opacity="${topY > eyeY ? '0.26' : '0.92'}" stroke="#141836" stroke-width="2.2"/>
          <line x1="380" y1="${topY-18}" x2="380" y2="${botY+18}" stroke="#BE185D" stroke-width="1.2" stroke-dasharray="4 3"/>
          <text x="466" y="${topY+4}" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">TOP RY = ${tRy.toFixed(1)}px</text>
          <text x="466" y="${botY+4}" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">BOT RY = ${bRy.toFixed(1)}px</text>`;
        cap.innerHTML = `<strong>${st}:</strong> Notice how the rim closer to eye level flattens toward a slit while the rim further away curves noticeably rounder.`;
      } else {
        const d = Number(document.getElementById('ch10-dep').value);
        document.getElementById('ch10-dep-lbl').textContent = d + 'px';
        const x = 250, y = 56, w = 220, h = 104;
        svg.innerHTML = `
          <rect x="${x+d}" y="${y+d}" width="${w}" height="${h}" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
          <polygon points="${x+w},${y} ${x+w+d},${y+d} ${x+w+d},${y+h+d} ${x+w},${y+h}" fill="#64748B" fill-opacity="0.72" stroke="#141836" stroke-width="2"/>
          <polygon points="${x},${y+h} ${x+w},${y+h} ${x+w+d},${y+h+d} ${x+d},${y+h+d}" fill="#94A3B8" stroke="#141836" stroke-width="2"/>
          <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#FFF" stroke="#141836" stroke-width="2.5"/>
          <text x="${x+w/2}" y="${y+h/2+6}" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="22" font-weight="700">FRONT FACE</text>`;
        cap.innerHTML = `<strong>Parallel Extrusion (${d}px):</strong> Zero vanishing-point math—copy the flat front face ${d}px right &amp; down and join corners.`;
      }
    };
    document.getElementById('ch10-m-cyl').addEventListener('click', () => {
      l2Mode = 'cyl';
      document.getElementById('ch10-m-cyl').classList.add('active');
      document.getElementById('ch10-m-ext').classList.remove('active');
      document.getElementById('ch10-ctrl-cyl').style.display = 'flex';
      document.getElementById('ch10-ctrl-ext').style.display = 'none';
      renderL2();
    });
    document.getElementById('ch10-m-ext').addEventListener('click', () => {
      l2Mode = 'ext';
      document.getElementById('ch10-m-ext').classList.add('active');
      document.getElementById('ch10-m-cyl').classList.remove('active');
      document.getElementById('ch10-ctrl-ext').style.display = 'flex';
      document.getElementById('ch10-ctrl-cyl').style.display = 'none';
      renderL2();
    });
    document.getElementById('ch10-eye').addEventListener('input', renderL2);
    document.getElementById('ch10-dep').addEventListener('input', renderL2);
    renderL2();

    // Lab 4: 1PT / 2PT Perspective
    let pMode = '1pt';
    const lerp = (a, b, t) => a + (b - a) * t;
    const renderPersp = () => {
      const svg = document.getElementById('ch10-p-svg');
      const hy = Number(document.getElementById('ch10-hy').value);
      document.getElementById('ch10-hy-lbl').textContent = `y = ${hy}`;
      const topY = 122, botY = 192;
      const pos = botY < hy ? 'Above Horizon (See Underside)' : topY > hy ? 'Below Horizon (See Top)' : 'Straddling Horizon';
      if (pMode === '1pt') {
        const vpX = 560, bx = 220, bw = 110, t = 0.28;
        const bx2 = lerp(bx, vpX, t), bx2R = lerp(bx+bw, vpX, t), t2 = lerp(topY, hy, t), b2 = lerp(botY, hy, t);
        const topF = topY > hy ? `<polygon points="${bx},${topY} ${bx+bw},${topY} ${bx2R},${t2} ${bx2},${t2}" fill="#10B981" fill-opacity="0.28" stroke="#141836" stroke-width="2"/>` : '';
        const botF = botY < hy ? `<polygon points="${bx},${botY} ${bx+bw},${botY} ${bx2R},${b2} ${bx2},${b2}" fill="#EC4899" fill-opacity="0.26" stroke="#141836" stroke-width="2"/>` : '';
        svg.innerHTML = `
          <line x1="20" y1="${hy}" x2="740" y2="${hy}" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="7 5"/>
          <g stroke="#0EA5E9" stroke-width="1.2" stroke-dasharray="4 4"><line x1="${bx}" y1="${topY}" x2="${vpX}" y2="${hy}"/><line x1="${bx+bw}" y1="${topY}" x2="${vpX}" y2="${hy}"/><line x1="${bx}" y1="${botY}" x2="${vpX}" y2="${hy}"/><line x1="${bx+bw}" y1="${botY}" x2="${vpX}" y2="${hy}"/></g>
          <circle cx="${vpX}" cy="${hy}" r="6" fill="#EC4899" stroke="#141836" stroke-width="2"/><text x="${vpX}" y="${hy-12}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">VP</text>
          <polygon points="${bx+bw},${topY} ${bx2R},${t2} ${bx2R},${b2} ${bx+bw},${botY}" fill="#94A3B8" fill-opacity="0.7" stroke="#141836" stroke-width="2"/>
          ${topF}${botF}<rect x="${bx}" y="${topY}" width="${bw}" height="${botY-topY}" fill="#FFF" stroke="#141836" stroke-width="2.4"/>`;
        document.getElementById('ch10-p-cap').innerHTML = `<strong>1-Point Perspective (${pos}):</strong> Front edges stay strictly vertical and horizontal; receding depth rays converge to one Vanishing Point.`;
      } else {
        const vpL = 70, vpR = 690, cx = 380, t = 0.24;
        const lx = lerp(cx, vpL, t), lT = lerp(topY, hy, t), lB = lerp(botY, hy, t);
        const rx = lerp(cx, vpR, t), rT = lerp(topY, hy, t), rB = lerp(botY, hy, t);
        const bT = lerp(lT, hy, t * 0.9), bB = lerp(lB, hy, t * 0.9);
        const topF = topY > hy ? `<polygon points="${cx},${topY} ${rx},${rT} ${cx},${bT} ${lx},${lT}" fill="#10B981" fill-opacity="0.28" stroke="#141836" stroke-width="2"/>` : '';
        const botF = botY < hy ? `<polygon points="${cx},${botY} ${rx},${rB} ${cx},${bB} ${lx},${lB}" fill="#EC4899" fill-opacity="0.26" stroke="#141836" stroke-width="2"/>` : '';
        svg.innerHTML = `
          <line x1="20" y1="${hy}" x2="740" y2="${hy}" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="7 5"/>
          <g stroke="#0EA5E9" stroke-width="1.1" stroke-dasharray="4 4"><line x1="${cx}" y1="${topY}" x2="${vpL}" y2="${hy}"/><line x1="${cx}" y1="${botY}" x2="${vpL}" y2="${hy}"/><line x1="${cx}" y1="${topY}" x2="${vpR}" y2="${hy}"/><line x1="${cx}" y1="${botY}" x2="${vpR}" y2="${hy}"/></g>
          <circle cx="${vpL}" cy="${hy}" r="6" fill="#EC4899" stroke="#141836" stroke-width="2"/><circle cx="${vpR}" cy="${hy}" r="6" fill="#EC4899" stroke="#141836" stroke-width="2"/>
          <polygon points="${cx},${topY} ${lx},${lT} ${lx},${lB} ${cx},${botY}" fill="#E2E8F0" stroke="#141836" stroke-width="2.2"/>
          <polygon points="${cx},${topY} ${rx},${rT} ${rx},${rB} ${cx},${botY}" fill="#94A3B8" fill-opacity="0.72" stroke="#141836" stroke-width="2.2"/>
          ${topF}${botF}<line x1="${cx}" y1="${topY}" x2="${cx}" y2="${botY}" stroke="#141836" stroke-width="3"/>`;
        document.getElementById('ch10-p-cap').innerHTML = `<strong>2-Point Perspective (${pos}):</strong> Vertical corners stay 90° straight; left and right planes converge cleanly to wide-spaced VPs.`;
      }
    };
    document.getElementById('ch10-p-1pt').addEventListener('click', () => { pMode = '1pt'; document.getElementById('ch10-p-1pt').classList.add('active'); document.getElementById('ch10-p-2pt').classList.remove('active'); renderPersp(); });
    document.getElementById('ch10-p-2pt').addEventListener('click', () => { pMode = '2pt'; document.getElementById('ch10-p-2pt').classList.add('active'); document.getElementById('ch10-p-1pt').classList.remove('active'); renderPersp(); });
    document.getElementById('ch10-hy').addEventListener('input', renderPersp);
    renderPersp();

    initSketchpad('ch10', { defaultTemplate: 'isometric', defaultTool: 'nib03' });
    initQuiz('ch10', CH10_QUIZ, onStateChange);
  },

  ch11: (onStateChange) => {
    let sun = 'tl';
    const renderLight = () => {
      const ao = document.getElementById('ch11-ao').checked;
      const ref = document.getElementById('ch11-ref').checked;
      const lw = document.getElementById('ch11-lw').checked;
      const outerW = lw ? 3.2 : 1.7;
      const innerW = lw ? 1.4 : 1.7;
      const cfg = {
        tl:  { sx: 68, sy: 34, top: '#FFF', left: '#CBD5E1', right: '#64748B', dx: 48, desc: 'Top-Left (10:00) — Notebook standard. Top planes stay bright white, right/underside planes take 2x Cool Grey, cast shadows project right.' },
        top: { sx: 380, sy: 24, top: '#FFF', left: '#94A3B8', right: '#94A3B8', dx: 0, desc: 'Overhead (12:00) — Compact noon shadows pooled directly beneath each base.' },
        sr:  { sx: 692, sy: 34, top: '#FFF', left: '#64748B', right: '#CBD5E1', dx: -48, desc: 'Side-Right (2:00) — Light hits from the right; left faces drop into core shadow and cast shadows project left.' },
        low: { sx: 46, sy: 136, top: '#CBD5E1', left: '#FFF', right: '#475569', dx: 74, desc: 'Low Dramatic (9:00) — Grazing angle creating long stretched cast shadows across the surface.' }
      }[sun];

      document.getElementById('ch11-svg').innerHTML = `
        <g transform="translate(${cfg.sx},${cfg.sy})"><circle r="13" fill="#F59E0B" fill-opacity="0.38" stroke="#B45309" stroke-width="2"/><text y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#B45309">SUN</text></g>
        <!-- 1. CUBE -->
        <g transform="translate(130,114)">
          <polygon points="0,72 ${cfg.dx},72 ${cfg.dx+40},52 40,52" fill="#94A3B8" fill-opacity="0.4"/>
          ${ao ? `<polyline points="-40,53 0,74 40,53" fill="none" stroke="#141836" stroke-width="5" stroke-linecap="round"/>` : ''}
          <polygon points="0,-8 40,12 0,32 -40,12" fill="${cfg.top}" stroke="#141836" stroke-width="${innerW}"/>
          <polygon points="-40,12 0,32 0,72 -40,52" fill="${cfg.left}" stroke="#141836" stroke-width="${innerW}"/>
          <polygon points="40,12 0,32 0,72 40,52" fill="${cfg.right}" fill-opacity="0.82" stroke="#141836" stroke-width="${innerW}"/>
          <polygon points="0,-8 40,12 40,52 0,72 -40,52 -40,12" fill="none" stroke="#141836" stroke-width="${outerW}" stroke-linejoin="round"/>
          <text x="0" y="102" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">1. CUBE</text>
        </g>
        <!-- 2. SPHERE -->
        <g transform="translate(302,138)">
          <ellipse cx="${cfg.dx*0.5}" cy="46" rx="52" ry="12" fill="#94A3B8" fill-opacity="0.4"/>
          ${ao ? `<ellipse cx="0" cy="46" rx="18" ry="4.5" fill="#141836"/>` : ''}
          <circle r="44" fill="#FFF" stroke="#141836" stroke-width="${outerW}"/>
          <path d="${sun==='sr' ? 'M 12 42 A 44 44 0 0 1 -42 -8 A 36 40 0 0 0 12 42 Z' : 'M -12 42 A 44 44 0 0 0 42 -8 A 36 40 0 0 1 -12 42 Z'}" fill="#64748B" fill-opacity="0.72"/>
          ${ref ? `<path d="${sun==='sr' ? 'M -10 38 A 40 40 0 0 1 -38 10' : 'M 10 38 A 40 40 0 0 0 38 10'}" fill="none" stroke="#FFF" stroke-width="4" opacity="0.9"/>` : ''}
          <text x="0" y="78" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">2. SPHERE</text>
        </g>
        <!-- 3. CYLINDER -->
        <g transform="translate(476,120)">
          <ellipse cx="${cfg.dx*0.5}" cy="64" rx="50" ry="13" fill="#94A3B8" fill-opacity="0.4"/>
          ${ao ? `<path d="M -36 64 A 36 12 0 0 0 36 64" fill="none" stroke="#141836" stroke-width="5" stroke-linecap="round"/>` : ''}
          <path d="M -36 -6 V 62 A 36 12 0 0 0 36 62 V -6" fill="${cfg.left}" stroke="#141836" stroke-width="${outerW}"/>
          <rect x="${sun==='sr'?-34:6}" y="-4" width="26" height="66" fill="#475569" fill-opacity="0.62"/>
          ${ref ? `<line x1="${sun==='sr'?-30:30}" y1="0" x2="${sun==='sr'?-30:30}" y2="60" stroke="#FFF" stroke-width="3.5" opacity="0.85"/>` : ''}
          <ellipse cx="0" cy="-6" rx="36" ry="11" fill="${cfg.top}" stroke="#141836" stroke-width="${outerW}"/>
          <text x="0" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">3. CYLINDER</text>
        </g>
        <!-- 4. CONE -->
        <g transform="translate(640,120)">
          <polygon points="-34,64 ${cfg.dx+24},64 34,64" fill="#94A3B8" fill-opacity="0.4"/>
          <ellipse cx="${cfg.dx*0.45}" cy="64" rx="46" ry="11" fill="#94A3B8" fill-opacity="0.38"/>
          ${ao ? `<path d="M -36 64 A 36 12 0 0 0 36 64" fill="none" stroke="#141836" stroke-width="5" stroke-linecap="round"/>` : ''}
          <path d="M 0 -22 L -36 62 A 36 12 0 0 0 36 62 Z" fill="${cfg.left}" stroke="#141836" stroke-width="${outerW}" stroke-linejoin="round"/>
          <path d="M 0 -22 L ${sun==='sr'?-36:36} 62 A 36 12 0 0 ${sun==='sr'?0:1} 4 72 Z" fill="#475569" fill-opacity="0.62"/>
          <text x="0" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">4. CONE</text>
        </g>`;
      document.getElementById('ch11-cap').innerHTML = `<strong>${cfg.desc}</strong> (${ao ? 'AO ON' : 'AO OFF'} • ${ref ? 'Reflected Light ON' : 'Reflected OFF'} • ${lw ? '3-Weight ON' : 'Uniform Lines'})`;
    };
    document.querySelectorAll('.ch11-sun').forEach(b => b.addEventListener('click', () => {
      sun = b.dataset.s;
      document.querySelectorAll('.ch11-sun').forEach(x => x.classList.toggle('active', x === b));
      renderLight();
    }));
    ['ch11-ao', 'ch11-ref', 'ch11-lw'].forEach(id => document.getElementById(id).addEventListener('change', renderLight));
    renderLight();

    // Lab 2: Click-the-Shadow-Zone Visual Check
    const ZONES = [
      { key: 'core', label: 'CORE SHADOW (Terminator)', why: 'Correct! The Core Shadow is the darkest crescent band on the sphere turning away from direct sunlight.' },
      { key: 'ao', label: 'AMBIENT OCCLUSION (Contact Crease)', why: 'Correct! That pitch-dark contact crease under the resting base glues the sphere solidly to the table.' },
      { key: 'reflected', label: 'REFLECTED LIGHT', why: 'Correct! Bright light bounces off the white paper table back up onto the lower shadow rim.' },
      { key: 'highlight', label: 'HIGHLIGHT', why: 'Correct! The untouched paper highlight sits directly facing the 10:00 sun.' },
      { key: 'cast', label: 'CAST SHADOW', why: 'Correct! The Cast Shadow projects onto the ground plane away from the light source.' }
    ];
    let zIdx = 0;
    const updSpot = () => {
      document.getElementById('ch11-spot-prompt').textContent = zIdx < ZONES.length ? `Target (${zIdx + 1}/5): Click the ${ZONES[zIdx].label}` : '✓ All 5 Shadow Zones Mastered!';
    };
    document.querySelectorAll('#ch11-spot-svg .svg-hotspot').forEach(el => {
      el.addEventListener('click', () => {
        if (zIdx >= ZONES.length) zIdx = 0;
        const target = ZONES[zIdx];
        const fb = document.getElementById('ch11-spot-fb');
        if (el.dataset.zone === target.key) {
          fb.innerHTML = `<strong style="color:var(--mint-deep);">✓ ${target.label}:</strong> ${target.why}`;
          zIdx++;
          updSpot();
        } else {
          fb.innerHTML = `<strong style="color:var(--magenta-deep);">✕ You clicked "${el.dataset.zone.toUpperCase()}".</strong> Look for the <strong>${target.label}</strong> instead!`;
        }
      });
    });
    updSpot();

    initQuiz('ch11', CH11_QUIZ, onStateChange);
  },

  ch12: (onStateChange) => {
    // Lab 1: 24 Icons + Animated Stroke-Order Player
    let cat = 'all';
    let selectedIcon = ICONS_24[0];
    let strokeTimer = null;

    const playIcon = (ic) => {
      selectedIcon = ic;
      if (strokeTimer) { clearInterval(strokeTimer); strokeTimer = null; }
      const stageSvg = document.getElementById('ch12-stage-svg');
      const titleEl = document.getElementById('ch12-stage-title');
      const stepsEl = document.getElementById('ch12-steps-list');
      titleEl.textContent = `${ic.name} — (${ic.strokes.length} Strokes • ~6 Seconds)`;

      let step = 0;
      const drawUpTo = (n) => {
        stageSvg.innerHTML = ic.strokes.slice(0, n + 1).map(s => s.svg).join('');
        stepsEl.innerHTML = ic.strokes.map((s, idx) => `
          <div style="padding:7px 10px; border-radius:7px; border:1.5px solid ${idx===n?'#141836':'rgba(20,24,54,0.18)'}; background:${idx<=n?'#E0F2FE':'#FAFBFD'}; font-size:13.5px;">
            <strong class="mono" style="color:var(--cyan);">0${idx+1} //</strong> ${s.label}
          </div>`).join('');
      };
      drawUpTo(0);
      strokeTimer = setInterval(() => {
        step++;
        if (step >= ic.strokes.length) {
          clearInterval(strokeTimer);
          strokeTimer = null;
          return;
        }
        drawUpTo(step);
      }, 750);
    };

    const renderIcons = () => {
      const q = (document.getElementById('ch12-search').value || '').toLowerCase().trim();
      const list = ICONS_24.filter(ic => (cat === 'all' || ic.cat === cat) && (!q || ic.name.toLowerCase().includes(q) || ic.tip.toLowerCase().includes(q)));
      document.getElementById('ch12-icons').innerHTML = list.map(ic => `
        <button class="icon-card ${ic.id===selectedIcon.id?'active':''}" data-id="${ic.id}">
          <svg viewBox="0 0 60 56">${ic.strokes.map(s => s.svg).join('')}</svg>
          <div style="text-align:left;"><div style="font-weight:700; font-size:13px;">${ic.name}</div><div class="card-p" style="font-size:11.5px;">${ic.tip}</div></div>
        </button>`).join('');
      document.querySelectorAll('#ch12-icons .icon-card').forEach(btn => {
        btn.addEventListener('click', () => {
          const ic = ICONS_24.find(x => x.id === Number(btn.dataset.id));
          if (ic) {
            document.querySelectorAll('#ch12-icons .icon-card').forEach(x => x.classList.toggle('active', x === btn));
            playIcon(ic);
          }
        });
      });
    };
    document.getElementById('ch12-search').addEventListener('input', renderIcons);
    document.getElementById('ch12-play-btn').addEventListener('click', () => playIcon(selectedIcon));
    document.querySelectorAll('.ch12-cat').forEach(b => b.addEventListener('click', () => {
      cat = b.dataset.c;
      document.querySelectorAll('.ch12-cat').forEach(x => x.classList.toggle('active', x === b));
      renderIcons();
    }));
    renderIcons();
    playIcon(ICONS_24[0]);

    // Lab 2: Bean-Body Pose Builder
    let emo = 'presenting', prop = 'board', lang = 'en';
    const SPEECH = {
      presenting: { en: '"Flash triage cuts latency 97%!"', de: '"Das Finanzamt akzeptiert den Beleg!"' },
      excited:    { en: '"Zero bleed on 120gsm paper!"', de: '"Endlich verstehe ich den Dativ!"' },
      confused:   { en: '"Wait—is B2C SaaS under OSS?"', de: '"Wohin (Akk) oder Wo (Dat)?"' },
      exhausted:  { en: '"Too many linear meeting notes…"', de: '"Die Umsatzsteuer·voranmeldung…"' }
    };
    const renderBean = () => {
      const tint = { presenting: '#E0F2FE', excited: '#D1FAE5', confused: '#EDE9FE', exhausted: '#FCE7F3' }[emo];
      const arms = {
        presenting: '<line x1="256" y1="98" x2="306" y2="74" stroke="#141836" stroke-width="3" stroke-linecap="round"/><line x1="216" y1="100" x2="202" y2="128" stroke="#141836" stroke-width="3" stroke-linecap="round"/>',
        excited:    '<polyline points="216,96 196,68 202,52" fill="none" stroke="#141836" stroke-width="3" stroke-linecap="round"/><polyline points="256,96 276,68 270,52" fill="none" stroke="#141836" stroke-width="3" stroke-linecap="round"/>',
        confused:   '<path d="M 254 96 Q 272 86 254 68" fill="none" stroke="#141836" stroke-width="3" stroke-linecap="round"/><line x1="216" y1="100" x2="204" y2="128" stroke="#141836" stroke-width="3" stroke-linecap="round"/><text x="260" y="54" font-family="IBM Plex Mono, monospace" font-size="22" font-weight="700" fill="#7C3AED">?</text>',
        exhausted:  '<line x1="220" y1="106" x2="210" y2="144" stroke="#141836" stroke-width="3" stroke-linecap="round"/><line x1="254" y1="106" x2="262" y2="144" stroke="#141836" stroke-width="3" stroke-linecap="round"/>'
      }[emo];
      const propSvg = {
        board: '<rect x="316" y="42" width="128" height="84" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.4"/><line x1="338" y1="126" x2="328" y2="168" stroke="#141836" stroke-width="2.4"/><line x1="422" y1="126" x2="432" y2="168" stroke="#141836" stroke-width="2.4"/><polyline points="334,102 362,84 390,90 426,58" fill="none" stroke="#10B981" stroke-width="3"/>',
        laptop: '<rect x="310" y="108" width="112" height="60" rx="4" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><polygon points="334,68 398,68 392,108 328,108" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/><line x1="322" y1="108" x2="412" y2="108" stroke="#141836" stroke-width="4"/>',
        ordner: '<rect x="328" y="64" width="44" height="104" rx="4" fill="#0EA5E9" fill-opacity="0.3" stroke="#141836" stroke-width="2.2"/><rect x="378" y="64" width="44" height="104" rx="4" fill="#EC4899" fill-opacity="0.24" stroke="#141836" stroke-width="2.2"/><text x="350" y="100" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">USt</text><text x="400" y="100" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">OSS</text>'
      }[prop];

      document.getElementById('ch12-bean-svg').innerHTML = `
        <line x1="90" y1="168" x2="670" y2="168" stroke="#94A3B8" stroke-width="2.4" stroke-linecap="round"/>
        <circle cx="${emo==='exhausted'?242:236}" cy="${emo==='exhausted'?66:58}" r="18" fill="#FFF" stroke="#141836" stroke-width="2.6"/>
        <rect x="216" y="${emo==='exhausted'?88:82}" width="40" height="52" rx="16" transform="${emo==='exhausted'?'rotate(10 236 114)':''}" fill="${tint}" stroke="#141836" stroke-width="2.6"/>
        ${arms}
        <line x1="226" y1="134" x2="222" y2="168" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
        <line x1="246" y1="134" x2="250" y2="168" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
        ${propSvg}
        <!-- Speech Bubble -->
        <path d="M 476 42 H 724 V 104 H 516 L 486 124 L 494 104 H 476 Z" fill="#FFFDF5" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
        <text x="600" y="79" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16.5" font-weight="700" fill="#141836">${SPEECH[emo][lang]}</text>`;
      document.getElementById('ch12-bean-cap').innerHTML = `<strong>4-Second Bean Recipe:</strong> 1 circle head + 1 tinted jellybean torso + 2 gesture arms + 1 ground line + 1 anchor prop. Zero facial anatomy required!`;
    };
    document.querySelectorAll('.ch12-emo').forEach(b => b.addEventListener('click', () => { emo = b.dataset.e; document.querySelectorAll('.ch12-emo').forEach(x => x.classList.toggle('active', x === b)); renderBean(); }));
    document.querySelectorAll('.ch12-prop').forEach(b => b.addEventListener('click', () => { prop = b.dataset.p; document.querySelectorAll('.ch12-prop').forEach(x => x.classList.toggle('active', x === b)); renderBean(); }));
    document.querySelectorAll('.ch12-lang').forEach(b => b.addEventListener('click', () => { lang = b.dataset.l; document.querySelectorAll('.ch12-lang').forEach(x => x.classList.toggle('active', x === b)); renderBean(); }));
    renderBean();
    initMetaphorsLab();

    // Practice Studio: 10m Timer + 14-Day Bootcamp
    const updClock = () => {
      const el = document.getElementById('ch12-clock');
      if (el) el.textContent = `${String(Math.floor(ch12TimerSecs/60)).padStart(2,'0')}:${String(ch12TimerSecs%60).padStart(2,'0')}`;
    };
    document.getElementById('ch12-tbtn').addEventListener('click', () => {
      const b = document.getElementById('ch12-tbtn');
      if (ch12TimerId) { stopCh12Timer(); b.textContent = '▶ Resume'; }
      else {
        b.textContent = '⏸ Pause';
        ch12TimerId = setInterval(() => {
          if (ch12TimerSecs > 0) { ch12TimerSecs--; updClock(); }
          else { stopCh12Timer(); if (b) b.textContent = '✓ Done!'; }
        }, 1000);
      }
    });
    document.getElementById('ch12-treset').addEventListener('click', () => {
      stopCh12Timer(); ch12TimerSecs = 600; updClock();
      document.getElementById('ch12-tbtn').textContent = '▶ Start 10m';
    });

    const renderBoot = () => {
      const days = getState().bootcampDays;
      document.getElementById('ch12-boot-grid').innerHTML = BOOT_DAYS.map((d, i) => {
        const on = days.includes(i);
        return `<button class="check-btn ch12-bday ${on ? 'done' : ''}" data-i="${i}"><span class="chk-box">${on ? '✓' : ''}</span><span class="chk-txt" style="font-size:13.5px;">${d}</span></button>`;
      }).join('');
      document.querySelectorAll('.ch12-bday').forEach(btn => btn.addEventListener('click', () => {
        toggleBootcampDay(Number(btn.dataset.i));
        renderBoot();
        if (onStateChange) onStateChange();
      }));
      const pct = Math.round((days.length / 14) * 100);
      document.getElementById('ch12-boot-pill').textContent = `${days.length} / 14 Days Done`;
      document.getElementById('ch12-boot-bar').style.width = `${pct}%`;
    };
    document.getElementById('ch12-bclear').addEventListener('click', () => { clearBootcampDays(); renderBoot(); if (onStateChange) onStateChange(); });
    updClock();
    renderBoot();
    initQuiz('ch12', CH12_QUIZ, onStateChange);
  },

  ch13: (onStateChange) => {
    const STORIES = {
      deutsch: {
        svg: `
          ${[
            [18, '#FCE7F3', '1. HOOK // BEIM FINANZAMT', '"Ich möchte eine Fristverlängerung beantragen."', 'die Frist (Magenta)'],
            [264, '#E0F2FE', '2. MECHANISM // DATIV', '"Reichen Sie den Beleg bis zum 10. Mai nach."', 'bis zum + Dativ'],
            [510, '#D1FAE5', '3. OUTCOME // GENEHMIGT', '"Vielen Dank! Alles ist rechtzeitig erledigt."', 'erledigt ✓']
          ].map(([x, fill, head, quote, tag], idx) => `
            <rect x="${x}" y="14" width="232" height="196" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
            <rect x="${x}" y="14" width="232" height="28" rx="6" fill="${fill}" stroke="#141836" stroke-width="1.6"/>
            <text x="${x+116}" y="32" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">${head}</text>
            <line x1="${x+20}" y1="176" x2="${x+212}" y2="176" stroke="#94A3B8" stroke-width="2"/>
            <circle cx="${x+68}" cy="116" r="12" fill="#FFF" stroke="#141836" stroke-width="2"/>
            <rect x="${x+56}" y="132" width="24" height="32" rx="10" fill="${fill}" stroke="#141836" stroke-width="2"/>
            <circle cx="${x+162}" cy="116" r="12" fill="#FFF" stroke="#141836" stroke-width="2"/>
            <rect x="${x+150}" y="132" width="24" height="32" rx="10" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
            <rect x="${x+16}" y="52" width="200" height="44" rx="6" fill="#FFFDF5" stroke="#141836" stroke-width="1.5"/>
            <text x="${x+116}" y="78" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13">${quote}</text>
            <text x="${x+116}" y="198" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#525B7A">${tag}</text>`).join('')}`,
        cap: '<strong>Deutsch Dialogue Storyboard:</strong> Three crisp panels + one shared ground line lock separable verbs (<em>nach·reichen</em>) and polite official phrasing into episodic scene memory.'
      },
      tax: {
        svg: `
          ${[
            [18, '#FCE7F3', '1. PAIN // MANUAL VAT', '45m manual check per EU invoice', 'ERROR RISK !'],
            [264, '#E0F2FE', '2. MECHANISM // COPILOT', 'VIES API + Art. 58 Reasoning', 'PARTNER HITL'],
            [510, '#D1FAE5', '3. PROOF // SIGNED ✓', '3m review • 100% audit trail', '-93% TIME ✓']
          ].map(([x, fill, head, line, tag]) => `
            <rect x="${x}" y="14" width="232" height="196" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
            <rect x="${x}" y="14" width="232" height="28" rx="6" fill="${fill}" stroke="#141836" stroke-width="1.6"/>
            <text x="${x+116}" y="32" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">${head}</text>
            <line x1="${x+20}" y1="176" x2="${x+212}" y2="176" stroke="#94A3B8" stroke-width="2"/>
            <rect x="${x+34}" y="70" width="164" height="68" rx="7" fill="${fill}" stroke="#141836" stroke-width="2"/>
            <text x="${x+116}" y="109" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" font-weight="700">${line}</text>
            <text x="${x+116}" y="198" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#141836">${tag}</text>`).join('')}`,
        cap: '<strong>Tax Advisory Storyboard:</strong> Partners understand Pain → Mechanism → Proof in 5 seconds when framed across 3 balanced visual beats.'
      },
      ai: {
        svg: `
          ${[
            [18, '#FEF3C7', '1. TRIGGER // INTAKE', 'Client email hits Flash Triage', '0.2s CLASSIFY'],
            [264, '#FCE7F3', '2. FIREWALL // HITL', 'Reasoning drafts, ZERO write keys', 'HUMAN APPROVE'],
            [510, '#D1FAE5', '3. ACTION // MCP WRITE', 'Signed payload commits Row #14', 'AUDIT LOGGED ✓']
          ].map(([x, fill, head, line, tag]) => `
            <rect x="${x}" y="14" width="232" height="196" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
            <rect x="${x}" y="14" width="232" height="28" rx="6" fill="${fill}" stroke="#141836" stroke-width="1.6"/>
            <text x="${x+116}" y="32" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">${head}</text>
            <line x1="${x+20}" y1="176" x2="${x+212}" y2="176" stroke="#94A3B8" stroke-width="2"/>
            <rect x="${x+30}" y="70" width="172" height="68" rx="7" fill="${fill}" stroke="#141836" stroke-width="2"/>
            <text x="${x+116}" y="109" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" font-weight="700">${line}</text>
            <text x="${x+116}" y="198" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#141836">${tag}</text>`).join('')}`,
        cap: '<strong>AI Launch Pitch Storyboard:</strong> Turns an intimidating multi-agent security architecture into a crystal-clear 3-frame narrative anyone in the room can trust.'
      }
    };
    const setStory = (s) => {
      document.querySelectorAll('.ch13-sc').forEach(b => b.classList.toggle('active', b.dataset.s === s));
      document.getElementById('ch13-svg').innerHTML = STORIES[s].svg;
      document.getElementById('ch13-cap').innerHTML = STORIES[s].cap;
    };
    document.querySelectorAll('.ch13-sc').forEach(b => b.addEventListener('click', () => setStory(b.dataset.s)));
    setStory('deutsch');
    initQuiz('ch13', CH13_QUIZ, onStateChange);
  }
};
