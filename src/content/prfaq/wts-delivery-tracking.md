---
title: "Walk the Store — Delivery Tracking Experience"
version: "1.0"
owner: "Steven Archambeault"
date: "2026-02"
status: "review"
workstream: "delivery-tracking"
tags: ["delivery", "gps-tracking", "photos", "order-history", "defects"]
---

# Walk the Store: Delivery Tracking Experience — Knowledge Base

## Project Overview

This document contains all context, notes, observations, and working materials for the Walk the Store review of QXO's digital delivery tracking experience. It is intended to serve as the single source of truth for this project, including persona details, journey mapping, screenshot observations, defect tracking, and open items.

---

## Persona: Philip Trask

- **Type:** Tier 2 residential roofing contractor
- **Annual Revenue:** Sub-$1M
- **Weekly Volume:** ~5 projects/orders per week
- **Crew:** Small crew
- **Context for this walk:** Sitting in his truck at 9:45 AM on a Tuesday. He has just placed his 5th order of the week (for Sunday delivery) and is now reviewing the status of his other 4 active orders.

---

## Journey Scope

The walk covers two phases:

**Phase 1: Order Placement (Steps 1–6 in full journey)** Philip logs into qxo.com → navigates to Templates → selects "GAF Residential 1" (his go-to base template for all residential GAF roofing jobs) → inputs quantities from offline measurements → clicks "Add All Items to Cart" → navigates to cart (upper right) → reviews quantities and items → clicks "Proceed to Checkout" → on Shipping page selects Delivery, chooses the following Sunday, selects PM window (homeowner availability) → clicks "Proceed to Order Review" → verifies shipping info → clicks "Place Order."

The order enters the system as **Requested** — submitted to the branch but not yet sent to central dispatching. Branch must process and coordinate with dispatch before it moves to Scheduled.

> **Note:** Phase 1 is included in the FigJam customer journey map but screenshots and visual walkthrough are deferred to a later phase. The current visual walkthrough focuses on Phase 2 only.

**Phase 2: Order History & Delivery Tracking Review** After placing the order, Philip navigates to the Order History page and reviews all 5 orders across the 4 delivery statuses: Requested, Scheduled, Out for Delivery, and Delivered (x2).

---

## Philip's Five Active Orders

|Order #|Jobsite|Status|Date / Time Detail|
|---|---|---|---|
|QXO-91784|TBD — new order|**Requested**|Sunday, PM window — Awaiting dispatch confirmation|
|T09233|128 Florence Ave|**Scheduled**|Thursday — Branch verified, dispatch coordinated|
|T09178|445 Grant St|**Out for Delivery**|ETA was 7:00–9:00 AM — Still "Out for Delivery" at 9:45 AM (⚠️ 45 min overdue)|
|T09102|312 Oakwood Dr|**Delivered**|Earlier Tuesday AM — Photos available (with quality/UX issues)|
|T09087|1540 Birch Ln|**Delivered**|8:32 AM — No photos present|

---

## Key Data Point

**82% on-time delivery rate.** Only 82% of QXO orders hit their estimated delivery window. The remaining ~18% arrive late. For a contractor running 5 orders/week, this means ~1 late delivery per week with zero proactive communication. This is an important source of customer friction and the primary data anchor for this walk-the-store.

---

## Delivery Tracking Statuses (4 States)

1. **Requested** — Order submitted to branch; not yet sent to central dispatching. Awaiting branch processing and dispatch coordination before moving to Scheduled.
2. **Scheduled** — Branch has verified all contents and worked with dispatch. Delivery date confirmed. May or may not have a time window yet.
3. **Out for Delivery** — Driver has accepted the route. GPS map shows truck location updated every 5 minutes (not fully live). ETA time range displayed (e.g., 10:00 AM – 11:00 AM or 7:00 AM – 9:00 AM).
4. **Delivered** — Order marked as delivered with timestamp. May or may not have delivery photos attached.

---

## Screenshot Observations (Uploaded Feb 2026)

### Screenshot 1: Order History Landing Page ("Submitted Orders")

**What it shows:**

- Page titled "Submitted orders"
- Filter bar: "Order placed date" dropdown, Start date, End date
- Shows "1-10 of 18472 Orders" with Sort by dropdown
- "Select all showing" checkbox and "Download selected orders" button
- Each order row shows: checkbox, Job/Po#, Order #, Account, Total, Date, Status badge, Details dropdown
- Visible statuses: "Ready delivery/pick up" (green badge), "Delivered" (green badge)
- Job/PO# is a clickable blue link (e.g., "154 PAUL PENA DR", "ERIK", "612 MCFADIN", "WILSON")

