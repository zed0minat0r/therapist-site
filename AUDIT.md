# Nigel's Audit — Laura Spaulding Therapist Site
**Date:** 2026-04-26 (Cycle 2 re-score)
**Auditor:** Nigel (strict British auditor)
**Previous Score:** 8.6 / 10 (cycle 1, 2026-04-26, post-surgery — conversion friction axis)
**Current Score:** 8.7 / 10
**Delta:** +0.1
**Critique Axis:** Conversion Friction (re-score after cycle 2 engineering)
**Live URL:** https://zed0minat0r.github.io/therapist-site/

---

## CYCLE 2 DELTA RATIONALE — WHY +0.1

Cycle 2 landed three bodies of work: performance, accessibility, and CSS cleanup. Scored from a real prospective therapy client's perspective, the question is: did any of this change what a cellular user experiences in 90 seconds?

**What moved (+0.1):**
- Mobile LCP was 5.4s. That is past the bounce threshold for a significant share of cellular users — the hero image had not finished loading before a meaningful fraction of anxious first-contact visitors quit. The font-loading fix (preconnect + preload + onload swap), hero image srcset (800w/1200w/1600w, was 1600px-only), and main.js defer combine to produce an estimated LCP improvement of 800ms–1700ms on mobile. Even the conservative end brings LCP below 4.5s, which is the threshold where cellular users begin forming an impression rather than bouncing blind. That is a genuine conversion-friction improvement — the earliest possible exit point (blank page) is materially reduced.
- Accessibility fixes for keyboard and screen-reader users are real inclusion work. They do not affect the sighted 90-second scan that anchors this rubric, but they represent genuine usability improvement for a subset of prospective clients who are not served by a visually-scored audit.

**What did not move:**
- Testimonials: still zero. The single largest missing conversion signal remains absent (user-blocked; no fabrication).
- Psychology Today link: still `#TODO-PSYCH-TODAY` in production (user-blocked; no real URL supplied).
- Hero copy mismatch: "families and couples" in hero subhead and form service cards but no couples or family therapy in the Services section — still present, still a client-visible friction point (engineering task, not user-blocked).
- Photography: no real photo of Laura. Stock/placeholder image remains.

**Score ceiling logic:** Without real testimonial and real Psych Today URL, this site cannot exceed 9.0. At 8.7 there is room for the two user-dependent items to lift it further when they arrive.

---

## OVERALL SCORE: 8.7 / 10

Scored from the perspective of a prospective therapy client — adult seeking help for themselves or a teenager, suburban Pennsylvania, reading on a phone at evening, deciding whether to fill out the form.

The site is honest, well-designed, technically sound, and now loads its hero meaningfully faster on cellular. The broken Psychology Today link and the families/couples mismatch remain the two things that would give a careful client pause at the exact moment they are deciding to contact.

---

## SECTION-BY-SECTION BREAKDOWN

### 1. Hero — 8.8 / 10

Word-by-word entrance, parallax forest image, botanical SVG sway, pulsing green "accepting" dot, and tappable phone number all intact. Stats bar: 17+ years / 13–adult / Mon–Fri 7am–8pm — all accurate. Scroll cue working.

Hero image now served with srcset (800w/1200w/1600w) — a mobile user no longer downloads a 1600px image. Font loading non-blocking. These are invisible improvements that reduce blank-screen time.

Outstanding issue: hero subhead reads "Collaborative psychotherapy for individuals, families, and couples." Family therapy and couples therapy are not listed services. A client screening for couples therapy will find it in the hero, find it in the contact form service cards, and find nothing in the Services section. Either the services need adding, or the hero copy and form cards need scoping to what is actually offered.

### 2. Approach — 9.0 / 10

Pillars accurate, well-paced, evidence-based copy. "My Philosophy" eyebrow correct. Three pillar accents working at mobile breakpoint. Original Rogers quote in correct typographic styling. No ghost numbers (standing preference, correctly absent). Strong section, no changes cycle 2.

### 3. Services — 8.6 / 10

Individual and Group correct and honest. "Coming 2027" supervision framing with terracotta headline treatment is distinctive. Fee note specific: $150 / sliding scale / 50 minutes / virtual + in-person / groups vary.

Minor: "Start here →" on every service row is functional but generic — low-priority future pass.

### 4. Specialties — 9.0 / 10

Breathing animation on the specialty terms field remains the most visually distinctive moment on the site. "School Anxiety" and "Academic Struggles" align correctly with 13+ age range and PA PreK-12 background. "Emerging Adults" is a useful differentiator. No changes cycle 2, no issues.

### 5. About and FAQ — 9.0 / 10

Bio expansion with school settings/outpatient paragraph is genuine and adds depth. PA PreK-12 credential line at foot of bio is a credible differentiator — now extracted from inline styles into proper `.about__bio-subcred` class (Razor cycle 2). FAQ answers accurate and warm. Simple Practice superbill language specific and genuinely useful. First session answer ("two people getting to know each other") remains the best piece of copy on the site.

