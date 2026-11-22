/* =========================================================================
   APPENDIX D: THE "DRAW ANYTHING IN 4 STEPS" 200-ILLUSTRATION SCHOOL
   200 Step-by-Step Mini-Illustrations + Animated Stepper + Live Trace Canvas
   ========================================================================= */
import { DRAW_LESSONS_EXTRA } from '../data/drawLessonsExtra.js';
import { DRAW_200_A } from '../data/draw200A.js';
import { DRAW_200_B } from '../data/draw200B.js';
import { DRAW_200_C } from '../data/draw200C.js';
import { DRAW_200_D } from '../data/draw200D.js';
import { toggleFavorite, isFavorite } from '../state.js';

const BASE_DRAW_LESSONS = [
  // WORKSPACE & DESK (1–6)
  {
    id: 'mug', cat: 'desk', name: '1. Steaming Coffee Mug', ratio: '3×4 dots',
    steps: [
      { txt: 'Draw top ellipse & vertical walls (03).', svg: '<ellipse cx="50" cy="30" rx="22" ry="7" fill="#FFF" stroke="#141836" stroke-width="2"/><path d="M 28 30 V 74 A 22 9 0 0 0 72 74 V 30" fill="none" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add curved C-ribbon handle on right.', svg: '<path d="M 72 40 C 89 40 89 66 72 66" fill="none" stroke="#141836" stroke-width="6" stroke-linecap="round"/><path d="M 72 40 C 89 40 89 66 72 66" fill="none" stroke="#FFF" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Flick 2 wavy steam curls + 05 base crease.', svg: '<path d="M 42 18 Q 38 11 44 6 M 56 18 Q 52 11 58 6" fill="none" stroke="#0EA5E9" stroke-width="1.8" stroke-linecap="round"/><path d="M 28 75 A 22 9 0 0 0 72 75" fill="none" stroke="#141836" stroke-width="3.6"/>' },
      { txt: 'Shade coffee rim Amber & cast Cool Grey shadow.', svg: '<ellipse cx="64" cy="82" rx="28" ry="6" fill="#94A3B8" fill-opacity="0.38"/><path d="M 28 30 V 74 A 22 9 0 0 0 72 74 V 30 Z" fill="#E0F2FE" fill-opacity="0.35"/><ellipse cx="50" cy="30" rx="18" ry="4.5" fill="#B45309" fill-opacity="0.5"/>' }
    ]
  },
  {
    id: 'notebook', cat: 'desk', name: '2. Open Dot-Grid Sketchbook', ratio: '6×4 dots',
    steps: [
      { txt: 'Draw center spine & twin tilted page trapezoids.', svg: '<polygon points="14,30 50,22 50,74 14,80" fill="#FFF" stroke="#141836" stroke-width="2"/><polygon points="50,22 86,30 86,80 50,74" fill="#FAFBFD" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add page-thickness drop edge underneath.', svg: '<polyline points="14,80 50,78 86,80" fill="none" stroke="#141836" stroke-width="3.2"/><line x1="50" y1="22" x2="50" y2="78" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Sketch tiny mini-box on left + bullets on right.', svg: '<rect x="22" y="38" width="20" height="14" rx="2" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.4"/><path d="M 58 38 H 78 M 58 48 H 74 M 58 58 H 78" stroke="#525B7A" stroke-width="1.8" stroke-linecap="round"/>' },
      { txt: 'Drop diagonal Micron fineliner & Cool Grey shadow.', svg: '<polygon points="58,64 90,34 94,38 62,68" fill="#141836"/><polygon points="20,84 86,84 82,88 18,88" fill="#94A3B8" fill-opacity="0.45"/>' }
    ]
  },
  {
    id: 'laptop', cat: 'desk', name: '3. Angled Coding Laptop', ratio: '6×4 dots',
    steps: [
      { txt: 'Draw rounded screen rectangle slightly tilted.', svg: '<rect x="20" y="20" width="60" height="40" rx="4" fill="#FFF" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Extend wide trapezoid keyboard base forward.', svg: '<polygon points="20,60 80,60 90,78 10,78" fill="#E2E8F0" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Add inner bezel, trackpad & 3 code lines.', svg: '<rect x="25" y="25" width="50" height="30" rx="2" fill="#E0F2FE" stroke="#141836" stroke-width="1.4"/><rect x="42" y="68" width="16" height="6" rx="2" fill="#FFF" stroke="#141836" stroke-width="1.2"/><path d="M 30 34 H 52 M 30 41 H 64 M 30 48 H 44" stroke="#0369A1" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Add // white glass sheen + 05 base shadow.', svg: '<line x1="60" y1="50" x2="70" y2="30" stroke="#FFF" stroke-width="2.8" stroke-linecap="round"/><line x1="12" y1="81" x2="88" y2="81" stroke="#94A3B8" stroke-width="5" opacity="0.5"/>' }
    ]
  },
  {
    id: 'lamp', cat: 'desk', name: '4. Studio Architect Lamp', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw flat oval base + hinged 2-segment arm.', svg: '<ellipse cx="32" cy="80" rx="16" ry="5" fill="#CBD5E1" stroke="#141836" stroke-width="2"/><polyline points="32,76 20,46 52,24" fill="none" stroke="#141836" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' },
      { txt: 'Draw angled conical lamp shade at tip.', svg: '<polygon points="48,22 66,18 76,42 46,44" fill="#FFF" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Add tiny pivot joint circles at knees.', svg: '<circle cx="20" cy="46" r="4" fill="#FFF" stroke="#141836" stroke-width="1.8"/><circle cx="52" cy="24" r="4" fill="#FFF" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Sweep warm Amber light cone down onto desk!', svg: '<polygon points="48,44 74,42 90,82 38,82" fill="#F59E0B" fill-opacity="0.24"/><polygon points="48,22 66,18 76,42 46,44" fill="#0EA5E9" fill-opacity="0.28"/>' }
    ]
  },
  {
    id: 'ordner', cat: 'desk', name: '5. German Aktenordner Trio', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw 3 tall vertical spine rectangles side-by-side.', svg: '<rect x="18" y="20" width="20" height="62" rx="2" fill="#FFF" stroke="#141836" stroke-width="2"/><rect x="40" y="20" width="20" height="62" rx="2" fill="#FFF" stroke="#141836" stroke-width="2"/><rect x="62" y="20" width="20" height="62" rx="2" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add white spine label boxes at top third.', svg: '<rect x="21" y="28" width="14" height="16" fill="#FFF" stroke="#141836" stroke-width="1.4"/><rect x="43" y="28" width="14" height="16" fill="#FFF" stroke="#141836" stroke-width="1.4"/><rect x="65" y="28" width="14" height="16" fill="#FFF" stroke="#141836" stroke-width="1.4"/>' },
      { txt: 'Drop iconic circular finger-pull holes below.', svg: '<circle cx="28" cy="68" r="4.5" fill="#FFF" stroke="#141836" stroke-width="1.8"/><circle cx="50" cy="68" r="4.5" fill="#FFF" stroke="#141836" stroke-width="1.8"/><circle cx="72" cy="68" r="4.5" fill="#FFF" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Wash Cyan (USt), Magenta (OSS), Mint (AO) + AO line.', svg: '<rect x="19" y="21" width="18" height="60" fill="#0EA5E9" fill-opacity="0.24"/><rect x="41" y="21" width="18" height="60" fill="#EC4899" fill-opacity="0.22"/><rect x="63" y="21" width="18" height="60" fill="#10B981" fill-opacity="0.24"/><line x1="14" y1="84" x2="88" y2="84" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'plant', cat: 'desk', name: '6. Potted Desk Cactus / Plant', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw trapezoid pot + flat collar rim on top.', svg: '<rect x="30" y="54" width="40" height="7" rx="2" fill="#FFF" stroke="#141836" stroke-width="2"/><polygon points="33,61 67,61 62,84 38,84" fill="#FEF3C7" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Grow 3 overlapping pill-shaped cactus pads.', svg: '<rect x="42" y="22" width="16" height="32" rx="8" fill="#D1FAE5" stroke="#141836" stroke-width="2"/><path d="M 42 42 H 32 A 5 5 0 0 1 27 37 V 30 A 5 5 0 0 1 37 30 V 35 H 42" fill="#D1FAE5" stroke="#141836" stroke-width="2"/><path d="M 58 38 H 68 A 5 5 0 0 0 73 33 V 26 A 5 5 0 0 0 63 26 V 31 H 58" fill="#D1FAE5" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add tiny vertical rib lines + pink blossom dot.', svg: '<line x1="50" y1="26" x2="50" y2="50" stroke="#047857" stroke-width="1.3" stroke-dasharray="3 2"/><circle cx="50" cy="19" r="4" fill="#EC4899" stroke="#141836" stroke-width="1.4"/>' },
      { txt: 'Add Cool Grey right-side pot shadow & AO seam.', svg: '<polygon points="56,61 67,61 62,84 54,84" fill="#94A3B8" fill-opacity="0.45"/><line x1="34" y1="86" x2="74" y2="86" stroke="#141836" stroke-width="3.5" stroke-linecap="round"/>' }
    ]
  },

  // TECH, AI & CYBERPUNK (7–12)
  {
    id: 'bot', cat: 'tech', name: '7. Friendly AI Copilot Bot', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw rounded square CRT head + side ear bolts.', svg: '<rect x="24" y="30" width="52" height="44" rx="10" fill="#FFF" stroke="#141836" stroke-width="2.4"/><rect x="17" y="46" width="7" height="12" rx="2" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/><rect x="76" y="46" width="7" height="12" rx="2" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Add dark visor face screen & top antenna stem.', svg: '<rect x="32" y="40" width="36" height="22" rx="5" fill="#141836"/><line x1="50" y1="30" x2="50" y2="17" stroke="#141836" stroke-width="2.4"/><circle cx="50" cy="14" r="4.5" fill="#EC4899" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Drop twin glowing Cyan eyes + tiny smile arc.', svg: '<circle cx="42" cy="50" r="3.8" fill="#00D4FF"/><circle cx="58" cy="50" r="3.8" fill="#00D4FF"/><path d="M 45 57 Q 50 61 55 57" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Add subtle Cyan cheek wash + floating shadow oval.', svg: '<rect x="25" y="31" width="50" height="42" rx="9" fill="#0EA5E9" fill-opacity="0.12"/><ellipse cx="50" cy="84" rx="22" ry="4" fill="#94A3B8" fill-opacity="0.45"/>' }
    ]
  },
  {
    id: 'rocket', cat: 'tech', name: '8. Launch Rocket ("Ship It!")', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw pointed bullet fuselage silhouette.', svg: '<path d="M 50 12 C 66 26 66 56 60 70 H 40 C 34 56 34 26 50 12 Z" fill="#FFF" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Attach twin swept triangular tail fins.', svg: '<polygon points="36,54 22,72 39,68" fill="#0EA5E9" fill-opacity="0.32" stroke="#141836" stroke-width="2"/><polygon points="64,54 78,72 61,68" fill="#0EA5E9" fill-opacity="0.32" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add nose-cone stripe & circular porthole.', svg: '<path d="M 41 26 H 59" stroke="#EC4899" stroke-width="2.2"/><circle cx="50" cy="42" r="7" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Ignite layered Amber + Magenta exhaust flame!', svg: '<polygon points="42,72 58,72 50,92" fill="#F59E0B" fill-opacity="0.6" stroke="#B45309" stroke-width="1.6"/><polygon points="46,72 54,72 50,83" fill="#EC4899" fill-opacity="0.65"/>' }
    ]
  },
  {
    id: 'server', cat: 'tech', name: '9. Mini Isometric Server Tower', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw 2-over-1-up top diamond + 3 vertical drops.', svg: '<polygon points="50,14 76,27 50,40 24,27" fill="#FFF" stroke="#141836" stroke-width="2"/><path d="M 24 27 V 72 L 50 85 L 76 72 V 27 M 50 40 V 85" fill="none" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Divide front-left face into 3 server rack bays.', svg: '<path d="M 24 43 L 50 56 M 24 58 L 50 71" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Add 3 glowing status LEDs (Mint, Cyan, Magenta).', svg: '<circle cx="31" cy="39" r="2.4" fill="#10B981"/><circle cx="31" cy="54" r="2.4" fill="#0EA5E9"/><circle cx="31" cy="69" r="2.4" fill="#EC4899"/>' },
      { txt: 'Glaze right wall 2x Grey + bold 05 AO base crease.', svg: '<polygon points="76,27 50,40 50,85 76,72" fill="#64748B" fill-opacity="0.72"/><polygon points="24,27 50,40 50,85 24,72" fill="#E2E8F0" fill-opacity="0.55"/><polyline points="24,73 50,86 76,73" fill="none" stroke="#141836" stroke-width="4" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'chip', cat: 'tech', name: '10. AI Silicon Microchip', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw crisp rounded square IC package.', svg: '<rect x="26" y="26" width="48" height="48" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Add 3 parallel contact pins protruding on all 4 sides.', svg: '<path d="M 38 15 V 26 M 50 15 V 26 M 62 15 V 26 M 38 74 V 85 M 50 74 V 85 M 62 74 V 85 M 15 38 H 26 M 15 50 H 26 M 15 62 H 26 M 74 38 H 85 M 74 50 H 85 M 74 62 H 85" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Nest an inner glowing Cyan core square.', svg: '<rect x="37" y="37" width="26" height="26" rx="4" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>' },
      { txt: 'Label "AI" center + Cool Grey offset shadow.', svg: '<text x="50" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0369A1">AI</text>' }
    ]
  },
  {
    id: 'satellite', cat: 'tech', name: '11. Orbital Telemetry Satellite', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw small rotated central satellite body.', svg: '<rect x="40" y="40" width="20" height="20" rx="3" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Extend twin angled solar-panel wings left & right.', svg: '<polygon points="10,24 38,44 38,58 10,38" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><polygon points="62,44 90,64 90,78 62,58" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Grid the solar cells + add top signal dish.', svg: '<line x1="24" y1="34" x2="24" y2="48" stroke="#0EA5E9" stroke-width="1.4"/><line x1="76" y1="54" x2="76" y2="68" stroke="#0EA5E9" stroke-width="1.4"/><path d="M 42 32 A 10 10 0 0 1 58 32" fill="none" stroke="#141836" stroke-width="2.2"/><line x1="50" y1="32" x2="50" y2="40" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Emit 2 curved Magenta telemetry waves!', svg: '<path d="M 42 20 A 14 14 0 0 1 58 20 M 36 13 A 22 22 0 0 1 64 13" fill="none" stroke="#EC4899" stroke-width="2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'shield', cat: 'tech', name: '12. Zero-Trust Governance Shield', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw top flat/curved brow & tapered pointed crest.', svg: '<path d="M 50 14 L 80 24 V 50 C 80 68 66 80 50 88 C 34 80 20 68 20 50 V 24 Z" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Draw parallel inner shield rim.', svg: '<path d="M 50 21 L 73 29 V 50 C 73 64 62 74 50 81 C 38 74 27 64 27 50 V 29 Z" fill="#D1FAE5" fill-opacity="0.45" stroke="#047857" stroke-width="1.5"/>' },
      { txt: 'Pull bold Acid Mint checkmark dead-center.', svg: '<polyline points="38,50 47,59 64,41" fill="none" stroke="#047857" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' },
      { txt: 'Shade right vertical half slightly darker for 3D crease.', svg: '<path d="M 50 14 L 80 24 V 50 C 80 68 66 80 50 88 Z" fill="#141836" fill-opacity="0.08"/>' }
    ]
  },

  // TAX, FINANCE & STRATEGY (13–18)
  {
    id: 'nib', cat: 'tax', name: '13. Classic Fountain Pen Nib', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw diamond-like tapered steel nib silhouette.', svg: '<polygon points="50,12 68,52 60,72 40,72 32,52" fill="#FFF" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Add rectangular collar ring at base.', svg: '<rect x="36" y="72" width="28" height="12" rx="2" fill="#141836"/>' },
      { txt: 'Draw center breather hole & vertical ink slit.', svg: '<line x1="50" y1="12" x2="50" y2="48" stroke="#141836" stroke-width="1.8"/><circle cx="50" cy="50" r="4.5" fill="#0EA5E9" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Shade right facet Cool Grey + Cyan ink drop at tip.', svg: '<polygon points="50,12 68,52 60,72 50,72" fill="#94A3B8" fill-opacity="0.38"/><circle cx="50" cy="6" r="3" fill="#0EA5E9"/>' }
    ]
  },
  {
    id: 'scale', cat: 'tax', name: '14. Tax Justice Balance Scale', ratio: '5×5 dots',
    steps: [
      { txt: 'Draw vertical central pillar & sturdy triangular base.', svg: '<line x1="50" y1="22" x2="50" y2="80" stroke="#141836" stroke-width="2.6"/><polygon points="32,84 68,84 50,74" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Balance horizontal crossbar across the top pivot.', svg: '<line x1="18" y1="28" x2="82" y2="28" stroke="#141836" stroke-width="2.8" stroke-linecap="round"/><circle cx="50" cy="28" r="4" fill="#F59E0B" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Hang two V-strings + curved scale pans left & right.', svg: '<polyline points="20,28 12,56 28,56 20,28" fill="none" stroke="#141836" stroke-width="1.4"/><path d="M 10 56 A 12 8 0 0 0 30 56 Z" fill="#E0F2FE" stroke="#141836" stroke-width="1.8"/><polyline points="80,28 72,56 88,56 80,28" fill="none" stroke="#141836" stroke-width="1.4"/><path d="M 70 56 A 12 8 0 0 0 90 56 Z" fill="#FCE7F3" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Add tiny § and € badges hovering over each pan.', svg: '<text x="20" y="51" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">§</text><text x="80" y="51" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">€</text>' }
    ]
  },
  {
    id: 'coins', cat: 'tax', name: '15. Stacked Euro Coins', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw bottom short cylinder (ellipse + vertical rim).', svg: '<path d="M 24 62 V 74 A 24 8 0 0 0 72 74 V 62" fill="#FEF3C7" stroke="#141836" stroke-width="2"/><ellipse cx="48" cy="62" rx="24" ry="8" fill="#FFFDF5" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Stack 2nd cylinder slightly offset right.', svg: '<path d="M 28 46 V 58 A 24 8 0 0 0 76 58 V 46" fill="#FEF3C7" stroke="#141836" stroke-width="2"/><ellipse cx="52" cy="46" rx="24" ry="8" fill="#FFFDF5" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Stack 3rd coin on top + emboss € symbol.', svg: '<path d="M 24 30 V 42 A 24 8 0 0 0 72 42 V 30" fill="#FDE68A" stroke="#141836" stroke-width="2"/><ellipse cx="48" cy="30" rx="24" ry="8" fill="#FFFDF5" stroke="#141836" stroke-width="2"/><text x="48" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#B45309">€</text>' },
      { txt: 'Add milled vertical rim ticks & AO ground line.', svg: '<path d="M 38 38 V 44 M 48 39 V 45 M 58 38 V 44" stroke="#B45309" stroke-width="1.3"/><ellipse cx="52" cy="80" rx="26" ry="5" fill="#94A3B8" fill-opacity="0.4"/>' }
    ]
  },
  {
    id: 'briefcase', cat: 'tax', name: '16. Tax Advisory Briefcase', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw horizontal rounded body + top handle arch.', svg: '<path d="M 38 32 V 23 C 38 19 62 19 62 23 V 32" fill="none" stroke="#141836" stroke-width="3"/><rect x="16" y="32" width="68" height="48" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Draw gently curved flap seam across upper third.', svg: '<path d="M 16 48 Q 50 56 84 48" fill="none" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Snap twin brass clasp buckles along the seam.', svg: '<rect x="30" y="46" width="8" height="10" rx="2" fill="#F59E0B" stroke="#141836" stroke-width="1.6"/><rect x="62" y="46" width="8" height="10" rx="2" fill="#F59E0B" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Add Cool Grey lower body tint + 05 base crease.', svg: '<path d="M 17 50 Q 50 57 83 50 V 76 A 4 4 0 0 1 79 79 H 21 A 4 4 0 0 1 17 76 Z" fill="#94A3B8" fill-opacity="0.28"/><line x1="18" y1="82" x2="82" y2="82" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'trophy', cat: 'tax', name: '17. Milestone Victory Trophy', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw deep U-shaped cup body with flat rim.', svg: '<path d="M 28 20 H 72 V 44 C 72 60 28 60 28 44 Z" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Attach twin curved ear handles left & right.', svg: '<path d="M 28 26 C 14 26 14 48 28 48 M 72 26 C 86 26 86 48 72 48" fill="none" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Add narrow stem + stepped rectangular pedestal.', svg: '<rect x="46" y="58" width="8" height="14" fill="#F59E0B" stroke="#141836" stroke-width="1.8"/><rect x="32" y="72" width="36" height="12" rx="2" fill="#141836"/>' },
      { txt: 'Stamp Mint star center + white highlight curve.', svg: '<text x="50" y="45" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700" fill="#B45309">★</text><line x1="34" y1="26" x2="34" y2="42" stroke="#FFF" stroke-width="2.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'compass', cat: 'tax', name: '18. Strategic North Compass', ratio: '4×4 dots',
    steps: [
      { txt: 'Trace crisp outer circle + tiny inner ring.', svg: '<circle cx="50" cy="50" r="34" fill="#FFF" stroke="#141836" stroke-width="2.4"/><circle cx="50" cy="50" r="28" fill="none" stroke="#CBD5E1" stroke-width="1.4" stroke-dasharray="3 2"/>' },
      { txt: 'Draw elongated 4-point diamond star (N/E/S/W).', svg: '<polygon points="50,18 57,43 82,50 57,57 50,82 43,57 18,50 43,43" fill="#FFF" stroke="#141836" stroke-width="1.8" stroke-linejoin="round"/>' },
      { txt: 'Fill North tip Magenta & alternating halves Cyan.', svg: '<polygon points="50,18 57,43 50,50" fill="#EC4899" fill-opacity="0.72"/><polygon points="50,82 43,57 50,50" fill="#0EA5E9" fill-opacity="0.6"/><polygon points="82,50 57,57 50,50" fill="#0EA5E9" fill-opacity="0.6"/>' },
      { txt: 'Add tiny "N" badge at 12 o\'clock.', svg: '<text x="50" y="13" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">N</text>' }
    ]
  },

  // DEUTSCH, TRAVEL & METAPHORS (19–24)
  {
    id: 'brezel', cat: 'deutsch', name: '19. German Brezel (Café / Kultur)', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw wide plump heart-like outer pretzel loop.', svg: '<path d="M 50 76 C 14 76 12 22 50 22 C 88 22 86 76 50 76 Z" fill="none" stroke="#B45309" stroke-width="9" stroke-linecap="round"/>' },
      { txt: 'Cross twin diagonal dough arms through center.', svg: '<path d="M 32 72 Q 50 48 68 32 M 68 72 Q 50 48 32 32" fill="none" stroke="#D97706" stroke-width="7.5" stroke-linecap="round"/>' },
      { txt: 'Trace crisp dark Indigo outline along outer curve.', svg: '<path d="M 50 76 C 14 76 12 22 50 22 C 88 22 86 76 50 76 Z" fill="none" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Sprinkle 5 white gel-pen coarse salt crystals!', svg: '<g fill="#FFFFFF" stroke="#141836" stroke-width="0.6"><rect x="34" y="24" width="4" height="4" rx="1"/><rect x="54" y="21" width="4" height="4" rx="1"/><rect x="68" y="34" width="4" height="4" rx="1"/><rect x="24" y="48" width="4" height="4" rx="1"/><rect x="48" y="54" width="4" height="4" rx="1"/></g>' }
    ]
  },
  {
    id: 'gate', cat: 'deutsch', name: '20. Brandenburg Gate (Berlin / DE)', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw stepped horizontal attic beam & flat base.', svg: '<rect x="14" y="30" width="72" height="11" rx="1" fill="#FFFDF5" stroke="#141836" stroke-width="2"/><rect x="28" y="20" width="44" height="10" rx="1" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/><line x1="10" y1="80" x2="90" y2="80" stroke="#141836" stroke-width="3"/>' },
      { txt: 'Drop 4 sturdy vertical Doric columns straight down.', svg: '<rect x="20" y="41" width="8" height="39" fill="#FFF" stroke="#141836" stroke-width="1.8"/><rect x="38" y="41" width="8" height="39" fill="#FFF" stroke="#141836" stroke-width="1.8"/><rect x="54" y="41" width="8" height="39" fill="#FFF" stroke="#141836" stroke-width="1.8"/><rect x="72" y="41" width="8" height="39" fill="#FFF" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Add tiny Quadriga silhouette crest on top center.', svg: '<path d="M 42 20 L 46 11 H 54 L 58 20 Z" fill="#141836"/>' },
      { txt: 'Wash subtle Cyan sky behind + Cool Grey column shadows.', svg: '<rect x="28" y="42" width="10" height="37" fill="#0EA5E9" fill-opacity="0.16"/><rect x="46" y="42" width="8" height="37" fill="#0EA5E9" fill-opacity="0.16"/><rect x="62" y="42" width="10" height="37" fill="#0EA5E9" fill-opacity="0.16"/>' }
    ]
  },
  {
    id: 'ice', cat: 'deutsch', name: '21. German ICE Express Train', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw sleek bullet-nosed train body resting on track.', svg: '<path d="M 14 70 V 34 C 14 26 48 24 68 38 L 86 58 C 88 64 84 70 76 70 Z" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/><line x1="10" y1="74" x2="92" y2="74" stroke="#141836" stroke-width="2.8"/>' },
      { txt: 'Add slanted dark cockpit windshield + side windows.', svg: '<polygon points="56,36 74,48 64,52 50,42" fill="#141836"/><rect x="22" y="38" width="22" height="12" rx="2" fill="#E0F2FE" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Pull the iconic bright Magenta/Red ICE speed stripe!', svg: '<path d="M 15 58 H 84" stroke="#EC4899" stroke-width="4.5"/>' },
      { txt: 'Flick 2 horizontal Cyan speed lines behind tail.', svg: '<path d="M 6 40 H 12 M 4 50 H 11" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'balloon', cat: 'deutsch', name: '22. Hot Air Balloon (Big Picture)', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw classic teardrop/lightbulb canopy outline.', svg: '<path d="M 50 12 C 74 12 80 42 60 62 H 40 C 20 42 26 12 50 12 Z" fill="#FFF" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Hang tiny square wicker basket underneath on 2 ropes.', svg: '<line x1="43" y1="62" x2="44" y2="72" stroke="#141836" stroke-width="1.6"/><line x1="57" y1="62" x2="56" y2="72" stroke="#141836" stroke-width="1.6"/><rect x="42" y="72" width="16" height="12" rx="2" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Curve two vertical rib meridians from top to neck.', svg: '<path d="M 50 12 C 36 26 38 48 45 62 M 50 12 C 64 26 62 48 55 62" fill="none" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Color alternating panels Cyan & Hot Magenta!', svg: '<path d="M 50 12 C 36 26 38 48 45 62 H 55 C 62 48 64 26 50 12 Z" fill="#EC4899" fill-opacity="0.32"/><path d="M 50 12 C 26 12 20 42 40 62 H 45 C 38 48 36 26 50 12 Z" fill="#0EA5E9" fill-opacity="0.28"/>' }
    ]
  },
  {
    id: 'sailboat', cat: 'deutsch', name: '23. Navigation Sailboat', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw inverted trapezoid hull + vertical mast.', svg: '<polygon points="18,64 82,64 72,80 28,80" fill="#EEF2FC" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/><line x1="50" y1="16" x2="50" y2="64" stroke="#141836" stroke-width="2.6"/>' },
      { txt: 'Add large curved mainsail right & jib triangle left.', svg: '<path d="M 52 18 Q 78 38 76 58 H 52 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><polygon points="48,26 24,58 48,58" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add tiny Magenta pennant flag fluttering at masthead.', svg: '<polygon points="50,16 38,12 50,9" fill="#EC4899" stroke="#141836" stroke-width="1.2"/>' },
      { txt: 'Sweep wavy Cyan water line across hull bottom.', svg: '<path d="M 10 82 Q 22 76 34 82 T 58 82 T 82 82 T 94 82" fill="none" stroke="#0EA5E9" stroke-width="2.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'campfire', cat: 'deutsch', name: '24. Brainstorm Spark / Campfire', ratio: '4×5 dots',
    steps: [
      { txt: 'Cross two simple rounded log cylinders at base.', svg: '<rect x="20" y="68" width="60" height="10" rx="4" transform="rotate(14 50 73)" fill="#CBD5E1" stroke="#141836" stroke-width="2"/><rect x="20" y="68" width="60" height="10" rx="4" transform="rotate(-14 50 73)" fill="#E2E8F0" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Sweep fluid teardrop outer flame rising from logs.', svg: '<path d="M 50 14 C 72 34 74 62 50 68 C 26 62 28 34 50 14 Z" fill="#F59E0B" fill-opacity="0.45" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Nest bright Magenta/Yellow inner flame core.', svg: '<path d="M 50 36 C 60 46 60 62 50 66 C 40 62 40 46 50 36 Z" fill="#EC4899" fill-opacity="0.48" stroke="#BE185D" stroke-width="1.4"/>' },
      { txt: 'Flick 3 tiny rising ember spark dots above!', svg: '<circle cx="38" cy="18" r="2.6" fill="#F59E0B"/><circle cx="64" cy="22" r="2.2" fill="#EC4899"/><circle cx="52" cy="8" r="2" fill="#0EA5E9"/>' }
    ]
  }
];

