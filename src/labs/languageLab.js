/* =========================================================================
   APPENDIX H: THE VISUAL LANGUAGE-LEARNING NOTEBOOK STUDIO (DEUTSCH B1/B2+)
   8 Iconic Language Spread Layouts + Interactive Visual Vocab Card Builder
   ========================================================================= */

export const LANG_SPREADS = [
  {
    id: 'satzklammer',
    short: '1. Satzklammer Bridge',
    name: '1. The "Satzklammer" Sentence-Bracket Bridge + TeKaMoLo',
    tag: 'German Word Order • Syntax',
    tip: 'Never memorize word order as prose rules! Draw two heavy architectural gate towers at Position 2 and the very end—everything else rides like train cars inside the bracket.',
    recipe: [
      'Draw two bold Indigo gate towers: Tower 1 (Pos 2 = Conjugated Verb) and Tower 2 (End = Infinitive / Participle / Prefix).',
      'Span a curved Cyan suspension arch linking the two towers so your eye sees them as ONE split verb.',
      'Slot 4 color-coded TeKaMoLo freight cars underneath: Time (Cyan) → Cause (Violet) → Manner (Amber) → Place (Mint)!'
    ],
    svg: `<svg viewBox="0 0 680 320">
      <!-- Suspension Arch Linking Pos 2 and Verb End -->
      <path d="M 184 82 C 250 18, 490 18, 560 82" fill="none" stroke="#EC4899" stroke-width="3.2" stroke-dasharray="7 4"/>
      <rect x="284" y="24" width="176" height="24" rx="12" fill="#141836"/>
      <text x="372" y="40" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#F472B6">SATZKLAMMER [ ... ]</text>
      <!-- Pos 1 Slot -->
      <rect x="22" y="106" width="96" height="92" rx="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
      <text x="70" y="128" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">POS 1 (VORFELD)</text>
      <text x="70" y="156" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="17" fill="#141836">Ich</text>
      <text x="70" y="178" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">(1 element only!)</text>
      <!-- Tower 1: Pos 2 Conjugated Verb -->
      <rect x="132" y="78" width="104" height="120" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.8"/>
      <rect x="132" y="78" width="104" height="24" rx="6" fill="#BE185D"/>
      <text x="184" y="94" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#FFF">POS 2 // VERB 1</text>
      <text x="184" y="138" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="17" fill="#BE185D">muss</text>
      <text x="184" y="168" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">Conjugated</text>
      <text x="184" y="186" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#BE185D">LOCKED AT #2</text>
      <!-- Middle Freight Cars: Te-Ka-Mo-Lo -->
      <g transform="translate(248, 118)">
        <rect x="0" y="0" width="60" height="80" rx="6" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.8"/>
        <text x="30" y="18" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">TE</text>
        <text x="30" y="42" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">heute</text>
        <text x="30" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" fill="#525B7A">Wann?</text>

        <rect x="66" y="0" width="66" height="80" rx="6" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.8"/>
        <text x="99" y="18" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#6D28D9">KA</text>
        <text x="99" y="42" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">wegen USt</text>
        <text x="99" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" fill="#525B7A">Warum?</text>

        <rect x="138" y="0" width="58" height="80" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.8"/>
        <text x="167" y="18" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#B45309">MO</text>
        <text x="167" y="42" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">schnell</text>
        <text x="167" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" fill="#525B7A">Wie?</text>

        <rect x="202" y="0" width="60" height="80" rx="6" fill="#D1FAE5" stroke="#047857" stroke-width="1.8"/>
        <text x="232" y="18" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">LO</text>
        <text x="232" y="42" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">im Büro</text>
        <text x="232" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" fill="#525B7A">Wo?</text>
      </g>
      <!-- Tower 2: End Verb -->
      <rect x="520" y="78" width="138" height="120" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.8"/>
      <rect x="520" y="78" width="138" height="24" rx="6" fill="#BE185D"/>
      <text x="589" y="94" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#FFF">ENDE // VERB 2</text>
      <text x="589" y="138" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="16" fill="#BE185D">anrufen.</text>
      <text x="589" y="168" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">Infinitiv / Partizip</text>
      <text x="589" y="186" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#BE185D">CLOSES BRACKET!</text>
      <!-- Bottom Complete Sentence Banner -->
      <rect x="24" y="224" width="634" height="74" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
      <text x="44" y="250" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#7C3AED">FULL SPOKEN RESULT (INVERSION WORKS TOO!)</text>
      <text x="44" y="274" font-family="Patrick Hand, cursive" font-size="16.5" fill="#141836">✓ "Ich [muss] heute wegen der USt schnell im Büro [anrufen]."</text>
      <text x="44" y="291" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#047857">Swap Vorfeld → "Heute [muss] ich wegen der USt schnell im Büro [anrufen]." (Verb stays #2!)</text>
    </svg>`
  },
  {
    id: 'preps',
    short: '2. Preposition Visual Map',
    name: '2. Visual Preposition Compass (Wechselpräpositionen: Wo? vs. Wohin?)',
    tag: 'Spatial Grammar • Dativ vs. Akkusativ',
    tip: 'Draw ONE simple isometric cube + a tiny dot/ball in all 9 spatial positions! Color static "Wo? (Dativ)" Mint with an anchor pin, and motion "Wohin? (Akkusativ)" Magenta with a swooping arrow.',
    recipe: [
      'Draw a 3×3 mini-grid of tiny dot-grid boxes (each 4×4 dots) across one half-page.',
      'Place a single shaded cube in each cell and position a bold colored ball/arrow for auf, über, unter, vor, hinter, neben, zwischen, in, an.',
      'Put the golden rule pill across the top: STATIC = DATIV (Mint Anchor) • MOTION = AKKUSATIV (Magenta Arrow).'
    ],
    svg: `<svg viewBox="0 0 680 320">
      <!-- Top Golden Rule Header -->
      <rect x="24" y="12" width="308" height="36" rx="18" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <text x="178" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">⚓ WO? (STATIC) = DATIV (dem/der)</text>
      <rect x="348" y="12" width="308" height="36" rx="18" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.2"/>
      <text x="502" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">➔ WOHIN? (MOTION) = AKKUSATIV (den/die)</text>
      <!-- 9 Spatial Micro-Scenes (3x3 Grid) -->
      ${[
        { n: 'auf (on top)', x: 24, y: 62, draw: '<rect x="52" y="38" width="34" height="24" rx="3" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><circle cx="69" cy="30" r="8" fill="#0EA5E9" stroke="#141836" stroke-width="1.8"/>' },
        { n: 'über (above)', x: 242, y: 62, draw: '<rect x="52" y="42" width="34" height="22" rx="3" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><circle cx="69" cy="20" r="8" fill="#0EA5E9" stroke="#141836" stroke-width="1.8"/><line x1="69" y1="30" x2="69" y2="39" stroke="#94A3B8" stroke-dasharray="2 2"/>' },
        { n: 'unter (under)', x: 460, y: 62, draw: '<rect x="52" y="18" width="34" height="22" rx="3" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><circle cx="69" cy="52" r="8" fill="#EC4899" stroke="#141836" stroke-width="1.8"/>' },
        { n: 'in (inside)', x: 24, y: 148, draw: '<rect x="48" y="20" width="42" height="42" rx="4" fill="#E0F2FE" fill-opacity="0.4" stroke="#141836" stroke-width="2"/><circle cx="69" cy="41" r="9" fill="#10B981" stroke="#141836" stroke-width="1.8"/>' },
        { n: 'an (touching side)', x: 242, y: 148, draw: '<rect x="64" y="22" width="32" height="38" rx="3" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><circle cx="55" cy="41" r="8" fill="#F59E0B" stroke="#141836" stroke-width="1.8"/>' },
        { n: 'neben (next to)', x: 460, y: 148, draw: '<rect x="68" y="22" width="30" height="38" rx="3" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><circle cx="44" cy="41" r="8" fill="#7C3AED" stroke="#141836" stroke-width="1.8"/>' },
        { n: 'vor (in front)', x: 24, y: 234, draw: '<rect x="58" y="20" width="34" height="32" rx="3" fill="#CBD5E1" stroke="#141836" stroke-width="1.8"/><circle cx="58" cy="50" r="10" fill="#EC4899" stroke="#141836" stroke-width="2"/>' },
        { n: 'hinter (behind)', x: 242, y: 234, draw: '<circle cx="80" cy="30" r="9" fill="#0EA5E9" stroke="#141836" stroke-width="1.8"/><rect x="48" y="28" width="34" height="34" rx="3" fill="#FFF" stroke="#141836" stroke-width="2.2"/>' },
        { n: 'zwischen (between)', x: 460, y: 234, draw: '<rect x="30" y="24" width="22" height="34" rx="3" fill="#EEF2FC" stroke="#141836" stroke-width="1.8"/><rect x="86" y="24" width="22" height="34" rx="3" fill="#EEF2FC" stroke="#141836" stroke-width="1.8"/><circle cx="69" cy="41" r="8" fill="#10B981" stroke="#141836" stroke-width="1.8"/>' }
      ].map(item => `
        <g transform="translate(${item.x}, ${item.y})">
          <rect x="0" y="0" width="196" height="74" rx="8" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
          ${item.draw}
          <text x="148" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">${item.n.split(' ')[0].toUpperCase()}</text>
          <text x="148" y="60" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5" fill="#525B7A">${item.n.slice(item.n.indexOf('('))}</text>
        </g>
      `).join('')}
    </svg>`
  },
  {
    id: 'prefix-tree',
    short: '3. Prefix Root Tree',
    name: '3. The Verb-Prefix Explosion Tree (Learn 6 Verbs From 1 Root!)',
    tag: 'Vocabulary Multiplier • B1 → C1',
    tip: 'Instead of memorizing 6 unrelated dictionary entries, anchor ONE core root verb (`stehen`, `kommen`, `nehmen`, `stellen`) in the center and branch out its prefixes—add a 3-second tiny icon beside each!',
    recipe: [
      'Draw a bold dark hub box dead-center with the base root verb + its irregular forms (`stehen • stand • gestanden`).',
      'Shoot 6 crisp colored branches outward—one per prefix—marking separable prefixes (`auf|stehen`) with a vertical scissors-bar `|`.',
      'Write a 2-word meaning + micro-example directly under each branch!'
    ],
    svg: `<svg viewBox="0 0 680 320">
      <!-- Branches -->
      <g stroke-width="2.6" fill="none" stroke-linecap="round">
        <path d="M 272 140 C 230 112, 200 76, 150 76 H 34" stroke="#0EA5E9"/>
        <path d="M 272 160 H 34" stroke="#7C3AED"/>
        <path d="M 272 180 C 230 208, 200 244, 150 244 H 34" stroke="#10B981"/>
        <path d="M 408 140 C 450 112, 480 76, 530 76 H 646" stroke="#EC4899"/>
        <path d="M 408 160 H 646" stroke="#F59E0B"/>
        <path d="M 408 180 C 450 208, 480 244, 530 244 H 646" stroke="#0EA5E9"/>
      </g>
      <!-- Center Verb Trunk -->
      <rect x="272" y="114" width="136" height="92" rx="14" fill="#141836"/>
      <text x="340" y="148" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="18" fill="#00D4FF">stehen</text>
      <text x="340" y="170" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="#FFF">to stand</text>
      <text x="340" y="190" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#94A3B8">stand • gestanden</text>
      <!-- Left 3 Prefixes -->
      <g>
        <text x="38" y="68" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0369A1">VER-stehen (insep.)</text>
        <text x="38" y="94" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">to understand ("Ich verstehe!")</text>

        <text x="38" y="152" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#6D28D9">BE-stehen (insep.)</text>
        <text x="38" y="178" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">to pass an exam ("Prüfung bestehen")</text>

        <text x="38" y="236" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">ENT-stehen (insep.)</text>
        <text x="38" y="262" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">to arise ("Steuer entsteht" § 13!)</text>
      </g>
      <!-- Right 3 Prefixes (Separable |) -->
      <g text-anchor="end">
        <text x="642" y="68" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#BE185D">AUF|stehen (✂ sep.)</text>
        <text x="642" y="94" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">to wake/get up ("Ich stehe um 7 auf")</text>

        <text x="642" y="152" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#B45309">FEST|stehen (✂ sep.)</text>
        <text x="642" y="178" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">to be certain ("Der Termin steht fest")</text>

        <text x="642" y="236" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0369A1">AUS|stehen (✂ sep.)</text>
        <text x="642" y="262" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">to be pending ("Antwort steht aus")</text>
      </g>
      <text x="340" y="302" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">✂ TIP: Mark separable prefixes with a vertical bar (|) so you remember they jump to the end!</text>
    </svg>`
  },
  {
    id: 'goldlist',
    short: '4. Fold-Recall Spread',
    name: '4. Split-Page "Margin-Fold" Active Recall & Goldlist Spread',
    tag: 'Spaced Repetition • Analog Anki',
    tip: 'Passive vocab lists don\'t stick—split your page with a vertical fold rail so you can physically cover the German column and force your brain to produce the full chunk!',
    recipe: [
      'Draw a dashed vertical fold line 60% across your A5 page (Left = Target Language Context + Mini-Sketch; Right = English Prompt + Recall Checkboxes).',
      'Color-code EVERY noun border by gender (Cyan = der, Magenta = die, Mint = das) so your visual memory locks the article automatically.',
      'Put 3 tiny checkboxes `☐ ☐ ☐` on the far right edge to tick off Day 1, Day 7, and Day 21 active-recall wins!'
    ],
    svg: `<svg viewBox="0 0 680 320">
      <rect x="24" y="14" width="632" height="292" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
      <!-- Vertical Fold Rail -->
      <line x1="406" y1="14" x2="406" y2="306" stroke="#7C3AED" stroke-width="2.4" stroke-dasharray="6 4"/>
      <rect x="358" y="22" width="96" height="22" rx="11" fill="#7C3AED"/>
      <text x="406" y="37" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">✂ FOLD HERE</text>
      <!-- Headers -->
      <text x="44" y="42" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">DEUTSCH CHUNK (COLOR = GENDER)</text>
      <text x="470" y="42" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#525B7A">RECALL CUE + 3 REPS</text>
      <line x1="36" y1="54" x2="644" y2="54" stroke="#141836" stroke-width="1.6"/>
      <!-- Row 1: der (Cyan) -->
      <rect x="40" y="68" width="346" height="62" rx="7" fill="#E0F2FE" fill-opacity="0.45" stroke="#0EA5E9" stroke-width="2"/>
      <text x="54" y="92" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#0369A1">der Steuerbescheid (-e)</text>
      <text x="54" y="116" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">"Ich habe den Bescheid heute geprüft."</text>
      <text x="424" y="94" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">tax assessment notice</text>
      <text x="424" y="116" font-family="IBM Plex Mono, monospace" font-size="11" fill="#047857">☑ D1   ☑ D7   ☐ D21</text>
      <!-- Row 2: die (Magenta) -->
      <rect x="40" y="144" width="346" height="62" rx="7" fill="#FCE7F3" fill-opacity="0.45" stroke="#EC4899" stroke-width="2"/>
      <text x="54" y="168" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#BE185D">die Frist (-en) verlängern</text>
      <text x="54" y="192" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">"Können wir die Frist verlängern?"</text>
      <text x="424" y="170" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">to extend a deadline</text>
      <text x="424" y="192" font-family="IBM Plex Mono, monospace" font-size="11" fill="#047857">☑ D1   ☐ D7   ☐ D21</text>
      <!-- Row 3: das (Mint) -->
      <rect x="40" y="220" width="346" height="62" rx="7" fill="#D1FAE5" fill-opacity="0.45" stroke="#047857" stroke-width="2"/>
      <text x="54" y="244" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#047857">das Gutachten (-)</text>
      <text x="54" y="268" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">"Wir erstellen ein kurzes Gutachten."</text>
      <text x="424" y="246" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">expert opinion / memo</text>
      <text x="424" y="268" font-family="IBM Plex Mono, monospace" font-size="11" fill="#047857">☑ D1   ☑ D7   ☑ D21 ★</text>
    </svg>`
  },
  {
    id: 'comic',
    short: '5. Comic Dialogue Strip',
    name: '5. 3-Panel Real-Life Dialogue Comic Strip (Formal vs. Casual)',
    tag: 'Speaking Fluency • Conversation Scripts',
    tip: 'Sketching two simple bean-bodies in a 3-panel comic strip activates emotional and situational memory—far stickier than sterile textbook dialogues!',
    recipe: [
      'Draw 3 equal comic panels across one landscape strip (Setup → Request → Response).',
      'Use crisp speech bubbles with pointed tails—tint Polite Konjunktiv II phrases Violet (`Könnten Sie...`) so polite registers pop!',
      'Drop a 1-line "Casual / Alltag" translation pill right under each panel to master both office and café German.'
    ],
    svg: `<svg viewBox="0 0 680 320">
      <!-- Panel 1 -->
      <rect x="20" y="20" width="202" height="236" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <rect x="20" y="20" width="202" height="24" rx="6" fill="#E0F2FE" stroke="#141836" stroke-width="1.6"/>
      <text x="121" y="36" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">01 // OPENING CALL</text>
      <rect x="34" y="56" width="174" height="62" rx="10" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.8"/>
      <text x="121" y="79" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">"Hätten Sie kurz Zeit</text>
      <text x="121" y="99" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">für eine Rückfrage?"</text>
      <circle cx="80" cy="166" r="16" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><path d="M 62 224 C 62 188 98 188 98 224 Z" fill="#0EA5E9" fill-opacity="0.35" stroke="#141836" stroke-width="2"/>
      <text x="121" y="246" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#6D28D9">KONJUNKTIV II (POLITE)</text>
      <!-- Panel 2 -->
      <rect x="239" y="20" width="202" height="236" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <rect x="239" y="20" width="202" height="24" rx="6" fill="#FEF3C7" stroke="#141836" stroke-width="1.6"/>
      <text x="340" y="36" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#B45309">02 // CLARIFYING</text>
      <rect x="253" y="56" width="174" height="62" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="1.8"/>
      <text x="340" y="79" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">"Es geht um die USt-ID</text>
      <text x="340" y="99" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">auf der Rechnung."</text>
      <circle cx="340" cy="166" r="16" fill="#FEF3C7" stroke="#141836" stroke-width="2"/><path d="M 322 224 C 322 188 358 188 358 224 Z" fill="#F59E0B" fill-opacity="0.35" stroke="#141836" stroke-width="2"/>
      <text x="340" y="246" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#B45309">"ES GEHT UM..." CHUNK</text>
      <!-- Panel 3 -->
      <rect x="458" y="20" width="202" height="236" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
      <rect x="458" y="20" width="202" height="24" rx="6" fill="#D1FAE5" stroke="#141836" stroke-width="1.6"/>
      <text x="559" y="36" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">03 // CLOSING DEAL</text>
      <rect x="472" y="56" width="174" height="62" rx="10" fill="#D1FAE5" stroke="#047857" stroke-width="1.8"/>
      <text x="559" y="79" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">"Kein Problem! Ich</text>
      <text x="559" y="99" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">schicke das sofort."</text>
      <circle cx="592" cy="166" r="16" fill="#D1FAE5" stroke="#141836" stroke-width="2"/><path d="M 574 224 C 574 188 610 188 610 224 Z" fill="#10B981" fill-opacity="0.35" stroke="#141836" stroke-width="2"/>
      <text x="559" y="246" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#047857">NATURAL RESPONSE ✓</text>
      <!-- Bottom Casual Equivalent Strip -->
      <rect x="20" y="268" width="640" height="36" rx="8" fill="#141836"/>
      <text x="340" y="290" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#00D4FF">CASUAL / DU-FORM SWAP: "Hast du kurz Zeit?" → "Wegen der Rechnung..." → "Klar, schick ich gleich!"</text>
    </svg>`
  },
  {
    id: 'komposita',
    short: '6. Komposita Lego-Blocks',
    name: '6. Compound-Noun "Lego Brick" Dissector (Master Long Words!)',
    tag: 'Reading Speed • Komposita Anatomy',
    tip: 'Long German compound nouns aren\'t scary—they are just snapped Lego bricks! Always read BACK-TO-FRONT, because the VERY LAST brick dictates the gender (der/die/das) and core meaning.',
    recipe: [
      'Break a monster word into 3–4 isometric or flat interlocking Lego bricks left-to-right.',
      'Color ONLY the final rightmost brick with its gender color (Cyan = der, Magenta = die, Mint = das) and crown it with a star ★.',
      'Draw a backward sweep arrow underneath translating right-to-left into natural English!'
    ],
    svg: `<svg viewBox="0 0 680 320">
      <text x="340" y="34" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="22" fill="#141836">die Umsatzsteuervoranmeldung</text>
      <text x="340" y="56" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">28 LETTERS → JUST 4 SIMPLE LEGO BRICKS! (LAST BRICK = GENDER ★)</text>
      <!-- 4 Snapping Lego Bricks -->
      <g transform="translate(26, 94)">
        <!-- Brick 1 -->
        <rect x="18" y="-10" width="26" height="10" rx="2" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
        <rect x="86" y="-10" width="26" height="10" rx="2" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
        <rect x="0" y="0" width="136" height="68" rx="6" fill="#EEF2FC" stroke="#141836" stroke-width="2.4"/>
        <text x="68" y="31" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700">UMSATZ</text>
        <text x="68" y="52" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#525B7A">turnover / sales</text>

        <text x="150" y="40" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700">+</text>
        <!-- Brick 2 -->
        <rect x="182" y="-10" width="26" height="10" rx="2" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
        <rect x="250" y="-10" width="26" height="10" rx="2" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
        <rect x="164" y="0" width="136" height="68" rx="6" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.4"/>
        <text x="232" y="31" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#0369A1">STEUER</text>
        <text x="232" y="52" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#0369A1">tax (VAT)</text>

        <text x="314" y="40" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700">+</text>
        <!-- Brick 3 -->
        <rect x="342" y="-10" width="26" height="10" rx="2" fill="#FEF3C7" stroke="#141836" stroke-width="2"/>
        <rect x="394" y="-10" width="26" height="10" rx="2" fill="#FEF3C7" stroke="#141836" stroke-width="2"/>
        <rect x="328" y="0" width="112" height="68" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="2.4"/>
        <text x="384" y="31" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#B45309">VOR-</text>
        <text x="384" y="52" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#B45309">advance / pre-</text>

        <text x="454" y="40" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700">+</text>
        <!-- Brick 4 (GENDER BOSS!) -->
        <rect x="490" y="-10" width="28" height="10" rx="2" fill="#EC4899" stroke="#141836" stroke-width="2"/>
        <rect x="572" y="-10" width="28" height="10" rx="2" fill="#EC4899" stroke="#141836" stroke-width="2"/>
        <rect x="468" y="0" width="160" height="68" rx="6" fill="#FCE7F3" stroke="#BE185D" stroke-width="3"/>
        <text x="548" y="28" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#BE185D">ANMELDUNG ★</text>
        <text x="548" y="49" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#BE185D">filing ("die" -ung!)</text>
      </g>
      <!-- Reverse Read Arrow -->
      <path d="M 576 184 V 214 H 96" fill="none" stroke="#BE185D" stroke-width="3" stroke-linecap="round"/>
      <polygon points="104,207 90,214 104,221" fill="#BE185D"/>
      <rect x="148" y="232" width="384" height="64" rx="10" fill="#141836"/>
      <text x="340" y="256" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#F472B6">READ RIGHT → LEFT // DETERMINED BY FINAL BRICK</text>
      <text x="340" y="280" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16.5" fill="#FFF">"Advance VAT Return Filing" (Always DIE because -ung!)</text>
    </svg>`
  },
  {
    id: 'tenses',
    short: '7. Tense Timeline Rail',
    name: '7. Verb-Tense Timeline Rail & Spoken vs. Written Split',
    tag: 'Grammar Clarity • Past & Future',
    tip: 'Plot all 5 tenses onto one horizontal time arrow with "JETZT (NOW)" marked by a bold vertical beacon—and draw a bright Mint badge around Spoken Perfekt vs. Written Präteritum!',
    recipe: [
      'Draw one bold horizontal arrow from Past (Left) through a glowing vertical "JETZT" pillar to Future (Right).',
      'Stack the spoken form (`ich habe gemacht`) ABOVE the line and written/modal form (`ich machte / wollte`) BELOW the line.',
      'Highlight auxiliary verbs (`haben` Cyan vs. `sein` Magenta motion verbs) so you never pick the wrong helper!'
    ],
    svg: `<svg viewBox="0 0 680 320">
      <!-- Horizontal Time Rail -->
      <line x1="28" y1="164" x2="646" y2="164" stroke="#141836" stroke-width="3.6" stroke-linecap="round"/>
      <polygon points="638,155 654,164 638,173" fill="#141836"/>
      <!-- Vertical NOW Pillar -->
      <line x1="420" y1="36" x2="420" y2="286" stroke="#0EA5E9" stroke-width="2.6" stroke-dasharray="6 4"/>
      <rect x="378" y="20" width="84" height="24" rx="12" fill="#0EA5E9"/>
      <text x="420" y="36" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FFF">JETZT ★</text>
      <!-- 4 Tense Cards -->
      <rect x="28" y="64" width="152" height="76" rx="8" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2"/>
      <text x="104" y="85" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">PLUSQUAMPERFEKT</text>
      <text x="104" y="107" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">"ich hatte geprüft"</text>
      <text x="104" y="127" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#525B7A">Past BEFORE Past</text>

      <rect x="206" y="64" width="186" height="76" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>
      <text x="299" y="85" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">PERFEKT (SPOKEN!)</text>
      <text x="299" y="107" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">"ich habe geprüft / bin gefahren"</text>
      <text x="299" y="127" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#047857">90% of daily speech ✓</text>

      <rect x="206" y="190" width="186" height="76" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/>
      <text x="299" y="211" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">PRÄTERITUM (WRITTEN)</text>
      <text x="299" y="233" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">"ich war / hatte / musste"</text>
      <text x="299" y="253" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#B45309">Always use for Modals + sein!</text>

      <rect x="466" y="64" width="176" height="76" rx="8" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/>
      <text x="554" y="85" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">FUTUR I (PLAN / GUESS)</text>
      <text x="554" y="107" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">"ich werde es schaffen"</text>
      <text x="554" y="127" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#BE185D">werden + Infinitiv (Ende)</text>
      <!-- Dots on Rail -->
      <circle cx="104" cy="164" r="6" fill="#7C3AED" stroke="#141836" stroke-width="2"/>
      <circle cx="299" cy="164" r="7" fill="#10B981" stroke="#141836" stroke-width="2"/>
      <circle cx="420" cy="164" r="8" fill="#0EA5E9" stroke="#141836" stroke-width="2.4"/>
      <circle cx="554" cy="164" r="6" fill="#EC4899" stroke="#141836" stroke-width="2"/>
      <text x="554" y="226" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#525B7A">Pro Tip: Präsens + "morgen"</text>
      <text x="554" y="246" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">also expresses future naturally!</text>
    </svg>`
  },
  {
    id: 'podcast',
    short: '8. Audio Shadowing Page',
    name: '8. Podcast & Reading Immersion "Shadowing" Spread',
    tag: 'Listening & Pronunciation • Easy German',
    tip: 'Turn passive listening into active fluency! Mark stressed syllables with a Magenta dot above the vowel and draw tiny rising (↗) or falling (↘) melody arrows over real spoken chunks.',
    recipe: [
      'Header your spread with a mini Cassette Tape banner (Episode # + Topic + Speed 0.85×/1.0×).',
      'Capture ONLY 5–7 full natural chunks (never isolated words) and mark vowel stress dots + intonation arrows above them.',
      'Close the bottom box with "MY 3 REUSE SENTENCES" — write 3 original sentences using today\'s chunks about your own life/work!'
    ],
    svg: `<svg viewBox="0 0 680 320">
      <rect x="22" y="14" width="636" height="292" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
      <!-- Cassette Banner Header -->
      <rect x="38" y="28" width="604" height="44" rx="8" fill="#141836"/>
      <circle cx="64" cy="50" r="10" fill="#FFF" stroke="#00D4FF" stroke-width="2.4"/><circle cx="64" cy="50" r="3" fill="#141836"/>
      <circle cx="616" cy="50" r="10" fill="#FFF" stroke="#EC4899" stroke-width="2.4"/><circle cx="616" cy="50" r="3" fill="#141836"/>
      <text x="340" y="48" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="14.5" fill="#FFF">Easy German #412 // Arbeiten in Deutschland</text>
      <text x="340" y="64" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#00D4FF">SPEED: 1.0x • SHADOWING PASS • 15 MIN</text>
      <!-- Left Box: Prosody & Stress Marked Chunks -->
      <rect x="38" y="86" width="354" height="122" rx="8" fill="#E0F2FE" fill-opacity="0.38" stroke="#0EA5E9" stroke-width="2"/>
      <text x="52" y="106" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">1. SHADOWED CHUNKS (● STRESS + ↗↘ MELODY)</text>
      <!-- Stress dots over vowels -->
      <circle cx="110" cy="124" r="3" fill="#EC4899"/><circle cx="210" cy="124" r="3" fill="#EC4899"/>
      <text x="54" y="142" font-family="Patrick Hand, cursive" font-size="16" fill="#141836">"Das kommt drauf AN, wie viel Zeit..." ↘</text>
      <circle cx="122" cy="160" r="3" fill="#EC4899"/><circle cx="222" cy="160" r="3" fill="#EC4899"/>
      <text x="54" y="178" font-family="Patrick Hand, cursive" font-size="16" fill="#141836">"Im Großen und GANZEN klappt es!" ↗</text>
      <text x="54" y="198" font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A">Note: Native speakers blend "darauf" → "drauf"</text>
      <!-- Right Box: Micro-Vocab -->
      <rect x="406" y="86" width="236" height="122" rx="8" fill="#FCE7F3" fill-opacity="0.38" stroke="#EC4899" stroke-width="2"/>
      <text x="420" y="106" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">2. FILLER WORDS TO STEAL</text>
      <g font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">
        <text x="420" y="132">• halt / eben (just / simply)</text>
        <text x="420" y="156">• eigentlich (actually...)</text>
        <text x="420" y="180">• na ja, also... (well, so...)</text>
        <text x="420" y="200" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#BE185D">Instant B2 natural rhythm!</text>
      </g>
      <!-- Bottom Box: Active Output -->
      <rect x="38" y="220" width="604" height="72" rx="8" fill="#D1FAE5" fill-opacity="0.45" stroke="#047857" stroke-width="2"/>
      <text x="54" y="240" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">3. MY OUTPUT SENTENCE (USE TOMORROW IN REAL LIFE!)</text>
      <text x="54" y="264" font-family="Patrick Hand, cursive" font-size="16" fill="#141836">→ "Es kommt drauf an, ob der Kunde eine gültige USt-ID hat — im Großen und Ganzen geht OSS schneller!"</text>
      <text x="54" y="283" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#047857">✓ SAID OUT LOUD 3× WITHOUT LOOKING</text>
    </svg>`
  }
];

