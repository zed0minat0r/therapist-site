# Nigel's Audit — Amy Fantalis & Associates
**Date:** 2026-04-18
**Auditor:** Nigel (strict British auditor)
**Previous Score:** 6.4 / 10
**Current Score:** 6.9 / 10
**Delta:** +0.5
**Live URL:** https://zed0minat0r.github.io/therapist-site/

---

## OVERALL SCORE: 6.9 / 10

The improvements since the last audit are real and visible. The bio addition is the single most important change — Amy Fantalis now has a name, credentials, a UPenn MSW, and modality tags (CBT, DBT, Trauma-Informed, Family Systems). The Formspree endpoint is live. The CTA copy is better. The phone number is legible. These are genuine improvements and they move the needle.

However, the site still reads as a capable AI-designed wellness site rather than an actual practice. A real user arriving from a Google search for "therapist Media PA" will see polished execution but still feel a lack of genuine human presence — particularly in the bio, which is written about Amy rather than by or through her. The editorial design direction remains correct and the visual identity is coherent, but the emotional connection that closes the gap between 7.0 and 8.0 is still missing.

---

## SECTION-BY-SECTION BREAKDOWN

### 1. Hero — 7.0 / 10
The forest-path Unsplash image remains a credible choice. The headline ("You don't have / to figure it / out alone.") is warm and human, with the italic terracotta treatment on the middle line working well. The botanical SVG overlay is tasteful. The stats bar (17+ years / 7-Adult / Mon-Fri) provides immediate credibility.

**What works:** The reading progress bar in terracotta is well-placed and unobtrusive. The scroll-cue line animation is restrained and correct. Phone number is now at 95% opacity — a significant improvement.

**Remaining issues:**
- Hero subtext ("Collaborative psychotherapy for individuals, families, and couples") at rgba(255,255,255,0.72) is better but still risks contrast failure outdoors on an older phone. Needs to be at least 0.82.
- The stats bar labels ("ages served", "years") are at rgba(255,255,255,0.35) — on a real device in daylight these disappear entirely. They exist solely to contextualise the numbers above them, and if they are invisible, the numbers lose meaning.
- The Unsplash image loads from an external URL with no local fallback. For a live production site this is a reliability risk.

### 2. Navigation — 6.5 / 10
Dual-state nav (transparent over hero, frosted parchment when scrolled) is clean and standard. The AF&A monogram is charming in concept.

**Remaining issues:**
- The nav CTA button ("Get Started") is min-height: 44px on desktop but the mobile override in the full-screen menu is min-height: 56px — that is actually fine. The issue is that the nav__cta on desktop uses heavy !important declarations. This is fragile CSS that will create maintenance problems.
- Nav uses colour: rgba(255,255,255,0.7) for links over the hero — this is borderline WCAG AA at this opacity against the darkened hero image. Should be 0.82 minimum.

### 3. Approach Section — 6.5 / 10
The three-pillar numbered layout is tasteful. Carl Rogers pull-quote is a good editorial anchor. The specific modalities named (CBT, DBT, trauma-informed) are a genuine improvement in this iteration.

**Remaining issues:**
- The pillar numerals (01/02/03) are rendered in var(--parchment-xdk) — they are so light they barely register against the parchment background. They lose their editorial impact. Nudging to --parchment-dk would recover that.
- Pillar copy is still somewhat generic. "You set the pace" and "Grounded in evidence" are phrases found on hundreds of therapy sites. The copy is improved but does not yet sound like it comes from this specific practice.
- On mobile, the last pillar has border-bottom: 1px solid var(--parchment-xdk) per the responsive CSS. This is correct but the pull-quote then floats without a clear visual separator from the pillars. Needs a margin-top increase or a decorative rule.

### 4. Services Section — 7.2 / 10
The editorial list format (large serif numbers, service title at display size, gold tag line-draw hover) is the strongest structural section. The in-section CTA ("Not sure which is right for you? Tell us what's going on") is a clear improvement and adds a conversion path mid-page.

**Remaining issues:**
- Group Therapy description says "Ask us what's currently forming" — this is honest but slightly deflating after the confident tone of the other three services. Either commit to a description of what groups exist, or reframe this as "Call us to ask about current group offerings."
- The tag line-draw hover (gold underline expanding on svc:hover) is a nice micro-interaction but fires on the entire svc card hover, not on the tag itself — the gold line draws in even if the user is hovering the service title or description text far above the tag. It looks slightly disconnected.

