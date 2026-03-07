---
title: "ATB Blue — PR FAQ v4.3 Delta Sections"
version: "4.3-delta"
owner: "Steven Archambeault"
date: "2026-03"
status: "review"
workstream: "atb-blue"
tags: ["pricing", "srs-roofhub", "financial-model", "loyalty-rebate", "qxo-wallet"]
---

# ATB Blue, PR/FAQ v4.3 Delta Sections

**Purpose:** These are the new and modified sections for review before merging into the full Working Backwards document. The PR narrative (press release) is untouched.

**Changes from v4.2:**
1. New FAQ: "Why is $20 the right price point for QXO?"
2. New FAQ: "What about SRS RoofHub?" (consolidated, emphasis on ML/AI build layer urgency)
3. Removed FAQ: "What about competitors?" (CRM pricing covered in $20 FAQ; SRS covered in dedicated FAQ; data moat claim not defensible)
4. Clarified financial relationship language (new FAQ: "Who pays whom?" placed after existing homeowner acceptance FAQ; financing covered within)
5. New section: "Hot Debate Topics" (7 topics including loyalty rebate model)

---

## NEW FAQ: Why is $20 the right price point for QXO?

Twenty dollars is not a revenue play on the report itself. It is the entry fee for a materials sales funnel.

When a contractor pays $20, QXO passes that cost through to EagleView for a Bid Perfect measurement report. There is no meaningful margin on the report sale for QXO. The entire $20 is customer acquisition cost.

The economics change the moment a homeowner signs the contract. That signature triggers a guaranteed Premium upgrade at no additional charge to the contractor, and that upgrade guarantees a materials order. Every single accepted proposal results in a Premium upgrade and a materials purchase. There is no probability to model on the upgrade itself. The only variable is the contractor's close rate, which determines how many $20 reports get purchased across leads that do not convert.

Here is the math on a won deal. QXO absorbs the Premium upgrade at a weighted average cost of $25.58 per report based on the current EagleView contract. The contractor who now holds a full Premium takeoff with exact linear footages for every ridge, hip, valley, rake, and eave needs materials to complete the job. At QXO's online average order value of $4,500 and a 22% distributor gross margin, that materials order generates approximately $990 in gross margin. The $25.58 upgrade cost yields a 39x return. For context, typical SaaS customer acquisition costs take 12 to 18 months to recover. ATB Blue's upgrade cost pays back the moment the order is placed.

Now zoom out to the full funnel. At a 30% close rate, a contractor purchases roughly 3.3 Bid Perfect reports at $20 each before winning a deal. That is about $67 in total measurement cost per won job. QXO's total cost on the won deal is $67 in Bid Perfect passthroughs plus $25.58 for the Premium upgrade, totaling roughly $93. Against $990 in material gross margin, the all-in CAC is still under 10% of gross margin with immediate payback.

Twenty dollars also works as a round number that is easy to market, easy to remember, and low enough to be invisible on a $15,000 roofing job. It is 0.33% of a contractor's gross profit at 40% margins. No contractor is going to lose sleep over $20 on a lead they believe in.

**Why not free for everyone?** A $20 entry cost serves as a natural quality filter. A contractor who believes in a lead will spend $20 without hesitation. A contractor who is not sure will skip it. This self-selection means QXO's Premium upgrade investment (the $25.58 per accepted deal) concentrates on leads that contractors have already pre-qualified with their own money. A free model removes this filter and exposes QXO to report costs on speculative or low-intent leads where the contractor has no skin in the game.

That said, there is a strong case for rewarding high-performing contractors. A contractor with a consistently high close rate and strong basket sizes generates enough materials margin to more than cover the cost of their reports, including the ones that do not convert. Rather than simply making reports free (which removes the quality filter entirely), the preferred model is to charge $20 upfront and credit that amount back to the contractor's QXO Wallet when qualifying criteria are met. The criteria could include a minimum close rate, a minimum order size, or a full-roof takeoff requirement. This preserves the skin-in-the-game signal on every report pull while effectively making reports free for contractors who are already generating strong materials revenue for QXO. Credits flowing into QXO Wallet also reinforce that platform as the contractor's central payment and rewards hub. The specific qualifying thresholds and rebate mechanics are explored in detail under Hot Debate Topic #7 below.

The bottom line: ATB Blue at $20 is not a measurement product with a margin. It is a materials sales funnel with a $20 qualification fee. The report fee is the loss leader. The roofing materials are the business.

---

## NEW FAQ: What about SRS RoofHub?

