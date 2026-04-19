# Claude Design v4 Integration — Lessons Learned

## What happened

Today (2026-04-19) I attempted to port Claude Design v4 homepage to main branch.
The port completed but the rendered page was broken — `/002` machine category
cards rendered as empty thin strips, huge white whitespace between /002 and
case studies, and parts of the manifesto barely visible.

Attempted fixes:
- `data-i18n` → `data-i18n-html` for 11 HTML-bearing keys (fixed SVG buttons)
- Removed Cloudflare email-protection markup from cta.note translations + HTML
- Fixed 25 broken link targets (`knowledge-center/`, `request-quote.html`, etc.)

None of these fixed the layout breakage. Root cause was deeper.

## Root cause: CSS rule duplication from append strategy

My porting script appended `home.css` (33.8 KB) and `colors_and_type.css`
(8.8 KB) to the existing `assets/css/styles.css` (4,725 lines → 6,193 lines).

**Duplicate selectors introduced:**
- `.hero`: 3 definitions (original styles.css + home.css + potentially another)
- `.cta-final`: 3 definitions
- `.hero-lead`, `.hero-actions`: 3 each
- `.section`, `.section-divider`: 2 each
- `.shell`, `.site-header`, `.stats-band`: 2 each

CSS cascade picks the LAST matching rule, which was often home.css. But home.css
was designed for a DIFFERENT HTML structure than v4 actually uses after my surgery
(which kept main's `<head>` but used v4's body). The rules fought each other —
some properties from the old system leaked into the new layout.

## Rollback

Restored `index.html` and `assets/css/styles.css` from commit `fd01f5d`
(pre-v4-deployment state). T dict (`assets/js/i18n.js`) kept at 2,947 keys —
the 73 new v4 keys are harmless additions, will be useful if v4 integration
is retried.

## Correct path forward (for next session)

**Don't:**
- Append new CSS onto existing CSS as a deploy strategy
- Keep old `<head>` + new body + keep all old scripts in one HTML
- Try to integrate on main branch directly

**Do:**
1. Create a feature branch `feat/v4-homepage-redesign`
2. Replace styles.css entirely with a NEW file that combines:
   - Only the design tokens still used (migrate old `--bg` → `--sbkj-bg` etc.)
   - Home-specific rules from home.css
   - Shared component rules (buttons, modals, toasts, etc.) from old styles.css
3. Re-port index.html with v4 body AND a v4-matched `<head>` (re-add JSON-LD
   and SEO meta as new nodes, don't recycle)
4. Serve a local Python HTTP server, check pixel-for-pixel against Claude Design's
   preview URL BEFORE pushing
5. Once homepage ships clean, replicate the approach for product/sbal-v.html
   (product template), then scale to 66 product pages

## What IS safely deployed on main right now

- Original v1 homepage (the one the user has been iterating since last year)
- **T dict: 2,947 keys × 10 languages** (1,210 more keys than session start —
  this is the real gain from today's work)
- Claude Design artifacts saved in `_claude_design/` for future integration:
  - `index_v4.html` (36 KB) — proven-working v4 homepage source
  - `home.css` (34 KB) — v4 page styles
  - `colors_and_type.css` (9 KB) — v4 design tokens
  - `new_keys_translated.json` — 73 new keys × 9 languages
  - `SKILL.md` — Claude Design's generated skill doc
  - `styles.reference.css` — Claude Design's view of our existing CSS

## Other work still pending

- Claude Design product-page template (SBAL-V) — blocked on usage limit reset (~24h)
- Batch 3 translation chunks (insb 2-4, cat 1+3, insights_residual, prod 1-4,
  final_chunk1_rem) — partially stalled from earlier rate limits

---
**Next session**: if user wants to retry v4 integration, follow the "Correct path
forward" section above. Feature branch, CSS rewrite (not append), preview before
merge.