### 5. Specialties (Editorial Constellation) — 7.5 / 10
This remains the most distinctive section on the site. The varying-size typographic treatment on dark forest with stagger animation is a genuine editorial statement. Score unchanged from previous audit — the section was already strong.

**Remaining issues:**
- The --sm specialty items (School Anxiety, Neurodiversity, Mood Disorders) render at approximately 13px at 375px width. This is technically above the 12px minimum but sits at the threshold where real users with standard phone brightness will struggle.
- The specialties__subhead ("We work with a wide range of concerns...") is explicitly set to display:none on mobile per the media query at max-width: 600px — this is not visible in the CSS excerpts I reviewed but confirmed by the responsive declarations. This removes the only explicit invitation for unlisted concerns to make contact, on the device most likely to be used by someone googling a local therapist.

### 6. About Section — 6.2 / 10 (up from 5.5)
The Amy Fantalis LCSW bio is now present and this is a meaningful improvement. Name, credentials, UPenn MSW, 17+ years, modality tags. This was the biggest single gap in the previous audit and it has been meaningfully addressed.

**Why it is not higher:**
- The bio is written about Amy in third person ("Amy founded this practice...", "she works with..."). For a therapy website, this creates professional distance at the moment when a prospective client most needs warmth. A single paragraph in first person — even just the opening — would substantially increase emotional resonance.
- The modality tags (CBT, DBT, Trauma-Informed, Family Systems) are styled as pill tags with a forest border on parchment background. They are neat but not distinctive. They read like developer feature tags, not like a clinician's specialties.
- The left column body copy ("Amy Fantalis & Associates is a close-knit psychotherapy practice...") repeats information already stated in the bio on the right. These two bodies of text should do different work — left could speak to the practice culture and values, right speaks to Amy specifically.
- No mention of insurance, sliding scale, telehealth availability, or session length. These are questions every new client has and this section is the natural place to answer them.

### 7. Testimonials — 6.5 / 10 (up from 6.0)
The reordering improvement is real — the family dining-table testimonial now leads, which is the most specific and vivid of the three. The quote text at rgba(255,255,255,0.88) is much stronger than before.

**Remaining issues:**
- The two-column layout (quote in col 1, attribution in col 2) is visually unusual and requires the reader's eye to traverse the full width to find who said something. It looks intentional but behaves awkwardly. Attribution should live beneath the quote — it is how humans read testimonials.
- Three testimonials is the right number, but all three describe transformation outcomes. None describes the experience of being in a session with Amy. A testimonial about what it actually feels like to work with her would differentiate better than another outcome statement.

### 8. CTA Section — 6.8 / 10 (up from 6.5)
"Book a Free Consultation" is a real improvement over "Start Your Journey." It is specific, low-friction, and actionable. The terracotta full-width band is visually differentiated. The "hardest part" copy is on brief.

**Remaining issues:**
- "Most clients hear back within 24 hours" is both reassuring and slightly worrying for someone in acute distress. If same-day contact is available by phone, this should be offered as an alternative: "Or call us today at 610-585-1373."
- On mobile the two columns collapse correctly, but the section then occupies a lot of vertical space for relatively little content. A tighter padding on mobile (currently 72px 20px) would improve flow.

### 9. Contact Form — 7.2 / 10 (up from 6.5)
The Formspree endpoint is now live (/f/xpznqkdl) — this is the most critical fix from the last audit and it has been done. The form structure is correct. Inline validation is present in JS (blur handlers on name and email, with error message injection). The success state redirect via ?submitted=1 is functional.

**Remaining issues:**
- The select dropdown ("I'm interested in") uses native browser rendering which breaks design consistency on iOS — it will render as an iOS picker regardless of CSS. A custom styled select or a row of tappable cards (Individual / Family / Couples / Group / Not sure) would be dramatically more usable and on-brand.
- The form container (white on parchment) is the starkest visual break on the page. The box-shadow: 0 4px 32px rgba(30,50,28,0.06) is already present but very subtle. Consider adding a left-border accent in forest or gold to integrate it with the design language used elsewhere.
- No privacy statement or HIPAA disclaimer on or near the form. For a healthcare provider, users may hesitate to submit personal information without any indication of how it is handled.

### 10. Typography System — 7.5 / 10
Cormorant Garamond + DM Sans pairing remains strong. The 13 sub-12px fixes are confirmed — minimum rendered sizes are now above the threshold across sections reviewed.

