/* =========================================================================
   APPENDIX F: VISUAL STUDY NOTES FOR ACCOUNTING, FINANCE & TAX
   6 Master Study Spread Templates + Live T-Account & VAT Journal Visualizer
   ========================================================================= */

export const TAX_STUDY_TEMPLATES = [
  {
    id: 'taccount',
    short: '1. T-Account Flow',
    name: '1. Color-Coded T-Account & Double-Entry Bridge',
    tag: 'Financial Accounting • Bookkeeping',
    trap: 'Never mix Debit & Credit sides visually: always keep SOLL/DR Left (Cyan) and HABEN/CR Right (Magenta), and number matching pairs ①/② so every cent visibly balances!',
    recipe: [
      'Write the 3-line Journal Entry box at top with tabular right-aligned Euro columns (1 digit per dot-grid cell).',
      'Draw crisp T-accounts below with bold Indigo crossbars; tint DR headers Cyan and CR headers Magenta.',
      'Connect the credit leg to its offsetting debit legs with light curved dashed arrows carrying circled step badges (①, ②).'
    ],
    svg: `<svg viewBox="0 0 680 330">
      <!-- Top Journal Entry Card -->
      <rect x="28" y="14" width="624" height="84" rx="8" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
      <rect x="28" y="14" width="624" height="22" rx="6" fill="#EEF2FC" stroke="#141836" stroke-width="1.6"/>
      <text x="42" y="29" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">JOURNAL ENTRY #01 // B2C SAAS INVOICE €1,000 NET + 19% USt</text>
      <text x="530" y="29" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">DR / SOLL</text>
      <text x="634" y="29" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">CR / HABEN</text>
      <g font-family="IBM Plex Mono, monospace" font-size="11">
        <text x="44" y="54" font-weight="700" fill="#0369A1">① Bank / Accounts Receivable (Asset ↑)</text>
        <text x="530" y="54" text-anchor="end" font-weight="700" fill="#0369A1">1,190.00</text>
        <text x="66" y="72" fill="#141836">② SaaS Revenue (Income ↑)</text>
        <text x="634" y="72" text-anchor="end" font-weight="700" fill="#047857">1,000.00</text>
        <text x="66" y="89" fill="#BE185D">③ Output VAT Payable / USt 19% (Liab ↑)</text>
        <text x="634" y="89" text-anchor="end" font-weight="700" fill="#BE185D">190.00</text>
      </g>
      <!-- Transfer Arcs -->
      <path d="M 134 114 C 134 102, 340 102, 340 114" fill="none" stroke="#0EA5E9" stroke-width="1.8" stroke-dasharray="4 3"/>
      <path d="M 134 114 C 134 98, 546 98, 546 114" fill="none" stroke="#EC4899" stroke-width="1.8" stroke-dasharray="4 3"/>
      <!-- 3 T-Accounts -->
      <!-- T1: Bank (Asset) -->
      <g transform="translate(32, 126)">
        <rect x="0" y="0" width="192" height="28" rx="4" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="1.8"/>
        <text x="96" y="18" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0369A1">1200 BANK (ASSET)</text>
        <line x1="0" y1="36" x2="192" y2="36" stroke="#141836" stroke-width="2.8"/>
        <line x1="96" y1="36" x2="96" y2="164" stroke="#141836" stroke-width="2.4"/>
        <text x="48" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">DR (+)</text>
        <text x="144" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#94A3B8">CR (-)</text>
        <text x="86" y="82" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#141836">① 1,190</text>
        <line x1="8" y1="138" x2="88" y2="138" stroke="#0EA5E9" stroke-width="1.6"/>
        <text x="86" y="156" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#0369A1">Σ 1,190</text>
      </g>
      <!-- T2: Revenue (Equity/P&L) -->
      <g transform="translate(244, 126)">
        <rect x="0" y="0" width="192" height="28" rx="4" fill="#D1FAE5" stroke="#047857" stroke-width="1.8"/>
        <text x="96" y="18" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">8400 REVENUE (P&amp;L)</text>
        <line x1="0" y1="36" x2="192" y2="36" stroke="#141836" stroke-width="2.8"/>
        <line x1="96" y1="36" x2="96" y2="164" stroke="#141836" stroke-width="2.4"/>
        <text x="48" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#94A3B8">DR (-)</text>
        <text x="144" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">CR (+)</text>
        <text x="184" y="82" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#141836">② 1,000</text>
        <line x1="104" y1="138" x2="184" y2="138" stroke="#047857" stroke-width="1.6"/>
        <text x="184" y="156" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#047857">Σ 1,000</text>
      </g>
      <!-- T3: Output VAT (Liability) -->
      <g transform="translate(456, 126)">
        <rect x="0" y="0" width="192" height="28" rx="4" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.8"/>
        <text x="96" y="18" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">1776 USt 19% (LIAB)</text>
        <line x1="0" y1="36" x2="192" y2="36" stroke="#141836" stroke-width="2.8"/>
        <line x1="96" y1="36" x2="96" y2="164" stroke="#141836" stroke-width="2.4"/>
        <text x="48" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#94A3B8">DR (-)</text>
        <text x="144" y="52" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">CR (+)</text>
        <text x="184" y="82" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700" fill="#BE185D">③ 190</text>
        <line x1="104" y1="138" x2="184" y2="138" stroke="#EC4899" stroke-width="1.6"/>
        <text x="184" y="156" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#BE185D">Σ 190</text>
      </g>
      <!-- Bottom Balance Check Pill -->
      <rect x="210" y="300" width="260" height="22" rx="11" fill="#141836"/>
      <text x="340" y="315" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#10B981">CHECK: DR €1,190 = CR €1,000 + €190 ✓</text>
    </svg>`
  },
  {
    id: 'three-stmt',
    short: '2. 3-Statement Map',
    name: '2. The 3-Statement Visual Linker (P&L → Balance Sheet → Cash)',
    tag: 'Corporate Accounting • IFRS / HGB',
    trap: 'Students memorize statements separately—drawing the 3 connecting pipes (Net Income → Retained Earnings, Non-Cash D&A → Cash Flow, Ending Cash → Assets) locks the whole machine in memory!',
    recipe: [
      'Divide your A5 landscape page into 3 equal vertical columns (Income Statement | Balance Sheet | Cash Flow).',
      'Draw bold color-coded "plumbing pipes" connecting Net Income (Mint) and Ending Cash (Cyan) across the gutters.',
      'Highlight the Accounting Equation (Assets = Liabilities + Equity) as two equal-height stacked bars in the center column!'
    ],
    svg: `<svg viewBox="0 0 680 330">
      <!-- Column 1: Income Statement (P&L) -->
      <rect x="20" y="20" width="184" height="252" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <rect x="20" y="20" width="184" height="28" rx="6" fill="#E0F2FE" stroke="#141836" stroke-width="1.8"/>
      <text x="112" y="38" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0369A1">1. P&amp;L (GuV)</text>
      <g font-family="IBM Plex Mono, monospace" font-size="10.5" fill="#141836">
        <text x="32" y="72">Revenue</text><text x="192" y="72" text-anchor="end">500</text>
        <text x="32" y="96">OpEx</text><text x="192" y="96" text-anchor="end">(320)</text>
        <text x="32" y="120" fill="#B45309">Deprec. (D&amp;A)</text><text x="192" y="120" text-anchor="end" fill="#B45309">(30)</text>
        <text x="32" y="144" fill="#BE185D">Tax (30%)</text><text x="192" y="144" text-anchor="end" fill="#BE185D">(45)</text>
        <line x1="30" y1="158" x2="194" y2="158" stroke="#141836" stroke-width="1.8"/>
      </g>
      <rect x="30" y="168" width="164" height="32" rx="5" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
      <text x="40" y="188" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">NET INCOME</text>
      <text x="184" y="188" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#047857">105</text>
      <text x="112" y="232" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#525B7A">"Movie" over 1 year</text>

      <!-- Column 2: Balance Sheet -->
      <rect x="248" y="20" width="184" height="252" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <rect x="248" y="20" width="184" height="28" rx="6" fill="#EDE9FE" stroke="#141836" stroke-width="1.8"/>
      <text x="340" y="38" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#6D28D9">2. BALANCE SHEET</text>
      <!-- Visual Stacked Assets = Liab + Equity -->
      <rect x="260" y="64" width="74" height="58" rx="4" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
      <text x="297" y="88" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">CASH</text>
      <text x="297" y="106" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700">135</text>
      <rect x="260" y="128" width="74" height="86" rx="4" fill="#EEF2FC" stroke="#141836" stroke-width="1.8"/>
      <text x="297" y="166" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">PP&amp;E</text>
      <text x="297" y="182" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5">(-30 D&amp;A)</text>

      <rect x="346" y="64" width="74" height="74" rx="4" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.8"/>
      <text x="383" y="98" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">LIAB.</text>
      <text x="383" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9">Debt/Tax</text>
      <rect x="346" y="144" width="74" height="70" rx="4" fill="#D1FAE5" stroke="#047857" stroke-width="2"/>
      <text x="383" y="174" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">EQUITY</text>
      <text x="383" y="191" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">+105 RE</text>
      <text x="340" y="242" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#525B7A">"Snapshot" on 31.12.</text>

      <!-- Column 3: Cash Flow Statement -->
      <rect x="476" y="20" width="184" height="252" rx="8" fill="#FFF" stroke="#141836" stroke-width="2.2"/>
      <rect x="476" y="20" width="184" height="28" rx="6" fill="#FEF3C7" stroke="#141836" stroke-width="1.8"/>
      <text x="568" y="38" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#B45309">3. CASH FLOW</text>
      <g font-family="IBM Plex Mono, monospace" font-size="10.5" fill="#141836">
        <text x="488" y="74" fill="#047857" font-weight="700">Net Income</text><text x="648" y="74" text-anchor="end" fill="#047857" font-weight="700">105</text>
        <text x="488" y="98" fill="#B45309">+ Add-back D&amp;A</text><text x="648" y="98" text-anchor="end" fill="#B45309">+30</text>
        <text x="488" y="122">± Working Cap.</text><text x="648" y="122" text-anchor="end">0</text>
        <line x1="486" y1="138" x2="650" y2="138" stroke="#141836" stroke-width="1.8"/>
      </g>
      <rect x="486" y="148" width="164" height="34" rx="5" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2"/>
      <text x="496" y="169" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">END CASH</text>
      <text x="640" y="169" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#0369A1">135</text>
      <text x="568" y="232" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="13.5" fill="#525B7A">"Bank reality" check</text>

      <!-- Connecting Plumbing Arrows -->
      <path d="M 194 184 H 346" fill="none" stroke="#047857" stroke-width="2.6" stroke-dasharray="5 3"/>
      <polygon points="344,179 354,184 344,189" fill="#047857"/>
      <path d="M 112 200 V 296 H 568 V 272" fill="none" stroke="#047857" stroke-width="2.4"/>
      <text x="340" y="291" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">PIPE A: NET INCOME (105) FEEDS BOTH EQUITY &amp; OPERATING CASH →</text>
      <path d="M 568 182 V 314 H 297 V 216" fill="none" stroke="#0EA5E9" stroke-width="2.4" stroke-dasharray="6 3"/>
      <text x="436" y="326" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#0369A1">← PIPE B: ENDING CASH (135) CLOSES ASSET TOP-LEFT</text>
    </svg>`
  },
  {
    id: 'vat-tree',
    short: '3. EU VAT Statute Tree',
    name: '3. Binary Tax Statute Decision Tree (EU Cross-Border VAT)',
    tag: 'EU VAT • UStG § 3a & § 13b',
    trap: 'In tax exams, never write long prose essays on conditions—draw a binary YES (Mint) / NO (Magenta) diamond gate so every statutory test takes 2 seconds to verify!',
    recipe: [
      'Put the triggering fact pattern in a top Cyan pill ("Cross-Border EU Digital Service Supply").',
      'Draw crisp diamond decision gates strictly centered on dot-grid columns—branch YES right (Mint) and NO down (Magenta).',
      'End every path in a heavy-bordered terminal Stamp Box carrying the exact § statute citation & invoice wording!'
    ],
    svg: `<svg viewBox="0 0 680 330">
      <!-- Start Node -->
      <rect x="200" y="14" width="280" height="36" rx="18" fill="#141836"/>
      <text x="340" y="36" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#00D4FF">START: EU CROSS-BORDER SERVICE</text>
      <line x1="340" y1="50" x2="340" y2="76" stroke="#141836" stroke-width="2.4"/>
      <!-- Gate 1 Diamond -->
      <polygon points="340,76 436,112 340,148 244,112" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.4"/>
      <text x="340" y="109" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">CUSTOMER B2B</text>
      <text x="340" y="123" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#141836">+ VALID VAT ID?</text>
      <!-- YES Right -> Reverse Charge -->
      <line x1="436" y1="112" x2="508" y2="112" stroke="#047857" stroke-width="2.6"/>
      <text x="470" y="104" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">YES ✓</text>
      <rect x="508" y="76" width="152" height="74" rx="8" fill="#D1FAE5" stroke="#047857" stroke-width="2.4"/>
      <text x="584" y="99" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">REVERSE CHARGE</text>
      <text x="584" y="117" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">0% VAT on invoice</text>
      <text x="584" y="137" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#047857">§ 3a(2) / § 13b UStG</text>
      <!-- NO Down -> Gate 2 -->
      <line x1="340" y1="148" x2="340" y2="184" stroke="#BE185D" stroke-width="2.6"/>
      <text x="364" y="170" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">NO (B2C)</text>
      <!-- Gate 2 Diamond -->
      <polygon points="340,184 446,222 340,260 234,222" fill="#FEF3C7" stroke="#B45309" stroke-width="2.4"/>
      <text x="340" y="218" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">EU B2C SALES</text>
      <text x="340" y="232" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">&gt; €10,000 / YR?</text>
      <!-- Left NO -> Home Country VAT -->
      <line x1="234" y1="222" x2="176" y2="222" stroke="#0EA5E9" stroke-width="2.6"/>
      <text x="206" y="214" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#0369A1">NO</text>
      <rect x="20" y="186" width="156" height="74" rx="8" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.4"/>
      <text x="98" y="209" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0369A1">HOME RATE (DE)</text>
      <text x="98" y="227" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">Charge 19% German VAT</text>
      <text x="98" y="246" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#0369A1">§ 3a(5) S.3 UStG</text>
      <!-- Right YES -> EU OSS -->
      <line x1="446" y1="222" x2="508" y2="222" stroke="#EC4899" stroke-width="2.6"/>
      <text x="476" y="214" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">YES !</text>
      <rect x="508" y="186" width="152" height="74" rx="8" fill="#FCE7F3" stroke="#EC4899" stroke-width="2.4"/>
      <text x="584" y="209" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">DESTINATION + OSS</text>
      <text x="584" y="227" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="14" fill="#141836">Buyer Country VAT Rate</text>
      <text x="584" y="246" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700" fill="#BE185D">File Quarterly OSS</text>
      <!-- Footer Evidence Reminder -->
      <rect x="130" y="284" width="420" height="32" rx="6" fill="#FFFDF5" stroke="#141836" stroke-width="1.8" stroke-dasharray="4 3"/>
      <text x="340" y="304" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#141836">⚠️ AUDIT RULE: Archive VIES Check (B2B) or 2 Location Proofs (B2C) for 10 yrs!</text>
    </svg>`
  },
  {
    id: 'tax-bridge',
    short: '4. Tax Bridge Waterfall',
    name: '4. Book-to-Tax Reconciliation Waterfall Bridge',
    tag: 'Corporate Tax • KStG / IAS 12',
    trap: 'Never mix Permanent Differences (+ Add-backs) with Temporary Differences (Deferred Tax)—color Permanent Magenta and Temporary Amber so IAS 12 / § 274 HGB becomes crystal clear!',
    recipe: [
      'Draw a baseline axis across the bottom third of your spread with 5 evenly spaced column bars.',
      'Start with a solid Cyan column for IFRS/HGB Accounting Profit, then float floating +/- step blocks upward/downward.',
      'End with a solid Violet column for Taxable Income and multiply cleanly beside the right margin (× 30% Tax Rate).'
    ],
    svg: `<svg viewBox="0 0 680 330">
      <line x1="36" y1="264" x2="644" y2="264" stroke="#141836" stroke-width="2.4"/>
      <!-- Bar 1: Book Profit 200 -->
      <rect x="52" y="134" width="84" height="130" rx="4" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2.2"/>
      <text x="94" y="124" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#0369A1">€200k</text>
      <text x="94" y="284" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">BOOK PROFIT</text>
      <text x="94" y="298" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5" fill="#525B7A">(HGB / IFRS)</text>
      <!-- Connector 1->2 -->
      <line x1="136" y1="134" x2="176" y2="134" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="3 3"/>
      <!-- Bar 2: + Non-Deductible (+35) -->
      <rect x="176" y="102" width="84" height="32" rx="4" fill="#FCE7F3" stroke="#EC4899" stroke-width="2.2"/>
      <text x="218" y="92" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#BE185D">+€35k</text>
      <text x="218" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#BE185D">PERMANENT</text>
      <text x="218" y="284" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#BE185D">+ ADD-BACKS</text>
      <text x="218" y="298" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5" fill="#525B7A">30% Meals / Fines</text>
      <!-- Connector 2->3 -->
      <line x1="260" y1="102" x2="300" y2="102" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="3 3"/>
      <!-- Bar 3: - Tax-Exempt (-55) -->
      <rect x="300" y="102" width="84" height="48" rx="4" fill="#D1FAE5" stroke="#047857" stroke-width="2.2"/>
      <text x="342" y="92" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#047857">-€55k</text>
      <text x="342" y="130" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700" fill="#047857">§ 8b KStG</text>
      <text x="342" y="284" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#047857">- EXEMPT</text>
      <text x="342" y="298" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5" fill="#525B7A">95% Div. Relief</text>
      <!-- Connector 3->4 -->
      <line x1="384" y1="150" x2="424" y2="150" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="3 3"/>
      <!-- Bar 4: + Timing Diff (+20) -->
      <rect x="424" y="130" width="84" height="20" rx="4" fill="#FEF3C7" stroke="#B45309" stroke-width="2.2"/>
      <text x="466" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#B45309">+€20k</text>
      <text x="466" y="284" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#B45309">± TIMING</text>
      <text x="466" y="298" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5" fill="#525B7A">→ Deferred Tax!</text>
      <!-- Connector 4->5 -->
      <line x1="508" y1="130" x2="548" y2="130" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="3 3"/>
      <!-- Bar 5: Taxable Income = 200 -->
      <rect x="548" y="130" width="84" height="134" rx="4" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.6"/>
      <text x="590" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#6D28D9">€200k</text>
      <text x="590" y="198" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#6D28D9">× 30%</text>
      <text x="590" y="216" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#141836">= €60k</text>
      <text x="590" y="284" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#6D28D9">TAX BASE</text>
      <text x="590" y="298" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="12.5" fill="#525B7A">Current Tax Due</text>
      <!-- Top Callout -->
      <rect x="172" y="22" width="336" height="32" rx="16" fill="#141836"/>
      <text x="340" y="42" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#FDE68A">BOOK-TO-TAX BRIDGE: PERMANENT VS. DEFERRED</text>
    </svg>`
  },
  {
    id: 'accrual',
    short: '5. Cut-Off & Accruals',
    name: '5. Year-End Cut-Off & Accrual / Prepayment Timeline',
    tag: 'Period Matching • RAP / IAS 1',
    trap: 'The #1 accounting exam blunder is confusing Accrued Expenses (cash paid LATER) with Prepaid Expenses (cash paid EARLY)—a single red vertical 31.12. wall makes it impossible to mix up!',
    recipe: [
      'Draw one heavy vertical Magenta cut-off wall down the center of your dot grid labeled "31.12. BALANCE SHEET DATE".',
      'Draw horizontal duration bars spanning across the wall: shade Year 1 (Cyan = Expense NOW) and Year 2 (Amber = Defer to Next Year).',
      'Drop a bold Euro Coin icon exactly where cash actually leaves the bank—Left of wall = Prepaid (ARAP), Right of wall = Accrual!'
    ],
    svg: `<svg viewBox="0 0 680 330">
      <!-- Year Background Zones -->
      <rect x="28" y="44" width="312" height="248" fill="#E0F2FE" fill-opacity="0.22"/>
      <rect x="340" y="44" width="312" height="248" fill="#FEF3C7" fill-opacity="0.24"/>
      <text x="184" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#0369A1">YEAR 2026 (CURRENT P&amp;L)</text>
      <text x="496" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" fill="#B45309">YEAR 2027 (NEXT PERIOD)</text>
      <!-- Vertical 31.12 Cut-Off Wall -->
      <line x1="340" y1="24" x2="340" y2="306" stroke="#EC4899" stroke-width="3.6" stroke-dasharray="8 4"/>
      <rect x="272" y="294" width="136" height="24" rx="12" fill="#BE185D"/>
      <text x="340" y="310" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#FFF">31.12. CUT-OFF WALL</text>

      <!-- Case 1: Prepaid Expense (ARAP) -->
      <text x="44" y="76" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">CASE A // PREPAID INSURANCE (ARAP): Paid €1,200 on 1 Oct 2026 for 12 mos</text>
      <rect x="220" y="92" width="120" height="36" rx="4" fill="#0EA5E9" fill-opacity="0.35" stroke="#0369A1" stroke-width="2"/>
      <text x="280" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">3m = €300 EXP</text>
      <rect x="340" y="92" width="260" height="36" rx="4" fill="#F59E0B" fill-opacity="0.35" stroke="#B45309" stroke-width="2"/>
      <text x="470" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#B45309">9m = €900 PREPAID ASSET (DR ARAP)</text>
      <!-- Cash Coin Left -->
      <circle cx="220" cy="146" r="11" fill="#141836"/>
      <text x="220" y="150" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#00D4FF">€</text>
      <text x="238" y="150" font-family="Patrick Hand, cursive" font-size="13.5" fill="#141836">Cash paid EARLY (01.10.26)</text>

      <!-- Case 2: Accrued Expense -->
      <line x1="40" y1="176" x2="640" y2="176" stroke="#CBD5E1" stroke-width="1.4"/>
      <text x="44" y="202" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#141836">CASE B // ACCRUED AUDIT FEE: 2026 Audit Performed, Invoice Paid Feb 2027</text>
      <rect x="140" y="218" width="200" height="36" rx="4" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/>
      <text x="240" y="240" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">EXPENSE IN 2026 + CR ACCRUAL LIAB</text>
      <line x1="340" y1="236" x2="450" y2="236" stroke="#BE185D" stroke-width="2.4" stroke-dasharray="5 3"/>
      <!-- Cash Coin Right -->
      <circle cx="458" cy="236" r="12" fill="#BE185D"/>
      <text x="458" y="240" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#FFF">€</text>
      <text x="478" y="240" font-family="Patrick Hand, cursive" font-size="13.5" fill="#BE185D">Cash paid LATER (15.02.27)</text>
    </svg>`
  },
  {
    id: 'statute-card',
    short: '6. 4-Box Statute Card',
    name: '6. The "4-Box Tax Statute Anatomy" A5 Study Template',
    tag: 'Exam Prep • TaxWiki Notes',
    trap: 'Never copy statutory prose verbatim! Force every tax law section into 4 tight quadrants (Trigger • Rule • Math • Trap) on half an A5 page—instant Anki & open-book cheat sheet!',
    recipe: [
      'Draw one top Indigo Header Banner with the exact § Statute ID + 3-word nickname.',
      'Split the body cleanly into a 2×2 bento grid: [1. WHEN IT TRIGGERS] [2. LEGAL RULE] / [3. WORKED € EXAMPLE] [4. EXAM TRAP & CASE].',
      'Tag the top-right corner with a color-coded Edge Tab (Magenta = VAT, Cyan = Corp Tax, Mint = Treaties).'
    ],
    svg: `<svg viewBox="0 0 680 330">
      <rect x="24" y="14" width="632" height="302" rx="10" fill="#FFFDF5" stroke="#141836" stroke-width="2.6"/>
      <!-- Header Banner -->
      <rect x="24" y="14" width="632" height="44" rx="8" fill="#141836"/>
      <text x="44" y="42" font-family="IBM Plex Mono, monospace" font-size="13.5" font-weight="700" fill="#00D4FF">§ 13b UStG // REVERSE CHARGE (STEUERSCHULDNERSCHAFT)</text>
      <rect x="554" y="24" width="88" height="24" rx="12" fill="#EC4899"/>
      <text x="598" y="40" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#FFF">VAT • CORE</text>
      <!-- Quadrant 1: Trigger -->
      <rect x="40" y="72" width="292" height="106" rx="8" fill="#E0F2FE" fill-opacity="0.45" stroke="#0EA5E9" stroke-width="2"/>
      <text x="54" y="92" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#0369A1">1. TRIGGER CONDITIONS (CHECK ALL 3)</text>
      <g font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">
        <text x="54" y="116">☑ Foreign EU/Non-EU supplier</text>
        <text x="54" y="138">☑ Taxable B2B service in Germany (§ 3a II)</text>
        <text x="54" y="160">☑ Recipient is a German business (Unternehmer)</text>
      </g>
      <!-- Quadrant 2: Mechanism -->
      <rect x="348" y="72" width="292" height="106" rx="8" fill="#D1FAE5" fill-opacity="0.45" stroke="#047857" stroke-width="2"/>
      <text x="362" y="92" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#047857">2. LEGAL MECHANISM</text>
      <g font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">
        <text x="362" y="116">• VAT liability flips from Supplier → Buyer!</text>
        <text x="362" y="138">• Supplier bills NET (€0 VAT) + "Reverse Charge"</text>
        <text x="362" y="160">• Buyer declares 19% USt &amp; deducts 19% VorSt</text>
      </g>
      <!-- Quadrant 3: Worked € Example -->
      <rect x="40" y="192" width="292" height="108" rx="8" fill="#FFF" stroke="#141836" stroke-width="2"/>
      <text x="54" y="212" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#141836">3. WORKED € EXAMPLE (IRISH CLOUD → DE GMBH)</text>
      <g font-family="IBM Plex Mono, monospace" font-size="10.5" fill="#141836">
        <text x="54" y="236">Invoice Net:          €10,000.00</text>
        <text x="54" y="256" fill="#BE185D">USt § 13b (Box 46):   +€1,900.00</text>
        <text x="54" y="276" fill="#047857">VorSt § 15 (Box 67):  -€1,900.00</text>
        <text x="54" y="292" font-weight="700" fill="#0369A1">Net Cash VAT Impact:       €0.00 ✓</text>
      </g>
      <!-- Quadrant 4: Exam Trap -->
      <rect x="348" y="192" width="292" height="108" rx="8" fill="#FCE7F3" fill-opacity="0.55" stroke="#BE185D" stroke-width="2.2"/>
      <text x="362" y="212" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="#BE185D">4. ⚠️ CLASSIC EXAM &amp; AUDIT TRAPS</text>
      <g font-family="Patrick Hand, cursive" font-size="14.5" fill="#141836">
        <text x="362" y="236">! Kleinunternehmer (§ 19) STILL owes § 13b</text>
        <text x="362" y="256">  VAT — with ZERO Vorsteuer deduction!</text>
        <text x="362" y="280">! Missing VIES screenshot = audit disallowance.</text>
      </g>
    </svg>`
  }
];

