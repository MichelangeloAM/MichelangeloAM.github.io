// Build-time Open Graph images (1200×630) rendered with satori + resvg.
// Real text is typeset here; AI art is only used as the background visual.
import type { APIRoute, GetStaticPaths } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { cases } from '@/data/cases';
import { services } from '@/data/services';
import { homeCopy } from '@/data/home';
import { profile, type Lang } from '@/data/profile';

const insightTitles: Record<string, { en: string; it: string; cover: string }> = {
  'scope-ai-agent': { en: 'How to scope an AI agent project', it: 'Come impostare un progetto di agenti AI', cover: 'case-agents' },
  'insurance-ml': { en: 'Machine learning for insurance claims', it: 'Machine learning per i sinistri assicurativi', cover: 'case-claims' },
};

type Card = { title: string; kicker: string; cover: string; lang: Lang };

export const getStaticPaths: GetStaticPaths = () => {
  const out: { params: { route: string }; props: Card }[] = [];
  for (const lang of ['en', 'it'] as Lang[]) {
    const h = homeCopy(lang);
    out.push({ params: { route: `default-${lang}` }, props: { title: `${h.hero.lead} ${h.hero.words[0]}`, kicker: h.hero.eyebrow, cover: 'hero-core-desktop', lang } });
    for (const c of cases) out.push({ params: { route: `${lang}/work/${c.key}` }, props: { title: c.title[lang], kicker: c.kicker[lang], cover: c.cover, lang } });
    for (const s of services) out.push({ params: { route: `${lang}/services/${s.key}` }, props: { title: s.name[lang], kicker: s.short[lang], cover: 'hero-core-desktop', lang } });
    for (const [k, v] of Object.entries(insightTitles)) out.push({ params: { route: `${lang}/insights/${k}` }, props: { title: v[lang], kicker: lang === 'it' ? 'Approfondimento' : 'Insight', cover: v.cover, lang } });
  }
  return out;
};

const font = (p: string) => readFile(path.join(process.cwd(), 'node_modules', p));
let fontsCache: Awaited<ReturnType<typeof loadFonts>> | null = null;
async function loadFonts() {
  const [regular, medium, mono, serif] = await Promise.all([
    font('@fontsource/geist/files/geist-latin-400-normal.woff'),
    font('@fontsource/geist/files/geist-latin-500-normal.woff'),
    font('@fontsource/geist-mono/files/geist-mono-latin-400-normal.woff'),
    font('@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff'),
  ]);
  return [
    { name: 'Geist', data: regular, weight: 400 as const, style: 'normal' as const },
    { name: 'Geist', data: medium, weight: 500 as const, style: 'normal' as const },
    { name: 'Geist Mono', data: mono, weight: 400 as const, style: 'normal' as const },
    { name: 'Instrument Serif', data: serif, weight: 400 as const, style: 'italic' as const },
  ];
}

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const { title, kicker, cover, lang } = props as Card;
  fontsCache ??= await loadFonts();
  let bg = '';
  try {
    const buf = await sharp(path.join(process.cwd(), 'src/assets/generated', `${cover}.jpg`)).resize(760, 630, { fit: 'cover', position: 'right' }).jpeg({ quality: 78 }).toBuffer();
    bg = `data:image/jpeg;base64,${buf.toString('base64')}`;
  } catch { /* gradient only */ }

  const size = title.length > 70 ? 50 : title.length > 45 ? 58 : 68;
  const tree = h('div', { width: '1200px', height: '630px', display: 'flex', position: 'relative', background: '#0a0a0b', fontFamily: 'Geist', color: '#f4f2ee' }, [
    bg ? { type: 'img', props: { src: bg, width: 760, height: 630, style: { position: 'absolute', right: 0, top: 0, width: '760px', height: '630px', objectFit: 'cover' } } } : null,
    h('div', { position: 'absolute', inset: 0, display: 'flex', background: 'linear-gradient(90deg, #0a0a0b 0%, #0a0a0b 42%, rgba(10,10,11,0.75) 62%, rgba(10,10,11,0.15) 100%)' }),
    h('div', { position: 'absolute', left: '-120px', top: '-160px', width: '520px', height: '520px', borderRadius: '9999px', background: 'radial-gradient(circle, rgba(255,122,26,0.35), rgba(255,122,26,0) 70%)', display: 'flex' }),
    h('div', { position: 'absolute', top: 0, left: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '60px 72px', width: '660px', height: '510px' }, [
      h('div', { display: 'flex', alignItems: 'center', gap: '14px' }, [
        h('div', { width: '14px', height: '14px', background: '#ff7a1a', display: 'flex' }),
        h('div', { fontFamily: 'Geist Mono', fontSize: '20px', letterSpacing: '3px', textTransform: 'uppercase', color: '#9b978f', display: 'flex' }, kicker),
      ]),
      h('div', { display: 'flex', fontSize: `${size}px`, fontWeight: 500, lineHeight: 1.04, letterSpacing: '-2px' }, title),
      h('div', { display: 'flex', alignItems: 'center', gap: '18px' }, [
        h('div', { width: '56px', height: '56px', borderRadius: '9999px', background: 'linear-gradient(135deg, #ff7a1a, #8b7cff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a0a0b', fontSize: '17px', fontWeight: 500 }, 'MAM'),
        h('div', { display: 'flex', flexDirection: 'column' }, [
          h('div', { fontSize: '26px', fontWeight: 500, display: 'flex' }, profile.name),
          h('div', { fontFamily: 'Instrument Serif', fontStyle: 'italic', fontSize: '26px', color: '#ff9a5c', display: 'flex' }, lang === 'it' ? 'Senior AI & ML Engineer · Roma' : 'Senior AI & ML Engineer · Rome'),
        ]),
      ]),
    ]),
  ].filter(Boolean));

  const svg = await satori(tree as never, { width: 1200, height: 630, fonts: fontsCache });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  const jpg = await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toBuffer();
  return new Response(new Uint8Array(jpg), { headers: { 'Content-Type': 'image/jpeg' } });
};
