/* =========================================================================
   APPENDIX M: THE CRAFT & PHYSICAL HAND HANDBOOK
   Real Pen Mechanics, Messy-to-Rescued Teardown, Handwriting & Marker Physics
   ========================================================================= */

const MARKER_PALETTES = {
  cyber: {
    name: 'Studio Indigo & Cyan (Default)',
    pens: 'Micron 05 Indigo + Mildliner Cyan + Magenta + Cool Grey',
    bg: '#FAFBFD', ink: '#141836', c1: '#0EA5E9', c2: '#EC4899', c3: '#10B981', grey: '#CBD5E1',
    tip: 'High-contrast modern studio look. Cyan carries structure and flow, Magenta flags the one exception or risk, Mint confirms settled decisions, Cool Grey handles cast shadows.'
  },
  bauhaus: {
    name: 'Bauhaus Editorial',
    pens: 'Micron 05 Black + Cobalt Blue + Vermilion Red + Warm Ochre',
    bg: '#FFFDF7', ink: '#111827', c1: '#2563EB', c2: '#DC2626', c3: '#D97706', grey: '#D1D5DB',
    tip: 'Crisp primary contrast borrowed from Swiss print grids. Works particularly well for product specs, case briefs, and sharp geometric diagrams.'
  },
  matcha: {
    name: 'Matcha & Charcoal',
    pens: 'Dark Charcoal 03 + Sage Matcha + Terracotta + Warm Grey',
    bg: '#FBFBF7', ink: '#1F2937', c1: '#059669', c2: '#D97706', c3: '#0D9488', grey: '#D6D3D1',
    tip: 'Low eye-fatigue palette suited to long accounting, statute reading, or German study sessions under warm desk lighting.'
  },
  blueprint: {
    name: 'Architect Blueprint',
    pens: 'Indigo 05 + Sky Cyan + Deep Navy + Cool Silver',
    bg: '#F8FAFC', ink: '#0F172A', c1: '#0284C7', c2: '#4F46E5', c3: '#0EA5E9', grey: '#CBD5E1',
    tip: 'Two tones inside one hue family. Strips out decorative color so technical flows and isometric cutaways read like industrial shop drawings.'
  },
  parchment: {
    name: 'Legal & Tax Parchment',
    pens: 'Sepia/Indigo 05 + Burgundy + Forest Mint + Amber Gold',
    bg: '#FFFBF2', ink: '#1C1917', c1: '#9F1239', c2: '#047857', c3: '#B45309', grey: '#D6D3D1',
    tip: 'Quiet advisory palette: Burgundy for statutory triggers and liabilities, Forest Mint for exemptions or equity, Amber for period cut-offs and accruals.'
  }
};

function renderPalettePreviewSVG(p) {
  return `<svg viewBox="0 0 680 230">
    <rect x="14" y="12" width="652" height="206" rx="10" fill="${p.bg}" stroke="${p.ink}" stroke-width="2.2"/>
    <!-- Highlighter Under-Glow Header -->
    <rect x="34" y="38" width="246" height="16" rx="3" fill="${p.c1}" fill-opacity="0.26"/>
    <text x="42" y="47" font-family="Playwrite IT Moderna, cursive" font-size="18" fill="${p.ink}">Client Sync Notes</text>
    <text x="644" y="44" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="${p.c2}">PG 14 // Q3 REVIEW</text>
    <line x1="34" y1="62" x2="646" y2="62" stroke="${p.ink}" stroke-width="1.5"/>
    <!-- Left Open Column (No Heavy Box Needed) -->
    <text x="40" y="88" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="${p.c1}">AGREED SCOPE</text>
    <text x="40" y="114" font-family="Patrick Hand, cursive" font-size="15.5" fill="${p.ink}">• Leave 35% of the page untouched</text>
    <text x="40" y="138" font-family="Patrick Hand, cursive" font-size="15.5" fill="${p.ink}">• Ink first, wait 3s, then glaze once</text>
    <text x="40" y="162" font-family="Patrick Hand, cursive" font-size="15.5" fill="${p.ink}">• Box only the 1–2 load-bearing calls</text>
    <rect x="40" y="176" width="118" height="20" rx="4" fill="${p.c3}" fill-opacity="0.28"/>
    <text x="48" y="190" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="${p.ink}">DECIDED // FRI</text>
    <!-- Right Hero Card with Cool Grey Offset Shadow -->
    <rect x="352" y="82" width="294" height="114" rx="8" fill="${p.grey}"/>
    <rect x="346" y="76" width="294" height="114" rx="8" fill="#FFF" stroke="${p.ink}" stroke-width="2.2"/>
    <rect x="346" y="76" width="9" height="114" rx="3" fill="${p.c2}"/>
    <text x="368" y="98" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="${p.c2}">OPEN BLOCKER &amp; SWATCHES</text>
    <text x="368" y="123" font-family="Patrick Hand, cursive" font-size="15" fill="${p.ink}">60% Paper • 30% Ink • 10% Accent</text>
    <!-- 4 Swatch Pills -->
    <rect x="368" y="142" width="54" height="26" rx="5" fill="${p.c1}" fill-opacity="0.35" stroke="${p.ink}" stroke-width="1.5"/>
    <rect x="432" y="142" width="54" height="26" rx="5" fill="${p.c2}" fill-opacity="0.35" stroke="${p.ink}" stroke-width="1.5"/>
    <rect x="496" y="142" width="54" height="26" rx="5" fill="${p.c3}" fill-opacity="0.35" stroke="${p.ink}" stroke-width="1.5"/>
    <rect x="560" y="142" width="54" height="26" rx="5" fill="${p.grey}" stroke="${p.ink}" stroke-width="1.5"/>
  </svg>`;
}

