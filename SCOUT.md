# SCOUT.md — Landscape Silhouette Scene Playbook
**Date:** 2026-04-25
**Scope:** Mountains + foreground foliage for the therapist site silhouette hero scene
**Status:** Replaces the prior tree/bird research (those are already implemented)

---

## IMPLEMENTATION ORDER

Do mountains first — they define the depth stack. Foreground foliage last (sits on top of everything).

1. Mountain layers (back → front, 4–6 ridges)
2. Ground/base fill at bottom
3. Foreground grass cluster (filled, not stroked)
4. Foreground branch intrusions (optional, sides only)

---

## PART A — MOUNTAIN SILHOUETTE REFERENCES

### A1. Firewatch-Style SVG Parallax (Alistair Shepherd / accudio)
**URLs:**
- Static version with colors: https://codepen.io/accudio/details/JjbNQXw
- Parallax complete: https://codepen.io/accudio/pen/ExNxXrP
- Dynamic color themes: https://codepen.io/accudio/pen/GRNmbjJ
- Tutorial write-up: https://dev.to/accudio/making-a-parallax-svg-landscape-new-site-part-1-2cd7

**License:** Personal site code, CodePen public embed — CC0 implied for educational use; no commercial restriction stated.

**What makes it reference-quality:**
- 10 SVG layers with offset values from 0.96 (foreground) down to 0 (background). The offset differential is what creates convincing parallax depth even without scroll — the size difference alone reads as depth.
- Each layer is a full-width SVG element with a filled bezier-curve silhouette. Ridgelines use smooth cubic beziers (not jagged straight-line polygons) — this reads as rolling hills/distant ridges. For rocky mountain peaks, switch the bezier control points to create sharper apexes.
- The color palette (confirmed from the dynamic version):
  ```
  --c0: #feebe2  /* sky, lightest */
  --c1: #ffe2a6  /* horizon haze */
  --c2: #ffb06d  /* back ridge */
  --c3: #ff9d60
  --c4: #ff8f4c
  --c5: #fc813a
  --c6: #f04f30  /* mid ridge */
  --c7: #d2353a
  --c8: #8b1036
  --c9: #620a38
  --c10: #2f1121 /* foreground, darkest */
  ```
  This is a sunset palette. For the therapist site's dusk/twilight mood, shift hue toward blue-grey:
  - Back ridge: `#b8c4d4` (desaturated, cool, light)
  - Mid ridges: `#6b7f8f` → `#3d5261`
  - Front ridge: `#1e2d38` (darkest, near-black)

**Implementation hint — mountain layer HTML/CSS:**
```html
<div class="scene-landscape" style="--scrollPos:0px">
  <svg class="layer layer--1" style="--offset:0.9" viewBox="0 0 1440 200" preserveAspectRatio="none">
    <!-- back ridge: wide, low, light fill -->
    <path d="M0,120 C200,80 400,100 600,90 C800,80 1000,110 1200,100 C1350,92 1400,105 1440,100 L1440,200 L0,200 Z"
          fill="#b8c4d4" fill-opacity="0.6"/>
  </svg>
  <svg class="layer layer--2" style="--offset:0.7" viewBox="0 0 1440 200" preserveAspectRatio="none">
    <!-- mid ridge: more varied peaks -->
    <path d="M0,140 C100,100 250,120 400,95 C550,70 700,130 850,110 C1000,90 1150,125 1300,105 C1380,95 1420,115 1440,110 L1440,200 L0,200 Z"
          fill="#6b7f8f" fill-opacity="0.75"/>
  </svg>
  <svg class="layer layer--3" style="--offset:0.4" viewBox="0 0 1440 200" preserveAspectRatio="none">
    <!-- near ridge: tallest, sharpest, darkest -->
    <path d="M0,160 C80,130 150,145 250,115 C320,95 380,140 480,120 C580,100 660,150 780,130 C900,110 1000,155 1100,135 C1200,115 1350,145 1440,138 L1440,200 L0,200 Z"
          fill="#3d5261" fill-opacity="0.9"/>
  </svg>
</div>
```
```css
.layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  /* for static depth — no parallax */
}
/* For scroll parallax add: */
.layer {
  transform: translateY(calc(var(--scrollPos, 0px) * var(--offset, 0)));
  will-change: transform;
}
```