export const DRAW_LESSONS = [
  ...BASE_DRAW_LESSONS,
  ...DRAW_LESSONS_EXTRA,
  ...DRAW_200_A,
  ...DRAW_200_B,
  ...DRAW_200_C,
  ...DRAW_200_D
];

export function renderDrawSchoolHTML() {
  return `
    <div class="lab cyan-accent" id="draw-school-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive 200-Illustration School // 200 Step-by-Step Mini-Drawings (10 Categories × 20)</span>
        <span id="ds-count-pill" class="pill violet">200 Lessons</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl no-print" style="flex-wrap:wrap;">
          <input id="ds-search" class="search-in" type="text" placeholder="Search 200 drawings (e.g. iso, owl, gavel, ribbon, kanban, iceberg)..." style="flex:1; min-width:220px;" />
          <div class="segmented" role="group" style="flex-wrap:wrap;">
            <button class="seg-btn ds-cat active" data-c="all">All (200)</button>
            <button class="seg-btn ds-cat" data-c="fav">★ Favorites</button>
            <button class="seg-btn ds-cat" data-c="desk">Workspace (20)</button>
            <button class="seg-btn ds-cat" data-c="tech">AI &amp; Tech (20)</button>
            <button class="seg-btn ds-cat" data-c="tax">Tax &amp; Law (20)</button>
            <button class="seg-btn ds-cat" data-c="deutsch">Deutsch &amp; Travel (20)</button>
            <button class="seg-btn ds-cat" data-c="nature">Nature &amp; Cosmos (20)</button>
            <button class="seg-btn ds-cat" data-c="doodles">Mascots (20)</button>
            <button class="seg-btn ds-cat" data-c="iso">Isometric 3D (20)</button>
            <button class="seg-btn ds-cat" data-c="product">Product &amp; UX (20)</button>
            <button class="seg-btn ds-cat" data-c="graphics">Banners &amp; Frames (20)</button>
            <button class="seg-btn ds-cat" data-c="metaphors">Metaphors (20)</button>
          </div>
        </div>
        <!-- 4-STEP VISUAL BREAKDOWN STRIP -->
        <div class="card tinted" style="border-color:var(--cyan);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <div>
              <span id="ds-active-title" class="card-h" style="font-size:18px;"></span>
              <span id="ds-active-ratio" class="pill violet" style="margin-left:8px;"></span>
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:7px;" class="no-print">
              <button id="ds-fav-btn" class="btn secondary">☆ Favorite</button>
              <button id="ds-rand-btn" class="btn amber">🎲 Surprise Me</button>
              <button id="ds-play-btn" class="btn mint">▶ Animate 4-Step Build</button>
            </div>
          </div>
          <div id="ds-4strip" class="grid-4"></div>
        </div>

        <!-- LIVE GHOST TRACE-ALONG DOT-GRID CANVAS -->
        <div class="card" style="border-color:var(--ink);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <span class="mono" style="font-size:11px; font-weight:700; color:var(--cyan); text-transform:uppercase;">Practice Right Here // Live Trace-Along Dot-Grid Pad</span>
            <div style="display:flex; flex-wrap:wrap; align-items:center; gap:7px;" class="no-print">
              <div class="segmented" role="group">
                <button class="seg-btn ds-pen active" data-p="ink">05 Ink</button>
                <button class="seg-btn ds-pen" data-p="cyan">Cyan Glaze</button>
                <button class="seg-btn ds-pen" data-p="mag">Magenta Glaze</button>
                <button class="seg-btn ds-pen" data-p="mint">Mint Glaze</button>
                <button class="seg-btn ds-pen" data-p="grey">Grey Shadow</button>
              </div>
              <label class="chk-lbl"><input id="ds-ghost-chk" type="checkbox" checked /> Ghost Trace</label>
              <button id="ds-undo" class="btn secondary">↶ Undo</button>
              <button id="ds-clear" class="btn secondary">✕ Clear</button>
              <button id="ds-save-png" class="btn mint">↓ Save PNG</button>
            </div>
          </div>
          <div class="sketchpad-wrap" style="position:relative; height:240px;">
            <svg id="ds-ghost-svg" viewBox="0 0 100 94" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none; opacity:0.22;"></svg>
            <canvas id="ds-canvas" class="sketchpad-canvas" style="position:relative; z-index:2; height:240px; background:transparent;"></canvas>
          </div>
        </div>

        <!-- SELECTOR GRID OF ALL 48 MINI-ILLUSTRATIONS -->
        <div id="ds-grid" class="grid-4"></div>

        <!-- 3-OBJECT MINI-SCENE DOODLE CHALLENGE -->
        <div class="card tinted" style="border-color:var(--magenta);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <div>
              <span class="mono" style="font-size:10.5px; font-weight:700; color:var(--magenta); text-transform:uppercase;">Creative Warmup // Combine 3 Little Drawings Into One Margin Story</span>
              <div class="card-h" style="font-size:17px;">🎲 3-Object Mini-Scene Sketch Challenge</div>
            </div>
            <button id="ds-combo-btn" class="btn magenta no-print">🎲 Roll New 3-Object Scene</button>
          </div>
          <div id="ds-combo-cards" class="grid-3"></div>
          <p id="ds-combo-prompt" class="card-p" style="font-size:14.2px; color:var(--ink-body);"></p>
        </div>
      </div>
    </div>
  `;
}

