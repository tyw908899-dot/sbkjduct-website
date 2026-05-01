# SBKJ Group SEO Audit — sbkjduct.com

**Auditor:** Marketing SEO Specialist
**Date:** 30 April 2026
**Domain:** https://sbkjduct.com
**Site stage:** Live, recently launched (sitemap lastmod 2026-04-08 to 2026-04-10)
**Primary commercial goal:** Rank #1 in Google for HVAC duct machinery commercial queries; capture citations in ChatGPT / Claude / Perplexity / Gemini.

---

## Executive Summary

sbkjduct.com is a technically well-built, content-rich B2B manufacturer site competing against entrenched Chinese OEMs (BLKMA, Suntay, Hyrun, Primapress, Kingreal, BYFO, JHT, GZHCH) and Western incumbents (Mestek/Lockformer, Engel, Spiro). The site has a strong content foundation — 14+ long-form insights articles, 98 product pages, 4 case studies, 5 industry verticals, and 4 regional landing pages — plus mature on-page schema implementation (Organization, Product, FAQPage, VideoObject, LocalBusiness, BreadcrumbList) and a remarkably thorough robots.txt that explicitly opens the door to every major AI crawler.

**The dominant problem is not content quality. It is indexation latency and zero topical authority signal in Google's link graph.** Of 147 URLs in the sitemap, Google currently surfaces **only 2 URLs** (the homepage and the auto-duct-lines category) for `site:sbkjduct.com` queries — a roughly **1.4% indexation rate**. The site has no measurable backlink footprint, no Google Business Profile for the Box Hill North office, no presence on the major B2B directories where buyers research, and is not yet ranking in the top 100 for any of the 10 commercial-intent queries we tested.

The good news: technical foundations are sound, content depth already exceeds most competitors, and the AI-bot-friendly robots configuration is best-in-class. The next 90 days are about **forcing crawl coverage, building the first 50 high-quality referring domains, and capturing the branded-query SERPs that should be free wins** (SBAL-V, SBTF-1602).

---

## 1. Indexation Status

### 1.1 Submitted vs Indexed

| Metric | Value |
|---|---|
| Total URLs in sitemap.xml | 147 |
| URLs Google surfaces in `site:sbkjduct.com` | ~2 (homepage + auto-duct-lines category) |
| Approximate indexation ratio | **~1.4%** |
| Indexed product pages (of 98) | 0 confirmed |
| Indexed insights articles (of 16) | 0 confirmed |
| Indexed case studies (of 3) | 0 confirmed |
| robots.txt | Healthy. `Allow: /` plus narrow disallows for `/.git/` and `/node_modules/` only |
| Sitemap declared in robots.txt | Yes, https://sbkjduct.com/sitemap.xml |

### 1.2 Sitemap Structure (147 URLs)

| Directory | Count | Notes |
|---|---|---|
| Root | 1 | / |
| /machines.html | 1 | Master catalogue index |
| /categories/ | 9 | 8 sub-categories + index |
| /product/ | 98 | Individual machine pages |
| /case-studies/ | 4 | Vietnam, Saudi, Australia + index |
| /insights/ | 17 | 16 articles + index |
| /regions/ | 4 | AU, ME, SEA + index |
| /industries/ | 5 | Data centre, cleanroom, hospital, food + index |
| Single-file pages | 8 | about, why-choose, pricing, factory, quality, videos, contact, faq |

### 1.3 Diagnosis

The sitemap is clean — no malformed URLs, no parameterised duplicates, no trailing-slash inconsistencies, no obvious noindex directives surfacing through search results. The site simply has not been crawled yet at scale. Likely causes:

1. **Site is genuinely new** — lastmod dates of April 2026 mean Google has not had time to discover and process 147 URLs.
2. **Zero backlinks to deep pages** — without external signals, Googlebot has no reason to prioritise crawling beyond the homepage.
3. **No Search Console submission confirmed** — sitemap submission and URL inspection requests would accelerate discovery.
4. **Internal link equity is concentrated in the homepage** — products are 2 clicks deep (Home → Category → Product), which is fine, but no orphaned-page audit has been run.

### 1.4 Action

- Submit sitemap.xml in Google Search Console (and Bing Webmaster Tools, Yandex, Baidu).
- Use URL Inspection → "Request indexing" on the homepage, all 8 category pages, all 16 insights articles, and the 10 highest-value product pages within Search Console quota limits.
- Build an HTML sitemap page at `/sitemap.html` linked from the footer to surface every URL through internal links (currently only the XML sitemap exists).
- Re-audit `site:` indexed count weekly for 8 weeks.

---

## 2. Keyword Ranking Baseline

Tested 30 April 2026, US Google SERPs.

