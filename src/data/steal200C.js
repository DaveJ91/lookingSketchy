/* =========================================================================
   STEAL BOOK EXPANSION C: GRAPHICS 121–160
   +20 Cards & Stationery (121–140), +20 Micro-Charts & Data (141–160)
   ========================================================================= */

const mk = (id, cat, name, use, recipe, body) => ({
  id, cat, name, use, recipe,
  svg: `<svg viewBox="0 0 260 130">${body}</svg>`
});

export const STEAL_200_C = [
  // CARDS & STATIONERY (121–140)
  mk('sb-sticky-curl', 'containers', '121. Curled-Corner Sticky Note', 'Side Thoughts, Margin Caveats, Open Risks', [
    'Draw a warm pale Amber square and clip the bottom-right corner inward.',
    'Tuck a small shaded folded triangle at the cut corner.',
    'Add a soft curved shadow beneath the lifted corner.'
  ], `
    <path d="M 68 18 H 192 V 88 L 166 112 H 68 Z" fill="#FEF3C7" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
    <polygon points="166,112 166,88 192,88" fill="#FDE68A" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>
    <text x="84" y="46" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#B45309">EDGE CASE</text>
    <text x="84" y="68" font-family="Patrick Hand, cursive" font-size="14.5">Check Safari</text>
    <text x="84" y="86" font-family="Patrick Hand, cursive" font-size="14.5">date picker!</text>
  `),
  mk('sb-index-card', 'containers', '122. Ruled Zettelkasten Index Card', 'Atomic Notes, Literature Cards, Definitions', [
    'Draw a wide crisp card with one bold Magenta header rule near the top.',
    'Pull 3 faint Cyan horizontal body lines beneath it.',
    'Stamp a compact ID code in the top-right corner.'
  ], `
    <rect x="26" y="18" width="208" height="94" rx="4" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
    <line x1="26" y1="42" x2="234" y2="42" stroke="#EC4899" stroke-width="1.8"/>
    <line x1="26" y1="64" x2="234" y2="64" stroke="#BAE6FD" stroke-width="1.2"/>
    <line x1="26" y1="86" x2="234" y2="86" stroke="#BAE6FD" stroke-width="1.2"/>
    <text x="38" y="34" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">VON RESTORFF EFFECT</text>
    <text x="222" y="34" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="8" fill="#BE185D">#14b</text>
    <text x="38" y="59" font-family="Patrick Hand, cursive" font-size="14.5">Only 1 item stands out when</text>
    <text x="38" y="81" font-family="Patrick Hand, cursive" font-size="14.5">the rest stay calm monochrome.</text>
  `),
  mk('sb-clipboard', 'containers', '123. Top-Clipped Checklist Board', 'Pre-Flight Checks, QA Lists, Launch Gates', [
    'Draw an upright rounded board with a small metal clip centered at top.',
    'List 3 crisp checkbox items inside using square ticks.',
    'Tint the board frame light Cool Grey or Amber.'
  ], `
    <rect x="64" y="20" width="132" height="98" rx="8" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>
    <rect x="74" y="30" width="112" height="78" rx="3" fill="#FFF" stroke="#141836" stroke-width="1.5"/>
    <rect x="104" y="12" width="52" height="16" rx="4" fill="#141836"/>
    <g font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">
      <text x="84" y="52" fill="#047857">☑ 0 console errs</text>
      <text x="84" y="74" fill="#047857">☑ Mobile check</text>
      <text x="84" y="96" fill="#BE185D">☐ Legal sign-off</text>
    </g>
  `),
  mk('sb-envelope', 'containers', '124. Sealed Envelope / Message Packet', 'Webhooks, Emails, Client Deliveries', [
    'Draw a clean horizontal rectangle and drop a V-flap from top corners to center.',
    'Add two faint diagonal crease lines to the bottom corners.',
    'Stamp a colored circular wax dot right at the flap tip.'
  ], `
    <rect x="44" y="26" width="172" height="82" rx="6" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
    <polyline points="46,28 130,74 214,28" fill="none" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
    <line x1="46" y1="106" x2="104" y2="62" stroke="#CBD5E1" stroke-width="1.6"/>
    <line x1="214" y1="106" x2="156" y2="62" stroke="#CBD5E1" stroke-width="1.6"/>
    <circle cx="130" cy="74" r="10" fill="#EC4899" stroke="#141836" stroke-width="1.8"/>
    <text x="130" y="77" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#FFF">POST</text>
  `),
  mk('sb-paperclip-note', 'containers', '125. Paperclipped Attachment Slip', 'Supporting Proof, Exhibits, Footnotes', [
    'Draw a crisp tall slip of paper tucked slightly behind a main card.',
    'Loop a clean U-shaped paperclip over the top-left edge.',
    'Write the exact exhibit or source URL inside.'
  ], `
    <rect x="48" y="24" width="164" height="88" rx="5" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <path d="M 72 14 V 44 A 6 6 0 0 0 84 44 V 20 A 9 9 0 0 0 66 20 V 48" fill="none" stroke="#0EA5E9" stroke-width="2.8" stroke-linecap="round"/>
    <text x="98" y="48" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">EXHIBIT A // PROOF</text>
    <text x="64" y="76" font-family="Patrick Hand, cursive" font-size="14.5">VIES timestamp screenshot</text>
    <text x="64" y="96" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">ARCHIVE: 10 YEARS</text>
  `),
  mk('sb-spiral-pad', 'containers', '126. Top-Bound Spiral Steno Pad', 'Meeting Notes, Quick Interview Scripts', [
    'Draw a vertical rectangle topped with 5 tiny wire spiral loops.',
    'Add a clean center vertical line if taking 2-column Q&A notes.',
    'Shade the right edge lightly for thickness.'
  ], `
    <rect x="64" y="24" width="132" height="94" rx="5" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
    ${[80, 105, 130, 155, 180].map(x => `<path d="M ${x} 14 C ${x-5} 14, ${x-5} 30, ${x} 30" fill="none" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>`).join('')}
    <line x1="130" y1="36" x2="130" y2="112" stroke="#BAE6FD" stroke-width="1.6"/>
    <text x="74" y="54" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">ASK</text>
    <text x="140" y="54" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">HEARD</text>
    <line x1="74" y1="72" x2="120" y2="72" stroke="#CBD5E1" stroke-width="2"/>
    <line x1="140" y1="72" x2="186" y2="72" stroke="#CBD5E1" stroke-width="2"/>
  `),
  mk('sb-tear-sheet', 'containers', '127. Torn-Edge Notebook Fragment', 'Raw Excerpts, Draft Quotes, Clipped Rules', [
    'Draw three straight rectangle edges and finish the bottom with a jagged torn sawtooth.',
    'Tint very faintly in warm parchment.',
    'Use when quoting raw statutory or book text verbatim.'
  ], `
    <polygon points="34,18 226,18 226,98 206,110 186,98 166,110 146,98 126,110 106,98 86,110 66,98 46,110 34,98" fill="#FFFDF5" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
    <text x="48" y="44" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#B45309">EXCERPT // § 3a UStG</text>
    <text x="48" y="68" font-family="Patrick Hand, cursive" font-size="14.5">"Place of supply for B2B services</text>
    <text x="48" y="86" font-family="Patrick Hand, cursive" font-size="14.5">is where the recipient sits."</text>
  `),
  mk('sb-dogear-page', 'containers', '128. Dog-Eared Document Sheet', 'PDF Reports, Memos, Deliverables', [
    'Draw an upright page with the top-right corner folded neatly down.',
    'Draw 3 short horizontal skeleton lines for prose and one Mint stamp at bottom.',
    'Universal 3-second icon for any file or spec.'
  ], `
    <path d="M 78 14 H 158 L 182 38 V 114 H 78 Z" fill="#FFF" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
    <polygon points="158,14 158,38 182,38" fill="#E0F2FE" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>
    <text x="92" y="42" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">SPEC.MD</text>
    <g stroke="#94A3B8" stroke-width="2.4" stroke-linecap="round"><line x1="92" y1="58" x2="164" y2="58"/><line x1="92" y1="74" x2="152" y2="74"/><line x1="92" y1="90" x2="160" y2="90"/></g>
  `),
  mk('sb-accordion-fold', 'containers', '129. 3-Panel Z-Fold Brochure', '3-Part Summaries, Before/During/After', [
    'Draw 3 connected vertical panels tilting slightly in alternating zig-zag perspective.',
    'Shade the middle recessed panel light Cool Grey so the fold reads 3D.',
    'Give each panel one clear numbered pillar.'
  ], `
    <polygon points="24,24 94,16 94,106 24,114" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <polygon points="94,16 166,26 166,116 94,106" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>
    <polygon points="166,26 236,16 236,106 166,116" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
    <g font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" text-anchor="middle">
      <text x="59" y="66">01 PREP</text><text x="130" y="68" fill="#0369A1">02 RUN</text><text x="201" y="66" fill="#047857">03 CHECK</text>
    </g>
  `),
  mk('sb-flashcard-flip', 'containers', '130. Front / Back Flip Flashcard', 'German Vocab, Active Recall, Exam Q&A', [
    'Draw two slightly overlapping index cards linked by a curved flip arrow at top.',
    'Keep Front minimal (Prompt / Icon only) and Back crisp (Answer + Example).'
  ], `
    <rect x="20" y="34" width="96" height="72" rx="7" fill="#E0F2FE" stroke="#0369A1" stroke-width="2"/>
    <text x="68" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">FRONT</text>
    <text x="68" y="84" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">um·FAHREN?</text>
    <path d="M 110 28 Q 130 12 150 28" fill="none" stroke="#EC4899" stroke-width="2.4"/>
    <polygon points="146,29 154,30 151,21" fill="#EC4899"/>
    <rect x="144" y="34" width="96" height="72" rx="7" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <text x="192" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">BACK</text>
    <text x="192" y="84" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">drive around</text>
  `),
  mk('sb-open-book', 'containers', '131. Open Two-Page Spread Sketch', 'Layout Planning, Book Summaries, Comparisons', [
    'Draw two slightly arched pages meeting at a center vertical spine.',
    'Add 2 thin stacked bottom page lines to imply thickness.',
    'Use miniature wireframe blocks inside to pre-plan any A5 spread!'
  ], `
    <path d="M 24 28 Q 77 18 130 30 Q 183 18 236 28 V 104 Q 183 94 130 106 Q 77 94 24 104 Z" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
    <line x1="130" y1="30" x2="130" y2="106" stroke="#141836" stroke-width="2"/>
    <rect x="38" y="42" width="76" height="20" rx="3" fill="#E0F2FE"/>
    <rect x="38" y="70" width="76" height="20" rx="3" fill="#EEF2FC"/>
    <rect x="146" y="42" width="76" height="48" rx="4" fill="#D1FAE5" stroke="#047857" stroke-width="1.4"/>
  `),
  mk('sb-ledger-card', 'containers', '132. Double-Ruled Accounting Slip', 'Quick Cost Totals, Tax Checks, Budgets', [
    'Draw a neat white slip with right-aligned monospace numbers.',
    'Separate subtotal and final total with a single rule above and double Mint rule below.'
  ], `
    <rect x="44" y="14" width="172" height="102" rx="5" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
    <g font-family="IBM Plex Mono, monospace" font-size="10.5">
      <text x="58" y="38">Net Invoice</text><text x="202" y="38" text-anchor="end">€1,000</text>
      <text x="58" y="58" fill="#BE185D">+ VAT 19%</text><text x="202" y="58" text-anchor="end" fill="#BE185D">€190</text>
      <line x1="56" y1="68" x2="204" y2="68" stroke="#141836" stroke-width="1.4"/>
      <text x="58" y="88" font-weight="700" fill="#047857">Gross Total</text><text x="202" y="88" text-anchor="end" font-weight="700" fill="#047857">€1,190</text>
      <line x1="56" y1="96" x2="204" y2="96" stroke="#047857" stroke-width="1.5"/>
      <line x1="56" y1="100" x2="204" y2="100" stroke="#047857" stroke-width="1.5"/>
    </g>
  `),
  mk('sb-calendar-tear', 'containers', '133. Desk Tear-Off Calendar Block', 'Deadlines, Launch Dates, Tax Filing Days', [
    'Draw a chunky square block with a bold Magenta top binding strip and 2 binder rings.',
    'Letter the month in white uppercase and the day number oversized in Indigo.'
  ], `
    <rect x="78" y="20" width="104" height="96" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
    <rect x="78" y="20" width="104" height="28" rx="6" fill="#EC4899" stroke="#141836" stroke-width="2"/>
    <circle cx="104" cy="20" r="4" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
    <circle cx="156" cy="20" r="4" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
    <text x="130" y="39" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#FFF">MAI // FRIST</text>
    <text x="130" y="95" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="40" font-weight="700" fill="#141836">10</text>
  `),
  mk('sb-id-badge', 'containers', '134. Lanyard Persona / Role Badge', 'User Personas, Stakeholders, Swimlane Owners', [
    'Draw a vertical rounded ID card with a small slot punched at top-center.',
    'Put a simple circle-and-shoulders portrait left and 2-line role summary right.'
  ], `
    <rect x="40" y="20" width="180" height="94" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
    <rect x="112" y="26" width="36" height="6" rx="3" fill="#CBD5E1"/>
    <circle cx="78" cy="64" r="14" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
    <path d="M 58 96 C 58 80, 98 80, 98 96" fill="#0EA5E9" fill-opacity="0.35" stroke="#141836" stroke-width="2"/>
    <text x="112" y="64" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">OPS ADMIN</text>
    <text x="112" y="84" font-family="Patrick Hand, cursive" font-size="13.5" fill="#525B7A">Fears write-scope</text>
  `),
  mk('sb-taped-card', 'containers', '135. Washi-Taped Evidence Card', 'Quotes, Screenshots, Highlighted Rules', [
    'Draw a crisp clean white card with zero heavy drop shadow.',
    'Cross two diagonal translucent pastel highlighter "tape strips" over opposite corners.'
  ], `
    <rect x="44" y="26" width="172" height="78" rx="4" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <rect x="28" y="20" width="44" height="14" rx="2" transform="rotate(-32 50 27)" fill="#10B981" fill-opacity="0.48"/>
    <rect x="188" y="92" width="44" height="14" rx="2" transform="rotate(-32 210 99)" fill="#0EA5E9" fill-opacity="0.48"/>
    <text x="130" y="60" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">PINNED EVIDENCE</text>
    <text x="130" y="82" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15">4 of 6 users hesitated at Step 2</text>
  `),
  mk('sb-chamfer-cyber', 'containers', '136. Double-Bevel Tech Spec Card', 'AI Architecture, API Contracts, System Specs', [
    'Draw a rectangle with clipped 45° corners top-left and bottom-right.',
    'Add one thick vertical accent bar flush inside the left edge.',
    'Shade bottom-right with a single Cool Grey pass.'
  ], `
    <polygon points="34,24 236,24 236,96 220,112 24,112 24,38" fill="#CBD5E1"/>
    <polygon points="28,18 230,18 230,90 214,106 18,106 18,32" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <rect x="28" y="32" width="6" height="60" rx="2" fill="#0EA5E9"/>
    <text x="46" y="48" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">CONTRACT // v2.1</text>
    <text x="46" y="72" font-family="Patrick Hand, cursive" font-size="14.5">Timeout = 8s • Idempotent retry</text>
    <text x="46" y="90" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">OWNER: PLATFORM TEAM</text>
  `),
  mk('sb-stack-cards', 'containers', '137. 3-Deep Stacked Deck of Cards', 'Backlogs, Batches, Queues, Multi-Item Sets', [
    'Draw one crisp front card, then echo two shifted L-edges stepping up and right behind it.',
    'Instantly implies "many items" without drawing every single one.'
  ], `
    <rect x="64" y="14" width="154" height="82" rx="7" fill="#E0F2FE" stroke="#141836" stroke-width="1.8"/>
    <rect x="52" y="24" width="154" height="82" rx="7" fill="#EEF2FC" stroke="#141836" stroke-width="1.8"/>
    <rect x="40" y="34" width="154" height="82" rx="7" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
    <text x="117" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">142 ITEMS</text>
    <text x="117" y="90" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#525B7A">Queued for nightly sync</text>
  `),
  mk('sb-split-card', 'containers', '138. Two-Tone Split Header Card', 'Rule + Exception, Problem + Fix, Term + Gloss', [
    'Draw one rounded box and split it cleanly horizontally 40/60.',
    'Fill the top band solid Indigo with crisp white uppercase label; keep bottom airy white.'
  ], `
    <rect x="30" y="18" width="200" height="94" rx="9" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <path d="M 30 27 A 9 9 0 0 1 39 18 H 221 A 9 9 0 0 1 230 27 V 52 H 30 Z" fill="#141836"/>
    <text x="46" y="40" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#00D4FF">THE 30-SECOND RULE</text>
    <text x="46" y="76" font-family="Patrick Hand, cursive" font-size="15">Cap study icons at 30 seconds</text>
    <text x="46" y="96" font-family="Patrick Hand, cursive" font-size="15">so sketching never stalls study.</text>
  `),
  mk('sb-notebook-tab', 'containers', '139. Side-Tabbed Chapter Divider Card', 'Section Dividers, Topic Indexing, Edge Tabs', [
    'Draw a clean box with a bold colored thumb-tab protruding out the right wall.',
    'Write a 2-letter category code vertically or horizontally on the tab.'
  ], `
    <rect x="206" y="30" width="32" height="36" rx="5" fill="#EC4899" stroke="#141836" stroke-width="2"/>
    <text x="224" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#FFF">UX</text>
    <rect x="26" y="20" width="184" height="90" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
    <text x="42" y="50" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">EDGE-TAB INDEX</text>
    <text x="42" y="76" font-family="Patrick Hand, cursive" font-size="14.5">Color-code outer margin</text>
    <text x="42" y="94" font-family="Patrick Hand, cursive" font-size="14.5">tabs to find topics fast.</text>
  `),
  mk('sb-dashed-placeholder', 'containers', '140. Dashed "Open Slot" Card', 'Unknowns, Parking Lot, Future Scope', [
    'Draw a clean rounded box using an even dashed line instead of solid ink.',
    'Put a crisp `+` or `?` in the center so readers immediately recognize an open hypothesis.'
  ], `
    <rect x="34" y="20" width="192" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" stroke-width="2.2" stroke-dasharray="6 5"/>
    <circle cx="130" cy="54" r="14" fill="#FFF" stroke="#64748B" stroke-width="1.8"/>
    <text x="130" y="60" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700" fill="#64748B">?</text>
    <text x="130" y="90" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#64748B">PARKING LOT // PHASE 2</text>
  `),

  // MICRO-CHARTS & DATA (141–160)
  mk('sb-sparkline', 'charts', '141. Inline KPI Sparkline Tile', 'Weekly Metrics, Revenue Trends, Latency', [
    'Write the big bold current number on the left.',
    'Plot a crisp 7-point line right beside it and highlight ONLY the final dot in Mint or Magenta.'
  ], `
    <rect x="20" y="20" width="220" height="90" rx="9" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <text x="34" y="44" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#525B7A">ACTIVATION</text>
    <text x="34" y="78" font-family="IBM Plex Mono, monospace" font-size="24" font-weight="700" fill="#047857">64%</text>
    <text x="34" y="96" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#047857">+14pp MoM</text>
    <polyline points="116,84 134,76 152,80 170,62 188,66 206,48 222,38" fill="none" stroke="#10B981" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="222" cy="38" r="5" fill="#10B981" stroke="#141836" stroke-width="1.6"/>
  `),
  mk('sb-dumbbell', 'charts', '142. Before → After Dumbbell Gap', 'Time Saved, Cost Drop, Benchmark Lift', [
    'Plot two dots on one horizontal rail: Cool Grey (Before) and Mint/Cyan (After).',
    'Connect them with a crisp horizontal bar and label the delta right above.'
  ], `
    <text x="24" y="34" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">REVIEW TIME PER MEMO</text>
    <line x1="24" y1="68" x2="236" y2="68" stroke="#E2E8F0" stroke-width="2"/>
    <line x1="68" y1="68" x2="206" y2="68" stroke="#0EA5E9" stroke-width="5" stroke-linecap="round"/>
    <circle cx="206" cy="68" r="10" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
    <circle cx="68" cy="68" r="10" fill="#10B981" stroke="#141836" stroke-width="2"/>
    <text x="206" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A">45m</text>
    <text x="68" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">6m ★</text>
    <text x="137" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">-87%</text>
  `),
  mk('sb-bullet-chart', 'charts', '143. Tufte Target Bullet Bar', 'KPI vs. Target, Quota Tracking, Budgets', [
    'Draw a pale grey range track showing max capacity.',
    'Overlay a darker inner Cyan bar for actual progress and drop a sharp vertical Magenta target tick.'
  ], `
    <text x="24" y="38" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">Q4 PIPELINE VS TARGET</text>
    <rect x="24" y="52" width="212" height="28" rx="4" fill="#E2E8F0"/>
    <rect x="24" y="58" width="148" height="16" rx="3" fill="#0EA5E9"/>
    <line x1="192" y1="44" x2="192" y2="88" stroke="#BE185D" stroke-width="3.6" stroke-linecap="round"/>
    <text x="172" y="106" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">ACTUAL: 74%</text>
    <text x="198" y="106" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">GOAL</text>
  `),
  mk('sb-waffle-grid', 'charts', '144. 5×5 Mini Waffle Share Grid', 'Percentages, Portfolio Split, Survey Results', [
    'Draw a tidy 5×5 block of 25 tiny squares (each square = 4%).',
    'Fill the target share in Cyan or Magenta—instantly easier to judge by eye than a pie chart!'
  ], `
    ${Array.from({ length: 25 }, (_, i) => {
      const c = i % 5, r = Math.floor(i / 5);
      return `<rect x="${26 + c * 18}" y="${20 + r * 18}" width="14" height="14" rx="2.5" fill="${i < 17 ? '#0EA5E9' : '#E2E8F0'}" stroke="#141836" stroke-width="1.2"/>`;
    }).join('')}
    <text x="132" y="56" font-family="IBM Plex Mono, monospace" font-size="22" font-weight="700" fill="#0369A1">68%</text>
    <text x="132" y="76" font-family="Patrick Hand, cursive" font-size="14">17 of 25 squares</text>
    <text x="132" y="94" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">(1 CELL = 4%)</text>
  `),
  mk('sb-slope-chart', 'charts', '145. Two-Point Slope Comparison', 'Year-over-Year Rank Shifts, Cohort Changes', [
    'Draw two vertical axes labeled BEFORE (left) and AFTER (right).',
    'Connect each category straight across—highlight the single rising winner in Mint and dim the rest grey.'
  ], `
    <line x1="66" y1="22" x2="66" y2="108" stroke="#CBD5E1" stroke-width="2"/>
    <line x1="194" y1="22" x2="194" y2="108" stroke="#CBD5E1" stroke-width="2"/>
    <line x1="66" y1="36" x2="194" y2="54" stroke="#94A3B8" stroke-width="2"/>
    <line x1="66" y1="62" x2="194" y2="82" stroke="#94A3B8" stroke-width="2"/>
    <line x1="66" y1="92" x2="194" y2="30" stroke="#10B981" stroke-width="3.4"/>
    <circle cx="66" cy="92" r="4.5" fill="#10B981"/><circle cx="194" cy="30" r="5" fill="#10B981"/>
    <text x="58" y="96" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">CSV</text>
    <text x="202" y="34" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">#1 ★</text>
    <text x="66" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8">Q3</text>
    <text x="194" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8">Q4</text>
  `),
  mk('sb-stacked-100', 'charts', '146. Single 100% Stacked Bar', 'Time Allocation, Budget Mix, Color 60-30-10', [
    'Draw one wide horizontal bar divided cleanly into 3 proportional segments.',
    'Label each percentage directly inside or above—zero distant legend needed.'
  ], `
    <text x="22" y="36" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">PAGE COLOR BUDGET (60 / 30 / 10)</text>
    <rect x="22" y="48" width="130" height="34" rx="4" fill="#FAFBFD" stroke="#141836" stroke-width="2"/>
    <rect x="152" y="48" width="64" height="34" fill="#141836" stroke="#141836" stroke-width="2"/>
    <rect x="216" y="48" width="22" height="34" rx="3" fill="#EC4899" stroke="#141836" stroke-width="2"/>
    <text x="87" y="70" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">60% AIR</text>
    <text x="184" y="70" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">30%</text>
    <text x="227" y="102" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">10%</text>
  `),
  mk('sb-waterfall-mini', 'charts', '147. 4-Step Financial Bridge Waterfall', 'Book-to-Tax, Revenue Bridge, Profit Walk', [
    'Anchor starting bar (left) and ending bar (right) on the zero baseline.',
    'Float intermediate additions (Mint) and deductions (Magenta) step-by-step across.'
  ], `
    <line x1="18" y1="104" x2="242" y2="104" stroke="#141836" stroke-width="1.8"/>
    <rect x="28" y="44" width="34" height="60" fill="#E0F2FE" stroke="#141836" stroke-width="1.8"/>
    <rect x="82" y="26" width="34" height="18" fill="#D1FAE5" stroke="#047857" stroke-width="1.8"/>
    <rect x="136" y="26" width="34" height="34" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.8"/>
    <rect x="190" y="60" width="34" height="44" fill="#141836"/>
    <g font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" text-anchor="middle">
      <text x="45" y="118">BOOK</text><text x="99" y="21" fill="#047857">+ADD</text><text x="153" y="21" fill="#BE185D">-DED</text><text x="207" y="118">TAX</text>
    </g>
  `),
  mk('sb-donut-ring', 'charts', '148. Clean Center-Metric Donut Ring', 'Single Share KPI, Completion Rate', [
    'Draw a thick circular ring in Cool Grey and overlay a bold Cyan/Mint arc for the share.',
    'Put the crisp headline percentage right in the hollow center.'
  ], `
    <circle cx="84" cy="65" r="38" fill="none" stroke="#E2E8F0" stroke-width="14"/>
    <circle cx="84" cy="65" r="38" fill="none" stroke="#10B981" stroke-width="14" stroke-dasharray="178 240" transform="rotate(-90 84 65)"/>
    <text x="84" y="70" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700" fill="#047857">74%</text>
    <text x="142" y="58" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">AUTO-MATCHED</text>
    <text x="142" y="78" font-family="Patrick Hand, cursive" font-size="14" fill="#525B7A">Zero manual edit</text>
  `),
  mk('sb-bar-direct', 'charts', '149. Direct-Labeled Horizontal Bars', 'Ranked Drivers, Survey Top 3, Cost Breakdown', [
    'Draw horizontal bars sorted longest to shortest without any vertical gridlines.',
    'Keep context bars Cool Grey and highlight only the #1 insight bar in Cyan/Mint.',
    'Write values right at each bar tip.'
  ], `
    ${[['OAuth', 132, '#EC4899', '42%'], ['Pricing', 76, '#CBD5E1', '24%'], ['Docs', 48, '#CBD5E1', '15%']].map(([lbl, w, col, val], i) => `
      <text x="20" y="${40 + i * 32}" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">${lbl}</text>
      <rect x="74" y="${26 + i * 32}" width="${w}" height="20" rx="4" fill="${col}"/>
      <text x="${82 + w}" y="${40 + i * 32}" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="${i === 0 ? '#BE185D' : '#525B7A'}">${val}</text>
    `).join('')}
  `),
  mk('sb-quad-2x2', 'charts', '150. Compact 2×2 Decision Matrix', 'Impact vs. Effort, Urgent vs. Important, Risk', [
    'Draw crisp perpendicular X/Y crosshairs with arrowheads.',
    'Tint ONLY the target top-left winning quadrant in soft Mint.',
    'Plot 3–4 labeled dots so tradeoffs become instant.'
  ], `
    <rect x="44" y="18" width="86" height="47" fill="#D1FAE5" fill-opacity="0.55"/>
    <line x1="130" y1="14" x2="130" y2="112" stroke="#141836" stroke-width="2.2"/>
    <line x1="40" y1="65" x2="220" y2="65" stroke="#141836" stroke-width="2.2"/>
    <circle cx="82" cy="36" r="7" fill="#10B981" stroke="#141836" stroke-width="1.8"/>
    <circle cx="176" cy="40" r="6" fill="#0EA5E9" stroke="#141836" stroke-width="1.6"/>
    <circle cx="184" cy="92" r="6" fill="#EC4899" stroke="#141836" stroke-width="1.6"/>
    <text x="50" y="31" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#047857">DO FIRST</text>
    <text x="218" y="106" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="8" fill="#BE185D">SKIP</text>
  `),
  mk('sb-bell-curve', 'charts', '151. Normal Distribution & Outlier Tail', 'Latency p99, Risk Tails, Grading Spreads', [
    'Sketch a smooth symmetrical bell arch resting on a baseline.',
    'Shade ONLY the narrow right tail in Magenta to call out edge-case outliers.'
  ], `
    <path d="M 22 100 C 66 100, 92 24, 130 24 C 168 24, 194 100, 238 100" fill="#E0F2FE" fill-opacity="0.45" stroke="#141836" stroke-width="2.4"/>
    <path d="M 184 82 C 202 96, 218 100, 238 100 H 184 Z" fill="#EC4899" fill-opacity="0.65"/>
    <line x1="184" y1="48" x2="184" y2="100" stroke="#BE185D" stroke-width="1.8" stroke-dasharray="3 3"/>
    <line x1="18" y1="100" x2="242" y2="100" stroke="#141836" stroke-width="2"/>
    <text x="190" y="56" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">p99 TAIL</text>
  `),
  mk('sb-scatter-cluster', 'charts', '152. Annotated Scatter Cluster', 'Customer Segments, Outliers, Correlations', [
    'Draw a minimal L-axis with 10–12 quick dots clustered into 2 visible clouds.',
    'Loop one dashed Cyan oval around the standout segment.'
  ], `
    <polyline points="34,20 34,104 234,104" fill="none" stroke="#141836" stroke-width="2"/>
    <g fill="#94A3B8"><circle cx="64" cy="86" r="4"/><circle cx="78" cy="78" r="4"/><circle cx="92" cy="90" r="4"/><circle cx="104" cy="74" r="4"/><circle cx="122" cy="84" r="4"/></g>
    <ellipse cx="184" cy="44" rx="34" ry="20" fill="#D1FAE5" fill-opacity="0.55" stroke="#047857" stroke-width="1.8" stroke-dasharray="4 3"/>
    <g fill="#047857"><circle cx="172" cy="48" r="4.5"/><circle cx="186" cy="38" r="4.5"/><circle cx="198" cy="46" r="4.5"/></g>
    <text x="184" y="76" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">POWER USERS</text>
  `),
  mk('sb-radar-hex', 'charts', '153. 6-Axis Skill Spider Web', 'Skill Audits, Product Comparisons, Personal Review', [
    'Draw a faint hexagonal spider web with 3 concentric rings.',
    'Plot 6 points on the spokes and connect them into one translucent Cyan polygon.'
  ], `
    <polygon points="100,18 142,42 142,88 100,112 58,88 58,42" fill="none" stroke="#CBD5E1" stroke-width="1.4"/>
    <polygon points="100,36 126,51 126,79 100,94 74,79 74,51" fill="none" stroke="#CBD5E1" stroke-width="1.2"/>
    <polygon points="100,24 134,48 122,82 100,90 66,80 74,46" fill="#0EA5E9" fill-opacity="0.32" stroke="#0369A1" stroke-width="2.2"/>
    <text x="164" y="54" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">6-SKILL PROFILE</text>
    <text x="164" y="74" font-family="Patrick Hand, cursive" font-size="13.5" fill="#525B7A">Spot gaps fast</text>
  `),
  mk('sb-diverging-bar', 'charts', '154. Center-Zero Diverging Bar', 'Pros vs. Cons Weight, Net Sentiment, Variance', [
    'Draw one bold vertical zero spine down the center.',
    'Push negative bars left in Magenta and positive bars right in Mint.'
  ], `
    <line x1="130" y1="18" x2="130" y2="112" stroke="#141836" stroke-width="2.4"/>
    <rect x="130" y="28" width="84" height="18" rx="3" fill="#10B981"/>
    <rect x="64" y="56" width="66" height="18" rx="3" fill="#EC4899"/>
    <rect x="130" y="84" width="54" height="18" rx="3" fill="#0EA5E9"/>
    <text x="220" y="41" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">+62</text>
    <text x="58" y="69" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">-48</text>
    <text x="190" y="97" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">+38</text>
  `),
  mk('sb-tally-block', 'charts', '155. 5-Gate Hand Tally Counter', 'Live Friction Counting, Interview Frequency', [
    'Draw 4 upright pen ticks crossed diagonally by the 5th slash in Magenta.',
    'Fastest zero-friction way to tally repeated complaints during live user calls.'
  ], `
    <text x="24" y="34" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">OAUTH COMPLAINTS (LIVE CALLS)</text>
    ${[34, 96].map(x => `
      <g stroke="#141836" stroke-width="3" stroke-linecap="round">
        <line x1="${x}" y1="50" x2="${x}" y2="90"/><line x1="${x+12}" y1="50" x2="${x+12}" y2="90"/><line x1="${x+24}" y1="50" x2="${x+24}" y2="90"/><line x1="${x+36}" y1="50" x2="${x+36}" y2="90"/>
      </g>
      <line x1="${x-6}" y1="84" x2="${x+42}" y2="56" stroke="#EC4899" stroke-width="3.2" stroke-linecap="round"/>
    `).join('')}
    <line x1="158" y1="50" x2="158" y2="90" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
    <line x1="170" y1="50" x2="170" y2="90" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
    <text x="196" y="78" font-family="IBM Plex Mono, monospace" font-size="18" font-weight="700" fill="#BE185D">= 12</text>
  `),
  mk('sb-gantt-mini', 'charts', '156. 3-Week Dot-Grid Mini Gantt', 'Sprint Plans, Filing Schedules, Launch Prep', [
    'Draw 3 faint vertical week columns (W1 / W2 / W3).',
    'Block overlapping horizontal duration pills on staggered rows.'
  ], `
    <g stroke="#CBD5E1" stroke-width="1.2" stroke-dasharray="3 3"><line x1="88" y1="22" x2="88" y2="112"/><line x1="142" y1="22" x2="142" y2="112"/><line x1="196" y1="22" x2="196" y2="112"/></g>
    <g font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#525B7A"><text x="115" y="20" text-anchor="middle">W1</text><text x="169" y="20" text-anchor="middle">W2</text><text x="220" y="20" text-anchor="middle">W3</text></g>
    <text x="20" y="46" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">SKETCH</text><rect x="88" y="34" width="60" height="16" rx="5" fill="#0EA5E9"/>
    <text x="20" y="74" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">BUILD</text><rect x="128" y="62" width="76" height="16" rx="5" fill="#7C3AED"/>
    <text x="20" y="102" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">SHIP</text><rect x="196" y="90" width="42" height="16" rx="5" fill="#10B981"/>
  `),
  mk('sb-pareto-8020', 'charts', '157. 80/20 Pareto Curve Callout', 'Vital Few vs. Trivial Many, Bug Triage', [
    'Draw 5 descending vertical bars from tall left to tiny right.',
    'Sweep a rising cumulative curve above them and mark the 20% → 80% elbow in Magenta.'
  ], `
    <rect x="28" y="36" width="28" height="72" fill="#0EA5E9"/><rect x="64" y="60" width="28" height="48" fill="#0EA5E9" fill-opacity="0.6"/>
    <rect x="100" y="84" width="28" height="24" fill="#CBD5E1"/><rect x="136" y="94" width="28" height="14" fill="#CBD5E1"/><rect x="172" y="100" width="28" height="8" fill="#CBD5E1"/>
    <path d="M 42 54 Q 90 22 212 20" fill="none" stroke="#EC4899" stroke-width="2.6"/>
    <circle cx="78" cy="34" r="5" fill="#EC4899"/>
    <text x="92" y="34" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">20% DRIVES 80%</text>
  `),
  mk('sb-delta-pill', 'charts', '158. Big Hero KPI + Delta Badge', 'Executive Headlines, Quarterly Results', [
    'Write one oversized bold number on the left.',
    'Snap a small high-contrast Mint ▲ or Magenta ▼ percentage pill beside its shoulder.'
  ], `
    <rect x="28" y="22" width="204" height="86" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
    <text x="44" y="46" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#525B7A">DAY-1 ACTIVATION</text>
    <text x="44" y="88" font-family="IBM Plex Mono, monospace" font-size="34" font-weight="700" fill="#141836">71.4%</text>
    <rect x="158" y="62" width="60" height="24" rx="12" fill="#D1FAE5" stroke="#047857" stroke-width="1.6"/>
    <text x="188" y="78" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">▲ +19%</text>
  `),
  mk('sb-heatmap-row', 'charts', '159. 5-Shade Intensity Strip', 'Risk Severity, Load Peaks, Effort Scale', [
    'Draw 5 touching square cells progressing from white → pale Cyan → deep Indigo.',
    'Drop a crisp pointer triangle over the active intensity.'
  ], `
    <text x="26" y="36" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">COMPLEXITY SCALE (1 → 5)</text>
    ${['#F8FAFC', '#E0F2FE', '#7DD3FC', '#0284C7', '#141836'].map((c, i) => `<rect x="${26 + i * 42}" y="48" width="40" height="32" fill="${c}" stroke="#141836" stroke-width="1.8"/>`).join('')}
    <polygon points="172,88 180,100 164,100" fill="#EC4899"/>
    <text x="172" y="116" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">LEVEL 4</text>
  `),
  mk('sb-t-balance', 'charts', '160. Classic Accounting T-Account', 'Journal Entries, Debit/Credit Checks, Assets', [
    'Draw one bold capital T with SOLL / DR left (Cyan) and HABEN / CR right (Magenta).',
    'Right-align currency numbers on both legs and double-underline equal totals.'
  ], `
    <text x="130" y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">1200 BANK</text>
    <line x1="28" y1="32" x2="232" y2="32" stroke="#141836" stroke-width="2.6"/>
    <line x1="130" y1="32" x2="130" y2="112" stroke="#141836" stroke-width="2.6"/>
    <text x="36" y="50" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">DR +€1,190</text>
    <text x="142" y="50" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">CR -€400</text>
    <text x="142" y="96" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">BAL €790</text>
  `)
];
