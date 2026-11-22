/* =========================================================================
   APP BOOTSTRAP: ROUTER, SIDEBAR, ⌘K SEARCH, GLOSSARY POPOVER & PROGRESS SYNC
   ========================================================================= */
import './styles/tokens.css';
import './styles/layout.css';
import './styles/labs.css';
import './styles/print.css';

import { PARTS, CHAPTERS, MAIN_CHAPTERS } from './data/syllabus.js';
import { GLOSSARY, GLOSSARY_MAP } from './data/glossary.js';
import { ICONS_24 } from './data/icons.js';
import { ISO_OBJECTS } from './labs/isoGallery.js';
import { DIAGRAM_PATTERNS } from './data/diagramPatterns.js';
import { METAPHORS_12 } from './data/metaphors.js';
import { STEAL_GRAPHICS } from './labs/stealBook.js';
import { DRAW_LESSONS } from './labs/drawSchool.js';
import { MIND_MAP_DESIGNS } from './labs/mindMapLab.js';
import { TAX_STUDY_TEMPLATES } from './labs/taxAccountingLab.js';
import { PROCESS_ARCHETYPES } from './labs/processLab.js';
import { LANG_SPREADS } from './labs/languageLab.js';
import { STUDY_SYSTEMS } from './labs/studySystemsLab.js';
import { CLEVER_METAPHORS } from './labs/metaphorAtelier.js';
import { EXPLODED_SCENES } from './labs/explodedIsoLab.js';
import { PRODUCT_BLUEPRINTS } from './labs/productLab.js';
import { DESIGN_LAWS } from './labs/designTheoryLab.js';
import { LEARNING_PILLARS } from './labs/visualLearningLab.js';
import { ART_STYLES } from './labs/artStylesLab.js';
import {
  loadState, getState, toggleChapterComplete, setChapterNote,
  exportStateJSON, importStateJSON, resetAllState, setSketchFilter
} from './state.js';

import { renderCover } from './chapters/cover.js';
import { PART1_RENDERERS, PART1_INITS } from './chapters/part1.js';
import { PART2_RENDERERS, PART2_INITS } from './chapters/part2.js';
import { PART3_RENDERERS, PART3_INITS } from './chapters/part3.js';
import { PART4_RENDERERS, PART4_INITS, stopCh12Timer } from './chapters/part4.js';
import { PART5_RENDERERS, PART5_INITS } from './chapters/part5.js';
import { APPENDIX_RENDERERS, APPENDIX_INITS } from './chapters/appendices.js';

const ALL_RENDERERS = {
  ...PART1_RENDERERS,
  ...PART2_RENDERERS,
  ...PART3_RENDERERS,
  ...PART4_RENDERERS,
  ...PART5_RENDERERS,
  ...APPENDIX_RENDERERS
};

const ALL_INITS = {
  ...PART1_INITS,
  ...PART2_INITS,
  ...PART3_INITS,
  ...PART4_INITS,
  ...PART5_INITS,
  ...APPENDIX_INITS
};

let currentView = 'cover';
let tocMode = 'all'; // 'all' | 'chapters' | 'studios'

// =========================================================================
// 1. SIDEBAR & MOBILE DRAWER
// =========================================================================
function toggleMobileToc(open) {
  document.getElementById('toc-sidebar').classList.toggle('open', open);
  document.getElementById('toc-backdrop').classList.toggle('open', open);
}