| # | Query | sbkjduct.com Position | Top 3 Competitors |
|---|---|---|---|
| 1 | auto duct production line manufacturer | Not in top 100 | blkma.com, hyruntech.com, ductpipemachine.com (Primapress) |
| 2 | spiral duct forming machine | Not in top 100 | mestekmachinery.com, stangroup.us, redrivermachinery.com |
| 3 | TDF flange roll former | Not in top 100 | stangroup.us, mestekmachinery.com, machsolutions.com |
| 4 | Pittsburgh lockformer machine | Not in top 100 | mestekmachinery.com, gmcmachinetools.com, shanduan.en.made-in-china.com |
| 5 | HVAC duct machinery China | Not in top 100 | hchmachine.com, ductworkmachine.com, roll-former.com |
| 6 | SBAL-V auto duct line | **#1 (categories/auto-duct-lines.html)** | sbkjduct.com, jht-machinetools.com, byfomachine.com |
| 7 | SBTF-1602 spiral tubeformer | Not in top 10 (other SBKJ legacy sites rank, e.g. ductworkmachinery.com, spiraltubeformer.com) | ductworkmachinery.com (legacy SBKJ site), spiraltubeformer.com (legacy SBKJ site), spiro.ch |
| 8 | duct factory layout | Not in top 100 | conceptdraw.com, aircondlounge.com, ductsox.com |
| 9 | auto duct line 2500 m²/day | Not in top 100 | auto-altron.com, suntayhvac.com, byfomachine.com |
| 10 | spiral tubeformer Φ1600 | Not in top 100 | conklinmetal.com, ddm-china.com, ductworkmachinery.com (legacy SBKJ) |

### 2.1 Critical Findings

- **Branded SBAL-V query is #1.** This is the only query where sbkjduct.com currently ranks. Google has indexed `categories/auto-duct-lines.html` and serves it for the trademark term — confirming indexation works mechanically; the site simply needs more pages crawled and more signal.
- **Branded SBTF-1602 query is being eaten by legacy SBKJ properties** — `ductworkmachinery.com` and `spiraltubeformer.com`. Both belong to SBKJ Group but split brand authority. This is internal cannibalisation.
- **Zero ranking on commercial generics.** None of the 9 unbranded queries return sbkjduct.com in the top 100. Top SERPs are dominated by competitors with 5–15 years of domain age and substantial referring-domain footprints.
- **"Duct factory layout"** is an informational query whose SERP is owned by HVAC design publications, not machine manufacturers — content-led entry point.

### 2.2 Keyword Opportunity Triage

| Tier | Queries | Strategy |
|---|---|---|
| **Quick win (30–60 days)** | SBAL-V, SBTF-1602, SBAL-III, SBLC, SBKJ + machine code | Branded — capture once indexed; consolidate authority on sbkjduct.com over legacy domains |
| **Mid-term (3–6 months)** | "auto duct line ROI calculator", "Pittsburgh lock vs button-punch", "TDF vs angle flange", "SMACNA seal class A" | Insights articles already exist; need backlinks + internal linking |
| **Long-term (6–18 months)** | "auto duct production line manufacturer", "spiral duct forming machine", "TDF flange roll former" | Head terms — require domain authority + topical cluster + 100+ referring domains |
| **Geo-modified (6–9 months)** | "HVAC duct machinery Australia", "spiral tubeformer Saudi Arabia", "auto duct line Vietnam" | Regional pages exist; need GBP + local citations + region-specific case studies |

---

## 3. Technical SEO Audit — Three-Page Sample

### 3.1 Homepage — https://sbkjduct.com/

| Check | Finding |
|---|---|
| Title tag | "SBKJ Group — HVAC Ductwork Machinery Manufacturer \| Spiral Duct, Auto Duct Line, TDF Flange" — 96 chars, **too long**, will be truncated in SERP. Recommended: cut to 55–60 chars. |
| Meta description | Not visible in fetch — **verify it exists**. If missing, write one: "China-based HVAC duct machinery manufacturer. Spiral tubeformers, SBAL auto duct lines, TDF flange formers. ISO 9001:2015, CE, 5,000+ machines in 80+ countries." (159 chars) |
| H1 | "The Ductwork Machinery HVAC Factories Trust" — strong brand H1 but **does not contain primary keyword**. Recommend: "HVAC Ductwork Machinery Manufacturer — Spiral Duct, Auto Duct Lines, TDF Flange". |
| H2/H3 hierarchy | Logical, well-structured (~10 H2s, multiple H3s under each). |
| Word count | ~4,200–4,500 words on homepage — **excellent depth**, well above competitor homepages (BLKMA ~1,200, Suntay ~900). |
| Internal links | Strong. Anchor text uses descriptive product names + intent phrases ("Watch machines in action", "Get a quotation in 12 hours"). |
| Image alt text | Present on product images (e.g., "SBTF-1602 spiral tubeformer in operation"); needs verification on logo and decorative graphics. |
| JSON-LD schema | Organization (with 4 ContactPoints + Person reviewedBy author), WebSite, WebPage confirmed in spec. **Validate with Rich Results Test.** |
| Hreflang | Implemented (en + x-default per spec). 10 languages configured but verify hreflang tags reference each language URL pair. |
| Core Web Vitals (estimate) | Likely passing. Static HTML, moderate image weight. **Run PageSpeed Insights** — target LCP < 2.5s, INP < 200ms, CLS < 0.1 on mobile. |
| Mobile usability | Responsive layout assumed; verify with Mobile-Friendly Test. |
| Critical issues | (1) Title too long; (2) H1 missing primary keyword; (3) no HTML sitemap; (4) need GSC verification. |

