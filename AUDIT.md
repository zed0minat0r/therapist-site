# Nigel's Audit — Laura Spaulding Psychotherapy
**Date:** 2026-04-18
**Auditor:** Nigel (strict British auditor)
**Previous Score:** 8.3 / 10
**Current Score:** 8.5 / 10
**Delta:** +0.2
**Live URL:** https://zed0minat0r.github.io/therapist-site/

---

## OVERALL SCORE: 8.5 / 10

Scored from the perspective of a prospective therapy client in suburban Philadelphia — searching on a weekday evening, possibly stressed, not design-literate, making a decision about whom to trust with something private. I am not scoring craft for its own sake.

The score moves from 8.3 to 8.5. A modest but honest lift. Every item from the previous Priority list that could be addressed in code has been addressed. The three priorities from the last audit were: real portrait photograph, superbill jargon clarification, and a first-session FAQ. Two of the three were code-addressable and have now been executed. The portrait remains absent — that is the only remaining gap of consequence.

The improvements this round are real and cumulative. None are theatrical. Colored border accents on approach pillars, the testimonial carousel conversion, the superbill parenthetical, the first-session FAQ — individually each is a minor point of polish; collectively they tighten a site that was already performing well. That is the right kind of work at this stage.

This site is now comfortably in "I would choose this over most other therapy practice websites in this region" territory. The remaining gap to 8.7+ is content-dependent, not code-dependent.

---

## SECTION-BY-SECTION BREAKDOWN

### 1. Hero — 8.5 / 10

Unchanged from previous audit and correctly so. The word-by-word staggered entrance, the parallax forest photograph, the pulsing green "Currently accepting new clients" dot, and the stats bar all remain. No regressions. The location anchor ("Media, PA — since 2007") and the tappable phone number alongside the primary CTA are both correctly positioned. The botanical SVG is appropriately subtle.

No change in score from 8.5. This section does not need further work.

### 2. Approach — 8.0 / 10

Up from 7.8. The colored left-border accents on the three pillars (terracotta for pillar 01, gold for 02, forest green for 03) are a meaningful improvement. They give the three-column grid a visual anchor that it previously lacked — on dark parchment-pale background, the pillars were previously distinguished only by their ghost numbers and content. The border accent communicates hierarchy and individuality without adding visual noise.

The 3px border width is well-chosen — thin enough to read as an accent, substantial enough to be a structural signal on mobile single-column layout. The border-left transitions to a border-top override on mobile, which is correct and consistent with the section's logic.

The ghost background numbers at 4% opacity remain. Correct decision to keep them. The Carl Rogers quote with terracotta left border is unchanged — still appropriate, still slightly inaccessible to the distressed parent who has never read Rogers, but defensible given the practice's intellectual positioning.

### 3. Services — 8.3 / 10

Up from 8.2, marginally. The enlarged service row numbers (now clamp(3.5rem, 6vw, 5.5rem)) have more editorial presence than before. They read as decorative numerals rather than functional labels, which is the correct visual register for this section — the actual service name carries the informational load. The numbers are now large enough to communicate the editorial ambition without competing with the title.

The superbill parenthetical "(your insurer reimburses you directly)" in the fee note at the bottom of the section was Priority 2 from the last audit. It is now executed. This is a single-sentence edit that removes a genuine cognitive barrier for cost-anxious clients who do not know what a superbill is. The sentence now reads clearly without requiring prior knowledge of insurance terminology. This is the correct way to address jargon in a client-facing context — explain inline, do not link out.

The Unsplash images remain generic. The couples therapy image (close portrait of a man) still risks reading as off-brand for this practice's positioning. Real photography would move this section another 0.4 points. Not a code problem.

### 4. Specialties — 8.4 / 10

Unchanged and correctly so. The type constellation with staggered entrance is still the most visually distinctive scroll moment on the site. No regressions. The exit-note copy ("Don't see your concern listed? Reach out") remains in place. No change in score from 8.4.

### 5. About — 7.4 / 10

