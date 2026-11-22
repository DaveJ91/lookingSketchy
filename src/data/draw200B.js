/* =========================================================================
   DRAW SCHOOL 200 EXPANSION — PACK B (36 LESSONS: +12 DEUTSCH, +12 NATURE, +12 DOODLES)
   ========================================================================= */

export const DRAW_200_B = [
  // +12 DEUTSCH, TRAVEL & FOOD (85–96)
  {
    id: 'ramen', cat: 'deutsch', name: '85. Steaming Café / Ramen Bowl', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw wide semicircular bowl resting on tiny foot.', svg: '<path d="M 16 44 H 84 A 34 32 0 0 1 16 44 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/><rect x="36" y="74" width="28" height="7" rx="2" fill="#141836"/>' },
      { txt: 'Add twin diagonal wooden chopsticks resting on rim.', svg: '<line x1="48" y1="42" x2="88" y2="18" stroke="#B45309" stroke-width="3" stroke-linecap="round"/><line x1="56" y1="44" x2="90" y2="28" stroke="#B45309" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Top rim with cozy egg oval + wavy broth stripe.', svg: '<ellipse cx="36" cy="40" rx="10" ry="6" fill="#FFF" stroke="#141836" stroke-width="1.8"/><circle cx="36" cy="40" r="3" fill="#F59E0B"/><path d="M 24 58 H 76" stroke="#EC4899" stroke-width="2.6" stroke-dasharray="6 4"/>' },
      { txt: 'Flick 2 wavy Cyan steam ribbons rising upward!', svg: '<path d="M 28 28 Q 24 20 30 14 M 44 26 Q 40 18 46 12" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'croissant', cat: 'deutsch', name: '86. Bakery Croissant (Frühstück)', ratio: '5×3 dots',
    steps: [
      { txt: 'Draw plump curved C-crescent silhouette.', svg: '<path d="M 18 64 C 14 34, 86 34, 82 64 C 72 72, 62 56, 50 56 C 38 56, 28 72, 18 64 Z" fill="#FDE68A" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Segment pastry into 3 overlapping curved rib bands.', svg: '<path d="M 38 38 C 34 46, 36 54, 40 58 M 62 38 C 66 46, 64 54, 60 58" fill="none" stroke="#B45309" stroke-width="2.2"/>' },
      { txt: 'Add tiny end-tip folds left & right.', svg: '<path d="M 26 48 Q 28 58 24 66 M 74 48 Q 72 58 76 66" fill="none" stroke="#B45309" stroke-width="1.8"/>' },
      { txt: 'Add warm Amber glaze sheen + soft plate shadow.', svg: '<path d="M 44 42 Q 50 38 56 42" fill="none" stroke="#FFF" stroke-width="2.6" stroke-linecap="round"/><ellipse cx="50" cy="76" rx="30" ry="4" fill="#94A3B8" fill-opacity="0.38"/>' }
    ]
  },
  {
    id: 'suitcase', cat: 'deutsch', name: '87. Travel Rolling Suitcase', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw upright rounded suitcase body + twin caster wheels.', svg: '<rect x="24" y="28" width="52" height="52" rx="8" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/><circle cx="34" cy="83" r="4" fill="#141836"/><circle cx="66" cy="83" r="4" fill="#141836"/>' },
      { txt: 'Extend telescoping U-handle straight up from top.', svg: '<path d="M 40 28 V 12 H 60 V 28" fill="none" stroke="#141836" stroke-width="2.8" stroke-linejoin="round"/>' },
      { txt: 'Add 3 crisp vertical shell ridges for modern look.', svg: '<path d="M 38 36 V 72 M 50 36 V 72 M 62 36 V 72" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Stick a tilted Magenta "DE" travel sticker on corner!', svg: '<rect x="52" y="46" width="18" height="12" rx="2" transform="rotate(-12 61 52)" fill="#EC4899" stroke="#141836" stroke-width="1.4"/>' }
    ]
  },
  {
    id: 'passportbook', cat: 'deutsch', name: '88. Reisepass Booklet', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw clean burgundy/magenta vertical passport cover.', svg: '<rect x="24" y="12" width="52" height="70" rx="5" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.6"/>' },
      { txt: 'Trace delicate globe circle icon dead-center.', svg: '<circle cx="50" cy="48" r="14" fill="none" stroke="#BE185D" stroke-width="2"/><line x1="36" y1="48" x2="64" y2="48" stroke="#BE185D" stroke-width="1.4"/><ellipse cx="50" cy="48" rx="6" ry="14" fill="none" stroke="#BE185D" stroke-width="1.4"/>' },
      { txt: 'Add top title bar ("PASS") & bottom biometric chip icon.', svg: '<text x="50" y="27" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">REISEPASS</text><rect x="43" y="69" width="14" height="7" rx="1" fill="none" stroke="#BE185D" stroke-width="1.5"/>' },
      { txt: 'Add offset Cool Grey cover thickness on right.', svg: '<line x1="79" y1="16" x2="79" y2="80" stroke="#141836" stroke-width="2.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'mappin', cat: 'deutsch', name: '89. Location Map & Pin', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw folded 3-panel accordion paper map below.', svg: '<polygon points="12,48 38,40 38,80 12,86" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><polygon points="38,40 62,48 62,86 38,80" fill="#FFF" stroke="#141836" stroke-width="2"/><polygon points="62,48 88,40 88,80 62,86" fill="#D1FAE5" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Drop bold teardrop GPS map pin hovering above center.', svg: '<path d="M 50 12 C 62 12 66 26 50 48 C 34 26 38 12 50 12 Z" fill="#EC4899" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Punch crisp white center hole inside the pin.', svg: '<circle cx="50" cy="24" r="5" fill="#FFF" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Trace dotted Cyan walking route across the map!', svg: '<path d="M 20 72 Q 44 64 78 60" fill="none" stroke="#0EA5E9" stroke-width="2.2" stroke-dasharray="4 3"/>' }
    ]
  },
  {
    id: 'castle', cat: 'deutsch', name: '90. Fairytale Castle Turret', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw central rectangular stone keep + flanking tall towers.', svg: '<rect x="34" y="42" width="32" height="40" fill="#FFF" stroke="#141836" stroke-width="2.2"/><rect x="20" y="34" width="16" height="48" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/><rect x="64" y="34" width="16" height="48" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Cap both side towers with steep Cyan conical spires.', svg: '<polygon points="17,34 28,12 39,34" fill="#0EA5E9" fill-opacity="0.6" stroke="#141836" stroke-width="2" stroke-linejoin="round"/><polygon points="61,34 72,12 83,34" fill="#0EA5E9" fill-opacity="0.6" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>' },
      { txt: 'Carve arched castle doorway + tiny arrow-slit windows.', svg: '<path d="M 43 82 V 66 A 7 7 0 0 1 57 66 V 82 Z" fill="#141836"/><rect x="26" y="46" width="4" height="10" rx="2" fill="#141836"/><rect x="70" y="46" width="4" height="10" rx="2" fill="#141836"/>' },
      { txt: 'Fly tiny Magenta pennant flags on both spires!', svg: '<polygon points="28,12 38,15 28,18" fill="#EC4899"/><polygon points="72,12 82,15 72,18" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'tram', cat: 'deutsch', name: '91. City U-Bahn / S-Bahn Sign', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw crisp rounded square transit badge in Indigo.', svg: '<rect x="18" y="16" width="64" height="64" rx="12" fill="#0EA5E9" stroke="#141836" stroke-width="2.8"/>' },
      { txt: 'Inset crisp white inner trim border.', svg: '<rect x="24" y="22" width="52" height="52" rx="8" fill="none" stroke="#FFF" stroke-width="2"/>' },
      { txt: 'Print bold centered white "U" (or "S") transit glyph.', svg: '<text x="50" y="60" text-anchor="middle" font-family="Inter, sans-serif" font-size="34" font-weight="800" fill="#FFF">U</text>' },
      { txt: 'Add small station-line pill badge ("U2") below!', svg: '<rect x="34" y="74" width="32" height="14" rx="7" fill="#EC4899" stroke="#141836" stroke-width="1.6"/><text x="50" y="84" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">U2</text>' }
    ]
  },
  {
    id: 'cafe', cat: 'deutsch', name: '92. Sidewalk Café Table', ratio: '5×5 dots',
    steps: [
      { txt: 'Draw wide scalloped sun umbrella canopy on top.', svg: '<path d="M 16 40 Q 50 10 84 40 Q 72 44 62 40 Q 50 44 38 40 Q 28 44 16 40 Z" fill="#FCE7F3" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Drop center umbrella pole straight down to ground.', svg: '<line x1="50" y1="18" x2="50" y2="82" stroke="#141836" stroke-width="2.6"/><line x1="36" y1="82" x2="64" y2="82" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Add round bistro tabletop + tiny coffee cup on top.', svg: '<line x1="28" y1="62" x2="72" y2="62" stroke="#141836" stroke-width="3.2" stroke-linecap="round"/><rect x="34" y="53" width="9" height="9" rx="1" fill="#FFF" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Color alternate umbrella stripes Cyan & Magenta!', svg: '<path d="M 50 22 L 38 40 H 62 Z" fill="#0EA5E9" fill-opacity="0.35"/>' }
    ]
  },
  {
    id: 'airmail', cat: 'deutsch', name: '93. Par-Avion Airmail Envelope', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw crisp horizontal envelope rectangle.', svg: '<rect x="12" y="22" width="76" height="50" rx="4" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Fold triangular top flap meeting center point.', svg: '<polyline points="12,24 50,52 88,24" fill="none" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Dash alternating Cyan & Magenta airmail border ticks!', svg: '<path d="M 16 68 H 28 M 44 68 H 56 M 72 68 H 84" stroke="#0EA5E9" stroke-width="3.5"/><path d="M 30 68 H 42 M 58 68 H 70" stroke="#EC4899" stroke-width="3.5"/>' },
      { txt: 'Seal flap tip with a tiny Mint dot sticker.', svg: '<circle cx="50" cy="52" r="5" fill="#10B981" stroke="#141836" stroke-width="1.6"/>' }
    ]
  },
  {
    id: 'stein', cat: 'deutsch', name: '94. Bavarian Mug / Apfelschorle', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw sturdy upright glass mug + chunky right handle.', svg: '<rect x="26" y="26" width="42" height="54" rx="4" fill="#FEF3C7" stroke="#141836" stroke-width="2.4"/><path d="M 68 36 H 82 V 68 H 68" fill="none" stroke="#141836" stroke-width="3.4" stroke-linejoin="round"/>' },
      { txt: 'Crown top rim with fluffy 3-cloud white foam cap!', svg: '<path d="M 24 28 A 10 10 0 0 1 40 20 A 12 12 0 0 1 60 20 A 10 10 0 0 1 70 28 Z" fill="#FFF" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Pull 3 vertical glass dimple flutes inside.', svg: '<path d="M 36 38 V 70 M 47 38 V 70 M 58 38 V 70" stroke="#B45309" stroke-width="2" stroke-linecap="round" opacity="0.5"/>' },
      { txt: 'Pop 3 tiny rising fizzy bubble dots!', svg: '<circle cx="42" cy="58" r="2.2" fill="#FFF"/><circle cx="52" cy="48" r="2.6" fill="#FFF"/><circle cx="46" cy="40" r="1.8" fill="#FFF"/>' }
    ]
  },
  {
    id: 'filmroll', cat: 'deutsch', name: '95. 35mm Analog Film Roll', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw cylindrical metal canister left + top spool knob.', svg: '<rect x="18" y="24" width="34" height="52" rx="4" fill="#141836"/><rect x="28" y="16" width="14" height="8" rx="2" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Paint bold Amber & Cyan stripe label on canister.', svg: '<rect x="20" y="34" width="30" height="24" fill="#F59E0B"/><text x="35" y="50" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#141836">400</text>' },
      { txt: 'Pull sleek perforated film tongue extending right.', svg: '<path d="M 52 32 H 84 L 78 68 H 52 Z" fill="#FEF3C7" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Dot sprocket holes along top & bottom film strip!', svg: '<path d="M 56 37 H 78 M 56 63 H 74" stroke="#141836" stroke-width="2.4" stroke-dasharray="3 4"/>' }
    ]
  },
  {
    id: 'windmill', cat: 'deutsch', name: '96. Clean-Energy Wind Turbine', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw slender tapered white tower mast on hill.', svg: '<polygon points="46,80 54,80 52,36 48,36" fill="#FFF" stroke="#141836" stroke-width="2"/><path d="M 16 82 Q 50 70 84 82 Z" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>' },
      { txt: 'Attach 3 crisp aerodynamic blades at 120° from hub.', svg: '<line x1="50" y1="36" x2="50" y2="10" stroke="#0EA5E9" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="36" x2="74" y2="50" stroke="#0EA5E9" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="36" x2="26" y2="50" stroke="#0EA5E9" stroke-width="4" stroke-linecap="round"/>' },
      { txt: 'Cap central rotor hub circle in bold Indigo.', svg: '<circle cx="50" cy="36" r="4.5" fill="#141836"/>' },
      { txt: 'Draw curved Mint rotation swoosh arcs around tips!', svg: '<path d="M 56 12 A 24 24 0 0 1 74 28" fill="none" stroke="#10B981" stroke-width="1.8" stroke-dasharray="3 3"/>' }
    ]
  },

  // +12 NATURE, COSMOS & WEATHER (97–108)
  {
    id: 'pinetree', cat: 'nature', name: '97. Layered Alpine Pine Tree', ratio: '3×5 dots',
    steps: [
      { txt: 'Draw sturdy short rectangular trunk resting on ground.', svg: '<rect x="44" y="68" width="12" height="16" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Stack 3 overlapping progressively smaller Mint triangles.', svg: '<polygon points="20,68 50,42 80,68" fill="#D1FAE5" stroke="#047857" stroke-width="2.2" stroke-linejoin="round"/><polygon points="26,52 50,28 74,52" fill="#A7F3D0" stroke="#047857" stroke-width="2.2" stroke-linejoin="round"/><polygon points="34,36 50,14 66,36" fill="#10B981" fill-opacity="0.65" stroke="#047857" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Shade right half slightly darker for instant 3D volume.', svg: '<polygon points="50,14 66,36 50,36" fill="#047857" fill-opacity="0.25"/>' },
      { txt: 'Ground with bold Indigo shadow bar.', svg: '<line x1="24" y1="84" x2="76" y2="84" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'sunrise', cat: 'nature', name: '98. Horizon Sunrise Emblem', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw bold horizontal sea horizon line across middle.', svg: '<line x1="12" y1="58" x2="88" y2="58" stroke="#141836" stroke-width="2.8" stroke-linecap="round"/>' },
      { txt: 'Raise semicircular golden Amber sun dome above line.', svg: '<path d="M 28 58 A 22 22 0 0 1 72 58 Z" fill="#FDE68A" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Radiate 5 crisp sunlight rays outward.', svg: '<path d="M 50 18 V 28 M 28 28 L 35 35 M 72 28 L 65 35 M 16 46 H 24 M 76 46 H 84" stroke="#F59E0B" stroke-width="2.6" stroke-linecap="round"/>' },
      { txt: 'Mirror 3 shimmering Cyan reflection dashes on water below!', svg: '<path d="M 26 68 H 74 M 34 76 H 66 M 42 84 H 58" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'raincloud', cat: 'nature', name: '99. Cozy Raincloud & Drops', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw plump 3-arch cloud silhouette.', svg: '<path d="M 22 54 H 78 A 14 14 0 0 0 78 28 A 20 18 0 0 0 40 24 A 14 14 0 0 0 22 54 Z" fill="#EEF2FC" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Draw 3 slanted Cyan raindrop strokes underneath.', svg: '<path d="M 34 62 L 28 76 M 50 62 L 44 78 M 66 62 L 60 76" stroke="#0EA5E9" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Add soft Cool Grey underside belly shading inside cloud.', svg: '<path d="M 24 52 H 76" stroke="#94A3B8" stroke-width="4" opacity="0.45"/>' },
      { txt: 'Add tiny ripple ovals where drops land!', svg: '<ellipse cx="44" cy="84" rx="14" ry="3" fill="none" stroke="#0EA5E9" stroke-width="1.5"/>' }
    ]
  },
  {
    id: 'snowflake', cat: 'nature', name: '100. Geometric Crystal Snowflake', ratio: '4×4 dots',
    steps: [
      { txt: 'Cross 3 equal straight axes at 60° through center.', svg: '<g stroke="#0EA5E9" stroke-width="2.8" stroke-linecap="round"><line x1="50" y1="14" x2="50" y2="82"/><line x1="20" y1="31" x2="80" y2="65"/><line x1="80" y1="31" x2="20" y2="65"/></g>' },
      { txt: 'Add crisp outward V-chevrons near all 6 tips.', svg: '<path d="M 42 22 L 50 28 L 58 22 M 42 74 L 50 68 L 58 74 M 26 42 L 32 38 L 28 28 M 74 54 L 68 58 L 72 68" fill="none" stroke="#141836" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Center a crisp hollow hexagon core.', svg: '<polygon points="50,38 59,43 59,53 50,58 41,53 41,43" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Dot 6 tiny Cyan ice pearls right on the tips!', svg: '<circle cx="50" cy="14" r="3" fill="#00D4FF"/><circle cx="50" cy="82" r="3" fill="#00D4FF"/>' }
    ]
  },
  {
    id: 'wave', cat: 'nature', name: '101. Japanese Cresting Wave', ratio: '5×4 dots',
    steps: [
      { txt: 'Sweep dramatic curling C-wave crest rising left to right.', svg: '<path d="M 14 74 C 18 32, 58 18, 72 34 C 78 42, 66 52, 58 44 C 48 48, 56 66, 86 74 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Echo 2 inner fluid Cyan current ribbons.', svg: '<path d="M 24 68 C 30 46, 52 32, 64 36 M 34 70 C 40 58, 48 54, 62 62" fill="none" stroke="#0EA5E9" stroke-width="2.2" stroke-linecap="round"/>' },
      { txt: 'Pop 3 playful white foam spray droplets off crest!', svg: '<circle cx="76" cy="24" r="3" fill="#0EA5E9"/><circle cx="84" cy="34" r="2.4" fill="#0EA5E9"/><circle cx="64" cy="18" r="2" fill="#EC4899"/>' },
      { txt: 'Anchor with crisp horizontal sea base line.', svg: '<line x1="10" y1="76" x2="90" y2="76" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'comet', cat: 'nature', name: '102. Shooting Comet Streak', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw crisp 5-point or 4-point star head bottom-left.', svg: '<polygon points="28,44 33,58 47,63 33,68 28,82 23,68 9,63 23,58" fill="#FDE68A" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>' },
      { txt: 'Sweep 3 parallel curved comet tail ribbons up-right!', svg: '<path d="M 38 52 Q 62 34 86 16" fill="none" stroke="#0EA5E9" stroke-width="4" stroke-linecap="round"/><path d="M 44 60 Q 66 44 88 28" fill="none" stroke="#EC4899" stroke-width="2.8" stroke-linecap="round"/><path d="M 34 44 Q 54 26 74 12" fill="none" stroke="#F59E0B" stroke-width="2.4" stroke-linecap="round"/>' },
      { txt: 'Sprinkle 4 tiny stardust dots trailing behind.', svg: '<circle cx="58" cy="24" r="2.2" fill="#EC4899"/><circle cx="76" cy="44" r="2" fill="#0EA5E9"/><circle cx="48" cy="74" r="2" fill="#F59E0B"/>' },
      { txt: 'Add glowing Magenta core dot inside star.', svg: '<circle cx="28" cy="63" r="3.5" fill="#EC4899"/>' }
    ]
  },
  {
    id: 'telescope', cat: 'nature', name: '103. Stargazer Telescope', ratio: '5×5 dots',
    steps: [
      { txt: 'Draw angled tapered optical tube pointing upper-right.', svg: '<polygon points="20,44 74,20 80,34 26,54" fill="#EEF2FC" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Extend crisp 3-legged tripod stand down to floor.', svg: '<path d="M 48 46 L 30 82 M 48 46 L 50 82 M 48 46 L 68 82" stroke="#141836" stroke-width="2.6" stroke-linecap="round"/>' },
      { txt: 'Cap wide front objective lens with Cyan glass ring.', svg: '<line x1="74" y1="20" x2="80" y2="34" stroke="#0EA5E9" stroke-width="4"/>' },
      { txt: 'Float a bright Amber star right in its sightline!', svg: '<polygon points="88,10 90,15 95,17 90,19 88,24 86,19 81,17 86,15" fill="#F59E0B"/>' }
    ]
  },
  {
    id: 'acorn', cat: 'nature', name: '104. Autumn Oak Acorn', ratio: '3×4 dots',
    steps: [
      { txt: 'Draw plump pointed U-shaped nut body.', svg: '<path d="M 30 44 H 70 C 70 68 58 80 50 84 C 42 80 30 68 30 44 Z" fill="#FEF3C7" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Crown top with textured domed cap + curved twig stem.', svg: '<path d="M 24 46 C 24 24 76 24 76 46 Z" fill="#CBD5E1" stroke="#141836" stroke-width="2.4"/><path d="M 50 28 Q 52 16 60 12" fill="none" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Cross-hatch cap with 4 crisp diagonal lines.', svg: '<path d="M 34 32 L 44 44 M 48 28 L 58 44 M 62 32 L 52 44 M 48 28 L 38 44" stroke="#525B7A" stroke-width="1.3"/>' },
      { txt: 'Add white specular curve on nut left cheek!', svg: '<path d="M 38 52 Q 38 64 44 72" fill="none" stroke="#FFF" stroke-width="2.8" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'volcano', cat: 'nature', name: '105. Idea-Eruption Volcano', ratio: '5×5 dots',
    steps: [
      { txt: 'Draw wide truncated mountain cone with crater top.', svg: '<polygon points="12,82 38,38 62,38 88,82" fill="#CBD5E1" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Drip vivid Magenta & Amber lava tongues down the rim.', svg: '<path d="M 38 38 L 42 52 L 50 44 L 56 54 L 62 38 Z" fill="#EC4899" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Burst a fluffy cloud plume + 3 glowing sparks upward!', svg: '<path d="M 38 30 A 10 10 0 0 1 50 18 A 10 10 0 0 1 64 30" fill="none" stroke="#F59E0B" stroke-width="2.6" stroke-linecap="round"/><circle cx="50" cy="10" r="3" fill="#EC4899"/><circle cx="34" cy="16" r="2.4" fill="#F59E0B"/><circle cx="66" cy="16" r="2.4" fill="#0EA5E9"/>' },
      { txt: 'Ground volcano with solid Indigo base line.', svg: '<line x1="10" y1="84" x2="90" y2="84" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'starjar', cat: 'nature', name: '106. Mason Jar of Fireflies', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw rounded glass mason jar body + wide collar.', svg: '<rect x="26" y="26" width="48" height="56" rx="10" fill="#E0F2FE" fill-opacity="0.35" stroke="#141836" stroke-width="2.4"/><rect x="32" y="14" width="36" height="12" rx="3" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Add 2 horizontal jar-lid thread ridges.', svg: '<line x1="34" y1="20" x2="66" y2="20" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Float 3 glowing Amber stars / fireflies inside!', svg: '<circle cx="42" cy="46" r="4.5" fill="#F59E0B"/><circle cx="58" cy="56" r="5" fill="#FDE68A" stroke="#B45309" stroke-width="1.4"/><circle cx="46" cy="68" r="3.5" fill="#EC4899"/>' },
      { txt: 'Flick crisp white vertical glass highlight on left.', svg: '<line x1="33" y1="36" x2="33" y2="70" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'cactusbloom', cat: 'nature', name: '107. Desert Saguaro + Sunset', ratio: '4×5 dots',
    steps: [
      { txt: 'Place big glowing Amber sunset circle in background.', svg: '<circle cx="52" cy="46" r="28" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.6"/>' },
      { txt: 'Draw iconic upright saguaro cactus with 2 curved arms.', svg: '<path d="M 46 80 V 26 A 5 5 0 0 1 56 26 V 80 M 46 52 H 34 A 4 4 0 0 1 30 48 V 36 M 56 46 H 68 A 4 4 0 0 0 72 42 V 32" fill="none" stroke="#047857" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>' },
      { txt: 'Outline cactus cleanly in dark Indigo ink.', svg: '<line x1="16" y1="82" x2="84" y2="82" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' },
      { txt: 'Pop tiny Magenta desert blossom right on top!', svg: '<circle cx="51" cy="20" r="4" fill="#EC4899" stroke="#141836" stroke-width="1.4"/>' }
    ]
  },
  {
    id: 'reflection', cat: 'nature', name: '108. Mirror Mountain Lake', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw crisp horizontal waterline across center.', svg: '<line x1="10" y1="50" x2="90" y2="50" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Raise twin geometric mountain peaks above line.', svg: '<polygon points="18,50 44,16 70,50" fill="#E0F2FE" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/><polygon points="50,50 70,26 88,50" fill="#EDE9FE" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>' },
      { txt: 'Mirror inverted pale triangle reflection underneath!', svg: '<polygon points="18,50 44,82 70,50" fill="#0EA5E9" fill-opacity="0.22" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3"/>' },
      { txt: 'Slice 3 horizontal white water-ripple breaks across reflection.', svg: '<path d="M 28 60 H 60 M 34 68 H 54 M 40 76 H 48" stroke="#FFF" stroke-width="2.4" stroke-linecap="round"/>' }
    ]
  },

  // +12 MARGIN DOODLES & COZY MASCOTS (109–120)
  {
    id: 'puppy', cat: 'doodles', name: '109. Happy Margin Puppy', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw rounded square face + floppy oval side ears.', svg: '<ellipse cx="22" cy="48" rx="9" ry="18" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/><ellipse cx="78" cy="48" rx="9" ry="18" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/><rect x="26" y="24" width="48" height="50" rx="18" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Add twin bright button eyes + cute oval nose.', svg: '<circle cx="40" cy="44" r="3.5" fill="#141836"/><circle cx="60" cy="44" r="3.5" fill="#141836"/><ellipse cx="50" cy="54" rx="5.5" ry="3.8" fill="#141836"/>' },
      { txt: 'Draw happy W-smile + little pink tongue sticking out!', svg: '<path d="M 42 61 Q 46 66 50 60 Q 54 66 58 61" fill="none" stroke="#141836" stroke-width="2" stroke-linecap="round"/><path d="M 47 64 V 70 A 3 3 0 0 0 53 70 V 64" fill="#EC4899" stroke="#141836" stroke-width="1.3"/>' },
      { txt: 'Tint cute Cyan spot around left eye!', svg: '<circle cx="40" cy="44" r="9" fill="#0EA5E9" fill-opacity="0.22"/>' }
    ]
  },
  {
    id: 'owl', cat: 'doodles', name: '110. Wise Study Owl', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw plump egg body with tiny ear tufts on top.', svg: '<path d="M 30 24 L 24 14 L 38 20 H 62 L 76 14 L 70 24 C 78 40 76 74 50 80 C 24 74 22 40 30 24 Z" fill="#EDE9FE" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Trace twin huge spectacle-like round eyes + diamond beak.', svg: '<circle cx="40" cy="40" r="10" fill="#FFF" stroke="#141836" stroke-width="2"/><circle cx="60" cy="40" r="10" fill="#FFF" stroke="#141836" stroke-width="2"/><circle cx="40" cy="40" r="3.5" fill="#141836"/><circle cx="60" cy="40" r="3.5" fill="#141836"/><polygon points="50,45 54,52 50,56 46,52" fill="#F59E0B" stroke="#141836" stroke-width="1.4"/>' },
      { txt: 'Add scalloped chest feather U-arcs.', svg: '<path d="M 40 62 Q 45 67 50 62 Q 55 67 60 62" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round"/>' },
      { txt: 'Perch owl on a horizontal twig with 2 tiny talons!', svg: '<line x1="18" y1="80" x2="82" y2="80" stroke="#141836" stroke-width="3" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'ghost', cat: 'doodles', name: '111. Friendly Pixel Ghost', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw tall dome sheet arch ending in 3 wavy scallops.', svg: '<path d="M 24 76 V 42 A 26 26 0 0 1 76 42 V 76 L 66 68 L 58 76 L 50 68 L 42 76 L 34 68 Z" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Drop twin expressive dark oval eyes + O-mouth.', svg: '<ellipse cx="41" cy="44" rx="4" ry="5.5" fill="#141836"/><ellipse cx="59" cy="44" rx="4" ry="5.5" fill="#141836"/><circle cx="50" cy="56" r="3" fill="#EC4899"/>' },
      { txt: 'Add rosy Cyan cheek glow + floating oval shadow below.', svg: '<circle cx="33" cy="52" r="3.5" fill="#0EA5E9" fill-opacity="0.3"/><circle cx="67" cy="52" r="3.5" fill="#0EA5E9" fill-opacity="0.3"/><ellipse cx="50" cy="85" rx="20" ry="3.5" fill="#94A3B8" fill-opacity="0.4"/>' },
      { txt: 'Float a tiny "BOO!" sparkle above head.', svg: '<circle cx="78" cy="20" r="2.5" fill="#0EA5E9"/>' }
    ]
  },
  {
    id: 'duck', cat: 'doodles', name: '112. Rubber Debug Duck', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw round head sitting atop plump floating teardrop body.', svg: '<path d="M 20 56 C 20 78 78 78 82 54 C 70 54 66 48 60 46 A 14 14 0 1 0 36 44 C 24 46 20 50 20 56 Z" fill="#FDE68A" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Attach bright orange-amber duck bill on left.', svg: '<path d="M 32 34 L 20 36 L 32 42 Z" fill="#F59E0B" stroke="#141836" stroke-width="1.8" stroke-linejoin="round"/>' },
      { txt: 'Add button eye + curved side wing arc.', svg: '<circle cx="42" cy="33" r="3" fill="#141836"/><path d="M 46 58 Q 58 66 68 56" fill="none" stroke="#B45309" stroke-width="2" stroke-linecap="round"/>' },
      { txt: 'Float on rippled Cyan water wave!', svg: '<path d="M 14 78 Q 32 72 50 78 T 86 78" fill="none" stroke="#0EA5E9" stroke-width="2.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'crane', cat: 'doodles', name: '113. Origami Paper Crane', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw central tilted diamond body.', svg: '<polygon points="28,54 50,38 72,54 50,70" fill="#FFF" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { txt: 'Fold sweeping angular wing upward + neck/tail triangles.', svg: '<polygon points="36,48 56,14 64,48" fill="#E0F2FE" stroke="#141836" stroke-width="2" stroke-linejoin="round"/><polygon points="28,54 14,34 34,48" fill="#FCE7F3" stroke="#141836" stroke-width="2" stroke-linejoin="round"/><polygon points="72,54 88,30 66,48" fill="#FFF" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>' },
      { txt: 'Bend crisp tiny triangular beak tip left.', svg: '<polygon points="14,34 8,39 19,40" fill="#EC4899" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Add sharp internal fold crease line for paper realism.', svg: '<line x1="28" y1="54" x2="72" y2="54" stroke="#0EA5E9" stroke-width="1.4"/>' }
    ]
  },
  {
    id: 'crown', cat: 'doodles', name: '114. Mastery Paper Crown', ratio: '5×3 dots',
    steps: [
      { txt: 'Draw 3-point jagged royal crown silhouette.', svg: '<polygon points="16,70 12,30 34,48 50,20 66,48 88,30 84,70" fill="#FEF3C7" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>' },
      { txt: 'Add horizontal trim band across bottom rim.', svg: '<line x1="16" y1="60" x2="84" y2="60" stroke="#B45309" stroke-width="2.2"/>' },
      { txt: 'Top all 3 peaks with bright pearl dots.', svg: '<circle cx="12" cy="28" r="4" fill="#0EA5E9" stroke="#141836" stroke-width="1.6"/><circle cx="50" cy="18" r="4.5" fill="#EC4899" stroke="#141836" stroke-width="1.6"/><circle cx="88" cy="28" r="4" fill="#10B981" stroke="#141836" stroke-width="1.6"/>' },
      { txt: 'Set a Cyan diamond jewel dead-center!', svg: '<polygon points="50,44 55,50 50,56 45,50" fill="#0EA5E9" stroke="#141836" stroke-width="1.4"/>' }
    ]
  },
  {
    id: 'wand', cat: 'doodles', name: '115. Automation Magic Wand', ratio: '5×5 dots',
    steps: [
      { txt: 'Pull sleek diagonal Indigo wand rod with white tip.', svg: '<line x1="18" y1="80" x2="64" y2="34" stroke="#141836" stroke-width="6" stroke-linecap="round"/><line x1="54" y1="44" x2="64" y2="34" stroke="#FFF" stroke-width="3.2" stroke-linecap="round"/>' },
      { txt: 'Crown tip with bright 4-point Amber sparkle star.', svg: '<polygon points="70,12 74,24 86,28 74,32 70,44 66,32 54,28 66,24" fill="#FDE68A" stroke="#141836" stroke-width="1.8" stroke-linejoin="round"/>' },
      { txt: 'Burst 4 playful Cyan & Magenta magic dust dots.', svg: '<circle cx="48" cy="20" r="3" fill="#0EA5E9"/><circle cx="84" cy="48" r="3" fill="#EC4899"/><circle cx="56" cy="54" r="2.2" fill="#10B981"/>' },
      { txt: 'Sweep thin curved sparkle trail arc.', svg: '<path d="M 34 30 Q 44 16 58 14" fill="none" stroke="#EC4899" stroke-width="1.6" stroke-dasharray="3 3"/>' }
    ]
  },
  {
    id: 'potion', cat: 'doodles', name: '116. Experiment Elixir Flask', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw round-bottom glass bulb + narrow neck collar.', svg: '<path d="M 42 18 V 36 L 22 68 A 28 16 0 0 0 78 68 L 58 36 V 18 Z" fill="#FFF" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/><rect x="38" y="12" width="24" height="6" rx="2" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>' },
      { txt: 'Fill lower flask with glowing Acid Mint elixir.', svg: '<path d="M 28 58 H 72 L 77 68 A 26 14 0 0 1 23 68 Z" fill="#10B981" fill-opacity="0.55" stroke="#047857" stroke-width="1.6"/>' },
      { txt: 'Bubble 3 rising Cyan & Magenta spheres upward.', svg: '<circle cx="44" cy="66" r="3.5" fill="#FFF"/><circle cx="56" cy="54" r="3" fill="#0EA5E9"/><circle cx="50" cy="42" r="2.4" fill="#EC4899"/>' },
      { txt: 'Add white specular curve along left glass wall.', svg: '<path d="M 32 54 L 38 42" stroke="#FFF" stroke-width="2.8" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'dice', cat: 'doodles', name: '117. Isometric Lucky Dice', ratio: '4×4 dots',
    steps: [
      { txt: 'Draw clean 2-over-1-up isometric cube.', svg: '<polygon points="50,14 82,30 50,46 18,30" fill="#FFF" stroke="#141836" stroke-width="2.2"/><polygon points="18,30 50,46 50,80 18,64" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/><polygon points="82,30 50,46 50,80 82,64" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/>' },
      { txt: 'Stamp single bold Magenta pip dead-center on top.', svg: '<ellipse cx="50" cy="30" rx="5.5" ry="3.2" fill="#EC4899"/>' },
      { txt: 'Stamp 2 pips on left face + 3 diagonal pips on right.', svg: '<circle cx="28" cy="46" r="3" fill="#141836"/><circle cx="40" cy="64" r="3" fill="#141836"/><circle cx="60" cy="52" r="2.8" fill="#141836"/><circle cx="66" cy="58" r="2.8" fill="#141836"/><circle cx="72" cy="64" r="2.8" fill="#141836"/>' },
      { txt: 'Add 05 AO contact shadow underneath bottom edge.', svg: '<polyline points="18,65 50,81 82,65" fill="none" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 'vintagekey', cat: 'doodles', name: '118. Master Insight Key', ratio: '5×3 dots',
    steps: [
      { txt: 'Draw ornate circular key bow ring on left.', svg: '<circle cx="26" cy="48" r="16" fill="#FEF3C7" stroke="#141836" stroke-width="2.6"/><circle cx="26" cy="48" r="7" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Extend straight horizontal key shaft to the right.', svg: '<line x1="42" y1="48" x2="86" y2="48" stroke="#141836" stroke-width="4" stroke-linecap="round"/>' },
      { txt: 'Add twin notched teeth dropping down near tip.', svg: '<path d="M 68 48 V 62 M 80 48 V 66 H 74" fill="none" stroke="#141836" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>' },
      { txt: 'Pop Cyan glint star on key ring!', svg: '<circle cx="18" cy="34" r="2.6" fill="#0EA5E9"/>' }
    ]
  },
  {
    id: 'waxenv', cat: 'doodles', name: '119. Secret Wax-Sealed Letter', ratio: '5×4 dots',
    steps: [
      { txt: 'Draw crisp rounded envelope body.', svg: '<rect x="14" y="20" width="72" height="52" rx="5" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>' },
      { txt: 'Draw X-fold inner lines meeting center.', svg: '<polyline points="14,22 50,48 86,22" fill="none" stroke="#141836" stroke-width="2"/><line x1="14" y1="70" x2="40" y2="48" stroke="#94A3B8" stroke-width="1.6"/><line x1="86" y1="70" x2="60" y2="48" stroke="#94A3B8" stroke-width="1.6"/>' },
      { txt: 'Press bold round Magenta wax seal right over apex!', svg: '<circle cx="50" cy="48" r="10" fill="#EC4899" stroke="#141836" stroke-width="2"/>' },
      { txt: 'Emboss tiny white star inside wax seal.', svg: '<text x="50" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">★</text>' }
    ]
  },
  {
    id: 'walkman', cat: 'doodles', name: '120. Retro Audio Walkman', ratio: '4×5 dots',
    steps: [
      { txt: 'Draw upright retro player chassis + side play buttons.', svg: '<rect x="24" y="16" width="52" height="66" rx="6" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="2.4"/><rect x="76" y="26" width="6" height="12" rx="1" fill="#EC4899" stroke="#141836" stroke-width="1.6"/><rect x="76" y="42" width="6" height="10" rx="1" fill="#141836"/>' },
      { txt: 'Inset dark tape window with 2 white reel circles.', svg: '<rect x="32" y="26" width="24" height="44" rx="3" fill="#141836"/><circle cx="44" cy="38" r="5" fill="#FFF"/><circle cx="44" cy="58" r="5" fill="#FFF"/>' },
      { txt: 'Add vertical silver speaker grill strip on right.', svg: '<path d="M 64 28 V 68" stroke="#141836" stroke-width="2.2" stroke-dasharray="3 3"/>' },
      { txt: 'Float tiny Magenta headphone jack wire out top!', svg: '<path d="M 38 16 V 8 Q 48 4 56 10" fill="none" stroke="#EC4899" stroke-width="2.2" stroke-linecap="round"/>' }
    ]
  }
];
