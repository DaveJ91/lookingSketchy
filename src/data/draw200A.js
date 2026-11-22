/* =========================================================================
   DRAW SCHOOL 200 EXPANSION — PACK A (36 LESSONS: +12 DESK, +12 TECH, +12 TAX)
   ========================================================================= */

export const DRAW_200_A = [
  // +12 WORKSPACE & OBJECTS (49–60)
  {
    id: 'keycap', cat: 'desk', name: '49. Mechanical Keycap (⌘K)', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw outer trapezoid keycap base.', svg: '<rect x="16" y="24" width="68" height="58" rx="10" fill="#CBD5E1" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Nest smaller crisp white top face slightly higher.', svg: '<rect x="24" y="20" width="52" height="44" rx="7" fill="#FFF" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Connect 4 beveled corner edges for 3D plastic slope.', svg: '<path d="M 19 28 L 26 23 M 81 28 L 74 23 M 19 78 L 26 62 M 81 78 L 74 62" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Print bold Cyan "⌘K" legend + bottom shadow.', svg: '<text x="50" y="47" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="15" font-weight="700" fill="#0EA5E9">⌘K</text><line x1="20" y1="86" x2="80" y2="86" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" opacity="0.5"/>' }
    ]
  },
  {
    id: 'inkbottle', cat: 'desk', name: '50. Glass Inkwell Bottle', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw wide square glass bottle body + short neck.', svg: '<rect x="24" y="38" width="52" height="44" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.4"/><rect x="36" y="26" width="28" height="12" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add ridged Indigo screw cap on top.', svg: '<rect x="33" y="14" width="34" height="13" rx="3" fill="#141836"/><path d="M 40 16 V 25 M 50 16 V 25 M 60 16 V 25" stroke="#94A3B8" stroke-width="1.4"/>' },
      { txt: 'Fill lower half with shimmering Cyan ink level.', svg: '<rect x="27" y="54" width="46" height="25" rx="3" fill="#0EA5E9" fill-opacity="0.55"/>' },
      { txt: 'Stick clean white square label ("05") + glass gleam.', svg: '<rect x="37" y="46" width="26" height="22" rx="2" fill="#FFFDF5" stroke="#141836" stroke-width="1.6"/><text x="50" y="61" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">INK</text>' }
    ]
  },
  {
    id: 'sticky', cat: 'desk', name: '51. Curled Sticky Note', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw square note body stopping short at bottom-right.', svg: '<path d="M 18 18 H 82 V 64 L 64 82 H 18 Z" fill="#FEF3C7" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Fold triangular curled corner flap upward.', svg: '<polygon points="64,82 64,64 82,64" fill="#FDE68A" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>' },
      { txt: 'Add translucent tape strip across top center.', svg: '<rect x="36" y="10" width="28" height="12" rx="2" fill="#E0F2FE" fill-opacity="0.8" stroke="#0EA5E9" stroke-width="1.5"/>' },
      { txt: 'Write 2 tiny bullet lines + soft curl drop shadow.', svg: '<path d="M 28 40 H 68 M 28 52 H 56" stroke="#141836" stroke-width="2.2" stroke-linecap="round"/><polygon points="64,82 82,64 85,78" fill="#94A3B8" fill-opacity="0.4"/>' }
    ]
  },
  {
    id: 'globe', cat: 'desk', name: '52. Studio Desk Globe', ratio: '4×5 dots',
    steps: [
      { txt: 'Trace crisp globe circle + tilted meridian arc.', svg: '<circle cx="50" cy="40" r="24" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/><path d="M 50 12 A 28 28 0 0 1 50 68" fill="none" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Connect bottom stem to curved pedestal base.', svg: '<line x1="50" y1="68" x2="50" y2="78" stroke="#141836" stroke-width="3"/><path d="M 30 82 Q 50 74 70 82 Z" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Sketch 2 simple Acid Mint continent blobs inside.', svg: '<path d="M 36 32 Q 48 26 52 38 Q 44 46 34 42 Z" fill="#10B981" fill-opacity="0.55" stroke="#047857" stroke-width="1.3"/><path d="M 56 44 Q 66 42 64 54 Q 54 56 54 48 Z" fill="#10B981" fill-opacity="0.55" stroke="#047857" stroke-width="1.3"/>' },
      { txt: 'Add latitude equator dash + Magenta pin dot!', svg: '<line x1="27" y1="40" x2="73" y2="40" stroke="#0EA5E9" stroke-width="1.2" stroke-dasharray="3 2"/><circle cx="48" cy="34" r="2.8" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'paperclip', cat: 'desk', name: '53. Oversized Paperclip', ratio: '2×5 dots',
    steps: [
      { txt: 'Pull long straight vertical outer wire on left.', svg: '<path d="M 36 74 V 26 A 14 14 0 0 1 64 26" fill="none" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Drop right outer wire down into smooth U-loop.', svg: '<path d="M 64 26 V 68 A 10 10 0 0 1 44 68" fill="none" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Return inner wire upward into tight center loop.', svg: '<path d="M 44 68 V 32 A 6 6 0 0 1 56 32 V 56" fill="none" stroke="#0EA5E9" stroke-width="2.8" stroke-linecap="round"/>' },
      { txt: 'Add soft Cool Grey cast shadow beside outer rail.', svg: '<path d="M 68 28 V 70" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" opacity="0.4"/>' }
    ]
  },
  {
    id: 'scissors', cat: 'desk', name: '54. Craft Studio Scissors', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw twin circular finger-handle rings at bottom.', svg: '<circle cx="34" cy="72" r="11" fill="#FCE7F3" stroke="#141836" stroke-width="2.4"/><circle cx="66" cy="72" r="11" fill="#FCE7F3" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Cross two sharp tapered steel blades upward.', svg: '<polygon points="39,62 66,14 70,18 46,64" fill="#EEF2FC" stroke="#141836" stroke-width="2" stroke-linejoin="round"/><polygon points="61,62 34,14 30,18 54,64" fill="#FFF" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>' },
      { txt: 'Pin center brass pivot rivet circle where blades X.', svg: '<circle cx="50" cy="44" r="3.4" fill="#F59E0B" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Add dashed Magenta snip line across top tips!', svg: '<line x1="16" y1="16" x2="84" y2="16" stroke="#EC4899" stroke-width="1.8" stroke-dasharray="4 3"/>' }
    ]
  },
  {
    id: 'frenchpress', cat: 'desk', name: '55. Coffee French Press', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw tall cylindrical glass carafe + top dome lid.', svg: '<rect x="30" y="26" width="40" height="56" rx="4" fill="#FFF" stroke="#141836" stroke-width="2.2"/><path d="M 28 26 H 72 A 22 10 0 0 0 28 26 Z" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add plunger rod + round knob on top & C-handle.', svg: '<line x1="50" y1="12" x2="50" y2="54" stroke="#141836" stroke-width="2.2"/><circle cx="50" cy="11" r="4" fill="#141836"/><path d="M 70 36 H 82 V 68 H 70" fill="none" stroke="#141836" stroke-width="3" stroke-linejoin="round"/>' },
      { txt: 'Fill lower carafe with warm Amber-brown brew + mesh bar.', svg: '<rect x="32" y="54" width="36" height="26" fill="#B45309" fill-opacity="0.45"/><line x1="30" y1="54" x2="70" y2="54" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Add sleek vertical steel cage band + glass sheen.', svg: '<line x1="36" y1="32" x2="36" y2="76" stroke="#0EA5E9" stroke-width="2" opacity="0.5"/>' }
    ]
  },
  {
    id: 'typewriter', cat: 'desk', name: '56. Retro Writer Typewriter', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw wide chunky trapezoid typewriter body.', svg: '<polygon points="22,42 78,42 86,78 14,78" fill="#E0F2FE" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Mount dark cylindrical roller + crisp sheet sticking up.', svg: '<rect x="18" y="34" width="64" height="10" rx="4" fill="#141836"/><rect x="30" y="12" width="40" height="24" fill="#FFFDF5" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Dot 2 neat rows of tiny circular retro keys.', svg: '<g fill="#FFF" stroke="#141836" stroke-width="1.4"><circle cx="30" cy="56" r="4"/><circle cx="42" cy="56" r="4"/><circle cx="54" cy="56" r="4"/><circle cx="66" cy="56" r="4"/><circle cx="36" cy="67" r="4"/><circle cx="48" cy="67" r="4"/><circle cx="60" cy="67" r="4"/></g>' },
      { txt: 'Add typed lines on paper + Magenta carriage lever!', svg: '<path d="M 36 20 H 62 M 36 27 H 54" stroke="#525B7A" stroke-width="1.8"/><path d="M 18 39 H 10 V 28" fill="none" stroke="#EC4899" stroke-width="2.4" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'watch', cat: 'desk', name: '57. Minimalist Smartwatch', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw rounded square watch bezel dead-center.', svg: '<rect x="28" y="28" width="44" height="40" rx="10" fill="#141836"/><rect x="33" y="33" width="34" height="30" rx="6" fill="#1E293B" stroke="#00D4FF" stroke-width="1.6"/>' },
      { txt: 'Extend top & bottom tapered strap bands.', svg: '<polygon points="36,28 64,28 60,10 40,10" fill="#CBD5E1" stroke="#141836" stroke-width="2"/><polygon points="36,68 64,68 60,86 40,86" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add side digital crown dial + glowing Mint ring.', svg: '<rect x="72" y="40" width="5" height="12" rx="2" fill="#EC4899" stroke="#141836" stroke-width="1.4"/><circle cx="50" cy="48" r="10" fill="none" stroke="#10B981" stroke-width="2.4" stroke-dasharray="48 16"/>' },
      { txt: 'Write crisp monospace time "09:41" inside screen.', svg: '<text x="50" y="51" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">09:41</text>' }
    ]
  },
  {
    id: 'ssd', cat: 'desk', name: '58. Portable Backup SSD', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw sleek upright pill-cornered drive casing.', svg: '<rect x="26" y="14" width="48" height="66" rx="9" fill="#EEF2FC" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Add diagonal ribbed grip lines across lower face.', svg: '<path d="M 32 48 H 68 M 32 56 H 68 M 32 64 H 68" stroke="#94A3B8" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Add glowing Acid Mint activity LED + corner loop.', svg: '<circle cx="62" cy="26" r="3.2" fill="#10B981"/><circle cx="36" cy="24" r="4" fill="#FFF" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Plug tiny USB-C cable tail out the bottom!', svg: '<rect x="44" y="80" width="12" height="6" fill="#141836"/><path d="M 50 86 V 92" stroke="#0EA5E9" stroke-width="2.8" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'fan', cat: 'desk', name: '59. Retro Desk Fan', ratio: '4×5 dots',
    steps: [
      { txt: 'Trace circular wire cage + flat pedestal base.', svg: '<circle cx="50" cy="42" r="28" fill="#FFF" stroke="#141836" stroke-width="2.4"/><line x1="50" y1="70" x2="50" y2="80" stroke="#141836" stroke-width="3.2"/><rect x="30" y="78" width="40" height="8" rx="4" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Draw 3 teardrop Cyan fan blades radiating from hub.', svg: '<ellipse cx="50" cy="26" rx="7" ry="12" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.8"/><ellipse cx="36" cy="50" rx="7" ry="12" transform="rotate(-120 36 50)" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.8"/><ellipse cx="64" cy="50" rx="7" ry="12" transform="rotate(120 64 50)" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.8"/>' },
      { txt: 'Cap center hub circle in bold Indigo.', svg: '<circle cx="50" cy="42" r="6" fill="#141836"/>' },
      { txt: 'Flick 2 breezy motion wind lines out the right!', svg: '<path d="M 82 34 H 94 M 84 46 H 96" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'loupe', cat: 'desk', name: '60. Inspection Magnifier Loupe', ratio: '4×4 dots',
    steps: [
      { txt: 'Trace thick double-rimmed circular lens.', svg: '<circle cx="42" cy="40" r="24" fill="#E0F2FE" fill-opacity="0.55" stroke="#141836" stroke-width="3"/><circle cx="42" cy="40" r="18" fill="none" stroke="#0EA5E9" stroke-width="1.5"/>' },
      { txt: 'Extend thick 45° angled handle down-right.', svg: '<line x1="60" y1="58" x2="82" y2="80" stroke="#141836" stroke-width="8" stroke-linecap="round"/><line x1="60" y1="58" x2="82" y2="80" stroke="#EC4899" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Drop crisp curved white specular lens glint top-left.', svg: '<path d="M 30 34 A 13 13 0 0 1 40 26" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Place tiny "§" or bug target zoomed inside glass!', svg: '<text x="42" y="45" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700" fill="#141836">§</text>' }
    ]
  },

  // +12 AI, TECH & PRODUCT (61–72)
  {
    id: 'webhook', cat: 'tech', name: '61. API Webhook Plug', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw rounded socket block on left & plug body on right.', svg: '<rect x="14" y="34" width="24" height="30" rx="5" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/><path d="M 56 34 H 74 A 14 15 0 0 1 74 64 H 56 Z" fill="#FCE7F3" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Add twin parallel metal prong pins extending left.', svg: '<line x1="42" y1="43" x2="56" y2="43" stroke="#141836" stroke-width="3" stroke-linecap="round"/><line x1="42" y1="55" x2="56" y2="55" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Sweep curved power cord tails outward.', svg: '<path d="M 14 49 H 4 M 88 49 H 96" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Pop twin glowing Cyan electric spark ticks between pins!', svg: '<path d="M 46 24 L 49 32 M 54 24 L 51 32" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'container', cat: 'tech', name: '62. Shipping / Docker Container', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw wide horizontal steel cargo box.', svg: '<rect x="14" y="28" width="72" height="46" rx="4" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Pull 5 vertical corrugated wall ribs inside.', svg: '<path d="M 26 34 V 68 M 38 34 V 68 M 50 34 V 68 M 62 34 V 68 M 74 34 V 68" stroke="#0EA5E9" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Add 4 corner steel lock-casting squares.', svg: '<rect x="12" y="26" width="8" height="8" fill="#141836"/><rect x="80" y="26" width="8" height="8" fill="#141836"/><rect x="12" y="68" width="8" height="8" fill="#141836"/><rect x="80" y="68" width="8" height="8" fill="#141836"/>' },
      { txt: 'Hang crane hook cable from top center!', svg: '<path d="M 50 8 V 18 M 32 26 L 50 18 L 68 26" fill="none" stroke="#141836" stroke-width="2"/>' }
    ]
  },
  {
    id: 'gitbranch', cat: 'tech', name: '63. Git Branch & Merge', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw straight vertical main trunk line left.', svg: '<line x1="34" y1="16" x2="34" y2="82" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Curve a sleek S-branch swinging right and merging back.', svg: '<path d="M 34 66 C 64 66, 66 56, 66 48 C 66 36, 64 28, 34 28" fill="none" stroke="#EC4899" stroke-width="2.8"/>' },
      { txt: 'Stamp 4 crisp circular commit node beads.', svg: '<circle cx="34" cy="20" r="6" fill="#10B981" stroke="#141836" stroke-width="2"/><circle cx="34" cy="76" r="6" fill="#0EA5E9" stroke="#141836" stroke-width="2"/><circle cx="66" cy="48" r="6" fill="#EC4899" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add tiny "PR ✓" label beside merge top node.', svg: '<text x="64" y="23" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">MERGE ✓</text>' }
    ]
  },
  {
    id: 'phoneui', cat: 'tech', name: '64. Mobile App Wireframe', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw tall rounded smartphone chassis.', svg: '<rect x="26" y="10" width="48" height="76" rx="9" fill="#141836"/><rect x="30" y="15" width="40" height="66" rx="5" fill="#FFF"/>' },
      { txt: 'Add tiny top speaker notch & bottom home pill.', svg: '<rect x="43" y="18" width="14" height="3" rx="1.5" fill="#141836"/><line x1="42" y1="76" x2="58" y2="76" stroke="#CBD5E1" stroke-width="2.6" stroke-linecap="round"/>' },
      { txt: 'Block 1 Cyan hero card + 2 mini list rows inside.', svg: '<rect x="34" y="26" width="32" height="18" rx="3" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.4"/><line x1="35" y1="52" x2="64" y2="52" stroke="#141836" stroke-width="2.2"/><line x1="35" y1="60" x2="56" y2="60" stroke="#94A3B8" stroke-width="2.2"/>' },
      { txt: 'Pop bright Magenta CTA button near bottom!', svg: '<rect x="36" y="65" width="28" height="7" rx="3.5" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'kanban', cat: 'tech', name: '65. Mini Kanban Sprint Board', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw clean outer board frame divided into 3 lanes.', svg: '<rect x="12" y="18" width="76" height="62" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.2"/><line x1="37" y1="18" x2="37" y2="80" stroke="#CBD5E1" stroke-width="1.6"/><line x1="63" y1="18" x2="63" y2="80" stroke="#CBD5E1" stroke-width="1.6"/>' },
      { txt: 'Drop 2 Amber To-Do cards in Column 1.', svg: '<rect x="16" y="28" width="17" height="12" rx="2" fill="#FEF3C7" stroke="#B45309" stroke-width="1.4"/><rect x="16" y="45" width="17" height="12" rx="2" fill="#FEF3C7" stroke="#B45309" stroke-width="1.4"/>' },
      { txt: 'Drop 1 Cyan Doing card in Column 2 + 2 Mint Done cards.', svg: '<rect x="41" y="28" width="18" height="14" rx="2" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.4"/><rect x="67" y="28" width="17" height="12" rx="2" fill="#D1FAE5" stroke="#047857" stroke-width="1.4"/><rect x="67" y="45" width="17" height="12" rx="2" fill="#D1FAE5" stroke="#047857" stroke-width="1.4"/>' },
      { txt: 'Add Magenta progress arrow hopping Doing → Done!', svg: '<path d="M 52 54 Q 62 66 72 60" fill="none" stroke="#EC4899" stroke-width="2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'abtest', cat: 'tech', name: '66. A/B Split Experiment', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw twin side-by-side variant cards (A & B).', svg: '<rect x="12" y="22" width="34" height="52" rx="6" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><rect x="54" y="22" width="34" height="52" rx="6" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>' },
      { txt: 'Label big bold "A" left and "B" right.', svg: '<text x="29" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="18" font-weight="700" fill="#525B7A">A</text><text x="71" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="18" font-weight="700" fill="#047857">B</text>' },
      { txt: 'Draw dashed vertical split divider down center.', svg: '<line x1="50" y1="12" x2="50" y2="84" stroke="#EC4899" stroke-width="1.8" stroke-dasharray="4 3"/>' },
      { txt: 'Crown Variant B with a winning Amber star + "+24%"!', svg: '<text x="71" y="69" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">+24% ★</text>' }
    ]
  },
  {
    id: 'bug', cat: 'tech', name: '67. Software Code Bug', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw plump oval beetle body + small semicircular head.', svg: '<ellipse cx="50" cy="54" rx="20" ry="24" fill="#FCE7F3" stroke="#141836" stroke-width="2.4"/><path d="M 38 34 A 12 10 0 0 1 62 34 Z" fill="#141836"/>' },
      { txt: 'Split wing shell vertically down center + 2 antennae.', svg: '<line x1="50" y1="34" x2="50" y2="78" stroke="#141836" stroke-width="2"/><path d="M 44 26 L 38 16 M 56 26 L 62 16" stroke="#141836" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Extend 3 crisp bent legs on each side (6 total).', svg: '<path d="M 30 44 L 18 38 M 30 56 H 16 M 32 68 L 20 76 M 70 44 L 82 38 M 70 56 H 84 M 68 68 L 80 76" stroke="#141836" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Dot 4 playful Magenta polka dots on wing shells!', svg: '<circle cx="40" cy="48" r="3" fill="#EC4899"/><circle cx="60" cy="48" r="3" fill="#EC4899"/><circle cx="42" cy="63" r="3" fill="#EC4899"/><circle cx="58" cy="63" r="3" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'cloudapi', cat: 'tech', name: '68. Cloud Lightning API', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw fluffy 3-bump cloud outline resting flat below.', svg: '<path d="M 24 62 H 76 A 14 14 0 0 0 76 34 A 20 20 0 0 0 38 30 A 15 15 0 0 0 24 62 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Slice crisp jagged Amber lightning bolt down center.', svg: '<polygon points="52,42 42,60 50,60 45,82 62,56 53,56" fill="#F59E0B" stroke="#141836" stroke-width="1.8" stroke-linejoin="round"/>' },
      { txt: 'Add subtle curved Cyan cloud puff detail inside.', svg: '<path d="M 36 42 A 8 8 0 0 1 46 36" fill="none" stroke="#0EA5E9" stroke-width="1.8" stroke-linecap="round"/>' },
      { txt: 'Pop twin speed dots beside lightning tip!', svg: '<circle cx="34" cy="74" r="2.2" fill="#EC4899"/><circle cx="66" cy="74" r="2.2" fill="#0EA5E9"/>' }
    ]
  },
  {
    id: 'qr', cat: 'tech', name: '69. Scannable QR Matrix', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw 3 crisp nested finder squares in TL, TR & BL corners.', svg: '<rect x="18" y="18" width="22" height="22" rx="2" fill="#FFF" stroke="#141836" stroke-width="2.6"/><rect x="24" y="24" width="10" height="10" fill="#141836"/><rect x="60" y="18" width="22" height="22" rx="2" fill="#FFF" stroke="#141836" stroke-width="2.6"/><rect x="66" y="24" width="10" height="10" fill="#141836"/><rect x="18" y="60" width="22" height="22" rx="2" fill="#FFF" stroke="#141836" stroke-width="2.6"/><rect x="24" y="66" width="10" height="10" fill="#141836"/>' },
      { txt: 'Scatter 6 crisp data pixel blocks in center & bottom-right.', svg: '<g fill="#141836"><rect x="46" y="24" width="8" height="8"/><rect x="46" y="44" width="10" height="10"/><rect x="62" y="48" width="8" height="8"/><rect x="74" y="60" width="8" height="8"/><rect x="52" y="68" width="14" height="14" fill="#0EA5E9"/></g>' },
      { txt: 'Frame outer scan corners with sleek Cyan L-brackets.', svg: '<path d="M 10 24 V 10 H 24 M 76 10 H 90 V 24 M 10 76 V 90 H 24 M 76 90 H 90 V 76" fill="none" stroke="#0EA5E9" stroke-width="2.6" stroke-linecap="round"/>' },
      { txt: 'Sweep glowing Magenta laser scan line right across middle!', svg: '<line x1="12" y1="50" x2="88" y2="50" stroke="#EC4899" stroke-width="2.4"/>' }
    ]
  },
  {
    id: 'vr', cat: 'tech', name: '70. Spatial VR Visor', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw wide curved visor goggle box with nose notch.', svg: '<path d="M 16 32 H 84 A 6 6 0 0 1 90 38 V 62 A 6 6 0 0 1 84 68 H 60 L 50 58 L 40 68 H 16 A 6 6 0 0 1 10 62 V 38 A 6 6 0 0 1 16 32 Z" fill="#141836"/>' },
      { txt: 'Inset glowing Cyan front glass plate.', svg: '<rect x="18" y="38" width="64" height="20" rx="5" fill="#0EA5E9" fill-opacity="0.35" stroke="#00D4FF" stroke-width="1.8"/>' },
      { txt: 'Add sweeping top headstrap arch.', svg: '<path d="M 22 32 C 26 14 74 14 78 32" fill="none" stroke="#141836" stroke-width="3.2"/>' },
      { txt: 'Flick twin diagonal white glass reflection streaks!', svg: '<line x1="26" y1="53" x2="36" y2="42" stroke="#FFF" stroke-width="2.8" stroke-linecap="round"/><line x1="38" y1="53" x2="44" y2="46" stroke="#FFF" stroke-width="2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'vectorcube', cat: 'tech', name: '71. Wireframe Vector Node', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw overlapping front and back transparent squares.', svg: '<rect x="20" y="32" width="44" height="44" fill="#E0F2FE" fill-opacity="0.35" stroke="#141836" stroke-width="2"/><rect x="36" y="18" width="44" height="44" fill="none" stroke="#0EA5E9" stroke-width="1.8" stroke-dasharray="4 3"/>' },
      { txt: 'Connect all 4 matching corners with diagonal edges.', svg: '<path d="M 20 32 L 36 18 M 64 32 L 80 18 M 20 76 L 36 62 M 64 76 L 80 62" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Pin tiny Magenta vertex circles on key corner handles.', svg: '<circle cx="20" cy="32" r="3.5" fill="#EC4899"/><circle cx="64" cy="32" r="3.5" fill="#EC4899"/><circle cx="80" cy="18" r="3.5" fill="#0EA5E9"/><circle cx="64" cy="76" r="3.5" fill="#10B981"/>' },
      { txt: 'Drop center coordinate dot for spatial embedding look!', svg: '<circle cx="50" cy="48" r="4" fill="#141836"/>' }
    ]
  },
  {
    id: 'funnel', cat: 'tech', name: '72. Conversion Filter Funnel', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw wide top rim ellipse + tapering cone walls.', svg: '<polygon points="18,24 82,24 58,58 58,82 42,74 42,58" fill="#EEF2FC" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/><ellipse cx="50" cy="24" rx="32" ry="7" fill="#FFF" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Divide cone into 3 colored conversion strata bands.', svg: '<line x1="28" y1="38" x2="72" y2="38" stroke="#0EA5E9" stroke-width="2"/><line x1="36" y1="50" x2="64" y2="50" stroke="#EC4899" stroke-width="2"/>' },
      { txt: 'Drop 3 incoming dots hovering above the mouth.', svg: '<circle cx="36" cy="11" r="3" fill="#94A3B8"/><circle cx="50" cy="8" r="3" fill="#0EA5E9"/><circle cx="64" cy="12" r="3" fill="#EC4899"/>' },
      { txt: 'Exit 1 glowing Mint gold-star conversion below spout!', svg: '<circle cx="50" cy="86" r="4.5" fill="#10B981" stroke="#141836" stroke-width="1.4"/>' }
    ]
  },

  // +12 TAX, LAW & FINANCE (73–84)
  {
    id: 'gavel', cat: 'tax', name: '73. Legal Ruling Gavel', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw angled barrel mallet head + twin brass end caps.', svg: '<g transform="rotate(-35 42 38)"><rect x="24" y="24" width="36" height="24" rx="4" fill="#FEF3C7" stroke="#141836" stroke-width="2.4"/><rect x="20" y="22" width="6" height="28" rx="2" fill="#B45309" stroke="#141836" stroke-width="1.6"/><rect x="58" y="22" width="6" height="28" rx="2" fill="#B45309" stroke="#141836" stroke-width="1.6"/></g>' },
      { txt: 'Extend sturdy diagonal handle down-right.', svg: '<line x1="48" y1="45" x2="82" y2="79" stroke="#141836" stroke-width="7" stroke-linecap="round"/><line x1="48" y1="45" x2="82" y2="79" stroke="#F59E0B" stroke-width="2.6" stroke-linecap="round"/>' },
      { txt: 'Add flat round sounding-block pad underneath.', svg: '<rect x="14" y="74" width="44" height="10" rx="3" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Pop 2 Magenta impact shock lines ("RULED!").', svg: '<path d="M 16 56 L 24 62 M 24 50 L 30 58" stroke="#EC4899" stroke-width="2.2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'lawbook', cat: 'tax', name: '74. Statute Law Book (§)', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw sturdy upright hardcover book + spine crease.', svg: '<rect x="22" y="14" width="56" height="68" rx="5" fill="#141836"/><line x1="32" y1="14" x2="32" y2="82" stroke="#00D4FF" stroke-width="2"/>' },
      { txt: 'Add crisp white page block along right/bottom edge.', svg: '<rect x="28" y="76" width="48" height="6" rx="2" fill="#FFF" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Emboss giant golden Amber § statute symbol center.', svg: '<text x="54" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="26" font-weight="700" fill="#FDE68A">§</text>' },
      { txt: 'Tuck a little Magenta silk bookmark ribbon below!', svg: '<polygon points="58,82 58,92 63,88 68,92 68,82" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'receipt', cat: 'tax', name: '75. Expense Receipt Slip', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw tall vertical slip with zig-zag torn top & bottom.', svg: '<polygon points="26,14 34,20 42,14 50,20 58,14 66,20 74,14 74,80 66,74 58,80 50,74 42,80 34,74 26,80" fill="#FFFDF5" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Add 3 horizontal item lines + right-aligned prices.', svg: '<path d="M 34 32 H 54 M 34 42 H 50 M 34 52 H 54" stroke="#525B7A" stroke-width="2" stroke-linecap="round"/><path d="M 60 32 H 67 M 60 42 H 67 M 60 52 H 67" stroke="#0369A1" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Draw dashed total rule + highlighted Mint total bar.', svg: '<line x1="32" y1="60" x2="68" y2="60" stroke="#141836" stroke-width="1.4" stroke-dasharray="3 2"/><rect x="33" y="63" width="34" height="8" rx="2" fill="#10B981" fill-opacity="0.35"/>' },
      { txt: 'Stamp tiny Cyan "€" badge top-center.', svg: '<text x="50" y="29" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#0369A1">VAT 19%</text>' }
    ]
  },
  {
    id: 'vault', cat: 'tax', name: '76. Bank Vault Safe Door', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw heavy rounded square steel safe casing.', svg: '<rect x="16" y="16" width="68" height="68" rx="8" fill="#CBD5E1" stroke="#141836" stroke-width="2.6"/><rect x="23" y="23" width="54" height="54" rx="5" fill="#EEF2FC" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Add twin sturdy door hinges along left edge.', svg: '<rect x="12" y="28" width="7" height="12" rx="2" fill="#141836"/><rect x="12" y="60" width="7" height="12" rx="2" fill="#141836"/>' },
      { txt: 'Center circular combination wheel with 4 spokes.', svg: '<circle cx="52" cy="50" r="14" fill="#FFF" stroke="#141836" stroke-width="2.4"/><path d="M 52 36 V 64 M 38 50 H 66" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Pop Cyan center dial cap + Mint locked LED!', svg: '<circle cx="52" cy="50" r="5" fill="#0EA5E9" stroke="#141836" stroke-width="1.6"/><circle cx="70" cy="30" r="3" fill="#10B981"/>' }
    ]
  },
  {
    id: 'candles', cat: 'tax', name: '77. Market Candlestick Trio', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw clean L-axis frame (vertical price, horizontal time).', svg: '<polyline points="16,14 16,80 86,80" fill="none" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Plot 3 vertical wick hairlines evenly spaced.', svg: '<line x1="34" y1="36" x2="34" y2="72" stroke="#141836" stroke-width="1.8"/><line x1="54" y1="26" x2="54" y2="66" stroke="#141836" stroke-width="1.8"/><line x1="74" y1="16" x2="74" y2="54" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Sleeve Mint (Up), Magenta (Down) & Mint (Breakout) candle bodies.', svg: '<rect x="28" y="44" width="12" height="20" rx="2" fill="#10B981" stroke="#141836" stroke-width="1.8"/><rect x="48" y="36" width="12" height="22" rx="2" fill="#EC4899" stroke="#141836" stroke-width="1.8"/><rect x="68" y="22" width="12" height="24" rx="2" fill="#10B981" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Sweep dashed Cyan trendline rising under lows!', svg: '<line x1="22" y1="70" x2="82" y2="42" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="4 3"/>' }
    ]
  },
  {
    id: 'piggy', cat: 'tax', name: '78. Tax-Reserve Piggy Bank', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw plump horizontal oval body + snout rectangle right.', svg: '<ellipse cx="48" cy="52" rx="28" ry="20" fill="#FCE7F3" stroke="#141836" stroke-width="2.4"/><rect x="74" y="46" width="10" height="12" rx="3" fill="#FBCFE8" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add triangular ear, 2 stubby legs & curly tail.', svg: '<polygon points="56,34 64,22 68,36" fill="#FCE7F3" stroke="#141836" stroke-width="2"/><rect x="32" y="68" width="8" height="12" rx="2" fill="#FCE7F3" stroke="#141836" stroke-width="2"/><rect x="56" y="68" width="8" height="12" rx="2" fill="#FCE7F3" stroke="#141836" stroke-width="2"/><path d="M 20 50 Q 10 46 14 40" fill="none" stroke="#141836" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Cut top coin slot + cute round eye dot.', svg: '<line x1="40" y1="36" x2="54" y2="36" stroke="#141836" stroke-width="3" stroke-linecap="round"/><circle cx="64" cy="46" r="2.6" fill="#141836"/>' },
      { txt: 'Drop a glowing Amber € coin right into the slot!', svg: '<circle cx="47" cy="20" r="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.8"/><text x="47" y="23" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#B45309">€</text>' }
    ]
  },
  {
    id: 'contract', cat: 'tax', name: '79. Signed Contract Page', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw clean upright page with folded top-right dog-ear.', svg: '<path d="M 20 12 H 64 L 78 26 V 82 H 20 Z" fill="#FFFDF5" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/><polygon points="64,12 64,26 78,26" fill="#E0F2FE" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Add 4 neat parallel clause lines across upper half.', svg: '<path d="M 30 34 H 66 M 30 43 H 62 M 30 52 H 66" stroke="#525B7A" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Draw signature baseline + cursive ink flourish.', svg: '<line x1="30" y1="72" x2="66" y2="72" stroke="#141836" stroke-width="1.5"/><path d="M 32 70 Q 40 58 46 68 T 62 64" fill="none" stroke="#0EA5E9" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Stamp Mint "✓ OK" seal bottom-right!', svg: '<circle cx="72" cy="70" r="10" fill="#10B981" stroke="#141836" stroke-width="1.8"/><polyline points="67,70 71,74 77,66" fill="none" stroke="#FFF" stroke-width="2.2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'card', cat: 'tax', name: '80. Corporate Payment Card', ratio: '5×3 dots',
    steps: [
      { txt: 'Draw crisp horizontal rounded credit card rectangle.', svg: '<rect x="12" y="22" width="76" height="48" rx="7" fill="#141836"/>' },
      { txt: 'Add golden Amber EMV smart-chip square on left.', svg: '<rect x="22" y="34" width="14" height="11" rx="2" fill="#FDE68A" stroke="#B45309" stroke-width="1.4"/>' },
      { txt: 'Add Cyan contactless wave arcs + 4 card-number dashes.', svg: '<path d="M 42 36 A 6 6 0 0 1 42 44 M 46 34 A 9 9 0 0 1 46 46" fill="none" stroke="#00D4FF" stroke-width="1.8" stroke-linecap="round"/><path d="M 22 57 H 34 M 40 57 H 52 M 58 57 H 70" stroke="#94A3B8" stroke-width="2.6" stroke-linecap="round"/>' },
      { txt: 'Overlap twin Magenta & Amber brand circles bottom-right.', svg: '<circle cx="68" cy="36" r="6" fill="#EC4899" fill-opacity="0.85"/><circle cx="76" cy="36" r="6" fill="#F59E0B" fill-opacity="0.85"/>' }
    ]
  },
  {
    id: 'pie', cat: 'tax', name: '81. Exploded Pie Slice', ratio: '4×4 dots',
    steps: [
      { txt: 'Trace main 270° circular pie body.', svg: '<path d="M 48 52 L 48 20 A 32 32 0 1 0 80 52 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Pop the top-right 25% wedge outward diagonally!', svg: '<path d="M 55 45 L 55 15 A 30 30 0 0 1 85 45 Z" fill="#EC4899" fill-opacity="0.65" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Divide bottom wedge cleanly with a Mint section line.', svg: '<line x1="48" y1="52" x2="26" y2="75" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Write "19%" right beside the popped Magenta slice!', svg: '<text x="72" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#FFF">19%</text>' }
    ]
  },
  {
    id: 'goldbars', cat: 'tax', name: '82. Stacked Asset Bullion', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw 2 twin trapezoid bars sitting side-by-side below.', svg: '<polygon points="14,76 22,56 46,56 54,76" fill="#FDE68A" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/><polygon points="46,76 54,56 78,56 86,76" fill="#FDE68A" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Stack a 3rd identical trapezoid bar centered on top.', svg: '<polygon points="30,56 38,36 62,36 70,56" fill="#FEF3C7" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Add inner beveled top rectangles for metallic facet.', svg: '<line x1="39" y1="42" x2="61" y2="42" stroke="#B45309" stroke-width="1.6"/><line x1="23" y1="62" x2="45" y2="62" stroke="#B45309" stroke-width="1.6"/><line x1="55" y1="62" x2="77" y2="62" stroke="#B45309" stroke-width="1.6"/>' },
      { txt: 'Pop twin bright Cyan gleam sparkles above top bar!', svg: '<path d="M 50 18 V 28 M 45 23 H 55" stroke="#0EA5E9" stroke-width="2.2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'euflag', cat: 'tax', name: '83. EU Cross-Border Emblem', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw crisp rounded flag rectangle tinted deep Indigo.', svg: '<rect x="14" y="20" width="72" height="50" rx="6" fill="#141836" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Trace light guide circle dead-center inside.', svg: '<circle cx="50" cy="45" r="16" fill="none" stroke="#0EA5E9" stroke-width="1" stroke-dasharray="2 3"/>' },
      { txt: 'Dot 8 bright Amber star beads evenly around the ring.', svg: '<g fill="#FDE68A"><circle cx="50" cy="29" r="2.4"/><circle cx="61" cy="34" r="2.4"/><circle cx="66" cy="45" r="2.4"/><circle cx="61" cy="56" r="2.4"/><circle cx="50" cy="61" r="2.4"/><circle cx="39" cy="56" r="2.4"/><circle cx="34" cy="45" r="2.4"/><circle cx="39" cy="34" r="2.4"/></g>' },
      { txt: 'Write crisp "EU" badge right inside the star ring!', svg: '<text x="50" y="49" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#00D4FF">EU</text>' }
    ]
  },
  {
    id: 'handshake', cat: 'tax', name: '84. Advisory Deal Handshake', ratio: '5×3 dots',
    steps: [
      { txt: 'Draw twin angled suit cuffs entering from left & right.', svg: '<polygon points="8,36 26,30 32,58 12,64" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/><polygon points="92,36 74,30 68,58 88,64" fill="#D1FAE5" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Connect palms in an interlocking diamond clasp center.', svg: '<path d="M 28 36 L 48 32 L 70 42 L 64 62 L 42 66 L 30 52 Z" fill="#FFFDF5" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Add 3 tiny diagonal finger-knuckle creases.', svg: '<path d="M 46 54 L 54 62 M 52 50 L 60 58 M 58 46 L 65 53" stroke="#141836" stroke-width="1.8" stroke-linecap="round"/>' },
      { txt: 'Burst 3 Mint trust-spark ticks directly above clasp!', svg: '<path d="M 50 14 V 24 M 38 18 L 43 26 M 62 18 L 57 26" stroke="#10B981" stroke-width="2.4" stroke-linecap="round"/>' }
    ]
  }
];
