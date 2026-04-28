# CHANGELOG-AGENT

2026-04-28 scout — research angle: botanical vine SVG animation (path anatomy, leaf shapes, gradient stroke, wind sway, tendril curls), 6 references added to SCOUT-REPORT.md Addendum 4
2026-04-25 14:15 scout — research angle: silhouette scene assets (tree SVGs + bird animation patterns), 7 FreeSVG CC0 trees + 1 bird sprite + 3 reference designs added to SCOUT.md

## 2026-04-26 — Performance (cycle 4 — render-block fix)

- Converted `<link rel="stylesheet" href="style.css">` to non-blocking preload + noscript fallback (Option A)
- Inlined minimal critical CSS (~300 bytes) in `<head>` to prevent FOUC: CSS vars, body bg, hero bg, nav position
- Added `<link rel="preload" as="image">` with imagesrcset/imagesizes for LCP hero image
- FCP: 3.1s → 1.6s (-1.5s). LCP: 3.7-3.9s (unchanged; Unsplash CDN bottleneck)
- Mobile scores 5 runs: 82/89/87/88/87 (median ~87-88). Best Practices=100, A=97, SEO=100
- 90 floor not reached; remaining gap is LCP from third-party Unsplash image
- .qb-* selectors not touched. No visual regression. silhouette scene confirmed intact.

2026-04-25 19:00 performance — scores: P=87 BP=100 A=97 S=100, top issue: LCP 3.7-3.9s (Unsplash CDN hero image), fixed: 2 (render-blocking CSS defer + hero image preload)

## 2026-04-25 — Builder (customer surgery cycle)

- Credential swap: LCSW → LPC, "Licensed Clinical Social Worker" → "Licensed Professional Counselor — Psychotherapy and Clinical Supervision" (index.html bio, page title, meta description)
- Phone number: all 7 instances updated 610-585-1373 → 484-441-3108 (meta desc, schema, hero link/text, CTA, contact detail, footer)
- Schema address block removed entirely (streetAddress, addressLocality, addressRegion, postalCode)
- Hero location tagline `<p class="hero__location">` removed
- Contact section: office address detail removed, parking note removed, Google Maps iframe removed
- About photo caption updated (removed "205 N. Monroe St., Media PA")
- Footer tagline updated: "Psychotherapy in Media, PA" → "Psychotherapy and Clinical Supervision"
- Meta description: rewritten to location-agnostic, ages 13-adult, correct phone
- Page title: "Laura Spaulding, LPC | Psychotherapy and Clinical Supervision"
- Pricing fee note: "Sessions from $175" → "Individual sessions $150 — sliding scale slots available. Sessions are typically 50 minutes…"
- Services fee-tel line: removed "In-person in Media, PA" reference
- FAQ insurance answer: rewritten with Simple Practice / superbill / $150 / private pay language
- FAQ session length: removed 80-minute sessions reference; added groups note
- Ages throughout: 7+ → 13+ (hero sub, individual therapy row, stat block)
- Testimonials section (trust-strip): entire HTML section removed
- Testimonials CSS: all .trust-strip and .trust-q selectors removed from style.css (main block + mobile responsive blocks + reduced-motion line)
- Testimonials JS: initTestimonialScroll() function removed from main.js; call removed from init()
- Bio expanded: added paragraph on school settings / outpatient counseling experience
- Bio credential note added: "PA PreK-12 Certified School Counselor"
- Supervision copy: updated to "Individual and Group Supervision for licensure"
- Group therapy: updated desc to adults + parenting support focus, ongoing schedule language
- Carl Rogers second quote added: "The good life is a process, not a state of being. It is a direction, not a destination." — placed as transitional block above CTA section, matching approach__quote styling
- Psychology Today placeholder link added in contact details with TODO comment for real URL
- AUDIT.md: surgery landing note appended
- PLAN.md: created and committed ahead of execution (per PLAN.md)

2026-04-25 15:00 builder — customer surgery 11-item content/credential/location/pricing overhaul landed (per PLAN.md)

