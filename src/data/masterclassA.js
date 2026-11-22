/* =========================================================================
   TEXTBOOK MASTERCLASS EXPANSIONS (PART A: CHAPTERS 1–9)
   Deep craft on Alignment, Whitespace, Layouts, Drawing Mechanics, Maps & Concepts
   ========================================================================= */

export const MASTERCLASS_A = {
  // -------------------------------------------------------------------------
  // CH 1: VISUAL THINKING, ALIGNMENT & PERCEPTUAL CRAFT
  // -------------------------------------------------------------------------
  ch1: `
    <div class="prose-wrap">
      <h3>1.5 The 3-Distance Reading Test &amp; Optical Hierarchy</h3>
      <p>
        A genuinely great visual page works at three distinct physical viewing distances—just like a museum exhibition poster or an architectural drawing sheet. Train yourself to evaluate every finished spread at all three distances:
      </p>
      <ul>
        <li><strong>Distance 1 — Arm's Length (1.5 Meters / 1 Second):</strong> You should immediately read the <em>Spread Title</em>, identify the <em>single Hero Diagram</em>, and spot the <em>1–2 high-signal neon callouts</em>. If everything dissolves into uniform gray noise, increase contrast between your H1 title and body text, or carve out wider blank corridors.</li>
        <li><strong>Distance 2 — Desk Distance (50 cm / 5 Seconds):</strong> Every card header (Architect's Print), semantic color wash, and arrow direction should tell the complete story <em>without reading a single body bullet</em>. A busy tax partner or engineering lead should grasp 80% of your page at this tier.</li>
        <li><strong>Distance 3 — Reading Distance (30 cm / Deep Study):</strong> Only here do the <code>03</code> body bullets, <code>01</code> tabular Euro/latency numbers, statutory footnotes (<code>§ 13b UStG</code>), and German example clauses come into focus.</li>
      </ul>
      <p>
        <strong>Pro Tip on Restraint:</strong> Beginners think adding more boxes, more arrows, and more highlights makes notes "more visual." The opposite is true: <em>every decorative box you omit increases the perceptual power of the three boxes you keep</em>. Ask of every border: "Does this frame group distinct data, or is it just nervous doodling?"
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 2: HARDWARE MASTERY, GRIP & PEN MAINTENANCE
  // -------------------------------------------------------------------------
  ch2: `
    <div class="prose-wrap">
      <h3>2.5 Practical Studio Habits: Protecting Nibs, Angle Control &amp; Left-Hander Tips</h3>
      <p>
        Even top-shelf pens wear down rapidly if you use them with ballpoint-pen habits. Ballpoints require heavy downward pressure to roll thick oil paste; pigment fineliners (<em>Sakura Micron, Uni Pin</em>) feed liquid ink by <strong>capillary action</strong> and need almost zero pressure:
      </p>
      <ul>
        <li><strong>Feather-Light Touch:</strong> Hold your fineliner perpendicular (80°–90°) and let the tip kiss the paper. Heavy pressure crushes the microscopic plastic nib of a <code>01</code> or <code>03</code> pen within days, turning crisp lines ragged and dry.</li>
        <li><strong>Chisel-Tip Marker Angles:</strong> When using a Zebra Mildliner chisel tip for straight highlighter-drop bars, rest the <em>entire flat beveled edge</em> flush against the paper before pulling left-to-right. Lifting one corner creates streaky jagged edges.</li>
        <li><strong>Left-Handed Anti-Smudge Protocol:</strong> Rotate your notebook <strong>25°–35° clockwise</strong>, place a clean scrap index card directly under the heel of your left hand (the "hand-bridge" trick), and build diagrams slightly top-right to bottom-left when adding wet highlighter washes so your palm never sweeps over fresh ink.</li>
        <li><strong>The Pencil Under-Drawing Option:</strong> Never feel guilty sketching complex diagrams lightly in a <strong>non-photo blue 0.5mm mechanical pencil</strong> (<em>Uni NanoDia Blue</em>) before inking in Micron 05. Blue graphite practically vanishes under scans and keeps layouts stress-free while you build freehand confidence.</li>
      </ul>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 3: BECOMING BETTER AT DRAWING — MOTOR CONTROL & GHOSTING
  // -------------------------------------------------------------------------
  ch3: `
    <div class="prose-wrap">
      <h3>3.4 Becoming Better at Drawing: Ghosting, Confident Strokes &amp; Breaking Wobble</h3>
      <p>
        The single biggest secret shared by industrial designers and drawing schools (like <em>Drawabox</em>) is that <strong>slow, cautious lines wobble; brisk, confident lines sing</strong>. When you creep slowly across the paper trying to steer the pen tip millimeter by millimeter, tiny micro-tremors in your fingers turn every line into jagged barbed wire.
      </p>
      <p>
        Replace cautious creeping with the <strong>3-Step Ghosting Technique</strong> on every box wall, chart axis, and diagram arrow:
      </p>
      <ol>
        <li><strong>Plot Two Anchor Dots:</strong> Place two tiny ink dots marking your exact start and finish points on the 5mm grid.</li>
        <li><strong>Ghost 3 Times in Mid-Air:</strong> Hover your pen 1–2mm above the paper and swing your forearm briskly between the two dots three times until your muscle memory locks onto the exact trajectory.</li>
        <li><strong>Commit in One Fluid Pull:</strong> Lower the nib on the start dot, keep your eyes glued strictly to the <em>end dot</em> (never watch the pen tip!), and pull in one smooth 0.3-second sweep. Even if you overshoot by 1mm, a crisp straight overshoot looks 10× more architectural than a shaky line that hits the exact dot.</li>
      </ol>
    </div>

    <div class="svg-box">
      <svg viewBox="0 0 760 120">
        <rect x="18" y="14" width="350" height="92" rx="7" fill="#FFF7FB" stroke="#EC4899" stroke-width="1.8"/>
        <text x="34" y="36" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">✕ CAUTIOUS SLOW STEERING (FINGER WOBBLE)</text>
        <path d="M 44 68 Q 74 62 104 71 T 164 65 T 224 72 T 284 64 T 336 69" fill="none" stroke="#141836" stroke-width="2.2"/>
        <text x="34" y="94" font-family="Patrick Hand, cursive" font-size="14" fill="#BE185D">Watching the nib while creeping slowly causes jitters.</text>

        <rect x="392" y="14" width="350" height="92" rx="7" fill="#F2FDF8" stroke="#10B981" stroke-width="1.8"/>
        <text x="408" y="36" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">✓ GHOST 3× → COMMIT IN ONE BRISK FOREARM PULL</text>
        <circle cx="422" cy="68" r="4" fill="#0EA5E9"/><circle cx="712" cy="68" r="4" fill="#EC4899"/>
        <line x1="422" y1="68" x2="712" y2="68" stroke="#141836" stroke-width="2.6"/>
        <text x="408" y="94" font-family="Patrick Hand, cursive" font-size="14" fill="#047857">Eyes locked on the pink end-dot → razor-straight line!</text>
      </svg>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 4: OPTICAL ALIGNMENT & TYPOGRAPHIC RHYTHM
  // -------------------------------------------------------------------------
  ch4: `
    <div class="prose-wrap">
      <h3>4.4 Optical Alignment &amp; Why Left-Aligned Text Beats Centered Text</h3>
      <p>
        Notice why amateur slides and messy posters often look subtly "off" even when everything is centered: <strong>centered multi-line paragraphs destroy the eye's vertical return rail</strong>. Every time your eye finishes a line, it has to hunt for a new, unpredictable starting point on the left.
      </p>
      <ul>
        <li><strong>Default to Crisp Left-Alignment:</strong> Reserve centered lettering strictly for <em>short 1–3 word titles</em> inside ribbons, badges, or isometric tops. Align all bullet lists, definitions, and annotations flush-left against one unwavering vertical dot column.</li>
        <li><strong>Hanging Punctuation &amp; Hanging Bullets:</strong> Place your bullet symbols (<code>• → □ ◇ !</code>) <em>outside</em> the left text rail by half a dot so the actual first letters of every line form a laser-straight vertical wall.</li>
        <li><strong>Optical Overshoot on Round Letters:</strong> Visually, curved letters (<code>O, C, G, S</code>) and pointed tops (<code>A, V, M</code>) look slightly shorter than flat-topped letters (<code>E, H, T</code>) of the exact same millimeter height. Letting round and pointed capitals kiss 0.3mm past the dot guideline makes them look optically balanced.</li>
        <li><strong>Pair Short Line Lengths (35–55 Characters):</strong> Never write prose all the way across a 23-dot page width! Narrow 11–15 dot columns (like a 65/35 Bento or Equal Thirds) dramatically increase reading speed and leave natural margin room for icons and sparklines.</li>
      </ul>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 5: DEEP LAYOUT CRAFT — MICRO VS MACRO WHITESPACE & ALIGNMENT GRIDS
  // -------------------------------------------------------------------------
  ch5: `
    <div class="prose-wrap">
      <h3>5.5 Mastering Whitespace: Micro-Padding vs. Macro-Corridors</h3>
      <p>
        Most people misunderstand "leave 30% whitespace" as leaving one big awkward blank puddle at the bottom of the page after cramming everything tightly at the top. Professional layout designers split whitespace into two deliberate instruments:
      </p>
      <ul>
        <li><strong>Micro-Whitespace (Internal Breathing Room):</strong> Always leave at least <strong>0.5–1 full dot of empty padding</strong> inside every Cyber Card between your words and the ink border. When letters touch box walls, the container feels claustrophobic. Also leave 0.5 empty dot rows between bullet points so lines never blur together.</li>
        <li><strong>Macro-Whitespace (Structural Corridors):</strong> Leave <strong>2 empty dots around all four outer edges</strong> of the page, <strong>1–2 dots between columns</strong>, and <strong>3–4 blank dot rows</strong> between major sections or diagram tiers. Macro-whitespace acts like silent architecture—grouping related cards without needing extra ink.</li>
        <li><strong>The "Anchor-All-Four-Corners" Layout Trick:</strong> To make a full page look balanced even with 40% open white paper, place one subtle visual anchor near each perimeter rail (e.g., Row-1 Micro-Header top-left, Page/Date top-right, main diagram center-left, Taped Summary or Blueprint Title Block bottom-right). Open space <em>between</em> anchored elements looks intentional and luxurious; open space left over at the bottom looks unfinished.</li>
        <li><strong>Breaking the Grid Once for Drama:</strong> Once 90% of your spread snaps obediently to your 2-dot margins and Bento rails, intentionally let <em>one single Hero element</em> break the rule—such as a tilted <code>APPROVED ✓</code> stamp overlapping a card corner, or a bold isometric stack straddling two columns. Controlled tension creates instant visual energy!</li>
      </ul>
    </div>

    <div class="svg-box">
      <svg viewBox="0 0 760 156">
        <text x="380" y="20" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">LAYOUT ANATOMY // MICRO-PADDING vs. MACRO-CORRIDORS vs. GRID-BREAKING STAMP</text>
        <rect x="24" y="32" width="712" height="110" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <!-- Outer 2-dot Margin Tint -->
        <rect x="26" y="34" width="708" height="14" fill="#F59E0B" fill-opacity="0.16"/>
        <rect x="26" y="126" width="708" height="14" fill="#F59E0B" fill-opacity="0.16"/>
        <rect x="26" y="34" width="18" height="106" fill="#F59E0B" fill-opacity="0.16"/>
        <rect x="716" y="34" width="18" height="106" fill="#F59E0B" fill-opacity="0.16"/>
        <!-- Card 1 showing internal micro-padding -->
        <rect x="46" y="50" width="290" height="74" rx="7" fill="#E0F2FE" fill-opacity="0.24" stroke="#141836" stroke-width="2"/>
        <rect x="60" y="62" width="262" height="50" fill="#FFF" stroke="#0EA5E9" stroke-dasharray="3 3"/>
        <text x="191" y="84" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0EA5E9">1-DOT INTERNAL MICRO-PADDING</text>
        <text x="191" y="102" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Words NEVER touch box borders!</text>
        <!-- Macro Gutter -->
        <rect x="338" y="50" width="44" height="74" fill="#EC4899" fill-opacity="0.14"/>
        <text x="360" y="84" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">MACRO</text>
        <text x="360" y="98" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">GUTTER</text>
        <!-- Card 2 + Grid-Breaking Stamp -->
        <rect x="384" y="50" width="318" height="74" rx="7" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <text x="512" y="92" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5">Aligned content block on right rail</text>
        <g transform="rotate(-9 676 112)">
          <rect x="626" y="96" width="96" height="28" rx="4" fill="#ECFDF5" stroke="#047857" stroke-width="2.4"/>
          <text x="674" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">BREAK GRID ✓</text>
        </g>
      </svg>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 6: HOW TO ILLUSTRATE ABSTRACT CONCEPTS ON THE FLY
  // -------------------------------------------------------------------------
  ch6: `
    <div class="prose-wrap">
      <h3>6.4 How to Illustrate Abstract Concepts in Real Time (The 3-Step Translation Engine)</h3>
      <p>
        Anyone can draw a laptop or coffee mug—the real superpower is turning invisible, abstract nouns like <em>amortization, latency, reverse charge, prompt injection,</em> or <em>Konjunktiv II</em> into concrete sketches in under 5 seconds. Use the <strong>Verb → Physics → Metaphor Engine</strong>:
      </p>
      <ol>
        <li><strong>Step 1 — Hunt for the Hidden Physical Verb:</strong> Abstract words almost always smuggle a physical action inside them. <em>"Reverse Charge"</em> = flipping an arrow from Seller onto Buyer. <em>"Amortization"</em> = slicing one big block into 5 equal yearly slabs. <em>"Context Window"</em> = a sliding picture frame moving over a long scroll of text. <em>"Nominalisierung"</em> (German turning verbs into nouns) = putting a verb inside a solid Cyan/Magenta box with a capital letter badge!</li>
        <li><strong>Step 2 — Pick One of 5 Visual Archetypes:</strong> Almost every abstract idea fits one of five buckets: (A) <strong>Boundary / Container</strong> (what's inside vs. outside), (B) <strong>Flow / Transformation</strong> (Input → Machine → Output), (C) <strong>Tension / Tradeoff</strong> (Scale, Tug-of-War, Sliders), (D) <strong>Hierarchy / Depth</strong> (Iceberg, Pyramid, Onion), or (E) <strong>Journey / Sequence</strong> (Staircase, Timeline, Subway Map).</li>
        <li><strong>Step 3 — Strip to 3 Strokes + 1 Word Label:</strong> Never expect an icon to carry 100% of the meaning silently—pair a rough 3-stroke drawing with a crisp 2-word label. Text + simple image beats photorealistic art every time!</li>
      </ol>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 7: CONTAINER HARMONY, VISUAL WEIGHT & ALIGNMENT
  // -------------------------------------------------------------------------
  ch7: `
    <div class="prose-wrap">
      <h3>7.5 Matching Container Visual Weight to Information Importance</h3>
      <p>
        Not every idea on your page deserves a heavy shadowed Cyber Card. Think of containers as an <strong>escalating volume dial from 1 to 5</strong>:
      </p>
      <ul>
        <li><strong>Volume 1 — Whitespace + Left Alignment Only:</strong> Standard supporting facts and definitions. Zero box needed!</li>
        <li><strong>Volume 2 — Thin Hairline <code>01</code> Bracket or Left Accent Bar:</strong> Groups 3–4 related bullets cleanly without visual heaviness.</li>
        <li><strong>Volume 3 — Standard <code>03/05</code> Rounded Card + Cool Grey Shadow:</strong> Primary system components, statutory rules, or key German grammar formulas.</li>
        <li><strong>Volume 4 — Magenta Dashed Zone or Chamfered 45° HUD Card:</strong> Compliance warnings, audit risks, or expensive reasoning bottlenecks.</li>
        <li><strong>Volume 5 — Taped Decision Slip or Tilted Acid Mint Stamp:</strong> The 1–2 final decisions or sign-offs you want visible from across the room.</li>
      </ul>
      <p>
        <strong>Alignment Golden Rule for Flowcharts:</strong> Always align connected boxes along shared horizontal or vertical <em>centerlines</em> (count dots so every box in a row shares the exact same middle dot row). Off-center boxes force jagged stair-stepped arrows that immediately make clean thinking look sloppy.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 8: DATA STORYTELLING & ANNOTATION CRAFT
  // -------------------------------------------------------------------------
  ch8: `
    <div class="prose-wrap">
      <h3>8.3 Editorial Data Storytelling: Turning Raw Charts Into Arguments</h3>
      <p>
        A hand-plotted chart with axes and bars is only <em>half</em> finished. What turns an ordinary notebook chart into an editorial-grade Economist or New York Times visual is <strong>direct on-chart annotation</strong>:
      </p>
      <ul>
        <li><strong>Write the Punchline AS the Chart Title:</strong> Never title a chart <em>"Query Latency Table."</em> Title it <em>"Flash Triage Cuts Routine Latency 97% (42s → 1.2s)"</em> so the reader knows the exact takeaway before scanning the axes.</li>
        <li><strong>Kill Separate Legend Boxes:</strong> Instead of forcing the reader's eye to ping-pong back and forth to a legend corner, label lines and dumbbells <em>directly beside the endpoints</em> in matching Cyan/Magenta/Mint ink.</li>
        <li><strong>Circle ONE Outlier With a 45° Elbow Callout:</strong> Drop a tiny Magenta dashed ring around the single most interesting spike, threshold (e.g., <code>€10,000 OSS trigger</code>), or dip, and point a 45° callout explaining <em>why it happened</em>.</li>
        <li><strong>Always Show Zero (or Mark Axis Breaks Honestly):</strong> On bar and bullet charts, start baselines at <code>0</code> so visual bar lengths stay proportional. On Slopegraphs or Zoomed Sparklines, clearly mark the top &amp; bottom tick values in tabular monospace.</li>
      </ul>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 9: HOW TO DRAW MAPS — GEOGRAPHIC TILE-MAPS, MIND-MAPS & JOURNEY MAPS
  // -------------------------------------------------------------------------
  ch9: `
    <div class="prose-wrap">
      <h3>9.3 How to Draw Maps Without Artistic Talent (4 Practical Notebook Map Types)</h3>
      <p>
        Maps are among the highest-impact visuals you can put in a notebook—whether showing EU cross-border VAT territories, tracing a client's emotional journey, or organizing a sprawling German vocabulary field. Most non-artists freeze when trying to trace wiggly real-world coastlines. Use these <strong>4 foolproof dot-grid mapping engines</strong> instead:
      </p>
      <ul>
        <li><strong>1. Geometric Tile-Grid Cartograms (EU / World Maps in 15 Seconds!):</strong> Replace squiggly country outlines with equal <strong>2×2 dot rounded squares or hexagons</strong> arranged in rough geographic compass positions (<code>NL</code> top-left of <code>DE</code>, <code>FR</code> bottom-left, <code>AT</code> and <code>CH</code> right below <code>DE</code>, <code>PL</code> east). Every country now has identical room for its VAT rate (<code>19% / 20% / 21%</code>) and crisp inter-country flow arrows!</li>
        <li><strong>2. Emotional Customer / User Journey Maps:</strong> Divide a landscape page into 5 vertical phase columns (<code>Trigger → Research → Quote → Filing → Follow-Up</code>). Draw a horizontal midline representing neutral emotion, then plot a smooth <strong>Sentiment Wave Curve</strong> rising into Mint peaks (delight) and dipping into Magenta valleys (friction/anxiety) with tiny Bean-Body faces at each turning point!</li>
        <li><strong>3. Disciplined Radial Mind-Maps (Anti-Hairball Rules):</strong> Start dead-center with a bold 3-word hub; pull <strong>max 5–6 thick tapered curved branches</strong> outward (each in one semantic color); keep <strong>100% of words strictly horizontal</strong> (never write upside-down or sideways along diagonal twigs!); and use 1–2 word nouns per twig so branches stay airy.</li>
        <li><strong>4. Top-Down Architectural Floorplans &amp; Territory Maps:</strong> On a 5mm dot grid, <code>1 dot = 1 meter</code> (or 1 logical zone). Draw outer walls with bold <code>05</code> double lines, gaps for doors with tiny 90° quarter-circle swing arcs, and dotted paths showing how people, goods, or warehouse inventory physically move (huge for EU VAT supply-chain &amp; triangulation analysis!).</li>
      </ul>
    </div>

    <!-- Bespoke SVG Showcase: EU Tile-Grid Cartogram + Journey Wave Map -->
    <div class="grid-2">
      <div class="card">
        <div class="card-h">Map Type 1: Geometric EU Tile-Grid Cartogram (15s)</div>
        <div class="svg-box">
          <svg viewBox="0 0 360 190">
            <!-- Simplified DACH + Western EU Tile Cartogram -->
            <rect x="108" y="22" width="54" height="42" rx="6" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><text x="135" y="40" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">NL</text><text x="135" y="55" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#0EA5E9">21%</text>
            <rect x="170" y="22" width="66" height="66" rx="7" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="2.6"/><text x="203" y="50" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700">DE ★</text><text x="203" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">19% / 7%</text>
            <rect x="244" y="22" width="54" height="54" rx="6" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><text x="271" y="46" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">PL</text><text x="271" y="61" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9">23%</text>
            <rect x="64" y="72" width="68" height="62" rx="6" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/><text x="98" y="99" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#BE185D">FR</text><text x="98" y="116" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#BE185D">20% OSS</text>
            <rect x="140" y="96" width="54" height="44" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="2" stroke-dasharray="4 3"/><text x="167" y="115" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#B45309">CH</text><text x="167" y="130" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5">NON-EU</text>
            <rect x="202" y="96" width="56" height="44" rx="6" fill="#D1FAE5" stroke="#047857" stroke-width="2"/><text x="230" y="115" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">AT</text><text x="230" y="130" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#047857">20%</text>
            <!-- Cross-Border Flow Arrow -->
            <path d="M 170 64 Q 140 72 132 90" fill="none" stroke="#EC4899" stroke-width="2.6"/><polygon points="129,94 139,89 131,82" fill="#EC4899"/>
            <text x="180" y="172" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#525B7A">Zero coastline stress — every country tile holds crisp VAT rates!</text>
          </svg>
        </div>
      </div>

      <div class="card">
        <div class="card-h">Map Type 2: Emotional Journey / Service Map</div>
        <div class="svg-box">
          <svg viewBox="0 0 360 190">
            <line x1="20" y1="92" x2="340" y2="92" stroke="#CBD5E1" stroke-width="1.6" stroke-dasharray="4 3"/>
            <text x="24" y="86" font-family="IBM Plex Mono, monospace" font-size="8" fill="#525B7A">NEUTRAL</text>
            <!-- Emotional Wave Curve -->
            <path d="M 42 74 C 82 74, 92 138, 134 138 C 176 138, 186 58, 232 58 C 276 58, 286 38, 322 38" fill="none" stroke="#0EA5E9" stroke-width="3.6" stroke-linecap="round"/>
            <circle cx="42" cy="74" r="6" fill="#0EA5E9" stroke="#141836" stroke-width="1.8"/>
            <circle cx="134" cy="138" r="7" fill="#EC4899" stroke="#141836" stroke-width="1.8"/>
            <circle cx="232" cy="58" r="6" fill="#7C3AED" stroke="#141836" stroke-width="1.8"/>
            <circle cx="322" cy="38" r="7" fill="#10B981" stroke="#141836" stroke-width="1.8"/>
            <text x="134" y="158" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">PAIN: 45m MANUAL</text>
            <text x="232" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#7C3AED">AI COPILOT</text>
            <text x="314" y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">FILED ✓</text>
            <text x="180" y="180" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#525B7A">Plot emotional highs &amp; friction valleys across process steps!</text>
          </svg>
        </div>
      </div>
    </div>
  `
};
