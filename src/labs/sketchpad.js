/* =========================================================================
   REUSABLE LIVE DOT-GRID SKETCHPAD ENGINE
   Supports Mouse, Touch & Apple Pencil • 01/03/05 Nibs • Glazing • Ghost Guides
   ========================================================================= */

export function renderSketchpadHTML(id, { title, subtitle, defaultTemplate = 'none', defaultTool = 'nib03' }) {
  return `
    <div class="lab cyan-accent" id="sp-box-${id}">
      <div class="lab-head">
        <span class="lab-title">Hands-On Canvas // ${title}</span>
        <span class="pill cyan">Mouse • Touch • Stylus</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl no-print" style="gap:8px;">
          <div class="segmented" role="group" aria-label="Pen Tool">
            <button class="seg-btn sp-tool ${defaultTool==='nib01'?'active':''}" data-sp="${id}" data-tool="nib01">01 Fine</button>
            <button class="seg-btn sp-tool ${defaultTool==='nib03'?'active':''}" data-sp="${id}" data-tool="nib03">03 Body</button>
            <button class="seg-btn sp-tool ${defaultTool==='nib05'?'active':''}" data-sp="${id}" data-tool="nib05">05 Bold</button>
            <button class="seg-btn sp-tool ${defaultTool==='glaze'?'active':''}" data-sp="${id}" data-tool="glaze">Marker Glaze</button>
            <button class="seg-btn sp-tool ${defaultTool==='white'?'active':''}" data-sp="${id}" data-tool="white">White Gel</button>
          </div>
          <div style="display:flex; align-items:center; gap:5px;" aria-label="Ink Swatch">
            ${[
              ['#141836', 'Indigo Ink'],
              ['#0EA5E9', 'Cyan'],
              ['#EC4899', 'Magenta'],
              ['#10B981', 'Mint'],
              ['#F59E0B', 'Amber'],
              ['#94A3B8', 'Cool Grey']
            ].map(([hex, label], i) => `<button class="swatch-btn sp-swatch ${i===0?'active':''}" data-sp="${id}" data-color="${hex}" style="background:${hex};" title="${label}"></button>`).join('')}
          </div>
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:6px;">
            <label class="chk-lbl"><input type="checkbox" class="sp-guide-chk" data-sp="${id}" ${defaultTemplate !== 'none' ? 'checked' : ''} /> Ghost Guide</label>
            <button class="btn secondary sp-undo" data-sp="${id}">↶ Undo</button>
            <button class="btn secondary sp-clear" data-sp="${id}">✕ Clear</button>
            <button class="btn mint sp-export" data-sp="${id}">↓ PNG</button>
          </div>
        </div>
        <div class="sketchpad-wrap">
          <canvas id="sp-canvas-${id}" class="sketchpad-canvas"></canvas>
        </div>
        <div class="lab-cap">${subtitle}</div>
      </div>
    </div>
  `;
}

