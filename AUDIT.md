# Nigel's Audit — Laura Spaulding Therapist Site
**Date:** 2026-04-18
**Auditor:** Nigel (strict British auditor)
**Previous Score:** 8.5 / 10
**Current Score:** 8.7 / 10
**Delta:** +0.2
**Live URL:** https://zed0minat0r.github.io/therapist-site/

---

## OVERALL SCORE: 8.7 / 10

Scored from the perspective of a prospective therapy client in suburban Philadelphia — searching on a weekday evening, possibly stressed, not design-literate, deciding whom to trust with something private.

The site earns 8.7. Not an act of generosity — a recognition that the changes since 8.5 are substantive and cumulative. Pricing transparency removes the most common barrier to a first contact. The voice unification (My Philosophy, Laura collaborates) lifts the professional register noticeably. The specialties section background change from near-black ink to forest green reads warmer and more human. The couples therapy image is now plausible. These are real improvements, not flourishes.

What holds the score below 9.0 is a cluster of small, fixable items: residual "we" voice breaks in three locations, a hero italic phrase that drifts right of centre on mobile, and the testimonials swipe hint that is spatially separated from the scrollable area on narrow viewports.

---

## SECTION-BY-SECTION BREAKDOWN

### 1. Hero — 9.0 / 10

The parallax forest, word-by-word entrance, pulsing green dot, botanical sway, and stats bar are all working correctly. "Currently accepting new clients" is high-value social proof in exactly the right location. The tappable phone number alongside the primary CTA is correct practice.

One pixel issue: `.hero__word--italic` carries `padding-left: 1.8rem` which is not reset at `max-width: 900px`. On a 375px screen the italic phrase "to figure it" shifts visibly right of the centred headline axis. Everything else in the hero centres correctly — this single line is out of alignment. One-line fix.

### 2. Approach — 8.7 / 10

"My Philosophy" eyebrow is correct. "Laura collaborates" in pillar 03 is correct — the voice inconsistency from the prior audit has been resolved. Pillar top-border accents on mobile are working and the colour coding (terracotta / gold / forest green) carries through cleanly.

The Carl Rogers quote remains elegant. On mobile the quote converts from left-border to top-border treatment and centres — structurally sound, though the centred italic attribution reads slightly loose at 375px. Acceptable, not urgent.

### 3. Services — 8.5 / 10

Alternating split rows with hover image scale are excellent. Session pricing ("Sessions from $175 — sliding scale available") is now visible and the out-of-network explanation is concise. The fee note copy is accurate and removes a genuine cognitive barrier.

One voice break: the section eyebrow reads "What We Offer." The rest of the site has shifted to first-person singular. This should read "What Laura Offers" or simply be replaced with the existing "Services" nav label. Minor but visible to any client who scrolls with attention.

### 4. Specialties — 8.8 / 10

Forest green background (replacing near-black) is materially better — warmer, more on-brand, and less oppressive for a section that follows a light parchment segment. The stagger animation is well-paced. The constellation layout is the most visually distinctive scroll moment on the site.

Two residual "we" instances here ("We work with a wide range" / "What we hold space for") — these read as a different register than the first-person bio copy. They are stylistically defensible as practice-voice, but a committed first-person approach would change them to "Laura works with" and "What this practice holds space for." Not urgent — the specialties section is informational rather than persuasive.

### 5. About and FAQ — 9.0 / 10

The strongest section on the site. First-person bio copy is excellent: "I keep my practice small by design because caseload size affects care quality" is a genuine differentiator. The FAQ accordion is functional and keyboard-accessible. Pricing in FAQ is correctly ranged at "$175–$210." The first-session answer remains the best copy on the page.

The stock office photograph is still doing partial work. A real portrait would add 0.3 points. That is a content request, not code.

### 6. Testimonials — 8.3 / 10

Horizontal snap scroll with drag affordance is preserved and working. "Real stories. Real change." glow animation is present and restrained. Geographic attributions (Swarthmore, Media, Wayne, Bryn Mawr) are correctly local.

