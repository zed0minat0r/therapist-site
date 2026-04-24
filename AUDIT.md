# Nigel's Audit — Laura Spaulding Psychotherapy
**Date:** 2026-04-18
**Auditor:** Nigel (strict British auditor)
**Previous Score:** 7.8 / 10 (pre-overhaul baseline)
**Current Score:** 8.3 / 10
**Delta:** +0.5 (earned through genuine structural improvements)
**Live URL:** https://zed0minat0r.github.io/therapist-site/

---

## OVERALL SCORE: 8.3 / 10

This is the first audit conducted against the fully rebuilt version of the site. The overhaul is real and consequential. I am scoring what a prospective therapy client in suburban Philadelphia — searching on a Tuesday evening, stressed, not particularly design-literate — would experience landing on this page for the first time. I am not scoring ambition or effort.

The score moves from 7.8 to 8.3. That is a meaningful lift and it is earned. The site has crossed the threshold from "looks like a quality local practice website" into "I would choose this over most competitors." That is 8.0+ territory on this scale. The remaining gap to 8.5+ is structural, not cosmetic.

---

## SECTION-BY-SECTION BREAKDOWN

### 1. Hero — 8.5 / 10

Excellent. The word-by-word staggered entrance is exactly the right level of animation for this context — it draws attention without being ostentatious. The forest parallax photograph establishes emotional register immediately. The "Currently accepting new clients" pulsing green dot is the single best trust signal on the site; a first-time visitor clocks that in the first two seconds and exhales. Stats bar (17+ years, ages 7-adult, Mon-Fri hours) provides the key qualifying information without requiring any scroll. Phone number is tappable and prominently positioned alongside the primary CTA.

Minor deduction: The botanical SVG illustration is elegant but faint enough at 9% opacity that many users will not consciously register it. It adds texture without distraction, which is correct, but it is doing less work than intended. Not a problem. The "Media, PA — since 2007" location line is exactly right.

### 2. Approach — 7.8 / 10

The three-pillar structure reads clearly. The ghost numbers at 4% opacity are a strong editorial choice — they add architectural depth without competing with the text. "Therapy should feel like a conversation, not a diagnosis" is the best headline copy on the site. The Carl Rogers quote at the end is intellectually appropriate for the practice's positioning, though it may not land with a stressed parent searching for a child's therapist who has never heard of Carl Rogers. It is a defensible choice.

The sage/forest-pale background distinguishes this section cleanly from the parchment hero. No readability concerns. The three pillars (client-paced, evidence-based, collaborative) are the correct three things to say at this stage of a first visit.

### 3. Services — 8.2 / 10

The alternating split-screen rows are a significant improvement over any card-grid alternative. Each service gets real photographic weight and enough copy to communicate distinctiveness. The age tags (Ages 7+, All ages, Adults, Ages 14+) are exactly the right signal for a practice that spans children through adults — they help a prospective client self-select quickly. The "Start here" CTA on each row maintains motion toward the form without feeling pushy.

The fee note at the bottom — out-of-network, superbill provided, sliding scale, in-person plus telehealth — puts the two most common departure reasons (cost and logistics) in front of the client at the moment of highest interest. This is strategically correct placement. Previous audits flagged this as a gap; it is now resolved.