function drawDotGridAndGuide(ctx, w, h, template, showGuide) {
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, w, h);

  // 5mm-scaled 22px dot grid
  const step = 22;
  ctx.fillStyle = '#CBD5E1';
  for (let y = step; y < h; y += step) {
    for (let x = step; x < w; x += step) {
      ctx.beginPath();
      ctx.arc(x, y, 1.35, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if (!showGuide || template === 'none') return;

  ctx.save();
  if (template === 'xheight') {
    // 3 writing rows with 60% x-height cyan ceilings + 90 deg plumb lines
    const rows = [66, 154, 242];
    rows.forEach((baseY, idx) => {
      const xTop = baseY - 24;
      ctx.fillStyle = 'rgba(14, 165, 233, 0.10)';
      ctx.fillRect(22, xTop, w - 44, 24);
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.55)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(22, xTop); ctx.lineTo(w - 22, xTop);
      ctx.moveTo(22, baseY); ctx.lineTo(w - 22, baseY);
      ctx.stroke();

      // 90 deg vertical plumb lines every 3 dots
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.25)';
      ctx.beginPath();
      for (let x = 44; x < w - 22; x += 66) {
        ctx.moveTo(x, xTop - 16); ctx.lineTo(x, baseY + 8);
      }
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = 'rgba(14, 165, 233, 0.65)';
      ctx.font = '600 11px "IBM Plex Mono", monospace';
      const labels = ['ROW 1: der Steuerbescheid (60% x-height)', 'ROW 2: die Umsatzsteuer (90° vertical stems)', 'ROW 3: das Agenten-System (1-dot word gaps)'];
      ctx.fillText(labels[idx], 26, xTop - 7);
    });
  } else if (template === 'corners') {
    // Stop-short & bridge boxes + chamfered 45 deg card
    ctx.strokeStyle = 'rgba(14, 165, 233, 0.52)';
    ctx.lineWidth = 1.8;
    ctx.setLineDash([5, 4]);
    // Left box: stop-short straight walls + magenta corner arcs
    const bx = 55, by = 55, bw = 240, bh = 160, r = 20;
    ctx.beginPath();
    ctx.moveTo(bx + r, by); ctx.lineTo(bx + bw - r, by);
    ctx.moveTo(bx + r, by + bh); ctx.lineTo(bx + bw - r, by + bh);
    ctx.moveTo(bx, by + r); ctx.lineTo(bx, by + bh - r);
    ctx.moveTo(bx + bw, by + r); ctx.lineTo(bx + bw, by + bh - r);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(236, 72, 153, 0.72)';
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.arc(bx + r, by + r, r, Math.PI, Math.PI * 1.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(bx + bw - r, by + r, r, Math.PI * 1.5, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(bx + bw - r, by + bh - r, r, 0, Math.PI * 0.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(bx + r, by + bh - r, r, Math.PI * 0.5, Math.PI);
    ctx.stroke();

    // Right box: Chamfered 45 deg HUD frame
    const cx = 365, cy = 55, cw = 260, ch = 160, chf = 22;
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.65)';
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(cx + chf, cy); ctx.lineTo(cx + cw - chf, cy);
    ctx.lineTo(cx + cw, cy + chf); ctx.lineTo(cx + cw, cy + ch - chf);
    ctx.lineTo(cx + cw - chf, cy + ch); ctx.lineTo(cx + chf, cy + ch);
    ctx.lineTo(cx, cy + ch - chf); ctx.lineTo(cx, cy + chf);
    ctx.closePath();
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.fillStyle = 'rgba(20, 24, 54, 0.5)';
    ctx.font = '600 11px "IBM Plex Mono", monospace';
    ctx.fillText('TRACE 1: STOP-SHORT & BRIDGE', bx + 20, by + bh + 26);
    ctx.fillText('TRACE 2: CHAMFERED 45° CYBER HUD', cx + 18, cy + ch + 26);
  } else if (template === 'isometric') {
    // 2-Over, 1-Up cube + cylinder ellipses
    ctx.strokeStyle = 'rgba(14, 165, 233, 0.55)';
    ctx.lineWidth = 1.6;
    ctx.setLineDash([5, 4]);
    const mx = 198, my = 66, dx = 88, dy = 44, dz = 88;
    ctx.beginPath();
    // Top diamond
    ctx.moveTo(mx, my); ctx.lineTo(mx + dx, my + dy); ctx.lineTo(mx, my + 2 * dy); ctx.lineTo(mx - dx, my + dy); ctx.closePath();
    // Vertical drops
    ctx.moveTo(mx - dx, my + dy); ctx.lineTo(mx - dx, my + dy + dz); ctx.lineTo(mx, my + 2 * dy + dz); ctx.lineTo(mx + dx, my + dy + dz); ctx.lineTo(mx + dx, my + dy);
    ctx.moveTo(mx, my + 2 * dy); ctx.lineTo(mx, my + 2 * dy + dz);
    ctx.stroke();

    // Right: Cylinder with top & rounder bottom ellipse
    const cx = 528, topY = 88, botY = 220, rx = 66;
    ctx.strokeStyle = 'rgba(236, 72, 153, 0.55)';
    ctx.beginPath();
    ctx.ellipse(cx, topY, rx, 16, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - rx, topY); ctx.lineTo(cx - rx, botY);
    ctx.moveTo(cx + rx, topY); ctx.lineTo(cx + rx, botY);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(cx, botY, rx, 26, 0, 0, Math.PI);
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.fillStyle = 'rgba(20, 24, 54, 0.52)';
    ctx.font = '600 11px "IBM Plex Mono", monospace';
    ctx.fillText('2-OVER, 1-UP ISOMETRIC CUBE (90° VERTICALS)', 76, 272);
    ctx.fillText('CYLINDER: ROUNDER BOTTOM RIM', 432, 272);
  } else if (template === 'glazing') {
    // 3-coat swatch strip + isometric cube for glazing practice
    ctx.strokeStyle = 'rgba(20, 24, 54, 0.45)';
    ctx.lineWidth = 1.8;
    [44, 154, 264].forEach((x, idx) => {
      ctx.strokeRect(x, 66, 88, 132);
      ctx.fillStyle = 'rgba(20, 24, 54, 0.55)';
      ctx.font = '600 10.5px "IBM Plex Mono", monospace';
      ctx.fillText(`COAT ${idx + 1} (${idx + 1}x)`, x + 6, 220);
    });
    // Right: Isometric block ready to glaze + white gel rim
    const mx = 550, my = 66, dx = 88, dy = 44, dz = 88;
    ctx.beginPath();
    ctx.moveTo(mx, my); ctx.lineTo(mx + dx, my + dy); ctx.lineTo(mx, my + 2 * dy); ctx.lineTo(mx - dx, my + dy); ctx.closePath();
    ctx.moveTo(mx - dx, my + dy); ctx.lineTo(mx - dx, my + dy + dz); ctx.lineTo(mx, my + 2 * dy + dz); ctx.lineTo(mx + dx, my + dy + dz); ctx.lineTo(mx + dx, my + dy);
    ctx.moveTo(mx, my + 2 * dy); ctx.lineTo(mx, my + 2 * dy + dz);
    ctx.stroke();
    ctx.fillText('GLAZE: TOP 1x • LEFT 2x • RIGHT 3x + WHITE RIM', 410, 272);
  }
  ctx.restore();
}

export function initSketchpad(id, { defaultTemplate = 'none', defaultTool = 'nib03' } = {}) {
  const canvas = document.getElementById(`sp-canvas-${id}`);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let tool = defaultTool;
  let color = '#141836';
  let showGuide = defaultTemplate !== 'none';
  let strokes = []; // { tool, color, points: [{x,y}] }
  let activeStroke = null;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(300, Math.floor(rect.width));
    const h = 310;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    redraw();
  }

  function drawStroke(st) {
    if (!st.points.length) return;
    ctx.save();
    ctx.lineCap = st.tool === 'glaze' ? 'butt' : 'round';
    ctx.lineJoin = 'round';
    if (st.tool === 'glaze') {
      ctx.globalAlpha = 0.24;
      ctx.globalCompositeOperation = 'multiply';
      ctx.strokeStyle = st.color === '#141836' ? '#94A3B8' : st.color;
      ctx.lineWidth = 18;
    } else if (st.tool === 'white') {
      ctx.globalAlpha = 0.96;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 3.2;
    } else {
      ctx.globalAlpha = 1;
      ctx.strokeStyle = st.color;
      ctx.lineWidth = st.tool === 'nib01' ? 1.3 : st.tool === 'nib05' ? 4.0 : 2.3;
    }

    ctx.beginPath();
    ctx.moveTo(st.points[0].x, st.points[0].y);
    for (let i = 1; i < st.points.length; i++) {
      ctx.lineTo(st.points[i].x, st.points[i].y);
    }
    if (st.points.length === 1) {
      ctx.lineTo(st.points[0].x + 0.1, st.points[0].y + 0.1);
    }
    ctx.stroke();
    ctx.restore();
  }

  function redraw() {
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(300, Math.floor(rect.width));
    const h = 310;
    drawDotGridAndGuide(ctx, w, h, defaultTemplate, showGuide);
    strokes.forEach(drawStroke);
    if (activeStroke) drawStroke(activeStroke);
  }

  function getPt(e) {
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    activeStroke = { tool, color, points: [getPt(e)] };
    redraw();
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!activeStroke) return;
    activeStroke.points.push(getPt(e));
    redraw();
  });

  const endStroke = () => {
    if (!activeStroke) return;
    strokes.push(activeStroke);
    activeStroke = null;
    redraw();
  };
  canvas.addEventListener('pointerup', endStroke);
  canvas.addEventListener('pointercancel', endStroke);

  // Wire controls scoped to this sketchpad
  const box = document.getElementById(`sp-box-${id}`);
  box.querySelectorAll('.sp-tool').forEach(btn => {
    btn.addEventListener('click', () => {
      tool = btn.dataset.tool;
      box.querySelectorAll('.sp-tool').forEach(b => b.classList.toggle('active', b === btn));
    });
  });

  box.querySelectorAll('.sp-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      color = btn.dataset.color;
      box.querySelectorAll('.sp-swatch').forEach(b => b.classList.toggle('active', b === btn));
    });
  });

  const guideChk = box.querySelector('.sp-guide-chk');
  if (guideChk) {
    guideChk.addEventListener('change', () => {
      showGuide = guideChk.checked;
      redraw();
    });
  }

  box.querySelector('.sp-undo')?.addEventListener('click', () => {
    strokes.pop();
    redraw();
  });

  box.querySelector('.sp-clear')?.addEventListener('click', () => {
    strokes = [];
    redraw();
  });

  box.querySelector('.sp-export')?.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = `sketchbook-${id}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  resize();
}
