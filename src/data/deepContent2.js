/* =========================================================================
   DEEP TEXTBOOK CONTENT & WORKED DOMAIN EXAMPLES: CHAPTERS 7–12
   ========================================================================= */
export const DEEP_CONTENT_2 = {
  // -------------------------------------------------------------------------
  // CHAPTER 7 DEEP DIVE & WORKED EXAMPLES
  // -------------------------------------------------------------------------
  ch7: `
    <div class="prose-wrap">
      <h3>7.3 The Complete 6-Connector Visual Grammar</h3>
      <p>
        Boxes hold nouns; <strong>arrows hold verbs</strong>. When every connector on a page is the exact same thin black line, the reader cannot tell the difference between a live data flow, an optional async webhook, a blocked security boundary, or a German grammar cross-reference. Standardize on these six crisp arrow dialects:
      </p>
    </div>

    <div class="svg-box">
      <svg viewBox="0 0 760 175">
        <g font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">
          <!-- 1 Solid -->
          <line x1="28" y1="36" x2="178" y2="36" stroke="#141836" stroke-width="2.8"/><polygon points="182,36 172,30 172,42" fill="#141836"/>
          <text x="28" y="20" fill="#141836">1. PRIMARY SYNC FLOW</text><text x="28" y="56" font-family="Patrick Hand, cursive" font-size="13.5" font-weight="400" fill="#525B7A">Direct execution path</text>
          <!-- 2 Dashed -->
          <line x1="274" y1="36" x2="424" y2="36" stroke="#0EA5E9" stroke-width="2.4" stroke-dasharray="6 4"/><polygon points="428,36 418,30 418,42" fill="#0EA5E9"/>
          <text x="274" y="20" fill="#0EA5E9">2. ASYNC / MCP / API</text><text x="274" y="56" font-family="Patrick Hand, cursive" font-size="13.5" font-weight="400" fill="#525B7A">Read lookup or webhook</text>
          <!-- 3 Blocked -->
          <line x1="520" y1="36" x2="670" y2="36" stroke="#EC4899" stroke-width="2.4"/><path d="M 588 26 L 604 46 M 604 26 L 588 46" stroke="#BE185D" stroke-width="3"/>
          <text x="520" y="20" fill="#BE185D">3. BLOCKED / FIREWALL</text><text x="520" y="56" font-family="Patrick Hand, cursive" font-size="13.5" font-weight="400" fill="#525B7A">Forbidden write path</text>
          <!-- 4 Bi-Directional -->
          <line x1="34" y1="122" x2="174" y2="122" stroke="#10B981" stroke-width="2.6"/><polygon points="28,122 38,116 38,128" fill="#10B981"/><polygon points="180,122 170,116 170,128" fill="#10B981"/>
          <text x="28" y="104" fill="#047857">4. BI-DIRECTIONAL SYNC</text><text x="28" y="144" font-family="Patrick Hand, cursive" font-size="13.5" font-weight="400" fill="#525B7A">Two-way state exchange</text>
          <!-- 5 Fork -->
          <path d="M 274 122 H 336 M 336 104 V 140 M 336 104 H 416 M 336 140 H 416" fill="none" stroke="#141836" stroke-width="2.2"/><polygon points="420,104 411,99 411,109" fill="#10B981"/><polygon points="420,140 411,135 411,145" fill="#EC4899"/>
          <text x="274" y="96" fill="#141836">5. ORTHOGONAL FORK</text><text x="274" y="158" font-family="Patrick Hand, cursive" font-size="13.5" font-weight="400" fill="#525B7A">Clean 90° bus split</text>
          <!-- 6 Feedback -->
          <path d="M 526 128 Q 596 94 666 128" fill="none" stroke="#7C3AED" stroke-width="2.4" stroke-dasharray="5 3"/><polygon points="522,130 533,128 529,119" fill="#7C3AED"/>
          <text x="520" y="100" fill="#7C3AED">6. RETRY / ROLLBACK ARC</text><text x="520" y="148" font-family="Patrick Hand, cursive" font-size="13.5" font-weight="400" fill="#525B7A">HITL rejection loop</text>
        </g>
      </svg>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Worked Example // Untangling a Spaghetti Diagram in 3 Moves</div>
      <p style="font-size:15px;">
        Whenever you realize a rough architecture sketch has arrows crossing like shoelaces, apply three mechanical refactors during Pass 2:
      </p>
      <ol style="padding-left:22px; display:flex; flex-direction:column; gap:7px; font-size:15px;">
        <li><strong>Move 1 — Use a Single Orthogonal Bus:</strong> Instead of drawing 4 separate diagonal lines from Triage to 4 tools, pull ONE clean horizontal spine and drop 4 perpendicular 90° branches.</li>
        <li><strong>Move 2 — Swap Adjacent Nodes:</strong> If Box A connects to Box D and Box B connects to Box C, simply swap C and D on your redraw—80% of arrow crossings vanish instantly.</li>
        <li><strong>Move 3 — Use Teleport Badges <code>(A) → (A)</code>:</strong> If a distant audit logger must receive arrows from 5 different boxes across the spread, draw a tiny circled <code>(LOG)</code> exit stub beside each box instead of dragging 5 long lines over your text.</li>
      </ol>
    </div>

    <div class="prose-wrap">
      <h3>7.4 Eight Speech-Bubble Archetypes &amp; Steal-Worthy Section Dividers</h3>
      <p>
        The shape of a callout bubble encodes <em>tone and source</em> instantaneously—whether quoting a client's objection, an AI model's output, a quiet German pronunciation tip, or a sudden statutory warning:
      </p>
    </div>
    <div class="svg-box">
      <svg viewBox="0 0 760 192">
        <!-- Row 1: 4 Speech Bubbles -->
        <g transform="translate(18,12)">
          <path d="M 8 8 H 164 V 54 H 52 L 28 70 L 34 54 H 8 Z" fill="#FFF" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>
          <text x="86" y="35" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" font-weight="700">1. Standard Quote</text>
        </g>
        <g transform="translate(204,12)">
          <polygon points="86,4 106,16 144,6 138,24 168,32 142,46 154,66 116,56 90,68 72,56 32,64 40,46 12,32 42,22 32,6 68,16" fill="#FCE7F3" stroke="#EC4899" stroke-width="2" stroke-linejoin="round"/>
          <text x="90" y="39" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">2. URGENT ALERT!</text>
        </g>
        <g transform="translate(390,12)">
          <path d="M 24 52 A 16 14 0 0 1 20 24 A 22 18 0 0 1 60 14 A 24 18 0 0 1 114 16 A 18 16 0 0 1 148 28 A 14 14 0 0 1 144 52 Z" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2"/>
          <circle cx="42" cy="62" r="4.5" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.6"/><circle cx="30" cy="70" r="2.8" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.4"/>
          <text x="86" y="37" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#7C3AED">3. Thought / Idea</text>
        </g>
        <g transform="translate(576,12)">
          <polygon points="16,8 156,8 164,16 164,46 156,54 50,54 32,68 36,54 16,54 8,46 8,16" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/>
          <text x="86" y="35" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">4. AI BOT OUTPUT</text>
        </g>
        <!-- Row 2: 4 Dividers & Margin Micro-Graphics -->
        <g transform="translate(22,114)" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#525B7A">
          <text x="0" y="14">5. DOTTED WHISPER / FOOTNOTE</text>
          <rect x="0" y="22" width="164" height="36" rx="8" fill="#FAFBFD" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="4 3"/><text x="82" y="44" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" font-weight="400">Quiet aside / tip…</text>

          <text x="190" y="14">6. SCISSORS SECTION CUT</text>
          <line x1="190" y1="42" x2="356" y2="42" stroke="#141836" stroke-width="1.8" stroke-dasharray="6 4"/><text x="190" y="37" font-size="14">✂</text>

          <text x="380" y="14">7. WAVE / ZIGZAG BREAK</text>
          <path d="M 380 42 Q 394 30 408 42 T 436 42 T 464 42 T 492 42 T 520 42 T 548 42" fill="none" stroke="#0EA5E9" stroke-width="2.6"/>

          <text x="572" y="14">8. 5-DOT SKILL / RATING BAR</text>
          <g transform="translate(572,32)">
            <circle cx="10" cy="10" r="8" fill="#10B981" stroke="#141836" stroke-width="1.6"/>
            <circle cx="34" cy="10" r="8" fill="#10B981" stroke="#141836" stroke-width="1.6"/>
            <circle cx="58" cy="10" r="8" fill="#10B981" stroke="#141836" stroke-width="1.6"/>
            <circle cx="82" cy="10" r="8" fill="#10B981" stroke="#141836" stroke-width="1.6"/>
            <circle cx="106" cy="10" r="8" fill="#FFF" stroke="#141836" stroke-width="1.6"/>
            <text x="124" y="14" font-size="10" fill="#047857">4/5</text>
          </g>
        </g>
      </svg>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 8 DEEP DIVE & WORKED EXAMPLES
  // -------------------------------------------------------------------------
  ch8: `
    <div class="prose-wrap">
      <h3>8.2 The 5-Second Analog Chart Picker</h3>
      <p>
        Never hesitate over which chart fits your data during a meeting or study session. Match your exact analytical question to one of six dot-grid champions:
      </p>
    </div>

    <div class="table-wrap">
      <table class="t">
        <thead><tr><th>Analytical Question</th><th>Best Analog Chart</th><th>Exact Dot-Grid Setup</th><th>Domain Example</th></tr></thead>
        <tbody>
          <tr><td>"How much did X drop or grow?"</td><td><strong>Diverging Dumbbell</strong></td><td>20 dots wide; open ○ Before, solid ● After</td><td>AI Latency (42s → 1.2s) or Cost (€0.88 → €0.04)</td></tr>
          <tr><td>"What % share belongs to each bucket?"</td><td><strong>Dot-Matrix (5×2 or 10×2)</strong></td><td>1 circle = 10% or 5%; zero pie-wedge math</td><td>80% Routine VAT / 20% Complex Statutory</td></tr>
          <tr><td>"How did 4 metrics shift Q1 → Q4?"</td><td><strong>Slopegraph</strong></td><td>2 vertical 10-dot axes spaced 12 dots apart</td><td>German B2 weekly minutes (Week 1 vs. Week 8)</td></tr>
          <tr><td>"How did we perform vs. target?"</td><td><strong>Bullet Graph</strong></td><td>1-dot-tall grey band + 05 bar + Magenta tick</td><td>Audit QA Accuracy (98% vs. 95% Target)</td></tr>
          <tr><td>"How does total intake split?"</td><td><strong>Hand-Drawn Sankey</strong></td><td>10-dot vertical intake bar → curved ribbons</td><td>100 Client Tickets → 75 Auto / 20 Draft / 5 Escalate</td></tr>
          <tr><td>"Which items are high-risk / high-impact?"</td><td><strong>2×2 Quadrant Matrix</strong></td><td>12×12 crosshair + hatched top-right zone</td><td>Tax Exposure vs. Automation Feasibility</td></tr>
        </tbody>
      </table>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Worked Case Studies // 3 Hand-Plotted Dot-Math Recipes</div>
      <div class="grid-3">
        <div class="card">
          <span class="pill cyan" style="align-self:flex-start;">Case 1: AI Benchmark</span>
          <div class="card-h">Dumbbell: Token Cost Savings</div>
          <p class="card-p"><strong>Scale:</strong> <code>1 dot = €0.05</code> (20 dots = €1.00).<br/><strong>Row 1 (Deadline):</strong> ○ at 17.6 dots (€0.88) → ● at 0.4 dots (€0.02). Draw a crisp 17-dot Mint bridge bar.<br/><strong>Punchline:</strong> Visual gap sells the multi-agent architecture faster than any spreadsheet.</p>
        </div>
        <div class="card">
          <span class="pill magenta" style="align-self:flex-start;">Case 2: EU VAT Audit</span>
          <div class="card-h">20-Dot Matrix: Invoice Health</div>
          <p class="card-p"><strong>Scale:</strong> 20 circles (<code>1 circle = 5%</code>).<br/>Color <strong>16 Mint</strong> (80% valid VIES), <strong>3 Amber</strong> (15% missing VAT ID), and <strong>1 Magenta</strong> (5% wrong OSS rate).<br/><strong>Punchline:</strong> One glance tells the partner exactly where audit remediation starts.</p>
        </div>
        <div class="card">
          <span class="pill amber" style="align-self:flex-start;">Case 3: Deutsch B2</span>
          <div class="card-h">Slopegraph: 8-Week Fluency</div>
          <p class="card-p"><strong>Scale:</strong> Left axis = Wk 1, Right axis = Wk 8 (<code>1 dot = 10%</code> mock exam score).<br/>Plot <em>Lesen (55→82%)</em>, <em>Hören (48→79%)</em>, <em>Schreiben (40→74%)</em> in Mint upward slopes.<br/><strong>Punchline:</strong> Steep upward lines build unstoppable language momentum.</p>
        </div>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 9 DEEP DIVE & WORKED EXAMPLES
  // -------------------------------------------------------------------------
  ch9: `
    <div class="prose-wrap">
      <h3>9.2 Vertical Milestone Ladders vs. Horizontal Gantt Bars</h3>
      <p>
        A standard portrait A5 notebook is only 23 usable dots wide, which can feel tight for a 12-month horizontal Gantt chart. Know when to rotate your geometry:
      </p>
      <ul>
        <li><strong>Use Horizontal Gantt Bars</strong> when comparing <strong>3–5 parallel workstreams</strong> over a single quarter (or rotate your notebook 90° to <strong>Landscape 38×27</strong>!).</li>
        <li><strong>Use a Vertical Milestone Ladder</strong> when mapping a <strong>12-month chronological sequence</strong> (like annual German tax deadlines or a 1-year B1→C1 German roadmap): pull one bold <code>05</code> vertical spine down dot column 8, place dates on the left, and branch crisp horizontal flags to the right.</li>
      </ul>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Worked Example 1 // Annual German Tax Compliance Ladder (Portrait A5)</div>
      <div class="svg-box">
        <svg viewBox="0 0 740 165">
          <line x1="118" y1="18" x2="118" y2="148" stroke="#141836" stroke-width="3"/>
          ${[
            [32, '#0EA5E9', '1Ø. MONTHLY', 'UStVA (Umsatzsteuervoranmeldung) — Monthly VAT Return (or +1mo Dauerfristverlängerung)'],
            [68, '#7C3AED', '25. MONTHLY', 'ZM (Zusammenfassende Meldung) — EU Intra-Community B2B Sales Recap Statement'],
            [104, '#EC4899', 'END OF Q+1', 'EU OSS Return (One-Stop-Shop) — Cross-Border B2C VAT (Apr 30 / Jul 31 / Oct 31 / Jan 31)'],
            [140, '#10B981', 'JUL 31 / FEB', 'Jahresabschluss & Steuererklärung — Annual Filing (Extended deadline w/ Steuerberater)']
          ].map(([y, col, dt, txt]) => `
            <polygon points="118,${y-8} 126,${y} 118,${y+8} 110,${y}" fill="${col}" stroke="#141836" stroke-width="1.8"/>
            <text x="100" y="${y+4}" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="${col}">${dt}</text>
            <line x1="126" y1="${y}" x2="152" y2="${y}" stroke="#141836" stroke-width="1.6"/>
            <text x="160" y="${y+4}" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">${txt}</text>`).join('')}
        </svg>
      </div>
    </div>

    <div class="deutsch-box">
      <div class="callout-label" style="color:var(--amber-deep);">Worked Example 2 // Cage-Free German Conjunction Word-Order Table</div>
      <div class="table-wrap">
        <table class="t">
          <thead><tr><th>Connector Class</th><th>Key Conjunctions</th><th>Verb Position Rule</th><th>Color-Coded Tax / Work Example</th></tr></thead>
          <tbody>
            <tr><td><strong>Position 0 (ADUSO)</strong></td><td class="mono">aber, denn, und, sondern, oder</td><td><span class="pill cyan">V2 stays Pos 2</span></td><td>Wir nutzen Flash, <strong>denn</strong> es <u>spart</u> 97% Kosten.</td></tr>
            <tr><td><strong>Inversion Adverbs</strong></td><td class="mono">deshalb, trotzdem, dann, danach</td><td><span class="pill amber">Verb comes right after</span></td><td>Umsatz &gt; €10k; <strong>deshalb</strong> <u>melden</u> wir OSS an.</td></tr>
            <tr><td><strong>Nebensatz (Subord.)</strong></td><td class="mono">weil, dass, obwohl, wenn, damit</td><td><span class="pill magenta">Verb kicks to END</span></td><td>Wir warten, <strong>weil</strong> der Partner den Entwurf <u>prüft</u>.</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Steal-Worthy Roadmap Graphic // The Berlin U-Bahn Multi-Track Transit Map</div>
      <p style="font-size:14.8px;">
        One of the coolest visual tricks stolen from master notebooks is turning parallel workstreams into a <strong>Subway / U-Bahn Transit Map</strong>: each colored line is a track (<code>U1: AI Agents</code>, <code>U2: EU Tax Compliance</code>, <code>U3: Deutsch B2</code>), white circles are milestones, and pill-shaped <strong>Transfer Stations</strong> show where two tracks converge!
      </p>
      <div class="svg-box">
        <svg viewBox="0 0 740 165">
          <!-- 3 Bold Subway Lines -->
          <polyline points="42,38 250,38 292,80 486,80 530,38 696,38" fill="none" stroke="#0EA5E9" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="42,84 292,84 486,84 696,84" fill="none" stroke="#EC4899" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="42,130 444,130 486,88 696,130" fill="none" stroke="#10B981" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          <!-- Line Badges -->
          <rect x="18" y="26" width="36" height="24" rx="5" fill="#0EA5E9"/><text x="36" y="42" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">U1</text>
          <rect x="18" y="72" width="36" height="24" rx="5" fill="#EC4899"/><text x="36" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">U2</text>
          <rect x="18" y="118" width="36" height="24" rx="5" fill="#10B981"/><text x="36" y="134" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">U3</text>
          <!-- Stations -->
          <circle cx="150" cy="38" r="7" fill="#FFF" stroke="#141836" stroke-width="2.2"/><text x="150" y="22" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">FLASH TRIAGE</text>
          <circle cx="150" cy="84" r="7" fill="#FFF" stroke="#141836" stroke-width="2.2"/><text x="150" y="69" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">VIES CHECK</text>
          <circle cx="196" cy="130" r="7" fill="#FFF" stroke="#141836" stroke-width="2.2"/><text x="196" y="152" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">DER/DIE/DAS</text>
          <!-- Transfer Hub 1 -->
          <rect x="274" y="68" width="36" height="28" rx="14" fill="#FFF" stroke="#141836" stroke-width="3"/><text x="292" y="56" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">HITL HUB</text>
          <!-- Transfer Hub 2 -->
          <rect x="468" y="68" width="36" height="32" rx="16" fill="#FFFDF5" stroke="#141836" stroke-width="3"/><text x="486" y="56" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">TAXWIKI SYNC</text>
          <!-- End Terminals -->
          <circle cx="672" cy="38" r="8" fill="#0EA5E9" stroke="#141836" stroke-width="2.2"/><text x="672" y="22" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">AGENT v2</text>
          <circle cx="672" cy="84" r="8" fill="#EC4899" stroke="#141836" stroke-width="2.2"/><text x="672" y="69" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">OSS LIVE</text>
          <circle cx="672" cy="130" r="8" fill="#10B981" stroke="#141836" stroke-width="2.2"/><text x="672" y="152" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">B2 FLUENT</text>
        </svg>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 10 DEEP DIVE & WORKED EXAMPLES
  // -------------------------------------------------------------------------
  ch10: `
    <div class="prose-wrap">
      <h3>10.2 Choosing Isometric vs. 1-Point vs. 2-Point Perspective</h3>
      <p>
        Non-artists often waste hours trying to force vanishing points onto technical notebook diagrams where perspective actually hurts clarity. Match your projection system cleanly to your goal:
      </p>
      <ul>
        <li><strong>2-Over, 1-Up Isometric (90% of Notebook Diagrams):</strong> Zero vanishing-point distortion, identical scale from front to back, and snaps directly onto 5mm dots. Ideal for <strong>AI server stacks, layered MCP architectures, exploded hardware, and stacked tax binders</strong>.</li>
        <li><strong>1-Point Perspective:</strong> Best when looking straight down a room, corridor, or open desk toward one focal wall (great for quick conference-room storyboards).</li>
        <li><strong>2-Point Perspective:</strong> Best for dramatic hero illustrations of a building corner, product box, or standalone desk when you want depth and energy—just remember to push both Vanishing Points wide off the edges of your page so corners don't pinch awkwardly.</li>
      </ul>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Worked Object Library // 6 Everyday Workspace Objects as Primitives</div>
      <div class="grid-3">
        <div class="card tinted"><div class="card-h">1. Coffee Mug</div><p class="card-p"><strong>1 Vertical Cylinder</strong> (bottom curve rounder than top) + thick C-ribbon handle + cast ellipse shadow.</p></div>
        <div class="card tinted"><div class="card-h">2. Laptop / Copilot UI</div><p class="card-p"><strong>2 Hinged Thin Cubes</strong> (base sits flat on 2-over-1-up plane; screen tilts slightly back at 100°).</p></div>
        <div class="card tinted"><div class="card-h">3. AI Server / GPU Node</div><p class="card-p"><strong>1 Tall Isometric Box</strong> + 3 parallel ventilation slots (01 nib) + Cyan/Mint/Magenta LED dots.</p></div>
        <div class="card tinted"><div class="card-h">4. German Aktenordner</div><p class="card-p"><strong>1 Narrow Vertical Slab</strong> + white spine label rectangle + circular finger-hole at lower third.</p></div>
        <div class="card tinted"><div class="card-h">5. Cloud Database</div><p class="card-p"><strong>3 Stacked Short Cylinders</strong> separated by hairline horizontal platter curves + vertical light glint.</p></div>
        <div class="card tinted"><div class="card-h">6. Studio Desk Lamp</div><p class="card-p"><strong>1 Flat Cylinder Base</strong> + 2 hinged straight arms + <strong>1 Cone Shade</strong> emitting an Amber wash beam.</p></div>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 11 DEEP DIVE & WORKED EXAMPLES
  // -------------------------------------------------------------------------
  ch11: `
    <div class="prose-wrap">
      <h3>11.3 Value Simplification (The 3-Value Squint) &amp; Cross-Contour Hatching</h3>
      <p>
        Beginners often over-shade curved surfaces until the entire drawing turns muddy mid-grey. Simplify every lit form down to just <strong>3 clean tonal buckets</strong>:
      </p>
      <ul>
        <li><strong>Value 1 — Paper White (0% ink):</strong> Every plane facing your 10 o'clock sun stays completely untouched. White paper is your brightest highlight!</li>
        <li><strong>Value 2 — Light Midtone (~30%):</strong> Planes perpendicular to the light get 1 smooth pass of Cool Grey (or spaced parallel 01 hatching).</li>
        <li><strong>Value 3 — Deep Shadow + AO (~75–100%):</strong> Planes turning away from light get 2 passes of Cool Grey, anchored at the base by a pitch-dark <code>05</code> Ambient Occlusion crease.</li>
      </ul>
      <p>
        <strong>Cross-Contour Hatching Rule:</strong> When shading a round cylinder or mug with a <code>01</code> fineliner, curve your short hatching ticks slightly to hug the round belly of the cylinder—never draw stiff straight ruler stripes across a curved surface.
      </p>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Worked Step-by-Step // Shading a 3-Tier Exploded Isometric AI Stack</div>
      <ol style="padding-left:22px; display:flex; flex-direction:column; gap:7px; font-size:15px;">
        <li><strong>Step 1 (03 Structure):</strong> Draw 3 identical 2-over-1-up diamond slabs spaced 4 dots apart vertically (Cognitive Plane → HITL Firewall → MCP Plane).</li>
        <li><strong>Step 2 (05 Silhouette):</strong> Trace ONLY the outer perimeter of each slab with your bold <code>05</code> nib; keep internal front-top diamond edges thin (<code>01/03</code>).</li>
        <li><strong>Step 3 (1x Cool Grey Midtone):</strong> Sweep 1 clean pass of Cool Grey across all three <em>left</em> vertical slab thicknesses.</li>
        <li><strong>Step 4 (2x Cool Grey Deep Shadow):</strong> Pause 10 seconds, then glaze 2 passes across all three <em>right</em> vertical slab thicknesses.</li>
        <li><strong>Step 5 (Drop Cast Shadow Between Floating Tiers):</strong> Sweep a soft Cool Grey diamond shadow onto the top of the <em>lower</em> slab directly beneath the upper floating slab—instant museum-grade 3D levitation!</li>
      </ol>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 12 DEEP DIVE & WORKED EXAMPLES
  // -------------------------------------------------------------------------
  ch12: `
    <div class="prose-wrap">
      <h3>12.3 Inventing New Icons on the Fly (The Compound-Icon Method)</h3>
      <p>
        You never need to memorize 500 icons. Once you know the 24 core icons above, you can invent almost any specialized AI, tax, or German vocabulary icon in 4 seconds by <strong>combining 2 base icons</strong>:
      </p>
      <ul>
        <li><strong>Calendar + € Coin</strong> = Statutory Tax Filing Deadline (<em>die Steuerfrist</em>)</li>
        <li><strong>Open Book (§) + Padlock</strong> = Binding Compliance Policy / EU Directive</li>
        <li><strong>Cloud / LLM + Brick Firewall</strong> = Isolated Reasoning Sandbox (Zero Write Keys)</li>
        <li><strong>Magnifying Glass + Database</strong> = Vector Search / RAG Retrieval</li>
        <li><strong>Speech Bubble + [ V2 ] Bracket</strong> = German Spoken Syntax Practice</li>
        <li><strong>Envelope + Checkmark ✓</strong> = Client-Approved Filing Confirmation</li>
      </ul>
    </div>

    <div class="deutsch-box">
      <div class="callout-label" style="color:var(--amber-deep);">Worked Example // 8 High-Frequency German Tax &amp; Tech Sketch-Cards</div>
      <div class="table-wrap">
        <table class="t">
          <thead><tr><th>German Term</th><th>English</th><th>3-Stroke Sketch Recipe</th><th>Semantic Wash</th></tr></thead>
          <tbody>
            <tr><td><strong>ein·reichen</strong> (sep. verb)</td><td>to submit / file</td><td>Memo icon + bold arrow pushing into Folder</td><td><span class="pill amber">Amber (Verb)</span></td></tr>
            <tr><td><strong>nach·reichen</strong> (sep. verb)</td><td>to submit later</td><td>Stopwatch icon + dotted delayed arrow → Folder</td><td><span class="pill amber">Amber (Verb)</span></td></tr>
            <tr><td><strong>der Entwurf</strong></td><td>draft</td><td>Page icon + dashed border + tiny stylus</td><td><span class="pill cyan">Cyan (der)</span></td></tr>
            <tr><td><strong>die Genehmigung</strong></td><td>approval / permit</td><td>Tilted double-border rubber stamp <code>OK ✓</code></td><td><span class="pill magenta">Magenta (die)</span></td></tr>
            <tr><td><strong>das Risiko</strong></td><td>risk</td><td>Warning triangle <code>!</code> + dashed zone</td><td><span class="pill mint">Mint (das)</span></td></tr>
            <tr><td><strong>der Speicher</strong></td><td>memory / storage</td><td>3-platter Database cylinder</td><td><span class="pill cyan">Cyan (der)</span></td></tr>
            <tr><td><strong>die Auswertung</strong></td><td>evaluation / analysis</td><td>Magnifier lens over mini Dumbbell chart</td><td><span class="pill magenta">Magenta (die)</span></td></tr>
            <tr><td><strong>das Verfahren</strong></td><td>procedure / process</td><td>3 tiny linked pills (<code>1 → 2 → 3</code>)</td><td><span class="pill mint">Mint (das)</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `
};