const JOURNAL_SCENARIOS = {
  b2c: {
    title: 'B2C Domestic Service Sale (+ Output VAT)',
    rule: 'Cash/AR increases on DR (+Asset). Net Revenue and Output VAT Liability both increase on CR.',
    build: (net, rate) => {
      const vat = +(net * rate / 100).toFixed(2);
      const gross = +(net + vat).toFixed(2);
      return [
        { acct: '1200 Bank / AR', side: 'DR', amt: gross, col: '#0EA5E9', tag: 'Asset ↑' },
        { acct: '8400 Revenue', side: 'CR', amt: net, col: '#10B981', tag: 'Income ↑' },
        { acct: `1776 Output VAT (${rate}%)`, side: 'CR', amt: vat, col: '#EC4899', tag: 'Liab ↑' }
      ];
    }
  },
  rc: {
    title: 'B2B Intra-EU Reverse Charge (§ 13b UStG)',
    rule: 'Buyer self-assesses Output VAT (CR) and simultaneously deducts Input VAT (DR) — Net €0 VAT cash impact!',
    build: (net, rate) => {
      const vat = +(net * rate / 100).toFixed(2);
      return [
        { acct: '4900 IT Service Expense', side: 'DR', amt: net, col: '#0EA5E9', tag: 'Exp ↑' },
        { acct: `1577 Input VAT §13b (${rate}%)`, side: 'DR', amt: vat, col: '#10B981', tag: 'Asset ↑' },
        { acct: '1600 Accounts Payable', side: 'CR', amt: net, col: '#141836', tag: 'Liab ↑' },
        { acct: `1787 Output VAT §13b (${rate}%)`, side: 'CR', amt: vat, col: '#EC4899', tag: 'Liab ↑' }
      ];
    }
  },
  asset: {
    title: 'Equipment CapEx Purchase (+ Input Vorsteuer)',
    rule: 'Capitalize ONLY the Net cost as PP&E Asset (DR). Recoverable Input VAT goes to Vorsteuer Asset (DR), not Expense!',
    build: (net, rate) => {
      const vat = +(net * rate / 100).toFixed(2);
      const gross = +(net + vat).toFixed(2);
      return [
        { acct: '0420 Office Hardware', side: 'DR', amt: net, col: '#0EA5E9', tag: 'PP&E ↑' },
        { acct: `1576 Input VAT (${rate}%)`, side: 'DR', amt: vat, col: '#10B981', tag: 'VorSt ↑' },
        { acct: '1200 Bank Payment', side: 'CR', amt: gross, col: '#EC4899', tag: 'Cash ↓' }
      ];
    }
  },
  accrual: {
    title: 'Year-End Accrued Advisory Fee (31.12. Cut-Off)',
    rule: 'Match the expense into the current year (DR Expense) and park the unpaid obligation in Accrued Liabilities (CR) — VAT only arises on invoice!',
    build: (net) => [
      { acct: '4950 Legal & Tax Advice', side: 'DR', amt: net, col: '#0EA5E9', tag: 'Exp ↑ (2026)' },
      { acct: '0977 Accrued Liabilities', side: 'CR', amt: net, col: '#F59E0B', tag: 'Liab ↑ (31.12)' }
    ]
  }
};

