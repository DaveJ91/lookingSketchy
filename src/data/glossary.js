/* =========================================================================
   TECHNICAL GLOSSARY (32 TERMS) + INLINE TOOLTIP HELPER
   ========================================================================= */
export const GLOSSARY = [
  { key: 'dual-coding', term: 'Dual-Coding Theory', ch: 'ch1', cat: 'Cognition', def: 'Allan Paivio\'s cognitive model showing that pairing concise verbal text with spatial/visual anchors creates two independent retrieval pathways in memory.' },
  { key: 'gestalt', term: 'Gestalt Principles', ch: 'ch1', cat: 'Cognition', def: 'Perceptual laws (Proximity, Alignment, Figure-Ground, Similarity) describing how the brain automatically groups visual elements before conscious reading begins.' },
  { key: 'figure-ground', term: 'Figure-Ground', ch: 'ch1', cat: 'Cognition', def: 'Visual separation between the quiet paper background (ground, ~60%) and intentional dark ink/semantic callouts (figure, ~40%).' },
  { key: 'semantic-color', term: 'Semantic Color', ch: 'ch1', cat: 'Color', def: 'Assigning fixed functional meanings to a restrained palette (e.g., Cyan = flow/der, Magenta = risk/die, Mint = approved/das) rather than decorative highlighting.' },
  { key: 'gsm', term: 'GSM (Grams per Square Meter)', ch: 'ch2', cat: 'Hardware', def: 'Paper density metric. 70–80gsm office sheets bleed easily; 120gsm is the slim daily sweet spot; 160gsm stops virtually all water-based ghosting.' },
  { key: 'ghosting', term: 'Ghosting vs. Bleed-Through', ch: 'ch2', cat: 'Hardware', def: 'Ghosting is faintly seeing ink through the reverse side of thin paper; bleed-through is liquid ink physically soaking through the fibers onto the next sheet.' },
  { key: 'pigment-ink', term: 'Archival Pigment Ink', ch: 'ch2', cat: 'Hardware', def: 'Waterproof particulate ink (e.g., Sakura Pigma Micron, Uni Pin) that bonds mechanically to cellulose in ~5 seconds so water-based highlighters never smear it.' },
  { key: 'x-height', term: 'x-Height', ch: 'ch3', cat: 'Typography', def: 'The vertical height of lowercase letter bodies (a, c, e, m, n, o, r, s, u). Locking x-height to 50–65% of a 5mm dot row creates instant typographic calm.' },
  { key: 'corner-braking', term: 'Corner Braking', ch: 'ch3', cat: 'Typography', def: 'Micro-pausing for a fraction of a second at sharp turns (m, n, h, r, u) so letters stay crisp instead of collapsing into wavy threads.' },
  { key: 'architects-print', term: 'Architect\'s Print', ch: 'ch4', cat: 'Typography', def: 'Narrow, crisp all-caps lettering sized strictly 1 dot-grid row tall with slightly upward-tilted crossbars—ideal for labels, axes, and headers.' },
  { key: 'faux-calligraphy', term: 'Faux Calligraphy', ch: 'ch4', cat: 'Typography', def: 'Simulating brush-pen thick/thin contrast with a regular fineliner by thickening every stroke where the pen moved downward.' },
  { key: 'tabular-numbers', term: 'Tabular Numbers', ch: 'ch4', cat: 'Typography', def: 'Giving every digit (0–9) equal horizontal width (0.5 dots) and slashing zeros (Ø) so financial, tax, and latency columns align vertically.' },
  { key: 'two-pass', term: 'Two-Pass Workflow', ch: 'ch5', cat: 'Workflow', def: 'Separating Pass 1 (fast single-ink capture with wide gaps) from Pass 2 (2-minute structural polish with Cool Grey shadows and 2 neon accents).' },
  { key: 'arrow-corridor', term: 'Arrow Corridor', ch: 'ch5', cat: 'Layout', def: 'Reserving 3–4 blank dot-grid rows between diagram tiers so connector arrows route cleanly without ever crossing text.' },
  { key: 'edge-tabbing', term: 'Edge-Tabbing OS', ch: 'ch5', cat: 'Workflow', def: 'Coloring a 2-dot swatch at a fixed vertical height on the outer edge of each page so closed notebooks can be thumb-indexed by topic in 2 seconds.' },
  { key: 'cognitive-compression', term: 'Cognitive Compression', ch: 'ch6', cat: 'Cognition', def: 'Distilling rapid speech into Subject + Verb + Delta/Constraint (e.g., 100 spoken words → 7 visual words + 1 container) during live listening.' },
  { key: 'satzklammer', term: 'Satzklammer (German Sentence Bracket)', ch: 'ch6', cat: 'Deutsch', def: 'German clause geometry where the conjugated verb sits in Position 2 and the infinitive/participle/separable prefix snaps to the final slot—ideal for bracket diagrams.' },
  { key: 'stop-short', term: 'Stop-Short & Bridge', ch: 'ch7', cat: 'Diagrams', def: 'Drawing all 4 straight box edges stopping 0.5 dots before each corner vertex, then bridging each 90° gap with a smooth tiny quarter-arc.' },
  { key: 'chamfer', term: 'Chamfered 45° Corner', ch: 'ch7', cat: 'Diagrams', def: 'Cutting a box corner at a 45° diagonal (1 dot back from each vertex) to produce an unmistakable Light Cyberpunk HUD card with zero freehand curves.' },
  { key: 'dumbbell-chart', term: 'Diverging Dumbbell Chart', ch: 'ch8', cat: 'Data Viz', def: 'Comparing two states per row (Before ○ vs. After ●) joined by a semantic color bar so deltas and savings pop immediately.' },
  { key: 'small-multiples', term: 'Small Multiples', ch: 'ch8', cat: 'Data Viz', def: 'A grid of identical mini-charts sharing one Y-axis scale so regional, client, or weekly outliers jump out effortlessly.' },
  { key: 'symbol-drawing', term: 'Symbol Drawing', ch: 'ch10', cat: 'Illustration', def: 'The novice habit of drawing flat 2D childhood icons from memory instead of constructing objects from 3D geometric primitives.' },
  { key: 'isometric', term: '2-Over, 1-Up Isometric', ch: 'ch10', cat: 'Illustration', def: 'Constructing crisp ~26.5° dimetric/isometric planes on a standard 5mm dot grid by stepping 2 dots horizontally and 1 dot vertically.' },
  { key: 'foreshortening', term: 'Ellipse Foreshortening', ch: 'ch10', cat: 'Illustration', def: 'Circular rims flatten toward a straight line as they approach eye level (horizon) and open rounder the further above or below eye level they sit.' },
  { key: 'ambient-occlusion', term: 'Ambient Occlusion (AO)', ch: 'ch11', cat: 'Light', def: 'The dark contact crease directly beneath where an object rests on a surface—drawn with a bold 05 pen to stop diagrams from floating.' },
  { key: 'terminator', term: 'Core Shadow / Terminator', ch: 'ch11', cat: 'Light', def: 'The darkest band on a curved object where direct light stops hitting the surface, just before soft reflected light bounces up from the table.' },
  { key: 'line-weight', term: '3-Weight Line Hierarchy', ch: 'ch11', cat: 'Light', def: 'Using 05 for bold outer silhouettes, 03 for interior structural edges, and 01 for surface textures/hatching so forms read from across the room.' },
  { key: 'bean-body', term: 'Bean-Body Person', ch: 'ch12', cat: 'Illustration', def: 'A 4-second expressive character made from a soft rounded jellybean torso, floating circle head, and two gesture arms—no anatomy needed.' },
  { key: 'corner-ticks', term: 'Corner Ticks', ch: 'ch14', cat: 'Layout', def: 'Tiny 01 ink tick marks placed at column/row boundaries on a 27×38 A5 dot grid so layouts stay aligned without drawing heavy grid lines.' },
  { key: 'glazing', term: 'Marker Glazing', ch: 'ch15', cat: 'Color', def: 'Layering translucent water-based marker coats with a 10-second dry pause between passes so a single marker produces 3 crisp tonal values without pilling.' },
  { key: 'paper-pilling', term: 'Paper Pilling', ch: 'ch15', cat: 'Color', def: 'Fuzzy shredded cellulose fibers caused by scrubbing a wet water-based marker nib back and forth over the same spot before it dries.' },
  { key: 'elbow-leader', term: '45° Elbow Leader', ch: 'ch16', cat: 'Diagrams', def: 'An annotation callout line anchored by a solid dot (●) that exits a diagram at 45° and bends into a clean horizontal text shelf.' }
];

export const GLOSSARY_MAP = Object.fromEntries(GLOSSARY.map(g => [g.key, g]));

/** Emit an inline clickable glossary span inside chapter HTML */
export function gt(key, label) {
  const item = GLOSSARY_MAP[key];
  if (!item) return label || key;
  return `<span class="gloss-term" data-gloss="${key}" tabindex="0" role="button" title="Click for definition: ${item.term}">${label || item.term}</span>`;
}
