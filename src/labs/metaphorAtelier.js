/* =========================================================================
   APPENDIX J: THE CLEVER VISUAL METAPHORS ATELIER
   12 Artsy-Yet-Easy Editorial Metaphors (4 Progressive Steps + Trace Pad)
   ========================================================================= */

export const CLEVER_METAPHORS = [
  {
    id: 'prism',
    cat: 'clarity',
    name: '1. The Glass Prism of Clarity',
    concept: 'Synthesizing Raw Complexity → Clear Themes (Tax / AI / Strategy)',
    shapes: '1 Triangle + 4 Straight Lines',
    steps: [
      { txt: 'Draw one bold equilateral glass triangle dead-center.', svg: '<polygon points="60,18 92,76 28,76" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Shoot one thick dark input beam hitting the left wall.', svg: '<line x1="6" y1="54" x2="43" y2="54" stroke="#141836" stroke-width="4.5" stroke-linecap="round"/><text x="20" y="45" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="6.5" font-weight="700" fill="#525B7A">RAW</text>' },
      { txt: 'Refract 3 crisp diverging colored rays out the right wall.', svg: '<line x1="74" y1="45" x2="114" y2="30" stroke="#0EA5E9" stroke-width="3" stroke-linecap="round"/><line x1="77" y1="53" x2="114" y2="53" stroke="#EC4899" stroke-width="3" stroke-linecap="round"/><line x1="80" y1="61" x2="114" y2="76" stroke="#10B981" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Glaze soft Cyan sheen inside glass + shadow underline.', svg: '<polygon points="60,18 92,76 60,76" fill="#0EA5E9" fill-opacity="0.18"/><line x1="22" y1="81" x2="98" y2="81" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" opacity="0.55"/>' }
    ]
  },
  {
    id: 'keyhole',
    cat: 'mindset',
    name: '2. Keyhole Into Another World',
    concept: 'Unlocking a New Language, Mental Model, or Perspective Shift',
    shapes: '1 Circle + 1 Trapezoid + 2 Tiny Peaks',
    steps: [
      { txt: 'Draw a bold vertical dark frame + keyhole outline inside.', svg: '<rect x="18" y="8" width="84" height="78" rx="8" fill="#141836"/><path d="M 52 45 A 14 14 0 1 1 68 45 L 74 74 H 46 Z" fill="#E0F2FE" stroke="#00D4FF" stroke-width="1.8" stroke-linejoin="round"/>' },
      { txt: 'Sketch tiny overlapping mountain peaks inside bottom.', svg: '<polygon points="46,74 58,52 70,74" fill="#0EA5E9" fill-opacity="0.55" stroke="#141836" stroke-width="1.4"/><polygon points="56,74 66,58 74,74" fill="#7C3AED" fill-opacity="0.5" stroke="#141836" stroke-width="1.2"/>' },
      { txt: 'Add a glowing Amber crescent moon + sparkle star above!', svg: '<circle cx="62" cy="31" r="5" fill="#F59E0B"/><circle cx="65" cy="29" r="4.5" fill="#E0F2FE"/><circle cx="53" cy="28" r="1.6" fill="#EC4899"/>' },
      { txt: 'Add 4 subtle Cyan glow ticks radiating from the frame.', svg: '<path d="M 8 24 H 14 M 8 47 H 13 M 106 24 H 112 M 107 47 H 112" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'snip',
    cat: 'strategy',
    name: '3. Snipping the Sandbag (Subtract to Rise)',
    concept: 'Removing Friction, Legacy Processes, or Bad Habits to Accelerate',
    shapes: '1 Teardrop + 2 Little Bags + 1 X-Snip',
    steps: [
      { txt: 'Draw a buoyant balloon canopy + tiny wicker basket.', svg: '<path d="M 60 10 C 78 10 82 32 67 46 H 53 C 38 32 42 10 60 10 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/><rect x="53" y="51" width="14" height="10" rx="2" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/><line x1="56" y1="46" x2="56" y2="51" stroke="#141836" stroke-width="1.5"/><line x1="64" y1="46" x2="64" y2="51" stroke="#141836" stroke-width="1.5"/>' },
      { txt: 'Hang two heavy Cool Grey sandbags dragging below.', svg: '<line x1="56" y1="61" x2="46" y2="73" stroke="#141836" stroke-width="1.6"/><circle cx="44" cy="79" r="7" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/><line x1="64" y1="61" x2="74" y2="72" stroke="#141836" stroke-width="1.6" stroke-dasharray="2 2"/><circle cx="77" cy="82" r="7" fill="#94A3B8" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Slash a crisp Magenta "✂ SNIP" cross through right rope!', svg: '<path d="M 66 64 L 78 72 M 78 64 L 66 72" stroke="#EC4899" stroke-width="2.6" stroke-linecap="round"/>' },
      { txt: 'Add twin Mint upward lift chevrons beside balloon!', svg: '<path d="M 28 36 L 34 28 L 40 36 M 80 36 L 86 28 L 92 36" fill="none" stroke="#10B981" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' }
    ]
  },
  {
    id: 'thread',
    cat: 'clarity',
    name: '4. Ariadne\'s Red Thread Through the Maze',
    concept: 'Finding the Single Logical Path Through Tax Law or Complex Code',
    shapes: '3 Nested Open Squares + 1 Magenta Path',
    steps: [
      { txt: 'Draw a clean outer square frame with entry & exit gaps.', svg: '<path d="M 22 24 V 14 H 98 V 78 H 22 V 46" fill="none" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Nest 2 simpler inner maze walls (keep gaps generous!).', svg: '<path d="M 38 26 H 82 V 64 H 38 V 38 H 66 V 52" fill="none" stroke="#94A3B8" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Weave ONE bright Magenta thread cleanly from left to center!', svg: '<path d="M 8 34 H 30 V 72 H 90 V 20 H 30 V 32 H 54 V 46 H 60" fill="none" stroke="#EC4899" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>' },
      { txt: 'Drop a glowing Mint star ★ right at the center treasure!', svg: '<circle cx="60" cy="46" r="6" fill="#10B981" stroke="#141836" stroke-width="1.6"/>' }
    ]
  },
  {
    id: 'tightrope',
    cat: 'strategy',
    name: '5. Tightrope + Safety Net (Bold Bet, Zero Ruin)',
    concept: 'AI Guardrails, HITL Sign-Off, Calculated Risk Management',
    shapes: '2 Cliff Boxes + 1 Wire + 1 Cross-Hatched Net',
    steps: [
      { txt: 'Draw twin steep cliff pillars on left & right edges.', svg: '<rect x="6" y="34" width="22" height="54" rx="2" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/><rect x="92" y="34" width="22" height="54" rx="2" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Stretch one razor-taut horizontal tightrope across.', svg: '<line x1="28" y1="38" x2="92" y2="38" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Balance a tiny minimalist walker + long pole dead-center.', svg: '<circle cx="60" cy="17" r="4.5" fill="#E0F2FE" stroke="#141836" stroke-width="1.8"/><line x1="60" y1="22" x2="60" y2="33" stroke="#141836" stroke-width="2.2"/><line x1="60" y1="33" x2="55" y2="38" stroke="#141836" stroke-width="2"/><line x1="60" y1="33" x2="65" y2="38" stroke="#141836" stroke-width="2"/><line x1="38" y1="26" x2="82" y2="29" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'String a curved Acid Mint safety net directly underneath!', svg: '<path d="M 28 56 Q 60 72 92 56" fill="none" stroke="#10B981" stroke-width="2.6"/><path d="M 28 62 Q 60 78 92 62 M 44 61 V 67 M 60 64 V 70 M 76 61 V 67" fill="none" stroke="#10B981" stroke-width="1.4" stroke-dasharray="3 2"/>' }
    ]
  },
  {
    id: 'sieve',
    cat: 'clarity',
    name: '6. The Signal-to-Noise Colander',
    concept: 'Cognitive Compression, Filtering Podcast Noise Into 3 Pure Takeaways',
    shapes: '1 Half-Circle Bowl + Jagged Blocks + 3 Drops',
    steps: [
      { txt: 'Draw a wide semicircular colander bowl + side handles.', svg: '<path d="M 24 38 H 96 A 36 28 0 0 1 24 38 Z" fill="#EEF2FC" stroke="#141836" stroke-width="2.4"/><path d="M 16 38 H 24 M 96 38 H 104" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Pile 4 messy Cool Grey "NOISE" shapes sitting inside top.', svg: '<rect x="34" y="22" width="14" height="12" transform="rotate(-12 41 28)" fill="#CBD5E1" stroke="#141836" stroke-width="1.6"/><polygon points="56,16 70,22 62,34 50,28" fill="#94A3B8" stroke="#141836" stroke-width="1.6"/><circle cx="80" cy="28" r="7" fill="#CBD5E1" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Punch 3 tiny sieve holes along the bottom arc.', svg: '<circle cx="48" cy="59" r="2" fill="#141836"/><circle cx="60" cy="61" r="2" fill="#141836"/><circle cx="72" cy="59" r="2" fill="#141836"/>' },
      { txt: 'Drip 3 pure glowing Cyan signal teardrops into a cup below!', svg: '<path d="M 48 68 C 44 74 52 74 48 68 Z M 60 72 C 56 78 64 78 60 72 Z M 72 68 C 68 74 76 74 72 68 Z" fill="#0EA5E9" stroke="#0369A1" stroke-width="1.4"/><path d="M 42 78 H 78 L 74 88 H 46 Z" fill="#D1FAE5" stroke="#047857" stroke-width="1.8"/>' }
    ]
  },
  {
    id: 'roots',
    cat: 'growth',
    name: '7. Tiny Sapling, Massive Invisible Roots',
    concept: 'Overnight Fluency Is Built on 90 Days of Quiet Daily Practice',
    shapes: '1 Ground Line + 3 Leaves Up + 5 Mirror Roots Down',
    steps: [
      { txt: 'Draw a bold horizontal horizon line across the middle.', svg: '<line x1="12" y1="44" x2="108" y2="44" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Grow a modest cute 3-leaf Acid Mint sprout above.', svg: '<line x1="60" y1="44" x2="60" y2="20" stroke="#047857" stroke-width="2.6"/><ellipse cx="50" cy="30" rx="8" ry="5" transform="rotate(-25 50 30)" fill="#D1FAE5" stroke="#047857" stroke-width="1.8"/><ellipse cx="70" cy="26" rx="8" ry="5" transform="rotate(25 70 26)" fill="#D1FAE5" stroke="#047857" stroke-width="1.8"/><ellipse cx="60" cy="14" rx="5" ry="7" fill="#10B981" fill-opacity="0.5" stroke="#047857" stroke-width="1.8"/>' },
      { txt: 'Spread a sweeping symmetrical web of deep Cyan roots below!', svg: '<path d="M 60 44 C 58 60, 44 68, 22 76 M 60 44 C 62 60, 76 68, 98 76 M 60 44 C 54 64, 48 76, 40 86 M 60 44 C 66 64, 72 76, 80 86 M 60 44 V 84" fill="none" stroke="#0EA5E9" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Tint the underground soil layer soft Indigo wash!', svg: '<rect x="14" y="45" width="92" height="42" rx="4" fill="#EEF2FC" fill-opacity="0.5"/>' }
    ]
  },
  {
    id: 'bridge',
    cat: 'strategy',
    name: '8. Building the Bridge While Crossing It',
    concept: 'Iterative Learning, Shipping v1 Before Feeling 100% Ready',
    shapes: '2 Cliff Edges + 4 Planks + 1 Dashed Future Plank',
    steps: [
      { txt: 'Draw left cliff ("NOW") and right cliff ("GOAL").', svg: '<rect x="6" y="48" width="24" height="40" rx="2" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/><rect x="90" y="48" width="24" height="40" rx="2" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>' },
      { txt: 'Lay 3 solid completed plank rectangles extending right.', svg: '<rect x="30" y="48" width="16" height="8" rx="1" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/><rect x="48" y="48" width="16" height="8" rx="1" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Float a dashed Magenta "NEXT STEP" plank mid-air!', svg: '<rect x="68" y="48" width="18" height="8" rx="1" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.8" stroke-dasharray="3 2"/>' },
      { txt: 'Add a tiny bean builder placing the plank + goal flag!', svg: '<circle cx="56" cy="26" r="5" fill="#FFF" stroke="#141836" stroke-width="1.8"/><path d="M 56 31 V 42 M 56 36 L 68 44 M 56 42 L 51 48 M 56 42 L 60 48" stroke="#141836" stroke-width="2" stroke-linecap="round"/><line x1="102" y1="48" x2="102" y2="26" stroke="#047857" stroke-width="2"/><polygon points="102,26 114,31 102,36" fill="#10B981"/>' }
    ]
  },
  {
    id: 'nesting',
    cat: 'clarity',
    name: '9. Nested Matryoshka Scopes',
    concept: 'Hierarchy of Rules (EU Directive → National Law → Client Case)',
    shapes: '3 Concentric Rounded Domes (Big → Med → Core)',
    steps: [
      { txt: 'Draw one tall outer dome arch resting on a flat base.', svg: '<path d="M 20 84 V 44 A 40 36 0 0 1 100 44 V 84 Z" fill="#E0F2FE" fill-opacity="0.45" stroke="#0EA5E9" stroke-width="2.2"/>' },
      { txt: 'Nest a medium middle dome centered inside it.', svg: '<path d="M 34 84 V 54 A 26 24 0 0 1 86 54 V 84 Z" fill="#EDE9FE" fill-opacity="0.6" stroke="#7C3AED" stroke-width="2.2"/>' },
      { txt: 'Nest a glowing solid Magenta core dome at center.', svg: '<path d="M 48 84 V 66 A 12 12 0 0 1 72 66 V 84 Z" fill="#EC4899" fill-opacity="0.7" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Drop crisp 1-word micro-labels along each dome crown!', svg: '<text x="60" y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="7" font-weight="700" fill="#0369A1">EU LAW</text><text x="60" y="45" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="7" font-weight="700" fill="#6D28D9">UStG</text><text x="60" y="75" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="6.5" font-weight="700" fill="#FFF">CASE</text>' }
    ]
  },
  {
    id: 'northstar',
    cat: 'mindset',
    name: '10. Tangled Scribble → Laser North Star',
    concept: 'Cutting Through Overwhelm to One Decisive Direction',
    shapes: '1 Loopy Scribble + 1 Bold Arrow + 1 4-Point Star',
    steps: [
      { txt: 'Draw a loose, tangled Cool Grey scribble ball on left.', svg: '<path d="M 18 52 C 10 34, 34 26, 26 48 C 18 68, 42 64, 38 44 C 34 28, 48 40, 46 52" fill="none" stroke="#94A3B8" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Pull ONE razor-straight Cyan laser line shooting right!', svg: '<line x1="46" y1="48" x2="88" y2="48" stroke="#0EA5E9" stroke-width="3.2" stroke-linecap="round"/><polygon points="84,42 94,48 84,54" fill="#0EA5E9"/>' },
      { txt: 'Draw a crisp 4-point diamond North Star on the far right.', svg: '<polygon points="104,24 108,42 118,48 108,54 104,72 100,54 90,48 100,42" fill="#FEF3C7" stroke="#141836" stroke-width="1.8" stroke-linejoin="round"/>' },
      { txt: 'Add Magenta focus halo ticks around the star!', svg: '<circle cx="104" cy="48" r="3" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'snowball',
    cat: 'growth',
    name: '11. Compounding Momentum Slope',
    concept: 'Why Tiny Daily 10-Min Habits Become Unstoppable Over 90 Days',
    shapes: '1 Slanted Ramp + 3 Growing Circles + Speed Lines',
    steps: [
      { txt: 'Draw one crisp diagonal downhill ramp from top-left to bottom-right.', svg: '<line x1="12" y1="22" x2="108" y2="82" stroke="#141836" stroke-width="2.6" stroke-linecap="round"/>' },
      { txt: 'Roll 3 progressively larger circles down the slope (Small → Med → Giant).', svg: '<circle cx="24" cy="22" r="5" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.8"/><circle cx="52" cy="36" r="10" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2"/><circle cx="88" cy="52" r="17" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>' },
      { txt: 'Add curved swirl texture + speed dashes behind giant ball!', svg: '<path d="M 80 48 A 8 8 0 0 1 94 56 M 66 28 L 76 34 M 62 36 L 70 40" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Stamp tiny Day 1 / Day 30 / Day 90 labels along slope!', svg: '<text x="20" y="42" font-family="IBM Plex Mono, monospace" font-size="6.5" font-weight="700" fill="#0369A1">D1</text><text x="44" y="60" font-family="IBM Plex Mono, monospace" font-size="6.5" font-weight="700" fill="#6D28D9">D30</text><text x="76" y="84" font-family="IBM Plex Mono, monospace" font-size="7" font-weight="700" fill="#047857">D90 ★</text>' }
    ]
  },
  {
    id: 'door',
    cat: 'mindset',
    name: '12. The Half-Open Light Door',
    concept: 'Curiosity, Beginning a New Chapter, Entering a New Domain',
    shapes: '1 Upright Frame + 1 Angled Door + 1 Yellow Floor Beam',
    steps: [
      { txt: 'Draw a simple upright doorway rectangle.', svg: '<rect x="38" y="14" width="44" height="68" fill="#FEF3C7" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Swing a crisp trapezoid door leaf inward from the left hinge!', svg: '<polygon points="38,14 66,22 66,74 38,82" fill="#141836"/><circle cx="58" cy="49" r="2.6" fill="#00D4FF"/>' },
      { txt: 'Cast a bold golden Amber trapezoid beam spilling onto the floor!', svg: '<polygon points="66,74 82,82 108,88 38,88 38,82" fill="#F59E0B" fill-opacity="0.38"/>' },
      { txt: 'Add 2 subtle Cyan sparkle stars floating in the open slit.', svg: '<circle cx="74" cy="34" r="2.2" fill="#0EA5E9"/><circle cx="72" cy="56" r="1.8" fill="#EC4899"/>' }
    ]
  }
];

export function renderMetaphorAtelierHTML() {
  return `
    <div class="lab magenta-accent" id="metaphor-atelier-lab">
      <div class="lab-head">
        <span class="lab-title">The Clever Metaphors Atelier // 12 Artsy Editorial Visuals Anyone Can Draw</span>
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          <button class="seg-btn ma-cat active" data-c="all">All (12)</button>
          <button class="seg-btn ma-cat" data-c="clarity">Clarity &amp; Signal (4)</button>
          <button class="seg-btn ma-cat" data-c="strategy">Strategy &amp; Risk (3)</button>
          <button class="seg-btn ma-cat" data-c="growth">Growth &amp; Habits (2)</button>
          <button class="seg-btn ma-cat" data-c="mindset">Mindset &amp; Vision (3)</button>
        </div>
      </div>
      <div class="lab-body">
        <!-- 4-STEP PROGRESSIVE METAPHOR STRIP -->
        <div class="card tinted" style="border-color:var(--magenta);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <div>
              <span id="ma-title" class="card-h" style="font-size:18px;"></span>
              <span id="ma-shapes" class="pill violet" style="margin-left:8px;"></span>
              <div id="ma-concept" class="mono" style="font-size:10.5px; font-weight:700; color:var(--magenta-deep); margin-top:3px;"></div>
            </div>
            <div style="display:flex; gap:7px;" class="no-print">
              <button id="ma-rand-btn" class="btn amber">🎲 Random Metaphor</button>
              <button id="ma-play-btn" class="btn mint">▶ Animate 4 Steps</button>
            </div>
          </div>
          <div id="ma-4strip" class="grid-4"></div>
        </div>

        <!-- LIVE GHOST TRACE-ALONG DOT-GRID PAD FOR METAPHORS -->
        <div class="card" style="border-color:var(--ink);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <span class="mono" style="font-size:11px; font-weight:700; color:var(--magenta); text-transform:uppercase;">Practice Drawing This Metaphor // Live Ghost Trace Pad</span>
            <div style="display:flex; flex-wrap:wrap; align-items:center; gap:7px;" class="no-print">
              <div class="segmented" role="group">
                <button class="seg-btn ma-pen active" data-p="ink">05 Ink</button>
                <button class="seg-btn ma-pen" data-p="cyan">Cyan</button>
                <button class="seg-btn ma-pen" data-p="mag">Magenta</button>
                <button class="seg-btn ma-pen" data-p="mint">Mint</button>
                <button class="seg-btn ma-pen" data-p="amber">Amber</button>
              </div>
              <label class="chk-lbl"><input id="ma-ghost-chk" type="checkbox" checked /> Ghost Trace</label>
              <button id="ma-undo" class="btn secondary">↶ Undo</button>
              <button id="ma-clear" class="btn secondary">✕ Clear</button>
              <button id="ma-save-png" class="btn mint">↓ Save PNG</button>
            </div>
          </div>
          <div class="sketchpad-wrap" style="position:relative; height:240px;">
            <svg id="ma-ghost-svg" viewBox="0 0 120 92" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none; opacity:0.22;"></svg>
            <canvas id="ma-canvas" class="sketchpad-canvas" style="position:relative; z-index:2; height:240px; background:transparent;"></canvas>
          </div>
        </div>

        <!-- 12 METAPHOR CARDS GRID -->
        <div id="ma-grid" class="grid-3"></div>
      </div>
    </div>
  `;
}

export function initMetaphorAtelier() {
  const lab = document.getElementById('metaphor-atelier-lab');
  if (!lab) return;

  let cat = 'all';
  let active = CLEVER_METAPHORS[0];
  let animTimer = null;

  // Trace Canvas
  const canvas = document.getElementById('ma-canvas');
  const ctx = canvas.getContext('2d');
  let pen = 'ink', strokes = [], cur = null;

  const redraw = () => {
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(260, Math.floor(rect.width)), h = 240;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#CBD5E1';
    for (let y = 20; y < h; y += 20) {
      for (let x = 20; x < w; x += 20) {
        ctx.beginPath(); ctx.arc(x, y, 1.2, 0, Math.PI * 2); ctx.fill();
      }
    }
    const all = cur ? [...strokes, cur] : strokes;
    all.forEach(st => {
      if (!st.pts.length) return;
      ctx.save();
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      if (st.pen === 'ink') { ctx.strokeStyle = '#141836'; ctx.lineWidth = 2.6; ctx.globalAlpha = 1; }
      else {
        const cols = { cyan: '#0EA5E9', mag: '#EC4899', mint: '#10B981', amber: '#F59E0B' };
        ctx.strokeStyle = cols[st.pen]; ctx.lineWidth = 13; ctx.globalAlpha = 0.28; ctx.globalCompositeOperation = 'multiply';
      }
      ctx.beginPath(); ctx.moveTo(st.pts[0].x, st.pts[0].y);
      for (let i = 1; i < st.pts.length; i++) ctx.lineTo(st.pts[i].x, st.pts[i].y);
      ctx.stroke();
      ctx.restore();
    });
  };

  const sizeCanvas = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(260, Math.floor(rect.width)) * dpr;
    canvas.height = 240 * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    redraw();
  };

  const getPt = (e) => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  canvas.addEventListener('pointerdown', (e) => { canvas.setPointerCapture(e.pointerId); cur = { pen, pts: [getPt(e)] }; redraw(); });
  canvas.addEventListener('pointermove', (e) => { if (!cur) return; cur.pts.push(getPt(e)); redraw(); });
  const endDraw = () => { if (!cur) return; strokes.push(cur); cur = null; redraw(); };
  canvas.addEventListener('pointerup', endDraw);
  canvas.addEventListener('pointercancel', endDraw);

  lab.querySelectorAll('.ma-pen').forEach(b => b.addEventListener('click', () => {
    pen = b.dataset.p;
    lab.querySelectorAll('.ma-pen').forEach(x => x.classList.toggle('active', x === b));
  }));
  document.getElementById('ma-undo').addEventListener('click', () => { strokes.pop(); redraw(); });
  document.getElementById('ma-clear').addEventListener('click', () => { strokes = []; redraw(); });
  document.getElementById('ma-save-png')?.addEventListener('click', () => {
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `looking-sketchy-metaphor-${active.id}.png`;
    a.click();
    window.__showToast?.('✓ Metaphor sketch saved as PNG!');
  });
  document.getElementById('ma-ghost-chk').addEventListener('change', (e) => {
    document.getElementById('ma-ghost-svg').style.opacity = e.target.checked ? '0.22' : '0';
  });

  const renderLesson = (hiStep = 3) => {
    document.getElementById('ma-title').textContent = active.name;
    document.getElementById('ma-shapes').textContent = `PRIMITIVES: ${active.shapes}`;
    document.getElementById('ma-concept').textContent = `USE FOR // ${active.concept.toUpperCase()}`;
    document.getElementById('ma-4strip').innerHTML = active.steps.map((st, idx) => {
      const cum = active.steps.slice(0, idx + 1).map(x => x.svg).join('');
      const hi = idx === hiStep;
      return `
        <div class="card" style="padding:11px; ${hi ? 'border-color:var(--magenta); box-shadow:3px 3px 0 var(--magenta);' : ''}">
          <span class="mono" style="font-size:10px; font-weight:700; color:var(--magenta);">STEP 0${idx + 1}</span>
          <div class="svg-box"><svg viewBox="0 0 120 92">${cum}</svg></div>
          <p class="card-p" style="font-size:12.5px;">${st.txt}</p>
        </div>`;
    }).join('');
    document.getElementById('ma-ghost-svg').innerHTML = active.steps.map(x => x.svg).join('');
  };

  const playAnim = () => {
    if (animTimer) { clearInterval(animTimer); animTimer = null; }
    let s = 0;
    renderLesson(0);
    animTimer = setInterval(() => {
      s++;
      if (s >= 4) { clearInterval(animTimer); animTimer = null; return; }
      renderLesson(s);
    }, 700);
  };
  document.getElementById('ma-play-btn').addEventListener('click', playAnim);
  document.getElementById('ma-rand-btn').addEventListener('click', () => {
    const pool = CLEVER_METAPHORS.filter(x => x.id !== active.id);
    active = pool[Math.floor(Math.random() * pool.length)] || CLEVER_METAPHORS[0];
    strokes = []; redraw(); playAnim(); renderGrid();
  });

  const renderGrid = () => {
    const list = cat === 'all' ? CLEVER_METAPHORS : CLEVER_METAPHORS.filter(x => x.cat === cat);
    document.getElementById('ma-grid').innerHTML = list.map(m => `
      <button class="card ma-card" data-id="${m.id}" style="text-align:left; cursor:pointer; ${m.id === active.id ? 'background:var(--magenta-wash); box-shadow:4px 4px 0 var(--ink);' : ''}">
        <div class="svg-box"><svg viewBox="0 0 120 92">${m.steps.map(x => x.svg).join('')}</svg></div>
        <div class="card-h" style="font-size:14.2px;">${m.name}</div>
        <div class="card-p" style="font-size:12.2px;">${m.concept}</div>
        <span class="mono" style="font-size:9.5px; font-weight:700; color:var(--violet);">${m.shapes}</span>
      </button>`).join('');

    lab.querySelectorAll('.ma-card').forEach(btn => btn.addEventListener('click', () => {
      const found = CLEVER_METAPHORS.find(x => x.id === btn.dataset.id);
      if (!found) return;
      active = found;
      strokes = []; redraw(); renderLesson(3); renderGrid();
      lab.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
  };

  lab.querySelectorAll('.ma-cat').forEach(b => b.addEventListener('click', () => {
    cat = b.dataset.c;
    lab.querySelectorAll('.ma-cat').forEach(x => x.classList.toggle('active', x === b));
    renderGrid();
  }));

  sizeCanvas();
  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => {
      if (!document.body.contains(canvas)) { ro.disconnect(); return; }
      sizeCanvas();
    });
    ro.observe(canvas.parentElement);
  }
  renderLesson(3);
  renderGrid();
}
