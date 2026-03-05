# Missing / Inconsistent Language Content

Current multilingual behavior is implemented via `assets/js/i18n.js` key replacement on elements with `data-i18n`.

## Confirmed gaps
- Some visible strings on major pages (especially long marketing paragraphs and certain CTA support lines) are static English and not bound to `data-i18n` keys.
- `videos.html` includes many card titles and section strings not fully mapped to translation keys.
- Product pages are primarily English and do not have full per-language content variants.
- Footer/nav translation coverage is strong on core pages, but there are still isolated unlabeled strings without `data-i18n` attributes.

## Safe actions taken in this task
- Preserved current i18n mechanism and avoided risky mass translation rewrite.
- Kept key navigation and functional labels consistent across major pages.
- Documented remaining content gaps for staged translation updates.

## Content needed to complete multilingual rollout
- Professional human translations for product-page descriptions/spec context in: zh, es, ru, ar, tr, fr, pt, hi, id.
- Translated marketing copy blocks for homepage, videos, and about long-form sections.
- Translated SEO metadata per language (title/description/OG).