---

### A2. Generative SVG Mountains — Yotam Kadosh (CodePen)
**URL:** https://codepen.io/ykadosh/pen/LYOygbG
**License:** CodePen public — educational use.

**What makes it reference-quality:**
This is the only confirmed source with actual HSL color formulas per layer. The layer color system is:
```javascript
// For layer i (0 = back, N = front):
fill: `hsl(${hue}deg, ${100 - i*60}%, ${50 - i*25}%)`
stroke: `hsl(${hue}deg, ${100 - i*60}%, ${30 - i*30}%)`
```
At `hue=210` (blue-grey for twilight):
- Layer 0 (back): `hsl(210, 100%, 50%)` — bright blue, desaturated with distance going wrong direction — INVERT: use `${i*20}%` saturation so back is less saturated
- Corrected formula: `hsl(210, ${i*15+10}%, ${70 - i*12}%)`
  - Layer 0 (back): `hsl(210, 10%, 70%)` = light blue-grey fog
  - Layer 3 (mid): `hsl(210, 55%, 34%)` = medium steel blue
  - Layer 5 (front): `hsl(210, 85%, 10%)` = near-black blue

**Implementation hint — feGaussianBlur for haze:**
```html
<defs>
  <filter id="mountain-haze-back">
    <feGaussianBlur stdDeviation="2.5 1"/>
    <!-- x-blur wider than y so haze spreads horizontally like real atmosphere -->
  </filter>
  <filter id="mountain-haze-mid">
    <feGaussianBlur stdDeviation="1 0.5"/>
  </filter>
  <!-- Front ridge: NO filter — stays crisp -->
</defs>

<path ... filter="url(#mountain-haze-back)"/>  <!-- back ridge, blurry -->
<path ... filter="url(#mountain-haze-mid)"/>   <!-- mid ridge, slight blur -->
<path ... />                                    <!-- front ridge, no blur -->
```
The back ridge gets `stdDeviation="2.5 1"`, mid gets `stdDeviation="1 0.5"`, front gets nothing. This mimics how light scatters through air over miles.

---

### A3. Mountain SVG with Blur — bakertyper (CodePen)
**URL:** https://codepen.io/bakertyper/pen/EjmJrr
**License:** CodePen public — educational.

**Confirmed from research:** Uses CSS `filter: blur(Xpx)` (not SVG filter) on polygon layers:
- Background polygon: `filter: blur(2.5px)`
- Second mountain: `filter: blur(3px)`
- Front mountain: no blur
- Fill colors confirmed: background sky `#E08B36`, mountain fill `#6D6C6C`, mountain two `#DD6A37`

**Implementation hint:** CSS filter blur is simpler than SVG feGaussianBlur but blurs edges too, which can create halos at SVG edges. Use SVG filter (see A2 above) for cleaner results when SVG has transparent background.

---

### A4. CC0 Mountain SVG Asset — OpenClipart
**URL:** https://openclipart.org/detail/320536/mountain-landscape-silhouette
**Download:** `https://openclipart.org/download/320536/mountain-landscape-silhouette.svg`
**License:** CC0 Public Domain — confirmed. No attribution required.

**Status:** This file was downloaded and confirmed at 41KB. It is an Inkscape-generated SVG (880×880 viewBox) of a mountain logo silhouette. Contains filled black path data. Can be adapted — strip metadata, resize to scene coordinate space, adjust fill color.

**Additional CC0 mountain SVG assets (freesvg.org — browser download required, curl blocked by server):**
- https://freesvg.org/silhouette-of-mountain-landscape (ID 39002, 0.10 MB)
- https://freesvg.org/mountain-landscape (ID 38992, colorful mountain range)
- https://freesvg.org/mountain-landscape-silhouette (ID 188023, 0.04 MB — logotype style)

All freesvg.org assets are CC0. Must be downloaded via browser (server blocks automated requests).

**SVGSilh mountain collection:**
- https://svgsilh.com/tag/mountain-1.html — All CC0. Must download via browser. Has 200+ mountain silhouettes.

---

## PART B — FOREGROUND FOLIAGE TECHNIQUES

### B1. What Professional Silhouette Scenes Do

