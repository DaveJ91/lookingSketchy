/* =========================================================================
   BOOK COVER, MASTERY DASHBOARD & SYLLABUS OVERVIEW
   ========================================================================= */
import { PARTS, CHAPTERS, MAIN_CHAPTERS } from '../data/syllabus.js';
import { getState } from '../state.js';
import { HERO_ISO_COVER } from '../data/metaphors.js';
import { BRAND_NAME, BRAND_SUBTITLE, BRAND_MARK_SVG } from '../data/brand.js';

export function renderCover() {
  const st = getState();
  const doneCh = st.completedChapters.filter(id => MAIN_CHAPTERS.some(c => c.id === id)).length;
  const passedQ = Object.values(st.passedQuizzes).filter(q => q && q.passed).length;
  const boot = st.bootcampDays.length;

  return `
    <section class="chapter-banner" style="box-shadow: 6px 6px 0 var(--ink);">
      <div class="pills">
        <span class="pill cyan">Looking Sketchy // Studio Edition</span>
        <span class="pill violet">18 Chapters + 16 Interactive Studios</span>
        <span class="pill magenta">200 Guided Drawings • 44+ Live Labs</span>
        <span class="pill amber">Product • AI/Tech • Tax • Deutsch</span>
      </div>
      <div class="cover-brand-lockup">
        <span class="cover-brand-mark">${BRAND_MARK_SVG}</span>
        <div>
          <h1 class="script" style="font-size:clamp(2rem, 3.6vw, 2.85rem); line-height:1.35;"><span class="hl-cyan">${BRAND_NAME}</span></h1>
          <p style="font-size:16.8px; font-weight:600; color:var(--ink); margin-top:2px;">${BRAND_SUBTITLE}</p>
        </div>
      </div>
      <p class="chapter-banner-sub">
        Cluttered notebooks and "I can't draw" are mostly mechanical habits, not missing talent. Practice readable handwriting levers, real-time note compression, hand-plotted dot-grid charts, isometric and cutaway forms, editorial metaphors, and visual clarity—grounded in worked examples across <strong>Product Design, AI Systems, Tax &amp; Accounting, and German</strong>.
      </p>

      ${HERO_ISO_COVER}

      <!-- Mastery Telemetry Strip -->
      <div class="grid-3" style="margin-top:6px;">
        <div class="card tinted">
          <div class="mono" style="font-size:10px; font-weight:700; color:var(--cyan); text-transform:uppercase;">Chapters Read</div>
          <div class="mono" style="font-size:22px; font-weight:700; color:var(--ink);">${doneCh} / ${MAIN_CHAPTERS.length}</div>
          <div class="progress-rail"><div class="progress-fill" style="width:${Math.round(doneCh / MAIN_CHAPTERS.length * 100)}%;"></div></div>
        </div>
        <div class="card tinted">
          <div class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep); text-transform:uppercase;">Quizzes Passed</div>
          <div class="mono" style="font-size:22px; font-weight:700; color:var(--ink);">${passedQ} / ${MAIN_CHAPTERS.length}</div>
          <div class="progress-rail"><div class="progress-fill" style="width:${Math.round(passedQ / MAIN_CHAPTERS.length * 100)}%;"></div></div>
        </div>
        <div class="card tinted">
          <div class="mono" style="font-size:10px; font-weight:700; color:var(--magenta-deep); text-transform:uppercase;">14-Day Studio Bootcamp</div>
          <div class="mono" style="font-size:22px; font-weight:700; color:var(--ink);">${boot} / 14 Days</div>
          <div class="progress-rail"><div class="progress-fill" style="width:${Math.round(boot / 14 * 100)}%;"></div></div>
        </div>
      </div>

      <div style="display:flex; flex-wrap:wrap; align-items:center; gap:9px; margin-top:6px;">
        <button class="btn" data-nav="ch1">Start Chapter 1 →</button>
        <button class="btn secondary" data-nav="ch6">Live Listening (Ch 6)</button>
        <button class="btn secondary" data-nav="ch8">Analog Chart Plotter (Ch 8)</button>
        <button class="btn secondary" data-nav="ch10">20 Isometric Scenes (Ch 10)</button>
        <button class="btn mint" data-nav="appB">⎙ Printable Workbook (8 PDFs)</button>
      </div>
    </section>

    <!-- Interactive Studios Quick-Launch Dock (Appendices A–P) -->
    <section style="display:flex; flex-direction:column; gap:10px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <span class="pill violet">Interactive Studios Quick-Launch Dock (Appendices A–P)</span>
        <span class="mono" style="font-size:10.5px; color:var(--ink-muted);">Tip: Press ⌘K to search 400+ items or [ / ] to flip chapters</span>
      </div>
      <div class="studio-dock">
        <button class="studio-tile" data-nav="appD">
          <span class="pill violet" style="align-self:flex-start;">App D • 200 Lessons</span>
          <div class="card-h">✎ 200-Drawing School</div>
          <div class="card-p" style="font-size:12.5px;">200 4-step drawings (Iso, UX, Banners) + Trace Pad.</div>
        </button>
        <button class="studio-tile" data-nav="appK">
          <span class="pill cyan" style="align-self:flex-start;">App K • Exploded 3D</span>
          <div class="card-h">⬢ Exploded Isometrics</div>
          <div class="card-p" style="font-size:12.5px;">2-over-1-up cutaway guide + Live Explode Slider.</div>
        </button>
        <button class="studio-tile" data-nav="appL">
          <span class="pill mint" style="align-self:flex-start;">App L • Product Skills</span>
          <div class="card-h">◈ Product &amp; UX Studio</div>
          <div class="card-p" style="font-size:12.5px;">Opportunity Trees, Wireframes, Funnels &amp; 2×2 Lab.</div>
        </button>
        <button class="studio-tile" data-nav="appM">
          <span class="pill amber" style="align-self:flex-start;">App M • Craft &amp; Hand</span>
          <div class="card-h">✦ Pen Mechanics &amp; Markers</div>
          <div class="card-p" style="font-size:12.5px;">5 hand laws, messy-call rescue, handwriting &amp; palettes.</div>
        </button>
        <button class="studio-tile" data-nav="appN">
          <span class="pill violet" style="align-self:flex-start;">App N • Design Theory</span>
          <div class="card-h">◎ Design Theory &amp; Clarity</div>
          <div class="card-p" style="font-size:12.5px;">CRAP, Gestalt, Tufte &amp; Live 5s Squint-Test Lab.</div>
        </button>
        <button class="studio-tile" data-nav="appO">
          <span class="pill mint" style="align-self:flex-start;">App O • Memory Science</span>
          <div class="card-h">✦ Visual Learning &amp; Recall</div>
          <div class="card-p" style="font-size:12.5px;">Drawing Effect, Forgetting-Curve Lab &amp; Rituals.</div>
        </button>
        <button class="studio-tile" data-nav="appP">
          <span class="pill cyan" style="align-self:flex-start;">App P • 8 Art Styles</span>
          <div class="card-h">◈ Beyond Isometric Styles</div>
          <div class="card-p" style="font-size:12.5px;">2.5D Oblique, Ligne Claire, Cutaways &amp; Spot Art.</div>
        </button>
        <button class="studio-tile" data-nav="appJ">
          <span class="pill magenta" style="align-self:flex-start;">App J • 12 Metaphors</span>
          <div class="card-h">✦ Clever Metaphors Atelier</div>
          <div class="card-p" style="font-size:12.5px;">Artsy-yet-easy editorial visuals + Live Trace Pad.</div>
        </button>
        <button class="studio-tile" data-nav="appH">
          <span class="pill amber" style="align-self:flex-start;">App H • Deutsch B1/B2</span>
          <div class="card-h">◉ Language Notebook Studio</div>
          <div class="card-p" style="font-size:12.5px;">8 polyglot spreads + Visual Vocab Card Builder.</div>
        </button>
        <button class="studio-tile" data-nav="appC">
          <span class="pill amber" style="align-self:flex-start;">App C • 200 Graphics</span>
          <div class="card-h">★ Sketchnote Steal Book</div>
          <div class="card-p" style="font-size:12.5px;">200 analog devices across 10 categories + Idea Generator.</div>
        </button>
        <button class="studio-tile" data-nav="appE">
          <span class="pill magenta" style="align-self:flex-start;">App E • 8 Designs</span>
          <div class="card-h">❖ Mind-Map Studio</div>
          <div class="card-p" style="font-size:12.5px;">Botanical, PCB, Solar &amp; Hex maps + SVG builder.</div>
        </button>
        <button class="studio-tile" data-nav="appF">
          <span class="pill cyan" style="align-self:flex-start;">App F • 6 Spreads</span>
          <div class="card-h">§ Accounting &amp; Tax Notes</div>
          <div class="card-p" style="font-size:12.5px;">T-Accounts, VAT trees &amp; Live Journal Visualizer.</div>
        </button>
        <button class="studio-tile" data-nav="appG">
          <span class="pill mint" style="align-self:flex-start;">App G • 8 Flows</span>
          <div class="card-h">⇢ Illustrating Processes</div>
          <div class="card-p" style="font-size:12.5px;">S-Curves, Factory Cutaways &amp; Live Flow Designer.</div>
        </button>
        <button class="studio-tile" data-nav="appI">
          <span class="pill cyan" style="align-self:flex-start;">App I • 6 Systems</span>
          <div class="card-h">▦ Analog Study Systems</div>
          <div class="card-p" style="font-size:12.5px;">Cornell, Feynman, Book 1-Pagers &amp; Habit Heatmap.</div>
        </button>
        <button class="studio-tile" data-nav="appA">
          <span class="pill violet" style="align-self:flex-start;">App A • 5 Spreads</span>
          <div class="card-h">◫ Dissected Spreads</div>
          <div class="card-p" style="font-size:12.5px;">Peel back 5 ink layers on full 2-page spreads.</div>
        </button>
      </div>
    </section>

    <!-- Domain Flavor Key -->
    <div class="grid-3">
      <div class="card">
        <span class="pill cyan" style="align-self:flex-start;">AI / Tech Flavor</span>
        <div class="card-h">Multi-Agent &amp; System Architecture</div>
        <p class="card-p">Isometric planes, latency dumbbells, MCP tool firebreaks, and swimlanes that keep stateless reasoning isolated from production write keys.</p>
      </div>
      <div class="card">
        <span class="pill magenta" style="align-self:flex-start;">Tax / Advisory Flavor</span>
        <div class="card-h">EU VAT, Statutes &amp; Client Memos</div>
        <p class="card-p">Binary decision trees for B2B Reverse Charge vs. B2C OSS, tabular Euro ledgers, statutory deadline calendars, and HITL sign-off stamps.</p>
      </div>
      <div class="card">
        <span class="pill amber" style="align-self:flex-start;">Deutsch B1/B2 Flavor</span>
        <div class="card-h">Cases, Satzklammer &amp; Vocab Maps</div>
        <p class="card-p">Semantic color-coding for <em>der/die/das</em>, bracket diagrams for V2 word order, verb-tense timelines, and Anki-ready sketch cards.</p>
      </div>
    </div>

    ${PARTS.map(p => {
      const chs = CHAPTERS.filter(c => c.part === p.id);
      return `
        <div style="display:flex; flex-direction:column; gap:12px;">
          <div><span class="pill ${p.badge}">${p.title}</span></div>
          <div class="grid-2">
            ${chs.map(c => {
              const isDone = st.completedChapters.includes(c.id);
              const qRes = st.passedQuizzes[c.id];
              const label = c.isAppendix ? `APPENDIX ${c.num}` : `CHAPTER ${String(c.num).padStart(2, '0')}`;
              return `
                <button class="cover-ch-card" data-nav="${c.id}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; width:100%;">
                    <span class="mono" style="font-size:10.5px; font-weight:700; color:var(--violet);">${label} • ${c.time}</span>
                    <div style="display:flex; gap:5px; align-items:center;">
                      ${c.isNew ? '<span class="pill magenta">NEW</span>' : ''}
                      ${qRes && qRes.passed ? '<span class="pill cyan">Quiz ✓</span>' : ''}
                      ${isDone ? '<span class="pill mint">✓ Done</span>' : '<span class="mono" style="font-size:10.5px; color:var(--ink-muted);">Open →</span>'}
                    </div>
                  </div>
                  <div class="card-h">${c.title}</div>
                  <div class="card-p">${c.sub}</div>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('')}
  `;
}
