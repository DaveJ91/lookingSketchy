/* =========================================================================
   24 TEN-SECOND VISUAL VOCABULARY ICONS WITH STEP-BY-STEP STROKE ORDER
   Categories: tech (AI/Tech), sys (Systems), biz (Tax/Advisory), ppl (Deutsch/People)
   ========================================================================= */
export const ICONS_24 = [
  // TECH / AI (1–6)
  {
    id: 1, cat: 'tech', name: '1. Trigger', tip: 'Envelope + bolt',
    strokes: [
      { label: 'Draw 3×2 dot rectangle body', svg: '<rect x="8" y="18" width="36" height="24" rx="3" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { label: 'Add V-flap crease', svg: '<polyline points="10,20 26,32 42,20" fill="none" stroke="#141836" stroke-width="1.8"/>' },
      { label: 'Snap Amber lightning bolt at top-right', svg: '<polygon points="50,8 42,24 49,24 45,36 56,19 49,19" fill="#F59E0B" stroke="#141836" stroke-width="1.3"/>' }
    ]
  },
  {
    id: 2, cat: 'tech', name: '2. API Plug', tip: 'Prongs + cable',
    strokes: [
      { label: 'Draw rounded Cyan plug head', svg: '<rect x="18" y="20" width="24" height="16" rx="4" fill="#0EA5E9" fill-opacity="0.28" stroke="#141836" stroke-width="2"/>' },
      { label: 'Add two vertical prongs on top', svg: '<path d="M 24 10 V 20 M 36 10 V 20" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>' },
      { label: 'Pull center cable straight down', svg: '<line x1="30" y1="36" x2="30" y2="48" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 3, cat: 'tech', name: '3. Database', tip: 'Cylinder + 2 bands',
    strokes: [
      { label: 'Draw flat top ellipse', svg: '<ellipse cx="30" cy="16" rx="16" ry="6" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { label: 'Drop vertical walls & rounder bottom arc', svg: '<path d="M 14 16 V 42 A 16 6 0 0 0 46 42 V 16" fill="#0EA5E9" fill-opacity="0.22" stroke="#141836" stroke-width="2"/>' },
      { label: 'Add middle platter curve', svg: '<path d="M 14 29 A 16 6 0 0 0 46 29" fill="none" stroke="#141836" stroke-width="1.6"/>' }
    ]
  },
  {
    id: 4, cat: 'tech', name: '4. Cloud / LLM', tip: 'Flat base + 3 arches',
    strokes: [
      { label: 'Draw flat base line', svg: '<line x1="15" y1="42" x2="46" y2="42" stroke="#141836" stroke-width="2.2"/>' },
      { label: 'Loop 3 overlapping top puffs', svg: '<path d="M 16 42 H 46 A 9 9 0 0 0 46 25 A 13 13 0 0 0 21 21 A 8 8 0 0 0 16 42 Z" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>' },
      { label: 'Add 2 tiny neural spark dots inside', svg: '<circle cx="26" cy="31" r="2.2" fill="#0EA5E9"/><circle cx="37" cy="31" r="2.2" fill="#EC4899"/><line x1="28" y1="31" x2="35" y2="31" stroke="#141836" stroke-width="1.2"/>' }
    ]
  },
  {
    id: 5, cat: 'tech', name: '5. MCP Tool', tip: 'Shaft + hex head',
    strokes: [
      { label: 'Draw bold 45° wrench shaft', svg: '<line x1="16" y1="44" x2="36" y2="24" stroke="#141836" stroke-width="4.2" stroke-linecap="round"/>' },
      { label: 'Add Mint circular head', svg: '<circle cx="42" cy="18" r="9" fill="#10B981" fill-opacity="0.35" stroke="#141836" stroke-width="2"/>' },
      { label: 'Notch white U-mouth at top-right', svg: '<polygon points="42,18 52,10 52,20" fill="#FFF" stroke="#141836" stroke-width="1.4"/>' }
    ]
  },
  {
    id: 6, cat: 'tech', name: '6. Code / Prompt', tip: 'Chevrons + slash',
    strokes: [
      { label: 'Draw left angle bracket <', svg: '<polyline points="22,18 12,28 22,38" fill="none" stroke="#141836" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' },
      { label: 'Draw right angle bracket >', svg: '<polyline points="38,18 48,28 38,38" fill="none" stroke="#141836" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' },
      { label: 'Slice center Cyan forward slash /', svg: '<line x1="33" y1="15" x2="27" y2="41" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>' }
    ]
  },

  // SYSTEMS (7–12)
  {
    id: 7, cat: 'sys', name: '7. Firewall', tip: 'Box + staggered bricks',
    strokes: [
      { label: 'Draw outer Magenta-tinted rectangle', svg: '<rect x="12" y="14" width="36" height="30" rx="3" fill="#EC4899" fill-opacity="0.16" stroke="#141836" stroke-width="2"/>' },
      { label: 'Divide into 3 horizontal courses', svg: '<path d="M 12 24 H 48 M 12 34 H 48" stroke="#141836" stroke-width="1.6"/>' },
      { label: 'Drop staggered vertical mortar joints', svg: '<path d="M 30 14 V 24 M 22 24 V 34 M 38 24 V 34 M 30 34 V 44" stroke="#141836" stroke-width="1.6"/>' }
    ]
  },
  {
    id: 8, cat: 'sys', name: '8. Triage Funnel', tip: 'Wide top + spout',
    strokes: [
      { label: 'Draw wide intake trapezoid', svg: '<polygon points="12,14 48,14 36,32 24,32" fill="#0EA5E9" fill-opacity="0.3" stroke="#141836" stroke-width="2"/>' },
      { label: 'Drop angled output spout', svg: '<polygon points="24,32 36,32 36,46 24,42" fill="#0EA5E9" fill-opacity="0.15" stroke="#141836" stroke-width="2"/>' },
      { label: 'Add 2 incoming dots at top', svg: '<circle cx="24" cy="9" r="2.2" fill="#EC4899"/><circle cx="36" cy="9" r="2.2" fill="#10B981"/>' }
    ]
  },
  {
    id: 9, cat: 'sys', name: '9. Padlock', tip: 'U-shackle + body',
    strokes: [
      { label: 'Draw rounded Mint lock body', svg: '<rect x="15" y="26" width="30" height="20" rx="4" fill="#10B981" fill-opacity="0.28" stroke="#141836" stroke-width="2"/>' },
      { label: 'Arch U-shackle over top', svg: '<path d="M 21 26 V 18 C 21 11 39 11 39 18 V 26" fill="none" stroke="#141836" stroke-width="2.4"/>' },
      { label: 'Drop keyhole dot in center', svg: '<circle cx="30" cy="35" r="2.5" fill="#141836"/><line x1="30" y1="36" x2="30" y2="41" stroke="#141836" stroke-width="2"/>' }
    ]
  },
  {
    id: 10, cat: 'sys', name: '10. Sync Loop', tip: '2 opposite arcs',
    strokes: [
      { label: 'Sweep top Cyan clockwise arc', svg: '<path d="M 16 28 A 14 14 0 0 1 44 24" fill="none" stroke="#0EA5E9" stroke-width="2.6" stroke-linecap="round"/>' },
      { label: 'Sweep bottom Mint counter arc', svg: '<path d="M 44 32 A 14 14 0 0 1 16 36" fill="none" stroke="#10B981" stroke-width="2.6" stroke-linecap="round"/>' },
      { label: 'Snap tiny arrowheads on both ends', svg: '<polyline points="40,20 44,24 39,27" fill="none" stroke="#0EA5E9" stroke-width="2"/><polyline points="20,40 16,36 21,33" fill="none" stroke="#10B981" stroke-width="2"/>' }
    ]
  },
  {
    id: 11, cat: 'sys', name: '11. Latency', tip: 'Circle + crown + hands',
    strokes: [
      { label: 'Draw circular clock dial', svg: '<circle cx="30" cy="32" r="15" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { label: 'Add top stopwatch button', svg: '<path d="M 26 13 H 34 M 30 13 V 17" stroke="#141836" stroke-width="2.2" stroke-linecap="round"/>' },
      { label: 'Draw Magenta elapsed hands', svg: '<polyline points="30,22 30,32 39,36" fill="none" stroke="#EC4899" stroke-width="2.4" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 12, cat: 'sys', name: '12. Research', tip: 'Lens + bold handle',
    strokes: [
      { label: 'Draw Cyan-tinted circular lens', svg: '<circle cx="26" cy="24" r="12" fill="#0EA5E9" fill-opacity="0.2" stroke="#141836" stroke-width="2.2"/>' },
      { label: 'Add tiny curved glass glint inside', svg: '<path d="M 20 20 A 7 7 0 0 1 27 17" fill="none" stroke="#FFF" stroke-width="2.2" stroke-linecap="round"/>' },
      { label: 'Pull thick 45° Magenta handle', svg: '<line x1="35" y1="33" x2="48" y2="46" stroke="#EC4899" stroke-width="4" stroke-linecap="round"/>' }
    ]
  },

  // TAX / BUSINESS (13–18)
  {
    id: 13, cat: 'biz', name: '13. Statute (§)', tip: 'Open book + spine',
    strokes: [
      { label: 'Draw twin curved page arches', svg: '<path d="M 10 44 Q 20 38 30 44 Q 40 38 50 44 V 18 Q 40 12 30 18 Q 20 12 10 18 Z" fill="#7C3AED" fill-opacity="0.18" stroke="#141836" stroke-width="2"/>' },
      { label: 'Draw vertical center spine', svg: '<line x1="30" y1="18" x2="30" y2="44" stroke="#141836" stroke-width="1.8"/>' },
      { label: 'Add tiny § paragraph mark on right page', svg: '<text x="40" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#7C3AED">§</text>' }
    ]
  },
  {
    id: 14, cat: 'biz', name: '14. Tax / Euro', tip: 'Coin + € symbol',
    strokes: [
      { label: 'Draw Amber-washed coin circle', svg: '<circle cx="30" cy="30" r="16" fill="#F59E0B" fill-opacity="0.28" stroke="#141836" stroke-width="2"/>' },
      { label: 'Add dashed inner rim', svg: '<circle cx="30" cy="30" r="12" fill="none" stroke="#B45309" stroke-width="1" stroke-dasharray="3 2"/>' },
      { label: 'Write bold € symbol centered', svg: '<text x="30" y="36" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700" fill="#141836">€</text>' }
    ]
  },
  {
    id: 15, cat: 'biz', name: '15. Tax Memo', tip: 'Dog-ear page + 3 lines',
    strokes: [
      { label: 'Draw vertical page rectangle', svg: '<path d="M 16 10 H 36 L 44 18 V 50 H 16 Z" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { label: 'Fold top-right dog-ear corner', svg: '<polyline points="36,10 36,18 44,18" fill="none" stroke="#141836" stroke-width="1.6"/>' },
      { label: 'Swipe 3 horizontal text lines', svg: '<path d="M 21 25 H 38 M 21 33 H 38 M 21 41 H 32" stroke="#141836" stroke-width="2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 16, cat: 'biz', name: '16. Filing Due', tip: 'Calendar + header bar',
    strokes: [
      { label: 'Draw rounded square frame', svg: '<rect x="12" y="15" width="36" height="33" rx="4" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { label: 'Color Cyan top binding bar + 2 rings', svg: '<rect x="12" y="15" width="36" height="10" fill="#0EA5E9" fill-opacity="0.4" stroke="#141836" stroke-width="1.6"/><path d="M 21 10 V 17 M 39 10 V 17" stroke="#141836" stroke-width="2.4" stroke-linecap="round"/>' },
      { label: 'Mark due date X in Magenta', svg: '<text x="30" y="42" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#BE185D">10</text>' }
    ]
  },
  {
    id: 17, cat: 'biz', name: '17. Audit Risk', tip: 'Triangle + !',
    strokes: [
      { label: 'Draw equilateral triangle base & roof', svg: '<polygon points="30,10 50,46 10,46" fill="#EC4899" fill-opacity="0.2" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>' },
      { label: 'Draw vertical stem of !', svg: '<line x1="30" y1="22" x2="30" y2="34" stroke="#BE185D" stroke-width="3" stroke-linecap="round"/>' },
      { label: 'Dot the base of !', svg: '<circle cx="30" cy="40" r="2.2" fill="#BE185D"/>' }
    ]
  },
  {
    id: 18, cat: 'biz', name: '18. Ledger', tip: '2×3 grid + header',
    strokes: [
      { label: 'Draw outer horizontal rectangle', svg: '<rect x="12" y="14" width="36" height="32" rx="3" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { label: 'Shade top header band', svg: '<rect x="12" y="14" width="36" height="10" fill="#EEF2FC" stroke="#141836" stroke-width="1.6"/>' },
      { label: 'Draw column divider & row line', svg: '<path d="M 30 14 V 46 M 12 35 H 48" stroke="#141836" stroke-width="1.6"/>' }
    ]
  },

  // DEUTSCH & PEOPLE (19–24)
  {
    id: 19, cat: 'ppl', name: '19. Human / HITL', tip: 'Circle + shoulder arch',
    strokes: [
      { label: 'Draw circular head', svg: '<circle cx="30" cy="19" r="8" fill="#EC4899" fill-opacity="0.22" stroke="#141836" stroke-width="2"/>' },
      { label: 'Sweep curved shoulder arch below', svg: '<path d="M 14 46 C 14 33 46 33 46 46 Z" fill="#F59E0B" fill-opacity="0.22" stroke="#141836" stroke-width="2"/>' },
      { label: 'Add subtle collar notch', svg: '<polyline points="26,34 30,38 34,34" fill="none" stroke="#141836" stroke-width="1.4"/>' }
    ]
  },
  {
    id: 20, cat: 'ppl', name: '20. Insight', tip: 'Bulb + screw base',
    strokes: [
      { label: 'Draw glowing Amber bulb circle', svg: '<circle cx="30" cy="25" r="11" fill="#F59E0B" fill-opacity="0.34" stroke="#141836" stroke-width="2"/>' },
      { label: 'Add flat grey screw base', svg: '<rect x="25" y="37" width="10" height="7" rx="2" fill="#E2E8F0" stroke="#141836" stroke-width="1.8"/>' },
      { label: 'Flick 3 tiny light rays around top', svg: '<path d="M 30 8 V 11 M 15 16 L 18 18 M 45 16 L 42 18" stroke="#B45309" stroke-width="2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 21, cat: 'ppl', name: '21. Vocab Card', tip: 'Flashcard + der/die/das',
    strokes: [
      { label: 'Draw horizontal index card', svg: '<rect x="10" y="14" width="40" height="28" rx="4" fill="#FFF" stroke="#141836" stroke-width="2"/>' },
      { label: 'Add semantic color stripe on left edge', svg: '<rect x="10" y="14" width="8" height="28" rx="2" fill="#0EA5E9" fill-opacity="0.55" stroke="#141836" stroke-width="1.6"/>' },
      { label: 'Write compact article + noun line', svg: '<path d="M 23 24 H 44 M 23 33 H 38" stroke="#141836" stroke-width="2" stroke-linecap="round"/>' }
    ]
  },
  {
    id: 22, cat: 'ppl', name: '22. Dialog / Speech', tip: 'Bubble + pointer tail',
    strokes: [
      { label: 'Draw rounded bubble rectangle', svg: '<path d="M 14 14 H 46 V 36 H 26 L 16 44 L 18 36 H 14 Z" fill="#FFF" stroke="#141836" stroke-width="2" stroke-linejoin="round"/>' },
      { label: 'Add 3 spoken rhythm dots inside', svg: '<circle cx="23" cy="25" r="2.2" fill="#0EA5E9"/><circle cx="30" cy="25" r="2.2" fill="#7C3AED"/><circle cx="37" cy="25" r="2.2" fill="#EC4899"/>' }
    ]
  },
  {
    id: 23, cat: 'ppl', name: '23. Approved ✓', tip: 'Mint ring + bold check',
    strokes: [
      { label: 'Draw Mint circle badge', svg: '<circle cx="30" cy="30" r="15" fill="#10B981" fill-opacity="0.25" stroke="#047857" stroke-width="2.2"/>' },
      { label: 'Pull crisp downward-then-up check', svg: '<polyline points="22,30 28,36 40,24" fill="none" stroke="#047857" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' }
    ]
  },
  {
    id: 24, cat: 'ppl', name: '24. Satzklammer', tip: 'V2 → [ ... ] → End',
    strokes: [
      { label: 'Draw left Cyan bracket [ for V2 verb', svg: '<polyline points="22,14 14,14 14,44 22,44" fill="none" stroke="#0EA5E9" stroke-width="3" stroke-linecap="round"/>' },
      { label: 'Draw right Magenta bracket ] for end verb', svg: '<polyline points="38,14 46,14 46,44 38,44" fill="none" stroke="#EC4899" stroke-width="3" stroke-linecap="round"/>' },
      { label: 'Connect both with dashed arc across top', svg: '<path d="M 18 14 Q 30 4 42 14" fill="none" stroke="#141836" stroke-width="1.8" stroke-dasharray="3 2"/><text x="30" y="33" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">V2</text>' }
    ]
  }
];
