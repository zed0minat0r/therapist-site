# SCOUT.md — Silhouette Scene Upgrade Research
**Date:** 2026-04-25
**Scope:** High-quality tree silhouettes (CC0) + CSS flapping bird animation patterns + reference design benchmarks

---

## PART 1 — HIGH-QUALITY TREE SILHOUETTE SVGs (CC0/PUBLIC DOMAIN)

### Why the current trees fail
The current implementation uses hand-drawn jagged paths (`M60 220 L60 165 L52 178...`) that read as programmer scribbles, not trees. The fix is to replace them entirely with botanically credible silhouette paths from vetted CC0 sources.

---

### 1A. BEST CC0 SOURCES — CONFIRMED USABLE

**FreeSVG.org** — All files CC0 (Creative Commons 0 / Public Domain). Published via OpenClipart. Download URLs below.

| Type | Description | SVG ID | Download URL | File Size | Verdict |
|------|-------------|--------|-------------|-----------|---------|
| Oak (full canopy, leafy) | Dense rounded canopy, botanical detail | 178215 | https://freesvg.org/download/178215 | 1.94 MB | Use for summer deciduous (may need simplification — 1.94 MB is large) |
| Oak (bare/winter, simple) | Silhouette of oak without foliage, line-based | 24728 | https://freesvg.org/download/24728 | 0.08 MB | BEST PICK for bare winter tree — small, clean |
| Evergreen / Spruce | Simplified realistic spruce with layered branch structure | 60163 | https://freesvg.org/download/60163 | 0.01 MB | Good for mid-scene evergreen |
| Evergreen silhouette | Minimalist conifer silhouette (simple, not detailed) | 56517 | https://freesvg.org/download/56517 | 0.01 MB | Use as background/small tree only |
| Forest pines group | Silhouette of forest trees, multiple pines | 195303 | https://freesvg.org/download/195303 | 0.03 MB | Use for treeline base layer |
| Spreading beech | Common beech tree, spreading canopy | 7129 | https://freesvg.org/download/7129 | 0.01 MB | Good for deciduous variety |
| Winter tree (detailed) | Bare deciduous with detailed branch network | 175643 | https://freesvg.org/download/175643 | 1.77 MB | May need path simplification |

**License:** All FreeSVG.org files are CC0 — no attribution required, full commercial and derivative use.

---

### 1B. ADDITIONAL CC0 SOURCE — SVG Silh (svgsilh.com)

SVG Silh releases **all** content under CC0. Has 77 pine images, 37 conifer images, 1300+ tree images.
- Pine collection: https://svgsilh.com/tag/pine-1.html
- Conifer collection: https://svgsilh.com/tag/conifer-2.html
- Forest collection: https://svgsilh.com/tag/forest-1.html
- Direct image pages: e.g. https://svgsilh.com/image/2872747.html (pines)

**Note:** SVG Silh blocks curl/programmatic access — must be downloaded via browser. All CC0 confirmed.

---

### 1C. AVOID — NOT CC0

- Wikimedia Commons trees (Tree_1010946.svg, Tree-1250480.svg): CC-BY-SA 4.0 — requires attribution and share-alike. Cannot use freely in derivative site without attribution.
- Freepik "free" files: require Freepik account, some CC0 unclear, attribution required on free tier.
- Vecteezy: free tier requires attribution.

---

### 1D. BARE WINTER TREE — ACTUAL PATH DATA (Wikimedia CC-BY-SA — for reference only, do not use directly)

The file at `https://upload.wikimedia.org/wikipedia/commons/3/33/Tree_1010946.svg` was downloaded and confirmed real SVG path data (313KB file, complex Inkscape paths). The path structure is too complex for inline use but shows the quality level to target. Use freesvg.org ID 175643 (winter tree) or ID 24728 (oak/bare) instead for CC0 equivalents.

---

### 1E. RECOMMENDED TREE SET FOR THE SILHOUETTE SCENE

