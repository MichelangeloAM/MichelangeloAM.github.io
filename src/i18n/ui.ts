import type { Lang } from '@/data/profile';

export const ui = {
  en: {
    skip: 'Skip to content',
    nav: { work: 'Work', services: 'Services', useCases: 'AI use cases', research: 'Research', about: 'About', insights: 'Insights', contact: 'Contact' },
    cta: { book: 'Book a call', audit: 'Book an AI Opportunity Audit', email: 'Email me', seeWork: 'See the work', allWork: 'All case studies', allServices: 'All services', readCase: 'Read the case study', learnMore: 'Learn more', back: 'Back' },
    langSwitch: 'Italiano',
    langSwitchShort: 'IT',
    menu: 'Menu',
    close: 'Close',
    footer: {
      blurb: 'Senior AI & ML Engineer in Rome. I turn company data into models, agents and decisions that move business performance.',
      sitemap: 'Site',
      elsewhere: 'Elsewhere',
      updated: 'Last updated',
      rights: 'All rights reserved.',
      madeWith: 'Hand-built with Astro & GSAP. Visuals generated with AI under my art direction.',
    },
    labels: {
      tldr: 'TL;DR',
      keyFacts: 'Key facts',
      client: 'Client',
      sector: 'Sector',
      role: 'My role',
      period: 'Period',
      stack: 'Stack',
      faq: 'Frequently asked questions',
      related: 'Related',
      synthetic: 'Synthetic demo data',
      onThisPage: 'On this page',
      breadcrumbHome: 'Home',
      draft: 'Draft',
      readingTime: 'min read',
    },
  },
  it: {
    skip: 'Vai al contenuto',
    nav: { work: 'Progetti', services: 'Servizi', useCases: 'Casi d’uso AI', research: 'Ricerca', about: 'Chi sono', insights: 'Approfondimenti', contact: 'Contatti' },
    cta: { book: 'Prenota una call', audit: 'Prenota un AI Opportunity Audit', email: 'Scrivimi', seeWork: 'Guarda i progetti', allWork: 'Tutti i casi studio', allServices: 'Tutti i servizi', readCase: 'Leggi il caso studio', learnMore: 'Scopri di più', back: 'Indietro' },
    langSwitch: 'English',
    langSwitchShort: 'EN',
    menu: 'Menu',
    close: 'Chiudi',
    footer: {
      blurb: 'Senior AI & ML Engineer a Roma. Trasformo i dati aziendali in modelli, agenti e decisioni che migliorano le performance del business.',
      sitemap: 'Sito',
      elsewhere: 'Altrove',
      updated: 'Ultimo aggiornamento',
      rights: 'Tutti i diritti riservati.',
      madeWith: 'Costruito a mano con Astro e GSAP. Visual generati con l’AI sotto la mia direzione artistica.',
    },
    labels: {
      tldr: 'In breve',
      keyFacts: 'Fatti chiave',
      client: 'Cliente',
      sector: 'Settore',
      role: 'Il mio ruolo',
      period: 'Periodo',
      stack: 'Stack',
      faq: 'Domande frequenti',
      related: 'Correlati',
      synthetic: 'Dati demo sintetici',
      onThisPage: 'In questa pagina',
      breadcrumbHome: 'Home',
      draft: 'Bozza',
      readingTime: 'min di lettura',
    },
  },
} as const;

export const t = (lang: Lang) => ui[lang];

export const htmlLang = (lang: Lang) => (lang === 'it' ? 'it-IT' : 'en');
export const ogLocale = (lang: Lang) => (lang === 'it' ? 'it_IT' : 'en_US');

export const formatDate = (iso: string, lang: Lang) =>
  new Date(iso).toLocaleDateString(lang === 'it' ? 'it-IT' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