function fmtEur(n) {
  return '€' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function renderLiveJournalSVG(scenarioKey, net, rate) {
  const sc = JOURNAL_SCENARIOS[scenarioKey] || JOURNAL_SCENARIOS.b2c;
  const lines = sc.build(net, rate);
  const totDr = lines.filter(l => l.side === 'DR').reduce((s, l) => s + l.amt, 0);
  const totCr = lines.filter(l => l.side === 'CR').reduce((s, l) => s + l.amt, 0);
  const drLines = lines.filter(l => l.side === 'DR');
  const crLines = lines.filter(l => l.side === 'CR');

  return `<svg viewBox="0 0 680 280">
    <!-- Top Ledger Table -->
    <rect x="20" y="12" width="640" height="128" rx="8" fill="#FFFDF5" stroke="#141836" stroke-width="2.2"/>
    <rect x="20" y="12" width="640" height="24" rx="6" fill="#141836"/>
    <text x="34" y="28" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#00D4FF">${sc.title.toUpperCase()}</text>
    <text x="526" y="28" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#38BDF8">DR / SOLL</text>
    <text x="644" y="28" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700" fill="#F472B6">CR / HABEN</text>
    ${lines.map((l, i) => `
      <g font-family="IBM Plex Mono, monospace" font-size="11">
        <text x="${l.side === 'DR' ? 36 : 56}" y="${56 + i * 20}" font-weight="${l.side === 'DR' ? '700' : '500'}" fill="${l.col}">${l.side === 'CR' ? 'to ' : ''}${l.acct} [${l.tag}]</text>
        <text x="${l.side === 'DR' ? 526 : 644}" y="${56 + i * 20}" text-anchor="end" font-weight="700" fill="${l.side === 'DR' ? '#0369A1' : '#BE185D'}">${fmtEur(l.amt)}</text>
      </g>
    `).join('')}
    <line x1="420" y1="120" x2="648" y2="120" stroke="#141836" stroke-width="1.6"/>
    <text x="526" y="135" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">${fmtEur(totDr)}</text>
    <text x="644" y="135" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#047857">${fmtEur(totCr)}</text>

    <!-- Visual Twin T-Summary Balance Scale Below -->
    <g transform="translate(20, 154)">
      <rect x="0" y="0" width="308" height="114" rx="8" fill="#E0F2FE" fill-opacity="0.4" stroke="#0EA5E9" stroke-width="2"/>
      <text x="154" y="22" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#0369A1">LEFT LEG // DEBIT (SOLL) = ${fmtEur(totDr)}</text>
      <line x1="12" y1="30" x2="296" y2="30" stroke="#0EA5E9" stroke-width="1.6"/>
      ${drLines.map((l, i) => `
        <text x="18" y="${54 + i * 24}" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">• ${l.acct}</text>
        <text x="290" y="${54 + i * 24}" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#0369A1">${fmtEur(l.amt)}</text>
      `).join('')}
    </g>
    <text x="340" y="216" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="18" font-weight="700" fill="#047857">=</text>
    <g transform="translate(352, 154)">
      <rect x="0" y="0" width="308" height="114" rx="8" fill="#FCE7F3" fill-opacity="0.4" stroke="#EC4899" stroke-width="2"/>
      <text x="154" y="22" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700" fill="#BE185D">RIGHT LEG // CREDIT (HABEN) = ${fmtEur(totCr)}</text>
      <line x1="12" y1="30" x2="296" y2="30" stroke="#EC4899" stroke-width="1.6"/>
      ${crLines.map((l, i) => `
        <text x="18" y="${54 + i * 24}" font-family="Patrick Hand, cursive" font-size="15" fill="#141836">• ${l.acct}</text>
        <text x="290" y="${54 + i * 24}" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="11.5" font-weight="700" fill="#BE185D">${fmtEur(l.amt)}</text>
      `).join('')}
    </g>
  </svg>`;
}

export function renderTaxAccountingLabHTML() {
  return `
    <!-- 1. CORE ACCOUNTING & TAX STUDY NOTE PRINCIPLES -->
    <section class="section-block">
      <h2>The 4-Color Semantic System for Accounting &amp; Tax Notebooks</h2>
      <p>
        Accounting and tax rules are inherently <em>structural</em>—every statute has a trigger, an adjustment, a numeric flow, and an audit trap. Instead of transcribing dense paragraphs, treat your dot-grid notebook like an engineering schematic with fixed color semantics and right-aligned tabular numbers:
      </p>
      <div class="grid-4">
        <div class="card">
          <span class="pill cyan" style="align-self:flex-start;">Cyan // Assets &amp; DR</span>
          <div class="card-h">Inflows &amp; Rules</div>
          <p class="card-p">Assets, Debit (SOLL) headers, Input VAT (<em>Vorsteuer</em>), and baseline statutory triggers.</p>
        </div>
        <div class="card">
          <span class="pill magenta" style="align-self:flex-start;">Magenta // Liab &amp; CR</span>
          <div class="card-h">Outflows &amp; Traps</div>
          <p class="card-p">Liabilities, Credit (HABEN) headers, Output VAT (<em>USt</em>), penalties, and exam traps!</p>
        </div>
        <div class="card">
          <span class="pill mint" style="align-self:flex-start;">Mint // Relief &amp; Net</span>
          <div class="card-h">Equity &amp; Safe Harbors</div>
          <p class="card-p">Net income, tax exemptions (<em>Steuerfrei</em>), Reverse Charge 0% checks, and balanced totals.</p>
        </div>
        <div class="card">
          <span class="pill amber" style="align-self:flex-start;">Amber // Timing</span>
          <div class="card-h">Accruals &amp; Bridges</div>
          <p class="card-p">31.12. cut-off deferrals (ARAP/PRAP), depreciation, and IAS 12 deferred tax differences.</p>
        </div>
      </div>
    </section>

    <!-- 2. INTERACTIVE GALLERY: 6 MASTER ACCOUNTING & TAX SPREADS -->
    <section class="lab cyan-accent" id="ta-gallery-lab">
      <div class="lab-head">
        <span class="lab-title">Study Spread Blueprints // 6 Visual Accounting &amp; Tax Note Archetypes</span>
        <span class="pill cyan">Exam &amp; Advisory Ready</span>
      </div>
      <div class="lab-body">
        <div class="segmented no-print" role="group" style="flex-wrap:wrap;">
          ${TAX_STUDY_TEMPLATES.map((t, i) => `<button class="seg-btn ta-tab ${i === 0 ? 'active' : ''}" data-id="${t.id}">${t.short}</button>`).join('')}
        </div>

        <div class="card tinted" style="border-color:var(--cyan);">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
            <span id="ta-title" class="card-h" style="font-size:18px;"></span>
            <span id="ta-tag" class="pill violet"></span>
          </div>
          <div id="ta-svg-box" class="svg-box" style="margin:6px 0;"></div>
          <div class="grid-2">
            <div class="card" style="background:#FFF;">
              <div class="mono" style="font-size:10px; font-weight:700; color:var(--mint-deep);">3-STEP DOT-GRID DRAWING RECIPE</div>
              <ol id="ta-recipe" style="padding-left:18px; font-size:13.8px; display:flex; flex-direction:column; gap:4px; color:var(--ink-body);"></ol>
            </div>
            <div class="card" style="background:#FFF; border-color:var(--magenta);">
              <div class="mono" style="font-size:10px; font-weight:700; color:var(--magenta);">⚠️ EXAM &amp; STUDY PRO TIP</div>
              <p id="ta-trap" class="card-p" style="font-size:14px; color:var(--ink-body);"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. INTERACTIVE LAB: LIVE T-ACCOUNT & VAT JOURNAL VISUALIZER -->
    <section class="lab magenta-accent" id="ta-journal-lab">
      <div class="lab-head">
        <span class="lab-title">Interactive Accounting Lab // Live Journal Entry &amp; T-Account Visualizer</span>
        <span class="pill mint">Auto-Balanced DR = CR</span>
      </div>
      <div class="lab-body">
        <div class="lab-ctrl no-print" style="flex-wrap:wrap;">
          <div class="segmented" role="group" style="flex-wrap:wrap;">
            <button class="seg-btn ta-sc active" data-sc="b2c">1. B2C Sale + VAT</button>
            <button class="seg-btn ta-sc" data-sc="rc">2. EU Reverse Charge (§13b)</button>
            <button class="seg-btn ta-sc" data-sc="asset">3. Hardware CapEx + VorSt</button>
            <button class="seg-btn ta-sc" data-sc="accrual">4. 31.12. Accrued Fee</button>
          </div>
        </div>
        <div class="grid-3 no-print">
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--ink-muted);">NET AMOUNT (€)</span>
            <input id="ta-in-net" class="search-in" type="number" min="10" step="100" value="1000" />
          </label>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span class="mono" style="font-size:10px; font-weight:700; color:var(--ink-muted);">VAT / USt RATE (%)</span>
            <select id="ta-in-rate" class="search-in">
              <option value="19" selected>19% (DE Standard)</option>
              <option value="7">7% (DE Reduced)</option>
              <option value="21">21% (NL / BE / ES)</option>
              <option value="20">20% (AT / FR / UK)</option>
              <option value="0">0% (Exempt)</option>
            </select>
          </label>
          <div class="card tinted" style="padding:10px 12px; justify-content:center;">
            <div class="mono" style="font-size:9.5px; font-weight:700; color:var(--violet);">MECHANIC EXPLAINED</div>
            <div id="ta-sc-rule" style="font-size:12.5px; line-height:1.4; color:var(--ink-body);"></div>
          </div>
        </div>
        <div id="ta-live-svg" class="svg-box"></div>
      </div>
    </section>

    <!-- SENIOR PRACTITIONER FIELD NOTES: BEYOND VAT (IFRS 16 & IAS 12) -->
    <div class="studio-aside">
      <strong>Beyond VAT — two IFRS standards that beg for a 10-second sketch:</strong>
      <br/>• <strong>IFRS 16 Leases:</strong> Draw two falling lines from Year 0 to Year 5—a straight diagonal line for the <em>Right-of-Use Asset</em> (linear amortization) and a bowed convex curve above it for the <em>Lease Liability</em> (front-loaded interest). The shaded crescent between the two lines visually shows why a Deferred Tax Asset appears mid-lease and unwinds to zero at maturity.
      <br/>• <strong>IAS 12 Warranty Provisions:</strong> Sketch a 2-year bridge: Year 1 books the warranty expense on the IFRS P&amp;L (Tax Base = €0 → deductible temporary difference → Cyan DTA); Year 2 pays cash claims and the tax deduction finally lands, flipping the DTA back to zero.
    </div>
  `;
}

export function initTaxAccountingLab() {
  const gal = document.getElementById('ta-gallery-lab');
  if (!gal) return;

  let activeId = TAX_STUDY_TEMPLATES[0].id;
  const renderTemplate = () => {
    const t = TAX_STUDY_TEMPLATES.find(x => x.id === activeId) || TAX_STUDY_TEMPLATES[0];
    document.getElementById('ta-title').textContent = t.name;
    document.getElementById('ta-tag').textContent = t.tag;
    document.getElementById('ta-svg-box').innerHTML = t.svg;
    document.getElementById('ta-recipe').innerHTML = t.recipe.map(r => `<li>${r}</li>`).join('');
    document.getElementById('ta-trap').textContent = t.trap;
  };
  gal.querySelectorAll('.ta-tab').forEach(b => b.addEventListener('click', () => {
    activeId = b.dataset.id;
    gal.querySelectorAll('.ta-tab').forEach(x => x.classList.toggle('active', x === b));
    renderTemplate();
  }));
  renderTemplate();

  // Live Journal Visualizer
  let scKey = 'b2c';
  const renderJournal = () => {
    const net = Math.max(1, Number(document.getElementById('ta-in-net').value) || 1000);
    const rate = Number(document.getElementById('ta-in-rate').value) || 0;
    document.getElementById('ta-sc-rule').textContent = JOURNAL_SCENARIOS[scKey].rule;
    document.getElementById('ta-live-svg').innerHTML = renderLiveJournalSVG(scKey, net, rate);
  };
  document.querySelectorAll('.ta-sc').forEach(b => b.addEventListener('click', () => {
    scKey = b.dataset.sc;
    document.querySelectorAll('.ta-sc').forEach(x => x.classList.toggle('active', x === b));
    renderJournal();
  }));
  document.getElementById('ta-in-net')?.addEventListener('input', renderJournal);
  document.getElementById('ta-in-rate')?.addEventListener('change', renderJournal);
  renderJournal();
}
