/* =========================================================================
   CH 10 INTERACTIVE 8-PIECE ISOMETRIC ILLUSTRATION LIBRARY & STEP BUILDER
   3-Stage Build (Wireframe → 05 Ink + AO → Cyber Glaze + White Gel Pop)
   ========================================================================= */

export const ISO_OBJECTS = [
  {
    id: 'stack',
    short: '1. AI Stack',
    name: '1. Exploded 3-Tier AI Stack',
    domain: 'AI/Tech',
    recipe: 'Draw 3 identical 2-over-1-up diamonds spaced 4 dots apart vertically; drop 1-dot slab thickness + inter-tier cast shadows + vertical laser bus.',
    wire: `
      <g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
        <polygon points="380,26 484,78 380,130 276,78"/><path d="M 276 78 V 94 L 380 146 L 484 94 V 78 M 380 130 V 146"/>
        <polygon points="380,104 484,156 380,208 276,156"/><path d="M 276 156 V 172 L 380 224 L 484 172 V 156 M 380 208 V 224"/>
        <polygon points="380,182 484,234 380,286 276,234"/><path d="M 276 234 V 250 L 380 302 L 484 250 V 234 M 380 286 V 302"/>
        <line x1="380" y1="16" x2="380" y2="310" stroke="#EC4899" stroke-width="1.2"/>
      </g>`,
    ink: `
      <!-- Bottom Slab (MCP) -->
      <polygon points="380,182 484,234 380,286 276,234" fill="#FFF" stroke="#141836" stroke-width="1.6"/>
      <polygon points="276,234 380,286 380,302 276,250" fill="#E2E8F0" stroke="#141836" stroke-width="1.6"/>
      <polygon points="484,234 380,286 380,302 484,250" fill="#94A3B8" stroke="#141836" stroke-width="1.6"/>
      <polyline points="276,251 380,304 484,251" fill="none" stroke="#141836" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Inter-tier shadow -->
      <polygon points="380,202 442,234 380,264 318,234" fill="#94A3B8" fill-opacity="0.34"/>
      <!-- Mid Slab (HITL Firewall) -->
      <polygon points="380,104 484,156 380,208 276,156" fill="#FFF" stroke="#141836" stroke-width="2" stroke-dasharray="6 4"/>
      <polygon points="276,156 380,208 380,222 276,170" fill="#E2E8F0" stroke="#141836" stroke-width="1.6"/>
      <polygon points="484,156 380,208 380,222 484,170" fill="#94A3B8" stroke="#141836" stroke-width="1.6"/>
      <polygon points="380,124 442,156 380,186 318,156" fill="#94A3B8" fill-opacity="0.28"/>
      <!-- Top Slab (Cognitive LLM) -->
      <polygon points="380,26 484,78 380,130 276,78" fill="#FFF" stroke="#141836" stroke-width="2.6"/>
      <polygon points="276,78 380,130 380,146 276,94" fill="#E2E8F0" stroke="#141836" stroke-width="1.8"/>
      <polygon points="484,78 380,130 380,146 484,94" fill="#64748B" stroke="#141836" stroke-width="1.8"/>`,
    color: `
      <polygon points="380,182 484,234 380,286 276,234" fill="#10B981" fill-opacity="0.26"/>
      <polygon points="380,104 484,156 380,208 276,156" fill="#EC4899" fill-opacity="0.2" stroke="#EC4899" stroke-width="2.2" stroke-dasharray="6 4"/>
      <polygon points="380,26 484,78 380,130 276,78" fill="#0EA5E9" fill-opacity="0.26"/>
      <!-- Specular White Gel Rim + Elbow Labels -->
      <polyline points="278,78 380,28 482,78" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
      <g font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">
        <polyline points="484,78 524,54 700,54" fill="none" stroke="#0EA5E9" stroke-width="1.8"/><circle cx="484" cy="78" r="4" fill="#0EA5E9"/>
        <text x="530" y="46" fill="#0EA5E9">01 // COGNITIVE LLM PLANE</text>
        <polyline points="484,156 524,156 700,156" fill="none" stroke="#EC4899" stroke-width="1.8"/><circle cx="484" cy="156" r="4" fill="#EC4899"/>
        <text x="530" y="148" fill="#BE185D">02 // HITL GOVERNANCE GATE</text>
        <polyline points="484,234 524,258 700,258" fill="none" stroke="#047857" stroke-width="1.8"/><circle cx="484" cy="234" r="4" fill="#047857"/>
        <text x="530" y="250" fill="#047857">03 // ISOLATED MCP WRITE</text>
      </g>`
  },
  {
    id: 'cluster',
    short: '2. Server Cluster',
    name: '2. Server Rack & DB Cluster',
    domain: 'AI/Tech',
    recipe: 'Tall 2-over-1-up box for GPU/API tower + 2 adjacent Database cylinders linked by glowing Cyan floor bus tracks on a shared isometric floor tile.',
    wire: `
      <g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
        <polygon points="380,44 580,144 380,244 180,144"/>
        <polygon points="296,38 352,66 296,94 240,66"/><path d="M 240 66 V 176 L 296 204 L 352 176 V 66 M 296 94 V 204"/>
        <ellipse cx="458" cy="120" rx="34" ry="14"/><path d="M 424 120 V 188 M 492 120 V 188"/><ellipse cx="458" cy="188" rx="34" ry="16"/>
      </g>`,
    ink: `
      <polygon points="380,82 572,178 380,274 188,178" fill="#FAFBFD" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="5 4"/>
      <!-- Tower Shadow & AO -->
      <polygon points="296,216 376,216 406,188 352,188" fill="#94A3B8" fill-opacity="0.38"/>
      <polyline points="240,189 296,218 352,189" fill="none" stroke="#141836" stroke-width="5" stroke-linecap="round"/>
      <!-- Server Tower -->
      <polygon points="296,38 352,66 296,94 240,66" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <polygon points="240,66 296,94 296,216 240,188" fill="#E2E8F0" stroke="#141836" stroke-width="2"/>
      <polygon points="352,66 296,94 296,216 352,188" fill="#64748B" stroke="#141836" stroke-width="2"/>
      <polygon points="296,38 352,66 352,188 296,216 240,188 240,66" fill="none" stroke="#141836" stroke-width="3"/>
      <path d="M 250 100 L 286 118 M 250 128 L 286 146 M 250 156 L 286 174" stroke="#141836" stroke-width="2"/>
      <!-- DB Cylinder -->
      <ellipse cx="478" cy="198" rx="46" ry="14" fill="#94A3B8" fill-opacity="0.38"/>
      <path d="M 424 126 V 192 A 36 15 0 0 0 496 192 V 126" fill="#E2E8F0" stroke="#141836" stroke-width="2.6"/>
      <path d="M 424 150 A 36 14 0 0 0 496 150 M 424 172 A 36 14 0 0 0 496 172" fill="none" stroke="#141836" stroke-width="1.5"/>
      <ellipse cx="460" cy="126" rx="36" ry="13" fill="#FFF" stroke="#141836" stroke-width="2.4"/>`,
    color: `
      <polygon points="296,38 352,66 296,94 240,66" fill="#0EA5E9" fill-opacity="0.25"/>
      <ellipse cx="460" cy="126" rx="36" ry="13" fill="#10B981" fill-opacity="0.28"/>
      <circle cx="252" cy="90" r="3.5" fill="#10B981"/><circle cx="252" cy="118" r="3.5" fill="#0EA5E9"/><circle cx="252" cy="146" r="3.5" fill="#EC4899"/>
      <polyline points="354,174 396,195 426,180" fill="none" stroke="#0EA5E9" stroke-width="3.2" stroke-dasharray="6 4"/>
      <polyline points="242,66 296,40 350,66" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"/>
      <text x="296" y="246" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">GPU / AGENT NODE</text>
      <text x="460" y="232" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">VECTOR DB (MCP)</text>`
  },
  {
    id: 'desk',
    short: '3. Study Desk',
    name: '3. Tax & Study Isometric Desk',
    domain: 'Tax + Deutsch',
    recipe: 'Wide 2-over-1-up tabletop slab + hinged isometric Laptop + 2 vertical Aktenordner (der Ordner = Cyan, die Frist = Magenta) + Coffee Mug cylinder.',
    wire: `
      <g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
        <polygon points="380,68 580,168 380,268 180,168"/>
        <path d="M 206 182 V 270 M 380 268 V 302 M 554 182 V 270"/>
      </g>`,
    ink: `
      <!-- Tabletop -->
      <polygon points="380,82 574,178 380,274 186,178" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
      <polygon points="186,178 380,274 380,288 186,192" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="574,178 380,274 380,288 574,192" fill="#94A3B8" stroke="#141836" stroke-width="2"/>
      <!-- Laptop -->
      <polygon points="348,112 426,150 426,196 348,158" fill="#E2E8F0" stroke="#141836" stroke-width="2.4"/>
      <polygon points="348,158 426,196 382,218 304,180" fill="#CBD5E1" stroke="#141836" stroke-width="2.4"/>
      <!-- Stacked Binders (Ordner) -->
      <polygon points="444,132 496,158 468,172 416,146" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
      <polygon points="416,146 468,172 468,194 416,168" fill="#E2E8F0" stroke="#141836" stroke-width="1.8"/>
      <polygon points="496,158 468,172 468,194 496,180" fill="#94A3B8" stroke="#141836" stroke-width="1.8"/>
      <!-- Mug Cylinder -->
      <path d="M 264 152 V 188 A 18 7 0 0 0 300 188 V 152" fill="#E2E8F0" stroke="#141836" stroke-width="2.2"/>
      <ellipse cx="282" cy="152" rx="18" ry="6" fill="#FFF" stroke="#141836" stroke-width="2"/>`,
    color: `
      <polygon points="354,120 420,152 420,188 354,156" fill="#0EA5E9" fill-opacity="0.34"/>
      <polygon points="444,132 496,158 468,172 416,146" fill="#EC4899" fill-opacity="0.32"/>
      <ellipse cx="282" cy="152" rx="14" ry="4" fill="#B45309" fill-opacity="0.5"/>
      <text x="380" y="56" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">DER SCHREIBTISCH • DER LAPTOP • DIE AKTE • DIE TASSE</text>`
  },
  {
    id: 'bridge',
    short: '4. MCP Bridge',
    name: '4. Cloud-to-Client MCP Bridge',
    domain: 'AI/Tech + Tax',
    recipe: 'Draw two separated 2-over-1-up floating islands; join them with an arched 3D ribbon bridge carrying tiny packet cubes across the governance gap.',
    wire: `
      <g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
        <polygon points="180,148 276,196 180,244 84,196"/>
        <polygon points="580,148 676,196 580,244 484,196"/>
        <path d="M 250 182 Q 380 96 510 182"/>
      </g>`,
    ink: `
      <!-- Left Island -->
      <polygon points="180,148 276,196 180,244 84,196" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <polygon points="84,196 180,244 180,264 84,216" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="276,196 180,244 180,264 276,216" fill="#64748B" stroke="#141836" stroke-width="2"/>
      <!-- Right Island -->
      <polygon points="580,148 676,196 580,244 484,196" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <polygon points="484,196 580,244 580,264 484,216" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="676,196 580,244 580,264 676,216" fill="#64748B" stroke="#141836" stroke-width="2"/>
      <!-- 3D Arch Bridge -->
      <path d="M 234 176 Q 380 86 526 176 L 548 190 Q 380 108 212 190 Z" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <!-- Packet Cubes -->
      <polygon points="380,114 398,123 380,132 362,123" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
      <polygon points="362,123 380,132 380,146 362,137" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>
      <polygon points="398,123 380,132 380,146 398,137" fill="#94A3B8" stroke="#141836" stroke-width="1.8"/>`,
    color: `
      <polygon points="180,148 276,196 180,244 84,196" fill="#0EA5E9" fill-opacity="0.24"/>
      <polygon points="580,148 676,196 580,244 484,196" fill="#10B981" fill-opacity="0.24"/>
      <path d="M 234 176 Q 380 86 526 176 L 548 190 Q 380 108 212 190 Z" fill="#7C3AED" fill-opacity="0.2"/>
      <polygon points="380,114 398,123 380,132 362,123" fill="#F59E0B" fill-opacity="0.55"/>
      <text x="180" y="200" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">AI AGENT</text>
      <text x="580" y="200" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">CLIENT LEDGER</text>
      <text x="380" y="76" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#7C3AED">SIGNED MCP BRIDGE (ZERO RAW KEYS)</text>`
  },
  {
    id: 'cutaway',
    short: '5. Cutaway Box',
    name: '5. Isometric Cutaway / X-Ray Box',
    domain: 'AI/Tech',
    recipe: 'Draw a large 2-over-1-up outer cube, then carve out the front-top quadrant along parallel dot lines to expose a nested core cube inside!',
    wire: `
      <g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
        <polygon points="380,36 510,101 380,166 250,101"/>
        <path d="M 250 101 V 226 L 380 291 L 510 226 V 101 M 380 166 V 291"/>
        <polygon points="380,101 445,133 380,166 315,133" stroke="#EC4899"/>
      </g>`,
    ink: `
      <!-- Outer Back/Bottom Shell -->
      <polygon points="380,36 510,101 445,133 380,101 315,133 250,101" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="250,101 315,133 315,204 380,236 380,291 250,226" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/>
      <polygon points="510,101 445,133 445,204 380,236 380,291 510,226" fill="#64748B" stroke="#141836" stroke-width="2.2"/>
      <!-- Cutaway Inner Cavity Walls -->
      <polygon points="380,101 445,133 445,204 380,172" fill="#E2E8F0" stroke="#141836" stroke-width="1.8"/>
      <polygon points="380,101 315,133 315,204 380,172" fill="#94A3B8" stroke="#141836" stroke-width="1.8"/>
      <polygon points="380,172 445,204 380,236 315,204" fill="#F8FAFC" stroke="#141836" stroke-width="1.8"/>
      <!-- Glowing Nested Inner Core -->
      <polygon points="380,148 416,166 380,184 344,166" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <polygon points="344,166 380,184 380,214 344,196" fill="#E2E8F0" stroke="#141836" stroke-width="2"/>
      <polygon points="416,166 380,184 380,214 416,196" fill="#94A3B8" stroke="#141836" stroke-width="2"/>`,
    color: `
      <polygon points="380,148 416,166 380,184 344,166" fill="#EC4899" fill-opacity="0.45"/>
      <polygon points="344,166 380,184 380,214 344,196" fill="#EC4899" fill-opacity="0.25"/>
      <polyline points="380,148 416,166 416,196 380,214 344,196 344,166 380,148" fill="none" stroke="#BE185D" stroke-width="2.6"/>
      <polyline points="416,174 548,144 684,144" fill="none" stroke="#EC4899" stroke-width="2"/><circle cx="416" cy="174" r="4" fill="#EC4899"/>
      <text x="554" y="136" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">SANDBOXED CORE</text>
      <text x="120" y="156" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0EA5E9">OUTER RUNTIME SHELL</text>`
  },
  {
    id: 'stairs',
    short: '6. Staircase',
    name: '6. Isometric Progression Staircase',
    domain: 'Deutsch + Maturity',
    recipe: 'Chain four 2-over-1-up treads upward at equal 2-dot vertical risers—ideal for CEFR German levels (A1→A2→B1→B2) or AI autonomy maturity stages.',
    wire: `
      <g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
        ${[0,1,2,3].map(i => `<polygon points="${220+i*76},${224-i*46} ${296+i*76},${262-i*46} ${220+i*76},${300-i*46} ${144+i*76},${262-i*46}"/>`).join('')}
      </g>`,
    ink: `
      ${[
        [0, '#EEF2FC', 'A1'],
        [1, '#E0F2FE', 'A2'],
        [2, '#FCE7F3', 'B1'],
        [3, '#D1FAE5', 'B2 ★']
      ].map(([i, , lbl]) => {
        const x = 186 + i * 96, y = 216 - i * 44;
        return `
          <polygon points="${x},${y} ${x+68},${y+34} ${x},${y+68} ${x-68},${y+34}" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
          <polygon points="${x-68},${y+34} ${x},${y+68} ${x},${y+100} ${x-68},${y+66}" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
          <polygon points="${x+68},${y+34} ${x},${y+68} ${x},${y+100} ${x+68},${y+66}" fill="#64748B" stroke="#141836" stroke-width="2"/>
          <text x="${x}" y="${y+39}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700">${lbl}</text>`;
      }).join('')}`,
    color: `
      ${[
        [0, '#94A3B8', 'A1: Basics'],
        [1, '#0EA5E9', 'A2: Perfekt'],
        [2, '#EC4899', 'B1: Nebensätze'],
        [3, '#10B981', 'B2: Fachdeutsch ★']
      ].map(([i, col, lbl]) => {
        const x = 186 + i * 96, y = 216 - i * 44;
        return `<polygon points="${x},${y} ${x+68},${y+34} ${x},${y+68} ${x-68},${y+34}" fill="${col}" fill-opacity="0.3"/>
          <text x="${x}" y="${y-10}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">${lbl}</text>`;
      }).join('')}`
  },
  {
    id: 'hopper',
    short: '7. Triage Hopper',
    name: '7. 3D Isometric Triage Hopper',
    domain: 'AI/Tech + Tax',
    recipe: 'Inverted truncated pyramid sitting over a dual-pipe splitter—visually explains how a Flash classifier filters 80% routine tickets from 20% complex rulings.',
    wire: `
      <g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
        <polygon points="380,40 490,95 380,150 270,95"/>
        <polygon points="380,164 416,182 380,200 344,182"/>
        <line x1="270" y1="95" x2="344" y2="182"/><line x1="490" y1="95" x2="416" y2="182"/><line x1="380" y1="150" x2="380" y2="200"/>
      </g>`,
    ink: `
      <!-- Hopper Faces -->
      <polygon points="380,44 488,98 380,152 272,98" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <polygon points="272,98 380,152 380,206 346,188" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/>
      <polygon points="488,98 380,152 380,206 414,188" fill="#64748B" stroke="#141836" stroke-width="2.2"/>
      <!-- Dual Output Pipes -->
      <path d="M 358 196 V 248 H 230" fill="none" stroke="#141836" stroke-width="12" stroke-linejoin="round"/>
      <path d="M 358 196 V 248 H 230" fill="none" stroke="#E0F2FE" stroke-width="7" stroke-linejoin="round"/>
      <path d="M 402 196 V 248 H 530" fill="none" stroke="#141836" stroke-width="8" stroke-linejoin="round"/>
      <path d="M 402 196 V 248 H 530" fill="none" stroke="#FCE7F3" stroke-width="4" stroke-linejoin="round"/>`,
    color: `
      <polygon points="380,44 488,98 380,152 272,98" fill="#0EA5E9" fill-opacity="0.22"/>
      <circle cx="352" cy="84" r="7" fill="#0EA5E9" stroke="#141836"/><circle cx="386" cy="76" r="7" fill="#0EA5E9" stroke="#141836"/><circle cx="410" cy="96" r="7" fill="#EC4899" stroke="#141836"/>
      <rect x="86" y="226" width="146" height="44" rx="6" fill="#D1FAE5" stroke="#047857" stroke-width="2"/><text x="159" y="252" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">80% FLASH (0.2s)</text>
      <rect x="528" y="226" width="156" height="44" rx="6" fill="#FCE7F3" stroke="#EC4899" stroke-width="2" stroke-dasharray="5 3"/><text x="606" y="252" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">20% REASONING</text>`
  },
  {
    id: 'kanban',
    short: '8. Bento Board',
    name: '8. Isometric Floating Bento Board',
    domain: 'Executive + OS',
    recipe: 'Draw one large flat 2-over-1-up baseplate, then float 3 smaller isometric tiles 1 dot above it casting sharp Cool Grey shadows directly onto the board.',
    wire: `
      <g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
        <polygon points="380,54 610,169 380,284 150,169"/>
        <polygon points="380,76 462,117 380,158 298,117" stroke="#EC4899"/>
      </g>`,
    ink: `
      <polygon points="380,60 604,172 380,284 156,172" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <polygon points="156,172 380,284 380,296 156,184" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="604,172 380,284 380,296 604,184" fill="#94A3B8" stroke="#141836" stroke-width="2"/>
      <!-- 3 Floating Cards + Ground Cast Shadows -->
      <polygon points="380,104 452,140 380,176 308,140" fill="#94A3B8" fill-opacity="0.4"/>
      <polygon points="380,86 452,122 380,158 308,122" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="282,154 354,190 282,226 210,190" fill="#94A3B8" fill-opacity="0.4"/>
      <polygon points="282,136 354,172 282,208 210,172" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="478,154 550,190 478,226 406,190" fill="#94A3B8" fill-opacity="0.4"/>
      <polygon points="478,136 550,172 478,208 406,172" fill="#FFF" stroke="#141836" stroke-width="2.2"/>`,
    color: `
      <polygon points="380,86 452,122 380,158 308,122" fill="#0EA5E9" fill-opacity="0.28"/>
      <polygon points="282,136 354,172 282,208 210,172" fill="#EC4899" fill-opacity="0.24"/>
      <polygon points="478,136 550,172 478,208 406,172" fill="#10B981" fill-opacity="0.28"/>
      <text x="380" y="126" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">TRIAGE</text>
      <text x="282" y="176" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">AUDIT</text>
      <text x="478" y="176" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">SHIP ✓</text>`
  },
  {
    id: 'factory',
    short: '9. AI Conveyor',
    name: '9. Isometric AI Triage Conveyor Factory',
    domain: 'AI/Tech',
    recipe: 'Pull a long 2-over-1-up angled conveyor ribbon through an arched Cyan optical scanner portal, dropping glowing packet cubes onto Mint & Magenta output chutes.',
    wire: `
      <g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
        <polygon points="104,202 528,62 604,100 180,240"/>
        <path d="M 304 128 V 52 L 420 110 V 186" stroke="#EC4899"/>
      </g>`,
    ink: `
      <!-- Long Angled Conveyor Belt -->
      <polygon points="106,204 516,66 592,104 182,242" fill="#E2E8F0" stroke="#141836" stroke-width="2.4"/>
      <polygon points="182,242 592,104 592,124 182,262" fill="#64748B" stroke="#141836" stroke-width="2.2"/>
      <polygon points="106,204 182,242 182,262 106,224" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/>
      <!-- Scanner Portal Arch -->
      <polygon points="310,132 310,56 336,46 336,122" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="310,56 416,108 442,98 336,46" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="416,108 442,98 442,174 416,184" fill="#94A3B8" stroke="#141836" stroke-width="2"/>
      <!-- 3 Isometric Packet Cubes Moving Along Belt -->
      <polygon points="214,178 242,192 214,206 186,192" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
      <polygon points="186,192 214,206 214,224 186,210" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>
      <polygon points="242,192 214,206 214,224 242,210" fill="#94A3B8" stroke="#141836" stroke-width="1.8"/>

      <polygon points="486,88 514,102 486,116 458,102" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
      <polygon points="458,102 486,116 486,134 458,120" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>
      <polygon points="514,102 486,116 486,134 514,120" fill="#94A3B8" stroke="#141836" stroke-width="1.8"/>`,
    color: `
      <polygon points="310,56 416,108 442,98 336,46" fill="#0EA5E9" fill-opacity="0.34"/>
      <polygon points="330,86 410,126 392,162 312,122" fill="#00D4FF" fill-opacity="0.18"/>
      <polygon points="214,178 242,192 214,206 186,192" fill="#F59E0B" fill-opacity="0.5"/>
      <polygon points="486,88 514,102 486,116 458,102" fill="#10B981" fill-opacity="0.52"/>
      <text x="380" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0EA5E9">FLASH TRIAGE SCANNER ARCH (0.2s)</text>
      <text x="164" y="284" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#B45309">RAW CLIENT EMAILS</text>
      <text x="600" y="156" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">VALIDATED JSON ✓</text>`
  },
  {
    id: 'vault',
    short: '10. Laser Vault',
    name: '10. Isometric Glass Security Vault',
    domain: 'Tax + Governance',
    recipe: 'Draw a large dashed translucent outer cube representing the zero-trust airlock, suspend a bold Mint ledger core dead-center, and lace 2 Magenta laser beams across the inner rim.',
    wire: `
      <g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
        <polygon points="380,30 512,96 380,162 248,96"/>
        <path d="M 248 96 V 222 L 380 288 L 512 222 V 96 M 380 162 V 288"/>
      </g>`,
    ink: `
      <!-- Back Glass Planes -->
      <polygon points="380,156 512,222 380,288 248,222" fill="#F0FAFF" stroke="#0EA5E9" stroke-width="1.6" stroke-dasharray="5 3"/>
      <!-- Inner Protected Core Cube -->
      <polygon points="380,236 446,236 468,210 426,210" fill="#94A3B8" fill-opacity="0.36"/>
      <polygon points="380,118 434,145 380,172 326,145" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <polygon points="326,145 380,172 380,224 326,197" fill="#CBD5E1" stroke="#141836" stroke-width="2.4"/>
      <polygon points="434,145 380,172 380,224 434,197" fill="#64748B" stroke="#141836" stroke-width="2.4"/>
      <!-- Translucent Outer Containment Cage -->
      <polygon points="380,30 512,96 380,162 248,96" fill="#0EA5E9" fill-opacity="0.08" stroke="#141836" stroke-width="2.2"/>
      <path d="M 248 96 V 222 L 380 288 L 512 222 V 96 M 380 162 V 288" fill="none" stroke="#141836" stroke-width="2"/>`,
    color: `
      <polygon points="380,118 434,145 380,172 326,145" fill="#10B981" fill-opacity="0.45"/>
      <line x1="256" y1="142" x2="504" y2="180" stroke="#EC4899" stroke-width="2.4" stroke-dasharray="8 4"/>
      <line x1="504" y1="142" x2="256" y2="180" stroke="#EC4899" stroke-width="2.4" stroke-dasharray="8 4"/>
      <text x="380" y="150" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">WRITE KEYS</text>
      <text x="140" y="158" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">HITL LASER GATE</text>
      <text x="620" y="158" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0EA5E9">READ-ONLY GLASS</text>`
  },
  {
    id: 'satzArch',
    short: '11. Satzklammer',
    name: '11. Isometric German Satzklammer Towers',
    domain: 'Deutsch B1/B2',
    recipe: 'Build two sturdy isometric towers at opposite ends of a 2-over-1-up courtyard (Left Tower = V2 conjugated verb, Right Tower = final verb/prefix) linked by a glowing Violet overhead span.',
    wire: `
      <g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
        <polygon points="380,118 596,226 380,298 164,190"/>
        <rect x="210" y="66" width="76" height="124" stroke="#0EA5E9"/>
        <rect x="476" y="114" width="76" height="124" stroke="#EC4899"/>
      </g>`,
    ink: `
      <!-- Courtyard Base -->
      <polygon points="380,140 598,218 380,296 162,218" fill="#FFFDF5" stroke="#141836" stroke-width="2"/>
      <!-- Left Tower: V2 Conjugated Verb -->
      <polygon points="244,58 294,83 244,108 194,83" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="194,83 244,108 244,218 194,193" fill="#E2E8F0" stroke="#141836" stroke-width="2.2"/>
      <polygon points="294,83 244,108 244,218 294,193" fill="#94A3B8" stroke="#141836" stroke-width="2.2"/>
      <!-- Right Tower: Verb-Ende -->
      <polygon points="516,104 566,129 516,154 466,129" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="466,129 516,154 516,256 466,231" fill="#E2E8F0" stroke="#141836" stroke-width="2.2"/>
      <polygon points="566,129 516,154 516,256 566,231" fill="#64748B" stroke="#141836" stroke-width="2.2"/>
      <!-- Mittelfeld Stepping Tiles -->
      <polygon points="380,192 436,216 380,240 324,216" fill="#EEF2FC" stroke="#141836" stroke-width="1.8"/>`,
    color: `
      <polygon points="244,58 294,83 244,108 194,83" fill="#0EA5E9" fill-opacity="0.4"/>
      <polygon points="516,104 566,129 516,154 466,129" fill="#EC4899" fill-opacity="0.38"/>
      <path d="M 244 58 Q 390 -2 516 104" fill="none" stroke="#7C3AED" stroke-width="4" stroke-dasharray="7 4"/>
      <text x="244" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0369A1">[ muss</text>
      <text x="516" y="134" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">abgeben ]</text>
      <text x="380" y="220" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" font-weight="700">ich die Steuer</text>
      <text x="386" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#7C3AED">DIE SATZKLAMMER (V2 ↔ VERB-ENDE)</text>`
  },
  {
    id: 'campus',
    short: '12. Microservice City',
    name: '12. Isometric Microservices Campus Grid',
    domain: 'AI/Tech + Systems',
    recipe: 'Divide one big 2-over-1-up city block into 4 quadrants separated by Cyan fiber roads, then extrude 4 buildings of varying heights to represent Intake, Reasoning, HITL, and Storage.',
    wire: `
      <g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
        <polygon points="380,58 616,176 380,294 144,176"/>
        <line x1="262" y1="117" x2="498" y2="235"/><line x1="498" y1="117" x2="262" y2="235"/>
      </g>`,
    ink: `
      <!-- Campus Floor Plate -->
      <polygon points="380,68 616,186 380,304 144,186" fill="#F8FAFC" stroke="#141836" stroke-width="2.2"/>
      <line x1="262" y1="127" x2="498" y2="245" stroke="#0EA5E9" stroke-width="5" opacity="0.4"/>
      <line x1="498" y1="127" x2="262" y2="245" stroke="#0EA5E9" stroke-width="5" opacity="0.4"/>
      <!-- Building 1 (Top: Intake) -->
      <polygon points="380,46 426,69 380,92 334,69" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <polygon points="334,69 380,92 380,144 334,121" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="426,69 380,92 380,144 426,121" fill="#64748B" stroke="#141836" stroke-width="2"/>
      <!-- Building 2 (Left: Reasoning Tower — Tallest) -->
      <polygon points="266,76 312,99 266,122 220,99" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <polygon points="220,99 266,122 266,198 220,175" fill="#E2E8F0" stroke="#141836" stroke-width="2"/>
      <polygon points="312,99 266,122 266,198 312,175" fill="#64748B" stroke="#141836" stroke-width="2"/>
      <!-- Building 3 (Right: HITL Gatehouse) -->
      <polygon points="494,116 540,139 494,162 448,139" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <polygon points="448,139 494,162 494,198 448,175" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="540,139 494,162 494,198 540,175" fill="#94A3B8" stroke="#141836" stroke-width="2"/>
      <!-- Building 4 (Bottom: MCP DB Cylinder) -->
      <path d="M 344 198 V 248 A 36 14 0 0 0 416 248 V 198" fill="#E2E8F0" stroke="#141836" stroke-width="2.2"/>
      <ellipse cx="380" cy="198" rx="36" ry="14" fill="#FFF" stroke="#141836" stroke-width="2.2"/>`,
    color: `
      <polygon points="380,46 426,69 380,92 334,69" fill="#0EA5E9" fill-opacity="0.35"/>
      <polygon points="266,76 312,99 266,122 220,99" fill="#EC4899" fill-opacity="0.35"/>
      <polygon points="494,116 540,139 494,162 448,139" fill="#F59E0B" fill-opacity="0.4"/>
      <ellipse cx="380" cy="198" rx="36" ry="14" fill="#10B981" fill-opacity="0.38"/>
      <g font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" text-anchor="middle">
        <text x="380" y="34" fill="#0EA5E9">INTAKE API</text>
        <text x="166" y="106" fill="#BE185D">REASONING</text>
        <text x="588" y="142" fill="#B45309">HITL GATE</text>
        <text x="380" y="284" fill="#047857">MCP DATABASE</text>
      </g>`
  },
  {
    id: 'legoblocks',
    short: '13. Lego Bricks',
    name: '13. Isometric Modular Lego Bricks',
    domain: 'Deutsch + Composable AI',
    recipe: 'Stack three 2-over-1-up bricks vertically with 1-dot gaps + 2 oval studs on top of each brick—perfect for German Komposita (Umsatz + Steuer + Bescheid) or modular AI skills!',
    wire: `<g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
      <polygon points="380,44 460,84 380,124 300,84"/><polygon points="380,126 460,166 380,206 300,166"/><polygon points="380,208 460,248 380,288 300,248"/>
    </g>`,
    ink: `
      ${[200, 122, 44].map(y => `
        <polygon points="380,${y} 458,${y+38} 380,${y+76} 302,${y+38}" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
        <polygon points="302,${y+38} 380,${y+76} 380,${y+98} 302,${y+60}" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
        <polygon points="458,${y+38} 380,${y+76} 380,${y+98} 458,${y+60}" fill="#64748B" stroke="#141836" stroke-width="2"/>
        <ellipse cx="352" cy="${y+32}" rx="13" ry="6" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
        <ellipse cx="408" cy="${y+32}" rx="13" ry="6" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
      `).join('')}`,
    color: `
      <polygon points="380,44 458,82 380,120 302,82" fill="#EC4899" fill-opacity="0.34"/>
      <polygon points="380,122 458,160 380,198 302,160" fill="#0EA5E9" fill-opacity="0.34"/>
      <polygon points="380,200 458,238 380,276 302,238" fill="#10B981" fill-opacity="0.34"/>
      <g font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">
        <text x="516" y="88" fill="#BE185D">← UMSATZ (Turnover)</text>
        <text x="516" y="166" fill="#0EA5E9">← STEUER (Tax)</text>
        <text x="516" y="244" fill="#047857">← BESCHEID (der • Ruling)</text>
      </g>`
  },
  {
    id: 'radar',
    short: '14. Radar Array',
    name: '14. Isometric Signal Radar & Monitoring Dish',
    domain: 'AI/Tech + Compliance',
    recipe: 'Set an isometric pedestal base supporting an angled parabolic ellipse dish emitting 3 concentric Cyan signal arcs—ideal for monitoring statutory updates or API telemetry.',
    wire: `<g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
      <polygon points="320,180 400,220 320,260 240,220"/><ellipse cx="340" cy="116" rx="54" ry="26" transform="rotate(-32 340 116)"/>
    </g>`,
    ink: `
      <polygon points="320,188 404,230 320,272 236,230" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="236,230 320,272 320,292 236,250" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="404,230 320,272 320,292 404,250" fill="#64748B" stroke="#141836" stroke-width="2"/>
      <path d="M 304 226 L 320 144 L 338 226" fill="#CBD5E1" stroke="#141836" stroke-width="2.2"/>
      <path d="M 284 128 Q 312 184 388 122" fill="#94A3B8" stroke="#141836" stroke-width="2.4"/>
      <ellipse cx="336" cy="122" rx="58" ry="22" transform="rotate(-24 336 122)" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <line x1="336" y1="122" x2="366" y2="86" stroke="#141836" stroke-width="2.6"/><circle cx="368" cy="84" r="5" fill="#141836"/>`,
    color: `
      <ellipse cx="336" cy="122" rx="50" ry="17" transform="rotate(-24 336 122)" fill="#0EA5E9" fill-opacity="0.24"/>
      <circle cx="368" cy="84" r="6" fill="#EC4899" stroke="#141836" stroke-width="1.6"/>
      <path d="M 392 64 A 36 36 0 0 1 414 102" fill="none" stroke="#0EA5E9" stroke-width="3" stroke-linecap="round"/>
      <path d="M 412 46 A 60 60 0 0 1 446 112" fill="none" stroke="#0EA5E9" stroke-width="2.6" stroke-dasharray="6 4"/>
      <path d="M 434 30 A 84 84 0 0 1 478 120" fill="none" stroke="#10B981" stroke-width="2.2" stroke-dasharray="5 5"/>
      <text x="530" y="76" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0EA5E9">LIVE EU VAT &amp; API TELEMETRY</text>
      <text x="530" y="98" font-family="Patrick Hand, cursive" font-size="15">Detects rule changes before filing!</text>`
  },
  {
    id: 'ragshelf',
    short: '15. RAG Knowledge Shelf',
    name: '15. Isometric RAG Knowledge Monolith',
    domain: 'AI/Tech + TaxWiki',
    recipe: 'Extrude a tall vertical isometric bookshelf with 3 recessed horizontal cubbies holding color-coded memory cubes (Statutes, Client Precedents, German Glossaries).',
    wire: `<g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
      <polygon points="380,30 472,76 380,122 288,76"/><path d="M 288 76 V 248 L 380 294 L 472 248 V 76 M 380 122 V 294"/>
    </g>`,
    ink: `
      <polygon points="380,32 472,78 380,124 288,78" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <polygon points="288,78 380,124 380,290 288,244" fill="#EEF2FC" stroke="#141836" stroke-width="2.4"/>
      <polygon points="472,78 380,124 380,290 472,244" fill="#64748B" stroke="#141836" stroke-width="2.4"/>
      <path d="M 288 134 L 380 180 M 288 190 L 380 236" stroke="#141836" stroke-width="2.2"/>`,
    color: `
      <!-- Slotted Colored Knowledge Blocks inside Shelves -->
      <polygon points="300,104 334,121 334,152 300,135" fill="#0EA5E9" fill-opacity="0.45" stroke="#141836" stroke-width="1.6"/>
      <polygon points="342,125 370,139 370,170 342,156" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="1.6"/>
      <polygon points="300,158 340,178 340,210 300,190" fill="#EC4899" fill-opacity="0.4" stroke="#141836" stroke-width="1.6"/>
      <polygon points="300,214 366,247 366,276 300,243" fill="#10B981" fill-opacity="0.42" stroke="#141836" stroke-width="1.6"/>
      <g font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">
        <text x="150" y="128" fill="#0EA5E9">TIER 1 // EU DIRECTIVES</text>
        <text x="150" y="186" fill="#BE185D">TIER 2 // AUDIT CASES</text>
        <text x="150" y="242" fill="#047857">TIER 3 // TAXWIKI NOTES</text>
      </g>`
  },
  {
    id: 'seesaw',
    short: '16. 3D Balance Beam',
    name: '16. Isometric Tradeoff Balance Beam',
    domain: 'Strategy + Tax',
    recipe: 'Place a triangular isometric prism fulcrum dead-center and rest a tilted 3D plank across it—heavy Magenta block on the left vs. sleek Mint copilot cube lifting high on the right!',
    wire: `<g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
      <polygon points="380,180 426,258 334,258"/><line x1="176" y1="218" x2="584" y2="112" stroke="#EC4899"/>
    </g>`,
    ink: `
      <!-- Fulcrum Prism -->
      <polygon points="380,172 424,256 336,256" fill="#CBD5E1" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>
      <polygon points="380,172 444,244 424,256" fill="#64748B" stroke="#141836" stroke-width="2"/>
      <!-- Tilted Isometric Plank -->
      <polygon points="164,204 548,108 592,130 208,226" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <polygon points="208,226 592,130 592,144 208,240" fill="#94A3B8" stroke="#141836" stroke-width="2"/>
      <!-- Left Heavy Cube -->
      <polygon points="230,118 282,144 230,170 178,144" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <polygon points="178,144 230,170 230,208 178,182" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="282,144 230,170 230,208 282,182" fill="#64748B" stroke="#141836" stroke-width="2"/>
      <!-- Right Light Cube -->
      <polygon points="528,74 558,89 528,104 498,89" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <polygon points="498,89 528,104 528,126 498,111" fill="#E2E8F0" stroke="#141836" stroke-width="2"/>
      <polygon points="558,89 528,104 528,126 558,111" fill="#94A3B8" stroke="#141836" stroke-width="2"/>`,
    color: `
      <polygon points="230,118 282,144 230,170 178,144" fill="#EC4899" fill-opacity="0.38"/>
      <polygon points="528,74 558,89 528,104 498,89" fill="#10B981" fill-opacity="0.45"/>
      <text x="230" y="104" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">MANUAL WORK (48s / €0.88)</text>
      <text x="528" y="60" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">COPILOT (1.2s / €0.04)</text>`
  },
  {
    id: 'domino3d',
    short: '17. Domino Chain',
    name: '17. Isometric Cascading Domino Chain',
    domain: 'Tax + Systems',
    recipe: 'Align 4 thin 2-over-1-up slabs along a diagonal floor track, tilting the first 3 slabs forward progressively to visualize cascading tax penalties or leverage points.',
    wire: `<g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
      <line x1="120" y1="244" x2="640" y2="124"/>
      <rect x="170" y="110" width="54" height="120"/><rect x="310" y="90" width="54" height="120"/><rect x="450" y="70" width="54" height="120"/>
    </g>`,
    ink: `
      <polygon points="104,234 574,106 660,148 190,276" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="5 3"/>
      ${[
        [186, 152, 24, '#F59E0B', '1. €10k'],
        [302, 126, 18, '#0EA5E9', '2. OSS'],
        [418, 102, 10, '#EC4899', '3. RATE'],
        [534, 82, 0, '#10B981', '4. FILED']
      ].map(([x, y, ang]) => `
        <g transform="rotate(${ang} ${x} ${y+84})">
          <polygon points="${x},${y} ${x+34},${y+16} ${x+34},${y+98} ${x},${y+82}" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
          <polygon points="${x+34},${y+16} ${x+50},${y+8} ${x+50},${y+90} ${x+34},${y+98}" fill="#64748B" stroke="#141836" stroke-width="2"/>
          <polygon points="${x},${y} ${x+16},${y-8} ${x+50},${y+8} ${x+34},${y+16}" fill="#E2E8F0" stroke="#141836" stroke-width="2"/>
        </g>`).join('')}`,
    color: `
      ${[
        [186, 152, 24, '#F59E0B', 'TRIGGER'],
        [302, 126, 18, '#0EA5E9', 'TRIAGE'],
        [418, 102, 10, '#EC4899', 'HITL'],
        [534, 82, 0, '#10B981', 'COMMIT ✓']
      ].map(([x, y, ang, col, lbl]) => `
        <g transform="rotate(${ang} ${x} ${y+84})">
          <polygon points="${x},${y} ${x+34},${y+16} ${x+34},${y+98} ${x},${y+82}" fill="${col}" fill-opacity="0.28"/>
        </g>
        <text x="${x+24}" y="${y-18}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">${lbl}</text>`).join('')}`
  },
  {
    id: 'garden',
    short: '18. Digital Garden',
    name: '18. Isometric Digital Garden Terrarium',
    domain: 'TaxWiki + Deutsch',
    recipe: 'Draw a translucent isometric glass cube with a soil-base slab inside, growing a geometric Mint/Cyan cyber-bonsai tree—the ultimate visual metaphor for a living wiki or language journal.',
    wire: `<g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
      <polygon points="380,34 504,96 380,158 256,96"/><path d="M 256 96 V 222 L 380 284 L 504 222 V 96 M 380 158 V 284"/>
    </g>`,
    ink: `
      <!-- Soil Base inside Terrarium -->
      <polygon points="380,192 486,244 380,278 274,244" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>
      <!-- Bonsai Trunk & Layered Isometric Canopy -->
      <path d="M 380 232 V 146 M 380 184 L 340 158 M 380 172 L 424 148" fill="none" stroke="#141836" stroke-width="5" stroke-linecap="round"/>
      <polygon points="380,82 444,114 380,146 316,114" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="338,128 380,149 338,170 296,149" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <polygon points="424,122 466,143 424,164 382,143" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <!-- Outer Glass Cube -->
      <polygon points="380,34 504,96 380,158 256,96" fill="#0EA5E9" fill-opacity="0.06" stroke="#141836" stroke-width="2.2"/>
      <path d="M 256 96 V 222 L 380 284 L 504 222 V 96 M 380 158 V 284" fill="none" stroke="#141836" stroke-width="2"/>`,
    color: `
      <polygon points="380,82 444,114 380,146 316,114" fill="#10B981" fill-opacity="0.45"/>
      <polygon points="338,128 380,149 338,170 296,149" fill="#0EA5E9" fill-opacity="0.38"/>
      <polygon points="424,122 466,143 424,164 382,143" fill="#10B981" fill-opacity="0.38"/>
      <circle cx="364" cy="112" r="4" fill="#EC4899"/><circle cx="404" cy="116" r="4" fill="#F59E0B"/>
      <line x1="274" y1="126" x2="296" y2="104" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
      <text x="598" y="128" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">LIVING TAXWIKI</text>
      <text x="598" y="150" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">Compound knowledge daily!</text>`
  },
  {
    id: 'console',
    short: '19. Cyber Console',
    name: '19. Isometric AI Orchestrator Command Console',
    domain: 'AI/Tech',
    recipe: 'Extrude a retro slanted CRT monitor block sitting atop an angled control deck studded with Cyan/Magenta arcade buttons and an isometric joystick.',
    wire: `<g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
      <polygon points="380,46 490,101 380,156 270,101"/><polygon points="270,174 380,229 490,174 380,119" stroke="#EC4899"/>
    </g>`,
    ink: `
      <!-- Lower Console Desk Deck -->
      <polygon points="380,142 520,212 380,282 240,212" fill="#E2E8F0" stroke="#141836" stroke-width="2.4"/>
      <polygon points="240,212 380,282 380,300 240,230" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <polygon points="520,212 380,282 380,300 520,230" fill="#64748B" stroke="#141836" stroke-width="2"/>
      <!-- Upper CRT Monitor Cabinet -->
      <polygon points="380,38 474,85 380,132 286,85" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <polygon points="286,85 380,132 380,206 286,159" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>
      <polygon points="474,85 380,132 380,206 474,159" fill="#64748B" stroke="#141836" stroke-width="2.2"/>
      <!-- Recessed Screen -->
      <polygon points="296,100 370,137 370,192 296,155" fill="#141836"/>`,
    color: `
      <polygon points="300,106 366,139 366,186 300,153" fill="#0EA5E9" fill-opacity="0.32"/>
      <polyline points="308,144 328,136 344,154 360,144" fill="none" stroke="#00D4FF" stroke-width="2.4"/>
      <!-- Arcade Buttons & Joystick on Deck -->
      <ellipse cx="422" cy="226" rx="12" ry="6" fill="#10B981" stroke="#141836" stroke-width="1.6"/>
      <ellipse cx="456" cy="210" rx="12" ry="6" fill="#EC4899" stroke="#141836" stroke-width="1.6"/>
      <line x1="336" y1="226" x2="336" y2="196" stroke="#141836" stroke-width="4"/><circle cx="336" cy="192" r="9" fill="#F59E0B" stroke="#141836" stroke-width="2"/>
      <text x="596" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0EA5E9">AGENT CONTROL DECK</text>
      <text x="596" y="136" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">Human-in-the-Loop Override!</text>`
  },
  {
    id: 'lighthouse3d',
    short: '20. 3D Lighthouse',
    name: '20. Isometric Beacon Lighthouse Island',
    domain: 'Strategy + Clarity',
    recipe: 'Stack a tapered cylinder lighthouse on a 2-over-1-up island cliff and sweep a translucent Amber cone beam outward across the dot grid to spotlight 2 key goals.',
    wire: `<g fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3">
      <polygon points="256,214 352,256 256,298 160,256"/><path d="M 228 242 L 240 88 H 272 L 284 242"/>
    </g>`,
    ink: `
      <!-- Island Platform -->
      <polygon points="256,212 356,256 256,300 156,256" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/>
      <polygon points="156,256 256,300 256,312 156,268" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/>
      <polygon points="356,256 256,300 256,312 356,268" fill="#64748B" stroke="#141836" stroke-width="1.8"/>
      <!-- Tapered Lighthouse Tower -->
      <path d="M 224 246 L 238 98 H 274 L 288 246 A 32 10 0 0 1 224 246 Z" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <rect x="236" y="70" width="40" height="28" rx="3" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/>
      <polygon points="228,70 256,42 284,70" fill="#141836"/>`,
    color: `
      <polygon points="233,152 279,152 283,184 229,184" fill="#EC4899" fill-opacity="0.45"/>
      <polygon points="276,72 678,24 678,166 276,96" fill="#F59E0B" fill-opacity="0.22"/>
      <polygon points="564,66 624,96 564,126 504,96" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <text x="564" y="100" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">CLEAR GOAL ★</text>
      <text x="256" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#B45309">SEMANTIC CLARITY BEACON</text>`
  }
];