SRS Distribution's RoofHub is the most feature-complete distributor digital platform in residential roofing and the most direct competitive threat to ATB Blue. It is free. It already has Good/Better/Best proposals with real-time branch pricing, e-signatures, one-click ordering, delivery tracking, and integrations with six CRM partners and three measurement providers. The platform carries a 4.9-star iOS rating across 1,200+ reviews. Most critically, RoofHub's Smart Templates use machine learning trained on each contractor's actual SRS order history and manufacturer preferences to pre-build material configurations that get smarter with every purchase. SRS has roughly 150 digital engineers shipping 3 to 5 AI capabilities per month, backed by Home Depot's $18.25 billion acquisition. Their August 2025 release introduced AI-generated options in Smart Templates, a direct move toward auto-configuration. ATB Blue's Builds intelligence layer must be at least as smart as Smart Templates at launch, and ideally smarter, by incorporating explicit contractor preferences, warranty certifications, and branch expertise on top of transaction history. If the AI-generated tier defaults are not meaningfully better than what RoofHub already delivers, the competitive argument falls apart.

ATB Blue's advantage is economic and structural. RoofHub does not subsidize measurement costs, so contractors pay EagleView directly on every lead, win or lose. ATB Blue inverts that model by absorbing the Premium upgrade cost only on confirmed sales, saving contractors roughly $131 per won job in total measurement costs. That measurement economics story is strong enough on its own to justify a contractor trying the tool. But the bigger strategic play is what ATB Blue sets up downstream. Every accepted proposal creates a persistent record that ties the measurement, the build configuration, the homeowner acceptance, and the materials order together under one address. That record becomes the foundation for the Jobs paradigm: a centralized hub where contractors track proposals, manage order history, and eventually operate something closer to a lightweight CRM, all inside QXO. RoofHub is order-centric. Each transaction exists independently, and contractors export proposals one-way into third-party CRMs to manage the lifecycle. RoofHub does not have a native Job entity, and building one would require rearchitecting their data model. The Jobs concept is explored in its own dedicated PR/FAQ (see note below).

> **Note:** The Jobs paradigm (address-based project management, CRM-light functionality, order history hub) requires its own Working Backwards document. This is a future workshop item and is not covered in depth in this PR/FAQ. ATB Blue's role is to generate enough standalone value in the proposal-to-order loop that the transition into Jobs feels natural rather than forced.

---

## NEW FAQ: Who pays whom, and what does QXO actually earn?

*Placement note: This FAQ should follow immediately after the existing "What happens after the homeowner accepts?" FAQ in the merged document.*

The financial relationships in ATB Blue must be unambiguous because they define QXO's role and its limits.

The homeowner pays the contractor. The full project price, including materials, labor, overhead, and profit, goes directly from the homeowner to the contractor. QXO is not in the payment flow between the homeowner and the contractor. QXO does not take a percentage of the project price. QXO does not earn a transaction fee on the homeowner's payment. The contractor sets the price, the homeowner agrees to it, and the contractor collects it.

The contractor pays QXO for materials. When the homeowner accepts a proposal and the order fires, the materials are purchased on the contractor's existing QXO credit account at the contractor's negotiated pricing. This is the same commercial relationship the contractor already has with their QXO branch. ATB Blue does not change the pricing, the credit terms, or the payment structure. QXO earns distributor margin on the materials sale. That is the entire revenue model.

Everything the contractor adds on top of QXO's material cost belongs to the contractor. Labor markup, overhead percentage, profit margin, and item-level material markup are configured by the contractor in the proposal builder and applied to the homeowner-facing price. The homeowner sees a single all-in project price per tier. They do not see QXO's wholesale pricing, the contractor's labor rate, the overhead calculation, or any item-level markups. The contractor controls what the homeowner sees. QXO's wholesale cost is never exposed.

The item-level material markup deserves specific mention. In addition to labor and overhead, the contractor can apply a per-SKU percentage increase on the wholesale cost of individual materials, hidden from the homeowner alongside the labor markup. This gives contractors a second margin lever: they can mark up specific high-margin items or adjust material pricing strategy by tier without changing their overall labor rates. This capability exists because contractors routinely mark up materials beyond wholesale and expect any proposal tool to support that practice. QXO does not participate in or benefit from these markups. They flow entirely to the contractor.