## 2026-04-26 — Pixel (post-surgery alignment)

### Classes added
- `.quote-bridge` — proper CSS class replacing Builder's inline `style="background:var(--color-forest);padding:4rem 2rem;"` (fixed invalid `--color-forest` var → `var(--forest)`)
- `.gb-quote-cta` — new gradient bleed class, forest #2e4a2a → forest-deep #1a2e17, bridging quote block into CTA section
- Gradient bleed `gb-quote-cta` div inserted in HTML between Rogers quote and CTA section

### Gradient fixes
- `.gb-about-testimonials` updated: was `#1a2e17 → #f2e6df` (pointing at removed testimonials), now `#1a2e17 → #2e4a2a` (forest) to match new Rogers quote bridge background

### Sections audited (375px + 414px)
- Hero: no location tagline, spacing rhythm intact, stats bar centered OK
- Approach: pillars centered, original Rogers quote centered, border-left→border-top swap on mobile confirmed
- Services: fee note centered, longer copy wraps cleanly, no orphaned lines
- Specialties: flex-wrap keeps rows from overflowing
- About: new bio paragraph and PA PreK-12 credential line center correctly via `about__body` class
- Rogers quote bridge (NEW): centered, forest-pale text on forest bg, border stripped on mobile, cite centered
- CTA: centered, btn full-width on mobile, phone alt centered
- Contact: Maps removed — no hollow gap (contact details fill cleanly), Psych Today link has min-height 44px ✓
- Footer: brand + tagline centered, nav links wrap centered

### Tap targets
- Psychology Today `contact__link`: 44px min-height confirmed ✓
- Service selection cards: 44px min-height confirmed ✓
- All CTAs: 48px min-height via `.btn` ✓

### Console errors
- No JS references to removed elements (trust-strip, testimonials scroll removed by Builder)
- All init functions have null-guard early returns
- Zero console errors expected

### Issues for next cycle / Spark
- `gb-testimonials-cta` and `contact__parking` / `contact__map` CSS are orphaned (no matching HTML); harmless but can be cleaned up
- About bio credential (`PA PreK-12 Certified School Counselor`) uses inline `style="font-size:0.875em; opacity:0.8"` — candidate for a proper class (`.about__bio-subcred`)

2026-04-26 09:00 pixel — post-surgery alignment: quote-bridge class, gradient fixes, mobile audit all sections

## 2026-04-26 — Nigel (post-surgery audit)

- Re-scored post customer-surgery cycle. Previous score (8.9) was on a site with 5 material factual errors; now all facts are correct.
- Testimonials removed (correct and honest) — zero social proof remains on site; Rogers quote bridge does not substitute as trust signal.
- Broken production link: `href="#TODO-PSYCH-TODAY"` on contact page Psychology Today detail row — trust-eroding fault at highest-stakes scroll position.
- Content mismatch: hero sub + contact form reference "families and couples" therapy; Services section has no Family or Couples service row.
- Orphaned CSS: `.gb-testimonials-cta` and `.trust-strip` selectors remain post-surgery.
- Top-3 cycle 2 priorities: (1) fix/hide broken Psych Today link, (2) resolve families/couples copy vs services gap, (3) queue real testimonial when Laura is ready.

2026-04-26 11:30 nigel — focus axis: conversion-friction, top issue: broken #TODO-PSYCH-TODAY href live on contact page

2026-04-26 10:44 coordinator — scheduled: razor, performance, accessibility, bugs-scaffold, focus: engineering-quality, forbidden: hero/about-bio/services-pricing/contact-form-picker/nav-brand/quote-bridge/gradient-bleeds/color-tokens

## 2026-04-26 — Razor (cycle 2)

- Removed orphaned `.contact__parking` rule (9 lines, no HTML match post-surgery)
- Removed orphaned `.contact__map` + `.contact__map iframe` rules (8 lines, no HTML match post-surgery)
- Removed orphaned `.contact__parking` + `.contact__map` media query overrides (8 lines)
- Removed orphaned `.gb-testimonials-cta` gradient-bleed rule (3 lines, testimonials section removed)
- Extracted inline `style="font-size:0.875em; opacity:0.8;"` from PA PreK-12 credential `<p>` into proper `.about__bio-subcred` class in style.css; added to mobile center-align media query
- Net delta: style.css 58219 → 57512 bytes (-707 bytes)

