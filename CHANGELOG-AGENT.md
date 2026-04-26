# CHANGELOG-AGENT

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
