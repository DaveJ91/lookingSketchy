/* =========================================================================
   APPENDIX L: PRODUCT THINKING, DECISION TREES & UX SKETCHING STUDIO
   8 Product-Skill Diagrams + Live 2×2 Feature Prioritization Matrix Builder
   ========================================================================= */

export const PRODUCT_BLUEPRINTS = [
  {
    id: 'ost',
    short: '1. Opportunity Tree',
    name: '1. Opportunity Solution Tree (Outcome → Opportunities → Experiments)',
    tag: 'Product Discovery • Teresa Torres Style',
    recipe: [
      'Anchor ONE measurable Desired Outcome in a bold Indigo box at the very top ("Cut VAT Memo Time 60%").',
      'Branch down into 2–3 real User Opportunities (pain points discovered in interviews, tinted Cyan).',
      'Branch each Opportunity into Solution ideas (Violet) and tiny 2-day Validation Experiments (Mint) underneath!'
    ],
    svg: `<svg viewBox="0 0 680 320">
      <!-- Top Outcome -->
      <rect x="200" y="12" width="280" height="44" rx="10" fill="#141836"/>
      <text x="340" y="31" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#00D4FF">DESIRED OUTCOME</text>
      <text x="340" y="48" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" fill="#FFF">Double Weekly Approved Tax Memos</text>
      <!-- Connectors L1->L2 -->
      <path d="M 340 56 V 76 M 176 76 H 504 M 176 76 V 92 M 504 76 V 92" fill="none" stroke="#141836" stroke-width="2.2"/>
      <!-- Opportunities -->
      <rect x="64" y="92" width="224" height="46" rx="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/>
      <text x="176" y="111" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">OPPORTUNITY A (PAIN)</text>
      <text x="176" y="129" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">"Invoices miss VAT IDs &amp; stall"</text>

      <rect x="392" y="92" width="224" height="46" rx="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/>
      <text x="504" y="111" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">OPPORTUNITY B (PAIN)</text>
      <text x="504" y="129" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">"Hard to trust AI § citations"</text>
      <!-- Connectors L2->L3 -->
      <path d="M 176 138 V 158 M 100 158 H 252 M 100 158 V 172 M 252 158 V 172 M 504 138 V 158 M 428 158 H 580 M 428 158 V 172 M 580 158 V 172" fill="none" stroke="#7C3AED" stroke-width="2"/>
      <!-- Solutions -->
      <g font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">
        <rect x="28" y="172" width="144" height="44" rx="7" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.8"/><text x="100" y="198" text-anchor="middle">Auto VIES Lookup</text>
        <rect x="180" y="172" width="144" height="44" rx="7" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.8"/><text x="252" y="198" text-anchor="middle">Client Chase Email</text>
        <rect x="356" y="172" width="144" height="44" rx="7" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.8"/><text x="428" y="198" text-anchor="middle">Click-to-Highlight §</text>
        <rect x="508" y="172" width="144" height="44" rx="7" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.8"/><text x="580" y="198" text-anchor="middle">Confidence Badge</text>
      </g>
      <!-- Experiments -->
      <path d="M 100 216 V 244 M 428 216 V 244" stroke="#047857" stroke-width="2.4" stroke-dasharray="4 3"/>
      <rect x="24" y="244" width="224" height="58" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <text x="136" y="264" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">🧪 EXPERIMENT 01 (2 DAYS)</text>
      <text x="136" y="286" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Run VIES script on last 50 PDFs</text>

      <rect x="356" y="244" width="296" height="58" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <text x="504" y="264" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">🧪 EXPERIMENT 02 (PAPER PROTOTYPE)</text>
      <text x="504" y="286" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Test inline § hover cards with 5 advisors</text>
    </svg>`
  },
  {
    id: 'decision',
    short: '2. Build/Buy/AI Tree',
    name: '2. Product Strategy Decision Tree (Build vs. Buy vs. AI-Prompt)',
    tag: 'Product Architecture • Fast Scoping',
    recipe: [
      'Draw binary Diamond Decision Gates strictly down a vertical spine (YES right in Mint, NO down in Magenta).',
      'Ask the 3 highest-leverage product filters: Differentiator? → Deterministic Rules? → High Frequency?',
      'Terminate every branch in a heavy Action Stamp ("Buy SaaS", "Prompt Workflow", "Build Custom Core")!'
    ],
    svg: `<svg viewBox="0 0 680 320">
      <rect x="200" y="12" width="280" height="34" rx="17" fill="#141836"/>
      <text x="340" y="33" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#00D4FF">NEW PRODUCT CAPABILITY REQUEST</text>
      <line x1="340" y1="46" x2="340" y2="68" stroke="#141836" stroke-width="2.4"/>
      <!-- Gate 1 -->
      <polygon points="340,68 438,104 340,140 242,104" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/>
      <text x="340" y="101" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">CORE PRODUCT</text>
      <text x="340" y="116" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9">DIFFERENTIATOR?</text>
      <!-- NO Left -> Buy SaaS -->
      <line x1="242" y1="104" x2="176" y2="104" stroke="#BE185D" stroke-width="2.6"/>
      <text x="210" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">NO</text>
      <rect x="20" y="72" width="156" height="66" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.2"/>
      <text x="98" y="97" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">BUY / INTEGRATE</text>
      <text x="98" y="118" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Stripe / Auth / VIES API</text>
      <!-- YES Down -> Gate 2 -->
      <line x1="340" y1="140" x2="340" y2="172" stroke="#047857" stroke-width="2.6"/>
      <text x="358" y="160" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">YES ✓</text>
      <polygon points="340,172 444,210 340,248 236,210" fill="#FEF3C7" stroke="#B45309" stroke-width="2.2"/>
      <text x="340" y="206" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">FUZZY TEXT /</text>
      <text x="340" y="221" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">REASONING TASK?</text>
      <!-- YES Right -> AI Workflow -->
      <line x1="444" y1="210" x2="504" y2="210" stroke="#7C3AED" stroke-width="2.6"/>
      <text x="474" y="202" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">YES</text>
      <rect x="504" y="176" width="156" height="70" rx="8" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.4"/>
      <text x="582" y="200" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#6D28D9">AI + EVALS + HITL</text>
      <text x="582" y="222" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Prompt + RAG + Review</text>
      <!-- NO Left -> Deterministic Code -->
      <line x1="236" y1="210" x2="176" y2="210" stroke="#047857" stroke-width="2.6"/>
      <text x="206" y="202" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">NO</text>
      <rect x="20" y="176" width="156" height="70" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>
      <text x="98" y="200" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">DETERMINISTIC CODE</text>
      <text x="98" y="222" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Pure Logic + Unit Tests</text>
      <!-- Footer Rule -->
      <rect x="130" y="274" width="420" height="32" rx="16" fill="#FFFDF5" stroke="#141836" stroke-width="1.8"/>
      <text x="340" y="294" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">PRODUCT RULE: Never use an LLM where a 10-line deterministic rule works 100%!</text>
    </svg>`
  },
  {
    id: 'wireframe',
    short: '3. Crazy-4s UI Flow',
    name: '3. "Crazy 4s" Rapid Paper-Prototype UI Storyboard',
    tag: 'UX Design • Sketch Before Coding',
    recipe: [
      'Draw 4 identical small browser/phone frames across a landscape strip—keep wireframes tiny (8×6 dots) so you NEVER waste time on pixels!',
      'Sketch only big structural rectangles, squiggly text bars, and ONE bright Magenta primary CTA button per screen.',
      'Draw swooping Magenta tap-arrows directly from the clicked button on Screen N straight into Screen N+1!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      ${[
        { n: '01 // UPLOAD', x: 20, body: '<rect x="12" y="42" width="112" height="62" rx="6" fill="#E0F2FE" stroke="#0EA5E9" stroke-dasharray="4 3" stroke-width="2"/><text x="68" y="77" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">DROP PDF</text><rect x="26" y="122" width="84" height="26" rx="13" fill="#EC4899"/><text x="68" y="139" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#FFF">SCAN →</text>' },
        { n: '02 // EXTRACT', x: 186, body: '<rect x="12" y="42" width="112" height="24" rx="4" fill="#EEF2FC"/><rect x="12" y="74" width="112" height="24" rx="4" fill="#FEF3C7" stroke="#B45309"/><text x="68" y="90" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#B45309">19% USt FOUND</text><rect x="26" y="122" width="84" height="26" rx="13" fill="#EC4899"/><text x="68" y="139" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#FFF">REVIEW →</text>' },
        { n: '03 // HITL GATE', x: 352, body: '<rect x="12" y="42" width="112" height="66" rx="5" fill="#FFFDF5" stroke="#141836"/><path d="M 22 58 H 112 M 22 72 H 96 M 22 86 H 104" stroke="#525B7A" stroke-width="2.4"/><rect x="26" y="122" width="84" height="26" rx="13" fill="#10B981"/><text x="68" y="139" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#FFF">APPROVE ✓</text>' },
        { n: '04 // FILED ★', x: 518, body: '<circle cx="68" cy="76" r="26" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/><polyline points="56,76 64,84 82,66" fill="none" stroke="#047857" stroke-width="3.6" stroke-linecap="round"/><text x="68" y="128" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">SAVED TO LEDGER</text>' }
      ].map((s) => `
        <g transform="translate(${s.x}, 36)">
          <rect x="0" y="0" width="136" height="176" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
          <rect x="0" y="0" width="136" height="26" rx="8" fill="#141836"/>
          <text x="68" y="17" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#00D4FF">${s.n}</text>
          ${s.body}
        </g>
      `).join('')}
      <!-- Tap Arrows -->
      <path d="M 134 172 C 160 172, 162 110, 186 110" fill="none" stroke="#EC4899" stroke-width="2.6"/>
      <path d="M 300 172 C 326 172, 328 110, 352 110" fill="none" stroke="#EC4899" stroke-width="2.6"/>
      <path d="M 466 172 C 492 172, 494 110, 518 110" fill="none" stroke="#10B981" stroke-width="2.6"/>
      <rect x="92" y="244" width="496" height="42" rx="10" fill="#EEF2FC" stroke="#141836" stroke-width="1.8"/>
      <text x="340" y="270" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">UX Secret: 4 tiny paper boxes expose missing edge cases in 3 minutes — before writing 1 line of React!</text>
    </svg>`
  },
  {
    id: 'journey',
    short: '4. User Emotion Curve',
    name: '4. User Journey Map + Emotional Friction Wave',
    tag: 'UX Research • Fixing Drop-Offs',
    recipe: [
      'Draw 5 horizontal journey columns along the top (Discover → Sign Up → First Run → Aha! → Paid).',
      'Plot a bold continuous emotion curve across the center: Happy above the midline (Mint), Frustrated below (Magenta).',
      'Circle the deepest Magenta valley in bold red/magenta ink—that single friction point is your #1 sprint priority!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <!-- Column Headers -->
      ${['1. DISCOVER', '2. SIGN UP', '3. FIRST PDF', '4. AHA! ★', '5. HABIT'].map((c, i) => `
        <rect x="${20 + i * 130}" y="18" width="120" height="28" rx="6" fill="#EEF2FC" stroke="#141836" stroke-width="1.8"/>
        <text x="${80 + i * 130}" y="36" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">${c}</text>
      `).join('')}
      <!-- Neutral Emotion Midline -->
      <line x1="20" y1="158" x2="660" y2="158" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="5 4"/>
      <text x="26" y="150" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#047857">DELIGHT ▲</text>
      <text x="26" y="174" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#BE185D">FRICTION ▼</text>
      <!-- Emotion Wave Curve -->
      <path d="M 80 140 C 145 140, 165 224, 210 224 C 260 224, 290 198, 340 162 C 390 124, 420 84, 470 84 C 520 84, 560 98, 600 76" fill="none" stroke="#0EA5E9" stroke-width="4" stroke-linecap="round"/>
      <!-- Highlighted Valley & Peak -->
      <circle cx="210" cy="224" r="14" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.8"/>
      <text x="210" y="229" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#BE185D">!</text>
      <rect x="116" y="250" width="212" height="44" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/>
      <text x="222" y="268" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">#1 FIX: LONG SIGN-UP FORM</text>
      <text x="222" y="286" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">58% quit before uploading 1st PDF!</text>

      <circle cx="470" cy="84" r="12" fill="#D1FAE5" stroke="#047857" stroke-width="2.6"/>
      <text x="470" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">★</text>
      <text x="470" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">INSTANT VAT CHECK!</text>
    </svg>`
  },
  {
    id: 'funnel',
    short: '5. Activation Funnel',
    name: '5. Pirate Metrics (AARRR) Conversion Funnel & Bottleneck Audit',
    tag: 'Product Growth • Analytics',
    recipe: [
      'Draw 4 centered tapered horizontal bars narrowing proportionally from top (100% Visit) to bottom (9% Paid).',
      'Write exact drop-off percentages in the right margin gutter—highlight the steepest cliff in Magenta!',
      'Sketch ONE focused Cyan growth experiment arrow aiming directly at the biggest leak!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <rect x="50" y="24" width="380" height="48" rx="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/>
      <text x="240" y="53" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#0369A1">1. LANDING PAGE VISIT // 1,000 (100%)</text>

      <rect x="115" y="90" width="250" height="48" rx="8" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.2"/>
      <text x="240" y="119" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#6D28D9">2. TRY DEMO // 420 (42%)</text>

      <rect x="165" y="156" width="150" height="48" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.6"/>
      <text x="240" y="185" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">3. AHA! // 140 (14%)</text>

      <rect x="190" y="222" width="100" height="48" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>
      <text x="240" y="251" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">4. PAID // 85</text>

      <!-- Bottleneck Callout Right -->
      <path d="M 326 180 H 416" stroke="#BE185D" stroke-width="2.8"/>
      <rect x="416" y="138" width="236" height="88" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.2"/>
      <text x="432" y="162" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">⚠️ BIGGEST LEAK (-67%)</text>
      <text x="432" y="186" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">Users hit empty state with no</text>
      <text x="432" y="206" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">sample invoice → Add 1-click Demo!</text>
    </svg>`
  },
  {
    id: 'northstar',
    short: '6. North-Star Tree',
    name: '6. North-Star Metric Input Driver Tree',
    tag: 'Product Strategy • KPI Decomposition',
    recipe: [
      'Put your ONE North-Star Metric on the left inside a bold Indigo box (measures value delivered to users, not vanity clicks).',
      'Split horizontally with `×` multiplication signs into 3 controllable Input Levers (Reach × Activation × Frequency).',
      'Assign each Product Squad to ONE input lever box so everyone knows which needle they move!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <!-- North Star Left -->
      <rect x="22" y="96" width="184" height="114" rx="12" fill="#141836"/>
      <text x="114" y="128" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#FDE68A">★ NORTH STAR METRIC</text>
      <text x="114" y="158" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="17" fill="#FFF">Weekly Approved</text>
      <text x="114" y="180" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="17" fill="#00D4FF">Tax Memos</text>
      <!-- Bracket Split -->
      <path d="M 206 153 H 244 M 244 62 V 244 M 244 62 H 282 M 244 153 H 282 M 244 244 H 282" fill="none" stroke="#141836" stroke-width="2.6"/>
      <!-- 3 Input Levers -->
      <rect x="282" y="28" width="374" height="68" rx="9" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/>
      <text x="300" y="54" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0369A1">LEVER 1 // ACTIVE ADVISOR TEAMS (BREADTH)</text>
      <text x="300" y="78" font-family="Patrick Hand, cursive" font-size="14.5">Driver: Free EU VAT Calculator SEO + Referrals</text>

      <rect x="282" y="119" width="374" height="68" rx="9" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.2"/>
      <text x="300" y="145" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#6D28D9">LEVER 2 // FIRST-MEMO ACTIVATION % (DEPTH)</text>
      <text x="300" y="169" font-family="Patrick Hand, cursive" font-size="14.5">Driver: 1-Click Sample PDF + Inline § Citations</text>

      <rect x="282" y="210" width="374" height="68" rx="9" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <text x="300" y="236" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">LEVER 3 // WEEKLY RETURN FREQUENCY (HABIT)</text>
      <text x="300" y="260" font-family="Patrick Hand, cursive" font-size="14.5">Driver: Automated 10th-of-Month UStVA Reminders</text>
    </svg>`
  },
  {
    id: 'roadmap',
    short: '7. Now/Next/Later',
    name: '7. Outcome-Driven "Now / Next / Later" Product Roadmap',
    tag: 'Stakeholder Comms • Zero Fake Dates',
    recipe: [
      'Draw 3 equal vertical columns with progressive opacity (Solid Cyan NOW → Soft Violet NEXT → Dashed Cool Grey LATER).',
      'Write Problem/Bet themes instead of rigid feature lists—add tiny High/Med/Low confidence pill badges!',
      'Explicitly add a bottom Magenta "NOT DOING (EXPLICIT NO)" strip—great product strategy is defined by what you say NO to!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <rect x="20" y="20" width="202" height="202" rx="10" fill="#E0F2FE" fill-opacity="0.45" stroke="#0EA5E9" stroke-width="2.4"/>
      <text x="121" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0369A1">NOW (COMMITTED)</text>
      <rect x="34" y="60" width="174" height="62" rx="7" fill="#FFF" stroke="#0EA5E9" stroke-width="1.8"/>
      <text x="46" y="84" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">VIES Auto-Verify</text>
      <text x="46" y="106" font-family="Patrick Hand, cursive" font-size="13.5" fill="#047857">Confidence: HIGH ✓</text>
      <rect x="34" y="134" width="174" height="62" rx="7" fill="#FFF" stroke="#0EA5E9" stroke-width="1.8"/>
      <text x="46" y="158" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">Inline § Citation UI</text>
      <text x="46" y="180" font-family="Patrick Hand, cursive" font-size="13.5" fill="#047857">Confidence: HIGH ✓</text>

      <rect x="239" y="20" width="202" height="202" rx="10" fill="#EDE9FE" fill-opacity="0.4" stroke="#7C3AED" stroke-width="2.2"/>
      <text x="340" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#6D28D9">NEXT (DISCOVERY)</text>
      <rect x="253" y="60" width="174" height="62" rx="7" fill="#FFF" stroke="#7C3AED" stroke-width="1.8"/>
      <text x="265" y="84" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">DATEV Export Bridge</text>
      <text x="265" y="106" font-family="Patrick Hand, cursive" font-size="13.5" fill="#B45309">Confidence: MED</text>

      <rect x="458" y="20" width="202" height="202" rx="10" fill="#EEF2FC" stroke="#94A3B8" stroke-width="2" stroke-dasharray="6 4"/>
      <text x="559" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#525B7A">LATER (EXPLORING)</text>
      <rect x="472" y="60" width="174" height="62" rx="7" fill="#FFF" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="4 3"/>
      <text x="484" y="84" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#525B7A">2027 EU ViDA Realtime</text>
      <text x="484" y="106" font-family="Patrick Hand, cursive" font-size="13.5" fill="#525B7A">Confidence: EARLY</text>

      <!-- Explicit NO Strip -->
      <rect x="20" y="242" width="640" height="48" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.2"/>
      <text x="340" y="271" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">✕ EXPLICITLY NOT BUILDING NOW: Full Payroll Suite • Mobile-Only Editor • Unverified Auto-Filing</text>
    </svg>`
  },
  {
    id: 'rice2x2',
    short: '8. Impact/Effort 2×2',
    name: '8. Visual Impact vs. Effort Feature Prioritization Matrix',
    tag: 'Ruthless Focus • Quarterly Planning',
    recipe: [
      'Draw crisp crosshairs dividing 4 quadrants: High Impact / Low Effort (Mint Quick Wins ★) top-left, Big Bets top-right, Fill-Ins bottom-left, Money Pits bottom-right.',
      'Scale dot circle radius by Customer Reach so huge opportunities visually outweigh pet features!',
      'Draw a bold Mint lasso circle around your top 2 Quick Wins to lock the sprint!'
    ],
    svg: `<svg viewBox="0 0 680 310">
      <rect x="80" y="24" width="260" height="126" fill="#D1FAE5" fill-opacity="0.45"/>
      <rect x="340" y="24" width="260" height="126" fill="#E0F2FE" fill-opacity="0.4"/>
      <rect x="80" y="150" width="260" height="126" fill="#EEF2FC" fill-opacity="0.6"/>
      <rect x="340" y="150" width="260" height="126" fill="#FCE7F3" fill-opacity="0.45"/>
      <line x1="340" y1="20" x2="340" y2="282" stroke="#141836" stroke-width="2.6"/>
      <line x1="76" y1="150" x2="606" y2="150" stroke="#141836" stroke-width="2.6"/>
      <text x="94" y="46" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">★ QUICK WINS (DO FIRST!)</text>
      <text x="586" y="46" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">BIG STRATEGIC BETS</text>
      <text x="94" y="264" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#525B7A">FILL-INS</text>
      <text x="586" y="264" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">✕ MONEY PITS (SAY NO)</text>
      <!-- Plotted Features -->
      <circle cx="176" cy="86" r="18" fill="#10B981" stroke="#141836" stroke-width="2.2"/><text x="176" y="90" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#FFF">VIES</text>
      <circle cx="256" cy="112" r="14" fill="#10B981" stroke="#141836" stroke-width="2"/><text x="256" y="116" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">DEMO</text>
      <circle cx="486" cy="84" r="20" fill="#0EA5E9" stroke="#141836" stroke-width="2.2"/><text x="486" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#FFF">DATEV</text>
      <circle cx="512" cy="214" r="16" fill="#EC4899" stroke="#141836" stroke-width="2"/><text x="512" y="218" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">CHAT</text>
      <text x="340" y="298" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">LOW EFFORT ← ——————————————————— → HIGH EFFORT</text>
    </svg>`
  }
];

export function renderProductLabHTML() {
  return `
    <!-- 1. 8 PRODUCT SKETCHING BLUEPRINTS -->
    <section class="lab cyan-accent" id="prod-gallery-lab">
      <div class="lab-head">
        <span class="lab-title">Product Skills Sketchbook // 8 High-Leverage PM &amp; UX Diagrams</span>
        <span class="pill cyan">Discovery • Strategy • Wireframes</span>
      </div>
      <div class="lab-body">
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          ${PRODUCT_BLUEPRINTS.map((p, i) => `<button class="seg-btn pr-tab ${i === 0 ? 'active' : ''}" data-id="${p.id}">${p.short}</button>`).join('')}
        </div>

        <div class="card tinted" style="border-color:var(--cyan);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <span id="pr-title" class="card-h" style="font-size:18px;"></span>
            <span id="pr-tag" class="pill violet"></span>
          </div>
          <div id="pr-svg-box" class="svg-box" style="margin:6px 0;"></div>
          <div class="card" style="background:#FFF;">
            <div class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep);">3-STEP WHITEBOARD &amp; NOTEBOOK RECIPE</div>
            <ol id="pr-recipe" style="padding-left:20px; font-size:14.2px; display:flex; flex-direction:column; gap:4px; color:var(--ink-body);"></ol>
          </div>
        </div>
      </div>
    </section>

    <!-- 1B. THE 4-STATE REAL UX EDGE-CASE STRIP -->
    <section class="section-block">
      <h2>Sketching the Unhappy Paths: The 4-State Wireframe Strip</h2>
      <p>
        First-time product sketches almost always show one tidy "happy path" screen full of neat fake data. Engineers then hit four unanswered questions the next morning: <em>What shows before any data exists? What renders during a slow sync? What happens when the API times out?</em> Draw all four thumbnail states in one horizontal row before opening Figma:
      </p>
      <div class="svg-box">
        <svg viewBox="0 0 700 205">
          <!-- State 1: Empty -->
          <g transform="translate(16, 16)">
            <rect x="0" y="0" width="152" height="168" rx="9" fill="#FFF" stroke="#141836" stroke-width="2"/>
            <rect x="0" y="0" width="152" height="24" rx="8" fill="#EEF2FC"/>
            <text x="76" y="16" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#525B7A">1. EMPTY STATE</text>
            <rect x="44" y="42" width="64" height="42" rx="6" fill="none" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="4 3"/>
            <text x="76" y="67" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13" fill="#64748B">0 records yet</text>
            <rect x="26" y="98" width="100" height="26" rx="6" fill="#0EA5E9"/>
            <text x="76" y="115" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">+ LOAD SAMPLE</text>
            <text x="76" y="148" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5" fill="#525B7A">Give 1-click escape!</text>
          </g>
          <!-- State 2: Loading -->
          <g transform="translate(188, 16)">
            <rect x="0" y="0" width="152" height="168" rx="9" fill="#FFF" stroke="#141836" stroke-width="2"/>
            <rect x="0" y="0" width="152" height="24" rx="8" fill="#E0F2FE"/>
            <text x="76" y="16" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">2. LOADING (&gt;400ms)</text>
            <rect x="18" y="42" width="116" height="14" rx="4" fill="#CBD5E1"/>
            <rect x="18" y="66" width="90" height="12" rx="4" fill="#E2E8F0"/>
            <rect x="18" y="88" width="116" height="12" rx="4" fill="#E2E8F0"/>
            <rect x="18" y="110" width="72" height="12" rx="4" fill="#E2E8F0"/>
            <text x="76" y="148" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5" fill="#0369A1">Skeleton, not spinner</text>
          </g>
          <!-- State 3: Error / Timeout -->
          <g transform="translate(360, 16)">
            <rect x="0" y="0" width="152" height="168" rx="9" fill="#FFF7FB" stroke="#BE185D" stroke-width="2.2"/>
            <rect x="0" y="0" width="152" height="24" rx="8" fill="#FCE7F3"/>
            <text x="76" y="16" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">3. API TIMEOUT</text>
            <circle cx="76" cy="60" r="16" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/>
            <text x="76" y="66" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700" fill="#BE185D">!</text>
            <text x="76" y="94" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5" fill="#141836">Sync stalled (504)</text>
            <rect x="34" y="106" width="84" height="22" rx="5" fill="#BE185D"/>
            <text x="76" y="121" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">↺ RETRY</text>
            <text x="76" y="148" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5" fill="#BE185D">Keep user's draft!</text>
          </g>
          <!-- State 4: Populated -->
          <g transform="translate(532, 16)">
            <rect x="0" y="0" width="152" height="168" rx="9" fill="#F2FDF8" stroke="#047857" stroke-width="2"/>
            <rect x="0" y="0" width="152" height="24" rx="8" fill="#D1FAE5"/>
            <text x="76" y="16" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">4. READY STATE ✓</text>
            <rect x="18" y="40" width="116" height="24" rx="5" fill="#FFF" stroke="#047857" stroke-width="1.5"/>
            <text x="28" y="56" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#047857">✓ 142 rows synced</text>
            <rect x="18" y="74" width="116" height="20" rx="4" fill="#FFF" stroke="#CBD5E1" stroke-width="1.4"/>
            <rect x="18" y="102" width="116" height="20" rx="4" fill="#FFF" stroke="#CBD5E1" stroke-width="1.4"/>
            <text x="76" y="148" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5" fill="#047857">Show last-sync time</text>
          </g>
        </svg>
      </div>
      <div class="studio-aside">
        <strong>Why engineers love ugly 4-state sketches:</strong> A tiny 5-minute pencil row showing Empty, Loading, Timeout, and Ready answers more real build questions than a 20-screen high-fidelity Figma prototype that only covers the ideal scenario.
      </div>
    </section>

    <!-- 2. INTERACTIVE LIVE 2x2 FEATURE PRIORITIZATION MATRIX BUILDER -->
    <section class="lab mint-accent" id="prod-matrix-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Product Tool // Live Impact vs. Effort 2×2 Plotter</span>
        <span class="pill mint">Adjust Sliders to Prioritize Features</span>
      </div>
      <div class="lab-body">
        <div class="grid-2 no-print" id="pm-controls"></div>
        <div id="pm-live-svg" class="svg-box"></div>
      </div>
    </section>
  `;
}

export function initProductLab() {
  const gal = document.getElementById('prod-gallery-lab');
  if (!gal) return;

  let activeId = PRODUCT_BLUEPRINTS[0].id;
  const renderBp = () => {
    const p = PRODUCT_BLUEPRINTS.find(x => x.id === activeId) || PRODUCT_BLUEPRINTS[0];
    document.getElementById('pr-title').textContent = p.name;
    document.getElementById('pr-tag').textContent = p.tag;
    document.getElementById('pr-svg-box').innerHTML = p.svg;
    document.getElementById('pr-recipe').innerHTML = p.recipe.map(r => `<li>${r}</li>`).join('');
  };
  gal.querySelectorAll('.pr-tab').forEach(b => b.addEventListener('click', () => {
    activeId = b.dataset.id;
    gal.querySelectorAll('.pr-tab').forEach(x => x.classList.toggle('active', x === b));
    renderBp();
  }));
  renderBp();

  // Interactive 4-Feature Impact/Effort Matrix (B2B SaaS Onboarding Scenario)
  const features = [
    { name: '1-Click Sample CSV', imp: 88, eff: 20, col: '#10B981' },
    { name: 'Read-Only OAuth', imp: 82, eff: 36, col: '#0EA5E9' },
    { name: 'Two-Way ERP Sync', imp: 86, eff: 84, col: '#7C3AED' },
    { name: 'Custom Theme UI', imp: 24, eff: 72, col: '#EC4899' }
  ];

  const renderMatrixSVG = () => {
    const dots = features.map((f) => {
      const cx = 80 + (f.eff / 100) * 520;
      const cy = 272 - (f.imp / 100) * 244;
      const lbl = String(f.name || '').replace(/</g, '&lt;').slice(0, 18);
      return `
        <circle cx="${cx}" cy="${cy}" r="16" fill="${f.col}" stroke="#141836" stroke-width="2.2"/>
        <text x="${cx}" y="${cy - 22}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">${lbl}</text>
      `;
    }).join('');
    document.getElementById('pm-live-svg').innerHTML = `<svg viewBox="0 0 680 306">
      <rect x="76" y="22" width="264" height="128" fill="#D1FAE5" fill-opacity="0.45"/>
      <rect x="340" y="22" width="264" height="128" fill="#E0F2FE" fill-opacity="0.38"/>
      <rect x="76" y="150" width="264" height="128" fill="#EEF2FC" fill-opacity="0.55"/>
      <rect x="340" y="150" width="264" height="128" fill="#FCE7F3" fill-opacity="0.45"/>
      <line x1="340" y1="18" x2="340" y2="282" stroke="#141836" stroke-width="2.6"/>
      <line x1="72" y1="150" x2="608" y2="150" stroke="#141836" stroke-width="2.6"/>
      <text x="88" y="42" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">★ QUICK WINS</text>
      <text x="594" y="42" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">BIG BETS</text>
      <text x="88" y="268" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#525B7A">FILL-INS</text>
      <text x="594" y="268" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">✕ SAY NO</text>
      ${dots}
      <text x="340" y="298" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#525B7A">EFFORT (LEFT LOW → RIGHT HIGH) • IMPACT (BOTTOM LOW → TOP HIGH)</text>
    </svg>`;
  };

  const ctrlBox = document.getElementById('pm-controls');
  ctrlBox.innerHTML = features.map((f, i) => `
    <div class="card tinted" style="padding:11px 13px; gap:6px;">
      <input class="search-in pm-name" data-i="${i}" type="text" value="${f.name}" />
      <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
        <label class="mono" style="font-size:10px; font-weight:700;">Impact <input class="pm-imp" data-i="${i}" type="range" min="10" max="95" value="${f.imp}" style="width:92px;"/></label>
        <label class="mono" style="font-size:10px; font-weight:700;">Effort <input class="pm-eff" data-i="${i}" type="range" min="10" max="95" value="${f.eff}" style="width:92px;"/></label>
      </div>
    </div>
  `).join('');

  ctrlBox.querySelectorAll('.pm-name').forEach(el => el.addEventListener('input', () => { features[Number(el.dataset.i)].name = el.value; renderMatrixSVG(); }));
  ctrlBox.querySelectorAll('.pm-imp').forEach(el => el.addEventListener('input', () => { features[Number(el.dataset.i)].imp = Number(el.value); renderMatrixSVG(); }));
  ctrlBox.querySelectorAll('.pm-eff').forEach(el => el.addEventListener('input', () => { features[Number(el.dataset.i)].eff = Number(el.value); renderMatrixSVG(); }));
  renderMatrixSVG();
}