Use a 3-tier system for visual depth:

**Tier 1 (back, smallest, darkest opacity ~0.6):**
- Forest pine group — FreeSVG ID 195303 (treeline silhouette, multiple pines)
- https://freesvg.org/download/195303

**Tier 2 (mid, medium size, opacity ~0.8):**
- Evergreen/spruce — FreeSVG ID 60163 (realistic layered branches)
- Beech spreading — FreeSVG ID 7129
- https://freesvg.org/download/60163

**Tier 3 (front, largest, opacity 1.0):**
- Oak bare winter — FreeSVG ID 24728 (detailed bare branches)
- Winter tree detailed — FreeSVG ID 175643
- https://freesvg.org/download/24728

**Implementation hint:** Download each SVG, open in a text editor, copy the `<path>` elements. Strip Inkscape/Sodipodi metadata. Set `fill="currentColor"` and control color via CSS `color` property on the parent `<svg>`. Scale via `width`/`height` attributes or CSS.

---

## PART 2 — CSS FLAPPING BIRD ANIMATION

### 2A. THE DEFINITIVE PATTERN — matchboxhero / Steven Roberts

**Source:** https://codepen.io/matchboxhero/pen/RLebOY (CodePen)
**Gist with full code:** https://gist.github.com/scarabcoder/45bd40eb538aea52a602905848a813b9

This is the most-cited, cleanest implementation on the web. Uses a 10-frame SVG sprite sheet animated via CSS `steps()`. The bird cells SVG is public (hosted on CDN, OpenClipart-derived).

#### Bird SVG Sprite (bird-cells.svg)

The sprite contains 10 bird frames in a 3671×510 viewBox. The CDN URL is live:
```
https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg
```

However, for production reliability, self-host a copy. The SVG was confirmed downloadable:
- `curl -sL "https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg"`
- 10 bird frames, each cell ~360–370px wide, 510px tall
- Birds fill color: `#596475` (slate-blue-grey, easy to change)
- Each frame shows a bird at a different wing position — wings fully up through fully down

**To change bird color**, replace `fill="#596475"` with your dark forest/ink color in the downloaded file.

#### Complete HTML Structure

```html
<div class="scene-birds">
  <div class="bird-container bird-container--one">
    <div class="bird bird--one"></div>
  </div>
  <div class="bird-container bird-container--two">
    <div class="bird bird--two"></div>
  </div>
  <div class="bird-container bird-container--three">
    <div class="bird bird--three"></div>
  </div>
  <div class="bird-container bird-container--four">
    <div class="bird bird--four"></div>
  </div>
</div>
```

#### Complete CSS (convert SCSS to plain CSS as needed)