function renderTwoPassRescueSVG() {
  return `<svg viewBox="0 0 720 310">
    <!-- LEFT: PASS 1 MESSY LIVE CALL -->
    <rect x="14" y="14" width="322" height="282" rx="10" fill="#FFFDF7" stroke="#64748B" stroke-width="2" stroke-dasharray="5 3"/>
    <text x="28" y="36" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#64748B">PASS 1 // LIVE CALL (MESSY IS FINE)</text>
    <text x="28" y="64" font-family="Patrick Hand, cursive" font-size="16" fill="#334155">Sync w/ Sarah + Dev — onboarding drop</text>
    <line x1="26" y1="68" x2="210" y2="70" stroke="#94A3B8" stroke-width="1.4"/>
    <text x="32" y="92" font-family="Patrick Hand, cursive" font-size="14.5" fill="#475569">- users quit on API key screen?? 42%</text>
    <!-- Single calm strikethrough (not a black scribble!) -->
    <text x="32" y="114" font-family="Patrick Hand, cursive" font-size="14.5" fill="#94A3B8">- maybe add dark mode first</text>
    <line x1="30" y1="110" x2="214" y2="109" stroke="#64748B" stroke-width="1.6"/>
    <text x="220" y="114" font-family="Patrick Hand, cursive" font-size="13" fill="#BE185D">(nope, later)</text>
    <text x="32" y="138" font-family="Patrick Hand, cursive" font-size="14.5" fill="#475569">- OAuth scope asks for write access too early</text>
    <text x="32" y="160" font-family="Patrick Hand, cursive" font-size="14.5" fill="#475569">- wait: sandbox CSV upload needs no OAuth!</text>
    <!-- Crooked rushed sketch arrow & margin note -->
    <path d="M 38 184 Q 95 176 154 188 T 282 182" fill="none" stroke="#64748B" stroke-width="1.5"/>
    <text x="34" y="212" font-family="Patrick Hand, cursive" font-size="14.5" fill="#475569">Dev: read-only scope = 2 days work</text>
    <text x="34" y="234" font-family="Patrick Hand, cursive" font-size="14.5" fill="#475569">Legal needs sign-off before prod sync</text>
    <text x="34" y="258" font-family="Patrick Hand, cursive" font-size="14.5" fill="#475569">next call Thu 10:00 — bring 3-screen sketch</text>
    <text x="28" y="284" font-family="IBM Plex Mono, monospace" font-size="9" fill="#64748B">Captured in real time. Crooked, fast, zero formatting.</text>

    <!-- MIDDLE TRANSITION ARROW -->
    <g transform="translate(342, 134)">
      <line x1="0" y1="18" x2="28" y2="18" stroke="#0EA5E9" stroke-width="2.6"/>
      <polygon points="24,11 36,18 24,25" fill="#0EA5E9"/>
      <text x="18" y="6" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">5 MIN</text>
    </g>

    <!-- RIGHT: PASS 2 RESCUED SPREAD -->
    <rect x="384" y="14" width="322" height="282" rx="10" fill="#FAFBFD" stroke="#141836" stroke-width="2.4"/>
    <text x="400" y="36" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">PASS 2 // 5-MIN RESCUE (KEEP 30%, CUT 70%)</text>
    <!-- Under-glow title -->
    <rect x="400" y="54" width="218" height="14" rx="3" fill="#0EA5E9" fill-opacity="0.26"/>
    <text x="404" y="64" font-family="Playwrite IT Moderna, cursive" font-size="17" fill="#141836">Onboarding Drop Fix</text>
    <rect x="634" y="47" width="56" height="22" rx="11" fill="#141836"/>
    <text x="662" y="62" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#F472B6">-42%</text>

    <!-- Crisp 2-Step Fix Flow (No Extra Boxes Around Text) -->
    <text x="400" y="96" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">WHY THEY LEAVE → WHAT WE SHIP</text>
    <rect x="404" y="108" width="128" height="44" rx="6" fill="#CBD5E1"/>
    <rect x="400" y="104" width="128" height="44" rx="6" fill="#FFF" stroke="#141836" stroke-width="1.9"/>
    <text x="464" y="124" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">Sample CSV first</text>
    <text x="464" y="140" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#0369A1">(zero OAuth friction)</text>

    <line x1="528" y1="126" x2="554" y2="126" stroke="#141836" stroke-width="2.2"/>
    <polygon points="550,121 560,126 550,131" fill="#141836"/>

    <rect x="564" y="108" width="126" height="44" rx="6" fill="#CBD5E1"/>
    <rect x="560" y="104" width="126" height="44" rx="6" fill="#D1FAE5" stroke="#047857" stroke-width="1.9"/>
    <text x="623" y="124" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">Read-only OAuth</text>
    <text x="623" y="140" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#047857">(2-day dev build)</text>

    <!-- Single Highlighted Blocker -->
    <rect x="400" y="170" width="286" height="46" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.8"/>
    <text x="414" y="189" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">BLOCKER // LEGAL SIGN-OFF</text>
    <text x="414" y="207" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">Needed before prod write-scope goes live.</text>

    <!-- Clean Unboxed Action Spine -->
    <text x="400" y="242" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">NEXT → Thu 10:00: Bring 3-screen CSV flow</text>
    <text x="400" y="262" font-family="Patrick Hand, cursive" font-size="13.5" fill="#64748B">Cut: dark mode tangent, chatty filler, raw guesses.</text>
    <text x="400" y="284" font-family="IBM Plex Mono, monospace" font-size="9" fill="#047857">Same ink. Same hand. Just whitespace + 1 accent.</text>
  </svg>`;
}