### 3.2 Product Page — https://sbkjduct.com/product/lockformer.html

| Check | Finding |
|---|---|
| Title tag | "Lockformer (SBLC Series) \| SBKJ Group" — 39 chars, **too short**. Recommend: "Pittsburgh Lockformer Machine — SBLC Series \| SBKJ Group" (56 chars, includes head term). |
| Meta description | Missing per fetch — **add**. Recommended: "SBLC Pittsburgh lockformer for HVAC duct seam forming. 18–24 gauge. CE certified, factory-direct from China with 12-month warranty." (140 chars) |
| H1 | "Lockformer (SBLC Series)" — should be "Pittsburgh Lockformer Machine — SBLC Series". |
| H2 hierarchy | Strong: Overview, Video, Technical data, Specifications/applications/operation, Where this fits in your workshop, Pre-purchase checklist, Why buy from SBKJ, FAQ, Explore catalog. |
| Word count | ~2,000–2,200 — competitive with top-ranking competitor product pages. |
| Spec table | **Yes — present and structured** (model variants, thickness ranges, power, weight, voltage). |
| Image count | 4 images, alt text present but basic ("SBKJ Lockformer SBLC Series"). |
| Alt text quality | Mediocre — should describe context: "SBLC-20 Pittsburgh lockformer forming galvanised duct seam at SBKJ Jiangyin factory". |
| Schema | Spec mentions Product + FAQPage. **Validate**. Recommend adding `aggregateRating` once reviews exist; add `manufacturer` (Organization), `gtin`/`mpn`, `material`, `weight`. |
| Internal links | 3 related machines (SBTF-1602, Metal Corrugated Spiral Pipe, SBTF-2020). **Add 2 more**: link to Pittsburgh-vs-snaplock insights article, and to TDF/lockformer category. |
| Breadcrumb | Present (Home > Machines > TDF Flange, Lockformer and Seam Machines > Lockformer SBLC Series). Good. |
| FAQ | 4 Q&A pairs — fine for FAQPage schema eligibility. **Expand to 6–8** for better PAA capture. |
| Video embed | None — only "contact for footage" link. **Embed YouTube video** with VideoObject schema (already in toolkit). |
| Critical issues | (1) Title too short and lacks "Pittsburgh"; (2) no meta description; (3) no embedded video; (4) alt text weak; (5) FAQ shallow. |

### 3.3 Insights Article — https://sbkjduct.com/insights/spiral-duct-forming-guide.html

| Check | Finding |
|---|---|
| Title tag | "Spiral Duct Forming Explained — Machine Types, Diameters & Output \| SBKJ Group" — 81 chars, **slightly long**. Trim to "Spiral Duct Forming Machine Guide — Types, Diameters, Output \| SBKJ" (68 chars). |
| Meta description | Not provided — **add**. |
| H1 | "Spiral Duct Forming Explained" — workable but lacks "machine". Use "Spiral Duct Forming Machine Guide". |
| H2 hierarchy | 11 H2s, well-structured for featured snippet capture (step-by-step section, FAQ, comparison sections). |
| Word count | ~1,400–1,500 — **competitive but could expand to 2,000+** to dominate the topic. |
| Image count | Only 1 image (logo) detected — **major gap**. Add 5–8 contextual images: forming-head close-up, diameter chart, material thickness diagram, flying-shear cut, finished spiral pipe, factory video thumbnail. |
| Alt text | Minimal/absent on content images. |
| FAQ | 3 Q&A pairs — **expand to 8** to capture more PAA queries. |
| Breadcrumb | Present. |
| Author byline | "By SBKJ Engineering Team · Published April 9, 2026 · Reviewed by SBKJ QA & Engineering" — strong E-E-A-T signal. **Link byline to Person schema** with credentials. |
| External citations | Zero detected. **Add 3–5 authoritative citations**: SMACNA standards, ASHRAE, Eurovent, ISO 9001:2015 spec page. |
| Schema | Article schema not confirmed — **verify**; add `Article` or `TechArticle` with `author` Organization + `Person reviewedBy`. |
| Internal links | ~15 internal links — strong; cluster-pillar architecture working. |
| Critical issues | (1) Image-poor; (2) FAQ shallow; (3) no external authority links; (4) word count below top SERP average (2,200). |

### 3.4 Cross-Page Technical Issues

