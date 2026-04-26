# AGENT-PLAN — Cycle 4 (2026-04-25)

**Live:** https://zed0minat0r.github.io/therapist-site/
**Score entering cycle:** 8.7 (Nigel cycle 2 re-score)
**Axis this cycle:** Engineering quality + voice consistency (silhouette is FROZEN — customer mid-iteration)

---

## DISPATCH RATIONALE

Score is 8.7 — above the 8.5 polish-mode gate. Default rule says "QA + Pixel + Accessibility only." The user's cycle 4 brief overrides that with explicitly-named concrete work that is independent of the unsettled silhouette scene and the customer-blocked decisions (footer contrast, real testimonial, Psych URL). The 0.3 ceiling room before the 9.0 cap (which itself requires real testimonial + Psych URL) is enough to justify two real engineering moves: the mobile P=83 to 90 push (style.css render-blocking is the named highest-impact remaining item) and a small voice-consistency fix on Specialties ("we" to "I"). Pixel verifies the voice change visually; Nigel re-scores for the +0.1 movement. Razor SKIPS — its only fresh territory would be the silhouette CSS, which is in customer-iteration cooldown. Spark SKIPS per polish-mode and the explicit silhouette ban. Builder is dispatched only with the contained content edit, not new structure.

**Decision rule fired:** Score gate (8.7 >= 8.5) -> polish-mode, BUT user brief expanded eligible work to include Performance push + Voice-consolidation. Silhouette cooldown overrides any Spark/Refiner instinct.

---

## SCHEDULED AGENTS (in order)

### 1. Performance — mobile P=83 -> 90 push

**Why:** Cycle 3 verification confirmed mobile Performance is stuck at 83 with style.css render-blocking the only remaining named high-impact item (321ms wasted, LCP 3.7s still below 2.5s ideal). This is the single highest-ROI engineering move available with no customer dependency and zero overlap with the silhouette.

**Instructions:**
- Apply non-blocking CSS load pattern to `style.css` (line 13 of index.html). Two valid approaches; pick whichever measures better:
  1. `media="print"` + `onload="this.media='all'"` swap with `<noscript>` fallback (mirror the font-loading pattern already in use at line 10)
  2. Inline critical above-the-fold CSS (hero + nav + initial layout tokens) into `<style>` in `<head>`, defer the rest
- After change, run mobile Lighthouse 3 times. Median Performance must be >=87 to count as success; >=90 is the goal. If <87, revert and document why.
- Do NOT touch any `.qb-*`, `.quote-bridge__*`, or `.gb-` classes.
- Do NOT add a build step or any new tooling.

**Guardrails:**
- No changes to silhouette scene, Carl Rogers quote bridge, gradient bleeds, color tokens, hero, about bio, services pricing, contact form picker, nav brand
- Verify visually after change — flash-of-unstyled-content (FOUC) on hero is a regression, not a win
- Memory: "Verify visual changes via browser rendering, not theory"

**Exit criteria:**
- Mobile median Performance >=87 (target 90)
- No FOUC on first paint (verify via Playwright screenshot at 375px throttled)
- LCP < 3.0s on 3 mobile runs
- Append entry to CHANGELOG-AGENT.md with before/after Lighthouse numbers

---

### 2. Builder — Specialties voice consolidation ("we" -> "I")

**Why:** Nigel cycle 1 flagged "What we hold space for" (line 267) and "We work with a wide range of concerns..." (line 270) as the only first-person-voice exceptions on a site that otherwise uses "I". Tiny content edit, fully independent of customer decisions, removes a defensible-but-inconsistent stylistic seam.

**Instructions:**
- index.html line 267: `What we hold<br /><em>space for.</em>` -> recommend `What I hold<br /><em>space for.</em>`
- index.html line 270: `We work with a wide range of concerns. If you don't see yours, reach out — chances are we can help.` -> recommend `I work with a wide range of concerns. If you don't see yours, reach out — chances are I can help.`
- These are the ONLY two edits in this run. Do not touch anything else.
- Commit with message `content: specialties voice — we to I for first-person consistency`

**Guardrails:**
- FORBIDDEN: silhouette scene, Carl Rogers quote bridge, hero, about bio, services pricing, contact form picker, nav brand, footer contrast, gradient bleeds, color tokens, ghost numbers (must remain absent)
- FORBIDDEN: any new sections, no piling on
- FORBIDDEN: fabricating testimonials or Psych Today content
- Memory: "Apps must NOT look AI-generated", "Respectful tone", "Simplicity over polish"
- Only 2 lines change. If you find yourself editing more, STOP and re-read this brief.

