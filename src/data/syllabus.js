/* =========================================================================
   TEXTBOOK SYLLABUS: 6 PARTS, 18 FULL CHAPTERS + 16 INTERACTIVE STUDIOS
   ========================================================================= */
export const PARTS = [
  { id: 'P1', title: 'Part I: Foundations, Color & Hardware', badge: 'cyan' },
  { id: 'P2', title: 'Part II: Handwriting, Typography, Layouts & Live Capture', badge: 'violet' },
  { id: 'P3', title: 'Part III: Diagrams, Analog Data Viz & Matrices', badge: 'magenta' },
  { id: 'P4', title: 'Part IV: Non-Artist\'s Illustration, Shadow & Storytelling', badge: 'mint' },
  { id: 'P5', title: 'Part V: Mastery, Physics, Digital Bridge & Diagnostics', badge: 'amber' },
  { id: 'APP', title: 'Appendices A–P: 16 Studios (200 Drawings, Styles, Isometrics, Product, Design & Memory)', badge: 'cyan' }
];

export const CHAPTERS = [
  // Part I
  {
    id: 'ch1', num: 1, part: 'P1', time: '12 min read',
    domains: ['AI/Tech', 'Tax', 'Deutsch'],
    title: 'Visual Thinking, Gestalt Principles & Semantic Color',
    sub: 'Dual-Coding Theory, spatial memory, Gestalt dot-grid laws, and semantic color encoding for AI pipelines, tax rules, and German der/die/das grammar.'
  },
  {
    id: 'ch2', num: 2, part: 'P1', time: '11 min read',
    domains: ['Hardware', 'Studio'],
    title: 'Paper Physics, Ink Chemistry & The Analog Toolkit',
    sub: 'GSM cellulose physics, waterproof pigment vs. gel ink, nib engineering, an interactive Ink × Paper Chemistry Simulator, and tiered kits.'
  },

  // Part II
  {
    id: 'ch3', num: 3, part: 'P2', time: '12 min read',
    domains: ['Biomechanics', 'Deutsch'],
    title: 'The Biomechanics of Neat, Legible Handwriting',
    sub: 'Four mechanical levers—x-height, 90° vertical slant, corner braking, and forearm pulls—plus a live Dot-Grid Trace Sketchpad.'
  },
  {
    id: 'ch4', num: 4, part: 'P2', time: '11 min read',
    domains: ['Tax', 'Deutsch'],
    title: 'Hand-Lettering Systems & Visual Hierarchy',
    sub: 'Architect\'s Print, Faux Calligraphy downstrokes, Tabular Numbers (Ø), Highlighter-Drop headers, and a 4-level Hierarchy Simulator.'
  },
  {
    id: 'ch5', num: 5, part: 'P2', time: '13 min read',
    domains: ['AI/Tech', 'Tax', 'Deutsch'],
    title: 'Page Architecture, Layouts & The Notebook OS',
    sub: 'Six Golden Layout Rules, 4 reusable dot-grid blueprints, interactive Two-Pass Note Scrubbing Lab, mistake recovery, and 6-slot Edge-Tabbing.'
  },
  {
    id: 'ch6', num: 6, part: 'P2', time: '12 min read', isNew: true,
    domains: ['AI/Tech', 'Tax', 'Deutsch'],
    title: 'Real-Time Listening & Cognitive Compression',
    sub: 'How to distill live client tax calls, AI architecture reviews, and German podcasts from 100 spoken words into 7 visual anchors without falling behind.'
  },

  // Part III
  {
    id: 'ch7', num: 7, part: 'P3', time: '11 min read',
    domains: ['AI/Tech', 'Tax'],
    title: 'Containers, Stencils, Perfect Border Radii & Arrow Grammar',
    sub: 'Anti-smudge stencil craft, Stop-Short & Bridge freehand corners, Arrow Grammar, Border-Radius Lab, and a Live Corner-Practice Sketchpad.'
  },
  {
    id: 'ch8', num: 8, part: 'P3', time: '14 min read',
    domains: ['AI/Tech', 'Tax', 'Deutsch'],
    title: 'Analog Data Visualization — Plotting Stories by Hand',
    sub: '10 hand-drawn chart archetypes plus an interactive Analog Chart Plotter & Dot-Grid Scaler that generates custom dot-counting recipes.'
  },
  {
    id: 'ch9', num: 9, part: 'P3', time: '12 min read', isNew: true,
    domains: ['Tax', 'Deutsch', 'AI/Tech'],
    title: 'Timelines, Roadmaps, Tables & Process Matrices',
    sub: 'Dot-grid Gantt bars, statutory filing calendars, German verb-tense timelines (Plusquamperfekt → Futur II), and weighted decision matrices.'
  },

  // Part IV
  {
    id: 'ch10', num: 10, part: 'P4', time: '15 min read',
    domains: ['AI/Tech', 'Studio'],
    title: 'Breaking Symbol Drawing — Primitives, 3D Extrusion & Perspective',
    sub: '5 Geometric Primitives, Form X-Ray Breakdown Slider, 2-over-1-up Isometrics, Cylinder Eye-Level, 1PT/2PT Perspective, and Isometric Sketchpad.'
  },
  {
    id: 'ch11', num: 11, part: 'P4', time: '14 min read',
    domains: ['Studio', 'AI/Tech'],
    title: 'Light Physics, The 5 Parts of Shadow & Line-Weight Hierarchy',
    sub: 'Cube, Sphere, Cylinder & Cone under 4 sun angles, Ambient Occlusion creases, interactive Shadow-Zone Quiz, 3-weight lines, and 4 shading methods.'
  },
  {
    id: 'ch12', num: 12, part: 'P4', time: '13 min read',
    domains: ['AI/Tech', 'Tax', 'Deutsch'],
    title: 'Visual Vocabulary, Expressive People & The 14-Day Studio Curriculum',
    sub: '24 ten-second icons with animated stroke-order playback, interactive Bean-Body Pose Builder, 4 metaphors, 10-minute timer, and 14-day bootcamp.'
  },
  {
    id: 'ch13', num: 13, part: 'P4', time: '12 min read', isNew: true,
    domains: ['Tax', 'Deutsch', 'AI/Tech'],
    title: 'Mini-Scenes, Everyday Objects & Visual Storytelling',
    sub: 'Composing 3-panel client journeys, German everyday dialogue scenes (Im Büro / Beim Finanzamt), and 5-beat executive narrative spreads.'
  },

  // Part V
  {
    id: 'ch14', num: 14, part: 'P5', time: '12 min read',
    domains: ['AI/Tech', 'Tax'],
    title: 'Advanced Composition, Eye-Tracking & A5 Dot-Grid Math',
    sub: 'Three Natural Eye-Paths, visual weight counter-balance, and exact 27×38 A5 dot-grid subdivision recipes with Corner Tick Simulator.'
  },
  {
    id: 'ch15', num: 15, part: 'P5', time: '11 min read',
    domains: ['Studio', 'AI/Tech'],
    title: 'Marker Physics, Glazing & Atmospheric Depth',
    sub: 'Single-marker 3-value glazing, preventing paper pilling, atmospheric foreground/background separation, White Gel Pen highlights, and Glazing Sketchpad.'
  },
  {
    id: 'ch16', num: 16, part: 'P5', time: '14 min read',
    domains: ['AI/Tech', 'Tax', 'Deutsch'],
    title: 'Complex Diagramming Patterns',
    sub: 'Swimlane architectures, binary Decision Trees (EU VAT + German Dativ/Akkusativ routing), State Machines, and 45° elbow-leader Anatomy diagrams.'
  },
  {
    id: 'ch17', num: 17, part: 'P5', time: '11 min read', isNew: true,
    domains: ['AI/Tech', 'Tax', 'Deutsch'],
    title: 'The Analog ↔ Digital Bridge (Scanning, Wikis & iPad)',
    sub: 'Turning physical dot-grid spreads into searchable Markdown/TaxWiki notes, Anki German sketch-cards, and mapping the 7-color system to iPad & Excalidraw.'
  },
  {
    id: 'ch18', num: 18, part: 'P5', time: '12 min read',
    domains: ['Studio', 'Tax', 'Deutsch'],
    title: 'The Diagnostic Troubleshooting Matrix & Final Capstone',
    sub: 'Interactive "Find the 5 Flaws" broken-spread game, 6-symptom root-cause matrix, and the Graduation Split-Screen Capstone checklist.'
  },

  // Appendices
  {
    id: 'appA', num: 'A', part: 'APP', time: 'Interactive Gallery', isAppendix: true,
    domains: ['AI/Tech', 'Tax', 'Deutsch'],
    title: 'Appendix A: Dissected Master Spreads Gallery',
    sub: '5 full two-page spreads (AI Tax Orchestration, German Cases & Satzklammer, Q4 Exec Sync, Book Synthesis, Study OS) with 5 toggleable ink layers.'
  },
  {
    id: 'appB', num: 'B', part: 'APP', time: 'Reference & Print', isAppendix: true,
    domains: ['Studio', 'Printable'],
    title: 'Appendix B: Technical Glossary & Printable Practice Workbook',
    sub: '32 searchable visual-thinking definitions plus one-click A5/A4 printable physical drill sheets for handwriting, corners, isometrics, and dot-grid layouts.'
  },
  {
    id: 'appC', num: 'C', part: 'APP', time: '200 Visual Devices', isAppendix: true,
    domains: ['Sketchnotes', '200 Graphics', 'Product', 'Tax'],
    title: 'Appendix C: The Sketchnote Steal Book (200 Graphics & Idea Generator)',
    sub: '200 steal-worthy analog components across 10 categories (Frames, Gauges, Maps, Visual Thinking, Callouts, Arrows & Dividers, Stationery, Micro-Charts, Product/Tech & Editorial) with 3-step build reveals.'
  },
  {
    id: 'appD', num: 'D', part: 'APP', time: '200 Guided Lessons', isAppendix: true, isNew: true,
    domains: ['200 Drawings', 'Isometric', 'Product', 'Metaphors'],
    title: 'Appendix D: The 200-Illustration "Draw Anything in 4 Steps" School',
    sub: '200 mini-illustrations across 10 categories (Workspace, AI, Tax/Law, Deutsch, Nature, Mascots, Isometric 3D, Product/UX, Banners & Metaphors) + Ghost Trace Pad & Search.'
  },
  {
    id: 'appE', num: 'E', part: 'APP', time: '8 Designs + Builder', isAppendix: true,
    domains: ['Mind Mapping', 'AI/Tech', 'Tax', 'Deutsch'],
    title: 'Appendix E: Mind-Mapping Architecture & Cool Visual Designs',
    sub: '5 laws of clean mind maps, 8 editorial archetypes (Botanical, Cyber PCB, Solar Orbits, Isometric Islands, Fishbone, Split-Tree, Metro Hub, Honeycomb) + Live Mind-Map Sandbox.'
  },
  {
    id: 'appF', num: 'F', part: 'APP', time: '6 Spreads + T-Lab', isAppendix: true,
    domains: ['Accounting', 'Tax', 'IFRS/HGB'],
    title: 'Appendix F: Visual Study Notes for Accounting & Tax',
    sub: '4-color debit/credit semantic code, 6 master study templates (T-Accounts, 3-Statement Map, EU VAT Tree, Book-to-Tax Bridge, 31.12. Cut-Off, 4-Box Statute Card) + Live Journal Visualizer.'
  },
  {
    id: 'appG', num: 'G', part: 'APP', time: '8 Flows + Designer', isAppendix: true,
    domains: ['Processes', 'AI/Tech', 'Tax'],
    title: 'Appendix G: Illustrating Processes, Pipelines & Workflows',
    sub: '6 universal process shapes, 8 workflow archetypes (Telemetry Rail, S-Curve Journey, Conveyor Cutaway, Swimlanes, Flywheel, Fork & Merge, Tiered Triage, Before/After) + Live Process Designer.'
  },
  {
    id: 'appH', num: 'H', part: 'APP', time: '8 Spreads + Card Lab', isAppendix: true, isNew: true,
    domains: ['Deutsch', 'Languages', 'Memory'],
    title: 'Appendix H: Visual Language-Learning Notebook Studio (Deutsch B1/B2+)',
    sub: '4-color der/die/das code, 8 polyglot notebook layouts (Satzklammer Bridge, 9 Prepositions, Prefix Tree, Fold-Recall, Comic Strips, Komposita Lego, Tense Rail, Shadowing) + Visual Vocab Card Builder.'
  },
  {
    id: 'appI', num: 'I', part: 'APP', time: '6 Systems + Heatmap', isAppendix: true, isNew: true,
    domains: ['Study OS', 'Habits', 'Books'],
    title: 'Appendix I: Analog Study Systems, Habit Heatmaps & Book Dashboards',
    sub: 'Cornell-Cyberpunk Hybrid, Feynman 3-Pass Simplifier, 1-Page Book Dashboard, 30-Day Glaze Heatmap, Analog Zettelkasten & Deep-Work Time-Blocking + Interactive Habit Playground.'
  },
  {
    id: 'appJ', num: 'J', part: 'APP', time: '12 Metaphors + Pad', isAppendix: true,
    domains: ['Metaphors', 'Art', 'Drawing'],
    title: 'Appendix J: Clever Visual Metaphors Atelier',
    sub: '12 editorial spot metaphors (Glass Prism, Keyhole World, Snipping the Sandbag, Ariadne\'s Thread, Tightrope Net, Signal Sieve, Half-Open Door) taught in 4 steps + Ghost Trace Pad.'
  },
  {
    id: 'appK', num: 'K', part: 'APP', time: '6 Exploded Scenes', isAppendix: true, isNew: true,
    domains: ['Isometric', 'Exploded Views', 'Architecture'],
    title: 'Appendix K: Isometric & Exploded-View Illustration Studio',
    sub: '2-over-1-up dot-grid isometrics and exploding component cutaways (AI Stack, Mechanical Key Switch, EU Tax Engine, Mobile UI Layers, Desk Diorama) with an interactive Explode Slider.'
  },
  {
    id: 'appL', num: 'L', part: 'APP', time: '8 PM Flows + Matrix', isAppendix: true, isNew: true,
    domains: ['Product Skills', 'UX', 'Decision Trees'],
    title: 'Appendix L: Product Thinking, Decision Trees & UX Sketching Studio',
    sub: 'Product thinking on paper: Opportunity Solution Trees, Build/Buy/AI Decision Trees, Crazy-4s Wireframes, 4-State Edge-Case UX, Emotion Curves, Funnels & Live 2×2 Matrix Plotter.'
  },
  {
    id: 'appM', num: 'M', part: 'APP', time: 'Hand Craft & Markers', isAppendix: true,
    domains: ['Pen Mechanics', 'Handwriting', 'Markers', 'Law/Tax'],
    title: 'Appendix M: Physical Hand Craft, Neat Notes & Marker Restraint',
    sub: '5 physical hand laws (Destination-Dot Gaze, Rotate Paper, Hover Ghost Pass, Mistake Rescue), Pass 1 → Pass 2 messy-call rescue teardown, handwriting levers, 5 marker palettes & domain recipes.'
  },
  {
    id: 'appN', num: 'N', part: 'APP', time: 'Design Theory + Lab', isAppendix: true,
    domains: ['Design Theory', 'Gestalt', 'Tufte', 'Visual Clarity'],
    title: 'Appendix N: Design Theory & Effective Visuals',
    sub: '6 foundational visual laws (Hierarchy, CRAP, Tufte Data-Ink, Rule of Thirds, Gestalt, Value vs. Hue), Live Squint-Test De-Clutter Walkthrough & Information-Design Picker.'
  },
  {
    id: 'appO', num: 'O', part: 'APP', time: 'Memory & Recall', isAppendix: true,
    domains: ['Visual Learning', 'Memory', 'Retrieval'],
    title: 'Appendix O: Visual Learning & Making Content Stick',
    sub: 'The 30-Second Rule against decorative procrastination, Drawing Effect, Dual-Coding, Spatial Page Palace, Von Restorff Pop, Retention Curve Model & Blank-Page Magenta Gap drills.'
  },
  {
    id: 'appP', num: 'P', part: 'APP', time: '8 Styles + Matrix', isAppendix: true, isNew: true,
    domains: ['Art Styles', 'Oblique', 'Ligne Claire', 'Cutaway'],
    title: 'Appendix P: Beyond Isometric — 8 Essential Illustration Styles',
    sub: 'Flat Swiss Bauhaus, 2.5D Oblique Pop, Architectural Blueprint, Ligne Claire Comic, Loose Architect Wash, 1-Point Perspective, Technical Cutaway, High-Contrast Spot + 1-Object × 6-Style Lab.'
  }
];

export const MAIN_CHAPTERS = CHAPTERS.filter(c => !c.isAppendix);