const CARD_ICONS = {
  briefcase: '<path d="M 38 32 V 23 C 38 19 62 19 62 23 V 32" fill="none" stroke="#141836" stroke-width="3"/><rect x="18" y="32" width="64" height="46" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.4"/><path d="M 18 48 Q 50 56 82 48" fill="none" stroke="#141836" stroke-width="2"/><rect x="44" y="46" width="12" height="10" rx="2" fill="#F59E0B" stroke="#141836" stroke-width="1.6"/>',
  mug: '<ellipse cx="50" cy="30" rx="22" ry="7" fill="#FFF" stroke="#141836" stroke-width="2.2"/><path d="M 28 30 V 72 A 22 9 0 0 0 72 72 V 30" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/><path d="M 72 40 C 88 40 88 64 72 64" fill="none" stroke="#141836" stroke-width="4.5" stroke-linecap="round"/><path d="M 42 18 Q 38 11 44 6 M 56 18 Q 52 11 58 6" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"/>',
  bulb: '<path d="M 50 18 A 22 22 0 1 0 38 58 L 40 68 H 60 L 62 58 A 22 22 0 0 0 50 18 Z" fill="#FEF3C7" stroke="#141836" stroke-width="2.4"/><rect x="40" y="68" width="20" height="10" rx="2" fill="#CBD5E1" stroke="#141836" stroke-width="2"/><path d="M 50 6 V 13 M 22 20 L 28 24 M 78 20 L 72 24" stroke="#F59E0B" stroke-width="2.6" stroke-linecap="round"/>',
  train: '<path d="M 16 70 V 36 C 16 28 48 26 66 38 L 84 58 C 86 64 82 70 74 70 Z" fill="#FFF" stroke="#141836" stroke-width="2.4"/><polygon points="56,36 74,48 64,52 50,42" fill="#141836"/><path d="M 17 58 H 82" stroke="#EC4899" stroke-width="4.5"/>',
  cat: '<line x1="12" y1="68" x2="88" y2="68" stroke="#141836" stroke-width="3"/><path d="M 24 68 C 24 38 76 38 76 68" fill="#FFF" stroke="#141836" stroke-width="2.4"/><polygon points="26,46 22,22 42,38" fill="#FFF" stroke="#141836" stroke-width="2.4"/><polygon points="74,46 78,22 58,38" fill="#FFF" stroke="#141836" stroke-width="2.4"/><circle cx="39" cy="50" r="3.5" fill="#141836"/><circle cx="61" cy="50" r="3.5" fill="#141836"/><polygon points="48,55 52,55 50,58" fill="#EC4899"/>',
  shield: '<path d="M 50 14 L 80 24 V 50 C 80 68 66 80 50 88 C 34 80 20 68 20 50 V 24 Z" fill="#D1FAE5" stroke="#141836" stroke-width="2.4"/><polyline points="38,50 47,59 64,41" fill="none" stroke="#047857" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
};