ATB Blue is also designed to support third-party homeowner financing integrations. A contractor who wants to offer the homeowner a payment plan or financing option can do so through an integrated financing partner. This is not QXO lending. It is a third-party service that facilitates the transaction between the homeowner and the contractor. SRS Distribution has announced a planned integration with ProFund for this capability in RoofHub, establishing it as a competitive expectation. ATB Blue should support equivalent functionality at or near launch. The specific financing partner is a vendor selection decision, not a product design decision. The platform needs to support the integration point regardless of which provider is selected.

---

## STOP READING

*Everything below this line is internal working material: engineering dependencies, unresolved design decisions, and strategic risks that require cross-functional alignment before the product spec is finalized. These are not FAQ answers. They are open questions that the PR/FAQ surfaces but does not resolve.*

---

## Hot Debate Topics

### 1. Item Preferences and Brand Saving: Critical Prerequisite

ATB Blue's tier defaults depend on the contractor having saved item preferences and preferred brands at the account level. This capability does not currently exist on QXO.com. The site does not support saving brand preferences, preferred SKUs, or default item selections to a contractor's profile.

Without this, there is no intelligence layer to power the good-better-best defaults, and every proposal starts from scratch, making ATB Blue a slower, more manual experience than RoofHub's template system. This is the highest-priority prerequisite. The question for engineering is not whether to build it, but how deep the preference model needs to be at launch. Minimum viable: brand preference and warranty level per product category. Full vision: per-SKU defaults with learned weighting from purchase history.

### 2. Bidirectional Proposal Link: The Most Critical Net-New Build

The end-to-end ATB Blue value loop requires an interactive, hosted proposal experience. A page where the homeowner can view tiers, compare options, e-sign, and submit a deposit. This does not exist on QXO.com today.

Without it, the proposal is a static PDF, the homeowner acceptance happens offline (phone call or email), and the contractor must manually return to QXO to trigger the order. This collapses the automation and eliminates the primary differentiation against both CRMs and RoofHub. The bidirectional proposal link is the single feature that makes ATB Blue's acceptance-to-order path automatic rather than manual. If we ship ATB Blue without it, we have built a slightly better version of V1.

The open design questions: How is the link structured (subdomain, vanity URL, unique hash)? What happens when the proposal expires? Does the homeowner create an account or is this a guest experience? How do we handle multiple proposals to the same homeowner from different contractors?

### 3. Price Guarantee Window and Expiration

When a contractor sends a proposal, QXO guarantees the pricing and material availability for a defined window. The duration of this window is not finalized.

Too short (7 days): homeowners feel rushed, acceptance rates drop, and the professional edge of the proposal is undermined. Too long (60+ days): QXO carries pricing risk during material cost fluctuations, and branch-level inventory reservations become operationally complex.

The expiration mechanism needs to answer: Does the proposal die when the window closes, auto-update with new pricing, or require the contractor to regenerate? Does QXO reserve inventory at the branch level during the guarantee period, or is availability checked at the moment of acceptance? If prices increase during the window, does QXO absorb the difference or pass it through?

This directly impacts QXO's margin exposure and the contractor's confidence in the tool. It needs a decision from both product and finance leadership.

### 4. SRS RoofHub Velocity and Feature Parity Risk

SRS's digital engineering team of approximately 150 engineers is shipping 3 to 5 AI capabilities per month. Their August 2025 release introduced AI-generated options in Smart Templates, a direct move toward the auto-configuration that ATB Blue positions as a differentiator. Their planned but unshipped roadmap includes ProFund financing, photo uploads with annotations, enriched property reports, and a proposal analytics dashboard.

The strategic risk is not that RoofHub has more features today. It does, and it has for years. The risk is that ATB Blue's differentiation points (measurement economics, auto-generated tiers, automated acceptance-to-order) have a shelf life. If SRS ships auto-tier generation and absorbs measurement costs on won deals within the next 12 months, ATB Blue's competitive narrative narrows significantly.

The question for the organization: What is ATB Blue's time-to-market, and does that timeline account for the probability that SRS closes specific feature gaps before we launch? If ATB Blue ships Q3 2026 and SRS ships auto-tier generation and financing by Q2 2026, the competitive landscape on launch day may look different than the one described in this document.

### 5. Measurement Data Accuracy: Inherited Risk from TC V1

ATB Blue's speed advantage depends on Bid Perfect measurements being accurate enough that contractors trust them without climbing on the roof. The success of ATB Blue is downstream of the measurement calculation accuracy established in Takeoff Calculator V1.

