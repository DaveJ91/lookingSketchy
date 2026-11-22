/* =========================================================================
   PART II: HANDWRITING, TYPOGRAPHY, LAYOUTS & LIVE CAPTURE (CHAPTERS 3–6)
   ========================================================================= */
import { gt } from '../data/glossary.js';
import { renderQuizHTML, initQuiz } from '../labs/quizEngine.js';
import { renderSketchpadHTML, initSketchpad } from '../labs/sketchpad.js';
import { DEEP_CONTENT_1 } from '../data/deepContent1.js';
import { MASTERCLASS_A } from '../data/masterclassA.js';
import { HERO_ISO_COMPRESSOR } from '../data/metaphors.js';

const CH3_QUIZ = [
  {
    q: 'What is the single highest-leverage biomechanical fix that makes uneven everyday print look instantly architectural?',
    opts: [
      'Switching to cursive loops',
      'Locking lowercase x-height consistently to 50–65% of a 5mm dot row',
      'Pressing harder with a thick 08 marker',
      'Writing twice as fast so lines stay energetic'
    ],
    ans: 1,
    why: 'Uniform x-height creates a crisp horizontal visual rhythm—the brain perceives consistent letter heights as neatness even when individual letterforms are simple.'
  },
  {
    q: 'Why should you pull straight diagram lines longer than 2cm from your elbow/forearm while looking at the destination dot?',
    opts: [
      'Finger joints pivot in a curved arc, producing banana-shaped lines',
      'It saves ink inside the fineliner',
      'It tilts your handwriting to 45 degrees',
      'Rulers cannot be used on dot-grid paper'
    ],
    ans: 0,
    why: 'Wrist and finger muscles naturally trace small circular arcs; locking the wrist and pulling from the forearm/elbow produces dead-straight architectural strokes.'
  }
];

const CH4_QUIZ = [
  {
    q: 'When drawing Faux Calligraphy with a regular 05 fineliner, which strokes get thickened?',
    opts: [
      'All horizontal crossbars',
      'Every stroke where your pen moved UPWARD',
      'Every stroke where your pen moved DOWNWARD',
      'Only the first letter of the word'
    ],
    ans: 2,
    why: 'Real brush pens flex under downward pressure and glide thin on upstrokes; duplicating only downward strokes produces instant authentic calligraphy.'
  },
  {
    q: 'Why do we slash zeros (Ø) and give every digit equal 0.5-dot width in Tabular Numbers?',
    opts: [
      'So cost/tax/latency columns align vertically and 0 never looks like the letter O',
      'Because German grammar requires slashed zeros',
      'To make numbers look decorative',
      'To hide rounding errors'
    ],
    ans: 0,
    why: 'Tabular monospace alignment lets your eye compare $1.4Ø vs $Ø.Ø4 vertically in a single glance without drifting left or right.'
  }
];

const CH5_QUIZ = [
  {
    q: 'In the Two-Pass Capture/Polish Workflow, what should you deliberately leave OUT during Pass 1 (live meeting or lecture)?',
    opts: [
      'Blank whitespace and arrow corridors',
      'Cool Grey drop shadows, neon marker washes, and polished borders',
      'Bullet taxonomy symbols (• → □ ◇ !)',
      'Dates and page numbers'
    ],
    ans: 1,
    why: 'Trying to think, listen, and color-code simultaneously causes Blank-Page Freeze. Pass 1 uses one dark ink with generous gaps; Pass 2 adds shadows and 2 accents in 2 minutes afterward.'
  },
  {
    q: 'What is the minimum vertical breathing space for an Arrow Corridor between diagram tiers?',
    opts: ['0.5 dot rows', '1 dot row', '3–4 blank dot rows', '10 blank dot rows'],
    ans: 2,
    why: 'Reserving 3–4 blank dot rows lets orthogonal arrows route cleanly with crisp labels without ever slicing through text.'
  }
];

const CH6_QUIZ = [
  {
    q: 'What is the core rule of Cognitive Compression during live meetings or German podcasts?',
    opts: [
      'Transcribe every adjective verbatim so nothing is lost',
      'Distill 100 spoken words into Subject + Action/Verb + Delta/Constraint (~7 visual words + 1 structure)',
      'Wait until the entire 60-minute meeting ends before writing anything',
      'Draw detailed faces of every speaker'
    ],
    ans: 1,
    why: 'Verbatim transcription overloads working memory and forces linear prose. Stripping filler down to Subject + Mechanism + Delta/Constraint frees cognitive bandwidth for visual structure.'
  },
  {
    q: 'When listening to spoken German with modal verbs or Perfekt tense, why is drawing a Satzklammer bracket ([ V2 ... Verb-Ende ]) helpful?',
    opts: [
      'Because German verbs always appear at the start of a sentence',
      'It visually parks the V2 auxiliary on the left while leaving space to catch the decisive infinitive/participle at the end of the clause',
      'It replaces all punctuation',
      'It eliminates the need to learn noun genders'
    ],
    ans: 1,
    why: 'In German, the meaning-carrying verb often arrives last. Sketching an open bracket [ muss ... ] trains your ear to hold the Mittelfeld cleanly until the final verb snaps the bracket shut.'
  }
];

