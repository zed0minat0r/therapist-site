# Nigel's Audit — Laura Spaulding Therapist Site
**Date:** 2026-04-26
**Auditor:** Nigel (strict British auditor)
**Previous Score:** 8.9 / 10 (2026-04-18, pre-surgery — built on incorrect credential, phone, location, ages, pricing, fabricated testimonials)
**Current Score:** 8.6 / 10
**Delta:** -0.3
**Critique Axis:** Conversion Friction
**Live URL:** https://zed0minat0r.github.io/therapist-site/

---

## SCORING RATIONALE — WHY THE DELTA IS -0.3

The previous 8.9 was scored on a site that was factually wrong in five material ways. Correcting those errors raises the floor substantially — a site built on true facts has higher intrinsic trust than one built on plausible fiction. That foundation lift is real and is credited here.

However, three friction points that affect a real client's experience either emerged or remained through surgery, and conversion friction is the audit axis this cycle. The score lands at 8.6, not 8.9, for the following reasons:

**Deductions:**
- Testimonials section removed: correct and honest. But the site now has zero social proof of any kind. A prospective client who has never met Laura reads only self-description — copy written by or for the therapist. The Rogers quote bridge is philosophically resonant but it is not social proof. That is a genuine conversion signal drop. (-0.15)
- Broken production link: `#TODO-PSYCH-TODAY` is the live href on the Psychology Today contact detail. Any client who clicks it lands nowhere. A broken link on a contact page is a trust-eroding fault. (-0.10)
- Hero/services content mismatch: The hero subhead reads "Collaborative psychotherapy for individuals, families, and couples" and the contact form has "Family" and "Couples" service cards — but the Services section lists only Individual Therapy and Group Therapy. Family and couples therapy are not offered or described anywhere. A client selecting "Couples" in the contact form and then scanning the site for confirmation of that service will find nothing. This is a real friction point, not a design point. (-0.05)

**Credits:**
- Every vital fact is now true: LPC credential, real phone 484-441-3108, no fabricated location, correct ages 13+, honest pricing at $150/sliding scale, accurate session length, correct supervision timeline. This is the most important thing a therapist site can be. (+full credit)
- Simple Practice superbill language in FAQ is specific and useful — a client who cares about out-of-network reimbursement gets a real answer. (+)
- PA PreK-12 School Counselor credential adds differentiation — no competing therapist site leads with this. It is especially relevant for the 13+ age group. (+)
- Carl Rogers second quote bridge is well-executed as a philosophical transition. Does not replace social proof but it does extend the practice's intellectual identity in a distinctive way. (+)
- The site reads confidently without fake testimonials. Fabrication would have been worse. (+)

---

## OVERALL SCORE: 8.6 / 10

Scored from the perspective of a prospective therapy client — adult seeking help for themselves or a teenager, suburban Pennsylvania, reading on a phone at evening, deciding whether to fill out the form.

The site is now honest, which is the precondition for everything else. The design quality from prior cycles is intact. The scroll experience, editorial typography, animated specialties field, and gradient chain are all preserved. The broken Psychology Today link and the families/couples mismatch are the two things that would give a careful client pause at the exact moment they are deciding to contact.

---

## SECTION-BY-SECTION BREAKDOWN

### 1. Hero — 8.8 / 10

Word-by-word entrance, parallax forest image, botanical SVG sway, pulsing green "accepting" dot, and tappable phone number all intact. Stats bar: 17+ years / 13–adult / Mon–Fri 7am–8pm — all accurate. Scroll cue working.

One issue: the hero subhead reads "Collaborative psychotherapy for individuals, families, and couples." Family therapy and couples therapy are not listed services. This copy predates the surgery and was not caught. A client screening for couples therapy will find it in the hero, find it in the contact form service cards, and find nothing in the Services section. That is a gap at the first impression. Either the services should be added, or the hero copy should be scoped to what is actually offered.

### 2. Approach — 9.0 / 10

Pillars are accurate, well-paced, and evidence-based in copy. "My Philosophy" eyebrow correct. Three pillar accents working at mobile breakpoint. Original Rogers quote ("The curious paradox...") in correct typographic styling. No ghost numbers (per standing preference, correctly absent). Strong section.

### 3. Services — 8.6 / 10

Individual and Group correct and honest. "Coming 2027" supervision framing with terracotta headline treatment is distinctive. Fee note is specific: $150 / sliding scale / 50 minutes / virtual + in-person / groups vary. That is exactly the information an anxious first-contact client needs.

Minor: "Start here →" as the CTA on every service row is functional but generic. Still noted from prior audit — not escalated to a priority but worth a future pass.

### 4. Specialties — 9.0 / 10

Breathing animation on the field of specialty terms is the most visually distinctive moment on the site. "School Anxiety" and "Academic Struggles" specialties align correctly with the 13+ age range and PA PreK-12 background. "Emerging Adults" is a useful differentiator. No changes here; no issues.

### 5. About and FAQ — 9.0 / 10

Bio expansion with school settings/outpatient counseling paragraph is genuine and adds depth. PA PreK-12 credential line at foot of bio is a credible differentiator. The inline style on that line (`font-size:0.875em; opacity:0.8`) remains — Pixel flagged this as a candidate for `.about__bio-subcred` class. Not user-facing but it is a code quality note.

