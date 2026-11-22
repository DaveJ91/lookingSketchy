/* =========================================================================
   APPENDIX O: COGNITIVE SCIENCE OF VISUAL LEARNING & MEMORY TECHNIQUES
   6 Brain Principles + Live Forgetting-Curve Simulator + Stickiness Playbook
   ========================================================================= */

export const LEARNING_PILLARS = [
  {
    id: 'drawing-effect',
    short: '1. The Drawing Effect',
    name: '1. The Drawing Effect (Wammes et al., 2016) — 2× Recall Even If You "Can\'t Draw"',
    science: 'Cognitive psychologists proved that sketching a concept produces nearly DOUBLE the memory retention of writing it down—and artistic skill makes ZERO difference! Even a 5-second stick figure or box diagram activates 4 simultaneous neural encoding paths.',
    how: 'Never write a definition twice—draw a tiny 5-second visual symbol beside it! The tiny cognitive effort of translating words into shapes is exactly what cements the memory.',
    svg: `<svg viewBox="0 0 680 230">
      <!-- 4 Neural Encoding Tracks Converging -->
      <rect x="24" y="22" width="176" height="36" rx="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
      <text x="112" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">1. ELABORATIVE MEANING</text>
      <rect x="24" y="70" width="176" height="36" rx="8" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2"/>
      <text x="112" y="92" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">2. MOTOR HAND ACTION</text>
      <rect x="24" y="118" width="176" height="36" rx="8" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/>
      <text x="112" y="140" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">3. VISUAL IMAGERY</text>
      <rect x="24" y="166" width="176" height="36" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/>
      <text x="112" y="188" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">4. VERBAL LABELING</text>
      <!-- Converging Arrows -->
      <path d="M 200 40 C 248 40, 250 112, 294 112 M 200 88 C 242 88, 250 112, 294 112 M 200 136 C 242 136, 250 112, 294 112 M 200 184 C 248 184, 250 112, 294 112" fill="none" stroke="#141836" stroke-width="2.2"/>
      <!-- Center Brain Hub -->
      <rect x="294" y="72" width="144" height="80" rx="12" fill="#141836"/>
      <text x="366" y="106" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#00D4FF">4× ENCODING</text>
      <text x="366" y="128" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" fill="#FFF">Deep Memory Trace</text>
      <!-- Right Recall Comparison Bars -->
      <text x="466" y="48" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#525B7A">RECALL COMPARISON</text>
      <text x="466" y="80" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#525B7A">Write Text</text>
      <rect x="466" y="88" width="90" height="22" rx="4" fill="#CBD5E1"/>
      <text x="564" y="103" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#525B7A">~23%</text>

      <text x="466" y="138" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">Draw Quick Sketch ★</text>
      <rect x="466" y="146" width="176" height="26" rx="4" fill="#10B981"/>
      <text x="648" y="163" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#FFF">~45%+ (2×)</text>
      <text x="466" y="196" font-family="Patrick Hand, cursive" font-size="13.5" fill="#047857">Ugly doodles work just as well!</text>
    </svg>`
  },
  {
    id: 'dual-coding',
    short: '2. Dual-Coding Theory',
    name: '2. Dual-Coding Theory (Paivio) — Two Memory Keys Are Better Than One',
    science: 'Human memory processes verbal language (words/rules) and visual imagery (diagrams/spatial layouts) in two parallel subsystems. When you link a German noun or tax statute to a concrete icon, forgetting the word still lets the picture pull it back!',
    how: 'Pair EVERY abstract concept with one concrete visual metaphor (e.g., Reverse Charge = Buyer catching a flying "19%" baton; Satzklammer = Twin suspension bridge towers).',
    svg: `<svg viewBox="0 0 680 230">
      <rect x="28" y="24" width="246" height="182" rx="10" fill="#E0F2FE" fill-opacity="0.45" stroke="#0EA5E9" stroke-width="2.2"/>
      <text x="151" y="50" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0369A1">CHANNEL A // VERBAL CODE</text>
      <text x="151" y="88" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="18" fill="#141836">"die Frist"</text>
      <text x="151" y="118" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">Statutory deadline (10. Mai)</text>
      <rect x="58" y="144" width="186" height="36" rx="18" fill="#FFF" stroke="#0EA5E9" stroke-width="1.6"/>
      <text x="151" y="166" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">RETRIEVAL KEY #1 (TEXT)</text>

      <!-- Dual Bridge Link -->
      <path d="M 274 96 H 406 M 274 134 H 406" stroke="#7C3AED" stroke-width="2.8" stroke-dasharray="6 4"/>
      <rect x="292" y="96" width="96" height="38" rx="19" fill="#7C3AED"/>
      <text x="340" y="119" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#FFF">REFERENTIAL</text>

      <rect x="406" y="24" width="246" height="182" rx="10" fill="#FCE7F3" fill-opacity="0.45" stroke="#EC4899" stroke-width="2.2"/>
      <text x="529" y="50" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">CHANNEL B // VISUAL CODE</text>
      <!-- Mini Calendar + Hourglass Icon -->
      <rect x="498" y="66" width="62" height="58" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <rect x="498" y="66" width="62" height="18" rx="4" fill="#EC4899"/>
      <text x="529" y="79" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">MAI</text>
      <text x="529" y="112" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="22" font-weight="700" fill="#141836">10</text>
      <rect x="436" y="144" width="186" height="36" rx="18" fill="#FFF" stroke="#EC4899" stroke-width="1.6"/>
      <text x="529" y="166" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">RETRIEVAL KEY #2 (IMAGE)</text>
    </svg>`
  },
  {
    id: 'spatial-palace',
    short: '3. Spatial Page Palace',
    name: '3. Spatial Memory & "The Page as a Memory Palace" (Method of Loci)',
    science: 'Your hippocampus contains dedicated "place cells" evolved to remember physical geography. When you put every topic in a distinct spatial layout on a physical A5 spread, during an exam you literally "see" the bottom-right Magenta box in your mind\'s eye!',
    how: 'Use consistent anchor zones across study spreads (e.g. Top-Left = Trigger Rule, Center = Diagram, Bottom-Right = Exam Trap) and vary the central illustration shape so no two spreads look identical.',
    svg: `<svg viewBox="0 0 680 230">
      <rect x="44" y="14" width="592" height="202" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
      <line x1="340" y1="14" x2="340" y2="216" stroke="#94A3B8" stroke-width="2" stroke-dasharray="5 4"/>
      <!-- Left Page Zones -->
      <rect x="64" y="30" width="256" height="68" rx="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
      <text x="192" y="56" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">NORTH-WEST // CORE RULE (§)</text>
      <text x="192" y="80" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Always top-left of left page</text>
      <rect x="64" y="112" width="256" height="86" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
      <text x="192" y="142" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">SOUTH-WEST // WORKED € MATH</text>
      <text x="192" y="168" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Concrete numbers sit anchored here</text>
      <!-- Right Page Zones -->
      <rect x="360" y="30" width="256" height="92" rx="8" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2"/>
      <text x="488" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#6D28D9">NORTH-EAST // HERO DIAGRAM</text>
      <text x="488" y="90" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Unique visual landmark per topic!</text>
      <rect x="360" y="136" width="256" height="62" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.4"/>
      <text x="488" y="162" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">SOUTH-EAST // ⚠️ AUDIT TRAP!</text>
      <text x="488" y="184" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">Brain maps "bottom-right = danger"</text>
    </svg>`
  },
  {
    id: 'von-restorff',
    short: '4. Von Restorff Pop',
    name: '4. The Von Restorff (Isolation) Effect — Why Less Color = Stronger Memory',
    science: 'When multiple similar items appear together, the ONE item that stands out visually is remembered up to 3× better. Highlighting 60% of a textbook page destroys the Isolation Effect completely!',
    how: 'Keep 85% of your page calm monochrome Indigo + dot-grid paper, and reserve bright Magenta strictly for the ONE exception, exam trap, or irregular verb form on that spread!',
    svg: `<svg viewBox="0 0 680 230">
      <!-- Top Row: Over-highlighted (Zero Pop) -->
      <text x="34" y="34" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">✕ OVER-HIGHLIGHTED // ZERO ISOLATION EFFECT</text>
      ${[0,1,2,3,4,5].map(i => `<rect x="${34 + i * 104}" y="46" width="88" height="44" rx="7" fill="${['#FEF08A','#FBCFE8','#BAE6FD','#BBF7D0','#DDD6FE','#FED7AA'][i]}" stroke="#141836" stroke-width="2"/><text x="${78 + i * 104}" y="72" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">ITEM 0${i+1}</text>`).join('')}
      <!-- Bottom Row: Von Restorff Isolation -->
      <text x="34" y="132" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">✓ VON RESTORFF ISOLATION // 1 ITEM BURNS INTO MEMORY ★</text>
      ${[0,1,2,3,4,5].map(i => {
        const pop = i === 4;
        return `<rect x="${34 + i * 104}" y="144" width="88" height="48" rx="7" fill="${pop ? '#EC4899' : '#EEF2FC'}" stroke="${pop ? '#141836' : '#CBD5E1'}" stroke-width="${pop ? '2.8' : '1.6'}"/><text x="${78 + i * 104}" y="172" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="${pop ? '#FFF' : '#64748B'}">${pop ? 'TRAP! ★' : 'RULE 0' + (i+1)}</text>`;
      }).join('')}
      <text x="340" y="216" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">Restraint isn't just aesthetic — it is the biological engine of attention and recall!</text>
    </svg>`
  },
  {
    id: 'retrieval',
    short: '5. Blank-Page Retrieval',
    name: '5. Active Retrieval & The "90-Second Magenta Gap" Drill',
    science: 'Re-reading neat notes triggers the "Illusion of Fluency"—it feels easy, so your brain stops building memory. Struggling to reconstruct a diagram on a BLANK page from memory strengthens neural pathways 3× faster!',
    how: 'After finishing a spread, flip to a blank scratch sheet and sketch the skeleton from memory in 90 seconds using Indigo ink. Then reopen your notes and fill ONLY what you forgot in bright Magenta!',
    svg: `<svg viewBox="0 0 680 230">
      <rect x="24" y="28" width="184" height="170" rx="10" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/>
      <text x="116" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">1. CLOSE BOOK</text>
      <text x="116" y="96" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5">Sketch structure from</text>
      <text x="116" y="118" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5">memory in 90 sec</text>
      <text x="116" y="156" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">(05 INDIGO INK)</text>

      <line x1="208" y1="112" x2="246" y2="112" stroke="#141836" stroke-width="2.8"/>
      <polygon points="240,105 252,112 240,119" fill="#141836"/>

      <rect x="252" y="28" width="184" height="170" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.4"/>
      <text x="344" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">2. EXPOSE GAPS</text>
      <text x="344" y="96" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5">Open notes → fill ONLY</text>
      <text x="344" y="118" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5">missing pieces in red!</text>
      <text x="344" y="156" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">(MAGENTA PEN)</text>

      <line x1="436" y1="112" x2="474" y2="112" stroke="#047857" stroke-width="2.8"/>
      <polygon points="468,105 480,112 468,119" fill="#047857"/>

      <rect x="480" y="28" width="176" height="170" rx="10" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>
      <text x="568" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">3. LOCKED IN ✓</text>
      <text x="568" y="96" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5">Brain hyper-focuses on</text>
      <text x="568" y="118" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5">your exact weak spots!</text>
      <text x="568" y="156" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">REPEAT D1 • D3 • D7</text>
    </svg>`
  },
  {
    id: 'chunking',
    short: '6. Cognitive Chunking',
    name: '6. Working-Memory Chunking (4±1 Slots) & Cognitive Load',
    science: 'Human working memory holds only ~4 items simultaneously. A 12-bullet text list triggers cognitive overload immediately, whereas grouping those 12 facts into ONE 3-pillar visual diagram compresses them into a single effortless mental chunk!',
    how: 'Whenever a list exceeds 4 bullets, STOP—group it into 3 visual columns, a 2×2 matrix, or a 3-step pipeline icon strip before continuing!',
    svg: `<svg viewBox="0 0 680 230">
      <rect x="24" y="22" width="276" height="186" rx="10" fill="#FFF7FB" stroke="#BE185D" stroke-width="2"/>
      <text x="162" y="46" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">✕ 12 LOOSE FACTS = OVERLOAD</text>
      ${Array.from({ length: 12 }, (_, i) => `<circle cx="${58 + (i % 4) * 68}" cy="${82 + Math.floor(i / 4) * 40}" r="11" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.6"/>`).join('')}
      <text x="162" y="196" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#BE185D">Exceeds 4-slot working memory!</text>

      <text x="340" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="22" font-weight="700" fill="#0EA5E9">→</text>

      <rect x="380" y="22" width="276" height="186" rx="10" fill="#F2FDF8" stroke="#047857" stroke-width="2.2"/>
      <text x="518" y="46" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">✓ 3 VISUAL CHUNKS = INSTANT!</text>
      <rect x="398" y="64" width="74" height="106" rx="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
      <text x="435" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">CHUNK 1</text>
      <rect x="481" y="64" width="74" height="106" rx="8" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2"/>
      <text x="518" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">CHUNK 2</text>
      <rect x="564" y="64" width="74" height="106" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
      <text x="601" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">CHUNK 3</text>
      <text x="518" y="196" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#047857">Fits comfortably in 3 working slots ✓</text>
    </svg>`
  }
];

const STICK_PLAYBOOKS = {
  tax: {
    title: 'Making Dense Tax & Law Statutes Stick',
    format: '4-Box Statute Card (App F) + Binary YES/NO Decision Tree',
    hook: 'Turn the statute trigger into a bizarre visual cartoon (e.g., § 13b Reverse Charge = Buyer catching a flying "19%" baton!). Color the ONE exam exception Magenta (Von Restorff).',
    cadence: 'Draw blank-page decision tree from memory at Day 1 (90s), Day 3 (with €1,000 example), and Day 14.'
  },
  accounting: {
    title: 'Making Accounting & Financial Mechanics Stick',
    format: 'Color-Coded T-Account Flow + 3-Statement Plumbing Map (App F)',
    hook: 'Always anchor DR/SOLL Left (Cyan) and CR/HABEN Right (Magenta), and draw the red 31.12. Cut-Off Wall so accruals vs. prepayments become spatial geography!',
    cadence: 'Practice 3 blank-page journal entries per week using tabular right-aligned numbers without peeking.'
  },
  deutsch: {
    title: 'Making German Vocab & Grammar Stick Forever',
    format: 'Split-Page Fold-Recall Spread + Satzklammer Bridge + Prefix Tree (App H)',
    hook: 'Color EVERY noun border by gender (der=Cyan, die=Magenta, das=Mint), draw a 5-second doodle, and link 3 new chunks into one funny mini-story about your own workday!',
    cadence: 'Fold the page vertically and self-test aloud on Day 1, Day 3, Day 7 & Day 21 — tick the 4 corner dots!'
  },
  product: {
    title: 'Making Product Strategy & Book Concepts Stick',
    format: '1-Page Book Dashboard (App I) + Opportunity Tree / Emotion Wave (App L)',
    hook: 'Force the entire 300-page book onto ONE A5 spread with strictly 3 visual pillars + 1 Feynman 12-year-old sentence + 2 concrete experiments this week!',
    cadence: 'Teach the spread to a colleague (or yourself aloud) using ONLY the diagram within 48 hours.'
  },
  tech: {
    title: 'Making Complex AI & System Architectures Stick',
    format: 'Exploded Isometric 4-Layer Cutaway (App K) + PCB Circuit Mind Map (App E)',
    hook: 'Turn invisible data flow into a physical Conveyor-Belt Factory (App G) so every API call, RAG lookup, and HITL guardrail has a memorable mechanical form.',
    cadence: 'Sketch the system from scratch on a whiteboard or blank dot-grid sheet before every design review!'
  }
};

function renderForgettingCurveSVG(useDraw, useSpace, useIsolation) {
  // Compute 30-day retention % based on toggled cognitive techniques
  const basePath = 'M 64 46 C 92 146, 150 184, 624 202';
  const drawBoost = useDraw ? 1 : 0;
  const isoBoost = useIsolation ? 1 : 0;
  let score = 14 + drawBoost * 24 + isoBoost * 12 + (useSpace ? 42 : 0);
  if (score > 94) score = 94;

  // Build active curve path
  let activePath = basePath;
  let col = '#EC4899';
  if (useSpace) {
    col = '#10B981';
    const dip1 = 102 - drawBoost * 14 - isoBoost * 6;
    const dip2 = 86 - drawBoost * 12 - isoBoost * 6;
    const dip3 = 72 - drawBoost * 10 - isoBoost * 4;
    const endY = 66 - drawBoost * 10 - isoBoost * 6;
    activePath = `M 64 46 Q 94 ${dip1} 118 ${dip1} L 122 48 Q 168 ${dip2} 214 ${dip2} L 218 48 Q 300 ${dip3} 374 ${dip3} L 378 48 Q 490 ${endY} 624 ${endY}`;
  } else if (useDraw || useIsolation) {
    col = '#0EA5E9';
    const endY = 202 - drawBoost * 58 - isoBoost * 26;
    activePath = `M 64 46 C 120 ${endY - 22}, 240 ${endY - 6}, 624 ${endY}`;
  }

  return {
    score,
    svg: `<svg viewBox="0 0 680 255">
      <!-- Grid & Axes -->
      <g stroke="#E2E8F0" stroke-width="1.2">
        <line x1="64" y1="46" x2="634" y2="46"/><line x1="64" y1="98" x2="634" y2="98"/><line x1="64" y1="150" x2="634" y2="150"/>
      </g>
      <polyline points="64,34 64,210 638,210" fill="none" stroke="#141836" stroke-width="2.4"/>
      <g font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A">
        <text x="54" y="50" text-anchor="end">100%</text>
        <text x="54" y="102" text-anchor="end">65%</text>
        <text x="54" y="154" text-anchor="end">35%</text>
        <text x="54" y="212" text-anchor="end">0%</text>
        <text x="64" y="228" text-anchor="middle">DAY 0</text>
        <text x="122" y="228" text-anchor="middle">D1</text>
        <text x="218" y="228" text-anchor="middle">D3</text>
        <text x="378" y="228" text-anchor="middle">D7</text>
        <text x="624" y="228" text-anchor="middle">DAY 30</text>
      </g>
      <!-- Passive Baseline Dashed Curve -->
      <path d="${basePath}" fill="none" stroke="#94A3B8" stroke-width="2.2" stroke-dasharray="5 4"/>
      <text x="480" y="192" font-family="IBM Plex Mono, monospace" font-size="9" fill="#64748B">Passive Reading Only (~14%)</text>
      <!-- Active Enhanced Curve -->
      <path d="${activePath}" fill="none" stroke="${col}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Spaced Recall Pins -->
      ${useSpace ? `
        <g fill="#10B981" stroke="#141836" stroke-width="1.8">
          <circle cx="122" cy="48" r="5.5"/><circle cx="218" cy="48" r="5.5"/><circle cx="378" cy="48" r="5.5"/>
        </g>
        <text x="122" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">90s RECALL</text>
        <text x="218" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">D3 SKETCH</text>
        <text x="378" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">D7 RECALL ★</text>
      ` : ''}
      <!-- 30-Day Score Badge -->
      <rect x="526" y="18" width="114" height="28" rx="14" fill="#141836"/>
      <text x="583" y="36" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="${col === '#10B981' ? '#34D399' : '#00D4FF'}">D30: ${score}% HELD</text>
    </svg>`
  };
}

export function renderVisualLearningLabHTML() {
  return `
    <!-- CANDID ANTI-PROCRASTINATION CALLOUT -->
    <div class="architect-note">
      <div class="architect-note-q">
        The 30-Second Rule: the moment you spend ten minutes shading a banner instead of testing whether you remember the idea, drawing has become procrastination.
      </div>
      <div class="architect-note-sub">
        Cognitive research (Wammes et al., 2016) found that rough, ugly 5-second sketches produce the exact same memory lift as polished illustrations. The learning happens during the tiny mental friction of translating a concept into a shape—not during the marker coloring afterward. Cap study icons at 30 seconds and put the real effort into blank-page recall.
      </div>
    </div>

    <!-- 1. THE 6 COGNITIVE PILLARS OF VISUAL LEARNING -->
    <section class="lab cyan-accent" id="vl-pillars-lab">
      <div class="lab-head">
        <span class="lab-title">Cognitive Principles // Why Visual Notes Stick Better Than Re-Reading</span>
        <span class="pill cyan">Paivio • Wammes • Von Restorff</span>
      </div>
      <div class="lab-body">
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          ${LEARNING_PILLARS.map((p, i) => `<button class="seg-btn vl-tab ${i === 0 ? 'active' : ''}" data-id="${p.id}">${p.short}</button>`).join('')}
        </div>

        <div class="card tinted" style="border-color:var(--cyan);">
          <span id="vl-title" class="card-h" style="font-size:18px;"></span>
          <p id="vl-science" style="font-size:14.8px; color:var(--ink-body);"></p>
          <div id="vl-svg-box" class="svg-box" style="margin:6px 0;"></div>
          <div class="card" style="background:#FFF; border-left:5px solid var(--mint);">
            <div class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep);">NOTEBOOK APPLICATION</div>
            <p id="vl-how" class="card-p" style="font-size:14.2px; color:var(--ink-body);"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. LIVE EBBINGHAUS FORGETTING-CURVE MODEL -->
    <section class="lab mint-accent" id="vl-curve-lab">
      <div class="lab-head">
        <span class="lab-title">Illustrative Retention Model // Flattening the Forgetting Curve</span>
        <span id="vl-ret-pill" class="pill mint">Illustrative D30: ~92%</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl no-print" style="flex-wrap:wrap;">
          <label class="chk-lbl"><input id="vl-chk-draw" type="checkbox" checked /> + The Drawing Effect (Dual-Code)</label>
          <label class="chk-lbl"><input id="vl-chk-iso" type="checkbox" checked /> + Von Restorff Isolation</label>
          <label class="chk-lbl"><input id="vl-chk-space" type="checkbox" checked /> + Day 1 / 3 / 7 Blank-Page Recalls</label>
        </div>
        <div id="vl-curve-svg" class="svg-box"></div>
        <p class="lab-cap">
          <strong>Note on the curve:</strong> These percentages are an illustrative model showing relative leverage, not a laboratory guarantee. Notice that passive reading collapses within days, while just three 90-second blank-page sketch recalls do the heaviest lifting.
        </p>
      </div>
    </section>

    <!-- 3. CONCRETE PASS/FAIL RETRIEVAL DRILL -->
    <div class="drill-card">
      <span class="pill magenta" style="align-self:flex-start;">Honest Recall Test // 2 Minutes</span>
      <div class="card-h">The Closed-Book Magenta Gap Check</div>
      <p class="card-p">
        Before closing your study session, turn to a blank sheet of scrap paper and draw the core diagram or decision tree from memory in Indigo ink—no peeking, messy lines welcome. Then reopen your original notes and fill in <em>only</em> what you forgot or got backwards using Magenta ink.
      </p>
      <div class="drill-pass">PASS / FAIL: If less than 20% of the page is Magenta, wait 3 days before reviewing. If half the page is Magenta, repeat the 90-second closed-book sketch tomorrow morning before reading anything new.</div>
    </div>

    <!-- 4. INTERACTIVE STICKINESS PROTOCOL PICKER -->
    <section class="lab magenta-accent" id="vl-picker-lab">
      <div class="lab-head">
        <span class="lab-title">Study Protocol Picker // Match the Method to the Subject</span>
        <span class="pill magenta">3-Part Cadence</span>
      </div>
      <div class="lab-body">
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          <button class="seg-btn st-btn active" data-k="tax">Tax &amp; Law Statutes</button>
          <button class="seg-btn st-btn" data-k="accounting">Accounting Mechanics</button>
          <button class="seg-btn st-btn" data-k="deutsch">German B1/B2 Vocab</button>
          <button class="seg-btn st-btn" data-k="product">Product &amp; Books</button>
          <button class="seg-btn st-btn" data-k="tech">AI &amp; Tech Systems</button>
        </div>
        <div id="vl-stick-card" class="card tinted" style="border-color:var(--magenta);"></div>
      </div>
    </section>

    <!-- 5. 6 ANALOG STUDY RITUALS -->
    <section class="section-block">
      <h2>6 Practical Notebook Habits That Actually Hold Up</h2>
      <div class="grid-3">
        <div class="card">
          <span class="pill cyan" style="align-self:flex-start;">Habit 01 // 90 Seconds</span>
          <div class="card-h">The Blank-Page Magenta Gap</div>
          <p class="card-p">Close the book right after studying. Reconstruct the skeleton from memory in Indigo, then reopen and fill only missed details in Magenta.</p>
        </div>
        <div class="card">
          <span class="pill magenta" style="align-self:flex-start;">Habit 02 // Corner Dots</span>
          <div class="card-h">The 4-Dot Spaced Stamp</div>
          <p class="card-p">Draw <code>○ ○ ○ ○</code> top-right on key spreads. Fill one circle each time you recall the page on Day 1, Day 3, Day 7, and Day 21.</p>
        </div>
        <div class="card">
          <span class="pill amber" style="align-self:flex-start;">Habit 03 // Absurdity</span>
          <div class="card-h">Slightly Ridiculous Icons</div>
          <p class="card-p">Odd or exaggerated doodles stick better than polite clip-art. Give a statutory penalty grumpy eyebrows or draw tiny scissors on German separable prefixes.</p>
        </div>
        <div class="card">
          <span class="pill mint" style="align-self:flex-start;">Habit 04 // Compression</span>
          <div class="card-h">The 5-Minute Evening Scrub</div>
          <p class="card-p">Take fast, messy notes live, then spend five calm minutes distilling them onto one clean diagram. That forced compression is where understanding settles.</p>
        </div>
        <div class="card">
          <span class="pill violet" style="align-self:flex-start;">Habit 05 // Mix Up</span>
          <div class="card-h">Interleaved Scratch Reviews</div>
          <p class="card-p">Avoid drilling ten identical problems in a row. Put one tax routing tree, one accrual cut-off, and one German verb bridge on the same scratch sheet to test recognition.</p>
        </div>
        <div class="card">
          <span class="pill cyan" style="align-self:flex-start;">Habit 06 // Bridge</span>
          <div class="card-h">Notebook Photo → Anki Occlusion</div>
          <p class="card-p">Snap a phone photo of your clearest dot-grid diagram and mask its labels in Anki Image Occlusion so analog sketches plug directly into spaced review.</p>
        </div>
      </div>
    </section>
  `;
}

export function initVisualLearningLab() {
  const gal = document.getElementById('vl-pillars-lab');
  if (!gal) return;

  let activeId = LEARNING_PILLARS[0].id;
  const renderPillar = () => {
    const p = LEARNING_PILLARS.find(x => x.id === activeId) || LEARNING_PILLARS[0];
    document.getElementById('vl-title').textContent = p.name;
    document.getElementById('vl-science').textContent = p.science;
    document.getElementById('vl-svg-box').innerHTML = p.svg;
    document.getElementById('vl-how').textContent = p.how;
  };
  gal.querySelectorAll('.vl-tab').forEach(b => b.addEventListener('click', () => {
    activeId = b.dataset.id;
    gal.querySelectorAll('.vl-tab').forEach(x => x.classList.toggle('active', x === b));
    renderPillar();
  }));
  renderPillar();

  // Forgetting Curve Simulator
  const renderCurve = () => {
    const d = document.getElementById('vl-chk-draw').checked;
    const i = document.getElementById('vl-chk-iso').checked;
    const s = document.getElementById('vl-chk-space').checked;
    const res = renderForgettingCurveSVG(d, s, i);
    document.getElementById('vl-curve-svg').innerHTML = res.svg;
    document.getElementById('vl-ret-pill').textContent = `Illustrative D30: ~${res.score}%`;
  };
  ['vl-chk-draw', 'vl-chk-iso', 'vl-chk-space'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', renderCurve);
  });
  renderCurve();

  // Stickiness Picker
  let pKey = 'tax';
  const renderPicker = () => {
    const p = STICK_PLAYBOOKS[pKey] || STICK_PLAYBOOKS.tax;
    document.getElementById('vl-stick-card').innerHTML = `
      <div class="card-h" style="font-size:17px;">${p.title}</div>
      <div class="grid-3">
        <div class="card"><div class="mono" style="font-size:9.5px; font-weight:700; color:var(--cyan);">1. BEST VISUAL FORMAT</div><div style="font-size:14px; font-weight:600;">${p.format}</div></div>
        <div class="card"><div class="mono" style="font-size:9.5px; font-weight:700; color:var(--magenta);">2. MEMORY HOOK TRICK</div><div style="font-size:13.8px;">${p.hook}</div></div>
        <div class="card"><div class="mono" style="font-size:9.5px; font-weight:700; color:var(--mint-deep);">3. SPACED RECALL CADENCE</div><div style="font-size:13.8px;">${p.cadence}</div></div>
      </div>
    `;
  };
  document.querySelectorAll('.st-btn').forEach(b => b.addEventListener('click', () => {
    pKey = b.dataset.k;
    document.querySelectorAll('.st-btn').forEach(x => x.classList.toggle('active', x === b));
    renderPicker();
  }));
  renderPicker();
}