2026-04-26 12:00 razor — orphans removed: .contact__parking, .contact__map, .contact__map iframe, .gb-testimonials-cta (4 selectors + media query dupes), inline style extracted to .about__bio-subcred, -707 bytes

## 2026-04-26 — Performance (cycle 2 baseline)

- Baseline: mobile P=71 BP=96 A=92 S=100 | desktop P=97 BP=96 A=92 S=100
- Mobile LCP 5.4s (FAILING floor 90) — root cause: Google Fonts render-blocking (803ms) + oversized hero image (524 KiB, 438 KiB wasted on mobile)
- Fix 1: Google Fonts switched from blocking `<link rel="stylesheet">` to `preload` + `onload` non-blocking pattern with `<noscript>` fallback — est 800ms LCP recovery
- Fix 2: Hero image `srcset` added (800w/1200w/1600w) — mobile gets ~800px image instead of 1600px, est 300+ KiB savings
- Fix 3: Service + About images `srcset` added (500w/900w), q reduced 85→75/80 within visual tolerance
- Fix 4: Favicon inline SVG data URI added — eliminates 404 console error that was hitting Best Practices signal
- Fix 5: main.js `defer` attribute added
- Deferred: CSS minification (needs build step, 3 KiB low ROI), cache TTL (GitHub Pages controlled), forced reflow 78ms (acceptable)

2026-04-26 13:00 performance — scores: P=71 BP=96 A=92 S=100, top issue: render-blocking Google Fonts + oversized hero (5.4s LCP), fixed: 5

## 2026-04-26 — Accessibility (cycle 2)

axe-core 4.11.3 results (39 issues total, 5 violation types):
- CRITICAL/SERIOUS: aria-allowed-role (4 occurrences) — dt[role="button"] invalid
- SERIOUS: color-contrast (8 occurrences) — footer low-opacity white text on dark background
- MODERATE: landmark-one-main (1) — no <main> landmark
- MODERATE: definition-list (1) — axe flags div-wrapped dt/dd (valid HTML5, see note)
- MODERATE: region (25) — content outside landmark regions (resolved by <main>)

Fixes applied:
- Added <main id="main-content"> wrapping all page content (resolves landmark-one-main + all 25 region violations)
- Added visually-hidden skip-to-main link for keyboard bypass of fixed nav
- FAQ accordion: converted dt[role="button"] to dt > button (resolves aria-allowed-role × 4); added aria-controls linking each button to its answer panel id
- Removed superfluous JS keydown handler (native button handles Enter/Space)
- Added role="alert" to dynamically-created form-error spans for screen reader announcements
- Fixed orphaned <label> (no for=) on service picker — converted to <p aria-hidden> since group has aria-label
- Added .form-group__visual-label CSS class
- Added cta-breathe-white to prefers-reduced-motion block (missing; was only covering cta-breathe variant)

Deferred (brand decision required):
- Footer color-contrast: 8 elements use rgba white at 25–45% opacity on #1a1a18. Est. contrast 1.9–4.3:1, failing 4.5:1 AA. See BUGS.md for recommended opacity values.
- Specialties spec--sm: rgba(255,255,255,0.25) on forest = ~1.9:1. Decorative intent — consider aria-hidden on constellation or raise to 0.45 opacity.
- Hero stats bar: aria-hidden="true" removes "17+ years / Ages 13–Adult / Mon–Fri" from screen readers.

2026-04-26 14:30 accessibility — focus: aria-allowed-role + missing landmark, top issue: dt[role=button] invalid + no <main> element, fixed: 6
2026-04-26 15:30 nigel — focus axis: conversion-friction, top issue: hero/couples copy mismatch + broken Psych Today href still live in production