One structural issue on mobile: the `trust-strip__header` collapses to `flex-direction: column` with the "Swipe to read" hint sitting 48px below the title and spatially disconnected from the scrollable track. The hint is not doing its job in this position — a user who does not see the track overflow will not know to swipe. Moving the hint directly above the track (inside or adjacent to `track-wrap`) would solve this with one CSS ordering change.

### 7. CTA Section — 8.4 / 10

Two-column editorial layout on dark forest background is bold and effective. White CTA button with breathe animation is preserved per instruction.

One voice break: "We make it easy. Reach out today and we'll find the right fit for you." Two "we" instances in a section that follows from a first-person bio. Consider "It's easy to start. Reach out today and Laura will find the right fit." The meaning is identical; the voice is unified.

### 8. Contact — 8.9 / 10

The floating cream card with gold top border on dark ink background is the best single design detail on the site. Form is functional: inline validation, service picker chips, privacy note, success state, and Formspree integration are all correct.

Note: `afantalis@gmail.com` as the contact email is exposed in the HTML source and will attract spam harvesting. Not a UX issue for the end client — flagged as a technical concern.

### 9. Mobile / Responsive — 8.6 / 10

The comprehensive force-centre pass at `max-width: 900px` is thorough and the `!important` overrides are justified given the specificity architecture. FAQ accordion left-alignment override confirmed correct. Service row images stack above copy on mobile as intended.

The `hero__word--italic` padding-left issue (see Hero section) is the only mobile alignment fault remaining.

The stat dividers hide correctly at 480px. Tap targets are 44px throughout — confirmed in CSS.

### 10. Code Quality — 8.5 / 10

Clean vanilla JS, no dependencies. Reduced-motion check gates all animations. Passive scroll listeners throughout. IntersectionObserver with unobserve-after-trigger pattern. Schema.org MedicalBusiness structured data present. Explicit image dimensions throughout.

The validation error styles are injected via `document.createElement('style')` in `initFormValidation()` — a minor code smell. Functionally correct but those rules belong in the stylesheet.

---

## TOP 3 REFINEMENT PRIORITIES

### Priority 1 — Fix the hero italic phrase indentation on mobile

`.hero__word--italic` has `padding-left: 1.8rem` which is not reset in the mobile media query. On a 375px screen this pushes "to figure it" visibly right of the centred headline axis. Fix: add `padding-left: 0` (or `padding-left: 0.2rem`) to `.hero__word--italic` inside the `@media (max-width: 900px)` block. One line. Immediately visible improvement on the most important section.

### Priority 2 — Resolve the three remaining "we" voice breaks

Three locations remain inconsistent with the first-person voice established in the hero, approach, and about sections:
- Services eyebrow: "What We Offer" → "What Laura Offers"
- CTA body: "We make it easy. Reach out today and we'll find the right fit for you." → "It's easy to get started. Reach out and Laura will find the right fit for you."
- (The specialties "we" instances are stylistically acceptable as practice-voice and are lower priority.)

### Priority 3 — Move the "Swipe to read" hint directly above the testimonial track

On mobile the hint is rendered inside the header flex column, 48px below the title. This means a user who does not already know the track is scrollable will not see the hint adjacent to the scrollable area. Move the hint element (`trust-strip__hint`) to sit immediately above the `trust-strip__track-wrap` on mobile — either via DOM reordering, or by hiding the header hint and adding an inline hint above the track at `max-width: 900px`. Low effort, high clarity improvement.

---

## WHAT IMPROVED SINCE 8.5

- Pricing transparency ($175–$210 in fee note and FAQ) — removes the most common barrier to first contact
- "My Philosophy" and "Laura collaborates" voice fixes — removes corporate register from the approach section
- Specialties background changed to forest green — warmer, more on-brand
- Couples therapy image is now an actual couple — removes a credibility gap
- FAQ accordion justify-content fix confirmed working on mobile
- Testimonials title glow animation present and restrained — adds warmth without clutter
- Ghost pillar numbers removed — left-border accents are the correct replacement

---

*Audit by Nigel — strict scoring from a real user's perspective.*
