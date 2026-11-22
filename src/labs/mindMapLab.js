/* =========================================================================
   APPENDIX E: MIND-MAPPING ARCHITECTURE & COOL VISUAL DESIGNS STUDIO
   8 Editorial Mind-Map Archetypes + Blueprint Toggle + Live Mind-Map Builder
   ========================================================================= */

export const MIND_MAP_DESIGNS = [
  {
    id: 'organic',
    short: '1. Tapered Botanical',
    name: '1. Organic Tapered-Root Mind Map (Classic Buzan Upgraded)',
    vibe: 'Fluid • High-Recall • Classic Editorial',
    bestFor: 'Brainstorming, Book Summaries, Tax Policy Overviews, German Topic Vocab',
    recipe: [
      'Anchor a bold illustrated hub dead-center (never a plain circle—give it a tiny icon + double border!).',
      'Sweep 4–6 curved S-branches clockwise starting at 1 o\'clock, tapering smoothly from thick 08/double-line roots down to thin 03 tips.',
      'Extend flat horizontal "landing shelves" off each branch and sit 1–2 word keywords right on top of the lines (no cluttered bubbles!).'
    ],
    svg: `<svg viewBox="0 0 680 340">
      <!-- Blueprint Geometry Overlay -->
      <g class="mm-bp" opacity="0" stroke="#0EA5E9" stroke-width="1" stroke-dasharray="4 4" fill="none">
        <circle cx="340" cy="170" r="78"/><circle cx="340" cy="170" r="145"/>
        <line x1="340" y1="20" x2="340" y2="320"/><line x1="60" y1="170" x2="620" y2="170"/>
        <text x="415" y="45" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#0369A1" stroke="none">START 1 O'CLOCK ↻</text>
      </g>
      <!-- Tapered Organic Roots (4 Semantic Colors) -->
      <!-- Branch 1: Top-Right Cyan -->
      <path d="M 380 150 C 430 120, 465 92, 520 82" fill="none" stroke="#0EA5E9" stroke-width="9" stroke-linecap="round" opacity="0.28"/>
      <path d="M 380 150 C 430 120, 465 92, 520 82 H 636" fill="none" stroke="#141836" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M 480 96 C 505 70, 525 50, 555 46 H 636" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/>
      <path d="M 495 90 C 520 105, 540 116, 565 118 H 644" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/>
      <!-- Branch 2: Bottom-Right Magenta -->
      <path d="M 380 190 C 430 220, 470 245, 522 254" fill="none" stroke="#EC4899" stroke-width="9" stroke-linecap="round" opacity="0.28"/>
      <path d="M 380 190 C 430 220, 470 245, 522 254 H 638" fill="none" stroke="#141836" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M 488 239 C 516 226, 535 216, 560 214 H 642" fill="none" stroke="#EC4899" stroke-width="2" stroke-linecap="round"/>
      <path d="M 490 248 C 512 272, 534 288, 562 292 H 638" fill="none" stroke="#EC4899" stroke-width="2" stroke-linecap="round"/>
      <!-- Branch 3: Bottom-Left Mint -->
      <path d="M 300 190 C 250 220, 210 245, 158 254" fill="none" stroke="#10B981" stroke-width="9" stroke-linecap="round" opacity="0.28"/>
      <path d="M 300 190 C 250 220, 210 245, 158 254 H 42" fill="none" stroke="#141836" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M 192 239 C 164 224, 145 216, 120 214 H 38" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
      <path d="M 190 248 C 168 272, 146 288, 118 292 H 42" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
      <!-- Branch 4: Top-Left Amber -->
      <path d="M 300 150 C 250 120, 215 92, 160 82" fill="none" stroke="#F59E0B" stroke-width="9" stroke-linecap="round" opacity="0.32"/>
      <path d="M 300 150 C 250 120, 215 92, 160 82 H 44" fill="none" stroke="#141836" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M 200 96 C 175 70, 155 50, 125 46 H 44" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
      <path d="M 185 90 C 160 105, 140 116, 115 118 H 38" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
      <!-- Cross-Link Synapse -->
      <path d="M 548 118 C 562 156, 562 184, 548 214" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-dasharray="4 4"/>
      <text x="568" y="170" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#7C3AED">SYNAPSE ↕</text>
      <!-- Center Illustrated Hub -->
      <rect x="274" y="132" width="132" height="76" rx="18" fill="#141836" opacity="0.14" transform="translate(5,5)"/>
      <rect x="274" y="132" width="132" height="76" rx="18" fill="#FFFDF5" stroke="#141836" stroke-width="3"/>
      <rect x="280" y="138" width="120" height="64" rx="13" fill="none" stroke="#0EA5E9" stroke-width="1.4" stroke-dasharray="4 3"/>
      <text x="340" y="166" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="16" fill="#141836">EU VAT OSS</text>
      <text x="340" y="187" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">MASTER MAP</text>
      <!-- Sit-On-The-Line Labels -->
      <g font-family="IBM Plex Mono, monospace" font-weight="700" font-size="10.5">
        <text x="530" y="75" fill="#0369A1">1. THRESHOLD</text>
        <text x="532" y="247" fill="#BE185D">2. AUDIT RISKS</text>
        <text x="148" y="247" text-anchor="end" fill="#047857">3. QUARTERLY</text>
        <text x="150" y="75" text-anchor="end" fill="#B45309">4. EVIDENCE</text>
      </g>
      <g font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">
        <text x="560" y="40">€10k EU-wide B2C</text>
        <text x="568" y="112">Home rate below €10k</text>
        <text x="564" y="208">Wrong country rate!</text>
        <text x="566" y="286">Late ELSTER penalty</text>
        <text x="116" y="208" text-anchor="end">One single filing ✓</text>
        <text x="114" y="286" text-anchor="end">10-year archive</text>
        <text x="120" y="40" text-anchor="end">2 non-conflicting proofs</text>
        <text x="112" y="112" text-anchor="end">IP + Billing BIN</text>
      </g>
    </svg>`
  },
  {
    id: 'pcb',
    short: '2. Cyber PCB Circuit',
    name: '2. Cyberpunk PCB Circuit-Board Mind Map',
    vibe: 'Crisp • Technical • Zero Organic Wobble',
    bestFor: 'AI Architectures, Software Modules, API Specs, Tax Decision Logic',
    recipe: [
      'Draw a rectangular silicon IC chip dead-center with tiny stub pins protruding along all 4 sides.',
      'Route traces strictly at 0°, 90°, and crisp 45° chamfered corners (never freehand wobbles—just follow your dot-grid diagonals!).',
      'Terminate every trace in a hollow circular "solder via" pad and stamp short monospace labels beside each node.'
    ],
    svg: `<svg viewBox="0 0 680 340">
      <g class="mm-bp" opacity="0" stroke="#0EA5E9" stroke-width="1" stroke-dasharray="3 3" fill="none">
        <path d="M 270 120 L 210 60 M 410 120 L 470 60 M 270 220 L 210 280 M 410 220 L 470 280"/>
        <text x="340" y="26" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#0369A1" stroke="none">STRICT 45° &amp; 90° DOT-GRID TRACES ONLY</text>
      </g>
      <!-- 45-degree PCB Traces -->
      <g fill="none" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
        <!-- Top-Left Cyan -->
        <polyline points="282,145 245,145 205,105 90,105" stroke="#0EA5E9"/>
        <polyline points="295,126 260,90 225,55 110,55" stroke="#0EA5E9"/>
        <!-- Top-Right Violet -->
        <polyline points="398,145 435,145 475,105 590,105" stroke="#7C3AED"/>
        <polyline points="385,126 420,90 455,55 570,55" stroke="#7C3AED"/>
        <!-- Bottom-Left Mint -->
        <polyline points="282,195 245,195 205,235 90,235" stroke="#10B981"/>
        <polyline points="295,214 260,250 225,285 110,285" stroke="#10B981"/>
        <!-- Bottom-Right Magenta -->
        <polyline points="398,195 435,195 475,235 590,235" stroke="#EC4899"/>
        <polyline points="385,214 420,250 455,285 570,285" stroke="#EC4899"/>
      </g>
      <!-- Solder Via Pads -->
      <g stroke-width="2.4" fill="#FFF">
        <circle cx="90" cy="105" r="6" stroke="#0EA5E9"/><circle cx="110" cy="55" r="6" stroke="#0EA5E9"/>
        <circle cx="590" cy="105" r="6" stroke="#7C3AED"/><circle cx="570" cy="55" r="6" stroke="#7C3AED"/>
        <circle cx="90" cy="235" r="6" stroke="#10B981"/><circle cx="110" cy="285" r="6" stroke="#10B981"/>
        <circle cx="590" cy="235" r="6" stroke="#EC4899"/><circle cx="570" cy="285" r="6" stroke="#EC4899"/>
      </g>
      <!-- Center CPU Hub -->
      <rect x="282" y="126" width="116" height="88" rx="8" fill="#141836"/>
      <rect x="291" y="135" width="98" height="70" rx="4" fill="#1E293B" stroke="#00D4FF" stroke-width="1.8"/>
      <text x="340" y="166" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12.5" font-weight="700" fill="#00D4FF">AI AGENT</text>
      <text x="340" y="185" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#94A3B8">CORE BUS v2</text>
      <!-- Node Cards -->
      <g font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">
        <text x="112" y="45" fill="#0369A1">FLASH TRIAGE (0.2s)</text>
        <text x="92" y="96" fill="#0369A1">PDF / INVOICE OCR</text>
        <text x="568" y="45" text-anchor="end" fill="#6D28D9">STATUTE RAG INDEX</text>
        <text x="588" y="96" text-anchor="end" fill="#6D28D9">SYSTEM PROMPT SPEC</text>
        <text x="92" y="226" fill="#047857">READ-ONLY MCP TOOLS</text>
        <text x="112" y="276" fill="#047857">JSON SCHEMA EVAL ✓</text>
        <text x="588" y="226" text-anchor="end" fill="#BE185D">HITL SIGN-OFF GATE</text>
        <text x="568" y="276" text-anchor="end" fill="#BE185D">ZERO WRITE ACCESS 🔒</text>
      </g>
    </svg>`
  },
  {
    id: 'solar',
    short: '3. Solar Orbits',
    name: '3. Concentric Solar-Orbit Mind Map',
    vibe: 'Cosmic • Priority-Layered • Memorable',
    bestFor: 'Language Learning Systems, OKR Priority Rings, Curriculum Roadmaps',
    recipe: [
      'Draw one glowing central "Sun" core (your master theme) and trace 3 dashed concentric rings around it with a circle stencil.',
      'Place high-frequency essentials on Ring 1 (Inner Orbit), everyday tools on Ring 2, and advanced mastery topics on Ring 3.',
      'Draw tiny color-coded planet circles directly on each orbit line—distance from center visually encodes priority!'
    ],
    svg: `<svg viewBox="0 0 680 340">
      <g class="mm-bp" opacity="0" stroke="#EC4899" stroke-width="1" stroke-dasharray="4 3" fill="none">
        <line x1="340" y1="170" x2="620" y2="170"/>
        <text x="415" y="164" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#BE185D" stroke="none">RING 1: CORE</text>
        <text x="498" y="164" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#BE185D" stroke="none">RING 2: DAILY</text>
        <text x="585" y="164" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#BE185D" stroke="none">RING 3: B2+</text>
      </g>
      <!-- 3 Concentric Orbits -->
      <ellipse cx="340" cy="170" rx="108" ry="62" fill="none" stroke="#CBD5E1" stroke-width="1.6" stroke-dasharray="5 4"/>
      <ellipse cx="340" cy="170" rx="205" ry="112" fill="none" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="6 4"/>
      <ellipse cx="340" cy="170" rx="300" ry="152" fill="none" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4 5"/>
      <!-- Center Sun -->
      <circle cx="340" cy="170" r="42" fill="#FEF3C7" stroke="#141836" stroke-width="2.8"/>
      <circle cx="340" cy="170" r="35" fill="none" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="3 2"/>
      <text x="340" y="166" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="14.5" fill="#141836">Deutsch</text>
      <text x="340" y="184" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">B1 → B2</text>
      <!-- Ring 1 Planets (Core) -->
      <g>
        <circle cx="240" cy="144" r="14" fill="#0EA5E9" fill-opacity="0.3" stroke="#141836" stroke-width="2"/>
        <text x="240" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">DER/DIE/DAS</text>
        <circle cx="438" cy="144" r="14" fill="#EC4899" fill-opacity="0.3" stroke="#141836" stroke-width="2"/>
        <text x="438" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">V2 VERB RULE</text>
        <circle cx="340" cy="232" r="14" fill="#10B981" fill-opacity="0.35" stroke="#141836" stroke-width="2"/>
        <text x="340" y="259" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">4 CASES</text>
      </g>
      <!-- Ring 2 Planets (Daily) -->
      <g>
        <circle cx="164" cy="108" r="11" fill="#FFF" stroke="#0EA5E9" stroke-width="2.4"/>
        <text x="164" y="90" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">Satzklammer [ ... ]</text>
        <circle cx="516" cy="108" r="11" fill="#FFF" stroke="#7C3AED" stroke-width="2.4"/>
        <text x="516" y="90" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">Wechselpräpositionen</text>
        <circle cx="176" cy="240" r="11" fill="#FFF" stroke="#10B981" stroke-width="2.4"/>
        <text x="176" y="266" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">Easy German Audio</text>
        <circle cx="504" cy="240" r="11" fill="#FFF" stroke="#EC4899" stroke-width="2.4"/>
        <text x="504" y="266" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">Anki Sketch Cards</text>
      </g>
      <!-- Ring 3 Satellites (Advanced) -->
      <g>
        <circle cx="62" cy="170" r="9" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2"/>
        <text x="62" y="195" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#6D28D9">KONJUNKTIV II</text>
        <circle cx="618" cy="170" r="9" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/>
        <text x="618" y="195" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#B45309">STEUER-DE</text>
        <circle cx="340" cy="18" r="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
        <text x="340" y="40" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">PASSIV &amp; PARTIZIP</text>
      </g>
    </svg>`
  },
  {
    id: 'islands',
    short: '4. Isometric Islands',
    name: '4. Isometric Floating-Islands Mind Map',
    vibe: '3D Editorial • Portfolio-Grade • Spatial',
    bestFor: 'Knowledge Bases (TaxWiki), Ecosystem Maps, Executive Presentations',
    recipe: [
      'Draw one large 2-over-1-up diamond platform in the center with a thin extruded thickness rim underneath.',
      'Float 4 smaller isometric diamond "satellite islands" around the four diagonal corners (NW, NE, SW, SE).',
      'Link islands with dashed aerial bridges + cast soft Cool Grey oval drop shadows directly beneath each platform!'
    ],
    svg: `<svg viewBox="0 0 680 340">
      <g class="mm-bp" opacity="0" stroke="#0EA5E9" stroke-width="1" stroke-dasharray="4 3" fill="none">
        <line x1="160" y1="82" x2="520" y2="262"/><line x1="520" y1="82" x2="160" y2="262"/>
        <text x="340" y="26" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#0369A1" stroke="none">2-OVER-1-UP ISOMETRIC AXES ALIGN ALL 5 ISLANDS</text>
      </g>
      <!-- Connecting Bridges -->
      <g stroke="#141836" stroke-width="2.2" stroke-dasharray="6 4" fill="none">
        <line x1="274" y1="145" x2="196" y2="105"/>
        <line x1="406" y1="145" x2="484" y2="105"/>
        <line x1="274" y1="205" x2="196" y2="245"/>
        <line x1="406" y1="205" x2="484" y2="245"/>
      </g>
      <!-- NW Island (Cyan) -->
      <ellipse cx="146" cy="118" rx="46" ry="12" fill="#94A3B8" fill-opacity="0.26"/>
      <polygon points="146,48 214,82 146,116 78,82" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
      <polygon points="78,82 146,116 146,126 78,92" fill="#BAE6FD" stroke="#141836" stroke-width="1.8"/>
      <polygon points="214,82 146,116 146,126 214,92" fill="#0EA5E9" fill-opacity="0.55" stroke="#141836" stroke-width="1.8"/>
      <text x="146" y="85" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">EU STATUTES</text>
      <!-- NE Island (Violet) -->
      <ellipse cx="534" cy="118" rx="46" ry="12" fill="#94A3B8" fill-opacity="0.26"/>
      <polygon points="534,48 602,82 534,116 466,82" fill="#EDE9FE" stroke="#141836" stroke-width="2"/>
      <polygon points="466,82 534,116 534,126 466,92" fill="#DDD6FE" stroke="#141836" stroke-width="1.8"/>
      <polygon points="602,82 534,116 534,126 602,92" fill="#7C3AED" fill-opacity="0.52" stroke="#141836" stroke-width="1.8"/>
      <text x="534" y="85" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">AI PROMPTS</text>
      <!-- SW Island (Mint) -->
      <ellipse cx="146" cy="298" rx="46" ry="12" fill="#94A3B8" fill-opacity="0.26"/>
      <polygon points="146,228 214,262 146,296 78,262" fill="#D1FAE5" stroke="#141836" stroke-width="2"/>
      <polygon points="78,262 146,296 146,306 78,272" fill="#A7F3D0" stroke="#141836" stroke-width="1.8"/>
      <polygon points="214,262 146,296 146,306 214,272" fill="#10B981" fill-opacity="0.55" stroke="#141836" stroke-width="1.8"/>
      <text x="146" y="265" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">CLIENT MEMOS</text>
      <!-- SE Island (Magenta) -->
      <ellipse cx="534" cy="298" rx="46" ry="12" fill="#94A3B8" fill-opacity="0.26"/>
      <polygon points="534,228 602,262 534,296 466,262" fill="#FCE7F3" stroke="#141836" stroke-width="2"/>
      <polygon points="466,262 534,296 534,306 466,272" fill="#FBCFE8" stroke="#141836" stroke-width="1.8"/>
      <polygon points="602,262 534,296 534,306 602,272" fill="#EC4899" fill-opacity="0.55" stroke="#141836" stroke-width="1.8"/>
      <text x="534" y="265" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">AUDIT CHECKS</text>
      <!-- Center Hero Island -->
      <ellipse cx="340" cy="236" rx="76" ry="18" fill="#94A3B8" fill-opacity="0.34"/>
      <polygon points="340,124 440,174 340,224 240,174" fill="#FFFDF5" stroke="#141836" stroke-width="2.6"/>
      <polygon points="240,174 340,224 340,238 240,188" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="440,174 340,224 340,238 440,188" fill="#64748B" stroke="#141836" stroke-width="2"/>
      <text x="340" y="170" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="16" fill="#141836">TaxWiki OS</text>
      <text x="340" y="191" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">CENTRAL HUB</text>
    </svg>`
  },
  {
    id: 'fishbone',
    short: '5. Fishbone Spine',
    name: '5. Directional Fishbone (Ishikawa) Cause Map',
    vibe: 'Analytical • Consulting-Grade • Crisp',
    bestFor: 'Root-Cause Debugging, Why Projects Stall, Exam Error Autopsies',
    recipe: [
      'Draw one bold horizontal arrow spine from left to right ending in a framed Problem/Outcome "Head" box on the far right.',
      'Slant 4–6 diagonal ribs backward at 60° above and below the spine—each rib represents a category (Data, Prompt, Process, Human).',
      'Hang short horizontal twigs off each diagonal rib for specific causes; circle the #1 leverage root cause in Magenta!'
    ],
    svg: `<svg viewBox="0 0 680 340">
      <g class="mm-bp" opacity="0" stroke="#0EA5E9" stroke-width="1" stroke-dasharray="4 3" fill="none">
        <line x1="40" y1="62" x2="500" y2="62"/><line x1="40" y1="278" x2="500" y2="278"/>
        <text x="270" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#0369A1" stroke="none">ALL RIBS PARALLEL AT 60° FEEDING RIGHT →</text>
      </g>
      <!-- Central Spine Arrow -->
      <line x1="44" y1="170" x2="514" y2="170" stroke="#141836" stroke-width="4" stroke-linecap="round"/>
      <polygon points="514,160 532,170 514,180" fill="#141836"/>
      <!-- Outcome Head Box -->
      <rect x="536" y="124" width="124" height="92" rx="12" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.8"/>
      <text x="598" y="158" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">EFFECT / BUG</text>
      <text x="598" y="182" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">AI Cites Fake</text>
      <text x="598" y="200" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">§ Tax Statute!</text>
      <!-- Upper Ribs -->
      <g stroke-width="2.6" stroke-linecap="round">
        <line x1="120" y1="62" x2="188" y2="170" stroke="#0EA5E9"/>
        <line x1="270" y1="62" x2="338" y2="170" stroke="#7C3AED"/>
        <line x1="418" y1="62" x2="486" y2="170" stroke="#F59E0B"/>
        <!-- Lower Ribs -->
        <line x1="120" y1="278" x2="188" y2="170" stroke="#10B981"/>
        <line x1="270" y1="278" x2="338" y2="170" stroke="#EC4899"/>
        <line x1="418" y1="278" x2="486" y2="170" stroke="#525B7A"/>
      </g>
      <!-- Category Pills -->
      <g font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">
        <rect x="64" y="40" width="108" height="22" rx="11" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.6"/>
        <text x="118" y="55" text-anchor="middle" fill="#0369A1">1. RETRIEVAL</text>
        <rect x="214" y="40" width="108" height="22" rx="11" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.6"/>
        <text x="268" y="55" text-anchor="middle" fill="#6D28D9">2. PROMPTING</text>
        <rect x="364" y="40" width="108" height="22" rx="11" fill="#FEF3C7" stroke="#B45309" stroke-width="1.6"/>
        <text x="418" y="55" text-anchor="middle" fill="#B45309">3. CONTEXT</text>
        <rect x="64" y="278" width="108" height="22" rx="11" fill="#D1FAE5" stroke="#047857" stroke-width="1.6"/>
        <text x="118" y="293" text-anchor="middle" fill="#047857">4. TOOLS</text>
        <rect x="214" y="278" width="108" height="22" rx="11" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.6"/>
        <text x="268" y="293" text-anchor="middle" fill="#BE185D">5. VERIFY ★</text>
        <rect x="364" y="278" width="108" height="22" rx="11" fill="#EEF2FC" stroke="#525B7A" stroke-width="1.6"/>
        <text x="418" y="293" text-anchor="middle" fill="#141836">6. REVIEW</text>
      </g>
      <!-- Sub-cause horizontal twigs -->
      <g stroke="#525B7A" stroke-width="1.5">
        <line x1="72" y1="100" x2="144" y2="100"/><line x1="88" y1="136" x2="167" y2="136"/>
        <line x1="222" y1="100" x2="294" y2="100"/><line x1="370" y1="100" x2="442" y2="100"/>
        <line x1="72" y1="238" x2="144" y2="238"/><line x1="222" y1="238" x2="294" y2="238"/>
        <line x1="370" y1="238" x2="442" y2="238"/>
      </g>
      <g font-family="Patrick Hand, cursive" font-size="13" fill="#141836">
        <text x="72" y="95">Stale 2021 PDF</text><text x="88" y="131">Chunk cut mid-§</text>
        <text x="220" y="95">No "cite or say ?"</text><text x="368" y="95">Too much noise</text>
        <text x="72" y="233">No live DB check</text>
        <text x="218" y="233" fill="#BE185D" font-weight="700">Missing regex check!</text>
        <text x="368" y="233">Rushed sign-off</text>
      </g>
    </svg>`
  },
  {
    id: 'split',
    short: '6. Split-Bracket Tree',
    name: '6. Horizontal Split-Brain Bracket Mind Map',
    vibe: 'A5-Friendly • Ultra-Neat • High Density',
    bestFor: 'Comparing Two Sides, Grammar Rules vs. Exceptions, Pros/Cons, A5 Portrait Pages',
    recipe: [
      'Draw a sleek vertical pill spine right down the horizontal center of your dot-grid page.',
      'Use clean curly braces `{` and `}` (or forked horizontal brackets) expanding symmetrically LEFT (Rules/Theory) and RIGHT (Examples/Edge Cases).',
      'Because every label stays 100% horizontal on dot rows, this is the easiest mind-map style to keep razor-neat in real time!'
    ],
    svg: `<svg viewBox="0 0 680 340">
      <g class="mm-bp" opacity="0" stroke="#0EA5E9" stroke-width="1" stroke-dasharray="4 3" fill="none">
        <rect x="28" y="34" width="232" height="272"/><rect x="420" y="34" width="232" height="272"/>
        <text x="144" y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#0369A1" stroke="none">LEFT COLUMN: RULES</text>
        <text x="536" y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#0369A1" stroke="none">RIGHT COLUMN: EXAMPLES</text>
      </g>
      <!-- Center Vertical Spine Hub -->
      <rect x="290" y="94" width="100" height="152" rx="14" fill="#141836"/>
      <text x="340" y="156" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="14.5" fill="#FFF">Wortstellung</text>
      <text x="340" y="178" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#00D4FF">DE SYNTAX</text>
      <text x="340" y="198" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#94A3B8">SPLIT TREE</text>
      <!-- Left Bracket Branches (Cyan & Mint) -->
      <path d="M 290 132 H 262 C 250 132 250 76 238 76 H 222" fill="none" stroke="#0EA5E9" stroke-width="2.6"/>
      <path d="M 290 132 H 262 C 250 132 250 144 238 144 H 222" fill="none" stroke="#0EA5E9" stroke-width="2.6"/>
      <path d="M 290 208 H 262 C 250 208 250 212 238 212 H 222" fill="none" stroke="#10B981" stroke-width="2.6"/>
      <path d="M 290 208 H 262 C 250 208 250 278 238 278 H 222" fill="none" stroke="#10B981" stroke-width="2.6"/>
      <!-- Right Bracket Branches (Magenta & Amber) -->
      <path d="M 390 132 H 418 C 430 132 430 76 442 76 H 458" fill="none" stroke="#EC4899" stroke-width="2.6"/>
      <path d="M 390 132 H 418 C 430 132 430 144 442 144 H 458" fill="none" stroke="#EC4899" stroke-width="2.6"/>
      <path d="M 390 208 H 418 C 430 208 430 212 442 212 H 458" fill="none" stroke="#F59E0B" stroke-width="2.6"/>
      <path d="M 390 208 H 418 C 430 208 430 278 442 278 H 458" fill="none" stroke="#F59E0B" stroke-width="2.6"/>
      <!-- Left Cards -->
      <g>
        <rect x="34" y="48" width="188" height="54" rx="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
        <text x="48" y="69" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">HAUPTSATZ (V2)</text>
        <text x="48" y="89" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">Conjugated verb = Pos 2</text>

        <rect x="34" y="116" width="188" height="54" rx="8" fill="#FFF" stroke="#0EA5E9" stroke-width="2"/>
        <text x="48" y="137" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">ADUSO (POS 0)</text>
        <text x="48" y="157" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">aber, denn, und, sondern, oder</text>

        <rect x="34" y="184" width="188" height="54" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
        <text x="48" y="205" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">TEKAMOLO ORDER</text>
        <text x="48" y="225" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">Time → Cause → Manner → Place</text>

        <rect x="34" y="252" width="188" height="54" rx="8" fill="#FFF" stroke="#047857" stroke-width="2"/>
        <text x="48" y="273" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">SATZKLAMMER</text>
        <text x="48" y="293" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">[ Modal ... Infinitiv ]</text>
      </g>
      <!-- Right Cards -->
      <g>
        <rect x="458" y="48" width="188" height="54" rx="8" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/>
        <text x="472" y="69" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">NEBENSATZ (END)</text>
        <text x="472" y="89" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">weil / dass / obwohl → Verb end</text>

        <rect x="458" y="116" width="188" height="54" rx="8" fill="#FFF" stroke="#EC4899" stroke-width="2"/>
        <text x="472" y="137" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">EXAMPLE</text>
        <text x="472" y="157" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">"...weil ich VAT prüfe."</text>

        <rect x="458" y="184" width="188" height="54" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/>
        <text x="472" y="205" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">VERB-VERB CLASH</text>
        <text x="472" y="225" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">Nebensatz first → , Verb!</text>

        <rect x="458" y="252" width="188" height="54" rx="8" fill="#FFF" stroke="#B45309" stroke-width="2"/>
        <text x="472" y="273" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">EXAMPLE</text>
        <text x="472" y="293" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">"Wenn es regnet, bleibe ich."</text>
      </g>
    </svg>`
  },
  {
    id: 'transit',
    short: '7. Transit Hub Map',
    name: '7. Metro / U-Bahn Transit-Hub Mind Map',
    vibe: 'Playful • Sequential • Iconic',
    bestFor: 'Learning Curricula, 90-Day Goals, Multi-Track Projects with Interchanges',
    recipe: [
      'Draw one double-ringed central "Hauptbahnhof" interchange station in the center.',
      'Radiate 4 thick colored highlighter metro lines (Cyan U1, Magenta U2, Mint U3, Amber U4) using crisp 45° bends.',
      'Stamp hollow white station dots along each line for sequential milestones—and draw pill transfer rings where two tracks cross!'
    ],
    svg: `<svg viewBox="0 0 680 340">
      <g class="mm-bp" opacity="0" stroke="#0EA5E9" stroke-width="1" stroke-dasharray="4 3" fill="none">
        <line x1="60" y1="170" x2="620" y2="170"/><line x1="340" y1="30" x2="340" y2="310"/>
        <text x="340" y="22" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#0369A1" stroke="none">BOLD HIGHLIGHTER TRACKS + WHITE STATION DOTS</text>
      </g>
      <!-- 4 Thick Metro Lines -->
      <polyline points="62,74 220,74 340,170 460,170 618,170" fill="none" stroke="#0EA5E9" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" opacity="0.82"/>
      <polyline points="62,266 220,266 340,170 460,74 618,74" fill="none" stroke="#EC4899" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" opacity="0.82"/>
      <polyline points="340,34 340,170 460,266 618,266" fill="none" stroke="#10B981" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" opacity="0.82"/>
      <polyline points="62,170 216,170 340,170 340,308" fill="none" stroke="#F59E0B" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
      <!-- Central Interchange Hub -->
      <circle cx="340" cy="170" r="24" fill="#FFF" stroke="#141836" stroke-width="4.5"/>
      <circle cx="340" cy="170" r="14" fill="#141836"/>
      <text x="340" y="174" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#00D4FF">HUB</text>
      <!-- Station Dots -->
      <g fill="#FFF" stroke="#141836" stroke-width="2.6">
        <circle cx="110" cy="74" r="6"/><circle cx="215" cy="74" r="6"/>
        <circle cx="465" cy="170" r="6"/><circle cx="585" cy="170" r="6"/>
        <circle cx="110" cy="266" r="6"/><circle cx="215" cy="266" r="6"/>
        <circle cx="465" cy="74" r="6"/><circle cx="585" cy="74" r="6"/>
        <circle cx="340" cy="54" r="6"/><circle cx="465" cy="266" r="6"/><circle cx="585" cy="266" r="6"/>
        <circle cx="135" cy="170" r="6"/><circle cx="340" cy="292" r="6"/>
      </g>
      <!-- Station Labels -->
      <g font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">
        <text x="110" y="57" text-anchor="middle" fill="#0369A1">U1: LINEWORK</text>
        <text x="215" y="57" text-anchor="middle" fill="#0369A1">DOT-GRID</text>
        <text x="465" y="153" text-anchor="middle" fill="#0369A1">CHARTS</text>
        <text x="585" y="153" text-anchor="middle" fill="#0369A1">SPREADS ★</text>

        <text x="110" y="290" text-anchor="middle" fill="#BE185D">U2: SHADOWS</text>
        <text x="215" y="290" text-anchor="middle" fill="#BE185D">GLAZING</text>
        <text x="465" y="57" text-anchor="middle" fill="#BE185D">ISOMETRICS</text>
        <text x="585" y="57" text-anchor="middle" fill="#BE185D">SCENES ★</text>

        <text x="340" y="39" text-anchor="middle" fill="#047857">U3: 48 ICONS</text>
        <text x="465" y="290" text-anchor="middle" fill="#047857">METAPHORS</text>
        <text x="585" y="290" text-anchor="middle" fill="#047857">VISUAL PRO ★</text>

        <text x="135" y="153" text-anchor="middle" fill="#B45309">U4: INK KIT</text>
        <text x="340" y="320" text-anchor="middle" fill="#B45309">DAILY 10m HABIT</text>
      </g>
    </svg>`
  },
  {
    id: 'hex',
    short: '8. Honeycomb Hex',
    name: '8. Modular Honeycomb Hexagon Cluster',
    vibe: 'Geometric • Compact • Zero Connectors Needed',
    bestFor: 'Skill Taxonomies, Prompt Components, Tax Modules, Concept Clusters',
    recipe: [
      'Draw one bold central hexagon (using 2-over-1-up diagonal caps + short vertical walls on your dot grid).',
      'Snap 6 adjacent hexagons directly flush against all 6 edges of the center cell—adjacency replaces arrows completely!',
      'Tint outer rings by semantic domain and leave 1–2 empty dashed "Future Growth" hex cells ready for new ideas!'
    ],
    svg: `<svg viewBox="0 0 680 340">
      <g class="mm-bp" opacity="0" stroke="#0EA5E9" stroke-width="1" stroke-dasharray="4 3" fill="none">
        <circle cx="340" cy="170" r="106"/>
        <text x="340" y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#0369A1" stroke="none">SHARED EDGES = ZERO ARROW CLUTTER</text>
      </g>
      <!-- Center Hex (340, 170) r=52 -->
      <polygon points="340,116 388,143 388,197 340,224 292,197 292,143" fill="#141836" stroke="#141836" stroke-width="2.6"/>
      <text x="340" y="166" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#00D4FF">PROMPT</text>
      <text x="340" y="183" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">CLUSTER</text>
      <!-- 6 Surrounding Hexes -->
      <!-- Top-Left (292, 87) -->
      <polygon points="292,33 340,60 340,114 292,141 244,114 244,60" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
      <text x="292" y="84" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">ROLE</text>
      <text x="292" y="100" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5">EU VAT Expert</text>
      <!-- Top-Right (388, 87) -->
      <polygon points="388,33 436,60 436,114 388,141 340,114 340,60" fill="#EDE9FE" stroke="#141836" stroke-width="2.2"/>
      <text x="388" y="84" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">CONTEXT</text>
      <text x="388" y="100" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5">RAG Statutes</text>
      <!-- Mid-Left (244, 170) -->
      <polygon points="244,116 292,143 292,197 244,224 196,197 196,143" fill="#D1FAE5" stroke="#141836" stroke-width="2.2"/>
      <text x="244" y="167" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">TOOLS</text>
      <text x="244" y="183" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5">VIES • OCR</text>
      <!-- Mid-Right (436, 170) -->
      <polygon points="436,116 484,143 484,197 436,224 388,197 388,143" fill="#FCE7F3" stroke="#141836" stroke-width="2.2"/>
      <text x="436" y="167" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">GUARDRAIL</text>
      <text x="436" y="183" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5">Cite or Halt!</text>
      <!-- Bottom-Left (292, 253) -->
      <polygon points="292,199 340,226 340,280 292,307 244,280 244,226" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/>
      <text x="292" y="250" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">FORMAT</text>
      <text x="292" y="266" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5">JSON + Memo</text>
      <!-- Bottom-Right (388, 253) -->
      <polygon points="388,199 436,226 436,280 388,307 340,280 340,226" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>
      <text x="388" y="250" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">EVALS</text>
      <text x="388" y="266" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5">Golden Set</text>
      <!-- Outer Dashed Future Growth Cells -->
      <polygon points="148,116 196,143 196,197 148,224 100,197 100,143" fill="#FFF" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="5 4"/>
      <text x="148" y="174" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#64748B">+ FUTURE CELL</text>
      <polygon points="532,116 580,143 580,197 532,224 484,197 484,143" fill="#FFF" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="5 4"/>
      <text x="532" y="174" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#64748B">+ FUTURE CELL</text>
    </svg>`
  }
];