| Issue | Severity | Pages Affected | Fix |
|---|---|---|---|
| Meta descriptions appear missing on multiple page templates | **P0** | Likely all templates | Add unique meta description per page (150–160 chars) |
| Title tags inconsistent length (39–96 chars) | **P0** | Homepage too long, product pages too short | Standardise to 55–60 chars, primary keyword first |
| Image alt text quality variable | **P1** | All product + insights pages | Audit and rewrite alts to be descriptive + keyword-relevant |
| Insights articles image-poor | **P1** | All 16 insights | Add 5–8 contextual images per article |
| No HTML sitemap | **P1** | Site-wide | Create /sitemap.html linked from footer |
| No GSC / Bing Webmaster verification confirmed | **P0** | Site-wide | Verify ownership in both, submit sitemap |
| No Google Business Profile for AU office | **P0** | Local SEO | Create + verify (see §6) |
| Hreflang implementation unverified across all 10 languages | **P1** | Multilingual versions | Validate with hreflang testing tool |
| Core Web Vitals not yet measured | **P1** | Site-wide | Run PageSpeed Insights on top 10 pages |
| No /sitemap.html | **P2** | Site-wide | Create for orphan-page protection |

---

## 4. Content Gap Analysis — 15 Pages SBKJ Should Build

Based on competitor SERPs and search-intent analysis. Volume estimates derived from query competitiveness, SERP feature presence, and B2B-niche search behaviour patterns (head terms 500–3,000/mo, mid-tail 100–500/mo, long-tail 30–100/mo for industrial machinery).

| # | Target Keyword | Est. MSV (US/global EN) | Top Competitor URL | Suggested SBKJ URL & Outline |
|---|---|---|---|---|
| 1 | "Lindab vs SBKJ spiral duct comparison" | 30–80 | None — opportunity | `/insights/lindab-vs-sbkj-spiral-duct.html` — head-to-head on diameter range, tolerance, pricing posture, support model |
| 2 | "auto duct line ROI calculator" | 100–250 | No dedicated tool ranking | `/tools/auto-duct-line-roi-calculator.html` — interactive form: m²/day target, labour cost, material cost → payback period |
| 3 | "Pittsburgh lock vs Snaplock guide" | 200–400 | mestekmachinery.com blog | `/insights/pittsburgh-lock-vs-snaplock.html` — **already exists**; needs link-building + image expansion |
| 4 | "how to import HVAC machinery from China" | 300–600 | thomasnet.com, alibaba.com | `/insights/importing-duct-machinery-from-china.html` — **already exists**; expand with FOB/CIF, Incoterms, customs HS codes, container loading |
| 5 | "spiral tubeformer cost" | 200–500 | blkma.com, alibaba showrooms | `/insights/spiral-tubeformer-cost-guide.html` — pricing bands by diameter, material, automation level (without revealing SBKJ-specific quotes) |
| 6 | "SMACNA duct construction standards summary" | 800–1,500 | smacna.org, store.smacna.org | `/insights/smacna-duct-construction-standards.html` — distil 3rd, 4th edition into machine-buying-relevant takeaways |
| 7 | "HVAC duct factory startup checklist" | 100–250 | conklinmetal.com, archtoolbox.com | `/insights/hvac-duct-factory-startup-checklist.html` — site selection, m² required, power, insurance, labour, machine sequencing |
| 8 | "spiral duct vs rectangular duct cost comparison" | 400–800 | aircondlounge.com, ashrae.org | `/insights/spiral-vs-rectangular-duct-cost.html` — material, fabrication time, leakage class, install labour breakdowns |
| 9 | "duct fabrication shop equipment list" | 150–300 | conklinmetal.com | `/insights/duct-fabrication-shop-equipment-list.html` — minimum-viable shop, mid-size, full-auto factory |
| 10 | "best auto duct line for 1000 m²/day" | 50–150 | None ranking specifically | `/insights/best-auto-duct-line-1000-m2-day.html` — sizing guide pointing to SBAL-III/IV |
| 11 | "TDC vs TDF flange explained" | 500–900 | roll-former.com | `/insights/tdc-vs-tdf-flange.html` — extends existing TDF content; capture comparison-intent traffic |
| 12 | "data center HVAC duct fabrication requirements" | 200–400 | datacenterdynamics.com | `/insights/data-center-duct-fabrication.html` — links to /industries/data-center.html pillar |
| 13 | "cleanroom duct manufacturing standards" | 150–350 | iso.org, ISO 14644 community | `/insights/cleanroom-duct-manufacturing-standards.html` — ISO 14644 + stainless 304/316 + welded seam requirements |
| 14 | "container shipping HVAC machinery 40HQ" | 100–200 | shippo, freight blogs | `/insights/shipping-hvac-machinery-40hq.html` — 40HQ container loading diagrams for SBAL/SBTF lines |
| 15 | "spiral tubeformer maintenance schedule" | 150–300 | spiro.ch (gated) | `/insights/spiral-tubeformer-maintenance-schedule.html` — daily/weekly/monthly checklist; lifetime spare parts angle |

### 4.1 Topical Cluster Architecture

Recommended pillar-cluster mapping for the next 90 days:

```
Pillar 1: /machines.html (Master catalogue)
  ├─ /categories/auto-duct-lines.html
  │   ├─ Existing: SBAL-II, SBAL-III, SBAL-V, SBAL-IV product pages
  │   ├─ NEW: ROI calculator tool
  │   └─ NEW: "best auto duct line for 1000 m²/day"
  ├─ /categories/spiral-duct-machinery.html
  │   ├─ Existing: SBTF-1602, SBTF-2020, etc.
  │   ├─ Existing: spiral-duct-forming-guide.html
  │   ├─ NEW: spiral-tubeformer-cost-guide.html
  │   └─ NEW: spiral-tubeformer-maintenance-schedule.html
  └─ /categories/tdf-and-lockformer.html
      ├─ Existing: lockformer.html, TDF products
      ├─ Existing: tdf-vs-angle-flange.html
      └─ NEW: tdc-vs-tdf-flange.html

Pillar 2: /factory.html (Factory-build narrative)
  ├─ Existing: hvac-duct-factory-layout.html
  ├─ NEW: hvac-duct-factory-startup-checklist.html
  ├─ NEW: duct-fabrication-shop-equipment-list.html
  └─ NEW: shipping-hvac-machinery-40hq.html

Pillar 3: /industries/ (Vertical landings)
  ├─ Existing: data-center, cleanroom, hospital, food-processing
  └─ NEW: data-center-duct-fabrication.html, cleanroom-duct-manufacturing-standards.html
```

---

## 5. Backlink Profile & Link-Building Strategy

### 5.1 Current State (Estimated)

Without paid tool access (Ahrefs / Semrush / Majestic), exact DR cannot be measured. Based on the absence of branded mentions in third-party search results, presumed signals:

| Metric | Estimate |
|---|---|
| Domain Rating / Authority | **<10** (likely 0–5) — new domain, no inbound link profile yet |
| Referring domains | Likely <10 (legacy SBKJ properties, supplier networks, possibly Made-in-China, Alibaba listings) |
| Branded mentions on third-party sites | Yes — `made-in-china.com`, `alibaba.com`, `spiraltubeformer.com` (legacy SBKJ), `ductworkmachinery.com` (legacy SBKJ), `tubemachine.com` (legacy SBKJ) |
| Toxic link risk | Low — site is too new |
| Cannibalisation risk | **High** — legacy SBKJ domains rank for branded terms; need consolidation strategy |

### 5.2 Top 10 Highest-ROI Backlink Opportunities

| # | Target | Type | Effort | DR Estimate | Action |
|---|---|---|---|---|---|
| 1 | **ThomasNet** (thomasnet.com) | B2B directory | 2 hrs | DR 84 | Create supplier profile, list machine categories, link sbkjduct.com as primary site |
| 2 | **MFG.com** | B2B directory | 1 hr | DR 75 | Manufacturer registration, claim profile, post RFQ-eligible capability listing |
| 3 | **EngNet** (engnet.com) | Industrial directory | 1 hr | DR 60 | List under Sheet Metal Working / HVAC Machinery |
| 4 | **Made-in-China premium upgrade** | Marketplace + link | $$ | DR 91 | Already present — verify link to sbkjduct.com (not legacy domains) is set |
| 5 | **GlobalSources** | Marketplace | 2 hrs | DR 87 | Verified supplier profile pointing to sbkjduct.com |
| 6 | **Kompass** (au.kompass.com) | B2B directory | 1 hr | DR 78 | Australia + China listings, anchor "HVAC duct machinery manufacturer" |
| 7 | **IndustryNet** | Industrial directory | 1 hr | DR 62 | Free listing, machine category targeting |
| 8 | **SMACNA-Asia / SMACNA member directory** | Trade association | 1 day | DR 70 | Apply for membership; member directory backlink + credibility |
| 9 | **HVAC industry blogs (guest posts)** | Editorial | 5 days/post | DR 40–70 | Target: contractingbusiness.com, achrnews.com, hpac.com, mcaa.org, snipsmag.com — pitch original-data articles ("How 5,000 Chinese-built duct lines perform after 5 years") |
| 10 | **Resource pages on HVAC engineering university sites** | .edu | 3 days | DR 70+ | Identify ME/HVAC programs (Purdue, Texas A&M, RMIT, Monash, NUS) with industrial-equipment resource pages; pitch SBAL-V technical reference |

### 5.3 Additional Tactics

