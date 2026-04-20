# Nigel's Audit — Amy Fantalis & Associates
**Date:** 2026-04-18
**Auditor:** Nigel (strict British auditor)
**Previous Score:** 6.9 / 10
**Current Score:** 7.4 / 10
**Delta:** +0.5
**Live URL:** https://zed0minat0r.github.io/therapist-site/

---

## OVERALL SCORE: 7.4 / 10

The improvements since the last audit are real, visible, and substantive. The first-person About bio ("I started this practice in 2007 because I believed...") is the single most impactful change — Amy now has a voice on the site, not merely a listing. The FAQ answers the three questions every prospective client has (insurance, telehealth, session length). The tappable service-card buttons replace the iOS-hostile native select. The alternating specialty-row entrance direction is a genuine moment of scroll interest. The pillar number count-up animation adds appropriate delight. Contrast and opacity fixes are real improvements across multiple sections.

The score rises to 7.4 because these are changes a real user would feel. The site is now in "clearly better than most therapists in this area" territory. It does not yet clear 8.0 — which requires "I would actively choose this over a competitor" — because three gaps remain that prospective clients instinctively notice before they pick up the phone.

---

## SECTION-BY-SECTION BREAKDOWN

### 1. Hero — 7.8 / 10
Strong. The forest image with gradient overlay reads as premium without being generic wellness stock. The headline ("You don't have / to figure it / out alone.") is genuinely good copy — emotionally specific, not clinical. The stat bar (17+ years, 7-Adult, Mon-Fri hours) gives immediate credibility anchors. The botanical SVG with parallax sway and the reading progress bar are polish that real users register subconsciously as "this person cares about craft." Phone number in the hero alongside the CTA is the correct call for a healthcare service.

**Gap:** "Media, PA — since 2007" renders at rgba(255,255,255,0.38) — barely 38% opacity. A prospective client searching "therapist Media PA" needs to register that location instantly. This tag should be at minimum 55% opacity or given a faint text-shadow. It is currently functionally invisible on a mid-brightness phone.

### 2. Approach — 7.2 / 10
The three-pillar numbered layout is clean. The count-up animation (00→01/02/03 with terracotta flash) adds a moment of delight without intrusion. The Carl Rogers pull-quote is a good trust signal — it reads as evidence-informed without being stuffy. The eyebrow "Our Philosophy" is appropriate and correctly sized at 13px.

**Gap:** Pillar 03 ("Whole-life connected") is the most genuinely differentiated claim on the entire site — collaboration with schools, psychiatrists, pediatricians is rare among solo practitioners. It receives identical visual weight to the other pillars. This claim deserves a slight emphasis upgrade: a terracotta accent on the h3, or a marginal note, or a bolder pillar number treatment.

### 3. Services — 7.5 / 10
The editorial list (large Cormorant numerals, horizontal rule dividers, gold tag hover) is markedly better than icon-card therapy templates. The hover micro-interaction (number warming to terracotta) is restrained and on-brand. The "Not sure which is right for you?" in-section CTA softens conversion friction correctly. Age tags are useful.

**Gap:** No pricing signal anywhere on this section. A prospective client — particularly one who has never been to therapy — will think "but can I afford this?" at exactly this scroll position. A single line — "Session fees and sliding scale options: ask during your free consultation" — reduces the anxiety that prevents form submission. It does not require quoting a number.

### 4. Specialties — 7.6 / 10
The alternating-direction scroll-in (odd rows from left, even from right) is genuinely interesting and the most distinctive feature of this iteration. The typographic constellation on dark forest is editorial and would stand out in any local therapy directory. Stagger timing at 40ms per item is snappy and correct.

**Gap:** The smallest specialty terms (.spec--sm) render at 32% opacity on forest green. "School Anxiety", "Neurodiversity", "Mood Disorders", "Relationship Issues" are among the most searched terms for a suburban PA therapist — they are essentially invisible in the default state. The hover interaction (full white) is too dependent on users knowing to hover, especially on touch devices. These should be raised to at minimum 45% opacity in their resting state.

### 5. About — 7.8 / 10
This is the most improved section in the audit cycle. The first-person bio is the correct voice for a therapy website — it sounds like a human, not a press release. The FAQ (insurance, telehealth, session length) answers the three questions every new client has, in exactly the right place. The credential tags (CBT, DBT, Trauma-Informed, Family Systems) are tidy and clinically appropriate. The left column and right column now serve genuinely different purposes (practice values vs. therapist profile), which was the explicit gap in the previous audit.

**Gap 1:** Amy holds an MSW from the University of Pennsylvania. This is a meaningful credential for a suburban Philadelphia audience — Penn Social Work carries weight with the educated population in Delaware County. It is currently buried as a sentence in the second paragraph of body text. It should appear as a styled credential line immediately under her name and licensure, where it will actually be read.

**Gap 2:** The location card ("Downtown Media / 205 N. Monroe St.") has no Google Maps link. A prospective client evaluating travel feasibility has to leave the site to check the map. A simple hyperlink on the address — `href="https://maps.google.com/?q=205+N+Monroe+St+Media+PA+19063"` — removes that friction at zero implementation cost.

### 6. Testimonials — 6.6 / 10
The editorial layout (large italic quotes, two-column grid, testimonials stacking correctly at tablet) is well-executed for the design language. The three quotes are specific enough to feel real — the family dining-table outcome and the school-refusing daughter are vivid and credible. Citation stacking fix at tablet is confirmed and correct.