function renderSidebar() {
  const st = getState();
  const doneMain = st.completedChapters.filter(id => MAIN_CHAPTERS.some(c => c.id === id)).length;
  const passedQ = Object.values(st.passedQuizzes).filter(q => q && q.passed).length;
  const pct = Math.round(((doneMain + passedQ) / (MAIN_CHAPTERS.length * 2)) * 100);

  document.getElementById('toc-progress-txt').textContent = `${doneMain}/${MAIN_CHAPTERS.length} Ch • ${passedQ} Q`;
  document.getElementById('toc-progress-fill').style.width = `${pct}%`;

  let html = `
    <button class="toc-item ${currentView === 'cover' ? 'active' : ''}" data-nav="cover">
      <span class="toc-check">⌂</span>
      <span class="toc-item-text">
        <span class="toc-item-title">Book Cover &amp; Dashboard</span>
        <span class="toc-item-meta">18 Chapters • 16 Studios</span>
      </span>
    </button>
  `;

  PARTS.forEach(part => {
    if (tocMode === 'chapters' && part.id === 'APP') return;
    if (tocMode === 'studios' && part.id !== 'APP') return;
    const chs = CHAPTERS.filter(c => c.part === part.id);
    html += `<div><div class="toc-part-label">${part.title}</div><div class="toc-list">`;
    chs.forEach(c => {
      const isDone = st.completedChapters.includes(c.id);
      const isAct = currentView === c.id;
      const qPass = st.passedQuizzes[c.id]?.passed;
      const prefix = c.isAppendix ? `App ${c.num}` : `Ch ${String(c.num).padStart(2, '0')}`;
      html += `
        <button class="toc-item ${isAct ? 'active' : ''} ${isDone ? 'completed' : ''}" data-nav="${c.id}">
          <span class="toc-check">${isDone ? '✓' : c.num}</span>
          <span class="toc-item-text">
            <span class="toc-item-title">${c.title}</span>
            <span class="toc-item-meta">
              <span>${prefix} • ${c.time}</span>
              ${c.isNew ? '<span class="toc-new-tag">NEW</span>' : ''}
              ${qPass ? '<span class="toc-quiz-dot">Q✓</span>' : ''}
            </span>
          </span>
        </button>
      `;
    });
    html += `</div></div>`;
  });

  document.getElementById('toc-scroll').innerHTML = html;
  const activeToc = document.querySelector('#toc-scroll .toc-item.active');
  if (activeToc) activeToc.scrollIntoView({ block: 'nearest' });
}

let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('app-toast');
  if (!el) return;
  el.textContent = msg;
  el.hidden = false;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2200);
}
window.__showToast = showToast;

function updateScrollTelemetry() {
  const bar = document.getElementById('read-progress-bar');
  const topBtn = document.getElementById('btn-back-top');
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const pct = Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100));
  if (bar) bar.style.width = `${pct.toFixed(1)}%`;
  if (topBtn) topBtn.hidden = window.scrollY < 420;
}

// =========================================================================
// 2. CHAPTER FOOTER + PERSISTENT STUDIO NOTES
// =========================================================================
function chapterStudioNotesAndFooter(ch) {
  const st = getState();
  const idx = CHAPTERS.findIndex(c => c.id === ch.id);
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;
  const isDone = st.completedChapters.includes(ch.id);
  const noteText = st.notes[ch.id] || '';

  return `
    <section class="notes-box no-print">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="mono" style="font-size:11px; font-weight:700; color:var(--violet); text-transform:uppercase;">Personal Studio Margin Notes (Auto-Saved)</span>
        <span id="note-saved-msg" class="mono" style="font-size:10px; color:var(--mint-deep);"></span>
      </div>
      <textarea id="chapter-note-input" class="notes-textarea" placeholder="Jot your physical notebook page ref (e.g. NB01-P08), pen settings, or German phrases practiced in this chapter...">${noteText.replace(/</g, '&lt;')}</textarea>
    </section>

    <footer class="chapter-footer no-print">
      <button class="btn secondary" data-nav="${prev ? prev.id : 'cover'}">
        ← ${prev ? `${prev.isAppendix ? 'App' : 'Ch'} ${prev.num}: ${prev.title.split('—')[0].slice(0, 22)}…` : 'Book Cover'}
      </button>
      <button id="btn-mark-complete" class="btn ${isDone ? 'mint' : 'secondary'}" data-toggle-done="${ch.id}">
        ${isDone ? '✓ Completed' : '☐ Mark Complete'}
      </button>
      ${next ? `<button class="btn" data-nav="${next.id}">Next: ${next.isAppendix ? 'App' : 'Ch'} ${next.num} →</button>` : `<button class="btn mint" data-nav="cover">Back to Cover ⌂</button>`}
    </footer>
  `;
}