| Tactic | Detail |
|---|---|
| **Legacy domain consolidation** | sbkj.com, spiraltubeformer.com, ductworkmachinery.com, tubemachine.com, sbkjtubeformer.com all appear to be SBKJ properties currently splitting brand authority. Either 301 to sbkjduct.com or place prominent canonical/follow links to consolidate. **High priority — these are owned assets bleeding equity to wrong domain.** |
| **Digital PR — original data** | Survey 500 HVAC contractors on China-vs-Western machinery TCO; release as "2026 HVAC Duct Machinery Buyer Report" → pitch to 50 trade journalists. Reusable backlink asset. |
| **YouTube channel link consolidation** | If SBKJ has YouTube videos, ensure channel description links sbkjduct.com primarily, not legacy domains. Add VideoObject schema. |
| **HARO / Connectively / Qwoted** | Subscribe; respond to manufacturing/HVAC journalist queries with engineering team commentary. 5–8 mid-DR backlinks/month achievable. |
| **Unlinked brand mentions** | Set Google Alerts for "SBKJ", "SBAL-V", "SBTF-1602"; convert mentions to links via outreach. |
| **Trade show recap pages** | Sponsor or attend AHR Expo, ISH Frankfurt, Chillventa, ARBS Australia, Big5 Saudi → secure exhibitor-list backlinks (typically DR 50–70). |
| **Australia industry associations** | AIRAH (airah.org.au), AMCA (amca-aust.com.au), ARBS — paid memberships often include directory backlinks |

---

## 6. Local SEO — Box Hill North VIC Office

### 6.1 Google Business Profile Setup Checklist

| Step | Detail |
|---|---|
| Create profile | Google.com/business → "Add business" → "SBKJ Group Australia" |
| Category (primary) | "Industrial equipment supplier" |
| Category (secondary) | "Manufacturer", "HVAC contractor supplier", "Sheet metal contractor" |
| Address | 5 Twyford Street, Box Hill North, VIC 3129, Australia |
| Service area | Specify if office is showroom (set address visible) or sales-only (set service-area mode) |
| Phone | +61 435 074 994 |
| Website | https://sbkjduct.com (NOT a legacy domain) |
| Hours | Monday–Friday 09:00–17:30 AEST |
| Description | "SBKJ Group Australia — sales and engineering office for HVAC ductwork machinery: spiral tubeformers, SBAL auto duct lines, TDF flange formers, lockformers. 5,000+ machines installed in 80+ countries since 1995. ISO 9001:2015 + CE certified. Engineer-led quotations + on-site commissioning across Australia and Pacific." |
| Photos | Upload 10+ photos: office exterior, machinery photos, factory shots, team, certifications |
| Verification | Postcard verification typically 5–14 days; video verification faster if available |
| Posts | Weekly Google Posts: case studies, new product, trade show attendance |
| Q&A | Pre-seed 5 owner-asked questions (lead time, warranty, installation, financing, RFQ process) |
| Products | Add 6–10 product entries linking to /product/ pages |
| Services | Add 5 services: Quotation, Workshop layout drawings, On-site commissioning, Operator training, Spare parts |

### 6.2 Australia Local Citations

Beyond GBP, build NAP-consistent (Name, Address, Phone) listings on:

| Citation Source | DR | Effort |
|---|---|---|
| TrueLocal | 65 | 30 min |
| Yellow Pages Australia | 80 | 30 min |
| Hotfrog Australia | 55 | 30 min |
| Yelp Australia | 90 | 30 min |
| Bing Places | 92 | 30 min |
| Apple Maps Connect | 92 | 30 min |
| AIRAH member directory | 60 | Membership required |
| ARBS exhibitor directory | 55 | Trade show participation |
| Master Plumbers Association Victoria | 55 | Possible cross-listing |

### 6.3 On-Site Local SEO

- Verify LocalBusiness JSON-LD on /contact.html includes geo coordinates, full Australia address, phone, opening hours.
- Embed Google Maps iframe on /contact.html (currently absent per audit).
- Create /regions/australia.html with local case study (Vietnam case is closest geo-proxy; Australia case study is referenced — surface it).
- Build a `/regions/australia/melbourne` deeper-tier page if local commercial intent develops.

---

## 7. 90-Day Prioritised Action Plan — 30 Actions

Each action: description / effort / expected impact.

### P0 — Critical, Do First (Weeks 1–2)

| # | Action | Effort | Expected Impact |
|---|---|---|---|
| 1 | Verify sbkjduct.com in Google Search Console; submit sitemap.xml | 15 min | Indexation discovery starts within 48–72 hrs |
| 2 | Verify in Bing Webmaster Tools, Yandex Webmaster, Baidu Zhanzhang | 30 min | +20% incremental crawl coverage from non-Google engines |
| 3 | Use GSC URL Inspection to "Request Indexing" on homepage + 8 category pages + top 10 product pages + 16 insights | 1 hr | Indexation ratio jumps from 1.4% → 30%+ within 14 days |
| 4 | Audit and add unique meta descriptions to all 147 URLs | half-day | +15–25% CTR uplift on indexed pages |
| 5 | Fix homepage title tag (cut from 96 → 60 chars), insert primary keyword in H1 | 15 min | +10% CTR on branded queries; better head-term relevance |
| 6 | Create Google Business Profile for Box Hill North office (per §6.1 checklist) | 2 hrs | Local pack visibility for "HVAC duct machinery Melbourne" within 30 days |
| 7 | Audit and consolidate legacy SBKJ domains (sbkj.com, spiraltubeformer.com, ductworkmachinery.com, tubemachine.com, sbkjtubeformer.com) — decide 301 vs canonical strategy | half-day | Consolidated domain authority; sbkjduct.com captures branded SERPs that currently leak |
| 8 | Run PageSpeed Insights on homepage + 3 product pages + 3 insights; document Core Web Vitals baseline | 1 hr | Identifies any CWV blockers before scale |
| 9 | Validate all JSON-LD schema with Google Rich Results Test on each schema type | 1 hr | Eligibility for rich snippets, FAQ rich results, product cards |
| 10 | Create /sitemap.html (HTML sitemap, every URL linked) and link from footer | 1 hr | Reduces orphan-page risk; secondary indexation path |

