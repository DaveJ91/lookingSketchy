/* =========================================================================
   APPENDIX B: PRINTABLE A5/A4 PRACTICE WORKBOOK GENERATOR
   6 High-Resolution Vector Physical Practice Sheets
   ========================================================================= */
import { ICONS_24 } from '../data/icons.js';

function dotPatternSVG(w, h, step = 18) {
  let dots = '';
  for (let y = step; y < h; y += step) {
    for (let x = step; x < w; x += step) {
      dots += `<circle cx="${x}" cy="${y}" r="1.1" fill="#94A3B8" opacity="0.65"/>`;
    }
  }
  return dots;
}

export const WORKBOOK_SHEETS = [
  {
    id: 'wb-xheight',
    title: 'Sheet 1: x-Height & 90° Vertical Slant Drill',
    desc: '60% cyan x-height ceilings + vertical plumb lines for Architect\'s Print & everyday handwriting.',
    buildSVG: () => `
      <svg viewBox="0 0 700 940">
        <rect width="700" height="940" fill="#FFF" stroke="#141836" stroke-width="2"/>
        ${dotPatternSVG(700, 940, 20)}
        <text x="40" y="42" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700" fill="#141836">WORKBOOK 01 // X-HEIGHT (60%) &amp; 90° VERTICAL SLANT DRILL</text>
        <text x="40" y="60" font-family="IBM Plex Mono, monospace" font-size="10" fill="#525B7A">Keep lowercase bodies inside the Cyan tint band • Align stems straight to pink plumb lines • Leave 1-dot word gaps</text>
        ${[120, 210, 300, 390, 480, 570, 660, 750, 840].map((y, idx) => `
          <rect x="40" y="${y - 26}" width="620" height="26" fill="#0EA5E9" fill-opacity="0.11"/>
          <line x1="40" y1="${y - 26}" x2="660" y2="${y - 26}" stroke="#0EA5E9" stroke-dasharray="4 3"/>
          <line x1="40" y1="${y}" x2="660" y2="${y}" stroke="#141836" stroke-width="1"/>
          ${[80,160,240,320,400,480,560,640].map(x => `<line x1="${x}" y1="${y - 44}" x2="${x}" y2="${y + 10}" stroke="#EC4899" stroke-opacity="0.3" stroke-dasharray="2 3"/>`).join('')}
          ${idx === 0 ? `<text x="46" y="${y - 6}" font-family="Patrick Hand, cursive" font-size="22" fill="#94A3B8">agentic tax orchestration  •  der Steuerbescheid</text>` : ''}
          ${idx === 1 ? `<text x="46" y="${y - 6}" font-family="IBM Plex Mono, monospace" font-size="19" fill="#94A3B8" letter-spacing="3">ARCHITECT PRINT ALL CAPS 0123456789 Ø</text>` : ''}
        `).join('')}
      </svg>`
  },
  {
    id: 'wb-corners',
    title: 'Sheet 2: Stop-Short & Bridge + Chamfered Cyber Cards',
    desc: 'Trace and freehand 12 symmetrical rounded & 45° chamfered containers with Cool Grey shadows.',
    buildSVG: () => `
      <svg viewBox="0 0 700 940">
        <rect width="700" height="940" fill="#FFF" stroke="#141836" stroke-width="2"/>
        ${dotPatternSVG(700, 940, 20)}
        <text x="40" y="42" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700">WORKBOOK 02 // STOP-SHORT &amp; BRIDGE + CHAMFERED 45° CARDS</text>
        ${[0, 1, 2, 3].map(r => [0, 1].map(c => {
          const x = 50 + c * 310, y = 90 + r * 200;
          if (r < 2) {
            return `<rect x="${x}" y="${y}" width="260" height="140" rx="16" fill="none" stroke="#0EA5E9" stroke-width="1.6" stroke-dasharray="6 4"/>
              <text x="${x+130}" y="${y+76}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#94A3B8">STOP 0.5 DOT SHORT → BRIDGE ARC</text>`;
          }
          return `<polygon points="${x+20},${y} ${x+240},${y} ${x+260},${y+20} ${x+260},${y+120} ${x+240},${y+140} ${x+20},${y+140} ${x},${y+120} ${x},${y+20}" fill="none" stroke="#EC4899" stroke-width="1.6" stroke-dasharray="6 4"/>
            <text x="${x+130}" y="${y+76}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#94A3B8">CHAMFERED 45° (1 DOT CUT)</text>`;
        }).join('')).join('')}
      </svg>`
  },
  {
    id: 'wb-iso',
    title: 'Sheet 3: 2-Over, 1-Up Isometric & Cube Warmup',
    desc: 'Practice stacking isometric platforms, 90° vertical walls, and Ambient Occlusion contact creases.',
    buildSVG: () => `
      <svg viewBox="0 0 700 940">
        <rect width="700" height="940" fill="#FFF" stroke="#141836" stroke-width="2"/>
        ${dotPatternSVG(700, 940, 20)}
        <text x="40" y="42" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700">WORKBOOK 03 // 2-OVER, 1-UP ISOMETRIC PLATFORM &amp; CUBE DRILL</text>
        ${[0, 1, 2].map(r => [0, 1].map(c => {
          const cx = 180 + c * 320, cy = 140 + r * 260;
          return `
            <polygon points="${cx},${cy} ${cx+100},${cy+50} ${cx},${cy+100} ${cx-100},${cy+50}" fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="5 4"/>
            <path d="M ${cx-100} ${cy+50} V ${cy+130} L ${cx} ${cy+180} L ${cx+100} ${cy+130} V ${cy+50} M ${cx} ${cy+100} V ${cy+180}" fill="none" stroke="#94A3B8" stroke-width="1.4" stroke-dasharray="4 4"/>`;
        }).join('')).join('')}
      </svg>`
  },
  {
    id: 'wb-ellipses',
    title: 'Sheet 4: Cylinder Eye-Level & Ellipse Foreshortening',
    desc: 'Trace ellipses opening wider above and below a printed Horizon Line (Eye Level).',
    buildSVG: () => `
      <svg viewBox="0 0 700 940">
        <rect width="700" height="940" fill="#FFF" stroke="#141836" stroke-width="2"/>
        ${dotPatternSVG(700, 940, 20)}
        <text x="40" y="42" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700">WORKBOOK 04 // HORIZON LINE &amp; CYLINDER ELLIPSE DRILL</text>
        <line x1="30" y1="470" x2="670" y2="470" stroke="#0EA5E9" stroke-width="2.2" stroke-dasharray="8 5"/>
        <text x="40" y="460" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0EA5E9">EYE LEVEL (HORIZON)</text>
        ${[160, 290, 410, 530, 650, 790].map(y => {
          const ry = Math.max(8, Math.abs(y - 470) * 0.14);
          return [180, 500].map(cx => `<ellipse cx="${cx}" cy="${y}" rx="96" ry="${ry.toFixed(1)}" fill="none" stroke="#EC4899" stroke-width="1.5" stroke-dasharray="5 4"/>`).join('');
        }).join('')}
      </svg>`
  },
  {
    id: 'wb-icons',
    title: 'Sheet 5: 24 Ten-Second Icons Trace & Recall Grid',
    desc: 'Faint ghosted versions of all 24 AI, Tax, Systems & Deutsch icons to trace in under 4 minutes.',
    buildSVG: () => `
      <svg viewBox="0 0 700 940">
        <rect width="700" height="940" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <text x="40" y="42" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700">WORKBOOK 05 // 24 TEN-SECOND VISUAL VOCABULARY TRACE GRID</text>
        ${ICONS_24.map((ic, idx) => {
          const col = idx % 4, row = Math.floor(idx / 4);
          const x = 40 + col * 160, y = 70 + row * 140;
          return `
            <rect x="${x}" y="${y}" width="144" height="126" rx="8" fill="#FAFBFD" stroke="#CBD5E1" stroke-width="1.4"/>
            <g transform="translate(${x + 36}, ${y + 14}) scale(1.2)" opacity="0.28">${ic.strokes.map(s => s.svg).join('')}</g>
            <text x="${x + 72}" y="${y + 114}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#525B7A">${ic.name}</text>`;
        }).join('')}
      </svg>`
  },
  {
    id: 'wb-a5grid',
    title: 'Sheet 6: Blank 27×38 A5 Dot Grid (Pre-Marked Corner Ticks)',
    desc: 'Ready-to-use physical A5 dot grid with 2-dot outer margins and Magenta 65/35 Bento + Thirds Corner Ticks.',
    buildSVG: () => {
      const ox = 56, oy = 64, step = 21.5;
      let dots = '';
      for (let r = 0; r <= 38; r++) {
        for (let c = 0; c <= 27; c++) {
          dots += `<circle cx="${(ox + c * step).toFixed(1)}" cy="${(oy + r * step).toFixed(1)}" r="1.15" fill="#94A3B8"/>`;
        }
      }
      const ux = ox + 2 * step, uy = oy + 2 * step, uw = 23 * step, uh = 34 * step;
      const tBento = ux + 15.5 * step;
      const t3a = ux + 7.5 * step, t3b = ux + 15.5 * step;
      return `
        <svg viewBox="0 0 700 940">
          <rect width="700" height="940" fill="#FFF" stroke="#141836" stroke-width="2"/>
          <text x="56" y="42" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700">WORKBOOK 06 // A5 27×38 DOT GRID • 2-DOT MARGINS • CORNER TICKS</text>
          ${dots}
          <rect x="${ux}" y="${uy}" width="${uw}" height="${uh}" fill="none" stroke="#CBD5E1" stroke-dasharray="4 4"/>
          <line x1="${tBento}" y1="${uy - 12}" x2="${tBento}" y2="${uy + 8}" stroke="#EC4899" stroke-width="2.4"/>
          <line x1="${tBento}" y1="${uy + uh - 8}" x2="${tBento}" y2="${uy + uh + 12}" stroke="#EC4899" stroke-width="2.4"/>
          <line x1="${t3a}" y1="${uy - 12}" x2="${t3a}" y2="${uy + 8}" stroke="#0EA5E9" stroke-width="2.4"/>
          <line x1="${t3a}" y1="${uy + uh - 8}" x2="${t3a}" y2="${uy + uh + 12}" stroke="#0EA5E9" stroke-width="2.4"/>
          <text x="${tBento + 6}" y="${uy - 4}" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#BE185D">65/35 &amp; 2/3 TICK</text>
          <text x="${t3a + 6}" y="${uy - 4}" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#0EA5E9">1/3 TICK</text>
        </svg>`;
    }
  },
  {
    id: 'wb-iso-scenes',
    title: 'Sheet 7: Isometric Stack, Cutaway Cube & Staircase Drill',
    desc: 'Trace exploded 3-tier AI stacks, X-ray cutaway boxes, and 4-step CEFR staircases on 2-over-1-up guides.',
    buildSVG: () => `
      <svg viewBox="0 0 700 940">
        <rect width="700" height="940" fill="#FFF" stroke="#141836" stroke-width="2"/>
        ${dotPatternSVG(700, 940, 20)}
        <text x="40" y="42" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700">WORKBOOK 07 // ISOMETRIC STACK, CUTAWAY BOX &amp; STAIRCASE</text>
        <!-- Top-left: Exploded 3-Tier Stack -->
        ${[130, 220, 310].map(y => `<polygon points="180,${y} 270,${y+45} 180,${y+90} 90,${y+45}" fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="5 4"/>`).join('')}
        <text x="180" y="424" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#525B7A">1. EXPLODED 3-TIER STACK</text>
        <!-- Top-right: Cutaway Cube -->
        <polygon points="500,130 610,185 500,240 390,185" fill="none" stroke="#EC4899" stroke-width="1.5" stroke-dasharray="5 4"/>
        <path d="M 390 185 V 315 L 500 370 L 610 315 V 185 M 500 240 V 370" fill="none" stroke="#94A3B8" stroke-width="1.4" stroke-dasharray="4 4"/>
        <polygon points="500,185 555,212 500,240 445,212" fill="none" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="500" y="424" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#525B7A">2. CUTAWAY / X-RAY CUBE</text>
        <!-- Bottom: 4-Step Isometric Staircase -->
        ${[0,1,2,3].map(i => {
          const x = 140 + i * 130, y = 760 - i * 62;
          return `<polygon points="${x},${y} ${x+68},${y+34} ${x},${y+68} ${x-68},${y+34}" fill="none" stroke="#10B981" stroke-width="1.5" stroke-dasharray="5 4"/>
            <path d="M ${x-68} ${y+34} V ${y+74} L ${x} ${y+108} L ${x+68} ${y+74} V ${y+34}" fill="none" stroke="#94A3B8" stroke-width="1.4" stroke-dasharray="4 4"/>`;
        }).join('')}
        <text x="350" y="896" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#525B7A">3. 4-STEP PROGRESSION STAIRCASE (A1 → A2 → B1 → B2)</text>
      </svg>`
  },
  {
    id: 'wb-diagrams',
    title: 'Sheet 8: Complex Diagram Starter Frames (Sequence, Venn, Fishbone)',
    desc: 'Ready-to-fill blank Sequence lifelines, 3-Way Venn template, and Ishikawa Fishbone root-cause skeleton.',
    buildSVG: () => `
      <svg viewBox="0 0 700 940">
        <rect width="700" height="940" fill="#FFF" stroke="#141836" stroke-width="2"/>
        ${dotPatternSVG(700, 940, 20)}
        <text x="40" y="42" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700">WORKBOOK 08 // SEQUENCE LIFELINES, 3-WAY VENN &amp; FISHBONE</text>
        <!-- Top: 4-Actor Sequence Diagram -->
        ${[110, 270, 430, 590].map(x => `<rect x="${x-50}" y="76" width="100" height="32" rx="5" fill="none" stroke="#141836" stroke-width="1.8"/><line x1="${x}" y1="108" x2="${x}" y2="330" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="5 4"/>`).join('')}
        <text x="350" y="352" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#525B7A">1. SEQUENCE DIAGRAM (4 ACTORS • TIME FLOWS DOWN)</text>
        <!-- Middle: 3-Way Venn -->
        <circle cx="300" cy="486" r="76" fill="none" stroke="#0EA5E9" stroke-width="1.6" stroke-dasharray="5 4"/>
        <circle cx="400" cy="486" r="76" fill="none" stroke="#EC4899" stroke-width="1.6" stroke-dasharray="5 4"/>
        <circle cx="350" cy="560" r="76" fill="none" stroke="#10B981" stroke-width="1.6" stroke-dasharray="5 4"/>
        <text x="350" y="660" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#525B7A">2. 3-WAY VENN / EULER INTERSECTION</text>
        <!-- Bottom: Ishikawa Fishbone -->
        <line x1="60" y1="790" x2="510" y2="790" stroke="#141836" stroke-width="2.4"/>
        <rect x="514" y="760" width="140" height="60" rx="6" fill="none" stroke="#EC4899" stroke-width="1.8"/>
        <line x1="150" y1="706" x2="215" y2="790" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="5 4"/>
        <line x1="330" y1="706" x2="395" y2="790" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="5 4"/>
        <line x1="150" y1="874" x2="215" y2="790" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="5 4"/>
        <line x1="330" y1="874" x2="395" y2="790" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="5 4"/>
        <text x="350" y="906" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#525B7A">3. ISHIKAWA FISHBONE ROOT-CAUSE SKELETON</text>
      </svg>`
  }
];

export function printWorkbookSheet(sheetId) {
  const sheets = sheetId === 'all' ? WORKBOOK_SHEETS : WORKBOOK_SHEETS.filter(s => s.id === sheetId);
  const mount = document.getElementById('workbook-print-mount');
  if (!mount) return;
  mount.innerHTML = sheets.map(s => `<div class="wb-sheet">${s.buildSVG()}</div>`).join('');
  document.body.classList.add('printing-workbook');

  const cleanup = () => {
    document.body.classList.remove('printing-workbook');
    mount.innerHTML = '';
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);
  setTimeout(() => window.print(), 80);
}
