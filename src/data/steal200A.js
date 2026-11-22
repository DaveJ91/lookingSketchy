/* =========================================================================
   STEAL BOOK EXPANSION A: GRAPHICS 41–80
   +12 Frames & Headers (41–52), +12 Gauges (53–64), +12 Maps (65–76), +4 Thinking (77–80)
   ========================================================================= */

const mk = (id, cat, name, use, recipe, body) => ({
  id, cat, name, use, recipe,
  svg: `<svg viewBox="0 0 260 130">${body}</svg>`
});

export const STEAL_200_A = [
  // FRAMES & HEADERS (41–52)
  mk('sb-bookplate', 'frames', '41. Ex-Libris Bookplate Frame', 'Book Notes, Opening Spreads, Reading Logs', [
    'Draw an outer chamfered frame with a nested thin inner border 1 dot inside.',
    'Add four tiny diamond pips in the inner corners.',
    'Letter the book title in script and author in quiet uppercase below.'
  ], `
    <polygon points="28,16 232,16 244,28 244,102 232,114 28,114 16,102 16,28" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
    <polygon points="34,23 226,23 236,33 236,97 226,107 34,107 24,97 24,33" fill="none" stroke="#0EA5E9" stroke-width="1.4"/>
    <text x="130" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#525B7A">EX LIBRIS // FIELD NOTES</text>
    <text x="130" y="74" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="18" fill="#141836">Design of Everyday Things</text>
    <line x1="76" y1="88" x2="184" y2="88" stroke="#141836" stroke-width="1.4"/>
    <text x="130" y="101" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" fill="#0369A1">CH 1–7 SYNTHESIS</text>
  `),
  mk('sb-clapper', 'frames', '42. Film Clapperboard Header', 'User Interviews, Case Studies, Storyboards', [
    'Draw a flat rectangle capped with a slightly tilted hinged slate bar at top.',
    'Stripe the top bar with bold diagonal black-and-cyan chevrons.',
    'Split the lower board into Scene, Take, and Date boxes.'
  ], `
    <g transform="rotate(-6 34 32)">
      <rect x="34" y="14" width="192" height="18" rx="2" fill="#141836"/>
      <polygon points="56,14 72,14 62,32 46,32" fill="#FFF"/><polygon points="104,14 120,14 110,32 94,32" fill="#0EA5E9"/><polygon points="152,14 168,14 158,32 142,32" fill="#FFF"/><polygon points="200,14 216,14 206,32 190,32" fill="#0EA5E9"/>
    </g>
    <rect x="34" y="34" width="192" height="82" rx="4" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
    <line x1="34" y1="62" x2="226" y2="62" stroke="#141836" stroke-width="1.6"/>
    <line x1="130" y1="62" x2="130" y2="116" stroke="#141836" stroke-width="1.6"/>
    <text x="44" y="53" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">SCENE: ONBOARDING INTERVIEW #4</text>
    <text x="44" y="84" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">TAKE: 02</text>
    <text x="44" y="102" font-family="Patrick Hand, cursive" font-size="14">OAuth hesitation</text>
    <text x="140" y="84" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#BE185D">CUT TO:</text>
    <text x="140" y="102" font-family="Patrick Hand, cursive" font-size="14">Sample CSV flow</text>
  `),
  mk('sb-marquee', 'frames', '43. Cinema Marquee Lightbox', 'Core Thesis, Quarterly Theme, Big Launch', [
    'Draw a bold double-walled horizontal frame with a slight corner bevel.',
    'Dot tiny glowing Amber bulb circles evenly around the outer rim.',
    'Write 2–3 all-caps words centered inside on light rules.'
  ], `
    <rect x="20" y="20" width="220" height="90" rx="10" fill="#141836"/>
    <rect x="34" y="34" width="192" height="62" rx="5" fill="#FFFDF5" stroke="#F59E0B" stroke-width="2"/>
    <g fill="#F59E0B"><circle cx="34" cy="27" r="3"/><circle cx="72" cy="27" r="3"/><circle cx="110" cy="27" r="3"/><circle cx="148" cy="27" r="3"/><circle cx="186" cy="27" r="3"/><circle cx="224" cy="27" r="3"/><circle cx="34" cy="103" r="3"/><circle cx="72" cy="103" r="3"/><circle cx="110" cy="103" r="3"/><circle cx="148" cy="103" r="3"/><circle cx="186" cy="103" r="3"/><circle cx="224" cy="103" r="3"/></g>
    <line x1="42" y1="65" x2="218" y2="65" stroke="#CBD5E1" stroke-width="1.2"/>
    <text x="130" y="58" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#141836">SHIP LESS</text>
    <text x="130" y="84" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#BE185D">FINISH MORE</text>
  `),
  mk('sb-passport-cover', 'frames', '44. Travel Passport Booklet Header', 'Language Modules, Country Tax Briefs, Trips', [
    'Draw a tall vertical rounded booklet with a double-line spine on the left.',
    'Add a small circular globe emblem right in the center.',
    'Title the top and put the jurisdiction code at the bottom.'
  ], `
    <rect x="78" y="14" width="110" height="104" rx="8" fill="#141836"/>
    <rect x="72" y="10" width="110" height="104" rx="8" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/>
    <line x1="84" y1="10" x2="84" y2="114" stroke="#141836" stroke-width="1.8"/>
    <text x="133" y="31" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">FIELD PASS</text>
    <circle cx="133" cy="61" r="18" fill="#FFF" stroke="#0369A1" stroke-width="2"/>
    <ellipse cx="133" cy="61" rx="8" ry="18" fill="none" stroke="#0369A1" stroke-width="1.4"/>
    <line x1="115" y1="61" x2="151" y2="61" stroke="#0369A1" stroke-width="1.4"/>
    <text x="133" y="99" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">DE • B2 NOTES</text>
  `),
  mk('sb-chalkboard', 'frames', '45. Framed Cafe A-Board / Chalkboard', 'Core Principles, Mental Models, Daily Focus', [
    'Draw a dark Indigo inner panel nested inside a warm Amber wooden frame.',
    'Add two tiny angled feet poking out below the bottom corners.',
    'Write short crisp notes inside (in real notebooks, reverse to white paper + thick dark frame).'
  ], `
    <line x1="48" y1="108" x2="40" y2="122" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
    <line x1="212" y1="108" x2="220" y2="122" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
    <rect x="28" y="14" width="204" height="96" rx="7" fill="#FEF3C7" stroke="#141836" stroke-width="2.4"/>
    <rect x="38" y="24" width="184" height="76" rx="3" fill="#141836"/>
    <text x="130" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#F59E0B">TODAY'S MENU</text>
    <text x="130" y="70" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" fill="#FFF">1. Cut scope by 40%</text>
    <text x="130" y="90" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" fill="#38BDF8">2. Ship 4-state sketch</text>
  `),
  mk('sb-blueprint-title', 'frames', '46. Architectural Title Block', 'Technical Specs, System Maps, Legal Charts', [
    'Draw a crisp bottom-right engineering corner block divided into 3 cells.',
    'Put Project Name large on the left, Scale/Version top-right, Date bottom-right.',
    'Anchor it flush against the bottom-right dot margin of any spread.'
  ], `
    <rect x="20" y="24" width="220" height="84" fill="#F8FAFC" stroke="#141836" stroke-width="2.4"/>
    <line x1="20" y1="68" x2="240" y2="68" stroke="#141836" stroke-width="1.8"/>
    <line x1="156" y1="24" x2="156" y2="108" stroke="#141836" stroke-width="1.8"/>
    <text x="30" y="42" font-family="IBM Plex Mono, monospace" font-size="8" fill="#0369A1">DRAWING TITLE</text>
    <text x="30" y="59" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700">SYNC ENGINE v2</text>
    <text x="166" y="42" font-family="IBM Plex Mono, monospace" font-size="8" fill="#525B7A">REV</text>
    <text x="166" y="59" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#BE185D">04.B</text>
    <text x="30" y="93" font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A">SCALE: 5mm DOT</text>
    <text x="166" y="93" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">SHEET 2/4</text>
  `),
  mk('sb-polaroid-pair', 'frames', '47. Taped Twin Polaroid Frames', 'Before/After Scenes, Case Anecdotes, Memories', [
    'Draw two overlapping square photo frames tilted slightly opposite (±5°).',
    'Leave a thick white chin strip along the bottom of each frame for captions.',
    'Anchor top edges with two tiny translucent highlighter tape strips.'
  ], `
    <g transform="rotate(-6 78 68)">
      <rect x="34" y="24" width="90" height="92" rx="3" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <rect x="42" y="32" width="74" height="58" fill="#FCE7F3" stroke="#141836" stroke-width="1.4"/>
      <text x="79" y="65" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#BE185D">PASS 1</text>
      <text x="79" y="107" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12">Live chaos</text>
    </g>
    <g transform="rotate(5 178 66)">
      <rect x="132" y="22" width="90" height="92" rx="3" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <rect x="140" y="30" width="74" height="58" fill="#D1FAE5" stroke="#141836" stroke-width="1.4"/>
      <text x="177" y="63" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#047857">PASS 2</text>
      <text x="177" y="105" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12">5-min rescue</text>
    </g>
    <rect x="158" y="14" width="38" height="12" rx="2" fill="#0EA5E9" fill-opacity="0.4" transform="rotate(-8 177 20)"/>
  `),
  mk('sb-scroll-banner', 'frames', '48. Rolled Parchment Header', 'Historical Rules, Statutory Principles, Quotes', [
    'Draw a horizontal banner strip with tight cylindrical curls at left and right ends.',
    'Shade the inner underside of both curls in Cool Grey.',
    'Center a concise rule or motto across the flat middle strip.'
  ], `
    <ellipse cx="34" cy="65" rx="10" ry="30" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/>
    <ellipse cx="226" cy="65" rx="10" ry="30" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/>
    <rect x="34" y="35" width="192" height="60" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
    <ellipse cx="34" cy="43" rx="6" ry="8" fill="#CBD5E1" stroke="#141836" stroke-width="1.6"/>
    <ellipse cx="226" cy="87" rx="6" ry="8" fill="#CBD5E1" stroke="#141836" stroke-width="1.6"/>
    <text x="130" y="62" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="16" fill="#141836">Substance Over Form</text>
    <text x="130" y="82" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#B45309">IFRS CONCEPTUAL FRAMEWORK</text>
  `),
  mk('sb-browser-tab', 'frames', '49. Minimal Browser Tab Bar', 'Web Research Notes, SaaS Teardowns, Docs', [
    'Draw a horizontal top chrome bar with 3 trapezoid tabs (only 1 active in white).',
    'Add a clean pill URL bar underneath with a tiny lock icon.',
    'Drop your structured summary notes directly below.'
  ], `
    <rect x="20" y="16" width="220" height="98" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <path d="M 20 38 H 240" stroke="#141836" stroke-width="1.6"/>
    <path d="M 28 38 L 34 22 H 94 L 100 38" fill="#E0F2FE" stroke="#141836" stroke-width="1.6"/>
    <path d="M 102 38 L 108 24 H 164 L 170 38" fill="#EEF2FC" stroke="#94A3B8" stroke-width="1.4"/>
    <text x="64" y="33" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="7.5" font-weight="700" fill="#0369A1">ACTIVE</text>
    <rect x="30" y="45" width="200" height="16" rx="8" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1.2"/>
    <text x="42" y="56" font-family="IBM Plex Mono, monospace" font-size="8" fill="#525B7A">🔒 docs.example.com/webhooks</text>
    <text x="34" y="84" font-family="Patrick Hand, cursive" font-size="14.5">• Retry header: X-Retry-After</text>
    <text x="34" y="102" font-family="Patrick Hand, cursive" font-size="14.5">• Idempotency key expires 24h</text>
  `),
  mk('sb-luggage-tag', 'frames', '50. String-Tied Luggage Tag', 'Module Cover, Topic Label, Key Identifier', [
    'Draw a chamfered rectangle with a reinforced circular eyelet punched on the left.',
    'Loop a loose curved string out of the hole to the margin.',
    'Write a bold 3-letter code and short topic line across the tag.'
  ], `
    <path d="M 16 65 Q 34 40 50 65" fill="none" stroke="#141836" stroke-width="2.2"/>
    <polygon points="44,44 64,26 238,26 238,104 64,104 44,86" fill="#FFFDF5" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>
    <circle cx="64" cy="65" r="8" fill="#FFF" stroke="#EC4899" stroke-width="3"/>
    <rect x="86" y="36" width="138" height="22" rx="4" fill="#FCE7F3"/>
    <text x="94" y="51" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">TAG // IFRS 16</text>
    <text x="90" y="82" font-family="Patrick Hand, cursive" font-size="16" fill="#141836">Right-of-Use Lease Asset</text>
  `),
  mk('sb-stamp-frame', 'frames', '51. Perforated Postage Stamp Box', 'Micro-Summaries, Vocab Snapshots, Mini Icons', [
    'Draw a crisp inner rectangle, then scallop evenly spaced semicircular bites around the outer edge.',
    'Put a mini icon or portrait inside and a tiny numeric denomination top-right.',
    'Great for corner anchors on quiet spreads.'
  ], `
    <rect x="52" y="14" width="156" height="102" rx="4" fill="#FFF" stroke="#141836" stroke-width="2.2" stroke-dasharray="6 4"/>
    <rect x="64" y="24" width="132" height="82" fill="#E0F2FE" fill-opacity="0.45" stroke="#0EA5E9" stroke-width="1.8"/>
    <text x="186" y="40" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">85¢</text>
    <circle cx="114" cy="66" r="18" fill="#FFF" stroke="#141836" stroke-width="2"/>
    <path d="M 106 66 L 112 72 L 124 58" fill="none" stroke="#047857" stroke-width="2.8" stroke-linecap="round"/>
    <text x="130" y="98" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">SENT // Q3</text>
  `),
  mk('sb-highlighter-underline', 'frames', '52. Offset Highlighter Under-Glow Title', 'Clean Daily Headers, Rapid Lecture Notes', [
    'Pull one flat pastel marker stripe across 1 dot row first.',
    'Let it dry for 2 seconds, then sit dark ink lettering slightly above its lower edge.',
    'Add a small monospace page/date code flush right.'
  ], `
    <rect x="22" y="54" width="176" height="16" rx="3" fill="#0EA5E9" fill-opacity="0.3"/>
    <text x="26" y="64" font-family="Playwrite IT Moderna, cursive" font-size="20" fill="#141836">Lease Accounting</text>
    <text x="238" y="61" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">PG 19</text>
    <line x1="22" y1="80" x2="238" y2="80" stroke="#141836" stroke-width="1.6"/>
    <text x="22" y="98" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">MARKER FIRST • INK SECOND • ZERO SMEAR</text>
  `),

  // GAUGES & CONTROLS (53–64)
  mk('sb-toggle-bank', 'gauges', '53. Feature-Flag Toggle Bank', 'System Settings, Scope Decisions, On/Off Rules', [
    'Draw 3 stacked horizontal pill switches on the left margin.',
    'Slide ON pills right with Mint fill and OFF pills left with Cool Grey.',
    'Write crisp 2-word rule labels aligned cleanly to the right.'
  ], `
    ${[[28, true, 'READ-ONLY SCOPE', '#10B981'], [64, true, 'RETRY BANNER', '#0EA5E9'], [100, false, 'AUTO-WRITE PROD', '#94A3B8']].map(([y, on, lbl, col]) => `
      <rect x="24" y="${y-11}" width="44" height="22" rx="11" fill="${on ? col : '#E2E8F0'}" stroke="#141836" stroke-width="2"/>
      <circle cx="${on ? 57 : 35}" cy="${y}" r="7.5" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
      <text x="80" y="${y+4}" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="${on ? '#141836' : '#64748B'}">${lbl}</text>
    `).join('')}
  `),
  mk('sb-rotary-knobs', 'gauges', '54. Analog Synth Rotary Dials', 'Product Tone, Risk Appetite, Complexity Tuning', [
    'Draw 3 identical circles spaced evenly with a faint 270° arc around each.',
    'Draw a thick pointer line from center outward to indicate each dial\'s position.',
    'Tint the active arc segment and label each parameter below.'
  ], `
    ${[[52, -45, 'SPEED', '#0EA5E9'], [130, 35, 'RIGOR', '#EC4899'], [208, -10, 'POLISH', '#10B981']].map(([x, deg, lbl, col]) => `
      <circle cx="${x}" cy="58" r="24" fill="none" stroke="#CBD5E1" stroke-width="3" stroke-dasharray="95 60"/>
      <circle cx="${x}" cy="58" r="17" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <g transform="rotate(${deg} ${x} 58)"><line x1="${x}" y1="58" x2="${x}" y2="43" stroke="${col}" stroke-width="3.2" stroke-linecap="round"/></g>
      <circle cx="${x}" cy="58" r="3.5" fill="#141836"/>
      <text x="${x}" y="102" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">${lbl}</text>
    `).join('')}
  `),
  mk('sb-fuel-gauge', 'gauges', '55. E → F Energy / Runway Gauge', 'Cash Runway, Sprint Capacity, Personal Focus', [
    'Draw a wide shallow arc from E (left) to F (right) with 5 tick marks.',
    'Highlight the low left quarter in Magenta as the warning reserve zone.',
    'Point the needle sharply and write the remaining runway underneath.'
  ], `
    <path d="M 44 92 A 86 86 0 0 1 216 92" fill="none" stroke="#CBD5E1" stroke-width="10" stroke-linecap="round"/>
    <path d="M 44 92 A 86 86 0 0 1 82 38" fill="none" stroke="#EC4899" stroke-width="10" stroke-linecap="round"/>
    <line x1="130" y1="96" x2="178" y2="46" stroke="#141836" stroke-width="3.4" stroke-linecap="round"/>
    <circle cx="130" cy="96" r="8" fill="#141836"/>
    <text x="36" y="112" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#BE185D">E</text>
    <text x="216" y="112" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">F</text>
    <text x="130" y="116" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">14 MO RUNWAY</text>
  `),
  mk('sb-thermometer', 'gauges', '56. Vertical Goal Thermometer', 'Savings Target, Word Count, Fundraising Goal', [
    'Draw a slender rounded vertical tube joined to a circular bulb at bottom.',
    'Fill the bulb and column up to the current milestone in Cyan or Magenta.',
    'Tick 25%, 50%, 75%, 100% along the right edge.'
  ], `
    <rect x="64" y="16" width="22" height="76" rx="11" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <circle cx="75" cy="98" r="18" fill="#EC4899" stroke="#141836" stroke-width="2.2"/>
    <rect x="68" y="42" width="14" height="54" rx="6" fill="#EC4899"/>
    <g stroke="#141836" stroke-width="1.6"><line x1="90" y1="26" x2="104" y2="26"/><line x1="90" y1="46" x2="104" y2="46"/><line x1="90" y1="66" x2="104" y2="66"/></g>
    <text x="112" y="30" font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A">100% TARGET</text>
    <text x="112" y="50" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">72% NOW ★</text>
    <text x="112" y="70" font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A">40% BASE</text>
  `),
  mk('sb-signal-bars', 'gauges', '57. 5-Bar Confidence / Signal Meter', 'Hypothesis Confidence, Fluency Level, Evidence', [
    'Draw 5 stepping vertical bars rising left to right on a shared baseline.',
    'Fill only the earned bars in Cyan/Mint and leave higher bars hollow.',
    'Label the metric cleanly right beside the staircase.'
  ], `
    ${[1, 2, 3, 4, 5].map(i => `
      <rect x="${26 + (i - 1) * 24}" y="${102 - i * 16}" width="16" height="${i * 16}" rx="3" fill="${i <= 4 ? (i === 4 ? '#10B981' : '#0EA5E9') : '#FFF'}" stroke="#141836" stroke-width="2"/>
    `).join('')}
    <text x="160" y="54" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">4 / 5 SIGNAL</text>
    <text x="160" y="76" font-family="Patrick Hand, cursive" font-size="14">Backed by 6</text>
    <text x="160" y="94" font-family="Patrick Hand, cursive" font-size="14">user interviews</text>
  `),
  mk('sb-traffic-light', 'gauges', '58. RAG Traffic-Light Pillar', 'Project Health, Compliance Gate, Release Go/No-Go', [
    'Draw an upright pill housing containing 3 stacked circular lamps.',
    'Leave inactive lamps pale grey and illuminate the active lamp boldly.',
    'Add 3 concise one-line criteria aligned right next to each lamp.'
  ], `
    <rect x="28" y="16" width="44" height="98" rx="22" fill="#141836"/>
    <circle cx="50" cy="38" r="11" fill="#475569"/>
    <circle cx="50" cy="65" r="11" fill="#F59E0B" stroke="#FEF3C7" stroke-width="2"/>
    <circle cx="50" cy="92" r="11" fill="#475569"/>
    <text x="86" y="41" font-family="IBM Plex Mono, monospace" font-size="9" fill="#94A3B8">RED: Blocked</text>
    <text x="86" y="69" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#B45309">AMBER: Legal Pending</text>
    <text x="86" y="96" font-family="IBM Plex Mono, monospace" font-size="9" fill="#94A3B8">GREEN: Ready to ship</text>
  `),
  mk('sb-stopwatch', 'gauges', '59. Split-Second Stopwatch Dial', 'Latency Benchmarks, Time-Boxed Drills, SLAs', [
    'Draw a round watch face topped by a small crown button and angled side pusher.',
    'Shade the elapsed pie wedge in Cyan or Mint.',
    'Write the exact benchmark duration right beside it.'
  ], `
    <rect x="64" y="16" width="16" height="9" rx="2" fill="#141836"/>
    <line x1="98" y1="28" x2="106" y2="20" stroke="#141836" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="72" cy="70" r="40" fill="#FFF" stroke="#141836" stroke-width="2.6"/>
    <path d="M 72 70 L 72 34 A 36 36 0 0 1 104 86 Z" fill="#0EA5E9" fill-opacity="0.32"/>
    <line x1="72" y1="70" x2="100" y2="84" stroke="#141836" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="72" cy="70" r="4" fill="#141836"/>
    <text x="128" y="60" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700" fill="#0369A1">90 SEC</text>
    <text x="128" y="80" font-family="Patrick Hand, cursive" font-size="14">Blank-page</text>
    <text x="128" y="96" font-family="Patrick Hand, cursive" font-size="14">recall sprint</text>
  `),
  mk('sb-star-rating', 'gauges', '60. 5-Star / Dot Scorecard Strip', 'Book Reviews, Vendor Comparisons, Feature Grading', [
    'Draw 3 short criterion labels on the left column.',
    'Place 5 evenly spaced dots (or stars) beside each criterion using the dot grid.',
    'Fill earned dots in Amber/Cyan so strengths jump out at a glance.'
  ], `
    ${[['CLARITY', 5, '#10B981'], ['SPEED', 4, '#0EA5E9'], ['COST', 3, '#F59E0B']].map(([lbl, n, col], r) => `
      <text x="20" y="${38 + r * 32}" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">${lbl}</text>
      ${[1, 2, 3, 4, 5].map(i => `<circle cx="${104 + i * 26}" cy="${34 + r * 32}" r="8" fill="${i <= n ? col : '#FFF'}" stroke="#141836" stroke-width="1.8"/>`).join('')}
    `).join('')}
  `),
  mk('sb-progress-pill', 'gauges', '61. Segmented Milestone Progress Bar', 'Quarterly OKRs, Book Chapters, Course Completion', [
    'Draw one long rounded capsule divided into 5 equal compartments.',
    'Fill completed segments in Mint, current in Cyan, upcoming in white.',
    'Put the fraction or percentage bold at the right end.'
  ], `
    <text x="22" y="38" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#141836">Q4 ROLLOUT PROGRESS</text>
    <rect x="22" y="50" width="184" height="28" rx="14" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
    <rect x="26" y="54" width="34" height="20" rx="10" fill="#10B981"/>
    <rect x="64" y="54" width="34" height="20" rx="4" fill="#10B981"/>
    <rect x="102" y="54" width="34" height="20" rx="4" fill="#0EA5E9"/>
    <rect x="140" y="54" width="34" height="20" rx="4" fill="#E2E8F0"/>
    <text x="214" y="69" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#047857">60%</text>
    <text x="22" y="98" font-family="Patrick Hand, cursive" font-size="14" fill="#525B7A">3 of 5 milestones verified in staging</text>
  `),
  mk('sb-compass-dial', 'gauges', '62. North-Star Compass Rose', 'Product Strategy, Values Alignment, Direction', [
    'Draw a crisp circle with N/E/S/W ticks around the perimeter.',
    'Draw a 4-point diamond needle and fill only the North pointer in Magenta.',
    'Write your single North-Star metric right beside the North tip.'
  ], `
    <circle cx="76" cy="68" r="42" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <polygon points="76,30 85,68 76,74 67,68" fill="#EC4899" stroke="#141836" stroke-width="1.8"/>
    <polygon points="76,106 85,68 76,62 67,68" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>
    <circle cx="76" cy="68" r="4" fill="#141836"/>
    <text x="76" y="21" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">N</text>
    <text x="134" y="56" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">NORTH STAR</text>
    <text x="134" y="76" font-family="Patrick Hand, cursive" font-size="14.5">Weekly active</text>
    <text x="134" y="94" font-family="Patrick Hand, cursive" font-size="14.5">synced teams</text>
  `),
  mk('sb-heartbeat', 'gauges', '63. Vital-Signs Pulse Monitor', 'System Uptime, Retention Health, Habit Cadence', [
    'Draw a dark bezel monitor frame with a quiet baseline grid.',
    'Plot a flat line broken by sharp rhythmic Mint heartbeat spikes.',
    'Annotate a sudden spike or flatline as an anomaly.'
  ], `
    <rect x="20" y="18" width="220" height="92" rx="10" fill="#141836"/>
    <line x1="30" y1="68" x2="230" y2="68" stroke="#334155" stroke-width="1"/>
    <polyline points="30,68 72,68 82,42 92,88 102,32 114,68 156,68 166,46 176,84 186,36 196,68 230,68" fill="none" stroke="#10B981" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="34" y="36" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#34D399">HEALTH // STEADY</text>
    <text x="226" y="98" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#94A3B8">p95: 180ms</text>
  `),
  mk('sb-volume-meter', 'gauges', '64. VU Loudness / Priority Needle', 'Signal vs. Noise, Customer Urgency, Alert Triage', [
    'Draw a rectangular retro VU meter window with a curved scale inside.',
    'Color the right third Magenta ("REDLINE") and left two-thirds Mint/Cyan.',
    'Sweep a needle from bottom center to show urgency level.'
  ], `
    <rect x="24" y="18" width="212" height="94" rx="8" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
    <path d="M 46 84 A 92 92 0 0 1 164 46" fill="none" stroke="#10B981" stroke-width="7"/>
    <path d="M 164 46 A 92 92 0 0 1 214 84" fill="none" stroke="#EC4899" stroke-width="7"/>
    <line x1="130" y1="100" x2="188" y2="48" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
    <circle cx="130" cy="100" r="6" fill="#141836"/>
    <text x="42" y="38" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#525B7A">VU // URGENCY</text>
    <text x="220" y="38" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">PEAK!</text>
  `),

  // MAPS & TRACKERS (65–76)
  mk('sb-winding-road', 'maps', '65. Winding Mountain Roadmap', '90-Day Goals, Career Path, Learning Journeys', [
    'Draw a broad S-curved ribbon narrowing slightly as it climbs upward.',
    'Add a dashed center lane line and 3 numbered roadside flags.',
    'Put a small summit star or peak right at the top horizon.'
  ], `
    <path d="M 36 112 C 130 112, 80 74, 150 68 C 210 62, 160 32, 224 24" fill="none" stroke="#CBD5E1" stroke-width="20" stroke-linecap="round"/>
    <path d="M 36 112 C 130 112, 80 74, 150 68 C 210 62, 160 32, 224 24" fill="none" stroke="#141836" stroke-width="2" stroke-dasharray="5 5"/>
    <circle cx="48" cy="110" r="6" fill="#0EA5E9" stroke="#141836" stroke-width="1.8"/>
    <circle cx="146" cy="68" r="6" fill="#F59E0B" stroke="#141836" stroke-width="1.8"/>
    <circle cx="222" cy="24" r="7" fill="#10B981" stroke="#141836" stroke-width="1.8"/>
    <text x="48" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">M1</text>
    <text x="146" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">M2</text>
    <text x="200" y="18" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">LAUNCH ★</text>
  `),
  mk('sb-bookshelf', 'maps', '66. Mini Bookshelf Reading Tracker', 'Reading List, Courses Completed, Syllabus Progress', [
    'Draw one horizontal shelf plank and 7–9 leaning or upright book spines.',
    'Leave unread books white and shade finished books in Cyan, Mint, or Amber.',
    'Write short vertical titles right on each spine.'
  ], `
    <line x1="20" y1="104" x2="240" y2="104" stroke="#141836" stroke-width="3.2" stroke-linecap="round"/>
    <rect x="30" y="30" width="24" height="74" rx="2" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
    <rect x="56" y="42" width="22" height="62" rx="2" fill="#D1FAE5" stroke="#141836" stroke-width="2"/>
    <rect x="80" y="24" width="26" height="80" rx="2" fill="#FCE7F3" stroke="#141836" stroke-width="2"/>
    <rect x="108" y="38" width="24" height="66" rx="2" fill="#FEF3C7" stroke="#141836" stroke-width="2"/>
    <rect x="134" y="32" width="24" height="72" rx="2" fill="#FFF" stroke="#141836" stroke-width="2"/>
    <rect x="160" y="46" width="22" height="58" rx="2" fill="#FFF" stroke="#141836" stroke-width="2"/>
    <rect x="192" y="36" width="22" height="68" rx="2" transform="rotate(-12 192 104)" fill="#EDE9FE" stroke="#141836" stroke-width="2"/>
    <text x="130" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">5 / 7 BOOKS FINISHED</text>
  `),
  mk('sb-habit-grid', 'maps', '67. 21-Day Dot-Grid Habit Matrix', 'Daily Sketching, German Listening, Deep Work', [
    'Draw a neat 7×3 block of small squares aligned directly to your dot grid.',
    'Glaze completed days once (10m minimum) or twice (30m deep flow).',
    'Leave missed days open without crossing them out angrily.'
  ], `
    <text x="26" y="26" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">21-DAY SKETCH CHAIN</text>
    ${Array.from({ length: 21 }, (_, i) => {
      const c = i % 7, r = Math.floor(i / 7);
      const fill = i < 15 ? (i === 5 || i === 11 ? '#FFF' : i % 3 === 0 ? '#047857' : '#6EE7B7') : '#FFF';
      return `<rect x="${26 + c * 30}" y="${36 + r * 26}" width="22" height="20" rx="4" fill="${fill}" stroke="#141836" stroke-width="1.6"/>`;
    }).join('')}
    <text x="234" y="26" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">13/15 ✓</text>
  `),
  mk('sb-treasure-map', 'maps', '68. Dotted Treasure Trail to X', 'Customer Discovery, Root-Cause Hunting, Goals', [
    'Draw a wavy dashed footpath meandering across 3 tiny landmark icons.',
    'End the trail in a chunky bold Magenta X.',
    'Label the landmarks as clues that unlocked the final insight.'
  ], `
    <path d="M 32 96 Q 76 28 128 74 T 218 42" fill="none" stroke="#141836" stroke-width="2.4" stroke-dasharray="5 5"/>
    <circle cx="32" cy="96" r="6" fill="#0EA5E9" stroke="#141836" stroke-width="1.8"/>
    <circle cx="128" cy="74" r="6" fill="#F59E0B" stroke="#141836" stroke-width="1.8"/>
    <path d="M 208 32 L 228 52 M 228 32 L 208 52" stroke="#EC4899" stroke-width="4.5" stroke-linecap="round"/>
    <text x="32" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8">START</text>
    <text x="128" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8">CLUE #2</text>
    <text x="218" y="72" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">ROOT CAUSE</text>
  `),
  mk('sb-train-stops', 'maps', '69. Linear Commuter Line Stops', 'Onboarding Steps, Order Fulfillment, Filing Dates', [
    'Pull one thick horizontal highlighter stripe from left to right.',
    'Punch 4 hollow white station circles with dark outlines along the line.',
    'Alternate labels cleanly above and below so nothing collides.'
  ], `
    <line x1="26" y1="65" x2="234" y2="65" stroke="#0EA5E9" stroke-width="9" stroke-linecap="round"/>
    ${[[44, 'SIGNUP', true], [102, 'CSV', false], [160, 'OAUTH', true], [218, 'LIVE ★', false]].map(([x, lbl, up]) => `
      <circle cx="${x}" cy="65" r="7" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <text x="${x}" y="${up ? 44 : 92}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">${lbl}</text>
    `).join('')}
  `),
  mk('sb-mountain-peaks', 'maps', '70. 3-Peak Horizon Difficulty Map', 'Multi-Quarter Milestones, Learning Plateaus', [
    'Sketch 3 overlapping triangles growing taller left to right.',
    'Shade each right mountain face in Cool Grey to suggest crisp sunlight.',
    'Plant a small colored flag on the peak you are climbing right now.'
  ], `
    <polygon points="20,106 66,54 112,106" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
    <polygon points="66,54 112,106 86,106" fill="#CBD5E1"/>
    <polygon points="84,106 138,38 192,106" fill="#EDE9FE" stroke="#141836" stroke-width="2"/>
    <polygon points="138,38 192,106 164,106" fill="#CBD5E1"/>
    <polygon points="148,106 204,22 246,106" fill="#D1FAE5" stroke="#141836" stroke-width="2.2"/>
    <line x1="138" y1="38" x2="138" y2="18" stroke="#141836" stroke-width="2"/>
    <polygon points="138,18 156,24 138,30" fill="#EC4899"/>
    <text x="66" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8">B1</text>
    <text x="138" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#BE185D">B2 (NOW)</text>
    <text x="204" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" fill="#047857">C1</text>
  `),
  mk('sb-calendar-strip', 'maps', '71. Weekly 7-Column Time Strip', 'Sprint Cadence, Study Schedule, Filing Week', [
    'Draw a 7-column strip for M T W T F S S across the top of a page.',
    'Drop colored highlighter blocks into the exact days carrying deadlines.',
    'Ring the hero deadline day in Magenta.'
  ], `
    ${['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => `
      <rect x="${20 + i * 32}" y="22" width="28" height="86" rx="5" fill="${i === 4 ? '#FCE7F3' : i < 3 ? '#E0F2FE' : '#FFF'}" stroke="${i === 4 ? '#BE185D' : '#141836'}" stroke-width="${i === 4 ? '2.2' : '1.6'}"/>
      <text x="${34 + i * 32}" y="39" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">${d}</text>
      <line x1="${24 + i * 32}" y1="46" x2="${44 + i * 32}" y2="46" stroke="#CBD5E1" stroke-width="1.2"/>
    `).join('')}
    <text x="162" y="82" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#BE185D">SHIP</text>
  `),
  mk('sb-pin-route', 'maps', '72. Map-Pin A → B Journey Arc', 'Cross-Border Supply Chain, User Migration', [
    'Draw two classic teardrop map pins (Left Cyan Origin, Right Mint Destination).',
    'Connect their tips with a high dashed parabolic flight arc.',
    'Label the constraint or handoff right at the apex of the arc.'
  ], `
    <path d="M 52 84 Q 130 14 208 84" fill="none" stroke="#141836" stroke-width="2.2" stroke-dasharray="5 4"/>
    <path d="M 52 84 C 38 66, 36 46, 52 46 C 68 46, 66 66, 52 84 Z" fill="#0EA5E9" stroke="#141836" stroke-width="2"/>
    <circle cx="52" cy="58" r="5" fill="#FFF"/>
    <path d="M 208 84 C 194 66, 192 46, 208 46 C 224 46, 222 66, 208 84 Z" fill="#10B981" stroke="#141836" stroke-width="2"/>
    <circle cx="208" cy="58" r="5" fill="#FFF"/>
    <rect x="92" y="28" width="76" height="20" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/>
    <text x="130" y="42" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#B45309">CUSTOMS</text>
    <text x="52" y="106" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">DE WAREHOUSE</text>
    <text x="208" y="106" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">FR BUYER</text>
  `),
  mk('sb-stepping-stones', 'maps', '73. River Stepping Stones', 'Incremental Releases, Safe Experiments', [
    'Draw two parallel wavy river banks across the frame.',
    'Drop 4 rounded pebble stones staggering safely from left bank to right bank.',
    'Write one concrete weekly shippable step inside each stone.'
  ], `
    <path d="M 16 40 Q 130 28 244 42 M 16 96 Q 130 108 244 92" fill="none" stroke="#0EA5E9" stroke-width="2.2"/>
    <rect x="24" y="54" width="44" height="26" rx="13" fill="#FFF" stroke="#141836" stroke-width="2"/>
    <rect x="78" y="46" width="46" height="26" rx="13" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
    <rect x="134" y="62" width="46" height="26" rx="13" fill="#EDE9FE" stroke="#141836" stroke-width="2"/>
    <rect x="190" y="50" width="46" height="26" rx="13" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
    <g font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" text-anchor="middle">
      <text x="46" y="70">CSV</text><text x="101" y="62">READ</text><text x="157" y="78">RETRY</text><text x="213" y="66" fill="#047857">SYNC</text>
    </g>
  `),
  mk('sb-orbit-ring', 'maps', '74. Concentric Impact Rings', 'Ripple Effects, Stakeholder Tiers, Scope Waves', [
    'Draw 3 nested circles expanding outward from one tight dark center.',
    'Label Inner = Core User, Middle = Team, Outer = Regulators/Partners.',
    'Use light pastel fills so inner rings stay crisp.'
  ], `
    <circle cx="88" cy="66" r="50" fill="#FEF3C7" fill-opacity="0.45" stroke="#B45309" stroke-width="1.8" stroke-dasharray="4 3"/>
    <circle cx="88" cy="66" r="34" fill="#E0F2FE" fill-opacity="0.7" stroke="#0EA5E9" stroke-width="1.8"/>
    <circle cx="88" cy="66" r="18" fill="#141836"/>
    <text x="88" y="70" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#FFF">CORE</text>
    <g font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">
      <text x="152" y="42" fill="#141836">1. Direct User</text>
      <text x="152" y="68" fill="#0369A1">2. Ops &amp; Support</text>
      <text x="152" y="94" fill="#B45309">3. Audit &amp; Legal</text>
    </g>
  `),
  mk('sb-ladder-steps', 'maps', '75. 4-Rung Skill Ladder', 'Maturity Models, Competence Tiers, Escalation', [
    'Draw two slightly leaning parallel rails with 4 evenly spaced rungs.',
    'Highlight the rung you are standing on with a Magenta arrow.',
    'Add 2-word stage labels cleanly to the right of each rung.'
  ], `
    <line x1="48" y1="112" x2="64" y2="18" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
    <line x1="94" y1="112" x2="110" y2="18" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
    ${[[96, '1. Manual'], [74, '2. Template'], [52, '3. Assisted ★'], [30, '4. Audited Auto']].map(([y, lbl], i) => `
      <line x1="${51 + i * 3.5}" y1="${y}" x2="${97 + i * 3.5}" y2="${y}" stroke="${i === 2 ? '#EC4899' : '#141836'}" stroke-width="${i === 2 ? '3.4' : '2.2'}"/>
      <text x="122" y="${y + 4}" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="${i === 2 ? '700' : '500'}" fill="${i === 2 ? '#BE185D' : '#141836'}">${lbl}</text>
    `).join('')}
  `),
  mk('sb-kanban-mini', 'maps', '76. 3-Column Pocket Kanban', 'Weekly Focus, Bug Triage, Writing Pipeline', [
    'Draw 3 slim vertical columns titled NEXT / NOW / DONE.',
    'Drop tiny 2×1 dot sticky-note tiles inside each column.',
    'Cap the NOW column at strictly 2 cards so focus stays visible.'
  ], `
    ${[['NEXT', 20, '#EEF2FC', 3], ['NOW (2)', 96, '#FCE7F3', 2], ['DONE ✓', 172, '#D1FAE5', 3]].map(([t, x, bg, n]) => `
      <rect x="${x}" y="14" width="68" height="102" rx="6" fill="${bg}" stroke="#141836" stroke-width="1.8"/>
      <text x="${x + 34}" y="30" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">${t}</text>
      ${Array.from({ length: n }, (_, j) => `<rect x="${x + 8}" y="${38 + j * 24}" width="52" height="18" rx="3" fill="#FFF" stroke="#141836" stroke-width="1.4"/>`).join('')}
    `).join('')}
  `),

  // VISUAL THINKING (77–80)
  mk('sb-venn-2', 'thinking', '77. Classic 2-Circle Sweet Spot Venn', 'Product-Market Fit, Skill Intersections, Tradeoffs', [
    'Draw two overlapping circles tinted Cyan and Amber at light opacity.',
    'Shade the middle almond lens cleanly and pull a short pointer arrow out.',
    'Name the two inputs and the unique sweet spot in the middle.'
  ], `
    <circle cx="96" cy="64" r="42" fill="#0EA5E9" fill-opacity="0.25" stroke="#0369A1" stroke-width="2.2"/>
    <circle cx="154" cy="64" r="42" fill="#F59E0B" fill-opacity="0.28" stroke="#B45309" stroke-width="2.2"/>
    <text x="74" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">USER</text>
    <text x="176" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#B45309">BIZ</text>
    <text x="125" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#141836">FIT ★</text>
  `),
  mk('sb-funnel-3', 'thinking', '78. 3-Tier Conversion / Filter Funnel', 'Activation Drop-Off, Lead Triage, Editing Passes', [
    'Draw 3 stacked inverted trapezoids stepping narrower downward.',
    'Tint top wide input Cyan, middle filter Violet, and narrow output Mint.',
    'Put the conversion percentages cleanly down the right rail.'
  ], `
    <polygon points="28,16 172,16 154,46 46,46" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
    <polygon points="50,52 150,52 134,82 66,82" fill="#EDE9FE" stroke="#141836" stroke-width="2"/>
    <polygon points="70,88 130,88 118,114 82,114" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
    <g font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">
      <text x="100" y="35" text-anchor="middle">1,000 VISITS</text>
      <text x="100" y="71" text-anchor="middle">280 TRIALS</text>
      <text x="100" y="105" text-anchor="middle" fill="#047857">74 PAID</text>
      <text x="184" y="35" fill="#0369A1">100%</text>
      <text x="184" y="71" fill="#6D28D9">28%</text>
      <text x="184" y="105" fill="#047857">7.4%</text>
    </g>
  `),
  mk('sb-pyramid', 'thinking', '79. 3-Layer Priority Pyramid', 'Maslow-Style Hierarchy, Architecture Base, Diet', [
    'Draw one wide triangle and slice it horizontally into 3 bands.',
    'Keep the bottom foundation widest in Cool Grey/Cyan and tip in Magenta.',
    'Call out each tier cleanly along the right slope.'
  ], `
    <polygon points="94,16 122,52 66,52" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/>
    <polygon points="62,56 126,56 144,84 44,84" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
    <polygon points="40,88 148,88 168,116 20,116" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
    <g font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">
      <text x="136" y="42" fill="#BE185D">← DELIGHT</text>
      <text x="156" y="74" fill="#0369A1">← WORKFLOW</text>
      <text x="176" y="106" fill="#141836">← RELIABILITY</text>
    </g>
  `),
  mk('sb-seesaw', 'thinking', '80. Tilted Trade-Off Seesaw', 'Cost vs. Speed, Risk vs. Reward, Build vs. Buy', [
    'Draw a small solid triangle fulcrum at bottom-center.',
    'Balance a tilted beam across the tip with a heavy dark box weighing one side down.',
    'Label both blocks so the winning lever is immediately obvious.'
  ], `
    <polygon points="116,114 144,114 130,86" fill="#141836"/>
    <g transform="rotate(-10 130 86)">
      <line x1="34" y1="86" x2="226" y2="86" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/>
      <rect x="42" y="52" width="56" height="32" rx="5" fill="#10B981" stroke="#141836" stroke-width="2"/>
      <text x="70" y="72" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">VALUE</text>
      <rect x="174" y="62" width="42" height="22" rx="4" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.8"/>
      <text x="195" y="77" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#BE185D">COST</text>
    </g>
  `)
];
