/* =========================================================================
   DRAW SCHOOL 200 EXPANSION — PACK C (40 LESSONS: 20 ISOMETRIC + 20 PRODUCT)
   ========================================================================= */

function isoBox(cx, topY, rx, ry, h, topCol = '#FFF', leftCol = '#EEF2FC', rightCol = '#CBD5E1') {
  return {
    top: `<polygon points="${cx},${topY} ${cx+rx},${topY+ry} ${cx},${topY+ry*2} ${cx-rx},${topY+ry}" fill="${topCol}" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>`,
    sides: `<polygon points="${cx-rx},${topY+ry} ${cx},${topY+ry*2} ${cx},${topY+ry*2+h} ${cx-rx},${topY+ry+h}" fill="${leftCol}" stroke="#141836" stroke-width="2" stroke-linejoin="round"/><polygon points="${cx+rx},${topY+ry} ${cx},${topY+ry*2} ${cx},${topY+ry*2+h} ${cx+rx},${topY+ry+h}" fill="${rightCol}" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>`,
    ao: `<polyline points="${cx-rx},${topY+ry+h+1} ${cx},${topY+ry*2+h+1} ${cx+rx},${topY+ry+h+1}" fill="none" stroke="#141836" stroke-width="3.4" stroke-linecap="round"/>`
  };
}