Up from 7.2, marginally. The First-session FAQ question is now present and it is the best-written answer on the entire page: "The first session is really just a conversation. We'll talk about what brought you here, what you're hoping for, and whether we feel like a good fit. There's no pressure, no diagnostic checklist — just two people getting to know each other. Most clients tell me they felt relieved it was easier than they expected."

This was Priority 3 from the last audit. It is now done, and done well. The answer is direct, warm, and specific. It names the emotional concern (pressure, diagnostic checklist) explicitly and then dismisses it. The closing social proof sentence ("Most clients tell me they felt relieved") is exactly the right note — it normalises the anxiety about the first session without being saccharine.

The section now has four FAQ answers, all strong. The accordion UX remains correct.

The score remains below 8.0 because the stock interior photograph is still doing partial work only. A stressed parent or individual deciding whether to reach out to a therapist needs to see a face. The bio copy is excellent — "I keep my practice small by design because caseload size affects care quality" is a genuine, defensible differentiator. The copy is carrying weight that a portrait photograph would share. This is the one remaining gap that no amount of code work resolves.

### 6. Testimonials — 8.2 / 10

Up from 8.0. The conversion from auto-scrolling marquee to user-controlled horizontal scroll carousel with snap-to-card is a meaningful improvement, not a cosmetic one. Auto-scroll on testimonials is a pattern that conveys distrust: it suggests the site does not want you to stop and actually read the quotes. Snap-to-card scroll hands control to the user and implicitly communicates confidence in the content.

The edge fades (terracotta-to-transparent gradient on each side) correctly communicate that the track is scrollable without explicit instructional text. The "Swipe to read" hint in the header is present as backup signalling. The grab cursor on desktop is a nice affordance. The 88vw card width on mobile gives appropriate peek of the next card.

The four quotes remain well-differentiated: family outcome, child outcome, individual therapy experience, first-session anxiety. The geographic attributions (Swarthmore, Media, Wayne, Bryn Mawr) are correctly local. The "Former clients, shared with their written permission" note is correctly placed below the track.

The testimonial attribution format (initials + town, e.g., "M.T., Swarthmore PA") was strengthened this round. The previous format was less specific. Initials-plus-location is the correct balance for a therapy practice — it signals real people without violating confidentiality norms.

Minor note: four testimonials is the correct number for a snap carousel. Five would require awkward partial-card reveal on the last snap. No change needed.

### 7. CTA Section — 7.9 / 10

Down from 8.0 — not a regression in the code, but a reassessment. The ghost "begin" watermark that was previously noted as a "subtle, effective detail" has now been removed (noted in the changeset as "looks AI-generated"). The removal is correct — the user's instinct was right. Ghost watermark words as decorative background elements have become a pattern strongly associated with AI-generated design templates. Removing it was the right call. However, the section has marginally less visual depth without it, which is why I am trimming 0.1. The large editorial type and white button on dark forest background remain strong. This is not a concern — the section still converts.

The "Most clients hear back within 24 hours" response-time promise and the secondary phone option below the CTA are both correctly retained.

### 8. Contact Form — 8.1 / 10

Unchanged. The floating cream card on dark ink background with gold top border remains the best contact section execution I have seen on a solo-practice therapy site. Service selection cards, inline validation, privacy note, and success state are all present. Formspree integration functional. Gmail address in HTML source remains a spam-harvesting risk but is not a UX concern.

### 9. Mobile UX at 375px — 8.1 / 10

Up from 8.0. The mobile centering pass remains intact and correct throughout. The approach pillar border accent converts cleanly to border-top on mobile single-column layout. Testimonial carousel is 88vw card width with center snap-align on mobile — this is exactly right for a single-column swipe context. The stat dividers hide at 480px. All 44px tap targets confirmed.

The WCAG contrast fixes across seven dark-section elements are welcome and correct. The previous contrast levels in dark sections were marginal in some cases. No specific elements need calling out — the systematic pass is the right approach.

### 10. Technical and SEO — 8.0 / 10

