# michelangeloam.github.io

Portfolio of **Michelangelo Amoruso Manzari**, Senior AI & Machine Learning Engineer in Rome.
Live at <https://michelangeloam.github.io/> (EN) and <https://michelangeloam.github.io/it/> (IT).

## Stack

- [Astro](https://astro.build) (static output) + MDX + Tailwind CSS v4
- GSAP (ScrollTrigger, SplitText) + Lenis for motion, with reduced-motion and no-JS fallbacks
- `astro:assets` for AVIF/WebP images, satori + resvg for build-time Open Graph images
- EmailJS for the contact form
- GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)

## Develop

Requires Node ≥ 22.23.4 (CI uses Node 24, see `.nvmrc`).

```sh
npm ci
npm run dev       # http://localhost:4321
npm run build     # outputs dist/
npm run preview
```

## Where things live

| What | Where |
| --- | --- |
| Facts about Michelangelo (single source of truth) | `src/data/profile.ts` |
| Every URL in both languages | `src/data/routes.mjs` |
| Homepage copy (EN/IT) | `src/data/home.ts` |
| Services, case studies, AI use cases | `src/data/services.ts`, `src/data/cases.ts`, `src/data/use-cases.ts` |
| Articles (MDX, `draft: true` = noindex + out of sitemap) | `src/content/insights/{en,it}/` |
| JSON-LD builders | `src/lib/schema.ts` |
| `llms.txt` / `llms-full.txt` / `robots.txt` | `src/lib/llms.ts`, `src/pages/*.txt.ts` |
| AI-generated visuals (optimised) | `src/assets/generated/` (raw PNGs in git-ignored `assets-src/`) |
| Art direction + prompts | `docs/art-direction.md` |

## Publishing an article

Set `draft: false` in both language versions of the MDX file. The pages become indexable, appear in the
insights index and are added to the sitemap automatically.

## Search Console / Bing

Paste the verification tokens into `GSC_TOKEN` / `BING_TOKEN` in `src/layouts/Base.astro`, deploy, verify,
then submit `https://michelangeloam.github.io/sitemap-index.xml`.

## Images

Raw images go in `assets-src/generated/` as `mam-<name>.png`; run `npm run images` to optimise them
(sprite sheets named `mam-sheet-*.png` are sliced into tiles).
