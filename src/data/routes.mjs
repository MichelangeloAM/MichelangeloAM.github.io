// Single source of truth for every URL on the site, in both languages.
// Imported by astro.config.mjs (sitemap hreflang) and by pages/components.

/** @typedef {'en' | 'it'} Lang */

export const LANGS = /** @type {const} */ (['en', 'it']);

export const ROUTES = {
  home: { en: '/', it: '/it/' },
  work: { en: '/work/', it: '/it/progetti/' },
  services: { en: '/services/', it: '/it/servizi/' },
  useCases: { en: '/ai-use-cases/', it: '/it/casi-uso-ai/' },
  research: { en: '/research/', it: '/it/ricerca/' },
  about: { en: '/about/', it: '/it/chi-sono/' },
  contact: { en: '/contact/', it: '/it/contatti/' },
  insights: { en: '/insights/', it: '/it/approfondimenti/' },
};

export const CASE_SLUGS = {
  'groupama-claims': { en: 'insurance-claims-machine-learning', it: 'machine-learning-sinistri-assicurativi' },
  'imbued-agents': { en: 'agentic-ai-platform', it: 'piattaforma-agentic-ai' },
  'inail-fraud': { en: 'fraud-detection-machine-learning', it: 'rilevamento-frodi-machine-learning' },
  'plastic-cv': { en: 'computer-vision-plastic-recycling', it: 'computer-vision-riciclo-plastica' },
  'email-llm': { en: 'llm-email-summarization-classification', it: 'llm-sintesi-classificazione-email' },
  'energy-forecast': { en: 'electricity-consumption-forecasting', it: 'previsione-consumi-elettrici' },
};

export const SERVICE_SLUGS = {
  audit: { en: 'ai-opportunity-audit', it: 'audit-opportunita-ai' },
  agents: { en: 'agentic-ai-development', it: 'sviluppo-agenti-ai' },
  llm: { en: 'llm-document-ai-rag', it: 'llm-document-ai-rag' },
  ml: { en: 'machine-learning-predictive-analytics', it: 'machine-learning-analisi-predittiva' },
  forecasting: { en: 'time-series-forecasting', it: 'previsione-serie-temporali' },
  vision: { en: 'computer-vision', it: 'computer-vision' },
  research: { en: 'applied-ai-research', it: 'ricerca-applicata-ai' },
};

export const INSIGHT_SLUGS = {
  'scope-ai-agent': { en: 'how-to-scope-an-ai-agent-project', it: 'come-impostare-un-progetto-di-agenti-ai' },
  'insurance-ml': { en: 'machine-learning-for-insurance-claims', it: 'machine-learning-per-sinistri-assicurativi' },
};

/** @param {keyof typeof ROUTES} key @param {Lang} lang */
export const route = (key, lang) => ROUTES[key][lang];
/** @param {keyof typeof CASE_SLUGS} key @param {Lang} lang */
export const caseUrl = (key, lang) => `${ROUTES.work[lang]}${CASE_SLUGS[key][lang]}/`;
/** @param {keyof typeof SERVICE_SLUGS} key @param {Lang} lang */
export const serviceUrl = (key, lang) => `${ROUTES.services[lang]}${SERVICE_SLUGS[key][lang]}/`;
/** @param {keyof typeof INSIGHT_SLUGS} key @param {Lang} lang */
export const insightUrl = (key, lang) => `${ROUTES.insights[lang]}${INSIGHT_SLUGS[key][lang]}/`;

/** Every page as { en, it } pairs. */
export function allPairs() {
  /** @type {{en: string, it: string}[]} */
  const pairs = Object.values(ROUTES).map((r) => ({ ...r }));
  for (const k of Object.keys(CASE_SLUGS)) pairs.push({ en: caseUrl(/** @type any */ (k), 'en'), it: caseUrl(/** @type any */ (k), 'it') });
  for (const k of Object.keys(SERVICE_SLUGS)) pairs.push({ en: serviceUrl(/** @type any */ (k), 'en'), it: serviceUrl(/** @type any */ (k), 'it') });
  for (const k of Object.keys(INSIGHT_SLUGS)) pairs.push({ en: insightUrl(/** @type any */ (k), 'en'), it: insightUrl(/** @type any */ (k), 'it') });
  return pairs;
}

/** Find the EN/IT twin of a pathname. @param {string} pathname */
export function alternatesFor(pathname) {
  const p = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return allPairs().find((pair) => pair.en === p || pair.it === p) ?? null;
}

/** @param {string} pathname */
export const langFromPath = (pathname) => (pathname === '/it/' || pathname.startsWith('/it/') ? 'it' : 'en');

/** Sitemap <xhtml:link> alternates. @param {string} url @param {string} site */
export function sitemapAlternates(url, site) {
  const pathname = new URL(url).pathname;
  const pair = alternatesFor(pathname);
  if (!pair) return null;
  return [
    { lang: 'en', url: site + pair.en },
    { lang: 'it-IT', url: site + pair.it },
    { lang: 'x-default', url: site + pair.en },
  ];
}
