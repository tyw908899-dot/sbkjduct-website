# sbkjduct.com (live) vs v4 Homepage — Keep / Drop / Merge

## What's GOOD on live site — KEEP & IMPORT into v4

### 🏆 FAT Log Trust Band (UNIQUE differentiator)
Live has a dedicated "SIGNED FAT LOG" panel:
> "Every auto duct line ships with a serialized Factory Acceptance Test log — gauge tolerances, run-out, cycle times and operator sign-off. Archived for the life of the machine."
> → [REQUEST A SAMPLE FAT LOG] CTA

**Why keep**: This is the single most BUYER-SPECIFIC proof element on the whole site. Western HVAC contractors/consultants understand FAT logs as a quality signal. v4 has zero equivalent.
**Action**: Insert as a dedicated `/003` section (between machine grid and manifesto).

### 🏆 8 Featured Models (more detailed than v4's 6 categories)
Live has circular-photo cards for each flagship model:
- Auto Duct Line SBAL-V — U-shape · 800-2,500 m²/day
- Auto Duct Line SBAL-III — Hydraulic notching · ~1,000 m²/shift
- Spiral Tubeformer SBTF-1602 — Φ80-Φ1600 mm · Flying shear
- Spiral Tubeformer SBTF-1500 — Φ80-Φ1500 mm · Saw blade cutting
- Gorelocker SBEM-1250 — Hydraulic elbow · 100-1,250 mm
- Transverse Duct Flange — TDF · SBTDF-12/1.5-16
- Lockformer (SBLC Series) — Pittsburgh lock & cleat
- Seam Closing SBHF-I — Duct zipper · 15 m/min

**Why keep**: Specific model codes + micro-specs feel more like an engineering catalog than a marketing grid. v4 only has 6 generic categories.
**Action**: Replace v4's 6-category grid with 8 model cards (keeping v4's spec-table aesthetic).

### 🏆 "See the Machines in Operation" Videos Section
Live shows 3-card video preview "Short clips of our core machines running in production environments" with per-machine video + "view product" overlay.

**Why keep**: Real running machinery is the strongest B2B proof. We have 20+ segmented official videos in `02_Media_Assets/Media/Official Videos/` (Seg_01 through Seg_20+ by machine category). This was wasted.
**Action**: New `/004` section: 3-card auto-playing muted video loop with model badges, linked to full video library.

### 🏆 "What Sets Us Apart" 4-icon tiles
Live has a "WHY SBKJ" section with 4 scannable value-prop tiles.

**Why keep**: Scannable differentiators for quick skim. v4 has no direct equivalent.
**Action**: Add as a pre-manifesto section, or integrate into the stats bar.

### 🏆 Hero tagline "30-year Chinese manufacturer"
Live lead: "Spiral duct lines, auto duct production lines and TDF flange formers from a 30-year Chinese manufacturer. 5,000+ machines running in 80+ countries. ISO 9001:2015 & CE certified."

**Why keep**: "30-year Chinese manufacturer" establishes both pedigree AND origin (Western buyers want to know Made-in-China with pride, not disguised).
**Action**: v4 lead was "Complete production lines. Trusted in 80+ countries since 1995." — merge: keep the "30-year Chinese manufacturer" framing.

## What's BAD on live — DROP / REPLACE

### 🚫 Light-only design → Too generic SaaS
Live uses light grey backgrounds everywhere. Looks like any React SaaS template, not a premium industrial manufacturer. v4's dark-avant-garde with HUD overlays is far more memorable.
**Action**: Keep v4's dark primary + cyan/amber accents.

### 🚫 No visible animated counters
Live has "ISO 9001:2015 · CE CERTIFIED · 5,000+ MACHINES · 80+ COUNTRIES" as a tiny subtext line. v4 has 4 huge animated counters (30+/80+/5,000+/10).
**Action**: Keep v4's big stats treatment.

### 🚫 Generic hero tagline "The Ductwork Machinery HVAC Factories Trust"
This is an aphorism, not a product statement. v4's "Industrial Duct Machinery. *Built to Last.*" is tighter and more specific.
**Action**: Keep v4's Playfair+cyan-italic headline.

### 🚫 No emotional brand story
Live has no founder/leadership/vision moment. v4's manifesto `/003` ("We do not build machines that merely work…" signed Ryan Tao) humanizes the brand.
**Action**: Keep v4's manifesto section.

### 🚫 No real case studies on homepage
Live doesn't feature specific installations. v4 has KSA/VNM/AUS case cards with model badges.
**Action**: Keep v4's case studies.

## MISSING entirely — Add NEW

### ➕ Certificate proof (live has FAT log, neither has actual cert images)
We have `02_Media_Assets/Certificates/江阴三本机械科技有限公司-Q英(有效期2027.6.10).pdf` + photo scans. Nobody shows these.
**Action**: Link cert PDF from the trust band CTA or cert-band, display thumbnail on hover.

### ➕ Catalog download CTA
We have `01_Document_Production/Catalog_Builds/SBKJ_Catalog_2026_with_USD_prices.pdf` (6 MB, with USD pricing). This is pure gold for a first-time buyer.
**Action**: "Download 2026 Catalog (with USD pricing)" CTA near the final /005 section.

### ➕ Ryan Tao real signature image + photo
We have `02_Media_Assets/signature_ryan_tao.png`. v4 manifesto currently has only typed "RYAN TAO · HEAD OF GLOBAL SALES · MELBOURNE". The real signature image would be infinitely more authentic.
**Action**: Replace text signature with actual `signature_ryan_tao.png`.

## Final merged homepage structure (v4.1)

```
/001  Hero — dark, banner.mp4 + HUD + Playfair headline + 2 CTAs
      Animated counters: 30+/80+/5,000+/10
      Cert band: ISO 9001 · CE · 60+ Patents

/002  FEATURED MODELS (8 cards) ← imported from live, restyled dark
      SBAL-V / SBAL-III / SBTF-1602 / SBTF-1500 /
      SBEM-1250 / TDF / Lockformer / SBHF-I

/003  SIGNED FAT LOG (full-width panel) ← imported from live
      Request sample FAT log CTA → contact.html

/004  SEE THE MACHINES IN OPERATION (3 videos) ← imported from live
      Auto-playing muted loops from Official Videos/Seg_*.mp4

/005  WHY SBKJ (4 tiles) ← from live, restyled
      30-year factory · 5,000 installs · 10 languages · 12-hour quote

/006  ENGINEERING DOCTRINE — LIGHT BREAK ← v4 original
      "We do not build machines that merely work..."
      Real signature image (signature_ryan_tao.png)

/007  REAL INSTALLATIONS (3 case studies) ← v4 original
      KSA / VNM / AUS with product photos + model badges

/008  TALK TO AN ENGINEER ← v4 original
      Request Formal Quote + WhatsApp Ryan
      + NEW: Download 2026 Catalog (6 MB, with USD pricing)

Footer — 5 columns + 10 languages (v4)
```

**Result**: v4's emotional impact + live's content density + our neglected assets used.
