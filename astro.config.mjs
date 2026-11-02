// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';
import { sitemapAlternates, insightUrl } from './src/data/routes.mjs';

const SITE = 'https://michelangeloam.github.io';

// Draft insights are built (noindex) for review but kept out of the sitemap.
const draftUrls = new Set();
for (const lang of ['en', 'it']) {
  const dir = `./src/content/insights/${lang}`;
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.mdx'))) {
    const fm = readFileSync(`${dir}/${f}`, 'utf8').split('---')[1] ?? '';
    const key = fm.match(/^key:\s*(\S+)/m)?.[1];
    if (key && /^draft:\s*true/m.test(fm)) draftUrls.add(`${SITE}${insightUrl(key, lang)}`);
  }
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404') && !draftUrls.has(page),
      serialize(item) {
        const links = sitemapAlternates(item.url, SITE);
        if (links) item.links = links;
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Geist',
      cssVariable: '--font-geist',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/geist-latin-wght-normal.woff2'], weight: '100 900', style: 'normal' },
          { src: ['./src/assets/fonts/geist-latin-ext-wght-normal.woff2'], weight: '100 900', style: 'normal', unicodeRange: ['U+0100-02BA', 'U+02BD-02C5', 'U+02C7-02CC', 'U+02CE-02D7', 'U+02DD-02FF', 'U+0304', 'U+0308', 'U+0329', 'U+1D00-1DBF', 'U+1E00-1E9F', 'U+1EF2-1EFF', 'U+2020', 'U+20A0-20AB', 'U+20AD-20C0', 'U+2113', 'U+2C60-2C7F', 'U+A720-A7FF'] },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      fallbacks: ['ui-monospace', 'monospace'],
      options: {
        variants: [{ src: ['./src/assets/fonts/geist-mono-latin-wght-normal.woff2'], weight: '100 900', style: 'normal' }],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Instrument Serif',
      cssVariable: '--font-instrument',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/instrument-serif-latin-400-italic.woff2'], weight: '400', style: 'italic' },
          { src: ['./src/assets/fonts/instrument-serif-latin-400-normal.woff2'], weight: '400', style: 'normal' },
        ],
      },
    },
  ],
});
