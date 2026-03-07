// Journey Map Data Module — 9-stage Contractor Lifecycle
// Source: Journey Map Plan — Option B, Consolidated Context, reference HTML

export interface PersonaExperience {
  narrative: string;
  fullNarrative: string;
  emotionalState: string;
  emotionalEmoji: string;
}

export interface ScreenRef {
  filename: string;
  label: string;
  flow: 'contractor' | 'homeowner' | 'post-acceptance' | 'core-platform';
}

export interface DataFlowItem {
  tag: 'in' | 'out' | 'created' | 'triggered';
  text: string;
}

export interface StageMetric {
  name: string;
  target?: string;
}

export interface SrsComparison {
  approach: string;
  qxoAdvantage: string;
  srsAdvantage?: string;
  overall: 'qxo-leads' | 'parity' | 'srs-leads';
  verdictText: string;
}

export interface JourneyStage {
  id: string;
  number: number;
  name: string;
  shortName: string;
  category: 'core' | 'adjacent' | 'bookend';
  pmOwner: string;
  experience: {
    marcus: PersonaExperience;
    philip: PersonaExperience;
  };
  screens: ScreenRef[];
  dataFlow: DataFlowItem[];
  metrics: StageMetric[];
  srs: SrsComparison;
  csowText: string;
  csowPct: number;
}

