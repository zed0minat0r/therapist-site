# Performance Baseline — Cycle 2

**Audited:** 2026-04-26  
**Commit at audit:** 5b76bbb (post-Razor orphan-CSS removal)  
**Tool:** Lighthouse (headless Chrome, npx)

---

## Scores

| Metric           | Mobile | Desktop |
|------------------|--------|---------|
| Performance      | 71     | 97      |
| Accessibility    | 92     | 92      |
| Best Practices   | 96     | 96      |
| SEO              | 100    | 100     |

**Floors:** Perf >= 90, Best Practices >= 95, SEO >= 95  
**Status:** Mobile Performance FAILING (71 vs floor 90). All others pass.

---

## Core Web Vitals (Mobile)

| Metric       | Value  | Grade |
|--------------|--------|-------|
| LCP          | 5.4 s  | Poor  |
| CLS          | 0      | Good  |
| TBT          | 0 ms   | Good  |
| FCP          | 2.8 s  | Needs improvement |
| Speed Index  | 5.4 s  | Poor  |

LCP element: `h1.hero__headline` (not the image — the H1 text)  
LCP breakdown: TTFB 100ms, Element render delay 2,873ms  
The render delay is the critical bottleneck — fonts are blocking render.

---

## Top 3 Opportunities (by ms savings)

### 1. Render-blocking Google Fonts — 1,760ms estimated savings
The Google Fonts stylesheet is loaded as a blocking `<link rel="stylesheet">`. On mobile, the full font chain (CSS + 3 woff2 files) delays first render by ~803ms and holds up LCP by nearly 3s.

**Fix applied this cycle:** Switched to non-blocking `preload` + `onload` pattern with `<noscript>` fallback.

### 2. Oversized hero image — 438 KiB wasted (654 KiB total across images)
The hero serves a 1600px-wide image to a ~412px mobile viewport. Lighthouse measured 524 KiB total, 438 KiB wasted. Service row images (900px wide) also oversized for mobile.

**Fix applied this cycle:** Added `srcset` with 800w breakpoint for hero, 500w for service/about images. Slightly reduced quality (85 → 80/75) within acceptable visual range.

### 3. Unminified CSS — ~3 KiB savings
style.css is served unminified (57 KiB). Estimated 3 KiB savings from minification. Low impact on its own but part of overall payload.

**Deferred:** Minification requires a build step. Not worth introducing tooling for 3 KiB on a static site — defer until a bundler is added or a separate minification pass is warranted.

---

## Additional Issues Found

| Issue | Impact | Status |
|-------|--------|--------|
| Missing favicon (404 on favicon.ico) | Console error → Best Practices signal | Fixed: inline SVG data URI favicon added |
| Cache TTL short (10 min on GitHub Pages) | GitHub Pages controls cache headers; not fixable at repo level | Deferred |
| Forced reflow in main.js (line 279/72) | 78ms — `window.innerHeight` on init | Deferred — standard layout read, not a meaningful regression |
| script tag without defer | Minor signal | Fixed: added defer attribute |

---

## What Was Applied This Cycle

1. Google Fonts: `<link rel="stylesheet">` → `preload` + `onload` non-blocking pattern (estimated 800ms recovery on LCP)
2. Hero image: `srcset` with 800w mobile breakpoint added (estimated 300–400 KiB savings on mobile)
3. Service + About images: `srcset` with 500w mobile breakpoints, `q=75` for small, `q=80` for large
4. Favicon: inline SVG data URI added to eliminate 404 console error
5. main.js: `defer` attribute added

## What Was Deferred

- CSS minification: needs build tooling, low ROI for 3 KiB
- Cache TTL: GitHub Pages controlled, repo cannot change
- Forced reflow: acceptable cost, would require parallelizing DOM reads into init which is a refactor
- Accessibility score (92) is below no floor listed in this agent's rules — flagged for Accessibility agent pass

---

*This file reflects current state only. Overwritten each Performance cycle.*
