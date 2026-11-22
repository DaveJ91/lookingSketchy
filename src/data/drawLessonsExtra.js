/* =========================================================================
   DRAW SCHOOL EXPANSION: 24 MORE 4-STEP MINI-ILLUSTRATIONS (25–48)
   Expands Appendix D to 48 Guided Step-by-Step Lessons Across 6 Categories
   ========================================================================= */

export const DRAW_LESSONS_EXTRA = [
  // +2 WORKSPACE & DESK (25–26)
  {
    id: 'headphones', cat: 'desk', name: '25. Studio Focus Headphones', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw wide U-shaped headband arch (05 outer).', svg: '<path d="M 22 56 V 46 A 28 28 0 0 1 78 46 V 56" fill="none" stroke="#141836" stroke-width="4.5" stroke-linecap="round"/><path d="M 27 46 A 23 23 0 0 1 73 46" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Attach twin tall pill ear-cups left & right.', svg: '<rect x="14" y="48" width="14" height="30" rx="6" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/><rect x="72" y="48" width="14" height="30" rx="6" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Add plush inner foam cushions facing inward.', svg: '<rect x="28" y="51" width="6" height="24" rx="3" fill="#141836"/><rect x="66" y="51" width="6" height="24" rx="3" fill="#141836"/>' },
      { txt: 'Pop tiny Magenta sound-wave arcs & Mint L/R glow.', svg: '<path d="M 41 63 Q 45 55 50 63 T 59 63" fill="none" stroke="#EC4899" stroke-width="2.4" stroke-linecap="round"/><circle cx="21" cy="63" r="3" fill="#10B981"/><circle cx="79" cy="63" r="3" fill="#10B981"/>' }
    ]
  },
  {
    id: 'camera', cat: 'desk', name: '26. Instant Polaroid Camera', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw blocky rounded camera body + stepped top ridge.', svg: '<path d="M 16 32 H 34 L 40 22 H 60 L 66 32 H 84 A 5 5 0 0 1 89 37 V 68 A 5 5 0 0 1 84 73 H 16 A 5 5 0 0 1 11 68 V 37 A 5 5 0 0 1 16 32 Z" fill="#FFFDF5" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Center large double-ring circular camera lens.', svg: '<circle cx="50" cy="52" r="15" fill="#141836"/><circle cx="50" cy="52" r="10" fill="#0EA5E9" fill-opacity="0.4" stroke="#FFF" stroke-width="1.6"/><circle cx="46" cy="48" r="2.6" fill="#FFF"/>' },
      { txt: 'Add rainbow stripe, flash square & Magenta shutter button.', svg: '<rect x="68" y="37" width="12" height="8" rx="2" fill="#FEF3C7" stroke="#141836" stroke-width="1.6"/><circle cx="24" cy="42" r="4" fill="#EC4899" stroke="#141836" stroke-width="1.6"/><line x1="12" y1="62" x2="34" y2="62" stroke="#0EA5E9" stroke-width="3"/><line x1="66" y1="62" x2="88" y2="62" stroke="#EC4899" stroke-width="3"/>' },
      { txt: 'Slide a crisp white Polaroid print out the bottom slot!', svg: '<rect x="30" y="73" width="40" height="16" rx="1" fill="#FFF" stroke="#141836" stroke-width="2"/><rect x="35" y="75" width="30" height="8" fill="#D1FAE5"/>' }
    ]
  },

  // +2 AI & CYBER (27–28)
  {
    id: 'brain', cat: 'tech', name: '27. Neural Brain Circuit', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw twin scalloped cloud-like brain hemispheres.', svg: '<path d="M 49 22 C 34 18 20 28 22 42 C 16 48 18 64 30 68 C 34 76 46 76 49 68 Z" fill="#FFF" stroke="#141836" stroke-width="2.2"/><path d="M 51 22 C 66 18 80 28 78 42 C 84 48 82 64 70 68 C 66 76 54 76 51 68 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Sketch soft organic fold curves on the left lobe.', svg: '<path d="M 32 34 Q 40 38 35 46 M 27 54 Q 36 52 40 60" fill="none" stroke="#141836" stroke-width="1.8" stroke-linecap="round"/>' },
      { txt: 'Route crisp 90° PCB circuit traces on the right lobe!', svg: '<path d="M 56 36 H 66 L 70 42 M 56 50 H 72 M 58 60 H 66" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/><circle cx="70" cy="42" r="2.6" fill="#EC4899"/><circle cx="72" cy="50" r="2.6" fill="#0EA5E9"/><circle cx="66" cy="60" r="2.6" fill="#10B981"/>' },
      { txt: 'Add brain stem base + 3 bright Cyan spark ticks above.', svg: '<path d="M 45 72 V 82 M 55 72 V 82" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/><path d="M 50 10 V 16 M 36 12 L 40 17 M 64 12 L 60 17" stroke="#EC4899" stroke-width="2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'terminal', cat: 'tech', name: '28. Retro CLI Cyber Monitor', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw chunky CRT monitor box + tapered stand pedestal.', svg: '<rect x="16" y="16" width="68" height="50" rx="6" fill="#EEF2FC" stroke="#141836" stroke-width="2.4"/><polygon points="38,66 62,66 68,80 32,80" fill="#CBD5E1" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>' },
      { txt: 'Inset deep Indigo phosphor screen rectangle.', svg: '<rect x="23" y="23" width="54" height="36" rx="3" fill="#141836"/>' },
      { txt: 'Write glowing Acid Mint prompt chevron `>_` inside.', svg: '<text x="30" y="42" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700" fill="#10B981">&gt;_</text><line x1="30" y1="50" x2="62" y2="50" stroke="#00D4FF" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Add Magenta power LED dot + base shadow bar.', svg: '<circle cx="73" cy="62" r="2.2" fill="#EC4899"/><line x1="24" y1="83" x2="76" y2="83" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" opacity="0.5"/>' }
    ]
  },

  // +2 TAX & STRATEGY (29–30)
  {
    id: 'waxseal', cat: 'tax', name: '29. Wax-Sealed Tax Ruling', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw vertical parchment scroll with curled top roll.', svg: '<rect x="22" y="16" width="56" height="66" rx="4" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/><ellipse cx="50" cy="16" rx="28" ry="5" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Add § heading + 3 clean parallel ruling lines.', svg: '<text x="32" y="34" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">§ 13b</text><path d="M 32 42 H 68 M 32 50 H 64 M 32 58 H 52" stroke="#525B7A" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Stamp scalloped Magenta wax seal at bottom-right.', svg: '<polygon points="62,68 58,86 64,82 70,86 66,68" fill="#EC4899" stroke="#141836" stroke-width="1.4"/><circle cx="64" cy="66" r="10" fill="#EC4899" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Emboss crisp white checkmark inside the wax seal!', svg: '<polyline points="59,66 63,70 69,62" fill="none" stroke="#FFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>' }
    ]
  },
  {
    id: 'knight', cat: 'tax', name: '30. Strategy Chess Knight', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw wide stepped circular pedestal base.', svg: '<rect x="24" y="74" width="52" height="10" rx="3" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/><rect x="30" y="66" width="40" height="8" rx="2" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Sweep bold S-curved horse neck & pointed ear.', svg: '<path d="M 34 66 C 34 48 44 42 40 36 L 26 42 L 22 34 L 40 20 L 44 12 L 50 18 C 66 22 72 42 66 66 Z" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Add eye dot, nostril tick & ridged mane line.', svg: '<circle cx="42" cy="27" r="2.4" fill="#141836"/><path d="M 52 24 C 60 32 62 46 58 60" fill="none" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Shade back crest Violet + bold AO base underline.', svg: '<path d="M 50 18 C 66 22 72 42 66 66 H 56 C 60 44 58 28 50 18 Z" fill="#7C3AED" fill-opacity="0.24"/><line x1="20" y1="86" x2="80" y2="86" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/>' }
    ]
  },

  // +2 DEUTSCH & TRAVEL (31–32)
  {
    id: 'fernsehturm', cat: 'deutsch', name: '31. Berlin Fernsehturm Tower', ratio: '3×6 dots',
    steps: [
      { txt: 'Draw tapered needle spire + narrow concrete shaft.', svg: '<polygon points="46,84 54,84 52,32 48,32" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><line x1="50" y1="8" x2="50" y2="32" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Center iconic giant disco-ball observation sphere!', svg: '<circle cx="50" cy="40" r="14" fill="#FFF" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Draw equator window band + angled grid gleam lines.', svg: '<path d="M 36 40 H 64 M 42 29 C 46 36 46 44 42 51 M 58 29 C 54 36 54 44 58 51" fill="none" stroke="#0EA5E9" stroke-width="1.6"/>' },
      { txt: 'Add tiny Magenta antenna stripes + sunlit Cyan sky!', svg: '<line x1="50" y1="12" x2="50" y2="20" stroke="#EC4899" stroke-width="3"/><circle cx="50" cy="40" r="13" fill="#0EA5E9" fill-opacity="0.18"/><path d="M 28 84 H 72" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'fachwerk', cat: 'deutsch', name: '32. German Fachwerkhaus', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw square house base + steep triangular pitched roof.', svg: '<rect x="24" y="44" width="52" height="38" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/><polygon points="18,44 50,14 82,44" fill="#FCE7F3" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Add horizontal timber beams & iconic diagonal X-braces!', svg: '<line x1="24" y1="62" x2="76" y2="62" stroke="#141836" stroke-width="2.2"/><line x1="50" y1="44" x2="50" y2="82" stroke="#141836" stroke-width="2.2"/><path d="M 24 44 L 38 62 M 76 44 L 62 62 M 34 30 H 66" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Inset arched wooden door + twin shuttered windows.', svg: '<path d="M 44 82 V 70 A 6 6 0 0 1 56 70 V 82 Z" fill="#F59E0B" fill-opacity="0.5" stroke="#141836" stroke-width="1.8"/><rect x="30" y="49" width="12" height="9" fill="#E0F2FE" stroke="#141836" stroke-width="1.5"/><rect x="58" y="49" width="12" height="9" fill="#E0F2FE" stroke="#141836" stroke-width="1.5"/>' },
      { txt: 'Add Magenta roof glaze, chimney puff & ground line.', svg: '<rect x="64" y="18" width="7" height="14" fill="#CBD5E1" stroke="#141836" stroke-width="1.6"/><polygon points="18,44 50,14 82,44" fill="#EC4899" fill-opacity="0.22"/><line x1="14" y1="83" x2="86" y2="83" stroke="#141836" stroke-width="3.2" stroke-linecap="round"/>' }
    ]
  },

  // NEW CATEGORY: NATURE & COSMOS (33–40)
  {
    id: 'moon', cat: 'nature', name: '33. Crescent Moon & Stars', ratio: '4×4 dots',
    steps: [
      { txt: 'Trace a crisp large outer C-arc for the moon back.', svg: '<path d="M 56 18 A 32 32 0 1 0 74 72" fill="none" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Connect both tips with a tighter inner crescent curve.', svg: '<path d="M 56 18 A 32 32 0 1 0 74 72 A 24 24 0 1 1 56 18 Z" fill="#FEF3C7" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Pop 3 crisp 4-point sparkle stars in the hollow.', svg: '<path d="M 62 30 L 65 36 L 71 39 L 65 42 L 62 48 L 59 42 L 53 39 L 59 36 Z" fill="#0EA5E9" stroke="#141836" stroke-width="1.2"/><circle cx="76" cy="24" r="2.6" fill="#EC4899"/><circle cx="76" cy="52" r="2" fill="#0EA5E9"/>' },
      { txt: 'Glaze golden Amber along bottom crescent rim.', svg: '<path d="M 32 62 A 28 28 0 0 0 72 72 A 22 22 0 0 1 32 62 Z" fill="#F59E0B" fill-opacity="0.48"/>' }
    ]
  },
  {
    id: 'saturn', cat: 'nature', name: '34. Ringed Planet Saturn', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw clean central planet sphere.', svg: '<circle cx="50" cy="48" r="22" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Sweep wide tilted orbital ellipse across the front.', svg: '<path d="M 10 56 C 14 72 86 52 90 36 C 88 28 76 30 70 33" fill="none" stroke="#141836" stroke-width="5.5" stroke-linecap="round"/><path d="M 10 56 C 14 72 86 52 90 36" fill="none" stroke="#EC4899" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Add back ring arc peeking behind top-left edge.', svg: '<path d="M 28 40 C 16 45 10 51 10 56" fill="none" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Add curved atmospheric stripe + 2 orbiting moons.', svg: '<path d="M 34 36 Q 50 42 66 36" fill="none" stroke="#0EA5E9" stroke-width="2.6" stroke-linecap="round"/><circle cx="22" cy="24" r="4" fill="#F59E0B" stroke="#141836" stroke-width="1.6"/><circle cx="80" cy="68" r="2.6" fill="#10B981"/>' }
    ]
  },
  {
    id: 'mountain', cat: 'nature', name: '35. Alpine Peak & Summit Flag', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw big central triangle + smaller flanking peak.', svg: '<polygon points="10,78 46,24 82,78" fill="#EEF2FC" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/><polygon points="48,78 72,40 92,78" fill="#E2E8F0" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Zigzag crisp white snow-cap collar below peak.', svg: '<polygon points="46,24 34,42 42,39 48,45 58,42" fill="#FFF" stroke="#141836" stroke-width="1.6" stroke-linejoin="round"/>' },
      { txt: 'Plant a bold Magenta milestone flag right on summit!', svg: '<line x1="46" y1="24" x2="46" y2="8" stroke="#141836" stroke-width="2.2"/><polygon points="46,8 62,13 46,18" fill="#EC4899" stroke="#141836" stroke-width="1.4"/>' },
      { txt: 'Shade right mountain face Cool Grey + Cyan ridge wash.', svg: '<polygon points="46,24 58,42 82,78 46,78" fill="#64748B" fill-opacity="0.34"/><line x1="8" y1="80" x2="94" y2="80" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'mushroom', cat: 'nature', name: '36. Cozy Toadstool Pair', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw plump curved stem + dome umbrella cap.', svg: '<path d="M 38 48 C 36 62 34 74 36 80 H 56 C 58 74 54 62 52 48 Z" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/><path d="M 18 50 C 18 22 74 22 74 50 Z" fill="#FCE7F3" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Add cute baby side-mushroom leaning right.', svg: '<rect x="68" y="64" width="10" height="16" rx="3" fill="#FFFDF5" stroke="#141836" stroke-width="1.8"/><path d="M 58 66 C 58 50 88 50 88 66 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Drop crisp white polka-dot circles on both caps.', svg: '<circle cx="34" cy="36" r="4.5" fill="#FFF" stroke="#141836" stroke-width="1.2"/><circle cx="52" cy="32" r="5" fill="#FFF" stroke="#141836" stroke-width="1.2"/><circle cx="62" cy="43" r="3" fill="#FFF" stroke="#141836" stroke-width="1.2"/><circle cx="74" cy="58" r="2.8" fill="#FFF"/>' },
      { txt: 'Glaze caps Magenta/Cyan + tuft of Acid Mint grass.', svg: '<path d="M 18 50 C 18 22 74 22 74 50 Z" fill="#EC4899" fill-opacity="0.35"/><path d="M 24 80 L 28 72 L 32 80 M 82 80 L 86 73 L 90 80" fill="none" stroke="#047857" stroke-width="2.2" stroke-linecap="round"/><line x1="16" y1="81" x2="90" y2="81" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'monstera', cat: 'nature', name: '37. Monstera Botanical Leaf', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw curved central stem + heart-leaf silhouette.', svg: '<path d="M 50 86 C 50 68 50 40 50 18" fill="none" stroke="#047857" stroke-width="2.8" stroke-linecap="round"/><path d="M 50 14 C 76 18 82 54 50 74 C 18 54 24 18 50 14 Z" fill="#D1FAE5" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Carve 4 iconic white wedge splits along both edges.', svg: '<polygon points="22,36 38,40 24,45" fill="#FAFBFD" stroke="#141836" stroke-width="1.4"/><polygon points="26,54 40,54 30,61" fill="#FAFBFD" stroke="#141836" stroke-width="1.4"/><polygon points="78,36 62,40 76,45" fill="#FAFBFD" stroke="#141836" stroke-width="1.4"/><polygon points="74,54 60,54 70,61" fill="#FAFBFD" stroke="#141836" stroke-width="1.4"/>' },
      { txt: 'Add diagonal side veins radiating from midrib.', svg: '<path d="M 50 32 L 66 28 M 50 48 L 68 46 M 50 32 L 34 28 M 50 48 L 32 46" stroke="#047857" stroke-width="1.6" stroke-linecap="round"/>' },
      { txt: 'Deepen right half with 2nd Acid Mint glaze pass.', svg: '<path d="M 50 14 C 76 18 82 54 50 74 Z" fill="#10B981" fill-opacity="0.26"/>' }
    ]
  },
  {
    id: 'lighthouse', cat: 'nature', name: '38. Coastal Lighthouse Beacon', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw tall tapered stone tower resting on rock cliff.', svg: '<polygon points="36,80 64,80 58,34 42,34" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/><path d="M 18 82 Q 50 72 82 82 Z" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add glass lantern room & pointed domed cap on top.', svg: '<rect x="42" y="22" width="16" height="12" fill="#FEF3C7" stroke="#141836" stroke-width="2"/><polygon points="39,22 50,12 61,22" fill="#EC4899" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>' },
      { txt: 'Paint 2 bold Magenta horizontal warning bands.', svg: '<polygon points="40,46 60,46 61,56 39,56" fill="#EC4899" fill-opacity="0.5" stroke="#141836" stroke-width="1.4"/><polygon points="38,66 62,66 63,75 37,75" fill="#EC4899" fill-opacity="0.5" stroke="#141836" stroke-width="1.4"/>' },
      { txt: 'Cast twin Amber light beams cutting across darkness!', svg: '<polygon points="58,25 94,14 94,40 58,31" fill="#F59E0B" fill-opacity="0.34"/><polygon points="42,25 6,14 6,40 42,31" fill="#F59E0B" fill-opacity="0.34"/>' }
    ]
  },
  {
    id: 'paperboat', cat: 'nature', name: '39. Origami Paper Boat', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw wide shallow trapezoidal boat hull.', svg: '<polygon points="12,56 88,56 72,76 28,76" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Raise crisp folded center triangle sail peak.', svg: '<polygon points="30,56 50,20 70,56" fill="#E0F2FE" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Add folded corner crease lines meeting center.', svg: '<line x1="50" y1="20" x2="50" y2="76" stroke="#141836" stroke-width="1.8"/><line x1="12" y1="56" x2="50" y2="66" stroke="#141836" stroke-width="1.6"/><line x1="88" y1="56" x2="50" y2="66" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Shade right facet Cool Grey + rippled Cyan wave.', svg: '<polygon points="50,20 70,56 50,56" fill="#94A3B8" fill-opacity="0.35"/><path d="M 10 81 Q 26 75 42 81 T 74 81 T 92 81" fill="none" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'terrarium', cat: 'nature', name: '40. Glass Terrarium Bell Jar', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw flat wooden base + tall arched glass bell dome.', svg: '<rect x="20" y="74" width="60" height="9" rx="3" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/><path d="M 24 74 V 44 A 26 26 0 0 1 76 44 V 74 Z" fill="#E0F2FE" fill-opacity="0.28" stroke="#141836" stroke-width="2.2"/><circle cx="50" cy="14" r="4" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Layer wavy soil mound + pebbles along bottom.', svg: '<path d="M 24 62 Q 50 56 76 62 V 74 H 24 Z" fill="#CBD5E1" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Plant 2 tiny Acid Mint sprouts inside the dome.', svg: '<path d="M 42 60 V 42 M 42 48 Q 34 42 34 50 M 42 46 Q 50 40 50 48" fill="none" stroke="#047857" stroke-width="2.2" stroke-linecap="round"/><circle cx="60" cy="54" r="6" fill="#10B981" fill-opacity="0.5" stroke="#047857" stroke-width="1.6"/>' },
      { txt: 'Flick white curved glass specular highlight on left!', svg: '<path d="M 32 38 A 18 18 0 0 1 40 26" fill="none" stroke="#FFF" stroke-width="3.2" stroke-linecap="round"/>' }
    ]
  },

  // NEW CATEGORY: STORYTELLING PROPS & MARGIN DOODLES (41–48)
  {
    id: 'cat', cat: 'doodles', name: '41. Peeking Margin Cat', ratio: '5×3 dots',
    steps: [
      { txt: 'Draw bold horizontal ledge line + dome cat head.', svg: '<line x1="10" y1="68" x2="90" y2="68" stroke="#141836" stroke-width="3" stroke-linecap="round"/><path d="M 24 68 C 24 38 76 38 76 68" fill="#FFF" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Pop twin pointed triangular ears on top corners.', svg: '<polygon points="26,46 22,22 42,38" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/><polygon points="74,46 78,22 58,38" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/><polygon points="27,41 25,28 37,37" fill="#FCE7F3"/><polygon points="73,41 75,28 63,37" fill="#FCE7F3"/>' },
      { txt: 'Add big round eyes, tiny triangle nose & 2 paws gripping ledge!', svg: '<circle cx="39" cy="50" r="3.6" fill="#141836"/><circle cx="61" cy="50" r="3.6" fill="#141836"/><polygon points="48,55 52,55 50,58" fill="#EC4899"/><rect x="26" y="63" width="12" height="9" rx="4" fill="#FFF" stroke="#141836" stroke-width="2"/><rect x="62" y="63" width="12" height="9" rx="4" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Flick 3 whiskers per cheek + cute Cyan stripe tuft!', svg: '<path d="M 14 50 H 26 M 13 56 H 26 M 74 50 H 86 M 74 56 H 87" stroke="#141836" stroke-width="1.6" stroke-linecap="round"/><path d="M 46 39 V 44 M 50 38 V 45 M 54 39 V 44" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'bulb', cat: 'doodles', name: '42. Eureka Lightbulb Spark', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw rounded lightbulb globe tapering to neck.', svg: '<path d="M 50 18 A 22 22 0 1 0 38 58 L 40 68 H 60 L 62 58 A 22 22 0 0 0 50 18 Z" fill="#FEF3C7" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Add threaded metal screw base + contact tip.', svg: '<rect x="40" y="68" width="20" height="10" rx="2" fill="#CBD5E1" stroke="#141836" stroke-width="2"/><line x1="40" y1="73" x2="60" y2="73" stroke="#141836" stroke-width="1.6"/><path d="M 44 78 A 6 5 0 0 0 56 78" fill="#141836"/>' },
      { txt: 'Sketch twin filament stems & glowing M-coil inside.', svg: '<polyline points="44,68 44,44 48,49 52,44 56,49 56,68" fill="none" stroke="#B45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' },
      { txt: 'Burst 5 golden Amber & Cyan idea rays outward!', svg: '<path d="M 50 6 V 13 M 22 20 L 28 24 M 78 20 L 72 24 M 15 40 H 22 M 78 40 H 85" stroke="#F59E0B" stroke-width="2.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'alarm', cat: 'doodles', name: '43. Pomodoro Alarm Clock', ratio: '4×4 dots',
    steps: [
      { txt: 'Trace crisp circular clock face + twin little feet.', svg: '<line x1="32" y1="74" x2="26" y2="84" stroke="#141836" stroke-width="3.2" stroke-linecap="round"/><line x1="68" y1="74" x2="74" y2="84" stroke="#141836" stroke-width="3.2" stroke-linecap="round"/><circle cx="50" cy="52" r="28" fill="#FFF" stroke="#141836" stroke-width="2.6"/>' },
      { txt: 'Crown top-left & top-right with twin ringing bells!', svg: '<path d="M 22 34 A 11 11 0 0 1 38 22 Z" fill="#EC4899" fill-opacity="0.55" stroke="#141836" stroke-width="2"/><path d="M 78 34 A 11 11 0 0 0 62 22 Z" fill="#EC4899" fill-opacity="0.55" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Draw 25-min Cyan wedge + bold clock hands.', svg: '<path d="M 50 52 L 50 30 A 22 22 0 0 1 68 64 Z" fill="#0EA5E9" fill-opacity="0.28"/><polyline points="50,34 50,52 64,58" fill="none" stroke="#141836" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="52" r="3" fill="#EC4899"/>' },
      { txt: 'Add tiny vibration rings beside bells ("RING!").', svg: '<path d="M 16 20 Q 12 25 14 31 M 84 20 Q 88 25 86 31" fill="none" stroke="#EC4899" stroke-width="2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'megaphone', cat: 'doodles', name: '44. Key-Takeaway Megaphone', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw angled cone trumpet widening right.', svg: '<polygon points="24,44 72,22 72,72 24,56" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Add back mouthpiece cap + slanted pistol grip handle.', svg: '<rect x="14" y="42" width="10" height="16" rx="3" fill="#CBD5E1" stroke="#141836" stroke-width="2"/><polygon points="28,58 38,59 34,80 24,78" fill="#141836"/>' },
      { txt: 'Color wide horn rim Magenta + inner Cyan highlight.', svg: '<ellipse cx="72" cy="47" rx="5" ry="25" fill="#FCE7F3" stroke="#141836" stroke-width="2"/><polygon points="24,44 72,22 72,38 24,49" fill="#0EA5E9" fill-opacity="0.24"/>' },
      { txt: 'Blast 3 bold angled sound lines out the horn!', svg: '<path d="M 82 34 L 92 26 M 84 47 H 94 M 82 60 L 92 68" stroke="#EC4899" stroke-width="2.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'airplane', cat: 'doodles', name: '45. Paper Airplane + Trail', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw sharp dart triangle pointing upper-right.', svg: '<polygon points="16,46 86,20 62,74 44,54" fill="#FFF" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Crease sharp center fold line from nose to tail.', svg: '<line x1="86" y1="20" x2="44" y2="54" stroke="#141836" stroke-width="2"/><polygon points="44,54 54,65 44,72" fill="#CBD5E1" stroke="#141836" stroke-width="1.8" stroke-linejoin="round"/>' },
      { txt: 'Glaze lower wing fold Cyan for crisp 3D depth.', svg: '<polygon points="86,20 62,74 44,54" fill="#0EA5E9" fill-opacity="0.28"/>' },
      { txt: 'Loop a playful dashed flight trail behind the tail!', svg: '<path d="M 10 82 C 24 88 34 72 24 68 C 16 65 20 56 36 58" fill="none" stroke="#EC4899" stroke-width="2.2" stroke-dasharray="4 4" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'chest', cat: 'doodles', name: '46. Insight Treasure Chest', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw sturdy rectangular base box + domed lid.', svg: '<rect x="18" y="46" width="64" height="34" rx="3" fill="#FEF3C7" stroke="#141836" stroke-width="2.4"/><path d="M 18 46 C 18 22 82 22 82 46 Z" fill="#FDE68A" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Reinforce with twin vertical metal strap bands.', svg: '<rect x="28" y="29" width="8" height="51" fill="#CBD5E1" stroke="#141836" stroke-width="1.6"/><rect x="64" y="29" width="8" height="51" fill="#CBD5E1" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Snap bold central lock plate with keyhole.', svg: '<rect x="44" y="42" width="12" height="14" rx="2" fill="#F59E0B" stroke="#141836" stroke-width="1.8"/><circle cx="50" cy="48" r="2.2" fill="#141836"/>' },
      { txt: 'Radiate golden Cyan & Magenta discovery sparkles!', svg: '<path d="M 50 10 V 18 M 32 14 L 36 20 M 68 14 L 64 20" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/><line x1="16" y1="82" x2="84" y2="82" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'bicycle', cat: 'doodles', name: '47. Commuter City Bicycle', ratio: '6×4 dots',
    steps: [
      { txt: 'Trace twin equal circular wheels with hub dots.', svg: '<circle cx="26" cy="64" r="16" fill="#E0F2FE" fill-opacity="0.3" stroke="#141836" stroke-width="2.6"/><circle cx="74" cy="64" r="16" fill="#E0F2FE" fill-opacity="0.3" stroke="#141836" stroke-width="2.6"/><circle cx="26" cy="64" r="3" fill="#141836"/><circle cx="74" cy="64" r="3" fill="#141836"/>' },
      { txt: 'Connect diamond frame triangle between hubs.', svg: '<polygon points="26,64 48,64 62,38 38,38" fill="none" stroke="#0EA5E9" stroke-width="2.6" stroke-linejoin="round"/><line x1="62" y1="38" x2="74" y2="64" stroke="#141836" stroke-width="2.6"/>' },
      { txt: 'Add saddle seat left + curved handlebars right.', svg: '<line x1="38" y1="38" x2="36" y2="30" stroke="#141836" stroke-width="2.4"/><line x1="30" y1="30" x2="42" y2="30" stroke="#141836" stroke-width="4" stroke-linecap="round"/><path d="M 62 38 L 60 28 H 68" fill="none" stroke="#141836" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>' },
      { txt: 'Attach cute front basket + ground shadow line!', svg: '<rect x="68" y="32" width="14" height="12" rx="2" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/><line x1="12" y1="82" x2="88" y2="82" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" opacity="0.5"/>' }
    ]
  },
  {
    id: 'hourglass', cat: 'doodles', name: '48. Sprint Deadline Hourglass', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw heavy top & bottom horizontal wooden caps.', svg: '<rect x="24" y="14" width="52" height="8" rx="3" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/><rect x="24" y="76" width="52" height="8" rx="3" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Pinch graceful figure-8 glass bulbs between caps.', svg: '<path d="M 30 22 C 30 42 46 46 46 49 C 46 52 30 56 30 76 H 70 C 70 56 54 52 54 49 C 54 46 70 42 70 22 Z" fill="#FFF" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Pour warm Amber sand mound + thin falling stream.', svg: '<polygon points="36,34 64,34 50,48" fill="#F59E0B" fill-opacity="0.55"/><line x1="50" y1="48" x2="50" y2="66" stroke="#F59E0B" stroke-width="2" stroke-dasharray="2 2"/><polygon points="33,76 67,76 50,60" fill="#F59E0B" fill-opacity="0.65"/>' },
      { txt: 'Add white glass gleam curves + outer pillars.', svg: '<line x1="28" y1="22" x2="28" y2="76" stroke="#141836" stroke-width="1.4" opacity="0.5"/><line x1="72" y1="22" x2="72" y2="76" stroke="#141836" stroke-width="1.4" opacity="0.5"/><path d="M 36 27 Q 36 35 42 40" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/>' }
    ]
  }
];
