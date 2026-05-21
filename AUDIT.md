# Nigel's Audit — Laura Spaulding Therapist Site
**Date:** 2026-05-20
**Auditor:** Nigel (strict visual auditor)
**Focus Axis:** Typography
**Viewports tested:** Desktop 1440×900 · iPhone 13 (390×664) · iPhone SE 3rd gen (375×667)
**Pages tested:** index.html · notice-of-privacy-practices.html · no-surprises-act.html

---

## Section-by-Section Findings

### 1. Hero
**Desktop** — Strong. Mountain-lake photograph fills the viewport cleanly. Headline "You don't have to figure it out alone" at 120px Cormorant Garamond with multi-layer text shadow reads crisply against the landscape. Italic green accent line on "to figure it" lands well. CTA button and "Currently accepting new clients" badge both visible above the fold. Nav parchment bar is clean; GET STARTED button in forest-deep has good weight.

**iPhone 13 / SE** — Renders at 51.2px, appropriate scale. Button stacks to full width (correct). Badge sits below. Photo crops slightly high — the mountain peaks and lake are visible, sky dominates, grass foreground gets cropped. No blocking issues.

🟡 MEDIUM — Hero photo crop on mobile (390×730 display): the mountain sits centred but the lake reflection — which creates the sense of calm — is pushed into the lower third and partially cut. A `object-position: center 55%` tweak would expose more lake.

---

### 2. About / Bio
**Desktop** — Photo-left, text-right split at 560×640px portrait. "MEET YOUR THERAPIST" eyebrow in terra-cotta caps. "Laura Spaulding, LPC" in large Cormorant. Credential line in small olive caps. Pull-quote card ("Good therapy is not a transaction — it is a relationship") in a cream inset box with left terra border — elegant. Bio copy at 15px / 28.5px line-height reads comfortably. "PSYCHOTHERAPY & CLINICAL SUPERVISION" caption under photo in small caps.

**iPhone 13** — Portrait stacks above text correctly, 350×525px. Bio text flows with generous line-height. Pull-quote renders inline between narrative paragraphs — readable.

No blocking issues.

🟡 MEDIUM — The pull-quote font at 16px italic Cormorant on mobile is slightly undersized against the surrounding 15px DM Sans body — the typographic hierarchy between quote and body almost disappears at 390px. Sizing up to ~18-19px would restore the visual hierarchy the pull-quote deserves.

🔵 LOW — Laura's portrait has `?v=` (empty version string) in its src URL — could cause caching inconsistencies in Safari. Should be a real version token.

---

### 3. Approach
**Desktop** — "Therapy should feel like a conversation, not a diagnosis." at ~95px with italic rust accent lands as a strong centred statement. Three pillar cards in a horizontal row with left green border-lines and gold "01/02/03" numerals in small caps. Clean, readable, good whitespace. Editorial diamond divider below is a nice touch.

**iPhone SE (375px)** — The Approach headline wraps to 5 lines at this width ("Therapy should feel / like / a conversation, / not a diagnosis."). The word "feel" orphans on its own line. The result looks visually fragmented — the 4–5 line break pattern makes the headline lose its punch.

🟠 HIGH — Approach headline wraps to 5 lines on iPhone SE (375px). "feel" orphans on line 3, breaking the rhetorical rhythm. The headline is the most important typographic moment in the section; the orphan deflates it. Recommend reducing font-size slightly at ≤400px or adding a `<br>` to force a better 3-line break.

**iPhone 13** — Pillars stack vertically. No left border visible on stacked mobile layout (they appear to use horizontal dividers instead — acceptable). Pillar numbers and headings are clear.

🔵 LOW — The terra-cotta/rust horizontal divider above pillar "01" on iPhone SE has more visual weight than the olive/gold divider on desktop, creating a slight brand inconsistency in the divider colour between viewports (desktop shows green accent bars, mobile shows a rust rule).

---

### 4. Services
**Desktop** — Three alternating rows (photo left + text right / text left + photo right). Row 1: Individual Therapy with Unsplash conversation photo (720×510). Row 2: Group Therapy with Unsplash backs-of-people photo (720×537). Row 3: "COMING 2027" Clinical Supervision with a local photo. Section header "Therapy for every chapter of life" in large Cormorant with italic rust accent.

**Mobile** — All rows stack photo-above-text. Service tag pills ("TEENS & ADULTS") render cleanly. "Start here →" links present.

🟠 HIGH — The two Unsplash photos (Individual and Group) are Unsplash stock, while the Supervision row uses Laura's own photo. The tonal/colour mismatch between the warm personal photography and the cool/corporate Unsplash shots is visible side by side. From a real client's perspective: the site feels slightly assembled from parts rather than a cohesive visual world. This is the biggest remaining photography gap. (Score cap applies until real photos replace Unsplash.)

