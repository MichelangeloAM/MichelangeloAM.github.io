# Art direction: AI-generated visuals

All key visuals were generated with ChatGPT image generation in a single conversation (2 Nov 2026)
so they share one look. Photography in "Beyond work" is Michelangelo's own (Unsplash).

## Rules

- No text, letters, numbers, logos, UI or watermarks inside images: real text is typeset in HTML/OG.
- No human faces. Never generate Michelangelo's portrait; use a real photo.
- No real company logos or brand marks.

## Master style (prepended to every brief)

> Cinematic 3D render, premium tech-brand look. Matte-black studio background (#0A0A0B), molten
> ember-orange (#FF7A1A) and soft violet (#8B7CFF) rim lighting, frosted glass and brushed titanium
> materials, soft volumetric haze, shallow depth of field, subtle film grain. Absolutely NO text,
> letters, numbers, logos, UI or watermarks, and NO human faces.

## Briefs

| File | Ratio | Brief |
| --- | --- | --- |
| `hero-core-desktop` | 3:2 | Frosted-glass "intelligence core" sphere on the right, absorbing luminous streams of tiny documents, envelopes, photo tiles and data points from the left; inside, they become a glowing neural lattice. Left third empty. |
| `hero-core-mobile` | 2:3 | Same sphere in the lower half, streams flowing down from the top. Top third empty. |
| `ind-insurance` | 2:3 | Translucent glass wireframe car, ember-orange highlighted dent on the bumper, holographic measurement points and violet scan lines. |
| `ind-public-sector` | 2:3 | Frosted-glass classical columns, violet data streams between them, three ember anomaly points. |
| `ind-healthcare` | 2:3 | Glass medicine capsules and a translucent access badge, violet shield glow, ember ring. |
| `ind-energy` | 2:3 | High-voltage pylon with ember energy pulses; floating glass forecast ribbon with violet confidence band. |
| `ind-recycling` | 2:3 | Conveyor with crushed plastic, ember laser scan line, violet detection outlines. |
| `ind-proptech` | 2:3 | Swiss alpine houses as glass/titanium architectural models, data points and valuation graph lines above. |
| `ind-consumer` | 2:3 | Frosted-glass smartphone with photo cards fanning out as if swiped, sunset travel scenes. |
| `case-claims` | 3:2 | Claim documents and car photos pass through an ember light plane and become structured blocks and a radial gauge. |
| `case-agents` | 3:2 | Central glass orchestrator node linked to six geometric agent nodes holding gear, magnifier, document, lens, database, chart. |
| `case-fraud` | 3:2 | Perspective grid of glass cubes (records); three glow ember as anomalies, violet magnifying lens above one. |
| `case-recycling-topdown` | 3:2 | Orthographic top-down conveyor with seven separated plastic items (used by the ML Lab vision demo; box coordinates in `MLLab.astro`). |
| `case-email` | 3:2 | Glass envelopes fly into a titanium sorting gate and exit as three stacks lit ember, violet and white. |
| `case-energy` | 3:2 | Night skyline with a floating light ribbon chart: solid ember past, violet confidence band future. |
| `research-lab` | 3:2 | Dark desk, glass lab notebook, holographic charts (bars, loss curves, confusion grid), violet flask. |
| `sheet-data` → `data-0…5` | 3:2 | 3×2 grid: envelope, documents, photo frame, receipt roll, waveform, contact card. |
| `sheet-glyphs` → `glyphs-0…7` | 3:2 | 4×2 grid: magnifier over data cube, agent node, document + speech bubble, bar chart, rising line, lens, flask, compass. |

## Pipeline

1. Save raw PNGs to `assets-src/generated/mam-<file>.png` (git-ignored).
2. `npm run images` → lean JPGs in `src/assets/generated/` (sheets are sliced into tiles).
3. Astro emits AVIF/WebP responsive variants at build time.
