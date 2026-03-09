// ========== TYPES ==========

export type Category = 'core' | 'foundation' | 'adjacent' | 'external';
export type Status = 'active' | 'planned' | 'dependency';
export type SrsAdvantage = 'qxo-leads' | 'parity' | 'srs-leads';

export interface EcosystemNode {
  id: string;
  name: string;
  role: string;
  metric: string;
  category: Category;
  status: Status;
  srsAdvantage: SrsAdvantage;
  srsBadgeText: string;
  isCenter?: boolean;
  position: { x: number; y: number };
  detail: NodeDetail;
}

export interface NodeDetail {
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string; target: string }[];
  screens: string[];
  prototype?: string;
  status: string;
  source: string;
  comp: { qxo: string; srs: string };
}

export interface Connection {
  from: string;
  to: string;
  dashed?: boolean;
}

export interface DataFlowRow {
  from: string;
  to: string;
  target: string;
  description: string;
  direction: 'outbound' | 'inbound';
}

export interface DataFlowGroup {
  title: string;
  rows: DataFlowRow[];
}

// ========== NODES ==========

export const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'job',
    name: 'Job Entity',
    role: 'The atomic unit \u2014 persistent record anchored to a property address',
    metric: 'Connects everything',
    category: 'core',
    status: 'active',
    srsAdvantage: 'qxo-leads',
    srsBadgeText: "First-class object vs SRS's order-centric model",
    isCenter: true,
    position: { x: 600, y: 240 },
    detail: {
      title: 'Job Entity',
      subtitle: 'The atomic unit of Ecom 2.0',
      description: 'Every interaction on the platform attaches to a Job \u2014 a persistent record anchored to a property address that connects estimates, proposals, orders, deliveries, invoices, and margin data into a single thread. The Job is the architectural breakthrough that enables lifecycle tracking, profitability analysis, and cross-trade extensibility.',
      metrics: [
        { label: 'Jobs Created', value: 'Per week', target: 'Track growth' },
        { label: 'ATB Trigger Rate', value: 'From job creation', target: 'Maximize' },
        { label: 'Job Lifecycle', value: '9 phases', target: 'Full coverage' },
        { label: 'Data Model', value: 'Address-anchored', target: 'Multi-trade ready' },
      ],
      screens: ['ecom2-jobs-list.html', 'ecom2-jobs-list-options.html', 'ecom2-job-complete-margin.html'],
      status: 'Active project \u2014 core to Ecom 2.0 platform',
      source: 'QXO Ecom 2.0 Platform Overview, Section 8',
      comp: {
        qxo: 'First-class object grouping all orders, proposals, measurements, communications under a single job record. Enables estimated vs actual margin analysis. Trade-agnostic (roofing \u2192 siding \u2192 commercial).',
        srs: 'Order-centric model with de facto job records. "Need More" mid-job ordering and delivery tracking per order create implicit job records, but no unified job view or margin analysis.',
      },
    },
  },
  {
    id: 'atb',
    name: 'ATB Blue',
    role: 'Crown jewel \u2014 estimation-to-order workflow (New Estimate path)',
    metric: 'Time to proposal: <15 min',
    category: 'core',
    status: 'active',
    srsAdvantage: 'qxo-leads',
    srsBadgeText: 'Auto-generates G/B/B + margin advantage',
    position: { x: 920, y: 190 },
    detail: {
      title: 'ATB Blue (Address-to-Bid)',
      subtitle: 'The crown jewel \u2014 New Estimate path under Build',
      description: 'End-to-end estimation-to-order workflow serving contractors in SALES mode. Enters the workflow at the moment the order is CREATED, not after it\'s already won. The $20 Bid Perfect report \u2192 auto-generated G/B/B tiers \u2192 branded homeowner proposal \u2192 automatic order on acceptance. Contractors can also manually configure Good/Better/Best tiers \u2014 smart defaults with full control.',
      metrics: [
        { label: 'Time to Proposal', value: '<15 min', target: 'From truck, between jobs' },
        { label: 'Entry-to-Completion', value: '>70%', target: 'Of contractors who start' },
        { label: 'Override Rate', value: '<30%', target: 'System defaults accepted 70%+' },
        { label: 'AOV', value: '>2x', target: 'vs non-ATB digital orders' },
        { label: 'CAC/ROI', value: '$25.58 \u2192 $990', target: '39x return per upgrade' },
        { label: '$20 Pricing', value: 'Flat rate', target: 'Below any CRM subscription' },
      ],
      screens: ['atb-address-entry.html', 'atb-measurement-payment.html', 'atb-bid-perfect-results.html', 'atb-proposal-builder.html', 'atb-markup-pricing.html', 'atb-proposal-preview.html', 'atb-proposal-sent.html'],
      prototype: 'https://atb-blue.vercel.app',
      status: 'Active project \u2014 7 contractor screens mocked, prototype built',
      source: 'QXO Ecom 2.0 Platform Overview Sections 3-6, ATB Blue Analysis',
      comp: {
        qxo: 'Auto-generates G/B/B tiers from Builds profile (brand prefs, waste factors, warranty, markup). Two-tiered measurement: Bid Perfect ($20) for quoting \u2192 Premium (free on acceptance) for ordering \u2014 creates margin advantage. Contractor can also manually configure tiers. Full homeowner bidirectional flow with auto-order trigger.',
        srs: 'Estimator produces G/B/B but contractor manually configures via separate templates. Real-time SRS branch pricing. E-Sign (Feb 2025). AI Draft Email beta. One-click estimate-to-order (contractor-initiated, not auto-triggered). EagleView + GAF QM + HOVER (3 measurement providers vs QXO\'s 1).',
      },
    },
  },
  {
    id: 'build-btn',
    name: 'Build Button',
    role: 'Single entry point \u2014 4 paths: Estimate, Order, Template, Reorder',
    metric: 'Every revenue action',
    category: 'core',
    status: 'active',
    srsAdvantage: 'parity',
    srsBadgeText: 'Similar to RoofHub home \u2014 but job-centric',
    position: { x: 380, y: 190 },
    detail: {
      title: 'Build Button & Path Selector',
      subtitle: 'Single persistent entry point for every revenue-generating action',
      description: 'The Build button sits persistently in the platform\'s navigation. When a contractor clicks Build, they choose their path: New Estimate (ATB Blue), New Order, From Template, or Reorder from Job. Future paths (Storm/Insurance, Siding, Commercial) slot in without requiring new UI. Every path carries the contractor\'s Build profile forward. Two input modes: Conversational (NL) and Structured (Form), toggleable without losing state.',
      metrics: [
        { label: 'Path Utilization', value: '4 paths', target: 'Balanced usage' },
        { label: 'Build Adoption', value: 'Track growth', target: 'Primary workflow' },
        { label: 'Completion Rate', value: 'Track', target: 'Low = friction' },
        { label: 'Input Modes', value: 'NL + Form', target: 'Toggleable' },
      ],
      screens: ['ecom2-build-entry.html', 'ecom2-dashboard-v2.html', 'ecom2-nl-empty-state.html', 'ecom2-nl-processing.html', 'ecom2-build-flow.html', 'ecom2-build-structured.html'],
      status: 'Active project \u2014 6 core platform screens mocked',
      source: 'QXO Ecom 2.0 Platform Overview Section 4, Builds Workflow v1.0',
      comp: {
        qxo: 'One button, every workflow. Contractor\'s context travels with them. Future paths inherit the same profile. NL conversational input is category-defining \u2014 contractor speaks/types what they need.',
        srs: 'RoofHub home screen with navigation to Smart Templates, Estimator, delivery tracking, etc. No single unified entry point. No documented NL/conversational input mode.',
      },
    },
  },
  {
    id: 'builds',
    name: 'Builds Intelligence',
    role: 'Personalization engine \u2014 3-layer profile powering every path',
    metric: 'Override rate: <30%',
    category: 'core',
    status: 'active',
    srsAdvantage: 'qxo-leads',
    srsBadgeText: '3-tiered vs SRS single AI layer',
    position: { x: 610, y: 470 },
    detail: {
      title: 'Builds Intelligence Layer',
      subtitle: 'The personalization engine powering every Build path',
      description: 'A Build is a living contractor profile capturing brand preferences, waste factors, warranty structures, accessory packages, labor rates, markup configurations, and purchasing patterns. Three input layers coexist and reinforce each other: Template Library (L1), User Preferences (L2), and AI/ML (L3). Where a template answers \'what products go on a standard roof,\' a Build answers \'how does this specific contractor buy, sell, and operate.\'',
      metrics: [
        { label: 'Override Rate', value: '<30%', target: 'Primary accuracy signal' },
        { label: 'Template Coverage', value: '100%', target: 'All pilot accounts have 3+ templates' },
        { label: 'User Prefs Completion', value: 'Track', target: 'Low = under-informed profiles' },
        { label: 'Time-to-Order', value: 'Track', target: 'vs current experience' },
      ],
      screens: ['ecom2-template-selector.html', 'ecom2-reorder-job.html'],
      status: 'Active project \u2014 foundational to Ecom 2.0',
      source: 'Builds Workflow v1.0, QXO Ecom 2.0 Platform Overview Section 5',
      comp: {
        qxo: 'Three-tiered: Branch-curated defaults (L1) + Contractor explicit preferences (L2) + AI/ML learning (L3). Branch expertise encoded at scale. Contractor has direct control \u2014 system never recommends against explicit preferences.',
        srs: 'Smart Templates learn from order history only (ML-driven, transaction-based). ItemMatch + ColorMatch recommendation layers. AI-generated options (Aug 2025). No branch-curation layer. No explicit contractor preference input \u2014 all inferred from behavior.',
      },
    },
  },
  {
    id: 'template',
    name: 'Template Library',
    role: 'Foundation \u2014 branch-curated defaults, no blank slate',
    metric: 'Layer 1 of Builds',
    category: 'foundation',
    status: 'active',
    srsAdvantage: 'qxo-leads',
    srsBadgeText: 'Branch expertise + AI vs SRS AI-only',
    position: { x: 140, y: 350 },
    detail: {
      title: 'Template Library',
      subtitle: 'Foundation layer \u2014 Builds Layer 1',
      description: 'The Template Library provides branch-level defaults so no contractor starts with a blank slate. Branch managers, OSRs, ISRs, and tech reps create and curate regional baselines: the shingle lines that sell in that geography, the accessories that building codes require, the warranty tiers homeowners expect. This is the existing foundation that Builds enhances \u2014 think of templates as the starting point, Builds as the intelligence that makes them smart.',
      metrics: [
        { label: 'Abandonment Fix', value: '85% \u2192 <30%', target: 'Calculator abandonment' },
        { label: 'Template Availability', value: '100%', target: 'Accounts with 3+ templates' },
        { label: 'Impact', value: '13x', target: 'Users with templates more likely to buy' },
        { label: 'Pilot', value: 'Denver 300', target: 'V1 branch pilot' },
      ],
      screens: ['ecom2-template-selector.html'],
      status: 'Active project \u2014 V1 Denver pilot planned',
      source: 'Template Library v1.2',
      comp: {
        qxo: 'Branch-curated + branch-managed. Local expertise encoded into defaults for every contractor on that branch. Combined with Builds L2 + L3 for personalization.',
        srs: 'Smart Templates are contractor-owned and AI-personalized from individual order history. No branch-curation layer. Stronger individual lock-in (templates improve with more orders) but less consistency and sales team control.',
      },
    },
  },
  {
    id: 'userprefs',
    name: 'User Preferences',
    role: 'Contractor self-service \u2014 explicit brand, waste, markup config',
    metric: 'Layer 2 of Builds',
    category: 'foundation',
    status: 'planned',
    srsAdvantage: 'qxo-leads',
    srsBadgeText: 'Explicit control \u2014 SRS has no equivalent',
    position: { x: 140, y: 550 },
    detail: {
      title: 'User Preferences',
      subtitle: 'Contractor self-service \u2014 Builds Layer 2',
      description: 'A dedicated section where contractors explicitly define their brand preferences, waste factors, warranty structures, labor rates, markup configurations, and any other parameters shaping how they operate. This is the contractor telling the system directly how they buy and sell. User preferences are a first-class input \u2014 when a contractor has explicitly set a preference, the system never recommends against it.',
      metrics: [
        { label: 'Completion Rate', value: 'Track', target: 'Low = under-informed profiles' },
        { label: 'Override Reduction', value: 'Measure', target: 'Prefs set \u2192 fewer overrides' },
        { label: 'Control', value: 'First-class', target: 'System never overrides explicit prefs' },
        { label: 'Scope', value: 'Brands, waste, warranty, labor, markup', target: 'Full operating profile' },
      ],
      screens: [],
      status: 'Planned \u2014 prerequisite for Builds launch',
      source: 'QXO Ecom 2.0 Platform Overview Section 5, Builds Workflow v1.0',
      comp: {
        qxo: 'Explicit contractor control over every parameter. Manual G/B/B tier configuration is part of this \u2014 smart defaults with full control. System adapts TO the contractor, not just FROM their behavior.',
        srs: 'No documented equivalent. SRS Smart Templates learn from behavior only \u2014 no explicit preference input mechanism. If a contractor wants to change their default, they must change their ordering behavior.',
      },
    },
  },
  {
    id: 'aiml',
    name: 'AI/ML Intelligence',
    role: 'North star \u2014 transaction-based learning, pattern recognition',
    metric: 'Layer 3 of Builds',
    category: 'foundation',
    status: 'planned',
    srsAdvantage: 'parity',
    srsBadgeText: 'SRS ships 3-5 AI features/month',
    position: { x: 140, y: 750 },
    detail: {
      title: 'AI/ML Intelligence',
      subtitle: 'North star \u2014 Builds Layer 3',
      description: 'Over time, the system learns and adapts the contractor\'s Build profile through every interaction \u2014 purchase behavior, natural language inputs, pattern recognition across similar contractors in the same market. A contractor who consistently overrides the recommended ridge cap gets that preference absorbed automatically. The north star is a system that doesn\'t require the contractor to keep telling it how they operate.',
      metrics: [
        { label: 'Override Trend', value: 'Decreasing', target: 'Over time per contractor' },
        { label: 'NL Accuracy', value: 'Track', target: 'Intent classification success' },
        { label: 'Pattern Recognition', value: 'Cross-contractor', target: 'Similar market segments' },
        { label: 'Maturity', value: 'Future phase', target: 'Activates as usage accumulates' },
      ],
      screens: ['ecom2-nl-processing.html'],
      status: 'Planned \u2014 activates as Layer 1 + Layer 2 data accumulates',
      source: 'QXO Ecom 2.0 Platform Overview Section 5',
      comp: {
        qxo: 'Builds on top of L1 (branch) + L2 (explicit). NL conversational input pipeline feeds into this layer. Progressively automates what L1 + L2 established manually.',
        srs: 'AI is their primary differentiator. 150-engineer team, 3-5 AI capabilities/month. AI Center of Excellence. Smart Templates ML + ItemMatch + ColorMatch + AI-generated options + order health check. SRS is further along on pure AI \u2014 but without the branch-curation and explicit preference layers.',
      },
    },
  },
  {
    id: 'crm',
    name: 'CRM / Lead Mgmt',
    role: 'Upstream \u2014 contractor profile, tier, brand prefs, credit terms',
    metric: 'CSoW baseline input',
    category: 'adjacent',
    status: 'dependency',
    srsAdvantage: 'srs-leads',
    srsBadgeText: 'SRS has 6 CRM integrations inc. ServiceTitan',
    position: { x: 600, y: 60 },
    detail: {
      title: 'CRM / Lead Management',
      subtitle: 'Upstream system feeding contractor context into Ecom 2.0',
      description: 'CRM provides the contractor\'s profile data that personalizes the entire Ecom 2.0 experience: tier status (Gold/Silver/Bronze), brand preferences, historical job types, credit terms, payment history, open opportunities, and CSoW baseline. CRM is still in planning/early feature thinking \u2014 the minimum viable data contract for day-one Ecom 2.0 integration is a critical open question.',
      metrics: [
        { label: 'CRM Completeness', value: 'Track', target: 'Profile fields populated' },
        { label: 'Lead Conversion', value: 'Track', target: 'CRM leads \u2192 Ecom 2.0 jobs' },
        { label: 'Data Contract', value: '5-7 fields min', target: 'Day-one write-back' },
        { label: 'Integration Risk', value: 'HIGH', target: '12+ months of data lost if deferred' },
      ],
      screens: [],
      status: 'Dependency \u2014 CRM in early planning, data contract needed',
      source: 'Ecom2 Whiteboard Alignment Sessions 6-7',
      comp: {
        qxo: 'Planned CRM write-back from day one. CSoW as explicit north star metric. Bi-directional: CRM feeds context, Ecom 2.0 writes back job outcomes.',
        srs: '6 CRM integrations (JobNimbus, AccuLynx, Leap, GiddyUp, ServiceTitan, Roofr). First distributor to integrate with ServiceTitan. Template export flows one-way into partner CRMs. SRS leads on breadth; QXO could lead on depth of owned CRM data.',
      },
    },
  },
  {
    id: 'eagleview',
    name: 'EagleView',
    role: 'Measurement data \u2014 Bid Perfect ($20) \u2192 Premium (free on accept)',
    metric: '$4M+ annual contract',
    category: 'external',
    status: 'active',
    srsAdvantage: 'srs-leads',
    srsBadgeText: 'SRS has 3 providers: EV + GAF QM + HOVER',
    position: { x: 1130, y: 120 },
    detail: {
      title: 'EagleView / Measurement Data',
      subtitle: 'External partner powering the two-tiered measurement model',
      description: 'EagleView provides the measurement data for ATB Blue. Two tiers: Bid Perfect ($20, for quoting) delivers total squares, predominant pitch, roof complexity. Premium (free on acceptance, for ordering) delivers exact linear footages for every ridge, hip, valley, rake, eave plus algorithmic waste. QXO has a $4M+ annual contract with EagleView. BidPerfect volume growing 11% YoY.',
      metrics: [
        { label: 'Contract', value: '$4.1M/yr', target: 'Annual guarantee' },
        { label: 'Bid Perfect Price', value: '$20 flat', target: 'ATB Blue pricing' },
        { label: 'BP Volume', value: '9,692/yr', target: 'Growing 11% YoY' },
        { label: 'Upgrade Cost', value: '$25.58 avg', target: 'Free to contractor on acceptance' },
      ],
      screens: ['atb-measurement-payment.html', 'atb-bid-perfect-results.html'],
      status: 'Active partnership \u2014 contract in place',
      source: 'ATB Blue Analysis',
      comp: {
        qxo: 'Single measurement provider (EagleView). Two-tiered model creates unique margin advantage \u2014 bid with padded waste, order with precise waste. $20 flat rate simplifies pricing.',
        srs: 'Three measurement providers: EagleView + GAF QuickMeasure + HOVER. HOVER has deepest integration (OAuth, 3D models, blueprint upload). Custom Measurements also available. More flexibility but no two-tiered margin advantage.',
      },
    },
  },
  {
    id: 'homeowner',
    name: 'Homeowner Flow',
    role: 'Interactive proposal \u2014 tier select, e-sign, deposit, auto-order',
    metric: '5 screens mocked',
    category: 'external',
    status: 'active',
    srsAdvantage: 'qxo-leads',
    srsBadgeText: 'Full bidirectional flow \u2014 SRS is one-way',
    position: { x: 1130, y: 320 },
    detail: {
      title: 'Homeowner Experience',
      subtitle: 'Bidirectional proposal flow \u2014 the value loop closer',
      description: 'The homeowner receives an interactive proposal link showing good/better/best tiers side-by-side. They can compare options, select a tier, e-sign the proposal, and submit a deposit \u2014 all through the platform. On acceptance, three things fire simultaneously: sold proposal locks, measurement upgrades to Premium (free), and materials order auto-generates. This is the critical conversion event that closes the value loop.',
      metrics: [
        { label: 'Proposal-to-Accept', value: 'Track', target: 'Optimization priority' },
        { label: 'Tier Distribution', value: 'G/B/B mix', target: 'Better/Best = higher AOV' },
        { label: 'Decline Reasons', value: '>60% capture', target: 'Feed back into Builds' },
        { label: 'Auto-Order Trigger', value: 'On acceptance', target: 'Zero-touch conversion' },
      ],
      screens: ['atb-ho-tier-selection.html', 'atb-ho-package-detail.html', 'atb-ho-signature.html', 'atb-ho-deposit.html', 'atb-ho-confirmed.html'],
      status: 'Active project \u2014 5 homeowner screens mocked',
      source: 'QXO Ecom 2.0 Platform Overview Section 6, Homeowner Flow Redesign Spec',
      comp: {
        qxo: 'Full bidirectional flow: interactive tier comparison \u2192 e-sign \u2192 deposit \u2192 auto-order. Homeowner decline reasons captured for Builds feedback loop. Price guarantee for defined window.',
        srs: 'E-Sign on proposals (Feb 2025). Digital delivery. But no documented interactive tier selection, no deposit flow, no automatic order trigger on acceptance. SRS conversion is contractor-initiated one-click, not homeowner-triggered.',
      },
    },
  },
  {
    id: 'quoting',
    name: 'Quoting',
    role: 'Downstream \u2014 pricing applied to validated Build object',
    metric: 'Quote-to-win rate',
    category: 'adjacent',
    status: 'dependency',
    srsAdvantage: 'parity',
    srsBadgeText: 'Both produce branded proposals',
    position: { x: 350, y: 830 },
    detail: {
      title: 'Quoting',
      subtitle: 'Downstream \u2014 pricing applied to validated Build',
      description: 'The Quoting system receives a validated Build object from Ecom 2.0 and applies pricing. The boundary is the pricing layer: Ecom 2.0 does not own pricing, Quote PM does not own materials assembly. The contractor can generate both procurement quotes (contractor price, net-30) and homeowner bid quotes (marked-up, proposal format). The Build-to-Quote handoff is the highest-risk alignment gap.',
      metrics: [
        { label: 'Quote Send Rate', value: 'Track', target: 'Builds \u2192 sent quotes' },
        { label: 'Quote-to-Win', value: 'Track', target: 'Sent \u2192 homeowner accepts' },
        { label: 'Price Edit Rate', value: 'Track', target: 'Changes to system pricing' },
        { label: 'Turnaround Time', value: 'Minimize', target: 'Build \u2192 quote \u2192 send' },
      ],
      screens: ['ecom2-proposal-preview.html', 'ecom2-proposals-list.html', 'atb-proposal-preview.html'],
      status: 'Dependency \u2014 Quote PM domain, handoff contract needed',
      source: 'Ecom2 Whiteboard Alignment Session 3',
      comp: {
        qxo: 'Contractor-facing and homeowner-facing quotes from same Build. Price guarantee mechanism. Installation date validated against branch fulfillment logistics.',
        srs: 'Real-time branch-specific pricing applied automatically. "Hide Pricing" toggle for line-item suppression. Customer testimonials in proposals. Already live and iterating.',
      },
    },
  },
  {
    id: 'order',
    name: 'Order & Inventory',
    role: 'Downstream \u2014 PO created, branch assigned, delivery scheduled',
    metric: 'AOV: >2x non-ATB',
    category: 'adjacent',
    status: 'dependency',
    srsAdvantage: 'parity',
    srsBadgeText: 'SRS: one-click conversion, already live',
    position: { x: 600, y: 830 },
    detail: {
      title: 'Order & Inventory',
      subtitle: 'Downstream \u2014 PO created, branch assigned, delivery scheduled',
      description: 'Orders flow from two sources: (1) validated Build through Quoting, and (2) automatic trigger on homeowner acceptance in ATB Blue. The Order system cross-references live branch inventory and pricing, creates POs, assigns branches, and schedules delivery. Real-time availability and lead time visibility is surfaced during the Build flow \u2014 not after the order is submitted.',
      metrics: [
        { label: 'Order Conversion', value: 'From quote', target: 'Track improvement' },
        { label: 'AOV', value: '>2x non-ATB', target: 'ATB-sourced orders' },
        { label: 'Branch Call Deflection', value: '25-40%', target: 'At scale' },
        { label: 'Availability Visibility', value: 'In-flow', target: 'Before order commit' },
      ],
      screens: ['ecom2-order-confirmation.html', 'atb-material-order.html'],
      status: 'Dependency \u2014 Order/Commerce PM domain',
      source: 'Ecom2 Whiteboard Alignment Session 1',
      comp: {
        qxo: 'Auto-order on homeowner acceptance (zero-touch). In-flow inventory visibility. Real-time availability before contractor commits. Job Entity links order to full lifecycle.',
        srs: 'One-click estimate-to-order (contractor-initiated). Real-time branch pricing already live. 800+ branches with inventory data. "Need More" two-click mid-job supplemental.',
      },
    },
  },
  {
    id: 'branch',
    name: 'Branch / Inventory',
    role: 'Real-time availability, lead times, delivery logistics',
    metric: 'ERP dependency (HIGH risk)',
    category: 'external',
    status: 'dependency',
    srsAdvantage: 'srs-leads',
    srsBadgeText: 'SRS: 800+ branches, real-time pricing live',
    position: { x: 1050, y: 540 },
    detail: {
      title: 'Branch / Inventory',
      subtitle: 'Real-time availability, lead times, and delivery logistics',
      description: 'Branch inventory data is critical to every Build path \u2014 the system surfaces availability issues and lead times before the contractor commits to an installation date. ERP integration (Oracle/Mincron APIs) is the highest-risk technical dependency. If real-time pricing fails, a "CPQ" fallback where the branch processes and confirms is the mitigation.',
      metrics: [
        { label: 'ERP Integration', value: 'HIGH risk', target: 'Oracle/Mincron APIs' },
        { label: 'Real-time Pricing', value: 'Required', target: 'For Build accuracy' },
        { label: 'Inventory Accuracy', value: 'Required', target: 'For availability surfacing' },
        { label: 'Fallback', value: 'CPQ model', target: 'Branch confirms if API fails' },
      ],
      screens: [],
      status: 'Dependency \u2014 ERP integration is critical first step',
      source: 'QXO Ecom 2.0 Platform Overview Section 10 (Risk 1)',
      comp: {
        qxo: 'Planned real-time integration via abstraction layer. Designed to insulate Ecom 2.0 from ERP complexity.',
        srs: 'Already live with real-time branch-specific pricing across 800+ branches in 48 states. Nightly auto-sync with manual refresh for Roofr integration. SRS has a massive head start on branch data infrastructure.',
      },
    },
  },
  {
    id: 'delivery',
    name: 'Delivery Tracking',
    role: 'Real-time GPS, driver photos, ETA alerts',
    metric: 'OTD: 82% (gap)',
    category: 'adjacent',
    status: 'planned',
    srsAdvantage: 'srs-leads',
    srsBadgeText: 'SRS: live GPS + photos + weather overlay',
    position: { x: 550, y: 1020 },
    detail: {
      title: 'Delivery Tracking',
      subtitle: 'Real-time GPS, driver photos, ETA alerts',
      description: 'Delivery tracking writes back to the Job Entity with delivery status, proof-of-delivery photos, and on-time flags. At 82% on-time delivery, there is a material trust gap. The digital experience must be mobile-first for job-day use. Delivery outcome is a CSoW signal \u2014 on-time delivery reinforces loyalty.',
      metrics: [
        { label: 'On-Time Delivery', value: '82%', target: 'Current rate \u2014 trust gap' },
        { label: 'WISMO Contacts', value: 'Reduce', target: '"Where\'s my order?" calls' },
        { label: 'ETA Accuracy', value: 'Track', target: 'Promise vs actual' },
        { label: 'Trust Score', value: 'Track', target: 'Delivery experience rating' },
      ],
      screens: ['atb-delivery-tracking.html'],
      status: 'Planned \u2014 screen mocked, integration needed',
      source: 'Ecom2 Whiteboard Alignment Session 4',
      comp: {
        qxo: 'Planned: GPS tracking, delivery milestone in Job view. Delivery tied to Job Entity for full lifecycle context.',
        srs: 'Live: real-time GPS on Google Maps with crowdsourced traffic ETAs. Weather forecast overlay. Driver photos (before/during/after). Works for ALL orders \u2014 digital and phone-placed. "Need More" two-click reorder mid-job. SRS leads comprehensively.',
      },
    },
  },
  {
    id: 'payments',
    name: 'Payments',
    role: 'Invoice match, PO reconciliation, net-30 workflow',
    metric: 'Days to payment',
    category: 'adjacent',
    status: 'planned',
    srsAdvantage: 'srs-leads',
    srsBadgeText: 'SRS: BillTrust live \u2014 24/7, CSV export',
    position: { x: 830, y: 1030 },
    detail: {
      title: 'Payments',
      subtitle: 'Invoice match, PO reconciliation, workflow routing',
      description: 'Payment workflows are downstream of the order but their logic is determined by job type data from Ecom 2.0. Three distinct workflows: Standard/Roofing (net-30, single invoice), Waterproofing (phased invoicing, longer terms), Commercial (GC-driven, bonding requirements). Job type classification ownership is an open question.',
      metrics: [
        { label: 'Days to Payment', value: 'Track', target: 'Minimize' },
        { label: 'Exception Rate', value: 'Track', target: 'PO mismatch issues' },
        { label: 'Workflow Routing', value: 'Job type-driven', target: 'Auto-route by type' },
        { label: 'QuickBooks Sync', value: 'Planned', target: 'Future integration' },
      ],
      screens: [],
      status: 'Planned \u2014 Payments PM domain',
      source: 'Ecom2 Whiteboard Alignment Session 5',
      comp: {
        qxo: 'Planned: auto-routing by job type, QuickBooks integration future. Job Entity provides context for payment terms.',
        srs: 'Live: BillTrust \'Invoice Gateway\' with 24/7 access, payment scheduling, CSV export, paperless billing. Invoice History with Map View. Already mature and operational.',
      },
    },
  },
  {
    id: 'crm-wb',
    name: 'CRM Write-Back',
    role: 'Job outcome, materials vs estimated, CSoW signals, retention',
    metric: 'Delta CSoW tracking',
    category: 'adjacent',
    status: 'dependency',
    srsAdvantage: 'qxo-leads',
    srsBadgeText: 'Explicit CSoW \u2014 SRS has no equivalent',
    position: { x: 130, y: 950 },
    detail: {
      title: 'CRM Write-Back / Retention',
      subtitle: 'Closing the loop \u2014 job outcome, CSoW signals, next job seeding',
      description: 'Ecom 2.0 writes back to CRM: job lifecycle events (created/quoted/won/lost/closed), materials actually ordered vs estimated, Build and Template activity, ATB usage signals, delivery outcome, payment completion. These write-backs enable CSoW calculation and feed the retention flywheel. Delta CSoW (month-over-month) tells if QXO is growing or losing wallet share.',
      metrics: [
        { label: 'Delta CSoW', value: 'Month-over-month', target: 'Growth trajectory' },
        { label: 'Wallet Gap', value: '(1-CSoW) \u00d7 total spend', target: 'Untapped opportunity' },
        { label: 'Write-Back Rate', value: 'Track', target: 'Events captured' },
        { label: 'Repeat Job Rate', value: 'Track', target: 'Retention signal' },
      ],
      screens: ['ecom2-job-complete-margin.html'],
      status: 'Dependency \u2014 minimum data contract needed at launch',
      source: 'Ecom2 Whiteboard Alignment Sessions 6-7',
      comp: {
        qxo: 'Explicit CSoW tracking as north star metric \u2014 visible to contractors in dashboard. Job-level margin analysis (estimated vs actual). Every Ecom 2.0 activity is a leading CSoW indicator.',
        srs: 'Compounding lock-in from Smart Templates improving over time (similar flywheel effect). But no documented CSoW equivalent or contractor-visible wallet share metric. No documented job-level margin analysis.',
      },
    },
  },
];