// =========================================================================
// 3. HASH ROUTER & CHAPTER MOUNTING
// =========================================================================
function openChapter(id, { pushHash = true } = {}) {
  stopCh12Timer();
  const validId = (id === 'cover' || ALL_RENDERERS[id]) ? id : 'cover';
  currentView = validId;
  toggleMobileToc(false);

  if (pushHash) {
    const targetHash = `#${validId}`;
    if (window.location.hash !== targetHash) {
      history.pushState(null, '', targetHash);
    }
  }

  const mount = document.getElementById('chapter-mount');
  mount.classList.remove('anim-in');
  void mount.offsetWidth;
  mount.classList.add('anim-in');

  if (validId === 'cover') {
    document.getElementById('topbar-crumb').textContent = 'Looking Sketchy • Cover & Studio Dashboard';
    document.title = 'Looking Sketchy — Interactive Visual Thinking & Sketchbook Studio';
    mount.innerHTML = renderCover();
  } else {
    const ch = CHAPTERS.find(c => c.id === validId);
    const part = PARTS.find(p => p.id === ch.part);
    const label = ch.isAppendix ? ch.title : `Chapter ${ch.num}: ${ch.title}`;
    document.getElementById('topbar-crumb').textContent = `${part.title.split(':')[0]} • ${label}`;
    document.title = `${label} — Looking Sketchy`;
    mount.innerHTML = ALL_RENDERERS[validId](ch, part) + chapterStudioNotesAndFooter(ch);

    // Wire studio note auto-save
    const noteEl = document.getElementById('chapter-note-input');
    if (noteEl) {
      noteEl.addEventListener('input', () => {
        setChapterNote(validId, noteEl.value);
        const msg = document.getElementById('note-saved-msg');
        if (msg) msg.textContent = 'Saved ✓';
      });
    }

    if (ALL_INITS[validId]) {
      try { ALL_INITS[validId](() => renderSidebar()); }
      catch (err) { console.error(`Init error in ${validId}:`, err); }
    }
  }

  renderSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(updateScrollTelemetry, 80);
}

// =========================================================================
// 4. ⌘K COMMAND PALETTE SEARCH (CHAPTERS + GLOSSARY + 24 ICONS)
// =========================================================================
const SEARCH_INDEX = [
  { type: 'Page', title: 'Book Cover & Mastery Dashboard', sub: 'Overview, progress stats & syllabus', nav: 'cover' },
  ...CHAPTERS.map(c => ({
    type: c.isAppendix ? `Appendix ${c.num}` : `Ch ${String(c.num).padStart(2, '0')}`,
    title: c.title,
    sub: `${c.domains.join(' • ')} — ${c.sub}`,
    nav: c.id
  })),
  ...GLOSSARY.map(g => ({
    type: 'Glossary',
    title: g.term,
    sub: g.def,
    gloss: g.key
  })),
  ...ICONS_24.map(ic => ({
    type: '10s Icon',
    title: ic.name,
    sub: `Stroke guide: ${ic.tip} (Chapter 12)`,
    nav: 'ch12'
  })),
  ...ISO_OBJECTS.map(obj => ({
    type: 'Isometric',
    title: obj.name,
    sub: `${obj.domain} — ${obj.recipe}`,
    nav: 'ch10'
  })),
  ...DIAGRAM_PATTERNS.map(p => ({
    type: 'Diagram',
    title: p.title,
    sub: `${p.specs[0][1]} (Chapter 16)`,
    nav: 'ch16'
  })),
  ...METAPHORS_12.map(m => ({
    type: 'Metaphor',
    title: m.title,
    sub: `${m.concept} — ${m.tip} (Chapter 12)`,
    nav: 'ch12'
  })),
  ...STEAL_GRAPHICS.map(g => ({
    type: 'Steal Book',
    title: g.name,
    sub: `${g.use} (Appendix C)`,
    nav: 'appC',
    pick: g.id
  })),
  ...DRAW_LESSONS.map(l => ({
    type: 'Draw Lesson',
    title: l.name,
    sub: `4-Step Guided Illustration (${l.ratio}) + Trace Pad (Appendix D)`,
    nav: 'appD',
    pick: l.id
  })),
  ...MIND_MAP_DESIGNS.map(m => ({
    type: 'Mind Map',
    title: m.name,
    sub: `${m.bestFor} (Appendix E)`,
    nav: 'appE',
    pick: m.id
  })),
  ...TAX_STUDY_TEMPLATES.map(t => ({
    type: 'Tax / Acct',
    title: t.name,
    sub: `${t.tag} — Visual Study Spread (Appendix F)`,
    nav: 'appF',
    pick: t.id
  })),
  ...PROCESS_ARCHETYPES.map(p => ({
    type: 'Process Flow',
    title: p.name,
    sub: `${p.bestFor} (Appendix G)`,
    nav: 'appG',
    pick: p.id
  })),
  ...LANG_SPREADS.map(l => ({
    type: 'Language',
    title: l.name,
    sub: `${l.tag} — Language Notebook Layout (Appendix H)`,
    nav: 'appH',
    pick: l.id
  })),
  ...STUDY_SYSTEMS.map(s => ({
    type: 'Study OS',
    title: s.name,
    sub: `${s.bestFor} (Appendix I)`,
    nav: 'appI',
    pick: s.id
  })),
  ...CLEVER_METAPHORS.map(m => ({
    type: 'Metaphor',
    title: m.name,
    sub: `${m.concept} (${m.shapes}) (Appendix J)`,
    nav: 'appJ',
    pick: m.id
  })),
  ...EXPLODED_SCENES.map(s => ({
    type: 'Exploded 3D',
    title: s.name,
    sub: `Interactive Exploded Isometric Cutaway (Appendix K)`,
    nav: 'appK',
    pick: s.id
  })),
  ...PRODUCT_BLUEPRINTS.map(p => ({
    type: 'Product / UX',
    title: p.name,
    sub: `${p.tag} — Product Thinking Blueprint (Appendix L)`,
    nav: 'appL',
    pick: p.id
  })),
  ...DESIGN_LAWS.map(l => ({
    type: 'Design Theory',
    title: l.name,
    sub: `${l.rule} (Appendix N)`,
    nav: 'appN',
    pick: l.id
  })),
  ...LEARNING_PILLARS.map(p => ({
    type: 'Visual Learning',
    title: p.name,
    sub: `${p.how} (Appendix O)`,
    nav: 'appO',
    pick: p.id
  })),
  ...ART_STYLES.map(s => ({
    type: 'Art Style',
    title: s.name,
    sub: `${s.bestFor} (Appendix P)`,
    nav: 'appP',
    pick: s.id
  }))
];