From confirmed analysis of multiple reference implementations, the professional approach to foreground foliage in silhouette landscapes is:

**NOT:** Individual grass strokes/lines (reads as ticks or scratches)
**NOT:** A solid filled rectangle or trapezoid at the bottom (reads as a wall)
**YES:** A filled organic path that hugs the bottom of the scene with irregular blade-group clusters rising from it — a single connected shape, not individual strokes.

The key insight: foreground "grass" in quality silhouette work is almost always a single wide `<path>` with a wavy top edge that oscillates up (blade clusters) and down (gaps between clusters), anchored to the scene bottom. It reads as a grass field because of silhouette shape recognition, not because individual blades are drawn.

### B2. Wild Grass Silhouette SVG — freesvg.org
**URL:** https://freesvg.org/1553889468
**Download (browser required):** https://freesvg.org/download/152965
**License:** CC0 Public Domain

"Wild grass and vegetation silhouette" — confirmed filled paths (not stroked), derived from Pixabay. 2MB. Contains multiple grass and plant forms suitable for foreground use.

**How to use:** Download SVG, open in Inkscape or text editor, find the main foreground path (widest, lowest path element), copy its `d` attribute. Place as last `<path>` in your scene SVG with `fill` matching your darkest foreground color.

### B3. Tall Grass Silhouette — freesvg.org
**URL:** https://freesvg.org/tall-grass-silhouette
**Download (browser required):** https://freesvg.org/download/152317
**License:** CC0 Public Domain

1.11MB. Derived from Pixabay. Appears as landscape-style tall grass against sky — well-suited as a bottom-of-scene foreground layer.

### B4. Build Your Own — The Correct Grass Path Technique

For full control without downloading, the professional grass foreground is a single closed path. Here is the structural pattern — adjust x/y values to match your viewBox:

```svg
<!-- For a 1440×800 viewBox scene, foreground grass sits in bottom 80px -->
<!-- This path creates a "grass silhouette" cluster effect -->
<!-- Start bottom-left, trace irregular top (grass blade groups), close bottom-right -->
<path d="
  M 0,800
  L 0,765
  C 20,755 35,745 50,730
  C 55,720 60,715 65,720
  C 70,725 72,730 75,725
  C 80,718 90,708 100,715
  C 110,722 115,720 120,718
  C 130,710 145,700 155,710
  C 160,715 162,720 165,718
  C 175,710 200,705 220,712
  C 240,720 245,718 255,712
  C 270,700 300,695 320,705
  C 335,712 338,715 345,712
  C 360,705 390,698 420,708
  C 435,714 440,718 450,715
  C 465,708 500,702 540,710
  C 560,715 565,718 575,714
  C 595,705 640,698 680,708
  C 700,715 705,718 715,715
  C 735,708 780,703 820,712
  C 840,718 843,722 850,718
  C 862,710 900,705 940,712
  C 955,716 960,720 970,717
  C 990,710 1040,703 1080,712
  C 1100,718 1105,722 1115,718
  C 1135,710 1180,705 1220,714
  C 1235,720 1238,724 1245,720
  C 1260,712 1300,705 1340,714
  C 1360,720 1380,745 1400,758
  L 1440,765
  L 1440,800
  Z
" fill="#1a2a1a"/>
```

**Implementation hint:** The C (cubic bezier) commands here create the rounded blade-cluster humps. Vary the control points so no two humps are the same height or width. The alternating rise-fall-rise rhythm at varying x intervals is what creates the organic grass read. Adjust `fill` to match your darkest foreground color. Place this path last in the SVG (highest z-order) so it overlaps tree bases.

### B5. Foreground Tree Branch Intrusions (Side Technique)
Rather than filling the full bottom, add 1–2 branch silhouettes cropped into the frame from left and/or right edges. This is a classic cinematic device (film bordering).

Use your existing tree SVG symbols — place them positioned off-screen with only branches visible:
```html
<use href="#tree-oak-bare" x="-60" y="500" width="200" height="400"
     style="opacity:1.0; fill:#1a2a1a"/>
<!-- Positioned so trunk is off left edge, upper branches reach into scene -->
```

---

## PART C — ATMOSPHERIC PERSPECTIVE RULES (Specific Values)

