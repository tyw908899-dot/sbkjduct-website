# SBKJ World-Class Website Master Plan

## Phase 0: Current Site Audit

### 1) Homepage messaging
- **Current state:** Strong ambition and industrial tone, but it includes multiple hard numbers and claims that are currently unverified.
- **Gap:** High legal/commercial risk if buyers request proof and data cannot be validated quickly.
- **Action:** Replace all unverified metrics with explicit `[VERIFY: ...]` placeholders and elevate trust architecture.

### 2) Product persuasion
- **Current state:** Large machine catalog exists, but narrative is mostly model-led.
- **Gap:** Weak purchase decision flow (problem -> configuration -> model shortlist -> quote).
- **Action:** Introduce category pillars + standardized product templates with buying criteria, FAQs, and cross-links.

### 3) Positioning clarity
- **Current state:** "factory builder" message appears, but not fully systematized across pages.
- **Gap:** Users can still experience the site as a machine list instead of an end-to-end manufacturing solution.
- **Action:** Build complete IA around pillar -> solutions -> industries -> trust -> quote.

### 4) Differentiation
- **Current state:** Differentiation exists but often presented as unsupported quantitative claims.
- **Gap:** Low confidence among procurement/engineering buyers without visible proof mechanisms.
- **Action:** Add "Proof You Can Verify" sections and explicit asset checklist placeholders.

### 5) Conversion path
- **Current state:** Contact path exists, but intent segmentation is limited.
- **Gap:** No dedicated quote funnel architecture with machine/line intent capture.
- **Action:** Build `/request-quote/` and mini recommendation forms with mailto fallback.

## Competitor Teardown

### Benchmark 1: spiro.ch
- **Strengths to emulate:** Swiss-grade clarity, restrained visual hierarchy, proof-first storytelling, clear product-to-service continuity.
- **Execution pattern to copy:** concise hero, trust signal strip, outcome-led sections, technical confidence without clutter.

### Benchmark 2: sentemakina.com.tr
- **Strengths to emulate:** manufacturer credibility, broad production scope, industrial tonality.
- **Execution pattern to copy:** clear machinery breadth and practical buyer-oriented language.

### Benchmark 3: ductworkmachinery.com
- **Strengths to emulate:** SEO footprint via keyword-focused page structure and long-tail targeting.
- **Execution pattern to copy:** category/topic pages with clear internal linking for crawl depth.

### Additional competitor 4: haskelsheetmetal.com
- **Strengths:** detailed equipment category articulation and practical production language.
- **Pattern:** direct equipment purpose + applications + buyer criteria.

### Additional competitor 5: lockformer.com
- **Strengths:** established authority signaling and process-oriented communication.
- **Pattern:** trust-led structure, clear market framing for serious buyers.

### Additional competitor 6: mestekmachinery.com
- **Strengths:** system-level manufacturing narratives and structured product ecosystems.
- **Pattern:** combines machine-level pages with broader factory productivity framing.

## Final Information Architecture (Navigation + URL Map)

- `/` Home
- `/hvac-duct-machinery/`
- `/spiral-duct-machine/`
- `/auto-duct-line/`
- `/duct-forming-machines/`
- `/elbow-fittings-machines/`
- `/solutions/spiral-duct-production-line/`
- `/solutions/rectangular-duct-production-line/`
- `/solutions/hvac-duct-factory-setup/`
- `/industries/hvac-contractors/`
- `/industries/duct-factories/`
- `/industries/sheet-metal-workshops/`
- `/industries/infrastructure-airports-metro/`
- `/industries/cold-chain-pharma/`
- `/factory/`
- `/quality/`
- `/service-support/`
- `/why-choose-sbkj/`
- `/videos/`
- `/case-studies/`
- `/blog/`
- `/contact/`
- `/request-quote/`

## Internal Linking Map

- **Pillar:** `/hvac-duct-machinery/`
  - links to category pillars, solutions, industries, and trust pages
- **Category pillars:** `/spiral-duct-machine/`, `/auto-duct-line/`, `/duct-forming-machines/`, `/elbow-fittings-machines/`
  - link to product pages + relevant solutions
- **Product pages:** `/products/.../`
  - link to category page, service-support, quality, request-quote, related machines
- **Solutions pages:** `/solutions/.../`
  - link to relevant categories + products + request-quote
- **Industries pages:** `/industries/.../`
  - link to solution and machine mix + request-quote
- **Trust pages:** `/factory/`, `/quality/`, `/service-support/`, `/why-choose-sbkj/`
  - link to request-quote and product pillars
- **Quote funnel:** all major pages include CTA to `/request-quote/`

## Proof Asset Checklist (Priority)

### Priority A (critical for authority)
1. Factory exterior hero photo — `assets/images/proof/factory-exterior-main.jpg`
2. Assembly workshop wide shot — `assets/images/proof/workshop-assembly-wide.jpg`
3. Final testing video for flagship line — `assets/videos/proof/final-test-auto-duct-line.mp4`
4. Certificate scans [VERIFY: ISO/CE] — `assets/docs/proof/cert-iso-ce-[VERIFY].pdf`
5. Pre-shipment inspection checklist sample — `assets/docs/proof/pre-shipment-checklist-sample.pdf`

### Priority B (critical for conversion)
6. Installation/commissioning site video — `assets/videos/proof/commissioning-on-site-[project].mp4`
7. Training session photos — `assets/images/proof/training-operator-session-01.jpg`
8. Spare parts packing/shipping process photos — `assets/images/proof/spare-parts-packing-01.jpg`
9. Product spec sheets for 8 flagship machines — `assets/docs/specs/[model]-spec-sheet.pdf`

### Priority C (critical for SEO content depth)
10. Process diagrams (spiral + rectangular lines) — `assets/images/diagrams/[line]-process-flow.svg`
11. Application photos by industry — `assets/images/industries/[industry]-application-01.jpg`
12. Case study packs with verified outcomes — `assets/docs/case-studies/[project]-case-study.pdf`
