/* =========================================================================
   APPENDIX I: ANALOG STUDY SYSTEMS, HABIT TRACKERS & BOOK SYNTHESIS SPREADS
   6 Practical Meta-Learning Layouts + Interactive 21-Day Habit Heatmap Lab
   ========================================================================= */

export const STUDY_SYSTEMS = [
  {
    id: 'cornell',
    short: '1. Cornell-Cyber Hybrid',
    name: '1. The Cornell-Cyberpunk Hybrid Study Spread',
    bestFor: 'Lectures, YouTube Deep Dives, Tax Webinars, Language Grammar Lessons',
    recipe: [
      'Split your A5 page vertically at 30% / 70%: Left rail = "Recall Questions & Icon Triggers"; Right field = Visual notes & diagrams.',
      'Reserve the bottom 5 dot rows for a solid Cyan-tinted "30-Second Executive Summary" box written strictly in your own words.',
      'When reviewing next week, cover the right 70% with a postcard and quiz yourself from the left column questions!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <rect x="24" y="14" width="632" height="282" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
      <!-- Header Strip -->
      <rect x="24" y="14" width="632" height="36" rx="8" fill="#141836"/>
      <text x="42" y="36" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#00D4FF">TOPIC: AI CONTEXT WINDOWS &amp; RAG CHUNKING</text>
      <text x="638" y="36" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#94A3B8">DATE: 22.11 • PG 14</text>
      <!-- Vertical 30/70 Divider -->
      <line x1="214" y1="50" x2="214" y2="232" stroke="#141836" stroke-width="2.2"/>
      <!-- Left 30% Cue Column -->
      <text x="38" y="72" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#7C3AED">CUES / SELF-TEST ?</text>
      <g font-family="Patrick Hand, cursive" font-size="14" fill="#141836">
        <text x="38" y="102">? Why do huge prompts</text>
        <text x="46" y="120">lose middle facts?</text>
        <text x="38" y="156">? Ideal chunk size for</text>
        <text x="46" y="174">§ tax statutes?</text>
        <text x="38" y="208" fill="#BE185D">★ KEY TERM: Reranker</text>
      </g>
      <!-- Right 70% Visual Notes -->
      <text x="232" y="72" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">VISUAL NOTES &amp; SKETCH FIELD (70%)</text>
      <rect x="234" y="86" width="120" height="52" rx="7" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
      <text x="294" y="108" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">CHUNK BY §</text>
      <text x="294" y="126" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Never split mid-rule!</text>
      <line x1="354" y1="112" x2="394" y2="112" stroke="#141836" stroke-width="2.4"/>
      <rect x="394" y="86" width="120" height="52" rx="7" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/>
      <text x="454" y="108" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">RERANK TOP 5</text>
      <text x="454" y="126" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">Cut noise by 80%</text>
      <line x1="514" y1="112" x2="546" y2="112" stroke="#141836" stroke-width="2.4"/>
      <rect x="546" y="86" width="94" height="52" rx="7" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
      <text x="593" y="116" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">CITE ✓</text>
      <text x="234" y="172" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">• Lost-in-the-middle curve: LLMs recall Start + End best.</text>
      <text x="234" y="196" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">• Put strict guardrails + exact output JSON schema LAST!</text>
      <!-- Bottom Summary Strip -->
      <line x1="24" y1="232" x2="656" y2="232" stroke="#141836" stroke-width="2.2"/>
      <rect x="26" y="234" width="628" height="60" rx="6" fill="#E0F2FE" fill-opacity="0.38"/>
      <text x="40" y="254" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">BOTTOM SUMMARY (WRITE 24 HRS LATER FROM MEMORY)</text>
      <text x="40" y="278" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">Clean statute-aligned chunks + Top-5 reranking beats stuffing a giant 100k token PDF every time.</text>
    </svg>`
  },
  {
    id: 'feynman',
    short: '2. Feynman 3-Pass Strip',
    name: '2. The Feynman Technique "Jargon → 12-Year-Old" Simplifier',
    bestFor: 'Exposing Fake Understanding in Tax Law, Accounting Standards & AI Math',
    recipe: [
      'Divide your page into 3 progressive horizontal tiers: Tier 1 = Raw Technical Jargon (Cool Grey); Tier 2 = Everyday Visual Analogy (Cyan); Tier 3 = 1-Sentence Plain-English Truth (Mint).',
      'Wherever you stumble in Tier 2, circle the gap in Magenta—that exact spot is what you need to re-read!',
      'Works wonders for both German explanations ("Erkläre es auf einfachem Deutsch!") and client tax memos.'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <!-- Tier 1: Raw Jargon -->
      <rect x="28" y="18" width="624" height="72" rx="9" fill="#EEF2FC" stroke="#525B7A" stroke-width="2"/>
      <text x="46" y="40" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#525B7A">PASS 1 // RAW TEXTBOOK JARGON (HARD TO REMEMBER)</text>
      <text x="46" y="68" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">"Temporary deductible differences between IFRS carrying amount &amp; tax base create a Deferred Tax Asset."</text>
      <!-- Down Funnel Arrow -->
      <text x="340" y="109" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0EA5E9">↓ STRIP JARGON — DRAW A REAL-WORLD ANALOGY ↓</text>
      <!-- Tier 2: Visual Analogy -->
      <rect x="28" y="120" width="624" height="78" rx="9" fill="#E0F2FE" fill-opacity="0.45" stroke="#0EA5E9" stroke-width="2.2"/>
      <text x="46" y="142" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">PASS 2 // VISUAL METAPHOR ("PREPAID TAX GIFT CARD")</text>
      <text x="46" y="170" font-family="Patrick Hand, cursive" font-size="16" fill="#141836">You paid the tax office EARLY today because they ignored your warranty reserve →</text>
      <text x="46" y="189" font-family="Patrick Hand, cursive" font-size="15.5" fill="#0369A1">You now hold a "Future Tax Discount Coupon" (Asset!) redeemable when you actually pay claims!</text>
      <!-- Down Arrow -->
      <text x="340" y="216" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">↓ DISTILL INTO 1 UNFORGETTABLE SENTENCE ↓</text>
      <!-- Tier 3: Plain Truth -->
      <rect x="28" y="226" width="624" height="68" rx="9" fill="#D1FAE5" stroke="#047857" stroke-width="2.6"/>
      <text x="46" y="248" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">PASS 3 // EXPLAINED TO A 12-YEAR-OLD (LOCKED IN ✓)</text>
      <text x="46" y="276" font-family="Playwrite IT Moderna, cursive" font-size="16.5" fill="#141836">"Deferred Tax Asset = I overpaid tax today, so I get a discount later!"</text>
    </svg>`
  },
  {
    id: 'book1p',
    short: '3. 1-Page Book Dashboard',
    name: '3. The Non-Fiction Book 1-Page Executive Dashboard',
    bestFor: 'Turning 300-Page Books Into Actionable, Re-Readable Sketchbook Spreads',
    recipe: [
      'Draw a miniature book-cover rectangle top-left with 5 star dots + a 1-line "Big Idea" ribbon beside it.',
      'Limit yourself to strictly 3 Visual Pillars across the center (one tiny icon + 2 bullets each—forces brutal prioritization!).',
      'End with a perforated "3 Actions This Week" receipt card at the bottom so reading actually changes behavior.'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <rect x="22" y="14" width="636" height="282" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
      <!-- Mini Book Cover Top-Left -->
      <rect x="38" y="28" width="66" height="84" rx="5" fill="#141836"/>
      <rect x="44" y="34" width="54" height="72" rx="3" fill="#0EA5E9" fill-opacity="0.25" stroke="#00D4FF" stroke-width="1.5"/>
      <text x="71" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">ATOMIC</text>
      <text x="71" y="79" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#00D4FF">HABITS</text>
      <text x="71" y="98" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" fill="#FDE68A">★★★★★</text>
      <!-- Big Thesis Banner -->
      <rect x="118" y="28" width="524" height="84" rx="8" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
      <text x="134" y="50" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#7C3AED">CORE THESIS IN 1 SENTENCE</text>
      <text x="134" y="78" font-family="Playwrite IT Moderna, cursive" font-size="16" fill="#141836">"You do not rise to the level of your goals—</text>
      <text x="134" y="100" font-family="Playwrite IT Moderna, cursive" font-size="16" fill="#0369A1">you fall to the level of your systems."</text>
      <!-- 3 Visual Pillars -->
      <rect x="38" y="126" width="192" height="86" rx="8" fill="#E0F2FE" fill-opacity="0.45" stroke="#0EA5E9" stroke-width="2"/>
      <text x="52" y="147" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">01 // OBVIOUS CUE</text>
      <text x="52" y="172" font-family="Patrick Hand, cursive" font-size="14.5">Leave Micron pen + open</text>
      <text x="52" y="192" font-family="Patrick Hand, cursive" font-size="14.5">notebook right on desk!</text>

      <rect x="244" y="126" width="192" height="86" rx="8" fill="#FCE7F3" fill-opacity="0.45" stroke="#EC4899" stroke-width="2"/>
      <text x="258" y="147" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">02 // 2-MINUTE RULE</text>
      <text x="258" y="172" font-family="Patrick Hand, cursive" font-size="14.5">Shrink habit to 120 sec:</text>
      <text x="258" y="192" font-family="Patrick Hand, cursive" font-size="14.5">"Sketch 1 German noun."</text>

      <rect x="450" y="126" width="192" height="86" rx="8" fill="#D1FAE5" fill-opacity="0.45" stroke="#047857" stroke-width="2"/>
      <text x="464" y="147" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">03 // NEVER MISS 2×</text>
      <text x="464" y="172" font-family="Patrick Hand, cursive" font-size="14.5">Skip 1 day = accident.</text>
      <text x="464" y="192" font-family="Patrick Hand, cursive" font-size="14.5">Skip 2 = new bad habit!</text>
      <!-- Bottom Action Receipt -->
      <rect x="38" y="226" width="604" height="56" rx="8" fill="#FEF3C7" fill-opacity="0.55" stroke="#B45309" stroke-width="2" stroke-dasharray="6 3"/>
      <text x="54" y="247" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">IMPLEMENTATION RECEIPT // MY 2 ACTIONS THIS WEEK</text>
      <text x="54" y="269" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">☐ After morning espresso → draw 1 icon from App D   ☐ After lunch → 10m Easy German shadowing</text>
    </svg>`
  },
  {
    id: 'heatmap',
    short: '4. Habit Streak Heatmap',
    name: '4. GitHub-Style 30-Day Analog Habit & Language Heatmap',
    bestFor: 'Tracking Daily German Immersion, Sketching Practice & Exam Prep Momentum',
    recipe: [
      'Draw 3 rows of 1×1 dot-grid squares across 30 days (grouped cleanly into 4 weekly blocks with 1-dot gutters).',
      'Use 1-pass light highlighter for "Minimum 5-min Win" and 2-pass dark glaze for "Deep 30-min Session"!',
      'Plot a mini 5-dot Energy Sparkline right underneath to see which days you learn fastest.'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <rect x="24" y="16" width="632" height="278" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <text x="44" y="44" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#141836">NOVEMBER STUDY HEATMAP // 1 PASS = 10m • 2 PASSES = 30m+</text>
      <!-- 3 Habit Rows x 14 Days Sample -->
      ${[
        { lbl: 'DEUTSCH B2', col: '#0EA5E9', vals: [2,1,2,2,0,2,1,2,2,2,1,2,2,2], y: 74 },
        { lbl: 'SKETCH 10m', col: '#EC4899', vals: [1,2,1,0,1,2,2,1,2,1,2,2,1,2], y: 126 },
        { lbl: 'TAX / AI LAB', col: '#10B981', vals: [2,2,0,2,2,1,0,2,2,2,2,1,2,2], y: 178 }
      ].map(row => `
        <text x="44" y="${row.y + 20}" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">${row.lbl}</text>
        ${row.vals.map((v, i) => `
          <rect x="${168 + i * 33}" y="${row.y}" width="26" height="26" rx="5" fill="${v === 0 ? '#EEF2FC' : row.col}" fill-opacity="${v === 0 ? '1' : v === 1 ? '0.32' : '0.88'}" stroke="#141836" stroke-width="1.6"/>
        `).join('')}
      `).join('')}
      <!-- Day Numbers -->
      ${Array.from({ length: 14 }, (_, i) => `<text x="${181 + i * 33}" y="66" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">${String(i + 1).padStart(2, '0')}</text>`).join('')}
      <!-- Bottom Legend & Streak -->
      <line x1="40" y1="224" x2="640" y2="224" stroke="#CBD5E1" stroke-width="1.5"/>
      <rect x="44" y="242" width="18" height="18" rx="4" fill="#EEF2FC" stroke="#141836"/><text x="70" y="256" font-family="IBM Plex Mono, monospace" font-size="9.5">REST</text>
      <rect x="128" y="242" width="18" height="18" rx="4" fill="#0EA5E9" fill-opacity="0.32" stroke="#141836"/><text x="154" y="256" font-family="IBM Plex Mono, monospace" font-size="9.5">1-PASS (10m)</text>
      <rect x="266" y="242" width="18" height="18" rx="4" fill="#0EA5E9" fill-opacity="0.88" stroke="#141836"/><text x="292" y="256" font-family="IBM Plex Mono, monospace" font-size="9.5">2-PASS (DEEP!)</text>
      <rect x="460" y="236" width="176" height="32" rx="16" fill="#141836"/>
      <text x="548" y="256" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#10B981">🔥 14-DAY STREAK!</text>
    </svg>`
  },
  {
    id: 'zettel',
    short: '5. Zettelkasten Card Map',
    name: '5. Analog Zettelkasten ("Atomic Idea" Linked Note Map)',
    bestFor: 'Building a Permanent Knowledge Web Across TaxWiki, AI & Languages',
    recipe: [
      'Give every atomic idea card a crisp top-left ID badge (`1A`, `1B`, `2A`)—strictly ONE concept per box!',
      'Connect related cards with labeled dashed Violet arrows ("supports", "contradicts", "example of").',
      'Tag bottom edges with `#tags` so you can effortlessly index physical spreads into Obsidian / Markdown!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <!-- Connecting Link Threads -->
      <path d="M 224 96 H 294" stroke="#7C3AED" stroke-width="2.4" stroke-dasharray="5 4"/>
      <path d="M 124 156 V 196" stroke="#0EA5E9" stroke-width="2.4" stroke-dasharray="5 4"/>
      <path d="M 414 156 L 474 196" stroke="#EC4899" stroke-width="2.4" stroke-dasharray="5 4"/>
      <path d="M 254 242 H 390" stroke="#10B981" stroke-width="2.4" stroke-dasharray="5 4"/>
      <!-- Card 1A -->
      <rect x="28" y="34" width="196" height="122" rx="8" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
      <rect x="28" y="34" width="50" height="22" rx="4" fill="#0EA5E9"/><text x="53" y="49" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">1A</text>
      <text x="42" y="76" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#141836">DUAL-CODING LAW</text>
      <text x="42" y="100" font-family="Patrick Hand, cursive" font-size="14">Words + icons stored in</text>
      <text x="42" y="118" font-family="Patrick Hand, cursive" font-size="14">2 separate brain tracks.</text>
      <text x="42" y="144" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#7C3AED">#memory #sketchnotes</text>
      <!-- Card 1B -->
      <rect x="294" y="34" width="212" height="122" rx="8" fill="#EDE9FE" fill-opacity="0.4" stroke="#7C3AED" stroke-width="2.2"/>
      <rect x="294" y="34" width="50" height="22" rx="4" fill="#7C3AED"/><text x="319" y="49" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">1B</text>
      <text x="308" y="76" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#6D28D9">COLOR = GENDER</text>
      <text x="308" y="100" font-family="Patrick Hand, cursive" font-size="14">Cyan/Magenta/Mint turns</text>
      <text x="308" y="118" font-family="Patrick Hand, cursive" font-size="14">der/die/das into vision.</text>
      <text x="308" y="144" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#6D28D9">→ LINK FROM 1A</text>
      <!-- Card 1A1 -->
      <rect x="28" y="196" width="226" height="96" rx="8" fill="#E0F2FE" fill-opacity="0.45" stroke="#0EA5E9" stroke-width="2"/>
      <rect x="28" y="196" width="54" height="22" rx="4" fill="#141836"/><text x="55" y="211" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#00D4FF">1A1</text>
      <text x="42" y="242" font-family="Patrick Hand, cursive" font-size="14.5">Apply to Tax Statutes:</text>
      <text x="42" y="264" font-family="Patrick Hand, cursive" font-size="14.5">1 § law + 1 decision icon!</text>
      <!-- Card 2A -->
      <rect x="390" y="196" width="256" height="96" rx="8" fill="#D1FAE5" fill-opacity="0.45" stroke="#047857" stroke-width="2.2"/>
      <rect x="390" y="196" width="54" height="22" rx="4" fill="#047857"/><text x="417" y="211" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">2A</text>
      <text x="404" y="242" font-family="Patrick Hand, cursive" font-size="14.5">Scan weekly into TaxWiki MD</text>
      <text x="404" y="264" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">ANALOG THINKING + DIGITAL SEARCH ★</text>
    </svg>`
  },
  {
    id: 'weekblock',
    short: '6. Deep-Work Time-Block',
    name: '6. Minimalist Weekly Time-Block & Focus Radar',
    bestFor: 'Balancing Client Work, AI Building & Daily 20-Min Language Immersion',
    recipe: [
      'Draw 5 slender vertical day columns (MO–FR) spanning 08:00–18:00 (1 dot row = 30 minutes).',
      'Block deep-focus chunks with pastel highlighter rectangles (Cyan = Build, Magenta = Client Tax, Amber = Deutsch).',
      'Leave generous white buffer blocks between deep sessions—an overstuffed schedule collapses by Tuesday!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <rect x="24" y="16" width="632" height="278" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
      <text x="44" y="42" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#141836">WEEKLY TIME-BLOCK OS // PROTECT THE MORNING DEEP BLOCK!</text>
      <!-- Time Labels Left -->
      <g font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A">
        <text x="42" y="84">08:00</text><text x="42" y="132">10:00</text><text x="42" y="180">13:00</text><text x="42" y="228">15:00</text><text x="42" y="272">17:00</text>
      </g>
      <!-- 5 Day Columns -->
      ${['MON', 'TUE', 'WED', 'THU', 'FRI'].map((d, i) => {
        const x = 90 + i * 112;
        return `
          <text x="${x + 50}" y="66" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#141836">${d}</text>
          <rect x="${x}" y="74" width="100" height="204" rx="6" fill="#FAFBFD" stroke="#CBD5E1" stroke-width="1.4"/>
          <rect x="${x + 5}" y="80" width="90" height="24" rx="4" fill="#FEF3C7" stroke="#B45309" stroke-width="1.4"/>
          <text x="${x + 50}" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#B45309">DE 20m ☕</text>
          <rect x="${x + 5}" y="110" width="90" height="62" rx="5" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.8"/>
          <text x="${x + 50}" y="138" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">DEEP WORK</text>
          <text x="${x + 50}" y="156" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5">${i % 2 === 0 ? 'Tax / Memo' : 'AI / Build'}</text>
          <rect x="${x + 5}" y="192" width="90" height="44" rx="5" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.6"/>
          <text x="${x + 50}" y="218" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">CALLS / SYNC</text>
          <rect x="${x + 5}" y="246" width="90" height="24" rx="4" fill="#D1FAE5" stroke="#047857" stroke-width="1.4"/>
          <text x="${x + 50}" y="262" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">SKETCH 10m</text>
        `;
      }).join('')}
    </svg>`
  }
];

export function renderStudySystemsLabHTML() {
  return `
    <!-- 1. INTERACTIVE GALLERY: 6 ANALOG STUDY & PRODUCTIVITY SYSTEMS -->
    <section class="lab cyan-accent" id="sys-gallery-lab">
      <div class="lab-head">
        <span class="lab-title">Analog Operating Systems // 6 Practical Study &amp; Productivity Layouts</span>
        <span class="pill cyan">Dot-Grid Ready</span>
      </div>
      <div class="lab-body">
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          ${STUDY_SYSTEMS.map((s, i) => `<button class="seg-btn sys-tab ${i === 0 ? 'active' : ''}" data-id="${s.id}">${s.short}</button>`).join('')}
        </div>

        <div class="card tinted" style="border-color:var(--cyan);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <span id="sys-title" class="card-h" style="font-size:18px;"></span>
            <span id="sys-best" class="pill violet"></span>
          </div>
          <div id="sys-svg-box" class="svg-box" style="margin:6px 0;"></div>
          <div class="card" style="background:#FFF;">
            <div class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep);">3-STEP ANALOG SETUP RECIPE</div>
            <ol id="sys-recipe" style="padding-left:20px; font-size:14.2px; display:flex; flex-direction:column; gap:4px; color:var(--ink-body);"></ol>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. INTERACTIVE 14-DAY 2-PASS GLAZE HABIT HEATMAP PLAYGROUND -->
    <section class="lab mint-accent" id="sys-habit-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Playground // 14-Day 2-Pass Glaze Habit Heatmap</span>
        <span id="hm-score-pill" class="pill mint">0% Completed</span>
      </div>
      <div class="lab-body">
        <p style="font-size:14.5px; color:var(--ink-muted);">
          Click any square below to cycle its physical highlighter glaze: <strong>Empty → 1-Pass Light Glaze (10-min Win) → 2-Pass Deep Glaze (30-min Focus)</strong>.
        </p>
        <div id="hm-grid-wrap" style="display:flex; flex-direction:column; gap:10px; overflow-x:auto;"></div>
        <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:space-between; align-items:center;" class="no-print">
          <span class="mono" style="font-size:11px; color:var(--ink-muted);">Click cells to toggle: Empty → Light Glaze → Deep Glaze</span>
          <button id="hm-reset-btn" class="btn secondary">↺ Reset Demo Grid</button>
        </div>
      </div>
    </section>
  `;
}

export function initStudySystemsLab() {
  const gal = document.getElementById('sys-gallery-lab');
  if (!gal) return;

  let activeId = STUDY_SYSTEMS[0].id;
  const renderSys = () => {
    const s = STUDY_SYSTEMS.find(x => x.id === activeId) || STUDY_SYSTEMS[0];
    document.getElementById('sys-title').textContent = s.name;
    document.getElementById('sys-best').textContent = s.bestFor;
    document.getElementById('sys-svg-box').innerHTML = s.svg;
    document.getElementById('sys-recipe').innerHTML = s.recipe.map(r => `<li>${r}</li>`).join('');
  };
  gal.querySelectorAll('.sys-tab').forEach(b => b.addEventListener('click', () => {
    activeId = b.dataset.id;
    gal.querySelectorAll('.sys-tab').forEach(x => x.classList.toggle('active', x === b));
    renderSys();
  }));
  renderSys();

  // Interactive 14-day Habit Glaze Heatmap
  const DEFAULT_ROWS = [
    { name: 'Deutsch 15m', col: '#0EA5E9', days: [2, 1, 2, 2, 0, 2, 1, 2, 2, 1, 0, 0, 0, 0] },
    { name: 'Draw 1 Icon', col: '#EC4899', days: [1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 0, 0, 0, 0] },
    { name: 'Tax/AI Read', col: '#10B981', days: [2, 2, 0, 2, 1, 2, 2, 1, 2, 2, 0, 0, 0, 0] }
  ];
  let rows = DEFAULT_ROWS.map(r => ({ ...r, days: [...r.days] }));

  const renderHeatmap = () => {
    const total = rows.length * 14;
    const active = rows.reduce((acc, r) => acc + r.days.filter(v => v > 0).length, 0);
    const deep = rows.reduce((acc, r) => acc + r.days.filter(v => v === 2).length, 0);
    document.getElementById('hm-score-pill').textContent = `${active}/${total} Days Logged (${deep} Deep ★)`;

    document.getElementById('hm-grid-wrap').innerHTML = rows.map((r, ri) => `
      <div style="display:flex; align-items:center; gap:8px; min-width:540px;">
        <span class="mono" style="width:112px; font-size:11px; font-weight:700; color:var(--ink); flex-shrink:0;">${r.name}</span>
        <div style="display:grid; grid-template-columns:repeat(14, minmax(26px, 1fr)); gap:6px; flex:1;">
          ${r.days.map((v, di) => {
            const bg = v === 0 ? '#EEF2FC' : r.col;
            const op = v === 0 ? '1' : v === 1 ? '0.35' : '0.92';
            return `<button class="hm-cell" data-r="${ri}" data-d="${di}" title="${r.name} Day ${di + 1}" style="height:30px; border:2px solid var(--ink); border-radius:6px; cursor:pointer; background:${bg}; opacity:${op}; font-family:var(--font-mono); font-size:9.5px; font-weight:700; color:${v === 2 ? '#FFF' : '#141836'};">${di + 1}</button>`;
          }).join('')}
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.hm-cell').forEach(btn => {
      btn.addEventListener('click', () => {
        const ri = Number(btn.dataset.r), di = Number(btn.dataset.d);
        rows[ri].days[di] = (rows[ri].days[di] + 1) % 3;
        renderHeatmap();
      });
    });
  };

  document.getElementById('hm-reset-btn')?.addEventListener('click', () => {
    rows = DEFAULT_ROWS.map(r => ({ ...r, days: [...r.days] }));
    renderHeatmap();
  });

  renderHeatmap();
}
