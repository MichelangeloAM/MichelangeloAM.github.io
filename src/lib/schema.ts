// JSON-LD @graph builders. Entity IDs are stable so search engines and LLMs
// can merge facts about the same person/service across every page.
import { SITE_URL, profile, education, experience, type Lang } from '@/data/profile';
import { services } from '@/data/services';

export const ID = {
  person: `${SITE_URL}/#person`,
  website: `${SITE_URL}/#website`,
  service: `${SITE_URL}/#professional-service`,
};

const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

export function personNode(lang: Lang) {
  const current = experience.find((r) => r.end === null);
  return {
    '@type': 'Person',
    '@id': ID.person,
    name: profile.name,
    givenName: profile.givenName,
    familyName: profile.familyName,
    alternateName: profile.alternateName,
    jobTitle: profile.jobTitle[lang],
    description: profile.tagline[lang],
    url: lang === 'it' ? `${SITE_URL}/it/chi-sono/` : `${SITE_URL}/about/`,
    image: `${SITE_URL}/og/default-${lang}.jpg`,
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: lang === 'it' ? profile.location.cityIt : profile.location.city,
      addressRegion: profile.location.region,
      addressCountry: profile.location.country,
    },
    homeLocation: { '@type': 'Place', name: `${profile.location.city}, ${profile.location.countryName}` },
    nationality: { '@type': 'Country', name: 'Italy' },
    knowsAbout: profile.knowsAbout,
    knowsLanguage: profile.languages.map((l) => ({ '@type': 'Language', name: l.name.en, alternateName: l.code })),
    alumniOf: education
      .filter((e) => e.org !== 'Datamasters')
      .map((e) => ({ '@type': 'CollegeOrUniversity', name: e.org, url: e.url })),
    hasOccupation: {
      '@type': 'Occupation',
      name: 'AI & Machine Learning Engineer',
      occupationLocation: { '@type': 'City', name: 'Rome' },
      skills: [...profile.skills.ml, ...profile.skills.ai].join(', '),
    },
    worksFor: current ? { '@type': 'Organization', name: current.org } : undefined,
    sameAs: Object.values(profile.links),
  };
}

export function websiteNode(lang: Lang) {
  return {
    '@type': 'WebSite',
    '@id': ID.website,
    url: `${SITE_URL}/`,
    name: `${profile.name}: AI & ML Engineer`,
    inLanguage: ['en', 'it-IT'],
    publisher: { '@id': ID.person },
    about: { '@id': ID.person },
    description: profile.tagline[lang],
  };
}

export function professionalServiceNode(lang: Lang) {
  return {
    '@type': 'ProfessionalService',
    '@id': ID.service,
    name: `${profile.name}: AI & Machine Learning Engineering`,
    url: `${SITE_URL}${lang === 'it' ? '/it/servizi/' : '/services/'}`,
    image: `${SITE_URL}/og/default-${lang}.jpg`,
    description: lang === 'it'
      ? 'Consulenza e sviluppo di intelligenza artificiale e machine learning: agenti AI, LLM e document AI, modelli predittivi, previsione di serie temporali, computer vision e ricerca applicata, a partire dai dati aziendali.'
      : 'AI and machine learning consulting and engineering: AI agents, LLMs and document AI, predictive models, time-series forecasting, computer vision and applied research, built on your company data.',
    founder: { '@id': ID.person },
    provider: { '@id': ID.person },
    email: profile.email,
    address: { '@type': 'PostalAddress', addressLocality: 'Rome', addressRegion: 'Lazio', addressCountry: 'IT' },
    areaServed: [
      { '@type': 'Country', name: 'Italy' },
      { '@type': 'Place', name: 'European Union' },
      { '@type': 'Place', name: 'Worldwide (remote)' },
    ],
    knowsLanguage: ['it', 'en', 'es'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: lang === 'it' ? 'Servizi AI e machine learning' : 'AI & machine learning services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name[lang], url: abs(s.url(lang)), description: s.summary[lang] },
      })),
    },
  };
}

export function breadcrumbNode(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.url) })),
  };
}

export function faqNode(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function webPageNode(opts: { url: string; name: string; description: string; lang: Lang; type?: string; dateModified?: string }) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${abs(opts.url)}#webpage`,
    url: abs(opts.url),
    name: opts.name,
    description: opts.description,
    inLanguage: opts.lang === 'it' ? 'it-IT' : 'en',
    isPartOf: { '@id': ID.website },
    about: { '@id': ID.person },
    dateModified: opts.dateModified,
  };
}

export function serviceNode(opts: { name: string; description: string; url: string; serviceType: string; lang: Lang }) {
  return {
    '@type': 'Service',
    '@id': `${abs(opts.url)}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: abs(opts.url),
    provider: { '@id': ID.person },
    areaServed: ['Italy', 'European Union', 'Worldwide (remote)'],
    availableLanguage: ['Italian', 'English', 'Spanish'],
    inLanguage: opts.lang === 'it' ? 'it-IT' : 'en',
  };
}

export function creativeWorkNode(opts: { name: string; description: string; url: string; image?: string; lang: Lang; about: string[]; dateModified?: string; temporal?: string }) {
  return {
    '@type': 'CreativeWork',
    '@id': `${abs(opts.url)}#case-study`,
    name: opts.name,
    headline: opts.name,
    description: opts.description,
    url: abs(opts.url),
    image: opts.image ? abs(opts.image) : undefined,
    author: { '@id': ID.person },
    creator: { '@id': ID.person },
    inLanguage: opts.lang === 'it' ? 'it-IT' : 'en',
    keywords: opts.about.join(', '),
    temporalCoverage: opts.temporal,
    dateModified: opts.dateModified,
    genre: 'Case study',
  };
}

export function articleNode(opts: { headline: string; description: string; url: string; image?: string; lang: Lang; datePublished: string; dateModified?: string }) {
  return {
    '@type': 'Article',
    '@id': `${abs(opts.url)}#article`,
    headline: opts.headline,
    description: opts.description,
    url: abs(opts.url),
    image: opts.image ? abs(opts.image) : undefined,
    author: { '@id': ID.person },
    publisher: { '@id': ID.person },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    inLanguage: opts.lang === 'it' ? 'it-IT' : 'en',
    mainEntityOfPage: abs(opts.url),
  };
}

export const graph = (...nodes: unknown[]) => ({ '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) });