export const DRAW_200_C = [
  // 20 ISOMETRIC 3D MINI-OBJECTS (121–140)
  {
    id: 'iso-cube', cat: 'iso', name: '121. Iso Starter Cube', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw 2-over-1-up diamond roof centered on dots.', svg: isoBox(50, 14, 30, 15, 34, '#E0F2FE').top },
      { txt: 'Drop 3 equal vertical walls straight down.', svg: '<path d="M 20 29 V 63 L 50 78 L 80 63 V 29 M 50 44 V 78" fill="none" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Glaze Left 1× Cool Grey & Right 2× Cool Grey.', svg: isoBox(50, 14, 30, 15, 34, '#E0F2FE', '#E2E8F0', '#94A3B8').sides },
      { txt: 'Weight bottom contact V-crease with bold 05 ink!', svg: isoBox(50, 14, 30, 15, 34).ao }
    ]
  },
  {
    id: 'iso-stack', cat: 'iso', name: '122. Iso Exploded 3-Layer Stack', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw bottom Mint base tile.', svg: isoBox(50, 52, 28, 12, 8, '#D1FAE5', '#A7F3D0', '#10B981').top + isoBox(50, 52, 28, 12, 8, '#D1FAE5', '#A7F3D0', '#10B981').sides },
      { txt: 'Float middle Magenta slab 2 dots higher.', svg: isoBox(50, 32, 28, 12, 8, '#FCE7F3', '#FBCFE8', '#EC4899').top + isoBox(50, 32, 28, 12, 8, '#FCE7F3', '#FBCFE8', '#EC4899').sides },
      { txt: 'Float top Cyan UI slab 2 dots higher still.', svg: isoBox(50, 12, 28, 12, 8, '#E0F2FE', '#BAE6FD', '#0EA5E9').top + isoBox(50, 12, 28, 12, 8, '#E0F2FE', '#BAE6FD', '#0EA5E9').sides },
      { txt: 'Drop vertical dashed alignment pin through center!', svg: '<line x1="50" y1="6" x2="50" y2="86" stroke="#141836" stroke-width="1.4" stroke-dasharray="3 3"/>' }
    ]
  },
  {
    id: 'iso-laptop', cat: 'iso', name: '123. Iso Workstation Laptop', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw flat slim isometric keyboard base slab.', svg: isoBox(50, 46, 30, 14, 6, '#EEF2FC', '#CBD5E1', '#64748B').top + isoBox(50, 46, 30, 14, 6, '#EEF2FC', '#CBD5E1', '#64748B').sides },
      { txt: 'Raise crisp upright tilted screen off back-left edge.', svg: '<polygon points="20,60 50,46 50,14 20,28" fill="#141836" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>' },
      { txt: 'Inset glowing Cyan display face inside lid.', svg: '<polygon points="24,54 46,44 46,20 24,30" fill="#0EA5E9" fill-opacity="0.55"/>' },
      { txt: 'Add angled key-grid lines & trackpad diamond!', svg: '<polygon points="44,58 58,52 68,57 54,63" fill="#FFF" stroke="#141836" stroke-width="1.3"/>' }
    ]
  },
  {
    id: 'iso-books', cat: 'iso', name: '124. Iso Stacked Textbooks', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw bottom thick Cyan hardcover book slab.', svg: isoBox(50, 48, 30, 14, 14, '#E0F2FE', '#FFF', '#0EA5E9').top + isoBox(50, 48, 30, 14, 14, '#E0F2FE', '#FFF', '#0EA5E9').sides },
      { txt: 'Stack 2nd Magenta textbook cleanly on top.', svg: isoBox(50, 32, 28, 13, 14, '#FCE7F3', '#FFF', '#EC4899').top + isoBox(50, 32, 28, 13, 14, '#FCE7F3', '#FFF', '#EC4899').sides },
      { txt: 'Stack 3rd Amber notebook slightly angled/smaller.', svg: isoBox(50, 16, 26, 12, 12, '#FEF3C7', '#FFF', '#F59E0B').top + isoBox(50, 16, 26, 12, 12, '#FEF3C7', '#FFF', '#F59E0B').sides },
      { txt: 'Add page-line hatch ticks along left page edges.', svg: '<path d="M 24 66 L 46 77 M 26 49 L 46 59" stroke="#94A3B8" stroke-width="1.4"/>' }
    ]
  },
  {
    id: 'iso-house', cat: 'iso', name: '125. Iso Architectural House', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw base isometric cube walls.', svg: isoBox(50, 32, 28, 14, 28, '#FFF', '#EEF2FC', '#CBD5E1').sides },
      { txt: 'Raise pitched triangular gable roof peak above!', svg: '<polygon points="22,46 50,14 78,46 50,60" fill="#FCE7F3" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/><polygon points="50,14 78,46 50,60" fill="#EC4899" fill-opacity="0.35"/>' },
      { txt: 'Cut crisp arched front door + tiny Cyan square window.', svg: '<polygon points="32,78 32,62 42,67 42,83" fill="#141836"/><polygon points="58,64 68,59 68,69 58,74" fill="#E0F2FE" stroke="#141836" stroke-width="1.5"/>' },
      { txt: 'Add chimney block + bold AO base crease!', svg: '<rect x="60" y="18" width="7" height="14" fill="#CBD5E1" stroke="#141836" stroke-width="1.6"/>' }
    ]
  },
  {
    id: 'iso-phone', cat: 'iso', name: '126. Iso Floating Smartphone', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw slim elongated isometric phone slab.', svg: isoBox(50, 26, 30, 15, 7, '#141836', '#334155', '#0F172A').top + isoBox(50, 26, 30, 15, 7, '#141836', '#334155', '#0F172A').sides },
      { txt: 'Inset bright Cyan glowing screen diamond on top.', svg: '<polygon points="50,30 74,41 50,52 26,41" fill="#E0F2FE" stroke="#00D4FF" stroke-width="1.4"/>' },
      { txt: 'Float a tiny Magenta notification card right above screen!', svg: '<polygon points="50,12 66,20 50,28 34,20" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.8"/>' },
      { txt: 'Cast soft floating Cool Grey oval shadow below.', svg: '<ellipse cx="50" cy="76" rx="26" ry="7" fill="#94A3B8" fill-opacity="0.38"/>' }
    ]
  },
  {
    id: 'iso-safe', cat: 'iso', name: '127. Iso Security Vault Cube', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw sturdy isometric safe cube.', svg: isoBox(50, 16, 28, 14, 34, '#E2E8F0', '#CBD5E1', '#64748B').top + isoBox(50, 16, 28, 14, 34, '#E2E8F0', '#CBD5E1', '#64748B').sides },
      { txt: 'Inset front-left vault door recess panel.', svg: '<polygon points="26,37 46,47 46,72 26,62" fill="#FFF" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Draw elliptical combination dial wheel on front-left wall.', svg: '<ellipse cx="36" cy="54" rx="6" ry="8" fill="#0EA5E9" fill-opacity="0.4" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Add Mint security badge dot + 05 AO base crease.', svg: '<circle cx="36" cy="54" r="2.2" fill="#10B981"/>' + isoBox(50, 16, 28, 14, 34).ao }
    ]
  },
  {
    id: 'iso-folder', cat: 'iso', name: '128. Iso File Folder Box', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw flat open isometric back flap + tab notch.', svg: '<polygon points="20,42 50,28 80,42 50,56" fill="#FDE68A" stroke="#141836" stroke-width="2"/><polygon points="22,40 36,33 42,36 28,43" fill="#F59E0B" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Insert crisp white document sheet peeking out.', svg: '<polygon points="28,36 52,24 72,34 48,46" fill="#FFF" stroke="#0EA5E9" stroke-width="1.8"/>' },
      { txt: 'Extrude front folder pocket walls below.', svg: isoBox(50, 34, 30, 14, 24, '#FEF3C7', '#FDE68A', '#F59E0B').sides },
      { txt: 'Weight bottom crease in bold 05 ink.', svg: isoBox(50, 34, 30, 14, 24).ao }
    ]
  },
  {
    id: 'iso-battery', cat: 'iso', name: '129. Iso Power Battery Core', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw tall upright isometric battery pillar.', svg: isoBox(50, 22, 22, 11, 42, '#EEF2FC', '#D1FAE5', '#10B981').top + isoBox(50, 22, 22, 11, 42, '#EEF2FC', '#D1FAE5', '#10B981').sides },
      { txt: 'Top with smaller isometric positive terminal cap!', svg: isoBox(50, 12, 10, 5, 7, '#FFF', '#CBD5E1', '#64748B').top + isoBox(50, 12, 10, 5, 7, '#FFF', '#CBD5E1', '#64748B').sides },
      { txt: 'Divide pillar into 3 glowing Mint charge level stripes.', svg: '<path d="M 28 48 L 50 59 L 72 48 M 28 62 L 50 73 L 72 62" fill="none" stroke="#047857" stroke-width="1.8"/>' },
      { txt: 'Add bold 05 AO contact shadow below.', svg: isoBox(50, 22, 22, 11, 42).ao }
    ]
  },
  {
    id: 'iso-pyramid', cat: 'iso', name: '130. Iso Tiered Strategy Pyramid', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw flat isometric base diamond.', svg: '<polygon points="50,52 84,68 50,84 16,68" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Connect all 3 visible base corners to top peak!', svg: '<polygon points="50,12 16,68 50,84" fill="#E0F2FE" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/><polygon points="50,12 84,68 50,84" fill="#0EA5E9" fill-opacity="0.52" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Slice two horizontal isometric tier lines across both faces.', svg: '<polyline points="38,32 50,38 62,32" fill="none" stroke="#141836" stroke-width="1.8"/><polyline points="27,50 50,61 73,50" fill="none" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Cap top capstone triangle bright Amber gold!', svg: '<polygon points="50,12 38,32 50,38 62,32" fill="#FDE68A" stroke="#141836" stroke-width="1.8"/>' }
    ]
  },
  {
    id: 'iso-lego', cat: 'iso', name: '131. Iso Modular Lego Brick', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw wide crisp isometric brick slab.', svg: isoBox(50, 26, 32, 15, 22, '#FCE7F3', '#FBCFE8', '#EC4899').top + isoBox(50, 26, 32, 15, 22, '#FCE7F3', '#FBCFE8', '#EC4899').sides },
      { txt: 'Place 4 tiny oval circular studs symmetrically on top.', svg: '<ellipse cx="50" cy="33" rx="6" ry="3" fill="#FFF" stroke="#141836" stroke-width="1.6"/><ellipse cx="36" cy="40" rx="6" ry="3" fill="#FFF" stroke="#141836" stroke-width="1.6"/><ellipse cx="64" cy="40" rx="6" ry="3" fill="#FFF" stroke="#141836" stroke-width="1.6"/><ellipse cx="50" cy="47" rx="6" ry="3" fill="#FFF" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Add tiny stud sidewall shading ticks.', svg: '<path d="M 30 40 V 43 M 42 40 V 43 M 58 40 V 43 M 70 40 V 43" stroke="#141836" stroke-width="1.4"/>' },
      { txt: 'Anchor with bold 05 AO bottom crease.', svg: isoBox(50, 26, 32, 15, 22).ao }
    ]
  },
  {
    id: 'iso-disk', cat: 'iso', name: '132. Iso Database Cylinder Stack', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw bottom short cylinder (ellipse + curved wall).', svg: '<path d="M 22 58 V 72 A 28 11 0 0 0 78 72 V 58" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/><ellipse cx="50" cy="58" rx="28" ry="11" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Stack 2nd Cyan disk layer cleanly above.', svg: '<path d="M 22 40 V 52 A 28 11 0 0 0 78 52 V 40" fill="#BAE6FD" stroke="#141836" stroke-width="2.2"/><ellipse cx="50" cy="40" rx="28" ry="11" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Stack 3rd top disk with glowing Mint LED dots.', svg: '<path d="M 22 22 V 34 A 28 11 0 0 0 78 34 V 22" fill="#7DD3FC" stroke="#141836" stroke-width="2.2"/><ellipse cx="50" cy="22" rx="28" ry="11" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Drop tiny LED status dots down front-right curve!', svg: '<circle cx="64" cy="34" r="2.4" fill="#10B981"/><circle cx="64" cy="52" r="2.4" fill="#10B981"/><circle cx="64" cy="70" r="2.4" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'iso-podium', cat: 'iso', name: '133. Iso Winner Stage Podium', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw tall central #1 isometric pedestal.', svg: isoBox(50, 22, 16, 8, 42, '#FEF3C7', '#FDE68A', '#F59E0B').top + isoBox(50, 22, 16, 8, 42, '#FEF3C7', '#FDE68A', '#F59E0B').sides },
      { txt: 'Flank left with medium #2 Cyan block.', svg: isoBox(24, 38, 14, 7, 26, '#E0F2FE', '#BAE6FD', '#0EA5E9').top + isoBox(24, 38, 14, 7, 26, '#E0F2FE', '#BAE6FD', '#0EA5E9').sides },
      { txt: 'Flank right with short #3 Mint block.', svg: isoBox(76, 46, 14, 7, 18, '#D1FAE5', '#A7F3D0', '#10B981').top + isoBox(76, 46, 14, 7, 18, '#D1FAE5', '#A7F3D0', '#10B981').sides },
      { txt: 'Crown #1 top with bright Magenta star!', svg: '<text x="50" y="18" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700" fill="#EC4899">★</text>' }
    ]
  },
  {
    id: 'iso-crate', cat: 'iso', name: '134. Iso Shipped Package Crate', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw clean isometric cardboard box.', svg: isoBox(50, 16, 30, 14, 34, '#FEF3C7', '#FDE68A', '#D97706').top + isoBox(50, 16, 30, 14, 34, '#FEF3C7', '#FDE68A', '#D97706').sides },
      { txt: 'Add Cyan packing tape strip across top seam & down side.', svg: '<polygon points="35,23 45,18 65,28 55,33" fill="#0EA5E9" fill-opacity="0.7" stroke="#141836" stroke-width="1.4"/>' },
      { txt: 'Stick white shipping barcode label on front-left face.', svg: '<polygon points="24,42 38,49 38,60 24,53" fill="#FFF" stroke="#141836" stroke-width="1.4"/>' },
      { txt: 'Anchor bottom with heavy 05 AO crease.', svg: isoBox(50, 16, 30, 14, 34).ao }
    ]
  },
  {
    id: 'iso-cloudpad', cat: 'iso', name: '135. Iso Cloud Platform Tile', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw wide floating Cyan isometric platform tile.', svg: isoBox(50, 38, 36, 16, 10, '#E0F2FE', '#BAE6FD', '#0EA5E9').top + isoBox(50, 38, 36, 16, 10, '#E0F2FE', '#BAE6FD', '#0EA5E9').sides },
      { txt: 'Float cute plump white cloud hovering directly above.', svg: '<path d="M 32 34 H 68 A 9 9 0 0 0 68 17 A 13 12 0 0 0 43 14 A 10 10 0 0 0 32 34 Z" fill="#FFF" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Drop twin dashed Cyan sync beams linking cloud to tile!', svg: '<line x1="42" y1="36" x2="42" y2="52" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="3 2"/><line x1="58" y1="36" x2="58" y2="52" stroke="#EC4899" stroke-width="2" stroke-dasharray="3 2"/>' },
      { txt: 'Cast soft Cool Grey hover shadow underneath.', svg: '<ellipse cx="50" cy="84" rx="28" ry="6" fill="#94A3B8" fill-opacity="0.38"/>' }
    ]
  },
  {
    id: 'iso-monitor', cat: 'iso', name: '136. Iso Analytics Screen', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw angled upright isometric monitor slab.', svg: '<polygon points="20,24 76,12 76,58 20,70" fill="#141836" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Inset glowing screen face + tiny stand base below.', svg: '<polygon points="25,28 71,18 71,52 25,62" fill="#E0F2FE"/><polygon points="44,64 56,61 62,78 38,82" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Plot 3 ascending isometric mini-bars inside screen!', svg: '<line x1="34" y1="54" x2="34" y2="44" stroke="#0EA5E9" stroke-width="4"/><line x1="48" y1="51" x2="48" y2="34" stroke="#7C3AED" stroke-width="4"/><line x1="62" y1="48" x2="62" y2="26" stroke="#10B981" stroke-width="4"/>' },
      { txt: 'Add Magenta KPI peak dot!', svg: '<circle cx="62" cy="24" r="3" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'iso-cone', cat: 'iso', name: '137. Iso WIP Caution Cone', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw flat square isometric orange base pad.', svg: isoBox(50, 56, 26, 12, 5, '#FEF3C7', '#F59E0B', '#B45309').top + isoBox(50, 56, 26, 12, 5, '#FEF3C7', '#F59E0B', '#B45309').sides },
      { txt: 'Raise crisp pointed safety cone straight up from center.', svg: '<polygon points="50,14 32,66 68,66" fill="#F59E0B" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Wrap 2 curved white reflective safety bands around cone.', svg: '<polygon points="43,34 57,34 60,44 40,44" fill="#FFF" stroke="#141836" stroke-width="1.4"/><polygon points="37,52 63,52 65,60 35,60" fill="#FFF" stroke="#141836" stroke-width="1.4"/>' },
      { txt: 'Shade right slope subtly for rounded 3D cone volume.', svg: '<polygon points="50,14 68,66 50,66" fill="#141836" fill-opacity="0.14"/>' }
    ]
  },
  {
    id: 'iso-cup', cat: 'iso', name: '138. Iso Takeaway Coffee Cup', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw tapered cylinder cup body + wide top lid ellipse.', svg: '<polygon points="30,30 70,30 62,80 38,80" fill="#FFFDF5" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/><ellipse cx="50" cy="28" rx="22" ry="7" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Wrap warm Amber cardboard heat-sleeve around middle.', svg: '<polygon points="32,46 68,46 65,64 35,64" fill="#FDE68A" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Add raised sipping rim + tiny Cyan logo dot on sleeve.', svg: '<ellipse cx="50" cy="24" rx="16" ry="5" fill="#FFF" stroke="#141836" stroke-width="1.8"/><circle cx="50" cy="55" r="5" fill="#0EA5E9" stroke="#141836" stroke-width="1.4"/>' },
      { txt: 'Flick 2 light steam lines + base oval shadow.', svg: '<ellipse cx="50" cy="83" rx="18" ry="4" fill="#94A3B8" fill-opacity="0.4"/>' }
    ]
  },
  {
    id: 'iso-chest', cat: 'iso', name: '139. Iso Isometric Asset Chest', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw sturdy isometric treasure box base.', svg: isoBox(50, 24, 30, 14, 30, '#FDE68A', '#FEF3C7', '#D97706').top + isoBox(50, 24, 30, 14, 30, '#FDE68A', '#FEF3C7', '#D97706').sides },
      { txt: 'Split horizontal lid seam line around front walls.', svg: '<polyline points="20,48 50,62 80,48" fill="none" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Clamp Indigo metal clasp right on front-left seam.', svg: '<rect x="31" y="47" width="8" height="12" rx="2" fill="#141836"/>' },
      { txt: 'Pop twin glowing Cyan value sparkles above lid!', svg: '<circle cx="50" cy="14" r="3" fill="#0EA5E9"/><circle cx="62" cy="18" r="2.2" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'iso-stage', cat: 'iso', name: '140. Iso Product Launch Pad', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw wide layered isometric launch platform.', svg: isoBox(50, 44, 36, 16, 10, '#EEF2FC', '#CBD5E1', '#64748B').top + isoBox(50, 44, 36, 16, 10, '#EEF2FC', '#CBD5E1', '#64748B').sides },
      { txt: 'Paint glowing concentric Cyan target pad on top.', svg: '<ellipse cx="50" cy="59" rx="18" ry="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>' },
      { txt: 'Launch miniature Magenta chevron rocket straight up!', svg: '<polygon points="50,12 60,34 50,29 40,34" fill="#EC4899" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>' },
      { txt: 'Drop dashed vertical thrust trail down to pad center!', svg: '<line x1="50" y1="33" x2="50" y2="58" stroke="#F59E0B" stroke-width="2.6" stroke-dasharray="4 3"/>' }
    ]
  },

  // 20 PRODUCT DESIGN & UX SYMBOLS (141–160)
  {
    id: 'prod-persona', cat: 'product', name: '141. User Persona Card', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw rounded ID profile card.', svg: '<rect x="18" y="14" width="64" height="70" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Sketch circular avatar head & shoulders at top center.', svg: '<circle cx="50" cy="34" r="10" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><path d="M 32 56 C 32 45 68 45 68 56" fill="#0EA5E9" fill-opacity="0.35" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add 2 crisp bio trait lines below.', svg: '<path d="M 28 66 H 72 M 34 75 H 66" stroke="#525B7A" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Pin tiny Magenta "ICP ★" badge on top-right corner!', svg: '<circle cx="74" cy="20" r="6" fill="#EC4899" stroke="#141836" stroke-width="1.5"/>' }
    ]
  },
  {
    id: 'prod-browser', cat: 'product', name: '142. Web App Wireframe', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw browser window box + top chrome header bar.', svg: '<rect x="12" y="16" width="76" height="62" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.2"/><line x1="12" y1="30" x2="88" y2="30" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Dot 3 tiny window controls top-left.', svg: '<circle cx="21" cy="23" r="2.4" fill="#EC4899"/><circle cx="29" cy="23" r="2.4" fill="#F59E0B"/><circle cx="37" cy="23" r="2.4" fill="#10B981"/>' },
      { txt: 'Split layout into left sidebar + main hero bento box.', svg: '<rect x="18" y="36" width="18" height="36" rx="3" fill="#EEF2FC" stroke="#94A3B8"/><rect x="42" y="36" width="40" height="20" rx="3" fill="#E0F2FE" stroke="#0EA5E9"/>' },
      { txt: 'Drop twin mini action buttons below hero!', svg: '<rect x="42" y="61" width="18" height="10" rx="3" fill="#141836"/><rect x="64" y="61" width="18" height="10" rx="3" fill="#D1FAE5" stroke="#047857"/>' }
    ]
  },
  {
    id: 'prod-check', cat: 'product', name: '143. Onboarding Checklist', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw clipboard card + top metal clip.', svg: '<rect x="20" y="18" width="60" height="66" rx="6" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/><rect x="36" y="11" width="28" height="11" rx="3" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Draw 3 stacked checkboxes on left.', svg: '<rect x="28" y="32" width="11" height="11" rx="2" fill="#D1FAE5" stroke="#047857" stroke-width="1.6"/><rect x="28" y="49" width="11" height="11" rx="2" fill="#D1FAE5" stroke="#047857" stroke-width="1.6"/><rect x="28" y="66" width="11" height="11" rx="2" fill="#FFF" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Tick first two Mint ✓ + add horizontal step bars.', svg: '<path d="M 45 38 H 70 M 45 55 H 66 M 45 72 H 68" stroke="#141836" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Highlight step 3 Magenta as the "Aha! Moment"!', svg: '<circle cx="72" cy="72" r="3.2" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'prod-flag', cat: 'product', name: '144. Feature Flag Toggle', ratio: '5×3 dots',
    steps: [
      { txt: 'Draw sleek wide horizontal stadium pill track.', svg: '<rect x="14" y="30" width="72" height="34" rx="17" fill="#D1FAE5" stroke="#047857" stroke-width="2.6"/>' },
      { txt: 'Place crisp white toggle thumb circle snapped right (ON).', svg: '<circle cx="68" cy="47" r="13" fill="#FFF" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Write bold monospace "ON" on the open Mint left side.', svg: '<text x="34" y="51" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">ON</text>' },
      { txt: 'Add tiny rollout tag ("25% BETA") underneath!', svg: '<text x="50" y="79" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#7C3AED">ROLLOUT: 25%</text>' }
    ]
  },
  {
    id: 'prod-retain', cat: 'product', name: '145. Flattening Retention Curve', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw clean L-axis frame (100% down to 0%).', svg: '<polyline points="16,16 16,78 86,78" fill="none" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Sweep curved decay line that flattens out horizontally!', svg: '<path d="M 20 22 C 30 56, 46 56, 84 54" fill="none" stroke="#0EA5E9" stroke-width="3.2" stroke-linecap="round"/>' },
      { txt: 'Shade flat Mint PMF plateau zone on right!', svg: '<rect x="48" y="54" width="36" height="22" fill="#10B981" fill-opacity="0.24"/>' },
      { txt: 'Stamp "PMF ✓" callout right above flat tail!', svg: '<text x="66" y="46" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">PMF ✓</text>' }
    ]
  },
  {
    id: 'prod-paywall', cat: 'product', name: '146. Pricing Tier / Paywall', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw rounded vertical pricing card.', svg: '<rect x="22" y="14" width="56" height="72" rx="8" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Add Magenta "PRO" header pill + bold price text.', svg: '<rect x="30" y="21" width="40" height="14" rx="7" fill="#EC4899"/><text x="50" y="31" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">PRO</text><text x="50" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700" fill="#141836">€29</text>' },
      { txt: 'Add 2 tiny feature check rows below.', svg: '<path d="M 32 62 H 68 M 32 70 H 62" stroke="#525B7A" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Add bright Cyan CTA strip along bottom.', svg: '<rect x="30" y="75" width="40" height="6" rx="3" fill="#0EA5E9"/>' }
    ]
  },
  {
    id: 'prod-northstar', cat: 'product', name: '147. North-Star Metric Crest', ratio: '4×4 dots',
    steps: [
      { txt: 'Trace crisp dashed outer orbital halo ring.', svg: '<circle cx="50" cy="48" r="32" fill="#E0F2FE" fill-opacity="0.3" stroke="#0EA5E9" stroke-width="1.8" stroke-dasharray="4 3"/>' },
      { txt: 'Draw razor-sharp 4-point compass North Star dead-center.', svg: '<polygon points="50,14 58,40 84,48 58,56 50,82 42,56 16,48 42,40" fill="#FEF3C7" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Shade top-right & bottom-left facets Amber for 3D gleam.', svg: '<polygon points="50,14 58,40 50,48" fill="#F59E0B" fill-opacity="0.65"/><polygon points="50,82 42,56 50,48" fill="#F59E0B" fill-opacity="0.65"/>' },
      { txt: 'Pin glowing Magenta core dot right at center!', svg: '<circle cx="50" cy="48" r="4" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'prod-burndown', cat: 'product', name: '148. Sprint Burndown Chart', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw crisp L-axis frame.', svg: '<polyline points="16,16 16,78 86,78" fill="none" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Draw dashed diagonal ideal burn guideline top-left → bottom-right.', svg: '<line x1="18" y1="22" x2="82" y2="76" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4 3"/>' },
      { txt: 'Plot jagged actual Mint sprint progress line finishing early!', svg: '<polyline points="18,22 34,30 48,48 64,54 78,76" fill="none" stroke="#10B981" stroke-width="3" stroke-linejoin="round"/>' },
      { txt: 'Mark zero-point finish with Cyan star dot!', svg: '<circle cx="78" cy="76" r="4.5" fill="#0EA5E9" stroke="#141836" stroke-width="1.6"/>' }
    ]
  },
  {
    id: 'prod-cohort', cat: 'product', name: '149. Mini Cohort Heatmap Grid', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw 3×3 stepped triangular cohort cell matrix.', svg: '<g stroke="#141836" stroke-width="1.6"><rect x="18" y="18" width="20" height="18" rx="3" fill="#0EA5E9"/><rect x="40" y="18" width="20" height="18" rx="3" fill="#38BDF8"/><rect x="62" y="18" width="20" height="18" rx="3" fill="#BAE6FD"/><rect x="18" y="38" width="20" height="18" rx="3" fill="#0EA5E9"/><rect x="40" y="38" width="20" height="18" rx="3" fill="#7DD3FC"/><rect x="18" y="58" width="20" height="18" rx="3" fill="#10B981"/></g>' },
      { txt: 'Highlight strongest retention cell in glowing Mint.', svg: '<rect x="62" y="18" width="20" height="18" rx="3" fill="#10B981" fill-opacity="0.7" stroke="#047857" stroke-width="2"/>' },
      { txt: 'Add week header ticks (W1 W2 W3) along top.', svg: '<text x="28" y="13" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">W1</text><text x="50" y="13" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">W2</text><text x="72" y="13" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">W3</text>' },
      { txt: 'Underline with bold baseline rule.', svg: '<line x1="14" y1="82" x2="86" y2="82" stroke="#141836" stroke-width="2.4"/>' }
    ]
  },
  {
    id: 'prod-cursor', cat: 'product', name: '150. Clickable Prototype Cursor', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw crisp rounded clickable CTA button top-left.', svg: '<rect x="14" y="20" width="54" height="28" rx="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.4"/><text x="41" y="38" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">TRY FREE</text>' },
      { txt: 'Draw sharp angled white pointer arrow clicking button edge.', svg: '<polygon points="54,42 54,78 64,68 72,82 78,79 70,65 82,64" fill="#FFF" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Burst 3 Magenta click-ripple sparks around pointer tip!', svg: '<path d="M 46 36 L 40 30 M 54 32 V 25 M 62 36 L 68 30" stroke="#EC4899" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Drop crisp offset Indigo shadow under button.', svg: '<line x1="18" y1="51" x2="68" y2="51" stroke="#141836" stroke-width="2.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'prod-matrix', cat: 'product', name: '151. Impact vs. Effort 2×2', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw clean 2×2 crosshair grid.', svg: '<line x1="50" y1="14" x2="50" y2="82" stroke="#141836" stroke-width="2.2"/><line x1="14" y1="48" x2="86" y2="48" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Shade top-left "QUICK WINS" quadrant Acid Mint!', svg: '<rect x="16" y="16" width="32" height="30" rx="4" fill="#D1FAE5"/>' },
      { txt: 'Plot 3 feature dots (Mint Win, Cyan Bet, Magenta Pit).', svg: '<circle cx="32" cy="30" r="6" fill="#10B981" stroke="#141836" stroke-width="1.8"/><circle cx="70" cy="28" r="5" fill="#0EA5E9" stroke="#141836" stroke-width="1.6"/><circle cx="68" cy="68" r="5" fill="#EC4899" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Stamp tiny "★" right inside the Quick Win!', svg: '<text x="32" y="33" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#FFF">★</text>' }
    ]
  },
  {
    id: 'prod-heart', cat: 'product', name: '152. Customer Love & Loyalty', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw symmetric bold heart silhouette.', svg: '<path d="M 50 78 C 18 56 14 26 32 20 C 42 17 48 26 50 32 C 52 26 58 17 68 20 C 86 26 82 56 50 78 Z" fill="#FCE7F3" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Glaze right lobe rich Hot Magenta.', svg: '<path d="M 50 78 C 82 56 86 26 68 20 C 58 17 52 26 50 32 Z" fill="#EC4899" fill-opacity="0.45"/>' },
      { txt: 'Add white glossy specular arc top-left.', svg: '<path d="M 28 36 A 10 10 0 0 1 36 27" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Pop 2 tiny Cyan delight sparks above!', svg: '<circle cx="22" cy="18" r="2.6" fill="#0EA5E9"/><circle cx="78" cy="18" r="2.6" fill="#0EA5E9"/>' }
    ]
  },
  {
    id: 'prod-nps', cat: 'product', name: '153. NPS Sentiment Gauge', ratio: '5×3 dots',
    steps: [
      { txt: 'Trace thick semicircular meter arc split into 3 colors.', svg: '<path d="M 16 68 A 34 34 0 0 1 38 36" fill="none" stroke="#EC4899" stroke-width="10"/><path d="M 38 36 A 34 34 0 0 1 62 36" fill="none" stroke="#F59E0B" stroke-width="10"/><path d="M 62 36 A 34 34 0 0 1 84 68" fill="none" stroke="#10B981" stroke-width="10"/>' },
      { txt: 'Outline meter cleanly in crisp Indigo ink.', svg: '<path d="M 12 68 H 88" stroke="#141836" stroke-width="2.6" stroke-linecap="round"/>' },
      { txt: 'Point bold needle firmly into Mint Promoter zone!', svg: '<line x1="50" y1="68" x2="72" y2="44" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/><circle cx="50" cy="68" r="6" fill="#141836"/>' },
      { txt: 'Print "+72" badge directly beneath hub.', svg: '<text x="50" y="86" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">NPS +72</text>' }
    ]
  },
  {
    id: 'prod-backlog', cat: 'product', name: '154. Prioritized Backlog Stack', ratio: '4×5 dots',
    steps: [
      { txt: 'Stack 3 clean horizontal ticket bars bottom-to-top.', svg: '<rect x="18" y="64" width="64" height="16" rx="4" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><rect x="18" y="42" width="64" height="16" rx="4" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>' },
      { txt: 'Highlight #1 Top Priority card bright Mint & elevated!', svg: '<rect x="14" y="16" width="72" height="20" rx="5" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>' },
      { txt: 'Add rank numbers (P1 / P2 / P3) on left edge.', svg: '<text x="26" y="29" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">P1 ★</text><text x="26" y="53" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">P2</text><text x="26" y="75" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">P3</text>' },
      { txt: 'Add short title bars beside each rank.', svg: '<path d="M 52 26 H 78 M 44 50 H 74 M 44 72 H 70" stroke="#141836" stroke-width="2.2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'prod-journey', cat: 'product', name: '155. User Emotion Wave', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw horizontal baseline + 3 milestone dots.', svg: '<line x1="12" y1="54" x2="88" y2="54" stroke="#CBD5E1" stroke-width="1.8" stroke-dasharray="4 3"/>' },
      { txt: 'Sweep dramatic wave dipping into friction valley then rising high!', svg: '<path d="M 14 50 Q 34 82, 50 54 T 86 24" fill="none" stroke="#0EA5E9" stroke-width="3.2" stroke-linecap="round"/>' },
      { txt: 'Mark friction valley Magenta "!" and peak Mint "★".', svg: '<circle cx="34" cy="68" r="6" fill="#EC4899" stroke="#141836" stroke-width="1.8"/><circle cx="80" cy="28" r="7" fill="#10B981" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Label "FIX HERE!" below the Magenta dip!', svg: '<text x="36" y="86" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#BE185D">FRICTION!</text>' }
    ]
  },
  {
    id: 'prod-shipbtn', cat: 'product', name: '156. Big Red/Mint Ship Button', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw sturdy dark cylindrical button collar base.', svg: '<ellipse cx="50" cy="66" rx="34" ry="14" fill="#CBD5E1" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Raise plump bright Mint dome push-cap above base.', svg: '<path d="M 24 58 V 44 A 26 11 0 0 1 76 44 V 58 A 26 11 0 0 1 24 58 Z" fill="#10B981" stroke="#141836" stroke-width="2.4"/><ellipse cx="50" cy="44" rx="26" ry="11" fill="#34D399" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Print bold "SHIP!" right across the top face.', svg: '<text x="50" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#141836">SHIP!</text>' },
      { txt: 'Pop 3 eager Cyan launch sparks above!', svg: '<path d="M 50 14 V 24 M 32 18 L 38 26 M 68 18 L 62 26" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'prod-plugin', cat: 'product', name: '157. Modular Extension Puzzle', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw rounded square core tile.', svg: '<path d="M 22 28 H 44 A 7 7 0 1 1 56 28 H 74 V 44 A 7 7 0 1 1 74 56 V 76 H 22 Z" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Add interlocking circular knob on top & right edges.', svg: '<circle cx="50" cy="23" r="6" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2"/><circle cx="79" cy="50" r="6" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2"/>' },
      { txt: 'Stamp "MCP" or "API" center label.', svg: '<text x="48" y="55" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#6D28D9">SDK</text>' },
      { txt: 'Add offset Cool Grey shadow below bottom rim.', svg: '<line x1="24" y1="80" x2="76" y2="80" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'prod-feedback', cat: 'product', name: '158. Customer Interview Quote', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw big rounded speech bubble + pointed left tail.', svg: '<path d="M 16 18 H 84 A 8 8 0 0 1 92 26 V 58 A 8 8 0 0 1 84 66 H 38 L 22 80 V 66 H 16 A 8 8 0 0 1 8 58 V 26 A 8 8 0 0 1 16 18 Z" fill="#FFFDF5" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Drop oversized Cyan opening quotation mark top-left.', svg: '<text x="20" y="48" font-family="Georgia, serif" font-size="30" font-weight="700" fill="#0EA5E9">“</text>' },
      { txt: 'Add 2 tidy handwritten insight lines inside.', svg: '<path d="M 40 38 H 80 M 40 50 H 72" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Pin tiny Amber "USER PAIN!" dot corner.', svg: '<circle cx="84" cy="24" r="5" fill="#F59E0B" stroke="#141836" stroke-width="1.5"/>' }
    ]
  },
  {
    id: 'prod-roadmap', cat: 'product', name: '159. Now / Next / Later Bars', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw 3 clean vertical horizon divider columns.', svg: '<line x1="36" y1="16" x2="36" y2="82" stroke="#CBD5E1" stroke-width="1.6" stroke-dasharray="3 3"/><line x1="66" y1="16" x2="66" y2="82" stroke="#CBD5E1" stroke-width="1.6" stroke-dasharray="3 3"/>' },
      { txt: 'Place solid Cyan NOW bar in Col 1.', svg: '<rect x="10" y="26" width="24" height="14" rx="4" fill="#0EA5E9" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Place Violet NEXT bar in Col 2 + Mint LATER bar in Col 3.', svg: '<rect x="39" y="44" width="24" height="14" rx="4" fill="#7C3AED" stroke="#141836" stroke-width="1.8"/><rect x="69" y="62" width="22" height="14" rx="4" fill="#10B981" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Label "NOW • NEXT • LATER" along top!', svg: '<text x="22" y="14" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#0369A1">NOW</text><text x="51" y="14" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#6D28D9">NEXT</text><text x="80" y="14" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#047857">LATER</text>' }
    ]
  },
  {
    id: 'prod-target', cat: 'product', name: '160. OKR Bullseye Goal', ratio: '4×4 dots',
    steps: [
      { txt: 'Trace 3 crisp concentric target circles.', svg: '<circle cx="48" cy="50" r="32" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/><circle cx="48" cy="50" r="21" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/><circle cx="48" cy="50" r="10" fill="#EC4899" fill-opacity="0.65" stroke="#BE185D" stroke-width="2"/>' },
      { txt: 'Drive a crisp 45° dart shaft straight into bullseye!', svg: '<line x1="48" y1="50" x2="84" y2="16" stroke="#141836" stroke-width="3.2" stroke-linecap="round"/>' },
      { txt: 'Attach twin Mint tail fletching feathers at top-right.', svg: '<polygon points="74,14 88,12 84,16 88,24 76,22" fill="#10B981" stroke="#141836" stroke-width="1.4"/>' },
      { txt: 'Dot center impact point solid white.', svg: '<circle cx="48" cy="50" r="2.8" fill="#FFF"/>' }
    ]
  }
];
