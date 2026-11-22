/* =========================================================================
   APPENDIX A: INTERACTIVE MASTER SPREAD LAYER DISSECTOR
   Toggle 5 physical ink layers or auto-play the step-by-step build sequence
   ========================================================================= */
import { MASTER_SPREADS } from '../data/caseStudies.js';

export function renderSpreadDissectorHTML() {
  return `
    <div class="lab" id="dissector-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Layer Dissector // 5 Complete Master Spreads</span>
        <button id="dis-play-btn" class="btn mint">▶ Play 5-Layer Build Sequence</button>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            ${MASTER_SPREADS.map((sp, idx) => `<button class="seg-btn dis-tab ${idx===0?'active':''}" data-i="${idx}">${sp.badge}</button>`).join('')}
          </div>
        </div>

        <div class="lab-ctrl" style="background:#FFF;">
          <label class="chk-lbl"><input type="checkbox" class="dis-layer" data-l="l1" checked /> L1: Grid &amp; Ticks</label>
          <label class="chk-lbl"><input type="checkbox" class="dis-layer" data-l="l2" checked /> L2: Pass 1 Ink</label>
          <label class="chk-lbl"><input type="checkbox" class="dis-layer" data-l="l3" checked /> L3: Boxes &amp; Arrows</label>
          <label class="chk-lbl"><input type="checkbox" class="dis-layer" data-l="l4" checked /> L4: Cool Grey Shadow</label>
          <label class="chk-lbl"><input type="checkbox" class="dis-layer" data-l="l5" checked /> L5: Semantic Color &amp; Stamps</label>
        </div>

        <div class="svg-box"><svg id="dis-svg" viewBox="0 0 760 340"></svg></div>
        <div id="dis-cap" class="lab-cap"></div>
      </div>
    </div>
  `;
}

export function initSpreadDissector() {
  const lab = document.getElementById('dissector-lab');
  if (!lab) return;

  let activeIdx = 0;
  let playTimer = null;

  function render() {
    const sp = MASTER_SPREADS[activeIdx];
    const on = {};
    lab.querySelectorAll('.dis-layer').forEach(chk => { on[chk.dataset.l] = chk.checked; });
    const svg = document.getElementById('dis-svg');
    // Render bottom-to-top in natural visual stacking order (L1 grid -> L4 shadows -> L5 washes -> L3 boxes -> L2 crisp text)
    svg.innerHTML = `
      ${on.l1 ? sp.layers.l1 : ''}
      ${on.l4 ? sp.layers.l4 : ''}
      ${on.l5 ? sp.layers.l5 : ''}
      ${on.l3 ? sp.layers.l3 : ''}
      ${on.l2 ? sp.layers.l2 : ''}
    `;
    document.getElementById('dis-cap').innerHTML = `<strong>${sp.title}</strong> (${sp.layout})<br/>${sp.notes}`;
  }

  lab.querySelectorAll('.dis-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      if (playTimer) { clearInterval(playTimer); playTimer = null; }
      activeIdx = Number(btn.dataset.i);
      lab.querySelectorAll('.dis-tab').forEach(b => b.classList.toggle('active', b === btn));
      render();
    });
  });

  lab.querySelectorAll('.dis-layer').forEach(chk => chk.addEventListener('change', render));

  const playBtn = document.getElementById('dis-play-btn');
  playBtn.addEventListener('click', () => {
    if (playTimer) { clearInterval(playTimer); playTimer = null; }
    const order = ['l1', 'l2', 'l3', 'l4', 'l5'];
    let step = 0;
    const setStep = (n) => {
      lab.querySelectorAll('.dis-layer').forEach(chk => {
        chk.checked = order.indexOf(chk.dataset.l) <= n;
      });
      render();
    };
    setStep(0);
    playBtn.textContent = '⏸ Building Layer 1/5…';
    playTimer = setInterval(() => {
      step++;
      if (step >= order.length) {
        clearInterval(playTimer);
        playTimer = null;
        playBtn.textContent = '▶ Replay 5-Layer Build';
        return;
      }
      playBtn.textContent = `⏸ Building Layer ${step + 1}/5…`;
      setStep(step);
    }, 850);
  });

  render();
}
