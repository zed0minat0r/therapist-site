# AGENT-PLAN — Cycle 3

**Date:** 2026-04-25
**Coordinator:** dispatch
**Project:** Laura Spaulding Therapist Site
**Live:** https://zed0minat0r.github.io/therapist-site/
**Cycle 2 Score:** 8.7 / 10 (conversion-friction axis)
**Cycle 3 Theme:** Integrity over flash — verify, harden, surface decisions
**Score gate:** 8.7 is above the 8.5 polish-mode floor. No Builder, no Spark, no Refiner this cycle. Polish + verification only.

---

## ONE-LINE RATIONALE

Cycle 2 shipped perf + a11y fixes but never re-ran Lighthouse to verify the LCP recovery, and Nigel's audit text included two phantom deductions for issues already fixed in cycle 1 (corrected in AUDIT.md this cycle). The site is honest, fast-on-paper, and animated. What it now needs is verification, deferred a11y cleanup that does not touch brand colors, a final cross-viewport regression sweep, and a clean surfacing of the footer-contrast brand decision so the user can choose between cycles. No agent ships visible visual changes.

---

## SCHEDULED AGENTS (ordered)

### 1. Performance — Cycle 2 verification re-run

**Why:** Cycle 2 Performance shipped 5 fixes (non-blocking fonts, hero srcset, service/about srcsets, favicon SVG, defer on main.js) with an *estimated* 800–1700ms LCP recovery. No re-run was performed. The cycle 2 baseline file (`PERFORMANCE.md`) shows mobile P=71 LCP=5.4s; that data is now stale relative to live HTML. Without verification, the team is shipping cycle 3 against unverified cycle 2 claims — exactly the false-fix pattern that burned us in cycle 1.

