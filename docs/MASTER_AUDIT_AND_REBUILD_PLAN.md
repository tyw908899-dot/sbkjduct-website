# MASTER AUDIT AND REBUILD PLAN

## A. Full Site Audit

### Findings from current repository audit
- Legacy site is fragmented across root-level pages and `/product/*.html`, with inconsistent design systems and navigation patterns.
- Multiple templates and duplicate structures are used without a unified component system.
- Messaging quality is mixed: some pages are technical, many are generic exporter-style with low trust language.
- Calls to action are inconsistent in label, placement, and destination.
- Contact details are inconsistent (legacy personal email discovered).
- Product pages vary significantly in depth and structure; many lack complete buyer guidance and clear use-case framing.
- Internal linking is weak and does not support solution-led buyer journeys.
- Several pages look visually outdated due to spacing inconsistency and dense content blocks.

### Risks
- Lower conversion trust for international industrial buyers.
- SEO cannibalization from duplicate and weakly differentiated pages.
- Brand authority dilution due to inconsistent hierarchy and copy tone.

## B. Multilingual / Language QA
- Existing codebase includes a JS i18n dictionary, but no complete mirrored multilingual page architecture was found.
- Current implementation risk: users can be exposed to mixed-language or partially translated UI states.
- Rebuild decision: stabilize public experience in English-first mode with consistent language labels, remove broken multilingual UX pathways, and document missing translation assets.
- Output file created: `/docs/MISSING_LANGUAGE_ASSETS.md`.

## C. UI / UX / Visual QA
- Previous pages had inconsistent card styles, typography hierarchy, and button treatments.
- Mobile spacing and section rhythm varied across templates.
- Product detail pages lacked consistent information architecture.
- Rebuild action: introduce unified premium industrial UI system with consistent sections, cards, CTA rails, and responsive breakpoints.

## D. Content / Copy QA
- Repetitive and generic wording found.
- Weak differentiation and missing buyer-intent content (who/why/result).
- Missing or inconsistent proof framing.
- Rebuild action: rewrite with authority-first B2B positioning and explicit placeholders for unverified claims.

## E. Technical Site QA
- Needed: unified metadata system, canonical tags, Open Graph/Twitter tags, schema coverage, sitemap alignment, robots consistency.
- Rebuild action: implement normalized head metadata, Organization schema, page-level FAQ/Product schema where relevant, plus updated sitemap and robots.

## F. Competitor Benchmark
Benchmarked against:
- spiro.ch
- sentemakina.com.tr
- ductworkmachinery.com
- viconmachinery.com
- aml.co.il (duct fabrication equipment context)
- has-vac.com (HVAC machinery exporter-style reference)

### Comparative conclusions
- Top performers win with clear product segmentation, strong trust pages, and technical depth.
- Lower-end competitors rely on catalog-like dumps with weak UX.
- Rebuild target: combine premium visual hierarchy + deep technical buyer guidance + clearer conversion flow.

## G. Final Rebuild Plan

### Final architecture
- Core commercial pages, solution pages, industry pages, trust pages, conversion pages, blog system, and SEO pillar pages implemented as clean directory URLs with `index.html` for GitHub Pages.

### URL structure strategy
- Category hub URLs for commercial intent.
- `/products/` for model-level details.
- `/solutions/` and `/industries/` for consultative discovery.
- `/blog/` for educational authority.
- keyword landing pages for SEO demand capture.

### Internal linking map
- Homepage → categories, solutions, trust pages, quote.
- Categories → products + solutions + quote.
- Products → related products + category + solution + service.
- Blog/pillars → categories/products/quote.

### Product system
- Standardized: overview, best-for, specs summary, full table, capacity context, applications, FAQ, comparison, support, CTA.

### Trust pages
- Factory, quality, service, why-choose, case-studies built with explicit evidence placeholders.

### Multilingual strategy
- Stable English-first production experience.
- Translation roadmap documented in `/docs/MISSING_LANGUAGE_ASSETS.md`.
- Language selector avoids broken half-translated destinations.

### Missing asset checklist
- [VERIFY: certification]
- [VERIFY: machine installation count]
- [VERIFY: export countries]
- [VERIFY: warranty]
- [VERIFY: dimensions/specs]
- Factory photos/videos
- Machine close-up photos
- FAT/QC check records
- Client case study approvals
- Export map proof data
