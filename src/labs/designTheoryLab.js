/* =========================================================================
   APPENDIX N: DESIGN THEORY & THE SCIENCE OF EFFECTIVE VISUALS
   6 Visual Laws (Weak vs. Strong SVGs) + Live Squint-Test De-Clutter Lab
   ========================================================================= */

export const DESIGN_LAWS = [
  {
    id: 'hierarchy',
    short: '1. Visual Hierarchy',
    name: '1. Visual Hierarchy & Pre-Attentive Scanning',
    principle: 'The human eye never reads a page top-to-bottom like a printer—it jumps straight to the highest-contrast anchor (Size → Dark Weight → Bright Accent → Motion) in under 250 milliseconds.',
    rule: 'Establish 3 unmistakable visual tiers on every spread: Tier 1 Hero (2×–3× size or bold Indigo block) → Tier 2 Section Headers (ALL-CAPS Mono + 1 Accent) → Tier 3 Quiet Body Print. If everything shouts, nothing is heard!',
    svg: `<svg viewBox="0 0 680 250">
      <!-- Left: Weak -->
      <rect x="16" y="16" width="308" height="218" rx="10" fill="#FFF7FB" stroke="#BE185D" stroke-width="2.2"/>
      <text x="32" y="38" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">✕ WEAK // ZERO HIERARCHY (FLAT NOISE)</text>
      <g font-family="Inter, sans-serif" font-size="13" fill="#141836">
        <text x="32" y="72">Q4 EU VAT OSS Automation Launch Plan</text>
        <text x="32" y="96">Key objective is reducing review time by 80%</text>
        <text x="32" y="120">Step 1: Connect VIES API to invoice scanner</text>
        <text x="32" y="144">Step 2: Flag missing VAT IDs for advisor check</text>
        <text x="32" y="168">Step 3: Export quarterly OSS ELSTER file</text>
        <text x="32" y="192">Risk: Incorrect country rate triggers penalty</text>
      </g>
      <text x="32" y="220" font-family="IBM Plex Mono, monospace" font-size="9" fill="#BE185D">Every line has identical weight → eye feels exhausted!</text>

      <!-- Right: Strong -->
      <rect x="356" y="16" width="308" height="218" rx="10" fill="#F2FDF8" stroke="#047857" stroke-width="2.4"/>
      <text x="372" y="38" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">✓ STRONG // 3-TIER PRE-ATTENTIVE HIERARCHY</text>
      <rect x="372" y="54" width="214" height="14" rx="3" fill="#0EA5E9" fill-opacity="0.28"/>
      <text x="374" y="65" font-family="Playwrite IT Moderna, cursive" font-size="19" fill="#141836">Q4 OSS Automation</text>
      <rect x="598" y="48" width="52" height="24" rx="12" fill="#10B981"/>
      <text x="624" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#FFF">-80%</text>
      <text x="374" y="96" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">3-STEP PIPELINE</text>
      <text x="374" y="118" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">1. Scan + VIES   →   2. Flag   →   3. File OSS</text>
      <rect x="374" y="140" width="274" height="44" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.8"/>
      <text x="386" y="158" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">⚠️ PRIMARY RISK</text>
      <text x="386" y="175" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">Wrong buyer rate = ELSTER penalty!</text>
      <text x="374" y="218" font-family="IBM Plex Mono, monospace" font-size="9" fill="#047857">Eye reads Title → -80% → Flow → Risk in 1.2s!</text>
    </svg>`
  },
  {
    id: 'crap',
    short: '2. CRAP Layout Engine',
    name: '2. CRAP Design Laws (Contrast, Repetition, Alignment, Proximity)',
    principle: 'Robin Williams\' 4 universal layout laws turn amateur pages into studio spreads: put related items CLOSE (Proximity), snap edges to ONE invisible rail (Alignment), repeat one consistent style (Repetition), and make differences dramatic (Contrast).',
    rule: 'Before drawing boxes around everything, first align all text to ONE crisp left dot-grid column and double the blank vertical gap between distinct topics—whitespace groups items cleaner than heavy ink borders!',
    svg: `<svg viewBox="0 0 680 250">
      <!-- Left: Weak Alignment & Proximity -->
      <rect x="16" y="16" width="308" height="218" rx="10" fill="#FFF7FB" stroke="#BE185D" stroke-width="2.2"/>
      <text x="32" y="38" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">✕ WEAK // FLOATING &amp; UNALIGNED</text>
      <rect x="52" y="54" width="126" height="42" rx="4" fill="#FFF" stroke="#141836" stroke-width="1.6"/>
      <text x="115" y="79" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Idea A (centered)</text>
      <rect x="168" y="106" width="126" height="42" rx="14" fill="#FEF3C7" stroke="#141836" stroke-width="1.6"/>
      <text x="231" y="131" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Idea B (random x)</text>
      <rect x="34" y="158" width="144" height="42" fill="#E0F2FE" stroke="#141836" stroke-width="1.6"/>
      <text x="106" y="183" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Idea C (new shape!)</text>
      <text x="32" y="222" font-family="IBM Plex Mono, monospace" font-size="9" fill="#BE185D">3 shapes, 3 left edges → brain works overtime</text>

      <!-- Right: Strong CRAP -->
      <rect x="356" y="16" width="308" height="218" rx="10" fill="#F2FDF8" stroke="#047857" stroke-width="2.4"/>
      <text x="372" y="38" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">✓ STRONG // ONE HARD LEFT RAIL + REPETITION</text>
      <!-- Invisible Cyan Alignment Rail -->
      <line x1="382" y1="50" x2="382" y2="206" stroke="#0EA5E9" stroke-width="1.8" stroke-dasharray="4 3"/>
      <g transform="translate(382, 58)">
        <rect x="0" y="0" width="256" height="36" rx="7" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
        <rect x="0" y="0" width="8" height="36" rx="3" fill="#0EA5E9"/>
        <text x="20" y="23" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">01 // ALIGN ALL LEFT EDGES</text>

        <rect x="0" y="48" width="256" height="36" rx="7" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
        <rect x="0" y="48" width="8" height="36" rx="3" fill="#0EA5E9"/>
        <text x="20" y="71" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">02 // REPEAT IDENTICAL CARD UI</text>

        <rect x="0" y="96" width="256" height="36" rx="7" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
        <rect x="0" y="96" width="8" height="36" rx="3" fill="#EC4899"/>
        <text x="20" y="119" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">03 // BREAK PATTERN ONLY FOR KEY!</text>
      </g>
      <text x="372" y="222" font-family="IBM Plex Mono, monospace" font-size="9" fill="#047857">Invisible left rail = instant architectural elegance!</text>
    </svg>`
  },
  {
    id: 'tufte',
    short: '3. Data-Ink Ratio',
    name: '3. High Data-Ink Ratio & Eliminating "Chartjunk" (Tufte)',
    principle: 'Edward Tufte\'s golden law of information design: maximize the share of ink devoted to actual data and ideas—strip away heavy table cages, 3D pie gimmicks, and redundant boxes that add ink without adding meaning.',
    rule: 'In tables and charts, erase vertical gridlines completely, replace thick black rows with subtle whitespace or thin dotted rules, and label values directly at the end of bars instead of forcing eyes back and forth to a distant legend!',
    svg: `<svg viewBox="0 0 680 250">
      <!-- Left: Heavy Chartjunk -->
      <rect x="16" y="16" width="308" height="218" rx="10" fill="#FFF7FB" stroke="#BE185D" stroke-width="2.2"/>
      <text x="32" y="38" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">✕ CHARTJUNK // HEAVY CAGE + DISTANT LEGEND</text>
      <!-- Dense ugly black grid -->
      <g stroke="#141836" stroke-width="1.4" opacity="0.6">
        <rect x="44" y="54" width="256" height="122" fill="#EEF2FC"/>
        <line x1="44" y1="84" x2="300" y2="84"/><line x1="44" y1="114" x2="300" y2="114"/><line x1="44" y1="144" x2="300" y2="144"/>
        <line x1="108" y1="54" x2="108" y2="176"/><line x1="172" y1="54" x2="172" y2="176"/><line x1="236" y1="54" x2="236" y2="176"/>
      </g>
      <rect x="58" y="96" width="36" height="80" fill="#0EA5E9" stroke="#141836" stroke-width="2"/>
      <rect x="122" y="124" width="36" height="52" fill="#EC4899" stroke="#141836" stroke-width="2"/>
      <rect x="186" y="68" width="36" height="108" fill="#F59E0B" stroke="#141836" stroke-width="2"/>
      <text x="172" y="200" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">[■ Blue=Q1  ■ Pink=Q2  ■ Yel=Q3]</text>
      <text x="32" y="222" font-family="IBM Plex Mono, monospace" font-size="9" fill="#BE185D">70% of ink is noisy gridlines, not data!</text>

      <!-- Right: Clean High Data-Ink Ratio -->
      <rect x="356" y="16" width="308" height="218" rx="10" fill="#F2FDF8" stroke="#047857" stroke-width="2.4"/>
      <text x="372" y="38" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">✓ DIRECT-LABELED // ZERO GRID CAGE!</text>
      <g font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">
        <text x="374" y="84" fill="#525B7A">Q1</text>
        <rect x="406" y="68" width="124" height="22" rx="4" fill="#CBD5E1"/>
        <text x="538" y="83" fill="#525B7A">€42k</text>

        <text x="374" y="124" fill="#525B7A">Q2</text>
        <rect x="406" y="108" width="88" height="22" rx="4" fill="#CBD5E1"/>
        <text x="502" y="123" fill="#525B7A">€31k</text>

        <text x="374" y="164" fill="#047857">Q3 ★</text>
        <rect x="406" y="148" width="186" height="22" rx="4" fill="#10B981"/>
        <text x="600" y="163" fill="#047857">€68k</text>
      </g>
      <text x="372" y="222" font-family="IBM Plex Mono, monospace" font-size="9" fill="#047857">Grey out context, highlight ONLY the story bar!</text>
    </svg>`
  },
  {
    id: 'thirds',
    short: '4. Rule of Thirds & Balance',
    name: '4. Rule of Thirds, Focal Anchor & Asymmetric Balance',
    principle: 'Centering everything feels static and stiff like a wedding invitation. Placing your primary illustration on an off-center 1/3 power line and counter-balancing it with clean whitespace + structured notes creates dynamic editorial tension.',
    rule: 'Use a 65/35 or 60/40 split on A5 spreads: anchor your hero isometric diagram or metaphor in the larger 2/3 zone, and balance it with a light vertical summary rail in the remaining 1/3.',
    svg: `<svg viewBox="0 0 680 250">
      <rect x="24" y="18" width="632" height="214" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
      <!-- Rule of Thirds Grid Overlay -->
      <g stroke="#0EA5E9" stroke-width="1.4" stroke-dasharray="5 4" opacity="0.65">
        <line x1="234" y1="18" x2="234" y2="232"/><line x1="446" y1="18" x2="446" y2="232"/>
        <line x1="24" y1="89" x2="656" y2="89"/><line x1="24" y1="160" x2="656" y2="160"/>
      </g>
      <!-- Power Intersections -->
      <circle cx="234" cy="89" r="7" fill="#EC4899" stroke="#FFF" stroke-width="2"/>
      <circle cx="446" cy="89" r="5" fill="#0EA5E9" opacity="0.5"/>
      <circle cx="234" cy="160" r="5" fill="#0EA5E9" opacity="0.5"/>
      <circle cx="446" cy="160" r="5" fill="#0EA5E9" opacity="0.5"/>
      <!-- Hero Focal Anchor placed on Left 1/3 Power Point -->
      <rect x="86" y="48" width="186" height="122" rx="12" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/>
      <text x="179" y="102" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0369A1">HERO FOCAL VISUAL</text>
      <text x="179" y="124" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">(Sits on 1/3 Power Point!)</text>
      <!-- Counter-balanced Right Editorial Column -->
      <text x="466" y="64" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#7C3AED">COUNTER-BALANCE RAIL</text>
      <path d="M 466 86 H 626 M 466 108 H 602 M 466 130 H 618" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>
      <rect x="466" y="150" width="160" height="44" rx="7" fill="#D1FAE5" stroke="#047857" stroke-width="1.8"/>
      <text x="546" y="177" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">KEY TAKEAWAY ✓</text>
      <text x="340" y="218" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#525B7A">ASYMMETRIC BALANCE: Heavy Visual Left ↔ Airy Whitespace + Crisp Bullets Right</text>
    </svg>`
  },
  {
    id: 'gestalt',
    short: '5. Gestalt Perception',
    name: '5. Gestalt Laws: How Brains Auto-Group Shapes Without Borders',
    principle: 'Your brain automatically wires visual elements into meaning using 4 instant shortcuts: Proximity (close = related), Similarity (same color/shape = same category), Enclosure (shared pastel wash = one module), and Continuity (smooth paths = one flow).',
    rule: 'Replace cluttered black outlines with soft pastel highlighter "common-region" pads behind related notes—your brain groups them effortlessly while keeping the page calm and airy!',
    svg: `<svg viewBox="0 0 680 250">
      <!-- 4 Mini Gestalt Demos -->
      <g transform="translate(20, 22)">
        <rect x="0" y="0" width="148" height="206" rx="9" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <text x="74" y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">1. PROXIMITY</text>
        <circle cx="38" cy="72" r="9" fill="#0EA5E9"/><circle cx="62" cy="72" r="9" fill="#0EA5E9"/><circle cx="38" cy="96" r="9" fill="#0EA5E9"/><circle cx="62" cy="96" r="9" fill="#0EA5E9"/>
        <circle cx="114" cy="138" r="9" fill="#0EA5E9"/><circle cx="114" cy="162" r="9" fill="#0EA5E9"/>
        <text x="74" y="194" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13">Gap = 2 Groups!</text>
      </g>
      <g transform="translate(184, 22)">
        <rect x="0" y="0" width="148" height="206" rx="9" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <text x="74" y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">2. SIMILARITY</text>
        <circle cx="38" cy="74" r="9" fill="#0EA5E9"/><circle cx="74" cy="74" r="9" fill="#EC4899"/><circle cx="110" cy="74" r="9" fill="#0EA5E9"/>
        <circle cx="38" cy="112" r="9" fill="#0EA5E9"/><circle cx="74" cy="112" r="9" fill="#EC4899"/><circle cx="110" cy="112" r="9" fill="#0EA5E9"/>
        <circle cx="38" cy="150" r="9" fill="#0EA5E9"/><circle cx="74" cy="150" r="9" fill="#EC4899"/><circle cx="110" cy="150" r="9" fill="#0EA5E9"/>
        <text x="74" y="194" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13">Color reads columns</text>
      </g>
      <g transform="translate(348, 22)">
        <rect x="0" y="0" width="148" height="206" rx="9" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <text x="74" y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">3. ENCLOSURE</text>
        <rect x="18" y="48" width="112" height="58" rx="10" fill="#D1FAE5"/>
        <circle cx="48" cy="77" r="9" fill="#141836"/><circle cx="100" cy="77" r="9" fill="#141836"/>
        <circle cx="48" cy="144" r="9" fill="#141836"/><circle cx="100" cy="144" r="9" fill="#141836"/>
        <text x="74" y="194" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13">1 wash = 1 module</text>
      </g>
      <g transform="translate(512, 22)">
        <rect x="0" y="0" width="148" height="206" rx="9" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <text x="74" y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">4. CONTINUITY</text>
        <path d="M 18 156 Q 74 58 130 68" fill="none" stroke="#7C3AED" stroke-width="3.2"/>
        <path d="M 18 68 Q 74 156 130 156" fill="none" stroke="#CBD5E1" stroke-width="2.4" stroke-dasharray="4 3"/>
        <text x="74" y="194" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13">Eye rides smooth arcs</text>
      </g>
    </svg>`
  },
  {
    id: 'value',
    short: '6. Value vs. Hue',
    name: '6. Color Theory Secret: "Value Does the Work, Hue Gets the Credit"',
    principle: 'Beginners pick 6 bright rainbow markers that all share the same medium brightness—so nothing stands out. Master illustrators design in 3 Values FIRST (Dark Ink, Medium Cool Grey, Bright White Paper), then add 1–2 accents for meaning!',
    rule: 'Test any spread by imagining it photocopied in pure Black & White: if your titles, focal diagrams, and shadows still pop cleanly in grayscale, your design is bulletproof!',
    svg: `<svg viewBox="0 0 680 250">
      <!-- 3-Value Ladder Left -->
      <rect x="20" y="20" width="304" height="210" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <text x="38" y="44" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#141836">STEP 1 // DESIGN IN 3 VALUES FIRST</text>
      <rect x="38" y="62" width="80" height="114" rx="8" fill="#141836"/>
      <text x="78" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">DARK</text>
      <text x="78" y="138" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#94A3B8">Ink / Focus</text>

      <rect x="132" y="62" width="80" height="114" rx="8" fill="#CBD5E1" stroke="#141836" stroke-width="1.6"/>
      <text x="172" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#141836">MID</text>
      <text x="172" y="138" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">Grey Shadow</text>

      <rect x="226" y="62" width="80" height="114" rx="8" fill="#FAFBFD" stroke="#141836" stroke-width="1.6" stroke-dasharray="4 3"/>
      <text x="266" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#141836">LIGHT</text>
      <text x="266" y="138" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">60% Paper</text>
      <text x="172" y="208" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#525B7A">Must read cleanly even in Black &amp; White!</text>

      <!-- Semantic Hue Layer Right -->
      <rect x="356" y="20" width="304" height="210" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <text x="374" y="44" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">STEP 2 // ADD 10% SEMANTIC HUE ONLY</text>
      <!-- 60-30-10 Proportion Bar -->
      <rect x="374" y="66" width="160" height="44" rx="6" fill="#FAFBFD" stroke="#141836" stroke-width="1.8"/>
      <text x="454" y="92" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">60% PAPER</text>
      <rect x="540" y="66" width="70" height="44" rx="6" fill="#141836"/>
      <text x="575" y="92" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">30%</text>
      <rect x="616" y="66" width="28" height="44" rx="6" fill="#EC4899"/>
      <text x="630" y="92" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">10</text>
      <text x="374" y="142" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">• 1 Primary Brand Hue (Cyan = Logic)</text>
      <text x="374" y="166" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">• 1 Alert Accent Hue (Magenta = Action!)</text>
      <text x="374" y="190" font-family="Patrick Hand, cursive" font-size="15" fill="#047857">• Zero random rainbow highlighting ✓</text>
    </svg>`
  }
];

