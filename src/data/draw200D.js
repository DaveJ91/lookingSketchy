/* =========================================================================
   DRAW SCHOOL 200 EXPANSION — PACK D (40 LESSONS: 20 GRAPHICS/BANNERS + 20 METAPHORS)
   ========================================================================= */

export const DRAW_200_D = [
  // 20 PRETTY GRAPHICS, BANNERS, RIBBONS & FRAMES (161–180)
  {
    id: 'gfx-ribbon', cat: 'graphics', name: '161. 3D Folded Header Ribbon', ratio: '6×3 dots',
    steps: [
      { txt: 'Draw clean horizontal center title rectangle.', svg: '<rect x="20" y="26" width="60" height="28" rx="3" fill="#FFF" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Extend twin V-notched ribbon tails slightly lower left & right.', svg: '<polygon points="6,36 22,36 22,62 6,62 14,49" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><polygon points="94,36 78,36 78,62 94,62 86,49" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Fill tiny dark under-fold triangles where tails tuck behind!', svg: '<polygon points="20,54 27,54 20,62" fill="#141836"/><polygon points="80,54 73,54 80,62" fill="#141836"/>' },
      { txt: 'Wash pastel Cyan across banner + print clean title!', svg: '<rect x="22" y="28" width="56" height="24" fill="#0EA5E9" fill-opacity="0.18"/><text x="50" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">TITLE</text>' }
    ]
  },
  {
    id: 'gfx-washi', cat: 'graphics', name: '162. Washi-Tape Polaroid Frame', ratio: '5×5 dots',
    steps: [
      { txt: 'Draw classic thick-bottom Polaroid card frame.', svg: '<rect x="20" y="18" width="60" height="68" rx="3" fill="#FFF" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Inset crisp square image box inside upper section.', svg: '<rect x="26" y="24" width="48" height="42" fill="#E0F2FE" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Tape a tilted translucent Magenta washi strip across top!', svg: '<rect x="34" y="10" width="32" height="12" transform="rotate(-6 50 16)" fill="#EC4899" fill-opacity="0.45" stroke="#BE185D" stroke-width="1.4"/>' },
      { txt: 'Write neat caption line along white bottom chin.', svg: '<line x1="34" y1="76" x2="66" y2="76" stroke="#525B7A" stroke-width="2.2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'gfx-torn', cat: 'graphics', name: '163. Torn-Edge Notebook Scrap', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw crisp box with a jagged zig-zag torn bottom edge.', svg: '<polygon points="14,18 86,18 86,70 76,64 66,72 56,64 46,72 36,64 26,72 14,66" fill="#FFFDF5" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Add 3 spiral ring holes along top edge.', svg: '<circle cx="30" cy="26" r="3" fill="#CBD5E1" stroke="#141836"/><circle cx="50" cy="26" r="3" fill="#CBD5E1" stroke="#141836"/><circle cx="70" cy="26" r="3" fill="#CBD5E1" stroke="#141836"/>' },
      { txt: 'Add 2 highlighter note lines inside.', svg: '<rect x="22" y="38" width="54" height="7" rx="2" fill="#FEF3C7"/><rect x="22" y="50" width="42" height="7" rx="2" fill="#E0F2FE"/>' },
      { txt: 'Trace soft Cool Grey shadow echoing torn bottom!', svg: '<polyline points="16,71 26,76 36,68 46,76 56,68 66,76 76,68 86,74" fill="none" stroke="#94A3B8" stroke-width="2.4" opacity="0.45"/>' }
    ]
  },
  {
    id: 'gfx-thought', cat: 'graphics', name: '164. Fluffy Thought Cloud', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw bouncy scalloped cloud outline with 6 puffs.', svg: '<path d="M 28 58 C 14 58 14 38 26 36 C 24 20 46 14 54 24 C 66 14 84 26 78 38 C 90 42 86 60 72 58 Z" fill="#FFF" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Drop 2 shrinking trailing thought bubbles down-left.', svg: '<circle cx="28" cy="70" r="5" fill="#FFF" stroke="#141836" stroke-width="2"/><circle cx="18" cy="80" r="3" fill="#FFF" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Tint soft Violet rim glow inside lower curve.', svg: '<path d="M 28 56 H 72" stroke="#7C3AED" stroke-width="4" opacity="0.24" stroke-linecap="round"/>' },
      { txt: 'Write giant "?" or "AHA!" right inside cloud!', svg: '<text x="52" y="46" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700" fill="#7C3AED">AHA!</text>' }
    ]
  },
  {
    id: 'gfx-brackets', cat: 'graphics', name: '165. Double Bracket Callout', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw heavy left & right architectural square brackets [  ].', svg: '<path d="M 32 18 H 18 V 74 H 32 M 68 18 H 82 V 74 H 68" fill="none" stroke="#141836" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>' },
      { txt: 'Tint subtle Cyan wash filling the open center.', svg: '<rect x="24" y="24" width="52" height="44" rx="4" fill="#E0F2FE" fill-opacity="0.5"/>' },
      { txt: 'Center crisp monospace key metric inside.', svg: '<text x="50" y="51" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="15" font-weight="700" fill="#0369A1">99.4%</text>' },
      { txt: 'Add tiny Magenta corner ticks outside brackets!', svg: '<circle cx="14" cy="18" r="2.6" fill="#EC4899"/><circle cx="86" cy="74" r="2.6" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'gfx-arrow', cat: 'graphics', name: '166. Looping Motion Arrow', ratio: '5×4 dots',
    steps: [
      { txt: 'Sweep playful cursive loop-de-loop curve left to right.', svg: '<path d="M 12 68 C 36 68, 48 26, 36 26 C 24 26, 32 62, 78 38" fill="none" stroke="#141836" stroke-width="2.6" stroke-linecap="round"/>' },
      { txt: 'Cap tip with crisp solid Magenta arrowhead!', svg: '<polygon points="72,31 86,34 78,46" fill="#EC4899" stroke="#141836" stroke-width="1.6" stroke-linejoin="round"/>' },
      { txt: 'Add 2 light Cyan motion-echo dashes beside loop.', svg: '<path d="M 16 74 H 28" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Dot starting point with tiny hollow circle!', svg: '<circle cx="12" cy="68" r="3.5" fill="#FFF" stroke="#141836" stroke-width="2"/>' }
    ]
  },
  {
    id: 'gfx-bookmark', cat: 'graphics', name: '167. Vertical Flag Bookmark', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw tall vertical ribbon with crisp V-notch bottom.', svg: '<polygon points="30,12 70,12 70,84 50,68 30,84" fill="#FCE7F3" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Add delicate dashed stitch border inside edges.', svg: '<polyline points="35,16 35,74 50,62 65,74 65,16" fill="none" stroke="#EC4899" stroke-width="1.5" stroke-dasharray="3 2"/>' },
      { txt: 'Stamp bold star or chapter number at upper third.', svg: '<text x="50" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700" fill="#BE185D">★</text>' },
      { txt: 'Add top horizontal hanger rod bar.', svg: '<line x1="22" y1="12" x2="78" y2="12" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'gfx-stamp', cat: 'graphics', name: '168. Tilted Verified Ink Stamp', ratio: '4×4 dots',
    steps: [
      { txt: 'Trace bold outer circle + dashed inner stamp ring.', svg: '<circle cx="50" cy="48" r="32" fill="#D1FAE5" fill-opacity="0.45" stroke="#047857" stroke-width="3"/><circle cx="50" cy="48" r="25" fill="none" stroke="#047857" stroke-width="1.4" stroke-dasharray="3 2"/>' },
      { txt: 'Draw tilted ribbon banner cutting straight across middle!', svg: '<g transform="rotate(-12 50 48)"><rect x="12" y="38" width="76" height="20" rx="3" fill="#FFF" stroke="#047857" stroke-width="2.2"/><text x="50" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">VERIFIED ✓</text></g>' },
      { txt: 'Add tiny top & bottom stars inside ring.', svg: '<text x="50" y="31" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#047857">★ ★</text>' },
      { txt: 'Add subtle ink distress dot texture.', svg: '<text x="50" y="69" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#047857">2026</text>' }
    ]
  },
  {
    id: 'gfx-hltitle', cat: 'graphics', name: '169. Highlighter-Drop Header', ratio: '6×3 dots',
    steps: [
      { txt: 'Pull one wide chunky horizontal Cyan highlighter bar first.', svg: '<rect x="10" y="42" width="80" height="20" rx="4" fill="#0EA5E9" fill-opacity="0.32"/>' },
      { txt: 'Write bold Indigo title resting cleanly over upper edge!', svg: '<text x="50" y="50" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="17" fill="#141836">Chapter 1</text>' },
      { txt: 'Add crisp thin Indigo underline rule directly beneath bar.', svg: '<line x1="12" y1="64" x2="88" y2="64" stroke="#141836" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Drop tiny Magenta diamond accent at start!', svg: '<polygon points="10,48 14,44 18,48 14,52" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'gfx-starburst', cat: 'graphics', name: '170. Comic Starburst Callout', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw crisp 10-point jagged comic burst polygon.', svg: '<polygon points="50,10 59,28 79,22 72,40 90,50 72,60 79,78 59,72 50,90 41,72 21,78 28,60 10,50 28,40 21,22 41,28" fill="#FEF3C7" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Tint inner Amber burst glow.', svg: '<circle cx="50" cy="50" r="22" fill="#F59E0B" fill-opacity="0.28"/>' },
      { txt: 'Print bold exclamation word ("NEW!" / "KEY!") center.', svg: '<text x="50" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#BE185D">KEY!</text>' },
      { txt: 'Add tiny offset Indigo accent ticks.', svg: '<circle cx="50" cy="24" r="2" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'gfx-ticket', cat: 'graphics', name: '171. Perforated Event Ticket', ratio: '6×3 dots',
    steps: [
      { txt: 'Draw wide ticket card with semicircular side notches.', svg: '<path d="M 12 24 H 88 V 39 A 8 8 0 0 0 88 55 V 70 H 12 V 55 A 8 8 0 0 0 12 39 Z" fill="#FFFDF5" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Divide stub cleanly on right with vertical dashed perforation.', svg: '<line x1="66" y1="26" x2="66" y2="68" stroke="#141836" stroke-width="1.6" stroke-dasharray="3 3"/>' },
      { txt: 'Tint stub Cyan + print "ADMIT 1" / "RULE #1".', svg: '<rect x="68" y="26" width="18" height="42" fill="#E0F2FE" fill-opacity="0.6"/><text x="39" y="51" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#141836">PASS #01</text>' },
      { txt: 'Add barcode hatch ticks inside right stub!', svg: '<path d="M 73 36 H 82 M 73 43 H 82 M 73 50 H 82 M 73 57 H 82" stroke="#0369A1" stroke-width="2"/>' }
    ]
  },
  {
    id: 'gfx-foldertab', cat: 'graphics', name: '172. Index File Folder Card', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw stepped manila tab rising on top-left corner.', svg: '<path d="M 14 26 H 44 L 52 34 H 86 V 78 H 14 Z" fill="#EEF2FC" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Color top tab bright Cyan for instant page indexing.', svg: '<polygon points="15,27 43,27 50,34 15,34" fill="#0EA5E9" fill-opacity="0.4"/>' },
      { txt: 'Add 3 crisp summary lines inside folder body.', svg: '<path d="M 24 48 H 74 M 24 58 H 66 M 24 68 H 58" stroke="#525B7A" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Drop neo-brutalist offset shadow on right & bottom!', svg: '<polyline points="16,80 88,80 88,36" fill="none" stroke="#141836" stroke-width="3"/>' }
    ]
  },
  {
    id: 'gfx-divider', cat: 'graphics', name: '173. Diamond Section Divider', ratio: '6×2 dots',
    steps: [
      { txt: 'Draw left & right balanced horizontal hairlines stopping short.', svg: '<line x1="8" y1="48" x2="36" y2="48" stroke="#141836" stroke-width="2.2" stroke-linecap="round"/><line x1="64" y1="48" x2="92" y2="48" stroke="#141836" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Place crisp hollow Cyan diamond dead-center.', svg: '<polygon points="50,36 60,48 50,60 40,48" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Add twin tiny Magenta flanking dots.', svg: '<circle cx="32" cy="48" r="2.8" fill="#EC4899"/><circle cx="68" cy="48" r="2.8" fill="#EC4899"/>' },
      { txt: 'Dot center diamond core solid Indigo.', svg: '<circle cx="50" cy="48" r="3" fill="#141836"/>' }
    ]
  },
  {
    id: 'gfx-laurel', cat: 'graphics', name: '174. Achievement Laurel Wreath', ratio: '5×4 dots',
    steps: [
      { txt: 'Curve two symmetric U-stems embracing center.', svg: '<path d="M 38 78 C 14 68, 12 30, 32 18 M 62 78 C 86 68, 88 30, 68 18" fill="none" stroke="#047857" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Add 3 crisp Mint oval leaves along each stem.', svg: '<ellipse cx="20" cy="46" rx="5" ry="9" transform="rotate(-24 20 46)" fill="#D1FAE5" stroke="#047857" stroke-width="1.6"/><ellipse cx="26" cy="64" rx="5" ry="9" transform="rotate(-48 26 64)" fill="#D1FAE5" stroke="#047857" stroke-width="1.6"/><ellipse cx="80" cy="46" rx="5" ry="9" transform="rotate(24 80 46)" fill="#D1FAE5" stroke="#047857" stroke-width="1.6"/><ellipse cx="74" cy="64" rx="5" ry="9" transform="rotate(48 74 64)" fill="#D1FAE5" stroke="#047857" stroke-width="1.6"/>' },
      { txt: 'Tie bottom crossover with tiny Amber ribbon dot.', svg: '<circle cx="50" cy="78" r="4" fill="#F59E0B" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Print bold "#1" or "B2!" dead-center!', svg: '<text x="50" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="18" font-weight="700" fill="#141836">#1</text>' }
    ]
  },
  {
    id: 'gfx-foldbox', cat: 'graphics', name: '175. Chamfered Cyber Box', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw crisp octagon-chamfered cyber frame (45° clipped corners).', svg: '<polygon points="22,18 78,18 88,28 88,68 78,78 22,78 12,68 12,28" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Nest thin Cyan inner tech trim.', svg: '<polygon points="25,23 75,23 83,31 83,65 75,73 25,73 17,65 17,31" fill="none" stroke="#0EA5E9" stroke-width="1.3"/>' },
      { txt: 'Add heavy Magenta corner bracket cap top-left.', svg: '<polyline points="12,36 12,28 22,18 32,18" fill="none" stroke="#EC4899" stroke-width="3.4"/>' },
      { txt: 'Add crisp label inside ("SPEC v2").', svg: '<text x="50" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#141836">SPEC v2</text>' }
    ]
  },
  {
    id: 'gfx-speech', cat: 'graphics', name: '176. Neo-Brutalist Speech Pill', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw offset solid Indigo shadow box first (4px down-right).', svg: '<rect x="18" y="24" width="70" height="44" rx="10" fill="#141836"/>' },
      { txt: 'Overlay crisp white bubble card + pointed bottom tail.', svg: '<path d="M 14 20 H 84 V 64 H 38 L 24 78 V 64 H 14 Z" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Add bright Cyan accent bar on left wall.', svg: '<rect x="16" y="22" width="7" height="40" fill="#0EA5E9"/>' },
      { txt: 'Add 3 crisp ellipsis dots inside!', svg: '<circle cx="38" cy="42" r="3.5" fill="#141836"/><circle cx="52" cy="42" r="3.5" fill="#141836"/><circle cx="66" cy="42" r="3.5" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'gfx-checkstamp', cat: 'graphics', name: '177. Bold Hand-Drawn Check Box', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw crisp rounded Indigo square checkbox.', svg: '<rect x="20" y="22" width="54" height="54" rx="10" fill="#D1FAE5" stroke="#141836" stroke-width="2.6"/>' },
      { txt: 'Break out of the box top-right with an oversized Mint checkmark!', svg: '<polyline points="32,48 46,62 82,18" fill="none" stroke="#047857" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>' },
      { txt: 'Echo checkmark with sleek inner white gleam.', svg: '<polyline points="32,48 46,62 82,18" fill="none" stroke="#10B981" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' },
      { txt: 'Add tiny celebration burst ticks near tip!', svg: '<circle cx="86" cy="28" r="2.6" fill="#0EA5E9"/>' }
    ]
  },
  {
    id: 'gfx-alert', cat: 'graphics', name: '178. Caution Trap Triangle', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw bold rounded warning triangle.', svg: '<polygon points="50,14 86,78 14,78" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.8" stroke-linejoin="round"/>' },
      { txt: 'Pull thick Indigo exclamation stem down center.', svg: '<line x1="50" y1="36" x2="50" y2="58" stroke="#BE185D" stroke-width="5" stroke-linecap="round"/>' },
      { txt: 'Dot exclamation period firmly below.', svg: '<circle cx="50" cy="68" r="3.6" fill="#BE185D"/>' },
      { txt: 'Add offset bottom shadow line for lift.', svg: '<line x1="18" y1="82" x2="84" y2="82" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'gfx-pinflag', cat: 'graphics', name: '179. Margin Page-Flag Tab', ratio: '5×3 dots',
    steps: [
      { txt: 'Draw horizontal page edge line on left.', svg: '<line x1="18" y1="14" x2="18" y2="82" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Stick bold notched Magenta tab protruding right!', svg: '<polygon points="18,30 82,30 72,48 82,66 18,66" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Print crisp short section label ("TAX").', svg: '<text x="46" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#BE185D">TAX</text>' },
      { txt: 'Add tiny white fold highlight along spine!', svg: '<line x1="23" y1="34" x2="23" y2="62" stroke="#FFF" stroke-width="2.4"/>' }
    ]
  },
  {
    id: 'gfx-dotted', cat: 'graphics', name: '180. Blueprint Corner Reticle', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw 4 sharp L-shaped crop brackets at outer corners.', svg: '<path d="M 14 34 V 16 H 32 M 68 16 H 86 V 34 M 14 60 V 78 H 32 M 68 78 H 86 V 60" fill="none" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Trace delicate dashed Cyan box connecting them.', svg: '<rect x="20" y="22" width="60" height="50" fill="#E0F2FE" fill-opacity="0.28" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3"/>' },
      { txt: 'Add crosshair center tick.', svg: '<path d="M 50 40 V 54 M 43 47 H 57" stroke="#EC4899" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Label "FOCUS" cleanly along bottom!', svg: '<text x="50" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">FOCUS ZONE</text>' }
    ]
  },

  // 20 CLEVER MINI-METAPHORS (181–200)
  {
    id: 'meta-iceberg', cat: 'metaphors', name: '181. 10/90 Iceberg Reality', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw horizontal Cyan waterline across upper third.', svg: '<line x1="10" y1="36" x2="90" y2="36" stroke="#0EA5E9" stroke-width="2.4"/>' },
      { txt: 'Draw tiny white triangle tip peeking above surface.', svg: '<polygon points="36,36 50,14 64,36" fill="#FFF" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Expand massive shaded crystal iceberg mass underneath!', svg: '<polygon points="36,36 64,36 80,58 58,86 24,72 18,52" fill="#E0F2FE" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Add internal facet crease lines + 10%/90% tags.', svg: '<polyline points="50,36 44,62 58,86" fill="none" stroke="#0EA5E9" stroke-width="1.6"/>' }
    ]
  },
  {
    id: 'meta-magnet', cat: 'metaphors', name: '182. Attraction Magnet Pull', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw bold U-shaped horseshoe magnet.', svg: '<path d="M 24 22 V 56 A 26 26 0 0 0 76 56 V 22 H 62 V 56 A 12 12 0 0 1 38 56 V 22 Z" fill="#FCE7F3" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Cap both pole tips crisp white/silver.', svg: '<rect x="24" y="22" width="14" height="12" fill="#FFF" stroke="#141836" stroke-width="2"/><rect x="62" y="22" width="14" height="12" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Emit glowing Cyan magnetic force arcs above tips!', svg: '<path d="M 31 12 Q 50 4 69 12 M 38 18 Q 50 12 62 18" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="3 2"/>' },
      { txt: 'Glaze right U-arm rich Magenta for 3D pop!', svg: '<path d="M 50 82 A 26 26 0 0 0 76 56 V 34 H 62 V 56 A 12 12 0 0 1 50 68 Z" fill="#EC4899" fill-opacity="0.35"/>' }
    ]
  },
  {
    id: 'meta-anchor', cat: 'metaphors', name: '183. Grounding Ship Anchor', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw top circle ring + straight vertical shank + crossbar.', svg: '<circle cx="50" cy="18" r="6" fill="#FFF" stroke="#141836" stroke-width="2.2"/><line x1="50" y1="24" x2="50" y2="78" stroke="#141836" stroke-width="3.2"/><line x1="34" y1="34" x2="66" y2="34" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Sweep wide curved U-fluke arc across bottom.', svg: '<path d="M 20 56 C 22 82, 78 82, 80 56" fill="none" stroke="#141836" stroke-width="3.4" stroke-linecap="round"/>' },
      { txt: 'Cap both fluke tips with sharp Cyan arrowhead spades!', svg: '<polygon points="16,60 20,48 28,58" fill="#0EA5E9" stroke="#141836" stroke-width="1.6"/><polygon points="84,60 80,48 72,58" fill="#0EA5E9" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Add soft seabed shadow line below.', svg: '<ellipse cx="50" cy="84" rx="22" ry="4" fill="#94A3B8" fill-opacity="0.4"/>' }
    ]
  },
  {
    id: 'meta-gears', cat: 'metaphors', name: '184. Interlocking System Gears', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw large Cyan gear wheel bottom-left + hollow hub.', svg: '<circle cx="38" cy="56" r="20" fill="#E0F2FE" stroke="#141836" stroke-width="2.6" stroke-dasharray="6 4"/><circle cx="38" cy="56" r="8" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Mesh smaller Magenta gear wheel top-right flush against it!', svg: '<circle cx="68" cy="34" r="14" fill="#FCE7F3" stroke="#141836" stroke-width="2.6" stroke-dasharray="5 3"/><circle cx="68" cy="34" r="5" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add opposing curved rotation arrows showing leverage.', svg: '<path d="M 22 36 A 20 20 0 0 1 40 28" fill="none" stroke="#0EA5E9" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Dot both hubs solid Mint & Cyan.', svg: '<circle cx="38" cy="56" r="3" fill="#0EA5E9"/><circle cx="68" cy="34" r="2.5" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'meta-seesaw', cat: 'metaphors', name: '185. Leverage Fulcrum Seesaw', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw crisp triangle fulcrum base shifted toward right!', svg: '<polygon points="56,78 72,78 64,54" fill="#CBD5E1" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Tilt long balance plank lifting heavy right block effortlessly!', svg: '<line x1="14" y1="68" x2="88" y2="40" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/>' },
      { txt: 'Place giant heavy cube on short side + tiny Cyan dot on long side!', svg: '<rect x="66" y="18" width="22" height="22" rx="3" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><circle cx="20" cy="56" r="7" fill="#0EA5E9" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add Mint upward lift arrow under giant block!', svg: '<path d="M 92 34 V 18 M 88 22 L 92 16 L 96 22" fill="none" stroke="#10B981" stroke-width="2.2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'meta-ladder', cat: 'metaphors', name: '186. Skill-Step Ladder Climb', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw twin slanted parallel ladder rails rising up-right.', svg: '<line x1="30" y1="84" x2="48" y2="14" stroke="#141836" stroke-width="3" stroke-linecap="round"/><line x1="54" y1="84" x2="72" y2="14" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Add 4 evenly spaced horizontal step rungs.', svg: '<path d="M 33 72 H 57 M 37 56 H 61 M 41 40 H 65 M 45 24 H 69" stroke="#0EA5E9" stroke-width="2.6" stroke-linecap="round"/>' },
      { txt: 'Rest top against glowing Mint "GOAL" cloud shelf!', svg: '<path d="M 52 16 H 88" stroke="#10B981" stroke-width="4" stroke-linecap="round"/>' },
      { txt: 'Pop tiny Amber star right above top rung!', svg: '<circle cx="62" cy="8" r="3.5" fill="#F59E0B"/>' }
    ]
  },
  {
    id: 'meta-battery', cat: 'metaphors', name: '187. Energy Recharge Meter', ratio: '5×3 dots',
    steps: [
      { txt: 'Draw horizontal rounded battery shell + right terminal nub.', svg: '<rect x="14" y="28" width="66" height="38" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.6"/><rect x="80" y="39" width="7" height="16" rx="2" fill="#141836"/>' },
      { txt: 'Fill 3 vibrant progressive Mint charge bars inside.', svg: '<rect x="20" y="34" width="14" height="26" rx="2" fill="#10B981"/><rect x="38" y="34" width="14" height="26" rx="2" fill="#10B981"/><rect x="56" y="34" width="14" height="26" rx="2" fill="#34D399" fill-opacity="0.5" stroke="#047857" stroke-dasharray="2 2"/>' },
      { txt: 'Overlay bold Amber lightning charge bolt center!', svg: '<polygon points="48,22 40,48 48,48 44,68 58,42 50,42" fill="#F59E0B" stroke="#141836" stroke-width="1.6" stroke-linejoin="round"/>' },
      { txt: 'Add "+100%" sparkle tag underneath.', svg: '<text x="47" y="82" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">DEEP FOCUS</text>' }
    ]
  },
  {
    id: 'meta-shieldwall', cat: 'metaphors', name: '188. Firewall / Risk Boundary', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw sturdy upright brick wall dividing Left & Right.', svg: '<rect x="44" y="16" width="14" height="66" rx="3" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.4"/><path d="M 44 32 H 58 M 44 48 H 58 M 44 64 H 58" stroke="#BE185D" stroke-width="1.6"/>' },
      { txt: 'Bounce jagged Magenta risk arrows off left wall!', svg: '<polyline points="12,38 38,38 24,52" fill="none" stroke="#EC4899" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' },
      { txt: 'Keep glowing Mint safe zone calm on the right side!', svg: '<circle cx="76" cy="48" r="14" fill="#D1FAE5" stroke="#047857" stroke-width="2"/><polyline points="70,48 74,52 82,44" fill="none" stroke="#047857" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Ground with clean horizontal baseline.', svg: '<line x1="12" y1="84" x2="88" y2="84" stroke="#141836" stroke-width="2.6"/>' }
    ]
  },
  {
    id: 'meta-domino', cat: 'metaphors', name: '189. One Lead Domino Trigger', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw 3 progressively taller domino slabs left to right.', svg: '<rect x="14" y="54" width="12" height="28" rx="2" transform="rotate(18 20 82)" fill="#EC4899" stroke="#141836" stroke-width="2"/><rect x="38" y="38" width="16" height="44" rx="2" transform="rotate(10 46 82)" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><rect x="66" y="18" width="20" height="64" rx="3" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>' },
      { txt: 'Add center domino divider lines on each block.', svg: '<line x1="68" y1="50" x2="84" y2="50" stroke="#047857" stroke-width="1.6"/>' },
      { txt: 'Flick tiny motion lines pushing the #1 Magenta domino!', svg: '<path d="M 4 56 H 12 M 4 64 H 10" stroke="#EC4899" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Anchor all 3 on crisp horizontal floor line.', svg: '<line x1="10" y1="84" x2="92" y2="84" stroke="#141836" stroke-width="2.8"/>' }
    ]
  },
  {
    id: 'meta-hourglass', cat: 'metaphors', name: '190. Flip-the-Hourglass Reset', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw sleek geometric twin triangles touching at waist.', svg: '<polygon points="30,20 70,20 50,48" fill="#E0F2FE" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/><polygon points="50,48 70,76 30,76" fill="#FEF3C7" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Wrap bold curved Mint flip-arrows orbiting left & right!', svg: '<path d="M 18 54 A 34 34 0 0 1 28 24 M 82 42 A 34 34 0 0 1 72 72" fill="none" stroke="#10B981" stroke-width="2.6" stroke-linecap="round"/>' },
      { txt: 'Cap flip arrows with sharp Mint arrowheads.', svg: '<polygon points="22,22 32,20 30,30" fill="#10B981"/><polygon points="78,74 68,76 70,66" fill="#10B981"/>' },
      { txt: 'Add top & bottom Indigo end caps.', svg: '<line x1="26" y1="20" x2="74" y2="20" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/><line x1="26" y1="76" x2="74" y2="76" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'meta-compass', cat: 'metaphors', name: '191. Values Over Speed Compass', ratio: '4×4 dots',
    steps: [
      { txt: 'Trace crisp circular bezel + tiny top loop ring.', svg: '<circle cx="50" cy="52" r="30" fill="#FFF" stroke="#141836" stroke-width="2.6"/><circle cx="50" cy="16" r="5" fill="none" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Draw tilted diamond magnetic needle inside.', svg: '<polygon points="66,34 55,55 34,70 45,49" fill="#E0F2FE" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>' },
      { txt: 'Paint North half bright Magenta so direction pops!', svg: '<polygon points="66,34 55,55 45,49" fill="#EC4899"/>' },
      { txt: 'Pin center brass pivot dot.', svg: '<circle cx="50" cy="52" r="3.4" fill="#141836"/>' }
    ]
  },
  {
    id: 'meta-puzzle', cat: 'metaphors', name: '192. Two Halves Clicking Fit', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw left Cyan puzzle tile with protruding right tab.', svg: '<path d="M 14 26 H 44 V 40 A 7 7 0 1 1 44 54 V 70 H 14 Z" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Draw right Mint tile floating 6px away with matching cutout!', svg: '<path d="M 56 26 H 86 V 70 H 56 V 54 A 7 7 0 1 0 56 40 Z" fill="#D1FAE5" stroke="#047857" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Add twin opposing Cyan arrows showing the click!', svg: '<path d="M 45 16 H 55" stroke="#EC4899" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Pop tiny "FIT!" spark star right in gap!', svg: '<circle cx="50" cy="16" r="3" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'meta-eye', cat: 'metaphors', name: '193. Fresh-Eyes Vision Lens', ratio: '5×3 dots',
    steps: [
      { txt: 'Draw sleek almond eye silhouette with twin curved arcs.', svg: '<path d="M 10 48 Q 50 14 90 48 Q 50 82 10 48 Z" fill="#FFF" stroke="#141836" stroke-width="2.6" stroke-linejoin="round"/>' },
      { txt: 'Center vibrant Cyan iris circle + dark Indigo pupil.', svg: '<circle cx="50" cy="48" r="15" fill="#0EA5E9" fill-opacity="0.45" stroke="#141836" stroke-width="2.2"/><circle cx="50" cy="48" r="7" fill="#141836"/>' },
      { txt: 'Drop crisp white specular catchlight dot inside pupil!', svg: '<circle cx="54" cy="44" r="3" fill="#FFF"/>' },
      { txt: 'Radiate 3 tiny clarity eyelashes above upper curve.', svg: '<path d="M 50 16 V 24 M 32 22 L 36 29 M 68 22 L 64 29" stroke="#0EA5E9" stroke-width="2.2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'meta-feather', cat: 'metaphors', name: '194. Lightness / Elegant Quill', ratio: '4×5 dots',
    steps: [
      { txt: 'Sweep graceful S-curved quill spine from bottom-left to top-right.', svg: '<path d="M 20 82 Q 44 48 80 14" fill="none" stroke="#141836" stroke-width="2.8" stroke-linecap="round"/>' },
      { txt: 'Wrap teardrop feather vane silhouette around upper shaft.', svg: '<path d="M 32 68 C 24 44, 48 16, 80 14 C 76 46, 54 68, 32 68 Z" fill="#E0F2FE" fill-opacity="0.6" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Notch 2 playful diagonal feather splits into edge.', svg: '<path d="M 46 34 L 54 40 M 64 38 L 58 46" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Add tiny Magenta ink drop right at quill nib tip!', svg: '<circle cx="18" cy="84" r="3.5" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'meta-mirror', cat: 'metaphors', name: '195. Self-Reflection Mirror', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw ornate oval hand-mirror frame + tapered handle.', svg: '<ellipse cx="50" cy="38" rx="24" ry="28" fill="#FEF3C7" stroke="#141836" stroke-width="2.4"/><rect x="45" y="66" width="10" height="20" rx="4" fill="#F59E0B" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Inset cool reflective Cyan glass oval inside.', svg: '<ellipse cx="50" cy="38" rx="18" ry="22" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.8"/>' },
      { txt: 'Sweep twin diagonal white reflection stripes across glass!', svg: '<line x1="38" y1="48" x2="58" y2="24" stroke="#FFF" stroke-width="4" stroke-linecap="round"/><line x1="46" y1="54" x2="62" y2="35" stroke="#FFF" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Pop tiny sparkle star on upper rim!', svg: '<circle cx="68" cy="18" r="3" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'meta-bridge', cat: 'metaphors', name: '196. Suspension Idea Bridge', ratio: '6×3 dots',
    steps: [
      { txt: 'Draw flat horizontal bridge deck spanning left to right.', svg: '<line x1="8" y1="64" x2="92" y2="64" stroke="#141836" stroke-width="3.2" stroke-linecap="round"/>' },
      { txt: 'Raise twin tall Indigo bridge towers at 1/3 and 2/3.', svg: '<line x1="30" y1="22" x2="30" y2="78" stroke="#141836" stroke-width="3.4"/><line x1="70" y1="22" x2="70" y2="78" stroke="#141836" stroke-width="3.4"/>' },
      { txt: 'Drape graceful parabolic Magenta suspension cables across!', svg: '<path d="M 8 64 Q 20 56 30 24 Q 50 62 70 24 Q 80 56 92 64" fill="none" stroke="#EC4899" stroke-width="2.4"/>' },
      { txt: 'Drop crisp vertical Cyan suspender hairlines!', svg: '<path d="M 40 44 V 64 M 50 48 V 64 M 60 44 V 64" stroke="#0EA5E9" stroke-width="1.6"/>' }
    ]
  },
  {
    id: 'meta-umbrella', cat: 'metaphors', name: '197. Risk-Cover Umbrella', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw wide scalloped semicircular umbrella dome.', svg: '<path d="M 14 48 A 36 30 0 0 1 86 48 Q 74 42 62 48 Q 50 42 38 48 Q 26 42 14 48 Z" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Drop center handle shaft straight down into curved J-hook.', svg: '<path d="M 50 18 V 74 A 7 7 0 0 1 36 74" fill="none" stroke="#141836" stroke-width="2.8" stroke-linecap="round"/>' },
      { txt: 'Glaze middle panel bright Violet for dome curve.', svg: '<path d="M 50 18 Q 40 34 38 48 Q 50 42 62 48 Q 60 34 50 18 Z" fill="#7C3AED" fill-opacity="0.32"/>' },
      { txt: 'Draw 3 Cyan raindrops bouncing harmlessly off dome!', svg: '<path d="M 24 14 L 28 22 M 76 14 L 72 22 M 50 6 V 12" stroke="#0EA5E9" stroke-width="2.2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'meta-seed', cat: 'metaphors', name: '198. Compounding Seed-to-Oak', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw clean ground horizon + tiny oval seed on left.', svg: '<line x1="10" y1="74" x2="90" y2="74" stroke="#141836" stroke-width="2.4"/><ellipse cx="20" cy="68" rx="6" ry="4" fill="#FEF3C7" stroke="#B45309" stroke-width="1.8"/>' },
      { txt: 'Grow mid-size 2-leaf Mint sprout in center.', svg: '<path d="M 46 74 V 50 M 46 58 Q 36 50 38 58 M 46 54 Q 56 46 54 54" fill="none" stroke="#047857" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Raise lush full Acid Mint canopy tree on right!', svg: '<line x1="74" y1="74" x2="74" y2="42" stroke="#141836" stroke-width="3.6"/><circle cx="74" cy="34" r="18" fill="#10B981" fill-opacity="0.45" stroke="#047857" stroke-width="2.2"/>' },
      { txt: 'Connect stages with tiny Cyan progress chevrons → →!', svg: '<path d="M 30 62 H 36 M 56 54 H 62" stroke="#0EA5E9" stroke-width="2.2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'meta-prism2', cat: 'metaphors', name: '199. Diamond Under Pressure', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw classic geometric faceted diamond silhouette.', svg: '<polygon points="28,24 72,24 86,44 50,82 14,44" fill="#E0F2FE" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Add horizontal girdle line + V-facets meeting bottom tip.', svg: '<line x1="14" y1="44" x2="86" y2="44" stroke="#141836" stroke-width="2"/><polyline points="28,24 38,44 50,82 62,44 72,24" fill="none" stroke="#0EA5E9" stroke-width="1.8"/>' },
      { txt: 'Shade top-right & bottom-right facets Cyan for crystal brilliance!', svg: '<polygon points="62,44 86,44 50,82" fill="#0EA5E9" fill-opacity="0.35"/>' },
      { txt: 'Pop bright sparkle cross right on top-left corner!', svg: '<path d="M 22 12 V 22 M 17 17 H 27" stroke="#EC4899" stroke-width="2.2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'meta-horizon', cat: 'metaphors', name: '200. Open Road to Mastery', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw curved horizon hill line across middle.', svg: '<path d="M 10 48 Q 50 38 90 48" fill="none" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Sweep dramatic 1-point perspective winding road toward horizon!', svg: '<path d="M 20 84 Q 44 66 47 45 H 53 Q 56 66 80 84 Z" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Dash bright Cyan center-lane stripes receding smaller!', svg: '<path d="M 50 80 V 70 M 50 63 V 56 M 50 51 V 47" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Raise glowing golden Amber sun directly behind the vanishing point!', svg: '<path d="M 36 45 A 14 14 0 0 1 64 45 Z" fill="#FDE68A" stroke="#F59E0B" stroke-width="2"/>' }
    ]
  }
];