**Gap:** Anonymous source lines ("Family therapy client, Media PA" / "Parent of a teen client") are the weakest form of social proof in any category, but especially in healthcare. They read as template placeholders. What would genuinely move the needle at this stage: first initial plus town ("— M.T., Swarthmore PA"), or a note that reads "All quotes used with written client permission." Either signals authenticity. The current treatment signals the opposite — that real clients did not actually provide quotes.

### 7. CTA Section — 7.0 / 10
The terracotta split-column layout (headline left, body and button right) is confident and warm. The phone number as an alternative CTA ("Or call us now: 610-585-1373") is the correct addition — people in distress prefer calling over form-filling, and this accommodates them. "Most clients hear back within 24 hours" is a smart friction-reducer.

**Gap:** The body copy ("We make it easy. Reach out today...") renders at rgba(255,255,255,0.6) on the terracotta background (#b8654a). By my calculation this falls below WCAG AA (4.5:1) for normal text. This is both an accessibility deficiency and a readability issue at the highest-stakes section of the page. Raising opacity to 0.82 minimum would fix it.

### 8. Contact Form — 7.3 / 10
The tappable service-card buttons are a genuine UX improvement — they feel intentional, the selected state (forest green fill with glow) is unambiguous, and they behave correctly on touch devices. The gold left border gives the form card visual authority. The privacy note ("Your information is kept strictly confidential") is well-placed. Inline validation (blur handlers on name and email with error injection) is functional.

**Gap:** The message textarea is labelled "What brings you here (optional)" but has no reassurance that the contents are confidential at the point of vulnerability. A single line below the textarea — even "This message is private and goes directly to Amy" — would reduce hesitation at the hardest field to complete.

### 9. Mobile UX at 375px — 7.0 / 10
The comprehensive mobile-center-alignment pass has been executed properly. Hero, approach, services, specialties, about, testimonials, CTA, contact, and footer are all correctly centered at ≤600px. The FAQ items deliberately remain left-aligned (`.about__faq { text-align: left }`) — this is the correct decision and should not change. Service cards wrap and justify-content:center correctly on narrow viewports.

**Gap:** The hero stats bar at mobile uses `overflow-x: auto` with `flex-wrap: nowrap`. This implies horizontal scrolling but there is no visual indication — no fade edge, no scroll hint — that additional stats exist offscreen. A prospective mobile user may never see the Mon-Fri / 7am-8pm hours, which are a meaningful differentiator for working parents.

### 10. Technical & SEO — 7.2 / 10
Schema markup (MedicalBusiness JSON-LD) is present and correctly structured with telephone, email, address, hours, and URL. `fetchpriority="high"` and explicit `width`/`height` attributes on the hero image are correct. Intersection Observer used throughout with proper `observer.disconnect()` and `observer.unobserve()` cleanup. `prefers-reduced-motion` is respected across all animations with a blanket override. Font loading via Google Fonts preconnect is correctly ordered.

**Gap:** The hero image URL fetches JPEG from Unsplash by default. Adding `&fm=webp` to the URL (`...?w=1600&q=85&auto=format&fm=webp&fit=crop`) would deliver WebP to supporting browsers (virtually all of them) and reduce the hero image payload by approximately 25-35%. This is a performance improvement that costs ten seconds.

---

## TOP 3 PRIORITIES

### PRIORITY 1 — Raise opacity of the .spec--sm resting state + anonymous testimonial attribution
Two separate issues, both centred on the problem of invisible information. The specialty terms in the smallest tier (School Anxiety, Neurodiversity, Mood Disorders, Relationship Issues) are at 32% opacity on forest green — effectively invisible on a phone in daylight. These are high-volume search terms for the practice's target client. Raise to 45% minimum. Simultaneously, give the testimonials a first initial and location ("— M.T., Swarthmore PA") and a one-line permission note. These changes are copyediting plus one CSS line and they close two real trust gaps.

### PRIORITY 2 — Add a pricing signal to the Services section
The complete absence of any cost information creates anxiety at the exact moment a prospective client is deciding whether to scroll further. It does not require a specific fee. The "Not sure which is right for you?" sub-area at the bottom of the services list is the natural location for: "Session fees vary; sliding scale available — please ask during your free consultation." This is one sentence, already contextually positioned, that prevents cold exits before the form.

### PRIORITY 3 — Fix CTA section body text contrast + add Google Maps link to address
Two quick wins packaged together. The body copy in the terracotta CTA block is below WCAG AA — raise `rgba(255,255,255,0.6)` to `rgba(255,255,255,0.82)` or higher. Then add a `href` to the address in the About location card pointing to Google Maps. Both are sub-30-minute fixes that remove real friction — one is an accessibility fix, one removes a "do I need to open another tab to see where this is" moment.

---

## WHAT IS WORKING — DO NOT CHANGE
- The first-person About bio is the voice the entire site should aspire to maintain
- The service-card button selection UX is meaningfully better than the previous native select
- The pillar number count-up animation (00→01/02/03 with terracotta flash) is correctly calibrated
- The alternating specialty-row entrance direction is the most interesting scroll moment on the site
- The contact form gold left border gives the form card visual authority
- The FAQ in the About section answers exactly the right questions in exactly the right place
- The Carl Rogers pull-quote in the Approach section positions the practice correctly
- The reading progress bar is a quiet detail that signals craft without demanding attention
- The section-separator shimmer animation between Approach and Services is elegant
- Mobile center-alignment is consistent, well-executed, and should be preserved throughout
