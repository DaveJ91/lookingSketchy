/* =========================================================================
   CH 16: 11 COMPLETE COMPLEX DIAGRAM ARCHETYPES (ZERO-OVERLAP SVG BLUEPRINTS)
   ========================================================================= */

export const DIAGRAM_PATTERNS = [
  {
    id: 'swimlane',
    short: '1. Swimlane',
    title: 'Swimlane Architecture (AI Tax Handoffs)',
    svg: `
      <g font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">
        <rect x="16" y="14" width="104" height="62" rx="4" fill="#EEF2FC" stroke="#141836" stroke-width="1.5"/><text x="68" y="49" text-anchor="middle">CLIENT</text>
        <rect x="16" y="84" width="104" height="62" rx="4" fill="#E0F2FE" stroke="#141836" stroke-width="1.5"/><text x="68" y="119" text-anchor="middle">TRIAGE</text>
        <rect x="16" y="154" width="104" height="62" rx="4" fill="#FCE7F3" stroke="#141836" stroke-width="1.5"/><text x="68" y="189" text-anchor="middle" fill="#BE185D">REASONING</text>
        <rect x="16" y="224" width="104" height="62" rx="4" fill="#D1FAE5" stroke="#141836" stroke-width="1.5"/><text x="68" y="259" text-anchor="middle" fill="#047857">MCP / HITL</text>
      </g>
      <g stroke="#94A3B8" stroke-width="1.4" stroke-dasharray="5 4"><line x1="126" y1="80" x2="740" y2="80"/><line x1="126" y1="150" x2="740" y2="150"/><line x1="126" y1="220" x2="740" y2="220"/></g>
      <rect x="148" y="26" width="116" height="38" rx="6" fill="#FFF" stroke="#141836" stroke-width="2"/><text x="206" y="49" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" font-weight="700">DE VAT Email</text>
      <path d="M 206 64 V 115 H 270" fill="none" stroke="#0EA5E9" stroke-width="2.4"/>
      <rect x="270" y="96" width="124" height="38" rx="6" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><text x="332" y="119" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" font-weight="700">Score: High (0.2s)</text>
      <path d="M 332 134 V 185 H 408" fill="none" stroke="#EC4899" stroke-width="2.4"/>
      <rect x="408" y="166" width="142" height="38" rx="6" fill="#FCE7F3" stroke="#EC4899" stroke-width="2" stroke-dasharray="5 3"/><text x="479" y="189" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" font-weight="700">EU Dir Art. 58 (42s)</text>
      <path d="M 479 204 V 255 H 566" fill="none" stroke="#10B981" stroke-width="2.4"/>
      <rect x="566" y="236" width="152" height="38" rx="6" fill="#D1FAE5" stroke="#047857" stroke-width="2"/><text x="642" y="259" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">HITL ✓ → WRITE</text>`,
    specs: [
      ['When to Use', 'Multi-agent pipelines or cross-team advisory handoffs where ownership boundaries matter.'],
      ['Dot-Grid Rules', '6–7 dot rows per lane separated by 01 dashed horizontal dividers; time flows left → right.'],
      ['Color Encoding', 'Match each lane badge to actor role; color vertical handoff drops to expose risk crossings.']
    ]
  },
  {
    id: 'sequence',
    short: '2. Sequence',
    title: 'Sequence Diagram (API / MCP / HITL Handshake)',
    svg: `
      <g font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">
        <rect x="40" y="14" width="110" height="32" rx="6" fill="#EEF2FC" stroke="#141836" stroke-width="2"/><text x="95" y="34" text-anchor="middle">USER / TAX</text>
        <rect x="220" y="14" width="110" height="32" rx="6" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><text x="275" y="34" text-anchor="middle">FLASH LLM</text>
        <rect x="400" y="14" width="124" height="32" rx="6" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/><text x="462" y="34" text-anchor="middle" fill="#BE185D">REASONING</text>
        <rect x="596" y="14" width="124" height="32" rx="6" fill="#D1FAE5" stroke="#047857" stroke-width="2"/><text x="658" y="34" text-anchor="middle" fill="#047857">MCP SERVER</text>
      </g>
      <g stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="5 4">
        <line x1="95" y1="46" x2="95" y2="294"/><line x1="275" y1="46" x2="275" y2="294"/><line x1="462" y1="46" x2="462" y2="294"/><line x1="658" y1="46" x2="658" y2="294"/>
      </g>
      <!-- Messages Downward in Time -->
      <line x1="95" y1="86" x2="268" y2="86" stroke="#141836" stroke-width="2.4"/><polygon points="274,86 264,81 264,91" fill="#141836"/>
      <text x="184" y="78" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">1. submit_query()</text>

      <line x1="275" y1="126" x2="454" y2="126" stroke="#EC4899" stroke-width="2.4"/><polygon points="460,126 450,121 450,131" fill="#EC4899"/>
      <text x="368" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">2. escalate(Art.58)</text>

      <line x1="462" y1="168" x2="103" y2="168" stroke="#7C3AED" stroke-width="2.2" stroke-dasharray="5 3"/><polygon points="97,168 107,163 107,173" fill="#7C3AED"/>
      <text x="278" y="160" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#7C3AED">3. request_partner_signoff()</text>

      <rect x="64" y="182" width="62" height="24" rx="4" fill="#FEF3C7" stroke="#B45309" stroke-width="1.6"/><text x="95" y="198" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#B45309">HITL ✓</text>

      <line x1="95" y1="232" x2="650" y2="232" stroke="#10B981" stroke-width="2.8"/><polygon points="656,232 646,227 646,237" fill="#10B981"/>
      <text x="376" y="224" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">4. signed_commit(row #14)</text>

      <line x1="658" y1="272" x2="103" y2="272" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="5 3"/><polygon points="97,272 107,267 107,277" fill="#0EA5E9"/>
      <text x="376" y="264" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0EA5E9">5. 200 OK + audit_hash</text>`,
    specs: [
      ['When to Use', 'Tracing exact request/response timing across APIs, webhooks, LLM tool calls, or client-advisor exchanges.'],
      ['Dot-Grid Rules', 'Align 4 actors along Row 1; drop vertical dashed lifelines down dot columns; space horizontal messages 3 dots apart.'],
      ['Color Encoding', 'Solid arrows = synchronous calls; dashed return arrows = responses; Amber box = human approval pause.']
    ]
  },
  {
    id: 'decision',
    short: '3. VAT Tree',
    title: 'Binary Decision Tree (EU VAT & Governance)',
    svg: `
      <polygon points="150,76 238,120 150,164 62,120" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/><text x="150" y="116" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" font-weight="700">Statutory</text><text x="150" y="133" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" font-weight="700">Ambiguity?</text>
      <line x1="238" y1="120" x2="352" y2="120" stroke="#10B981" stroke-width="3"/><rect x="266" y="96" width="54" height="20" rx="10" fill="#D1FAE5" stroke="#047857" stroke-width="1.3"/><text x="293" y="110" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">YES →</text>
      <polygon points="442,76 532,120 442,164 352,120" fill="#FCE7F3" stroke="#141836" stroke-width="2.2"/><text x="442" y="116" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" font-weight="700">Mutates</text><text x="442" y="133" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" font-weight="700">Client File?</text>
      <line x1="532" y1="120" x2="594" y2="120" stroke="#10B981" stroke-width="3"/><rect x="594" y="94" width="144" height="52" rx="7" fill="#D1FAE5" stroke="#141836" stroke-width="2.2"/><text x="666" y="117" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">WAKE REASONING</text><text x="666" y="135" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5">+ HITL GATE</text>
      <line x1="150" y1="164" x2="150" y2="230" stroke="#EC4899" stroke-width="3"/><rect x="122" y="182" width="56" height="20" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.3"/><text x="150" y="196" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">NO ↓</text>
      <rect x="74" y="230" width="152" height="50" rx="7" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/><text x="150" y="253" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">FAST-PATH MCP</text><text x="150" y="270" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#0EA5E9">SAVES 97% COST</text>
      <line x1="442" y1="164" x2="442" y2="230" stroke="#EC4899" stroke-width="3"/><rect x="366" y="230" width="152" height="50" rx="7" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/><text x="442" y="253" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">MEMO DRAFT ONLY</text><text x="442" y="270" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#525B7A">NO WRITE KEYS</text>`,
    specs: [
      ['When to Use', 'Statutory eligibility checks, compliance trees, and triage classifiers.'],
      ['Dot-Grid Rules', 'Diamonds ◇ strictly for Yes/No questions; Cyber Cards strictly for terminal actions.'],
      ['Color Encoding', 'Mint YES always exits right (→); Magenta NO always exits downward (↓).']
    ]
  },
  {
    id: 'deutschTree',
    short: '4. Deutsch Tree',
    title: 'Binary Decision Tree (German Wechselpräpositionen)',
    svg: `
      <polygon points="146,72 242,120 146,168 50,120" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/><text x="146" y="114" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" font-weight="700">Wechselpräp?</text><text x="146" y="132" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5">(in, an, auf, unter)</text>
      <line x1="242" y1="120" x2="346" y2="120" stroke="#10B981" stroke-width="3"/><text x="294" y="110" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">JA →</text>
      <polygon points="442,72 536,120 442,168 348,120" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/><text x="442" y="114" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5" font-weight="700">Wohin? (Motion)</text><text x="442" y="132" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5">A → B Bewegung</text>
      <line x1="536" y1="120" x2="592" y2="120" stroke="#10B981" stroke-width="3"/><rect x="592" y="92" width="146" height="56" rx="7" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/><text x="665" y="116" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0EA5E9">AKKUSATIV</text><text x="665" y="136" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">in den Ordner</text>
      <line x1="442" y1="168" x2="442" y2="226" stroke="#EC4899" stroke-width="3"/><text x="478" y="202" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">NEIN (Wo?)</text>
      <rect x="364" y="226" width="156" height="56" rx="7" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/><text x="442" y="250" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">DATIV (STATIC)</text><text x="442" y="270" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14">im (in dem) Ordner</text>
      <line x1="146" y1="168" x2="146" y2="226" stroke="#EC4899" stroke-width="3"/><rect x="56" y="226" width="180" height="56" rx="7" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/><text x="146" y="250" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">FIXED PREPOSITION</text><text x="146" y="269" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5">mit/bei=DAT • für/durch=AKK</text>`,
    specs: [
      ['Deutsch Mastery', 'Converts tricky two-way German prepositions into a mechanical 2-step reflex.'],
      ['Dot-Grid Rules', 'Embed a concrete noun phrase (in den Ordner vs. im Ordner) inside every outcome box.'],
      ['Memory Anchor', 'Motion (Wohin →) = Cyan Akkusativ; Static Position (Wo ●) = Mint Dativ.']
    ]
  },
  {
    id: 'state',
    short: '5. State Machine',
    title: 'State Machine (Document & Filing Lifecycle)',
    svg: `
      <rect x="36" y="128" width="128" height="48" rx="24" fill="#EEF2FC" stroke="#141836" stroke-width="2.2"/><text x="100" y="157" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700">DRAFT</text>
      <rect x="224" y="128" width="142" height="48" rx="24" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/><text x="295" y="157" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700">IN REVIEW</text>
      <rect x="424" y="128" width="142" height="48" rx="24" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/><text x="495" y="157" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#047857">APPROVED</text>
      <rect x="622" y="128" width="110" height="48" rx="24" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/><text x="677" y="157" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#0EA5E9">FILED ✓</text>
      <path d="M 164 152 H 222" stroke="#141836" stroke-width="2.4"/><text x="193" y="142" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0EA5E9">submit()</text>
      <path d="M 366 152 H 422" stroke="#10B981" stroke-width="2.6"/><text x="394" y="142" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">sign()</text>
      <path d="M 566 152 H 620" stroke="#0EA5E9" stroke-width="2.6"/><text x="593" y="142" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0EA5E9">mcp_put()</text>
      <path d="M 295 178 Q 198 250 100 178" fill="none" stroke="#EC4899" stroke-width="2.4" stroke-dasharray="6 4"/><text x="198" y="232" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">reject(notes) ←</text>
      <path d="M 272 126 C 262 66 328 66 318 126" fill="none" stroke="#7C3AED" stroke-width="2.2"/><text x="295" y="72" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#7C3AED">request_citation()</text>`,
    specs: [
      ['When to Use', 'Tracking every legal state of one tax filing, AI tool call, or contract workflow.'],
      ['Dot-Grid Rules', 'Pill containers + 6 empty dot rows above/below for curved self-loops and rollback arcs.'],
      ['Color Encoding', 'Monospace event triggers on transitions; dashed Magenta for rejection rollbacks.']
    ]
  },
  {
    id: 'anatomy',
    short: '6. Anatomy Callout',
    title: '45° Elbow-Leader Anatomy Diagram',
    svg: `
      <polygon points="380,180 468,218 380,256 292,218" fill="#D1FAE5" stroke="#141836" stroke-width="2.2"/>
      <polygon points="380,118 468,156 380,194 292,156" fill="#FCE7F3" stroke="#EC4899" stroke-width="2.2" stroke-dasharray="6 4"/>
      <polygon points="380,56 468,94 380,132 292,94" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
      <circle cx="326" cy="94" r="4.5" fill="#141836"/><polyline points="326,94 274,56 54,56" fill="none" stroke="#141836" stroke-width="2"/><text x="54" y="48" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0EA5E9">01 // STATELESS COGNITIVE PLANE</text>
      <circle cx="326" cy="218" r="4.5" fill="#141836"/><polyline points="326,218 274,256 54,256" fill="none" stroke="#141836" stroke-width="2"/><text x="54" y="248" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">03 // ISOLATED MCP TOOL PLANE</text>
      <circle cx="436" cy="156" r="4.5" fill="#EC4899"/><polyline points="436,156 488,120 716,120" fill="none" stroke="#EC4899" stroke-width="2"/><text x="716" y="112" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">02 // HITL GOVERNANCE FIREWALL</text>`,
    specs: [
      ['When to Use', 'Dissecting an isometric architecture, UI screen, or German Steuerbescheid ruling.'],
      ['Dot-Grid Rules', 'Center Hero object; exit at 45° (1-over, 1-up) onto aligned horizontal left/right shelves.'],
      ['Color Encoding', 'Anchor each leader with a solid ● dot matching the layer tint.']
    ]
  },
  {
    id: 'venn',
    short: '7. Venn / Euler',
    title: '3-Way Venn & Euler Overlap (EU OSS Trigger Zone)',
    svg: `
      <circle cx="320" cy="126" r="88" fill="#0EA5E9" fill-opacity="0.2" stroke="#0EA5E9" stroke-width="2.4"/>
      <circle cx="440" cy="126" r="88" fill="#EC4899" fill-opacity="0.18" stroke="#EC4899" stroke-width="2.4"/>
      <circle cx="380" cy="206" r="84" fill="#10B981" fill-opacity="0.18" stroke="#047857" stroke-width="2.4"/>
      <text x="276" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0EA5E9">CROSS-BORDER</text>
      <text x="276" y="112" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0EA5E9">EU SALES</text>
      <text x="484" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">PRIVATE B2C</text>
      <text x="484" y="112" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">CONSUMERS</text>
      <text x="380" y="256" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">TOTAL EU &gt; €10,000</text>
      <circle cx="380" cy="152" r="28" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
      <text x="380" y="149" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">OSS</text>
      <text x="380" y="162" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">ZONE!</text>`,
    specs: [
      ['When to Use', 'Showing exact statutory intersections (when 3 tax criteria trigger OSS) or shared traits.'],
      ['Dot-Grid Rules', 'Trace 3 equal circles using your Helix circle template spaced in an equilateral triangle.'],
      ['Color Encoding', 'Keep fills translucent (~20%) so the center intersection naturally intensifies; cap with a crisp badge.']
    ]
  },
  {
    id: 'flywheel',
    short: '8. Causal Loop',
    title: 'Systems Thinking Causal Loop / Learning Flywheel',
    svg: `
      <circle cx="380" cy="156" r="96" fill="none" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4 4"/>
      <!-- 4 Curved Reinforcing Arcs -->
      <path d="M 398 56 A 102 102 0 0 1 482 140" fill="none" stroke="#0EA5E9" stroke-width="3.2"/><polygon points="484,146 476,136 487,134" fill="#0EA5E9"/>
      <path d="M 480 176 A 102 102 0 0 1 398 256" fill="none" stroke="#10B981" stroke-width="3.2"/><polygon points="392,258 402,250 404,261" fill="#10B981"/>
      <path d="M 362 256 A 102 102 0 0 1 280 176" fill="none" stroke="#7C3AED" stroke-width="3.2"/><polygon points="278,170 286,180 275,182" fill="#7C3AED"/>
      <path d="M 280 140 A 102 102 0 0 1 362 56" fill="none" stroke="#EC4899" stroke-width="3.2"/><polygon points="368,54 358,62 356,51" fill="#EC4899"/>
      <!-- 4 Nodes -->
      <rect x="294" y="20" width="172" height="40" rx="8" fill="#E0F2FE" stroke="#141836" stroke-width="2"/><text x="380" y="45" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" font-weight="700">1. Visual Sketch-Notes</text>
      <rect x="498" y="136" width="204" height="40" rx="8" fill="#D1FAE5" stroke="#141836" stroke-width="2"/><text x="600" y="161" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" font-weight="700">2. Dual-Coded B2 Recall ↑</text>
      <rect x="294" y="250" width="172" height="40" rx="8" fill="#EDE9FE" stroke="#141836" stroke-width="2"/><text x="380" y="275" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" font-weight="700">3. Faster Listening</text>
      <rect x="58" y="136" width="204" height="40" rx="8" fill="#FCE7F3" stroke="#141836" stroke-width="2"/><text x="160" y="161" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15" font-weight="700">4. Richer Live Synthesis</text>
      <circle cx="380" cy="156" r="34" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/><text x="380" y="153" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="700" fill="#047857">R (+)</text><text x="380" y="169" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">FLYWHEEL</text>`,
    specs: [
      ['When to Use', 'Compounding habits (German study), product growth loops, or systemic risk spirals.'],
      ['Dot-Grid Rules', 'Place 4 equal cards at N / E / S / W compass points around a central R(+) or B(-) loop badge.'],
      ['Color Encoding', 'Mark reinforcing accelerators with Mint/Cyan (+) and balancing brakes with Magenta (-).']
    ]
  },
  {
    id: 'fishbone',
    short: '9. Fishbone RCA',
    title: 'Ishikawa Fishbone Root-Cause Diagram',
    svg: `
      <!-- Central Horizontal Spine -->
      <line x1="56" y1="156" x2="546" y2="156" stroke="#141836" stroke-width="3.6"/>
      <polygon points="554,156 540,148 540,164" fill="#141836"/>
      <!-- Problem Head -->
      <rect x="556" y="122" width="176" height="68" rx="8" fill="#FCE7F3" stroke="#EC4899" stroke-width="2.4"/><text x="644" y="152" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">PROBLEM EFFECT:</text><text x="644" y="172" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="16" font-weight="700">Late UStVA Filing!</text>
      <!-- 4 Diagonal 45-Deg Ribs -->
      <line x1="156" y1="54" x2="236" y2="156" stroke="#0EA5E9" stroke-width="2.4"/><rect x="86" y="26" width="128" height="28" rx="5" fill="#E0F2FE" stroke="#141836" stroke-width="1.8"/><text x="150" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">DATA / ERP</text>
      <line x1="112" y1="92" x2="186" y2="92" stroke="#141836" stroke-width="1.4"/><text x="106" y="96" text-anchor="end" font-family="Patrick Hand, cursive" font-size="13.5">Missing VIES</text>
      <line x1="138" y1="124" x2="212" y2="124" stroke="#141836" stroke-width="1.4"/><text x="132" y="128" text-anchor="end" font-family="Patrick Hand, cursive" font-size="13.5">Bad CSV</text>

      <line x1="376" y1="54" x2="456" y2="156" stroke="#7C3AED" stroke-width="2.4"/><rect x="306" y="26" width="134" height="28" rx="5" fill="#EDE9FE" stroke="#141836" stroke-width="1.8"/><text x="373" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">PROCESS / HITL</text>
      <line x1="340" y1="98" x2="410" y2="98" stroke="#141836" stroke-width="1.4"/><text x="334" y="102" text-anchor="end" font-family="Patrick Hand, cursive" font-size="13.5">Partner bottleneck</text>

      <line x1="156" y1="258" x2="236" y2="156" stroke="#10B981" stroke-width="2.4"/><rect x="86" y="258" width="128" height="28" rx="5" fill="#D1FAE5" stroke="#141836" stroke-width="1.8"/><text x="150" y="276" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">TOOLS / AI</text>
      <line x1="134" y1="210" x2="194" y2="210" stroke="#141836" stroke-width="1.4"/><text x="128" y="214" text-anchor="end" font-family="Patrick Hand, cursive" font-size="13.5">Slow single LLM</text>

      <line x1="376" y1="258" x2="456" y2="156" stroke="#F59E0B" stroke-width="2.4"/><rect x="306" y="258" width="134" height="28" rx="5" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/><text x="373" y="276" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">STATUTES</text>
      <line x1="354" y1="210" x2="414" y2="210" stroke="#141836" stroke-width="1.4"/><text x="348" y="214" text-anchor="end" font-family="Patrick Hand, cursive" font-size="13.5">OSS rate change</text>`,
    specs: [
      ['When to Use', 'Post-mortems, audit root-cause investigations, or diagnosing why an AI pipeline failed.'],
      ['Dot-Grid Rules', 'Draw ONE bold horizontal 05 spine to a right-hand Problem Box; branch 45° category ribs above & below.'],
      ['Color Encoding', 'Keep sub-cause twigs horizontal so all text reads comfortably left-to-right (never tilted text!).']
    ]
  },
  {
    id: 'graph',
    short: '10. Concept Graph',
    title: 'Entity-Relationship & German Root-Word Graph',
    svg: `
      <g stroke="#141836" stroke-width="2">
        <line x1="380" y1="156" x2="176" y2="66"/><line x1="380" y1="156" x2="584" y2="66"/>
        <line x1="380" y1="156" x2="176" y2="246"/><line x1="380" y1="156" x2="584" y2="246"/>
      </g>
      <!-- Center Root -->
      <circle cx="380" cy="156" r="46" fill="#FEF3C7" stroke="#141836" stroke-width="2.8"/>
      <text x="380" y="152" text-anchor="middle" font-family="Playwrite IT Moderna, cursive" font-size="18">stellen</text>
      <text x="380" y="172" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#B45309">ROOT: TO PLACE</text>
      <!-- 4 Prefix Satellite Nodes -->
      <rect x="64" y="34" width="186" height="58" rx="8" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
      <text x="157" y="58" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#0EA5E9">be·stellen (insep.)</text>
      <text x="157" y="78" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">to order (Software / Akte)</text>

      <rect x="510" y="34" width="186" height="58" rx="8" fill="#D1FAE5" stroke="#141836" stroke-width="2"/>
      <text x="603" y="58" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#047857">vor·stellen (sep.)</text>
      <text x="603" y="78" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">to present / imagine</text>

      <rect x="64" y="218" width="186" height="58" rx="8" fill="#FCE7F3" stroke="#141836" stroke-width="2"/>
      <text x="157" y="242" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#BE185D">fest·stellen (sep.)</text>
      <text x="157" y="262" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">to determine (Tax Audit)</text>

      <rect x="510" y="218" width="186" height="58" rx="8" fill="#EDE9FE" stroke="#141836" stroke-width="2"/>
      <text x="603" y="242" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#7C3AED">ein·stellen (sep.)</text>
      <text x="603" y="262" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14.5">to hire / configure</text>`,
    specs: [
      ['When to Use', 'Database schemas (Entity ──< Filing), TaxWiki knowledge graphs, or German prefix word families!'],
      ['Dot-Grid Rules', 'Anchor ONE bold center root (05 circle) and place 4–6 related satellites symmetrically on outer dot coordinates.'],
      ['Color Encoding', 'Separate separable prefixes (sep.) vs. inseparable prefixes (insep.) with distinct accent tints.']
    ]
  },
  {
    id: 'onion',
    short: '11. Onion Rings',
    title: 'Concentric Governance Onion (Defense-in-Depth)',
    svg: `
      <!-- 4 Nested Concentric Rounded Security Rings -->
      <rect x="46" y="18" width="668" height="274" rx="22" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
      <text x="70" y="42" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#525B7A">RING 4 // PUBLIC CLIENT INTAKE &amp; TRIAGE (UNTRUSTED)</text>

      <rect x="114" y="56" width="532" height="218" rx="18" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
      <text x="136" y="80" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0EA5E9">RING 3 // STATELESS REASONING AGENTS (READ-ONLY)</text>

      <rect x="184" y="96" width="392" height="160" rx="14" fill="#FCE7F3" stroke="#EC4899" stroke-width="2.2" stroke-dasharray="6 4"/>
      <text x="206" y="120" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">RING 2 // PARTNER HITL APPROVAL FIREWALL</text>

      <rect x="256" y="138" width="248" height="98" rx="12" fill="#D1FAE5" stroke="#047857" stroke-width="2.8"/>
      <text x="380" y="176" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#047857">RING 1 // CORE</text>
      <text x="380" y="200" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="15.5" font-weight="700" fill="#141836">MCP Write Keys &amp; Tax Ledger 🔒</text>`,
    specs: [
      ['When to Use', 'Security architecture (defense-in-depth), tax jurisdiction hierarchies, or concentric scope boundaries.'],
      ['Dot-Grid Rules', 'Nest rounded rectangles stepping inward by 3 dots horizontally and 2 dots vertically on every ring.'],
      ['Color Encoding', 'Escalate line weight from outer 01/03 rings to bold 05 + Acid Mint around the protected inner core.']
    ]
  }
];
