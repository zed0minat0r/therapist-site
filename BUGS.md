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

## A11y — Specialties section: spec-sm contrast on forest background

`.spec--sm` uses `color: rgba(255,255,255,0.25)` — approximately 1.9:1 against `--forest` (#2e4a2a). These are intentionally dim/decorative words in the breathing constellation, but they technically fail WCAG for any text. The design intent is that small words are deliberately harder to read (atmospheric). If this needs addressing, raise to `rgba(255,255,255,0.45)` (~3.5:1) or add `aria-hidden="true"` to the entire constellation field (it is decorative — the specialties section body text above it conveys the same info).

---

## A11y — Hero stats bar: aria-hidden removes info from screen readers

`.hero__stats` has `aria-hidden="true"`. The stats (17+ years, Ages 13–Adult, Mon–Fri 7am–8pm) are meaningful. Consider removing `aria-hidden` and providing proper semantic structure, or ensure the info is duplicated in the contact/about sections (it partially is).
