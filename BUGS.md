# BUGS / Deferred Issues

## BUG-005 — Carl Rogers quote: z-index fix PASSES in headless Chrome, VISUAL CONFIRMS CLEAN — 2026-04-25 (QA cycle 4)

**Status:** INVESTIGATED. Headless Chrome PASSES. Root cause of user's iPhone Safari experience is unresolved — the fix works in Chromium emulation but the rendering gap on real Safari hardware persists.

**Playwright findings across 3 device emulations (local server http://localhost:8765):**

All three devices show an identical geometry problem in the DOM:

| Device | Gradient bottom (viewport-rel) | Blockquote top (viewport-rel) | Overlap |
|---|---|---|---|
| iPhone 13 (390x844, 3x) | 199.7px | 175.7px | **+24px overlap** |
| iPhone SE (375x667, 2x) | 200.3px | 176.3px | **+24px overlap** |
| Pixel 5 (393x851, 2.75x) | 199.9px | 175.9px | **+24px overlap** |

The `.gb-about-testimonials` gradient (200px tall, `margin-bottom: -200px`) bleeds 24px into the space above the blockquote. Geometrically the gradient DOES overlap the blockquote box.

**Why headless Chrome shows it as PASS (visually clean):**
The screenshots at all 3 devices show the full quote text visible and readable. The z-index layering IS working in Chromium: `.quote-bridge .approach__quote-wrap` is `z-index: 5`, `.gb-about-testimonials` is `z-index: 2`, and `.quote-bridge` has `z-index: auto` (no stacking context trap). Chromium correctly paints the quote wrap above the gradient. The quote text starts at ~176px viewport-y, the gradient's bottom pixel is at ~200px, but because the quote wrap has higher z-index the text WINS the paint order and is clearly readable.

**Visual result in screenshots:**
- Gradient fades from dark forest green → parchment over its 200px height
- By px 176 (where the quote text starts), the gradient has faded to near-parchment (~#dcd9c9 per the CSS stops at 92%)
- The quote text (dark forest color on parchment) is fully legible — the "bleed" into the text box is invisible because the gradient is nearly the same color as the parchment background by that point
- "— CARL ROGERS" attribution: fully visible at all 3 viewports
- FULL QUOTE TEXT confirmed: "The good life is a process, not a state of being. It is a direction, not a destination."

**Stacking context audit:**
- `.quote-bridge`: z-index=auto, position=relative, transform=none, filter=none, will-change=auto, opacity=1, isolation=auto — NO stacking context created
- `<main>`: z-index=auto, position=static, transform=none, filter=none — NO stacking context
- Ancestor chain of `.quote-bridge`: ZERO stacking contexts found in entire parent chain

**Verdict in Chromium emulation: PASS.** Full quote visible, attribution visible, no gradient paint-over, stacking context chain clean.

**Open question for real iPhone Safari:**
The 24px geometric overlap is real — Chromium handles it with z-index. Safari's compositing may differ. The fix (removing z-index from `.quote-bridge`) is correct per CSS spec; Safari *should* honor it. The remaining risk is a Safari-specific compositing quirk where `position: relative` without z-index on the parent may be treated differently. If the bug persists on device, the nuclear option is to increase `.quote-bridge` `padding-top` from `11rem/12rem/14rem` to absorb the full 200px gradient without relying on z-index stacking at all — making it geometry-only, not paint-order-dependent.

**Screenshots saved:** `/tmp/quote-clip-iphone13.png`, `/tmp/quote-clip-iphonese.png`, `/tmp/quote-clip-pixel5.png`

---

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

---

## BUG-004 — Small-print text below 13px minimum (LOW) — 2026-04-25 (cycle 3 QA)

QA Playwright sweep at 375px measured 4 elements rendering at 12px, below the 13px floor:

| Element | Selector | Current | Min |
|---|---|---|---|
| Footer legal line | `.site-footer__bottom` | 12px | 13px |
| Form response note | `.contact__form-note` | 12px | 13px |
| Form privacy note | `.contact__privacy-note` | 12px | 13px |
| Form optional label | `.form-optional` | 12px | 13px |

All four are tertiary/small-print text (legal copyright, form footnotes, field label modifier). This is a design-intent question — these are intentionally set small to recede visually. However, they technically violate the 13px floor.

**Recommended fix (if approved):** Set all four to `font-size: 13px`. No visual impact on primary content reading experience.

**Status:** Deferred — requires design intent confirmation.

---

---

## BUG-006 — Birds invisible: all 5 fly inside the dark gradient zone (MEDIUM) — 2026-04-25

**Status:** Open

**Found:** QA silhouette-scene deep-dive across iPhone 13 / iPhone SE / Pixel 5 / Desktop 1440

**Root cause:**
`.quote-bridge__flock` uses `inset: 0` (fills the entire bridge). Bird `--y` CSS vars place them at 6%, 10%, 14%, 24%, 30% from the top of the flock container. The bridge is ~437–468px tall. Those percentages resolve to 28–140px from the bridge top.

The `gb-about-testimonials` gradient bleed has `height: 200px` and `margin-bottom: -200px`, meaning its dark forest→parchment gradient visually overlaps the first 200px of the bridge. The gradient starts nearly opaque at the top and fades to parchment by ~200px.

All 5 birds (including 2 small ones) fly at y positions 28–140px — entirely within the dark gradient zone. The bird SVG uses `stroke: #1a2e17` (dark forest-deep, same hue as the gradient). Against the dark gradient background the birds are effectively invisible.

**Desktop geometry (1440x900 Chromium):**
| Bird | `--y` | y in bridge | Gradient covers | Visible? |
|---|---|---|---|---|
| Bird 0 | 14% | 66px | 0–200px | No |
| Bird 1 | 6% | 28px | 0–200px | No |
| Bird 2 | 24% | 112px | 0–200px | No |
| Bird 3 (sm) | 10% | 47px | 0–200px | No |
| Bird 4 (sm) | 30% | 140px | 0–200px | No |

**Fix options:**
1. Shift `--y` values down into the parchment zone: 50%–80% range puts birds at 219–372px from bridge top, clearly below the gradient, visible against parchment. Recommend: 52%, 58%, 65%, 72%, 78%.
2. Change flock positioning to `top: 200px` instead of `inset: 0` so the 0% origin is already below the gradient.
3. Change bird `background-image` stroke to a lighter color (e.g., `--forest-light`) so they register against the dark gradient background.

Option 1 (shift `--y`) is simplest and preserves the "birds drifting above the horizon" narrative.

---

## BUG-007 — Sun glow hidden inside dark gradient zone (LOW) — 2026-04-25

**Status:** Open

**Found:** QA silhouette-scene deep-dive

**Root cause:**
`.qb-sun` is positioned at `top: 28%` of `.quote-bridge__scene` (which has `inset: 0` on the bridge). At bridge height ~437–468px, 28% = ~122–131px from the bridge top. The `gb-about-testimonials` gradient covers 0–200px from the bridge top with a dark forest color.

The sun glow is a `radial-gradient` centered at 122–131px from the bridge top, which is well inside the dark gradient zone. Its warm orange glow (`rgba(255,215,170,0.35)`) is completely masked by the overlapping dark forest gradient.

**Desktop geometry:** sunTop=131px, sunBottom=351px, gradient covers 0–200px, so the sun's center and top half are hidden. Only the bottom ~150px of the 220px sun would nominally extend below the gradient, but that outer edge is already at near-zero opacity in the radial gradient.

**Fix:**
Move sun to `top: 50%` or higher to bring it below the gradient boundary. Or reposition to the parchment zone: `top: 55%` places center at ~242px from bridge top, fully below the 200px gradient. Alternatively, reframe sun as lower/horizon-positioned by using `bottom: 35%` instead of `top: 28%`.

---

## BUG-008 — Desktop border-left leaks through on quote-bridge (LOW) — 2026-04-25

**Status:** FIXED in scene-v5 (2026-04-25). `.quote-bridge .approach__quote-wrap` now sets `border-left: none` and `padding-left: 0` unconditionally (not only in the mobile media query). Verified: `borderLeftWidth=0px borderLeftStyle=none` at 1440px.

**Found:** QA silhouette-scene deep-dive, desktop 1440x900 screenshot

**Root cause:**
`.approach__quote-wrap` base style sets `border-left: 2px solid var(--terra)` and `padding-left: 32px`. The `.quote-bridge .approach__quote-wrap` override sets `border-left-color: var(--terra)` (preserving the color) but never sets `border-left-width: 0` or `border-left: none`. The mobile override (`@media max-width: 900px`) correctly sets `border-left: none !important`, but on desktop (1440px) the border-left renders.

The desktop 1440px screenshot shows a 2px terracotta vertical rule left of the quote text. This is a design decision: the approach section uses this left-border as a pull-quote accent. The question is whether it's intentional on the bridge quote at desktop. On mobile (where the quote is centered full-width), it's correctly removed.

**Fix (if unintended):** Add `border-left: none` to `.quote-bridge .approach__quote-wrap` (or change existing `border-left-color` override to `border-left: none`).

**Note:** This may be intentional editorial styling. Flag for design review.

---

## BUG-009 — preserveAspectRatio invalid value on qb-layer--mid SVG (LOW) — 2026-04-25 (scene-v4b QA)

**Status:** FIXED in scene-v5 (2026-04-25). `.qb-layer--mid` now uses `xMidYMax meet` (valid). Zero console errors confirmed across all 4 viewports.

**Found:** Playwright scene-v4b verification at Pixel 5 (Chromium) and Desktop 1440 (Chromium). WebKit (iPhone 13, iPhone SE) does not surface this error.

**Console error (Chromium only):**
`Error: <svg> attribute preserveAspectRatio: Unrecognized enumerated value, "xMidYEnd meet".`

**Root cause:**
`qb-layer--mid` SVG in index.html line 477 uses `preserveAspectRatio="xMidYEnd meet"`. The SVG spec does not include `YEnd` as a valid alignment keyword — valid Y values are `YMin`, `YMid`, and `YMax`. `xMidYEnd` is unrecognized. Chrome surfaces this as a console error; WebKit silently ignores it.

**Impact:** The tree silhouette SVG still renders (browsers fall back to default `xMidYMid meet`) but the intended behavior — anchoring the treeline to the bottom of the viewport slice — may not work as designed. The treeline may float mid-SVG rather than sitting at the bottom edge where it meets the grass layer. Visual effect appears credible in screenshots but alignment precision is lost.

**Fix:** Change `preserveAspectRatio="xMidYEnd meet"` to `preserveAspectRatio="xMidYMax meet"` (YMax = bottom alignment, which is the valid equivalent of the intended "anchor to bottom" behavior).

---

## BUG-010 — Foreground grass/wildflowers rendered as parenthesis-dash symbols at all viewports (MEDIUM) — 2026-04-25 (scene-v4b QA)

**Status:** Open

**Found:** Desktop 1440 and mobile screenshots. Visible in all 4 viewport screenshots.

**Root cause:**
The `qb-layer--near` SVG (`preserveAspectRatio="none"`) is scaling the `viewBox="0 0 1200 220"` to fill the full width. At 393px and 390px wide, the 14 grass blade `<path>` elements (drawn as thin `Q` curves in a 1200-unit coordinate system) compress to near-zero width and render as illegible marks. The curves' narrow aspect ratio — roughly 4px wide paths in a 1200-unit space — collapse to single-pixel strokes that look like typographic symbols ( ), -, ) rather than grass blades.

At desktop 1440px the grass blades are more visible but still thin and render with an odd uniform repeat pattern that reads more like a decorative border than naturalistic grass.

**Fix options:**
1. Add `stroke-width` to grass paths set relative to the viewBox (e.g., `stroke-width="4"`) — currently no explicit stroke-width is set, browsers default to 1 user unit which at 393/1200 scale is < 1px effective.
2. Reduce the viewBox width (e.g., `viewBox="0 0 400 80"`) and respace grass blade x-positions proportionally.
3. Replace with `preserveAspectRatio="xMidYMax meet"` (drop `none`) so the grass scales proportionally and stays anchored to the bottom of the scene.

---

---

## BUG-010 — Grass blades still render as thin symbol-like strokes at mobile (MEDIUM) — 2026-04-25 (scene-v5 QA)

**Status:** Still open after scene-v5. `vector-effect: non-scaling-stroke` and `stroke-width: 2.6` are set in CSS, but the viewBox-space BBox widths of grass paths are 2–3.6 units in a 1200-unit space. At 390px wide the grass blade paths are approximately 1–1.5px wide after scaling despite the non-scaling stroke. The visual result at mobile is a row of thin vertical tick marks rather than natural grass blades. Desktop is marginally better (same pixel width strokes but proportionally denser-looking at 1440px). The `vector-effect: non-scaling-stroke` preserves the 2.6px stroke width in CSS pixels but the paths themselves are drawn too narrow in the 1200-unit coordinate system for the stroke to read as a blade at any width.

**Confirmed still present:** scene-v5 iPhone 13 and Desktop screenshots. The foreground row shows vertical stroke marks (some parenthesis-like) not naturalistic grass. The wildflower circles are visible as small terracotta dots — those render acceptably.

**Fix options remain as documented in original BUG-010.**

---

## BUG-011 — Midback SVG symbols defined after first use — cross-SVG ref works in Chromium, unverified in Safari (LOW) — 2026-04-25 (scene-v5 QA)

**Status:** Open (Chromium PASS, Safari unverified)

**Found:** scene-v5 QA, structural code review.

**Root cause:**
The 4 `<symbol>` definitions (`#qb-tree-pine`, `#qb-tree-oak`, `#qb-tree-bare`, `#qb-tree-birch`) live inside the `<defs>` block of `.qb-layer--mid` SVG (DOM line 503). The `.qb-layer--midback` SVG (DOM line 480) references all 4 symbols via `<use href="#qb-tree-...">` — but appears BEFORE the mid SVG in the DOM. This is a cross-SVG forward-reference to symbols.

The SVG spec (SVG 2) says `<symbol>` elements are globally available within the document once parsed (not just within their containing SVG). Chromium implements this correctly: all 16 midback `<use>` elements have non-zero BBoxes and render visually. However, WebKit/Safari has historically had stricter same-SVG scoping for `<symbol>` references. If Safari requires the `<use href>` to resolve within the same SVG document fragment, midback trees will be invisible on Safari.

**Evidence in Chromium:** All 16 `<use>` elements in `.qb-layer--midback` have non-zero rendered BBoxes (e.g., `{x:37, y:188, w:17, h:132}`). The midback treeline is visible in screenshots.

**Risk:** High risk of Safari regression. The symbols are used in a different SVG than where they are defined, AND the using SVG appears before the defining SVG in DOM order.

**Fix:** Move the `<defs>` block (with all 4 symbols) to a standalone hidden SVG at the top of `.quote-bridge__scene`, before both the midback and mid SVG layers. E.g.:
```html
<svg style="display:none" aria-hidden="true">
  <defs>
    <symbol id="qb-tree-pine" ...> ... </symbol>
    <!-- ... -->
  </defs>
</svg>
```
This guarantees cross-browser symbol resolution regardless of SVG spec interpretation.

---

## BUG-012 — Quote text overlaps dark mtn-front at mobile: zero contrast at overlap zone (HIGH) — 2026-04-25 (scene-v6 QA)

**Status:** Open

**Found:** scene-v6 QA. Visible in all 3 mobile screenshots (iPhone 13, iPhone SE, Pixel 5).

**Root cause:**
The mtn-front layer height is 56% of the bridge (434px on iPhone 13, 344px on iPhone SE). The bridge has padding-top: 14rem (224px) which positions the quote text starting at ~383px from the viewport top. The mtn-front SVG's visual top (the peak tips) reaches approximately 44% from the bridge top, which at mobile maps to overlapping the lower half of the quote body and the cite attribution. The quote text color is `var(--forest-deep)` = `#1a2e17`. The mtn-front fill is also `#1a2e17`. This produces near-zero contrast wherever the dark mountains are behind the dark text — words like "not a destination" and the "— CARL ROGERS" cite are rendered over a dark mountain silhouette.

**Evidence:**
- iPhone 13 (390px): quote body words "not a destination" and "CARL ROGERS" cite appear over mtn-front peak zone. The text is the same color as the mountain fill.
- iPhone SE (375px): more severe — "direction, not" and "destination" lines partially overlap mountain peaks. Cite "CARL ROGERS" is fully in the mountain overlap zone.
- Pixel 5 (393px): same pattern as iPhone 13.
- Desktop 1440px: mountains are proportionally lower in the frame and quote text clears the peaks visually. Desktop is acceptable.

**Computed:**
- mtnFront fill resolved: `#1a2e17` (correct forest-deep, per spec)
- Quote text color: `var(--forest-deep)` = `#1a2e17`
- text-shadow: `0 1px 2px rgba(26,46,23,0.06)` — same dark color, effectively invisible contrast aid on dark bg
- z-index is correct (quote z:5 over scene z:1); this is a color/composition issue not z-order

**Fix options:**
1. Change quote text color to parchment/white for mobile when it enters the mountain overlap zone — but this fights the design intent of dark text on parchment background.
2. Reduce mtn-front height on mobile (e.g., max 40% at ≤900px) so peaks don't reach the quote text area.
3. Add a semi-opaque backdrop or text-shadow with parchment color to the quote text to create contrast against dark mountains.
4. Increase `padding-bottom` on quote-wrap so bridge height grows and quote sits entirely above the 56% mountain band.

---

## BUG-013 — Grass filled path renders correctly at mobile but reveals orphaned .qb-grass path animation CSS (LOW) — 2026-04-25 (scene-v6 QA)

**Status:** Open (cosmetic / dead code)

**Found:** scene-v6 QA code review.

**Root cause:**
BUG-010 (old stroke-based grass blades) was FIXED in scene-v6 by replacing 20 individual `<path>` elements with a single filled closed `qb-grass-path`. However, CSS rules `.qb-grass path`, `.qb-grass path:nth-child(2n)`, etc. (style.css lines 2327-2338) and the `prefers-reduced-motion` block at line 2342 (`.qb-grass path`) reference the class `.qb-grass` which no longer exists in the DOM. These are now orphaned selectors.

**Evidence:**
- `grep "qb-grass" index.html` — no `.qb-grass` group exists; only `.qb-grass-path` on the single consolidated path.
- CSS still has `.qb-grass path { animation: grass-wave }` and 4 `nth-child` delay variants.

**Impact:** Low — zero visual effect on users. Dead CSS adds ~12 lines / ~400 bytes to style.css. No runtime errors.

**Fix:** Remove `.qb-grass path` and all its `nth-child` variants from style.css. Keep `.qb-grass-path` (the filled path) and `.qb-wildflowers` rules.

---

## A11y — Hero stats bar semantic structure — CLOSED 2026-04-25 (cycle 3)

Removed `aria-hidden="true"` from `.hero__stats`. Added `role="list"` + `role="listitem"` on
each stat, with visually-hidden descriptive strings ("17 plus years of experience", "Ages 13 to
adult served", "Available Monday through Friday, 7 a.m. to 8 p.m."). Visual spans remain
`aria-hidden` so screen readers skip the raw mixed number/symbol strings and read the clean
prose instead.