const CARD_PRESETS = {
  der: { word: 'der Steuerbescheid', plural: 'Pl: die Steuerbescheide', gender: 'der', meaning: 'official tax assessment notice', example: 'Wir prüfen den Steuerbescheid innerhalb der Einspruchsfrist.', note: 'Steuer (tax) + Bescheid (decision)', icon: 'briefcase' },
  die: { word: 'die Rücksprache', plural: 'Pl: die Rücksprachen', gender: 'die', meaning: 'consultation / follow-up check', example: 'Ich halte kurz Rücksprache mit dem Steuerberater.', note: 'Rück (back) + Sprache (speech) → always DIE!', icon: 'mug' },
  das: { word: 'das Bauchgefühl', plural: 'Pl: die Bauchgefühle', gender: 'das', meaning: 'gut feeling / intuition', example: 'Mein Bauchgefühl sagt mir, dass wir das prüfen sollten.', note: 'Bauch (belly) + das Gefühl (feeling)', icon: 'bulb' },
  verb: { word: 'auf|schieben', plural: 'schob auf • aufgeschoben', gender: 'verb', meaning: 'to postpone / procrastinate', example: 'Schieb die Umsatzsteuer nicht bis zum letzten Tag auf!', note: '✂ Separable verb: "auf" jumps to the end!', icon: 'train' }
};