let cmdSelected = 0;
let cmdMatches = [];

function openCmdModal() {
  const modal = document.getElementById('cmd-modal');
  modal.hidden = false;
  const input = document.getElementById('cmd-input');
  input.value = '';
  renderCmdResults('');
  setTimeout(() => input.focus(), 20);
}

function closeCmdModal() {
  document.getElementById('cmd-modal').hidden = true;
}

function renderCmdResults(query) {
  const q = query.toLowerCase().trim();
  cmdMatches = q
    ? SEARCH_INDEX.filter(it => it.title.toLowerCase().includes(q) || it.sub.toLowerCase().includes(q) || it.type.toLowerCase().includes(q)).slice(0, 14)
    : SEARCH_INDEX.slice(0, 10);
  cmdSelected = 0;

  const box = document.getElementById('cmd-results');
  if (!cmdMatches.length) {
    box.innerHTML = `<div class="mono" style="padding:18px; text-align:center; font-size:12px; color:var(--ink-muted);">No matching chapters, icons, or glossary terms found.</div>`;
    return;
  }
  const badgeColor = (t) => {
    if (t === 'Glossary' || t === 'Tax / Acct') return 'violet';
    if (t === '10s Icon' || t === 'Draw Lesson') return 'mint';
    if (t === 'Steal Book' || t === 'Language') return 'amber';
    if (t === 'Mind Map' || t === 'Process Flow' || t === 'Metaphor') return 'magenta';
    return 'cyan';
  };
  const cntEl = document.getElementById('cmd-count');
  if (cntEl) cntEl.textContent = `${SEARCH_INDEX.length} Indexed Items`;

  box.innerHTML = cmdMatches.map((m, i) => `
    <button class="cmd-item ${i === 0 ? 'selected' : ''}" data-cmd-idx="${i}">
      <div style="min-width:0;">
        <div style="font-weight:700; font-size:14px; color:var(--ink);">${m.title}</div>
        <div style="font-size:12px; color:var(--ink-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:480px;">${m.sub}</div>
      </div>
      <span class="pill ${badgeColor(m.type)}">${m.type}</span>
    </button>
  `).join('');
}

