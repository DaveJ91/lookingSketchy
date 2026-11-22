/* =========================================================================
   APPENDIX P: BEYOND ISOMETRIC — 8 ESSENTIAL ILLUSTRATION STYLES TO MASTER
   8 Learnable Styles Gallery + Interactive "1 Object × 6 Styles" Transformer
   ========================================================================= */

export const ART_STYLES = [
  {
    id: 'flat-swiss',
    short: '1. Flat Swiss Bauhaus',
    name: '1. Flat Geometric / Swiss Bauhaus Style',
    difficulty: 'Beginner (5 sec)',
    bestFor: 'Product Specs, Dashboards, Icons, Ultra-Clean Diagrams',
    secret: 'Zero perspective, zero gradients—just pure circles, squares, and 45° cuts locked cleanly onto your dot-grid intersections!',
    recipe: [
      'Reduce every object to 2–3 pure geometric primitives (circle + rectangle + triangle) facing straight ahead.',
      'Use uniform 05 bold outer lines and flat single-pass pastel Mildliner fills with zero shading.',
      'Align every edge strictly to dot-grid horizontals and verticals for instant Swiss-poster crispness!'
    ],
    svg: `<svg viewBox="0 0 680 250">
      <rect x="20" y="16" width="640" height="218" rx="10" fill="#FFFDF7" stroke="#141836" stroke-width="2.2"/>
      <!-- Bold Bauhaus Geometric Composition -->
      <circle cx="148" cy="126" r="68" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="2.8"/>
      <rect x="116" y="94" width="64" height="64" fill="#FFF" stroke="#141836" stroke-width="2.6"/>
      <polygon points="116,158 180,94 180,158" fill="#EC4899" fill-opacity="0.72" stroke="#141836" stroke-width="2.2"/>
      <circle cx="136" cy="114" r="10" fill="#F59E0B" stroke="#141836" stroke-width="2"/>
      <!-- Flat Swiss Info Block Right -->
      <rect x="266" y="46" width="16" height="156" fill="#141836"/>
      <text x="304" y="84" font-family="Inter, sans-serif" font-size="24" font-weight="800" fill="#141836">FLAT GEOMETRIC</text>
      <text x="304" y="114" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0369A1">PURE PRIMITIVES • ZERO PERSPECTIVE</text>
      <rect x="304" y="132" width="96" height="26" rx="13" fill="#0EA5E9"/><text x="352" y="149" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#FFF">CIRCLE</text>
      <rect x="412" y="132" width="96" height="26" rx="13" fill="#EC4899"/><text x="460" y="149" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#FFF">SQUARE</text>
      <rect x="520" y="132" width="106" height="26" rx="13" fill="#10B981"/><text x="573" y="149" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#FFF">TRIANGLE</text>
      <text x="304" y="192" font-family="Patrick Hand, cursive" font-size="15" fill="#525B7A">Fastest style for live meetings — impossible to mess up angles!</text>
    </svg>`
  },
  {
    id: 'oblique',
    short: '2. 2.5D Oblique Pop',
    name: '2. 2.5D Oblique Extrusion (Easier Than Isometric!)',
    difficulty: 'Beginner+ (10 sec)',
    bestFor: 'Buttons, UI Cards, Stacked Books, Retro Pop Diagrams, Bar Charts',
    secret: 'Draw a completely flat front rectangle first—then pull 3 short parallel 45° lines diagonally up-right (1 dot over, 1 dot up) and connect them! Instant 3D with zero diamond math!',
    recipe: [
      'Draw the front face completely flat and square on your dot grid (write any text straight & level!).',
      'From the Top-Left, Top-Right, and Bottom-Right corners, pull 3 equal 45° diagonal lines (1–2 dots long).',
      'Connect the diagonal tips and shade the side wall 2× Cool Grey (or solid Indigo for neo-brutalist pop)!'
    ],
    svg: `<svg viewBox="0 0 680 250">
      <rect x="20" y="16" width="640" height="218" rx="10" fill="#FAFBFD" stroke="#141836" stroke-width="2.2"/>
      <!-- Step 1: Flat Front -->
      <text x="116" y="46" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">1. FLAT FRONT FACE</text>
      <rect x="64" y="76" width="104" height="104" rx="4" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/>
      <text x="116" y="133" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0369A1">LEVEL TEXT!</text>
      <!-- Step 2: Push 45° Back -->
      <text x="334" y="46" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">2. PUSH 3 CORNERS 45°</text>
      <rect x="272" y="76" width="104" height="104" rx="4" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <path d="M 272 76 L 300 48 M 376 76 L 404 48 M 376 180 L 404 152" stroke="#EC4899" stroke-width="2.6" stroke-dasharray="4 3"/>
      <!-- Step 3: Connect & Shade -->
      <text x="546" y="46" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">3. CLOSE &amp; GLAZE!</text>
      <polygon points="484,76 512,50 616,50 588,76" fill="#E0F2FE" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
      <polygon points="588,76 616,50 616,154 588,180" fill="#64748B" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="484" y="76" width="104" height="104" fill="#FFF" stroke="#141836" stroke-width="2.6"/>
      <text x="536" y="133" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#141836">2.5D POP!</text>
      <text x="340" y="216" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">Bonus: Unlike isometric, your front labels stay 100% horizontal and easy to write!</text>
    </svg>`
  },
  {
    id: 'blueprint',
    short: '3. Plan & Elevation',
    name: '3. Orthographic Blueprint (Top-Down Plan + Dimension Ticks)',
    difficulty: 'Beginner (10 sec)',
    bestFor: 'Room/Desk Maps, Spatial Flows, Travel Maps, Technical Specs',
    secret: 'Draw strictly bird\'s-eye top-down (Plan) or dead-flat front view (Elevation) and add thin outer Cyan dimension lines with 45° architectural slash ticks (`|--- 120cm ---|`)!',
    recipe: [
      'Draw crisp 90° walls and furniture strictly from straight overhead (tables = rectangles, chairs = arcs, plants = star circles).',
      'Draw delicate 01 dimension lines 1 dot outside the walls with tiny 45° tick slashes at corners.',
      'Add a tiny North compass arrow & scale bar in the corner—instant architect credibility!'
    ],
    svg: `<svg viewBox="0 0 680 250">
      <rect x="20" y="16" width="640" height="218" rx="10" fill="#F0F9FF" stroke="#0369A1" stroke-width="2.4"/>
      <!-- Top-Down Architectural Studio Plan -->
      <rect x="86" y="54" width="260" height="146" fill="#FFF" stroke="#0369A1" stroke-width="3.2"/>
      <!-- Desk Top-Down -->
      <rect x="116" y="66" width="144" height="52" rx="3" fill="#E0F2FE" stroke="#0369A1" stroke-width="2"/>
      <rect x="158" y="76" width="54" height="30" rx="2" fill="#FFF" stroke="#0369A1" stroke-width="1.6"/>
      <text x="185" y="95" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">A5 PAD</text>
      <!-- Chair Top-Down -->
      <circle cx="188" cy="146" r="18" fill="#EEF2FC" stroke="#0369A1" stroke-width="1.8"/>
      <!-- Plant Top-Down -->
      <circle cx="308" cy="92" r="20" fill="#D1FAE5" stroke="#047857" stroke-width="1.8" stroke-dasharray="4 3"/>
      <circle cx="308" cy="92" r="8" fill="#10B981"/>
      <!-- Dimension Lines with 45-degree Architectural Ticks -->
      <g stroke="#0EA5E9" stroke-width="1.5">
        <line x1="86" y1="38" x2="346" y2="38"/><line x1="80" y1="44" x2="92" y2="32"/><line x1="340" y1="44" x2="352" y2="32"/>
        <line x1="64" y1="54" x2="64" y2="200"/><line x1="58" y1="60" x2="70" y2="48"/><line x1="58" y1="206" x2="70" y2="194"/>
      </g>
      <text x="216" y="33" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">← 320 cm →</text>
      <!-- Right Technical Spec Box -->
      <text x="386" y="76" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#0369A1">ARCHITECTURAL PLAN</text>
      <text x="386" y="106" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• Bird's-eye top-down view</text>
      <text x="386" y="130" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• 45° slash dimension ticks</text>
      <text x="386" y="154" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• Zero foreshortening errors!</text>
      <rect x="386" y="172" width="234" height="32" rx="6" fill="#0369A1"/>
      <text x="503" y="192" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#FFF">SCALE 1:20 • NORTH ↑</text>
    </svg>`
  },
  {
    id: 'ligne-claire',
    short: '4. Ligne Claire Comic',
    name: '4. "Ligne Claire" (Tintin / Editorial Storyboard Style)',
    difficulty: 'Intermediate (15 sec)',
    bestFor: 'User Journeys, German Dialogues, Client Scenarios, Book Stories',
    secret: 'Pioneered by Hergé (Tintin): uniform crisp black contour outlines of equal weight, ZERO messy shading lines, flat vivid pastel fills, and clean square panel borders!',
    recipe: [
      'Frame your scene inside a neat solid-bordered comic rectangle with 1 dot of white gutter margin.',
      'Draw characters and props with ONE consistent 03/05 pen weight—keep faces iconic (2 dots + 1 curved brow).',
      'Fill backgrounds in flat 1-pass pastel Cyan/Amber washes so foreground characters pop cleanly!'
    ],
    svg: `<svg viewBox="0 0 680 250">
      <rect x="20" y="16" width="640" height="218" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <!-- Comic Panel Left -->
      <rect x="36" y="32" width="280" height="186" fill="#E0F2FE" stroke="#141836" stroke-width="2.6"/>
      <rect x="36" y="158" width="280" height="60" fill="#FEF3C7" stroke="#141836" stroke-width="2"/>
      <!-- Clean Character -->
      <circle cx="122" cy="116" r="22" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
      <circle cx="116" cy="113" r="2.4" fill="#141836"/><circle cx="130" cy="113" r="2.4" fill="#141836"/>
      <path d="M 118 124 Q 124 129 130 124" fill="none" stroke="#141836" stroke-width="2" stroke-linecap="round"/>
      <path d="M 96 196 C 96 144 148 144 148 196 Z" fill="#EC4899" stroke="#141836" stroke-width="2.2"/>
      <!-- Crisp Speech Balloon -->
      <rect x="164" y="48" width="136" height="54" rx="14" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="184,102 162,116 196,102" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <text x="232" y="72" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">"Aha! Clear lines,</text>
      <text x="232" y="90" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">flat pastel color!"</text>
      <!-- Right Breakdown -->
      <text x="348" y="66" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#BE185D">LIGNE CLAIRE ("CLEAR LINE")</text>
      <text x="348" y="102" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• Uniform crisp ink lines — zero scratchy sketching</text>
      <text x="348" y="128" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• Flat unshaded pastel blocks (Mildliners excel!)</text>
      <text x="348" y="154" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• Expressive 2-dot faces + neat speech tails</text>
      <text x="348" y="186" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">IDEAL FOR: UX Storyboards &amp; German Dialogues ✓</text>
    </svg>`
  },
  {
    id: 'urban-wash',
    short: '5. Loose Architect Wash',
    name: '5. Loose Urban-Sketcher Ink & Offset Watercolor Wash',
    difficulty: 'Beginner+ (15 sec)',
    bestFor: 'Travel Notes, Café Sketches, Landmarks, Cozy Warm Headers',
    secret: 'The deliberate "imperfection" style! Overshoot straight lines 2mm past corners (architect ticks!) and color SLIGHTLY outside or shy of the lines leaving crisp white breathing slivers!',
    recipe: [
      'Draw structures confidently in one pass—intentionally let lines cross 1–2mm past corners so edges look lively, not stiff!',
      'Drop loose pastel marker washes slightly offset from the ink outline so glowing white paper slivers peek through.',
      'Add 4–5 quick diagonal hatch strokes in the shadowed underside for instant urban-sketch charm!'
    ],
    svg: `<svg viewBox="0 0 680 250">
      <rect x="20" y="16" width="640" height="218" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
      <!-- Offset Loose Washes First -->
      <rect x="74" y="96" width="136" height="96" rx="4" fill="#FEF3C7"/>
      <polygon points="62,100 144,44 224,100" fill="#EC4899" fill-opacity="0.28"/>
      <rect x="148" y="126" width="38" height="36" fill="#0EA5E9" fill-opacity="0.32"/>
      <!-- Overshot Architect Ink Lines -->
      <g stroke="#141836" stroke-width="2.2" stroke-linecap="round">
        <line x1="60" y1="92" x2="220" y2="92"/>
        <line x1="70" y1="86" x2="70" y2="198"/>
        <line x1="204" y1="86" x2="204" y2="198"/>
        <line x1="56" y1="192" x2="224" y2="192"/>
        <line x1="60" y1="96" x2="144" y2="36"/>
        <line x1="214" y1="96" x2="132" y2="36"/>
        <!-- Loose Window & Hatching -->
        <rect x="142" y="120" width="38" height="36" fill="none"/>
        <path d="M 88 188 L 96 176 M 98 188 L 106 176 M 108 188 L 116 176" stroke-width="1.4"/>
      </g>
      <!-- Explanation Right -->
      <text x="276" y="68" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#B45309">ARCHITECT OVERSHOOT + OFFSET WASH</text>
      <text x="276" y="104" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">1. Let lines overshoot corners by 2mm (kills stiffness!)</text>
      <text x="276" y="130" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">2. Offset pastel wash slightly — leave white slivers!</text>
      <text x="276" y="156" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">3. Forgives wobbly hands: looks effortlessly artsy!</text>
      <rect x="276" y="176" width="340" height="30" rx="15" fill="#FEF3C7" stroke="#B45309" stroke-width="1.6"/>
      <text x="446" y="195" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">SECRET: "PERFECT COLORING INSIDE LINES" LOOKS STIFF!</text>
    </svg>`
  },
  {
    id: 'perspective',
    short: '6. 1-Point Perspective',
    name: '6. Dramatic 1-Point Horizon Perspective (Depth & Journey)',
    difficulty: 'Intermediate (15 sec)',
    bestFor: 'Vision Spreads, Long-Term Roadmaps, Architectural Interiors, Metaphors',
    secret: 'Draw ONE horizontal Eye-Level line and mark ONE single dot ("Vanishing Point"). Every depth line (roads, rails, ceiling edges) aims straight at that single dot!',
    recipe: [
      'Draw a horizontal horizon line across the middle and place ONE bold Magenta vanishing dot dead-center (or at 1/3).',
      'Shoot 4–6 straight guide rays outward from that dot toward the page corners.',
      'Place vertical posts/milestones progressively taller and farther apart as they approach the viewer!'
    ],
    svg: `<svg viewBox="0 0 680 250">
      <rect x="20" y="16" width="640" height="218" rx="10" fill="#FAFBFD" stroke="#141836" stroke-width="2.2"/>
      <!-- Horizon & Vanishing Point -->
      <line x1="36" y1="104" x2="366" y2="104" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="5 4"/>
      <!-- Converging Road & Buildings -->
      <polygon points="198,104 66,220 330,220" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
      <line x1="198" y1="104" x2="198" y2="218" stroke="#0EA5E9" stroke-width="2.4" stroke-dasharray="8 6"/>
      <polygon points="44,44 134,82 134,160 44,220" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
      <polygon points="352,44 262,82 262,160 352,220" fill="#EDE9FE" stroke="#141836" stroke-width="2"/>
      <!-- Glowing VP Dot -->
      <circle cx="198" cy="104" r="6" fill="#EC4899" stroke="#141836" stroke-width="2"/>
      <text x="198" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">VANISHING PT (VP)</text>
      <!-- Right Guide -->
      <text x="400" y="68" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#6D28D9">1-POINT DRAMATIC DEPTH</text>
      <text x="400" y="102" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• 1 Horizon Line + 1 Dot (VP)</text>
      <text x="400" y="128" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• Every receding edge hits VP</text>
      <text x="400" y="154" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• Instant cinematic energy!</text>
      <text x="400" y="188" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">GREAT FOR: 5-Year Vision &amp; Roadmaps</text>
    </svg>`
  },
  {
    id: 'cutaway',
    short: '7. Technical Cutaway',
    name: '7. Cross-Section Technical Cutaway (Da Vinci / Anatomy Style)',
    difficulty: 'Intermediate (20 sec)',
    bestFor: 'Explaining Software Internals, AI Agents, Tax Mechanics, Hardware',
    secret: 'Draw a clean outer silhouette, then slice a crisp jagged or curved "window" right into the shell to reveal glowing internal components—labeled with 45° elbow callout leaders!',
    recipe: [
      'Draw the simple recognizable outer container (cylinder, brain, rocket, vault, laptop).',
      'Carve an open curved cutaway window revealing 3 distinct color-coded inner chambers.',
      'Pull crisp 45°-to-horizontal elbow leader lines out into the open whitespace with monospace labels!'
    ],
    svg: `<svg viewBox="0 0 680 250">
      <rect x="20" y="16" width="640" height="218" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <!-- Cutaway Capsule -->
      <rect x="86" y="48" width="186" height="156" rx="34" fill="#141836"/>
      <!-- Cutaway Open Window -->
      <rect x="104" y="66" width="150" height="120" rx="22" fill="#FFF" stroke="#00D4FF" stroke-width="2.4"/>
      <rect x="118" y="80" width="122" height="24" rx="5" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.8"/>
      <rect x="118" y="114" width="122" height="24" rx="5" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.8"/>
      <rect x="118" y="148" width="122" height="24" rx="5" fill="#D1FAE5" stroke="#047857" stroke-width="1.8"/>
      <!-- 45-deg Elbow Leader Lines -->
      <g stroke="#141836" stroke-width="1.8" fill="none">
        <polyline points="240,92 296,64 388,64"/>
        <polyline points="240,126 388,126"/>
        <polyline points="240,160 296,188 388,188"/>
      </g>
      <g font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">
        <text x="398" y="68" fill="#0369A1">01 // PROMPT SHELL &amp; CONTEXT</text>
        <text x="398" y="130" fill="#BE185D">02 // REASONING ENGINE + HITL</text>
        <text x="398" y="192" fill="#047857">03 // VERIFIED STATUTE VAULT</text>
      </g>
    </svg>`
  },
  {
    id: 'editorial-spot',
    short: '8. High-Contrast Spot',
    name: '8. High-Contrast Editorial / Negative-Space Spot (Visualize Value)',
    difficulty: 'Beginner+ (10 sec)',
    bestFor: 'Big-Idea Metaphors, Chapter Covers, Executive Slides, Memorable Icons',
    secret: 'Flood ONE bold geometric silhouette solid dark Indigo (or black), carve stark white negative-space lines inside it, and drop ONE tiny glowing accent color—instant museum-poster drama!',
    recipe: [
      'Draw one clean dark solid silhouette box, circle, or archway using a broad brush pen.',
      'Leave (or carve with a White Gel Pen!) stark crisp white internal linework.',
      'Add literally ONE glowing Cyan or Amber focal dot—your eye cannot look away!'
    ],
    svg: `<svg viewBox="0 0 680 250">
      <rect x="20" y="16" width="640" height="218" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <!-- High-Contrast Poster Tile Left -->
      <rect x="58" y="38" width="196" height="174" rx="12" fill="#141836"/>
      <!-- Minimal White Lines + Single Glowing Gold Sun -->
      <circle cx="156" cy="96" r="22" fill="#F59E0B"/>
      <path d="M 74 176 L 128 118 L 166 156 L 194 128 L 238 176" fill="none" stroke="#FFF" stroke-width="2.8" stroke-linejoin="round"/>
      <line x1="74" y1="188" x2="238" y2="188" stroke="#00D4FF" stroke-width="2.4"/>
      <!-- Right Breakdown -->
      <text x="296" y="72" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#141836">HIGH-CONTRAST EDITORIAL SPOT</text>
      <text x="296" y="108" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• 80% solid dark Indigo silhouette (brush pen)</text>
      <text x="296" y="134" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• 15% razor-thin white negative space / gel pen</text>
      <text x="296" y="160" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• 5% single vivid accent (Amber sun or Cyan glow)</text>
      <text x="296" y="194" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">LOOKS LIKE A $500 MAGAZINE ILLUSTRATION IN 15 SEC!</text>
    </svg>`
  }
];