function renderSquintStageSVG(level, blurred) {
  const filt = blurred ? 'style="filter:blur(3.6px); transition:filter 0.2s ease;"' : 'style="transition:filter 0.2s ease;"';
  if (level === 0) {
    // Novice Cluttered Spread
    return `<svg viewBox="0 0 680 280" ${filt}>
      <rect x="14" y="12" width="652" height="256" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <rect x="26" y="24" width="200" height="72" fill="#FEF08A" stroke="#141836" stroke-width="2.4"/>
      <text x="36" y="48" font-family="Inter, sans-serif" font-size="12" fill="#141836">Q4 Data Sync Audit Notes</text>
      <text x="36" y="68" font-family="Inter, sans-serif" font-size="12" fill="#141836">Need to fix connector setup</text>
      <rect x="236" y="28" width="210" height="78" fill="#FBCFE8" stroke="#141836" stroke-width="2.4"/>
      <text x="248" y="54" font-family="Inter, sans-serif" font-size="12" fill="#141836">Users quit at OAuth screen</text>
      <text x="248" y="76" font-family="Inter, sans-serif" font-size="12" fill="#141836">Write-scope scares IT teams</text>
      <rect x="454" y="22" width="200" height="80" fill="#BAE6FD" stroke="#141836" stroke-width="2.4"/>
      <text x="466" y="52" font-family="Inter, sans-serif" font-size="12" fill="#141836">Add 1-click sample CSV import</text>
      <rect x="34" y="114" width="300" height="66" fill="#BBF7D0" stroke="#141836" stroke-width="2.4"/>
      <text x="48" y="144" font-family="Inter, sans-serif" font-size="12" fill="#141836">Target: lift Day-1 activation by 35%</text>
      <rect x="346" y="116" width="304" height="68" fill="#DDD6FE" stroke="#141836" stroke-width="2.4"/>
      <text x="358" y="146" font-family="Inter, sans-serif" font-size="12" fill="#141836">Risk: silent webhook timeout fails</text>
      <rect x="28" y="192" width="624" height="62" fill="#FED7AA" stroke="#141836" stroke-width="2.4"/>
      <text x="46" y="228" font-family="Inter, sans-serif" font-size="12" fill="#141836">Next: ship read-only OAuth scope + retry banner by Friday</text>
    </svg>`;
  }
  if (level === 1) {
    // + Alignment & Proximity
    return `<svg viewBox="0 0 680 280" ${filt}>
      <rect x="14" y="12" width="652" height="256" rx="8" fill="#FAFBFD" stroke="#141836" stroke-width="2"/>
      <line x1="36" y1="26" x2="36" y2="254" stroke="#0EA5E9" stroke-width="1.4" stroke-dasharray="4 3"/>
      <text x="46" y="46" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#141836">Q4 Data Sync Audit — Onboarding Drop-Off</text>
      <rect x="46" y="64" width="286" height="90" rx="6" fill="#FFF" stroke="#CBD5E1" stroke-width="1.8"/>
      <text x="60" y="92" font-family="Inter, sans-serif" font-size="13" fill="#141836">• Users quit on OAuth write-scope prompt</text>
      <text x="60" y="116" font-family="Inter, sans-serif" font-size="13" fill="#141836">• Offer 1-click sample CSV workspace first</text>
      <rect x="354" y="64" width="286" height="90" rx="6" fill="#FFF" stroke="#CBD5E1" stroke-width="1.8"/>
      <text x="368" y="92" font-family="Inter, sans-serif" font-size="13" fill="#141836">• Target: +35% Day-1 activation</text>
      <text x="368" y="116" font-family="Inter, sans-serif" font-size="13" fill="#141836">• Risk: silent webhook sync timeout</text>
      <rect x="46" y="176" width="594" height="66" rx="6" fill="#FFF" stroke="#CBD5E1" stroke-width="1.8"/>
      <text x="60" y="214" font-family="Inter, sans-serif" font-size="13" fill="#141836">Next: ship read-only OAuth scope + explicit retry banner by Friday</text>
    </svg>`;
  }
  if (level === 2) {
    // + Visual Hierarchy & Focal Point
    return `<svg viewBox="0 0 680 280" ${filt}>
      <rect x="14" y="12" width="652" height="256" rx="10" fill="#FAFBFD" stroke="#141836" stroke-width="2.2"/>
      <rect x="40" y="42" width="276" height="16" rx="3" fill="#0EA5E9" fill-opacity="0.28"/>
      <text x="44" y="53" font-family="Playwrite IT Moderna, cursive" font-size="21" fill="#141836">Data Sync Onboarding Fix</text>
      <rect x="526" y="30" width="116" height="34" rx="17" fill="#141836"/>
      <text x="584" y="51" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#00D4FF">GOAL: +35%</text>
      <rect x="40" y="82" width="288" height="106" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <text x="56" y="106" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">FRICTION &amp; FIX</text>
      <text x="56" y="132" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• IT blocks write-access on Day 1</text>
      <text x="56" y="156" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">• Start with sample CSV + read-only</text>
      <rect x="354" y="82" width="288" height="106" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/>
      <text x="370" y="106" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">FAILURE GUARDRAIL</text>
      <text x="370" y="136" font-family="Patrick Hand, cursive" font-size="16" fill="#141836">Never fail silently on webhook</text>
      <text x="370" y="158" font-family="Patrick Hand, cursive" font-size="16" fill="#BE185D">timeouts — surface explicit retry.</text>
      <text x="40" y="232" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">SHIP FRI → Read-Only OAuth + Retry Banner</text>
    </svg>`;
  }
  // Level 3: Full Studio Editorial (Restraint + Whitespace + Visual Focal Flow + Shadows)
  return `<svg viewBox="0 0 680 280" ${filt}>
    <rect x="14" y="12" width="652" height="256" rx="12" fill="#FAFBFD" stroke="#141836" stroke-width="2.4"/>
    <!-- Clear Hero Header + High-Contrast KPI Badge -->
    <rect x="42" y="42" width="286" height="16" rx="3" fill="#0EA5E9" fill-opacity="0.28"/>
    <text x="46" y="53" font-family="Playwrite IT Moderna, cursive" font-size="21" fill="#141836">Data Sync Onboarding Fix</text>
    <rect x="498" y="30" width="142" height="36" rx="18" fill="#141836"/>
    <text x="569" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#10B981">+35% ACTIVATED</text>
    <!-- Visual Hero Flow (Left 2/3 with Cool Grey Offset Shadow) -->
    <rect x="48" y="92" width="368" height="106" rx="10" fill="#CBD5E1"/>
    <rect x="42" y="86" width="368" height="106" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <text x="60" y="110" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">ZERO-FRICTION ACTIVATION FLOW</text>
    <rect x="60" y="124" width="96" height="46" rx="7" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.8"/>
    <text x="108" y="151" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">SAMPLE CSV</text>
    <line x1="156" y1="147" x2="180" y2="147" stroke="#141836" stroke-width="2.4"/>
    <rect x="180" y="124" width="96" height="46" rx="7" fill="#EEF2FC" stroke="#141836" stroke-width="1.8"/>
    <text x="228" y="151" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">READ-ONLY</text>
    <line x1="276" y1="147" x2="300" y2="147" stroke="#047857" stroke-width="2.4"/>
    <rect x="300" y="124" width="92" height="46" rx="7" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
    <text x="346" y="151" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">LIVE SYNC ✓</text>
    <!-- Right 1/3 Counter-Balanced Risk Pill -->
    <rect x="442" y="92" width="198" height="106" rx="10" fill="#CBD5E1"/>
    <rect x="436" y="86" width="198" height="106" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.2"/>
    <text x="452" y="110" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">TIMEOUT GUARDRAIL</text>
    <text x="452" y="138" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">Show retry button +</text>
    <text x="452" y="160" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">last synced timestamp.</text>
    <!-- Clean Footer with Open Air -->
    <text x="42" y="236" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">SHIP TARGET: FRIDAY • 35% OPEN PAPER • PASSES SQUINT TEST</text>
  </svg>`;
}