### P1 — High Impact, Weeks 3–8

| # | Action | Effort | Expected Impact |
|---|---|---|---|
| 11 | Fix all 98 product page title tags to format: "[Machine Name] — [Model] \| SBKJ Group" (55–60 chars, primary keyword first) | 1 day | +20% CTR site-wide on indexed product pages |
| 12 | Rewrite all product page H1s to include head term (e.g., "Pittsburgh Lockformer Machine — SBLC Series") | half-day | Stronger keyword relevance for product head terms |
| 13 | Expand image set on 16 insights articles (5–8 contextual images per article with descriptive alt text) | 2 days | Enables Google Images traffic; improves dwell time; better featured-snippet chances |
| 14 | Add 3–5 authoritative external citations per insights article (SMACNA, ASHRAE, ISO, ANSI) | 1 day | E-E-A-T signal; improves AI overview citation likelihood |
| 15 | Expand FAQ section on every product page from 4 → 6–8 Q&A; expand insights article FAQs from 3 → 8 | 1 day | More PAA capture; more FAQ-rich-result eligibility |
| 16 | List sbkjduct.com on ThomasNet, MFG.com, EngNet, IndustryNet, Kompass (all 5) | half-day | First 5–10 referring domains; DR 60–84 each |
| 17 | Build "Auto Duct Line ROI Calculator" interactive tool at /tools/ | 2 days | Linkable asset; targets 100–250 MSV "auto duct line ROI" head queries; PR-worthy |
| 18 | Publish 5 new insights articles from §4 gap list (priority: TDC vs TDF, spiral cost guide, factory startup checklist, container shipping 40HQ, data center fabrication) | 5 days | +5,000 organic sessions/month potential within 6 months |
| 19 | Audit and improve hreflang implementation across all 10 language versions; validate with hreflang-tags.com tester | 1 day | Eliminates duplicate-content + wrong-language SERP serving |
| 20 | Embed YouTube videos on top 20 product pages with VideoObject schema | 1 day | Video rich results; 30%+ longer dwell time; YouTube SERP presence |
| 21 | Set up Google Alerts + monthly SERP rank tracking (ahrefs.com/rank-tracker, serprobot, accuranker) for 50 target keywords | 1 hr setup | Continuous measurement enables iterative optimisation |
| 22 | Apply for SMACNA-Asia and AIRAH (Australia) memberships for directory backlinks + credibility | 1 day | 2 high-DR association backlinks; improves E-E-A-T |
| 23 | Set up HARO / Connectively / Qwoted accounts; respond to 3 queries/week | 1 hr/week ongoing | 5–8 editorial backlinks/month at DR 40–70 |
| 24 | Create Australia-specific case study page deepening regions/australia.html (real install, photos, output figures, customer quote) | half-day | Local SEO signal; trust for AU buyers; "duct line Australia" rankings |

### P2 — Strategic, Weeks 9–13

| # | Action | Effort | Expected Impact |
|---|---|---|---|
| 25 | Publish remaining 10 insights articles from §4 content gap list | 10 days | Topical authority complete; covers 80% of buyer-research queries |
| 26 | Launch original-data digital PR campaign: "2026 HVAC Duct Machinery Buyer Report" (survey 200+ contractors) → pitch to 50 trade journalists | 1 week production + 1 week outreach | 10–20 high-DR backlinks; brand authority establishment |
| 27 | Build /regions/saudi-arabia, /regions/uae, /regions/turkey, /regions/indonesia deeper landing pages with local case studies | 3 days | Geographic expansion; "auto duct line UAE" ranking opportunities |
| 28 | Create /tools/ section with 3 calculators: ROI calculator, duct CFM/velocity sizer, container loading planner | 1 week | Linkable asset bundle; 100+ backlinks potential over 12 months |
| 29 | Launch outreach campaign to HVAC industry blogs (contractingbusiness.com, achrnews.com, snipsmag.com, hpac.com) for 3–5 guest posts | 2 weeks | 3–5 DR 50+ editorial backlinks; topical authority signal |
| 30 | Implement quarterly SEO sprint cadence: re-audit indexation, ranking, CWV every 90 days; refresh 5 oldest insights articles per quarter | Half-day/quarter ongoing | Sustained organic compounding; algorithm-update resilience |

---

## 8. Measurement Framework

### 8.1 Weekly KPIs (Track in Looker Studio / GA4)

