# Nigel's Audit — Amy Fantalis & Associates
**Date:** 2026-04-18
**Auditor:** Nigel (strict British auditor)
**Previous Score:** 7.4 / 10
**Current Score:** 7.6 / 10
**Delta:** +0.2
**Live URL:** https://zed0minat0r.github.io/therapist-site/

---

## OVERALL SCORE: 7.6 / 10

The 0.2 bump is earned but not generous. The improvements are real and visible to a prospective client — attributions on testimonials remove the "anonymous and therefore fake" problem, the pricing signal addresses the primary anxiety for a first-time therapy seeker, and the contrast fix on the CTA body copy is genuinely more readable. The Pillar 03 terracotta accent and Penn MSW credential placement are small but authentic signals of quality. The mobile centre-alignment pass is thorough and correct throughout.

The site is now solidly in "better than most therapists in this area" territory. It does not yet clear 8.0 — which requires "I would actively choose this over a competitor" — because a nervous person arriving at 10pm is still missing three pieces of information they will instinctively look for: whether the practice is currently accepting new patients, whether there is a voice from adult individual clients (not just family outcomes), and whether the service-selector card layout holds together properly on mobile.

---

## SECTION-BY-SECTION BREAKDOWN

### 1. Hero — 7.8 / 10
Strong. The forest image with warm overlay is handsome and non-generic. The headline "You don't have to figure it out alone" is the single most human sentence on the page and leads well. The botanical SVG with parallax sway is refined without being gratuitous. The stat bar (17+ years, 7-Adult, Mon-Fri hours) gives credibility anchors. Phone number alongside the CTA is the correct call for a healthcare service. Hero location tag opacity and text-shadow improvements are confirmed and visible.

**Remaining gap:** No indication that the practice is currently accepting new clients. For a prospective patient arriving at 10pm, this ambiguity is a real friction point. A single line — "Currently accepting new clients" — beneath the CTA or alongside the stat bar would carry enormous conversion weight at virtually zero visual cost.

### 2. Approach — 7.5 / 10
The three-pillar layout reads cleanly. The terracotta h3 accent on Pillar 03 ("Whole-life connected") is a correctly executed emphasis upgrade — it is the most genuinely differentiated claim on the site and now reads with appropriate weight. The count-up animation is earned. The Carl Rogers pull-quote is good, though slightly academic for a first-visit client who may not know Rogers from a general practitioner.

### 3. Services — 7.5 / 10
The editorial list format is distinctive and avoids the card-grid cliche. Age tags are useful data. The pricing signal — "Session fees vary; sliding scale available" — is confirmed and is a material improvement from the previous cycle. Placement in the services CTA is appropriate.

**Remaining gap:** Group therapy reads "Call us to hear about current group offerings." This signals that information may not exist or may change. Even a rough cadence ("Groups typically run 8–10 weeks; enquire for current schedules") would convert better than the current empty gesture.

### 4. Specialties — 7.6 / 10
The type-constellation with staggered animation on forest background remains the most visually distinctive moment on the site. Alternating left/right row entrance is sophisticated. Small-tier opacity at 0.47 is confirmed more readable than the previous 0.32.

**Remaining gap:** The "We work with a wide range of concerns. If you don't see yours, reach out" note sits above the constellation, not below where the eye exits the section. A first-time visitor may scroll past the entire field before registering that they should act on it. Moving or duplicating this prompt below the constellation would capture exits.

### 5. About — 7.8 / 10
Strong prose section. The Penn MSW credential is now in its correct position — immediately below the name and licensure line, where it is actually read. The FAQ addresses the three questions every new patient has. The address linked to Google Maps is confirmed and removes a real friction point. The credential is not duplicated (confirmed: bio text says "I hold a Master of Social Work from the University of Pennsylvania" while the styled line says "MSW — University of Pennsylvania" — this is repetitive but not damaging).

**Remaining gap:** The About section remains text-only. A small, tasteful environmental photograph — Amy's office, a detail of the space, anything local — would humanise the practice in a way that 400 words of bio copy cannot. Language is warm; imagery is absent.

### 6. Testimonials — 7.4 / 10
Initials and town attributions (M.T. Swarthmore PA, J.R. Media PA, S.K. Wayne PA) are confirmed and are a genuine improvement. They make the quotes feel locally sourced rather than templated. "Shared with permission" is the correct caveat and is correctly styled at low opacity.

**Remaining gap:** All three testimonials describe family and child outcomes. There is no voice from an adult seeking individual therapy — almost certainly the most common client type. A fourth quote addressing anxiety, depression, or a life transition would broaden the trust signal significantly and reduce the implicit impression that this is primarily a children's practice.

### 7. CTA Section — 7.5 / 10
The terracotta background is confident. The contrast fix at 0.82 opacity is confirmed — body copy is now legible and passes WCAG AA. "Taking the first step is the hardest part" is empathetic.