function activateCmdItem(idx) {
  const item = cmdMatches[idx];
  if (!item) return;
  closeCmdModal();
  if (item.gloss) openGlossaryModal(item.gloss);
  else if (item.nav) {
    window.__pendingJump = item.pick || null;
    openChapter(item.nav);
    if (item.pick) {
      setTimeout(() => {
        const targetBtn = document.querySelector(`[data-id="${item.pick}"]`);
        if (targetBtn) targetBtn.click();
        window.__pendingJump = null;
      }, 40);
    }
  }
}

// =========================================================================
// 5. GLOSSARY POPOVER & PROGRESS SYNC MODAL
// =========================================================================
function openGlossaryModal(key) {
  const item = GLOSSARY_MAP[key];
  if (!item) return;
  const ch = CHAPTERS.find(c => c.id === item.ch);
  document.getElementById('gloss-body').innerHTML = `
    <div style="display:flex; flex-direction:column; gap:10px;">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
        <h3 style="font-size:1.2rem; color:var(--ink);">${item.term}</h3>
        <span class="pill violet">${item.cat}</span>
      </div>
      <p style="font-size:15.5px; line-height:1.7; color:var(--ink-body);">${item.def}</p>
      <div style="display:flex; gap:8px; margin-top:4px;">
        <button class="btn" id="gloss-jump-btn" data-nav="${item.ch}">Read in ${ch ? `Ch ${ch.num}` : 'Chapter'} →</button>
        <button class="btn secondary" data-nav="appB">Open Full Glossary</button>
      </div>
    </div>
  `;
  document.getElementById('gloss-modal').hidden = false;
}

function closeGlossaryModal() {
  document.getElementById('gloss-modal').hidden = true;
}

function openProgModal() {
  document.getElementById('prog-status').textContent = '';
  document.getElementById('prog-modal').hidden = false;
}

function closeProgModal() {
  document.getElementById('prog-modal').hidden = true;
}

