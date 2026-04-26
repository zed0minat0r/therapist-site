# Nigel's Audit — Laura Spaulding Therapist Site
**Date:** 2026-04-18
**Auditor:** Nigel (strict British auditor)
**Previous Score:** 8.7 / 10
**Current Score:** 8.9 / 10
**Delta:** +0.2
**Live URL:** https://zed0minat0r.github.io/therapist-site/

---

## CUSTOMER SURGERY — 2026-04-25 (Builder)
All 11 customer-directed content changes applied. Credential corrected (LCSW → LPC), phone corrected (610-585-1373 → 484-441-3108), all location references removed (schema address block, hero tagline, office address, parking note, map embed, photo caption, footer tagline), pricing corrected ($150 + 50min, no 80-min/extended sessions), ages updated (7+ → 13+), testimonials section fully removed (HTML + CSS + JS), bio expanded with school/outpatient context + PA PreK-12 credential, supervision copy updated to "Individual and Group Supervision for licensure", group description expanded with adults/parenting focus, second Carl Rogers quote added above CTA, Psychology Today placeholder link added in contact section. See CHANGELOG-AGENT.md for full line-by-line record.

---

## OVERALL SCORE: 8.9 / 10

Scored from the perspective of a prospective therapy client in suburban Philadelphia — searching on a weekday evening, possibly stressed, not design-literate, deciding whom to trust with something private.

The site earns 8.9. All three priorities from the 8.7 audit have been resolved correctly, and the accessibility additions are substantive rather than cosmetic. The hero italic centering fix, the voice consolidation, and the swipe hint repositioning each address a real user-facing problem. The keyboard focus styles and reduced-motion testimonial pause show professional-grade accessibility awareness. The textarea placeholder copy is a small but well-judged trust signal for an anxious first contact.

What holds the score below 9.0 is a cluster of items that require content or architectural decisions, not code: there is no real photograph of Laura anywhere on the site, the contact email is a personal Gmail address exposed in plain HTML, and two "we" instances in the specialties section remain stylistically inconsistent with the rest of the first-person voice. The form validation styles are still injected at runtime via JavaScript rather than delivered in the stylesheet. None of these are catastrophic. All are fixable.

---

## SECTION-BY-SECTION BREAKDOWN

### 1. Hero — 9.2 / 10

The hero italic centering fix is confirmed in the CSS: `.hero__word--italic` retains `padding-left: 1.8rem` on desktop for visual rhythm, and the mobile block at `max-width: 900px` overrides it to `padding-left: 0 !important`. On a 375px screen the italic phrase now sits on the same axis as the rest of the centred headline. Priority 1 from the prior audit is closed.

Parallax forest image, word-by-word stagger, pulsing green dot, botanical sway, stats bar, and tappable phone number are all working. The reduced-motion block correctly disables the botanical sway animation for users who have requested it. This is the strongest opening section on any therapist site I have reviewed.

No further issues to flag.

### 2. Approach — 8.8 / 10

"My Philosophy" eyebrow is correct. "Laura collaborates" and "Laura draws on CBT" are both confirmed in the HTML. The three pillar accents carry through correctly at mobile breakpoint as top-border rather than left-border. The Carl Rogers quote with its terracotta left border on desktop and top-border mobile treatment is typographically clean.

The only remaining micro-issue is the centred italic attribution at 375px, which reads slightly loose. That is a subjective observation rather than a fault — it does not affect trust or legibility.

### 3. Services — 8.7 / 10

The section eyebrow now reads "What I Offer" — confirmed on line 188 of the HTML. The "we" voice break is closed. Alternating split rows with hover image scale remain excellent. Fee note is informative and concise: pricing, sliding scale, out-of-network explanation, and telehealth note all in one band.

One remaining consideration: "Start here →" as the CTA on every service row is functional but generic. A therapist site at this quality level could benefit from more specific micro-copy — "Talk to me about this" or "Ask about availability" — to differentiate from a transactional product site. This is a refinement suggestion, not a defect.

### 4. Specialties — 8.8 / 10

Forest green background remains correct. Stagger animation is well-paced. The constellation layout is the most visually distinctive scroll moment on the site and it is preserved.

Two "we" instances remain: "What we hold space for" (headline) and "We work with a wide range of concerns" (subhead). These were noted as stylistically defensible in the prior audit. I maintain that position — they read as practice-voice rather than a voice error. A client reading this section will not notice inconsistency; they are reading it as an offer, not a biography. These are not a priority.

### 5. About and FAQ — 9.0 / 10

Strongest section on the site. First-person bio copy is excellent and the FAQ answers have genuine warmth. The accordion is keyboard accessible — confirmed: `role="button"`, `tabindex="0"`, `aria-expanded` toggling, and `keydown` handling for Enter and Space are all present and correct.

The keyboard focus-visible styles added since 8.7 use `var(--terra)` at `outline-offset: 3px`. This is the correct approach — on-brand colour, sufficient contrast, applied consistently across `a`, `button`, `[role="button"]`, `input`, `textarea`, and `select`. The addition is confirmed in the CSS at lines 2173–2181.

The stock office photograph remains. A genuine portrait of Laura would add at minimum 0.2 points and is the single highest-value content change available. That is a content request, not a code fix.

### 6. Testimonials — 8.6 / 10