**Exit criteria:**
- Lines 267 and 270 updated, no other diffs
- Live URL renders the change at 375/414/desktop without layout shift
- Append entry to CHANGELOG-AGENT.md

---

### 3. Pixel — Voice-shift visual verify + 375/414 alignment sweep

**Why:** The Specialties heading change ("What we hold" -> "What I hold") shortens the line by 2 characters; the body paragraph change shortens by ~6 characters. Could affect line-break geometry and centering at 375/414. Pixel must verify mobile center-alignment per standing memory.

**Instructions:**
- After Builder commits, screenshot Specialties section at 375px and 414px
- Verify: heading still breaks at intended `<br />` point, body paragraph wraps cleanly, no orphan widows
- Confirm constellation field still reads as the breathing-animation centerpiece (no regressions)
- Run a quick alignment sweep across all 11 sections at 375 + 414 (the standard cycle audit) — but DO NOT iterate on silhouette scene findings; if anything looks off there, log it and move on (customer is iterating)
- Performance change visual check: confirm no FOUC, no layout shift on first paint at 375 throttled

**Guardrails:**
- READ-ONLY for silhouette scene — observe but do not propose changes
- Memory: "Pixel always audits center-alignment mobile 375/414"
- FORBIDDEN: gradient-bleed adjustments, color-token edits, hero edits

**Exit criteria:**
- Screenshot confirms voice-shift renders correctly at 375 and 414
- 11-section alignment audit passes (offsets <12px) OR new bugs logged in BUGS.md
- Performance regression check: hero FOUC verified absent
- Append entry to CHANGELOG-AGENT.md

---

### 4. Nigel — Cycle 4 re-score

**Why:** Two real changes landed (perf push, voice consolidation). Rubric demands re-score from real-client perspective. Memory: "Nigel must score stricter."

**Instructions:**
- Re-score from a real prospective therapy client's perspective — adult on phone at evening, 90-second scan
- Credit the perf delta only if mobile P moved >=+4 AND LCP improved >=0.5s (otherwise it's invisible to the user experience)
- Credit the voice consolidation as a small +0.05 if the rest of the site reads as more cohesive in first-person
- Cap remains 9.0 until real testimonial AND real Psychology Today URL arrive (both customer-blocked)
- Update AUDIT.md with cycle 4 delta rationale block at the top
- Score range expected: 8.7–8.9
- Append SCORES.log line: `YYYY-MM-DD HH:MM <score> conversion-friction`

**Guardrails:**
- Memory: "Nigel never recommends removing glows/animations/effects" — only add or improve
- Memory: "No ghost numbers" — confirm still absent
- DO NOT critique the silhouette scene, birds, sun, hills, trees, or grass — customer is mid-iteration; those scores are frozen at last cycle's value
- Frame any criticism collaboratively (respectful tone)
- DO NOT ask for new content/copy from agents — content directives go through the user

**Exit criteria:**
- AUDIT.md updated with cycle 4 block
- SCORES.log appended
- Append entry to CHANGELOG-AGENT.md with score, top issue, axis

---

## FORBIDDEN THIS CYCLE (cooldown)

- **Silhouette scene + birds + sun + hills + trees + grass + Carl Rogers quote bridge** — customer mid-iteration, awaiting reply
- **Footer contrast** — customer-blocked on brand decision (option A/B/C)
- **Real testimonial / Psych Today URL** — customer-blocked
- Hero, About bio, Services pricing, Contact form picker, Nav brand
- Gradient bleeds, color tokens
- A11y items closed cycle 3 (hero stats, specialties aria, nav tap targets)
- Performance cycle 2 fixes already verified (font preload, srcsets, defer, favicon)
- Ghost numbers / large faded background numerals (must remain absent)

---

## SKIPPED AGENTS

- **Spark** — polish mode + silhouette frozen + simplicity-over-polish memory + Frame B richness rule (would have nothing to refine without piling on)
- **Refiner / Razor** — only fresh CSS territory is the silhouette scene, which is in customer-iteration cooldown
- **Accessibility** — all open items either closed cycle 3 or footer-contrast-blocked-on-customer
- **QA** — Pixel covers the visual verify this cycle; full QA regression sweep can wait until silhouette settles, otherwise burns cycles re-confirming layers the customer is about to change

---

## SUMMARY

4 agents, ordered: Performance -> Builder (voice) -> Pixel (verify) -> Nigel (re-score). Theme: small engineering wins while customer-iteration zones cool. Silhouette is frozen. Three customer-blocked items remain queued.
