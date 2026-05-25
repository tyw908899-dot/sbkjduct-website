---
name: sbkj-design-system
description: Design-system reference for SBKJ Group — a Chinese industrial HVAC duct machinery manufacturer (sbkjduct.com). Use whenever producing SBKJ-branded artifacts: landing pages, product pages, decks, ads, emails, proposals, or redesign explorations. Covers colors, typography, voice, iconography, components, and the live UI kit.
---

# SBKJ Design System

This folder is your source of truth for anything SBKJ-branded. Use it instead of inventing styles from the brand name or the live site alone.

## Before you start

1. **Read `README.md` in full.** It covers company context, voice, visual foundations, and — critically — the two flagged mismatches between the brief and the live site (palette + fonts). Decide with the user which direction the artifact targets.
2. **Load tokens:** `<link rel="stylesheet" href="<path-to-system>/colors_and_type.css">` — gives you all `--sbkj-*` CSS vars plus `.sbkj-h1/h2/h3`, `.sbkj-eyebrow`, `.sbkj-lead`, `.sbkj-stat-number`, `.sbkj-dark` (wrapper class that flips palette).
3. **Use `.sbkj-dark` on sections that should flip to navy** (hero, CTA). Default is the warm-cream light theme.
4. **For homepage-style assemblies,** lift components from `ui_kits/website/` rather than rewriting — `kit.css` + the `.jsx` files cover header, hero, stats, selector, machine cards, case studies, CTA, footer, and the WhatsApp FAB.

## Use existing assets

- Logo mark: `assets/logo-mark.svg` (inherits `currentColor`) + `assets/favicon.svg`.
- Product imagery placeholder: `assets/placeholder-machine.svg`. Real product photos do not live here — ask the user to supply if pixel accuracy is required.

## Content rules (must-follow)

- **Voice:** direct, spec-accurate, outcome-first. Write to the buyer.
- **Numbers:** unit-attached, en-dash for ranges (`0.5–1.5 mm`, `800–2,500 m²/day`), `×` for dimensions, `Φ` for duct diameters.
- **CTAs, always dual:** primary = "Request a Quote →" / "Request Formal Quotation →"; secondary = "WhatsApp Ryan" / "WhatsApp an Engineer".
- **Proof refrain:** `30+ years · 100+ countries · 5,000+ machines · ISO 9001 · CE`. Appears in hero, stats band, CTA, footer tagline.
- **Certs literal:** "ISO 9001:2015 Quality Management", "CE Certified Machinery". No vague "certified" claims.
- **No emoji in brand surfaces.** Flag emoji (🇻🇳 🇸🇦) on case-study region markers only.

## Visual rules (must-follow)

- **Single accent.** Blue (`#2c6aa0` light / `#5b9ac4` dark). Warm brass (`#8a6640` / `#c49a5e`) used sparingly. No gradients-as-decoration.
- **Section opener pattern:** eyebrow (22px accent bar + uppercase label) → H2 → lead paragraph.
- **Cards:** white/elevated bg, hairline border, `translateY(-4px)` on hover, no scale.
- **Icons:** inline SVG (1.5–2 stroke, `currentColor`) + Unicode (→ ✓ Φ ▾ ×). No icon font, no Lucide/Heroicons.
- **Radii:** 6 (buttons/pills), 10 (cards/panels), 999 (FAB/CTAs).
- **Buttons are pills** (radius 999) — primary fills accent, ghost is transparent with hairline border.
- **RTL:** use logical properties (`padding-inline`, `margin-inline`) — site ships 10 languages including Arabic.

## When extending

- **Add a component:** match existing idioms — kicker + title + description + link-arrow, hairline border, pill-radius buttons, eyebrow openers.
- **Add an icon:** inline SVG, currentColor, 16/18/24 px, 1.5–2 stroke. Don't import an icon library.
- **Pursue the brief's avant-garde direction:** vars `--sbkj-target-bg` / `--sbkj-target-cyan` / `--sbkj-target-amber` are exposed; flag fonts (Playfair + Inter) would need to be added.
- **Never modify** `data-i18n` / `data-i18n-html` attributes in any live-site HTML — they key into a 2,874-entry translation runtime.

## Preview cards

`preview/*.html` are the small renders shown in the Design System tab (light/dark/target palettes, type specimens, spacing scale, radii/shadows, buttons, pills, cards, section headers, spec tables, cert bar, logo, iconography). Link to them as live examples when proposing variants.

## Reference file

`styles.reference.css` is the full 9,577-line live stylesheet. Grep it when you need exact values — it's authoritative for anything not covered here.
