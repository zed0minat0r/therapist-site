# BUGS / Deferred Issues

## A11y — Color Contrast (requires brand decision) — 2026-04-25

axe-core 4.11.3 flagged 8 WCAG AA color-contrast violations in the footer. All are low-opacity white text on `--ink` (#1a1a18). Fixing these requires increasing opacity values, which will visually change the footer's subdued / receding aesthetic.

**Affected elements and current computed colors:**

| Element | CSS value | Approx hex | Est. contrast | WCAG AA required |
|---|---|---|---|---|
| `.site-footer__tagline` | `rgba(255,255,255,0.38)` | ~#717170 | ~3.6:1 | 4.5:1 (normal text) |
| `.site-footer__nav a` | `rgba(255,255,255,0.45)` | ~#818180 | ~4.3:1 | 4.5:1 (normal text) |
| `.site-footer__bottom p` | `rgba(255,255,255,0.25)` | ~#575756 | ~2.7:1 | 4.5:1 (normal text) |
| `.site-footer__bottom a` (phone) | `rgba(255,255,255,0.40)` | ~#707070 | ~3.5:1 | 4.5:1 (normal text) |

**Recommended fix (if approved):**
- `.site-footer__tagline`: raise to `rgba(255,255,255,0.55)` (~4.8:1)
- `.site-footer__nav a`: raise to `rgba(255,255,255,0.60)` (~5.3:1)
- `.site-footer__bottom p`: raise to `rgba(255,255,255,0.50)` (~4.6:1) — or consider this decorative/redundant
- `.site-footer__bottom a`: raise to `rgba(255,255,255,0.55)` (~4.8:1)

**Brand note:** The footer's current treatment is intentionally subdued — it recedes visually so the CTA section above commands attention. Increasing opacity will make the footer more legible but less minimal. User decision required before fixing.

---

## A11y — Specialties constellation aria-hidden — CLOSED 2026-04-25 (cycle 3)

Applied `aria-hidden="true"` to `.specialties__field` (the visual constellation) to suppress
decorative/atmospheric text from screen readers. Added visually-hidden `<ul>` with all 17 specialty
items before the field so screen readers get clean sequential list. Visual rendering and
breathing animations are fully intact.

---

## A11y — Hero stats bar semantic structure — CLOSED 2026-04-25 (cycle 3)

Removed `aria-hidden="true"` from `.hero__stats`. Added `role="list"` + `role="listitem"` on
each stat, with visually-hidden descriptive strings ("17 plus years of experience", "Ages 13 to
adult served", "Available Monday through Friday, 7 a.m. to 8 p.m."). Visual spans remain
`aria-hidden` so screen readers skip the raw mixed number/symbol strings and read the clean
prose instead.