export const PART2_RENDERERS = {
  // -------------------------------------------------------------------------
  // CHAPTER 3: BIOMECHANICS OF HANDWRITING
  // -------------------------------------------------------------------------
  ch3: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill violet">${part.title}</span><span class="pill">Chapter 03 • ${ch.time}</span></div>
      <h1 class="script"><span class="hl-violet">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Isolate the <strong>4 mechanical levers</strong> of legibility (${gt('x-height')}, 90° slant, ${gt('corner-braking')}, and 1-dot word tracking).</li>
        <li>Eliminate hand cramping and banana-curved box edges using forearm line-pulling and 25° notebook rotation.</li>
        <li>Practice live directly over cyan x-height rails in the <strong>Hands-On Handwriting Sketchpad</strong>.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>3.1 Debunking "Naturally Pretty" Handwriting</h3>
      <p>
        When you flip through an architect's sketchbook and think <em>"I wish I had neat handwriting like that,"</em> you are rarely reacting to fancy calligraphy. You are reacting to <strong>geometric uniformity</strong>. Messy notes almost never come from ugly individual letters—they come from four mechanical leaks: bouncing lowercase heights, conflicting slants, blown corners, and cramped word spacing.
      </p>
      <ul>
        <li><strong>Lever 1 — Lock Your ${gt('x-height')}:</strong> Keep every lowercase body (<code>a, c, e, m, n, o, r, s, u, ä, ö, ü</code>) strictly inside <strong>50%–65% of one 5mm dot row</strong>. Ascenders (<code>b, d, h, k, l, t</code>) touch the top dot; descenders (<code>g, j, p, q, y</code>) dip slightly below the baseline.</li>
        <li><strong>Lever 2 — Unify Slant to 90° Vertical:</strong> Leaning right or standing upright both look clean—what creates chaos is mixing leans inside one word. Vertical 90° stems are effortless to maintain because your dot grid already gives you vertical plumb columns every 5mm.</li>
        <li><strong>Lever 3 — ${gt('corner-braking')} &amp; Loop Closure:</strong> Rushing turns <code>m, n, h, r, u</code> into unreadable sine waves and leaves <code>a, d, g, o</code> gaping open. Micro-brake for 30 milliseconds at every turn and close every oval completely.</li>
        <li><strong>Lever 4 — Airy Tracking &amp; 1-Dot Word Gaps:</strong> Separate adjacent letters by a hairline gap and enforce a full <strong>1-dot (5mm) space</strong> between words—especially vital when writing long German compound nouns like <em>Umsatzsteuervoranmeldung</em> (break long compounds cleanly with tiny middots: <code>Umsatz·steuer·voranmeldung</code> when studying!).</li>
      </ul>
    </div>

    <!-- 4 Side-by-Side Messy vs Neat SVGs -->
    <div class="grid-2">
      ${[
        ['Lever 1: Locking x-Height (60%)', 'Bouncing heights look frantic; locking lowercase to 60% of the dot row creates instant typographic calm.', '<text x="10" y="28" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">✕</text><text x="28" y="32" font-family="Patrick Hand, cursive" font-size="20">aGeNtIc NoTeS</text><rect x="26" y="48" width="234" height="19" fill="#0EA5E9" fill-opacity="0.16"/><line x1="26" y1="48" x2="260" y2="48" stroke="#0EA5E9" stroke-dasharray="3 3"/><line x1="26" y1="67" x2="260" y2="67" stroke="#0EA5E9" stroke-dasharray="3 3"/><text x="10" y="64" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">✓</text><text x="30" y="64" font-family="Patrick Hand, cursive" font-size="19" letter-spacing="1.6">agentic notes</text>'],
        ['Lever 2: Slant Consistency (90°)', 'Mixing forward and backward leans breaks rhythm. Align vertical stems straight to the dot columns.', '<text x="10" y="28" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">✕</text><g stroke="#EC4899" stroke-width="2.2"><line x1="40" y1="12" x2="54" y2="36"/><line x1="76" y1="12" x2="66" y2="36"/><line x1="104" y1="12" x2="116" y2="36"/><line x1="146" y1="12" x2="134" y2="36"/></g><text x="10" y="66" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">✓</text><g stroke="#10B981" stroke-width="2.4"><line x1="44" y1="48" x2="44" y2="72"/><line x1="74" y1="48" x2="74" y2="72"/><line x1="104" y1="48" x2="104" y2="72"/><line x1="134" y1="48" x2="134" y2="72"/><line x1="164" y1="48" x2="164" y2="72"/></g>'],
        ['Lever 3: Corner Braking &amp; Loops', 'Micro-brake at sharp turns (m, n, h) and fully close circular bowls (a, d, g, o).', '<text x="10" y="28" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">✕</text><path d="M 32 30 Q 48 14 62 28 Q 76 14 92 28 Q 108 14 124 28" fill="none" stroke="#94A3B8" stroke-width="2.4"/><text x="148" y="30" font-family="Patrick Hand, cursive" font-size="15" fill="#BE185D">squiggles!</text><text x="10" y="66" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">✓</text><text x="32" y="67" font-family="Patrick Hand, cursive" font-size="23" letter-spacing="6" fill="#141836">m n h a d o</text>'],
        ['Lever 4: Tracking &amp; 1-Dot Gaps', 'Slightly wider tracking + a crisp 5mm word gap makes dense notes effortless to scan.', '<text x="10" y="28" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">✕</text><text x="30" y="30" font-family="Patrick Hand, cursive" font-size="18" letter-spacing="-1">crampedwordsblurfast</text><text x="10" y="66" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">✓</text><text x="30" y="66" font-family="Patrick Hand, cursive" font-size="18" letter-spacing="1.5">der</text><rect x="64" y="51" width="18" height="19" fill="#0EA5E9" fill-opacity="0.25"/><text x="88" y="66" font-family="Patrick Hand, cursive" font-size="18" letter-spacing="1.5">Steuer·bescheid</text>']
      ].map(([t, d, svg]) => `
        <div class="card">
          <div class="card-h">${t}</div>
          <div class="svg-box"><svg viewBox="0 0 280 84">${svg}</svg></div>
          <div class="card-p">${d}</div>
        </div>`).join('')}
    </div>

    <div class="prose-wrap">
      <h3>3.2 Ergonomics, Grip &amp; Forearm Line-Pulling</h3>
      <p>
        Three physical tweaks erase wrist fatigue and crooked container walls: (1) <strong>Slide fingers 2.5cm back</strong> from the metal nib sleeve so you stop choking the barrel; (2) <strong>Rotate the notebook 20°–30°</strong> counter-clockwise (clockwise for lefties) so lines align with your forearm's natural sweep; and (3) <strong>Lock your wrist and pull from your elbow</strong> on any line longer than 2cm while keeping your eyes glued to the <em>target dot</em>, not the moving pen tip.
      </p>
    </div>

    <!-- HANDS-ON SKETCHPAD: X-HEIGHT & 90° SLANT -->
    ${renderSketchpadHTML('ch3', {
      title: 'x-Height & 90° Vertical Slant Practice Pad',
      defaultTemplate: 'xheight',
      defaultTool: 'nib03',
      subtitle: 'Use your mouse, trackpad, or stylus to practice writing inside the Cyan 60% x-height band while aligning vertical stems to the pink 90° plumb lines. Toggle Ghost Guide off to test freehand!'
    })}

    <!-- LEGIBILITY SELF-DIAGNOSTIC (8 SYMPTOMS) -->
    <div class="lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Tool // Legibility Self-Diagnostic (10 Common Leaks)</span>
        <span class="pill violet">Check Symptoms → Targeted Prescription</span>
      </div>
      <div class="lab-body">
        <div class="grid-2">
          <label class="chk-lbl"><input type="checkbox" class="ch3-sym" value="xheight" /> Lowercase letters bounce up &amp; down</label>
          <label class="chk-lbl"><input type="checkbox" class="ch3-sym" value="slant" /> Letters lean in different directions</label>
          <label class="chk-lbl"><input type="checkbox" class="ch3-sym" value="loops" /> My m, n, r, u turn into wavy squiggles</label>
          <label class="chk-lbl"><input type="checkbox" class="ch3-sym" value="cramp" /> Hand cramps &amp; box lines curve like bananas</label>
          <label class="chk-lbl"><input type="checkbox" class="ch3-sym" value="droop" /> Last 3 words of each line droop downhill</label>
          <label class="chk-lbl"><input type="checkbox" class="ch3-sym" value="clog" /> Tiny loops in e, a, o flood solid black</label>
          <label class="chk-lbl"><input type="checkbox" class="ch3-sym" value="collide" /> Tails (g, y, p) crash into tall letters below</label>
          <label class="chk-lbl"><input type="checkbox" class="ch3-sym" value="twins" /> My r/v, a/u, or 1/7/0 look indistinguishable</label>
          <label class="chk-lbl"><input type="checkbox" class="ch3-sym" value="bottom" /> Writing falls apart near the bottom of the page</label>
          <label class="chk-lbl"><input type="checkbox" class="ch3-sym" value="scratch" /> Diagram lines look hairy / "chicken-scratched"</label>
        </div>
        <div id="ch3-rx" class="lab-cap">Check one or more symptoms above to generate your targeted 5-minute biomechanical drill.</div>
      </div>
    </div>

    ${DEEP_CONTENT_1.ch3}
    ${MASTERCLASS_A.ch3}

    <!-- 3.5 THE 10 SILENT SABOTEURS OF NEAT HANDWRITING -->
    <div class="architect-note">
      <div class="architect-note-q">
        People rarely notice individual ugly letters—they notice uneven baselines, sagging line ends, and clogged loops. Fix the page rhythm first; letterform polish comes second.
      </div>
      <div class="architect-note-sub">
        Even slightly quirky print reads like a graphic designer's notebook when every line starts on the exact same vertical dot column, sits firmly grounded on the baseline, and gives loops enough interior white space to breathe.
      </div>
    </div>

    <div class="prose-wrap">
      <h3>3.5 Ten Practical Fixes Beyond "Just Write Slower"</h3>
      <p>
        Once your x-height and 90° slant are steady, these ten physical and typographic tweaks produce the biggest jump in everyday notebook neatness:
      </p>
    </div>

    <!-- Visual SVG: Baseline Grounding, Open Counters & Line-Spacing -->
    <div class="svg-box">
      <svg viewBox="0 0 740 175">
        <!-- Left Panel: Grounded Baseline & Open Counters -->
        <rect x="14" y="14" width="348" height="147" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <text x="28" y="34" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">A. OPEN COUNTERS &amp; GROUNDED FEET</text>
        <!-- Bad row -->
        <line x1="28" y1="74" x2="346" y2="74" stroke="#CBD5E1" stroke-width="1.4" stroke-dasharray="4 3"/>
        <text x="32" y="66" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">✕ FLOATING + CLOGGED (0.7mm)</text>
        <text x="218" y="67" font-family="Patrick Hand, cursive" font-size="18" letter-spacing="-1.2" fill="#BE185D">e a o g (tight)</text>
        <!-- Good row -->
        <rect x="28" y="100" width="318" height="22" fill="#0EA5E9" fill-opacity="0.14"/>
        <line x1="28" y1="122" x2="346" y2="122" stroke="#047857" stroke-width="1.8"/>
        <text x="32" y="118" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">✓ PLANTED + AIRY (0.38mm)</text>
        <text x="214" y="120" font-family="Patrick Hand, cursive" font-size="19" letter-spacing="2.4" fill="#141836">e a o g</text>
        <text x="28" y="146" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">Sit every letter bottom squarely ON the dot row.</text>

        <!-- Right Panel: Hand-Slide Rule + Alternating Rows -->
        <rect x="378" y="14" width="348" height="147" rx="8" fill="#FFFDF5" stroke="#141836" stroke-width="2"/>
        <text x="392" y="34" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">B. SLIDE THE PALM EVERY 6–7 CM</text>
        <path d="M 396 64 H 524 Q 608 66 704 82" fill="none" stroke="#EC4899" stroke-width="2.2" stroke-dasharray="4 3"/>
        <text x="396" y="57" font-family="Patrick Hand, cursive" font-size="14" fill="#BE185D">✕ Wrist anchored too long → line droops downhill</text>
        <!-- Good slide segments -->
        <rect x="396" y="96" width="94" height="22" rx="4" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.5"/>
        <text x="443" y="111" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">ZONE 1 (6cm)</text>
        <text x="502" y="111" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">→</text>
        <rect x="514" y="96" width="94" height="22" rx="4" fill="#D1FAE5" stroke="#047857" stroke-width="1.5"/>
        <text x="561" y="111" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">SLIDE PALM</text>
        <text x="620" y="111" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">→</text>
        <rect x="632" y="96" width="80" height="22" rx="4" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.5"/>
        <text x="672" y="111" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#6D28D9">ZONE 3</text>
        <text x="392" y="146" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">Lift &amp; scoot your whole hand right every 3–4 words.</text>
      </svg>
    </div>

    <div class="grid-2">
      <div class="card">
        <span class="pill cyan" style="align-self:flex-start;">Tip 01 // Pen Match</span>
        <div class="card-h">Match Nib Width to Your Letter Size</div>
        <p class="card-p">Small, tight handwriting looks muddy with a wet 0.7mm rollerball because the inner white holes ("counters") of <code>e, a, o, g</code> flood shut. Switch to a crisp <strong>0.38mm or 0.4mm gel/fineliner</strong> (Uni-ball Signo DX 0.38, Muji 0.38, Micron 03) and your writing immediately opens up. Big, loose writers do better with a <strong>0.5mm</strong> tip that adds slight steadying friction.</p>
      </div>
      <div class="card">
        <span class="pill violet" style="align-self:flex-start;">Tip 02 // Desk Cushion</span>
        <div class="card-h">Never Write on One Sheet Over Hard Wood</div>
        <p class="card-p">A single page sitting directly on a glass or hard laminate desk gives zero mechanical feedback—the nib skates and magnifies every micro-tremor. Always write over a stack of at least <strong>10–15 pages</strong> (or slip a soft matte pencil board / <em>shitajiki</em> underneath the sheet) to dampen hand jitter.</p>
      </div>
      <div class="card">
        <span class="pill mint" style="align-self:flex-start;">Tip 03 // Row Breathing</span>
        <div class="card-h">Stop Descender Collisions (Skip Rows or Shrink)</div>
        <p class="card-p">Packing text onto every single 5mm dot row forces <code>g, j, p, q, y</code> tails straight into the tall stems of <code>b, d, h, k, l, t</code> below. Either keep body x-height compact (~45% of a row with short crisp tails) <em>or</em> write dense study notes on <strong>alternating dot rows</strong>—instantly doubling scannability.</p>
      </div>
      <div class="card">
        <span class="pill magenta" style="align-self:flex-start;">Tip 04 // Palm Slide</span>
        <div class="card-h">Slide Your Hand Every 3–4 Words</div>
        <p class="card-p">Most people anchor their wrist in the middle of the page and stretch their fingers to finish the right end of the line. That pivot arc drags the last three words downhill and tilts them backward. Write 3–4 words, lift cleanly, scoot your whole forearm right by 6cm, and repeat.</p>
      </div>
      <div class="card">
        <span class="pill amber" style="align-self:flex-start;">Tip 05 // Semi-Print Hybrid</span>
        <div class="card-h">Use Semi-Print (Connect Only Easy Pairs)</div>
        <p class="card-p">Strict disconnected print feels slow; full school cursive melts into unreadable loops at speed. Use <strong>semi-print</strong>: write mostly upright print, allowing natural quick ligatures only on easy pairs (<code>th, in, er, ch, an</code>) while picking the pen cleanly up before round bowls (<code>a, c, d, g, o</code>).</p>
      </div>
      <div class="card">
        <span class="pill cyan" style="align-self:flex-start;">Tip 06 // Crossbars &amp; Dots</span>
        <div class="card-h">Discipline Your t-Bars &amp; i-Dots</div>
        <p class="card-p">Nothing screams "rushed scrawl" faster than a <code>t</code> crossbar flying three letters to the right or an <code>i</code> dot slashed like an accent mark. Land every <code>t</code> bar horizontally right at x-height across the stem, and tap a crisp dot directly overhead on <code>i, j, ä, ö, ü</code>.</p>
      </div>
      <div class="card">
        <span class="pill violet" style="align-self:flex-start;">Tip 07 // Baseline Gravity</span>
        <div class="card-h">Plant Every Letter's Feet on the Dot Line</div>
        <p class="card-p">Think of your printed dot row as a solid concrete floor—not a suggestion. Letting letters hover 1mm above or dip 1mm below creates jagged visual noise. Grounding every letter bottom squarely onto that floor makes even fast notes look calm.</p>
      </div>
      <div class="card">
        <span class="pill mint" style="align-self:flex-start;">Tip 08 // Invisible Left Spine</span>
        <div class="card-h">Align Every Line to One Hard Left Margin</div>
        <p class="card-p">The human eye forgives imperfect letters instantly if the <em>left edge</em> of the paragraph forms a laser-straight vertical wall. Leave clear margins on <strong>both</strong> left and right sides—never squeeze text to the paper edge—and use consistent indentation (main point → sub-point → detail).</p>
      </div>
      <div class="card">
        <span class="pill magenta" style="align-self:flex-start;">Tip 09 // Bottom-Edge Drop</span>
        <div class="card-h">Support Your Hand Near the Bottom of the Page</div>
        <p class="card-p">Handwriting almost always degrades in the bottom quarter of a thick notebook because your wrist drops off the cliff edge and loses leverage. Park a <strong>spare notebook or folded stack of paper</strong> flush below the bottom edge so your palm stays level all the way to the last row.</p>
      </div>
      <div class="card">
        <span class="pill amber" style="align-self:flex-start;">Tip 10 // One Form + Full Height</span>
        <div class="card-h">Pick One Form Per Letter &amp; Use Full Line Height</div>
        <p class="card-p">Consistency beats style: a page of uniform, slightly plain letters looks cleaner than decorative but erratic ones. Never mix print and cursive versions of the same letter on one page, don't let neighboring letters touch, and give ascenders (<code>l, t, d, h, b</code>) and descenders (<code>g, y, p, q</code>) full height so writing never looks squashed flat.</p>
      </div>
    </div>

    <!-- THE 4 S'S OF CONSISTENCY + DIGITAL NOTES TRANSFER -->
    <div class="mental-model">
      <span class="callout-label" style="color:var(--cyan);">The 4 S's of Handwriting Consistency // Shape • Spacing • Size • Slant</span>
      <p>
        Legibility comes first, aesthetics second. If you only fix <strong>two things</strong>, fix <strong>Spacing</strong> (small even gap so letters never collide + roughly one lowercase <code>n</code> or finger-width between words) and <strong>Size</strong> (consistent x-height with clearly taller capitals/ascenders). Pair that with repeatable <strong>Shape</strong> and one uniform <strong>Slant</strong> (upright or slight rightward lean—just never erratic).
      </p>
      <p style="margin-top:6px;">
        <strong>Digital Note-Taking (GoodNotes / iPad):</strong> The exact same levers transfer—lock <strong>one consistent zoom level</strong> so stroke thickness doesn't fluctuate, step down to a thinner pen size, and use the zoom box or lasso tool to tidy misaligned lines rather than redrawing whole pages.
      </p>
    </div>

    <!-- 3.6 FIXING THE 8 TRICKIEST LETTERS & NUMBERS -->
    <div class="prose-wrap">
      <h3>3.6 Surgical Fixes for the 8 Most Commonly Misread Characters</h3>
      <p>
        You don't need to reinvent all 26 letters. Fixing just these eight frequent offenders removes roughly 80% of handwriting ambiguity in everyday work, tax, and language notes:
      </p>
    </div>

    <div class="svg-box">
      <svg viewBox="0 0 740 218">
        <text x="18" y="22" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">SURGICAL LETTERFORM FIXES // SPOT THE ONE STROKE THAT MAKES EACH CHARACTER UNMISTAKABLE</text>
        ${[
          ['a', ['Close the top seam +', 'crisp right stem so it', 'never reads like u.'], 18, 36, '#0EA5E9'],
          ['e', ['Draw a flat bar first,', 'then arch cleanly over', 'so the loop stays open.'], 198, 36, '#EC4899'],
          ['r', ['Straight vertical stem', '+ short 2mm roof hook', '(never a curved v).'], 378, 36, '#10B981'],
          ['s', ['Two balanced curves +', 'flat waist—avoid sharp', 'lightning-bolt Zs.'], 558, 36, '#7C3AED'],
          ['g', ['Closed oval planted ON', 'baseline + tidy J-hook', 'dipping 1/2 row below.'], 18, 128, '#F59E0B'],
          ['k', ['Tall straight stem +', 'kick lower leg off the', 'arm, not the spine.'], 198, 128, '#0EA5E9'],
          ['4 / 7', ['Keep 4 sharp-cornered', 'and cross 7 clearly in', 'European style.'], 378, 128, '#BE185D'],
          ['0 / 1', ['Slash zero (Ø) cleanly;', 'give 1 a crisp flag or', 'one plain vertical bar.'], 558, 128, '#047857']
        ].map(([ch, lines, x, y, col]) => `
          <rect x="${x}" y="${y}" width="166" height="78" rx="8" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          <rect x="${x}" y="${y}" width="44" height="78" rx="7" fill="${col}" fill-opacity="0.16"/>
          <text x="${x + 22}" y="${y + 47}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="${ch.length > 2 ? 13 : 24}" font-weight="700" fill="${col}">${ch}</text>
          <text x="${x + 52}" y="${y + 24}" font-family="Patrick Hand, cursive" font-size="12.5" fill="#141836">${lines[0]}</text>
          <text x="${x + 52}" y="${y + 42}" font-family="Patrick Hand, cursive" font-size="12.5" fill="#141836">${lines[1]}</text>
          <text x="${x + 52}" y="${y + 60}" font-family="Patrick Hand, cursive" font-size="12.5" fill="#525B7A">${lines[2]}</text>
        `).join('')}
      </svg>
    </div>

    <!-- 3.7 STRUCTURED PRACTICE, CLEAN TECHNICAL LINES & CONSTRUCTION -->
    <div class="prose-wrap">
      <h3>3.7 How to Practice Handwriting &amp; Clean Technical Lines (2–4 Week Transfer)</h3>
      <p>
        Short, regular <strong>10–15 minute sessions</strong> outperform occasional hour-long marathons—most people see unmistakable improvement in <strong>2–4 weeks</strong> when they practice directly on the real pages they want to make (study notes, product sketches, diagrams, and maps):
      </p>
    </div>

    <div class="grid-2">
      <div class="drill-card">
        <span class="pill cyan" style="align-self:flex-start;">Handwriting Practice Protocol // 10–15 Min</span>
        <div class="card-h">Alphabet Audit → Worst 3–5 Letters → Real Notes</div>
        <p class="card-p">
          1. Write the full alphabet (upper + lower) slowly at 10–20% below normal speed, focusing on shape and height.<br/>
          2. Circle the <strong>3–5 letters</strong> that consistently look worst; drill them in isolation, then inside real words.<br/>
          3. Copy one short paragraph you actually care about (a definition, process, or work note) using clear abbreviations/symbols so you aren't rushing letters.<br/>
          4. Rewrite one page of real Pass 1 notes focusing <em>strictly</em> on spacing and height. Try <strong>architectural all-caps</strong> for labels, headers, and annotations even if you keep mixed-case for body text.
        </p>
        <div class="drill-pass">PASS CHECK: Hold the page at arm's length. Left/right margins stay clear, baselines sit level, and ovals (e, a, o, g) show clean white air inside.</div>
      </div>

      <div class="drill-card">
        <span class="pill magenta" style="align-self:flex-start;">Clean Technical Lines &amp; Construction // Drawabox Craft</span>
        <div class="card-h">Kill "Chicken Scratching" &amp; Construct From Simple Volumes</div>
        <p class="card-p">
          • <strong>Shoulder/Elbow for Long Lines:</strong> Reserve your wrist strictly for tiny details; rotate the paper so every stroke falls at a comfortable pull angle.<br/>
          • <strong>No Scratchy Overlaps:</strong> One confident, ghosted stroke (2–5 hover passes, moderate speed, eyes on endpoint) beats ten hairy "chicken-scratch" passes—even if it overshoots slightly. Practice some drills in <strong>ink (no erasing)</strong> to force commitment, prioritizing smoothness before exact endpoint accuracy.<br/>
          • <strong>Construction Order for Diagrams &amp; Product Sketches:</strong> Start with light construction lines/grid → build complex objects from cubes, cylinders, and cones → reinforce outer contours heavier than internal details → <strong>add annotations &amp; labels LAST</strong> so text never fights the drawing.
        </p>
        <div class="drill-pass">6 TRANSFERABLE WARM-UPS: Ghosted shoulder lines (varying lengths) • Multi-pass ellipses → 1 clean pass • Simple perspective boxes • Cubes/cylinders/cones combined • Simplify real desk objects into volumes • 1 rewritten note page.</div>
      </div>
    </div>

    <!-- 3.8 COMMON PROBLEMS & DIRECT FIXES TABLE -->
    <div class="prose-wrap">
      <h3>3.8 Quick Troubleshooting Matrix: Common Problems &amp; Direct Fixes</h3>
    </div>

    <div class="table-wrap">
      <table class="t">
        <thead>
          <tr><th>Problem</th><th>What's Usually Causing It</th><th>Direct Mechanical Fix</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Letters touch or crowd</strong></td><td>Rushed tracking &amp; cramped horizontal rhythm</td><td>Consciously leave a hairline gap between letters and ~1 lowercase <code>n</code> width between words; start new lines instead of squeezing.</td></tr>
          <tr><td><strong>Inconsistent height</strong></td><td>No fixed x-height ceiling or flat ascenders</td><td>Force dot-grid x-height consistency for one full week and let ascenders/descenders claim the full row height.</td></tr>
          <tr><td><strong>Wobbly lines</strong></td><td>Creeping too slowly with wrist while watching nib</td><td>Draw at moderate speed from the shoulder/elbow, ghost 2–5× in air, and lock eyes on the destination dot.</td></tr>
          <tr><td><strong>Scratchy / multiple strokes</strong></td><td>"Chicken scratching" out of fear of missing</td><td>Commit to single continuous strokes; run warm-up drills in pen so you cannot erase and hesitate.</td></tr>
          <tr><td><strong>Writing degrades at bottom of page</strong></td><td>Wrist drops off notebook edge and loses support</td><td>Park a spare notebook or folded paper stack flush below the bottom edge so your hand stays level.</td></tr>
          <tr><td><strong>Notes look messy overall</strong></td><td>Layout &amp; hierarchy problem, not ugly letters</td><td>Leave clear margins on both sides, use consistent indentation levels, visually separate sections, and rewrite key pages as Pass 2.</td></tr>
          <tr><td><strong>Can't start on a blank page</strong></td><td>Trying to ink finished forms without scaffolding</td><td>Lay down light construction boxes, center lines, or a simple alignment grid first—and add text labels last.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="studio-aside">
      <strong>Permission to be messy on Pass 1:</strong> Neatness is mostly <em>consistency + controlled line quality + basic layout</em>—not slow artistic perfection. Let Pass 1 capture stay rough and fast with abbreviations and symbols, then shift into tidy print and clean lines on Pass 2 for the pages worth keeping.
    </div>

    ${renderQuizHTML('ch3', CH3_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (6 Minutes)</div>
      <p>
        Write <em>"Multi-agent tax orchestration isolates write keys — die Umsatzsteuer bleibt sicher."</em> three times on physical dot-grid paper: (1) normal speed, (2) locked 60% x-height + 90° vertical stems, and (3) adding corner braking + crisp 1-dot word gaps. Circle the cleanest line.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 4: HAND-LETTERING & VISUAL HIERARCHY
  // -------------------------------------------------------------------------
  ch4: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill violet">${part.title}</span><span class="pill">Chapter 04 • ${ch.time}</span><span class="pill amber">Tax • Deutsch</span></div>
      <h1 class="script"><span class="hl-violet">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Deploy <strong>4 repeatable hand-lettering modes</strong> (${gt('architects-print')}, ${gt('faux-calligraphy')}, ${gt('tabular-numbers')}, Highlighter-Drop) using only a fineliner and highlighter.</li>
        <li>Format financial/tax ledgers and German grammar headings so pages scan in 4 distinct typographic tiers.</li>
        <li>Compare flat text vs. 4-level visual hierarchy interactively.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>4.1 Why Typography Creates Instant Authority</h3>
      <p>
        Every well-designed digital textbook or financial dashboard uses deliberate contrast between Display Titles, Monospace Metadata, and Body Copy. On paper, you don't need 10 pens to create that exact same typographic authority—just discipline yourself to switch between <strong>four clean lettering modes</strong>:
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-h">1. ${gt('architects-print')} (1-Dot-Row Tall)</div>
        <div class="svg-box"><svg viewBox="0 0 380 86"><line x1="12" y1="18" x2="368" y2="18" stroke="#0EA5E9" stroke-dasharray="4 3"/><line x1="12" y1="50" x2="368" y2="50" stroke="#0EA5E9" stroke-dasharray="4 3"/><text x="190" y="43" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="20" font-weight="600" letter-spacing="3" fill="#141836">EU VAT ARCHITECTURE</text><text x="190" y="72" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A">NARROW ALL-CAPS • 1 DOT TALL • SLIGHT UPWARD TILT ON A, E, H</text></svg></div>
        <p class="card-p">Your go-to mode for diagram labels, swimlane headers, axis titles, and German case headers (<code>NOM / AKK / DAT / GEN</code>).</p>
      </div>

      <div class="card">
        <div class="card-h">2. ${gt('faux-calligraphy')} (Page Titles)</div>
        <div class="svg-box"><svg viewBox="0 0 380 86"><line x1="12" y1="54" x2="368" y2="54" stroke="#CBD5E1" stroke-dasharray="4 3"/><text x="190" y="46" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="25" fill="#141836">Satzklammer</text><text x="190" y="74" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">WRITE CURSIVE FIRST → THICKEN EVERY DOWNSTROKE</text></svg></div>
        <p class="card-p">No brush pen required: write a relaxed cursive title in 03/05 ink, then trace a parallel rib beside every downward stroke and fill it in.</p>
      </div>

      <div class="card">
        <div class="card-h">3. ${gt('tabular-numbers')} (Slashed Ø)</div>
        <div class="svg-box"><svg viewBox="0 0 380 86"><rect x="12" y="8" width="356" height="68" rx="6" fill="#FFF" stroke="#141836" stroke-width="1.5"/><text x="24" y="34" font-family="IBM Plex Mono, monospace" font-size="12.5" fill="#525B7A">SINGLE LLM   | €1.4Ø | 48.Øs |   Ø%</text><line x1="12" y1="44" x2="368" y2="44" stroke="#CBD5E1"/><text x="24" y="64" font-family="IBM Plex Mono, monospace" font-size="12.5" font-weight="700" fill="#047857">MULTI-AGENT  | €Ø.Ø4 |  1.2s | -97%</text></svg></div>
        <p class="card-p">Give every digit (0–9) equal 0.5-dot width, slash zeros (<code>Ø</code>), and keep flat-top <code>4</code>s so tax rates, Euro totals, and latency columns line up vertically.</p>
      </div>

      <div class="card">
        <div class="card-h">4. Highlighter-Drop Headers</div>
        <div class="svg-box"><svg viewBox="0 0 380 86"><rect x="22" y="36" width="254" height="14" rx="3" fill="#0EA5E9" fill-opacity="0.3"/><text x="28" y="44" font-family="Patrick Hand, cursive" font-size="21" font-weight="700" fill="#141836">Stripe First → Text Half-On</text><text x="190" y="72" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A">EVEN SAFE FOR GEL PENS (ZERO SMEARING)</text></svg></div>
        <p class="card-p">Pull a crisp horizontal Cyan or Amber bar <em>first</em>, pause 2 seconds, then rest your dark lettering halfway across the bar's upper edge.</p>
      </div>
    </div>

    <!-- Mistake vs Pro Fix -->
    <div class="compare-grid">
      <div class="compare-card mistake">
        <div class="compare-head"><span>✕ Common Mistake</span><span>Unaligned Proportional Numbers</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 340 94">
            <text x="24" y="30" font-family="Patrick Hand, cursive" font-size="16" fill="#BE185D">DE Standard VAT: 19%</text>
            <text x="24" y="54" font-family="Patrick Hand, cursive" font-size="16" fill="#BE185D">Reduced Rate: 7%</text>
            <text x="24" y="78" font-family="Patrick Hand, cursive" font-size="16" fill="#BE185D">Intra-EU B2B: 0% (Reverse Charge)</text>
          </svg>
        </div>
      </div>
      <div class="compare-card fix">
        <div class="compare-head"><span>✓ Pro Fix</span><span>Tabular Right-Aligned Column</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 340 94">
            <text x="22" y="30" font-family="IBM Plex Mono, monospace" font-size="13" fill="#141836">DE STANDARD VAT   |  19.Ø%</text>
            <text x="22" y="54" font-family="IBM Plex Mono, monospace" font-size="13" fill="#141836">DE REDUCED RATE   |   7.Ø%</text>
            <text x="22" y="78" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700" fill="#047857">INTRA-EU B2B (RC) |   Ø.Ø%</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- INTERACTIVE LAB: 4-LEVEL VISUAL HIERARCHY SIMULATOR -->
    <div class="lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // 4-Level Visual Hierarchy Simulator</span>
        <div class="segmented" role="group">
          <button class="seg-btn ch4-lvl" data-l="1">1. Flat Text</button>
          <button class="seg-btn ch4-lvl" data-l="2">2. + Spacing</button>
          <button class="seg-btn ch4-lvl" data-l="3">3. + Type Scale</button>
          <button class="seg-btn ch4-lvl active" data-l="4">4. + Cyber Color</button>
        </div>
      </div>
      <div class="lab-body">
        <div id="ch4-preview" class="card" style="min-height:172px;"></div>
        <div id="ch4-cap" class="lab-cap"></div>
      </div>
    </div>

    ${DEEP_CONTENT_1.ch4}
    ${MASTERCLASS_A.ch4}

    ${renderQuizHTML('ch4', CH4_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (6 Minutes)</div>
      <p>
        Create a 1-page typography swatch card: write a project or German study heading in <strong>Faux Calligraphy</strong>, 3 subheaders in 1-dot <strong>Architect's Print</strong>, and a 3-row Euro tax or study-time table using right-aligned <strong>Tabular Numbers</strong> with slashed <code>Ø</code>s.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 5: PAGE ARCHITECTURE, LAYOUTS & NOTEBOOK OS
  // -------------------------------------------------------------------------
  ch5: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill violet">${part.title}</span><span class="pill">Chapter 05 • ${ch.time}</span><span class="pill amber">AI/Tech • Tax • Deutsch</span></div>
      <h1 class="script"><span class="hl-amber">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Apply the <strong>6 Golden Layout Rules</strong> and separate capture from design with the ${gt('two-pass')}.</li>
        <li>Deploy the <strong>5-Symbol Bullet Taxonomy</strong> and 4 reusable dot-grid blueprints.</li>
        <li>Scrub a live meeting through the <strong>Two-Pass Note Scrubbing Lab</strong> and configure the 6-Slot ${gt('edge-tabbing')}.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>5.1 The 6 Golden Layout Rules &amp; Two-Pass Workflow</h3>
      <p>
        Most people abandon visual note-taking during their very first live meeting because they try to listen, draw straight containers, and swap three highlighters simultaneously. Separate cognitive load with the ${gt('two-pass')}:
      </p>
      <ul>
        <li><strong>Pass 1 — Live Capture (1 Dark Fineliner Only):</strong> Listen, compress ideas into concise bullets using the 5-Symbol Taxonomy, leave wide 3–4 dot breathing gaps, and write text <em>before</em> drawing any boxes.</li>
        <li><strong>Pass 2 — 2-Minute Polish (Right After the Meeting):</strong> Wrap key blocks in Cyber Cards, route clean arrows through your blank ${gt('arrow-corridor')}s, swipe Cool Grey shadows on right/bottom edges, and drop your 2 semantic highlighter washes. Reviewing the page during Pass 2 also locks memory via active recall!</li>
      </ul>
      <ol>
        <li><strong>30% Whitespace Rule:</strong> Never fill more than two-thirds of a page with ink.</li>
        <li><strong>2-Dot Perimeter Margin:</strong> Protect a 1cm breathing frame around all four physical edges.</li>
        <li><strong>Text First, Box Second:</strong> Eliminates cramped words squished against right borders forever.</li>
        <li><strong>4-Dot Arrow Corridors:</strong> Keep 3–4 empty dot rows between diagram tiers so arrows never collide with text.</li>
        <li><strong>Invisible Alignment Rails:</strong> Snap bullets and sub-blocks to identical vertical dot columns.</li>
        <li><strong>Circled Reference Badges (<code>① ② ③</code>):</strong> Keep diagrams clean by parking longer explanations in a right-hand margin legend.</li>
      </ol>
    </div>

    <!-- 5-Symbol Bullet Taxonomy -->
    <div class="table-wrap">
      <table class="t">
        <thead><tr><th>Symbol</th><th>Semantic Role</th><th>Visual Styling</th><th>AI / Tax / Deutsch Example</th></tr></thead>
        <tbody>
          <tr><td class="mono" style="font-weight:700; font-size:16px;">•</td><td><strong>Fact / Rule</strong></td><td>Solid indigo dot</td><td>80% of client VAT inquiries are routine filing deadline lookups.</td></tr>
          <tr><td class="mono" style="font-weight:700; font-size:16px; color:var(--cyan);">→</td><td><strong>Consequence / Delta</strong></td><td>Crisp tiny arrow</td><td>Routing routine queries to Flash cuts compute cost by 97%.</td></tr>
          <tr><td class="mono" style="font-weight:700; font-size:16px; color:var(--mint-deep);">□</td><td><strong>Action Item</strong></td><td>Empty 2mm square (fill ✓)</td><td>Build Anki sketch-cards for 12 German Dativ verbs.</td></tr>
          <tr><td class="mono" style="font-weight:700; font-size:16px; color:var(--violet);">◇</td><td><strong>Open Question</strong></td><td>Hollow diamond</td><td>Does German B2C OSS threshold apply to digital SaaS add-ons?</td></tr>
          <tr><td class="mono" style="font-weight:700; font-size:16px; color:var(--magenta-deep);">!</td><td><strong>Hard Constraint / Risk</strong></td><td>Magenta/Amber accent</td><td>Reasoning LLM must NEVER hold direct write credentials!</td></tr>
        </tbody>
      </table>
    </div>

    <!-- NEW INTERACTIVE LAB: TWO-PASS LIVE NOTE SCRUBBING LAB -->
    <div class="lab cyan-accent" id="ch5-twopass-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // Two-Pass Live Note Scrubbing Simulator</span>
        <span id="ch5-stage-pill" class="pill cyan">Stage 3: Pass 2 Polish (+2m)</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="slider-grp">
            <label for="ch5-scrub">Workflow Stage:</label>
            <input id="ch5-scrub" type="range" min="0" max="3" step="1" value="3" />
          </div>
          <div class="segmented" role="group">
            <button class="seg-btn ch5-st" data-s="0">0. Raw Audio</button>
            <button class="seg-btn ch5-st" data-s="1">1. Pass 1 Capture</button>
            <button class="seg-btn ch5-st" data-s="2">2. Boxes + Corridors</button>
            <button class="seg-btn ch5-st active" data-s="3">3. Pass 2 Polish</button>
          </div>
        </div>
        <div class="svg-box"><svg id="ch5-svg" viewBox="0 0 760 240"></svg></div>
        <div id="ch5-cap" class="lab-cap"></div>
      </div>
    </div>

    <div class="prose-wrap"><h3>5.2 Four Full-Scale Dot-Grid Page Layout Blueprints</h3></div>
    <div class="grid-2">
      ${[
        ['1. Technical Architecture Spread', 'Row-1 Micro-Header + Left 2/3 Isometric Flow (4-dot arrow corridors) + Right 1/3 Legend & Cost Ledger + Bottom Gap Chart.', '<rect x="14" y="12" width="332" height="20" rx="3" fill="#EEF2FC" stroke="#141836" stroke-width="1.6"/><text x="24" y="26" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">2026.11.22 | TAX AGENT ORCHESTRATION | PG 14</text><rect x="14" y="40" width="218" height="126" rx="5" fill="#FAFBFD" stroke="#0EA5E9" stroke-width="1.6" stroke-dasharray="5 3"/><text x="123" y="96" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" font-weight="700">ISOMETRIC DIAGRAM (2/3 WIDTH)</text><text x="123" y="116" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#0EA5E9">4-DOT ARROW CORRIDORS</text><rect x="240" y="40" width="106" height="126" rx="5" fill="#ECFDF5" stroke="#141836" stroke-width="1.5"/><text x="293" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">① ② ③ LEGEND</text><text x="293" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#047857">COST LEDGER</text><rect x="14" y="174" width="332" height="36" rx="5" fill="#FFF" stroke="#141836" stroke-width="1.5"/><text x="180" y="196" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">BOTTOM STRIP: DUMBBELL GAP CHART (○ → ●)</text>'],
        ['2. Bento Executive Meeting Notes', 'Highlighter-Drop Title + Left 65% chronological bullets & 2×2 matrix + Right 35% Action □, Questions ◇, and Taped Decision Slip.', '<rect x="14" y="18" width="210" height="14" rx="3" fill="#0EA5E9" fill-opacity="0.32"/><text x="20" y="26" font-family="Patrick Hand, cursive" font-size="16" font-weight="700">Q4 Partner Sync (Highlighter-Drop)</text><rect x="14" y="42" width="214" height="100" rx="5" fill="#FAFBFD" stroke="#141836" stroke-width="1.5"/><text x="26" y="64" font-family="Patrick Hand, cursive" font-size="13">• Key facts &amp; context (65% width)</text><text x="26" y="84" font-family="Patrick Hand, cursive" font-size="13" fill="#0EA5E9">→ Main strategic takeaway</text><rect x="14" y="150" width="214" height="60" rx="5" fill="#FFF" stroke="#141836" stroke-width="1.5"/><text x="121" y="184" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9">MINI 2×2 QUADRANT / FLOW</text><rect x="236" y="42" width="110" height="86" rx="5" fill="#ECFDF5" stroke="#141836" stroke-width="1.5"/><text x="246" y="62" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">□ ACTIONS</text><text x="246" y="92" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#7C3AED">◇ QUESTIONS</text><rect x="236" y="136" width="110" height="74" rx="4" fill="#FFFDF5" stroke="#141836" stroke-width="1.5"/><text x="291" y="176" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13" font-weight="700">Taped Decision</text>'],
        ['3. Research / Book Synthesis', 'Faux Calligraphy Title + Executive Summary Cyber Card + 3-Column Pillar Matrix + Bottom Taped Quote & Next Action.', '<text x="180" y="28" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="16">Book / Statute Synthesis</text><rect x="14" y="40" width="332" height="32" rx="5" fill="#EEF2FC" stroke="#141836" stroke-width="1.6"/><text x="180" y="60" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">CORE THESIS CYBER CARD (2 SENTENCES MAX)</text><rect x="14" y="80" width="104" height="82" rx="5" fill="#FAFBFD" stroke="#141836" stroke-width="1.5"/><text x="66" y="124" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9">PILLAR 1</text><rect x="128" y="80" width="104" height="82" rx="5" fill="#FAFBFD" stroke="#141836" stroke-width="1.5"/><text x="180" y="124" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9">PILLAR 2</text><rect x="242" y="80" width="104" height="82" rx="5" fill="#FAFBFD" stroke="#141836" stroke-width="1.5"/><text x="294" y="124" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9">PILLAR 3</text><rect x="14" y="170" width="214" height="40" rx="4" fill="#FFFDF5" stroke="#141836" stroke-width="1.5"/><text x="121" y="194" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13">Taped Verbatim Quote</text><rect x="236" y="170" width="110" height="40" rx="4" fill="#ECFDF5" stroke="#141836" stroke-width="1.5"/><text x="291" y="194" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">→ NEXT STEP</text>'],
        ['4. Cornell-Sketch Language Hybrid', 'Left 30% Cue Column holds German gender swatches, icons & prompt questions; Right 70% holds example sentences; Bottom 4 rows hold grammar takeaway.', '<rect x="14" y="12" width="332" height="22" rx="3" fill="#EEF2FC" stroke="#141836" stroke-width="1.5"/><text x="24" y="27" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">DEUTSCH B2 // KONJUNKTIV II | PG 31</text><rect x="14" y="42" width="96" height="122" rx="5" fill="#F0FAFF" stroke="#0EA5E9" stroke-width="1.5"/><text x="62" y="86" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0EA5E9">30% CUES</text><text x="62" y="106" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5">Icons &amp; Prompts</text><rect x="118" y="42" width="228" height="122" rx="5" fill="#FFF" stroke="#141836" stroke-width="1.5"/><text x="232" y="106" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15">70% Example Dialogs &amp; Brackets</text><rect x="14" y="172" width="332" height="38" rx="5" fill="#ECFDF5" stroke="#141836" stroke-width="1.5"/><text x="180" y="195" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">BOTTOM 4-DOT SELF-TEST SUMMARY</text>']
      ].map(([t, d, svg]) => `
        <div class="card">
          <div class="card-h">${t}</div>
          <div class="svg-box"><svg viewBox="0 0 360 222">${svg}</svg></div>
          <div class="card-p">${d}</div>
        </div>`).join('')}
    </div>

    <div class="prose-wrap">
      <h3>5.3 Ink Hygiene, Mistake Recovery &amp; The 6-Slot ${gt('edge-tabbing')}</h3>
      <p>
        Never scribble aggressively over a typo—a dark ink blob pulls the eye like a black hole. Strike through once with a <strong>single crisp horizontal line</strong> and keep writing. For crooked boxes, add a second offset dashed Cyan border so it becomes an intentional Double-Sketch Frame. Finally, color a 2-dot swatch at a fixed vertical height on the outer right edge of every page so you can thumb-flip straight to Tax, AI, or Deutsch spreads with the notebook closed:
      </p>
    </div>

    <div class="svg-box">
      <svg viewBox="0 0 760 155">
        <rect x="24" y="16" width="460" height="124" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <rect x="40" y="28" width="428" height="24" rx="4" fill="#EEF2FC" stroke="#141836" stroke-width="1.4"/>
        <text x="52" y="44" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">MICRO-HEADER: 2026.11.22 | TOPIC: AGENT ORCHESTRATION | PG 14</text>
        <text x="44" y="82" font-family="Patrick Hand, cursive" font-size="16" fill="#525B7A">Color a 2-dot block on the outer right edge at a fixed height.</text>
        <text x="44" y="106" font-family="Patrick Hand, cursive" font-size="16" fill="#141836">Close the book → fan the edge → jump straight to any domain!</text>
        <g font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">
          <rect x="484" y="18" width="24" height="16" fill="#0EA5E9" stroke="#141836" stroke-width="1.5"/><text x="518" y="30" fill="#141836">SLOT 1 // TAX &amp; EU VAT</text>
          <rect x="484" y="38" width="24" height="16" fill="#10B981" stroke="#141836" stroke-width="1.5"/><text x="518" y="50" fill="#141836">SLOT 2 // AI &amp; AGENTS</text>
          <rect x="484" y="58" width="24" height="16" fill="#EC4899" stroke="#141836" stroke-width="1.5"/><text x="518" y="70" fill="#141836">SLOT 3 // RISKS &amp; HITL</text>
          <rect x="484" y="78" width="24" height="16" fill="#7C3AED" stroke="#141836" stroke-width="1.5"/><text x="518" y="90" fill="#141836">SLOT 4 // DEUTSCH B1/B2</text>
          <rect x="484" y="98" width="24" height="16" fill="#F59E0B" stroke="#141836" stroke-width="1.5"/><text x="518" y="110" fill="#141836">SLOT 5 // EXEC MEETINGS</text>
          <rect x="484" y="118" width="24" height="16" fill="#94A3B8" stroke="#141836" stroke-width="1.5"/><text x="518" y="130" fill="#141836">SLOT 6 // BOOKS &amp; ARCHIVE</text>
        </g>
      </svg>
    </div>

    ${DEEP_CONTENT_1.ch5}
    ${MASTERCLASS_A.ch5}

    ${renderQuizHTML('ch5', CH5_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (8 Minutes)</div>
      <p>
        Set up the 6-Slot Edge-Tab Key inside the back cover of your notebook. Then take Pass 1 notes (plain dark ink, generous gaps) during a 5-minute video or meeting, followed by a timed 2-minute Pass 2 polish with Cool Grey shadows and 2 accents.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 6 (NEW): REAL-TIME LISTENING & COGNITIVE COMPRESSION
  // -------------------------------------------------------------------------
  ch6: (ch, part) => `
    <header class="chapter-banner">
      <div class="pills"><span class="pill violet">${part.title}</span><span class="pill magenta">NEW CHAPTER 06 • ${ch.time}</span><span class="pill amber">AI/Tech • Tax • Deutsch</span></div>
      <h1 class="script"><span class="hl-cyan">${ch.title}</span></h1>
      <p class="chapter-banner-sub">${ch.sub}</p>
    </header>

    <div class="objectives-box">
      <div class="callout-label" style="color:var(--violet);">Learning Objectives</div>
      <ul>
        <li>Master ${gt('cognitive-compression')}: distill 100 spoken words into a 7-word visual unit (<strong>Subject + Mechanism + Delta/Constraint</strong>) in real time.</li>
        <li>Spot the <strong>4 Signal-Trigger Phrases</strong> that tell your pen when to draw a container, arrow, chart, or warning.</li>
        <li>Use German ${gt('satzklammer')} listening brackets to capture live German podcasts and client calls without getting lost waiting for the final verb.</li>
      </ul>
    </div>

    <div class="prose-wrap">
      <h3>6.1 Why Live Note-Takers Fall Behind (The Stenographer Trap)</h3>
      <p>
        The average speaker talks at <strong>140–170 words per minute</strong>; crisp handwriting runs at <strong>20–30 words per minute</strong>. Trying to transcribe a live meeting, tax briefing, or German podcast verbatim guarantees two bad outcomes: you lose 80% of the words anyway, and your brain never has spare capacity to notice <em>how ideas connect</em>.
      </p>
      <p>
        Visual thinkers flip the workflow completely using the <strong>100 → 7 Compression Formula</strong>: listen for a complete thought (20–30 seconds) with your pen <em>hovering off the paper</em>, strip away throat-clearing, adjectives, and polite filler, and write only three atomic ingredients:
      </p>
      <ol>
        <li><strong>Subject / Actor</strong> (Who or what? <em>e.g., Triage Agent, B2C OSS, der Antrag</em>)</li>
        <li><strong>Mechanism / Arrow</strong> (What happens? <em>→ bypasses, ⇄ swaps, ✕ blocks</em>)</li>
        <li><strong>Delta or Hard Constraint</strong> (What changed or must never break? <em>-97% cost, >€10k threshold, +Dativ</em>)</li>
      </ol>
    </div>

    ${HERO_ISO_COMPRESSOR}

    <div class="prose-wrap">
      <h3>6.2 The 4 Live Audio Signal-Triggers</h3>
      <p>
        Train your ears to react reflexively to spoken cue words—each cue tells you the exact visual primitive to draw without pausing to design:
      </p>
      <ul>
        <li><strong>"First… then… after that…" / "Zuerst… danach…"</strong> → Draw a horizontal left-to-right <strong>Arrow Chain</strong>.</li>
        <li><strong>"Unlike X, Y does…" / "Im Gegensatz zu…"</strong> → Draw a <strong>50/50 Split</strong> or <strong>Dumbbell Gap</strong>.</li>
        <li><strong>"Only if…" / "Unless…" / "Vorausgesetzt, dass…"</strong> → Draw a <strong>Diamond Gate (◇)</strong> with Mint YES / Magenta NO exits.</li>
        <li><strong>"Never… / Critical risk… / Achtung…"</strong> → Drop a bold <code>!</code> inside a <strong>Magenta Dashed Zone</strong>.</li>
      </ul>
    </div>

    <!-- Mistake vs Pro Fix -->
    <div class="compare-grid">
      <div class="compare-card mistake">
        <div class="compare-head"><span>✕ Stenographer Trap</span><span>Trying to Write Full Spoken Sentences</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 360 116">
            <text x="16" y="28" font-family="Patrick Hand, cursive" font-size="14" fill="#BE185D">"So basically what we saw in Q3 is that when German</text>
            <text x="16" y="48" font-family="Patrick Hand, cursive" font-size="14" fill="#BE185D">B2C sales cross ten thousand euros across the EU,</text>
            <text x="16" y="68" font-family="Patrick Hand, cursive" font-size="14" fill="#BE185D">we really need to make sure we register for OSS..."</text>
            <text x="180" y="100" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">34 WORDS WRITTEN • MISSED NEXT 2 MINUTES!</text>
          </svg>
        </div>
      </div>
      <div class="compare-card fix">
        <div class="compare-head"><span>✓ Cognitive Compression</span><span>7 Visual Words + 1 Gate (4 Seconds)</span></div>
        <div class="svg-box">
          <svg viewBox="0 0 360 116">
            <polygon points="88,24 148,52 88,80 28,52" fill="#FEF3C7" stroke="#141836" stroke-width="2"/>
            <text x="88" y="49" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">EU B2C</text>
            <text x="88" y="62" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">&gt; €10k?</text>
            <line x1="148" y1="52" x2="206" y2="52" stroke="#10B981" stroke-width="2.8"/>
            <text x="176" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">YES →</text>
            <rect x="206" y="30" width="136" height="44" rx="6" fill="#FCE7F3" stroke="#EC4899" stroke-width="2" stroke-dasharray="5 3"/>
            <text x="274" y="56" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">! REGISTER OSS</text>
            <text x="180" y="104" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">6 WORDS • INSTANT LOGIC RECALL</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- Deutsch Listening Box -->
    <div class="deutsch-box">
      <div class="callout-label" style="color:var(--amber-deep);">Deutsch Live Listening // Catching the Satzklammer Verb</div>
      <p style="font-size:15px;">
        In spoken German (podcasts like <em>Easy German</em>, <em>Tagesschau</em>, or client calls), the conjugated auxiliary hits early in Position 2, while the crucial meaning verb lands 12 words later at the very end. Train your pen to sketch an open bracket <code>[ muss</code> on the left, jot 2–3 key nouns inside the middle field, and snap <code>einreichen ]</code> shut the moment the speaker finishes the clause.
      </p>
    </div>

    <!-- NEW INTERACTIVE LAB: LIVE COGNITIVE COMPRESSION TRAINER -->
    <div class="lab" id="ch6-comp-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Lab // 100 → 7 Live Cognitive Compression Trainer</span>
        <span class="pill violet">Scrub Transcript → Stripped Noise → Visual Atom</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl">
          <div class="segmented" role="group">
            <button class="seg-btn ch6-sc active" data-s="ai">1. AI Architecture Call</button>
            <button class="seg-btn ch6-sc" data-s="tax">2. EU VAT Client Brief</button>
            <button class="seg-btn ch6-sc" data-s="deutsch">3. German B2 Podcast</button>
          </div>
          <div class="segmented" role="group">
            <button class="seg-btn ch6-lv" data-l="0">Raw Spoken (100%)</button>
            <button class="seg-btn ch6-lv" data-l="1">Strip Filler (40%)</button>
            <button class="seg-btn ch6-lv active" data-l="2">Visual Atom (7%)</button>
          </div>
        </div>
        <div id="ch6-stage" class="card tinted" style="min-height:175px;"></div>
        <div id="ch6-cap" class="lab-cap"></div>
      </div>
    </div>

    ${DEEP_CONTENT_1.ch6}
    ${MASTERCLASS_A.ch6}

    ${renderQuizHTML('ch6', CH6_QUIZ)}

    <div class="studio-exercise">
      <div class="callout-label" style="color:var(--amber-deep);">End-of-Chapter Studio Exercise (8 Minutes)</div>
      <p>
        Play any 4-minute tech talk, tax update, or German podcast clip <em>without pausing</em>. Keep your pen off the paper for 20 seconds at a time, then capture ONLY 3–4 compressed visual atoms (Subject + Arrow + Constraint/Delta). Count how few words you needed to reconstruct the entire 4-minute argument.
      </p>
    </div>
  `
};

export const PART2_INITS = {
  ch3: (onStateChange) => {
    initSketchpad('ch3', { defaultTemplate: 'xheight', defaultTool: 'nib03' });
    const rxMap = {
      xheight: '<strong>x-Height Fix:</strong> Pencil a faint guide 60% up one dot row and write 2 lines of lowercase words touching that exact ceiling.',
      slant: '<strong>Slant Fix:</strong> Use the vertical dot columns as 90° plumb lines—force every vertical stem (<code>l, t, h, d, p</code>) straight up.',
      loops: '<strong>Corner Braking Fix:</strong> Slow down 15% and micro-brake at every corner of <code>m, n, r, u</code>; close ovals on <code>a, d, g, o</code>.',
      cramp: '<strong>Ergonomics Fix:</strong> Slide grip 2.5cm back from nib, rotate notebook 25°, and write over a 10+ page paper cushion instead of bare desk.',
      droop: '<strong>Palm-Slide Fix:</strong> Stop stretching your fingers across the row—write 3–4 words (~6cm), lift cleanly, and slide your whole forearm right.',
      clog: '<strong>Open-Counter Fix:</strong> Step down to a crisp 0.38mm/0.4mm pen (Muji 0.38 / Signo DX / Micron 03) and widen the inner white pocket of <code>e, a, o</code>.',
      collide: '<strong>Row-Breathing Fix:</strong> Write dense study notes on alternating 5mm dot rows, or cap x-height at 45% with short tidy tails on <code>g, y, p, q</code>.',
      twins: '<strong>Surgical Letter Fix:</strong> Pull a straight vertical stem + tiny hook on <code>r</code>, close the top seam on <code>a</code>, cross <code>7</code>, and slash <code>Ø</code>.',
      bottom: '<strong>Bottom-Edge Support Fix:</strong> Slide a spare notebook or folded paper stack flush against the bottom edge so your hand never drops off the notebook cliff.',
      scratch: '<strong>Single-Stroke Commitment Fix:</strong> Switch to pen (no erasing!) for 5-minute warm-ups—ghost 2–5× from the shoulder, look at the endpoint, and accept slight overshoot over scratchy strokes.'
    };
    const update = () => {
      const checked = [...document.querySelectorAll('.ch3-sym:checked')].map(el => el.value);
      document.getElementById('ch3-rx').innerHTML = checked.length
        ? checked.map(k => `<div style="margin-bottom:6px;">▸ ${rxMap[k]}</div>`).join('')
        : 'Check one or more symptoms above to generate your targeted 5-minute biomechanical drill.';
    };
    document.querySelectorAll('.ch3-sym').forEach(el => el.addEventListener('change', update));
    update();
    initQuiz('ch3', CH3_QUIZ, onStateChange);
  },

  ch4: (onStateChange) => {
    function setLevel(lvl) {
      document.querySelectorAll('.ch4-lvl').forEach(b => b.classList.toggle('active', Number(b.dataset.l) === lvl));
      const box = document.getElementById('ch4-preview');
      const cap = document.getElementById('ch4-cap');
      if (lvl === 1) {
        box.innerHTML = `<p style="color:var(--ink-muted); font-size:15px;">Q4 German VAT Review Umsatzsteuervoranmeldung Type 1 Triage classifies in 0.2s for €0.001 Tax Law Reasoning checks EU VAT Directive Art 58 and 19% B2C OSS Writing agent drafts client email in German and Q4 risk register row Human Tax Manager must approve before MCP writes to SharePoint.</p>`;
        cap.innerHTML = '<strong>Level 1 (Flat Wall of Text):</strong> Zero visual entry points. You must read every word linearly to locate the deadline or governance rule.';
      } else if (lvl === 2) {
        box.innerHTML = `<div style="font-size:15px; display:flex; flex-direction:column; gap:6px;"><div>Q4 German VAT Review (Umsatzsteuer)</div><div>• Type 1 Triage classifies in 0.2s (€0.001)</div><div>• B2B = Reverse Charge (Art. 196); B2C = 19% DE VAT via OSS</div><div>• Human Tax Manager approves before MCP writes Row #14</div></div>`;
        cap.innerHTML = '<strong>Level 2 (+ Spacing &amp; Bullets):</strong> Whitespace and line breaks immediately separate facts, cutting reading friction in half.';
      } else if (lvl === 3) {
        box.innerHTML = `<div style="display:flex; flex-direction:column; gap:10px;"><div class="script" style="font-size:1.3rem;">Q4 German VAT Review</div><div class="mono" style="font-size:11px; font-weight:700;">Ø.2s TRIAGE | €Ø.ØØ1 | EU VAT DIR ART. 58</div><div style="font-size:15px;">• <strong>B2B:</strong> Reverse Charge (Art. 196)<br/>• <strong>B2C:</strong> 19% DE VAT via OSS<br/>! <strong>HITL GATE:</strong> Approve before MCP write</div></div>`;
        cap.innerHTML = '<strong>Level 3 (+ Type Hierarchy):</strong> Cursive title + tabular monospace metadata + structured bullets create 3 clear tiers—even in pure monochrome ink.';
      } else {
        box.innerHTML = `<div style="display:flex; flex-direction:column; gap:10px;"><div style="display:flex; flex-wrap:wrap; justify-content:space-between; gap:8px;"><span class="script" style="font-size:1.3rem;"><span class="hl-cyan">Q4 German VAT Review</span></span><div class="pills"><span class="pill cyan">Ø.2s Triage</span><span class="pill magenta">HITL Gate</span><span class="pill mint">MCP Write</span></div></div><div class="grid-2"><div class="card tinted"><strong>• B2B:</strong> Reverse Charge (Art. 196)<br/><strong>• B2C:</strong> 19% DE VAT via OSS</div><div class="card" style="border-style:dashed; border-color:var(--magenta); box-shadow:3px 3px 0 var(--magenta);"><strong>! GOVERNANCE GATE:</strong> Pause at Human Tax Manager before MCP writes Row #14.</div></div></div>`;
        cap.innerHTML = '<strong>Level 4 (+ Cyber Color &amp; Shadow):</strong> Adding 2 semantic washes (Cyan + Magenta) and offset shadows pulls your eye straight to the title, metrics, and risk gate.';
      }
    }
    document.querySelectorAll('.ch4-lvl').forEach(b => b.addEventListener('click', () => setLevel(Number(b.dataset.l))));
    setLevel(4);
    initQuiz('ch4', CH4_QUIZ, onStateChange);
  },

  ch5: (onStateChange) => {
    const scrub = document.getElementById('ch5-scrub');
    const pill = document.getElementById('ch5-stage-pill');
    const svg = document.getElementById('ch5-svg');
    const cap = document.getElementById('ch5-cap');

    function renderStage(s) {
      scrub.value = s;
      document.querySelectorAll('.ch5-st').forEach(b => b.classList.toggle('active', Number(b.dataset.s) === s));
      const labels = ['Stage 0: Raw Unfiltered Speech', 'Stage 1: Pass 1 Monochrome Capture', 'Stage 2: Text-First Boxes & Corridors', 'Stage 3: Pass 2 Polish (+2 min)'];
      pill.textContent = labels[s];

      if (s === 0) {
        svg.innerHTML = `
          <rect x="20" y="18" width="720" height="204" rx="8" fill="#FFF" stroke="#94A3B8" stroke-dasharray="5 4"/>
          <text x="40" y="54" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#BE185D">LIVE CALL TRANSCRIPT (00:00 — 04:00):</text>
          <text x="40" y="88" font-family="Patrick Hand, cursive" font-size="17" fill="#525B7A">"Hey everyone, quick update on the Munich client's German VAT automation.</text>
          <text x="40" y="116" font-family="Patrick Hand, cursive" font-size="17" fill="#525B7A">First, our Flash triage model handled 82% of tickets in under half a second.</text>
          <text x="40" y="144" font-family="Patrick Hand, cursive" font-size="17" fill="#525B7A">Second, legal insists that cross-border OSS filings MUST pause for partner sign-off</text>
          <text x="40" y="172" font-family="Patrick Hand, cursive" font-size="17" fill="#525B7A">before MCP writes anything to SharePoint. Action: David to ship audit schema Friday."</text>`;
        cap.innerHTML = '<strong>Stage 0 (Raw Speech):</strong> Too fast to transcribe verbatim. Keep your highlighter capped and listen for actors, numbers, and hard constraints.';
      } else if (s === 1) {
        svg.innerHTML = `
          <rect x="20" y="18" width="720" height="204" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
          <text x="44" y="48" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">2026.11.22 | MUNICH VAT PILOT | PG 19</text>
          <text x="48" y="88" font-family="Patrick Hand, cursive" font-size="17" fill="#141836">• Flash Triage: 82% tickets &lt; 0.5s</text>
          <text x="48" y="124" font-family="Patrick Hand, cursive" font-size="17" fill="#141836">! Legal Rule: OSS filings MUST pause (Partner HITL)</text>
          <text x="48" y="160" font-family="Patrick Hand, cursive" font-size="17" fill="#141836">→ Zero direct write keys on Reasoning LLM</text>
          <text x="494" y="88" font-family="Patrick Hand, cursive" font-size="17" fill="#141836">□ Ship audit schema (Fri)</text>
          <text x="494" y="124" font-family="Patrick Hand, cursive" font-size="17" fill="#141836">◇ Confirm OSS threshold</text>`;
        cap.innerHTML = '<strong>Stage 1 (Pass 1 — Single Dark Ink Only):</strong> Zero time wasted on boxes or color mid-call. Notice the deliberate wide whitespace gaps and 5-symbol bullets (<code>• ! → □ ◇</code>).';
      } else if (s === 2) {
        svg.innerHTML = `
          <rect x="20" y="18" width="720" height="204" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
          <text x="44" y="46" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">2026.11.22 | MUNICH VAT PILOT | PG 19</text>
          <rect x="40" y="62" width="404" height="40" rx="6" fill="none" stroke="#141836" stroke-width="1.8"/>
          <text x="54" y="87" font-family="Patrick Hand, cursive" font-size="16.5">• Flash Triage: 82% tickets &lt; 0.5s</text>
          <line x1="242" y1="102" x2="242" y2="128" stroke="#141836" stroke-width="2"/>
          <rect x="40" y="128" width="404" height="66" rx="6" fill="none" stroke="#141836" stroke-width="1.8" stroke-dasharray="6 4"/>
          <text x="54" y="154" font-family="Patrick Hand, cursive" font-size="16.5">! Legal Rule: OSS filings MUST pause (Partner HITL)</text>
          <text x="54" y="178" font-family="Patrick Hand, cursive" font-size="16.5">→ Zero direct write keys on Reasoning LLM</text>
          <rect x="476" y="62" width="236" height="132" rx="6" fill="none" stroke="#141836" stroke-width="1.8"/>
          <text x="492" y="92" font-family="Patrick Hand, cursive" font-size="16.5">□ Ship audit schema (Fri)</text>
          <text x="492" y="126" font-family="Patrick Hand, cursive" font-size="16.5">◇ Confirm OSS threshold</text>`;
        cap.innerHTML = '<strong>Stage 2 (Text First, Box Second — 45 Seconds):</strong> Now wrap your existing text cleanly without cramping a single letter, and drop arrows straight through the empty corridors.';
      } else {
        svg.innerHTML = `
          <rect x="20" y="18" width="720" height="204" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
          <rect x="40" y="34" width="268" height="12" rx="3" fill="#0EA5E9" fill-opacity="0.3"/>
          <text x="44" y="44" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">2026.11.22 | MUNICH VAT PILOT | PG 19</text>
          <path d="M 46 106 H 448 V 68" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.58"/>
          <rect x="40" y="62" width="404" height="40" rx="6" fill="#E0F2FE" fill-opacity="0.45" stroke="#141836" stroke-width="2.2"/>
          <text x="54" y="87" font-family="Patrick Hand, cursive" font-size="16.5" font-weight="700">• Flash Triage: 82% tickets &lt; 0.5s</text>
          <line x1="242" y1="102" x2="242" y2="128" stroke="#0EA5E9" stroke-width="2.6"/>
          <rect x="40" y="128" width="404" height="66" rx="6" fill="#FCE7F3" fill-opacity="0.65" stroke="#EC4899" stroke-width="2" stroke-dasharray="6 4"/>
          <text x="54" y="154" font-family="Patrick Hand, cursive" font-size="16.5" font-weight="700" fill="#BE185D">! Legal Rule: OSS filings MUST pause (Partner HITL)</text>
          <text x="54" y="178" font-family="Patrick Hand, cursive" font-size="16.5">→ Zero direct write keys on Reasoning LLM</text>
          <path d="M 482 198 H 716 V 68" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.58"/>
          <rect x="476" y="62" width="236" height="132" rx="6" fill="#ECFDF5" stroke="#141836" stroke-width="2"/>
          <text x="492" y="92" font-family="Patrick Hand, cursive" font-size="16.5" font-weight="700">□ Ship audit schema (Fri)</text>
          <text x="492" y="126" font-family="Patrick Hand, cursive" font-size="16.5" fill="#7C3AED">◇ Confirm OSS threshold</text>`;
        cap.innerHTML = '<strong>Stage 3 (Pass 2 Polish — 2 Minutes Total):</strong> Cool Grey shadows lift cards off the dot grid while Cyan + Magenta + Mint make actions and governance gates unmistakable.';
      }
    }

    scrub.addEventListener('input', () => renderStage(Number(scrub.value)));
    document.querySelectorAll('.ch5-st').forEach(b => b.addEventListener('click', () => renderStage(Number(b.dataset.s))));
    renderStage(3);
    initQuiz('ch5', CH5_QUIZ, onStateChange);
  },

  ch6: (onStateChange) => {
    let sc = 'ai', lv = 2;
    const DATA = {
      ai: {
        raw: '"So in our benchmarks last week, when we routed every single user support ticket straight into the big frontier reasoning model, it took around 48 seconds and burned almost a dollar per ticket. Once we put a tiny Flash classifier in front to handle the 80% routine deadline questions, latency collapsed to 1.2 seconds and cost dropped by 97%, while only complex statutory cases wake up the heavy model."',
        strip: '<strong>Benchmarks:</strong> All tickets → Heavy Reasoning = <code>48s / ~$1</code>. Add <strong>Flash Triage</strong> in front → 80% routine = <code>1.2s (-97% cost)</code>; only 20% complex wake Reasoning.',
        atom: `<svg viewBox="0 0 700 130">
          <rect x="16" y="34" width="142" height="54" rx="7" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><text x="87" y="58" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">FLASH TRIAGE</text><text x="87" y="75" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#0EA5E9">0.2s CLASSIFIER</text>
          <path d="M 158 50 H 254" stroke="#10B981" stroke-width="3"/><text x="206" y="42" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">80% ROUTINE</text>
          <rect x="254" y="20" width="196" height="44" rx="7" fill="#D1FAE5" stroke="#047857" stroke-width="2"/><text x="352" y="47" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">1.2s • -97% COST ✓</text>
          <path d="M 158 76 H 254 V 96" fill="none" stroke="#EC4899" stroke-width="2.5" stroke-dasharray="5 3"/><text x="206" y="92" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">20% COMPLEX</text>
          <rect x="254" y="76" width="196" height="40" rx="7" fill="#FCE7F3" stroke="#EC4899" stroke-width="2" stroke-dasharray="5 3"/><text x="352" y="100" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">WAKE REASONING (48s)</text>
          <text x="580" y="66" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="17" fill="#141836">74 spoken words →</text>
          <text x="580" y="90" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#047857">11 VISUAL TOKENS</text></svg>`,
        cap: '<strong>Compression Ratio (AI Call): 85% fewer words.</strong> Notice that the exact quantitative delta (<code>80/20 split, 1.2s, -97%</code>) and architecture branch survive intact.'
      },
      tax: {
        raw: '"Whenever a German GmbH sells B2B software to a VAT-registered company in France, you do not charge 19% German VAT—instead you verify their French VAT ID in VIES and apply Reverse Charge under EU Directive Article 196. If the buyer is a private B2C consumer and total EU B2C sales exceed €10,000, you must charge French VAT via the OSS portal."',
        strip: '<strong>DE GmbH → FR Buyer:</strong> If <strong>B2B (VIES valid)</strong> → 0% Reverse Charge (Art. 196). If <strong>B2C &gt; €10k EU</strong> → Charge FR VAT via OSS.',
        atom: `<svg viewBox="0 0 700 130">
          <polygon points="104,22 184,62 104,102 24,62" fill="#FEF3C7" stroke="#141836" stroke-width="2"/><text x="104" y="58" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">VALID FR</text><text x="104" y="72" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">VIES B2B?</text>
          <path d="M 184 44 H 264" stroke="#10B981" stroke-width="2.8"/><text x="224" y="36" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">YES (B2B)</text>
          <rect x="264" y="16" width="234" height="44" rx="6" fill="#D1FAE5" stroke="#047857" stroke-width="2"/><text x="381" y="42" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">Ø% REVERSE CHARGE (Art. 196)</text>
          <path d="M 184 80 H 264" stroke="#EC4899" stroke-width="2.8"/><text x="224" y="72" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">NO (B2C)</text>
          <rect x="264" y="72" width="234" height="44" rx="6" fill="#FCE7F3" stroke="#EC4899" stroke-width="2" stroke-dasharray="5 3"/><text x="381" y="98" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">&gt;€10k EU → FR VAT VIA OSS</text>
          <text x="600" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0EA5E9">BINARY GATE</text></svg>`,
        cap: '<strong>Compression Ratio (Tax Brief):</strong> Spoken legal prose hides simple binary forks. Listening for <em>"if / whenever"</em> immediately gives you a 2-branch Decision Diamond.'
      },
      deutsch: {
        raw: '"Also, wenn man in Deutschland eine Steuererklärung verspätet abgibt, muss man normalerweise ab dem ersten Monat einen Verspätungszuschlag von mindestens 25 Euro pro Monat beim Finanzamt bezahlen."',
        strip: '<strong>Bedingung:</strong> Steuererklärung verspätet → <strong>[ muss ]</strong> min. €25/Monat Verspätungszuschlag <strong>[ bezahlen ]</strong> (Finanzamt).',
        atom: `<svg viewBox="0 0 700 130">
          <rect x="18" y="34" width="164" height="54" rx="7" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/><text x="100" y="57" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" font-weight="700" fill="#BE185D">die Erklärung</text><text x="100" y="76" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5">VERSPÄTET (LATE)</text>
          <line x1="182" y1="61" x2="226" y2="61" stroke="#141836" stroke-width="2.4"/>
          <rect x="226" y="28" width="76" height="66" rx="7" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/><text x="264" y="57" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#0EA5E9">[ muss</text><text x="264" y="76" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5">V2 VERB</text>
          <rect x="312" y="38" width="234" height="46" rx="6" fill="#FFFDF5" stroke="#141836" stroke-width="1.6"/><text x="429" y="66" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16">der Zuschlag ≥ €25/Mo (Finanzamt)</text>
          <rect x="556" y="28" width="124" height="66" rx="7" fill="#FCE7F3" stroke="#EC4899" stroke-width="2.2"/><text x="618" y="57" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#BE185D">bezahlen ]</text><text x="618" y="76" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5">VERB-ENDE</text>
          <path d="M 264 28 Q 440 2 618 28" fill="none" stroke="#7C3AED" stroke-width="2" stroke-dasharray="4 3"/></svg>`,
        cap: '<strong>Deutsch Live Compression:</strong> Catching <code>[ muss ... bezahlen ]</code> as a Satzklammer bracket plus Cyan/Magenta gender washes locks both vocabulary and grammar in one stroke!'
      }
    };

    function render() {
      const d = DATA[sc];
      const stage = document.getElementById('ch6-stage');
      if (lv === 0) stage.innerHTML = `<div class="mono" style="font-size:10.5px; font-weight:700; color:var(--magenta-deep);">RAW SPOKEN AUDIO (100% VERBOSE):</div><p style="font-size:15.5px; line-height:1.7;">${d.raw}</p>`;
      else if (lv === 1) stage.innerHTML = `<div class="mono" style="font-size:10.5px; font-weight:700; color:var(--amber-deep);">STRIPPED FILLER (40% — KEY NOUNS, NUMBERS &amp; VERBS):</div><p style="font-size:16px; line-height:1.7;">${d.strip}</p>`;
      else stage.innerHTML = `<div class="mono" style="font-size:10.5px; font-weight:700; color:var(--mint-deep);">VISUAL ATOM (7% — SUBJECT + MECHANISM + DELTA):</div><div class="svg-box">${d.atom}</div>`;
      document.getElementById('ch6-cap').innerHTML = d.cap;
    }

    document.querySelectorAll('.ch6-sc').forEach(b => b.addEventListener('click', () => {
      sc = b.dataset.s;
      document.querySelectorAll('.ch6-sc').forEach(x => x.classList.toggle('active', x === b));
      render();
    }));
    document.querySelectorAll('.ch6-lv').forEach(b => b.addEventListener('click', () => {
      lv = Number(b.dataset.l);
      document.querySelectorAll('.ch6-lv').forEach(x => x.classList.toggle('active', x === b));
      render();
    }));
    render();
    initQuiz('ch6', CH6_QUIZ, onStateChange);
  }
};