export function renderCraftHandbookHTML() {
  return `
    <!-- EDITORIAL OPENING NOTE -->
    <div class="architect-note">
      <div class="architect-note-q">
        Clean sketchbooks are rarely drawn cleanly on the first try. They are the result of five quiet mechanical habits—where your eyes look, how you turn the paper, and what you leave blank.
      </div>
      <div class="architect-note-sub">
        Most people blame their hands when a diagram looks clumsy. In practice, wobbly lines and cramped pages come from staring at the pen tip, locking the notebook flat on the desk, and drawing boxes before writing the words. Fix the mechanics once and your existing handwriting cleans up on its own.
      </div>
    </div>

    <!-- 1. THE 5 PHYSICAL HAND LAWS (REAL PEN MECHANICS) -->
    <section class="section-block">
      <h2>The 5 Physical Hand Laws (Before You Buy Any New Pens)</h2>
      <div class="grid-2">
        <div class="drill-card">
          <span class="pill cyan" style="align-self:flex-start;">Law 01 // Eye Tracking</span>
          <div class="card-h">Destination-Dot Gaze</div>
          <p class="card-p">
            If you watch the nib move across the paper, your hand micro-corrects every 3 millimeters and produces a hairy, nervous wobble. Instead, mark a tiny dot where you want the line to end, lock your eyes on that destination dot, and pull the pen toward it in one steady breath.
          </p>
          <div class="drill-pass">60-SEC TEST: Place 2 dots 10cm apart. Look ONLY at dot #2 and draw. Pass if your line lands within 2mm without wobbling mid-span.</div>
        </div>

        <div class="drill-card">
          <span class="pill violet" style="align-self:flex-start;">Law 02 // Ergonomics</span>
          <div class="card-h">Rotate the Paper, Not Your Wrist</div>
          <p class="card-p">
            Your wrist has one natural arc it draws effortlessly (roughly 30°–45° pulling down and toward your body). Keep your hand in that comfortable zone and spin your notebook 90° whenever you draw vertical edges or long ellipses. Architects never contort their elbows to draw upward lines.
          </p>
          <div class="drill-pass">60-SEC TEST: Draw a 4-sided rectangle by turning the notebook quarter-turn for each side. Notice how all four edges share identical crisp pressure.</div>
        </div>

        <div class="drill-card">
          <span class="pill mint" style="align-self:flex-start;">Law 03 // Muscle Memory</span>
          <div class="card-h">The 2mm Hover Ghost Pass</div>
          <p class="card-p">
            For big circles, isometric diagonals, or curved connector arrows, rehearse the motion twice with the pen hovering 2mm above the paper. On pass three, drop the nib gently onto the page mid-motion without slowing down. Confidence beats slow caution every single time.
          </p>
          <div class="drill-pass">60-SEC TEST: Ghost 5 wide ellipses in the air, dropping the nib on the 3rd loop. Pass if the two ends close within 3mm cleanly.</div>
        </div>

        <div class="drill-card">
          <span class="pill magenta" style="align-self:flex-start;">Law 04 // Recovery</span>
          <div class="card-h">The Mistake Rescue Protocol</div>
          <p class="card-p">
            A furious scribbled-out black blob draws ten times more attention than the mistake it tried to hide. When you overshoot a corner, overshoot all four corners by 2mm—now it is an architectural cross-tick box. When you misspell a word, draw one calm horizontal line through it and keep writing.
          </p>
          <div class="drill-pass">RULE OF THUMB: Never apply more than ONE ink pass to cross out an error. A single neat strikethrough looks deliberate and confident.</div>
        </div>
      </div>

      <div class="studio-aside">
        <strong>Law 05 — Stop boxing everything:</strong> Beginners put a heavy black rectangle around every bullet list on the page. That turns a notebook into a spreadsheet cage. Limit yourself to 2 or 3 drawn containers per A5 page—let a straight left margin and two blank dot rows separate everything else.
      </div>
    </section>

    <!-- 2. HONEST TWO-PASS TEARDOWN: MESSY LIVE CALL -> 5-MIN RESCUE -->
    <section class="section-block">
      <h2>What Real Notebooks Look Like: Pass 1 (Live) → Pass 2 (5-Minute Rescue)</h2>
      <p>
        Nobody produces magazine-neat diagrams while someone is speaking at 150 words a minute on a live call. Keep capture and synthesis strictly separate: scribble ugly in Pass 1 so you can actually listen, then spend five quiet minutes extracting the 30% that still matters.
      </p>
      <div class="svg-box">${renderTwoPassRescueSVG()}</div>
    </section>

    <!-- 3. 8 QUIET LAYOUT HABITS THAT CLEAN UP ANY PAGE -->
    <section class="section-block">
      <h2>8 Quiet Page Habits That Do Most of the Visual Work</h2>
      <div class="grid-2">
        <div class="card">
          <div class="card-h">1. One-Stroke Cool-Grey Cast Shadow</div>
          <p class="card-p">Pull a single chisel-tip stroke of light Cool Grey marker along the <strong>right and bottom</strong> outside edge of your hero card. Keep the stroke touching the ink line with no gap. Flat shapes lift off the page without needing artistic shading.</p>
        </div>
        <div class="card">
          <div class="card-h">2. Highlighter-First Under-Glow Header</div>
          <p class="card-p">Lay down a single horizontal pastel stripe across one dot row <em>before</em> lettering your title, then sit your dark ink letters slightly above the stripe's bottom edge. It anchors the top of the page in two seconds.</p>
        </div>
        <div class="card">
          <div class="card-h">3. Write the Words First, Draw the Box Second</div>
          <p class="card-p">Drawing a box before writing guarantees cramped words tumbling past the right wall. Write your three lines on the dot grid first, leave one empty dot row (5mm) of air on every side, and trace the border last.</p>
        </div>
        <div class="card">
          <div class="card-h">4. The Hanging Left Margin ("Icon Rail")</div>
          <p class="card-p">Reserve the leftmost three dot columns strictly for tiny markers (<code>§</code>, <code>?</code>, <code>→</code>, <code>*</code>). Starting every paragraph on column 4 builds a sharp invisible spine down the whole page.</p>
        </div>
        <div class="card">
          <div class="card-h">5. Two-Style Pairing (All-Caps + Natural Print)</div>
          <p class="card-p">Letter section labels in slightly spaced <code>ALL-CAPS ARCHITECT PRINT</code> and write body notes in your regular lowercase hand. You get clean editorial contrast without learning calligraphy.</p>
        </div>
        <div class="card">
          <div class="card-h">6. Clipped Chamfer Corners</div>
          <p class="card-p">Snip two opposite corners of a callout box at 45° instead of drawing plain right angles. It takes half a second and visually distinguishes key decisions from regular notes.</p>
        </div>
        <div class="card">
          <div class="card-h">7. One Dot of Internal Breathing Room</div>
          <p class="card-p">Never let letters graze a container border. Keep at least 5mm (one dot cell) of empty white paper inside every box and 10mm (two cells) between neighboring blocks.</p>
        </div>
        <div class="card">
          <div class="card-h">8. White Gel Pen for Quiet Fixes &amp; Highlights</div>
          <p class="card-p">A <code>Sakura Gelly Roll 08 White</code> adds one crisp specular slash on glass icons or dark header pills—and doubles as clean correction fluid when an ink line strays over a dot.</p>
        </div>
      </div>
    </section>

    <!-- 4. 6 MECHANICAL LEVERS FOR NEATER HANDWRITING -->
    <section class="section-block">
      <h2>6 Mechanical Levers for Legible Handwriting</h2>
      <p>
        Messy handwriting usually comes down to three fixable habits: drifting letter heights, inconsistent slant, and rounded-off corners. Pick just one lever below and practice it for a single page.
      </p>
      <div class="grid-3">
        <div class="card tinted">
          <span class="pill cyan" style="align-self:flex-start;">Lever 01</span>
          <div class="card-h">Lock x-Height to ½ Dot Cell</div>
          <p class="card-p">Keep lowercase bodies (<code>a c e m n o r s u</code>) consistently half a dot-grid cell tall rather than drifting up and down the baseline.</p>
        </div>
        <div class="card tinted">
          <span class="pill violet" style="align-self:flex-start;">Lever 02</span>
          <div class="card-h">Pick One Slant (90° Vertical)</div>
          <p class="card-p">Mixed angles make words look chaotic. Pull tall stems (<code>l t d h b</code>) straight down parallel to the printed dot columns.</p>
        </div>
        <div class="card tinted">
          <span class="pill magenta" style="align-self:flex-start;">Lever 03</span>
          <div class="card-h">Full Stop at Sharp Corners</div>
          <p class="card-p">Pause for a fraction of a second at the corners of <code>E F L H M N</code> so letters stay crisp instead of melting into soft waves.</p>
        </div>
        <div class="card tinted">
          <span class="pill mint" style="align-self:flex-start;">Lever 04</span>
          <div class="card-h">Close Oval Loops Cleanly</div>
          <p class="card-p">Finish closing <code>a d g o p q</code>. Leaving loops half-open makes otherwise neat notes look rushed and hard to skim later.</p>
        </div>
        <div class="card tinted">
          <span class="pill amber" style="align-self:flex-start;">Lever 05</span>
          <div class="card-h">Consistent Word Gaps &amp; Slashed Ø</div>
          <p class="card-p">Leave the width of one lowercase <code>o</code> between words, and slash zeros (<code>Ø</code>) and cross sevens (<code>7</code>) on every tax or ledger sheet.</p>
        </div>
        <div class="card tinted">
          <span class="pill cyan" style="align-self:flex-start;">Lever 06</span>
          <div class="card-h">Slow Down on the First 3 Words</div>
          <p class="card-p">Write the opening three words of each new heading 15% slower than normal. Your hand tends to hold that steadier cadence down the rest of the column.</p>
        </div>
      </div>
    </section>

    <!-- 5. MARKER PHYSICS + 5-PALETTE SIMULATOR -->
    <section class="lab magenta-accent" id="craft-marker-lab">
      <div class="lab-head">
        <span class="lab-title">Marker Physics &amp; Restraint // 5 Tested Notebook Palettes</span>
        <span class="pill magenta">60% Paper • 30% Ink • 10% Accent</span>
      </div>
      <div class="lab-body">
        <div class="grid-3">
          <div class="card">
            <div class="card-h">Waterproof Pigment Ink First</div>
            <p class="card-p">Draw linework with archival pigment ink (Sakura Micron or Uni Pin), count to <strong>three</strong>, then glaze water-based Mildliners over top so dark lines stay clean without bleeding grey streaks.</p>
          </div>
          <div class="card">
            <div class="card-h">1-Pass vs. 2-Pass Edge Shade</div>
            <p class="card-p">One stroke of Mildliner gives a flat pastel wash. Wait ten seconds and pull a second pass along just one shadowed edge for subtle depth using the exact same pen.</p>
          </div>
          <div class="card">
            <div class="card-h">Color Restraint Rule</div>
            <p class="card-p">Carry one neutral Cool Grey marker plus at most <strong>two</strong> accent colors in your daily pouch. When every color has a fixed job, you never waste time deciding which pen to grab.</p>
          </div>
        </div>

        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          <button class="seg-btn pal-btn active" data-p="cyber">Studio Indigo</button>
          <button class="seg-btn pal-btn" data-p="bauhaus">Bauhaus Editorial</button>
          <button class="seg-btn pal-btn" data-p="matcha">Matcha Calm</button>
          <button class="seg-btn pal-btn" data-p="blueprint">Architect Blueprint</button>
          <button class="seg-btn pal-btn" data-p="parchment">Legal &amp; Tax Parchment</button>
        </div>

        <div class="card tinted" style="border-color:var(--magenta);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <span id="pal-name" class="card-h" style="font-size:17px;"></span>
            <span id="pal-pens" class="mono" style="font-size:10.5px; font-weight:700; color:var(--violet);"></span>
          </div>
          <div id="pal-svg" class="svg-box"></div>
          <p id="pal-tip" class="card-p" style="font-size:14px; color:var(--ink-body);"></p>
        </div>
      </div>
    </section>

    <!-- 6. DOMAIN-SPECIFIC NOTEBOOK RECIPES -->
    <section class="section-block">
      <h2>Field Recipes by Subject: Law, Tax, Product &amp; Languages</h2>
      <div class="grid-2">
        <div class="card" style="border-top:5px solid var(--violet);">
          <span class="pill violet" style="align-self:flex-start;">Law &amp; Contracts // IRAC Bento</span>
          <div class="card-h">4-Quadrant Case Brief Spread</div>
          <p class="card-p">Avoid copying court rulings as dense prose. Split one A5 page into four quiet zones: <strong>[I] Issue</strong> (1-line question), <strong>[R] Rule</strong> (§ citation + numbered elements), <strong>[A] Application</strong> (facts mapped against elements with ✓/✕), and <strong>[C] Holding</strong> (short verdict box). Hang the case name in the left margin.</p>
        </div>
        <div class="card" style="border-top:5px solid var(--cyan);">
          <span class="pill cyan" style="align-self:flex-start;">Accounting &amp; Tax // Tabular + T-Flow</span>
          <div class="card-h">Right-Aligned Columns &amp; Worked Bridge</div>
          <p class="card-p">Align every currency digit right-to-left along dot columns, keep <strong>DR/SOLL left</strong> and <strong>CR/HABEN right</strong>, and pair every statutory rule with a 3-line €1,000 worked example directly underneath (see full layouts in Appendix F).</p>
        </div>
        <div class="card" style="border-top:5px solid var(--mint);">
          <span class="pill mint" style="align-self:flex-start;">Product &amp; UX // Thumbnail Wireframes</span>
          <div class="card-h">Small Screens, Explicit Edge States</div>
          <p class="card-p">Draw screens small (6×8 dots) so you cannot waste time styling icons. Ink only structural blocks plus one colored primary CTA per screen, link clicks with short arrows, and tuck failure states (empty, timeout, permission error) into right-margin callouts.</p>
        </div>
        <div class="card" style="border-top:5px solid var(--amber);">
          <span class="pill amber" style="align-self:flex-start;">Languages // Gender-Color + Fold Rail</span>
          <div class="card-h">Active-Recall Split Column</div>
          <p class="card-p">Tag noun borders by gender (Cyan <em>der</em>, Magenta <em>die</em>, Mint <em>das</em>), record full natural phrases instead of isolated dictionary words, add a 5-second doodle, and leave a vertical crease rail for fold-over self-testing.</p>
        </div>
      </div>
    </section>
  `;
}

export function initCraftHandbookLab() {
  const lab = document.getElementById('craft-marker-lab');
  if (!lab) return;

  let active = 'cyber';
  const render = () => {
    const p = MARKER_PALETTES[active] || MARKER_PALETTES.cyber;
    document.getElementById('pal-name').textContent = p.name;
    document.getElementById('pal-pens').textContent = p.pens;
    document.getElementById('pal-svg').innerHTML = renderPalettePreviewSVG(p);
    document.getElementById('pal-tip').textContent = p.tip;
  };
  lab.querySelectorAll('.pal-btn').forEach(b => b.addEventListener('click', () => {
    active = b.dataset.p;
    lab.querySelectorAll('.pal-btn').forEach(x => x.classList.toggle('active', x === b));
    render();
  }));
  render();
}
