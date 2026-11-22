/* =========================================================================
   APPENDIX G: ILLUSTRATING PROCESSES, PIPELINES & WORKFLOWS
   8 Editorial Process Archetypes + Shape Grammar + Live Process Flow Builder
   ========================================================================= */

export const PROCESS_ARCHETYPES = [
  {
    id: 'linear',
    short: '1. Telemetry Rail',
    name: '1. Linear Pipeline + Telemetry Chips',
    bestFor: 'Monthly Tax Filings (UStVA), CI/CD Pipelines, Standard Operating Procedures',
    recipe: [
      'Draw 4 crisp equal-width rounded cards along a single horizontal dot-grid rail separated by bold Cyan chevrons.',
      'Hang tiny monospace telemetry chips directly underneath each card (⏱ Time + 👤 Owner/Bot).',
      'Drop a dashed Magenta "Exception / Retry Loop" underneath the rail so error paths never clutter the happy path!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <!-- Happy Path Rail Arrows -->
      <g stroke="#0EA5E9" stroke-width="3" fill="none">
        <line x1="158" y1="114" x2="188" y2="114"/><line x1="322" y1="114" x2="352" y2="114"/><line x1="486" y1="114" x2="516" y2="114"/>
      </g>
      <g fill="#0EA5E9">
        <polygon points="184,107 196,114 184,121"/><polygon points="348,107 360,114 348,121"/><polygon points="512,107 524,114 512,121"/>
      </g>
      <!-- 4 Step Nodes -->
      <g>
        <rect x="24" y="64" width="134" height="100" rx="10" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
        <text x="91" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">STEP 01 // INGEST</text>
        <text x="91" y="114" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">Pull Bank + ERP</text>
        <text x="91" y="134" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#525B7A">CSV / DATEV</text>
        <rect x="40" y="174" width="102" height="22" rx="11" fill="#141836"/>
        <text x="91" y="189" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#00D4FF">⏱ 2m • 🤖 AUTO</text>
      </g>
      <g>
        <rect x="196" y="64" width="126" height="100" rx="10" fill="#EDE9FE" stroke="#141836" stroke-width="2.2"/>
        <text x="259" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">STEP 02 // AUDIT</text>
        <text x="259" y="114" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">VIES + Rate Check</text>
        <text x="259" y="134" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#525B7A">Flag anomalies</text>
        <rect x="208" y="174" width="102" height="22" rx="11" fill="#141836"/>
        <text x="259" y="189" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#C4B5FD">⏱ 30s • 🤖 AI</text>
      </g>
      <g>
        <rect x="360" y="64" width="126" height="100" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.4"/>
        <text x="423" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">STEP 03 // HITL 🔒</text>
        <text x="423" y="114" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">Advisor Review</text>
        <text x="423" y="134" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#BE185D">Sign-off gate</text>
        <rect x="372" y="174" width="102" height="22" rx="11" fill="#BE185D"/>
        <text x="423" y="189" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#FFF">⏱ 5m • 👤 HUMAN</text>
      </g>
      <g>
        <rect x="524" y="64" width="132" height="100" rx="10" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>
        <text x="590" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">STEP 04 // FILE ✓</text>
        <text x="590" y="114" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">Submit ELSTER</text>
        <text x="590" y="134" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#047857">10-yr PDF archive</text>
        <rect x="538" y="174" width="104" height="22" rx="11" fill="#047857"/>
        <text x="590" y="189" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#FFF">DONE • 10th ★</text>
      </g>
      <!-- Magenta Failure Loopback Arc -->
      <path d="M 423 202 V 252 H 91 V 202" fill="none" stroke="#EC4899" stroke-width="2.2" stroke-dasharray="6 4"/>
      <polygon points="85,208 91,196 97,208" fill="#EC4899"/>
      <rect x="176" y="238" width="166" height="24" rx="12" fill="#FFF" stroke="#EC4899" stroke-width="1.8"/>
      <text x="259" y="254" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">↺ MISSING INVOICE LOOP</text>
    </svg>`
  },
  {
    id: 'serpentine',
    short: '2. S-Curve Winding Path',
    name: '2. S-Curve Serpentine Journey (Fits 7+ Steps on One A5 Page!)',
    bestFor: 'Client Onboarding, Multi-Week Projects, German Bureaucracy Steps (Anmeldung → Steuer-ID)',
    recipe: [
      'Draw one continuous wide double-track highway looping Left→Right (Row 1), curving 180° around the right margin, and returning Right→Left (Row 2).',
      'Stamp numbered circular milestone markers (01 → 06) directly along the road with tiny 2-word captions alternating above/below.',
      'Plant a Mint checkered flag at the finish so the eye immediately sees progress and payoff!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <!-- Thick Winding Road Track -->
      <path d="M 74 88 H 544 C 618 88, 618 220, 544 220 H 92" fill="none" stroke="#CBD5E1" stroke-width="22" stroke-linecap="round"/>
      <path d="M 74 88 H 544 C 618 88, 618 220, 544 220 H 92" fill="none" stroke="#FFF" stroke-width="2.4" stroke-dasharray="10 8" stroke-linecap="round"/>
      <!-- 6 Milestone Nodes -->
      <g>
        <circle cx="94" cy="88" r="18" fill="#0EA5E9" stroke="#141836" stroke-width="2.4"/>
        <text x="94" y="93" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#FFF">01</text>
        <text x="94" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">DISCOVERY</text>
        <text x="94" y="128" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Scope &amp; Entity</text>

        <circle cx="290" cy="88" r="18" fill="#0EA5E9" stroke="#141836" stroke-width="2.4"/>
        <text x="290" y="93" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#FFF">02</text>
        <text x="290" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">KYC &amp; POA</text>
        <text x="290" y="128" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Vollmacht signed</text>

        <circle cx="496" cy="88" r="18" fill="#7C3AED" stroke="#141836" stroke-width="2.4"/>
        <text x="496" y="93" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#FFF">03</text>
        <text x="496" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">DATA SYNC</text>
        <text x="496" y="128" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">DATEV + Stripe</text>

        <circle cx="496" cy="220" r="18" fill="#EC4899" stroke="#141836" stroke-width="2.4"/>
        <text x="496" y="225" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#FFF">04</text>
        <text x="496" y="186" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">VAT AUDIT</text>
        <text x="496" y="260" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Check OSS / §13b</text>

        <circle cx="290" cy="220" r="18" fill="#F59E0B" stroke="#141836" stroke-width="2.4"/>
        <text x="290" y="225" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#141836">05</text>
        <text x="290" y="186" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">DRY RUN</text>
        <text x="290" y="260" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Test return draft</text>

        <circle cx="94" cy="220" r="20" fill="#10B981" stroke="#141836" stroke-width="2.6"/>
        <text x="94" y="225" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#FFF">★</text>
        <text x="94" y="186" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">06 LIVE!</text>
        <text x="94" y="260" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#047857">Auto-Pilot Monthly ✓</text>
      </g>
    </svg>`
  },
  {
    id: 'conveyor',
    short: '3. Factory Cutaway',
    name: '3. Mechanical Conveyor-Belt Process Metaphor',
    bestFor: 'AI Pipelines, Document OCR, Explaining Invisible Software to Non-Technical Clients',
    recipe: [
      'Draw one long pill-shaped conveyor belt resting on 3 circular roller wheels across the bottom.',
      'Build 2–3 quirky mini-machines straddling the belt: a Funnel Hopper (Input), a Cyan Laser Scanner Arch (Transform), and a Stamp Press (Output).',
      'Show messy tilted papers entering on the left and neat Mint-checked artifacts exiting on the right!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <!-- Conveyor Belt Chassis -->
      <rect x="46" y="216" width="588" height="32" rx="16" fill="#EEF2FC" stroke="#141836" stroke-width="2.6"/>
      <circle cx="90" cy="232" r="10" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <circle cx="340" cy="232" r="10" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <circle cx="590" cy="232" r="10" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <path d="M 130 232 H 300 M 380 232 H 550" stroke="#94A3B8" stroke-width="2" stroke-dasharray="6 5"/>
      <!-- Stage 1: Raw Messy Papers Entering -->
      <g transform="translate(74, 152) rotate(-10)">
        <rect x="0" y="0" width="44" height="54" rx="3" fill="#FFFDF5" stroke="#141836" stroke-width="2"/>
        <path d="M 8 14 H 34 M 8 24 H 28 M 8 34 H 36" stroke="#94A3B8" stroke-width="2"/>
      </g>
      <text x="104" y="134" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#525B7A">RAW PDFs</text>
      <!-- Stage 2: Cyan Scanner Arch -->
      <rect x="218" y="66" width="114" height="150" rx="8" fill="#E0F2FE" fill-opacity="0.4" stroke="#141836" stroke-width="2.6"/>
      <rect x="218" y="66" width="114" height="30" rx="6" fill="#141836"/>
      <text x="275" y="85" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#00D4FF">OCR + LLM</text>
      <polygon points="244,96 306,96 322,216 228,216" fill="#0EA5E9" fill-opacity="0.22"/>
      <line x1="234" y1="156" x2="316" y2="156" stroke="#EC4899" stroke-width="2.4" stroke-dasharray="4 3"/>
      <text x="275" y="148" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">EXTRACT JSON</text>
      <!-- Stage 3: Quality Stamp Press -->
      <rect x="396" y="86" width="108" height="44" rx="6" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.2"/>
      <text x="450" y="112" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">RULE CHECK</text>
      <rect x="442" y="130" width="16" height="42" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>
      <rect x="424" y="172" width="52" height="14" rx="3" fill="#141836"/>
      <!-- Stage 4: Clean Stamped Output -->
      <rect x="546" y="156" width="56" height="60" rx="5" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>
      <text x="574" y="182" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">READY</text>
      <text x="574" y="202" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700" fill="#047857">✓</text>
      <text x="574" y="142" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">LEDGER ENTRY</text>
      <!-- Motion Caption -->
      <text x="340" y="282" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">Visual Metaphor Tip: Messy Input Left → Machine Transform Center → Clean Verified Output Right!</text>
    </svg>`
  },
  {
    id: 'swimlane',
    short: '4. Team Swimlanes',
    name: '4. Cross-Team Swimlane Relay',
    bestFor: 'Client ↔ AI ↔ Advisor Handoffs, Ownership Clarity, Spotting Bottlenecks',
    recipe: [
      'Divide your page into 3 wide horizontal lanes separated by light dashed rails; label each role in a bold vertical left tab.',
      'Place every action box strictly inside the lane of the actor who owns it.',
      'Draw crisp 90° vertical arrows crossing lane dividers—every lane-crossing highlights a potential handoff bottleneck!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <!-- 3 Horizontal Lanes -->
      <rect x="20" y="18" width="640" height="86" rx="6" fill="#E0F2FE" fill-opacity="0.28" stroke="#0EA5E9" stroke-width="1.6"/>
      <rect x="20" y="112" width="640" height="86" rx="6" fill="#EDE9FE" fill-opacity="0.28" stroke="#7C3AED" stroke-width="1.6"/>
      <rect x="20" y="206" width="640" height="86" rx="6" fill="#D1FAE5" fill-opacity="0.28" stroke="#047857" stroke-width="1.6"/>
      <!-- Left Role Tabs -->
      <rect x="20" y="18" width="96" height="86" rx="6" fill="#0EA5E9"/><text x="68" y="65" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#FFF">CLIENT</text>
      <rect x="20" y="112" width="96" height="86" rx="6" fill="#7C3AED"/><text x="68" y="159" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#FFF">AI AGENT</text>
      <rect x="20" y="206" width="96" height="86" rx="6" fill="#047857"/><text x="68" y="253" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#FFF">ADVISOR</text>
      <!-- Action Boxes & Vertical Handoffs -->
      <rect x="138" y="38" width="124" height="46" rx="7" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <text x="200" y="65" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">1. Uploads Invoices</text>
      <polyline points="200,84 200,155 248,155" fill="none" stroke="#141836" stroke-width="2.2"/>
      <rect x="248" y="132" width="144" height="46" rx="7" fill="#FFF" stroke="#7C3AED" stroke-width="2"/>
      <text x="320" y="159" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">2. Drafts VAT Memo</text>
      <polyline points="320,178 320,249 384,249" fill="none" stroke="#141836" stroke-width="2.2"/>
      <rect x="384" y="226" width="144" height="46" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.2"/>
      <text x="456" y="253" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#BE185D">3. Verifies &amp; Signs 🔒</text>
      <polyline points="528,249 586,249 586,84" fill="none" stroke="#047857" stroke-width="2.4"/>
      <rect x="526" y="38" width="120" height="46" rx="7" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <text x="586" y="65" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#047857">4. Receives Filing ✓</text>
    </svg>`
  },
  {
    id: 'flywheel',
    short: '5. Continuous Flywheel',
    name: '5. Continuous Feedback Loop / Compounding Flywheel',
    bestFor: 'Habit Loops, Agile Sprints, Weekly German Immersion, AI Eval Improvement',
    recipe: [
      'Trace one large light guide circle in the center, then break it into 4 curved bold arrow arcs flowing clockwise.',
      'Place 4 crisp action cards at 12, 3, 6, and 9 o\'clock (Capture → Distill → Test → Refine).',
      'Write the compounding payoff right inside the hollow center hub ("+1% BETTER WEEKLY")!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <!-- 4 Curved Clockwise Arcs -->
      <path d="M 398 62 A 118 98 0 0 1 464 134" fill="none" stroke="#0EA5E9" stroke-width="4" stroke-linecap="round"/>
      <polygon points="457,132 466,144 471,130" fill="#0EA5E9"/>
      <path d="M 464 184 A 118 98 0 0 1 398 250" fill="none" stroke="#EC4899" stroke-width="4" stroke-linecap="round"/>
      <polygon points="402,243 390,253 405,257" fill="#EC4899"/>
      <path d="M 282 250 A 118 98 0 0 1 216 184" fill="none" stroke="#10B981" stroke-width="4" stroke-linecap="round"/>
      <polygon points="223,186 214,174 209,188" fill="#10B981"/>
      <path d="M 216 134 A 118 98 0 0 1 282 62" fill="none" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/>
      <polygon points="278,69 290,59 275,55" fill="#F59E0B"/>
      <!-- Center Payoff Hub -->
      <circle cx="340" cy="156" r="52" fill="#141836"/>
      <text x="340" y="152" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#00D4FF">COMPOUND</text>
      <text x="340" y="170" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#FFF">FLYWHEEL ↻</text>
      <!-- 4 Quadrant Cards -->
      <rect x="272" y="18" width="136" height="52" rx="9" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/>
      <text x="340" y="40" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">1. LISTEN / INPUT</text>
      <text x="340" y="58" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">15m Easy German</text>

      <rect x="466" y="130" width="150" height="52" rx="9" fill="#FCE7F3" stroke="#EC4899" stroke-width="2.2"/>
      <text x="541" y="152" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">2. SKETCH ANCHORS</text>
      <text x="541" y="170" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">5 visual vocab cards</text>

      <rect x="272" y="242" width="136" height="52" rx="9" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <text x="340" y="264" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">3. ACTIVE RECALL</text>
      <text x="340" y="282" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Daily Anki streak</text>

      <rect x="64" y="130" width="150" height="52" rx="9" fill="#FEF3C7" stroke="#B45309" stroke-width="2.2"/>
      <text x="139" y="152" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#B45309">4. SPEAK &amp; REFINE</text>
      <text x="139" y="170" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Use in live calls!</text>
    </svg>`
  },
  {
    id: 'forkmerge',
    short: '6. Fork & Merge',
    name: '6. Parallel Fork-and-Merge Synchronization Flow',
    bestFor: 'Month-End Financial Close, Multi-Agent Swarm Tasks, Parallel Audits',
    recipe: [
      'Draw one Trigger pill on the left that splits via a crisp vertical bracket bar into 3 parallel horizontal tracks.',
      'Color each parallel workstream independently (Cyan, Violet, Amber) so readers instantly see they run simultaneously.',
      'Reunite all 3 tracks at a bold vertical "SYNC GATE" bar on the right before releasing the final deliverable!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <!-- Trigger Left -->
      <rect x="20" y="126" width="112" height="58" rx="10" fill="#141836"/>
      <text x="76" y="152" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#00D4FF">MONTH-END</text>
      <text x="76" y="169" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#FFF">TRIGGER</text>
      <!-- Fork Bar -->
      <path d="M 132 155 H 168 M 168 62 V 248 M 168 62 H 206 M 168 155 H 206 M 168 248 H 206" fill="none" stroke="#141836" stroke-width="2.8" stroke-linecap="round"/>
      <!-- 3 Parallel Tracks -->
      <rect x="206" y="34" width="234" height="56" rx="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/>
      <text x="323" y="57" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">TRACK A // BANK RECONCILIATION</text>
      <text x="323" y="77" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Match Stripe + Wise + Euro ledger</text>

      <rect x="206" y="127" width="234" height="56" rx="8" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.2"/>
      <text x="323" y="150" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#6D28D9">TRACK B // ACCRUALS &amp; DEPREC.</text>
      <text x="323" y="170" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Post 1/12th D&amp;A + unbilled fees</text>

      <rect x="206" y="220" width="234" height="56" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2.2"/>
      <text x="323" y="243" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#B45309">TRACK C // VAT &amp; VIES CHECK</text>
      <text x="323" y="263" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Verify EU B2B IDs + OSS split</text>
      <!-- Merge Sync Gate -->
      <path d="M 440 62 H 478 M 440 155 H 478 M 440 248 H 478 M 478 62 V 248 M 478 155 H 516" fill="none" stroke="#141836" stroke-width="2.8" stroke-linecap="round"/>
      <rect x="470" y="120" width="16" height="70" rx="4" fill="#EC4899" stroke="#141836" stroke-width="2"/>
      <!-- Final Release -->
      <rect x="516" y="114" width="142" height="82" rx="10" fill="#D1FAE5" stroke="#047857" stroke-width="2.6"/>
      <text x="587" y="146" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">CLOSE LOCKED ✓</text>
      <text x="587" y="168" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">Board Pack + UStVA</text>
    </svg>`
  },
  {
    id: 'triage',
    short: '7. Tiered Escalation',
    name: '7. Tiered Triage & Escalation Funnel',
    bestFor: 'Support Desks, AI Routing (Flash → Pro → Human), Tax Complexity Filtering',
    recipe: [
      'Stack 3 progressively narrower horizontal tiers from Top (High Volume, Fast) down to Bottom (Low Volume, Deep Expert).',
      'Draw bold Mint "RESOLVED ✓" exits shooting off the right side of each tier with percentage badges (80% / 15% / 5%).',
      'Drop short vertical Magenta "ESCALATE ↓" arrows connecting only the edge cases down to the next tier!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <!-- Tier 1: Wide 80% -->
      <rect x="34" y="28" width="416" height="68" rx="10" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.4"/>
      <text x="54" y="54" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0369A1">TIER 1 // FLASH AI TRIAGE (0.2s)</text>
      <text x="54" y="78" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">Standard VAT rates, invoice OCR, routine FAQ lookups</text>
      <line x1="450" y1="62" x2="516" y2="62" stroke="#047857" stroke-width="3"/>
      <rect x="516" y="42" width="136" height="40" rx="20" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
      <text x="584" y="66" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">80% AUTO ✓</text>

      <!-- Escalate 1->2 -->
      <line x1="184" y1="96" x2="184" y2="124" stroke="#EC4899" stroke-width="2.8"/>
      <text x="200" y="114" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">20% COMPLEX ↓</text>

      <!-- Tier 2: Mid 15% -->
      <rect x="74" y="126" width="336" height="68" rx="10" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.4"/>
      <text x="94" y="152" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#6D28D9">TIER 2 // PRO REASONING + RAG</text>
      <text x="94" y="176" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">Cross-border chain deals, treaty citation drafts</text>
      <line x1="410" y1="160" x2="516" y2="160" stroke="#047857" stroke-width="3"/>
      <rect x="516" y="140" width="136" height="40" rx="20" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
      <text x="584" y="164" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">15% DRAFTED ✓</text>

      <!-- Escalate 2->3 -->
      <line x1="184" y1="194" x2="184" y2="222" stroke="#EC4899" stroke-width="2.8"/>
      <text x="200" y="212" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">5% HIGH RISK ↓</text>

      <!-- Tier 3: Narrow 5% -->
      <rect x="114" y="224" width="256" height="66" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.4"/>
      <text x="134" y="250" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#BE185D">TIER 3 // PARTNER SIGN-OFF</text>
      <text x="134" y="274" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">Binding rulings, audit defense 🔒</text>
      <line x1="370" y1="257" x2="516" y2="257" stroke="#BE185D" stroke-width="3"/>
      <rect x="516" y="237" width="136" height="40" rx="20" fill="#141836"/>
      <text x="584" y="261" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#FDE68A">5% BESPOKE ★</text>
    </svg>`
  },
  {
    id: 'beforeafter',
    short: '8. Before/After Strip',
    name: '8. Before / After Process Compression Comparison',
    bestFor: 'Automation Pitches, ROI Case Studies, Showing Workflow Transformation',
    recipe: [
      'Stack two horizontal tracks: Top = "BEFORE" (cramped Cool Grey/Magenta tangled boxes with slow clock chips).',
      'Bottom = "AFTER" (airy 2–3 Mint/Cyan automated steps spanning less than half the width!).',
      'Fill the newly freed empty space on the bottom-right with a giant bold savings badge ("-85% TIME SAVED!").'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <!-- BEFORE Row -->
      <text x="24" y="34" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#BE185D">BEFORE // MANUAL 6-STEP BOTTLENECK (45 MIN / CLIENT)</text>
      <g font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#525B7A">
        <rect x="24" y="48" width="90" height="58" rx="6" fill="#EEF2FC" stroke="#94A3B8" stroke-width="2"/><text x="69" y="81" text-anchor="middle">1. EMAIL</text>
        <rect x="130" y="48" width="90" height="58" rx="6" fill="#EEF2FC" stroke="#94A3B8" stroke-width="2"/><text x="175" y="81" text-anchor="middle">2. RE-TYPE</text>
        <rect x="236" y="48" width="90" height="58" rx="6" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/><text x="281" y="81" text-anchor="middle" fill="#BE185D">3. WAIT!</text>
        <rect x="342" y="48" width="90" height="58" rx="6" fill="#EEF2FC" stroke="#94A3B8" stroke-width="2"/><text x="387" y="81" text-anchor="middle">4. CHECK</text>
        <rect x="448" y="48" width="90" height="58" rx="6" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/><text x="493" y="81" text-anchor="middle" fill="#BE185D">5. REDO!</text>
        <rect x="554" y="48" width="96" height="58" rx="6" fill="#EEF2FC" stroke="#94A3B8" stroke-width="2"/><text x="602" y="81" text-anchor="middle">6. UPLOAD</text>
      </g>
      <path d="M 114 77 H 130 M 220 77 H 236 M 326 77 H 342 M 432 77 H 448 M 538 77 H 554" stroke="#94A3B8" stroke-width="2.2"/>
      <!-- Divider -->
      <line x1="24" y1="142" x2="656" y2="142" stroke="#141836" stroke-width="2" stroke-dasharray="6 4"/>
      <rect x="276" y="130" width="128" height="24" rx="12" fill="#141836"/>
      <text x="340" y="146" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#00D4FF">WORKFLOW REDESIGN ↓</text>
      <!-- AFTER Row -->
      <text x="24" y="182" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">AFTER // AI-ASSISTED 2-STEP FLOW (6 MIN / CLIENT)</text>
      <rect x="24" y="198" width="150" height="74" rx="10" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.4"/>
      <text x="99" y="226" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0369A1">1. AUTO-EXTRACT</text>
      <text x="99" y="250" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">OCR + VIES (1 min)</text>
      <line x1="174" y1="235" x2="218" y2="235" stroke="#047857" stroke-width="3"/>
      <polygon points="212,228 224,235 212,242" fill="#047857"/>
      <rect x="224" y="198" width="150" height="74" rx="10" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>
      <text x="299" y="226" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">2. HITL APPROVE ✓</text>
      <text x="299" y="250" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">1-Click File (5 min)</text>
      <!-- Giant Freed Space Savings Box -->
      <rect x="406" y="198" width="244" height="74" rx="12" fill="#FFFDF5" stroke="#047857" stroke-width="2.4" stroke-dasharray="6 4"/>
      <text x="528" y="232" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="18" font-weight="700" fill="#047857">-87% TIME SAVED</text>
      <text x="528" y="256" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">Zero manual re-typing errors ★</text>
    </svg>`
  }
];

const PROC_PRESETS = {
  vat: {
    title: 'Monthly EU VAT Filing',
    steps: ['Import Invoices | 2m', 'VIES & Rate Check | 30s', 'Advisor Sign-Off | 5m', 'ELSTER Submit | 1m']
  },
  ai: {
    title: 'AI Tax Research Pipeline',
    steps: ['Parse Query | 0.2s', 'RAG Statute Fetch | 1s', 'Draft Cited Memo | 8s', 'Human Review | 3m']
  },
  close: {
    title: 'Month-End Financial Close',
    steps: ['Bank Rec | 15m', 'Accruals & D&A | 20m', 'Trial Balance | 10m', 'Board Report | 5m']
  }
};

function escP(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildCustomProcessSVG(title, rawSteps, style, showLoop, showBadges) {
  const cols = ['#0EA5E9', '#7C3AED', '#EC4899', '#10B981'];
  const fills = ['#E0F2FE', '#EDE9FE', '#FCE7F3', '#D1FAE5'];
  const steps = rawSteps.map((r, i) => {
    const parts = String(r || '').split('|');
    return {
      label: escP((parts[0] || `Step ${i + 1}`).trim()),
      chip: escP((parts[1] || `${(i + 1) * 2}m`).trim())
    };
  });

  if (style === 'serpentine') {
    const pts = [[120, 88], [520, 88], [520, 212], [120, 212]];
    return `<svg viewBox="0 0 680 290">
      <text x="340" y="26" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#141836">${escP(title).toUpperCase()}</text>
      <path d="M 100 88 H 536 C 612 88, 612 212, 536 212 H 100" fill="none" stroke="#CBD5E1" stroke-width="20" stroke-linecap="round"/>
      <path d="M 100 88 H 536 C 612 88, 612 212, 536 212 H 100" fill="none" stroke="#FFF" stroke-width="2.2" stroke-dasharray="10 7"/>
      ${pts.map(([x, y], i) => `
        <rect x="${x - 84}" y="${y - 30}" width="168" height="60" rx="10" fill="${fills[i]}" stroke="${cols[i]}" stroke-width="2.2"/>
        <text x="${x}" y="${y - 6}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="${cols[i]}">STEP 0${i + 1}${showBadges ? ' • ' + steps[i].chip : ''}</text>
        <text x="${x}" y="${y + 16}" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">${steps[i].label}</text>
      `).join('')}
      ${showLoop ? `<path d="M 120 244 V 270 H 520 V 244" fill="none" stroke="#EC4899" stroke-width="2" stroke-dasharray="5 4"/><text x="320" y="264" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">↺ QUALITY LOOPBACK</text>` : ''}
    </svg>`;
  }

  if (style === 'flywheel') {
    const pos = [[340, 56], [546, 150], [340, 244], [134, 150]];
    return `<svg viewBox="0 0 680 290">
      <circle cx="340" cy="150" r="96" fill="none" stroke="#CBD5E1" stroke-width="3.5" stroke-dasharray="8 6"/>
      <circle cx="340" cy="150" r="46" fill="#141836"/>
      <text x="340" y="147" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#00D4FF">${escP(title).slice(0, 13)}</text>
      <text x="340" y="164" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#FFF">CYCLE ↻</text>
      ${pos.map(([x, y], i) => `
        <rect x="${x - 76}" y="${y - 28}" width="152" height="56" rx="10" fill="${fills[i]}" stroke="${cols[i]}" stroke-width="2.2"/>
        <text x="${x}" y="${y - 6}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="${cols[i]}">0${i + 1}${showBadges ? ' // ' + steps[i].chip : ''}</text>
        <text x="${x}" y="${y + 15}" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">${steps[i].label}</text>
      `).join('')}
    </svg>`;
  }

  // Default: Linear Telemetry Rail
  return `<svg viewBox="0 0 680 290">
    <text x="340" y="30" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#141836">${escP(title).toUpperCase()}</text>
    <g stroke="#0EA5E9" stroke-width="2.8">
      <line x1="158" y1="116" x2="188" y2="116"/><line x1="322" y1="116" x2="352" y2="116"/><line x1="486" y1="116" x2="516" y2="116"/>
    </g>
    ${steps.map((st, i) => {
      const x = 24 + i * 164;
      return `
        <rect x="${x}" y="68" width="134" height="96" rx="10" fill="${fills[i]}" stroke="${cols[i]}" stroke-width="2.4"/>
        <text x="${x + 67}" y="94" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="${cols[i]}">STEP 0${i + 1}</text>
        <text x="${x + 67}" y="128" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">${st.label}</text>
        ${showBadges ? `<rect x="${x + 22}" y="174" width="90" height="22" rx="11" fill="#141836"/><text x="${x + 67}" y="189" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#FFF">⏱ ${st.chip}</text>` : ''}
      `;
    }).join('')}
    ${showLoop ? `<path d="M 419 204 V 248 H 91 V 204" fill="none" stroke="#EC4899" stroke-width="2.2" stroke-dasharray="6 4"/><polygon points="85,210 91,198 97,210" fill="#EC4899"/><text x="255" y="242" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">↺ EXCEPTION / RETRY LOOP</text>` : ''}
  </svg>`;
}

export function renderProcessLabHTML() {
  return `
    <!-- 1. UNIVERSAL PROCESS SHAPE GRAMMAR CHEAT SHEET -->
    <section class="section-block">
      <h2>Universal Process Shape Grammar (Zero Legend Needed)</h2>
      <p>
        Anyone reading your notebook should understand a workflow in 2 seconds flat. Stick to these <strong>6 universal flowchart &amp; process shapes</strong> plus the <strong>IPO rule</strong> (<em>Input Left → Transform Center → Output Right</em>):
      </p>
      <div class="svg-box">
        <svg viewBox="0 0 680 120">
          <!-- 1. Start/End Pill -->
          <rect x="16" y="22" width="94" height="44" rx="22" fill="#141836"/>
          <text x="63" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#00D4FF">START/END</text>
          <text x="63" y="92" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Trigger / Finish</text>
          <!-- 2. Action Box -->
          <rect x="128" y="22" width="94" height="44" rx="6" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/>
          <text x="175" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">ACTION</text>
          <text x="175" y="92" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Work Step</text>
          <!-- 3. Decision Diamond -->
          <polygon points="286,16 334,44 286,72 238,44" fill="#FEF3C7" stroke="#B45309" stroke-width="2.2"/>
          <text x="286" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">IF / ?</text>
          <text x="286" y="92" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Yes/No Gate</text>
          <!-- 4. Database Cylinder -->
          <path d="M 358 30 V 60 A 38 9 0 0 0 434 60 V 30" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.2"/>
          <ellipse cx="396" cy="30" rx="38" ry="9" fill="#FFF" stroke="#7C3AED" stroke-width="2.2"/>
          <text x="396" y="53" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">LEDGER</text>
          <text x="396" y="92" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">DB / Archive</text>
          <!-- 5. HITL Gate -->
          <rect x="454" y="22" width="94" height="44" rx="6" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.4"/>
          <text x="501" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">HITL 🔒</text>
          <text x="501" y="92" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Human Sign-Off</text>
          <!-- 6. External Async -->
          <rect x="566" y="22" width="98" height="44" rx="6" fill="#FFF" stroke="#525B7A" stroke-width="2" stroke-dasharray="5 3"/>
          <text x="615" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#525B7A">EXTERNAL</text>
          <text x="615" y="92" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">3rd-Party API</text>
        </svg>
      </div>
    </section>

    <!-- 2. INTERACTIVE GALLERY: 8 COOL PROCESS-ILLUSTRATION ARCHETYPES -->
    <section class="lab cyan-accent" id="proc-gallery-lab">
      <div class="lab-head">
        <span class="lab-title">Workflow Blueprint Gallery // 8 Cool Ways to Illustrate Any Process</span>
        <span class="pill cyan">Copyable A5 Layouts</span>
      </div>
      <div class="lab-body">
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          ${PROCESS_ARCHETYPES.map((p, i) => `<button class="seg-btn proc-tab ${i === 0 ? 'active' : ''}" data-id="${p.id}">${p.short}</button>`).join('')}
        </div>

        <div class="card tinted" style="border-color:var(--cyan);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <span id="proc-title" class="card-h" style="font-size:18px;"></span>
            <span id="proc-best" class="pill violet"></span>
          </div>
          <div id="proc-svg-box" class="svg-box" style="margin:6px 0;"></div>
          <div class="card" style="background:#FFF;">
            <div class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep);">3-STEP FREEHAND PROCESS RECIPE</div>
            <ol id="proc-recipe" style="padding-left:20px; font-size:14.2px; display:flex; flex-direction:column; gap:4px; color:var(--ink-body);"></ol>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. INTERACTIVE STUDIO: LIVE PROCESS FLOW BUILDER -->
    <section class="lab magenta-accent" id="proc-builder-lab">
      <div class="lab-head">
        <span class="lab-title">Live Process Designer // Build &amp; Export Your Own Workflow Diagram</span>
        <div class="segmented no-print" role="group">
          <button class="seg-btn proc-pre active" data-p="vat">Preset: VAT Filing</button>
          <button class="seg-btn proc-pre" data-p="ai">Preset: AI Research</button>
          <button class="seg-btn proc-pre" data-p="close">Preset: Month-End</button>
        </div>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl no-print" style="flex-wrap:wrap;">
          <div class="segmented" role="group">
            <button class="seg-btn proc-st active" data-s="linear">Linear Rail</button>
            <button class="seg-btn proc-st" data-s="serpentine">S-Curve Path</button>
            <button class="seg-btn proc-st" data-s="flywheel">Cycle Flywheel</button>
          </div>
          <label class="chk-lbl"><input id="proc-loop-chk" type="checkbox" checked /> Failure Loopback (↺)</label>
          <label class="chk-lbl"><input id="proc-badge-chk" type="checkbox" checked /> Time Chips (⏱)</label>
        </div>
        <div class="grid-3 no-print">
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--ink-muted);">PROCESS TITLE</span>
            <input id="proc-in-title" class="search-in" type="text" value="Monthly EU VAT Filing" />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--cyan);">STEP 1 | TIME</span>
            <input id="proc-in-1" class="search-in" type="text" value="Import Invoices | 2m" />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--violet);">STEP 2 | TIME</span>
            <input id="proc-in-2" class="search-in" type="text" value="VIES & Rate Check | 30s" />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--magenta);">STEP 3 | TIME</span>
            <input id="proc-in-3" class="search-in" type="text" value="Advisor Sign-Off | 5m" />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep);">STEP 4 | TIME</span>
            <input id="proc-in-4" class="search-in" type="text" value="ELSTER Submit | 1m" />
          </label>
          <div style="display:flex; align-items:flex-end;">
            <button id="proc-dl-svg" class="btn mint" style="width:100%;">↓ Download Process SVG</button>
          </div>
        </div>
        <div id="proc-live-svg" class="svg-box" style="margin-top:6px;"></div>
      </div>
    </section>
  `;
}

export function initProcessLab() {
  const gal = document.getElementById('proc-gallery-lab');
  if (!gal) return;

  let activeId = PROCESS_ARCHETYPES[0].id;
  const renderArch = () => {
    const p = PROCESS_ARCHETYPES.find(x => x.id === activeId) || PROCESS_ARCHETYPES[0];
    document.getElementById('proc-title').textContent = p.name;
    document.getElementById('proc-best').textContent = p.bestFor;
    document.getElementById('proc-svg-box').innerHTML = p.svg;
    document.getElementById('proc-recipe').innerHTML = p.recipe.map(r => `<li>${r}</li>`).join('');
  };
  gal.querySelectorAll('.proc-tab').forEach(b => b.addEventListener('click', () => {
    activeId = b.dataset.id;
    gal.querySelectorAll('.proc-tab').forEach(x => x.classList.toggle('active', x === b));
    renderArch();
  }));
  renderArch();

  // Live Process Designer
  let style = 'linear', showLoop = true, showBadges = true;
  const renderLive = () => {
    const title = document.getElementById('proc-in-title').value || 'Workflow';
    const steps = [1, 2, 3, 4].map(i => document.getElementById(`proc-in-${i}`).value);
    document.getElementById('proc-live-svg').innerHTML = buildCustomProcessSVG(title, steps, style, showLoop, showBadges);
  };
  document.querySelectorAll('.proc-pre').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.proc-pre').forEach(x => x.classList.toggle('active', x === b));
    const pr = PROC_PRESETS[b.dataset.p] || PROC_PRESETS.vat;
    document.getElementById('proc-in-title').value = pr.title;
    pr.steps.forEach((s, i) => { document.getElementById(`proc-in-${i + 1}`).value = s; });
    renderLive();
  }));
  document.querySelectorAll('.proc-st').forEach(b => b.addEventListener('click', () => {
    style = b.dataset.s;
    document.querySelectorAll('.proc-st').forEach(x => x.classList.toggle('active', x === b));
    renderLive();
  }));
  document.getElementById('proc-loop-chk')?.addEventListener('change', (e) => { showLoop = e.target.checked; renderLive(); });
  document.getElementById('proc-badge-chk')?.addEventListener('change', (e) => { showBadges = e.target.checked; renderLive(); });
  ['proc-in-title', 'proc-in-1', 'proc-in-2', 'proc-in-3', 'proc-in-4'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', renderLive);
  });
  document.getElementById('proc-dl-svg')?.addEventListener('click', () => {
    const svgEl = document.querySelector('#proc-live-svg svg');
    if (!svgEl) return;
    const raw = svgEl.outerHTML.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFD;" ');
    const blob = new Blob([raw], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `process-${style}.svg`;
    a.click();
    URL.revokeObjectURL(url);
    window.__showToast?.('✓ Custom Process Flow SVG downloaded!');
  });
  renderLive();
}