**Instructions:**
1. Run Lighthouse headless against `https://zed0minat0r.github.io/therapist-site/` for both mobile and desktop. Save raw JSON to `lighthouse-cycle3-mobile.json` and `lighthouse-cycle3-desktop.json` (overwriting any cycle2 file is fine — those are stale).
2. Record the new scores: Performance / A11y / Best Practices / SEO for each form factor.
3. Record Core Web Vitals on mobile: LCP, CLS, TBT, FCP, Speed Index. Note the LCP element specifically — cycle 2 it was the H1 text (font-blocked render delay), not the image.
4. Diff against cycle 2 baseline. Confirm or refute the estimated LCP recovery. If LCP did not move, root-cause why before claiming a regression — fonts may now be in disk cache, GitHub Pages may be caching, etc.
5. Overwrite `PERFORMANCE.md` with cycle 3 numbers (per the file's own instruction: "reflects current state only").
6. **DO NOT ship new optimizations this cycle.** Verification is the entire job. If you find a regression, surface it in CHANGELOG-AGENT.md and BUGS.md — do not silently fix.
7. Append a one-liner to CHANGELOG-AGENT.md with the headline numbers and verification verdict.

**Guardrails (from MEMORY.md):**
- Verify via browser rendering / real Lighthouse run, not theory. Cycle 1 burned us with 3 false-fix claims.
- No content / animation removal.
- No color or layout changes — measurement only.
- Respectful tone in any commit message; do not retroactively grade cycle 2.

**Forbidden surfaces:** Hero, About bio, Services pricing, Contact form picker, Nav brand, Rogers quote bridge, all gradient bleeds, color tokens, all Razor-touched orphans, `.about__bio-subcred` class.

**Exit criteria:**
- Two fresh Lighthouse JSON files committed
- `PERFORMANCE.md` overwritten with cycle 3 numbers
- Verdict line in CHANGELOG-AGENT.md: `verified | regressed | unchanged`
- No code changes

---

### 2. Accessibility — Second pass on deferred decorative items

**Why:** Cycle 2 a11y closed 6 issues (landmark, FAQ aria, skip link, form alerts, label fix, reduced-motion) but deferred three categories that need a low-risk, brand-neutral resolution: hero stats `aria-hidden`, specialties `.spec--sm` rgba(255,255,255,0.25) constellation text, and any other axe issues that landed in BUGS.md. The footer contrast decision is *not* in this scope — that's brand and goes to the user. This pass is the decorative-text corrections that don't change palette.

**Instructions:**
1. Re-run axe-core against live URL. Capture violation count baseline at start.
2. Hero stats bar (`.hero__stats` with `aria-hidden="true"`): the stats (17+ years, Ages 13–Adult, Mon–Fri 7–8pm) are meaningful. Two acceptable fixes: (a) remove `aria-hidden` and ensure proper semantic markup so a screen reader reads "17 plus years experience" etc. cleanly, or (b) keep `aria-hidden` and add a visually-hidden equivalent block for SR users. Pick (a) if the existing markup is already readable as a list; pick (b) if removing aria-hidden produces noisy SR output (e.g. raw "+" characters, "&ndash;"). Test with VoiceOver if possible.
3. Specialties `.spec--sm` decorative constellation: this is the breathing animation field — Nigel cycle 2 explicitly called it the most distinctive moment on the site. **Do NOT remove the animation. Do NOT raise opacity in a way that flattens the constellation depth.** The correct fix is `aria-hidden="true"` on the constellation container — the body text above it already conveys the same specialties to SR users. This is decorative atmosphere, not informational text.
4. Re-run axe-core after fixes. Confirm violation count decrease.
5. Update BUGS.md: mark the two items resolved with the cycle/commit hash. Footer contrast remains open as a brand-decision item.
6. **Do NOT touch footer colors.** That is brand decision territory and goes to the user via Coordinator iMessage. Three options are documented in BUGS.md.

**Guardrails (from MEMORY.md):**
- Cream/parchment/terra/forest identity preserved — no palette changes.
- Nigel never removes quality — breathing animation, parallax, glows all stay.
- Verify via browser test / VoiceOver, not theory.
- Pixel center-alignment 375/414 unchanged after edits.
- No ghost numbers / faded background numerals — explicit user memory.

**Forbidden surfaces:** all cooldowns; ALSO footer color values, ALSO the breathing animation itself.

**Exit criteria:**
- axe-core violation delta recorded (before/after)
- Hero stats aria fix shipped
- Specialties constellation given `aria-hidden` (or equivalent SR-correct treatment)
- BUGS.md updated with resolutions
- Commit + push

---

### 3. QA — Cross-viewport Playwright regression sweep

**Why:** Cycle 1 + cycle 2 shipped 17 commits across content surgery, gradient hotfixes, perf optimizations, a11y markup, and CSS class extraction. Pixel cycle 1 audited 375 + 414 post-surgery; nothing has done a full 375 / 414 / 768 / 1440 sweep since cycle 2's a11y markup landed. Risk surfaces: the new `<main>` landmark wrapping affects cascade scope, the `.about__bio-subcred` class extraction needs visual confirmation across breakpoints, and the FAQ `dt > button` markup shift could shift layout in the accordion at narrow widths.

**Instructions:**
1. Use Playwright to render live URL at four widths: 375, 414, 768, 1440 (heights: 812, 896, 1024, 900).
2. For each viewport, capture full-page screenshots. Save as `qa-cycle3-{width}.png` (overwrite any cycle 2 versions).
3. For each viewport, walk through every section in order: Nav, Hero, Approach (3 pillars), Services (rows + fee note), Specialties (breathing constellation), About (photo + bio + PA PreK-12 line + FAQ accordion), Rogers quote bridge, CTA, Contact (form + service picker chips + hours), Footer.
4. For each section, verify: (a) center alignment on 375 + 414, (b) no horizontal overflow, (c) no orphaned text lines breaking layout, (d) tap targets ≥ 44px on mobile, (e) FAQ accordion opens/closes without visual jump, (f) form service picker chips render in correct order (Individual / Group / Parenting Support / Supervision / Not sure yet).
5. Hit the Psychology Today area in contact section — confirm there is NO visible broken link, just the HTML comment placeholder (cycle 1 hotfix verification).
6. Hit the hero subhead — confirm it reads exactly `Collaborative psychotherapy for individuals and groups — ages 13 through adults.` with no "families and couples" residue.
7. Note any regressions in a QA report appended to CHANGELOG-AGENT.md as a single block.
8. **DO NOT fix anything found.** Report only. Fixes go to a future cycle with proper attribution.

**Guardrails (from MEMORY.md):**
- Pixel always audits center-alignment on mobile — explicit user preference.
- Verify via real browser rendering — Playwright screenshots required, not assumed.
- No invented content / no fabricated findings — only report what the screenshots show.
- Respectful tone in commit messages.

**Forbidden surfaces:** all of them — read-only this cycle. No HTML or CSS edits.

**Exit criteria:**
- 4 viewport screenshots committed (or referenced via path)
- Per-section pass/fail recorded for each viewport
- Phantom-fix verification: hero subhead and form picker confirmed correct
- Any regressions logged to BUGS.md (not fixed)
- CHANGELOG-AGENT.md QA entry committed

---

### 4. Coordinator — Footer contrast brand decision surfacing

**Why:** The footer color-contrast violations are the only P3 priority that an engineering agent could partially address but should not unilaterally — the muted footer recede is intentional brand. The user needs to choose between three documented options before any agent touches `.site-footer__tagline`, `.site-footer__nav a`, `.site-footer__bottom p`, or `.site-footer__bottom a`. This agent slot's job is *not* to implement — it is to surface the decision cleanly so the user can answer between cycles.

**Instructions:**
1. Read BUGS.md "A11y — Color Contrast" block in full.
2. Confirm the three options:
   - **Option A — Raise opacities to AA-passing values** (recommended values already in BUGS.md). Keeps text visible but flattens the recede.
   - **Option B — Reduce text size on the offending elements to qualify as "large text"** (3:1 ratio at 18pt+ or 14pt+ bold). Some footer items may already qualify; confirm computed sizes.
   - **Option C — Accept and document as designed-for-WCAG-AAA-non-compliance.** Footer is decorative metadata and the same info exists elsewhere on the page. Add a comment in CSS noting the conscious decision.
3. Send the user one iMessage that lists the three options crisply (target: ≤ 6 lines), with the live URL. Wait for their reply. Do NOT pre-pick.
4. When the user replies, append the decision to BUGS.md with a date and the user's verbatim choice. Cycle 4 implements (or formally accepts).
5. Do not modify any code in this cycle.

**Guardrails (from MEMORY.md):**
- ALWAYS reply via iMessage (the reply tool, not terminal).
- Always include the live link.
- Respectful tone — frame as a brand call, not a defect.
- No timezone assumptions in the message.
- No emojis.

**Forbidden surfaces:** All code. All CSS. This is a communication slot.

**Exit criteria:**
- One iMessage sent presenting the three options + live URL
- BUGS.md updated with the user's reply once received
- No commits to index.html, style.css, or main.js

---

## CYCLE 3 GUARDRAILS (apply to all agents)

1. **NO ghost numbers / large faded background numerals** — explicit user memory. Do not introduce on any pillar/section.
2. **NO new visual effects** — site already has breathing animations, parallax, gradient bridges, reveal-on-scroll. The user wants integrity over flash.
3. **NO content changes** — every fact is now true. Phantom deductions in the audit have been corrected. Do not re-edit copy.
4. **Verify via browser rendering, not theory** — cycle 1 burned 3 false-fix iterations before grounding via Playwright. Cycle 2's perf claims are unverified until cycle 3 runs Lighthouse fresh.
5. **Cream / parchment / terra / forest identity preserved** — zero color-token changes. Footer contrast goes through user.
6. **Nigel never removes quality** — animations, glows, breathing field, parallax all stay.
7. **Pixel center-alignment 375/414** — verified on every change.
8. **Respectful tone** — collaborative framing, never blame the user for customer dependencies (testimonial, Psych Today URL).
9. **Live link in any iMessage** — `https://zed0minat0r.github.io/therapist-site/`.
10. **Memory drift acknowledgement** — every agent should re-read MEMORY.md before starting and call out which entries apply in their commit message.

---

## DISPATCH SUMMARY

| # | Agent | Surface | Output | Code edits? |
|---|-------|---------|--------|-------------|
| 1 | Performance | Lighthouse cycle 3 verification | PERFORMANCE.md overwrite + JSON | No |
| 2 | Accessibility | Hero stats aria + specialties aria-hidden | 2 small markup fixes | Minimal markup only |
| 3 | QA | Playwright sweep 375/414/768/1440 | Screenshots + regression report | No |
| 4 | Coordinator | Footer contrast brand decision | iMessage + BUGS.md update | No |

**Forbidden across cycle:** Hero, About bio, Services pricing, Contact form picker, Nav brand, Rogers quote bridge, all gradient bleeds, color tokens, Razor-touched orphans, `.about__bio-subcred` class, breathing animation, footer color values.

**Customer-blocked (do NOT attempt):** Psych Today URL, real testimonial.

**Score expectation cycle 3:** unchanged (8.7) or +0.1 from a clean a11y delta. No Nigel re-score this cycle — let cycle 3 settle, then a fresh Nigel pass against the corrected audit in cycle 4.

---

## ELIGIBLE WORK NOT SCHEDULED THIS CYCLE (with rationale)

- **(c) Specialties "we" voice consolidation** — stylistic, low-leverage, and Builder/Spark are off-rotation under the score gate. Defer to cycle 5+.
- **(d) Footer contrast unilateral fix** — agent #4 is surfacing this as a user decision instead. Implementation lives in a future cycle once the user picks A/B/C.
- **(e) Specialties background subtext additional pass** — covered inside agent #2's specialties `aria-hidden` decision.
- **Builder / Spark / Refiner / Nigel** — score gate (8.7 ≥ 8.5) keeps them off rotation this cycle. No new visual work, no re-scoring against a corrected audit until at least one customer dependency clears or a fresh axis emerges.