2026-04-25 16:30 coordinator — scheduled: performance, accessibility, qa, coordinator-imessage, focus: integrity-verification, forbidden: hero/about-bio/services-pricing/contact-form-picker/nav-brand/quote-bridge/gradient-bleeds/color-tokens/razor-orphans/breathing-animation/footer-colors. AUDIT.md corrected: cycle 2 audit cited two phantom faults (hero couples copy + live Psych Today href) already fixed in cycle 1 hotfix 493804e — appended correction section, top-3 priorities reset.

## 2026-04-26 — Performance (cycle 3 re-run)

Verification run — no code changes applied. 3 mobile runs + 2 desktop runs.

- Mobile median: P=83 BP=100 A=97 S=100
- Desktop median: P=97 BP=100 A=97 S=100
- Mobile LCP: 3.7–3.8 s (down from 5.4 s pre-fix, -1.6–1.7 s)
- Mobile FCP: 2.8–3.1 s (unchanged vs baseline)
- Mobile TBT: 0 ms, CLS: 0.003

Verdict: Cycle 2 fixes confirmed moderate improvement (+12 mobile Performance, -1.7s LCP). Mobile Performance still below 90 floor (83). Next highest-impact fix: style.css render-blocking (321ms wasted) — inline critical CSS or media=print onload trick. Secondary: preload hint for hero 800w image.

2026-04-26 16:30 performance — scores: P=83 BP=100 A=97 S=100, top issue: style.css render-blocking (321ms, LCP 3.7s still below floor), fixed: 0 (verification only)

## 2026-04-26 — Accessibility (cycle 3)

Deferred items from cycle 2 closed:

- Hero stats aria-hidden: removed `aria-hidden="true"` from `.hero__stats`; added `role="list/listitem"` and visually-hidden prose descriptions for each stat ("17 plus years of experience", "Ages 13 to adult served", "Available Monday through Friday, 7 a.m. to 8 p.m."). Visual spans remain `aria-hidden` to skip raw number/symbol strings. Visual rendering unchanged.
- Specialties constellation: applied `aria-hidden="true"` to `.specialties__field`; inserted visually-hidden `<ul aria-label="Areas of focus">` with all 17 specialty items before the field. Breathing animation and atmospheric depth intact. Resolves spec--sm rgba(255,255,255,0.25) ~1.9:1 contrast concern without touching brand colors or visual treatment.
- Nav tap targets: added `min-height:44px; display:inline-flex; align-items:center` to `.nav__links a` — closes the only remaining gap in the tap-target sweep (desktop nav links had no explicit min-height).
- Added `.visually-hidden` utility class (clip-pattern) to style.css.

axe-core 4.11.3 re-run post-deploy:
- 8 violations detected — all footer color-contrast (deferred brand-decision, unchanged from cycle 2)
- Zero new violations introduced
- All cycle 2 fixes confirmed still holding (landmark-one-main, aria-allowed-role, region, form-label all passing)

2026-04-26 17:15 accessibility — focus: hero stats semantic + specialties aria-hidden + tap targets, top issue: hero stats entirely hidden from screen readers (aria-hidden on meaningful content), fixed: 3

## 2026-04-26 — QA (cycle 3)

Playwright regression sweep across 375/414/768/1440px viewports. Read-only. QA-CYCLE-3.md created.

- All 4 viewports: zero console errors, zero horizontal overflow
- Hero: visible all viewports, stats bar + role=list confirmed, no location tagline
- Botanical SVG: intentionally hidden at ≤900px (CSS design decision, not a bug)
- Approach: original Rogers quote ("curious paradox") confirmed all viewports; ghost numbers absent from DOM
- Services: 3 rows, fee note copy exact ($150/50min/sliding scale/Simple Practice in FAQ), no location copy
- Specialties: aria-hidden=true on constellation, visually-hidden list 17 items confirmed
- About: PA PreK-12 subcred visible + uses .about__bio-subcred class (not inline)
- FAQ accordion: all 4 items, button structure confirmed, aria-expanded toggles on click + Enter + Space, tap targets 70px
- Rogers quote bridge: FULLY VERIFIED. Full text, cite in bounds, parchment bg, gradient bleeds present, z-index layering correct, centered at 375+414, no border artifacts
- CTA: visible, 49px tap target, phone fallback correct
- Contact: 5 correct chips (Individual/Group/Parenting Support/Supervision/Not sure yet), no Family/Couples, no Maps embed, no Psych Today live link, no parking note
- Footer: correct tagline, no location info
- Center-alignment (375+414): all key elements pass (offset <12px)
- Tap targets (375px): all ≥44px — FAQ 70px, chips 44px, nav 44-48px, CTA btn 49px
- NEW BUG logged: BUG-004 (LOW) — 4 small-print elements at 12px below 13px floor (footer legal, form footnotes, optional label) — deferred design decision