// ========== CONNECTIONS ==========

export const connections: Connection[] = [
  { from: 'crm', to: 'job' },
  { from: 'job', to: 'atb' },
  { from: 'atb', to: 'eagleview' },
  { from: 'eagleview', to: 'atb' },
  { from: 'job', to: 'build-btn' },
  { from: 'builds', to: 'atb' },
  { from: 'template', to: 'builds' },
  { from: 'userprefs', to: 'builds' },
  { from: 'aiml', to: 'builds' },
  { from: 'atb', to: 'homeowner' },
  { from: 'homeowner', to: 'atb' },
  { from: 'builds', to: 'quoting' },
  { from: 'atb', to: 'order', dashed: true },
  { from: 'quoting', to: 'order' },
  { from: 'order', to: 'branch' },
  { from: 'order', to: 'delivery' },
  { from: 'delivery', to: 'job', dashed: true },
  { from: 'payments', to: 'job', dashed: true },
  { from: 'job', to: 'crm-wb', dashed: true },
];

// ========== DATA FLOW GROUPS ==========

export const dataFlowGroups: DataFlowGroup[] = [
  {
    title: 'CRM / Lead Management',
    rows: [
      { from: 'crm', to: 'job', target: '\u2192 Job Entity', description: 'Contractor profile, tier, brand prefs, credit terms, CSoW baseline', direction: 'outbound' },
    ],
  },
  {
    title: 'Job Entity (Center)',
    rows: [
      { from: 'job', to: 'atb', target: '\u2192 ATB Blue', description: 'Job address, scope, contractor ID', direction: 'outbound' },
      { from: 'job', to: 'crm-wb', target: '\u2192 CRM Write-Back', description: 'Job outcome, materials ordered vs estimated, CSoW signals', direction: 'outbound' },
    ],
  },
  {
    title: 'ATB Blue',
    rows: [
      { from: 'atb', to: 'eagleview', target: '\u2192 EagleView', description: 'Address \u2192 $20 Bid Perfect request', direction: 'outbound' },
      { from: 'atb', to: 'homeowner', target: '\u2192 Homeowner', description: 'Branded proposal (interactive link or PDF)', direction: 'outbound' },
      { from: 'atb', to: 'order', target: '\u2192 Order (on acceptance)', description: 'Auto-generated materials order + Premium upgrade trigger', direction: 'outbound' },
    ],
  },
  {
    title: 'EagleView \u2194 ATB Blue',
    rows: [
      { from: 'eagleview', to: 'atb', target: '\u2192 ATB Blue', description: 'Roof measurements (squares, pitch, complexity) from Bid Perfect', direction: 'inbound' },
    ],
  },
  {
    title: 'Homeowner \u2194 ATB Blue',
    rows: [
      { from: 'homeowner', to: 'atb', target: '\u2192 ATB Blue', description: 'Tier selection, e-signature, deposit payment', direction: 'inbound' },
    ],
  },
  {
    title: 'Builds Intelligence',
    rows: [
      { from: 'builds', to: 'atb', target: '\u2192 ATB Blue', description: 'Brand prefs, waste factors, warranty, markup \u2192 auto-generate G/B/B', direction: 'outbound' },
      { from: 'builds', to: 'quoting', target: '\u2192 Quoting', description: 'Validated Build object (materials list, SKUs, quantities)', direction: 'outbound' },
    ],
  },
  {
    title: '3 Layers \u2192 Builds',
    rows: [
      { from: 'template', to: 'builds', target: 'Template Library (L1)', description: 'Branch-level defaults \u2014 regional baselines', direction: 'inbound' },
      { from: 'userprefs', to: 'builds', target: 'User Preferences (L2)', description: 'Explicit contractor brand, waste, markup configuration', direction: 'inbound' },
      { from: 'aiml', to: 'builds', target: 'AI/ML Intelligence (L3)', description: 'Transaction-based learning, pattern recognition', direction: 'inbound' },
    ],
  },
  {
    title: 'Downstream Chain',
    rows: [
      { from: 'quoting', to: 'order', target: 'Quoting \u2192 Order', description: 'Priced quote \u2192 Purchase Order', direction: 'outbound' },
      { from: 'order', to: 'branch', target: 'Order \u2192 Branch/Inventory', description: 'Real-time availability check, branch assignment', direction: 'outbound' },
      { from: 'order', to: 'delivery', target: 'Order \u2192 Delivery', description: 'Scheduled delivery with branch/route assignment', direction: 'outbound' },
    ],
  },
  {
    title: 'Write-Backs \u2192 Job Entity',
    rows: [
      { from: 'delivery', to: 'job', target: 'Delivery \u2192 Job Entity', description: 'Delivery status, proof-of-delivery photos, on-time flag', direction: 'inbound' },
      { from: 'payments', to: 'job', target: 'Payments \u2192 Job Entity', description: 'Invoice matched, payment complete, exception flags', direction: 'inbound' },
    ],
  },
];