// =========================================================================
// 6. GLOBAL EVENT WIRING & INITIALIZATION
// =========================================================================
window.addEventListener('DOMContentLoaded', () => {
  const initSt = loadState();
  const syncInkTooth = (on) => {
    document.body.classList.toggle('ink-tooth', on);
    const btn = document.getElementById('btn-ink-tooth');
    if (btn) {
      btn.className = on ? 'btn secondary' : 'btn secondary';
      btn.textContent = on ? '✎ Ink Tooth: ON' : '✎ Ink Tooth: OFF';
      btn.style.background = on ? '#FFFDF5' : '#FFF';
      btn.style.borderColor = on ? 'var(--cyan)' : 'var(--ink)';
    }
  };
  syncInkTooth(initSt.sketchFilter !== false);
  document.getElementById('btn-ink-tooth')?.addEventListener('click', () => {
    const next = !document.body.classList.contains('ink-tooth');
    setSketchFilter(next);
    syncInkTooth(next);
    showToast(next ? '✎ Hand-drawn ink tooth enabled' : 'Clean vector mode enabled');
  });

  document.querySelectorAll('.toc-mode-btn').forEach(b => b.addEventListener('click', () => {
    tocMode = b.dataset.tocMode;
    document.querySelectorAll('.toc-mode-btn').forEach(x => x.classList.toggle('active', x === b));
    renderSidebar();
  }));

  // Global click delegation for navigation, glossary terms, and completion toggle
  document.addEventListener('click', (e) => {
    const navBtn = e.target.closest('[data-nav]');
    if (navBtn) {
      closeGlossaryModal();
      openChapter(navBtn.dataset.nav);
      return;
    }

    const glossEl = e.target.closest('[data-gloss]');
    if (glossEl) {
      openGlossaryModal(glossEl.dataset.gloss);
      return;
    }

    const doneBtn = e.target.closest('[data-toggle-done]');
    if (doneBtn) {
      const isDone = toggleChapterComplete(doneBtn.dataset.toggleDone);
      doneBtn.className = isDone ? 'btn mint' : 'btn secondary';
      doneBtn.textContent = isDone ? '✓ Completed' : '☐ Mark Complete';
      renderSidebar();
      showToast(isDone ? '✓ Marked complete! Progress saved.' : 'Marked incomplete.');
      return;
    }

    const cmdBtn = e.target.closest('[data-cmd-idx]');
    if (cmdBtn) {
      activateCmdItem(Number(cmdBtn.dataset.cmdIdx));
      return;
    }
  });

  // Topbar, Sidebar & Scroll Telemetry
  document.getElementById('mobile-menu-btn').addEventListener('click', () => toggleMobileToc(true));
  document.getElementById('toc-close-mobile').addEventListener('click', () => toggleMobileToc(false));
  document.getElementById('toc-backdrop').addEventListener('click', () => toggleMobileToc(false));
  document.getElementById('btn-print-ch').addEventListener('click', () => window.print());
  document.getElementById('btn-back-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', updateScrollTelemetry, { passive: true });

  // Search Modal
  document.getElementById('sidebar-search-btn').addEventListener('click', openCmdModal);
  document.getElementById('topbar-search-btn').addEventListener('click', openCmdModal);
  document.getElementById('cmd-close').addEventListener('click', closeCmdModal);
  document.getElementById('cmd-modal').addEventListener('click', (e) => { if (e.target.id === 'cmd-modal') closeCmdModal(); });
  document.getElementById('cmd-input').addEventListener('input', (e) => renderCmdResults(e.target.value));

  // Glossary & Progress Modals
  document.getElementById('gloss-close').addEventListener('click', closeGlossaryModal);
  document.getElementById('gloss-modal').addEventListener('click', (e) => { if (e.target.id === 'gloss-modal') closeGlossaryModal(); });

  document.getElementById('btn-open-progress').addEventListener('click', openProgModal);
  document.getElementById('prog-close').addEventListener('click', closeProgModal);
  document.getElementById('prog-modal').addEventListener('click', (e) => { if (e.target.id === 'prog-modal') closeProgModal(); });

  document.getElementById('btn-dl-json').addEventListener('click', () => {
    const blob = new Blob([exportStateJSON()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `looking-sketchy-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    document.getElementById('prog-status').textContent = '✓ Progress JSON downloaded.';
  });

  document.getElementById('inp-import-json').addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        importStateJSON(String(reader.result));
        openChapter(currentView, { pushHash: false });
        document.getElementById('prog-status').textContent = '✓ Progress imported and restored!';
      } catch (err) {
        document.getElementById('prog-status').textContent = '✕ Invalid JSON backup file.';
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('btn-reset-all').addEventListener('click', () => {
    if (!confirm('Reset all completed chapters, quiz scores, bootcamp days, and studio notes?')) return;
    resetAllState();
    openChapter(currentView, { pushHash: false });
    document.getElementById('prog-status').textContent = '↺ All progress reset.';
  });

  // Keyboard shortcuts (⌘K / Ctrl+K, Arrow navigation in Search Modal, Escape)
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (document.getElementById('cmd-modal').hidden) openCmdModal();
      else closeCmdModal();
      return;
    }
    if (e.key === 'Escape') {
      closeCmdModal();
      closeGlossaryModal();
      closeProgModal();
      return;
    }
    const cmdOpen = !document.getElementById('cmd-modal').hidden;
    if (cmdOpen && cmdMatches.length) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        cmdSelected = (cmdSelected + 1) % cmdMatches.length;
        document.querySelectorAll('.cmd-item').forEach((el, i) => el.classList.toggle('selected', i === cmdSelected));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        cmdSelected = (cmdSelected - 1 + cmdMatches.length) % cmdMatches.length;
        document.querySelectorAll('.cmd-item').forEach((el, i) => el.classList.toggle('selected', i === cmdSelected));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        activateCmdItem(cmdSelected);
      }
      return;
    }

    // [ and ] Prev / Next chapter shortcuts when not typing in an input
    const tag = (document.activeElement?.tagName || '').toLowerCase();
    if (!cmdOpen && !['input', 'textarea', 'select'].includes(tag) && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const idx = CHAPTERS.findIndex(c => c.id === currentView);
      if (e.key === ']') {
        const next = idx === -1 ? CHAPTERS[0] : CHAPTERS[idx + 1];
        if (next) openChapter(next.id);
      } else if (e.key === '[') {
        const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
        openChapter(prev ? prev.id : 'cover');
      }
    }
  });

  // Hash routing support (Back/Forward & deep links)
  window.addEventListener('hashchange', () => {
    const id = window.location.hash.replace(/^#/, '') || 'cover';
    if (id !== currentView) openChapter(id, { pushHash: false });
  });

  const initial = window.location.hash.replace(/^#/, '') || 'cover';
  openChapter(initial, { pushHash: false });
});