Deduction: The Unsplash images are generic. The individual therapy photo (blurred office) is acceptable. The couple therapy image (man's portrait) risks reading as off-brand for a practice that emphasises collaborative, person-centred care. Real photography would move this section from 8.2 to 8.8.

### 4. Specialties — 8.4 / 10

The type constellation on dark ink background is the most distinctive scroll moment on the site. The staggered entrance animation (items sliding in from alternating sides) is executed at exactly the right speed and creates genuine delight on scroll — not performance, actual delight. The size hierarchy (lg/md/sm) communicates implied importance without a list or grid.

The word groupings are clinically credible and comprehensive without being overwhelming. "School Anxiety" is correctly present; it is the presenting concern for a significant portion of the local client base. "Emerging Adults" is a smart addition — it signals to 18-22-year-olds and their parents that the practice can hold that transitional age.

The "Don't see your concern listed? Reach out" exit note is the right move — it removes the implicit exclusion that any finite list creates.

Minimal deductions: "Neurodiversity" as a specialty term is contemporary and correct but not universally understood. Some parents searching for ADHD support may not connect the term. No structural fix needed — ADHD appears in the same row which resolves it.

### 5. About — 7.2 / 10

The split photo/bio with sticky positioning is a structural improvement. The photo used (Unsplash interior, warm light) communicates office environment but does not humanise the therapist. A client in distress making a decision about who to trust with their child's mental health needs to see a face. The absence of a real portrait photograph remains the largest single gap on this site. The prose is strong and authentic — "I keep my practice small by design because caseload size affects care quality" is a genuine differentiator that competitors cannot credibly copy.

The FAQ accordion in the dark forest band is well-executed. The three questions (insurance, telehealth, session length) are precisely the three questions a first-time visitor has. All three answers are direct and honest. The accordion interaction works correctly.

Deduction of 1.3 points from what this section could be: the stock interior photograph is doing partial work but not full work. A client who has been burned by impersonal, transactional therapy before is looking for evidence of a specific human being, not a nicely lit room.

### 6. Testimonials — 8.0 / 10

Four testimonials, each covering a distinct use case: family therapy outcome, child therapy outcome, individual listener quality, first-session experience. The geographic attributions (Swarthmore, Media, Wayne, Bryn Mawr) are smart local signals — a prospective client from Havertown sees people from their county, not clients from an anonymous metropolitan area. The stacked-quote format reads better than a marquee for this emotional register. The "Shared with permission" note is correctly placed.

No regressions. No improvements needed here.

### 7. CTA Section — 8.0 / 10

"Taking the first step is the hardest part" is direct, empathetic, and accurate. The "begin" watermark in the background is a subtle, effective detail. The split layout (large type left, action copy and button right) gives the section visual weight proportional to its importance. The white button on dark forest background with 3.5s breathe animation is the correct choice here — visible without being aggressive. "Most clients hear back within 24 hours" manages the anxiety of the waiting period correctly.

The secondary phone option below the primary CTA is correctly scaled and appropriately subdued.

### 8. Contact Form — 8.1 / 10

The floating cream card on dark ink background with gold top border is the best contact section I have seen on a solo-practice therapy site at this price point. The service-selection cards (Individual, Family, Couples, Group, Not sure yet) reduce form friction while giving the therapist useful intake signal. The inline validation is present and non-intrusive. "This message is private and goes directly to Laura" and "Your information is kept strictly confidential" are placed correctly for a client who is anxious about privacy.

Deduction: The form action routes through Formspree with a redirect to ?submitted=1 for success state. This is functional but not ideal — the redirect creates a page load event that could lose mobile users on slow connections. The success state display logic is present in JavaScript. Not a showstopper; it is a known trade-off with static site hosting.

The email address visible in the HTML (afantalis@gmail.com) will be harvested by spambots. This is a practical operational concern, not a UX concern.

### 9. Mobile UX at 375px — 8.0 / 10

The comprehensive mobile centering pass is evident and correct throughout. Hero content centres cleanly. Service rows stack with photo above body. Specialties header collapses to single column. About photo column is correctly hidden on mobile (the stock interior adds nothing to a small screen — the bio reads better without it). Contact form card padding reduces appropriately. All tap targets are confirmed at 44px minimum.

The 480px breakpoint handles the hero headline resize and stacked CTA buttons cleanly. The stat dividers hide below 480px to prevent cramped wrapping. This is all correct.

### 10. Technical and SEO — 7.8 / 10

Schema markup (MedicalBusiness type) is present and correctly structured. Meta description includes location and phone. WebP images with explicit dimensions prevent layout shift. `fetchpriority="high"` on the hero image is correct. Prefers-reduced-motion fallbacks across all animations are correctly implemented. Intersection Observer cleanup (observer.unobserve after trigger) is present throughout.

Reading progress bar in terracotta is a nice navigational affordance for a long-scroll single-page site. The botanical SVG sway animation is CSS-only.

No console errors expected. Formspree integration is standard.

---

## TOP 3 PRIORITIES

### PRIORITY 1 — Real portrait photograph of Laura Spaulding
This is the single highest-leverage content addition available. The site's prose, structure, and visual language are all working. The only gap that would move a prospective client from "this looks credible" to "I am going to reach out" is seeing the face of the person they are about to trust with their most private concerns. A single professional headshot placed in the About section — replacing the stock interior — would move the site from 8.3 to approximately 8.7-8.9. This requires content from Laura, not from the development team. No code change is needed; the image slot is already there and correctly styled.

### PRIORITY 2 — Fees transparency before the scroll
The fee structure is correctly stated in the services fee note and the About FAQ. But "out-of-network provider — superbill provided for reimbursement" is the kind of sentence that requires a client to already know what a superbill is. A brief parenthetical — "(your insurer reimburses you directly)" — reduces the cognitive barrier for clients unfamiliar with out-of-network billing. This is a two-word copy edit that removes a departure point for cost-anxious clients. Currently the fee note reads as jargon-forward rather than client-forward.

### PRIORITY 3 — A fourth FAQ question addressing the first session
The three existing FAQ questions (insurance, telehealth, session length) are all logistical. None of them address the emotional barrier: what actually happens in the first session? A client who has never been to therapy before, or who had a bad experience elsewhere, does not know what to expect. A brief answer to "What does the first session look like?" — something on the order of "We spend the first session getting to know each other. There is no intake form to fill out in the waiting room, no clinical assessment to complete before we talk. You tell me what brought you here and we figure out together whether this feels like the right fit." — removes the single largest emotional deterrent to initial contact. This is copy-only; no structural change required.

---

## CEILING ASSESSMENT

**Current ceiling: 8.6-8.8** with real photography and the minor copy edits above.

The site has earned its score. It is executing at a level clearly above the suburban Philadelphia therapy practice median. The typography is editorial without being cold. The colour palette (forest, parchment, terra, gold) is cohesive and distinctive. The scroll experience — from word-by-word hero entrance through specialty constellation to floating contact card — creates forward motion without gimmickry. The practice information (location, phone, hours, ages served, modalities, insurance position) is all present and correctly placed.

The gap to 8.6+ is structural and content-dependent. No further CSS work, animation refinement, or section reordering will move the needle. The site needs a real face and two honest paragraphs of first-session copy.

---

## CONFIRMED INTACT — DO NOT CHANGE
- "Currently accepting new clients" green dot pulse animation
- Word-by-word hero headline entrance animation
- Hero stats bar (years, ages, hours)
- Forest parallax on hero background image
- Three-pillar approach section with ghost numbers
- Service row alternating layout with hover image scale
- Specialty word constellation with staggered entrance and hover glow
- FAQ accordion in dark forest band
- "Shared with permission" testimonial attribution
- "Begin" watermark in CTA section
- Gold border top on contact form card
- Reading progress bar in terracotta
- Service selection cards in contact form
- Inline form validation
- prefers-reduced-motion fallbacks across all animations
- 44px tap targets throughout
- Mobile centering — confirmed consistent throughout