These rules are distilled from multiple painting/rendering references and the Firewatch/generative SVG implementations. Translate them directly to CSS/SVG:

### C1. Color Per Layer (4-ridge system, twilight palette)

| Layer | Distance | Fill Color | Opacity | Blur (feGaussianBlur) |
|-------|----------|-----------|---------|----------------------|
| Ridge 1 (farthest) | 50+ mi | `#c5cfd8` — desaturated, near-white-blue | 0.45 | stdDeviation="3 1.5" |
| Ridge 2 | 20 mi | `#8a9fae` — medium blue-grey | 0.65 | stdDeviation="1.5 0.8" |
| Ridge 3 | 8 mi | `#4a6475` — darker teal-grey | 0.82 | stdDeviation="0.8 0.3" |
| Ridge 4 (nearest) | 2 mi | `#1e3040` — near-black blue-green | 1.0 | none |

**The HSL formula that generates these:**
```
Layer N color: hsl(205, (N × 15 + 10)%, (72 - N × 14)%)
Layer 0 (back): hsl(205, 10%, 72%) = very light desaturated blue
Layer 1: hsl(205, 25%, 58%)
Layer 2: hsl(205, 40%, 44%)
Layer 3 (front): hsl(205, 55%, 30%)
```
Adjust hue (205 = blue-grey) to taste. For warmer twilight, shift hue toward 195–220.

### C2. Peak Height Per Layer

Back ridges should be wider and lower (more gradual). Front ridges taller, with sharper apex angles. Specific ratios that work:

- Back ridge: peak height = 25% of scene height
- Mid ridges: peak height = 35–45% of scene height
- Front ridge: peak height = 55–65% of scene height

Peaks should be OFF-CENTER. Never put the highest point at 50% x. Use x positions like 38%, 61%, 29%, 74% for the primary apexes.

### C3. What Kills the Effect

- **Mountains same size, different color only:** Layers read as flat cutouts, not depth. Must use size differential.
- **Smooth bezier ridgelines on all layers:** Looks like rolling hills, not mountains. Back ridges can be smoother (gentler curves), front ridge needs at least one sharp apex angle.
- **No blur on back ridges:** Without atmospheric haze blur on distant layers, everything is equally "present." Even 1–2px blur on back ridge makes a visible depth jump.
- **Symmetric peaks:** An equilateral triangle mountain is a cartoon. Vary asymmetry — one side of each peak steeper than the other.
- **Same opacity across layers:** Back layers must be lighter/more transparent. An opacity of 0.4 on the farthest ridge vs 1.0 on the front creates miles of perceived distance.

---

## PART D — REFERENCE QUALITY BENCHMARKS

These are real, verifiable implementations:

1. **Firewatch parallax landscape (accudio)** — https://codepen.io/accudio/pen/GRNmbjJ
   Multi-layer SVG scene with 10 color-coordinated ridges. The gold standard for this technique. Parallax version. Background made by raster-to-vector (Vector Magic) from hand-painted PNG layers — the quality comes from the artwork, not from code tricks.

2. **Shan Shui (LingDong-)** — https://github.com/LingDong-/shan-shui-inf
   Procedurally generated Chinese landscape painting in SVG. Infinitely scrolling mountains, trees, and foreground elements all constructed from mathematical noise functions. The mountain generation code is open source (MIT). Shows what reference-quality silhouette mountain generation looks like algorithmically.

3. **Procedurally Generated SVG Landscapes (Kevin Wang)** — https://kwa.ng/procedurally-generated-svg-landscapes/
   Shows radial gradient fill anchored at sun position for all mountain layers simultaneously. Key insight: all gradient fills use the same anchor point (sun x/y) so the lighting is internally consistent across ridges.

---

## PART E — COMMON PITFALLS AND GOTCHAS

### What screws up these scenes most often:

**1. Mountains built as triangles/polygons with only straight edges.**
Real mountain ridgelines are jagged at the micro level (rock faces) but the overall ridge silhouette uses long S-curves interrupted by one or two sharp apex points. Use `<path>` with cubic beziers for the long curved sections and `L` (straight line) for the peak apex angle.