If V1's measurement calculations have known accuracy issues, even edge cases on complex roof geometries, those issues carry forward into ATB Blue proposals. A contractor who generates a proposal based on inaccurate Bid Perfect data and loses money on the Premium order will not use the tool again. The first few incorrect proposals in the Denver pilot could poison adoption through contractor word-of-mouth. These accuracy questions will be validated through the internal pilot prototype launch of V1.

### 6. Financial Relationship Clarity: QXO's Role Boundaries

ATB Blue creates a three-party transaction: the homeowner pays the contractor, the contractor pays QXO for materials, and QXO pays EagleView for measurement data. QXO's revenue is exclusively the distributor margin on materials. All labor markup, overhead, profit margin, and item-level material markup flow to the contractor.

This must be communicated clearly to both internal stakeholders and contractors. Internally, ATB Blue's revenue attribution should be measured as materials margin driven by the tool, not as report fee revenue. The $20 per report is a cost recovery mechanism, not a revenue line. If internal reporting treats report fees as product revenue, it will misrepresent ATB Blue's business model and create misaligned incentive structures.

Externally, contractors need to understand that QXO does not see, track, or benefit from the labor and markup they apply to proposals. The contractor's pricing strategy is private. This is a trust prerequisite. If contractors suspect QXO is using their markup data to adjust wholesale pricing or target them with competitor products, adoption will stall.

### 7. Loyalty Rebate Model: How to Reward High-Performing Contractors Without Removing the Quality Filter

The $20 Bid Perfect fee works as customer acquisition cost and as a lead quality filter. But the 39x return on won deals means QXO is leaving significant goodwill on the table by charging contractors who consistently close and order materials. The question is how to give it back without creating a free-for-all that attracts report abuse or competitor leakage.

The core principle across all options: charge $20 upfront on every report pull, then credit it back to QXO Wallet when the contractor meets qualifying criteria. This preserves the skin-in-the-game signal while effectively making reports free for contractors who generate strong materials revenue. Credits flowing into QXO Wallet reinforce that platform as the contractor's central financial hub across all QXO products.

There is also a risk that needs to be addressed in any model: a contractor could pull free (or effectively free) Bid Perfect reports through QXO and use those measurements to order materials from a competitor. The rebate mechanics below are designed to tie the credit directly to QXO purchasing behavior, not just to proposal activity.

**Option A: Full-Roof Order Credit.** The simplest version. The contractor pays $20 per report. If the homeowner accepts and the resulting materials order is a full roof replacement (not a partial repair), QXO credits the $20 back to QXO Wallet. If the deal does not close or the order is a partial repair below a defined threshold, the $20 stays collected.

This directly addresses the partial repair concern. A contractor pulling a Bid Perfect for a $600 ridge cap repair does not get a credit. A contractor closing a $4,500+ full replacement does. The downside is binary thinking: the contractor either gets the full credit or nothing, which does not reward incremental improvement in close rates or basket sizes.

**Option B: Basket Threshold Tiers.** The $20 credit scales with order size. Orders over $2,500 earn the $20 credit. Orders over $5,000 earn $20 plus an additional bonus credit (for example, $10 or $15 toward the next report). Orders under $2,500 earn nothing.

This creates a natural incentive to push homeowners toward higher tiers and larger basket sizes. It also makes the math work cleanly: at 22% GM, a $2,500 order generates $550 in margin, which easily covers the $20 credit plus the $25.58 upgrade cost. The tiered structure gives contractors something to aim for and makes "upgrade to the Better tier" a financially rewarded behavior.

**Option C: QXO Wallet Spending Account (Preferred in Combination with B).** Instead of crediting $20 per qualifying order, QXO deposits a percentage of each qualifying materials order into QXO Wallet as a running balance. For example, 1% of every order over $2,500. On a $4,500 order, that is $45 in Wallet credit, more than enough to cover two future Bid Perfect reports.

This model creates a self-funding cycle. The more a contractor closes and orders, the larger their Wallet balance grows, and the more "free" reports they can pull from that balance. Contractors who go cold or take their business to a competitor see their earning rate drop and their balance stop growing. The Wallet balance also becomes a switching cost: a contractor sitting on $200 in QXO Wallet credits has a reason to keep pulling reports through QXO rather than moving to RoofHub.

The combination of B and C is particularly strong. B sets the qualifying floor (only orders above $2,500 earn credits). C determines the reward mechanic (percentage-based deposit into Wallet rather than a flat $20 rebate). Together they create a system where high-performing contractors accumulate Wallet value proportional to their materials purchasing, which they can spend on future Bid Perfect reports or potentially other QXO services.