Swipe hint repositioning is confirmed correct. The `trust-strip__hint--mobile` element appears in the HTML directly above the `trust-strip__track-wrap` (before line 399), and the CSS hides the in-header hint on mobile via `.trust-strip__header .trust-strip__hint { display: none; }` while revealing the standalone hint via `.trust-strip__hint--mobile { display: block; }`. On mobile the hint now sits spatially adjacent to the scrollable area. Priority 3 from the prior audit is closed.

The reduced-motion rule for testimonials (`animation-play-state: paused !important`) is confirmed at line 2194 of the CSS. This is the correct target for a marquee-style or animated scroll element.

The section is clean. The geographic attributions remain correctly local. The "Real stories. Real change." glow is present and restrained.

One honest observation: the testimonials are unsigned beyond city-level attribution. A therapy site is limited in what it can share for privacy reasons — that is understood. But the disclaimer "Former clients, shared with their written permission" is doing important work and it is correctly placed.

### 7. CTA Section — 8.7 / 10

The voice fix is confirmed: line 437 now reads "I make it easy. Reach out today and I'll find the right fit for you." Both "we" instances have been replaced with "I." Priority 2 from the prior audit is closed.

Two-column editorial layout on dark forest background with white breathe-animation CTA button is preserved. The phone fallback link is correctly present.

No further issues to flag in this section.

### 8. Contact — 8.9 / 10

The textarea placeholder copy ("For example: I've been struggling with anxiety and I'm looking for someone to talk to.") is confirmed on line 514 of the HTML. This is a well-judged addition — it models the type of disclosure the form is asking for and reduces blank-page anxiety for a first-time user. Good instinct.

Form validation, service picker chips, privacy note, success state, and Formspree integration remain correct. Focus-visible styles apply to form inputs.

The floating cream card with gold top border on dark ink background remains the best single design detail on the site.

Two ongoing technical notes:
- `afantalis@gmail.com` is exposed in the HTML source at line 19 (schema) and line 501 (visible link). This will attract spam harvesting from automated crawlers. A contact form with email obfuscation, or a professional domain email address, would resolve this.
- Form validation error styles are injected at runtime via `document.createElement('style')` in `initFormValidation()` in main.js (lines 194–207). Functionally correct but the rules belong in style.css, not in JavaScript.

### 9. Mobile / Responsive — 8.9 / 10

The comprehensive force-centre pass is thorough and correct. The `hero__word--italic` centering fix is the final mobile alignment issue — it is now resolved. All tap targets are 44px minimum. Stat dividers hide at 480px. FAQ left-alignment override is correct. Service rows stack image above copy with centred body text on mobile.

The double media query block (one at line 1603 and a second at line 1740 covering the same breakpoint) is redundant from an architecture standpoint. It works, but consolidating into a single `@media (max-width: 900px)` block would improve stylesheet maintainability. This is a code organisation note, not a user-facing issue.

### 10. Code Quality — 8.6 / 10

Clean vanilla JS, no dependencies. Reduced-motion check is correctly applied to all animation categories. Passive scroll listeners throughout. IntersectionObserver with unobserve-after-trigger for reveals. Schema.org MedicalBusiness structured data present with correct address and hours. Explicit image dimensions on all `img` elements.

Two items that drop this below 9.0:
- JS-injected validation styles (noted above) — belongs in the stylesheet.
- Two separate `@media (max-width: 900px)` blocks rather than one consolidated block — minor architecture issue.

Neither is visible to users. Both are visible to anyone who maintains this codebase.

---

## TOP 3 REFINEMENT PRIORITIES

### Priority 1 — Add a real portrait photograph of Laura

The About section currently displays a stock photograph of a generic office interior. This is the highest-impact content change available. A prospective client deciding whether to trust a therapist with something private wants to see the person's face — not their furniture. A genuine, well-lit headshot or candid practice photograph would add demonstrably to conversion and trust. This cannot be fixed in code. It requires a content decision. Raise it with the client.

### Priority 2 — Resolve the Gmail email exposure in HTML source

`afantalis@gmail.com` appears twice in the rendered HTML: once in the schema block and once as a visible mailto link. Automated spam harvesters will extract this within weeks of public deployment. Recommend either: (a) replace with a professionally branded email address, or (b) remove the mailto link from the contact section and rely on the form, obfuscating the address in the schema JSON. The form already handles the primary contact flow — the exposed email is not needed for UX.

### Priority 3 — Move form validation styles from JavaScript to CSS

In `main.js`, `initFormValidation()` constructs a `<style>` element and appends it to `document.head`. The rules it injects (`.form-group input.is-invalid`, `.form-error`, `.form-error.is-visible`) belong in `style.css`. Moving them eliminates a runtime DOM mutation, reduces JavaScript responsibility, and makes the validation behaviour visible alongside the rest of the design system. One-time refactor, no user-facing change.

---

## WHAT IMPROVED SINCE 8.7

- Hero italic phrase centering on mobile confirmed fixed — `padding-left: 0 !important` applied in mobile block
- "What I Offer" in Services eyebrow — "we" voice break closed
- "I make it easy / I'll find the right fit" in CTA section — two "we" instances replaced with first-person
- Keyboard focus-visible styles added — `var(--terra)` outline on all interactive elements, on-brand and accessible
- Prefers-reduced-motion: testimonial animation paused — correct accessibility handling
- Contact textarea placeholder copy — "For example: I've been struggling with anxiety..." is a genuine trust signal
- Swipe hint repositioned directly above testimonial track on mobile — spatially meaningful, Priority 3 closed
- FAQ accordion and testimonial header alignment conflicts resolved

---

*Audit by Nigel — strict scoring from a real user's perspective.*