Pattern for one realistic peak:
```
C [smooth approach] [peak approach] [peak tip x, peak tip y]
L [descent] [next valley x, next valley y]
C [valley smooth] [next approach] [next peak]
```

**2. Grass as individual stroked lines.**
Grass blades drawn as `<line>` or thin `<path stroke>` elements look like ticks or tickmarks. The eye reads "marks" not "grass." Must be filled shapes with tapered tips, OR a single silhouette path that the eye decodes as a grass-edge.

**3. Grass as a solid color rectangle at bottom.**
Fills the viewport corner but reads as a flat colored band. Needs a wavy/jagged top edge with the organic pattern (see B4 above).

**4. Fill color inheritance from parent SVG.**
If the `<svg>` has `fill="black"` or inherits from a CSS rule, ALL child paths pick it up — including paths you intended to be transparent or colored differently. Always set `fill="none"` on the `<svg>` root and explicit `fill` on each `<path>`. Or use `style="fill: #hexcolor"` inline on each path.

**5. Too many ridges at same vertical position.**
If ridges all start from the same y-coordinate at the left edge, they look stacked. Stagger them: each successive ridge should intersect from a slightly different y start position. The front ridge baseline should be clearly lower (closer to scene bottom) than the back ridge baseline.

**6. SVG paths too narrow to fill bottom.**
When SVG has `preserveAspectRatio="xMidYMid meet"` (the default), wide viewBoxes clip on narrow viewports. Use `preserveAspectRatio="none"` on each mountain layer SVG so it always stretches full width. Accept slight horizontal distortion — mountain ridges don't read as distorted.

**7. No size differential between layers.**
Each forward ridge should be visually "bigger" — taller peaks, thicker base, occupies more of the scene height. This is the single most important depth cue. Blur and color alone won't save flat-size layers.

---

## IMPLEMENTATION CHECKLIST (in order)

- [ ] Replace any existing mountain paths with 4-layer system (see C1 color table)
- [ ] Apply `feGaussianBlur` filter to back 2 ridges, no blur on front 2
- [ ] Set `preserveAspectRatio="none"` on all mountain layer SVGs
- [ ] Make peak positions asymmetric — no peak at exactly 50% width
- [ ] Ensure size differential: back ridge peak ~25% scene height, front ridge ~55%
- [ ] Stagger left-edge baseline y for each ridge
- [ ] Add foreground grass as single filled closed path (see B4 pattern)
- [ ] OR download CC0 grass SVG from freesvg.org (IDs 152317 or 152965) via browser
- [ ] Optionally add branch intrusion from left/right edge using existing tree symbols
- [ ] Test that all path fills are explicit (not inherited from parent SVG)
- [ ] Test at 375px mobile width — mountains should stretch full width

---

## LICENSE SUMMARY

| Asset | Source | License | Safe? |
|-------|--------|---------|-------|
| Firewatch color palette / CSS structure | codepen.io/accudio | Public CodePen, educational | YES |
| Generative SVG Mountains HSL formula | codepen.io/ykadosh | Public CodePen, educational | YES |
| Mountain silhouette SVG #320536 | openclipart.org | CC0 Public Domain | YES |
| Mountain/grass SVGs freesvg.org | freesvg.org (OpenClipart) | CC0 Public Domain | YES |
| SVGSilh mountains | svgsilh.com | CC0 | YES |
| Shan Shui generation code | github.com/LingDong- | MIT License | YES |
| bakertyper mountain blur values | codepen.io/bakertyper | Public CodePen, educational | YES |
| Vecteezy grass silhouettes | vecteezy.com | Vecteezy free license — ATTRIBUTION REQUIRED | AVOID on commercial use |
| Freepik mountain SVGs | freepik.com | Attribution required on free tier | AVOID |

---

*Research compiled 2026-04-25 by Scout.*
*Key sources: codepen.io/accudio (Firewatch series), codepen.io/ykadosh/pen/LYOygbG (generative mountains), github.com/LingDong-/shan-shui-inf (Shan Shui), kwa.ng/procedurally-generated-svg-landscapes (Kevin Wang), openclipart.org/detail/320536, freesvg.org (IDs 152317, 152965, 39002, 188023), skyryedesign.com/art/mountains-drawing, blog.youtalent.com/focus-drawing-jagged-irregular-mountain-formations*
