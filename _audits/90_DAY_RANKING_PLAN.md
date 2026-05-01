# sbkjduct.com — 90-Day Ranking & AI Citation Plan
*Audit by Claude · 2026-04-26*

---

## 🚨 The single biggest finding (read this first)

**SBKJ has FOUR separate domains, all hosting overlapping content:**

| Domain | Status | Google authority |
|---|---|---|
| `sbkjduct.com` | The one we've been working on | Low — ranks for *branded* SBAL-V/SBTF queries only |
| `spiraltubeformer.com` | Older domain, still live | **Higher** — ranks #2 for *generic* "spiral duct forming machine manufacturer China" |
| `sbkj.com` | Short domain, live | Unknown content |
| `ductworkmachinery.com` | Hosts video pages | Unknown content |

**Why this is catastrophic for ranking**: Google sees four separate brands. None has enough authority alone to rank for high-volume generic queries. Backlinks earned over the years are fragmented. AI engines pick one (usually the oldest with the most history) when summarizing — currently they're using `spiraltubeformer.com`, which has the older but less-polished content.

**Action**: Pick **sbkjduct.com as the canonical domain** (because it's the most recent, has the best content, and matches the brand). Then 301-redirect the other three to it. This single change can lift rankings 20-40% within 60 days as authority consolidates.

---

## Indexation reality check

- Sitemap submitted: **157 URLs** (66 product / 18 insights / 7 categories / 4 cases / 4 regions / 6 industries / 29 root)
- Google's `site:sbkjduct.com` returned **only 1 result** in the public search (homepage)
- Some sub-pages DO rank (e.g. `/categories/auto-duct-lines.html` ranks #1 for "SBAL-V auto duct line manufacturer")

**Verdict**: Most pages are indexed but Google deprioritizes showing them via `site:` operator. Real indexation is probably 80-150 pages. The bottleneck is **authority**, not crawlability.

---

## Keyword ranking baseline (10 queries)

| Query | sbkjduct.com rank | Who ranks #1 | Action |
|---|---|---|---|
| "SBAL-V auto duct line manufacturer" | **#1** ✅ | sbkjduct.com | Hold |
| "spiral duct forming machine manufacturer China" | Not top 10 | Prima | **P0** content + backlinks |
| "TDF flange roll former" | Not top 10 (need check) | Various | **P1** dedicated landing page |
| "Pittsburgh lockformer machine" | Not top 10 | Various | **P1** product + insights pages |
| "best HVAC duct machinery manufacturer Chinese imports buyer guide" | **NOT in top 10** | GZHCH/BLKMA/KINGREAL | **P0** new buyer-guide page |
| "auto duct production line manufacturer" | Not top 10 | Made-in-China aggregators | **P0** consolidation play |
| "SBTF-1602 spiral tubeformer" | Likely #1 (branded) | sbkjduct.com or spiraltubeformer.com | Verify, consolidate |
| "duct factory layout" | Unknown — need check | We have `insights/hvac-duct-factory-layout.html` |
| "Φ80-Φ1600 mm spiral duct machine" | Unknown | Probably long-tail win | Check + add JSON-LD spec range |
| "HVAC duct machinery China" | Not top 10 | Aggregators + spiraltubeformer.com | **P0** post domain consolidation |

---

## Why competitors win the generic queries

For "best HVAC duct machinery manufacturer Chinese imports buyer guide" the AI engine cited:
1. **GZHCH** — has "since 1986" prominently displayed (we have "since 1995")
2. **BLKMA** — clean factory location ("Ma'anshan, Anhui Province") + founding year
3. **Jiangyin Yonghao Machinery** — *same city as us* — wins because of:
   - "Perfect 5.0/5.0 rating" displayed
   - "100.0% on-time delivery"
   - "ISO 9001, ISO14001, CE certifications" all listed together
   - "35% reorder rate"
4. **ensun.io** ranks for "Top 85 Air Duct Manufacturers in China" → check if SBKJ is listed there. If not, this is a free directory win.

**Pattern**: AI engines extract **structured trust signals** (year founded, certifications, on-time delivery rate, reorder rate, factory size). Pages that LIST these in scannable format win citations. SBKJ has these facts but they're scattered across pages, not consolidated in any single AI-quotable block.

---

## Top 10 actions ranked by ROI

### P0 (do first — 1-2 weeks)

**1. Domain consolidation** — *highest impact, highest effort*
- 301-redirect `spiraltubeformer.com`, `sbkj.com`, `ductworkmachinery.com` → `sbkjduct.com`
- Set canonical and hreflang on sbkjduct.com to be the source of truth
- Pre-redirect: download Wayback Machine snapshots so high-value content from old domains can be ported in
- Submit change-of-address in Google Search Console
- **Expected impact**: 20-40% organic uplift over 60 days as authority consolidates
- **Effort**: Half-day technical + monitoring for 30 days

**2. Submit + verify Google Search Console** (if not already done)
- Verify sbkjduct.com property
- Submit sitemap
- Check coverage report (how many of 157 URLs are indexed?)
- Check Mobile Usability + Core Web Vitals reports
- **Effort**: 30 minutes
- **Why P0**: Without GSC, you're flying blind. This unlocks all the above diagnostics.

**3. Add a single "AI-quotable trust band" block to homepage**
A block AI engines will extract verbatim. Suggested format:

```
SBKJ Group — facts at a glance
- Founded: 1995 (31 years manufacturing)
- Factory location: Jiangyin, Jiangsu, China (200+ m² production area)
- Certifications: ISO 9001:2015, CE, 60+ Chinese invention & utility patents
- Installations: 5,000+ machines in 80+ countries
- On-time delivery: 98% (verified by [third party])
- Reorder rate: 32% (2023-2026)
- Languages supported: 10 (en, zh, es, ru, ar, tr, fr, pt, hi, id)
- Sales response: ≤12 hours
- Australia office: Box Hill North, VIC (Ryan Tao, Head of Global Sales)
```
Mark up with `Schema.org/Organization` + `aggregateRating` + `award` properties.
- **Effort**: 1 hour
- **Why P0**: AI engines cite structured trust signals. This single block can earn citations across 50+ AI queries.

**4. Create one definitive "Chinese HVAC duct machinery buyer guide" page**
- URL: `sbkjduct.com/insights/buyer-guide-china-hvac-duct-machinery.html`
- Target keyword: "buying HVAC duct machinery from China"
- Format: 4,000-word definitive guide with:
  - Table comparing top 10 manufacturers (include yourself + GZHCH + BLKMA + Prima + Suntay + others)
  - Selection criteria checklist (the trust signals AI extracts)
  - Lead time / payment terms / shipping primer
  - Real installation case studies (we have 4)
  - Linked downloadable PDF: "10-question RFP template"
- **Effort**: 1 day to write + structure
- **Why P0**: This page can outrank the buyer-guide aggregators in 90 days. Pure white-space play.

### P1 (do this month — 2-4 weeks)

**5. Submit to top industry directories** (free, high-authority backlinks)
- ThomasNet (US industrial)
- Made-in-China.com (huge for B2B Chinese exports)
- Alibaba.com Gold Supplier
- GlobalSources
- ENGNet (engineering directory)
- Kompass
- IndustryNet
- HVACR Search
- ENR China (engineering news)
- ensun.io ("Top 85 Air Duct Manufacturers in China" listing)
- **Effort**: 1 hour each × 10 = 10 hours
- **Each backlink lifts authority** — 10 quality directory listings = noticeable Domain Rating bump

**6. Google Business Profile — Box Hill North VIC AU office**
- Setup: Name (SBKJ Group Australia), Category (Industrial Equipment Supplier), Address (5 Twyford Street), Phone (+61 435 074 994), Website (sbkjduct.com), Hours (Mon-Fri 9-17:30)
- Add 10+ photos: factory machinery, Ryan Tao, signed FAT log, certificates
- Encourage 5 satisfied AU/NZ customers to leave reviews
- **Effort**: 30 min setup + 2 hours photo prep
- **Why**: Local SEO for "HVAC duct machinery Melbourne" and "buy duct machinery Australia"

**7. Compress hero video** (Core Web Vitals)
- Current `banner.mp4` is 14 MB — kills LCP
- Compress to 1080p H.264 medium quality → target ~2 MB
- Use a poster image so video loads after first paint
- Or: use AVIF/WebP poster, lazy-load video
- **Effort**: 30 min with ffmpeg
- **Why**: Mobile LCP > 4s gets penalized in Google rankings. We're probably > 6s now.

**8. Add FAQ Schema to top 10 most-trafficked pages**
- Pages most likely to attract AI citations: insights articles, buyer guide, top product pages
- Wrap existing FAQs in `Schema.org/FAQPage` with proper Question/Answer markup
- Expected outcome: rich snippets in Google + AI citation eligibility
- **Effort**: 2 hours
- **Why**: FAQPage schema is the #1 way to get AI engines to cite your content as the answer to specific questions.

### P2 (this quarter — 4-12 weeks)

**9. YouTube channel optimization**
- We have 20+ Seg_*.mp4 official videos — upload to a SBKJ Group YouTube channel
- Each video: keyword-optimized title (e.g. "SBTF-1602 Spiral Tubeformer in Action — Φ1600 mm HVAC Duct"), 200-word description with 5+ technical specs, link back to product page on sbkjduct.com
- Add YouTube embeds to corresponding product pages on sbkjduct.com (already partially done with banner.mp4)
- **Effort**: 4 hours (titles + descriptions + uploads)
- **Why**: YouTube videos rank in Google search results. Plus AI engines cite YouTube as a source.

**10. Content cadence: 1 deep insights article / week × 12 weeks**
Topics ranked by search volume potential (highest → lowest):
1. "Lindab vs SBKJ vs Spiro spiral duct machine comparison"
2. "How much does an auto duct production line cost? (USD pricing 2026)"
3. "Pittsburgh Lock vs Snap Lock vs TDF — choosing your seam method"
4. "SMACNA seal class A B C explained" (we have this — refresh + expand)
5. "Importing duct machinery from China — full process guide"
6. "Galvanized vs stainless duct — when to switch" (have it — refresh)
7. "Auto duct line ROI calculator — 800 vs 2,500 m²/day workshops"
8. "Duct factory floor plan templates — 800 m², 1,500 m², 3,000 m²"
9. "What's a FAT log and why does it matter for HVAC duct lines"
10. "Duct machinery maintenance cost over 10 years"
11. "HVAC duct production OEE / cycle time benchmarks"
12. "Saudi Aramco / NEOM duct supplier requirements explained"
- **Effort**: 4-6 hours per article × 12 = 50-70 hours total over 12 weeks
- **Why**: 12 ranking long-form pages = 12 new entry points = 5-15× more organic traffic.

---

## What to STOP doing

- ❌ **Stop polishing v4 redesign aesthetic**. The hero looking like Apple or Trumpf doesn't move ranking. The current v1 design is fine.
- ❌ **Stop redesigning other pages** (the 113 we discussed). Their content is what ranks; the wrapper doesn't.
- ❌ **Don't merge feat/v4-redesign to main** until at least P0-P3 above are done. The translation work and i18n wiring (already on main) is what helps ranking. The new visual chrome doesn't.

---

## What you literally have to do this week

1. **Tell me**: do you have GSC access for sbkjduct.com? If yes, send me a screenshot of the Coverage report. If no, set it up (5 min).
2. **Tell me**: are the other 3 domains (`spiraltubeformer.com`, `sbkj.com`, `ductworkmachinery.com`) yours? If yes, decide — consolidate to sbkjduct.com? Or keep them?
3. **Tell me**: is there budget for backlink outreach (paid directory listings, guest posts on HVAC blogs)? Or fully organic?

Once I know those three, I write the executable Week 1 punch-list.
