/* =========================================================================
   TEXTBOOK MASTERCLASS EXPANSIONS (PART B: CHAPTERS 10–18)
   Becoming Better at Drawing, 20-Concept Dictionary, Composition & Practice Loops
   ========================================================================= */

export const MASTERCLASS_B = {
  // -------------------------------------------------------------------------
  // CH 10: THE NON-ARTIST'S 6-SKILL DRAWING ACCELERATOR
  // -------------------------------------------------------------------------
  ch10: `
    <div class="prose-wrap">
      <h3>10.3 Six Concrete Mechanics That Make Anyone Dramatically Better at Drawing</h3>
      <p>
        "Drawing talent" is just six tiny mechanical habits stacked together. Practice one of these per week and your notebook illustrations will leap ahead within 30 days—zero art school required:
      </p>
      <ol>
        <li><strong>The "Draw-Through" Habit:</strong> When sketching a cylinder, mug, or stacked cubes lightly in pencil (or mentally), draw the <em>hidden back edges too</em>—like the object is made of clear glass. Drawing the full back ellipse prevents flat, lopsided bases and makes stacked objects sit flush on top of each other.</li>
        <li><strong>T-Junction Overlapping (Cheapest 3D Trick on Earth):</strong> Whenever Object A sits in front of Object B (e.g., a mug in front of a laptop, or a foreground server rack in front of a legacy database), let Object B's outline stop abruptly against Object A's silhouette, forming a crisp <strong>T-intersection</strong>. Your brain decodes overlap as 3D depth instantaneously—even with zero shading!</li>
        <li><strong>Draw Negative Space Instead of the Object:</strong> Struggling to draw a mug handle, chair legs, or a tricky wrench icon? Stop staring at the object and draw the <em>exact geometric shape of the empty white hole</em> trapped inside the handle or between the legs. Negative space bypasses your brain's faulty childhood symbols.</li>
        <li><strong>Fluid Double-Loop Ellipses (Never Almond Corners!):</strong> Beginners draw cylinder tops like pointy footballs/almonds (<code>&lt; &gt;</code>). Real ellipses have smooth, rounded left and right ends! Ghost a full oval 3 times in mid-air from your elbow, then lower the pen for one continuous 1.25-turn sweep.</li>
        <li><strong>Comparative Proportions in Dot Units:</strong> Before drawing any compound object, measure its bounding ratio on the dot grid: <em>"This laptop screen is 6 dots wide × 4 dots tall; the coffee mug beside it is 2 dots wide × 2.5 dots tall."</em> Getting relative scale right makes rough sketches look astonishingly convincing.</li>
        <li><strong>Always Use Reference — The 3-Rep Memory Loop:</strong> Even Pixar artists draw from photo references! To permanently learn any new object (say, a lighthouse or German *Aktenordner*): <strong>Rep 1</strong> copy while looking at a photo (decomposing into primitives); <strong>Rep 2</strong> draw it from memory immediately; <strong>Rep 3</strong> compare against the photo and fix the single part you forgot. Three reps lock it into your permanent visual vocabulary!</li>
      </ol>
    </div>

    <!-- Bespoke Visual Craft Strip: T-Junctions, Negative Space & Smooth Ellipses -->
    <div class="svg-box">
      <svg viewBox="0 0 760 142">
        <!-- 1. T-Junction Overlap -->
        <g transform="translate(18,12)">
          <rect x="0" y="0" width="228" height="118" rx="7" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          <text x="114" y="20" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0EA5E9">1. T-JUNCTION OVERLAP</text>
          <rect x="112" y="34" width="82" height="54" rx="5" fill="#EEF2FC" stroke="#141836" stroke-width="1.6"/>
          <rect x="46" y="48" width="84" height="54" rx="5" fill="#E0F2FE" stroke="#141836" stroke-width="2.6"/>
          <circle cx="130" cy="48" r="8" fill="none" stroke="#EC4899" stroke-width="2"/>
          <circle cx="130" cy="88" r="8" fill="none" stroke="#EC4899" stroke-width="2"/>
          <text x="114" y="112" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13" fill="#BE185D">Stop back edge at front edge = instant depth</text>
        </g>
        <!-- 2. Negative Space -->
        <g transform="translate(266,12)">
          <rect x="0" y="0" width="228" height="118" rx="7" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          <text x="114" y="20" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#7C3AED">2. DRAW NEGATIVE SPACE</text>
          <rect x="64" y="36" width="58" height="58" rx="5" fill="#E2E8F0" stroke="#141836" stroke-width="2.2"/>
          <path d="M 122 46 C 154 46 154 84 122 84 Z" fill="#EC4899" fill-opacity="0.32" stroke="#141836" stroke-width="5"/>
          <path d="M 124 52 C 144 52 144 78 124 78 Z" fill="#EC4899" fill-opacity="0.45"/>
          <text x="114" y="112" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13" fill="#7C3AED">Draw the pink D-shaped hole inside handle!</text>
        </g>
        <!-- 3. Smooth vs Almond Ellipses -->
        <g transform="translate(514,12)">
          <rect x="0" y="0" width="228" height="118" rx="7" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          <text x="114" y="20" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">3. SMOOTH ELLIPSE ENDS</text>
          <path d="M 28 50 Q 68 32 108 50 Q 68 68 28 50 Z" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/>
          <text x="68" y="76" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">✕ POINTY ALMOND</text>
          <ellipse cx="168" cy="50" rx="40" ry="15" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
          <text x="168" y="76" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">✓ ROUNDED ENDS</text>
          <text x="114" y="112" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13" fill="#047857">Ghost 3 full ovals before touching ink!</text>
        </g>
      </svg>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 11: CAST SHADOW GEOMETRY & SHADING SHORTCUTS
  // -------------------------------------------------------------------------
  ch11: `
    <div class="prose-wrap">
      <h3>11.4 Three Fast Shadow Tricks That Make Amateur Sketches Look Editorial</h3>
      <p>
        You do not need complex architectural ray-tracing to draw convincing cast shadows in a notebook. Follow three reliable 2-second rules:
      </p>
      <ul>
        <li><strong>The 45° Ground-Slide Shortcut:</strong> For any box, cylinder, or Bean-Body figure under our standard 10 o'clock sun, slide the base footprint <strong>1 dot right and 0.5 dots down</strong> and fill that sliver with a single pass of Cool Grey. That's it—90% of cast-shadow realism in 2 seconds!</li>
        <li><strong>Sharp Near Contact, Softer Further Away:</strong> Real cast shadows are darkest and crispest right where the object meets the table (Ambient Occlusion), then lighten slightly as they stretch out. Reinforce just the first 2mm beside the object with a second marker coat or crisp <code>05</code> ink seam.</li>
        <li><strong>Floating Shadow Gap = Levitation:</strong> Want an exploded AI plane, cloud icon, or flying UI card to look like it is genuinely <em>hovering in mid-air</em>? Leave <strong>1–2 dots of empty white space</strong> between the object's bottom edge and its Cool Grey ground shadow below! The wider the white gap, the higher it appears to float.</li>
      </ul>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 12: THE 20-CONCEPT ABSTRACT → VISUAL TRANSLATION DICTIONARY
  // -------------------------------------------------------------------------
  ch12: `
    <div class="prose-wrap">
      <h3>12.4 The 18-Concept Abstract → Visual Translation Dictionary</h3>
      <p>
        Whenever you hit an intimidating abstract term in a meeting, textbook, or German B2 lesson and think <em>"How on earth do you draw that?"</em>, consult this concrete translation table:
      </p>
    </div>

    <div class="table-wrap">
      <table class="t">
        <thead><tr><th>Abstract Concept</th><th>Domain</th><th>Instant 5-Second Visual Drawing</th></tr></thead>
        <tbody>
          <tr><td><strong>Hallucination</strong></td><td><span class="pill cyan">AI/Tech</span></td><td>Cloud/LLM speech bubble emitting a dashed ghost-fact floating off the ground with <code>?</code></td></tr>
          <tr><td><strong>Context Window</strong></td><td><span class="pill cyan">AI/Tech</span></td><td>A Cyan sliding bracket frame moving over a long dotted scroll of text tokens</td></tr>
          <tr><td><strong>RAG / Vector Search</strong></td><td><span class="pill cyan">AI/Tech</span></td><td>Magnifying lens pulling 3 glowing Cyan blocks off an Isometric Knowledge Shelf</td></tr>
          <tr><td><strong>Prompt Injection</strong></td><td><span class="pill cyan">AI/Tech</span></td><td>Trojan-horse envelope sneaking a Magenta <code>!</code> command past an unlocked gate</td></tr>
          <tr><td><strong>Rate Limiting</strong></td><td><span class="pill cyan">AI/Tech</span></td><td>Floodgate Dam holding back 10 incoming arrows and releasing 2 steady drops</td></tr>
          <tr><td><strong>Stateless vs. Stateful</strong></td><td><span class="pill cyan">AI/Tech</span></td><td>Empty clean desk (Stateless) vs. Desk holding a linked Database cylinder (Stateful)</td></tr>
          <tr><td><strong>Reverse Charge (§ 13b)</strong></td><td><span class="pill magenta">Tax</span></td><td>A curved U-turn arrow flipping the <code>€ VAT</code> box off the Seller onto the Buyer's shoulders</td></tr>
          <tr><td><strong>Permanent Establishment</strong></td><td><span class="pill magenta">Tax</span></td><td>A small isometric office building anchored with a heavy physical anchor icon inside a country tile</td></tr>
          <tr><td><strong>Transfer Pricing</strong></td><td><span class="pill magenta">Tax</span></td><td>Two sister company cubes connected by a Balance Scale labeled <code>Arm's Length =</code></td></tr>
          <tr><td><strong>Threshold (€10k OSS)</strong></td><td><span class="pill magenta">Tax</span></td><td>Horizontal dashed tripwire line labeled <code>€10k</code>; bar crossing above it flips from Cyan → Magenta</td></tr>
          <tr><td><strong>Withholding Tax (WHT)</strong></td><td><span class="pill magenta">Tax</span></td><td>Cash pipeline passing through a tiny slice-valve diverting 15% straight into a tax coin box</td></tr>
          <tr><td><strong>Audit Trail</strong></td><td><span class="pill magenta">Tax</span></td><td>Linked chain of dated footprint stamps (<code>v1 → v2 → HITL ✓</code>) inside a locked ledger</td></tr>
          <tr><td><strong>Satzklammer</strong></td><td><span class="pill amber">Deutsch</span></td><td>Twin pillars <code>[ V2 ]</code> and <code>[ Verb-Ende ]</code> spanned by a glowing Violet overhead arch</td></tr>
          <tr><td><strong>Wechselpräpositionen</strong></td><td><span class="pill amber">Deutsch</span></td><td>Moving arrow <code>→</code> into a box (Cyan <code>Akk</code>) vs. stationary dot <code>●</code> inside box (Mint <code>Dat</code>)</td></tr>
          <tr><td><strong>Passiv (werden + P.II)</strong></td><td><span class="pill amber">Deutsch</span></td><td>Spotlight shining strictly on the <em>object</em> (<code>der Bescheid wird geprüft</code>) while actor fades grey</td></tr>
          <tr><td><strong>Konjunktiv II</strong></td><td><span class="pill amber">Deutsch</span></td><td>Dashed thought-cloud parallel timeline branching softly above solid reality (<code>wäre / hätte / würde</code>)</td></tr>
          <tr><td><strong>Trennbare Verben</strong></td><td><span class="pill amber">Deutsch</span></td><td>A two-part Lego brick (<code>ein | reichen</code>) snapping apart with prefix flying to the end of the line</td></tr>
          <tr><td><strong>Nominalisierung</strong></td><td><span class="pill amber">Deutsch</span></td><td>A running verb arrow getting boxed inside a solid Capital-Letter noun crate (<code>prüfen → die Prüfung</code>)</td></tr>
        </tbody>
      </table>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 13: VISUAL STORYTELLING, PACING & DRAWING EXPRESSIVE PROPS
  // -------------------------------------------------------------------------
  ch13: `
    <div class="prose-wrap">
      <h3>13.4 Pacing, Visual Rhythm &amp; Giving Scenes Emotional Clarity</h3>
      <p>
        Great visual storyboards feel cinematic because they control <strong>visual pacing</strong>—alternating busy panels with calm panels, and using posture and eye-line direction to guide the reader naturally left-to-right:
      </p>
      <ul>
        <li><strong>Face Characters Toward the Next Panel:</strong> Have your Bean-Body speaker on the left face <em>rightward</em> toward the solution or next frame. Characters facing left accidentally bounce the reader's eye backwards off the page!</li>
        <li><strong>Use Action Lines &amp; Sweat Drops (Comic Shorthand):</strong> Two tiny curved motion arcs beside a raised arm show waving or urgency; three tiny spark ticks above a head show an "Aha!" insight; a single blue tear/sweat drop beside a tilted head instantly communicates stress or German grammar confusion.</li>
        <li><strong>Vary Panel Sizes by Importance:</strong> Make Panel 1 (Hook) compact, Panel 2 (The Core Mechanism) <em>twice as wide</em>, and Panel 3 (The Approved Proof) bold and high-contrast. Uniform tiny boxes make every moment feel equally mundane.</li>
        <li><strong>Anchor Every Scene With 1 Concrete Detail:</strong> Instead of generic stick people talking in space, drop ONE instantly recognizable prop on the ground line—a glowing Cyan laptop, a stacked pile of German <em>Aktenordner</em>, a wall clock showing <code>10. MAI</code>, or a café espresso cup for everyday German dialogues.</li>
      </ul>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Creative Editorial Format // The "Breaking News" Front-Page Summary</div>
      <div class="svg-box">
        <svg viewBox="0 0 740 162">
          <rect x="16" y="10" width="708" height="142" rx="6" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
          <text x="370" y="34" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="17" fill="#141836">Die Steuer &amp; AI Zeitung — Edition #14</text>
          <line x1="34" y1="42" x2="706" y2="42" stroke="#141836" stroke-width="2.4"/><line x1="34" y1="46" x2="706" y2="46" stroke="#141836" stroke-width="1"/>
          <text x="34" y="68" font-family="IBM Plex Mono, monospace" font-size="13.5" font-weight="700" fill="#BE185D">EXTRA! MULTI-AGENT COPILOT CUTS EU VAT REVIEW TIME BY 93%</text>
          <rect x="34" y="78" width="186" height="62" rx="5" fill="#E0F2FE" stroke="#141836" stroke-width="1.8"/>
          <text x="127" y="106" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">[ HERO SKETCH ]</text>
          <text x="127" y="124" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13">Flash Triage + HITL</text>
          <text x="238" y="96" font-family="Patrick Hand, cursive" font-size="15">• 80% routine deadline lookups resolved in 0.2s</text>
          <text x="238" y="116" font-family="Patrick Hand, cursive" font-size="15">• Partner retains 100% write keys via MCP Gate</text>
          <text x="238" y="136" font-family="Patrick Hand, cursive" font-size="15" fill="#047857">→ Pilot kicks off Jan 15 across 12 GmbH clients ✓</text>
        </svg>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 14: ADVANCED LAYOUT PATTERNS & RECOVERY WHEN SPACE RUNS OUT
  // -------------------------------------------------------------------------
  ch14: `
    <div class="prose-wrap">
      <h3>14.4 Six Layout Rescue Tactics When a Live Spread Goes Off-Plan</h3>
      <p>
        Even experienced visual thinkers misjudge how long a speaker will talk about Topic #2. Never rip out a page—use these six layout recovery moves to keep every spread balanced and authoritative:
      </p>
      <ul>
        <li><strong>Finished Early With 40% Blank Bottom?</strong> Drop in a high-value <em>Synthesis Strip</em>: a 2-row Dumbbell Chart, a Perforated Cost Receipt, a 3-item <code>□ Next Actions</code> Bento box, or a bottom-right <strong>Architect's Blueprint Title Block</strong>.</li>
        <li><strong>Topic #2 Exploded Past Its Column?</strong> Draw a bold Cyan bridge arrow straight across the center spine onto the facing right-hand page, or drop a circled <code>①</code> jump badge and continue cleanly in an open corner.</li>
        <li><strong>Top-Heavy Page?</strong> Add a bold horizontal <strong>Bottom Summary Banner</strong> (2 dots tall, tinted in Acid Mint or soft Cool Grey) across the bottom margin to physically weight the foot of the sheet.</li>
        <li><strong>Too Many Disconnected Small Boxes?</strong> Group 3–4 scattered small cards inside ONE unifying <strong>outer dashed zone</strong> with a single Architect's Print pill label on its top-left border—instant Gestalt grouping!</li>
        <li><strong>Alignment Drifted Mid-Page?</strong> Pull a fresh crisp full-width <strong>Scissors Cut or Wave Divider</strong> across the page and reset your alignment rails cleanly underneath for the second half of the meeting.</li>
      </ul>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 15: TEXTURE HACKS, BLENDING & VISUAL DEPTH
  // -------------------------------------------------------------------------
  ch15: `
    <div class="prose-wrap">
      <h3>15.3 Five Analog Texture &amp; Depth Tricks (Zero Extra Markers Needed)</h3>
      <p>
        You can dramatically expand the visual richness of your sketches using only the 3 fineliners, Cool Grey, and 2 neon markers already in your pouch:
      </p>
      <ol>
        <li><strong>The "Drop-Line" Floor Horizon:</strong> Draw one crisp hairline <code>01</code> horizontal line <em>behind</em> your isometric objects (stopping cleanly at their outer silhouettes via T-junctions!). Suddenly every object looks grounded inside a real 3D studio space instead of floating on a void.</li>
        <li><strong>Glass &amp; Screen Diagonal Sheen:</strong> On laptops, monitors, or isometric glass vaults, draw two quick parallel 45° diagonal white-gel or <code>01</code> lines across the corner of the pane (<code>//</code>)—universal comic shorthand for reflective glass.</li>
        <li><strong>Dot-Grid Stipple Gradients:</strong> Where a Cool Grey marker wash meets white paper on a curved cylinder, add 8–12 tiny <code>01</code> ink stipple dots tapering off into the white highlight to create a smooth editorial engraving gradient.</li>
        <li><strong>Colored Drop Shadows for Semantic Pop:</strong> Keep normal cards anchored with Cool Grey shadows, but give your ONE single most important Decision or Warning card a hard offset shadow in <strong>Electric Cyan or Hot Magenta</strong>—it immediately leaps off the page as the focal hero.</li>
        <li><strong>Crisp White-Gel Highlights on Colored Badges:</strong> Drop one tiny curved white dot-and-dash glint (<code>•—</code>) inside the top-left curve of every circular icon, pie dot, or status LED to give analog ink a tactile, luminous light-cyberpunk sheen.</li>
      </ol>
    </div>

    <div class="svg-box">
      <svg viewBox="0 0 740 132">
        <text x="370" y="20" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">ANALOG TEXTURE CHEAT-STRIP // 4 ZERO-COST DEPTH TRICKS</text>
        <g transform="translate(20,34)">
          <rect width="164" height="84" rx="6" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          <line x1="8" y1="54" x2="54" y2="54" stroke="#94A3B8" stroke-width="1.4"/><line x1="112" y1="54" x2="156" y2="54" stroke="#94A3B8" stroke-width="1.4"/>
          <rect x="54" y="22" width="58" height="44" rx="4" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
          <text x="82" y="77" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">1. DROP-LINE HORIZON</text>
        </g>
        <g transform="translate(198,34)">
          <rect width="164" height="84" rx="6" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          <rect x="34" y="16" width="96" height="44" rx="5" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="2"/>
          <line x1="48" y1="48" x2="72" y2="24" stroke="#FFF" stroke-width="3.6" stroke-linecap="round"/><line x1="64" y1="48" x2="80" y2="32" stroke="#FFF" stroke-width="2.2" stroke-linecap="round"/>
          <text x="82" y="77" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">2. GLASS SHEEN (//)</text>
        </g>
        <g transform="translate(376,34)">
          <rect width="164" height="84" rx="6" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          <path d="M 42 58 H 130 V 22" fill="none" stroke="#EC4899" stroke-width="7" opacity="0.65"/>
          <rect x="34" y="14" width="90" height="40" rx="5" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
          <text x="82" y="77" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">3. NEON HERO SHADOW</text>
        </g>
        <g transform="translate(554,34)">
          <rect width="164" height="84" rx="6" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          <circle cx="82" cy="36" r="20" fill="#10B981" stroke="#141836" stroke-width="2.2"/>
          <path d="M 70 28 A 14 14 0 0 1 82 22" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round"/><circle cx="68" cy="35" r="2" fill="#FFF"/>
          <text x="82" y="77" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">4. WHITE GEL GLINT</text>
        </g>
      </svg>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 16: COMBINING MULTIPLE DIAGRAMS & MAPS ON ONE MASTER SPREAD
  // -------------------------------------------------------------------------
  ch16: `
    <div class="prose-wrap">
      <h3>16.3 Combining Diagrams Into Multi-View Master Spreads</h3>
      <p>
        The highest level of visual synthesis isn't drawing one giant diagram—it's pairing <strong>two complementary views of the same system side-by-side</strong> on a two-page spread so each view answers a different question:
      </p>
      <ul>
        <li><strong>Architecture + Economics Pairing (AI/Tax):</strong> Left page = <em>4-Lane Swimlane or Isometric Stack</em> (shows HOW data moves &amp; where HITL sits); Right page = <em>Dumbbell Latency/Cost Chart + Toggle Guardrail Panel</em> (shows WHY it wins economically).</li>
        <li><strong>Geography + Logic Pairing (EU VAT):</strong> Left page = <em>Geometric EU Tile-Grid Cartogram</em> (shows WHERE goods &amp; services flow across DE/FR/NL/CH); Right page = <em>Binary Decision Tree</em> (shows WHICH statutory rate &amp; OSS rule fires).</li>
        <li><strong>Structure + Memory Pairing (Deutsch B2):</strong> Left page = <em>Satzklammer Towers or Wechselpräpositionen Decision Tree</em> (shows the mechanical rule); Right page = <em>3-Panel Illustrated Dialogue Scene + Smartphone Chat Mockup</em> (locks real spoken phrasing into episodic memory).</li>
      </ul>
    </div>

    <div class="svg-box">
      <svg viewBox="0 0 740 132">
        <text x="370" y="20" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">ANALOG DIAGRAM ANALOGIES // KEYCHAIN PERMISSIONS + CASCADING DOMINOES</text>
        <!-- Left: Keychain Scope -->
        <g transform="translate(22,30)">
          <rect width="336" height="88" rx="7" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          <circle cx="48" cy="44" r="18" fill="none" stroke="#141836" stroke-width="3.2"/>
          <rect x="68" y="14" width="124" height="17" rx="4" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.6"/><text x="130" y="26" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">READ KEY (LLM ✓)</text>
          <rect x="68" y="36" width="124" height="17" rx="4" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.6"/><text x="130" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#7C3AED">DRAFT KEY (LLM ✓)</text>
          <rect x="68" y="58" width="144" height="17" rx="4" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.6" stroke-dasharray="4 2"/><text x="140" y="70" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">WRITE KEY (HITL 🔒)</text>
          <text x="274" y="48" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#525B7A">Least-Privilege</text>
          <text x="274" y="66" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#525B7A">Visualized!</text>
        </g>
        <!-- Right: Domino Cascade -->
        <g transform="translate(382,30)">
          <rect width="336" height="88" rx="7" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          <line x1="20" y1="68" x2="316" y2="68" stroke="#141836" stroke-width="2"/>
          <rect x="34" y="18" width="18" height="48" rx="3" transform="rotate(20 43 66)" fill="#F59E0B" fill-opacity="0.45" stroke="#141836" stroke-width="1.8"/>
          <rect x="92" y="18" width="18" height="48" rx="3" transform="rotate(14 101 66)" fill="#0EA5E9" fill-opacity="0.35" stroke="#141836" stroke-width="1.8"/>
          <rect x="150" y="18" width="18" height="48" rx="3" transform="rotate(8 159 66)" fill="#EC4899" fill-opacity="0.35" stroke="#141836" stroke-width="1.8"/>
          <rect x="210" y="18" width="18" height="48" rx="3" fill="#10B981" fill-opacity="0.4" stroke="#047857" stroke-width="2"/>
          <text x="280" y="42" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">DOMINO CHAIN</text>
          <text x="280" y="58" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13">1 trigger → 4 effects</text>
        </g>
      </svg>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 17: BUILDING A PERMANENT VISUAL KNOWLEDGE SYSTEM
  // -------------------------------------------------------------------------
  ch17: `
    <div class="prose-wrap">
      <h3>17.3 Naming Conventions, Folder Hygiene &amp; Multimodal AI Workflows</h3>
      <p>
        Once you have 30+ scanned spreads across Tax, AI, and German study, clean digital hygiene turns your sketchbook into a permanent second brain:
      </p>
      <ul>
        <li><strong>Immutable Filename Schema:</strong> Always name scans <code>NB02-P14_2026-11-22_eu-vat-orchestration.png</code>. Sorting alphabetically automatically mirrors your physical shelf order!</li>
        <li><strong>Use Vision LLMs as Your Archivist:</strong> Drop your crisp side-lit phone scan straight into a multimodal LLM with the prompt: <em>"Extract the 5 key takeaways, any action items (□), and any German vocabulary with der/die/das articles into clean Markdown frontmatter referencing NB02-P14."</em> You get full-text search across handwritten notebooks in 5 seconds without manually retyping a single line!</li>
        <li><strong>Two-Way Backlinks:</strong> When a digital wiki note evolves later, jot its wiki slug (e.g., <code>[[eu-vat-oss]]</code>) in the top margin of your paper notebook, and link the PNG scan back to the physical notebook page number.</li>
      </ul>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Creative Audio-to-Anki Graphic // Sketching a German Podcast Inside a Cassette Card</div>
      <div class="svg-box">
        <svg viewBox="0 0 740 132">
          <!-- Cassette Note on Left -->
          <rect x="24" y="16" width="234" height="100" rx="9" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>
          <rect x="36" y="24" width="210" height="32" rx="4" fill="#FFFDF5" stroke="#141836" stroke-width="1.6"/>
          <rect x="36" y="24" width="210" height="9" fill="#0EA5E9" fill-opacity="0.35"/>
          <text x="141" y="48" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="13" fill="#141836">Tagesschau B2 • 15m</text>
          <rect x="74" y="64" width="134" height="28" rx="14" fill="#141836"/>
          <circle cx="102" cy="78" r="9" fill="#FFF" stroke="#0EA5E9" stroke-width="2"/><circle cx="180" cy="78" r="9" fill="#FFF" stroke="#EC4899" stroke-width="2"/>
          <!-- Scan Arrow -->
          <line x1="270" y1="66" x2="360" y2="66" stroke="#10B981" stroke-width="3.2" stroke-dasharray="6 4"/><polygon points="366,66 355,60 355,72" fill="#10B981"/>
          <text x="316" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">SCAN + CROP</text>
          <!-- Anki Card on Right -->
          <rect x="376" y="16" width="340" height="100" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
          <text x="394" y="38" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#7C3AED">ANKI DECK // DEUTSCH B2 AUDIO-SKETCH</text>
          <text x="394" y="64" font-family="Patrick Hand, cursive" font-size="15.5">• <tspan fill="#0EA5E9" font-weight="700">der</tspan> Beschluss (resolution) • <tspan fill="#BE185D" font-weight="700">die</tspan> Reform</text>
          <text x="394" y="88" font-family="Patrick Hand, cursive" font-size="15.5">• [ wurde ] gestern im Bundestag [ verabschiedet ]</text>
          <text x="394" y="106" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">TAG: NB02-P31 • VISUAL RECALL +200%</text>
        </svg>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CH 18: THE DELIBERATE PRACTICE LOOP FOR LIFELONG DRAWING GROWTH
  // -------------------------------------------------------------------------
  ch18: `
    <div class="prose-wrap">
      <h3>18.4 How to Keep Getting Better at Drawing Month After Month</h3>
      <p>
        Finishing this textbook gives you the complete mechanical toolkit; turning it into effortless reflex comes from a lightweight <strong>Deliberate Practice Loop</strong> that fits inside real workdays:
      </p>
      <ol>
        <li><strong>Keep a Dedicated "Ugly Warmup" Page:</strong> Reserve the back 10 pages of every notebook for zero-pressure 2-minute drills—ghosted straight lines, smooth ellipses, 2-over-1-up cubes, and 10-second icons. Separating "warmup ink" from "front spread ink" eliminates blank-page anxiety completely.</li>
        <li><strong>Steal One New Visual Device Per Week:</strong> Open <button class="gloss-term" data-nav="appC" style="border:none; background:none; font:inherit;">Appendix C (The Sketchnote Steal Book)</button> every Monday morning, pick ONE component you've never drawn (e.g., the <em>Berlin U-Bahn Map</em>, <em>Magnifying Zoom Loupe</em>, or <em>Isometric Lego Bricks</em>), and force yourself to use it once during the week.</li>
        <li><strong>Run the 30-Second Autopsy:</strong> Whenever a spread looks unusually great—or unusually clunky—write one tiny pencil note in the bottom margin: <em>"Worked: 4-dot arrow corridors &amp; 05 silhouettes"</em> or <em>"Fix next time: too many accents, drop back to 2."</em> Every notebook becomes your own personal teacher.</li>
        <li><strong>Build Your Personal Swipe Archive:</strong> Screenshot cool layouts, transit maps, editorial charts, and clean UI widgets you spot in the wild into a single folder called <code>visual-swipe-file/</code>. Study <em>why</em> they work (alignment, whitespace, 3-value contrast), then translate them onto your 5mm dot grid!</li>
      </ol>
    </div>
  `
};