export function renderDesignTheoryLabHTML() {
  return `
    <!-- EDITORIAL OPENING -->
    <div class="architect-note">
      <div class="architect-note-q">
        Good visual design is mostly subtraction. Open paper groups related notes more clearly than thick black borders ever will.
      </div>
      <div class="architect-note-sub">
        When a page feels exhausting to read, it is almost never because the drawings lack detail. It is because every element is shouting at the same size, weight, and saturation. Give the eye one unmistakable starting point, align your edges to one invisible rail, and cut the rest.
      </div>
    </div>

    <!-- 1. THE 6 FOUNDATIONAL LAWS OF EFFECTIVE VISUAL DESIGN -->
    <section class="lab cyan-accent" id="dt-laws-lab">
      <div class="lab-head">
        <span class="lab-title">Visual Design Theory // 6 Foundational Laws (Weak vs. Strong)</span>
        <span class="pill cyan">Gestalt • CRAP • Tufte • Value</span>
      </div>
      <div class="lab-body">
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          ${DESIGN_LAWS.map((l, i) => `<button class="seg-btn dt-tab ${i === 0 ? 'active' : ''}" data-id="${l.id}">${l.short}</button>`).join('')}
        </div>

        <div class="card tinted" style="border-color:var(--cyan);">
          <span id="dt-title" class="card-h" style="font-size:18px;"></span>
          <p id="dt-principle" style="font-size:14.8px; color:var(--ink-body);"></p>
          <div id="dt-svg-box" class="svg-box" style="margin:6px 0;"></div>
          <div class="card" style="background:#FFF; border-left:5px solid var(--mint);">
            <div class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep);">SKETCHBOOK RULE</div>
            <p id="dt-rule" class="card-p" style="font-size:14.2px; color:var(--ink-body);"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. INTERACTIVE "SQUINT TEST" & DE-CLUTTER TRANSFORMATION LAB -->
    <section class="lab magenta-accent" id="dt-squint-lab">
      <div class="lab-head">
        <span class="lab-title">Live De-Clutter Walkthrough &amp; Physical "Squint Test"</span>
        <span id="sq-score" class="pill magenta">State: Scannable</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl no-print" style="flex-wrap:wrap;">
          <div class="segmented" role="group" style="flex-wrap:wrap;">
            <button class="seg-btn sq-lvl" data-l="0">0. Cluttered Patchwork</button>
            <button class="seg-btn sq-lvl" data-l="1">1. + Hard Left Rail</button>
            <button class="seg-btn sq-lvl" data-l="2">2. + 3-Tier Hierarchy</button>
            <button class="seg-btn sq-lvl active" data-l="3">3. + Visual Flow &amp; Air</button>
          </div>
          <button id="sq-blur-btn" class="btn violet">👁 Toggle Squint Blur</button>
        </div>
        <div id="sq-svg-box" class="svg-box"></div>
        <p id="sq-cap" class="lab-cap"></p>
      </div>
    </section>

    <div class="studio-aside">
      <strong>Desk check (no software needed):</strong> Hold your physical notebook at arm's length and half-close your eyes until the handwriting blurs. Can you still tell which block is the headline, which block is the main diagram, and which single line is the warning? If it melts into uniform grey soup, darken your title or clear some air around the focal piece.
    </div>

    <!-- 3. INFORMATION DESIGN MATRIX: WHICH VISUAL SHOULD I DRAW? -->
    <section class="section-block">
      <h2>Information-Design Picker: Which Visual Fits Your Message?</h2>
      <p>
        Creating effective visuals starts BEFORE you pick up a pen: ask <strong>"What relationship am I trying to show?"</strong> and match it to the exact visual archetype:
      </p>
      <div class="table-wrap">
        <table class="t">
          <thead>
            <tr>
              <th>What You Want to Show</th>
              <th>Best Analog Visual Archetypes</th>
              <th>Example (Product / Tax / Deutsch)</th>
              <th>Jump To Studio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Trade-Off / Prioritization</strong></td>
              <td>2×2 Matrix, Balance Scale, Split-Curtain, Dumbbell Chart</td>
              <td>Impact vs. Effort features; Manual vs. AI time</td>
              <td><button class="btn secondary" data-nav="appL" style="padding:4px 9px; font-size:10px;">App L →</button></td>
            </tr>
            <tr>
              <td><strong>Sequence / Steps / Friction</strong></td>
              <td>Telemetry Rail, S-Curve Journey, Emotion Wave, Swimlanes</td>
              <td>User onboarding drop-off; Monthly UStVA filing</td>
              <td><button class="btn secondary" data-nav="appG" style="padding:4px 9px; font-size:10px;">App G →</button></td>
            </tr>
            <tr>
              <td><strong>Yes / No Rules &amp; Routing</strong></td>
              <td>Binary Diamond Tree, Tiered Triage Funnel</td>
              <td>Build vs. Buy vs. AI; EU VAT B2B vs. B2C OSS</td>
              <td><button class="btn secondary" data-nav="appF" style="padding:4px 9px; font-size:10px;">App F →</button></td>
            </tr>
            <tr>
              <td><strong>Layers / Architecture / Parts</strong></td>
              <td>Exploded Isometric Stack, Nested Matryoshka, PCB Mind Map</td>
              <td>AI SaaS stack; Mobile UI Z-layers; Satzklammer</td>
              <td><button class="btn secondary" data-nav="appK" style="padding:4px 9px; font-size:10px;">App K →</button></td>
            </tr>
            <tr>
              <td><strong>Exploration / Brainstorming</strong></td>
              <td>Tapered Organic Mind Map, Solar Orbits, Honeycomb Hex</td>
              <td>Book takeaways; Deutsch B2 grammar universe</td>
              <td><button class="btn secondary" data-nav="appE" style="padding:4px 9px; font-size:10px;">App E →</button></td>
            </tr>
            <tr>
              <td><strong>Memorable Big Idea / Persuasion</strong></td>
              <td>Glass Prism, Iceberg, Snipping the Sandbag, Tightrope Net</td>
              <td>Explaining ROI, hidden complexity, or AI safety</td>
              <td><button class="btn secondary" data-nav="appJ" style="padding:4px 9px; font-size:10px;">App J →</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 4. THE 7-POINT EFFECTIVE VISUAL PRE-FLIGHT CHECKLIST -->
    <section class="section-block">
      <h2>The 10-Second "Effective Visual" Pre-Flight Check</h2>
      <div class="grid-2">
        <div class="card">
          <div class="card-h">1. One Unmistakable Entry Point</div>
          <p class="card-p">Squint your eyes at your finished spread: does your gaze immediately land on ONE clear title or hero illustration? If two elements fight equally, dim one with Cool Grey.</p>
        </div>
        <div class="card">
          <div class="card-h">2. Cut 30% of Your Boxes</div>
          <p class="card-p">Every unnecessary border adds visual friction. Keep boxes ONLY for hero callouts, key warnings, and diagram nodes—let alignment and open dot-grid space organize everything else!</p>
        </div>
        <div class="card">
          <div class="card-h">3. Color = Meaning, Never Decoration</div>
          <p class="card-p">Ask yourself: <em>"Why is this pink?"</em> If the answer is "just to look colorful," erase it. If the answer is "Risk / Action / Die-Noun," keep it!</p>
        </div>
        <div class="card">
          <div class="card-h">4. The 5-Second Stranger Test</div>
          <p class="card-p">Could a colleague glance at your notebook page or whiteboard sketch for 5 seconds and repeat the #1 takeaway without you narrating it? If yes—you've built a world-class visual.</p>
        </div>
      </div>
    </section>
  `;
}

