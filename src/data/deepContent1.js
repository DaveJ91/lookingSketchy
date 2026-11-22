/* =========================================================================
   DEEP TEXTBOOK CONTENT & WORKED DOMAIN EXAMPLES: CHAPTERS 1–6
   ========================================================================= */
export const DEEP_CONTENT_1 = {
  // -------------------------------------------------------------------------
  // CHAPTER 1 DEEP DIVE & WORKED EXAMPLES
  // -------------------------------------------------------------------------
  ch1: `
    <div class="prose-wrap">
      <h3>1.4 Cognitive Load, Chunking &amp; The 5-Second Squint Test</h3>
      <p>
        Cognitive psychology shows that human working memory holds only <strong>4 ± 1 independent chunks</strong> at once. When you take dense, unbroken paragraphs of notes during a tax technical update or software architecture review, every single sentence fights for one of those four slots—causing instant mental fatigue when you revisit the page a week later.
      </p>
      <p>
        By grouping related facts inside <strong>3 to 4 visually distinct containers</strong> on a spread (each with a short Architect's Print header and one semantic wash), you compress 25 raw bullet points into 4 high-level chunks. Your brain loads the entire page structure in a single glance, then drills into whichever container you need.
      </p>
      <p>
        <strong>The 5-Second Squint Test:</strong> After finishing any page, hold your notebook at arm's length and squint until the handwriting blurs completely. Can you still tell (1) where the title is, (2) which 3–4 blocks group together, and (3) where the single most important risk or decision lives? If the page blurs into uniform grey static, you have either broken the <strong>30% Whitespace Rule</strong> or used too many competing highlighter colors.
      </p>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Worked Examples // Semantic Color Across 3 Real Domains</div>
      <div class="grid-3">
        <div class="card">
          <span class="pill cyan" style="align-self:flex-start;">Example A: AI / Tech</span>
          <div class="card-h">Multi-Agent Guardrail Spread</div>
          <p class="card-p"><strong>Indigo Ink:</strong> Agent boxes, JSON schemas, and latency metrics.<br/><strong>Cyan Wash:</strong> Read-only intake &amp; Flash triage routing (80% fast path).<br/><strong>Magenta Dashed:</strong> Reasoning LLM boundary &amp; PII redaction warning.<br/><strong>Cool Grey:</strong> Offset card shadows &amp; cross-hatched bypassed agents.</p>
        </div>
        <div class="card">
          <span class="pill magenta" style="align-self:flex-start;">Example B: Tax / EU VAT</span>
          <div class="card-h">Cross-Border SaaS Tax Memo</div>
          <p class="card-p"><strong>Indigo Ink:</strong> Statutory citations (Art. 58, Art. 196) and Euro thresholds.<br/><strong>Cyan Wash:</strong> Standard B2B Reverse Charge flow (valid VIES ID).<br/><strong>Magenta Dashed:</strong> B2C &gt; €10,000 OSS registration exposure.<br/><strong>Mint Stamp:</strong> Partner sign-off &amp; compliant filing path.</p>
        </div>
        <div class="card">
          <span class="pill amber" style="align-self:flex-start;">Example C: Deutsch B1/B2</span>
          <div class="card-h">Permanent Gender Wash Code</div>
          <p class="card-p"><strong>Cyan = der (Masc):</strong> <em>der Bescheid, der Vertrag, der Speicher, der Algorithmus</em>.<br/><strong>Magenta = die (Fem):</strong> <em>die Frist, die Rechnung, die Datenbank, die Schnittstelle</em>.<br/><strong>Mint = das (Neut):</strong> <em>das Finanzamt, das Gutachten, das Modell, das Protokoll</em>.</p>
        </div>
      </div>
    </div>

    <div class="table-wrap">
      <table class="t">
        <thead><tr><th>German Noun (Tax / Tech)</th><th>Article &amp; Wash</th><th>Plural Form</th><th>Visual Memory Anchor</th></tr></thead>
        <tbody>
          <tr><td><strong>Steuerbescheid</strong> (tax assessment)</td><td><span class="pill cyan">der (Cyan)</span></td><td class="mono">die Bescheide</td><td>Cyan document card + § icon</td></tr>
          <tr><td><strong>Schnittstelle</strong> (API interface)</td><td><span class="pill magenta">die (Magenta)</span></td><td class="mono">die Schnittstellen</td><td>Magenta API plug icon</td></tr>
          <tr><td><strong>Gutachten</strong> (expert opinion)</td><td><span class="pill mint">das (Mint)</span></td><td class="mono">die Gutachten</td><td>Mint approved memo + ✓ stamp</td></tr>
          <tr><td><strong>Fristverlängerung</strong> (deadline ext.)</td><td><span class="pill magenta">die (Magenta)</span></td><td class="mono">die Verlängerungen</td><td>Calendar icon + stretched arrow</td></tr>
          <tr><td><strong>Datensatz</strong> (data record)</td><td><span class="pill cyan">der (Cyan)</span></td><td class="mono">die Datensätze</td><td>Cyan database cylinder + row tick</td></tr>
          <tr><td><strong>Protokoll</strong> (audit log)</td><td><span class="pill mint">das (Mint)</span></td><td class="mono">die Protokolle</td><td>Mint ledger grid + padlock</td></tr>
        </tbody>
      </table>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 2 DEEP DIVE & WORKED EXAMPLES
  // -------------------------------------------------------------------------
  ch2: `
    <div class="prose-wrap">
      <h3>2.3 Paper Coating, Tooth &amp; Protecting Brush Nibs</h3>
      <p>
        Weight (GSM) is only half of paper physics; the other half is <strong>surface texture ("tooth")</strong>. Rough watercolor paper or cheap recycled stock acts like fine sandpaper against felt-tip brush pens (<em>Tombow Fudenosuke</em>, <em>Tombow ABT</em>). After two weeks on rough paper, your razor-sharp brush tip frays into a fuzzy broom that can no longer pull crisp hairlines.
      </p>
      <p>
        Smooth, coated or calendered 120–160gsm sheets (<em>Leuchtturm1917 120g</em>, <em>Rhodia</em>, <em>Archer &amp; Olive</em>) let pigment fineliners and brush nibs glide with minimal friction. The one trade-off of ultra-smooth coated paper (like Rhodia 90g) is a slightly longer dry time (~8 seconds instead of 4)—which is why left-handed sketchers often prefer slightly faster-absorbing 120gsm uncoated cotton-blend sheets.
      </p>

      <h3>2.4 Real-World Notebook Field Comparison</h3>
      <p>
        Use this comparison matrix when picking your next primary sketchbook across daily office work, heavy data-viz glazing, or portable German café study:
      </p>
    </div>

    <div class="table-wrap">
      <table class="t">
        <thead><tr><th>Notebook</th><th>GSM</th><th>Paper Tone</th><th>A5 Dot Count</th><th>Best Real-World Use Case</th></tr></thead>
        <tbody>
          <tr><td><strong>Leuchtturm1917 Edition 120g</strong> ★</td><td class="mono">120g</td><td>Soft Cream</td><td class="mono">27 × 38</td><td>All-around workhorse: pre-numbered pages, built-in index, slim carry.</td></tr>
          <tr><td><strong>Archer &amp; Olive A5 Dot</strong></td><td class="mono">160g</td><td>Pure White</td><td class="mono">26 × 38</td><td>Heavy multi-coat marker glazing, White Gel Pen pop, zero ghosting.</td></tr>
          <tr><td><strong>Midori MD A5 Dot</strong></td><td class="mono">85g*</td><td>Warm Cream</td><td class="mono">27 × 39</td><td>Fountain pen &amp; Micron purists (ultra-resistant Japanese sizing, mild ghosting).</td></tr>
          <tr><td><strong>Dingbats* Pro B5</strong></td><td class="mono">160g</td><td>Cream</td><td class="mono">34 × 48</td><td>Big multi-lane Swimlanes, landscape Gantt charts &amp; complex EU VAT trees.</td></tr>
          <tr><td><strong>Rhodia Webnotebook</strong></td><td class="mono">90g</td><td>Ivory</td><td class="mono">26 × 38</td><td>Silky Clairefontaine finish; preserves Tombow brush nibs indefinitely.</td></tr>
          <tr><td><strong>Muji A5 Dot (Budget)</strong></td><td class="mono">80–90g</td><td>Off-White</td><td class="mono">27 × 39</td><td>Low-pressure disposable scratchpad for daily German vocab &amp; quick drills.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Worked Example // The Minimal 5-Pen Commuter Pouch</div>
      <p style="font-size:15px;">
        Don't haul a 40-marker artist roll to client meetings or German class—decision fatigue slows you down. Pack exactly <strong>five slim instruments</strong> plus a 15cm clear ruler in a flat pen sleeve:
      </p>
      <div class="grid-3">
        <div class="card tinted"><div class="card-h">1–2. Micron 03 + 05 (Black/Indigo)</div><p class="card-p">03 writes fast body notes &amp; inner lines; 05 outlines bold card frames &amp; AO contact shadows.</p></div>
        <div class="card tinted"><div class="card-h">3–4. Mildliner Cyan + Magenta</div><p class="card-p">Covers active flows vs. risks (Tax/AI) AND <code>der</code> vs. <code>die</code> (add Mint at desk for <code>das</code>).</p></div>
        <div class="card tinted"><div class="card-h">5. Tombow N75 Cool Grey</div><p class="card-p">The single pen that makes every flat box and isometric diagram pop off the page in 3D.</p></div>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 3 DEEP DIVE & WORKED EXAMPLES
  // -------------------------------------------------------------------------
  ch3: `
    <div class="prose-wrap">
      <h3>3.3 The 4 Stroke Families &amp; German Diacritics (ä, ö, ü, ß)</h3>
      <p>
        Every letter in the Latin and German alphabet is built from just <strong>four repeatable strokes</strong>. When you practice these four families instead of 26 unrelated shapes, your handwriting cleans up in days:
      </p>
      <ul>
        <li><strong>Family 1 — Vertical Plumb Stems (<code>i, l, t, f, k</code>):</strong> Pull straight down parallel to the dot columns—never curved.</li>
        <li><strong>Family 2 — Corner-Braked Arches (<code>n, m, h, r, u</code>):</strong> Come to a micro-stop at the bottom valley before rising back over the arch so <code>n</code> never blurs into <code>u</code>.</li>
        <li><strong>Family 3 — Closed Oval Bowls (<code>o, a, d, g, q, b, p, c, e</code>):</strong> Keep every oval identical in width and fully close the top seam of <code>a, d, g, o</code>.</li>
        <li><strong>Family 4 — Crisp Diagonals (<code>v, w, x, y, z</code>):</strong> Pull brisk straight strokes to sharp bottom vertices (never rounded U-bottoms on <code>v</code> or <code>w</code>).</li>
        <li><strong>German Umlauts &amp; Eszett (<code>ä, ö, ü, ß</code>):</strong> Place two tiny crisp <em>dots</em> directly over the vowel (avoid hurried horizontal squiggles that look like tildes), and build <code>ß</code> from one clean 90° vertical stem + two tight stacked bowls.</li>
      </ul>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Worked Example // Taming Long German Compound Nouns on a 5mm Grid</div>
      <p style="font-size:15px;">
        German tax and tech vocabulary is famous for 25-letter compound words (<em>Komposita</em>) that crash straight through card margins. When writing them in study notes, insert tiny raised <strong>middot dividers (·)</strong> between morphemes—your eyes parse the meaning instantly, and you always know where a clean line-break can go:
      </p>
      <div class="svg-box">
        <svg viewBox="0 0 740 120">
          <rect x="16" y="14" width="336" height="92" rx="7" fill="#FFF7FB" stroke="#EC4899" stroke-width="1.8"/>
          <text x="32" y="38" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">✕ UNBROKEN WALL OF LETTERS</text>
          <text x="32" y="68" font-family="Patrick Hand, cursive" font-size="18.5" fill="#141836">Umsatzsteuervoranmeldung</text>
          <text x="32" y="92" font-family="Patrick Hand, cursive" font-size="18.5" fill="#141836">Doppelbesteuerungsabkommen</text>

          <rect x="382" y="14" width="342" height="92" rx="7" fill="#F2FDF8" stroke="#10B981" stroke-width="1.8"/>
          <text x="398" y="38" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">✓ MIDDOT MORPHEME CHUNKS + GENDER WASH</text>
          <rect x="396" y="51" width="36" height="20" rx="3" fill="#EC4899" fill-opacity="0.24"/>
          <text x="400" y="67" font-family="Patrick Hand, cursive" font-size="18.5" fill="#141836">die  Umsatz·steuer·vor·anmeldung</text>
          <rect x="396" y="76" width="38" height="20" rx="3" fill="#10B981" fill-opacity="0.24"/>
          <text x="400" y="92" font-family="Patrick Hand, cursive" font-size="18.5" fill="#141836">das  Doppel·besteuerungs·abkommen</text>
        </svg>
      </div>
      <p style="font-size:14.2px; color:var(--ink-muted);"><strong>Pro Bonus:</strong> In German, the <em>very last word</em> of any compound sets the gender (<code>-meldung = die</code>, <code>-abkommen = das</code>). Highlighting the article + final suffix makes gender rules stick permanently.</p>
    </div>

    <div class="mental-model">
      <span class="callout-label" style="color:var(--cyan);">3-Minute Daily Biomechanical Warmup</span>
      <p>
        Before opening a fresh study page, use the bottom margin of a scratch sheet for 90 seconds: (1) pull <strong>10 straight horizontal forearm lines</strong> across 6 dots without moving your wrist, (2) draw <strong>10 tightly closed lowercase <code>o</code>s</strong> locked to 60% height, and (3) write <code>m n h r u</code> five times tapping the brakes at every corner.
      </p>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 4 DEEP DIVE & WORKED EXAMPLES
  // -------------------------------------------------------------------------
  ch4: `
    <div class="prose-wrap">
      <h3>4.2 Exact Typographic Scale Ratios on a 5mm Dot Grid</h3>
      <p>
        Good typography is simply mathematical contrast. If your title is 6mm tall and your body text is 5mm tall, the reader barely registers a hierarchy. Lock your entire notebook to a crisp <strong>4-Tier Dot-Grid Type Scale</strong>:
      </p>
    </div>

    <div class="table-wrap">
      <table class="t">
        <thead><tr><th>Tier</th><th>Exact Height on 5mm Grid</th><th>Mode &amp; Nib</th><th>Concrete Example</th></tr></thead>
        <tbody>
          <tr><td><strong>H1 — Spread Title</strong></td><td class="mono">2.0 dot rows (10mm)</td><td>Faux Calligraphy or Bold Highlighter-Drop (<code>05</code>)</td><td><em>EU VAT Orchestration</em> / <em>Konjunktiv II</em></td></tr>
          <tr><td><strong>H2 — Section Header</strong></td><td class="mono">1.0 dot row (5mm)</td><td>Architect's Print All-Caps (<code>05</code>)</td><td><code>02 // GOVERNANCE GATE</code></td></tr>
          <tr><td><strong>Body — Notes &amp; Prose</strong></td><td class="mono">0.6 dot row (3mm x-height)</td><td>Clean 90° Vertical Print (<code>03</code>)</td><td>• 80% routine tickets bypass reasoning</td></tr>
          <tr><td><strong>Micro — Tags &amp; Axes</strong></td><td class="mono">0.45 dot row (2.2mm)</td><td>Tight Monospace All-Caps (<code>01</code>)</td><td><code>ART. 58 • 0.2s • NB02-P14</code></td></tr>
        </tbody>
      </table>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Worked Examples // 3 Complete Header Recipes (Exact Stroke Sequence)</div>
      <div class="grid-3">
        <div class="card">
          <span class="pill cyan" style="align-self:flex-start;">Recipe 1: AI RFC Spec</span>
          <div class="svg-box">
            <svg viewBox="0 0 220 76">
              <rect x="8" y="10" width="204" height="54" rx="5" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
              <rect x="8" y="10" width="8" height="54" fill="#0EA5E9"/>
              <text x="26" y="33" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700">RFC-014 // MCP GATE</text>
              <text x="26" y="52" font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A">STATUS: APPROVED • v2.1</text>
            </svg>
          </div>
          <p class="card-p">1. Draw 2-row box (05) → 2. Swipe Cyan vertical bar on left edge → 3. Architect's Print title + 01 status line.</p>
        </div>
        <div class="card">
          <span class="pill magenta" style="align-self:flex-start;">Recipe 2: Tax Memo</span>
          <div class="svg-box">
            <svg viewBox="0 0 220 76">
              <rect x="12" y="36" width="196" height="14" rx="3" fill="#EC4899" fill-opacity="0.26"/>
              <text x="18" y="44" font-family="Playwrite IT Moderna, cursive" font-size="17" fill="#141836">UStVA Q4 Review</text>
              <text x="18" y="64" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">DUE: 1Ø JAN • CLIENT: GMBH</text>
            </svg>
          </div>
          <p class="card-p">1. Swipe Magenta bar first → 2. Faux Calligraphy sitting half-on → 3. Slashed-zero deadline underneath.</p>
        </div>
        <div class="card">
          <span class="pill amber" style="align-self:flex-start;">Recipe 3: Deutsch B2</span>
          <div class="svg-box">
            <svg viewBox="0 0 220 76">
              <rect x="12" y="12" width="196" height="48" rx="6" fill="#FFFDF5" stroke="#141836" stroke-width="2"/>
              <rect x="148" y="6" width="52" height="16" rx="8" fill="#F59E0B" stroke="#141836" stroke-width="1.3"/>
              <text x="174" y="17" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">B2 GRAM</text>
              <text x="24" y="43" font-family="Playwrite IT Moderna, cursive" font-size="17" fill="#141836">Passiv &amp; Modal</text>
            </svg>
          </div>
          <p class="card-p">1. Amber cream box → 2. Pill badge overlapping top-right wall → 3. Script title centered cleanly.</p>
        </div>
      </div>
    </div>

    <div class="prose-wrap">
      <h3>4.3 Six Steal-Worthy Sketchnote Banner &amp; Title Styles</h3>
      <p>
        Borrow these six classic handwritten-note title frames (from comic artists, bullet-journalers, and architects) whenever a spread deserves instant visual presence (see <button class="gloss-term" data-nav="appC" style="border:none; background:none; font:inherit;">Appendix C: The Sketchnote Steal Book</button> for 16 more!):
      </p>
    </div>
    <div class="svg-box">
      <svg viewBox="0 0 760 170">
        <!-- 1. Folded Ribbon -->
        <g transform="translate(18,12)">
          <polygon points="4,26 30,26 30,54 4,54 14,40" fill="#0EA5E9" fill-opacity="0.32" stroke="#141836" stroke-width="1.8"/>
          <polygon points="216,26 190,26 190,54 216,54 206,40" fill="#0EA5E9" fill-opacity="0.32" stroke="#141836" stroke-width="1.8"/>
          <rect x="22" y="14" width="176" height="32" rx="3" fill="#FFF" stroke="#141836" stroke-width="2"/>
          <text x="110" y="35" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">1. 3D RIBBON SCROLL</text>
        </g>
        <!-- 2. Washi Tape Flag -->
        <g transform="translate(270,12)">
          <rect x="16" y="14" width="188" height="34" rx="4" fill="#FFFDF5" stroke="#141836" stroke-width="2"/>
          <polygon points="4,22 28,4 36,12 12,30" fill="#F59E0B" opacity="0.55" stroke="#141836"/>
          <polygon points="186,4 210,22 202,30 178,12" fill="#F59E0B" opacity="0.55" stroke="#141836"/>
          <text x="110" y="35" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">2. WASHI-TAPE HEADER</text>
        </g>
        <!-- 3. Hanging Tag -->
        <g transform="translate(522,12)">
          <polygon points="34,12 206,12 206,48 34,48 12,30" fill="#ECFDF5" stroke="#047857" stroke-width="2"/>
          <circle cx="30" cy="30" r="4.5" fill="#FFF" stroke="#047857" stroke-width="1.8"/>
          <text x="122" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">3. HANGING TAG</text>
        </g>
        <!-- 4. Bracket Frame -->
        <g transform="translate(18,96)">
          <polyline points="26,8 12,8 12,50 26,50" fill="none" stroke="#7C3AED" stroke-width="3.2"/>
          <polyline points="194,8 208,8 208,50 194,50" fill="none" stroke="#7C3AED" stroke-width="3.2"/>
          <text x="110" y="33" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#7C3AED">[ 4. BRACKET TITLE ]</text>
        </g>
        <!-- 5. Dotted Double Underline -->
        <g transform="translate(270,96)">
          <text x="110" y="28" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="17" fill="#141836">5. Editorial Rule</text>
          <line x1="22" y1="38" x2="198" y2="38" stroke="#141836" stroke-width="2.4"/>
          <line x1="22" y1="44" x2="198" y2="44" stroke="#EC4899" stroke-width="1.8" stroke-dasharray="5 3"/>
        </g>
        <!-- 6. Terminal Bar -->
        <g transform="translate(522,96)">
          <rect x="12" y="10" width="196" height="40" rx="6" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
          <circle cx="26" cy="22" r="3.5" fill="#EC4899"/><circle cx="38" cy="22" r="3.5" fill="#F59E0B"/><circle cx="50" cy="22" r="3.5" fill="#10B981"/>
          <text x="122" y="38" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">6. TERMINAL TITLE</text>
        </g>
      </svg>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 5 DEEP DIVE & WORKED EXAMPLES
  // -------------------------------------------------------------------------
  ch5: `
    <div class="prose-wrap">
      <h3>5.4 Threading Multi-Month Topics Across Non-Adjacent Pages</h3>
      <p>
        One common fear with physical notebooks is: <em>"What if my Munich EU VAT project starts on Page 14, then resumes two weeks later on Page 39 after 25 pages of AI meetings and German notes?"</em> Never leave blank guessed pages—you will always guess wrong. Instead, use <strong>Bullet-Journal Threading</strong> in the bottom-outer corner of each page:
      </p>
      <ul>
        <li>When Page 14 continues on Page 39, write <code>→39</code> right beside the page number <code>14</code>.</li>
        <li>On Page 39, write <code>←14</code> beside <code>39</code>. If it continues again on Page 64, update Page 39 to <code>←14 | 39 | 64→</code>.</li>
        <li>Pair Threading with your <strong>6-Slot Edge Tab</strong> on the outer margin and a 2-page Front Index. You can trace a 6-month client engagement or complete B2 grammar track in 3 seconds flat.</li>
      </ul>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Worked Example // 4 Instant Mistake-Recovery Recipes</div>
      <div class="grid-2">
        <div class="card tinted"><div class="card-h">1. Crooked Box Wall → Double-Sketch Frame</div><p class="card-p">Don't scrub with white-out. Draw a second slightly offset dashed Cyan border around the crooked box—it instantly looks like an intentional cyberpunk editorial frame.</p></div>
        <div class="card tinted"><div class="card-h">2. Wrong Number or German Article → Single Strike</div><p class="card-p">Draw ONE crisp horizontal fineliner bar through the mistake (<code><del>der</del> die Frist</code>) and tint the correct word with its semantic color. Scribbling creates an ugly dark magnet.</p></div>
        <div class="card tinted"><div class="card-h">3. Accidental Ink Blot → Turn Into a Node Dot</div><p class="card-p">Dropped your 05 nib mid-page? Convert that dot into a solid <code>●</code> elbow-leader anchor, a bullet point, or a data point on a margin sparkline.</p></div>
        <div class="card tinted"><div class="card-h">4. Ran Out of Space → Circled Badge Jump (①)</div><p class="card-p">Write a bold circled <code>①</code> right where you ran out of room, place matching <code>①</code> in the right margin or next page, and finish the thought cleanly with zero cramming.</p></div>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // CHAPTER 6 DEEP DIVE & WORKED EXAMPLES
  // -------------------------------------------------------------------------
  ch6: `
    <div class="prose-wrap">
      <h3>6.3 The 3-Layer Live Listening Filter</h3>
      <p>
        When listening to a rapid speaker—whether a senior tax partner, a systems architect, or a fast German news anchor—filter incoming audio through three mental sieves before letting your pen move:
      </p>
      <ol>
        <li><strong>Sieve 1 — Drop Throat-Clearing (Ignore ~60%):</strong> Ignore greetings, hedging (<em>"basically, kind of, sozusagen, eigentlich"</em>), and repeated anecdotes. Keep your pen resting gently off the page.</li>
        <li><strong>Sieve 2 — Snag Hard Anchors (~25%):</strong> Catch exact <strong>numbers, statutory articles, deadlines, percentages, and German verbs</strong> (<code>€10,000</code>, <code>Art. 196</code>, <code>10. Mai</code>, <code>nachreichen</code>).</li>
        <li><strong>Sieve 3 — Capture Structure &amp; Constraints (~15%):</strong> Listen for logical connectors (<em>if/unless, causes, blocks, vs.</em>) and immediately map them onto a 1-second arrow, diamond, or split column.</li>
      </ol>
    </div>

    <div class="worked-example">
      <div class="callout-label" style="color:var(--magenta-deep);">Worked Reference // 14 One-Second Shorthand Symbols for Live Capture</div>
      <div class="table-wrap">
        <table class="t">
          <thead><tr><th>Symbol</th><th>Meaning</th><th>Live Capture Example</th><th>Symbol</th><th>Meaning</th><th>Live Capture Example</th></tr></thead>
          <tbody>
            <tr><td class="mono" style="font-weight:700; color:var(--cyan);">Δ</td><td>Change / Delta</td><td><code>Δ latency -97%</code></td><td class="mono" style="font-weight:700; color:var(--magenta-deep);">≠</td><td>Conflict / Exception</td><td><code>B2C ≠ Reverse Charge</code></td></tr>
            <tr><td class="mono" style="font-weight:700; color:var(--cyan);">∴</td><td>Therefore</td><td><code>&gt;€10k ∴ OSS required</code></td><td class="mono" style="font-weight:700; color:var(--violet);">§</td><td>Statute / Legal Rule</td><td><code>§ 13b UStG</code></td></tr>
            <tr><td class="mono" style="font-weight:700; color:var(--mint-deep);">⇄</td><td>Sync / Bi-Directional</td><td><code>MCP ⇄ SharePoint</code></td><td class="mono" style="font-weight:700; color:var(--amber-deep);">⚡</td><td>Trigger / Event</td><td><code>⚡ Client email arrives</code></td></tr>
            <tr><td class="mono" style="font-weight:700; color:var(--mint-deep);">↑ / ↓</td><td>Increase / Drop</td><td><code>Cost ↓ • Recall ↑</code></td><td class="mono" style="font-weight:700; color:var(--magenta-deep);">✕</td><td>Blocked / Bypassed</td><td><code>LLM ─✕→ Direct Write</code></td></tr>
            <tr><td class="mono" style="font-weight:700;">≈</td><td>Approximately</td><td><code>≈ 80% routine queries</code></td><td class="mono" style="font-weight:700;">w/ • w/o</td><td>With / Without</td><td><code>w/ HITL • w/o write key</code></td></tr>
            <tr><td class="mono" style="font-weight:700; color:var(--cyan);">[ ... ]</td><td>German Satzklammer</td><td><code>[ muss ] ... [ abgeben ]</code></td><td class="mono" style="font-weight:700; color:var(--amber-deep);">Bsp.</td><td>Beispiel (Example)</td><td><code>Bsp: in den Ordner (Akk)</code></td></tr>
            <tr><td class="mono" style="font-weight:700; color:var(--violet);">@</td><td>Owner / Assignee</td><td><code>□ Schema @David (Fri)</code></td><td class="mono" style="font-weight:700; color:var(--mint-deep);">✓ / ?</td><td>Verified / Open Check</td><td><code>VIES ✓ • OSS ?</code></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="deutsch-box">
      <div class="callout-label" style="color:var(--amber-deep);">Worked German Audio Drill // "Homeoffice-Pauschale" (30s Podcast → 1 Card)</div>
      <p style="font-size:14.8px;">
        <strong>Spoken German Clip:</strong> <em>"Seit der Steuerreform können Arbeitnehmer für jeden Tag im Homeoffice pauschal sechs Euro absetzen, höchstens aber eintausendzweihundertsechzig Euro pro Jahr—und man braucht dafür kein separates Arbeitszimmer mehr."</em><br/>
        <strong>Compressed 6-Second Notebook Capture:</strong><br/>
        <code>die Homeoffice-Pauschale [Magenta]</code> → <strong>€6/Tag</strong> (max <code>€1.26Ø/Jahr</code> = 210 Tage) • <code>✕ Arbeitszimmer nötig</code> • Verb: <code>[ können ] ... [ absetzen ]</code>.
      </p>
    </div>
  `
};