const SAME_OBJECT_STYLES = {
  cube: {
    label: 'A Simple Data Server / Block',
    cards: [
      { st: '1. Flat Swiss', note: 'Pure front square + 3 horizontal bars', svg: '<rect x="24" y="20" width="52" height="58" rx="4" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/><line x1="34" y1="36" x2="66" y2="36" stroke="#141836" stroke-width="3"/><line x1="34" y1="50" x2="66" y2="50" stroke="#141836" stroke-width="3"/><circle cx="62" cy="64" r="4" fill="#10B981"/>' },
      { st: '2. 2.5D Oblique', note: 'Flat front + 45° back push!', svg: '<polygon points="20,28 34,14 78,14 64,28" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><polygon points="64,28 78,14 78,66 64,80" fill="#64748B" stroke="#141836" stroke-width="2"/><rect x="20" y="28" width="44" height="52" fill="#FFF" stroke="#141836" stroke-width="2.4"/><circle cx="52" cy="66" r="4" fill="#10B981"/>' },
      { st: '3. Isometric 30°', note: '2-over-1-up diamond + vertical drop', svg: '<polygon points="50,14 78,28 50,42 22,28" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><polygon points="22,28 50,42 50,78 22,64" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><polygon points="78,28 50,42 50,78 78,64" fill="#64748B" stroke="#141836" stroke-width="2"/><circle cx="32" cy="48" r="3" fill="#10B981"/>' },
      { st: '4. Loose Wash', note: 'Overshot corners + offset pastel fill', svg: '<rect x="30" y="24" width="46" height="54" fill="#0EA5E9" fill-opacity="0.28"/><g stroke="#141836" stroke-width="2.2" stroke-linecap="round"><line x1="20" y1="22" x2="78" y2="22"/><line x1="20" y1="76" x2="78" y2="76"/><line x1="25" y1="16" x2="25" y2="82"/><line x1="72" y1="16" x2="72" y2="82"/></g><circle cx="62" cy="64" r="3.5" fill="#EC4899"/>' },
      { st: '5. Cutaway X-Ray', note: 'Outer shell sliced open to show core', svg: '<rect x="20" y="16" width="60" height="64" rx="8" fill="#141836"/><rect x="28" y="24" width="44" height="48" rx="4" fill="#FFF" stroke="#00D4FF" stroke-width="1.8"/><rect x="34" y="32" width="32" height="12" rx="2" fill="#E0F2FE" stroke="#0EA5E9"/><rect x="34" y="50" width="32" height="12" rx="2" fill="#D1FAE5" stroke="#047857"/>' },
      { st: '6. High-Contrast Spot', note: 'Solid Indigo silhouette + 1 bright pop', svg: '<rect x="22" y="16" width="56" height="64" rx="7" fill="#141836"/><line x1="32" y1="36" x2="68" y2="36" stroke="#FFF" stroke-width="2.6"/><line x1="32" y1="50" x2="68" y2="50" stroke="#FFF" stroke-width="2.6"/><circle cx="64" cy="66" r="5" fill="#00D4FF"/>' }
    ]
  },
  house: {
    label: 'A Cozy Studio House',
    cards: [
      { st: '1. Flat Swiss', note: 'Pure triangle + square + circle', svg: '<rect x="26" y="44" width="48" height="36" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/><polygon points="20,44 50,16 80,44" fill="#EC4899" fill-opacity="0.65" stroke="#141836" stroke-width="2.4"/><rect x="44" y="58" width="12" height="22" fill="#141836"/>' },
      { st: '2. 2.5D Oblique', note: 'Flat front gable pushed 45° right', svg: '<polygon points="44,18 68,18 84,44 60,44" fill="#EC4899" fill-opacity="0.55" stroke="#141836" stroke-width="2"/><rect x="60" y="44" width="22" height="36" fill="#CBD5E1" stroke="#141836" stroke-width="2"/><rect x="20" y="44" width="40" height="36" fill="#FFF" stroke="#141836" stroke-width="2.2"/><polygon points="16,44 40,18 64,44" fill="#FCE7F3" stroke="#141836" stroke-width="2.2"/>' },
      { st: '3. Isometric 30°', note: 'Angled 2-over-1-up gable roof', svg: '<polygon points="22,48 50,62 50,82 22,68" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><polygon points="78,48 50,62 50,82 78,68" fill="#CBD5E1" stroke="#141836" stroke-width="2"/><polygon points="22,48 50,18 78,48 50,62" fill="#FCE7F3" stroke="#141836" stroke-width="2.2"/>' },
      { st: '4. Loose Wash', note: 'Overshot roof lines + shifted Amber wash', svg: '<rect x="30" y="48" width="46" height="32" fill="#FEF3C7"/><polygon points="22,46 54,20 82,46" fill="#0EA5E9" fill-opacity="0.28"/><g stroke="#141836" stroke-width="2.2" stroke-linecap="round"><line x1="16" y1="46" x2="54" y2="14"/><line x1="84" y1="46" x2="46" y2="14"/><line x1="26" y1="40" x2="26" y2="82"/><line x1="74" y1="40" x2="74" y2="82"/><line x1="18" y1="78" x2="82" y2="78"/></g>' },
      { st: '5. Cutaway X-Ray', note: 'Sliced open showing 2 interior rooms!', svg: '<polygon points="18,44 50,14 82,44 76,44 76,80 24,80 24,44" fill="#FFF" stroke="#141836" stroke-width="2.4"/><line x1="24" y1="60" x2="76" y2="60" stroke="#141836" stroke-width="2"/><rect x="30" y="48" width="16" height="10" fill="#E0F2FE"/><rect x="54" y="64" width="16" height="14" fill="#D1FAE5"/>' },
      { st: '6. High-Contrast Spot', note: 'Dark Indigo silhouette + glowing Amber window', svg: '<polygon points="18,46 50,14 82,46 74,46 74,80 26,80 26,46" fill="#141836"/><rect x="42" y="50" width="16" height="16" rx="2" fill="#F59E0B"/><line x1="50" y1="50" x2="50" y2="66" stroke="#141836" stroke-width="1.6"/>' }
    ]
  }
};