// ========== SCREEN MOCK MAPPING ==========

/** Maps screen reference names from node data → actual mock filenames in /public/mocks/ */
export const screenMockMap: Record<string, string> = {
  // Direct matches
  'ecom2-build-entry.html': 'ecom2-build-entry.html',
  'ecom2-dashboard-v2.html': 'ecom2-dashboard-v2.html',
  'ecom2-nl-empty-state.html': 'ecom2-nl-empty-state.html',
  'ecom2-nl-processing.html': 'ecom2-nl-processing.html',
  'ecom2-build-flow.html': 'ecom2-build-flow.html',
  'ecom2-build-structured.html': 'ecom2-build-structured.html',
  'ecom2-order-confirmation.html': 'ecom2-order-confirmation.html',
  'ecom2-estimate-entry.html': 'ecom2-estimate-entry.html',
  'ecom2-proposal-builder.html': 'ecom2-proposal-builder.html',
  'ecom2-proposal-preview.html': 'ecom2-proposal-preview.html',
  'ecom2-template-selector.html': 'ecom2-template-selector.html',
  'ecom2-reorder-job.html': 'ecom2-reorder-job.html',
  // ATB remaps (data uses ATB names, mocks use ecom2 names)
  'atb-address-entry.html': 'ecom2-estimate-entry.html',
  'atb-proposal-builder.html': 'ecom2-proposal-builder.html',
  'atb-proposal-preview.html': 'ecom2-proposal-preview.html',
  'atb-proposal-sent.html': 'ecom2-order-confirmation.html',
};

