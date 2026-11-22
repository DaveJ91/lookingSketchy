/* =========================================================================
   APPENDICES A & B: DISSECTED MASTER SPREADS + GLOSSARY & PRINT WORKBOOK
   ========================================================================= */
import { GLOSSARY } from '../data/glossary.js';
import { CHAPTERS } from '../data/syllabus.js';
import { renderSpreadDissectorHTML, initSpreadDissector } from '../labs/spreadDissector.js';
import { WORKBOOK_SHEETS, printWorkbookSheet } from '../labs/workbook.js';
import { renderStealBookHTML, initStealBook } from '../labs/stealBook.js';
import { renderDrawSchoolHTML, initDrawSchool } from '../labs/drawSchool.js';
import { renderMindMapLabHTML, initMindMapLab } from '../labs/mindMapLab.js';
import { renderTaxAccountingLabHTML, initTaxAccountingLab } from '../labs/taxAccountingLab.js';
import { renderProcessLabHTML, initProcessLab } from '../labs/processLab.js';
import { renderLanguageLabHTML, initLanguageLab } from '../labs/languageLab.js';
import { renderStudySystemsLabHTML, initStudySystemsLab } from '../labs/studySystemsLab.js';
import { renderMetaphorAtelierHTML, initMetaphorAtelier } from '../labs/metaphorAtelier.js';
import { renderExplodedIsoLabHTML, initExplodedIsoLab } from '../labs/explodedIsoLab.js';
import { renderProductLabHTML, initProductLab } from '../labs/productLab.js';
import { renderCraftHandbookHTML, initCraftHandbookLab } from '../labs/craftHandbookLab.js';
import { renderDesignTheoryLabHTML, initDesignTheoryLab } from '../labs/designTheoryLab.js';
import { renderVisualLearningLabHTML, initVisualLearningLab } from '../labs/visualLearningLab.js';
import { renderArtStylesLabHTML, initArtStylesLab } from '../labs/artStylesLab.js';

