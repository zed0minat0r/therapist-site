# Nigel's Audit — Amy Fantalis & Associates
**Date:** 2026-04-18  
**Auditor:** Nigel (strict British auditor)  
**Live URL:** https://zed0minat0r.github.io/therapist-site/

---

## OVERALL SCORE: 6.4 / 10

This is a genuine step forward from a generic template. The editorial typographic approach is directionally correct and the colour palette (forest green, warm parchment, terracotta) is well chosen. However, it still reads as "AI-designed wellness site" to a real user — the bones are there but it stops short of feeling like a real, lived-in practice. Several structural decisions are working against the otherwise decent foundation.

---

## SECTION-BY-SECTION BREAKDOWN

### 1. Hero — 7.0 / 10
The forest-path Unsplash image is a credible choice. The staggered headline ("You don't have / to figure it / out alone.") is genuinely good copy — warm, human, not clinical. The botanical SVG overlay is a nice editorial touch. The stats bar at the bottom (17+ years / 7-Adult / Mon-Fri hours) adds immediate credibility without being boastful.

**What works:** Italic terracotta treatment on the middle headline line. The grain overlay stops the background looking flat. The scroll-cue line animation is restrained.

**What needs improvement:**
- The hero subtext ("Collaborative psychotherapy for individuals, families, and couples") is too generic and nearly invisible at `rgba(255,255,255,0.55)` — borderline on contrast. Real users with older phones or outdoors will struggle.
- The phone number link in the hero (`hero__phone`) renders at `rgba(255,255,255,0.5)` — this is the single most important conversion element on the page and it is harder to read than the CTA button. It should be given far more visual weight.
- The Unsplash image URL will visibly degrade or break if Unsplash changes parameters. A locally committed fallback image or a CDN-hosted asset is needed for production reliability.
- The botanical parallax on scroll uses `style.top` manipulation in JavaScript, which forces layout recalculation on every frame. Should be `transform: translateY()` only.

### 2. Navigation — 6.5 / 10
The dual-state nav (transparent over hero, frosted parchment when scrolled) is clean and standard practice. The "AF & A" monogram brand mark is charming in concept.

**What needs improvement:**
- The `nav__cta` "Get Started" button is `min-height: 40px` — falling below the 44px tap target minimum on mobile. This is a real accessibility failure.
- The mobile menu is a full-screen overlay which is fine, but the overlay links collapse to Cormorant Garamond at 24px — at this size on mobile it looks enormous and slightly ridiculous. 20-22px would be more dignified.
- Nav links use `!important` declarations heavily to override states — this signals the CSS was patched iteratively rather than planned. It is fragile.

### 3. Approach Section — 6.5 / 10
The three-pillar numbered layout (01/02/03 with large Cormorant numerals in parchment-xdk) is tasteful. The Carl Rogers pull-quote anchoring the right side is a good editorial decision.

**What needs improvement:**
- The pillar copy is very safe ("We work with you, not on you" / "No templates, no cookie-cutter plans"). These are generic therapy site platitudes. A real user who has visited three other therapist sites this week will read right past them. The copy needs to be more specific to Amy's actual approach.
- The large numeral colours (`var(--parchment-xdk)`) are so light they barely register — the numbers lose their editorial impact. They need to be at least `--parchment-dk` to read.
- On mobile (375px), the three columns stack, which is correct, but then the bottom border on the last pillar disappears and there is no visual separator before the pull-quote. The quote floats.

### 4. Services Section — 7.0 / 10
The editorial list format (large serif numbers, service title at display size, description below) is the strongest structural section on the page. The hover interaction (number slides right, changes to terracotta) is tasteful.

**What needs improvement:**
- The tag elements (`Ages 7+`, `All ages`, `Adults`, `Ages 14-40`) feel like pills from a different era of design despite being styled as underlined labels. They read as afterthoughts because they appear below the description with no visual logic connecting them to anything.
- Group Therapy is described as "Weekly groups for ages 14-40" — this implies a fixed offering that may not be accurate or current. If the group schedule is not live, this is misleading to a prospective client.
- No call-to-action within the services section. A user who reads Individual Therapy and thinks "yes, that's me" has nowhere to go except scroll further.

### 5. Specialties (Editorial Constellation) — 7.5 / 10
This is the most distinctive section on the site. The varying-size typographic treatment (lg/md/sm with slash separators) on a dark forest green is a genuine editorial statement. The stagger animation on scroll is well-executed and the 40ms per-item delay feels natural rather than performative.