export function renderIsoGalleryHTML() {
  return `
    <div class="lab cyan-accent" id="iso-gallery-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Studio // 20-Piece Isometric Illustration Library &amp; Step Builder</span>
        <span class="pill cyan">Wireframe → 05 Ink → Cyber Glaze</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl" style="gap:8px;">
          <div class="segmented" role="group">
            ${ISO_OBJECTS.map((o, idx) => `<button class="seg-btn isog-obj ${idx===0?'active':''}" data-i="${idx}">${o.short}</button>`).join('')}
          </div>
        </div>
        <div class="lab-ctrl" style="background:#FFF;">
          <div class="segmented" role="group">
            <button class="seg-btn isog-st" data-s="1">Stage 1: 2-Over-1-Up Wireframe</button>
            <button class="seg-btn isog-st" data-s="2">Stage 2: 05 Ink &amp; AO Shadows</button>
            <button class="seg-btn isog-st active" data-s="3">Stage 3: Full Cyber Glaze + White Pop</button>
          </div>
          <label class="chk-lbl"><input id="isog-wire-chk" type="checkbox" /> Keep Ghost Grid Visible</label>
        </div>
        <div class="svg-box"><svg id="isog-svg" viewBox="0 0 760 315"></svg></div>
        <div id="isog-cap" class="lab-cap"></div>
      </div>
    </div>
  `;
}