export const APPENDIX_RENDERERS = {
  // -------------------------------------------------------------------------
  // APPENDIX A: DISSECTED MASTER SPREADS GALLERY
  // -------------------------------------------------------------------------
  appA: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill magenta">5 Layered Case Studies</span></div>
      <h1 class="script"><span class="hl-cyan">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="prose-wrap">
      <p>
        Studying finished visual spreads can feel intimidating until you peel back the physical layers and see how simple each pass actually is. Use the interactive <strong>Layer Dissector</strong> below to inspect five full two-page spreads across <strong>AI Tax Orchestration, German Grammar (<em>der/die/das</em> &amp; <em>Satzklammer</em>), Executive Strategy, Book Synthesis, and Weekly Deep-Work OS</strong>. Toggle individual ink layers on/off or press <strong>Play 5-Layer Build Sequence</strong> to watch how Pass 1 monochrome capture transforms into a studio-grade page.
      </p>
    </div>

    ${renderSpreadDissectorHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--cyan);">Studio Habit // Reverse-Engineer One Spread Per Week</span>
      <p>
        Uncheck Layers 4 &amp; 5 above so you see <em>only</em> Pass 1 monochrome ink and containers. Notice how plain and fast Pass 1 really is—most of the visual polish comes from Layer 4 (Cool Grey cast shadows) and Layer 5 (two quiet semantic washes).
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX B: TECHNICAL GLOSSARY & PRINTABLE PRACTICE WORKBOOK
  // -------------------------------------------------------------------------
  appB: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill mint">32 Glossary Terms • 8 Print Sheets</span></div>
      <h1 class="script"><span class="hl-mint">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <!-- PRINTABLE A5/A4 PRACTICE WORKBOOK GENERATOR -->
    <section class="lab mint-accent">
      <div class="lab-head">
        <span class="lab-title">Printable A5 / A4 Practice Workbook Generator (8 Vector Drill Sheets)</span>
        <button id="wb-print-all" class="btn mint">⎙ Print All 8 Sheets (PDF)</button>
      </div>
      <div class="lab-body">
        <p style="font-size:14.8px; color:var(--ink-muted);">
          Print individual high-resolution vector practice sheets on 120gsm paper (or choose <em>Save as PDF</em> in your browser print dialog) to build real forearm muscle memory offline.
        </p>
        <div class="grid-3">
          ${WORKBOOK_SHEETS.map(s => `
            <div class="card">
              <div class="svg-box" style="max-height:175px; overflow:hidden;">${s.buildSVG()}</div>
              <div class="card-h">${s.title}</div>
              <p class="card-p">${s.desc}</p>
              <button class="btn secondary wb-print-one" data-wb="${s.id}" style="margin-top:auto;">⎙ Print This Sheet</button>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SEARCHABLE 32-TERM TECHNICAL GLOSSARY -->
    <section class="lab">
      <div class="lab-head">
        <span class="lab-title">Searchable Technical Glossary (32 Core Terms)</span>
        <span id="appb-gcount" class="pill violet">32 Terms</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl no-print">
          <input id="appb-gsearch" class="search-in" type="text" placeholder="Filter glossary (e.g. gsm, satz, glazing, ao)..." />
          <div class="segmented" role="group">
            <button class="seg-btn appb-gcat active" data-c="all">All</button>
            <button class="seg-btn appb-gcat" data-c="Cognition">Cognition</button>
            <button class="seg-btn appb-gcat" data-c="Typography">Typography</button>
            <button class="seg-btn appb-gcat" data-c="Diagrams">Diagrams</button>
            <button class="seg-btn appb-gcat" data-c="Illustration">Illustration</button>
            <button class="seg-btn appb-gcat" data-c="Color">Color/Light</button>
          </div>
        </div>
        <div id="appb-glist" class="grid-2"></div>
      </div>
    </section>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX C: THE SKETCHNOTE STEAL BOOK (200 ICONIC HANDWRITTEN GRAPHICS)
  // -------------------------------------------------------------------------
  appC: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill magenta">200 Steal-Worthy Graphics • 10 Categories</span><span class="pill amber">🎲 Idea Generator</span></div>
      <h1 class="script"><span class="hl-amber">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="prose-wrap">
      <p>
        Experienced visual note-takers rarely invent graphics mid-meeting—they <strong>reuse a personal swipe file</strong> of 10-second devices borrowed from architects, editors, transit maps, and product wireframes. Browse or search all <strong>200 analog components</strong> below to inspect any graphic with its 3-step progressive build reveal, save your go-to pieces to <code>★ Favorites</code>, or roll the <strong>Spread Idea Generator</strong> underneath.
      </p>
    </div>

    ${renderStealBookHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--cyan);">Practice Habit // Adopt Two Devices Per Week</span>
      <p>
        Resist cramming ten graphics onto one spread. Pick just <strong>two micro-graphics per week</strong>—save them to your <code>★ Favorites</code> tab above—and reuse them until your hand draws them without thinking.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX D: "DRAW ANYTHING IN 4 STEPS" ILLUSTRATION SCHOOL (24 LESSONS)
  // -------------------------------------------------------------------------
  appD: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill violet">200 Mini-Illustrations • 10 Categories</span><span class="pill mint">4 Visual Steps + Live Trace Pad</span></div>
      <h1 class="script"><span class="hl-violet">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="prose-wrap">
      <p>
        Every charming notebook illustration—whether it is a steaming coffee mug, an isometric database stack, a judge's gavel, a peeking margin cat, a Crazy-4s wireframe, or a folded header ribbon—is built from the exact same <strong>4-step geometric recipe</strong>: <em>(1) Outer Silhouette → (2) Core Landmark → (3) Secondary Details → (4) One Accent Glaze + Shadow</em>. Search or filter all <strong>200 lessons</strong> below (or hit <strong>🎲 Surprise Me!</strong>) to view all four visual stages side-by-side and trace directly over the faint Ghost Guide!
      </p>
    </div>

    ${renderDrawSchoolHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--violet);">5-Minute Warmup // The 3-Rep Drill</span>
      <p>
        Pick <strong>one</strong> drawing from the grid above before opening your workday notebook. Sketch it three times on scrap dot-grid paper: once slowly while glancing at Steps 1–4, once at regular speed, and once from memory in under 12 seconds.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX E: MIND-MAPPING ARCHITECTURE & COOL VISUAL DESIGNS STUDIO
  // -------------------------------------------------------------------------
  appE: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill magenta">8 Cool Mind-Map Designs</span><span class="pill mint">Live Custom Builder + SVG Export</span></div>
      <h1 class="script"><span class="hl-cyan">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    ${renderMindMapLabHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--cyan);">Studio Rule // Pick Your Map Shape Before Touching Pen to Paper</span>
      <p>
        Use <strong>Organic Tapered Roots</strong> for open-ended brainstorming, <strong>Cyber PCB 45°</strong> for AI/engineering specs, <strong>Split-Brain Brackets</strong> when working on narrow A5 portrait pages, and <strong>Honeycomb Hex Clusters</strong> when you want modular concepts without drawing a single arrow!
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX F: VISUAL STUDY NOTES FOR ACCOUNTING & TAX
  // -------------------------------------------------------------------------
  appF: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill magenta">6 Tax &amp; Accounting Spreads</span><span class="pill mint">Live T-Account Visualizer</span></div>
      <h1 class="script"><span class="hl-amber">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    ${renderTaxAccountingLabHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--amber-deep);">Exam Revision Rule // Never Study a § Statute Without a € Number</span>
      <p>
        Always pair every tax rule or IFRS/HGB standard with a <strong>3-line concrete Euro example</strong> directly below it—your brain remembers visual relationships between <code>€1,000 → +€190 USt</code> ten times faster than abstract statutory phrasing.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX G: ILLUSTRATING PROCESSES, PIPELINES & WORKFLOWS
  // -------------------------------------------------------------------------
  appG: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill violet">8 Workflow Archetypes</span><span class="pill magenta">Live Process Designer + SVG Export</span></div>
      <h1 class="script"><span class="hl-mint">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    ${renderProcessLabHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--mint-deep);">Clarity Check // Every Real Process Has an Exception Loop!</span>
      <p>
        A diagram with only happy-path arrows hides real operational risk. Keep your primary Cyan workflow clean left-to-right, and tuck one crisp dashed Magenta <code>↺ Retry / Escalate</code> arc underneath—clients and teammates will immediately trust your design.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX H: VISUAL LANGUAGE-LEARNING NOTEBOOK STUDIO
  // -------------------------------------------------------------------------
  appH: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill amber">8 Language Spreads</span><span class="pill magenta">Live Vocab Card Builder + Recall Mode</span></div>
      <h1 class="script"><span class="hl-amber">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    ${renderLanguageLabHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--amber-deep);">Polyglot Rule // Never Write an Isolated Word Without a Context Chunk</span>
      <p>
        Isolated dictionary translations vanish in 48 hours. Pair every new German noun with its <strong>gender color</strong>, a <strong>3-second doodle</strong>, and a <strong>1-line real sentence</strong> you would actually say tomorrow—then fold the page right down the middle to self-test!
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX I: ANALOG STUDY SYSTEMS, HABIT HEATMAPS & BOOK DASHBOARDS
  // -------------------------------------------------------------------------
  appI: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill mint">6 Study &amp; Productivity Systems</span><span class="pill violet">Interactive 14-Day Glaze Heatmap</span></div>
      <h1 class="script"><span class="hl-cyan">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    ${renderStudySystemsLabHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--cyan);">Meta-Learning Habit // The 2-Pass Glaze Streak Rule</span>
      <p>
        Keep your daily bar ridiculously low: <strong>1 light highlighter pass = 10-minute minimum win</strong> (protects the chain on hectic days), and <strong>2 passes = deep 30-minute flow</strong>. Consistency always crushes heroic weekend cramming.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX J: CLEVER VISUAL METAPHORS ATELIER (ARTSY-YET-EASY!)
  // -------------------------------------------------------------------------
  appJ: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill magenta">12 Editorial Spot Metaphors</span><span class="pill mint">4 Easy Steps + Live Trace Pad</span></div>
      <h1 class="script"><span class="hl-magenta">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="prose-wrap">
      <p>
        You don't need art-school realism to make people stop and admire your sketchbook. The secret behind iconic editorial spot illustrations (<em>The New Yorker</em>, <em>Visualize Value</em>, architectural zines) is <strong>conceptual wit built from 3 tiny geometric shapes</strong>: one triangle refracting light into clarity, one keyhole opening onto a mountain range, one pair of scissors snipping a sandbag off a hot-air balloon. Pick any of the <strong>12 clever metaphors</strong> below, watch its 4-step construction, and trace it straight onto the live dot-grid pad!
      </p>
    </div>

    ${renderMetaphorAtelierHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--magenta-deep);">Editorial Secret // Contrast = Instant "Artsy" Look</span>
      <p>
        Notice why the <em>Keyhole World</em> and <em>Half-Open Light Door</em> look dramatically artistic despite using just 4 shapes: <strong>one bold solid Indigo silhouette</strong> paired with <strong>one bright glowing accent color</strong> creates instant poster-level contrast on a clean dot-grid page!
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX K: ISOMETRIC & EXPLODED-VIEW ILLUSTRATION MASTERCLASS
  // -------------------------------------------------------------------------
  appK: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill violet">6 Exploded-View Assemblies</span><span class="pill magenta">Interactive Explode Slider</span></div>
      <h1 class="script"><span class="hl-cyan">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    ${renderExplodedIsoLabHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--cyan);">Exploded-View Pro Secret // The Dashed Corner Rail</span>
      <p>
        Floating diamond planes look disconnected until you drop <strong>two faint vertical dashed lines</strong> linking the left and right corners from top slab down to bottom slab. Instantly your viewer's brain snaps the whole machine together in 3D!
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX L: PRODUCT THINKING, DECISION TREES & UX SKETCHING STUDIO
  // -------------------------------------------------------------------------
  appL: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill mint">8 Product Blueprints</span><span class="pill violet">Live 2×2 Feature Plotter</span></div>
      <h1 class="script"><span class="hl-mint">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    ${renderProductLabHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--mint-deep);">Product Craft Rule // Sketch Before Specs or Figma</span>
      <p>
        A 3-minute Opportunity Tree, Emotion Curve, or Crazy-4s thumbnail sketched on dot-grid paper exposes flawed assumptions long before a 6-page PRD. Keep screens small so reviewers debate user flow and edge cases rather than button colors.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX M: THE CRAFT & PHYSICAL HAND HANDBOOK
  // -------------------------------------------------------------------------
  appM: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill magenta">5 Hand Laws &amp; Messy Rescue</span><span class="pill amber">5 Marker Palettes</span></div>
      <h1 class="script"><span class="hl-amber">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    ${renderCraftHandbookHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--amber-deep);">Restraint Rule // 60% Paper • 30% Ink • 10% Color</span>
      <p>
        The quickest way to clutter a notebook page is highlighting five blocks in five different colors. Carry <strong>one archival ink pen, one Cool Grey marker, and at most two accents</strong>—every spread stays calm and legible without extra effort.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX N: DESIGN THEORY & THE SCIENCE OF EFFECTIVE VISUALS
  // -------------------------------------------------------------------------
  appN: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill violet">6 Design Theory Laws</span><span class="pill magenta">Live Squint-Test Walkthrough</span></div>
      <h1 class="script"><span class="hl-violet">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    ${renderDesignTheoryLabHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--violet);">Litmus Test // Subtraction Beats Decoration</span>
      <p>
        Effective visuals rarely need another border, icon, or color. Keep removing every mark that does not clarify a relationship until the reader's eye lands directly on the primary point.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX O: COGNITIVE SCIENCE OF VISUAL LEARNING & MAKING CONTENT STICK
  // -------------------------------------------------------------------------
  appO: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill mint">6 Cognitive Principles</span><span class="pill magenta">Retention Model &amp; Drills</span></div>
      <h1 class="script"><span class="hl-mint">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    ${renderVisualLearningLabHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--mint-deep);">Retrieval Rule // Effortful Recall Beats Smooth Re-Reading</span>
      <p>
        When reviewing neat notes feels completely smooth, you are usually recognizing the layout rather than testing memory. Close the notebook for 90 seconds, draw the rough skeleton on scrap paper, and let the Magenta gaps show you what actually needs review.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // APPENDIX P: BEYOND ISOMETRIC — 8 ESSENTIAL ILLUSTRATION STYLES
  // -------------------------------------------------------------------------
  appP: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill cyan">${part.title}</span><span class="pill violet">8 Illustration Styles</span><span class="pill magenta">1 Object × 6 Styles Lab</span></div>
      <h1 class="script"><span class="hl-cyan">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    ${renderArtStylesLabHTML()}

    <div class="mental-model">
      <span class="callout-label" style="color:var(--cyan);">Stylistic Warmup // Same Mug, Three Styles</span>
      <p>
        Sketch one ordinary object (a mug, key, or laptop) three times across one row: <strong>Flat Geometric</strong> → <strong>2.5D Oblique</strong> → <strong>High-Contrast Spot</strong>. Within two minutes you can feel how "style" is simply a small set of deliberate line and shadow choices.
      </p>
    </div>
  `
};

export const APPENDIX_INITS = {
  appA: () => {
    initSpreadDissector();
  },

  appB: () => {
    document.getElementById('wb-print-all')?.addEventListener('click', () => printWorkbookSheet('all'));
    document.querySelectorAll('.wb-print-one').forEach(btn => {
      btn.addEventListener('click', () => printWorkbookSheet(btn.dataset.wb));
    });

    let cat = 'all';
    const renderGloss = () => {
      const q = (document.getElementById('appb-gsearch').value || '').toLowerCase().trim();
      const list = GLOSSARY.filter(g => {
        const catOk = cat === 'all' || g.cat === cat || (cat === 'Color' && (g.cat === 'Color' || g.cat === 'Light'));
        const qOk = !q || g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q) || g.cat.toLowerCase().includes(q);
        return catOk && qOk;
      });
      document.getElementById('appb-gcount').textContent = `${list.length} Terms`;
      document.getElementById('appb-glist').innerHTML = list.map(g => {
        const chObj = CHAPTERS.find(c => c.id === g.ch);
        return `
          <div class="card tinted">
            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
              <span class="card-h">${g.term}</span>
              <span class="pill violet">${g.cat}</span>
            </div>
            <p class="card-p">${g.def}</p>
            <button class="btn secondary" data-nav="${g.ch}" style="align-self:flex-start; font-size:10.5px; padding:4px 9px;">
              Jump to Ch ${chObj ? chObj.num : ''} →
            </button>
          </div>`;
      }).join('');
    };
    document.getElementById('appb-gsearch').addEventListener('input', renderGloss);
    document.querySelectorAll('.appb-gcat').forEach(b => b.addEventListener('click', () => {
      cat = b.dataset.c;
      document.querySelectorAll('.appb-gcat').forEach(x => x.classList.toggle('active', x === b));
      renderGloss();
    }));
    renderGloss();
  },

  appC: () => {
    initStealBook();
  },

  appD: () => {
    initDrawSchool();
  },

  appE: () => {
    initMindMapLab();
  },

  appF: () => {
    initTaxAccountingLab();
  },

  appG: () => {
    initProcessLab();
  },

  appH: () => {
    initLanguageLab();
  },

  appI: () => {
    initStudySystemsLab();
  },

  appJ: () => {
    initMetaphorAtelier();
  },

  appK: () => {
    initExplodedIsoLab();
  },

  appL: () => {
    initProductLab();
  },

  appM: () => {
    initCraftHandbookLab();
  },

  appN: () => {
    initDesignTheoryLab();
  },

  appO: () => {
    initVisualLearningLab();
  },

  appP: () => {
    initArtStylesLab();
  }
};
