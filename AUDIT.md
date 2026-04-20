# Nigel's Audit — Amy Fantalis & Associates
**Date:** 2026-04-18 (cycle 6)
**Auditor:** Nigel (strict British auditor)
**Previous Score:** 7.8 / 10
**Current Score:** 7.8 / 10
**Delta:** 0.0 (flat — no visible user-facing changes this cycle)
**Live URL:** https://zed0minat0r.github.io/therapist-site/

---

## OVERALL SCORE: 7.8 / 10

This cycle produced three commits: a mobile hero phone link spacing fix (8px margin-top), a Scout research report, and a Razor pass removing 10 lines of dead CSS. None of these are visible to a prospective therapy client landing on the site for the first time. The score does not move. That is the correct and honest answer.

I want to correct the record on two points the previous audit listed as open priorities. Both have in fact already been resolved in the codebase:

1. The hero CTA now reads "Book a Free Consultation" — consistent with the mid-page CTA and the form submit button. This gap was closed before or during the last cycle, not this one, but it was incorrectly listed as remaining. It is confirmed closed.
2. "enquire" has been corrected to "inquire" in the Group Therapy description. Also already done.

That removes two of the three previous top priorities from the list. The remaining structural gap — absence of real photography in the About section — is unchanged and remains the single largest obstacle to 8.0.

---

## SECTION-BY-SECTION BREAKDOWN

### 1. Hero — 8.0 / 10
Strong. No changes this cycle. The "Currently accepting new clients" pulsing dot badge, the "Book a Free Consultation" primary CTA, the phone icon on the tap-to-call link, the botanical parallax, and the stats bar are all correct and executing well. The 8px margin-top on the phone link (this cycle's visible change) is imperceptible as a user-facing improvement but is technically correct. No regressions.

### 2. Approach — 7.5 / 10
Unchanged. Three-pillar layout, count-up animation, pull quote, terracotta accent on Pillar 03 are all holding. The Carl Rogers quote remains the only mild misalignment with the emotional register of a first-time distressed visitor. It is on-brand for the practice's intellectual positioning and is not worth changing without an editorial replacement that is equally distinctive.

### 3. Services — 7.7 / 10
Unchanged. "inquire" is confirmed correct. Group therapy cadence ("8-10 weeks") is present. Four services at the right level of detail. The editorial list format continues to hold up against card-grid alternatives.

### 4. Specialties — 7.8 / 10
Unchanged. The staggered constellation entrance remains the most visually distinctive scroll moment on the site. The exit CTA below the field is correctly positioned.

### 5. About — 6.5 / 10
Unchanged. Dragging the section score down by a full point this cycle because the gap is now clearly documented by the Scout report and confirmed by competitive research: text-only About sections score 1.0-1.5 points below equivalent sections with a real photograph. The prose is excellent. The FAQ is correct. None of that closes the humanisation gap. A prospective client in distress needs to see a face before they pick up the phone. This is the largest unresolved gap on the site and nothing in this cycle addressed it.

### 6. Testimonials — 7.8 / 10
Unchanged. Four testimonials across family, child, individual, and first-session-experience use cases. "Shared with permission" correctly placed. No regressions.

### 7. CTA Section — 7.8 / 10
Strong. "Book a Free Consultation" is confirmed consistent throughout the page journey: hero button, mid-page CTA section, form submit. The previous cycle's reported gap is confirmed closed.

### 8. Contact Form — 7.8 / 10
Unchanged. Service selection cards, inline validation, privacy note, "We typically respond within 24 hours" reassurance all present. The Scout report flags a HIPAA compliance question about the free-text message field — this is a real consideration but is not visible to users; it belongs on an operational checklist, not an aesthetic audit.

### 9. Mobile UX at 375px — 7.8 / 10
The 8px margin-top on `.hero__phone` at mobile widths (line 1737 of style.css) is correct. It visually separates the call-to-action button from the phone link, clarifying that these are two distinct affordances rather than a grouped element. It is a small fix and does not move the needle at a section level, but it is the correct call and it is executed cleanly.

Centre-alignment is consistent throughout. Tap targets remain at 44px. No regressions.

### 10. Technical and SEO — 7.5 / 10
Schema markup, WebP hero image, fetchpriority, prefers-reduced-motion fallbacks, Intersection Observer cleanup all confirmed present. The dead CSS removed by Razor this cycle keeps the stylesheet clean. No new technical debt.

---

## TOP 3 PRIORITIES

### PRIORITY 1: Real photography in the About section
This is the only remaining gap that would move the score materially. A single photograph — Amy's office interior, a detail of the physical space, a professional portrait — closes the largest humanisation gap on the site. Competitive research confirms text-only About sections consistently score 1.0-1.5 points lower than photographed equivalents. Everything else on this site is well-executed. This one element requires content from Amy that does not yet exist on the site. Until it arrives, 8.0 is not available.

### PRIORITY 2: Telehealth visibility
The About section FAQ confirms telehealth is available ("We offer secure video sessions for clients across Pennsylvania") but it appears only as one FAQ answer buried in the right column of the About section. A client visiting the site from Bala Cynwyd or Wayne who assumes the practice is in-person only will leave without reading that far. A single sentence near the hero or the services list — "In-person in Media, PA or secure telehealth across Pennsylvania" — would expand the geographic coverage signal without adding a new section. The Scout report confirms 88% of therapists offer telehealth; clients now expect it to be surfaced prominently.

### PRIORITY 3: Insurance signal
The current copy states "sliding scale available" in a subordinate clause. It does not answer the primary financial question: is this practice in-network with any insurers? The FAQ in About states out-of-network with reimbursement via superbill. That is the answer — it just needs to be visible before the visitor reaches the About section. A single line in the Services section or under the contact CTA — "Out-of-network provider. Superbill provided. Sliding scale available." — would remove a departure point for clients who currently leave to call their insurer before deciding whether to reach out.

---

## CEILING ASSESSMENT

This site is at or very near its ceiling as a static single-page build without real photography.

**Current ceiling: 8.0-8.2** (unchanged from Scout report assessment)

The site executes at a level clearly above the median suburban Philadelphia therapy practice. The typography, palette, scroll animations, availability signal, and testimonial structure are all correct and differentiating. The remaining score gap to 8.0 is structural, not cosmetic. No further CSS polish, animation work, or copy refinement will close it. The gap is:

1. A real photograph of Amy or the office (cannot be synthesised)
2. Telehealth and insurance signals moved to higher-visibility positions (code-only, immediate)
3. Content depth — FAQ expansion, fees page, or a single blog post — that gives anxious researchers more to consume before committing to contact (requires content from Amy)

Short of those, the site is in a very good place. Further maintenance cycles without visible user-facing changes will correctly hold the score flat.

---

## CONFIRMED INTACT — DO NOT CHANGE
- "Book a Free Consultation" CTA consistent throughout
- "inquire" (American English) in Group Therapy — confirmed correct
- Green dot pulse animation on availability badge
- Botanical SVG parallax sway
- Pillar number count-up animation
- Staggered specialty constellation entrance
- Section-separator shimmer animation
- Reading progress bar in terracotta
- Service-card selection UX in contact form
- Four-testimonial layout with initials-and-town attribution
- Mobile centre-alignment — consistent throughout
- 44px tap targets throughout