**Remaining issues:**
- The section-eyebrow class uses font-size: 12px throughout — this is the safe minimum, not comfortable reading. 13px would improve scan-readability.
- Line-height values vary across sections (1.05 for headlines, 0.95 in hero, 1.6/1.75/1.8/1.85 for body) without an obvious system. This is the kind of detail that separates a theme from a considered design.

### 11. Colour & Visual Design — 7.0 / 10
The palette (forest / parchment / terracotta / gold) is coherent and warm. Grain texture across sections adds analogue warmth. Gold accents in eyebrow labels and the bio credential line are a welcome addition this round.

**Remaining issues:**
- Two back-to-back parchment sections (Approach and Services) still merge visually on scroll. A very subtle section break — a decorative rule, a tonal shift in the background, even a horizontal line — would restore the rhythm.
- The gold accent is still deployed only in small type (eyebrows, credentials). Extending it into at least one decorative element — a left border, a divider line, the hero stats numbers — would give the palette more presence.

### 12. Mobile UX at 375px — 6.5 / 10 (up from 6.0)
Tap targets are generally met. The 13 font-size fixes are real improvements. Phone number visibility is substantially better.

**Remaining issues:**
- The hero phone number is better but remains inline with the CTA button in a flex-wrap layout. On narrow screens where both wrap, the phone number can end up left-aligned below the button with ambiguous visual hierarchy.
- The specialties subhead remains hidden on mobile. This is a confirmed conversion gap.
- The contact form select dropdown will render natively on iOS, breaking design consistency at the exact moment of conversion intent.

### 13. Scroll Experience — 6.5 / 10
Reveal animations are tasteful and appropriate. The specialty stagger animation is the standout moment. The reading progress bar is a nice editorial touch.

**Remaining issues:**
- The scroll journey is uniform. Every section enters with the same 22px translateY reveal. There are no moments of genuine scroll-driven surprise. One section — the specialties is the natural candidate — could benefit from a more ambitious scroll-driven treatment (words entering from left/right rather than bottom, or a pinned header while the specialties scroll beneath it).
- The hero botanical parallax works on desktop but disappears entirely on mobile (display: none at 900px). No alternative scroll behaviour replaces it. The hero feels more static on mobile as a result.

---

## TOP 3 PRIORITIES

### PRIORITY 1 — Humanise the About section with first-person voice and answer the practical questions
The bio is present, which is the right foundation. But it is written about Amy, not by her or through her. Prospective therapy clients are making a vulnerable decision — they need to feel they are encountering a real person, not reading a press release. Rewrite the bio opening in first person (or first-person-adjacent): "I started this practice in 2007 because..." is worth twenty "she founded this practice" sentences. Additionally, this section must answer the three questions every new client has: (1) do you take insurance, (2) is telehealth available, (3) how long are sessions. These do not need to be a FAQ — they can sit naturally in one short paragraph below the bio. Until these questions are answered on the page, many visitors will leave to find a therapist site that does answer them.

### PRIORITY 2 — Replace the native select with tappable service cards in the contact form
The iOS native picker on the "I'm interested in" select breaks the design at the most critical moment — conversion intent. Replace this with a horizontal row of tappable text buttons (Individual / Family / Couples / Group / Not sure) that match the site's typographic style. On mobile, these can stack or scroll horizontally. This is a visible, impactful UX improvement that also feels more welcoming — the user is making a choice, not filling in a form. Simultaneously, add a brief privacy note ("Your information is kept strictly confidential") near the submit button. This reduces friction for the exact population this site serves.

### PRIORITY 3 — Give the scroll experience one moment of genuine distinction
Every section currently enters the same way (22px fade-up). The site is polished but it does not earn a second scroll through. The specialties section is already the most ambitious — extend it. Consider: as the user scrolls into the specialties field, the words do not just fade in from below but enter from alternating sides (odd rows from left, even rows from right) with a slight scale. Or: pin the section header ("What we hold space for") while the word constellation scrolls beneath it. Either treatment would make the specialties section feel genuinely memorable rather than merely well-executed, and would give the site one moment that a real user would mention when describing it to someone else.

---

## SUMMARY

This is a real improvement. The bio is present. The form works. The phone number is readable. The CTA copy is better. These are not cosmetic changes — they directly address the most critical trust and conversion gaps from the previous audit.

The site sits at 6.9 because it remains one half-step away from feeling like a real human practice rather than a well-executed template. The gap is narrower than before. The about section needs a voice. The form needs one UX improvement. The scroll experience needs one genuine moment of surprise. Get those three right and this site crosses 7.5.