/** Human-readable labels for screen tabs — action-verb style */
export const screenLabels: Record<string, string> = {
  // Core platform screens
  'ecom2-dashboard-v2.html': 'View Dashboard',
  'ecom2-build-entry.html': 'Choose Build Path',
  'ecom2-nl-empty-state.html': 'Start Conversation',
  'ecom2-nl-processing.html': 'Process Request',
  'ecom2-build-flow.html': 'Build via Chat',
  'ecom2-build-structured.html': 'Build via Form',
  'ecom2-estimate-entry.html': 'Enter Address',
  'ecom2-proposal-builder.html': 'Configure Tiers',
  'ecom2-proposal-preview.html': 'Preview Proposal',
  'ecom2-order-confirmation.html': 'Confirm Order',
  'ecom2-template-selector.html': 'Select Template',
  'ecom2-reorder-job.html': 'Reorder Materials',
  'ecom2-jobs-list.html': 'View Jobs',
  'ecom2-jobs-list-options.html': 'Filter Jobs',
  'ecom2-job-complete-margin.html': 'Review Margin',
  'ecom2-proposals-list.html': 'Manage Proposals',
  // ATB contractor screens
  'atb-address-entry.html': 'Enter Address',
  'atb-measurement-payment.html': 'Pay for Report',
  'atb-bid-perfect-results.html': 'View Measurements',
  'atb-proposal-builder.html': 'Configure Tiers',
  'atb-markup-pricing.html': 'Set Markup',
  'atb-proposal-preview.html': 'Preview Proposal',
  'atb-proposal-sent.html': 'Send Proposal',
  // ATB homeowner screens
  'atb-ho-tier-selection.html': 'Compare Tiers',
  'atb-ho-package-detail.html': 'View Package',
  'atb-ho-signature.html': 'Sign Proposal',
  'atb-ho-deposit.html': 'Pay Deposit',
  'atb-ho-confirmed.html': 'Confirm Acceptance',
  // Post-acceptance screens
  'atb-material-order.html': 'Place Order',
  'atb-job-detail-premium.html': 'View Job Detail',
  'atb-delivery-tracking.html': 'Track Delivery',
};

// ========== HELPER ==========

export function getNodeById(id: string): EcosystemNode | undefined {
  return ecosystemNodes.find((n) => n.id === id);
}