export function initDesignTheoryLab() {
  const gal = document.getElementById('dt-laws-lab');
  if (!gal) return;

  let activeId = DESIGN_LAWS[0].id;
  const renderLaw = () => {
    const l = DESIGN_LAWS.find(x => x.id === activeId) || DESIGN_LAWS[0];
    document.getElementById('dt-title').textContent = l.name;
    document.getElementById('dt-principle').textContent = l.principle;
    document.getElementById('dt-svg-box').innerHTML = l.svg;
    document.getElementById('dt-rule').textContent = l.rule;
  };
  gal.querySelectorAll('.dt-tab').forEach(b => b.addEventListener('click', () => {
    activeId = b.dataset.id;
    gal.querySelectorAll('.dt-tab').forEach(x => x.classList.toggle('active', x === b));
    renderLaw();
  }));
  renderLaw();

  // Squint Test Simulator
  let level = 3;
  let blurred = false;
  const CAPS = [
    '<strong>Stage 0 — Cluttered Patchwork:</strong> Six competing pastel fills, identical text weights, drifting left edges, and no focal point. Toggle <strong>Squint Blur</strong> to see it flatten into an unreadable quilt.',
    '<strong>Stage 1 — Aligned:</strong> Snapping cards to one left alignment rail and removing decorative rainbow fills quiets the noise right away—though the eye still has to hunt for the headline takeaway.',
    '<strong>Stage 2 — Clear Hierarchy:</strong> Adding three distinct visual tiers (script headline, dark KPI pill, single magenta guardrail) gives the reader a clear path in under two seconds.',
    '<strong>Stage 3 — Scannable Flow:</strong> Replacing text bullets with a 3-step visual flow, subtle Cool Grey cast shadows, and generous blank paper lets the spread survive the <strong>Squint Test</strong> cleanly.'
  ];
  const SCORES = ['State: Cluttered', 'State: Aligned', 'State: Clear Hierarchy', 'State: Scannable'];

  const renderSquint = () => {
    document.getElementById('sq-svg-box').innerHTML = renderSquintStageSVG(level, blurred);
    document.getElementById('sq-cap').innerHTML = CAPS[level];
    document.getElementById('sq-score').textContent = SCORES[level];
    const btn = document.getElementById('sq-blur-btn');
    if (btn) btn.textContent = blurred ? '👁 Squint Blur: ON (Click to Clear)' : '👁 Toggle Squint Blur';
  };

  document.querySelectorAll('.sq-lvl').forEach(b => b.addEventListener('click', () => {
    level = Number(b.dataset.l);
    document.querySelectorAll('.sq-lvl').forEach(x => x.classList.toggle('active', x === b));
    renderSquint();
  }));
  document.getElementById('sq-blur-btn')?.addEventListener('click', () => {
    blurred = !blurred;
    renderSquint();
  });
  renderSquint();
}