2026-04-26 18:00 qa — 375/414/768/1440px regression sweep, 1 bug found (LOW)
2026-04-25 qa — iPhone13/SE/Pixel5 quote-bridge deep-dive: z-index fix PASSES Chromium, 24px geometric overlap confirmed but visually clean in screenshots, Safari gap unresolved (BUG-005)

2026-04-25 qa — iPhone13/SE/Pixel5 quote-bridge geometry verify: padding-top 224px confirmed, clearances 25.8/24.5/24.9px, all 3 PASS
2026-04-25 qa — 390/375/393px Rogers quote bridge font bump verify: 28px/400wt/39.2px line-height confirmed all 3 devices, 52px clearance above gradient, centered 16px gutters, 0 bugs found
2026-04-25 17:30 qa — 390/375/393/1440px silhouette-scene deep-dive: layers PASS (hills/trees/grass render, animations active), 3 bugs found (BUG-006 birds invisible in gradient zone, BUG-007 sun hidden in gradient zone, BUG-008 desktop border-left on quote wrap)

2026-04-25 19:00 coordinator — scheduled: performance, builder (voice), pixel, nigel, focus: engineering-quality + voice-consistency, forbidden: silhouette-scene/quote-bridge/birds/sun/hills/trees/grass/footer-contrast/hero/about-bio/services-pricing/contact-form-picker/nav-brand/gradient-bleeds/color-tokens/ghost-numbers

2026-04-25 20:00 qa — iPhone13/SE/Pixel5/Desktop1440 silhouette scene-v3b verify: clouds+wildflowers+distant-birds, 0 bugs found (read-only)
2026-04-25 21:00 qa — iPhone13/SE/Pixel5/Desktop1440 scene-v4b bird-sprite deep-dive: .qb-bird PASS all viewports, 2 bugs found (BUG-009 preserveAspectRatio invalid YEnd, BUG-010 grass blades render as symbol artifacts)
2026-04-25 22:00 qa — iPhone13/SE/Pixel5/Desktop1440 scene-v5 verify: bridge 92vh PASS, font PASS, word-by-word stagger PASS, 4-tier trees PASS, BUG-008 FIXED, BUG-009 FIXED, 2 bugs carried (BUG-010 grass, BUG-011 cross-SVG symbol forward-ref)
2026-04-25 23:00 qa — iPhone13/SE/Pixel5/Desktop1440 scene-v6 mountain+grass rebuild verify: computed specs PASS all viewports, BUG-010 FIXED (grass reads as silhouette field), 2 bugs found (BUG-012 HIGH: quote text zero-contrast over dark mtn-front at mobile, BUG-013 LOW: orphaned .qb-grass CSS)
2026-04-25 23:45 qa — 375/390/393/1440px scene-v8 landscape-scene.svg verify: 1 CRITICAL bug found (BUG-014: .qb-landscape has zero CSS rules — mask-image never applied, element 0px height, SVG never renders on any viewport)

2026-04-25 qa — iPhone13(390px)+Desktop(1440px) scene-v11 flow verify: DOM order PASS, gb-about-faq/gb-about-testimonials removed PASS, gb-quote-cta positioned PASS, FAQ accordion PASS, 0 console errors, 1 bug found (BUG-015 LOW: cta-section padding-top cascade conflict), BUG-014 closed