**Option D: Confidence Score Multiplier (Bronze / Silver / Gold).** QXO builds an internal contractor scoring system based on trailing 90-day close rate, average basket size, order frequency, and digital engagement (percentage of orders placed through QXO.com or integrations). Each contractor receives a tier assignment that determines their Wallet earning rate:

Bronze (baseline): 0.5% of qualifying orders deposited to Wallet. This is the default tier for new or low-activity contractors. At $4,500 AOV, that is $22.50 per won deal, barely covering one report. Bronze contractors are essentially paying full price with a small loyalty perk.

Silver (mid-tier): 1.0% of qualifying orders. At $4,500 AOV, $45 per won deal. A Silver contractor closing 3 deals per month accumulates $135/month in Wallet credit, covering roughly 7 Bid Perfect reports. At that volume, reports are effectively free if they maintain their close rate.

Gold (top performers): 1.5% of qualifying orders plus priority access to new features and beta programs. At $4,500 AOV, $67.50 per won deal. A Gold contractor at 15+ reports per month with a 35%+ close rate is generating so much materials margin that the Wallet credits are a rounding error on QXO's P&L, but they represent significant perceived value to the contractor.

The scoring system also creates a natural defense against competitor leakage. If a contractor's close rate drops because they are sending some deals through a competitor, their score drops and their earning rate falls. The system rewards loyalty without explicitly policing behavior.

The open question on Option D is complexity. Building a scoring engine, surfacing tier status to contractors, managing tier transitions, and communicating the rules all require product and engineering investment that may not be justified at launch. This could be a Phase 2 enhancement layered on top of a simpler Option A or B+C launch model.

**Option E: Closing Bonus.** Rather than crediting back the $20 report cost, QXO deposits a flat bonus (for example, $50) into QXO Wallet for every qualified close that meets minimum criteria (full roof replacement, order placed through QXO, minimum basket size of $2,500). The $20 report fee is not refunded. Instead, the contractor receives a larger reward that more than covers the report cost and incentivizes the behavior QXO actually cares about: closing deals and ordering materials.

At $50 per qualified close, a contractor with a 30% close rate pulling 10 reports per month wins 3 deals and earns $150 in Wallet credits against $200 in report costs. They are still paying net $50/month for reports, but the closing bonus reframes the relationship from "I pay for reports" to "I earn rewards when I close." At a 40% close rate, the same contractor wins 4 deals, earns $200, and breaks even on report costs entirely.

The psychology matters here. A closing bonus feels like QXO is investing in the contractor's success rather than refunding a fee. It also decouples the reward from the report cost, which gives QXO flexibility to adjust the $20 price point or the $50 bonus independently over time.

**Comparison of all five options:**

| Dimension | A: Full-Roof Credit | B: Basket Tiers | C: Wallet % | D: Score Multiplier | E: Closing Bonus |
|---|---|---|---|---|---|
| Reward per won deal ($4,500 AOV) | $20 credit | $20 to $35 credit | ~$45 (at 1%) | $22.50 to $67.50 | $50 flat |
| Partial repair protection | Yes (binary) | Yes (threshold) | Yes (threshold) | Yes (scoring) | Yes (criteria) |
| Competitor leakage defense | Low | Low | Medium (balance as switching cost) | High (score drops) | Medium (tied to QXO orders) |
| QXO Wallet reinforcement | Basic | Basic | Strong | Strong | Strong |
| Implementation complexity | Low | Low | Medium | High | Low |
| Contractor perception | "Fee refund" | "Tiered rewards" | "Earning account" | "Loyalty program" | "Performance bonus" |
| Recommended phase | Launch MVP | Launch MVP | Launch or Phase 2 | Phase 2 | Launch alternative |

**Recommended approach for launch:** Start with Option B (basket threshold tiers) as the minimum viable mechanic, with Option C (Wallet percentage) layered on if the QXO Wallet platform is ready. This combination is simple enough to ship at launch, addresses the partial repair risk, creates a Wallet switching cost, and scales naturally with contractor performance. Option D (confidence scoring) should be planned as a Phase 2 enhancement once QXO has enough behavioral data to build meaningful scores. Option E is an alternative to B if the team prefers a "bonus" framing over a "credit" framing.

The qualifying criteria across all options should use trailing 90-day data to prevent gaming and to reward sustained performance rather than one-off spikes. A volume floor of 5 reports per month should also apply to prevent low-volume contractors from qualifying on a single lucky close.

---

*End of delta sections. These are ready for review before merging into v4.3.*