**Key observations for the walk:**

- Flat list with no delivery-centric grouping (no "Today" / "Upcoming" / "Completed")
- No delivery date visible on the list — only "Date" which appears to be the order placed date
- No delivery time window visible on the list
- No jobsite address visible in the main row (Job/PO# serves as the identifier but may be a PO name, not always an address)
- No urgency indicators — an overdue out-for-delivery order would look the same as an on-track one
- Status badges are generic — "Ready delivery/pick up" doesn't distinguish between Requested, Scheduled, and Out for Delivery
- No ETA or delivery date at a glance — Philip must open each order to find this information
- Sort options unclear — can Philip sort by delivery date? By status?

### Screenshot 2: Order Detail — Delivered Without Photos (Order UA18788)

**What it shows:**

- Order UA18788, Gulf Freeway Branch, Date placed 02-25-2026
- Status badge: "Delivered" (blue/green)
- Job account: LENNAR HOMES
- Ship to: 1009 WOODHAVEN LAKES DR TRAILS AT WOODHAVEN CORE, LA MARQUE, TX, 77568
- Notes: GROUND DROP
- Order summary: $877.91 subtotal, other charges and tax calculated at invoicing
- Delivery tracking section with 4-state progress indicator: ● Requested ● Scheduled ● Out for delivery ● Delivered
- "Last updated: 02/26/2026"
- Delivery address displayed
- Green checkmark: "Successfully delivered — Delivered at 7:01 AM on 02/26/2026"
- **No delivery photos visible below the tracking card**
- Tabs at bottom: "Item list" | "Product documents" | "Warranty submission info"
- Top actions: "Copy to template" button, "Reorder materials" button (blue)

**Key observations for the walk:**

- Confirmed timestamp present (7:01 AM) even without photos — this matches the walk scenario for the "delivered without photos" order
- No explanation for why photos are absent
- No "Request Photos" or "Report Issue" mechanism visible
- The 4-state progress bar exists but dots are not clearly differentiated in terms of which are completed vs. current
- "Copy to template" and "Reorder materials" are useful re-engagement features
- Notes field shows "GROUND DROP" — delivery instructions do exist in some form, but it's unclear if the contractor can set these digitally or if they were entered by the branch

### Screenshot 3: Order Detail — Delivered With Photos (Order TZ84631)

**What it shows:**

- Order TZ84631, Katy Branch, Date placed 02-23-2026
- Status: "Delivered"
- Job account: LENNAR HOMES
- Ship to: 26842 VANILLA PEARLS LN. ANNISTON 40' CORE COTTAGE, KATY, TX, 77493
- Notes: ROOF LOAD SHINGLE COLOR: WEATHERWOOD
- Order summary: $1,525.46
- Delivery tracking: "Successfully delivered — Delivered at 10:36 AM on 02/25/2026"
- **Photo thumbnail carousel visible below tracking card** — at least 5 photos showing, with a blue ">" arrow indicating more photos available by scrolling right
- Visible photo thumbnails include: what appears to be materials on a roof/driveway from various angles, an invoice/BOL photo, and a photo showing a tire (possibly truck/delivery context)

**Key observations for the walk:**

- Photos are present but displayed as small thumbnails — need to tap to enlarge
- The carousel has a horizontal scroll with the blue ">" arrow — this is the navigation mechanism
- Photo thumbnails are small and it's hard to assess quality, orientation, or content from the thumbnail view alone
- No visible sharing mechanism
- No geotag or timestamp metadata displayed on/near the photos
- The mix of photo content (materials, invoice, truck context) suggests drivers take whatever photos they can but there's no standardized photo checklist

### Screenshot 4: Delivery Photo Close-Up (Expanded from TZ84631)

**What it shows:**

- A photo has been tapped/expanded and displays as a large modal overlay on top of the order detail page
- Two photos visible in the expanded view:
    - Top photo: appears to be taken from inside the truck cab — shows side mirror and what looks like materials through the windshield. Photo is oriented strangely/at an angle.
    - Bottom photo: a QXO Sales Order / BOL document (blue carbon copy style). The invoice is being held by someone's hand inside the truck. Text is small and would be very difficult to read on a phone screen.
- The expanded photo view appears to stack photos vertically rather than providing a swipeable carousel
- The underlying order detail page is grayed out behind the modal
- **No close/dismiss button clearly visible** — user likely taps outside the modal or uses back navigation
- **No photo cycling controls** (prev/next arrows) visible in the expanded view

**Key observations for the walk:**

- Confirms the orientation issue — photos taken at odd angles, inside the truck, not oriented for digital viewing
- Confirms the readability issue — BOL/invoice photo is a physical document photographed at an angle, text is small and hard to read
- Confirms the navigation issue — photos appear to stack rather than providing swipe/carousel navigation in the expanded view
- No zoom capability evident
- No sharing mechanism in the expanded view
- Photos are clearly taken by the driver in the truck cab, not at the delivery site — raises question about whether these photos actually prove materials were delivered to the correct location
- The BOL photo is a photo of a paper document — this is the only "digital" record of what was delivered, and it's barely legible

### Screenshot 5: Order Detail — Scheduled (Order UA18801)

**What it shows:**

- Order UA18801, Gulf Freeway Branch, Date placed 02-25-2026
- Status badge: "Ready Delivery/Pick up" (green)
- Job account: LENNAR HOMES
- Ship to: 1009 WOODHAVEN LAKES DR TRAILS AT WOODHAVEN CORE, LA MARQUE, TX, 77568
- Notes: ROOF LOAD SHINGLE COLOR: WEATHERWOOD
- Order summary: $2,543.85
- Full QXO navigation bar visible: Browse, Order history, Quotes, Templates, Invoices, EagleView, Storm+, Commercial guided quote
- Delivery tracking section: ● Requested ● Scheduled ○ Out for delivery ○ Delivered
    - Requested and Scheduled dots are filled (blue), Out for delivery and Delivered are unfilled (gray)
- "Scheduled; Delivery date: 02/26/2026 — Delivery window: 1:00 PM – 2:00 PM"
- Last updated: 02/26/2026

**Key observations for the walk:**

- **This order DOES have a delivery time window (1:00 PM – 2:00 PM)** — this is a 1-hour window, which is actually more granular than the "AM/PM" gap described in the original walk. This is a positive finding worth noting.
- The 4-state progress bar is clearer here — filled blue dots for completed states, unfilled gray dots for upcoming states
- Status badge on this order says "Ready Delivery/Pick up" rather than "Scheduled" — naming inconsistency between the order list badge and the delivery tracking terminology
- No delivery instructions input visible — the Notes field shows "ROOF LOAD SHINGLE COLOR: WEATHERWOOD" which appears to be branch-entered
- No self-service reschedule option visible
- No "Add to Calendar" option
- No night-before confirmation mechanism visible

### Pending Screenshot: Out for Delivery with GPS Map

- Steven plans to capture this later today based on the scheduled order (UA18801) which has a 1:00–2:00 PM delivery window on 02/26/2026
- This will show the GPS map with truck location and ETA window
- For the walk-the-store, the overdue scenario (ETA was 7:00–9:00 AM, now 9:45 AM) will need to be inferred from this screenshot since it's very difficult to find a live order that happens to be overdue at the moment of capture

---

## Status Badge Inconsistency (Observation)

The Order History list uses the badge "Ready delivery/pick up" for orders that are in the Scheduled state within the delivery tracking system. The delivery tracking card inside the order detail uses the terminology "Scheduled." This naming mismatch may cause confusion — a contractor might not immediately connect "Ready delivery/pick up" on the list with "Scheduled" on the detail page. Additionally, "Ready delivery/pick up" conflates two different fulfillment methods (delivery vs. pickup) into a single badge.

---

## Delivery Photo Issues (Confirmed from Screenshots)

1. **Orientation:** Photos taken at odd angles, inside the truck cab. Not auto-rotated for proper viewing.
2. **Quality:** BOL/invoice photos are of physical paper documents, photographed at angles, small text, barely legible on screen.
3. **Navigation:** Expanded photo view appears to stack photos vertically rather than swipeable carousel. No prev/next controls visible. Must close and reopen to cycle.
4. **Sharing:** No sharing mechanism visible in either thumbnail or expanded view.
5. **Geotag/Timestamp:** No metadata displayed on or near photos.
6. **Content relevance:** Some photos taken inside the truck cab (mirror, windshield visible) rather than at the delivery site — may not actually prove materials were delivered to the correct location.
7. **No standardized photo checklist:** Driver appears to take whatever photos they want. No enforcement of "photo of materials at delivery site" + "photo of BOL" as a minimum set.

---

## Photo Absence Reasons (QXO Perspective)

When delivery photos are not present on a delivered order, there are three possible causes:

1. The driver simply did not take any photos.
2. The driver took photos but the upload failed due to poor cellular service.
3. The driver had trouble opening the app due to connectivity issues (e.g., rural location).

The current system provides no distinction between these scenarios — the absence looks identical regardless of root cause. Photos are not geotagged or timestamped, so even if a failed upload is eventually recovered, there is no metadata proving the photos were taken at the delivery location and time.

---

## Defect Summary (19 Total: 4 P0, 11 P1, 2 P2)

### P0 — Critical (Experience-Breaking)

|ID|Step|Issue|
|---|---|---|
|D-01|Out for Delivery|No alert/status change when ETA window breached; 82% on-time = ~1 in 5 affected|
|D-02|Out for Delivery|No revised ETA; original window displayed as current after breach|
|D-03|Delivered (no photos)|Photos lost when upload fails; no offline queue or metadata preservation|
|D-04|Out for Delivery|No proactive push notification on missed window|

### P1 — High (Significant Friction)

|ID|Step|Issue|
|---|---|---|
|D-05|Order History|Flat list, no delivery grouping or urgency indicators|
|D-06|Delivered (photos)|Photos sideways/upside down; no auto-rotation|
|D-07|Delivered (photos)|No photo carousel; must close/reopen each image|
|D-08|Delivered (photos)|Can't share photos with non-QXO users|
|D-09|Delivered (both)|Photos not geotagged or timestamped|
|D-10|Delivered (no photos)|No distinction between "not taken" and "upload failed"|
|D-11|Out for Delivery|GPS: pin only, no route/stop queue/direction|
|D-12|Out for Delivery|No in-app driver/dispatch communication|
|D-13|Scheduled|Scheduled orders may lack time window (varies)|
|D-14|Scheduled|No self-service rescheduling|
|D-15|Requested|No confirmation timeline for when status will advance|

### P2 — Medium (Improvement Opportunities)

|ID|Step|Issue|
|---|---|---|
|D-16|Order Placement|No waste factor/quantity validation in templates|
|D-17|Delivered (photos)|Some photos blurry; no quality enforcement at capture|

---

## Competitive Benchmarking Summary

|Capability|QXO|ABC Supply|Beacon|Amazon/FedEx|
|---|---|---|---|---|
|Delivery dashboard|Flat list|Jobsite grouping|No digital tracking|"Today" dashboard|
|GPS tracking|5-min pin (no route)|None|None|Live route + stop count|
|ETA accuracy|82% on-time; no update on miss|Phone estimate|No ETA|Dynamic 15-min window; auto-updates|
|Overdue alerting|None|None|None|Proactive push with revised ETA|
|Delivery photos|Available; no geotag/timestamp; poor UX|Select branches|None|GPS-stamped; shareable|
|Self-service reschedule|Not available|Not available|Not available|Full reschedule/redirect/hold|
|Offline photo retry|Lost on failure|N/A|N/A|Local queue + auto-retry|

---

## Metrics Framework

### Leading Indicators

|Metric|Current|Target (6 Mo)|
|---|---|---|
|On-time delivery rate|82%|92%+|
|Delay notifications sent (% of late deliveries)|0%|100%|
|Photo attachment rate|Not tracked|95%+|
|Geotag + timestamp compliance|0%|100%|
|Failed upload recovery rate|0%|95%+|
|"Where's my order" calls to branch|Not tracked|-50%|

### Lagging Indicators

|Metric|Current|Target (6 Mo)|
|---|---|---|
|Contractor NPS (delivery)|Baseline TBD|+20 pts|
|Digital order repeat rate (90-day)|Baseline TBD|+25%|
|Share of wallet (tracking users vs. non)|Baseline TBD|+15%|
|Delivery dispute resolution time|Not tracked|< 24 hours|

---

## Open Items / Next Steps

1. **Capture Out for Delivery screenshot** — Steven planning to capture from order UA18801 (1:00–2:00 PM window on 02/26/2026) showing GPS map and ETA
2. **Locate "thoughts on Order History WTS" file** — in knowledge base/intake subfolder; needs to be incorporated into this document
3. **FigJam customer journey map** — needs to cover the full end-to-end flow (template selection through all delivery states) even though visual walkthrough only covers Order History forward
4. **Templates walkthrough screenshots** — deferred to later phase; Steps 1–6 will be documented separately
5. **Update walk-the-store MD** — incorporate screenshot observations and any notes from the "thoughts" file, then produce final 6-page version
6. **Placeholders to fill:** Appendix B [INSERT: survey/interview source], Appendix D [INSERT: sample size for photo audit]

---

## Document Versions

- **Walk-the-Store-Delivery-Tracking-Philip-Trask.md** — condensed 6-page version for senior leadership review (current working draft in outputs)
- **This file (knowledge base)** — comprehensive reference with all context, screenshot observations, and working notes

![[Pasted image 20260227102622.png]]
