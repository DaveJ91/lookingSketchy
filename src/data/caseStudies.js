/* =========================================================================
   5 DISSECTED MASTER SPREADS (5 TOGGLEABLE PHYSICAL INK LAYERS EACH)
   Covers: AI Tax Orchestration, German Grammar & Satzklammer, Q4 Exec Sync,
   Book Synthesis, and Weekly Language + Deep Work OS
   ========================================================================= */
export const MASTER_SPREADS = [
  {
    id: 'ai-tax',
    badge: 'AI/Tech + Tax',
    title: '1. Multi-Agent EU VAT Orchestration Spread',
    layout: 'Split-Screen Spread (Left: Isometric Flow • Right: Ledger & Dumbbell Gap)',
    notes: 'Notice how Pass 1 lays down plain monochrome text + wide 4-dot corridors, while Pass 4–5 add Cool Grey volume and Magenta HITL governance.',
    layers: {
      l1: `
        <rect x="14" y="14" width="356" height="312" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <rect x="390" y="14" width="356" height="312" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <line x1="380" y1="14" x2="380" y2="326" stroke="#94A3B8" stroke-width="2" stroke-dasharray="5 4"/>
        <rect x="30" y="30" width="324" height="280" fill="none" stroke="#CBD5E1" stroke-dasharray="3 3"/>
        <rect x="406" y="30" width="324" height="280" fill="none" stroke="#CBD5E1" stroke-dasharray="3 3"/>
        <line x1="566" y1="24" x2="566" y2="36" stroke="#EC4899" stroke-width="2.4"/>
        <line x1="566" y1="304" x2="566" y2="316" stroke="#EC4899" stroke-width="2.4"/>`,
      l2: `
        <text x="38" y="48" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">2026.11.22 | EU VAT AGENT ARCHITECTURE | PG 14</text>
        <text x="192" y="106" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" font-weight="700">1. Fast Triage (0.2s)</text>
        <text x="192" y="176" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" font-weight="700">2. Art. 58 Reasoning</text>
        <text x="192" y="252" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" font-weight="700">3. MCP Write Plane</text>
        <text x="418" y="54" font-family="Playwrite IT Moderna, cursive" font-size="17" fill="#141836">Governance &amp; Metrics</text>
        <text x="418" y="92" font-family="Patrick Hand, cursive" font-size="14.5">• 80% routine queries bypass reasoning</text>
        <text x="418" y="114" font-family="Patrick Hand, cursive" font-size="14.5">→ Saves 97% token cost ($0.88 → $0.04)</text>
        <text x="418" y="136" font-family="Patrick Hand, cursive" font-size="14.5">! Reasoning LLM holds ZERO write keys</text>
        <text x="418" y="218" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">LATENCY GAP (SINGLE vs MULTI)</text>
        <text x="418" y="252" font-family="IBM Plex Mono, monospace" font-size="10">Routine  42s → 1.2s</text>
        <text x="418" y="284" font-family="IBM Plex Mono, monospace" font-size="10">Complex  48s → 18.0s</text>`,
      l3: `
        <polygon points="192,74 294,102 192,130 90,102" fill="none" stroke="#141836" stroke-width="2.2"/>
        <polygon points="192,144 294,172 192,200 90,172" fill="none" stroke="#141836" stroke-width="2" stroke-dasharray="6 4"/>
        <polygon points="192,220 294,248 192,276 90,248" fill="none" stroke="#141836" stroke-width="2.2"/>
        <path d="M 192 130 V 144 M 192 200 V 220" stroke="#141836" stroke-width="2.2"/>
        <rect x="412" y="68" width="312" height="84" rx="7" fill="none" stroke="#141836" stroke-width="2"/>
        <rect x="412" y="198" width="312" height="102" rx="7" fill="none" stroke="#141836" stroke-width="1.8"/>`,
      l4: `
        <polygon points="90,102 192,130 192,140 90,112" fill="#CBD5E1"/><polygon points="294,102 192,130 192,140 294,112" fill="#94A3B8"/>
        <polygon points="90,248 192,276 192,286 90,258" fill="#CBD5E1"/><polygon points="294,248 192,276 192,286 294,258" fill="#94A3B8"/>
        <path d="M 418 156 H 728 V 74" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.58"/>
        <path d="M 418 304 H 728 V 204" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.58"/>`,
      l5: `
        <polygon points="192,74 294,102 192,130 90,102" fill="#0EA5E9" fill-opacity="0.24"/>
        <polygon points="192,144 294,172 192,200 90,172" fill="#EC4899" fill-opacity="0.18" stroke="#EC4899" stroke-width="2" stroke-dasharray="6 4"/>
        <polygon points="192,220 294,248 192,276 90,248" fill="#10B981" fill-opacity="0.24"/>
        <rect x="416" y="42" width="196" height="12" rx="3" fill="#0EA5E9" fill-opacity="0.28"/>
        <line x1="556" y1="248" x2="704" y2="248" stroke="#10B981" stroke-width="5.5" stroke-linecap="round"/><circle cx="556" cy="248" r="5" fill="#141836"/><circle cx="704" cy="248" r="5.5" fill="#FFF" stroke="#EC4899" stroke-width="2.4"/>
        <line x1="600" y1="280" x2="708" y2="280" stroke="#0EA5E9" stroke-width="5.5" stroke-linecap="round"/><circle cx="600" cy="280" r="5" fill="#141836"/><circle cx="708" cy="280" r="5.5" fill="#FFF" stroke="#EC4899" stroke-width="2.4"/>
        <g transform="rotate(-7 666 174)"><rect x="614" y="160" width="104" height="28" rx="4" fill="#ECFDF5" stroke="#047857" stroke-width="2.2"/><text x="666" y="178" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">HITL ✓ OK</text></g>`
    }
  },
  {
    id: 'deutsch-cases',
    badge: 'Deutsch B1/B2',
    title: '2. German Cases (der/die/das) & Satzklammer Map',
    layout: 'Bento Study Spread (Left: Gender Color Matrix • Right: Verb Bracket & Wechselpräpositionen)',
    notes: 'Semantic color turns German gender & case rules into instant spatial muscle memory: Cyan = Masculine (der), Magenta = Feminine (die), Mint = Neuter (das), Amber = Plural/Verb.',
    layers: {
      l1: `
        <rect x="14" y="14" width="356" height="312" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <rect x="390" y="14" width="356" height="312" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <line x1="380" y1="14" x2="380" y2="326" stroke="#94A3B8" stroke-width="2" stroke-dasharray="5 4"/>`,
      l2: `
        <text x="34" y="46" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">DEUTSCH B2 | KASUS &amp; SATZKLAMMER | PG 28</text>
        <text x="34" y="80" font-family="Playwrite IT Moderna, cursive" font-size="18">Die 4 Fälle im Überblick</text>
        <g font-family="IBM Plex Mono, monospace" font-size="10.5">
          <text x="42" y="120" font-weight="700">FALL</text><text x="155" y="120" text-anchor="middle" font-weight="700">DER (M)</text><text x="223" y="120" text-anchor="middle" font-weight="700">DIE (F)</text><text x="304" y="120" text-anchor="middle" font-weight="700">DAS (N)</text>
          <text x="42" y="148">NOM (Wer)</text><text x="155" y="148" text-anchor="middle">der</text><text x="223" y="148" text-anchor="middle">die</text><text x="304" y="148" text-anchor="middle">das</text>
          <text x="42" y="176">AKK (Wen)</text><text x="155" y="176" text-anchor="middle" font-weight="700" fill="#0EA5E9">den !</text><text x="223" y="176" text-anchor="middle">die</text><text x="304" y="176" text-anchor="middle">das</text>
          <text x="42" y="204">DAT (Wem)</text><text x="155" y="204" text-anchor="middle">dem</text><text x="223" y="204" text-anchor="middle" font-weight="700" fill="#BE185D">der !</text><text x="304" y="204" text-anchor="middle">dem</text>
          <text x="42" y="232">GEN (Wes)</text><text x="155" y="232" text-anchor="middle">des +s</text><text x="223" y="232" text-anchor="middle">der</text><text x="304" y="232" text-anchor="middle">des +s</text>
        </g>
        <text x="42" y="278" font-family="Patrick Hand, cursive" font-size="15">Merksatz: "RESE NESE MRMN" — only Masc changes in Akk!</text>
        <text x="412" y="64" font-family="Playwrite IT Moderna, cursive" font-size="17">Die Satzklammer (V2 → Ende)</text>
        <text x="434" y="128" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15">Heute</text>
        <text x="488" y="128" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" font-weight="700">[ muss ]</text>
        <text x="574" y="128" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15">ich die Steuer</text>
        <text x="676" y="128" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" font-weight="700">[ abgeben ].</text>
        <g font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A" text-anchor="middle">
          <text x="434" y="168">Pos 1</text><text x="488" y="168" fill="#0EA5E9" font-weight="700">V2 (konj.)</text><text x="574" y="168">Mittelfeld</text><text x="676" y="168" fill="#BE185D" font-weight="700">Verb-Ende</text>
        </g>
        <text x="418" y="236" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">WECHSELPRÄPOSITIONEN (in, an, auf, unter)</text>
        <text x="418" y="266" font-family="Patrick Hand, cursive" font-size="15">• Wohin? (Bewegung →) = AKKUSATIV (in den Ordner)</text>
        <text x="418" y="292" font-family="Patrick Hand, cursive" font-size="15">• Wo? (Position ●) = DATIV (im Ordner)</text>`,
      l3: `
        <rect x="34" y="100" width="318" height="148" rx="6" fill="none" stroke="#141836" stroke-width="2"/>
        <line x1="34" y1="128" x2="352" y2="128" stroke="#141836" stroke-width="1.6"/>
        <rect x="410" y="96" width="316" height="90" rx="7" fill="none" stroke="#141836" stroke-width="2"/>
        <rect x="410" y="212" width="316" height="96" rx="7" fill="none" stroke="#141836" stroke-width="2"/>`,
      l4: `
        <path d="M 40 254 H 358 V 106" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.55"/>
        <path d="M 416 192 H 732 V 102" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.55"/>
        <path d="M 416 314 H 732 V 218" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.55"/>`,
      l5: `
        <rect x="122" y="102" width="66" height="144" fill="#0EA5E9" fill-opacity="0.16"/>
        <rect x="190" y="102" width="66" height="144" fill="#EC4899" fill-opacity="0.14"/>
        <rect x="258" y="102" width="92" height="144" fill="#10B981" fill-opacity="0.14"/>
        <rect x="460" y="108" width="56" height="28" rx="5" fill="#0EA5E9" fill-opacity="0.28" stroke="#0EA5E9" stroke-width="1.6"/>
        <rect x="634" y="108" width="84" height="28" rx="5" fill="#EC4899" fill-opacity="0.26" stroke="#EC4899" stroke-width="1.6"/>
        <path d="M 488 108 Q 582 72 676 108" fill="none" stroke="#7C3AED" stroke-width="2.2" stroke-dasharray="4 3"/>
        <rect x="412" y="248" width="312" height="24" fill="#0EA5E9" fill-opacity="0.14"/>
        <rect x="412" y="275" width="312" height="24" fill="#10B981" fill-opacity="0.14"/>`
    }
  },
  {
    id: 'exec-bento',
    badge: 'Executive Sync',
    title: '3. Q4 Partner & Product Strategy Bento Spread',
    layout: '65/35 Golden Bento (15 dots left • 7 dots right Actions & Taped Decision)',
    notes: 'Uses the Two-Pass workflow: facts and a quick 2×2 risk quadrant go down in monochrome during the call; the Taped Decision slip and Cyan highlights take 90 seconds afterward.',
    layers: {
      l1: `
        <rect x="14" y="14" width="732" height="312" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <line x1="482" y1="22" x2="482" y2="40" stroke="#EC4899" stroke-width="2.6"/>
        <line x1="482" y1="300" x2="482" y2="318" stroke="#EC4899" stroke-width="2.6"/>`,
      l2: `
        <text x="36" y="54" font-family="Patrick Hand, cursive" font-size="22" font-weight="700">Q4 Partner Sync — AI Tax Copilot Launch</text>
        <text x="40" y="96" font-family="Patrick Hand, cursive" font-size="15">• Pilot with 12 German Mittelstand clients starts Jan 15</text>
        <text x="40" y="120" font-family="Patrick Hand, cursive" font-size="15">→ Human Tax Advisor signs off every draft (Zero auto-send)</text>
        <text x="40" y="144" font-family="Patrick Hand, cursive" font-size="15">◇ Open Q: Should OSS filings route through local MCP?</text>
        <text x="148" y="206" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">2×2 IMPACT vs RISK MATRIX</text>
        <text x="506" y="68" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">□ NEXT ACTIONS</text>
        <text x="506" y="96" font-family="Patrick Hand, cursive" font-size="14.5">□ Lock audit log schema</text>
        <text x="506" y="118" font-family="Patrick Hand, cursive" font-size="14.5">□ Draft client consent</text>
        <text x="506" y="140" font-family="Patrick Hand, cursive" font-size="14.5">□ Run 20-case benchmark</text>
        <text x="616" y="236" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" font-weight="700">DECISION SLIP:</text>
        <text x="616" y="260" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">Ship Read-Only v1 first;</text>
        <text x="616" y="280" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">unlock writes after audit.</text>`,
      l3: `
        <rect x="34" y="72" width="430" height="90" rx="7" fill="none" stroke="#141836" stroke-width="1.8"/>
        <rect x="34" y="180" width="430" height="126" rx="7" fill="none" stroke="#141836" stroke-width="1.8"/>
        <line x1="249" y1="214" x2="249" y2="296" stroke="#141836" stroke-width="1.8"/>
        <line x1="94" y1="255" x2="404" y2="255" stroke="#141836" stroke-width="1.8"/>
        <rect x="494" y="44" width="232" height="122" rx="7" fill="none" stroke="#141836" stroke-width="1.8"/>
        <rect x="504" y="200" width="214" height="100" rx="4" fill="none" stroke="#141836" stroke-width="2"/>`,
      l4: `
        <path d="M 40 166 H 468 V 78" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.55"/>
        <path d="M 500 170 H 730 V 50" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.55"/>`,
      l5: `
        <rect x="34" y="42" width="370" height="14" rx="3" fill="#0EA5E9" fill-opacity="0.32"/>
        <rect x="249" y="214" width="155" height="41" fill="#EC4899" fill-opacity="0.16" stroke="#EC4899" stroke-dasharray="4 3"/>
        <circle cx="170" cy="234" r="6" fill="#10B981"/><circle cx="330" cy="232" r="6" fill="#EC4899"/>
        <rect x="504" y="200" width="214" height="100" rx="4" fill="#FFFDF5" fill-opacity="0.72"/>
        <polygon points="492,208 518,190 526,198 500,216" fill="#F59E0B" opacity="0.55" stroke="#141836"/>
        <polygon points="704,190 730,208 722,216 696,198" fill="#F59E0B" opacity="0.55" stroke="#141836"/>`
    }
  },
  {
    id: 'book-synth',
    badge: 'Book Synthesis',
    title: '4. Non-Fiction Book Synthesis (Equal Thirds 7|7|7)',
    layout: 'Faux Calligraphy Header + Thesis Card + 3-Pillar Columns + Bottom Quote',
    notes: 'Perfect for compressing a 300-page book (e.g., Thinking, Fast and Slow or Tax Treaty Commentary) onto one permanent, scannable spread.',
    layers: {
      l1: `
        <rect x="14" y="14" width="732" height="312" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <line x1="258" y1="112" x2="258" y2="246" stroke="#CBD5E1" stroke-dasharray="4 3"/>
        <line x1="502" y1="112" x2="502" y2="246" stroke="#CBD5E1" stroke-dasharray="4 3"/>`,
      l2: `
        <text x="380" y="48" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="22">Thinking, Fast &amp; Slow — Visual Synthesis</text>
        <text x="380" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700">CORE THESIS: PAIR FAST SYSTEM-1 INTUITION WITH DELIBERATE SYSTEM-2 VERIFICATION</text>
        <text x="136" y="142" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">PILLAR 1: SYSTEM 1</text>
        <text x="48" y="170" font-family="Patrick Hand, cursive" font-size="14.5">• Fast, automatic triage</text>
        <text x="48" y="192" font-family="Patrick Hand, cursive" font-size="14.5">• Analog: Flash LLM</text>
        <text x="380" y="142" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">PILLAR 2: SYSTEM 2</text>
        <text x="292" y="170" font-family="Patrick Hand, cursive" font-size="14.5">• Slow statutory logic</text>
        <text x="292" y="192" font-family="Patrick Hand, cursive" font-size="14.5">• Analog: Reasoning LLM</text>
        <text x="624" y="142" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">PILLAR 3: GUARDRAILS</text>
        <text x="536" y="170" font-family="Patrick Hand, cursive" font-size="14.5">• Premortem checklists</text>
        <text x="536" y="192" font-family="Patrick Hand, cursive" font-size="14.5">• Analog: HITL Firewall</text>
        <text x="48" y="288" font-family="Patrick Hand, cursive" font-size="16">"Nothing in life is as important as you think it is while you are thinking about it."</text>`,
      l3: `
        <rect x="34" y="66" width="692" height="36" rx="6" fill="none" stroke="#141836" stroke-width="2"/>
        <rect x="34" y="116" width="212" height="126" rx="7" fill="none" stroke="#141836" stroke-width="2"/>
        <rect x="274" y="116" width="212" height="126" rx="7" fill="none" stroke="#141836" stroke-width="2"/>
        <rect x="514" y="116" width="212" height="126" rx="7" fill="none" stroke="#141836" stroke-width="2"/>
        <rect x="34" y="260" width="692" height="44" rx="6" fill="none" stroke="#141836" stroke-width="1.8"/>`,
      l4: `
        <path d="M 40 246 H 250 V 122" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.55"/>
        <path d="M 280 246 H 490 V 122" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.55"/>
        <path d="M 520 246 H 730 V 122" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.55"/>`,
      l5: `
        <rect x="34" y="66" width="692" height="36" rx="6" fill="#7C3AED" fill-opacity="0.12"/>
        <rect x="34" y="116" width="212" height="34" rx="6" fill="#0EA5E9" fill-opacity="0.22"/>
        <rect x="274" y="116" width="212" height="34" rx="6" fill="#EC4899" fill-opacity="0.2"/>
        <rect x="514" y="116" width="212" height="34" rx="6" fill="#10B981" fill-opacity="0.22"/>
        <rect x="34" y="260" width="692" height="44" rx="6" fill="#F59E0B" fill-opacity="0.14"/>`
    }
  },
  {
    id: 'weekly-os',
    badge: 'Deutsch + Deep Work',
    title: '5. Weekly Deep-Work & German Immersion OS',
    layout: 'Edge-Tabbed Weekly Spread (Top: Habit Dot-Matrix • Bottom: 3 Deep-Work Blocks + Vocab Capture)',
    notes: 'Combines the 6-Slot Edge-Tabbing OS with a 7-day habit dot-matrix and a dedicated right-hand margin for capturing newly heard German phrases.',
    layers: {
      l1: `
        <rect x="14" y="14" width="706" height="312" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
        <rect x="720" y="180" width="26" height="46" fill="#7C3AED" stroke="#141836" stroke-width="1.6"/>
        <text x="733" y="206" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#FFF">OS</text>`,
      l2: `
        <text x="36" y="46" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">KW 47 // WEEKLY DEEP-WORK + DEUTSCH B2 OS</text>
        <text x="42" y="88" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">HABIT TRACKER      MO DI MI DO FR SA SO</text>
        <text x="42" y="116" font-family="Patrick Hand, cursive" font-size="14.5">30m Deutsch Lesen</text>
        <text x="42" y="144" font-family="Patrick Hand, cursive" font-size="14.5">10m Sketch Drill</text>
        <text x="42" y="206" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">TOP 3 WEEKLY OUTCOMES</text>
        <text x="42" y="236" font-family="Patrick Hand, cursive" font-size="15">□ Ship TaxWiki MCP eval suite</text>
        <text x="42" y="262" font-family="Patrick Hand, cursive" font-size="15">□ Complete B2 Konjunktiv II spread</text>
        <text x="42" y="288" font-family="Patrick Hand, cursive" font-size="15">□ Scan &amp; index 4 notebook spreads</text>
        <text x="466" y="86" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">NEUE WÖRTER (CAPTURE)</text>
        <text x="466" y="116" font-family="Patrick Hand, cursive" font-size="14.5">der Bescheid — official ruling</text>
        <text x="466" y="144" font-family="Patrick Hand, cursive" font-size="14.5">die Frist — statutory deadline</text>
        <text x="466" y="172" font-family="Patrick Hand, cursive" font-size="14.5">das Gutachten — expert opinion</text>
        <text x="466" y="200" font-family="Patrick Hand, cursive" font-size="14.5">nachreichen — submit later</text>`,
      l3: `
        <rect x="34" y="64" width="404" height="106" rx="7" fill="none" stroke="#141836" stroke-width="2"/>
        <rect x="34" y="184" width="404" height="122" rx="7" fill="none" stroke="#141836" stroke-width="2"/>
        <rect x="454" y="64" width="248" height="242" rx="7" fill="none" stroke="#141836" stroke-width="2"/>`,
      l4: `
        <path d="M 40 174 H 442 V 70" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.55"/>
        <path d="M 40 310 H 442 V 190" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.55"/>
        <path d="M 460 310 H 706 V 70" fill="none" stroke="#94A3B8" stroke-width="6" opacity="0.55"/>`,
      l5: `
        <g stroke="#141836" stroke-width="1.6">
          <circle cx="192" cy="112" r="8" fill="#10B981"/><circle cx="222" cy="112" r="8" fill="#10B981"/><circle cx="252" cy="112" r="8" fill="#10B981"/><circle cx="282" cy="112" r="8" fill="#10B981"/><circle cx="312" cy="112" r="8" fill="#10B981"/><circle cx="342" cy="112" r="8" fill="#FFF"/><circle cx="372" cy="112" r="8" fill="#FFF"/>
          <circle cx="192" cy="140" r="8" fill="#0EA5E9"/><circle cx="222" cy="140" r="8" fill="#0EA5E9"/><circle cx="252" cy="140" r="8" fill="#0EA5E9"/><circle cx="282" cy="140" r="8" fill="#0EA5E9"/><circle cx="312" cy="140" r="8" fill="#FFF"/><circle cx="342" cy="140" r="8" fill="#FFF"/><circle cx="372" cy="140" r="8" fill="#FFF"/>
        </g>
        <rect x="462" y="102" width="76" height="18" rx="3" fill="#0EA5E9" fill-opacity="0.22"/>
        <rect x="462" y="130" width="60" height="18" rx="3" fill="#EC4899" fill-opacity="0.22"/>
        <rect x="462" y="158" width="90" height="18" rx="3" fill="#10B981" fill-opacity="0.22"/>
        <rect x="462" y="186" width="78" height="18" rx="3" fill="#F59E0B" fill-opacity="0.24"/>`
    }
  }
];
