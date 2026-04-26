# AGENT-PLAN — Cycle 2

**Date:** 2026-04-26
**Coordinator:** dispatch
**Project:** Laura Spaulding Therapist Site
**Live:** https://zed0minat0r.github.io/therapist-site/
**Cycle 1 Score:** 8.6 / 10 (post-surgery, conversion-friction axis)
**Cycle 2 Theme:** Engineering quality over visual polish — perf, a11y, dead code, integrity
**Score gate:** 8.6 is just under the 8.5 polish-mode floor; full builder/spark not invoked because cycle 1 was already a content-surgery cycle and the user explicitly wants integrity over flash this cycle.

---

## ONE-LINE RATIONALE

Cycle 1 closed a 5-error factual surgery and 5 follow-up hotfixes (gradient/z-index iteration). The site is honest, animated, color-correct, and 8.6. Customer dependencies (real testimonial, Psych Today URL) block any score ceiling above ~9.0. Cycle 2 should ship low-risk engineering wins (perf baseline, formal a11y pass, orphan-CSS razor, inline-style extraction) and resist adding visual effects.

---

## SCHEDULED AGENTS (ordered)

### 1. Razor — orphan CSS pass + inline-style extraction

**Why:** Pixel cycle 1 flagged `.gb-testimonials-cta`, `.contact__parking`, `.contact__map`, `.contact__map iframe` as selectors with no matching HTML (confirmed by Coordinator: 0 HTML matches across all 4). 10+ commits worth of edits since the last razor. Also extract the `style="font-size:0.875em; opacity:0.8;"` inline on `.about__body` PA PreK-12 line into a proper `.about__bio-subcred` class (Pixel cycle 1 explicit recommendation).

**Instructions:**
1. Delete `.gb-testimonials-cta` rule (style.css line ~2140) — orphan
2. Delete `.contact__parking` rule (style.css line ~1324 + mobile line ~1890) — orphan
3. Delete `.contact__map` and `.contact__map iframe` rules (style.css ~1335, ~1341, mobile ~1893) — orphan
4. Verify no other `trust-strip`, `trust-q`, or testimonials selectors remain — grep first
5. Add `.about__bio-subcred { font-size: 0.875em; opacity: 0.8; }` class
6. Replace inline `style="font-size:0.875em; opacity:0.8;"` on PA PreK-12 line in index.html with class addition
7. Diff and verify nothing else broke. **DO NOT touch any cooldown surface.**

**Guardrails (from MEMORY.md):**
- Cream/parchment/terra/forest identity — no color changes
- No new visual effects (user wants integrity, not flash this cycle)
- Verify visual rendering after change — load the page, confirm PA PreK-12 line still looks identical
- Respectful tone in any commit messages

**Forbidden surfaces:** Hero, About bio (copy), Services pricing, Contact form picker, Nav brand, Carl Rogers quote bridge, all gradient bleeds, color tokens

**Exit criteria:**
- 4 orphan rules removed
- 1 inline-style replaced with class
- Visual diff: no rendering change at 375 / 414 / 1280
- Commit + push

---

### 2. Performance — Lighthouse baseline + low-risk wins

**Why:** No performance pass has ever been run on this site. Score axis next cycle could be perf, but we have no baseline. Establish one and ship the obvious wins (defer attributes on non-critical scripts, lazy-load audit on images, font preload audit). Don't chase aggressive optimizations.