export function renderArtStylesLabHTML() {
  return `
    <!-- 1. 8 ESSENTIAL SKETCHING & ILLUSTRATION STYLES -->
    <section class="lab cyan-accent" id="as-gallery-lab">
      <div class="lab-head">
        <span class="lab-title">Beyond Isometric // 8 High-ROI Illustration Styles to Add to Your Toolkit</span>
        <span class="pill cyan">Beginner → Editorial</span>
      </div>
      <div class="lab-body">
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          ${ART_STYLES.map((s, i) => `<button class="seg-btn as-tab ${i === 0 ? 'active' : ''}" data-id="${s.id}">${s.short}</button>`).join('')}
        </div>

        <div class="card tinted" style="border-color:var(--cyan);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <div>
              <span id="as-title" class="card-h" style="font-size:18px;"></span>
              <div id="as-best" class="mono" style="font-size:10.5px; font-weight:700; color:var(--violet); margin-top:2px;"></div>
            </div>
            <span id="as-diff" class="pill mint"></span>
          </div>
          <div id="as-svg-box" class="svg-box" style="margin:6px 0;"></div>
          <div class="grid-2">
            <div class="card" style="background:#FFF;">
              <div class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep);">3-STEP HOW-TO RECIPE</div>
              <ol id="as-recipe" style="padding-left:18px; font-size:13.8px; display:flex; flex-direction:column; gap:4px; color:var(--ink-body);"></ol>
            </div>
            <div class="card" style="background:#FFF; border-color:var(--magenta);">
              <div class="mono" style="font-size:10px; font-weight:700; color:var(--magenta);">★ THE SECRET BEHIND THIS STYLE</div>
              <p id="as-secret" class="card-p" style="font-size:14px; color:var(--ink-body);"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. INTERACTIVE "1 OBJECT × 6 STYLES" SIDE-BY-SIDE TRANSFORMER -->
    <section class="lab violet-accent" id="as-compare-lab">
      <div class="lab-head">
        <span class="lab-title">Visual Fluency Lab // Same Subject Rendered in 6 Completely Different Styles</span>
        <div class="segmented no-print" role="group">
          <button class="seg-btn as-obj active" data-o="cube">Subject: Server / Data Block</button>
          <button class="seg-btn as-obj" data-o="house">Subject: Cozy Studio House</button>
        </div>
      </div>
      <div class="lab-body">
        <p style="font-size:14.5px; color:var(--ink-muted);">
          Notice how the <em>underlying concept</em> never changes—only the projection angle, line discipline, and fill contrast change! Try sketching ONE object in 3 styles on a single practice page to expand your artistic range instantly.
        </p>
        <div id="as-compare-grid" class="grid-3"></div>
      </div>
    </section>
  `;
}

