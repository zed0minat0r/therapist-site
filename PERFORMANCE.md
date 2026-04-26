# Performance — Cycle 3 Verification

**Audited:** 2026-04-26 (cycle 3 re-run)
**Purpose:** Verify cycle 2 fix impact. No new code changes applied this cycle.
**Tool:** Lighthouse (headless Chrome, npx), 3 mobile runs + 2 desktop runs averaged

---

## Scores — Cycle 3 Median

| Metric           | Mobile | Desktop |
|------------------|--------|---------|
| Performance      | 83     | 97      |
| Accessibility    | 97     | 97      |
| Best Practices   | 100    | 100     |
| SEO              | 100    | 100     |

**Floors:** Perf >= 90, Best Practices >= 95, SEO >= 95
**Status:** Mobile Performance FAILING (83 vs floor 90). All other scores pass — Best Practices and SEO improved to 100 vs cycle 2 baseline of 96/100. Accessibility improved to 97 vs cycle 2 baseline of 92 (accessibility agent work landed between cycles).

---

## Delta vs Cycle 2 Baseline (pre-fix)

| Metric              | Cycle 2 (pre-fix) | Cycle 3 (post-fix) | Delta    |
|---------------------|-------------------|--------------------|----------|
| Mobile Performance  | 71                | 83                 | +12      |
| Mobile LCP          | 5.4 s             | 3.7–3.8 s          | -1.6–1.7 s |
| Mobile FCP          | 2.8 s             | 2.8–3.1 s          | ~0 to -0.3 s |
| Mobile TBT          | 0 ms              | 0 ms               | 0        |
| Mobile CLS          | 0                 | 0.003              | ~0       |
| Best Practices      | 96                | 100                | +4       |
| SEO                 | 100               | 100                | 0        |
| Desktop Performance | 97                | 97                 | 0        |

---

## Core Web Vitals — Mobile (Cycle 3)

| Metric       | Value     | Grade              |
|--------------|-----------|--------------------|
| LCP          | 3.7–3.8 s | Needs improvement  |
| CLS          | 0.003     | Good               |
| TBT          | 0 ms      | Good               |
| FCP          | 2.8–3.1 s | Needs improvement  |
| Speed Index  | 3.1 s     | Needs improvement  |

---

## Verdict

Cycle 2 fixes confirmed moderate improvement: LCP improved ~1.6–1.7s (from 5.4s to 3.7–3.8s), Performance score +12 (71 → 83). The font preload fix delivered the largest portion of LCP recovery as estimated. Favicon fix contributed to Best Practices going from 96 to 100.

Mobile Performance is still below the 90 floor. LCP at 3.7–3.8s is in "needs improvement" territory. The remaining bottlenecks are:

1. **style.css render-blocking** — 321ms wasted. The CSS is still a standard blocking `<link rel="stylesheet">`. Inlining critical CSS above-the-fold and deferring the remainder (via `media="print" onload`) is the highest-impact remaining fix.
2. **Hero image** — still serving ~136 KB at 800w via Unsplash CDN. The srcset is in place but Unsplash's CDN latency on mobile adds to LCP. A preload hint for the 800w hero image would help the browser discover it earlier.
3. **Unminified CSS** — ~3 KiB savings. Low priority but real.

These are flagged for the next Performance cycle, not applied here (verification run only).

---

## Previous Cycle 2 Baseline (archived reference)

- Mobile: P=71, A=92, BP=96, S=100. LCP=5.4s, CLS=0, TBT=0ms, FCP=2.8s
- Desktop: P=97, A=92, BP=96, S=100

---

*This file reflects current state only. Overwritten each Performance cycle.*