🟠 HIGH — On iPhone 13/SE, the Unsplash group therapy photo (photo-1529156069898) has a natural width of 342px being displayed at 390px — it's upscaling 14% and renders slightly soft/blurry at 2x pixel density on modern phones. The individual session photo has the same issue. Recommend adding `&w=900` to the Unsplash URL query to pull a larger source image.

🔵 LOW — The "COMING 2027" badge on the Supervision row uses a different pill style (terracotta border text) vs the solid tag pills on other rows. The inconsistency reads slightly unfinished.

---

### 5. Specialties
**Desktop** — Dark forest-green background. "What I hold space for." headline with italic rust accent. Focus tag typography is strong — mixed sizes (Anxiety large, Depression italic, Grief small; ADHD small, Family Conflict large, Trauma small) creates a kinetic typographic composition. Works well.

**iPhone 13** — Renders cleanly. Tags scale well. No issues.

🔵 LOW — The body text below the heading ("I work with a wide range of concerns. If you don't see yours, reach out — chances are I can help.") is 15px light text on forest-green at moderate opacity. On iPhone SE the contrast is adequate but towards the minimum threshold — worth verifying WCAG AA compliance.

---

### 6. Reflection (Quote Bridge + FAQ)
**Desktop** — Silhouette scene is beautiful: layered tree line, sun glow, bird flock, parchment sky. Rogers quote animates word-by-word. FAQ band below in forest-deep with white text. Section works well visually.

**iPhone 13** — The quote bridge has 260px top padding on mobile. When scrolling into the section, a visitor sees approximately half a screen of blank parchment before any content appears. The scene itself (SVG at 196px height) and quote text are present but the entry experience is dead air.

🟠 HIGH — ~260px top padding on the quote bridge creates a noticeable blank parchment dead zone when the section first scrolls into view on mobile. The landscape scene sits below this padding — so the first impression of the section is empty cream rather than the dramatic silhouette the design intends. Reduce top padding to ~120–140px on mobile to lead with the scene immediately.

🟡 MEDIUM — Rogers quote text on mobile renders in a single visual "line" during the word-by-word reveal animation — because each `.quote-word` is `display: inline-block` and they wrap correctly, but at font-size ~20.8px the animation stagger makes the words appear to stream across the screen before wrapping. The effect reads like truncation mid-stream even though the final wrapped state is correct. Worth testing whether a shorter animation stagger (reduce from 0.07s per word to 0.04s) would reduce this perception.

**FAQ band** — Four questions, clean readable typography at 18.4px on forest-deep. The "+" icon expand targets are generously sized. No issues.

---

### 7. CTA Band
**Desktop** — Sky photograph background, "Taking the first step is the hardest part." in Cormorant at ~72px with italic rust accent. CTA button and "Or call now: 484-441-3108" link below. The phone number appears to be Laura's real number (confirmed in HTML source). Reads as the strongest emotional close on the page.

**iPhone 13** — Scales cleanly. Button fills width appropriately.

No blocking issues.

---

### 8. Contact
**Desktop** — Two-column layout: info column left (phone, response time, office address), form right. Address correctly shows 202-A North Monroe St / Media, PA 19063. Form has field labels, interest selector pills (Individual / Group / Parenting Support / Supervision / Not sure yet), optional message area.

🔴 BLOCKING — The form action is `https://formspree.io/f/YOUR_FORMSPREE_ID` — a live placeholder. Submitting the form will silently fail or return an error. From a real client's perspective this is a complete conversion failure: they type their name, click "Book a Free 15-Minute Consultation," and nothing happens. This needs a real Formspree endpoint before any live traffic arrives.

**Google Map block** — "The Office" heading, address, embedded Google Map, and GET DIRECTIONS button all render correctly. Map tiles lazy-load (blank grey on first scroll-into-view, then tiles appear) — acceptable standard browser behaviour. Pin placed correctly on Media, PA.

**iPhone 13** — Contact section stacks to single column. Info details centred (phone, response time, address). Form below. Map below form. GET DIRECTIONS button at full width. All renders correctly.

🟡 MEDIUM — The phone number in the contact column ("484-441-3108") is plain text — not a `tel:` anchor. On desktop this is fine but on mobile a prospect should be able to tap it to call. The phone in the CTA section and footer correctly use `tel:` links; the contact column version is missing the tap-to-call affordance.

---

### 9. Footer
**Desktop** — Dark charcoal background. "Laura Spaulding, LLC" and "Psychotherapy and Clinical Supervision" left, nav links right. Bottom bar: copyright, legal links (Notice of Privacy Practices | No Surprises Act), phone number right. Text contrast is readable (white/light on near-black).

**iPhone SE (375px)** — Footer nav links wrap: the five items (Approach · Services · Specialties · About · Contact) split across two rows with "Contact" orphaned alone on its own line. Visually this reads as incomplete — the lonely "Contact" at bottom looks like a layout error.