export function initArtStylesLab() {
  const gal = document.getElementById('as-gallery-lab');
  if (!gal) return;

  let activeId = ART_STYLES[0].id;
  const renderStyle = () => {
    const s = ART_STYLES.find(x => x.id === activeId) || ART_STYLES[0];
    document.getElementById('as-title').textContent = s.name;
    document.getElementById('as-best').textContent = `BEST FOR // ${s.bestFor.toUpperCase()}`;
    document.getElementById('as-diff').textContent = s.difficulty;
    document.getElementById('as-svg-box').innerHTML = s.svg;
    document.getElementById('as-recipe').innerHTML = s.recipe.map(r => `<li>${r}</li>`).join('');
    document.getElementById('as-secret').textContent = s.secret;
  };
  gal.querySelectorAll('.as-tab').forEach(b => b.addEventListener('click', () => {
    activeId = b.dataset.id;
    gal.querySelectorAll('.as-tab').forEach(x => x.classList.toggle('active', x === b));
    renderStyle();
  }));
  renderStyle();

  // 1 Object x 6 Styles Transformer
  let objKey = 'cube';
  const renderCompare = () => {
    const obj = SAME_OBJECT_STYLES[objKey] || SAME_OBJECT_STYLES.cube;
    document.getElementById('as-compare-grid').innerHTML = obj.cards.map(c => `
      <div class="card" style="padding:12px;">
        <div class="card-h" style="font-size:13.8px;">${c.st}</div>
        <div class="svg-box"><svg viewBox="0 0 100 94">${c.svg}</svg></div>
        <div class="card-p" style="font-size:12.2px;">${c.note}</div>
      </div>
    `).join('');
  };
  document.querySelectorAll('.as-obj').forEach(b => b.addEventListener('click', () => {
    objKey = b.dataset.o;
    document.querySelectorAll('.as-obj').forEach(x => x.classList.toggle('active', x === b));
    renderCompare();
  }));
  renderCompare();
}