Accessibility: FAQ accordion now uses `dt > button` with `aria-controls` rather than invalid `dt[role="button"]` — correct markup, functionally equivalent for sighted users.

### 6. Testimonials — 0 / 10 (section removed)

Correct and honest. The site continues to have zero social proof. The Rogers quote bridge that follows operates on a different register — philosophical resonance, not trust validation. When Laura has genuine testimonials she is willing to publish, adding them as a minimal, non-animated strip (name, one sentence, city) would restore this signal.

### 7. Rogers Quote Bridge — 8.5 / 10

"The good life is a process, not a state of being. It is a direction, not a destination." Well-chosen for the structural position. Forest-background treatment with terracotta cite text is visually clean. Mobile alignment passing. It is a brand signal, not a trust signal.

### 8. CTA Section — 8.9 / 10

"I make it easy. Reach out today and I'll find the right fit for you." — correct first-person voice. Two-column editorial layout on dark forest background. Breathe-animation CTA button preserved. "Most clients hear back within 24 hours" is a useful commitment. Phone fallback present and correct.

`cta-breathe-white` now included in prefers-reduced-motion block (cycle 2 accessibility fix — correct).

### 9. Contact — 7.8 / 10

Form design remains strong: floating cream card, service selection chips, private note, success state.

Outstanding: `href="#TODO-PSYCH-TODAY"` is live in production. A client who clicks "View on Psychology Today" lands on the same page. This is a trust-eroding fault on the contact page where trust is most fragile. Until the real URL is supplied, the entire Psychology Today detail row should be hidden rather than linked to nothing. This is an engineering task with a one-line CSS fix; it does not require waiting on the user.

Score: unchanged from cycle 1. The broken link remains.

### 10. Mobile / Responsive — 9.0 / 10

Bump from 8.9: hero srcset and font-loading improvements reduce blank-screen time on cellular. Pixel's post-surgery alignment audit passed. Tap targets 44px minimum. Skip-to-main link added for keyboard users (visually hidden). No console errors.

### 11. Code Quality — 9.0 / 10

Bump from 8.5: Razor cycle 2 removed 4 orphaned CSS selectors (.gb-testimonials-cta, .contact__parking, .contact__map, .contact__map iframe). The inline `style="font-size:0.875em; opacity:0.8"` on the bio credential line is now a proper `.about__bio-subcred` class. Accessibility markup valid. Non-blocking font loading correctly implemented. `defer` on main.js. srcset on hero and service/about images. Favicon SVG data URI eliminates the 404.

One remaining item: `#TODO-PSYCH-TODAY` in production HTML is a developer comment artifact in a live href — this is still present and should be removed by replacing the row with a hidden state.

---

## TOP 3 CYCLE 3 PRIORITIES

### Priority 1 — Real testimonial (user-dependent)

When Laura supplies even one genuine testimonial with explicit client permission, adding it as a minimal static block — name, one sentence, city, no animation, no fabrication — restores the single most valuable missing conversion signal. This is the highest-leverage item on the site and it cannot be fabricated. The cycle 3 engineering team should have the HTML/CSS slot ready to receive it; the content awaits the customer.

### Priority 2 — Real Psychology Today URL (user-dependent)

The `href="#TODO-PSYCH-TODAY"` in the contact section should be remedied immediately: either hide the row entirely via `display:none` on the containing detail item until the URL arrives, or replace the broken anchor with plain text. A client who clicks a link on the contact page and goes nowhere has just lost trust at the worst possible moment. The hide-until-real approach requires one line of CSS and no customer input.

### Priority 3 — Hero copy and form card mismatch (engineering task, not user-blocked)

The hero subhead reads "individuals, families, and couples." The contact form has "Family" and "Couples" service cards. The Services section lists only Individual Therapy and Group Therapy. No client-visible content confirms that family or couples therapy is offered. If Laura does not offer these services, remove "families and couples" from the hero subhead and remove the "Family" and "Couples" chips from the contact form service selection. This is an engineering task — no customer decision required.

---

## WHAT THE CYCLE 2 ENGINEERING WORK DID RIGHT

- Non-blocking Google Fonts: preconnect + preload + onload swap — estimated 800–1700ms LCP improvement on cellular
- Hero image srcset (800w/1200w/1600w): mobile users no longer download a 1600px image
- Service and about images srcset (500w/900w) with quality 85→75/80: meaningful reduction on slow connections
- Favicon SVG data URI: eliminates 404 that was penalising Best Practices score
- `defer` on main.js: correct — blocks nothing
- FAQ `dt > button` with `aria-controls`: valid ARIA markup replacing invalid `dt[role="button"]`
- `<main id="main-content">` landmark + skip link: basic keyboard accessibility restored
- `role="alert"` on form-error spans: screen reader announcement on validation failure
- `.about__bio-subcred` class: inline styles properly externalised
- Orphaned CSS removed: stylesheet cleaner

---

*Audit by Nigel — strict scoring from a real user's perspective. Conversion friction axis. Cycle 2.*
