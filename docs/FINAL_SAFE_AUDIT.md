# Final Safe Audit (Pre-Implementation)

## Key problems found
- Main pages had inconsistent SEO baseline: several key pages lacked canonical tags and some lacked Open Graph basics.
- `machines.html` had too many category blocks with uneven hierarchy, making buyer navigation harder.
- `videos.html` messaging was functional but weak for trust and purchase intent.
- `about.html` and `contact.html` tone could be clearer for manufacturer authority and inquiry flow.
- Product pages had inconsistent wording patterns (for example, compact/awkward machine names and CTA labels).
- Legacy domain references (`sbkjgroup.com`) still appeared in canonical URLs.
- Multilingual support is JS-driven and broad, but not every visible string on every page is mapped to i18n keys.

## What is fixed now
- Added/standardized canonical URLs to main and product pages for `sbkjduct.com`.
- Added Open Graph baseline where missing.
- Added Organization schema on main pages and Product schema baseline on product pages.
- Improved homepage/machines/videos/about/contact copy for stronger hierarchy and clearer CTA/trust flow.
- Restructured machine category section into 4 buyer-friendly groups:
  1) Auto Duct Lines
  2) Spiral Duct Machines
  3) Duct Forming Machines
  4) Elbow / Fittings Machines
- Unified wording and CTA consistency on product pages (safe text-level polish).
- Verified visible email consistency to `sales@sbkjduct.com`.

## Intentionally left untouched to avoid deployment risk
- No CSS architecture rewrite and no JS routing changes.
- No filename/path restructuring that could break GitHub Pages.
- No mass regeneration of page templates or broad URL migration.
- No automated translation rewrite for all languages.

## Assets still needed from team
- Updated factory photos (production floor, QC, loading, service team).
- More machine run videos per category (especially fittings and auxiliary equipment).
- Downloadable official certificates/spec sheets for trust blocks.
- Structured customer case studies with measurable output improvements.