export const journeyStages: JourneyStage[] = [
  // ── Stage 1: Awareness & Lead ──────────────────────────
  {
    id: 'awareness',
    number: 1,
    name: 'Awareness & Lead',
    shortName: 'Lead',
    category: 'bookend',
    pmOwner: 'CRM / Sales',
    experience: {
      marcus: {
        narrative: 'Marcus gets a call from a homeowner who found his business card — or spots storm damage in the neighborhood and starts canvassing. He needs to move fast. <strong>Homeowners get 3+ bids</strong>, and the contractor who responds first usually wins. Before he even opens QXO, his profile, tier status, and brand preferences are already loaded from CRM.',
        fullNarrative: 'Marcus gets a call from a homeowner who found his business card — or spots storm damage in the neighborhood and starts canvassing. He needs to move fast. Homeowners get 3+ bids, and the contractor who responds first usually wins. Before he even opens QXO, his profile, tier status, and brand preferences are already loaded from CRM. The CRM-to-Ecom 2.0 data bridge means Marcus never re-enters his preferences. His Denver branch defaults, GAF certification, and credit terms are pre-loaded the moment he logs in.',
        emotionalState: 'Urgently optimistic',
        emotionalEmoji: '🔥',
      },
      philip: {
        narrative: 'Philip also gets leads from his CRM (AccuLynx). He\'s comparing QXO vs ABC Supply pricing before deciding where to order. His split-wallet behavior means every lead is a competitive moment.',
        fullNarrative: 'Philip also gets leads from his CRM (AccuLynx). He\'s comparing QXO vs ABC Supply pricing before deciding where to order. His split-wallet behavior means every lead is a competitive moment. Philip needs QXO to be faster and more accurate than the ABC ordering flow to win his business on this particular job.',
        emotionalState: 'Calculating',
        emotionalEmoji: '🤔',
      },
    },
    screens: [],
    dataFlow: [
      { tag: 'in', text: 'Lead source (homeowner call, storm event, referral)' },
      { tag: 'out', text: 'Contractor profile, tier status, brand preferences, credit terms, CSoW baseline → Ecom 2.0' },
    ],
    metrics: [
      { name: 'Lead conversion rate', target: 'Track' },
      { name: 'CRM completeness', target: '100%' },
    ],
    srs: {
      approach: 'Canopy Weather storm maps with Date of Loss search. Past delivery overlay for "low-hanging fruit" prospecting.',
      qxoAdvantage: 'Consumes contractor profile and tier data from CRM. No storm intelligence capability yet.',
      srsAdvantage: 'Storm maps are a competitive gap to close',
      overall: 'srs-leads',
      verdictText: 'SRS leads — Storm maps are a competitive gap to close',
    },
    csowText: 'Lead enters the funnel — CRM profile feeds downstream intelligence',
    csowPct: 5,
  },

  // ── Stage 2: Job Creation ──────────────────────────
  {
    id: 'job-creation',
    number: 2,
    name: 'Job Creation',
    shortName: 'Job',
    category: 'core',
    pmOwner: 'Ecom 2.0 / Jobs',
    experience: {
      marcus: {
        narrative: 'Marcus opens QXO on his phone (mobile-first). Taps the <strong>Build</strong> button — persistent in navigation. Selects <strong>New Estimate</strong>. The system creates a new <span class="hl">Job Entity</span> for the property address — a persistent record that will anchor every estimate, order, delivery, and invoice for this project.',
        fullNarrative: 'Marcus opens QXO on his phone (mobile-first). Taps the Build button — persistent in navigation. Selects New Estimate. The system creates a new Job Entity for the property address — a persistent record that will anchor every estimate, order, delivery, and invoice for this project. The Job Entity is now a first-class product. Beyond a data container, it offers CRM-light capabilities: proposal tracking across trades, homeowner communication history, AI chatbot for predictive homeowner Q&A.',
        emotionalState: 'Focused',
        emotionalEmoji: '🎯',
      },
      philip: {
        narrative: 'Philip follows the same flow but may choose "From Template" or "Reorder from Job" for repeat specs. He values the 4 Build paths because his crew handles more jobs in parallel.',
        fullNarrative: 'Philip follows the same flow but may choose "From Template" or "Reorder from Job" for repeat specs. He values the 4 Build paths because his crew handles more jobs in parallel. His office manager can initiate builds on his behalf using saved templates.',
        emotionalState: 'Efficient',
        emotionalEmoji: '⚡',
      },
    },
    screens: [
      { filename: 'ecom2-dashboard-v2.html', label: 'Dashboard Hub', flow: 'core-platform' },
      { filename: 'ecom2-build-entry.html', label: 'Build Entry / Path Selector', flow: 'core-platform' },
    ],
    dataFlow: [
      { tag: 'in', text: 'Contractor profile auto-loaded from CRM (brand prefs, tier, waste defaults)' },
      { tag: 'created', text: 'Job object {id, customer, address, estimates[], orders[], deliveries[], invoices[], margin_data}' },
      { tag: 'out', text: 'Job ID propagates through entire downstream workflow' },
    ],
    metrics: [
      { name: 'Jobs created / week', target: 'Track' },
      { name: 'ATB trigger rate', target: 'Track' },
    ],
    srs: {
      approach: 'No explicit "Job" concept — order-centric model. Contractors start from RoofHub home screen and navigate to Smart Templates or Estimator.',
      qxoAdvantage: 'Job Entity as first-class object — everything lives under one Job. Clean, unified experience.',
      overall: 'qxo-leads',
      verdictText: 'QXO leads — Job Entity provides a cleaner, unified data model',
    },
    csowText: 'Job created — the persistent container that ties all downstream activity together',
    csowPct: 12,
  },

  // ── Stage 3: Estimation (ATB Blue) ──────────────────────────
  {
    id: 'estimation',
    number: 3,
    name: 'Estimation (ATB Blue)',
    shortName: 'ATB',
    category: 'core',
    pmOwner: 'Ecom 2.0 / ATB',
    experience: {
      marcus: {
        narrative: 'Marcus enters the property address: <strong>4215 Elm Street</strong>. System offers a <span class="hl">$20 Bid Perfect</span> measurement report. He pays from his QXO account — report populates in minutes. The system <strong>auto-generates Good/Better/Best proposal tiers</strong> from his Builds profile. Marcus bumps labor markup on Best by 2%, leaves everything else. <strong>Under 2 minutes of adjustments.</strong>',
        fullNarrative: 'Marcus enters the property address: 4215 Elm Street. System offers a $20 Bid Perfect measurement report. He pays from his QXO account — report populates in minutes with total squares, pitch, complexity, satellite imagery. The system auto-generates Good/Better/Best proposal tiers from his Builds profile. Good: three-tab shingles. Better: GAF Timberline HDZ (his preferred). Best: CertainTeed Grand Manor. Marcus bumps labor markup on Best by 2%, leaves everything else. Under 2 minutes of adjustments. Three-party financial flow: Homeowner pays contractor, contractor pays QXO for materials, QXO pays EagleView. Item-level material markup is contractor-private. Financing integration planned as a future connection point.',
        emotionalState: 'Impressed → confident',
        emotionalEmoji: '😎',
      },
      philip: {
        narrative: 'Philip runs ATB for larger jobs but also manually configures tiers when specs differ from his defaults. He appreciates that auto-generation is a starting point, not a locked constraint.',
        fullNarrative: 'Philip runs ATB for larger jobs but also manually configures tiers when specs differ from his defaults. He appreciates that auto-generation is a starting point, not a locked constraint. For multi-trade jobs, he configures each trade separately within the same Job.',
        emotionalState: 'Analytical',
        emotionalEmoji: '🔬',
      },
    },
    screens: [
      { filename: 'atb-address-entry.html', label: 'Address Entry', flow: 'contractor' },
      { filename: 'atb-measurement-payment.html', label: '$20 Bid Perfect Payment', flow: 'contractor' },
      { filename: 'atb-bid-perfect-results.html', label: 'Roof Measurement Results', flow: 'contractor' },
      { filename: 'atb-proposal-builder.html', label: 'G/B/B Tier Configuration', flow: 'contractor' },
      { filename: 'atb-markup-pricing.html', label: 'Labor, Markup, Margin', flow: 'contractor' },
    ],
    dataFlow: [
      { tag: 'in', text: 'Job address → EagleView API → Bid Perfect report ($20)' },
      { tag: 'in', text: 'From Builds: Brand preferences (L1+L2+L3), waste factors, warranty structures, markup configs' },
      { tag: 'created', text: '3-tier proposal with full bill of materials, real-time QXO pricing, labor costs' },
      { tag: 'out', text: 'Proposal ready for homeowner delivery' },
    ],
    metrics: [
      { name: 'ATB completion rate', target: '>70%' },
      { name: 'Time to proposal', target: '<15 min' },
      { name: 'Override rate', target: '<30%' },
      { name: 'Abandonment rate', target: '<25%' },
    ],
    srs: {
      approach: 'G/B/B tiers require manual contractor configuration via separate templates. 3 measurement providers (EagleView, GAF QuickMeasure, HOVER). AI-generated options + order health check.',
      qxoAdvantage: 'Auto-generates G/B/B tiers from Builds profile. Two-tiered measurement model = margin advantage. Full manual override available.',
      srsAdvantage: 'Only 1 measurement provider vs SRS\'s 3',
      overall: 'qxo-leads',
      verdictText: 'QXO leads — Auto-generated tiers are faster; gap: only 1 measurement provider vs SRS\'s 3',
    },
    csowText: '$20 Bid Perfect invested — proposal pipeline active, 39x ROI potential per report',
    csowPct: 28,
  },

  // ── Stage 4: Template & Build ──────────────────────────
  {
    id: 'template-build',
    number: 4,
    name: 'Template & Build',
    shortName: 'Build',
    category: 'core',
    pmOwner: 'Ecom 2.0 / Builds + Templates',
    experience: {
      marcus: {
        narrative: 'For returning jobs, Marcus loads a saved Build via <strong>"From Template"</strong> or <strong>"Reorder from Job"</strong>. The <span class="hl">3-tiered intelligence</span> powers everything: Layer 1 (branch-curated Denver defaults) → Layer 2 (his explicit prefs override defaults) → Layer 3 (AI refines from purchase history). <strong>"It remembered my preferred spec."</strong>',
        fullNarrative: 'For returning jobs, Marcus loads a saved Build via "From Template" or "Reorder from Job". The 3-tiered intelligence powers everything: Layer 1 (branch-curated Denver defaults) → Layer 2 (his explicit prefs override defaults) → Layer 3 (AI refines from purchase history). The Build auto-populates. Marcus reviews, adjusts if needed. "It remembered my preferred spec." Template Library coverage ensures new customers aren\'t starting with a blank slate — users with templates are 13x more likely to buy.',
        emotionalState: 'Efficient',
        emotionalEmoji: '🚀',
      },
      philip: {
        narrative: 'Philip relies heavily on templates for his crew — they can start jobs without needing to know his exact spec preferences. Template Library coverage is critical for his workflow.',
        fullNarrative: 'Philip relies heavily on templates for his crew — they can start jobs without needing to know his exact spec preferences. Template Library coverage is critical for his workflow. His office manager maintains 5+ templates for different job types.',
        emotionalState: 'Delegating',
        emotionalEmoji: '📋',
      },
    },
    screens: [
      { filename: 'ecom2-template-selector.html', label: 'Template Selector Grid', flow: 'core-platform' },
      { filename: 'ecom2-reorder-job.html', label: 'Reorder from Job', flow: 'core-platform' },
      { filename: 'ecom2-build-flow.html', label: 'NL Conversational Build', flow: 'core-platform' },
      { filename: 'ecom2-build-structured.html', label: 'Structured Form Build', flow: 'core-platform' },
      { filename: 'ecom2-nl-empty-state.html', label: 'NL Empty State', flow: 'core-platform' },
      { filename: 'ecom2-nl-processing.html', label: 'NL Processing Pipeline', flow: 'core-platform' },
    ],
    dataFlow: [
      { tag: 'in', text: 'Template Library (L1): Branch-curated regional defaults' },
      { tag: 'in', text: 'User Preferences (L2): Explicit brand, waste, warranty, markup settings' },
      { tag: 'in', text: 'AI/ML (L3): Transaction-based learning, pattern recognition' },
      { tag: 'created', text: 'Validated Build object (materials list, quantities, SKUs)' },
      { tag: 'out', text: 'Complete Build → Quoting' },
    ],
    metrics: [
      { name: 'Templates saved', target: 'Track' },
      { name: 'Template Library coverage', target: '100% pilot w/ 3+ templates' },
      { name: 'User prefs completion rate', target: 'Track' },
      { name: 'Override rate', target: '<30%' },
    ],
    srs: {
      approach: 'Smart Templates learn from order history (ML-driven). ItemMatch + ColorMatch. AI-generated options. One-way export to partner CRMs.',
      qxoAdvantage: '3-tiered intelligence (branch + explicit prefs + AI). Branch expertise encoded. Contractor has explicit control via Layer 2.',
      overall: 'qxo-leads',
      verdictText: 'QXO leads — 3-tiered intelligence vs SRS\'s single AI layer',
    },
    csowText: 'Build profile strengthens — more accurate defaults → fewer overrides → faster proposals',
    csowPct: 40,
  },

  // ── Stage 5: Quoting ──────────────────────────
  {
    id: 'quoting',
    number: 5,
    name: 'Quoting',
    shortName: 'Quote',
    category: 'adjacent',
    pmOwner: 'Quote PM',
    experience: {
      marcus: {
        narrative: 'Marcus previews the proposal — <strong>Rivera Roofing branding</strong>, clean G/B/B comparison. He sends via SMS link (interactive). <strong>Under 15 minutes total from lead.</strong> QXO guarantees pricing and material availability for a defined window. <em>"This competes with anything a large company produces."</em>',
        fullNarrative: 'Marcus previews the proposal as the homeowner will see it — Rivera Roofing branding, clean G/B/B comparison. Suggested installation date validated against branch logistics. He chooses delivery: SMS link (interactive) or branded PDF. Adds a personal message, sends. Under 15 minutes total from lead. QXO guarantees pricing and material availability for a defined window. "This competes with anything a large company produces."',
        emotionalState: 'Confident',
        emotionalEmoji: '💪',
      },
      philip: {
        narrative: 'Philip sends proposals via email to the homeowner and CC\'s his project manager. He values the PDF option for his more traditional clients.',
        fullNarrative: 'Philip sends proposals via email to the homeowner and CC\'s his project manager. He values the PDF option for his more traditional clients. For high-value jobs, he customizes the cover letter before sending.',
        emotionalState: 'Professional',
        emotionalEmoji: '📧',
      },
    },
    screens: [
      { filename: 'atb-proposal-preview.html', label: 'Proposal Preview (ATB)', flow: 'contractor' },
      { filename: 'ecom2-proposal-preview.html', label: 'Proposal Preview (Ecom)', flow: 'core-platform' },
      { filename: 'atb-proposal-sent.html', label: 'Proposal Sent Confirmation', flow: 'contractor' },
      { filename: 'ecom2-proposals-list.html', label: 'Proposals Management List', flow: 'core-platform' },
    ],
    dataFlow: [
      { tag: 'in', text: 'Validated Build object (SKU, qty, UoM), contractor ID, branch preference' },
      { tag: 'created', text: 'Quote PM applies real-time pricing, markup, homeowner presentation' },
      { tag: 'out', text: 'Branded proposal (interactive link or PDF) via SMS/email' },
      { tag: 'out', text: 'Price guarantee: locked pricing + material availability for defined window' },
    ],
    metrics: [
      { name: 'Quote send rate', target: 'Track' },
      { name: 'Quote-to-win rate', target: 'Track' },
      { name: 'Price edit rate', target: 'Track' },
      { name: 'Turnaround time', target: 'Track' },
    ],
    srs: {
      approach: 'Contractor logo, professional layout, "Hide Pricing" toggle. E-Sign (Feb 2025). AI Draft Email (beta). One-click order conversion.',
      qxoAdvantage: 'Interactive bidirectional proposal link with auto-order trigger on acceptance. Full homeowner flow (tier select → e-sign → deposit → auto-order).',
      srsAdvantage: 'Already live with e-sign + AI email drafting',
      overall: 'qxo-leads',
      verdictText: 'QXO leads — Full bidirectional homeowner flow; SRS has e-sign + AI email already live',
    },
    csowText: 'Proposal sent — contractor competes at enterprise level, locks homeowner into QXO funnel',
    csowPct: 52,
  },

  // ── Stage 6: Homeowner Acceptance & Order ──────────────────────────
  {
    id: 'acceptance-order',
    number: 6,
    name: 'Homeowner Acceptance & Order',
    shortName: 'Accept',
    category: 'adjacent',
    pmOwner: 'Order / Commerce PM',
    experience: {
      marcus: {
        narrative: 'Homeowner views 3 tiers, selects <strong>Better tier (GAF Timberline HDZ)</strong>. E-signs. Submits deposit. <strong>Three simultaneous events fire:</strong> <span class="hl">1) Sold proposal locks</span>. <span class="hl">2) Measurement upgrades to Premium free</span> (11% waste vs 15%). <span class="hl">3) Materials order fires automatically.</span> <strong>"I didn\'t have to do anything."</strong>',
        fullNarrative: 'Homeowner receives the interactive proposal link. Views 3 tiers side-by-side. Selects Better tier (GAF Timberline HDZ). E-signs. Submits deposit. Three simultaneous events fire: 1) Sold proposal locks (immutable record). 2) Measurement upgrades to Premium free (exact linear footages, 11% algorithmic waste vs bid\'s 15%). 3) Materials order fires automatically. Marcus gets a push notification: "Homeowner accepted Better tier. Order placed. Delivery scheduled Thursday." "I didn\'t have to do anything." QXO Wallet is the planned destination for the $20 Bid Perfect payment and loyalty rebate credits.',
        emotionalState: 'Relieved + delighted',
        emotionalEmoji: '🎉',
      },
      philip: {
        narrative: 'Philip\'s office manager monitors acceptances across multiple active proposals. The auto-order is a game-changer for his volume — no manual order entry per job.',
        fullNarrative: 'Philip\'s office manager monitors acceptances across multiple active proposals. The auto-order is a game-changer for his volume — no manual order entry per job. She can track acceptance status across all open proposals in one dashboard.',
        emotionalState: 'Streamlined',
        emotionalEmoji: '✅',
      },
    },
    screens: [
      { filename: 'atb-ho-tier-selection.html', label: 'Homeowner Tier Selection', flow: 'homeowner' },
      { filename: 'atb-ho-package-detail.html', label: 'Package Detail View', flow: 'homeowner' },
      { filename: 'atb-ho-signature.html', label: 'E-Sign', flow: 'homeowner' },
      { filename: 'atb-ho-deposit.html', label: 'Deposit Payment', flow: 'homeowner' },
      { filename: 'atb-ho-confirmed.html', label: 'Acceptance Confirmed', flow: 'homeowner' },
      { filename: 'atb-material-order.html', label: 'Auto Material Order', flow: 'post-acceptance' },
      { filename: 'atb-job-detail-premium.html', label: 'Job Detail w/ Premium', flow: 'post-acceptance' },
      { filename: 'ecom2-order-confirmation.html', label: 'Order Confirmation', flow: 'core-platform' },
    ],
    dataFlow: [
      { tag: 'in', text: 'Homeowner selection (tier, signature, deposit)' },
      { tag: 'triggered', text: 'Premium measurement upgrade (free, EagleView) — 11% vs 15% waste' },
      { tag: 'created', text: 'Materials order from Premium data (not Bid Perfect data)' },
      { tag: 'created', text: 'Sold estimate preserved as immutable record' },
      { tag: 'out', text: 'Order routed to branch, delivery scheduled' },
    ],
    metrics: [
      { name: 'Proposal → acceptance rate', target: 'Track' },
      { name: 'Order conversion from acceptance', target: 'Track' },
      { name: 'AOV', target: '>2x non-ATB digital' },
      { name: 'Premium upgrade rate', target: 'Track' },
    ],
    srs: {
      approach: 'One-click estimate-to-order (contractor-initiated, not auto). No homeowner interactive flow with auto-order. Completely free (no $20 entry).',
      qxoAdvantage: 'Full homeowner flow with automatic order trigger. Two-tiered measurement = contractor margin advantage ($90–$240/job).',
      srsAdvantage: 'Already live with one-click conversion; completely free',
      overall: 'qxo-leads',
      verdictText: 'QXO leads — Auto-order + margin advantage; SRS is free with one-click conversion already live',
    },
    csowText: 'Order placed automatically — margin bonus captured, materials flowing through QXO',
    csowPct: 68,
  },

  // ── Stage 7: Delivery ──────────────────────────
  {
    id: 'delivery',
    number: 7,
    name: 'Delivery',
    shortName: 'Deliver',
    category: 'adjacent',
    pmOwner: 'Delivery Tracking PM',
    experience: {
      marcus: {
        narrative: 'Marcus checks his dashboard — <strong>delivery scheduled for Thursday</strong>. Real-time GPS tracking shows the truck en route. Driver uploads proof-of-delivery photos. <em>"I know exactly when materials arrive."</em>',
        fullNarrative: 'Marcus checks his dashboard — delivery scheduled for Thursday. Real-time GPS tracking shows the truck en route. Driver uploads proof-of-delivery photos. Digital invoice pushes to the Job record. "I know exactly when materials arrive." The delivery milestone is tied back to the Job Entity with on-time tracking and margin impact analysis.',
        emotionalState: 'Trusting',
        emotionalEmoji: '🚚',
      },
      philip: {
        narrative: 'Philip coordinates deliveries across multiple job sites. He needs all tracking in one view, not per-job. GPS accuracy is critical for his crew scheduling.',
        fullNarrative: 'Philip coordinates deliveries across multiple job sites. He needs all tracking in one view, not per-job. GPS accuracy is critical for his crew scheduling. Late deliveries cost him labor hours when crews arrive to an empty site.',
        emotionalState: 'Watchful',
        emotionalEmoji: '👀',
      },
    },
    screens: [
      { filename: 'atb-delivery-tracking.html', label: 'Real-time Delivery Status', flow: 'post-acceptance' },
    ],
    dataFlow: [
      { tag: 'in', text: 'Scheduled delivery with branch, route, ETA' },
      { tag: 'in', text: 'Real-time GPS, driver photos, weather conditions' },
      { tag: 'out', text: 'Write-back to Job: delivery milestone, on-time flag, exception alerts' },
    ],
    metrics: [
      { name: 'On-time delivery rate', target: '82% (trust gap)' },
      { name: 'WISMO contacts', target: 'Reduce' },
      { name: 'ETA accuracy', target: 'Improve' },
    ],
    srs: {
      approach: 'Live GPS on Google Maps, weather overlay, driver photos (before/during/after), works for ALL orders. "Need More" 2-click supplemental ordering.',
      qxoAdvantage: 'Delivery tied to Job Entity with milestone tracking + margin impact analysis. Potential differentiator.',
      srsAdvantage: 'GPS, photos, weather, supplemental ordering all live today',
      overall: 'srs-leads',
      verdictText: 'SRS leads comprehensively — GPS, photos, weather, supplemental ordering all live',
    },
    csowText: 'Materials delivered — Job Entity tracks fulfillment, trust builds with on-time performance',
    csowPct: 78,
  },

  // ── Stage 8: Payment ──────────────────────────
  {
    id: 'payment',
    number: 8,
    name: 'Payment',
    shortName: 'Pay',
    category: 'adjacent',
    pmOwner: 'Payments PM',
    experience: {
      marcus: {
        narrative: 'Invoice arrives, <strong>auto-matched to PO</strong>. Net-30 applied to Marcus\'s credit account. No manual reconciliation needed. <em>"I don\'t have to think about this."</em>',
        fullNarrative: 'Invoice arrives, auto-matched to PO. Net-30 applied to Marcus\'s credit account. No manual reconciliation needed for residential roofing. The payment routing is automatic — roofing = net-30, waterproofing = phased invoicing, commercial = separate approval chain. "I don\'t have to think about this."',
        emotionalState: 'Frictionless',
        emotionalEmoji: '💳',
      },
      philip: {
        narrative: 'Philip\'s bookkeeper handles payments. QuickBooks integration is critical — he needs invoices to flow into his accounting system without manual entry.',
        fullNarrative: 'Philip\'s bookkeeper handles payments. QuickBooks integration is critical — he needs invoices to flow into his accounting system without manual entry. Philip reviews the invoice reconciliation monthly, not per-job.',
        emotionalState: 'Hands-off',
        emotionalEmoji: '🤲',
      },
    },
    screens: [],
    dataFlow: [
      { tag: 'in', text: 'PO, materials list, job type flag from Order' },
      { tag: 'created', text: 'Routing: Roofing = net-30 | Waterproofing = phased | Commercial = separate approval' },
      { tag: 'out', text: 'Write-back to Job: invoice matched, payment complete' },
    ],
    metrics: [
      { name: 'Days to payment', target: 'Track' },
      { name: 'Exception rate', target: 'Minimize' },
      { name: 'Workflow completion', target: 'Track' },
    ],
    srs: {
      approach: 'BillTrust "Invoice Gateway" — 24/7 access, CSV export, payment scheduling, paperless. Invoice Map View (geographic context).',
      qxoAdvantage: 'Job type + materials list drive payment terms. Upstream data determines workflow routing. Future phase.',
      srsAdvantage: 'Mature invoicing already live',
      overall: 'srs-leads',
      verdictText: 'SRS leads — Mature invoicing already live; QXO payments are future-phase',
    },
    csowText: 'Payment completes the transaction loop — frictionless experience reinforces loyalty',
    csowPct: 88,
  },

  // ── Stage 9: Retention & CRM Write-Back ──────────────────────────
  {
    id: 'retention',
    number: 9,
    name: 'Retention & CRM Write-Back',
    shortName: 'Retain',
    category: 'bookend',
    pmOwner: 'CRM PM',
    experience: {
      marcus: {
        narrative: 'Job complete. Full record visible: Bid Perfect → proposal → acceptance → Premium upgrade → order → delivery → invoice → <span class="hl">realized margin</span>. His Build profile gets smarter. <strong>CSoW visible in dashboard.</strong> <em>"QXO knows my business better than I do."</em>',
        fullNarrative: 'Job for 4215 Elm Street is complete. Full record visible: original Bid Perfect → 3-tier proposal → acceptance → Premium upgrade → order → delivery → invoice → realized margin. Marcus sees estimated vs actual margin in one view. His Build profile gets smarter — more accurate defaults next time. CSoW visible in dashboard (progress indicator). Next job lead suggestion seeded. Loyalty rebate model: Basket Threshold Tiers (Option B) + Wallet % (Option C) at launch, with Confidence Score Multiplier (Option D) in Phase 2. "QXO knows my business better than I do."',
        emotionalState: 'Loyal',
        emotionalEmoji: '🏆',
      },
      philip: {
        narrative: 'Philip reviews margin analysis across his portfolio of jobs. CSoW visibility motivates consolidating more spend with QXO.',
        fullNarrative: 'Philip reviews margin analysis across his portfolio of jobs. He uses the jobs list to compare actual vs estimated margins and identify where his pricing is off. CSoW visibility motivates consolidating more spend with QXO. The loyalty rebate model rewards his volume purchasing.',
        emotionalState: 'Strategic',
        emotionalEmoji: '📊',
      },
    },
    screens: [
      { filename: 'ecom2-job-complete-margin.html', label: 'Job Complete + Margin', flow: 'core-platform' },
      { filename: 'ecom2-jobs-list.html', label: 'Jobs List View', flow: 'core-platform' },
      { filename: 'ecom2-jobs-list-options.html', label: 'Jobs List Options', flow: 'core-platform' },
    ],
    dataFlow: [
      { tag: 'out', text: 'Write-back to CRM: job events, materials ordered vs estimated, Build activity, ATB usage, delivery outcome, payment' },
      { tag: 'created', text: 'CSoW signals: Build saved = retained workflow, ATB run = active pipeline, Build completed = imminent purchase' },
      { tag: 'out', text: 'Flywheel: more usage → smarter Builds → less overrides → faster proposals → more jobs → more orders → higher CSoW' },
    ],
    metrics: [
      { name: 'Delta CSoW (MoM)', target: 'Track' },
      { name: 'Wallet Gap closure', target: 'Track' },
      { name: 'Repeat job rate', target: 'Track' },
      { name: 'Build profile accuracy', target: 'Improve' },
    ],
    srs: {
      approach: 'No documented CSoW equivalent. Compounding lock-in from Smart Templates improving over time (similar flywheel concept).',
      qxoAdvantage: 'Explicit CSoW tracking visible to contractor + branch. Job-level margin analysis (estimated vs actual). Full lifecycle data.',
      overall: 'qxo-leads',
      verdictText: 'QXO leads — CSoW tracking + job-level margin analysis are unique differentiators',
    },
    csowText: 'Flywheel complete — every cycle makes the next one faster, smarter, and stickier',
    csowPct: 100,
  },
];