export function initDrawSchool() {
  const lab = document.getElementById('draw-school-lab');
  if (!lab) return;

  let cat = 'all';
  let active = DRAW_LESSONS[0];
  let animTimer = null;

  // Lightweight trace canvas
  const canvas = document.getElementById('ds-canvas');
  const ctx = canvas.getContext('2d');
  let pen = 'ink';
  let strokes = [];
  let cur = null;

  const drawGridOnly = (w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#CBD5E1';
    for (let y = 20; y < h; y += 20) {
      for (let x = 20; x < w; x += 20) {
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };

  const redrawCanvas = () => {
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(260, Math.floor(rect.width)), h = 240;
    drawGridOnly(w, h);
    const all = cur ? [...strokes, cur] : strokes;
    all.forEach(st => {
      if (!st.pts.length) return;
      ctx.save();
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      if (st.pen === 'ink') { ctx.strokeStyle = '#141836'; ctx.lineWidth = 2.6; ctx.globalAlpha = 1; }
      else {
        const cols = { cyan: '#0EA5E9', mag: '#EC4899', mint: '#10B981', grey: '#94A3B8' };
        ctx.strokeStyle = cols[st.pen]; ctx.lineWidth = 14; ctx.globalAlpha = 0.28; ctx.globalCompositeOperation = 'multiply';
      }
      ctx.beginPath(); ctx.moveTo(st.pts[0].x, st.pts[0].y);
      for (let i = 1; i < st.pts.length; i++) ctx.lineTo(st.pts[i].x, st.pts[i].y);
      ctx.stroke();
      ctx.restore();
    });
  };

  const sizeCanvas = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(260, Math.floor(rect.width)) * dpr;
    canvas.height = 240 * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    redrawCanvas();
  };

  const getPt = (e) => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  canvas.addEventListener('pointerdown', (e) => { canvas.setPointerCapture(e.pointerId); cur = { pen, pts: [getPt(e)] }; redrawCanvas(); });
  canvas.addEventListener('pointermove', (e) => { if (!cur) return; cur.pts.push(getPt(e)); redrawCanvas(); });
  const endDraw = () => { if (!cur) return; strokes.push(cur); cur = null; redrawCanvas(); };
  canvas.addEventListener('pointerup', endDraw);
  canvas.addEventListener('pointercancel', endDraw);

  lab.querySelectorAll('.ds-pen').forEach(b => b.addEventListener('click', () => {
    pen = b.dataset.p;
    lab.querySelectorAll('.ds-pen').forEach(x => x.classList.toggle('active', x === b));
  }));
  document.getElementById('ds-undo').addEventListener('click', () => { strokes.pop(); redrawCanvas(); });
  document.getElementById('ds-clear').addEventListener('click', () => { strokes = []; redrawCanvas(); });
  document.getElementById('ds-save-png')?.addEventListener('click', () => {
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `looking-sketchy-${active.id}.png`;
    a.click();
    window.__showToast?.('✓ Sketch saved as PNG!');
  });
  document.getElementById('ds-ghost-chk').addEventListener('change', (e) => {
    document.getElementById('ds-ghost-svg').style.opacity = e.target.checked ? '0.22' : '0';
  });

  const syncFavBtn = () => {
    const btn = document.getElementById('ds-fav-btn');
    if (!btn) return;
    const f = isFavorite(`draw:${active.id}`);
    btn.textContent = f ? '★ Saved' : '☆ Favorite';
    btn.className = f ? 'btn amber' : 'btn secondary';
  };
  document.getElementById('ds-fav-btn')?.addEventListener('click', () => {
    const f = toggleFavorite(`draw:${active.id}`);
    syncFavBtn();
    renderGrid();
    window.__showToast?.(f ? '★ Added to your Swipe File' : 'Removed from Favorites');
  });

  const renderLesson = (highlightStep = 3) => {
    document.getElementById('ds-active-title').textContent = active.name;
    document.getElementById('ds-active-ratio').textContent = `SIZE: ${active.ratio}`;
    syncFavBtn();
    const strip = document.getElementById('ds-4strip');
    strip.innerHTML = active.steps.map((st, idx) => {
      const cumSvg = active.steps.slice(0, idx + 1).map(x => x.svg).join('');
      const hi = idx === highlightStep;
      return `
        <div class="card" style="padding:11px; ${hi ? 'border-color:var(--cyan); box-shadow:3px 3px 0 var(--cyan);' : ''}">
          <span class="mono" style="font-size:10px; font-weight:700; color:var(--cyan);">STEP 0${idx + 1}</span>
          <div class="svg-box"><svg viewBox="0 0 100 94">${cumSvg}</svg></div>
          <p class="card-p" style="font-size:12.5px;">${st.txt}</p>
        </div>`;
    }).join('');
    // Update Ghost Trace overlay
    document.getElementById('ds-ghost-svg').innerHTML = active.steps.map(x => x.svg).join('');
  };

  const playAnimation = () => {
    if (animTimer) { clearInterval(animTimer); animTimer = null; }
    let s = 0;
    renderLesson(0);
    animTimer = setInterval(() => {
      s++;
      if (s >= 4) { clearInterval(animTimer); animTimer = null; return; }
      renderLesson(s);
    }, 700);
  };

  document.getElementById('ds-play-btn').addEventListener('click', playAnimation);

  const selectLesson = (lessonObj, { animate = false, scroll = false } = {}) => {
    active = lessonObj;
    strokes = [];
    redrawCanvas();
    if (animate) playAnimation();
    else renderLesson(3);
    renderGrid();
    if (scroll) lab.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  document.getElementById('ds-rand-btn')?.addEventListener('click', () => {
    const pool = DRAW_LESSONS.filter(x => x.id !== active.id);
    const pick = pool[Math.floor(Math.random() * pool.length)] || DRAW_LESSONS[0];
    selectLesson(pick, { animate: true, scroll: false });
  });

  // 3-Object Mini-Scene Challenge
  const SCENE_TEMPLATES = [
    (a, b, c) => `Draw a 1-inch ground line in your notebook margin: place the ${a} in the foreground, tuck the ${b} slightly behind it (overlapping for instant depth!), and float the ${c} above with a dashed motion trail.`,
    (a, b, c) => `Tell a 3-beat visual story left-to-right: Start with the ${a} → draw a crisp Cyan arrow to the ${b} → end on the ${c} inside a Mint highlight halo.`,
    (a, b, c) => `Sketch a miniature bento card: use the ${a} as your header mascot, frame a 1-line note beside the ${b}, and stamp the ${c} in the bottom-right corner as your completion badge!`
  ];
  const rollCombo = () => {
    const shuffled = [...DRAW_LESSONS].sort(() => Math.random() - 0.5).slice(0, 3);
    const clean = s => s.name.replace(/^\d+\.\s*/, '');
    document.getElementById('ds-combo-cards').innerHTML = shuffled.map((ic, idx) => `
      <button class="icon-card ds-combo-pick" data-id="${ic.id}" style="background:#FFF;">
        <svg viewBox="0 0 100 94">${ic.steps.map(x => x.svg).join('')}</svg>
        <div style="text-align:left;">
          <div class="mono" style="font-size:9.5px; font-weight:700; color:var(--magenta);">OBJECT 0${idx + 1}</div>
          <div style="font-weight:700; font-size:13px;">${clean(ic)}</div>
          <div class="card-p" style="font-size:11px;">Click to learn 4 steps →</div>
        </div>
      </button>`).join('');
    const tmpl = SCENE_TEMPLATES[Math.floor(Math.random() * SCENE_TEMPLATES.length)];
    document.getElementById('ds-combo-prompt').innerHTML = `<strong>Mini-Scene Brief:</strong> ${tmpl(clean(shuffled[0]), clean(shuffled[1]), clean(shuffled[2]))}`;
    document.querySelectorAll('.ds-combo-pick').forEach(btn => btn.addEventListener('click', () => {
      const found = DRAW_LESSONS.find(x => x.id === btn.dataset.id);
      if (found) selectLesson(found, { animate: true, scroll: true });
    }));
  };
  document.getElementById('ds-combo-btn')?.addEventListener('click', rollCombo);

  const renderGrid = () => {
    const q = (document.getElementById('ds-search')?.value || '').toLowerCase().trim();
    const list = DRAW_LESSONS.filter(x => {
      const catOk = cat === 'all' || (cat === 'fav' ? isFavorite(`draw:${x.id}`) : x.cat === cat);
      const qOk = !q || x.name.toLowerCase().includes(q) || x.cat.toLowerCase().includes(q) || x.steps.some(s => s.txt.toLowerCase().includes(q));
      return catOk && qOk;
    });
    const cntPill = document.getElementById('ds-count-pill');
    if (cntPill) cntPill.textContent = `${list.length} / ${DRAW_LESSONS.length} Shown`;
    document.getElementById('ds-grid').innerHTML = list.length ? list.map(ic => `
      <button class="icon-card ds-item ${ic.id === active.id ? 'active' : ''}" data-id="${ic.id}">
        <svg viewBox="0 0 100 94">${ic.steps.map(x => x.svg).join('')}</svg>
        <div style="text-align:left;">
          <div style="font-weight:700; font-size:12.6px;">${isFavorite(`draw:${ic.id}`) ? '★ ' : ''}${ic.name}</div>
          <div class="card-p" style="font-size:11px;">4 Steps • ${ic.ratio}</div>
        </div>
      </button>`).join('') : `<div class="mono" style="grid-column:1/-1; padding:20px; text-align:center; color:var(--ink-muted);">${cat === 'fav' ? 'No favorites yet — open any drawing above and click ☆ Favorite to build your personal swipe file.' : 'No matching drawings found — try "iso", "owl", "ribbon", or "kanban".'}</div>`;

    lab.querySelectorAll('.ds-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const found = DRAW_LESSONS.find(x => x.id === btn.dataset.id);
        if (!found) return;
        selectLesson(found, { animate: false, scroll: true });
      });
    });
  };

  document.getElementById('ds-search')?.addEventListener('input', renderGrid);
  lab.querySelectorAll('.ds-cat').forEach(b => b.addEventListener('click', () => {
    cat = b.dataset.c;
    lab.querySelectorAll('.ds-cat').forEach(x => x.classList.toggle('active', x === b));
    renderGrid();
  }));

  sizeCanvas();
  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => {
      if (!document.body.contains(canvas)) { ro.disconnect(); return; }
      sizeCanvas();
    });
    ro.observe(canvas.parentElement);
  }
  renderLesson(3);
  renderGrid();
  rollCombo();
}
