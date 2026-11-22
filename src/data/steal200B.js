/* =========================================================================
   STEAL BOOK EXPANSION B: GRAPHICS 81–120
   +8 Visual Thinking (81–88), +12 Callouts & Stamps (89–100), +20 Arrows & Dividers (101–120)
   ========================================================================= */

const mk = (id, cat, name, use, recipe, body) => ({
  id, cat, name, use, recipe,
  svg: `<svg viewBox="0 0 260 130">${body}</svg>`
});

export const STEAL_200_B = [
  // VISUAL THINKING (81–88)
  mk('sb-flywheel', 'thinking', '81. 3-Arc Compounding Flywheel', 'Growth Loops, Learning Habits, Network Effects', [
    'Draw 3 curved arrows chasing each other around an invisible circle.',
    'Drop a bold dark center hub naming the compounding engine.',
    'Put 2-word stage labels cleanly outside each arc.'
  ], `
    <path d="M 130 22 A 44 44 0 0 1 172 58" fill="none" stroke="#0EA5E9" stroke-width="4" stroke-linecap="round"/>
    <polygon points="168,54 176,64 178,51" fill="#0EA5E9"/>
    <path d="M 166 86 A 44 44 0 0 1 94 88" fill="none" stroke="#10B981" stroke-width="4" stroke-linecap="round"/>
    <polygon points="99,86 88,84 94,95" fill="#10B981"/>
    <path d="M 88 58 A 44 44 0 0 1 122 22" fill="none" stroke="#EC4899" stroke-width="4" stroke-linecap="round"/>
    <polygon points="118,18 128,22 119,28" fill="#EC4899"/>
    <circle cx="130" cy="65" r="18" fill="#141836"/>
    <text x="130" y="69" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#FFF">LOOP</text>
    <text x="194" y="42" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">SKETCH</text>
    <text x="130" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">RECALL</text>
    <text x="64" y="42" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">TEACH</text>
  `),
  mk('sb-filter-sieve', 'thinking', '82. Colander / Noise Sieve', 'Editorial Cuts, Data Cleaning, Decision Filters', [
    'Draw messy dots/shapes pouring into the top of a bowl-shaped mesh sieve.',
    'Cross-hatch the sieve screen lightly.',
    'Show only 2–3 crisp Mint diamonds emerging cleanly underneath.'
  ], `
    <g fill="#94A3B8"><circle cx="88" cy="22" r="4"/><circle cx="116" cy="18" r="5"/><circle cx="144" cy="24" r="4"/><circle cx="168" cy="20" r="4.5"/><circle cx="130" cy="34" r="4"/></g>
    <path d="M 56 46 H 204 C 200 78, 172 86, 130 86 C 88 86, 60 78, 56 46 Z" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>
    <line x1="72" y1="60" x2="188" y2="60" stroke="#94A3B8" stroke-width="1.4" stroke-dasharray="3 3"/>
    <line x1="88" y1="72" x2="172" y2="72" stroke="#94A3B8" stroke-width="1.4" stroke-dasharray="3 3"/>
    <polygon points="106,102 114,94 122,102 114,110" fill="#10B981" stroke="#141836" stroke-width="1.5"/>
    <polygon points="138,106 146,98 154,106 146,114" fill="#0EA5E9" stroke="#141836" stroke-width="1.5"/>
    <text x="196" y="108" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">SIGNAL</text>
  `),
  mk('sb-bridge-gap', 'thinking', '83. Suspension Gap Bridge', 'Current vs. Future State, Migration Plans', [
    'Draw two sheer cliff blocks left ("TODAY") and right ("TARGET") separated by a chasm.',
    'Span a crisp arched deck across the gap with two vertical cables.',
    'Label the bridge itself with the enabling solution.'
  ], `
    <rect x="14" y="66" width="58" height="48" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>
    <rect x="188" y="66" width="58" height="48" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
    <path d="M 72 68 Q 130 38 188 68" fill="none" stroke="#0EA5E9" stroke-width="3.2"/>
    <line x1="72" y1="68" x2="188" y2="68" stroke="#141836" stroke-width="2.6"/>
    <line x1="104" y1="56" x2="104" y2="68" stroke="#0EA5E9" stroke-width="1.6"/>
    <line x1="156" y1="56" x2="156" y2="68" stroke="#0EA5E9" stroke-width="1.6"/>
    <text x="43" y="94" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">NOW</text>
    <text x="217" y="94" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">GOAL</text>
    <text x="130" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">THE BRIDGE</text>
  `),
  mk('sb-magnet-pull', 'thinking', '84. Horseshoe Magnet Pull', 'User Incentives, Retention Hooks, Gravity', [
    'Draw a bold U-shaped magnet turned sideways with silver pole tips.',
    'Emit 3 curved dashed field lines pulling tiny icons/users straight in.',
    'Label the magnet with the core hook.'
  ], `
    <path d="M 106 32 H 68 A 32 32 0 0 0 68 96 H 106 V 76 H 68 A 12 12 0 0 1 68 52 H 106 Z" fill="#EC4899" stroke="#141836" stroke-width="2.2"/>
    <rect x="92" y="32" width="16" height="20" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
    <rect x="92" y="76" width="16" height="20" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
    <path d="M 122 42 Q 144 42 156 54 M 122 64 H 164 M 122 86 Q 144 86 156 74" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="4 3"/>
    <circle cx="182" cy="64" r="14" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
    <text x="182" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">AHA!</text>
  `),
  mk('sb-gear-pair', 'thinking', '85. Interlocking Gear Pair', 'Dependencies, Incentives, Cause & Effect', [
    'Draw two circles touching lightly with 8 blocky teeth around each rim.',
    'Place curved opposite rotation arrows inside each gear.',
    'Label the driver gear (Cyan) and driven outcome (Mint).'
  ], `
    <circle cx="88" cy="66" r="28" fill="#E0F2FE" stroke="#141836" stroke-width="2.4" stroke-dasharray="9 5"/>
    <circle cx="88" cy="66" r="10" fill="#FFF" stroke="#141836" stroke-width="2"/>
    <circle cx="152" cy="66" r="22" fill="#D1FAE5" stroke="#047857" stroke-width="2.4" stroke-dasharray="7 5"/>
    <circle cx="152" cy="66" r="8" fill="#FFF" stroke="#047857" stroke-width="2"/>
    <text x="88" y="112" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">INPUT</text>
    <text x="152" y="112" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">OUTPUT</text>
  `),
  mk('sb-puzzle-snap', 'thinking', '86. Two Snapping Puzzle Pieces', 'Integrations, API Contracts, Partner Fit', [
    'Draw two adjacent squares where a circular tab on the left locks into a socket on the right.',
    'Leave a tiny 4px hover gap with snap lines to show motion.',
    'Tint left Cyan and right Violet.'
  ], `
    <path d="M 38 34 H 112 V 56 A 10 10 0 1 1 112 76 V 98 H 38 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
    <path d="M 142 34 H 218 V 98 H 142 V 76 A 10 10 0 1 0 142 56 Z" fill="#EDE9FE" stroke="#141836" stroke-width="2.2"/>
    <text x="75" y="70" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">APP</text>
    <text x="184" y="70" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#6D28D9">API</text>
  `),
  mk('sb-lens-focus', 'thinking', '87. Convex Lens Focal Beam', 'Focus vs. Scatter, Strategy Convergence', [
    'Draw 4 scattered parallel lines entering from the left.',
    'Place a vertical Cyan almond lens right in the middle.',
    'Bend all 4 beams cleanly into one glowing Magenta focal point on the right.'
  ], `
    <g stroke="#64748B" stroke-width="2"><line x1="22" y1="30" x2="118" y2="30"/><line x1="22" y1="54" x2="118" y2="54"/><line x1="22" y1="78" x2="118" y2="78"/><line x1="22" y1="102" x2="118" y2="102"/></g>
    <path d="M 122 18 Q 144 66 122 114 Q 100 66 122 18 Z" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.4"/>
    <g stroke="#EC4899" stroke-width="2"><line x1="126" y1="30" x2="216" y2="66"/><line x1="128" y1="54" x2="216" y2="66"/><line x1="128" y1="78" x2="216" y2="66"/><line x1="126" y1="102" x2="216" y2="66"/></g>
    <circle cx="216" cy="66" r="8" fill="#EC4899" stroke="#141836" stroke-width="2"/>
  `),
  mk('sb-tangle-straight', 'thinking', '88. Squiggle-to-Straight Clarity Arc', 'Design Process, Sense-Making, Synthesis', [
    'Scribble a tight chaotic loop of ink on the left third.',
    'Let the line gradually relax into a wide wave in the middle.',
    'Finish in a crisp straight Mint arrow pointing right.'
  ], `
    <path d="M 24 72 C 18 32, 62 32, 46 84 C 34 112, 86 24, 92 78 C 98 106, 122 46, 146 66 L 228 66" fill="none" stroke="#141836" stroke-width="2.8" stroke-linecap="round"/>
    <polygon points="222,58 238,66 222,74" fill="#10B981"/>
    <text x="54" y="116" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#BE185D">MESSY INPUT</text>
    <text x="200" y="90" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">CLARITY</text>
  `),

  // CALLOUTS & STAMPS (89–100)
  mk('sb-speech-tail', 'callouts', '89. Crisp Comic Speech Bubble', 'User Quotes, Interview Insights, Dialogue', [
    'Draw a rounded pill box around the spoken quote AFTER writing the words.',
    'Add a sharp triangular tail pointing toward the speaker.',
    'Give the bottom-right edge a thin Cool Grey shadow.'
  ], `
    <path d="M 32 22 H 228 A 12 12 0 0 1 240 34 V 78 A 12 12 0 0 1 228 90 H 92 L 66 112 L 72 90 H 32 A 12 12 0 0 1 20 78 V 34 A 12 12 0 0 1 32 22 Z" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>
    <text x="130" y="54" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" fill="#141836">"I just want to test it with</text>
    <text x="130" y="74" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" fill="#0369A1">fake data before connecting!"</text>
  `),
  mk('sb-thought-cloud', 'callouts', '90. Puffy Thought Cloud', 'Unspoken Doubts, Hypotheses, Side Questions', [
    'Draw a scalloped cloud silhouette with 5–6 gentle bumps.',
    'Drop two shrinking trail bubbles down toward the corner.',
    'Tint lightly in soft Violet for hypotheses.'
  ], `
    <path d="M 60 84 H 196 A 20 20 0 0 0 198 46 A 26 24 0 0 0 152 26 A 28 24 0 0 0 98 30 A 22 22 0 0 0 60 84 Z" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.2"/>
    <circle cx="66" cy="100" r="6" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.8"/>
    <circle cx="52" cy="112" r="3.5" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.6"/>
    <text x="132" y="64" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">Wait—what if it times out?</text>
  `),
  mk('sb-megaphone-burst', 'callouts', '91. Megaphone Announcement Callout', 'Key Takeaway, Release Broadcast, Policy Shift', [
    'Draw a tilted conical megaphone on the left with a small handle.',
    'Radiate 3 sharp acoustic burst lines outward into your headline.',
    'Highlight the cone in bright Cyan or Magenta.'
  ], `
    <polygon points="34,58 92,32 92,94 34,72" fill="#0EA5E9" fill-opacity="0.35" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
    <rect x="44" y="72" width="12" height="24" rx="3" fill="#141836"/>
    <path d="M 104 46 L 122 36 M 106 63 L 126 63 M 104 80 L 122 90" stroke="#EC4899" stroke-width="2.8" stroke-linecap="round"/>
    <text x="136" y="58" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#141836">HEADLINE:</text>
    <text x="136" y="78" font-family="Patrick Hand, cursive" font-size="15.5">Default to read-only</text>
  `),
  mk('sb-approved-stamp', 'callouts', '92. Tilted Rubber "APPROVED" Stamp', 'Sign-Offs, Passed Checks, Settled Decisions', [
    'Draw a double-bordered rectangle rotated -8°.',
    'Letter one punchy uppercase word in bold Mint or Magenta.',
    'Add a small date line directly beneath inside the box.'
  ], `
    <g transform="rotate(-8 130 65)">
      <rect x="38" y="34" width="184" height="62" rx="8" fill="#ECFDF5" stroke="#047857" stroke-width="3.2"/>
      <rect x="46" y="42" width="168" height="46" rx="4" fill="none" stroke="#047857" stroke-width="1.4" stroke-dasharray="4 2"/>
      <text x="130" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="18" font-weight="700" fill="#047857">APPROVED</text>
      <text x="130" y="83" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#047857">SIGN-OFF // 22 NOV</text>
    </g>
  `),
  mk('sb-hazard-cone', 'callouts', '93. Warning Triangle & Caution Tape', 'Exam Traps, Compliance Risks, Breaking Changes', [
    'Draw a bold rounded equilateral triangle filled soft Amber with an exclamation mark.',
    'Frame the warning note right beside it with a thin Magenta accent bar.',
    'Use sparingly—once per spread max for Von Restorff pop.'
  ], `
    <polygon points="56,24 94,96 18,96" fill="#FEF3C7" stroke="#B45309" stroke-width="2.6" stroke-linejoin="round"/>
    <line x1="56" y1="48" x2="56" y2="72" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/>
    <circle cx="56" cy="84" r="3" fill="#141836"/>
    <rect x="110" y="34" width="132" height="62" rx="6" fill="#FFF7FB" stroke="#BE185D" stroke-width="2"/>
    <text x="122" y="56" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">EDGE TRAP</text>
    <text x="122" y="78" font-family="Patrick Hand, cursive" font-size="14">Kleinunternehmer</text>
  `),
  mk('sb-pin-badge', 'callouts', '94. Thumbtack Pinned Alert Card', 'Action Items, Must-Not-Forget Reminders', [
    'Draw a small red/magenta circular pushpin at top-center casting a short diagonal shadow.',
    'Hang a slightly tilted index card right beneath the pin.',
    'Write 2 short bullet reminders inside.'
  ], `
    <g transform="rotate(2 130 68)">
      <rect x="44" y="26" width="172" height="86" rx="4" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
      <text x="60" y="58" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">PINNED ACTION</text>
      <text x="60" y="80" font-family="Patrick Hand, cursive" font-size="14.5">• Send 3-screen sketch</text>
      <text x="60" y="98" font-family="Patrick Hand, cursive" font-size="14.5">• Book Legal 15m check</text>
    </g>
    <line x1="130" y1="24" x2="140" y2="34" stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>
    <circle cx="130" cy="22" r="8" fill="#EC4899" stroke="#141836" stroke-width="2"/>
    <circle cx="127" cy="19" r="2.2" fill="#FFF"/>
  `),
  mk('sb-spotlight-cone', 'callouts', '95. Stage Spotlight Cone', 'Hero Metric, Single Key Clause, Big Reveal', [
    'Draw a small angled lamp housing in the top-left corner.',
    'Cast a soft translucent Amber/Cyan trapezoid beam down onto your single hero stat.',
    'Leave everything outside the cone completely blank.'
  ], `
    <polygon points="48,26 218,108 118,108" fill="#FEF3C7" fill-opacity="0.65"/>
    <rect x="26" y="16" width="26" height="16" rx="4" transform="rotate(32 39 24)" fill="#141836"/>
    <ellipse cx="168" cy="108" rx="50" ry="9" fill="#F59E0B" fill-opacity="0.35"/>
    <text x="168" y="86" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700" fill="#141836">-42% DROP</text>
    <text x="168" y="102" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#B45309">THE ONE METRIC</text>
  `),
  mk('sb-wax-seal', 'callouts', '96. Scalloped Wax Seal Medal', 'Final Verdict, Mastered Concept, Certification', [
    'Draw two short ribbon tails hanging downward.',
    'Stamp a bumpy circular seal on top with a clean inner ring.',
    'Put a crisp ✓ or 2-letter monogram right in the center.'
  ], `
    <polygon points="110,74 126,74 122,116 114,106 106,116" fill="#EC4899" stroke="#141836" stroke-width="1.8"/>
    <polygon points="134,74 150,74 154,116 146,106 138,116" fill="#EC4899" stroke="#141836" stroke-width="1.8"/>
    <circle cx="130" cy="54" r="30" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.6"/>
    <circle cx="130" cy="54" r="22" fill="none" stroke="#BE185D" stroke-width="1.5" stroke-dasharray="3 2"/>
    <text x="130" y="60" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700" fill="#BE185D">DONE</text>
  `),
  mk('sb-price-tag', 'callouts', '97. Angled Cost / Value Tag', 'Unit Economics, Effort Estimates, Fees', [
    'Draw a sharp pentagon tag with a small punch hole and curled string.',
    'Write the exact currency or day-cost bold in the middle.',
    'Great for pinning estimates next to product sketches.'
  ], `
    <path d="M 38 64 C 18 46, 22 24, 48 34" fill="none" stroke="#141836" stroke-width="2"/>
    <polygon points="50,64 78,34 218,34 218,94 78,94" fill="#D1FAE5" stroke="#047857" stroke-width="2.4" stroke-linejoin="round"/>
    <circle cx="76" cy="64" r="6" fill="#FFF" stroke="#047857" stroke-width="2"/>
    <text x="148" y="62" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700" fill="#047857">2 DEV DAYS</text>
    <text x="148" y="82" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#141836">LOW EFFORT • HIGH LIFT</text>
  `),
  mk('sb-quote-marks', 'callouts', '98. Oversized Editorial Quote Marks', 'Book Pull-Quotes, Memorable Lines, Rules', [
    'Draw two chunky opening quotation marks in soft Cyan top-left.',
    'Write 2 short lines of handwritten script slightly indented beside them.',
    'Cite the speaker in quiet monospace below.'
  ], `
    <text x="22" y="70" font-family="Georgia, serif" font-size="76" font-weight="700" fill="#0EA5E9" fill-opacity="0.35">“</text>
    <text x="66" y="54" font-family="Patrick Hand, cursive" font-size="17" fill="#141836">Whitespace groups notes</text>
    <text x="66" y="78" font-family="Patrick Hand, cursive" font-size="17" fill="#141836">cleaner than black boxes.</text>
    <line x1="66" y1="92" x2="112" y2="92" stroke="#141836" stroke-width="2"/>
    <text x="120" y="96" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">STUDIO LAW</text>
  `),
  mk('sb-margin-flag', 'callouts', '99. Hanging Margin Flag Markers', 'Scanning Long Pages, Indexing Key Lines', [
    'Reserve the left 3 dot columns strictly for tiny pennant flags.',
    'Use 3 fixed symbols: ! (Risk), ? (Open Question), ★ (Key Rule).',
    'Never let body text drift left into the flag lane.'
  ], `
    <line x1="76" y1="14" x2="76" y2="116" stroke="#CBD5E1" stroke-width="1.6" stroke-dasharray="4 3"/>
    <polygon points="22,26 62,26 70,38 62,50 22,50" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.8"/>
    <text x="44" y="42" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">! TRAP</text>
    <polygon points="22,58 62,58 70,70 62,82 22,82" fill="#E0F2FE" stroke="#0369A1" stroke-width="1.8"/>
    <text x="44" y="74" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">? ASK</text>
    <polygon points="22,90 62,90 70,102 62,114 22,114" fill="#D1FAE5" stroke="#047857" stroke-width="1.8"/>
    <text x="44" y="106" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">★ RULE</text>
    <g stroke="#64748B" stroke-width="2" stroke-linecap="round"><line x1="92" y1="38" x2="230" y2="38"/><line x1="92" y1="70" x2="210" y2="70"/><line x1="92" y1="102" x2="222" y2="102"/></g>
  `),
  mk('sb-check-stamp', 'callouts', '100. 4-Dot Spaced-Recall Corner Stamp', 'Study Spreads, Memory Cadence (D1/D3/D7/D21)', [
    'Draw 4 tiny hollow circles in a crisp row top-right on any study spread.',
    'Label D1, D3, D7, D21 lightly underneath.',
    'Fill one circle each time you recall the page closed-book.'
  ], `
    <rect x="28" y="24" width="204" height="82" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <text x="130" y="46" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#525B7A">SPACED RECALL STAMP</text>
    ${[['D1', true], ['D3', true], ['D7', true], ['D21', false]].map(([lbl, done], i) => `
      <circle cx="${66 + i * 42}" cy="70" r="11" fill="${done ? '#10B981' : '#FFF'}" stroke="#141836" stroke-width="2"/>
      <text x="${66 + i * 42}" y="95" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">${lbl}</text>
    `).join('')}
  `),

  // ARROWS & DIVIDERS (101–120)
  mk('sb-arrow-ribbon', 'dividers', '101. 3D Curved Ribbon Arrow', 'Dramatic Transitions, Pivots, Turnarounds', [
    'Draw two parallel S-curves separated by 1 dot and cap with a wide arrowhead.',
    'Add a small shaded fold where the ribbon turns back.',
    'Fill lightly in Cyan for flow or Mint for growth.'
  ], `
    <path d="M 28 96 C 68 96, 78 44, 148 44 H 196 V 28 L 234 56 L 196 84 V 68 H 148 C 98 68, 92 112, 28 112 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M 28 96 C 68 96, 78 44, 148 44" fill="none" stroke="#0EA5E9" stroke-width="2.4"/>
  `),
  mk('sb-arrow-elbow', 'dividers', '102. 90° Orthogonal Elbow Connector', 'Architecture Diagrams, Tax Trees, Org Charts', [
    'Follow dot-grid rows strictly horizontal and vertical—no wobbly diagonals.',
    'Round or chamfer each 90° corner slightly.',
    'Finish with a small solid triangular tip.'
  ], `
    <rect x="20" y="24" width="54" height="30" rx="5" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
    <path d="M 74 39 H 128 V 88 H 180" fill="none" stroke="#141836" stroke-width="2.6" stroke-linejoin="round"/>
    <polygon points="176,81 188,88 176,95" fill="#141836"/>
    <rect x="188" y="72" width="54" height="30" rx="5" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
    <text x="130" y="34" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">CLEAN 90°</text>
  `),
  mk('sb-arrow-loop', 'dividers', '103. Dashed Retry / Escalation Arc', 'Error Handling, Feedback Loops, Revisions', [
    'Keep the happy-path line solid and straight along the top.',
    'Tuck one crisp dashed Magenta arc looping backward underneath.',
    'Label the trigger verb (e.g. RETRY / FIX) right inside the loop.'
  ], `
    <rect x="24" y="26" width="66" height="32" rx="6" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
    <rect x="170" y="26" width="66" height="32" rx="6" fill="#D1FAE5" stroke="#141836" stroke-width="2"/>
    <line x1="90" y1="42" x2="164" y2="42" stroke="#141836" stroke-width="2.6"/>
    <polygon points="160,36 170,42 160,48" fill="#141836"/>
    <path d="M 203 58 C 203 102, 57 102, 57 62" fill="none" stroke="#EC4899" stroke-width="2.4" stroke-dasharray="5 4"/>
    <polygon points="51,68 57,58 63,68" fill="#EC4899"/>
    <text x="130" y="108" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">↺ RETRY ON 504</text>
  `),
  mk('sb-arrow-split', 'dividers', '104. 1-to-3 Forked Splitter Arrow', 'Routing Rules, Multi-Channel Output, Triage', [
    'Pull one trunk line from left to center, then branch smoothly into 3 horizontal shelves.',
    'Color each branch by destination category.',
    'Label outputs directly at the three tips.'
  ], `
    <line x1="22" y1="65" x2="96" y2="65" stroke="#141836" stroke-width="3"/>
    <path d="M 96 65 C 122 65, 122 28, 152 28 H 184" fill="none" stroke="#0EA5E9" stroke-width="2.6"/>
    <line x1="96" y1="65" x2="184" y2="65" stroke="#10B981" stroke-width="2.6"/>
    <path d="M 96 65 C 122 65, 122 102, 152 102 H 184" fill="none" stroke="#EC4899" stroke-width="2.6"/>
    <g font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">
      <text x="192" y="32" fill="#0369A1">AUTO</text>
      <text x="192" y="69" fill="#047857">REVIEW</text>
      <text x="192" y="106" fill="#BE185D">BLOCK</text>
    </g>
  `),
  mk('sb-arrow-merge', 'dividers', '105. 3-to-1 Converging Merge Arrow', 'Synthesis, Multi-Source Data, Consensus', [
    'Start 3 separate thin input lines on the left edge.',
    'Blend them into one thicker unified output trunk on the right.',
    'Emphasize the combined result with a bold arrowhead.'
  ], `
    <path d="M 28 28 H 84 C 110 28, 110 65, 136 65" fill="none" stroke="#0EA5E9" stroke-width="2.2"/>
    <line x1="28" y1="65" x2="136" y2="65" stroke="#7C3AED" stroke-width="2.2"/>
    <path d="M 28 102 H 84 C 110 102, 110 65, 136 65" fill="none" stroke="#F59E0B" stroke-width="2.2"/>
    <line x1="136" y1="65" x2="218" y2="65" stroke="#141836" stroke-width="4.2"/>
    <polygon points="212,55 234,65 212,75" fill="#141836"/>
    <text x="182" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">UNIFIED</text>
  `),
  mk('sb-arrow-swap', 'dividers', '106. Bidirectional Trade-Off Arrows', 'Sync Flows, Conversations, Reciprocity', [
    'Draw two parallel horizontal arrows spaced 1 dot apart pointing opposite ways.',
    'Color top arrow Cyan (Request) and bottom arrow Mint (Response).',
    'Label each direction right along its shaft.'
  ], `
    <line x1="36" y1="48" x2="218" y2="48" stroke="#0EA5E9" stroke-width="3"/>
    <polygon points="212,40 228,48 212,56" fill="#0EA5E9"/>
    <line x1="224" y1="84" x2="42" y2="84" stroke="#10B981" stroke-width="3"/>
    <polygon points="48,76 32,84 48,92" fill="#10B981"/>
    <text x="130" y="36" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">REQUEST →</text>
    <text x="130" y="106" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">← RESPONSE</text>
  `),
  mk('sb-arrow-block', 'dividers', '107. Hollow Block Outline Arrow', 'Major Section Flow, High-Impact Step', [
    'Draw a thick rectangular shaft flared into a chunky triangular head.',
    'Shade just the bottom rim in Cool Grey or write a verb right inside the shaft.',
    'Reads loudly from across a room on whiteboards.'
  ], `
    <polygon points="28,48 164,48 164,26 232,65 164,104 164,82 28,82" fill="#E0F2FE" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>
    <text x="114" y="70" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0369A1">DISTILL</text>
  `),
  mk('sb-arrow-chevron', 'dividers', '108. 3-Step Chevron Pipeline Strip', 'Process Stages, Linear Sequences, Phases', [
    'Draw 3 interlocking notched pentagons (chevrons) sitting snugly side by side.',
    'Step color saturation upward from pale paper → Cyan → bold Mint.',
    'Limit text inside each chevron to 1–2 words.'
  ], `
    <polygon points="18,36 86,36 102,65 86,94 18,94 34,65" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
    <polygon points="94,36 162,36 178,65 162,94 94,94 110,65" fill="#E0F2FE" stroke="#0369A1" stroke-width="2"/>
    <polygon points="170,36 234,36 250,65 234,94 170,94 186,65" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
    <g font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" text-anchor="middle">
      <text x="60" y="69">1. RAW</text><text x="136" y="69" fill="#0369A1">2. CLEAN</text><text x="210" y="69" fill="#047857">3. SHIP</text>
    </g>
  `),
  mk('sb-arrow-dash-curve', 'dividers', '109. Floating Annotation Pointer Arc', 'Labeling Diagrams, Margin Notes, Callouts', [
    'Sweep a gentle curved line from your margin note straight to the target part.',
    'Finish with a small open V-tip (two crisp strokes, no heavy filled triangle).',
    'Keeps diagrams airy and uncluttered.'
  ], `
    <rect x="24" y="42" width="76" height="54" rx="8" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
    <path d="M 164 36 Q 130 24 106 54" fill="none" stroke="#EC4899" stroke-width="2.2" stroke-linecap="round"/>
    <polyline points="105,44 105,55 116,53" fill="none" stroke="#EC4899" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="172" y="42" font-family="Patrick Hand, cursive" font-size="15" fill="#BE185D">Notice the</text>
    <text x="172" y="60" font-family="Patrick Hand, cursive" font-size="15" fill="#BE185D">1-dot pad!</text>
  `),
  mk('sb-arrow-stop', 'dividers', '110. Dead-End Blocker Wall Arrow', 'Constraints, Rejected Paths, Firebreaks', [
    'Draw a straight horizontal arrow slamming into a thick vertical Magenta stop bar.',
    'Add 3 tiny diagonal hatch marks behind the wall.',
    'Label the blocker clearly on the right.'
  ], `
    <line x1="26" y1="65" x2="146" y2="65" stroke="#141836" stroke-width="3"/>
    <polygon points="140,58 152,65 140,72" fill="#141836"/>
    <line x1="158" y1="30" x2="158" y2="100" stroke="#BE185D" stroke-width="5" stroke-linecap="round"/>
    <text x="172" y="62" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">NO WRITE</text>
    <text x="172" y="78" font-family="Patrick Hand, cursive" font-size="13.5">HITL gate</text>
  `),
  mk('sb-div-scissors', 'dividers', '111. Dashed Scissors Cut-Off Divider', 'Year-End Accruals, Separable Verbs, Scope Cuts', [
    'Draw a crisp horizontal dashed rule across the full width of the column.',
    'Sketch tiny minimal scissors at the left end.',
    'Perfect visual divider for "in scope above / out of scope below."'
  ], `
    <circle cx="34" cy="54" r="7" fill="none" stroke="#BE185D" stroke-width="2.2"/>
    <circle cx="34" cy="76" r="7" fill="none" stroke="#BE185D" stroke-width="2.2"/>
    <line x1="40" y1="57" x2="64" y2="70" stroke="#141836" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="40" y1="73" x2="64" y2="60" stroke="#141836" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="72" y1="65" x2="240" y2="65" stroke="#BE185D" stroke-width="2" stroke-dasharray="6 5"/>
    <text x="156" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">CUT-OFF LINE</text>
  `),
  mk('sb-div-double-diamond', 'dividers', '112. Editorial Diamond Section Rule', 'Book Chapter Breaks, Calm Page Dividers', [
    'Draw two clean horizontal lines meeting a small filled diamond right in the middle.',
    'Flank the center diamond with two tiny dots.',
    'Instant printed-book polish in 3 seconds.'
  ], `
    <line x1="20" y1="65" x2="108" y2="65" stroke="#141836" stroke-width="1.8"/>
    <line x1="152" y1="65" x2="240" y2="65" stroke="#141836" stroke-width="1.8"/>
    <circle cx="114" cy="65" r="2.5" fill="#0EA5E9"/>
    <polygon points="130,55 140,65 130,75 120,65" fill="#141836"/>
    <circle cx="146" cy="65" r="2.5" fill="#0EA5E9"/>
    <text x="130" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">CLEAN SECTION BREAK</text>
  `),
  mk('sb-div-wave', 'dividers', '113. Smooth Sine-Wave Separator', 'Topic Shifts, Gentle Sub-Sections, Language Notes', [
    'Pull one relaxed continuous sine wave across the width of the column.',
    'Use a soft Cyan or Cool Grey pen so it separates without shouting.',
    'Works nicely between theory and worked examples.'
  ], `
    <path d="M 20 65 Q 40 48 60 65 T 100 65 T 140 65 T 180 65 T 220 65 T 240 65" fill="none" stroke="#0EA5E9" stroke-width="2.8" stroke-linecap="round"/>
    <text x="130" y="40" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">ABOVE // RULE</text>
    <text x="130" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#0369A1">BELOW // EXAMPLE</text>
  `),
  mk('sb-div-brace', 'dividers', '114. Grouping Curly Brace', 'Summarizing 3 Bullets Into 1 Takeaway', [
    'Draw a vertical curly brace `{` or `}` spanning 3–4 stacked bullet rows.',
    'Write the single crisp synthesis conclusion right at its center point.',
    'Cuts clutter compared to drawing 3 separate converging arrows.'
  ], `
    <g font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">
      <text x="26" y="38">• Sample CSV</text>
      <text x="26" y="68">• Read-only OAuth</text>
      <text x="26" y="98">• Retry banner</text>
    </g>
    <path d="M 142 26 C 154 26, 150 62, 164 65 C 150 68, 154 104, 142 104" fill="none" stroke="#7C3AED" stroke-width="2.8" stroke-linecap="round"/>
    <text x="174" y="62" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">Q4 FIX</text>
    <text x="174" y="78" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">(1 WEEK)</text>
  `),
  mk('sb-div-pill-rule', 'dividers', '115. Centered Pill-Badge Rule', 'Time Stamps, Phase Labels, Part Headers', [
    'Draw a thin full-width horizontal rule across the page.',
    'Interrupt the exact center with a crisp rounded pill label.',
    'Keeps vertical streams organized without full banners.'
  ], `
    <line x1="18" y1="65" x2="242" y2="65" stroke="#CBD5E1" stroke-width="2"/>
    <rect x="74" y="50" width="112" height="30" rx="15" fill="#141836"/>
    <text x="130" y="69" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#00D4FF">PHASE 02 // BUILD</text>
  `),
  mk('sb-div-railroad', 'dividers', '116. Parallel Railroad Track Divider', 'Strict Boundaries, Before/After Divides', [
    'Pull two tight parallel lines spaced 4mm apart.',
    'Add crisp evenly spaced cross-ties every 2 dot cells.',
    'Looks tactile and architectural on technical pages.'
  ], `
    <line x1="20" y1="58" x2="240" y2="58" stroke="#141836" stroke-width="2.2"/>
    <line x1="20" y1="72" x2="240" y2="72" stroke="#141836" stroke-width="2.2"/>
    ${Array.from({ length: 11 }, (_, i) => `<line x1="${30 + i * 20}" y1="54" x2="${30 + i * 20}" y2="76" stroke="#141836" stroke-width="2"/>`).join('')}
  `),
  mk('sb-div-dots', 'dividers', '117. Minimal 3-Dot Asterism Break', 'Quiet Prose Pauses, Journal Shifts', [
    'Stamp 3 bold colored dots centered with generous blank paper above and below.',
    'Zero lines needed—lets quiet pages stay calm and open.'
  ], `
    <circle cx="104" cy="65" r="5" fill="#0EA5E9"/>
    <circle cx="130" cy="65" r="5" fill="#141836"/>
    <circle cx="156" cy="65" r="5" fill="#EC4899"/>
    <text x="130" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">QUIET PAUSE</text>
  `),
  mk('sb-div-zigzag', 'dividers', '118. Jagged Tension / Conflict Line', 'Friction Points, Disputes, Disagreements', [
    'Draw a sharp sawtooth zigzag stroke in Magenta between two opposing sides.',
    'Immediately signals tension or an unresolved clash without writing "CONFLICT".'
  ], `
    <polyline points="24,65 44,48 64,82 84,48 104,82 124,48 144,82 164,48 184,82 204,48 224,82 236,65" fill="none" stroke="#EC4899" stroke-width="2.8" stroke-linejoin="round"/>
    <text x="130" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">FRICTION / TENSION</text>
  `),
  mk('sb-div-anchor-ticks', 'dividers', '119. Architectural Crop-Mark Corners', 'Framing Without Full Boxes, Airy Highlights', [
    'Draw ONLY four tiny L-shaped corner brackets around a key paragraph.',
    'Skip the side walls entirely so the quote floats cleanly on the dot grid.'
  ], `
    <g fill="none" stroke="#141836" stroke-width="2.6" stroke-linecap="round">
      <polyline points="34,42 34,26 52,26"/><polyline points="208,26 226,26 226,42"/>
      <polyline points="34,88 34,104 52,104"/><polyline points="208,104 226,104 226,88"/>
    </g>
    <text x="130" y="60" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" fill="#141836">Open corners frame ideas</text>
    <text x="130" y="80" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" fill="#0369A1">without trapping them.</text>
  `),
  mk('sb-div-step-numbers', 'dividers', '120. Connected Numbered Step Rail', '3-Step Recipes, Quick Sequences, Checklists', [
    'Draw 3 bold dark circles linked by a thin horizontal line.',
    'Number them 1, 2, 3 in crisp white and drop short captions underneath.'
  ], `
    <line x1="56" y1="54" x2="204" y2="54" stroke="#CBD5E1" stroke-width="3"/>
    ${[[56, '1', 'DRAFT', '#0EA5E9'], [130, '2', 'TEST', '#7C3AED'], [204, '3', 'SHIP', '#10B981']].map(([x, n, lbl, col]) => `
      <circle cx="${x}" cy="54" r="16" fill="${col}" stroke="#141836" stroke-width="2.2"/>
      <text x="${x}" y="59" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#FFF">${n}</text>
      <text x="${x}" y="90" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">${lbl}</text>
    `).join('')}
  `)
];
