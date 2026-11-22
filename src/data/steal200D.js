/* =========================================================================
   STEAL BOOK EXPANSION D: GRAPHICS 161–200
   +20 Product, Tax & Tech UI (161–180), +20 Editorial & Metaphor Devices (181–200)
   ========================================================================= */

const mk = (id, cat, name, use, recipe, body) => ({
  id, cat, name, use, recipe,
  svg: `<svg viewBox="0 0 260 130">${body}</svg>`
});

export const STEAL_200_D = [
  // PRODUCT, TAX & TECH UI (161–180)
  mk('sb-phone-wire', 'product', '161. Pocket Mobile Wireframe', 'Onboarding Flows, Mobile App Specs, Tap Paths', [
    'Draw a 6×10 dot rounded bezel with a tiny top speaker pill.',
    'Block only 2 content rectangles and ONE colored primary CTA button.',
    'Never waste time drawing realistic icons inside wireframes.'
  ], `
    <rect x="86" y="10" width="88" height="110" rx="14" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
    <rect x="116" y="17" width="28" height="4" rx="2" fill="#141836"/>
    <rect x="96" y="30" width="68" height="28" rx="4" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.4"/>
    <line x1="98" y1="68" x2="156" y2="68" stroke="#94A3B8" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="98" y1="78" x2="142" y2="78" stroke="#CBD5E1" stroke-width="2.4" stroke-linecap="round"/>
    <rect x="96" y="90" width="68" height="20" rx="6" fill="#EC4899"/>
    <text x="130" y="103" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#FFF">CONTINUE</text>
  `),
  mk('sb-empty-state', 'product', '162. UX Empty-State Wireframe', 'First-Run Onboarding, Zero-Data Screens', [
    'Draw a dashed placeholder box centered inside a mini screen.',
    'Put one crisp "+ Load Sample" primary button directly underneath.',
    'Prevents blank-screen paralysis on Day 1.'
  ], `
    <rect x="44" y="14" width="172" height="102" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <rect x="86" y="28" width="88" height="36" rx="6" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="130" y="50" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13" fill="#64748B">0 rows yet</text>
    <rect x="74" y="76" width="112" height="26" rx="6" fill="#0EA5E9"/>
    <text x="130" y="93" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">+ LOAD SAMPLE CSV</text>
  `),
  mk('sb-modal-dialog', 'product', '163. Confirm / Guardrail Modal Box', 'Destructive Actions, Legal Consent, HITL Checks', [
    'Dim the outer canvas light grey and float one crisp shadowed card in front.',
    'Pair a quiet grey Cancel button left with a bold Magenta Confirm CTA right.'
  ], `
    <rect x="20" y="14" width="220" height="102" rx="8" fill="#E2E8F0"/>
    <rect x="48" y="26" width="164" height="78" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
    <text x="62" y="48" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">CONFIRM FILE?</text>
    <text x="62" y="66" font-family="Patrick Hand, cursive" font-size="13">Submits directly to ELSTER.</text>
    <rect x="62" y="76" width="58" height="18" rx="4" fill="#EEF2FC" stroke="#141836" stroke-width="1.4"/>
    <text x="91" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8">CANCEL</text>
    <rect x="130" y="76" width="68" height="18" rx="4" fill="#EC4899"/>
    <text x="164" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#FFF">SUBMIT</text>
  `),
  mk('sb-toast-banner', 'product', '164. Floating Status Toast Pill', 'API Feedback, Save Confirmation, Error Alerts', [
    'Draw a sleek dark Indigo pill floating near the bottom edge.',
    'Lead with a bright Mint ✓ (or Magenta !) icon and 3-word message.'
  ], `
    <rect x="26" y="42" width="208" height="44" rx="22" fill="#141836"/>
    <circle cx="52" cy="64" r="11" fill="#10B981"/>
    <polyline points="47,64 51,68 58,60" fill="none" stroke="#FFF" stroke-width="2.4" stroke-linecap="round"/>
    <text x="74" y="68" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#FFF">SYNCED 142 ROWS</text>
  `),
  mk('sb-db-cylinder', 'product', '165. Stacked Database Cylinder', 'Storage Architecture, Tax Archives, Ledgers', [
    'Draw an ellipse top cap, two straight side walls, and a matching curved bottom.',
    'Echo 2 subtle curved internal ribs to show stacked storage disks.'
  ], `
    <path d="M 78 34 V 96 A 52 16 0 0 0 182 96 V 34 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/>
    <ellipse cx="130" cy="34" rx="52" ry="16" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
    <path d="M 78 56 A 52 16 0 0 0 182 56 M 78 78 A 52 16 0 0 0 182 78" fill="none" stroke="#0369A1" stroke-width="1.8"/>
    <text x="130" y="38" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">POSTGRES</text>
  `),
  mk('sb-api-plug', 'product', '166. API Socket & Connector Plug', 'Webhooks, OAuth Integrations, MCP Tools', [
    'Draw a small 2-prong plug on the left facing a wall socket on the right.',
    'Add a tiny spark or dashed data line bridging the gap.'
  ], `
    <rect x="28" y="44" width="54" height="42" rx="6" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
    <line x1="82" y1="56" x2="106" y2="56" stroke="#141836" stroke-width="4" stroke-linecap="round"/>
    <line x1="82" y1="74" x2="106" y2="74" stroke="#141836" stroke-width="4" stroke-linecap="round"/>
    <line x1="116" y1="65" x2="144" y2="65" stroke="#EC4899" stroke-width="2.4" stroke-dasharray="4 3"/>
    <rect x="152" y="38" width="76" height="54" rx="8" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.2"/>
    <text x="190" y="69" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">MCP API</text>
  `),
  mk('sb-firewall-wall', 'product', '167. Brick Firewall / Trust Boundary', 'Security Scopes, Read/Write Isolation, Compliance', [
    'Draw a staggered brick column in Magenta separating two clean zones.',
    'Label Left = Untrusted / LLM and Right = Protected Ledger.'
  ], `
    <text x="52" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">AGENT</text>
    <rect x="104" y="18" width="52" height="94" rx="4" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.2"/>
    <line x1="104" y1="42" x2="156" y2="42" stroke="#BE185D" stroke-width="1.6"/>
    <line x1="104" y1="66" x2="156" y2="66" stroke="#BE185D" stroke-width="1.6"/>
    <line x1="104" y1="90" x2="156" y2="90" stroke="#BE185D" stroke-width="1.6"/>
    <line x1="130" y1="18" x2="130" y2="42" stroke="#BE185D" stroke-width="1.6"/>
    <line x1="130" y1="66" x2="130" y2="90" stroke="#BE185D" stroke-width="1.6"/>
    <text x="208" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">LEDGER</text>
  `),
  mk('sb-git-branch', 'product', '168. Git Branch & Merge Rail', 'Experiments, Feature Flags, Versioning', [
    'Draw one straight Indigo main rail across the top.',
    'Dip a curved Cyan feature branch below with 2 commit dots, then merge it back into Mint.'
  ], `
    <line x1="26" y1="42" x2="234" y2="42" stroke="#141836" stroke-width="3"/>
    <path d="M 64 42 C 84 42, 84 86, 108 86 H 158 C 180 86, 180 42, 200 42" fill="none" stroke="#0EA5E9" stroke-width="3"/>
    <circle cx="64" cy="42" r="6" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <circle cx="116" cy="86" r="6" fill="#0EA5E9" stroke="#141836" stroke-width="2"/>
    <circle cx="152" cy="86" r="6" fill="#0EA5E9" stroke="#141836" stroke-width="2"/>
    <circle cx="200" cy="42" r="7" fill="#10B981" stroke="#141836" stroke-width="2.2"/>
    <text x="134" y="108" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">feat/sample-csv</text>
  `),
  mk('sb-decision-diamond', 'product', '169. Binary YES/NO Decision Gate', 'Tax Routing, Eligibility Rules, User Flows', [
    'Draw one crisp diamond rotated 45° with a short 2-word question inside.',
    'Route YES cleanly right in Mint and NO downward in Magenta.'
  ], `
    <polygon points="104,22 158,64 104,106 50,64" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/>
    <text x="104" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">B2B EU?</text>
    <line x1="158" y1="64" x2="206" y2="64" stroke="#047857" stroke-width="2.6"/>
    <polygon points="202,58 214,64 202,70" fill="#047857"/>
    <text x="218" y="68" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">§ 13b</text>
    <text x="180" y="56" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" fill="#047857">YES</text>
    <line x1="104" y1="106" x2="104" y2="124" stroke="#BE185D" stroke-width="2.4"/>
    <text x="116" y="122" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700" fill="#BE185D">NO → OSS</text>
  `),
  mk('sb-ab-split', 'product', '170. A/B Split Experiment Card', 'Growth Tests, Pricing Variants, Copy Tests', [
    'Divide one card straight down the middle into Variant A (Grey) and Variant B (Mint).',
    'Stamp a small winning ★ badge on the lifting variant.'
  ], `
    <rect x="24" y="20" width="96" height="90" rx="8" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
    <text x="72" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700">A // BASE</text>
    <text x="72" y="78" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" fill="#525B7A">28%</text>
    <rect x="140" y="20" width="96" height="90" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>
    <text x="188" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">B // TEST ★</text>
    <text x="188" y="78" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700" fill="#047857">44%</text>
  `),
  mk('sb-statute-scales', 'product', '171. Balanced Law / Tax Scales', 'IRAC Briefs, Legal Tradeoffs, Audit Balance', [
    'Draw a vertical post with a horizontal balance crossbar.',
    'Hang two shallow triangular pan trays from the tips and label both sides.'
  ], `
    <line x1="130" y1="22" x2="130" y2="108" stroke="#141836" stroke-width="3"/>
    <line x1="94" y1="108" x2="166" y2="108" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
    <line x1="56" y1="34" x2="204" y2="34" stroke="#141836" stroke-width="2.6"/>
    <path d="M 56 34 L 38 74 H 74 Z M 204 34 L 186 74 H 222 Z" fill="none" stroke="#64748B" stroke-width="1.6"/>
    <path d="M 34 74 A 22 14 0 0 0 78 74 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
    <path d="M 182 74 A 22 14 0 0 0 226 74 Z" fill="#FCE7F3" stroke="#141836" stroke-width="2"/>
    <text x="56" y="102" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">FACTS</text>
    <text x="204" y="102" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">STATUTE</text>
  `),
  mk('sb-gavel-holding', 'product', '172. Judge Gavel & Sound Block', 'Case Holdings, Final Rulings, Policy Decisions', [
    'Draw an angled cylinder head attached to a slender diagonal handle.',
    'Sit a flat rectangular sounding block below with 2 crisp impact lines.'
  ], `
    <g transform="rotate(-30 112 52)">
      <rect x="82" y="28" width="54" height="24" rx="5" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/>
      <rect x="104" y="52" width="10" height="48" rx="3" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
    </g>
    <rect x="44" y="92" width="74" height="14" rx="4" fill="#141836"/>
    <text x="150" y="64" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">HOLDING</text>
    <text x="150" y="84" font-family="Patrick Hand, cursive" font-size="14">Deductible in</text>
    <text x="150" y="100" font-family="Patrick Hand, cursive" font-size="14">cash payout yr</text>
  `),
  mk('sb-contract-sign', 'product', '173. Signature Line & Pen Nib', 'Sign-Offs, SLAs, Agreements, Commitments', [
    'Draw a clean horizontal signature line preceded by a bold `X`.',
    'Add a playful looped flourish signature above the line in Cyan ink.'
  ], `
    <rect x="24" y="20" width="212" height="90" rx="8" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
    <text x="42" y="44" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#525B7A">AGREED SCOPE // SIGN-OFF</text>
    <text x="44" y="82" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700" fill="#BE185D">X</text>
    <path d="M 68 76 C 78 52, 92 84, 108 62 C 118 50, 128 80, 148 66 C 164 56, 178 72, 206 64" fill="none" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="62" y1="84" x2="216" y2="84" stroke="#141836" stroke-width="1.8"/>
  `),
  mk('sb-search-bar', 'product', '174. Command-K Search Bar Widget', 'Information Retrieval, UX Specs, Filters', [
    'Draw a wide pill input box with a tiny magnifying glass left and `⌘K` keycap right.',
    'Great for sketching instant-search product ideas.'
  ], `
    <rect x="22" y="42" width="216" height="46" rx="23" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
    <circle cx="48" cy="63" r="8" fill="none" stroke="#0EA5E9" stroke-width="2.4"/>
    <line x1="54" y1="69" x2="60" y2="75" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>
    <text x="72" y="69" font-family="Patrick Hand, cursive" font-size="16" fill="#64748B">Search invoices, § rules…</text>
    <rect x="192" y="53" width="32" height="22" rx="5" fill="#EEF2FC" stroke="#141836" stroke-width="1.5"/>
    <text x="208" y="68" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">⌘K</text>
  `),
  mk('sb-chat-thread', 'product', '175. 2-Bubble Conversation Thread', 'Support Transcripts, German Dialogues, Prompt/Reply', [
    'Align Incoming bubble left in soft Grey and Outgoing reply right in Cyan.',
    'Keep each bubble to 4–6 words max.'
  ], `
    <rect x="22" y="18" width="144" height="38" rx="12" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
    <text x="36" y="41" font-family="Patrick Hand, cursive" font-size="14.5">"Komm doch mal kurz her!"</text>
    <rect x="94" y="68" width="144" height="38" rx="12" fill="#E0F2FE" stroke="#0369A1" stroke-width="2"/>
    <text x="108" y="91" font-family="Patrick Hand, cursive" font-size="14.5" fill="#0369A1">"Bin sofort da, Sekunde!"</text>
  `),
  mk('sb-cloud-sync', 'product', '176. Cloud Sync & Local Edge Node', 'Offline-First Apps, Sync Bugs, Cloud Infra', [
    'Sketch a clean puffy cloud on top and a small laptop rectangle below.',
    'Connect them with opposite up/down sync arrows.'
  ], `
    <path d="M 88 54 H 174 A 14 14 0 0 0 174 28 A 20 18 0 0 0 134 22 A 16 14 0 0 0 88 54 Z" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/>
    <text x="132" y="44" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">CLOUD</text>
    <line x1="120" y1="58" x2="120" y2="82" stroke="#10B981" stroke-width="2.4"/>
    <line x1="140" y1="58" x2="140" y2="82" stroke="#EC4899" stroke-width="2.4" stroke-dasharray="3 2"/>
    <rect x="94" y="84" width="72" height="30" rx="5" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <text x="130" y="103" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">LOCAL</text>
  `),
  mk('sb-shield-check', 'product', '177. Compliance Shield Crest', 'Audit Readiness, Security Controls, Guarantees', [
    'Draw a crisp heraldic shield outline tinted soft Mint.',
    'Strike one bold confident checkmark right through the middle.'
  ], `
    <path d="M 130 14 L 182 30 V 66 C 182 92, 158 108, 130 118 C 102 108, 78 92, 78 66 V 30 Z" fill="#D1FAE5" stroke="#047857" stroke-width="2.6" stroke-linejoin="round"/>
    <polyline points="108,66 124,82 154,48" fill="none" stroke="#047857" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  `),
  mk('sb-bug-magnifying', 'product', '178. Bug-Hunt Magnifying Loupe', 'Root-Cause Audits, QA Notes, Edge-Case Discovery', [
    'Draw a clean magnifying glass circle with a thick angled handle.',
    'Put a tiny stylized beetle/error code inside the lens in Magenta.'
  ], `
    <line x1="146" y1="84" x2="184" y2="114" stroke="#141836" stroke-width="7" stroke-linecap="round"/>
    <circle cx="116" cy="58" r="38" fill="#FFF7FB" stroke="#141836" stroke-width="3"/>
    <ellipse cx="116" cy="60" rx="13" ry="16" fill="#EC4899" stroke="#141836" stroke-width="2"/>
    <line x1="94" y1="54" x2="138" y2="54" stroke="#141836" stroke-width="2"/>
    <line x1="94" y1="68" x2="138" y2="68" stroke="#141836" stroke-width="2"/>
    <text x="192" y="54" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">504 BUG</text>
  `),
  mk('sb-key-value-pill', 'product', '179. Split Metadata Key:Value Pills', 'Tags, Headers, Status Chips, Config Flags', [
    'Draw a horizontal pill divided into a dark left key cap and light right value.',
    'Line up 2–3 chips under any page title for instant structured metadata.'
  ], `
    ${[[26, 'STATUS', 'IN REVIEW', '#F59E0B'], [64, 'OWNER', 'PRODUCT', '#0EA5E9'], [102, 'RISK', 'LOW ✓', '#10B981']].map(([y, k, v, col]) => `
      <rect x="34" y="${y-12}" width="78" height="24" rx="5" fill="#141836"/>
      <rect x="110" y="${y-12}" width="116" height="24" rx="5" fill="#FFF" stroke="#141836" stroke-width="1.8"/>
      <text x="73" y="${y+4}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#FFF">${k}</text>
      <text x="168" y="${y+4}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="${col}">${v}</text>
    `).join('')}
  `),
  mk('sb-pipeline-pipe', 'product', '180. Flanged Data Pipe Segment', 'ETL Pipelines, Throughput Bottlenecks, Cashflow', [
    'Draw a wide horizontal pipe narrowing sharply into a tight middle neck (the bottleneck).',
    'Highlight the tight choke point in Magenta so everyone sees what to widen first.'
  ], `
    <path d="M 24 34 H 96 L 118 52 H 142 L 164 34 H 236 V 96 H 164 L 142 78 H 118 L 96 96 H 24 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
    <rect x="116" y="52" width="28" height="26" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/>
    <text x="130" y="24" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">CHOKE POINT ↓</text>
  `),

  // EDITORIAL & METAPHOR DEVICES (181–200)
  mk('sb-binoculars-mini', 'editorial', '181. Skeptical Binoculars Peek', 'Due Diligence, Critical Reviews, "Looking Sketchy"', [
    'Draw two chunky dark lens barrels joined by a bright focus wheel.',
    'Add squinting side-eye pupils inside the lenses and one raised eyebrow above.'
  ], `
    <path d="M 76 34 L 112 40" stroke="#141836" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M 148 34 Q 168 20 188 32" fill="none" stroke="#141836" stroke-width="3.2" stroke-linecap="round"/>
    <rect x="120" y="54" width="20" height="22" rx="4" fill="#EC4899" stroke="#141836" stroke-width="2.2"/>
    <circle cx="94" cy="70" r="28" fill="#141836"/><circle cx="94" cy="70" r="20" fill="#E0F2FE"/>
    <line x1="74" y1="66" x2="114" y2="66" stroke="#141836" stroke-width="2.8"/><circle cx="102" cy="74" r="6" fill="#141836"/>
    <circle cx="166" cy="70" r="28" fill="#141836"/><circle cx="166" cy="70" r="20" fill="#E0F2FE"/>
    <line x1="146" y1="62" x2="186" y2="62" stroke="#141836" stroke-width="2.8"/><circle cx="174" cy="73" r="6" fill="#141836"/>
    <text x="130" y="116" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">LOOKING SKETCHY</text>
  `),
  mk('sb-lightbulb-spark', 'editorial', '182. Aha! Lightbulb With Crisp Rays', 'Core Insights, Breakthroughs, Hypotheses', [
    'Draw a round bulb tapering cleanly into a 2-rib screw base.',
    'Fill soft Amber and radiate 5 crisp straight spark ticks around the crown.'
  ], `
    <path d="M 130 28 A 28 28 0 1 0 112 78 L 116 92 H 144 L 148 78 A 28 28 0 0 0 130 28 Z" fill="#FEF3C7" stroke="#141836" stroke-width="2.4"/>
    <rect x="116" y="92" width="28" height="14" rx="3" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
    <path d="M 130 10 V 20 M 86 24 L 94 32 M 174 24 L 166 32 M 76 56 H 88 M 172 56 H 184" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
  `),
  mk('sb-hourglass-time', 'editorial', '183. Sandglass Deadline Timer', 'Time Scarcity, Statutory Deadlines, Runway', [
    'Draw two opposing triangles pinched cleanly at the center waist between flat caps.',
    'Fill the bottom heap in Amber/Magenta to show time running low.'
  ], `
    <line x1="88" y1="16" x2="172" y2="16" stroke="#141836" stroke-width="4" stroke-linecap="round"/>
    <line x1="88" y1="114" x2="172" y2="114" stroke="#141836" stroke-width="4" stroke-linecap="round"/>
    <polygon points="96,18 164,18 130,65" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <polygon points="130,65 164,112 96,112" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <polygon points="116,46 144,46 130,65" fill="#F59E0B"/>
    <polygon points="104,112 156,112 130,84" fill="#EC4899"/>
  `),
  mk('sb-key-door', 'editorial', '184. Skeleton Key Unlocks Constraint', 'Root Unlock, Insight Key, Permissions', [
    'Draw a bold bow ring left, straight horizontal shaft, and two notched teeth right.',
    'Label the shaft with the single unlock that removes friction.'
  ], `
    <circle cx="64" cy="65" r="24" fill="#FEF3C7" stroke="#141836" stroke-width="3"/>
    <circle cx="64" cy="65" r="9" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <line x1="88" y1="65" x2="216" y2="65" stroke="#141836" stroke-width="5" stroke-linecap="round"/>
    <line x1="184" y1="65" x2="184" y2="86" stroke="#141836" stroke-width="4.5" stroke-linecap="round"/>
    <line x1="204" y1="65" x2="204" y2="82" stroke="#141836" stroke-width="4.5" stroke-linecap="round"/>
    <text x="150" y="50" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#B45309">THE UNLOCK</text>
  `),
  mk('sb-anchor-weight', 'editorial', '185. Heavy Drag Anchor', 'Tech Debt, Legacy Constraints, Sunk Costs', [
    'Draw a vertical shank with top ring, crossbar, and a wide smiling curved fluke at bottom.',
    'Tint cool dark slate and label the drag dragging velocity down.'
  ], `
    <circle cx="130" cy="24" r="9" fill="none" stroke="#141836" stroke-width="3"/>
    <line x1="130" y1="33" x2="130" y2="104" stroke="#141836" stroke-width="3.6"/>
    <line x1="104" y1="48" x2="156" y2="48" stroke="#141836" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M 86 78 A 44 32 0 0 0 174 78" fill="none" stroke="#141836" stroke-width="4" stroke-linecap="round"/>
    <polygon points="80,74 92,74 84,88" fill="#141836"/><polygon points="180,74 168,74 176,88" fill="#141836"/>
    <text x="196" y="64" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">TECH DEBT</text>
  `),
  mk('sb-paper-plane', 'editorial', '186. Paper Plane Launch Trail', 'Shipping Fast, MVPs, Outreach', [
    'Draw two crisp nested acute triangles angling up-right.',
    'Shade the inner fold Cool Grey and trail a playful looped dashed flight path behind.'
  ], `
    <path d="M 24 98 Q 66 106 86 76" fill="none" stroke="#0EA5E9" stroke-width="2.2" stroke-dasharray="4 4"/>
    <polygon points="92,66 218,22 146,98" fill="#E0F2FE" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
    <polygon points="124,78 218,22 146,98" fill="#CBD5E1" stroke="#141836" stroke-width="1.8" stroke-linejoin="round"/>
    <text x="192" y="106" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#0369A1">SHIP v1</text>
  `),
  mk('sb-umbrella-cover', 'editorial', '187. Umbrella Risk Shelter', 'Hedging, Safe Harbors, Insurance, Fallbacks', [
    'Draw a scalloped dome canopy with a curved J-hook handle below.',
    'Add 4 tiny Magenta rain streaks bouncing off the roof while the idea stays dry inside.'
  ], `
    <g stroke="#EC4899" stroke-width="2" stroke-linecap="round"><line x1="68" y1="14" x2="62" y2="26"/><line x1="112" y1="10" x2="106" y2="22"/><line x1="158" y1="12" x2="152" y2="24"/><line x1="196" y1="18" x2="190" y2="30"/></g>
    <path d="M 62 66 A 68 42 0 0 1 198 66 Q 176 58 154 66 Q 130 58 106 66 Q 84 58 62 66 Z" fill="#E0F2FE" stroke="#141836" stroke-width="2.4"/>
    <path d="M 130 62 V 104 A 10 10 0 0 1 110 104" fill="none" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
    <text x="168" y="96" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">SAFE HARBOR</text>
  `),
  mk('sb-battery-drain', 'editorial', '188. Energy Drain vs. Recharge Plug', 'Burnout Audits, Work Audits, Habit Design', [
    'Draw two side-by-side batteries: Left red 1-bar drain, Right green full charge.',
    'List what drains energy vs. what restores it underneath.'
  ], `
    <rect x="34" y="34" width="76" height="44" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <rect x="110" y="48" width="6" height="16" rx="2" fill="#141836"/>
    <rect x="42" y="42" width="14" height="28" rx="2" fill="#EC4899"/>
    <text x="72" y="100" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">DRAIN</text>
    <rect x="148" y="34" width="76" height="44" rx="6" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <rect x="224" y="48" width="6" height="16" rx="2" fill="#141836"/>
    <rect x="156" y="42" width="60" height="28" rx="2" fill="#10B981"/>
    <text x="186" y="100" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">RECHARGE</text>
  `),
  mk('sb-coffee-break', 'editorial', '189. Steaming Studio Coffee Mug', 'Break Markers, Casual Syncs, Morning Warmup', [
    'Draw a simple cylinder mug with a bold D-handle and two rising curly steam wisps.',
    'Friendly visual bookmark for informal 1-on-1 catchups.'
  ], `
    <path d="M 102 36 Q 96 22 106 14 M 126 36 Q 120 22 130 14" fill="none" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M 86 44 H 148 V 92 A 14 14 0 0 1 134 106 H 100 A 14 14 0 0 1 86 92 Z" fill="#FFFDF5" stroke="#141836" stroke-width="2.4"/>
    <path d="M 148 54 C 172 54, 172 86, 148 86" fill="none" stroke="#141836" stroke-width="4.5" stroke-linecap="round"/>
    <rect x="96" y="64" width="42" height="18" rx="4" fill="#FEF3C7"/>
    <text x="117" y="77" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="700">1:1</text>
  `),
  mk('sb-scissors-trim', 'editorial', '190. Scope-Trimming Scissors', 'Cutting Features, Editing Prose, Saying No', [
    'Draw open scissors snipping straight through a bloated feature bar.',
    'Leave the trimmed piece fading pale grey on the right.'
  ], `
    <rect x="26" y="54" width="102" height="26" rx="5" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
    <text x="77" y="71" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">CORE v1</text>
    <rect x="148" y="54" width="84" height="26" rx="5" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="190" y="71" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#94A3B8">FLUFF</text>
    <line x1="138" y1="24" x2="138" y2="106" stroke="#BE185D" stroke-width="2.4" stroke-dasharray="4 4"/>
    <text x="138" y="18" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">✂ CUT</text>
  `),
  mk('sb-telescope', 'editorial', '191. Tripod Vision Telescope', 'Long-Term Strategy, 3-Year Bets, Foresight', [
    'Draw 3 nested telescoping tubes angling up-right on a tiny 2-leg tripod.',
    'Add a small star cluster ahead in the sky.'
  ], `
    <line x1="112" y1="74" x2="88" y2="112" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
    <line x1="112" y1="74" x2="136" y2="112" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
    <g transform="rotate(-24 114 64)">
      <rect x="54" y="54" width="38" height="16" rx="3" fill="#CBD5E1" stroke="#141836" stroke-width="2"/>
      <rect x="92" y="50" width="52" height="24" rx="4" fill="#E0F2FE" stroke="#141836" stroke-width="2.2"/>
      <rect x="144" y="48" width="12" height="28" rx="2" fill="#0EA5E9" stroke="#141836" stroke-width="2"/>
    </g>
    <polygon points="204,22 208,32 218,32 210,38 213,48 204,42 195,48 198,38 190,32 200,32" fill="#F59E0B"/>
  `),
  mk('sb-bullseye', 'editorial', '192. 3-Ring Dartboard Bullseye', 'Sharp Positioning, Focus, Precision Goals', [
    'Draw 3 concentric circles alternating white and pale Cyan with a solid Magenta bullseye.',
    'Stick one crisp diagonal arrow dart dead-center.'
  ], `
    <circle cx="116" cy="65" r="44" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <circle cx="116" cy="65" r="28" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
    <circle cx="116" cy="65" r="12" fill="#EC4899" stroke="#141836" stroke-width="2"/>
    <line x1="188" y1="22" x2="120" y2="62" stroke="#141836" stroke-width="3.2" stroke-linecap="round"/>
    <polygon points="188,22 174,18 182,34" fill="#10B981" stroke="#141836" stroke-width="1.4"/>
  `),
  mk('sb-seed-tree', 'editorial', '193. Tiny Acorn → Canopy Contrast', 'Compounding Habits, Early Bets, Small Starts', [
    'Draw one tiny seed/acorn on the left pointing via a simple arrow to a full Mint tree canopy right.',
    'Quiet visual reminder that tiny inputs compound.'
  ], `
    <ellipse cx="54" cy="76" rx="12" ry="16" fill="#FEF3C7" stroke="#141836" stroke-width="2.2"/>
    <path d="M 41 68 Q 54 54 67 68 Z" fill="#B45309" stroke="#141836" stroke-width="2"/>
    <line x1="82" y1="74" x2="128" y2="74" stroke="#141836" stroke-width="2.6"/>
    <polygon points="124,68 136,74 124,80" fill="#141836"/>
    <rect x="180" y="68" width="12" height="36" fill="#B45309" stroke="#141836" stroke-width="2"/>
    <circle cx="186" cy="48" r="28" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>
    <text x="54" y="110" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8">10m/DAY</text>
    <text x="186" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">1 YEAR</text>
  `),
  mk('sb-iceberg-mini', 'editorial', '194. 10% / 90% Waterline Iceberg', 'Hidden Complexity, Tech Debt, Root Causes', [
    'Pull one wavy Cyan waterline across the upper third.',
    'Draw a tiny neat triangle tip above and a massive jagged polygon lurking underneath.'
  ], `
    <line x1="20" y1="48" x2="240" y2="48" stroke="#0EA5E9" stroke-width="2.6"/>
    <polygon points="130,18 158,48 102,48" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
    <polygon points="102,48 158,48 186,84 152,114 96,112 72,82" fill="#E0F2FE" stroke="#0369A1" stroke-width="2.2"/>
    <text x="196" y="38" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">10% UI</text>
    <text x="130" y="86" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">90% EDGE CASES</text>
  `),
  mk('sb-prism-split', 'editorial', '195. Glass Prism Idea Refractor', 'Breaking One Topic Into 3 Dimensions', [
    'Draw one crisp equilateral triangle with one single dark input ray hitting its left face.',
    'Fan 3 colored beams (Cyan, Mint, Magenta) emerging cleanly out the right face.'
  ], `
    <line x1="22" y1="74" x2="96" y2="66" stroke="#141836" stroke-width="3.6"/>
    <polygon points="122,22 162,98 82,98" fill="#FFFDF5" stroke="#141836" stroke-width="2.6" stroke-linejoin="round"/>
    <line x1="142" y1="58" x2="232" y2="36" stroke="#0EA5E9" stroke-width="3.2"/>
    <line x1="146" y1="68" x2="234" y2="68" stroke="#10B981" stroke-width="3.2"/>
    <line x1="150" y1="78" x2="232" y2="100" stroke="#EC4899" stroke-width="3.2"/>
  `),
  mk('sb-brick-gap', 'editorial', '196. Missing Keystone Brick', 'Critical Dependency, Single Point of Failure', [
    'Draw a clean masonry arch missing its single tapered center keystone.',
    'Hover the Cyan keystone just above the gap with a downward arrow.'
  ], `
    <path d="M 38 106 A 92 66 0 0 1 108 44 L 112 68 A 66 44 0 0 0 64 106 Z" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
    <path d="M 222 106 A 92 66 0 0 0 152 44 L 148 68 A 66 44 0 0 1 196 106 Z" fill="#EEF2FC" stroke="#141836" stroke-width="2"/>
    <polygon points="114,18 146,18 140,44 120,44" fill="#EC4899" stroke="#141836" stroke-width="2.2"/>
    <text x="130" y="96" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">KEYSTONE</text>
  `),
  mk('sb-matchstick-spark', 'editorial', '197. Lit Matchstick Catalyst', 'Trigger Events, Launch Catalysts, First Spark', [
    'Draw a slender angled matchstick tipped by a teardrop Amber/Magenta flame.',
    'Great 3-second metaphor for the trigger that starts a chain reaction.'
  ], `
    <line x1="48" y1="104" x2="146" y2="54" stroke="#B45309" stroke-width="6" stroke-linecap="round"/>
    <circle cx="150" cy="52" r="7" fill="#BE185D"/>
    <path d="M 150 48 C 142 28, 162 14, 174 26 C 184 36, 168 54, 150 48 Z" fill="#F59E0B" stroke="#141836" stroke-width="2"/>
    <text x="188" y="88" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#B45309">CATALYST</text>
  `),
  mk('sb-pencil-ruler', 'editorial', '198. Crossed Pencil & Scale Ruler', 'Craft Notes, Design Reviews, Studio Benchmarks', [
    'Cross one notched ruler bar diagonally behind a sharpened yellow/magenta pencil.',
    'Classic emblem for editorial craft and measurement.'
  ], `
    <g transform="rotate(-35 130 65)">
      <rect x="64" y="54" width="132" height="22" rx="3" fill="#E0F2FE" stroke="#141836" stroke-width="2"/>
      ${[80, 98, 116, 134, 152, 170].map(x => `<line x1="${x}" y1="54" x2="${x}" y2="63" stroke="#141836" stroke-width="1.6"/>`).join('')}
    </g>
    <g transform="rotate(35 130 65)">
      <rect x="66" y="56" width="104" height="18" fill="#FEF3C7" stroke="#141836" stroke-width="2"/>
      <polygon points="170,56 192,65 170,74" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <polygon points="184,62 192,65 184,68" fill="#141836"/>
      <rect x="54" y="56" width="12" height="18" rx="2" fill="#EC4899" stroke="#141836" stroke-width="2"/>
    </g>
  `),
  mk('sb-paper-boat', 'editorial', '199. Origami Paper Boat on Ripples', 'Shipping Amid Uncertainty, Navigation, Solo Bets', [
    'Draw a flat trapezoid hull topped by one centered triangle sail.',
    'Add two calm Cyan ripple waves underneath.'
  ], `
    <polygon points="130,22 158,68 102,68" fill="#FFF" stroke="#141836" stroke-width="2.2" stroke-linejoin="round"/>
    <polygon points="62,68 198,68 176,94 84,94" fill="#E0F2FE" stroke="#141836" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M 38 106 Q 68 98 98 106 T 158 106 T 218 106" fill="none" stroke="#0EA5E9" stroke-width="2.4" stroke-linecap="round"/>
  `),
  mk('sb-notebook-eye', 'editorial', '200. Peeking Margin Mascot Eyes', 'Adding Warmth, Margin Reminders, Personality', [
    'Draw a horizontal shelf line and sit two cheeky half-circle eyes peering over the rim.',
    'Shift both pupils toward the key bullet right beside it so readers follow their gaze!'
  ], `
    <line x1="28" y1="82" x2="146" y2="82" stroke="#141836" stroke-width="3" stroke-linecap="round"/>
    <path d="M 48 82 A 18 18 0 0 1 84 82 Z" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
    <path d="M 92 82 A 18 18 0 0 1 128 82 Z" fill="#FFF" stroke="#141836" stroke-width="2.4"/>
    <circle cx="72" cy="75" r="5" fill="#141836"/><circle cx="116" cy="75" r="5" fill="#141836"/>
    <text x="158" y="68" font-family="Patrick Hand, cursive" font-size="15.5" fill="#BE185D">← Look right</text>
    <text x="158" y="88" font-family="Patrick Hand, cursive" font-size="15.5" fill="#141836">here first!</text>
  `)
];