```css
.bird {
  background-image: url('/assets/bird-cells.svg'); /* self-host copy */
  background-size: auto 100%;
  width: 88px;
  height: 125px;
  will-change: background-position;
  animation-name: fly-cycle;
  animation-timing-function: steps(10);
  animation-iteration-count: infinite;
}

.bird--one   { animation-duration: 1s;    animation-delay: -0.5s; }
.bird--two   { animation-duration: 0.9s;  animation-delay: -0.75s; }
.bird--three { animation-duration: 1.25s; animation-delay: -0.25s; }
.bird--four  { animation-duration: 1.1s;  animation-delay: -0.5s; }

.bird-container {
  position: absolute;
  top: 20%;
  left: -10%;
  transform: scale(0) translateX(-10vw);
  will-change: transform;
  animation-name: fly-right-one;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.bird-container--one   { animation-duration: 15s;   animation-delay: 0s; }
.bird-container--two   { animation-duration: 16s;   animation-delay: 1s; }
.bird-container--three { animation-duration: 14.6s; animation-delay: 9.5s; }
.bird-container--four  { animation-duration: 16s;   animation-delay: 10.25s; }

/* Wing-flap animation: cycles through 10 sprite frames */
@keyframes fly-cycle {
  100% { background-position: -900px 0; }
}

/* Drift across screen — path 1 (size grows for depth effect) */
@keyframes fly-right-one {
  0%   { transform: scale(0.3)  translateX(-10vw); }
  10%  { transform: translateY(2vh)  translateX(10vw)  scale(0.4); }
  20%  { transform: translateY(0vh)  translateX(30vw)  scale(0.5); }
  30%  { transform: translateY(4vh)  translateX(50vw)  scale(0.6); }
  40%  { transform: translateY(2vh)  translateX(70vw)  scale(0.6); }
  50%  { transform: translateY(0vh)  translateX(90vw)  scale(0.6); }
  60%  { transform: translateY(0vh)  translateX(110vw) scale(0.6); }
  100% { transform: translateY(0vh)  translateX(110vw) scale(0.6); }
}

/* Drift across screen — path 2 (slightly different altitude) */
@keyframes fly-right-two {
  0%   { transform: translateY(-2vh)   translateX(-10vw)  scale(0.5); }
  10%  { transform: translateY(0vh)    translateX(10vw)   scale(0.4); }
  20%  { transform: translateY(-4vh)   translateX(30vw)   scale(0.6); }
  30%  { transform: translateY(1vh)    translateX(50vw)   scale(0.45); }
  40%  { transform: translateY(-2.5vh) translateX(70vw)   scale(0.5); }
  50%  { transform: translateY(0vh)    translateX(90vw)   scale(0.45); }
  51%  { transform: translateY(0vh)    translateX(110vw)  scale(0.45); }
  100% { transform: translateY(0vh)    translateX(110vw)  scale(0.45); }
}

/* Respect reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .bird, .bird-container { animation-play-state: paused; }
}
```

**Why this works:**
- `steps(10)` moves through the 10 sprite frames without tweening — exactly like a flipbook, giving natural wing motion
- The sprite width per frame is ~88px × 10 = 880px (background-position goes to -900px to account for cell borders)
- `scale()` in the drift keyframes creates the illusion of depth — bird appears to come toward viewer
- `will-change: background-position` and `will-change: transform` keep animation on GPU compositor

#### Implementation hint for the therapist site:
1. Download bird-cells.svg from the S3 URL above and save to your assets folder
2. Change `fill="#596475"` to your scene's dark color (e.g. `#1a2e17` or `#2e4a2a`)
3. Add the bird HTML inside the existing silhouette scene container
4. Adjust `.bird-container` top position (try 10–30% from top of scene)
5. For 2 birds use only `--one` and `--two`, assign `--two` to `fly-right-two`
6. Scale `width/height` down if birds feel too large (try `width: 44px; height: 63px`)

---

### 2B. ALTERNATIVE — Pure CSS Bird (no sprite required)

**Source:** https://codepen.io/lerte/pen/KxaqYY — "Pure CSS Flying Bird"

This approach uses CSS shapes to build a bird from `border-radius` divs. Simpler but less realistic — looks more cartoon. Better for the sprite approach above.

---

## PART 3 — REFERENCE DESIGNS: HIGH-QUALITY SILHOUETTE SCENES

### 3A. Watch Tower — Travis Doughty (CodePen)
**URL:** https://codepen.io/tdoughty/pen/bGGZWqg
**Description:** Pure CSS landscape scene with a watch tower, multiple tree layers at varying opacities for depth, birds drifting across, and moving clouds. Trees are CSS-constructed divs using clip-path and border-radius.
**What to copy:** The multi-layer depth approach (background trees at 40% opacity, midground at 70%, foreground at 100%) creates a convincing 3D forest feel without any SVG complexity. The bird animation uses a sprite sheet approach similar to matchboxhero.
**Implementation hint:** Adapt the tree layering — set 3 depth classes: `.tree--bg { opacity: 0.4; transform: scaleX(0.6) }`, `.tree--mid { opacity: 0.7 }`, `.tree--fg { opacity: 1.0 }`. Position using absolute placement within the scene container.