Up from 7.8. The reduced-motion selectors have been corrected — previously targeting animation names as class selectors (ineffective), now targeting the actual element selectors. This is a genuine accessibility fix, not a cosmetic one. Users who have prefers-reduced-motion set will now correctly see all animations disabled.

Schema markup, meta description, WebP with explicit dimensions, fetchpriority on hero image, preconnect for Google Fonts — all correctly in place. Reading progress bar retained. Intersection Observer cleanup pattern (unobserve after trigger) correct throughout.

Alt text corrections noted. The previous alt text on service row images was generic. The current alt text ("Warm, naturally lit therapy office interior", "Family in a warm setting", "Person in a calm, reflective moment", "Group of young adults in a circle") is still stock-image-describing rather than practice-specific, but it is functionally correct for accessibility purposes.

---

## TOP 3 PRIORITIES

### PRIORITY 1 — Real portrait photograph of Laura Spaulding
This remains the single highest-leverage improvement available to this site. Every other gap is now noise by comparison. The prose, structure, animation, colour palette, and FAQ answers are all working. The only thing a prospective client cannot get from this site is a sense of the specific human being they are about to call. A professional headshot in the About section — replacing the stock interior — would close the remaining gap between this site and an 8.8+ score. This is a content request, not a code request. The image slot, dimensions, and styling are all already present. One JPEG is the only outstanding deliverable.

### PRIORITY 2 — Session fee / pricing visibility
The site correctly discloses out-of-network status, superbill provision, and sliding scale in the services fee note. What is still missing is any indication of the session fee itself. Therapy clients — particularly those exploring out-of-network for the first time — want a ballpark number before they commit to a phone call. "Sessions from $X" or a range ("$150-$190 per session, sliding scale available") prevents the awkwardness of the intake call being derailed by sticker shock. This does not need to be precise; it needs to exist. Placement: services fee note, or as a new line in the FAQ.

### PRIORITY 3 — Map or embedded location signal in the contact section
The contact section lists the address correctly ("205 N. Monroe St., Media, PA 19063") and mentions free street parking. What it does not have is any visual location anchor. For a client considering whether to drive from Havertown or Wayne, a small embedded map (Google Maps iframe, or a static image linking to Google Maps) would remove a friction point. Media, PA is a walkable small borough and the address is genuinely easy to find — but a visual map makes "I can actually get there" concrete rather than abstract. This is a low-complexity addition with real practical value for new clients.

---

## CEILING ASSESSMENT

**Current ceiling: 8.7** with a real portrait photograph.
**Current ceiling without photography: 8.5-8.6** — already achieved.

The site is executing at a level clearly above the regional median for solo-practice therapy websites. The scroll experience is distinctive without being precious. The typography is editorial without being cold. The practice information is complete, honestly presented, and correctly placed relative to the client decision journey.

No further animation, layout, or colour work is necessary. The remaining gap is a photograph.

---

## CONFIRMED INTACT — DO NOT CHANGE
- "Currently accepting new clients" green dot pulse animation
- Word-by-word hero headline entrance animation
- Hero stats bar (17+ years, ages, Mon-Fri hours)
- Forest parallax on hero background image
- Three-pillar approach section with ghost numbers
- Colored left-border accents on approach pillars (terracotta / gold / forest)
- Service row alternating layout with hover image scale
- Enlarged editorial service row numbers
- Specialty word constellation with staggered entrance and hover glow
- FAQ accordion in dark forest band (now four questions)
- First-session FAQ answer — keep verbatim, it is the best copy on the site
- Testimonial horizontal snap carousel with edge fades
- Testimonial geographic attributions (Swarthmore, Media, Wayne, Bryn Mawr)
- "Former clients, shared with their written permission" attribution
- Gold border top on contact form card
- Reading progress bar in terracotta
- Service selection cards in contact form
- Inline form validation
- Superbill parenthetical in fee note
- prefers-reduced-motion fallbacks (now correctly targeting element selectors)
- 44px tap targets throughout
- Mobile centering — confirmed consistent throughout