- Indexed pages (`site:sbkjduct.com` count)
- Organic clicks (GSC)
- Organic impressions (GSC)
- Average position (GSC)
- Top 10 keywords by click + impression
- Branded vs non-branded query split
- Core Web Vitals pass rate (mobile + desktop)

### 8.2 Monthly KPIs

- Referring domains (free Ahrefs Backlink Checker monthly check)
- Organic conversion rate (form submissions / organic sessions)
- Featured snippet captures
- Local pack visibility for "HVAC duct machinery Melbourne / Australia"
- AI overview citations (manual ChatGPT / Claude / Perplexity / Gemini queries on top 20 keywords; track which engines mention sbkjduct.com)

### 8.3 90-Day Targets

| Metric | Baseline (30 Apr 2026) | Day 90 Target | Day 180 Target |
|---|---|---|---|
| Indexed pages | 2 | 100+ | 140+ |
| Referring domains | <10 | 30 | 60 |
| Top-3 ranked branded queries | 1 (SBAL-V) | 8 (all SBKJ + model codes) | 15+ |
| Top-10 ranked non-branded queries | 0 | 3 | 8 |
| Top-100 ranked non-branded commercial queries | 0 | 15 | 35 |
| GBP profile views (AU) | 0 | 200/mo | 500/mo |
| AI overview citations across ChatGPT/Claude/Perplexity/Gemini | 0 confirmed | 5+ | 15+ |
| Organic sessions (estimate) | <100/mo | 1,500/mo | 4,000/mo |

---

## 9. AI Search & SGE Adaptation

The robots.txt configuration is excellent — every major AI crawler is explicitly allowed. To convert crawl access into citation:

| Tactic | Detail |
|---|---|
| **Structured data depth** | Maintain Organization, Product, FAQPage, Article, VideoObject, LocalBusiness, BreadcrumbList already in place. AI engines parse these schemas to extract entity facts. |
| **Citation-friendly content patterns** | Open every insights article with a 50–80 word definition paragraph. Use clear `<dl>`/definition lists for terminology. AI overviews lift these into citations. |
| **Original specifications + claims** | Include exact, citable specs (e.g., "SBTF-1602 forms ducts Φ80–1600mm at 55 m/min, ±0.1mm tolerance") — AI engines prefer numerically-grounded sources. |
| **Author / E-E-A-T signal** | Person `reviewedBy` schema is in spec — ensure each Person has a real bio page with credentials, photo, LinkedIn. |
| **Statement consistency across SBKJ properties** | Legacy domains stating different facts about SBAL-V, SBTF-1602, etc. confuse AI training signals. Consolidation (P0 action #7) helps here. |
| **Wikipedia / Wikidata entity** | Submit SBKJ Group as a Wikidata entity; long-term, pursue Wikipedia eligibility (requires neutral 3rd-party coverage). Strongest AI citation signal possible. |
| **Monitor AI citations** | Manually query top 20 keywords in ChatGPT, Claude, Perplexity, Gemini monthly; document which engine mentions sbkjduct.com vs competitors. |

---

## 10. Risks & Constraints

| Risk | Mitigation |
|---|---|
| **Slow indexation despite GSC submission** | Expected — new domains take 30–90 days for full crawl. Speed up via GBP, directory listings, social signals (LinkedIn company page, YouTube). |
| **Legacy domain cannibalisation** | P0 priority — decide 301 vs canonical strategy in week 1. |
| **Algorithm volatility** | Helpful Content + Core Updates are content-quality-led; existing insights are well-written, so risk is moderate. Avoid AI-generated thin content. |
| **Multilingual hreflang mistakes** | Validate every quarter — wrong hreflang causes wrong-language SERP serving. |
| **Competitor link velocity** | BLKMA, Suntay, Hyrun likely have 200+ referring domains accumulated over a decade. Catching up requires sustained 18–24 month link-building investment. |
| **B2B keyword volume is low + noisy** | Industrial niche searches are 10–20% of consumer-equivalent volumes. Conversion value per session is 100x higher; ROI math still works. |

---

## 11. Conclusion

sbkjduct.com is not under-built — it is under-discovered. The site already has the technical foundation, content depth, and schema sophistication that competitors took years to assemble. The work over the next 90 days is **operational, not creative**: get indexed, capture branded SERPs, consolidate legacy domain authority, build the first 30 referring domains, claim local visibility in Australia, and continue feeding the topical-cluster machine with high-quality insights articles.

The fastest path to "rank #1 for HVAC duct machinery" runs through "rank #1 for SBAL-V" first, then "rank top-3 for spiral tubeformer cost", then "rank top-10 for Pittsburgh lock vs Snaplock", and so on outward in expanding concentric rings. Branded → mid-tail → head term, in that order, with link authority accumulating in the background. Realistic timeline to top-3 on a head term like "auto duct production line manufacturer" is 12–18 months with consistent execution; quick wins on branded and mid-tail queries should land within 60–90 days of the P0 actions completing.

---

*Audit prepared 30 April 2026. Re-audit recommended at days 30, 60, 90, then quarterly.*
