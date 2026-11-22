/* =========================================================================
   APPENDIX C: THE SKETCHNOTE STEAL BOOK (200 GRAPHICS)
   200 Iconic Handwritten-Note Graphics & Visual Concepts Across 10 Categories
   ========================================================================= */
import { toggleFavorite, isFavorite } from '../state.js';
import { STEAL_200_A } from '../data/steal200A.js';
import { STEAL_200_B } from '../data/steal200B.js';
import { STEAL_200_C } from '../data/steal200C.js';
import { STEAL_200_D } from '../data/steal200D.js';

const STEAL_BASE_40 = [
  // HEADERS & FRAMES (1–4)
  {
    id: 'ribbon', cat: 'frames', name: '1. 3D Folded Ribbon Banner',
    use: 'Spread Titles, Book Chapters, German Grammar Headers',
    recipe: ['Draw central rectangle (width of your title).', 'Drop two shorter swallowtail flags slightly lower behind left & right edges.', 'Shade the tiny triangular underside folds in 2x Cool Grey for instant 3D depth.'],
    svg: `<svg viewBox="0 0 260 130">
      <polygon points="18,52 58,52 58,92 18,92 32,72" fill="#0EA5E9" fill-opacity="0.32" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="242,52 202,52 202,92 242,92 228,72" fill="#0EA5E9" fill-opacity="0.32" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="44,78 58,92 58,78" fill="#64748B" stroke="#141836" stroke-width="1.6"/>
      <polygon points="216,78 202,92 202,78" fill="#64748B" stroke="#141836" stroke-width="1.6"/>
      <rect x="44" y="34" width="172" height="44" rx="3" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <text x="130" y="62" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="18" fill="#141836">Konjunktiv II</text>
    </svg>`
  },
  {
    id: 'terminal', cat: 'frames', name: '2. Retro UI / Terminal Window',
    use: 'AI Prompts, MCP JSON Payloads, App Wireframes',
    recipe: ['Draw a Cyber Card with Cool Grey offset shadow.', 'Slice a 1-dot top titlebar with 3 tiny macOS circles (Magenta, Amber, Mint).', 'Write monospace commands or prompt templates inside in 03 nib.'],
    svg: `<svg viewBox="0 0 260 130">
      <path d="M 32 114 H 238 V 24" fill="none" stroke="#94A3B8" stroke-width="7" opacity="0.6"/>
      <rect x="24" y="16" width="208" height="92" rx="7" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <path d="M 24 38 H 232" stroke="#141836" stroke-width="1.8"/>
      <circle cx="38" cy="27" r="4" fill="#EC4899" stroke="#141836" stroke-width="1.2"/>
      <circle cx="52" cy="27" r="4" fill="#F59E0B" stroke="#141836" stroke-width="1.2"/>
      <circle cx="66" cy="27" r="4" fill="#10B981" stroke="#141836" stroke-width="1.2"/>
      <text x="148" y="30" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#525B7A">mcp_triage.json</text>
      <text x="36" y="60" font-family="IBM Plex Mono, monospace" font-size="10" fill="#0EA5E9">&gt; route("DE_VAT")</text>
      <text x="36" y="78" font-family="IBM Plex Mono, monospace" font-size="10" fill="#141836">  latency: Ø.2s</text>
      <text x="36" y="96" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">  status: OK ✓</text>
    </svg>`
  },
  {
    id: 'ticket', cat: 'frames', name: '3. Perforated Ticket Stub / Receipt',
    use: 'Executive Punchlines, Cost Savings, Event Summaries',
    recipe: ['Draw a wide rectangle and notch two half-circles out of the left & right edges.', 'Add a vertical dashed tear-line 2/3 across.', 'Stamp the big quantitative headline on the left and a tiny barcode/stamp on the stub.'],
    svg: `<svg viewBox="0 0 260 130">
      <path d="M 22 24 H 238 V 50 A 14 14 0 0 0 238 78 V 104 H 22 V 78 A 14 14 0 0 0 22 50 Z" fill="#FFFDF5" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>
      <line x1="176" y1="26" x2="176" y2="102" stroke="#141836" stroke-width="1.6" stroke-dasharray="4 3"/>
      <text x="42" y="52" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0EA5E9">COMPUTE RECEIPT</text>
      <text x="42" y="76" font-family="IBM Plex Mono, monospace" font-size="17" font-weight="700" fill="#047857">-97% COST</text>
      <text x="42" y="94" font-family="Patrick Hand, cursive" font-size="12.5" fill="#525B7A">€0.88 → €0.04 / query</text>
      <g stroke="#141836"><line x1="194" y1="42" x2="194" y2="86" stroke-width="2.4"/><line x1="201" y1="42" x2="201" y2="86" stroke-width="1"/><line x1="206" y1="42" x2="206" y2="86" stroke-width="3"/><line x1="213" y1="42" x2="213" y2="86" stroke-width="1.4"/><line x1="219" y1="42" x2="219" y2="86" stroke-width="2"/></g>
    </svg>`
  },
  {
    id: 'folders', cat: 'frames', name: '4. Overlapping File Folder Tabs',
    use: 'Tax Jurisdictions (DE/FR/OSS) or German 4 Cases',
    recipe: ['Draw the front folder rectangle with a raised trapezoid tab at top-left.', 'Tuck 2–3 staggered tabs peeking out behind the top edge.', 'Color-code each tab using your semantic highlighters (Cyan, Magenta, Mint, Amber).'],
    svg: `<svg viewBox="0 0 260 130">
      <path d="M 164 20 H 214 L 224 34 H 236 V 98 H 164 Z" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/>
      <path d="M 118 24 H 168 L 178 38 H 236 V 102 H 118 Z" fill="#D1FAE5" stroke="#141836" stroke-width="1.8"/>
      <path d="M 72 28 H 122 L 132 42 H 236 V 106 H 72 Z" fill="#FCE7F3" stroke="#141836" stroke-width="1.8"/>
      <path d="M 24 32 H 78 L 88 46 H 236 V 112 H 24 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
      <text x="52" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">NOM</text>
      <text x="100" y="40" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">AKK</text>
      <text x="148" y="36" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">DAT</text>
      <text x="192" y="32" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#B45309">GEN</text>
      <text x="130" y="84" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="17" font-weight="700">Die 4 deutschen Fälle</text>
    </svg>`
  },

  // DATA, GAUGES & MICRO-WIDGETS (5–8)
  {
    id: 'sliders', cat: 'gauges', name: '5. Mixing-Console Equalizer Sliders',
    use: 'System Tradeoffs, LLM Configs, German Du ↔ Sie Tone',
    recipe: ['Draw 3–4 parallel horizontal tracks (10 dots wide each) with endpoint labels.', 'Place a crisp filled pill knob at the exact setting along each track.', 'Tint the active left fill in Cyan/Magenta/Mint so the profile jumps out instantly.'],
    svg: `<svg viewBox="0 0 260 130">
      ${[
        [30, 'SPEED', 194, '#0EA5E9', 'FAST'],
        [66, 'AUTONOMY', 120, '#EC4899', 'HITL'],
        [102, 'TONE (DE)', 206, '#10B981', 'SIE']
      ].map(([y, lbl, kx, col, val]) => `
        <text x="16" y="${y+4}" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">${lbl}</text>
        <rect x="84" y="${y-5}" width="134" height="10" rx="5" fill="#E2E8F0" stroke="#141836" stroke-width="1.4"/>
        <rect x="84" y="${y-5}" width="${kx-84}" height="10" rx="5" fill="${col}" fill-opacity="0.5"/>
        <rect x="${kx-7}" y="${y-10}" width="14" height="20" rx="4" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <text x="224" y="${y+4}" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="${col}">${val}</text>`).join('')}
    </svg>`
  },
  {
    id: 'dial', cat: 'gauges', name: '6. Speedometer / Risk Dial & Battery',
    use: 'Audit Exposure Level, Weekly Study Energy, Confidence',
    recipe: ['Trace a semicircle arc using a circle template; divide into Mint / Amber / Magenta zones.', 'Anchor a bold needle at bottom-center pointing to the current state.', 'Pair with a 5-cell segmented Battery bar for quick capacity tracking.'],
    svg: `<svg viewBox="0 0 260 130">
      <path d="M 30 98 A 56 56 0 0 1 62 48" fill="none" stroke="#10B981" stroke-width="11"/>
      <path d="M 62 48 A 56 56 0 0 1 110 48" fill="none" stroke="#F59E0B" stroke-width="11"/>
      <path d="M 110 48 A 56 56 0 0 1 142 98" fill="none" stroke="#EC4899" stroke-width="11"/>
      <line x1="86" y1="98" x2="124" y2="62" stroke="#141836" stroke-width="3.2" stroke-linecap="round"/>
      <circle cx="86" cy="98" r="7" fill="#141836"/>
      <text x="86" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">AUDIT RISK</text>
      <!-- Battery Meter -->
      <rect x="176" y="34" width="54" height="68" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <rect x="193" y="26" width="20" height="8" rx="2" fill="#141836"/>
      <rect x="183" y="84" width="40" height="12" rx="2" fill="#10B981"/>
      <rect x="183" y="68" width="40" height="12" rx="2" fill="#10B981"/>
      <rect x="183" y="52" width="40" height="12" rx="2" fill="#0EA5E9"/>
      <text x="203" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">75% B2</text>
    </svg>`
  },
  {
    id: 'podium', cat: 'gauges', name: '7. Isometric Priority Podium (1-2-3)',
    use: 'Top 3 Takeaways, Ranked Drivers, Quarterly Priorities',
    recipe: ['Draw 3 adjacent 2-over-1-up blocks with heights 3 dots (Center #1), 2 dots (Left #2), 1.5 dots (Right #3).', 'Shade right walls 2x Cool Grey and cap #1 in Acid Mint or Amber.', 'Write concise 2-word winners directly on the front faces.'],
    svg: `<svg viewBox="0 0 260 130">
      <!-- #2 Left -->
      <polygon points="62,62 96,76 62,90 28,76" fill="#E0F2FE" stroke="#141836" stroke-width="1.8"/>
      <polygon points="28,76 62,90 62,118 28,104" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>
      <polygon points="96,76 62,90 62,118 96,104" fill="#94A3B8" stroke="#141836" stroke-width="1.8"/>
      <text x="62" y="80" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">#2</text>
      <!-- #3 Right -->
      <polygon points="198,74 232,88 198,102 164,88" fill="#FCE7F3" stroke="#141836" stroke-width="1.8"/>
      <polygon points="164,88 198,102 198,118 164,104" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>
      <polygon points="232,88 198,102 198,118 232,104" fill="#94A3B8" stroke="#141836" stroke-width="1.8"/>
      <text x="198" y="92" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">#3</text>
      <!-- #1 Center Tall -->
      <polygon points="130,30 170,46 130,62 90,46" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <polygon points="90,46 130,62 130,118 90,102" fill="#E2E8F0" stroke="#141836" stroke-width="2"/>
      <polygon points="170,46 130,62 130,118 170,102" fill="#64748B" stroke="#141836" stroke-width="2"/>
      <text x="130" y="50" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#047857">#1 ★</text>
      <text x="130" y="18" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">HITL SAFETY</text>
    </svg>`
  },
  {
    id: 'equation', cat: 'gauges', name: '8. Visual Equation / Recipe Formula',
    use: 'Grammar Formulas, System Recipes, Mental Models',
    recipe: ['Draw 2–3 small 10-second icons separated by bold + and = operators.', 'Place a concise label below each icon.', 'Box the final outcome in Acid Mint or Cyber Amber so the entire rule reads in 2 seconds.'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="14" y="34" width="54" height="44" rx="7" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
      <text x="41" y="60" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0EA5E9">haben</text>
      <text x="80" y="62" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700">+</text>
      <rect x="92" y="34" width="60" height="44" rx="7" fill="#FCE7F3" stroke="#141836" stroke-width="2"/>
      <text x="122" y="60" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">ge-…-t</text>
      <text x="164" y="62" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700">=</text>
      <rect x="176" y="30" width="72" height="52" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>
      <text x="212" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">PERFEKT</text>
      <text x="212" y="70" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5">geprüft ✓</text>
      <text x="130" y="106" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#525B7A">Ich habe die Steuer geprüft.</text>
    </svg>`
  },

  // MAPS & SYSTEMS (9–12)
  {
    id: 'subway', cat: 'maps', name: '9. Berlin U-Bahn / Transit Map',
    use: 'Multi-Track Roadmaps, Parallel Workstreams, Curriculum',
    recipe: ['Pull 2–3 bold colored lines (Cyan, Magenta, Mint) horizontally with crisp 45° diagonal bends.', 'Stamp white-filled station circles along each line.', 'Draw a double-ring pill wherever two tracks meet at a shared Transfer Milestone!'],
    svg: `<svg viewBox="0 0 260 130">
      <polyline points="20,38 110,38 136,64 240,64" fill="none" stroke="#0EA5E9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="20,92 106,92 136,64 240,34" fill="none" stroke="#EC4899" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="44" cy="38" r="6" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <circle cx="88" cy="38" r="6" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <circle cx="58" cy="92" r="6" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <rect x="122" y="54" width="28" height="20" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.6"/>
      <circle cx="216" cy="64" r="6" fill="#10B981" stroke="#141836" stroke-width="2"/>
      <circle cx="216" cy="40" r="6" fill="#F59E0B" stroke="#141836" stroke-width="2"/>
      <text x="44" y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#0EA5E9">AI TRACK</text>
      <text x="58" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#BE185D">TAX TRACK</text>
      <text x="136" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">HITL HUB</text>
    </svg>`
  },
  {
    id: 'skilltree', cat: 'maps', name: '10. RPG Branching Skill Tree',
    use: 'Learning Paths (German A1→C1), Engineering Mastery',
    recipe: ['Anchor 1 root node at bottom-center; branch upward into 2–3 specialization tracks.', 'Fill mastered skills in solid Acid Mint ✓, active skill in Amber, and future skills in dashed grey.', 'Connect prerequisites with crisp orthogonal 90° step lines.'],
    svg: `<svg viewBox="0 0 260 130">
      <path d="M 130 96 V 70 M 64 70 H 196 M 64 70 V 42 M 130 70 V 42 M 196 70 V 42" fill="none" stroke="#141836" stroke-width="2.2"/>
      <rect x="92" y="94" width="76" height="24" rx="12" fill="#D1FAE5" stroke="#047857" stroke-width="2"/><text x="130" y="110" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">A2 CORE ✓</text>
      <rect x="30" y="22" width="68" height="24" rx="6" fill="#D1FAE5" stroke="#047857" stroke-width="2"/><text x="64" y="38" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">CASES ✓</text>
      <rect x="96" y="22" width="68" height="24" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="130" y="38" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#B45309">B2 NOW</text>
      <rect x="162" y="22" width="68" height="24" rx="6" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="4 3"/><text x="196" y="38" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#64748B">C1 LOCK</text>
    </svg>`
  },
  {
    id: 'bookshelf', cat: 'maps', name: '11. Hand-Drawn Bookshelf Tracker',
    use: 'Reading Logs, Tax Statutes Mastered, Textbook Progress',
    recipe: ['Draw one sturdy horizontal shelf line with 2 triangular brackets underneath.', 'Stack vertical and slightly leaning rectangles of varying heights along the shelf.', 'Color each book spine in Cyan/Mint/Magenta only AFTER finishing the book or chapter!'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="28" y="36" width="24" height="62" rx="2" fill="#0EA5E9" fill-opacity="0.32" stroke="#141836" stroke-width="2"/>
      <rect x="54" y="24" width="28" height="74" rx="2" fill="#10B981" fill-opacity="0.32" stroke="#141836" stroke-width="2"/>
      <rect x="84" y="42" width="22" height="56" rx="2" fill="#EC4899" fill-opacity="0.28" stroke="#141836" stroke-width="2"/>
      <rect x="108" y="28" width="26" height="70" rx="2" fill="#FFF" stroke="#141836" stroke-width="1.8" stroke-dasharray="4 3"/>
      <rect x="148" y="34" width="24" height="64" rx="2" transform="rotate(-14 160 66)" fill="#F59E0B" fill-opacity="0.32" stroke="#141836" stroke-width="2"/>
      <rect x="192" y="76" width="46" height="22" rx="2" fill="#EDE9FE" stroke="#141836" stroke-width="2"/>
      <rect x="196" y="54" width="38" height="22" rx="2" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
      <line x1="16" y1="98" x2="246" y2="98" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/>
      <text x="130" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#525B7A">COLOR SPINES AS YOU COMPLETE THEM</text>
    </svg>`
  },
  {
    id: 'filmstrip', cat: 'maps', name: '12. Cinema Filmstrip Storyboard',
    use: '3-Step UX Demos, Workflow Walkthroughs, German Dialogs',
    recipe: ['Draw two parallel horizontal tracks with tiny evenly spaced square sprocket holes top & bottom.', 'Divide the inner strip into 3 equal square frames.', 'Sketch Frame 1 (Trigger) → Frame 2 (Action) → Frame 3 (Result).'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="14" y="22" width="232" height="84" rx="4" fill="#141836"/>
      ${[22, 42, 62, 82, 102, 122, 142, 162, 182, 202, 222].map(x => `<rect x="${x}" y="27" width="10" height="7" rx="1" fill="#FFF"/><rect x="${x}" y="94" width="10" height="7" rx="1" fill="#FFF"/>`).join('')}
      <rect x="22" y="39" width="66" height="50" rx="2" fill="#E0F2FE"/><text x="55" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">1. ASK</text>
      <rect x="97" y="39" width="66" height="50" rx="2" fill="#FCE7F3"/><text x="130" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">2. GATE</text>
      <rect x="172" y="39" width="66" height="50" rx="2" fill="#D1FAE5"/><text x="205" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">3. DONE</text>
    </svg>`
  },

  // MARGINS & CALLOUTS (13–16)
  {
    id: 'loupe', cat: 'callouts', name: '13. Magnifying Zoom Loupe',
    use: 'Zooming Into Statutory Footnotes (§ 13b) or Adjective Endings',
    recipe: ['Draw a tiny box inside your main diagram.', 'Project two dotted expansion rays out to a large stencil circle lens.', 'Draw the blown-up detail cleanly inside the lens with a bold Cyan/Magenta ring.'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="20" y="34" width="68" height="62" rx="5" fill="#EEF2FC" stroke="#141836" stroke-width="1.8"/>
      <rect x="52" y="54" width="24" height="18" rx="3" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.8"/>
      <line x1="76" y1="54" x2="148" y2="24" stroke="#EC4899" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="76" y1="72" x2="148" y2="104" stroke="#EC4899" stroke-width="1.5" stroke-dasharray="4 3"/>
      <circle cx="176" cy="64" r="44" fill="#FFF" stroke="#141836" stroke-width="3"/>
      <circle cx="176" cy="64" r="38" fill="#FCE7F3" fill-opacity="0.35" stroke="#EC4899" stroke-width="1.5"/>
      <text x="176" y="59" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700" fill="#BE185D">§ 13b</text>
      <text x="176" y="77" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13">Reverse Charge!</text>
    </svg>`
  },
  {
    id: 'sticky', cat: 'callouts', name: '14. Curled Sticky Note & Paperclip',
    use: 'Margin Reminders, German Merksätze, Open Questions',
    recipe: ['Draw a square note with a curved folded-up bottom-right dog-ear.', 'Shade a thin soft Cool Grey crescent right under the lifted corner.', 'Add a 2-stroke U-shaped paperclip hooking over the top edge.'],
    svg: `<svg viewBox="0 0 260 130">
      <path d="M 54 110 Q 130 116 204 102 L 194 94 Z" fill="#94A3B8" fill-opacity="0.48"/>
      <path d="M 52 24 H 204 V 88 L 182 108 H 52 Z" fill="#FFFDF5" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
      <polygon points="182,108 182,88 204,88" fill="#FEF3C7" stroke="#141836" stroke-width="1.8" stroke-linejoin="round"/>
      <!-- Paperclip -->
      <path d="M 92 34 V 14 A 8 8 0 0 1 108 14 V 38 A 5 5 0 0 1 98 38 V 20" fill="none" stroke="#0EA5E9" stroke-width="2.6" stroke-linecap="round"/>
      <text x="128" y="60" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">MERKSATZ!</text>
      <text x="128" y="82" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">mit / nach / bei → DATIV</text>
    </svg>`
  },
  {
    id: 'flask', cat: 'callouts', name: '15. Lab Experiment Flask & Hypothesis',
    use: 'AI Prompt Evals, A/B Benchmarks, Study Experiments',
    recipe: ['Draw a narrow vertical neck opening into a crisp conical triangular base (Conical Flask).', 'Tint the bottom half with Cyan/Mint bubbling liquid + 3 rising circles.', 'Label right beside it: Hypothesis → Metric → Verdict.'],
    svg: `<svg viewBox="0 0 260 130">
      <path d="M 56 20 H 84 M 62 20 V 50 L 34 102 A 6 6 0 0 0 40 110 H 100 A 6 6 0 0 0 106 102 L 78 50 V 20" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>
      <polygon points="48,76 92,76 104,104 36,104" fill="#0EA5E9" fill-opacity="0.34"/>
      <circle cx="62" cy="88" r="4" fill="#FFF" stroke="#0EA5E9" stroke-width="1.5"/>
      <circle cx="76" cy="70" r="3.5" fill="#10B981"/><circle cx="70" cy="40" r="3" fill="#EC4899"/>
      <text x="126" y="48" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0EA5E9">EVAL #09 // FLASH</text>
      <text x="126" y="70" font-family="Patrick Hand, cursive" font-size="14.5">• 50 EU VAT prompts</text>
      <text x="126" y="92" font-family="Patrick Hand, cursive" font-size="14.5" font-weight="700" fill="#047857">→ 98% accuracy ✓</text>
    </svg>`
  },
  {
    id: 'titleblock', cat: 'callouts', name: '16. Architect\'s Blueprint Title Block',
    use: 'Bottom-Right Corner Stamp on Master Spreads',
    recipe: ['Reserve a 9×4 dot rectangle in the bottom-right corner of your best spreads.', 'Subdivide cleanly into PROJECT, DATE, NOTEBOOK ID (`NB02-P14`), and STATUS (`v2 ✓`).', 'Transforms any hand-drawn diagram into an engineering museum piece.'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="22" y="20" width="216" height="90" fill="#FFF" stroke="#141836" stroke-width="2.6"/>
      <line x1="22" y1="54" x2="238" y2="54" stroke="#141836" stroke-width="1.8"/>
      <line x1="22" y1="82" x2="238" y2="82" stroke="#141836" stroke-width="1.6"/>
      <line x1="142" y1="54" x2="142" y2="110" stroke="#141836" stroke-width="1.6"/>
      <text x="32" y="34" font-family="IBM Plex Mono, monospace" font-size="8" fill="#525B7A">PROJECT / SPREAD TITLE</text>
      <text x="32" y="48" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700">EU VAT COPILOT STACK</text>
      <text x="32" y="72" font-family="IBM Plex Mono, monospace" font-size="9.5">REF: NB02-P14</text>
      <text x="152" y="72" font-family="IBM Plex Mono, monospace" font-size="9.5">2026.11.22</text>
      <text x="32" y="100" font-family="IBM Plex Mono, monospace" font-size="9.5">SCALE: 5mm DOT</text>
      <rect x="150" y="88" width="78" height="16" rx="3" fill="#D1FAE5"/><text x="189" y="99" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">REV 2.0 ✓</text>
    </svg>`
  },

  // NEW COMPONENT TYPES & ILLUSTRATION IDEAS (17–28)
  {
    id: 'phone', cat: 'frames', name: '17. Smartphone Chat UI Mockup',
    use: 'German WhatsApp Dialogs, AI Copilot Chat Flows, UX Sketches',
    recipe: ['Draw a tall rounded rectangle with a tiny top speaker pill.', 'Alternate left-aligned grey bubbles (incoming) and right-aligned Cyan bubbles (reply).', 'Drop a subtle Cool Grey shadow along the right & bottom bevel.'],
    svg: `<svg viewBox="0 0 260 130">
      <path d="M 88 122 H 184 V 16" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.55"/>
      <rect x="82" y="8" width="96" height="110" rx="12" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <rect x="116" y="14" width="28" height="4" rx="2" fill="#141836"/>
      <rect x="90" y="26" width="62" height="22" rx="6" fill="#EEF2FC" stroke="#141836" stroke-width="1.4"/>
      <text x="96" y="40" font-family="Patrick Hand, cursive" font-size="11.5">Wann fällig?</text>
      <rect x="106" y="54" width="64" height="22" rx="6" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.4"/>
      <text x="112" y="68" font-family="Patrick Hand, cursive" font-size="11.5" fill="#0369A1">Am 10. Mai!</text>
      <rect x="90" y="82" width="54" height="20" rx="6" fill="#D1FAE5" stroke="#047857" stroke-width="1.4"/>
      <text x="96" y="96" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">Danke ✓</text>
    </svg>`
  },
  {
    id: 'polaroid', cat: 'frames', name: '18. Polaroid Snapshot & Tape',
    use: 'Memorable Case Studies, Book Scenes, German Vocab Snapshots',
    recipe: ['Draw a square outer frame with a thick empty bottom caption margin.', 'Sketch one tiny iconic scene inside the inner photo window.', 'Pin top-center with an angled Cyber Amber masking-tape strip and write a 2-word caption underneath.'],
    svg: `<svg viewBox="0 0 260 130">
      <g transform="rotate(-4 130 68)">
        <rect x="74" y="16" width="112" height="104" rx="3" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
        <rect x="84" y="24" width="92" height="66" fill="#E0F2FE" stroke="#141836" stroke-width="1.6"/>
        <polygon points="84,90 118,54 146,78 162,64 176,90" fill="#0EA5E9" fill-opacity="0.35" stroke="#141836" stroke-width="1.5"/>
        <circle cx="154" cy="40" r="8" fill="#F59E0B" fill-opacity="0.55" stroke="#141836" stroke-width="1.4"/>
        <text x="130" y="109" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="12" fill="#141836">B2 Gipfel!</text>
      </g>
      <polygon points="106,8 156,12 154,24 104,20" fill="#F59E0B" fill-opacity="0.55" stroke="#141836" stroke-width="1.3"/>
    </svg>`
  },
  {
    id: 'toggles', cat: 'gauges', name: '19. Toggle Switch Control Panel',
    use: 'Feature Flags, AI Safety Guardrails, Tax Exemption Rules',
    recipe: ['Draw 3 stacked pill capsules (2 dots wide, 0.8 dots tall).', 'Place the circular thumb on the RIGHT with Acid Mint fill for ON, and on the LEFT in grey/Magenta for OFF.', 'Label each switch crisply in Architect\'s Print.'],
    svg: `<svg viewBox="0 0 260 130">
      ${[
        [28, 'VIES AUTO-CHECK', true, '#10B981'],
        [64, 'HITL PARTNER GATE', true, '#0EA5E9'],
        [100, 'DIRECT LLM WRITE', false, '#EC4899']
      ].map(([y, lbl, on, col]) => `
        <text x="20" y="${y+5}" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">${lbl}</text>
        <rect x="176" y="${y-10}" width="44" height="22" rx="11" fill="${on?col:'#E2E8F0'}" fill-opacity="${on?0.35:1}" stroke="#141836" stroke-width="2"/>
        <circle cx="${on?209:187}" cy="${y+1}" r="8" fill="${on?col:'#94A3B8'}" stroke="#141836" stroke-width="1.8"/>
        <text x="228" y="${y+5}" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="${on?'#047857':'#BE185D'}">${on?'ON':'OFF'}</text>`).join('')}
    </svg>`
  },
  {
    id: 'hexagons', cat: 'maps', name: '20. Cyberpunk Honeycomb Cluster',
    use: '6 Core Capabilities, German 6 Modal Verbs, Tool Ecosystems',
    recipe: ['Draw one central hexagon (2 dots wide) for the theme.', 'Nest 6 touching satellite hexagons cleanly around its flat faces.', 'Color-code active/mastered hexes in Cyan/Mint and pending ones in dashed grey.'],
    svg: `<svg viewBox="0 0 260 130">
      ${[
        [130, 65, '#FEF3C7', 'MODAL'],
        [130, 25, '#E0F2FE', 'können'],
        [166, 45, '#FCE7F3', 'müssen'],
        [166, 85, '#D1FAE5', 'dürfen'],
        [130, 105, '#EDE9FE', 'sollen'],
        [94, 85, '#E0F2FE', 'wollen'],
        [94, 45, '#FCE7F3', 'mögen']
      ].map(([cx, cy, fill, lbl]) => {
        const pts = [0,1,2,3,4,5].map(k => {
          const a = (Math.PI / 3) * k;
          return `${(cx + 21 * Math.cos(a)).toFixed(1)},${(cy + 21 * Math.sin(a)).toFixed(1)}`;
        }).join(' ');
        return `<polygon points="${pts}" fill="${fill}" stroke="#141836" stroke-width="1.8"/><text x="${cx}" y="${cy+3}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="7.5" font-weight="700">${lbl}</text>`;
      }).join('')}
    </svg>`
  },
  {
    id: 'hourglass', cat: 'gauges', name: '21. Deadline Hourglass & Time Budget',
    use: 'Statutory Deadlines, 10-Minute Sprints, Latency Budgets',
    recipe: ['Draw two horizontal wooden caps top & bottom connected by an X-shaped glass pinch.', 'Tint the dwindling top sand in Magenta and the completed bottom pile in Acid Mint.', 'Annotate elapsed vs. remaining right beside the neck.'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="44" y="14" width="68" height="8" rx="3" fill="#141836"/>
      <rect x="44" y="108" width="68" height="8" rx="3" fill="#141836"/>
      <path d="M 52 22 L 74 65 L 52 108 M 104 22 L 82 65 L 104 108" fill="none" stroke="#141836" stroke-width="2.2"/>
      <polygon points="62,40 94,40 78,62" fill="#EC4899" fill-opacity="0.42"/>
      <polygon points="56,106 100,106 78,80" fill="#10B981" fill-opacity="0.48"/>
      <line x1="78" y1="64" x2="78" y2="82" stroke="#F59E0B" stroke-width="2" stroke-dasharray="2 2"/>
      <text x="128" y="48" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">3 DAYS LEFT</text>
      <text x="128" y="70" font-family="Patrick Hand, cursive" font-size="14">Einspruchsfrist</text>
      <text x="128" y="96" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">75% DRAFTED ✓</text>
    </svg>`
  },
  {
    id: 'treasure', cat: 'maps', name: '22. Winding Trail / Treasure Map',
    use: 'Quarterly Goals, Learning Journeys, Overcoming Bottlenecks',
    recipe: ['Draw a lazy S-curved dashed trail from bottom-left Start to top-right bold Magenta X.', 'Drop 2 tiny obstacle icons (swamp, cliff) and 2 milestone flags along the curve.', 'Great for injecting playfulness into serious quarterly reviews.'],
    svg: `<svg viewBox="0 0 260 130">
      <path d="M 28 106 C 68 106, 62 42, 118 52 C 166 60, 152 104, 198 78 C 216 68, 220 46, 226 36" fill="none" stroke="#141836" stroke-width="2.6" stroke-dasharray="6 5" stroke-linecap="round"/>
      <circle cx="28" cy="106" r="7" fill="#0EA5E9" stroke="#141836" stroke-width="2"/>
      <text x="28" y="92" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">START</text>
      <polygon points="118,36 134,42 118,48" fill="#F59E0B" stroke="#141836" stroke-width="1.2"/><line x1="118" y1="36" x2="118" y2="56" stroke="#141836" stroke-width="2"/>
      <text x="118" y="28" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8">MILESTONE</text>
      <path d="M 218 24 L 236 42 M 236 24 L 218 42" stroke="#EC4899" stroke-width="4" stroke-linecap="round"/>
      <text x="226" y="60" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">GOAL!</text>
    </svg>`
  },
  {
    id: 'swissarmy', cat: 'thinking', name: '23. Swiss Army Knife / MCP Toolbelt',
    use: 'Agent Tool Capabilities, Skill Stacks, Multi-Purpose Frameworks',
    recipe: ['Draw one rounded rectangular handle tilted slightly with a cross/badge.', 'Fan out 3–4 sharp blade/tool tabs radiating upward from the pivot pin.', 'Label each blade with one capability (e.g., VIES, OCR, RAG, Draft).'],
    svg: `<svg viewBox="0 0 260 130">
      <polygon points="94,76 58,24 76,20 112,72" fill="#E0F2FE" stroke="#141836" stroke-width="1.8"/>
      <polygon points="120,72 120,16 140,16 140,72" fill="#D1FAE5" stroke="#141836" stroke-width="1.8"/>
      <polygon points="148,74 190,26 206,36 164,84" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/>
      <rect x="66" y="72" width="128" height="36" rx="18" fill="#EC4899" fill-opacity="0.28" stroke="#141836" stroke-width="2.4"/>
      <circle cx="86" cy="90" r="6" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
      <text x="138" y="94" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#141836">MCP AGENT</text>
      <text x="48" y="20" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#0EA5E9">VIES</text>
      <text x="130" y="12" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#047857">RAG</text>
      <text x="210" y="34" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#B45309">OCR</text>
    </svg>`
  },
  {
    id: 'curtain', cat: 'thinking', name: '24. Before / After Split-Curtain',
    use: 'Refactor Demos, Legacy vs. AI Process, Messy vs. Neat Notes',
    recipe: ['Draw one horizontal frame split vertically down the center with a circular ◄|► slider handle.', 'Tint the left pane soft Magenta (Old/Pain) and the right pane crisp Mint (New/Clean).', 'Keep identical visual anchors on both sides so the contrast hits immediately.'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="18" y="20" width="112" height="88" rx="6" fill="#FCE7F3" stroke="#141836" stroke-width="2"/>
      <rect x="130" y="20" width="112" height="88" rx="6" fill="#D1FAE5" stroke="#141836" stroke-width="2"/>
      <text x="74" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">BEFORE</text>
      <text x="74" y="72" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" fill="#BE185D">48s • €0.88</text>
      <text x="186" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">AFTER ✓</text>
      <text x="186" y="72" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" font-weight="700" fill="#047857">1.2s • €0.04</text>
      <line x1="130" y1="12" x2="130" y2="116" stroke="#141836" stroke-width="3"/>
      <circle cx="130" cy="64" r="13" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <text x="130" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">◄►</text>
    </svg>`
  },
  {
    id: 'tearcal', cat: 'callouts', name: '25. Tear-Off Deadline Calendar Block',
    use: 'Statutory Tax Dates (10. Mai UStVA), Launch Dates, Exam Days',
    recipe: ['Draw a bold square with a Cyan/Magenta header band and two tiny binder rings on top.', 'Write the giant day number centered in bold 05 ink.', 'Curl the bottom-right corner slightly upward for instant tactile realism.'],
    svg: `<svg viewBox="0 0 260 130">
      <path d="M 88 22 H 178 V 96 L 160 112 H 88 Z" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>
      <rect x="88" y="22" width="90" height="24" fill="#EC4899" fill-opacity="0.34" stroke="#141836" stroke-width="2"/>
      <path d="M 108 14 V 28 M 158 14 V 28" stroke="#141836" stroke-width="4" stroke-linecap="round"/>
      <polygon points="160,112 160,96 178,96" fill="#FCE7F3" stroke="#141836" stroke-width="1.8"/>
      <text x="133" y="38" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">MAI // UStVA</text>
      <text x="133" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="34" font-weight="700" fill="#141836">10</text>
    </svg>`
  },
  {
    id: 'bullseye', cat: 'thinking', name: '26. Concentric Target Bullseye',
    use: 'OKR Precision, Scope Tiers (Core vs. Stretch), Exam Focus',
    recipe: ['Trace 3 concentric stencil circles; tint center Acid Mint or Magenta.', 'Draw a crisp 45° feathered arrow sticking dead-center into the bullseye.', 'Label outer-to-inner rings: Nice-to-Have → Important → Core Must-Ship.'],
    svg: `<svg viewBox="0 0 260 130">
      <circle cx="112" cy="68" r="48" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
      <circle cx="112" cy="68" r="32" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
      <circle cx="112" cy="68" r="15" fill="#10B981" fill-opacity="0.55" stroke="#047857" stroke-width="2"/>
      <line x1="112" y1="68" x2="184" y2="24" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
      <polygon points="174,18 192,16 184,24 190,32 172,30" fill="#EC4899" stroke="#141836" stroke-width="1.4"/>
      <text x="206" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">CORE OKR</text>
      <text x="206" y="76" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#0EA5E9">Q1 SCOPE</text>
      <text x="206" y="98" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">BACKLOG</text>
    </svg>`
  },
  {
    id: 'lego', cat: 'thinking', name: '27. Isometric Modular Lego Bricks',
    use: 'German Compound Nouns (Komposita), Composable Prompts & Skills',
    recipe: ['Draw two small 2-over-1-up cubes stacked vertically with 1 dot gap between them.', 'Drop 2 tiny oval studs on top of each brick.', 'Show them snapping together with downward arrows (e.g., Steuer + Bescheid = Steuerbescheid).'],
    svg: `<svg viewBox="0 0 260 130">
      <!-- Bottom Brick -->
      <polygon points="130,68 182,92 130,116 78,92" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
      <polygon points="78,92 130,116 130,126 78,102" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>
      <polygon points="182,92 130,116 130,126 182,102" fill="#64748B" stroke="#141836" stroke-width="1.8"/>
      <ellipse cx="114" cy="86" rx="9" ry="4" fill="#FFF" stroke="#141836" stroke-width="1.5"/>
      <ellipse cx="146" cy="86" rx="9" ry="4" fill="#FFF" stroke="#141836" stroke-width="1.5"/>
      <!-- Top Snapping Brick -->
      <polygon points="130,16 182,40 130,64 78,40" fill="#FCE7F3" stroke="#141836" stroke-width="2"/>
      <polygon points="78,40 130,64 130,74 78,50" fill="#FBCFE8" stroke="#141836" stroke-width="1.8"/>
      <polygon points="182,40 130,64 130,74 182,50" fill="#EC4899" fill-opacity="0.55" stroke="#141836" stroke-width="1.8"/>
      <ellipse cx="114" cy="34" rx="9" ry="4" fill="#FFF" stroke="#141836" stroke-width="1.5"/>
      <ellipse cx="146" cy="34" rx="9" ry="4" fill="#FFF" stroke="#141836" stroke-width="1.5"/>
      <text x="42" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">UMSATZ</text>
      <text x="218" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0EA5E9">STEUER</text>
    </svg>`
  },
  {
    id: 'postcard', cat: 'callouts', name: '28. Postcard & Postage Stamp Summary',
    use: 'End-of-Chapter Takeaways, Book Summaries, Travel/German Notes',
    recipe: ['Draw a clean 3:2 horizontal rectangle split vertically down the middle.', 'Write your 3-bullet reflection on the left and 3 horizontal address/tag lines on the right.', 'Stamp a tiny serrated postage box (DE • B2) in the top-right corner!'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="18" y="16" width="224" height="98" rx="4" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
      <line x1="130" y1="26" x2="130" y2="104" stroke="#141836" stroke-width="1.4"/>
      <rect x="196" y="24" width="36" height="34" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.8" stroke-dasharray="3 2"/>
      <text x="214" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">DE•B2</text>
      <text x="30" y="42" font-family="Playwrite IT Moderna, cursive" font-size="13" fill="#141836">Grüße aus Ch 18!</text>
      <text x="30" y="66" font-family="Patrick Hand, cursive" font-size="13">• 30% open paper</text>
      <text x="30" y="86" font-family="Patrick Hand, cursive" font-size="13">• 2 accents + Grey</text>
      <g stroke="#94A3B8" stroke-width="1.4"><line x1="142" y1="74" x2="226" y2="74"/><line x1="142" y1="90" x2="226" y2="90"/><line x1="142" y1="104" x2="206" y2="104"/></g>
    </svg>`
  },

  // CREATIVE WAVE 2: 12 MORE ICONIC ANALOG GRAPHICS (29–40)
  {
    id: 'cassette', cat: 'frames', name: '29. Retro Cassette Tape Audio Card',
    use: 'German Podcasts (Easy German / Tagesschau), Talks & Audio Notes',
    recipe: ['Draw a chamfered outer cassette shell with a wide top label band.', 'Center two circular tape reels connected by a dark window strip.', 'Write podcast title + timestamp on the top label and key vocab quotes below!'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="24" y="16" width="212" height="98" rx="9" fill="#EEF2FC" stroke="#141836" stroke-width="2.4"/>
      <rect x="36" y="24" width="188" height="34" rx="4" fill="#FFFDF5" stroke="#141836" stroke-width="1.8"/>
      <rect x="36" y="24" width="188" height="10" fill="#0EA5E9" fill-opacity="0.35"/>
      <text x="130" y="48" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="13" fill="#141836">Easy German #412</text>
      <rect x="66" y="66" width="128" height="28" rx="14" fill="#141836"/>
      <circle cx="92" cy="80" r="10" fill="#FFF" stroke="#0EA5E9" stroke-width="2.2"/><circle cx="92" cy="80" r="3" fill="#141836"/>
      <circle cx="168" cy="80" r="10" fill="#FFF" stroke="#EC4899" stroke-width="2.2"/><circle cx="168" cy="80" r="3" fill="#141836"/>
      <polygon points="74,114 86,102 174,102 186,114" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>
    </svg>`
  },
  {
    id: 'gamepad', cat: 'gauges', name: '30. Retro Gamepad / Cheat-Code Map',
    use: 'German 4-Case Hotkeys, Keyboard Shortcuts, Fast Decision Controls',
    recipe: ['Draw a wide pill controller silhouette (two rounded lobes joined by a center bar).', 'Sketch a crisp D-Pad on the left and 4 colored action buttons on the right.', 'Map 4 directional rules (↑ NOM, → AKK, ↓ DAT, ← GEN) around the D-Pad!'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="34" y="28" width="192" height="74" rx="37" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <!-- D-Pad Left -->
      <path d="M 76 48 H 90 V 60 H 102 V 74 H 90 V 86 H 76 V 74 H 64 V 60 H 76 Z" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
      <text x="83" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="7.5" font-weight="700">NOM</text>
      <text x="83" y="98" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="7.5" font-weight="700" fill="#047857">DAT</text>
      <!-- 4 Action Buttons Right -->
      <circle cx="176" cy="50" r="9" fill="#0EA5E9" fill-opacity="0.4" stroke="#141836" stroke-width="1.8"/><text x="176" y="53" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">V2</text>
      <circle cx="196" cy="67" r="9" fill="#EC4899" fill-opacity="0.4" stroke="#141836" stroke-width="1.8"/><text x="196" y="70" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">!</text>
      <circle cx="176" cy="84" r="9" fill="#10B981" fill-opacity="0.4" stroke="#141836" stroke-width="1.8"/><text x="176" y="87" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">✓</text>
      <circle cx="156" cy="67" r="9" fill="#F59E0B" fill-opacity="0.45" stroke="#141836" stroke-width="1.8"/><text x="156" y="70" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">?</text>
      <text x="130" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#525B7A">CHEAT-CODE CONTROL DECK</text>
    </svg>`
  },
  {
    id: 'weather', cat: 'gauges', name: '31. Project Weather Barometer Trio',
    use: 'Weekly Status Health, Audit Readiness, Client Mood Forecast',
    recipe: ['Draw 3 tiny status skies side-by-side: Amber Sun (On Track), Cyan Cloud (Watch), Magenta Storm Cloud + Bolt (Risk!).', 'Circle the current forecast in bold 05 ink.', 'Communicates executive status in 1 second with zero prose.'],
    svg: `<svg viewBox="0 0 260 130">
      <!-- Sun -->
      <circle cx="48" cy="54" r="16" fill="#F59E0B" fill-opacity="0.38" stroke="#141836" stroke-width="2"/>
      <path d="M 48 28 V 33 M 48 75 V 80 M 22 54 H 27 M 69 54 H 74 M 30 36 L 34 40 M 62 68 L 66 72 M 66 36 L 62 40 M 34 68 L 30 72" stroke="#B45309" stroke-width="2" stroke-linecap="round"/>
      <text x="48" y="102" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">CLEAR ✓</text>
      <!-- Partly Cloudy -->
      <circle cx="144" cy="44" r="11" fill="#F59E0B" fill-opacity="0.38" stroke="#141836" stroke-width="1.6"/>
      <path d="M 104 68 H 154 A 11 11 0 0 0 154 48 A 15 15 0 0 0 124 46 A 10 10 0 0 0 104 68 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
      <text x="130" y="102" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0EA5E9">WATCH</text>
      <!-- Storm -->
      <path d="M 184 62 H 236 A 11 11 0 0 0 236 42 A 15 15 0 0 0 206 40 A 10 10 0 0 0 184 62 Z" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/>
      <polygon points="212,62 204,78 212,78 207,90 222,72 214,72" fill="#EC4899" stroke="#141836" stroke-width="1.3"/>
      <text x="210" y="108" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">AUDIT !</text>
    </svg>`
  },
  {
    id: 'passport', cat: 'callouts', name: '32. Passport Visa Milestone Stamps',
    use: 'Chapters Mastered, Tax Jurisdictions Cleared, German CEFR Badges',
    recipe: ['Draw a tilted double-ring circle, rounded rectangle, or octagon.', 'Add wavy ink cancellation lines or tiny stars inside the border.', 'Stamp right onto the corner of completed study spreads!'],
    svg: `<svg viewBox="0 0 260 130">
      <g transform="rotate(-10 74 66)">
        <circle cx="74" cy="66" r="38" fill="#E0F2FE" fill-opacity="0.4" stroke="#0EA5E9" stroke-width="2.6"/>
        <circle cx="74" cy="66" r="31" fill="none" stroke="#0EA5E9" stroke-width="1.2" stroke-dasharray="3 2"/>
        <text x="74" y="61" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">DE • B2</text>
        <text x="74" y="76" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#0369A1">PASSED ★</text>
      </g>
      <g transform="rotate(8 182 66)">
        <rect x="134" y="42" width="96" height="48" rx="6" fill="#ECFDF5" stroke="#047857" stroke-width="2.6"/>
        <rect x="140" y="48" width="84" height="36" rx="3" fill="none" stroke="#047857" stroke-width="1.2"/>
        <text x="182" y="65" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">EU OSS</text>
        <text x="182" y="79" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" fill="#047857">2026 • CLEARED</text>
      </g>
    </svg>`
  },
  {
    id: 'rx', cat: 'callouts', name: '33. Prescription "Rx" Remedy Card',
    use: 'Diagnostic Fixes, Daily Habits, Debugging Playbooks',
    recipe: ['Draw a clean rounded pill bottle or vertical prescription pad with a bold Rx monogram top-left.', 'List exact dosage (e.g., 10m/day) + frequency + expected outcome.', 'Ideal for capturing hard-won debugging or language fixes.'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="34" y="14" width="192" height="102" rx="7" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
      <rect x="34" y="14" width="192" height="24" rx="5" fill="#FCE7F3" stroke="#141836" stroke-width="1.8"/>
      <text x="48" y="31" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#BE185D">Rx // DAILY REMEDY</text>
      <text x="48" y="60" font-family="Patrick Hand, cursive" font-size="14.5">• 10m ghosted lines + cubes</text>
      <text x="48" y="80" font-family="Patrick Hand, cursive" font-size="14.5">• 15 German Anki sketch-cards</text>
      <text x="48" y="102" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">REFILL: DAILY • ZERO CRAMMING</text>
    </svg>`
  },
  {
    id: 'sandwich', cat: 'thinking', name: '34. Architectural Sandwich Stack',
    use: 'Full-Stack Layers, Prompt Anatomy (System + Context + User)',
    recipe: ['Draw 4 stacked horizontal rounded layers with slight vertical breathing gaps.', 'Cap top & bottom with bold dome/base buns and tint middle layers Cyan, Magenta & Mint.', 'Label each layer cleanly along the right margin with hairline ticks.'],
    svg: `<svg viewBox="0 0 260 130">
      <path d="M 32 40 C 32 16, 144 16, 144 40 Z" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/>
      <rect x="28" y="46" width="120" height="14" rx="5" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
      <rect x="28" y="66" width="120" height="16" rx="5" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/>
      <rect x="28" y="88" width="120" height="22" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <g font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">
        <text x="158" y="35" fill="#B45309">← UI / PROMPT</text>
        <text x="158" y="56" fill="#0EA5E9">← FLASH TRIAGE</text>
        <text x="158" y="77" fill="#BE185D">← HITL GATE</text>
        <text x="158" y="102" fill="#047857">← MCP LEDGER</text>
      </g>
    </svg>`
  },
  {
    id: 'vending', cat: 'thinking', name: '35. Input → Output Vending Machine',
    use: 'Prompt-to-Artifact Pipelines, Deterministic Tools, API Contracts',
    recipe: ['Draw an upright boxy cabinet with a glass display window (top-left) and keypad (top-right).', 'Show an incoming Coin/Input arrow at the slot and a crisp output card dropping into the bottom chute.', 'Great visual shorthand for predictable input-output systems.'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="74" y="12" width="112" height="106" rx="6" fill="#EEF2FC" stroke="#141836" stroke-width="2.4"/>
      <rect x="84" y="22" width="62" height="58" rx="4" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
      <rect x="92" y="30" width="20" height="16" rx="2" fill="#0EA5E9" fill-opacity="0.35" stroke="#141836"/>
      <rect x="118" y="30" width="20" height="16" rx="2" fill="#EC4899" fill-opacity="0.35" stroke="#141836"/>
      <rect x="92" y="54" width="20" height="16" rx="2" fill="#10B981" fill-opacity="0.35" stroke="#141836"/>
      <rect x="118" y="54" width="20" height="16" rx="2" fill="#F59E0B" fill-opacity="0.4" stroke="#141836"/>
      <rect x="154" y="26" width="22" height="32" rx="3" fill="#CBD5E1" stroke="#141836" stroke-width="1.5"/>
      <rect x="84" y="88" width="92" height="20" rx="4" fill="#141836"/>
      <text x="130" y="102" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#00D4FF">OUT: MEMO ✓</text>
      <text x="36" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0EA5E9">INPUT →</text>
    </svg>`
  },
  {
    id: 'periscope', cat: 'thinking', name: '36. Horizon Periscope / Radar Peek',
    use: 'Upcoming Tax Reforms (2027 EU ViDA), Strategic Foresight, Watchlists',
    recipe: ['Draw a horizontal brick/wall barrier representing today\'s busy noise.', 'Pop a clean L-shaped submarine periscope right over the wall.', 'Cast a soft Cyan cone beam ahead onto 2 future milestone flags!'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="14" y="76" width="124" height="40" rx="4" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <text x="76" y="100" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">Q4 BUSY NOISE</text>
      <path d="M 66 76 V 32 H 104 V 50 H 84 V 76 Z" fill="#FFF" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
      <polygon points="104,32 238,14 238,68 104,50" fill="#0EA5E9" fill-opacity="0.22"/>
      <text x="192" y="38" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">2027 EU ViDA</text>
      <text x="192" y="56" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13">e-Invoicing prep!</text>
    </svg>`
  },
  {
    id: 'dominoes', cat: 'maps', name: '37. Cascading Domino Chain',
    use: 'Root-Cause Consequences, Compliance Penalties, Leverage Points',
    recipe: ['Draw 4 narrow upright rectangles leaning progressively steeper from left (5°) to right (35°).', 'Highlight the #1 trigger domino in Amber/Magenta so the leverage point pops.', 'Add tiny 2-word captions directly underneath each domino.'],
    svg: `<svg viewBox="0 0 260 130">
      <line x1="18" y1="104" x2="242" y2="104" stroke="#141836" stroke-width="2.2"/>
      <rect x="34" y="38" width="22" height="64" rx="3" transform="rotate(18 45 102)" fill="#F59E0B" fill-opacity="0.45" stroke="#141836" stroke-width="2"/>
      <rect x="86" y="38" width="22" height="64" rx="3" transform="rotate(14 97 102)" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
      <rect x="138" y="38" width="22" height="64" rx="3" transform="rotate(8 149 102)" fill="#FCE7F3" stroke="#141836" stroke-width="2"/>
      <rect x="192" y="38" width="22" height="64" rx="3" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <text x="44" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#B45309">&gt;€10k</text>
      <text x="98" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8">OSS</text>
      <text x="150" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8">RATE</text>
      <text x="203" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#047857">FILING</text>
    </svg>`
  },
  {
    id: 'bonsai', cat: 'maps', name: '38. 3-Stage Potted Growth Plants',
    use: 'Language Fluency Progression, Habit Maturity, Digital Gardens',
    recipe: ['Draw 3 identical trapezoid terracotta/indigo pots along a ground line.', 'Grow Stage 1 (2-leaf sprout) → Stage 2 (mid stem) → Stage 3 (full Mint canopy + blossoms).', 'Label pots Day 1 / Day 30 / Day 90 for motivating progress visuals!'],
    svg: `<svg viewBox="0 0 260 130">
      <line x1="16" y1="104" x2="244" y2="104" stroke="#141836" stroke-width="2"/>
      ${[50, 130, 210].map(x => `<polygon points="${x-18},76 ${x+18},76 ${x+13},104 ${x-13},104" fill="#FEF3C7" stroke="#141836" stroke-width="2"/>`).join('')}
      <!-- Stage 1 Sprout -->
      <path d="M 50 76 V 60 M 50 64 Q 40 54 38 62 M 50 62 Q 60 52 62 60" fill="none" stroke="#047857" stroke-width="2.4" stroke-linecap="round"/>
      <!-- Stage 2 Stem -->
      <path d="M 130 76 V 42" stroke="#047857" stroke-width="2.6"/><ellipse cx="118" cy="56" rx="10" ry="6" fill="#10B981" fill-opacity="0.45" stroke="#141836"/><ellipse cx="142" cy="48" rx="10" ry="6" fill="#10B981" fill-opacity="0.45" stroke="#141836"/>
      <!-- Stage 3 Full Canopy -->
      <path d="M 210 76 V 44" stroke="#141836" stroke-width="3.2"/><circle cx="210" cy="36" r="20" fill="#10B981" fill-opacity="0.35" stroke="#047857" stroke-width="2"/><circle cx="202" cy="30" r="3.5" fill="#EC4899"/><circle cx="218" cy="40" r="3.5" fill="#0EA5E9"/>
      <text x="50" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">DAY 1</text>
      <text x="130" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">WK 4</text>
      <text x="210" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#047857">DAY 90 ★</text>
    </svg>`
  },
  {
    id: 'keychain', cat: 'thinking', name: '39. Security Keychain / Scope Ring',
    use: 'API Permissions, Role-Based Access, AI Write Isolation',
    recipe: ['Draw one bold circular keyring on the left.', 'Fan out 3 rectangular key blades with notched teeth: Cyan READ, Violet DRAFT, Magenta WRITE (Padlocked!).', 'Explains least-privilege governance in 5 seconds flat.'],
    svg: `<svg viewBox="0 0 260 130">
      <circle cx="52" cy="64" r="20" fill="none" stroke="#141836" stroke-width="3.5"/>
      <g transform="rotate(-18 72 56)"><rect x="70" y="44" width="112" height="18" rx="4" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/><text x="126" y="56" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">READ KEY ✓</text></g>
      <rect x="72" y="56" width="118" height="18" rx="4" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2"/><text x="131" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#7C3AED">DRAFT KEY ✓</text>
      <g transform="rotate(18 72 72)"><rect x="70" y="68" width="124" height="18" rx="4" fill="#FCE7F3" stroke="#EC4899" stroke-width="2" stroke-dasharray="4 2"/><text x="132" y="80" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">WRITE (HITL 🔒)</text></g>
    </svg>`
  },
  {
    id: 'newspaper', cat: 'frames', name: '40. "Breaking News" Front-Page Clip',
    use: 'Major Book Takeaways, Tax Law Updates, German News Summaries',
    recipe: ['Draw a classic masthead header between two bold rules ("THE DAILY TAX / TAGESSCHAU").', 'Put a giant bold 2-word headline across the top, a tiny sketched photo box on the left, and 3 crisp summary bullets on the right.', 'Makes boring legislative or book notes genuinely fun to revisit!'],
    svg: `<svg viewBox="0 0 260 130">
      <rect x="20" y="10" width="220" height="110" rx="4" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
      <text x="130" y="27" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="11.5" fill="#141836">Die Steuer-Zeitung</text>
      <line x1="30" y1="33" x2="230" y2="33" stroke="#141836" stroke-width="2"/>
      <text x="130" y="51" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#BE185D">OSS SAVES 87% ADMIN!</text>
      <rect x="32" y="60" width="76" height="48" rx="3" fill="#E0F2FE" stroke="#141836" stroke-width="1.6"/>
      <text x="70" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">[ SKETCH ]</text>
      <g stroke="#525B7A" stroke-width="2" stroke-linecap="round"><line x1="120" y1="68" x2="222" y2="68"/><line x1="120" y1="80" x2="214" y2="80"/><line x1="120" y1="92" x2="220" y2="92"/><line x1="120" y1="104" x2="188" y2="104"/></g>
    </svg>`
  }
];

export const STEAL_GRAPHICS = [
  ...STEAL_BASE_40,
  ...STEAL_200_A,
  ...STEAL_200_B,
  ...STEAL_200_C,
  ...STEAL_200_D
];

const IDEA_PROMPTS = {
  ai: [
    { title: 'The Zero-Trust MCP Architecture Spread', layout: 'Split-Screen (Left Isometric • Right Spec)', hero: '10. Laser Glass Vault + 23. Swiss Army Knife', comps: 'Keychain Scope Ring + Toggle Switch Control Panel', task: 'Draw your AI agent as a Swiss Army Knife (VIES, RAG, OCR) beside a Keychain Scope Ring showing READ/DRAFT vs. locked WRITE keys, and ON/OFF guardrails underneath.' },
    { title: 'Prompt Eval & Latency Reduction Case Study', layout: '65/35 Golden Bento (15|1|7)', hero: '9. AI Triage Conveyor Factory', comps: 'Before/After Split-Curtain + Lab Experiment Flask + Ticket Stub', task: 'Show raw queries entering the 0.2s Flash Scanner Arch, prove the 48s → 1.2s jump with a Split-Curtain, and finish with a Perforated Cost Receipt (-97%).' },
    { title: 'AI Command Console & Telemetry Spread', layout: 'A5 Landscape (38×27)', hero: '19. Isometric Cyber Console + 14. Radar Array', comps: 'Vending Machine I/O + Project Weather Barometer', task: 'Sketch your orchestrator as a retro Cyber Console wired to a Radar Dish, use a Vending Machine for deterministic prompt contracts, and stamp a Clear ✓ Weather Barometer.' }
  ],
  tax: [
    { title: 'Cross-Border EU VAT OSS Executive Briefing', layout: '5-Beat Narrative Z-Path', hero: '1. Isometric Iceberg + 7. 3-Way Venn', comps: 'Newspaper Front Page + Magnifying Zoom Loupe (§ 13b)', task: 'Headline your spread like a Breaking News front page, use the Iceberg for 10% checkout vs. 90% EU rules, and zoom into § 13b with a Magnifying Loupe.' },
    { title: '2027 EU ViDA Horizon & Cascading Risk Map', layout: 'Equal Thirds (7|1|7|1|7)', hero: '17. Isometric Domino Chain + 36. Horizon Periscope', comps: 'Tear-Off Calendar (10. Mai) + Passport Visa Stamps', task: 'Use a Periscope peeking over Q4 noise toward 2027 EU ViDA, topple 4 Isometric Dominoes showing late-filing risks, and stamp cleared jurisdictions as Passport Visas.' },
    { title: 'Client Memo Before/After Automation Pitch', layout: 'Vertical Halves (16/2/16)', hero: '16. 3D Balance Beam', comps: 'Before/After Split-Curtain + Architectural Sandwich Stack', task: 'Tilt the 3D Balance Beam from manual 45m checks to 3m copilot review, and map the 4-layer stack as a clean Architectural Sandwich.' }
  ],
  deutsch: [
    { title: 'Podcast & Audio Immersion Study Page', layout: '65/35 Golden Bento', hero: '11. Isometric Satzklammer Towers', comps: 'Retro Cassette Tape Card + Smartphone Chat Mockup + Rx Remedy', task: 'Title your Easy German episode inside a Cassette Tape frame, draw twin [ V2 ... Ende ] towers, sketch a 3-bubble WhatsApp dialog, and clip a daily Rx study dosage.' },
    { title: 'Compound Noun & Case Hotkey Cheat-Sheet', layout: 'Hub-and-Spoke Concept Map', hero: '13. Isometric Lego Bricks + 20. Honeycomb Cluster', comps: 'Retro Gamepad Cheat-Code Map + Overlapping Folder Tabs', task: 'Map NOM/AKK/DAT/GEN onto a retro Gamepad D-Pad, snap Lego bricks for Umsatz·steuer·bescheid, and organize 6 modal verbs in a Honeycomb.' },
    { title: 'My 90-Day B1 → B2 Digital Garden', layout: 'A5 Landscape (38×27)', hero: '18. Isometric Digital Garden Terrarium', comps: '3-Stage Potted Plants + Berlin U-Bahn Map + Passport Visa Stamp', task: 'Track Day 1 → Wk 4 → Day 90 fluency with 3 Potted Plants, route Listening/Grammar/Tax-DE on a U-Bahn map, and stamp DE•B2 PASSED!' }
  ],
  personal: [
    { title: 'Non-Fiction Book Front-Page Synthesis', layout: 'Equal Thirds + Newspaper Masthead', hero: '20. Isometric Lighthouse Island', comps: 'Newspaper Front Page + Polaroid Snapshot + Postcard Summary', task: 'Summarize the book as a Breaking News front page, illustrate the thesis as a Lighthouse cutting fog, sketch 1 vivid anecdote in a Polaroid, and close with a Postcard.' },
    { title: 'Weekly Deep-Work & Digital Garden OS', layout: '65/35 Golden Bento', hero: '18. Isometric Digital Garden Terrarium', comps: 'Mixing-Console Equalizer Sliders + Weather Barometer + Bookshelf Tracker', task: 'Check weekly energy on a Weather Barometer, tune Focus/Study on Equalizer Sliders, and color book spines as you complete chapters.' }
  ]
};

export function renderStealBookHTML() {
  return `
    <div class="lab cyan-accent" id="steal-book-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Steal Book // 200 Handwritten-Note Graphics (10 Categories)</span>
        <span id="sb-count-pill" class="pill cyan">Showing 200 / 200</span>
      </div>
      <div class="lab-body">
        <!-- Search, Surprise & 10-Category Filter Bar -->
        <div class="lab-ctrl no-print" style="flex-wrap:wrap;">
          <input id="sb-search" class="search-in" type="text" placeholder="Search 200 graphics (e.g. ribbon, arrow, gantt, binoculars, sticky, tax)..." style="min-width:260px; flex:1;" />
          <button id="sb-rand-btn" class="btn magenta">🎲 Surprise Me</button>
        </div>
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          <button class="seg-btn sb-flt active" data-c="all">All (200)</button>
          <button class="seg-btn sb-flt" data-c="fav">★ Favorites</button>
          <button class="seg-btn sb-flt" data-c="frames">Frames &amp; Headers (20)</button>
          <button class="seg-btn sb-flt" data-c="gauges">Gauges &amp; Controls (20)</button>
          <button class="seg-btn sb-flt" data-c="maps">Maps &amp; Trackers (20)</button>
          <button class="seg-btn sb-flt" data-c="thinking">Visual Thinking (20)</button>
          <button class="seg-btn sb-flt" data-c="callouts">Callouts &amp; Stamps (20)</button>
          <button class="seg-btn sb-flt" data-c="dividers">Arrows &amp; Dividers (20)</button>
          <button class="seg-btn sb-flt" data-c="containers">Cards &amp; Stationery (20)</button>
          <button class="seg-btn sb-flt" data-c="charts">Micro-Charts (20)</button>
          <button class="seg-btn sb-flt" data-c="product">Product, Tax &amp; Tech (20)</button>
          <button class="seg-btn sb-flt" data-c="editorial">Editorial &amp; Metaphors (20)</button>
        </div>

        <!-- Enlarged Click-to-Inspect Spotlight -->
        <div id="sb-spotlight" class="card tinted" style="border-color:var(--cyan);">
          <div class="grid-2" style="align-items:center;">
            <div style="display:flex; flex-direction:column; gap:10px; align-items:center;">
              <div id="sb-spot-svg" class="svg-box" style="max-width:390px; margin:0 auto; width:100%;"></div>
              <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:7px;" class="no-print">
                <div class="segmented" role="group" aria-label="Progressive drawing steps">
                  <button class="seg-btn sb-step-btn" data-step="1">Step 1 (Base)</button>
                  <button class="seg-btn sb-step-btn" data-step="2">Step 2 (Structure)</button>
                  <button class="seg-btn sb-step-btn active" data-step="3">Step 3 (Full)</button>
                </div>
                <button id="sb-play-btn" class="btn mint" style="padding:5px 10px; font-size:11.5px;">▶ Play Build</button>
              </div>
            </div>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <span id="sb-spot-title" class="card-h" style="font-size:18px;"></span>
                <button id="sb-fav-btn" class="btn secondary no-print" style="padding:4px 9px; font-size:11px;">☆ Favorite</button>
              </div>
              <div id="sb-spot-use" class="mono" style="font-size:11px; font-weight:700; color:var(--violet);"></div>
              <ol id="sb-spot-steps" style="padding-left:20px; font-size:14.5px; display:flex; flex-direction:column; gap:6px; color:var(--ink-body);"></ol>
            </div>
          </div>
        </div>

        <div id="sb-grid" class="grid-4"></div>
      </div>
    </div>

    <!-- INTERACTIVE ILLUSTRATION IDEA & SPREAD PROMPT GENERATOR -->
    <div class="lab magenta-accent" id="idea-gen-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Studio // Spread &amp; Illustration Idea Generator</span>
        <button id="idea-roll-btn" class="btn magenta">🎲 Next Illustration Idea</button>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            <button class="seg-btn idea-dom active" data-d="ai">AI / Tech</button>
            <button class="seg-btn idea-dom" data-d="tax">Tax / EU VAT</button>
            <button class="seg-btn idea-dom" data-d="deutsch">Deutsch B1/B2</button>
            <button class="seg-btn idea-dom" data-d="personal">Books &amp; Deep Work</button>
          </div>
          <span class="mono" style="font-size:11px; color:var(--ink-muted);">Combines Layout + Isometric Hero + 2 Steal-Book Components</span>
        </div>
        <div id="idea-card" class="card tinted" style="border-color:var(--magenta);"></div>
      </div>
    </div>
  `;
}

export function initStealBook() {
  const lab = document.getElementById('steal-book-lab');
  if (!lab) return;

  let cat = 'all';
  let activeId = STEAL_GRAPHICS[0].id;
  let spotStep = 3;
  let playTimer = null;

  const applySpotStep = () => {
    const svg = document.querySelector('#sb-spot-svg svg');
    if (svg) {
      const nodes = Array.from(svg.children).filter(el => el.tagName.toLowerCase() !== 'defs');
      const total = nodes.length;
      const cut1 = Math.max(1, Math.ceil(total / 3));
      const cut2 = Math.max(cut1 + 1, Math.ceil((2 * total) / 3));
      const limit = spotStep === 1 ? cut1 : spotStep === 2 ? cut2 : total;
      nodes.forEach((el, idx) => {
        el.style.transition = 'opacity 0.25s ease';
        el.style.opacity = idx < limit ? '1' : '0.07';
      });
    }
    lab.querySelectorAll('.sb-step-btn').forEach(b => {
      b.classList.toggle('active', Number(b.dataset.step) === spotStep);
    });
    const lis = document.querySelectorAll('#sb-spot-steps li');
    lis.forEach((li, idx) => {
      const isActive = idx === spotStep - 1;
      const isDone = idx < spotStep;
      li.style.fontWeight = isActive ? '700' : '400';
      li.style.color = isActive ? 'var(--ink)' : isDone ? 'var(--ink-body)' : 'var(--ink-muted)';
      li.style.opacity = isDone ? '1' : '0.5';
    });
  };

  const syncSbFav = () => {
    const b = document.getElementById('sb-fav-btn');
    if (!b) return;
    const f = isFavorite(`steal:${activeId}`);
    b.textContent = f ? '★ Saved' : '☆ Favorite';
    b.className = f ? 'btn amber no-print' : 'btn secondary no-print';
  };
  document.getElementById('sb-fav-btn')?.addEventListener('click', () => {
    const f = toggleFavorite(`steal:${activeId}`);
    syncSbFav();
    renderGrid();
    window.__showToast?.(f ? '★ Saved to Steal Book Favorites' : 'Removed from Favorites');
  });

  const renderSpotlight = () => {
    const g = STEAL_GRAPHICS.find(x => x.id === activeId) || STEAL_GRAPHICS[0];
    document.getElementById('sb-spot-svg').innerHTML = g.svg;
    document.getElementById('sb-spot-title').textContent = g.name;
    document.getElementById('sb-spot-use').textContent = `BEST FOR // ${g.use.toUpperCase()}`;
    document.getElementById('sb-spot-steps').innerHTML = g.recipe.map(s => `<li>${s}</li>`).join('');
    syncSbFav();
    applySpotStep();
  };

  lab.querySelectorAll('.sb-step-btn').forEach(btn => btn.addEventListener('click', () => {
    if (playTimer) { clearInterval(playTimer); playTimer = null; }
    spotStep = Number(btn.dataset.step);
    applySpotStep();
  }));

  document.getElementById('sb-play-btn')?.addEventListener('click', () => {
    if (playTimer) { clearInterval(playTimer); playTimer = null; }
    spotStep = 1;
    applySpotStep();
    playTimer = setInterval(() => {
      spotStep++;
      if (spotStep > 3) { clearInterval(playTimer); playTimer = null; return; }
      applySpotStep();
    }, 850);
  });

  const renderGrid = () => {
    const q = (document.getElementById('sb-search')?.value || '').toLowerCase().trim();
    const list = STEAL_GRAPHICS.filter(x => {
      const catOk = cat === 'all' || (cat === 'fav' ? isFavorite(`steal:${x.id}`) : x.cat === cat);
      const qOk = !q || x.name.toLowerCase().includes(q) || x.use.toLowerCase().includes(q) || x.cat.toLowerCase().includes(q);
      return catOk && qOk;
    });
    const pill = document.getElementById('sb-count-pill');
    if (pill) pill.textContent = `Showing ${list.length} / ${STEAL_GRAPHICS.length}`;

    document.getElementById('sb-grid').innerHTML = list.length ? list.map(g => `
      <button class="card sb-card" data-id="${g.id}" style="text-align:left; cursor:pointer; ${g.id===activeId?'background:var(--cyan-wash); box-shadow:4px 4px 0 var(--ink);':''}">
        <div class="svg-box">${g.svg}</div>
        <div class="card-h" style="font-size:13.6px;">${isFavorite(`steal:${g.id}`) ? '★ ' : ''}${g.name}</div>
        <div class="card-p" style="font-size:12px;">${g.use}</div>
      </button>`).join('') : `<div class="mono" style="grid-column:1/-1; padding:18px; text-align:center; color:var(--ink-muted);">${cat === 'fav' ? 'No favorites yet — click ☆ Favorite in the spotlight above to build your personal swipe file.' : 'No matching graphics found — try clearing the search or switching category.'}</div>`;

    lab.querySelectorAll('.sb-card').forEach(btn => {
      btn.addEventListener('click', () => {
        if (playTimer) { clearInterval(playTimer); playTimer = null; }
        activeId = btn.dataset.id;
        spotStep = 3;
        renderSpotlight();
        renderGrid();
        document.getElementById('sb-spotlight')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  };

  document.getElementById('sb-search')?.addEventListener('input', renderGrid);
  document.getElementById('sb-rand-btn')?.addEventListener('click', () => {
    if (playTimer) { clearInterval(playTimer); playTimer = null; }
    const pick = STEAL_GRAPHICS[Math.floor(Math.random() * STEAL_GRAPHICS.length)];
    activeId = pick.id;
    spotStep = 3;
    renderSpotlight();
    renderGrid();
    document.getElementById('sb-spotlight')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  lab.querySelectorAll('.sb-flt').forEach(b => b.addEventListener('click', () => {
    cat = b.dataset.c;
    lab.querySelectorAll('.sb-flt').forEach(x => x.classList.toggle('active', x === b));
    renderGrid();
  }));

  renderSpotlight();
  renderGrid();

  // Wire Idea Generator
  let dom = 'ai', idx = 0;
  const renderIdea = () => {
    const list = IDEA_PROMPTS[dom];
    const p = list[idx % list.length];
    document.getElementById('idea-card').innerHTML = `
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
        <span class="card-h" style="font-size:18px;">${p.title}</span>
        <span class="pill magenta">Idea ${(idx % list.length) + 1} / ${list.length}</span>
      </div>
      <div class="grid-3">
        <div class="card"><div class="mono" style="font-size:9.5px; font-weight:700; color:var(--cyan);">1. LAYOUT BLUEPRINT</div><div style="font-size:14px; font-weight:600;">${p.layout}</div></div>
        <div class="card"><div class="mono" style="font-size:9.5px; font-weight:700; color:var(--violet);">2. ISOMETRIC HERO</div><div style="font-size:14px; font-weight:600;">${p.hero}</div></div>
        <div class="card"><div class="mono" style="font-size:9.5px; font-weight:700; color:var(--mint-deep);">3. STEAL COMPONENTS</div><div style="font-size:14px; font-weight:600;">${p.comps}</div></div>
      </div>
      <p style="font-size:15px; line-height:1.68; color:var(--ink-body);"><strong>Sketching Brief:</strong> ${p.task}</p>
    `;
  };
  document.querySelectorAll('.idea-dom').forEach(b => b.addEventListener('click', () => {
    dom = b.dataset.d; idx = 0;
    document.querySelectorAll('.idea-dom').forEach(x => x.classList.toggle('active', x === b));
    renderIdea();
  }));
  document.getElementById('idea-roll-btn')?.addEventListener('click', () => { idx++; renderIdea(); });
  renderIdea();
}