**Remaining gap:** "Book a Free Consultation" (CTA section) is inconsistent with the form submit button below, which says "Send Message." The word "free" is doing significant conversion work in the CTA but disappears by the time the prospective client reaches the form. This inconsistency signals carelessness to an anxious first-timer. Both should use the same framing.

### 8. Contact Form — 7.5 / 10
The service-selector card pattern is confirmed as superior to a native dropdown. The inline validation is functional. The privacy reassurance note ("This message is private and goes directly to Amy") is correctly placed and carries exactly the right tone.

**Remaining gap:** On mobile (375px), the five service cards wrap to multiple rows and "Not sure yet" ends up alone on its own row. An orphaned pill looks like a rendering error to a phone user. A CSS fix — either `min-width` capping to prevent the lone wrap, or making "Not sure yet" slightly narrower — would close this gap.

### 9. Mobile UX at 375px — 7.4 / 10
Centre-alignment is now consistent throughout, confirmed across every section. Tap targets at 44px minimum are confirmed. Stats bar fade-edge scroll cue is the correct affordance. The FAQ items remain left-aligned within the centred about section — the correct decision.

**Remaining gap:** The "Not sure yet" service card orphan (noted above). Additionally, the hero CTA button and phone number, while stacked correctly, have no visual distinction between "button" and "phone number" on a first glance at a small screen. The phone number benefits from its underline treatment but it could be slightly bolder or have a phone icon to make the tap-to-call function immediately obvious.

### 10. Technical and SEO — 7.5 / 10
WebP hero image confirmed — `&fm=webp` is present in the Unsplash URL. Schema markup (MedicalBusiness JSON-LD) is correctly structured. `fetchpriority="high"` and explicit dimensions on the hero image are in place. `prefers-reduced-motion` is respected with a blanket override across all animations. Intersection Observer cleanup (`disconnect`, `unobserve`) is correctly implemented throughout.

---

## TOP 3 PRIORITIES

### PRIORITY 1: Add an availability signal to the hero
One line — "Currently accepting new clients" — placed beneath the CTA button or alongside the stat bar. This is the single highest-impact change available. A prospective patient at 10pm who cannot tell whether Amy is still in practice will close the tab and try the next result. This requires one line of HTML and no CSS. Its absence is the clearest conversion gap on the site.

### PRIORITY 2: Fix the "Not sure yet" orphan card on mobile, and align CTA copy with form copy
The service selector's fifth card wraps alone on narrow screens — a trivial CSS fix that removes a visible polish gap. Simultaneously, the CTA section says "Book a Free Consultation" while the form submit says "Send Message." Align these. Both fixes are under 30 minutes and remove signals of carelessness at the highest-stakes moments of the user journey.

### PRIORITY 3: Add a fourth testimonial from an adult individual client
The three existing quotes all describe family or child outcomes. The adult seeking individual therapy for anxiety, depression, or a life transition — probably the most common single client type — has no mirror in the testimonials section. A fourth quote from this perspective would immediately broaden the trust signal and reduce the impression that this is primarily a children's practice.

---

## WHAT CHANGED SINCE 7.4 — CONFIRMED IMPROVEMENTS
- Specialty small-tier opacity raised to 0.47: confirmed, visible improvement.
- Testimonial attributions (M.T. Swarthmore, J.R. Media, S.K. Wayne + "Shared with permission"): material trust improvement, confirmed.
- Pricing signal ("sliding scale available"): addresses primary anxiety for first-time seekers, confirmed.
- CTA body text contrast at 0.82: legible, WCAG AA compliant, confirmed.
- Address linked to Google Maps: practical and friction-reducing, confirmed.
- Tap targets at 44px minimum: confirmed, no regressions found.
- Hero location tag opacity raised + text-shadow: more legible, confirmed.
- Pillar 03 terracotta accent: correctly executed emphasis upgrade, confirmed.
- Penn MSW credential prominently positioned: confirmed, correct placement.
- Textarea privacy reassurance note: right tone, right position, confirmed.
- Mobile stats fade edge scroll cue: correct affordance, confirmed.
- Mobile centre-alignment: thorough and consistent throughout, confirmed.
- WebP hero image: confirmed in Unsplash URL parameters.

---

## WHAT IS WORKING — DO NOT CHANGE
- The first-person About bio voice
- The botanical SVG and botanical sway animation
- The pillar number count-up (00 to 01/02/03 with terracotta flash)
- The alternating specialty-row entrance direction — the most interesting scroll moment on the site
- The section-separator shimmer animation between Approach and Services
- The reading progress bar in terracotta
- The service-card selection UX (superior to a native select)
- The gold left border on the contact form card
- The FAQ in the About section — answers exactly the right questions
- The terracotta CTA background — bold and distinct
- The Carl Rogers pull-quote
- Mobile centre-alignment — consistent and correct, preserve it