const BUILDER_PRESETS = {
  ai: {
    center: 'AI Copilot OS',
    b1: 'Inputs', s1: 'PDF OCR, VIES Check',
    b2: 'Reasoning', s2: 'Flash Triage, Pro Memo',
    b3: 'Guardrails', s3: 'HITL Gate, Read-Only',
    b4: 'Outputs', s4: 'TaxWiki MD, Audit Log'
  },
  tax: {
    center: 'EU VAT 2026',
    b1: 'B2B Rules', s1: 'Reverse Charge, Valid ID',
    b2: 'B2C OSS', s2: '€10k Cap, One Return',
    b3: 'Evidence', s3: '2 Proofs, 10yr Archive',
    b4: 'Deadlines', s4: '10th Monthly, ELSTER'
  },
  deutsch: {
    center: 'Deutsch B2',
    b1: 'Grammatik', s1: 'Satzklammer, 4 Cases',
    b2: 'Hören', s2: 'Easy German, Tagesschau',
    b3: 'Wortschatz', s3: 'Komposita, Anki Cards',
    b4: 'Sprechen', s4: 'Shadowing, Tax Vocab'
  }
};

function escXML(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildCustomMindMapSVG(data, style, colorMode, showSynapse) {
  const cols = colorMode === 'mono'
    ? ['#141836', '#141836', '#141836', '#141836']
    : ['#0EA5E9', '#EC4899', '#10B981', '#F59E0B'];
  const fills = colorMode === 'mono'
    ? ['#EEF2FC', '#EEF2FC', '#EEF2FC', '#EEF2FC']
    : ['#E0F2FE', '#FCE7F3', '#D1FAE5', '#FEF3C7'];

  const subs = [data.s1, data.s2, data.s3, data.s4].map(s =>
    s.split(',').map(x => x.trim()).filter(Boolean).slice(0, 2)
  );
  const bTitles = [data.b1, data.b2, data.b3, data.b4].map(escXML);
  const center = escXML(data.center);

  if (style === 'pcb') {
    return `<svg viewBox="0 0 680 320">
      <g fill="none" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="282,135 254,135 218,86 42,86" stroke="${cols[0]}"/>
        <polyline points="398,135 426,135 462,86 638,86" stroke="${cols[1]}"/>
        <polyline points="398,185 426,185 462,234 638,234" stroke="${cols[2]}"/>
        <polyline points="282,185 254,185 218,234 42,234" stroke="${cols[3]}"/>
      </g>
      ${showSynapse ? `<path d="M 130 118 V 202" stroke="#7C3AED" stroke-width="1.8" stroke-dasharray="4 4"/><text x="138" y="164" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#7C3AED">LINK ↕</text>` : ''}
      <g fill="#FFF" stroke-width="2.4">
        <circle cx="42" cy="86" r="6" stroke="${cols[0]}"/><circle cx="638" cy="86" r="6" stroke="${cols[1]}"/>
        <circle cx="638" cy="234" r="6" stroke="${cols[2]}"/><circle cx="42" cy="234" r="6" stroke="${cols[3]}"/>
      </g>
      <rect x="282" y="116" width="116" height="88" rx="8" fill="#141836"/>
      <rect x="290" y="124" width="100" height="72" rx="4" fill="#1E293B" stroke="${cols[0]}" stroke-width="1.8"/>
      <text x="340" y="164" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#FFF">${center.slice(0, 14)}</text>
      <g font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700">
        <text x="54" y="76" fill="${cols[0]}">${bTitles[0]}</text>
        <text x="626" y="76" text-anchor="end" fill="${cols[1]}">${bTitles[1]}</text>
        <text x="626" y="224" text-anchor="end" fill="${cols[2]}">${bTitles[2]}</text>
        <text x="54" y="224" fill="${cols[3]}">${bTitles[3]}</text>
      </g>
      <g font-family="Patrick Hand, cursive" font-size="13.2" fill="#141836">
        <text x="54" y="106">${escXML(subs[0][0] || '')} ${subs[0][1] ? '• ' + escXML(subs[0][1]) : ''}</text>
        <text x="626" y="106" text-anchor="end">${escXML(subs[1][0] || '')} ${subs[1][1] ? '• ' + escXML(subs[1][1]) : ''}</text>
        <text x="626" y="254" text-anchor="end">${escXML(subs[2][0] || '')} ${subs[2][1] ? '• ' + escXML(subs[2][1]) : ''}</text>
        <text x="54" y="254">${escXML(subs[3][0] || '')} ${subs[3][1] ? '• ' + escXML(subs[3][1]) : ''}</text>
      </g>
    </svg>`;
  }

  if (style === 'solar') {
    return `<svg viewBox="0 0 680 320">
      <ellipse cx="340" cy="160" rx="126" ry="68" fill="none" stroke="#CBD5E1" stroke-width="1.6" stroke-dasharray="5 4"/>
      <ellipse cx="340" cy="160" rx="242" ry="126" fill="none" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="6 4"/>
      ${showSynapse ? `<path d="M 192 94 Q 340 42 488 94" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-dasharray="4 4"/>` : ''}
      <circle cx="340" cy="160" r="46" fill="#FFFDF5" stroke="#141836" stroke-width="2.8"/>
      <text x="340" y="164" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="14" fill="#141836">${center.slice(0, 14)}</text>
      <!-- 4 Main Orbit Nodes -->
      <circle cx="192" cy="94" r="14" fill="${fills[0]}" stroke="${cols[0]}" stroke-width="2.4"/>
      <text x="172" y="72" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="${cols[0]}">${bTitles[0]}</text>
      <text x="172" y="90" text-anchor="end" font-family="Patrick Hand, cursive" font-size="13" fill="#141836">${escXML(subs[0].join(' • '))}</text>

      <circle cx="488" cy="94" r="14" fill="${fills[1]}" stroke="${cols[1]}" stroke-width="2.4"/>
      <text x="508" y="72" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="${cols[1]}">${bTitles[1]}</text>
      <text x="508" y="90" font-family="Patrick Hand, cursive" font-size="13" fill="#141836">${escXML(subs[1].join(' • '))}</text>

      <circle cx="488" cy="226" r="14" fill="${fills[2]}" stroke="${cols[2]}" stroke-width="2.4"/>
      <text x="508" y="222" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="${cols[2]}">${bTitles[2]}</text>
      <text x="508" y="240" font-family="Patrick Hand, cursive" font-size="13" fill="#141836">${escXML(subs[2].join(' • '))}</text>

      <circle cx="192" cy="226" r="14" fill="${fills[3]}" stroke="${cols[3]}" stroke-width="2.4"/>
      <text x="172" y="222" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="${cols[3]}">${bTitles[3]}</text>
      <text x="172" y="240" text-anchor="end" font-family="Patrick Hand, cursive" font-size="13" fill="#141836">${escXML(subs[3].join(' • '))}</text>
    </svg>`;
  }

  if (style === 'split') {
    return `<svg viewBox="0 0 680 320">
      <rect x="288" y="92" width="104" height="136" rx="14" fill="#141836"/>
      <text x="340" y="164" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="14" fill="#FFF">${center.slice(0, 14)}</text>
      <path d="M 288 128 H 254 C 242 128 242 86 226 86 H 214" fill="none" stroke="${cols[0]}" stroke-width="2.8"/>
      <path d="M 288 192 H 254 C 242 192 242 234 226 234 H 214" fill="none" stroke="${cols[3]}" stroke-width="2.8"/>
      <path d="M 392 128 H 426 C 438 128 438 86 454 86 H 466" fill="none" stroke="${cols[1]}" stroke-width="2.8"/>
      <path d="M 392 192 H 426 C 438 192 438 234 454 234 H 466" fill="none" stroke="${cols[2]}" stroke-width="2.8"/>
      ${showSynapse ? `<path d="M 124 126 V 194" stroke="#7C3AED" stroke-width="1.8" stroke-dasharray="4 4"/>` : ''}
      <!-- 4 Clean Horizontal Cards -->
      <rect x="34" y="48" width="180" height="74" rx="9" fill="${fills[0]}" stroke="${cols[0]}" stroke-width="2"/>
      <text x="48" y="72" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="${cols[0]}">${bTitles[0]}</text>
      <text x="48" y="94" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">• ${escXML(subs[0][0] || 'Idea A')}</text>
      <text x="48" y="111" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">${subs[0][1] ? '• ' + escXML(subs[0][1]) : ''}</text>

      <rect x="466" y="48" width="180" height="74" rx="9" fill="${fills[1]}" stroke="${cols[1]}" stroke-width="2"/>
      <text x="480" y="72" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="${cols[1]}">${bTitles[1]}</text>
      <text x="480" y="94" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">• ${escXML(subs[1][0] || 'Idea B')}</text>
      <text x="480" y="111" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">${subs[1][1] ? '• ' + escXML(subs[1][1]) : ''}</text>

      <rect x="466" y="198" width="180" height="74" rx="9" fill="${fills[2]}" stroke="${cols[2]}" stroke-width="2"/>
      <text x="480" y="222" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="${cols[2]}">${bTitles[2]}</text>
      <text x="480" y="244" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">• ${escXML(subs[2][0] || 'Idea C')}</text>
      <text x="480" y="261" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">${subs[2][1] ? '• ' + escXML(subs[2][1]) : ''}</text>

      <rect x="34" y="198" width="180" height="74" rx="9" fill="${fills[3]}" stroke="${cols[3]}" stroke-width="2"/>
      <text x="48" y="222" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="${cols[3]}">${bTitles[3]}</text>
      <text x="48" y="244" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">• ${escXML(subs[3][0] || 'Idea D')}</text>
      <text x="48" y="261" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">${subs[3][1] ? '• ' + escXML(subs[3][1]) : ''}</text>
    </svg>`;
  }

  // Default: Organic Tapered
  return `<svg viewBox="0 0 680 320">
    <!-- Glow Under-Roots -->
    <path d="M 384 140 C 435 110, 470 86, 520 76" fill="none" stroke="${cols[0]}" stroke-width="9" stroke-linecap="round" opacity="0.28"/>
    <path d="M 384 180 C 435 210, 470 234, 520 244" fill="none" stroke="${cols[1]}" stroke-width="9" stroke-linecap="round" opacity="0.28"/>
    <path d="M 296 180 C 245 210, 210 234, 160 244" fill="none" stroke="${cols[2]}" stroke-width="9" stroke-linecap="round" opacity="0.28"/>
    <path d="M 296 140 C 245 110, 210 86, 160 76" fill="none" stroke="${cols[3]}" stroke-width="9" stroke-linecap="round" opacity="0.28"/>
    <!-- Main Ink Branches -->
    <path d="M 384 140 C 435 110, 470 86, 520 76 H 636" fill="none" stroke="#141836" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M 488 86 C 510 64, 528 48, 552 44 H 636" fill="none" stroke="${cols[0]}" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 498 84 C 520 98, 534 108, 558 110 H 638" fill="none" stroke="${cols[0]}" stroke-width="1.8" stroke-linecap="round"/>

    <path d="M 384 180 C 435 210, 470 234, 520 244 H 636" fill="none" stroke="#141836" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M 492 232 C 516 218, 534 210, 556 208 H 638" fill="none" stroke="${cols[1]}" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 492 238 C 514 260, 534 274, 558 278 H 636" fill="none" stroke="${cols[1]}" stroke-width="1.8" stroke-linecap="round"/>

    <path d="M 296 180 C 245 210, 210 234, 160 244 H 44" fill="none" stroke="#141836" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M 188 232 C 164 218, 146 210, 124 208 H 42" fill="none" stroke="${cols[2]}" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 188 238 C 166 260, 146 274, 122 278 H 44" fill="none" stroke="${cols[2]}" stroke-width="1.8" stroke-linecap="round"/>

    <path d="M 296 140 C 245 110, 210 86, 160 76 H 44" fill="none" stroke="#141836" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M 192 86 C 170 64, 152 48, 128 44 H 44" fill="none" stroke="${cols[3]}" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 182 84 C 160 98, 146 108, 122 110 H 42" fill="none" stroke="${cols[3]}" stroke-width="1.8" stroke-linecap="round"/>

    ${showSynapse ? `<path d="M 552 114 C 566 148, 566 172, 552 204" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-dasharray="4 4"/>` : ''}
    <!-- Center Hub -->
    <rect x="276" y="124" width="128" height="72" rx="18" fill="#FFFDF5" stroke="#141836" stroke-width="3"/>
    <text x="340" y="165" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="15" fill="#141836">${center.slice(0, 14)}</text>
    <!-- Labels -->
    <g font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">
      <text x="526" y="69" fill="${cols[0]}">${bTitles[0]}</text>
      <text x="526" y="237" fill="${cols[1]}">${bTitles[1]}</text>
      <text x="154" y="237" text-anchor="end" fill="${cols[2]}">${bTitles[2]}</text>
      <text x="154" y="69" text-anchor="end" fill="${cols[3]}">${bTitles[3]}</text>
    </g>
    <g font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">
      <text x="556" y="38">${escXML(subs[0][0] || '')}</text>
      <text x="562" y="104">${escXML(subs[0][1] || '')}</text>
      <text x="560" y="202">${escXML(subs[1][0] || '')}</text>
      <text x="562" y="272">${escXML(subs[1][1] || '')}</text>
      <text x="120" y="202" text-anchor="end">${escXML(subs[2][0] || '')}</text>
      <text x="118" y="272" text-anchor="end">${escXML(subs[2][1] || '')}</text>
      <text x="124" y="38" text-anchor="end">${escXML(subs[3][0] || '')}</text>
      <text x="118" y="104" text-anchor="end">${escXML(subs[3][1] || '')}</text>
    </g>
  </svg>`;
}

export function renderMindMapLabHTML() {
  return `
    <!-- CANDID WHEN-NOT-TO-USE NOTE -->
    <div class="architect-note">
      <div class="architect-note-q">
        When to abandon a mind map immediately: if strict sequence, math, or side-by-side comparison matters, a radial map turns into spaghetti.
      </div>
      <div class="architect-note-sub">
        Mind maps shine during early exploration—emptying your head before you know the structure, mapping a book's themes, or clustering vocabulary. The moment you need chronological order (switch to a timeline), conditional logic (switch to a decision tree), or comparing three options on five criteria (draw a plain table), close the radial map and pick the right tool.
      </div>
    </div>

    <!-- 1. THE 5 EDITORIAL LAWS OF CLEAN MIND MAPS -->
    <section class="section-block">
      <h2>5 Structural Rules for Readable Mind Maps</h2>
      <p>
        Most handwritten mind maps break down within two minutes: bubbles crowd together, connectors cross awkwardly, and labels tilt sideways until you have to turn the notebook upside down to read them. Five small habits prevent that tangle:
      </p>
      <div class="grid-3">
        <div class="card">
          <span class="pill cyan" style="align-self:flex-start;">Rule 01 // Tapered Roots</span>
          <div class="card-h">Thick Roots → Fine Twigs</div>
          <p class="card-p">Make primary branches noticeably thicker than sub-branches (double-stroke the root or add a light pastel under-stroke). The eye reads hierarchy before reading words.</p>
        </div>
        <div class="card">
          <span class="pill magenta" style="align-self:flex-start;">Rule 02 // Horizontal Shelves</span>
          <div class="card-h">Keep Text Horizontal</div>
          <p class="card-p">Finish every curved or diagonal arm in a flat horizontal shelf aligned to a dot row. Sit keywords cleanly <em>above</em> the line instead of trapping them inside cramped ovals.</p>
        </div>
        <div class="card">
          <span class="pill mint" style="align-self:flex-start;">Rule 03 // 1 O'Clock Sweep</span>
          <div class="card-h">Clockwise + Open Wedges</div>
          <p class="card-p">Start Branch 1 at 1 o'clock and work clockwise (1 → 4 → 7 → 10). Leave generous blank wedges between arms so late additions fit without colliding.</p>
        </div>
      </div>
      <div class="grid-2" style="margin-top:12px;">
        <div class="card tinted">
          <span class="pill violet" style="align-self:flex-start;">Law 04 // One Arm = One Color</span>
          <div class="card-h">Semantic Branch Coding</div>
          <p class="card-p">Assign one accent color per major branch (Cyan = Mechanics, Magenta = Risks, Mint = Actions, Amber = Examples). Every sub-twig inherits its parent color so spatial memory locks in effortlessly.</p>
        </div>
        <div class="card tinted">
          <span class="pill amber" style="align-self:flex-start;">Law 05 // Dashed Synapses</span>
          <div class="card-h">Cross-Link Opposite Branches</div>
          <p class="card-p">The real magic of a mind map isn't the tree—it's spotting hidden links <em>between</em> branches. Bridge distant nodes with a crisp dashed Violet arc labeled with a 1-word verb.</p>
        </div>
      </div>
    </section>

    <!-- 2. INTERACTIVE GALLERY: 8 COOL MIND-MAP DESIGNS -->
    <section class="lab cyan-accent" id="mm-gallery-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Archetype Gallery // 8 Cool Mind-Map Designs</span>
        <label class="chk-lbl no-print"><input id="mm-bp-chk" type="checkbox" /> Show Dot-Grid Blueprint Guides</label>
      </div>
      <div class="lab-body">
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          ${MIND_MAP_DESIGNS.map((d, i) => `<button class="seg-btn mm-tab ${i === 0 ? 'active' : ''}" data-id="${d.id}">${d.short}</button>`).join('')}
        </div>

        <div id="mm-stage" class="card tinted" style="border-color:var(--cyan);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <div>
              <span id="mm-title" class="card-h" style="font-size:18px;"></span>
              <div id="mm-best" class="mono" style="font-size:10.5px; font-weight:700; color:var(--violet); margin-top:2px;"></div>
            </div>
            <span id="mm-vibe" class="pill cyan"></span>
          </div>
          <div id="mm-svg-box" class="svg-box" style="margin:6px 0;"></div>
          <div class="card" style="background:#FFF;">
            <div class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep); text-transform:uppercase;">3-Step Freehand Dot-Grid Drawing Recipe</div>
            <ol id="mm-recipe" style="padding-left:20px; font-size:14.2px; display:flex; flex-direction:column; gap:4px; color:var(--ink-body);"></ol>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. MIX-AND-MATCH HUB & BRANCH DECORATOR CHEAT SHEET -->
    <section class="lab violet-accent">
      <div class="lab-head">
        <span class="lab-title">Mix &amp; Match Cheat Sheet // 6 Center Hubs &amp; 6 Branch-Line Styles</span>
        <span class="pill violet">Copy Directly Into Notebooks</span>
      </div>
      <div class="lab-body">
        <div class="svg-box">
          <svg viewBox="0 0 680 230">
            <text x="16" y="22" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#7C3AED">A. 6 COOL CENTER-HUB FRAMES (UPGRADE FROM BORING OVALS!)</text>
            <!-- 6 Center Hubs -->
            <g transform="translate(18, 34)">
              <!-- 1. Double Chamfered Cyber Badge -->
              <polygon points="10,0 82,0 92,10 92,42 82,52 10,52 0,42 0,10" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
              <text x="46" y="30" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">1. CHAMFER</text>
            </g>
            <g transform="translate(128, 34)">
              <!-- 2. Offset Neo-Brutalist Card -->
              <rect x="4" y="4" width="90" height="48" rx="8" fill="#141836"/>
              <rect x="0" y="0" width="90" height="48" rx="8" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
              <text x="45" y="28" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">2. BRUTALIST</text>
            </g>
            <g transform="translate(238, 34)">
              <!-- 3. Fluffy Cloud Burst -->
              <path d="M 18 46 H 76 A 14 14 0 0 0 76 18 A 20 18 0 0 0 38 12 A 16 16 0 0 0 18 46 Z" fill="#FCE7F3" stroke="#141836" stroke-width="2.2"/>
              <text x="48" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">3. CLOUD</text>
            </g>
            <g transform="translate(348, 34)">
              <!-- 4. Hexagon Crest -->
              <polygon points="46,0 88,14 88,38 46,52 4,38 4,14" fill="#D1FAE5" stroke="#141836" stroke-width="2.2"/>
              <text x="46" y="30" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">4. HEX CREST</text>
            </g>
            <g transform="translate(458, 34)">
              <!-- 5. Ribbon Scroll Banner -->
              <polygon points="0,12 16,12 16,42 0,42 8,27" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/>
              <polygon points="94,12 78,12 78,42 94,42 86,27" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/>
              <rect x="12" y="6" width="70" height="32" rx="3" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
              <text x="47" y="26" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">5. RIBBON</text>
            </g>
            <g transform="translate(568, 34)">
              <!-- 6. Dashed Radar Circle -->
              <circle cx="46" cy="26" r="25" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.2"/>
              <circle cx="46" cy="26" r="19" fill="none" stroke="#141836" stroke-width="1.3" stroke-dasharray="3 2"/>
              <text x="46" y="30" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">6. RADAR</text>
            </g>

            <line x1="16" y1="112" x2="664" y2="112" stroke="#CBD5E1" stroke-width="1.5"/>
            <text x="16" y="134" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0369A1">B. 6 COOL BRANCH &amp; CONNECTOR LINE STYLES</text>
            <!-- Row 1 of Branch Styles -->
            <g transform="translate(20, 148)">
              <path d="M 0 18 C 35 18, 45 6, 85 6 H 170" fill="none" stroke="#0EA5E9" stroke-width="7" opacity="0.28" stroke-linecap="round"/>
              <path d="M 0 18 C 35 18, 45 6, 85 6 H 170" fill="none" stroke="#141836" stroke-width="2.2" stroke-linecap="round"/>
              <text x="90" y="24" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">1. Tapered Glaze Root</text>
            </g>
            <g transform="translate(245, 148)">
              <polyline points="0,18 45,18 65,4 166,4" fill="none" stroke="#7C3AED" stroke-width="2.4"/>
              <circle cx="166" cy="4" r="4" fill="#FFF" stroke="#7C3AED" stroke-width="2"/>
              <text x="72" y="24" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">2. 45° PCB + Via</text>
            </g>
            <g transform="translate(465, 148)">
              <line x1="0" y1="10" x2="176" y2="10" stroke="#EC4899" stroke-width="7" stroke-linecap="round" opacity="0.75"/>
              <circle cx="64" cy="10" r="4.5" fill="#FFF" stroke="#141836" stroke-width="2"/>
              <circle cx="136" cy="10" r="4.5" fill="#FFF" stroke="#141836" stroke-width="2"/>
              <text x="48" y="26" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">3. Metro Station Track</text>
            </g>
            <!-- Row 2 of Branch Styles -->
            <g transform="translate(20, 190)">
              <path d="M 0 10 C 30 10, 30 2, 55 2 M 0 10 C 30 10, 30 18, 55 18" fill="none" stroke="#10B981" stroke-width="2.4" stroke-linecap="round"/>
              <text x="66" y="14" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">4. Curly Fork Bracket</text>
            </g>
            <g transform="translate(245, 190)">
              <path d="M 0 12 Q 80 -4 166 12" fill="none" stroke="#7C3AED" stroke-width="2" stroke-dasharray="5 4"/>
              <polygon points="164,7 174,12 164,17" fill="#7C3AED"/>
              <text x="40" y="26" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">5. Dashed Cross-Synapse</text>
            </g>
            <g transform="translate(465, 190)">
              <line x1="0" y1="7" x2="168" y2="7" stroke="#141836" stroke-width="1.8"/>
              <line x1="0" y1="13" x2="168" y2="13" stroke="#141836" stroke-width="1.8"/>
              <text x="44" y="27" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">6. Double-Rail Highway</text>
            </g>
          </svg>
        </div>
      </div>
    </section>

    <!-- 4. INTERACTIVE LIVE MIND-MAP BUILDER SANDBOX -->
    <section class="lab magenta-accent" id="mm-builder-lab">
      <div class="lab-head">
        <span class="lab-title">Live Studio Sandbox // Custom Mind-Map Layout &amp; Style Previewer</span>
        <div class="segmented no-print" role="group">
          <button class="seg-btn mm-preset active" data-p="ai">Preset: AI Copilot</button>
          <button class="seg-btn mm-preset" data-p="tax">Preset: EU VAT</button>
          <button class="seg-btn mm-preset" data-p="deutsch">Preset: Deutsch B2</button>
        </div>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl no-print" style="flex-wrap:wrap;">
          <div class="segmented" role="group">
            <button class="seg-btn mm-style active" data-s="organic">Organic Roots</button>
            <button class="seg-btn mm-style" data-s="pcb">Cyber PCB 45°</button>
            <button class="seg-btn mm-style" data-s="solar">Solar Orbits</button>
            <button class="seg-btn mm-style" data-s="split">Split-Tree</button>
          </div>
          <div class="segmented" role="group">
            <button class="seg-btn mm-col active" data-c="semantic">Semantic Color</button>
            <button class="seg-btn mm-col" data-c="mono">Monochrome Ink</button>
          </div>
          <label class="chk-lbl"><input id="mm-syn-chk" type="checkbox" checked /> Cross-Link Synapse</label>
        </div>

        <div class="grid-3 no-print">
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--ink-muted);">CENTER TOPIC</span>
            <input id="mm-in-center" class="search-in" type="text" value="AI Copilot OS" />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--cyan);">BRANCH 1 + 2 SUBS (COMMA)</span>
            <input id="mm-in-b1" class="search-in" type="text" value="Inputs: PDF OCR, VIES Check" />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--magenta);">BRANCH 2 + 2 SUBS (COMMA)</span>
            <input id="mm-in-b2" class="search-in" type="text" value="Reasoning: Flash Triage, Pro Memo" />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep);">BRANCH 3 + 2 SUBS (COMMA)</span>
            <input id="mm-in-b3" class="search-in" type="text" value="Guardrails: HITL Gate, Read-Only" />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--amber-deep);">BRANCH 4 + 2 SUBS (COMMA)</span>
            <input id="mm-in-b4" class="search-in" type="text" value="Outputs: TaxWiki MD, Audit Log" />
          </label>
          <div style="display:flex; align-items:flex-end;">
            <button id="mm-dl-svg" class="btn mint" style="width:100%;">↓ Download Custom SVG</button>
          </div>
        </div>

        <div id="mm-live-svg" class="svg-box" style="margin-top:6px;"></div>
      </div>
    </section>
  `;
}

export function initMindMapLab() {
  const gal = document.getElementById('mm-gallery-lab');
  if (!gal) return;

  // 1. Archetype Gallery
  let activeId = MIND_MAP_DESIGNS[0].id;
  let showBp = false;

  const renderArchetype = () => {
    const d = MIND_MAP_DESIGNS.find(x => x.id === activeId) || MIND_MAP_DESIGNS[0];
    document.getElementById('mm-title').textContent = d.name;
    document.getElementById('mm-best').textContent = `BEST FOR // ${d.bestFor.toUpperCase()}`;
    document.getElementById('mm-vibe').textContent = d.vibe;
    document.getElementById('mm-svg-box').innerHTML = d.svg;
    document.getElementById('mm-recipe').innerHTML = d.recipe.map(r => `<li>${r}</li>`).join('');
    document.querySelectorAll('#mm-svg-box .mm-bp').forEach(el => {
      el.setAttribute('opacity', showBp ? '0.9' : '0');
    });
  };

  gal.querySelectorAll('.mm-tab').forEach(b => b.addEventListener('click', () => {
    activeId = b.dataset.id;
    gal.querySelectorAll('.mm-tab').forEach(x => x.classList.toggle('active', x === b));
    renderArchetype();
  }));

  document.getElementById('mm-bp-chk')?.addEventListener('change', (e) => {
    showBp = e.target.checked;
    document.querySelectorAll('#mm-svg-box .mm-bp').forEach(el => {
      el.setAttribute('opacity', showBp ? '0.9' : '0');
    });
  });
  renderArchetype();

  // 2. Live Custom Mind-Map Builder
  let style = 'organic';
  let colorMode = 'semantic';
  let showSynapse = true;

  const parseBranch = (val, fallbackTitle) => {
    const parts = String(val || '').split(':');
    if (parts.length >= 2) {
      return { title: parts[0].trim() || fallbackTitle, subs: parts.slice(1).join(':').trim() };
    }
    return { title: val.trim() || fallbackTitle, subs: '' };
  };

  const renderBuilder = () => {
    const b1 = parseBranch(document.getElementById('mm-in-b1').value, 'Branch 1');
    const b2 = parseBranch(document.getElementById('mm-in-b2').value, 'Branch 2');
    const b3 = parseBranch(document.getElementById('mm-in-b3').value, 'Branch 3');
    const b4 = parseBranch(document.getElementById('mm-in-b4').value, 'Branch 4');
    const data = {
      center: document.getElementById('mm-in-center').value || 'My Topic',
      b1: b1.title, s1: b1.subs,
      b2: b2.title, s2: b2.subs,
      b3: b3.title, s3: b3.subs,
      b4: b4.title, s4: b4.subs
    };
    document.getElementById('mm-live-svg').innerHTML = buildCustomMindMapSVG(data, style, colorMode, showSynapse);
  };

  const applyPreset = (key) => {
    const p = BUILDER_PRESETS[key] || BUILDER_PRESETS.ai;
    document.getElementById('mm-in-center').value = p.center;
    document.getElementById('mm-in-b1').value = `${p.b1}: ${p.s1}`;
    document.getElementById('mm-in-b2').value = `${p.b2}: ${p.s2}`;
    document.getElementById('mm-in-b3').value = `${p.b3}: ${p.s3}`;
    document.getElementById('mm-in-b4').value = `${p.b4}: ${p.s4}`;
    renderBuilder();
  };

  document.querySelectorAll('.mm-preset').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.mm-preset').forEach(x => x.classList.toggle('active', x === b));
    applyPreset(b.dataset.p);
  }));
  document.querySelectorAll('.mm-style').forEach(b => b.addEventListener('click', () => {
    style = b.dataset.s;
    document.querySelectorAll('.mm-style').forEach(x => x.classList.toggle('active', x === b));
    renderBuilder();
  }));
  document.querySelectorAll('.mm-col').forEach(b => b.addEventListener('click', () => {
    colorMode = b.dataset.c;
    document.querySelectorAll('.mm-col').forEach(x => x.classList.toggle('active', x === b));
    renderBuilder();
  }));
  document.getElementById('mm-syn-chk')?.addEventListener('change', (e) => {
    showSynapse = e.target.checked;
    renderBuilder();
  });
  ['mm-in-center', 'mm-in-b1', 'mm-in-b2', 'mm-in-b3', 'mm-in-b4'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', renderBuilder);
  });

  document.getElementById('mm-dl-svg')?.addEventListener('click', () => {
    const svgEl = document.querySelector('#mm-live-svg svg');
    if (!svgEl) return;
    const raw = svgEl.outerHTML.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFD;" ');
    const blob = new Blob([raw], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mindmap-${style}.svg`;
    a.click();
    URL.revokeObjectURL(url);
    window.__showToast?.('✓ Custom Mind-Map SVG downloaded!');
  });

  renderBuilder();
}
