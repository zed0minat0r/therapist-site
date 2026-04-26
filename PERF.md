# Performance Audit — Current State

**Last updated:** 2026-04-25 (cycle 4)
**Live URL:** https://zed0minat0r.github.io/therapist-site/

---

## Cycle 4 Scores (post render-block + LCP preload fix)

### Mobile (375px, throttled)
| Metric | Score |
|---|---|
| Performance | 87–89 (median ~88) |
| Accessibility | 97 |
| Best Practices | 100 |
| SEO | 100 |

### Core Web Vitals (Mobile)
| Metric | Value | Delta vs Cycle 3 |
|---|---|---|
| LCP | 3.7–3.9s | ~0 (unchanged — Unsplash CDN bottleneck) |
| FCP | 1.6s | -1.5s improvement (was 3.1s) |
| CLS | 0.018–0.019 | ~0 |
| TBT | 0ms | 0 |

### Desktop (1350px)
| Metric | Score |
|---|---|
| Performance | 68 (variable; LCP limited by Unsplash CDN at 1600w) |
| Accessibility | 97 |
| Best Practices | 100 |
| SEO | 100 |

---

## Cycle 3 Baseline (pre-cycle-4)

| Metric | Mobile | Desktop |
|---|---|---|
| Performance | 83 | — |
| LCP | 3.7–3.8s | — |
| FCP | ~3.1s | — |

---

## What Changed This Cycle

1. **Render-blocking style.css → non-blocking preload.**
   Changed `<link rel="stylesheet" href="style.css">` to `<link rel="preload" as="style" onload="...">` with `<noscript>` fallback. Inline critical CSS (~300 bytes) in `<style>` block prevents FOUC. FCP improvement: 3.1s → 1.6s (-1.5s).

2. **LCP hero image preload added.**
   Added `<link rel="preload" as="image">` with imagesrcset/imagesizes matching the img srcset, so browser discovers the LCP image at the top of the document rather than after HTML parse. Minor LCP improvement expected but Unsplash CDN latency is the floor.

---

## Remaining Bottleneck

The mobile Performance score is sitting at ~87-89 vs the 90 target. The remaining gap is **LCP from the Unsplash CDN image** — the hero forest photograph at 3.7–3.9s. The only reliable path to 90+ is self-hosting the hero image as a webp file served from the same origin as GitHub Pages. That eliminates third-party CDN variance and allows full browser cache control.

No CSS or animations were modified. The silhouette scene (.qb-*) was not touched.