function escL(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildLangCardSVG(d, hideAnswer) {
  const pal = {
    der: { accent: '#0EA5E9', deep: '#0369A1', wash: '#E0F2FE', label: 'DER // MASCULINE' },
    die: { accent: '#EC4899', deep: '#BE185D', wash: '#FCE7F3', label: 'DIE // FEMININE' },
    das: { accent: '#10B981', deep: '#047857', wash: '#D1FAE5', label: 'DAS // NEUTER' },
    verb: { accent: '#F59E0B', deep: '#B45309', wash: '#FEF3C7', label: 'VERB / CHUNK' }
  }[d.gender] || { accent: '#0EA5E9', deep: '#0369A1', wash: '#E0F2FE', label: 'VOCAB' };

  return `<svg viewBox="0 0 680 260">
    <!-- Outer Card Shadow & Body -->
    <rect x="28" y="18" width="628" height="224" rx="14" fill="#141836"/>
    <rect x="22" y="12" width="628" height="224" rx="14" fill="#FFFDF5" stroke="#141836" stroke-width="2.8"/>
    <!-- Left Gender Color Stripe -->
    <rect x="22" y="12" width="16" height="224" rx="6" fill="${pal.accent}"/>
    <!-- Top Pill & Plural -->
    <rect x="54" y="28" width="156" height="24" rx="12" fill="${pal.wash}" stroke="${pal.accent}" stroke-width="1.6"/>
    <text x="132" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="${pal.deep}">${pal.label}</text>
    <text x="224" y="44" font-family="IBM Plex Mono, monospace" font-size="10" fill="#525B7A">${escL(d.plural)}</text>
    <!-- Mini Visual Icon Box Top-Right -->
    <rect x="536" y="26" width="96" height="92" rx="10" fill="${pal.wash}" fill-opacity="0.45" stroke="${pal.accent}" stroke-width="2"/>
    <g transform="translate(539, 27) scale(0.9)">${CARD_ICONS[d.icon] || CARD_ICONS.briefcase}</g>
    <!-- Headword -->
    <text x="54" y="96" font-family="Playwrite IT Moderna, cursive" font-size="25" fill="${hideAnswer ? '#CBD5E1' : '#141836'}">${hideAnswer ? '• • •  [ RECALL WORD! ]  • • •' : escL(d.word)}</text>
    <!-- Meaning / Cue Box -->
    <rect x="54" y="114" width="466" height="36" rx="8" fill="#EEF2FC" stroke="#141836" stroke-width="1.5"/>
    <text x="68" y="137" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#141836">MEANING: ${escL(d.meaning)}</text>
    <!-- Context Sentence -->
    <text x="54" y="176" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="${pal.deep}">CONTEXT SENTENCE (ACTIVE CHUNK)</text>
    <text x="54" y="198" font-family="Patrick Hand, cursive" font-size="16" fill="${hideAnswer ? '#CBD5E1' : '#141836'}">${hideAnswer ? 'Say a full example sentence aloud before revealing!' : '"' + escL(d.example) + '"'}</text>
    <!-- Mnemonic Footer -->
    <text x="54" y="222" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#7C3AED">MEMORY HOOK // ${escL(d.note)}</text>
  </svg>`;
}

export function renderLanguageLabHTML() {
  return `
    <!-- 1. THE 4-COLOR LANGUAGE NOTEBOOK CODE -->
    <section class="section-block">
      <h2>The 4-Color Grammar &amp; Gender Code for Language Notebooks</h2>
      <p>
        Standard lined language notebooks bury nouns, verbs, and rules in identical monochrome ink. Lock these <strong>four fixed semantic colors</strong> into your dot-grid notebook so your eyes absorb gender, case, and sentence structure before you even read the word:
      </p>
      <div class="grid-4">
        <div class="card">
          <span class="pill cyan" style="align-self:flex-start;">Cyan // der</span>
          <div class="card-h">Masculine &amp; Subject</div>
          <p class="card-p">All <em>der</em> nouns, Nominative subjects, and Time (<code>Te</code>) phrases. Never write a noun without its Cyan border!</p>
        </div>
        <div class="card">
          <span class="pill magenta" style="align-self:flex-start;">Magenta // die</span>
          <div class="card-h">Feminine &amp; Motion</div>
          <p class="card-p">All <em>die</em> nouns, Akkusativ <em>Wohin?</em> motion arrows, verb brackets <code>[V2...Ende]</code>, and vowel stress dots.</p>
        </div>
        <div class="card">
          <span class="pill mint" style="align-self:flex-start;">Mint // das</span>
          <div class="card-h">Neuter &amp; Static Dativ</div>
          <p class="card-p">All <em>das</em> nouns, static Dativ <em>Wo?</em> anchors, and verified active-recall checkmarks.</p>
        </div>
        <div class="card">
          <span class="pill amber" style="align-self:flex-start;">Amber // Chunks</span>
          <div class="card-h">Connectors &amp; Idioms</div>
          <p class="card-p">Subordinating connectors (<em>weil, obwohl, trotzdem</em>), separable prefixes, and natural spoken idioms.</p>
        </div>
      </div>
    </section>

    <!-- 2. INTERACTIVE GALLERY: 8 ICONIC LANGUAGE NOTEBOOK SPREADS -->
    <section class="lab cyan-accent" id="lang-gallery-lab">
      <div class="lab-head">
        <span class="lab-title">Language Spread Gallery // 8 High-Retention Notebook Layouts</span>
        <span class="pill amber">Deutsch B1/B2 &amp; Any Language</span>
      </div>
      <div class="lab-body">
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          ${LANG_SPREADS.map((s, i) => `<button class="seg-btn lang-tab ${i === 0 ? 'active' : ''}" data-id="${s.id}">${s.short}</button>`).join('')}
        </div>

        <div class="card tinted" style="border-color:var(--cyan);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <span id="lang-title" class="card-h" style="font-size:18px;"></span>
            <span id="lang-tag" class="pill violet"></span>
          </div>
          <div id="lang-svg-box" class="svg-box" style="margin:6px 0;"></div>
          <div class="grid-2">
            <div class="card" style="background:#FFF;">
              <div class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep);">3-STEP NOTEBOOK DRAWING RECIPE</div>
              <ol id="lang-recipe" style="padding-left:18px; font-size:13.8px; display:flex; flex-direction:column; gap:4px; color:var(--ink-body);"></ol>
            </div>
            <div class="card" style="background:#FFF; border-color:var(--amber);">
              <div class="mono" style="font-size:10px; font-weight:700; color:var(--amber-deep);">★ POLYGLOT MEMORY TIP</div>
              <p id="lang-tip" class="card-p" style="font-size:14px; color:var(--ink-body);"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2B. REAL-WORLD GERMAN FRICTION STRIP: UMFAHREN, MODAL PARTICLES & DB -->
    <section class="section-block">
      <h2>Sketching Real German Friction: Stress Pairs, Modal Particles &amp; Amtsdeutsch</h2>
      <p>
        Textbooks love clean grammar tables, but real fluency stalls on three messy quirks: identical verbs whose meaning flips with syllable stress, tiny untranslatable mood particles, and bureaucratic announcements. All three become memorable in a 20-second margin sketch:
      </p>
      <div class="svg-box">
        <svg viewBox="0 0 700 250">
          <!-- Panel 1: The Classic umfahren Joke -->
          <rect x="14" y="14" width="328" height="222" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
          <text x="30" y="36" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">1. ONE WORD, TWO OPPOSITE DRAWINGS</text>

          <!-- Left mini scene: UM-fahren (knock over!) -->
          <rect x="28" y="48" width="144" height="122" rx="8" fill="#FCE7F3" fill-opacity="0.48" stroke="#EC4899" stroke-width="1.8"/>
          <text x="100" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">UM·fahren (splits)</text>
          <!-- Little car knocking over traffic cone -->
          <rect x="44" y="106" width="44" height="20" rx="5" fill="#FFF" stroke="#141836" stroke-width="2"/>
          <circle cx="54" cy="128" r="5" fill="#141836"/><circle cx="78" cy="128" r="5" fill="#141836"/>
          <line x1="92" y1="116" x2="106" y2="116" stroke="#BE185D" stroke-width="2.2"/>
          <polygon points="114,126 140,104 148,116" fill="#F59E0B" stroke="#141836" stroke-width="1.8"/>
          <text x="100" y="156" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">"Er fährt ihn UM."</text>

          <!-- Right mini scene: um-FAHREN (drive around) -->
          <rect x="184" y="48" width="144" height="122" rx="8" fill="#D1FAE5" fill-opacity="0.48" stroke="#047857" stroke-width="1.8"/>
          <text x="256" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">um·FAHREN (glued)</text>
          <!-- Car arcing cleanly around upright cone -->
          <path d="M 200 124 Q 256 78 312 124" fill="none" stroke="#047857" stroke-width="2.4" stroke-dasharray="4 3"/>
          <polygon points="248,132 256,108 264,132" fill="#F59E0B" stroke="#141836" stroke-width="1.8"/>
          <circle cx="312" cy="124" r="4" fill="#047857"/>
          <text x="256" y="156" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">"Er umfährt ihn."</text>

          <text x="30" y="198" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">Rule: Stress on prefix = separable = physical collision.</text>
          <text x="30" y="218" font-family="Patrick Hand, cursive" font-size="14" fill="#047857">Stress on stem = inseparable = smooth detour.</text>

          <!-- Panel 2: Modal Particles + Deutsche Bahn Translation -->
          <rect x="358" y="14" width="328" height="222" rx="10" fill="#FAFBFD" stroke="#141836" stroke-width="2.2"/>
          <text x="374" y="36" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">2. MODAL PARTICLES (TONE DIAL)</text>

          <rect x="374" y="48" width="296" height="32" rx="6" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.6"/>
          <text x="386" y="68" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">"Komm her!"  →  barking orders (cold)</text>

          <rect x="374" y="88" width="296" height="32" rx="6" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.6"/>
          <text x="386" y="108" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">"Komm <tspan fill="#0369A1" font-weight="700">doch mal</tspan> her." → friendly invite</text>

          <line x1="374" y1="136" x2="670" y2="136" stroke="#CBD5E1" stroke-width="1.4" stroke-dasharray="4 3"/>
          <text x="374" y="156" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">3. BAHN &amp; BEHÖRDENDEUTSCH DECODER</text>
          <text x="374" y="180" font-family="Patrick Hand, cursive" font-size="14" fill="#64748B">"Verzögerung im Betriebsablauf"</text>
          <text x="374" y="200" font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">→ Plain German: <tspan fill="#B45309" font-weight="700">"Der Zug hat Verspätung."</tspan></text>
          <text x="374" y="222" font-family="IBM Plex Mono, monospace" font-size="8.8" fill="#525B7A">Note: halt / eben = "that's just how it is" (shrug icon)</text>
        </svg>
      </div>
    </section>

    <!-- 3. INTERACTIVE LAB: LIVE VISUAL VOCAB & ANKI SKETCH-CARD BUILDER -->
    <section class="lab amber-accent" id="lang-card-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Vocab Studio // Visual Sketch-Card Builder (Notebook &amp; Anki Ready)</span>
        <div class="segmented no-print" role="group">
          <button class="seg-btn lc-pre active" data-p="der">der (Cyan)</button>
          <button class="seg-btn lc-pre" data-p="die">die (Magenta)</button>
          <button class="seg-btn lc-pre" data-p="das">das (Mint)</button>
          <button class="seg-btn lc-pre" data-p="verb">Verb / Chunk</button>
        </div>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl no-print" style="flex-wrap:wrap;">
          <label class="chk-lbl"><input id="lc-hide-chk" type="checkbox" /> Self-Test Recall Mode (Hide Target Word)</label>
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:7px;">
            <span class="mono" style="font-size:10.5px; font-weight:700; color:var(--ink-muted);">ICON STAMP:</span>
            <select id="lc-in-icon" class="search-in" style="min-width:130px; width:auto;">
              <option value="briefcase">Briefcase (Work/Tax)</option>
              <option value="mug">Coffee Mug (Café)</option>
              <option value="bulb">Lightbulb (Idea)</option>
              <option value="train">ICE Train (Travel)</option>
              <option value="cat">Margin Cat (Daily)</option>
              <option value="shield">Shield (Law/Rule)</option>
            </select>
            <button id="lc-dl-svg" class="btn mint">↓ Download Card SVG</button>
          </div>
        </div>

        <div class="grid-3 no-print">
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--ink-muted);">TARGET WORD / CHUNK</span>
            <input id="lc-in-word" class="search-in" type="text" value="der Steuerbescheid" />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--ink-muted);">PLURAL / VERB FORMS</span>
            <input id="lc-in-plural" class="search-in" type="text" value="Pl: die Steuerbescheide" />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--ink-muted);">MEANING / TRANSLATION</span>
            <input id="lc-in-mean" class="search-in" type="text" value="official tax assessment notice" />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px; grid-column: span 2;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--ink-muted);">CONTEXT SENTENCE</span>
            <input id="lc-in-ex" class="search-in" type="text" value="Wir prüfen den Steuerbescheid innerhalb der Einspruchsfrist." />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--violet);">MEMORY HOOK / ROOTS</span>
            <input id="lc-in-note" class="search-in" type="text" value="Steuer (tax) + Bescheid (decision)" />
          </label>
        </div>

        <div id="lc-live-svg" class="svg-box"></div>
      </div>
    </section>
  `;
}

export function initLanguageLab() {
  const gal = document.getElementById('lang-gallery-lab');
  if (!gal) return;

  let activeId = LANG_SPREADS[0].id;
  const renderSpread = () => {
    const s = LANG_SPREADS.find(x => x.id === activeId) || LANG_SPREADS[0];
    document.getElementById('lang-title').textContent = s.name;
    document.getElementById('lang-tag').textContent = s.tag;
    document.getElementById('lang-svg-box').innerHTML = s.svg;
    document.getElementById('lang-recipe').innerHTML = s.recipe.map(r => `<li>${r}</li>`).join('');
    document.getElementById('lang-tip').textContent = s.tip;
  };
  gal.querySelectorAll('.lang-tab').forEach(b => b.addEventListener('click', () => {
    activeId = b.dataset.id;
    gal.querySelectorAll('.lang-tab').forEach(x => x.classList.toggle('active', x === b));
    renderSpread();
  }));
  renderSpread();

  // Visual Vocab Card Builder
  let gender = 'der';
  let hideAnswer = false;

  const renderCard = () => {
    const d = {
      word: document.getElementById('lc-in-word').value,
      plural: document.getElementById('lc-in-plural').value,
      meaning: document.getElementById('lc-in-mean').value,
      example: document.getElementById('lc-in-ex').value,
      note: document.getElementById('lc-in-note').value,
      icon: document.getElementById('lc-in-icon').value,
      gender
    };
    document.getElementById('lc-live-svg').innerHTML = buildLangCardSVG(d, hideAnswer);
  };

  document.querySelectorAll('.lc-pre').forEach(b => b.addEventListener('click', () => {
    gender = b.dataset.p;
    document.querySelectorAll('.lc-pre').forEach(x => x.classList.toggle('active', x === b));
    const p = CARD_PRESETS[gender];
    if (p) {
      document.getElementById('lc-in-word').value = p.word;
      document.getElementById('lc-in-plural').value = p.plural;
      document.getElementById('lc-in-mean').value = p.meaning;
      document.getElementById('lc-in-ex').value = p.example;
      document.getElementById('lc-in-note').value = p.note;
      document.getElementById('lc-in-icon').value = p.icon;
    }
    renderCard();
  }));
  document.getElementById('lc-hide-chk')?.addEventListener('change', (e) => { hideAnswer = e.target.checked; renderCard(); });
  ['lc-in-word', 'lc-in-plural', 'lc-in-mean', 'lc-in-ex', 'lc-in-note'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', renderCard);
  });
  document.getElementById('lc-in-icon')?.addEventListener('change', renderCard);

  document.getElementById('lc-dl-svg')?.addEventListener('click', () => {
    const svgEl = document.querySelector('#lc-live-svg svg');
    if (!svgEl) return;
    const raw = svgEl.outerHTML.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFD;" ');
    const blob = new Blob([raw], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vocab-card-${gender}.svg`;
    a.click();
    URL.revokeObjectURL(url);
    window.__showToast?.('✓ Visual Vocab Card SVG downloaded!');
  });

  renderCard();
}