🟡 MEDIUM — Footer nav wraps to a broken layout on iPhone SE: "Contact" orphans on its own row beneath the other four links. A simple fix: allow the nav to wrap to 2 clean rows (2+3 or 3+2) rather than the current 4+1 break, or reduce font-size slightly so all five fit on one row.

**iPhone 13** — Footer renders correctly with legal links visible at the very bottom (Notice of Privacy Practices | No Surprises Act). Takes a full scroll past the map to see them but they are present.

---

### 10. Legal Pages (Privacy Notice + No Surprises Act)
Both pages render cleanly on desktop and iPhone 13. Heading hierarchy is correct. Nav shows "Laura Spaulding, LLC" brand left and "← Home" link right — works correctly. Content is readable at 15px DM Sans on parchment background. Legal callout boxes (grey inset) are well differentiated from body text.

🔵 LOW — The "← Home" return link on both legal pages functions as plain brand-name text on desktop — it's not clearly styled as a back-navigation element to a first-time visitor. Adding a visible left-arrow with slightly more weight would improve discoverability. (Works functionally; purely a polish note.)

---

## Typography Axis — Specific Findings

The focus axis this cycle is typography. Summary of type-specific observations across all viewports:

1. **Headline scale coherence** — The Cormorant Garamond display headlines (Hero 120px → Approach ~95px → CTA ~72px) descend sensibly on desktop. On mobile the clamp values bring all three closer together in size, slightly flattening the typographic hierarchy.

2. **Body copy** — 15px DM Sans / 28.5px line-height is generous and legible across all viewports. No issues.

3. **Approach headline orphan** — The biggest pure typography bug: iPhone SE 5-line wrap with "feel" isolated. Damages the line's rhetorical punch.

4. **Pull-quote undersizing on mobile** — At 16px italic Cormorant on mobile, the bio pull-quote doesn't rise above the surrounding body text. The quote is the emotional centrepiece of the bio section; it needs size advantage.

5. **Quote bridge font at runtime** — The Rogers quote at `clamp(1.3rem, 2.4vw, 1.75rem)` = 20.8px on mobile is proportionally correct. The word-by-word animation reads as streaming truncation mid-reveal, though the final state is correct.

6. **Italic accent consistency** — The rust/terracotta italic accent (Cormorant italic) is used consistently throughout: hero, approach, services, specialties, cta, contact. Brand-coherent. Works well.

7. **Mixed sans weights** — DM Sans is used at 500 (nav), 400 (body), 300 (captions). The variation is appropriate and doesn't feel inconsistent.

---

## Scores by Section

| Section | Score |
|---|---|
| Hero | 8.0 |
| About / Bio | 7.5 |
| Approach | 7.0 |
| Services | 6.5 |
| Specialties | 8.0 |
| Reflection | 7.0 |
| CTA Band | 8.5 |
| Contact | 5.0 (form placeholder is live blocking issue) |
| Footer | 7.0 |
| Legal Pages | 8.0 |

---

## Overall Score: 6.7 / 10

**Rationale:** The site is visually coherent and considerably above average for a solo therapy practice. The brand palette (parchment · forest-deep · terra-cotta · gold) is distinctive and consistent. The silhouette scene, word-by-word quote reveal, and editorial dividers give it a memorable scroll experience. However, from a real prospective client's perspective — someone who found this via a referral and is deciding whether to reach out:

- The contact form is dead (Formspree placeholder) — the single most important conversion action on the site silently fails.
- Two of three service photos are Unsplash stock; the visual world feels partially assembled.
- Approach headline orphans on iPhone SE.
- The 260px blank zone entering the reflection section on mobile is a scroll-experience dead zone.

These four issues collectively drag the score. The cap on photography/reviews/address is partially lifted (real address is live) but real photography remains Unsplash-dependent for two of three service rows.

---

## Top 5 Priorities for Next Cycle

1. 🔴 **Fix the Formspree endpoint.** Replace `YOUR_FORMSPREE_ID` with Laura's real endpoint. Nothing else matters more — this is a live broken conversion.

2. 🟠 **Fix the 260px mobile padding on the quote bridge.** Reduce to ~120px so the silhouette scene is the first thing users see when they scroll in, not a blank parchment wall.

3. 🟠 **Approach headline orphan on iPhone SE.** The 5-line wrap with "feel" alone on line 3 kills the rhetorical punch of the section's key statement. Add a responsive `<wbr>` or adjust the mobile font-size slightly.

4. 🟠 **Unsplash service photos.** Both Individual and Group Therapy rows use upscaled stock (342px natural → 390px display). They're visually inconsistent with Laura's warm personal photography. Interim fix: swap the Unsplash URLs to `?w=900` for sharper rendering. Permanent fix: real photography.

5. 🟡 **Pull-quote sizing on mobile.** The "Good therapy is not a transaction" pull-quote in the bio loses typographic hierarchy at mobile sizes. Bump to ~18-19px italic Cormorant on mobile so it reads as a distinct voice, not body text.