FAQ answers are accurate and warm. Simple Practice superbill language in the insurance answer is specific enough to be genuinely useful. First session answer ("two people getting to know each other") remains the best piece of copy on the site.

### 6. Testimonials — 0 / 10 (section removed)

Correct and honest. The section is gone. The site loses all social proof, which is a real conversion signal. The Rogers quote bridge that follows in its structural position is philosophically resonant but operates on a different register — it does not answer the question "did this therapy help someone else in my situation?" That question is now unanswered anywhere on the site.

When Laura has even one or two genuine testimonials she is willing to publish, adding them back as a minimal, non-animated strip (name, one sentence, city) would restore this signal. No fabrication; no disclaimer-heavy copy. Real words from real clients.

### 7. Rogers Quote Bridge — 8.5 / 10

"The good life is a process, not a state of being. It is a direction, not a destination." is a well-chosen Rogers quote for the position — it bridges from the clinical FAQ band into the CTA. The forest-background treatment with terracotta cite text is visually clean. Mobile alignment audit passed.

What it does not do: replace the emotional resonance of hearing from another client. It is a brand signal, not a trust signal. Scored as such.

### 8. CTA Section — 8.9 / 10

"I make it easy. Reach out today and I'll find the right fit for you." — correct first-person voice. Two-column editorial layout on dark forest background. Breathe-animation CTA button preserved. "Most clients hear back within 24 hours" is a useful commitment. Phone fallback present and correct.

### 9. Contact — 7.8 / 10

The form is the best-designed element on the site. The floating cream card, service selection chips, private note, and success state are all correct.

However: the Psychology Today detail row has `href="#TODO-PSYCH-TODAY"`. This is a broken link in production. Any client who clicks "View on Psychology Today" lands on the same page — the anchor does not exist. This is a trust-eroding fault on a contact page where trust is most fragile. Fix: either replace with the real URL when received, or hide the entire detail row until the URL is available. Leaving a broken link in the contact section is not acceptable for a live site.

No Gmail address exposed in HTML (confirmed: email removed by surgery or not present). Phone appears correctly in three locations: hero, CTA, footer.

### 10. Mobile / Responsive — 8.9 / 10

Pixel's post-surgery audit confirmed all sections at 375px and 414px. Tap targets 44px minimum. Gradient chain updated correctly. Quote-bridge CSS class extracted from inline styles with correct `var(--forest)` variable reference. No console errors.

Orphaned CSS: `.gb-testimonials-cta` and `.trust-strip` selectors remain in style.css from the removed testimonials section. Harmless but adds noise to the stylesheet.

### 11. Code Quality — 8.5 / 10

Clean vanilla JS, no dependencies. Null-guard early returns on all init functions (confirmed by Pixel). Passive scroll listeners. IntersectionObserver with unobserve-after-trigger. Schema.org MedicalBusiness present with correct phone, no address (correct given location removal).

Three items:
- `#TODO-PSYCH-TODAY` in production HTML — developer comment artifact that should not be live
- `.gb-testimonials-cta` orphaned CSS class (no matching HTML)
- `about__bio-subcred` credential line using inline styles (Pixel note, candidate for proper class)

---

## TOP 3 CYCLE 2 PRIORITIES

### Priority 1 — Fix the broken Psychology Today link

The `href="#TODO-PSYCH-TODAY"` anchor is live in production. Until the real URL arrives from the customer, the entire Psychology Today detail row should be hidden (`display:none` on `.contact__detail-item` containing it, or a `data-pending` conditional). A broken link on the contact page is the worst place to lose client trust — they are moments from filling out the form. One line of CSS or one attribute change fixes this immediately without waiting for the customer to supply the URL.

### Priority 2 — Resolve the families/couples copy mismatch

The hero subhead and contact form service cards reference family and couples therapy. The Services section does not. If Laura offers family and couples sessions, add a service row. If she does not, remove "families and couples" from the hero sub and remove "Family" and "Couples" from the service selection cards in the form. The current state presents services that cannot be confirmed anywhere on the site. This is a conversion friction problem: a client selecting "Couples" and finding no couples therapy described will wonder if they misread the site.

### Priority 3 — Add real social proof when available

The site currently has zero third-party validation. The Rogers quote and Laura's bio are both self-referential. When Laura is ready to provide even one genuine testimonial — with explicit permission — adding it as a minimal static block (no animation, no carousel, no fabrication) would restore the conversion signal the surgery correctly removed. This is a content dependency, not a code task. Flag it to the customer as the single highest-value next step.

---

## WHAT THE SURGERY DID RIGHT

- Correct credential (LPC) throughout — the most important accuracy fix
- Real phone number in every location — zero wrong instances remain
- Location removed cleanly — no hollow gaps, no placeholder text, contact section reads as virtual-first with in-person available
- Pricing honest and specific — $150, sliding scale, 50 minutes, Simple Practice superbill
- Ages corrected — 13+ rather than 7+ is truthful and scopes the practice correctly
- Testimonials removed rather than fabricated — this is the correct call and reflects well on the practice's integrity
- Bio expanded with real background — school settings, outpatient, PA PreK-12 credential
- Supervision timeline honest — "Coming 2027" rather than presented as current
- Groups described honestly — "times vary, ask" rather than invented schedule

---

*Audit by Nigel — strict scoring from a real user's perspective. Conversion friction axis.*