**What needs improvement:**
- On mobile (375px), the `--sm` items scale down to `clamp(0.9rem, 3.5vw, 1.1rem)` = approximately 13px at 375px. This is tight but technically above the 12px minimum. However "School Anxiety", "Neurodiversity", and "Mood Disorders" at this size on the dark background barely register.
- The subheader ("We work with a wide range of concerns. If you don't see yours, reach out...") is hidden on mobile (`display: none`). This is the only place on the page that explicitly invites people with unlisted concerns to make contact — hiding it on mobile removes a conversion path.
- Row 5 ("School Anxiety / Life Transitions / Mood Disorders / Emerging Adults") is very long on desktop and will visually overwhelm on narrow screens. Consider breaking it differently.

### 6. About Section — 5.5 / 10
This is the section most likely to make or break a prospective client's trust and it is the thinnest section on the page. The two-paragraph body copy is adequate but deeply impersonal — it reads like a generic practice bio, not like Amy Fantalis herself is speaking.

**What needs improvement:**
- There is no named therapist biography. The copy says "our therapists" and "we" throughout. A real prospective client needs to know who they are going to meet. Amy Fantalis has been in practice since 2007 — nineteen years of experience is a significant credential that is entirely absent from this section.
- The right-hand column contains only an address card. This is a wasted opportunity — on a two-column desktop layout, this space is crying out for credentials (licensure, education, affiliated organisations), a warm personal statement, or a secondary image.
- The address card border-left terracotta accent is nice but the card itself is low-stakes visually — it looks like a UI component from a theme.
- "Small team. Real experience. Deep care." as a headline is earnest but vague. Real users want specifics: what are the therapists' modalities? What populations do they specialise in?

### 7. Testimonials (Trust Strip) — 6.0 / 10
The two-column testimonial layout (quote in col 1, attribution in col 2) is unconventional and initially confusing — a user's eye goes to the quote and then has to traverse the full width to find the attribution. It works on desktop but on tablet (where it collapses to single column) it becomes fine.

**What needs improvement:**
- All three testimonials are unsigned beyond vague descriptors ("Individual client, Media PA"). This is expected in therapy (confidentiality) but the result is that no testimonial feels verifiable. Adding something slightly more specific — a first name only, or a more vivid attribution ("Parent of a 9-year-old") — would improve perceived authenticity.
- The quote text is at `rgba(255,255,255,0.75)` on dark forest. This passes contrast but the italic Cormorant at this opacity looks slightly washed. Bringing it up to `0.88` would make them land harder.
- Three testimonials is the correct number. But they are all broadly positive without specificity. "I felt like someone actually listened" is what every therapy site says. The dining-table quote ("our family actually eats dinner together again") is the strongest — leading with the most specific testimonial first would be more effective.

### 8. CTA Section — 6.5 / 10
The terracotta full-width band is visually differentiated and the "Taking the first step is the hardest part" copy acknowledges the real emotional barrier to contacting a therapist. That is good thinking.

**What needs improvement:**
- "Start Your Journey" as CTA button copy is very generic — it is the default AI copywriting phrase for wellness sites. Consider something more specific and less aspirational: "Book a Free Consultation" or "Call Us Today" would be more direct and useful.
- The white button on terracotta with `cta-breathe-white` animation (subtle box-shadow pulse) is fine — not intrusive.
- On mobile, the two columns correctly collapse, but "Ready to begin?" and the headline then stack above the button with a generous `gap: 28px` — this makes the section feel long without earning the length.

### 9. Contact Form — 6.5 / 10
The form itself is competent and well-structured. Labels in small-caps, correct field types (tel, email), optional phone/message. The Formspree action URL uses `placeholder` — this is a development artifact that must be replaced before the site is live. The success state redirect mechanism (checking for `?submitted=1` in the URL) is functional.

**What needs improvement:**
- The Formspree endpoint is `/f/placeholder` — this means the form does not actually work in its current state. This is a critical production issue.
- The "I'm interested in" select dropdown with "Select a service" default option is functional but the select element on iOS renders natively and looks completely out of place with the bespoke form styling. A custom styled select or a segmented button group would maintain design consistency.
- No field-level validation feedback is visible in the CSS or JS. A user who submits with a malformed email will get no clear indication of what went wrong.
- The form container (`contact__form-wrap`) is white on parchment — the contrast between the form's white card and the section background is the starkest visual break on the page. Adding a very subtle `box-shadow: 0 4px 32px rgba(30,50,28,0.06)` would integrate it better.

### 10. Typography System — 7.5 / 10
Cormorant Garamond for display and DM Sans for body is a considered pairing. The weight variation (300 italic for display emotion, 400/500 for body clarity) is well handled. The terracotta-for-italic-em convention is consistent and gives the page a house style.