export function initIsoGallery() {
  const lab = document.getElementById('iso-gallery-lab');
  if (!lab) return;

  let activeIdx = 0;
  let stage = 3;

  const render = () => {
    const obj = ISO_OBJECTS[activeIdx];
    const keepWire = document.getElementById('isog-wire-chk').checked;
    let markup = '';
    if (stage === 1 || keepWire) markup += obj.wire;
    if (stage >= 2) markup += obj.ink;
    if (stage >= 3) markup += obj.color;
    document.getElementById('isog-svg').innerHTML = markup;
    document.getElementById('isog-cap').innerHTML = `<strong>${obj.name}</strong> <span class="pill violet" style="margin-left:6px;">${obj.domain}</span><br/><strong>Dot-Grid Drawing Recipe:</strong> ${obj.recipe}`;
  };

  lab.querySelectorAll('.isog-obj').forEach(b => b.addEventListener('click', () => {
    activeIdx = Number(b.dataset.i);
    lab.querySelectorAll('.isog-obj').forEach(x => x.classList.toggle('active', x === b));
    render();
  }));
  lab.querySelectorAll('.isog-st').forEach(b => b.addEventListener('click', () => {
    stage = Number(b.dataset.s);
    lab.querySelectorAll('.isog-st').forEach(x => x.classList.toggle('active', x === b));
    render();
  }));
  document.getElementById('isog-wire-chk').addEventListener('change', render);
  render();
}