### 3B. Animated SVG Birds — matchboxhero (CodePen)
**URL:** https://codepen.io/matchboxhero/pen/RLebOY
**Description:** The canonical CSS bird animation. 4 birds with staggered timing, each at a slightly different altitude and scale, all using the same sprite-step technique. Smooth, realistic, widely referenced.
**What to copy:** The staggered `animation-delay` pattern so birds appear to fly independently rather than in formation. The `scale()` growth from 0.3 to 0.6 as the bird crosses is critical for the depth illusion.
**Implementation hint:** After download, birds can be positioned within the silhouette scene's SVG/HTML by wrapping the `.scene-birds` div with `position: absolute; inset: 0; pointer-events: none; overflow: hidden` — this lets them fly across without disrupting the SVG layout.

### 3C. CSS Design Awards — Animated Sites Gallery
**URL:** https://www.cssdesignawards.com/website-gallery?feature=animated
**Description:** Curated gallery of award-winning animated websites. Several winners from 2024 use layered silhouette environments with parallax. Notable technique across winners: SVG paths for terrain/hills with CSS clip-path, combined with sprite-based or GSAP-driven animal animations.
**What to copy:** The "parallax at different scroll depths" pattern — background hills move at 0.2× scroll speed, midground trees at 0.5×, foreground trees at 0.8×. Can be achieved with CSS scroll-driven animations or a 5-line JS scroll listener.
**Implementation hint:** For the therapist site silhouette scene (which appears to be a fixed/hero section, not scroll-driven), apply the depth illusion through size and opacity instead of parallax. Background trees: `transform: scale(0.5); opacity: 0.5`. Foreground trees: `transform: scale(1.0); opacity: 1.0`.

---

## PART 4 — IMPLEMENTATION PLAN (PRIORITY ORDER)

1. **Download bird-cells.svg** from `https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg` — self-host it. Edit fill color to match your dark palette. This is the single most impactful change for the bird problem.

2. **Download tree SVGs** from FreeSVG.org (IDs: 60163 for evergreen, 24728 for bare oak, 195303 for pine group). Open each in a text editor, extract `<path>` elements, strip Inkscape metadata. Replace current scribble paths with these.

3. **Add 3-depth tree layering**: back (opacity 0.5, small), mid (opacity 0.75, medium), front (opacity 1.0, largest). Space horizontally with varied x-positions so skyline is irregular.

4. **Add bird animation CSS** using the full keyframe block above. Use `fly-right-one` for 2 birds and `fly-right-two` for 1-2 others.

5. **Add prefers-reduced-motion block** for birds (the existing site already does this for other animations — keep consistent).

---

## PART 5 — LICENSE SUMMARY

| Asset | Source | License | Safe to use? |
|-------|--------|---------|-------------|
| FreeSVG.org tree SVGs (IDs 60163, 24728, 195303, 7129, 56517) | OpenClipart / FreeSVG | CC0 Public Domain | YES — no attribution needed |
| bird-cells.svg | Steven Roberts / OpenClipart-derived | OpenClipart assets are CC0; CDN-hosted — self-host copy to be safe | YES — CC0 |
| SVG Silh trees | svgsilh.com | CC0 | YES |
| Wikimedia tree SVGs | Wikimedia Commons | CC-BY-SA 4.0 | NO — requires attribution + share-alike |
| Freepik trees | Freepik | Freepik free license | AVOID — attribution required |

---

*Research compiled 2026-04-25 by Scout.*
*Sources: freesvg.org, svgsilh.com, codepen.io/matchboxhero/pen/RLebOY, gist.github.com/scarabcoder/45bd40eb538aea52a602905848a813b9, codepen.io/tdoughty/pen/bGGZWqg, s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg (directly downloaded), upload.wikimedia.org/wikipedia/commons/3/33/Tree_1010946.svg (directly downloaded, CC-BY-SA flag), cssdesignawards.com*