**What needs improvement:**
- The `section-eyebrow` class is `11px` — this is at the absolute minimum for legibility. On non-retina screens it will struggle. Nudging to `12px` would be safer.
- Line heights are inconsistent: headlines at `1.05`, `0.95` (hero), body at `1.6`/`1.75`/`1.8`/`1.85` depending on context. This is not catastrophic but suggests the CSS was assembled incrementally rather than from a defined type scale.

### 11. Colour & Visual Design — 7.0 / 10
The palette is coherent and warm. Forest green / parchment / terracotta / gold works well for a professional wellness practice. The grain texture applied via SVG filter across multiple sections adds analogue warmth without being heavy-handed.

**What needs improvement:**
- The alternation between parchment sections and forest-green sections (Hero > Parchment > Parchment-dk > Forest > Parchment > Forest > Terra > Parchment > Ink) creates a reasonable rhythm but the two back-to-back parchment sections (Approach and Services) merge visually on scroll and feel like one undifferentiated block.
- The gold (`#9e7e30`) appears only in eyebrow labels and the Rogers citation — it is underused as an accent and could be brought into the Services hover states or the About card to give the palette more depth.

### 12. Mobile UX at 375px — 6.0 / 10
Tap targets are generally met (44px for most interactive elements). The hero stats bar uses horizontal scroll on mobile which is acceptable. No obvious overflow issues in the CSS.

**Failures:**
- `nav__cta` (Get Started button) is `min-height: 40px` — fails the 44px tap target minimum.
- The mobile menu overlay dismisses correctly on link click.
- `specialties__subhead` is hidden on mobile — removes a useful conversion prompt.
- Specialties `.spec--sm` items at 375px can render near 13px on a real device — borderline.
- The hero phone number (`hero__phone`) has no dedicated mobile treatment — it remains in-line with the CTA button and at 375px the flex-wrap can push it below the button awkwardly.

### 13. Scroll Experience — 6.5 / 10
The page scrolls cleanly. Reveal animations are present and handled tastefully — 0.8s ease, 22px translateY, no dramatic effects. The specialty stagger animation is the standout. The hero botanical parallax adds depth.

**What needs improvement:**
- The scroll experience is linear and predictable. For a user scrolling the full page, there are no moments of visual surprise or delight beyond the specialty stagger. Every section transitions to the next with the same reveal pattern. One section with a distinctly different scroll behaviour (a sticky element, a horizontal scroll beat, a pinned image with scrolling text) would elevate the experience significantly.
- The hero scroll-cue line (the animated 1px vertical line at bottom-right) is tasteful but easy to miss. It does not indicate direction — just breathes.

---

## TOP 3 PRIORITIES

### PRIORITY 1 — Add a real About section with named therapist biography
This is the single biggest trust gap on the site. A prospective therapy client is making an intimate, vulnerable decision. They need to know who Amy Fantalis is — her training, her modalities, how long she has been practising, what she believes about the therapeutic relationship. Currently the About section says "small team, real experience" without naming a single person or credential. This is the page that will lose the most potential clients. The right side of the About two-column layout (currently just the address card) should contain a genuine therapist bio with credentials. Consider: a warm first-person paragraph in Amy's voice, her licensure, her modalities (CBT, EFT, DBT, IFS — whatever she actually uses), and her specialties with children/teens specifically.

### PRIORITY 2 — Fix the Formspree endpoint and add inline validation
The contact form currently posts to `/f/placeholder` — it does not work. No prospective client will ever submit successfully. This is a dead end. Replace the placeholder with the live Formspree endpoint immediately. Then add client-side inline validation feedback: a red border + error message beneath each field on blur, so users know exactly what is wrong before they hit Submit. This is the most impactful technical fix on the site.

### PRIORITY 3 — Replace generic CTA copy and strengthen mobile phone number prominence
"Start Your Journey" is the weakest line on the site — it is the default AI-generated wellness phrase. Replace it with something specific and low-friction: "Book a Free 15-Minute Call" tells the user exactly what they are getting and removes the fear of commitment. Simultaneously, the phone number in the hero needs more visual weight — it is the highest-value contact method for an anxious first-timer and it currently renders at 50% white opacity. Give it a colour treatment that makes it feel intentional and important.

---

## SUMMARY

This site is the best iteration yet and it is genuinely close to being good. The editorial typographic direction is correct. The colour palette is warm and professional. The specialties constellation is distinctive. But it falls short at the most important job of a therapist website: making a vulnerable person feel safe enough to make contact with a specific human being they can trust. The About section is the crisis point. Everything else can be improved incrementally; that section needs rethinking from the ground up.