**Instructions:**
1. Run Lighthouse via headless Chrome on live URL (mobile + desktop) — record scores: Performance / Accessibility / Best Practices / SEO
2. Capture LCP, CLS, TBT, Speed Index numbers
3. Audit each image for `loading="lazy"` (above-fold should NOT be lazy; below-fold should be)
4. Audit `<script>` tags for `defer` / `async` where main.js eligibility is reasonable
5. Audit `<link rel="preload">` for the hero image and primary fonts
6. Check for unused CSS via Coverage tab (note size only, do NOT delete used-but-late selectors — that's a perf trap)
7. Ship ONLY low-risk wins: lazy-load corrections, defer where verified safe, font preload if the LCP element is text. **Do not refactor CSS or JS architecture.**
8. Document baseline + wins in commit message
9. **Verify changes via browser rendering** (the cycle 1 z-index lesson — never claim a fix without seeing it)

**Guardrails (from MEMORY.md):**
- Verify visual rendering, not theory — Playwright or a headless screenshot
- No content / animation removal — Nigel never removes quality
- Reduced-motion preserved
- Pixel center-alignment unchanged at 375/414

**Forbidden surfaces:** Same cooldowns as Razor

**Exit criteria:**
- Lighthouse scores recorded in commit message
- Baseline doc committed (BASELINE.md or appended to AUDIT.md — coordinator preference: append a `## Performance Baseline` section to AUDIT.md, no new file)
- 1–3 low-risk perf wins shipped
- LCP / CLS not regressed

---

### 3. Accessibility — formal axe-core audit + WCAG 2.1 AA pass

**Why:** Nigel cycle 1 noted a11y additions occurred during builds but no formal axe-core / WCAG run has happened. With the content stable, a formal audit is warranted. Score ceiling under ~9 anyway until customer dependencies clear, so a11y improvements ship without visible regression risk.

**Instructions:**
1. Run axe-core (via @axe-core/cli or playwright/axe) against live URL — record all violations
2. For each violation, classify: contrast, keyboard, ARIA, semantic, label, focus
3. Fix all serious + critical violations:
   - Contrast (WCAG 1.4.3) — sage-on-cream and terra-on-cream ratios
   - Focus-visible rings on all interactive elements
   - aria-label completeness on icon-only buttons / links
   - Form labels / aria-describedby on contact form
   - Heading order (h1 → h2 → h3 with no skips)
   - Skip-to-content link (if missing)
4. Test keyboard nav: Tab through entire page, verify focus order matches visual order, no traps
5. Test with VoiceOver mobile simulation if available
6. **DO NOT change colors that affect identity** — if a contrast violation requires palette change, FLAG it for next cycle, don't unilaterally darken sage to terra-replacement
7. Update commit message with before/after axe scores

**Guardrails (from MEMORY.md):**
- Cream/parchment/terra/forest identity — flag contrast issues, do not silently change palette
- Animations stay (Nigel never removes quality) — only adjust prefers-reduced-motion behavior if axe-flagged
- Pixel center alignment 375/414 unchanged
- Verify rendering after each change (browser-test, don't trust theory)

**Forbidden surfaces:** Same cooldowns as above; ALSO do not modify color tokens (refer to standing memory)

**Exit criteria:**
- axe-core report with 0 serious/critical violations
- Keyboard nav traversal pass
- Heading hierarchy verified
- AUDIT.md appended with `## Accessibility Baseline` section
- Commit + push

---

### 4. BUGS.md scaffold + cycle-2 housekeeping

**Why:** Site has no BUGS.md. With customer dependencies (Psych Today URL, real testimonial) blocked on the user, plus any open items surfaced this cycle, a single tracking doc beats scattered TODOs. Lightweight — not a full project management overhaul.

**Instructions:**
1. Create BUGS.md at project root
2. Document open items:
   - **CUSTOMER-1** — Real Psychology Today URL needed (currently the row is hidden / link removed; restore when received)
   - **CUSTOMER-2** — Real testimonial(s) needed for social proof block (Nigel cycle 1 priority 3)
   - **NIGEL-1** — Generic "Start here →" CTA on every services row (Nigel cycle 1, not escalated, future polish)
   - Anything Razor / Performance / Accessibility flag this cycle
3. Format: ID, Severity, Owner, Description, Found-in-Cycle, Status
4. Keep it short — one screen of markdown
5. Commit + push

**Guardrails:**
- No invented bugs — only items from real audit notes
- Frame customer items respectfully — these are dependencies, not blockers in a blame sense
- Do NOT add code-style bugs you discover wandering — stay scoped

**Forbidden surfaces:** all of them — this is doc only

**Exit criteria:**
- BUGS.md exists with 4–8 entries
- CHANGELOG-AGENT.md appended with entry
- Commit + push

---

## CYCLE 2 GUARDRAILS (apply to all agents)

1. **NO ghost numbers / large faded background numerals** — explicit user memory, do not introduce on any pillar/section
2. **NO new visual effects** — site already has breathing animations, parallax, reduced-motion. Don't add more.
3. **NO content changes** — every fact is now true; no agent should touch copy this cycle except to fix typos
4. **Verify via browser rendering, not theory** — cycle 1 burned the user with 3 false-fix claims before the real z-index cause was diagnosed via Playwright
5. **Cream/parchment/terra/forest identity preserved** — no color changes without flagging
6. **Pixel center-alignment 375/414** — verified after every change
7. **Nigel never removes quality** — animations, glows, effects stay
8. **Respectful tone** — collaborative framing, never blame the user for customer dependencies
9. **Live link in any iMessage update** — https://zed0minat0r.github.io/therapist-site/

---

## DISPATCH SUMMARY

| # | Agent | Surface | Output |
|---|-------|---------|--------|
| 1 | Razor | style.css orphans + index.html inline-style | 4 deletes, 1 class extraction |
| 2 | Performance | Lighthouse + low-risk wins | Baseline + 1–3 wins |
| 3 | Accessibility | axe-core + WCAG 2.1 AA | 0 serious/critical violations |
| 4 | Coordinator | BUGS.md scaffold | Tracking doc |

**Forbidden across cycle:** Hero, About bio, Services pricing, Contact form picker, Nav brand, Carl Rogers quote bridge, all gradient bleeds, color tokens.

**Customer-blocked (do NOT attempt):** Psych Today URL fix, real testimonial.

**Score expectation cycle 2:** unchanged or +0.1. Real lift comes when customer dependencies clear.
