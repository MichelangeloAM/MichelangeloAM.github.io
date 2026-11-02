// Single source of truth for facts about Michelangelo.
// Every claim on the site, in JSON-LD and in llms.txt must trace back to this file
// (sources: CV PDF Oct 2026, eu-job-radar/profile/cv.md Nov 2026, public LinkedIn headline).

export const SITE_URL = 'https://michelangeloam.github.io';
export const LAST_UPDATED = '2026-11-02';

export const profile = {
  name: 'Michelangelo Amoruso Manzari',
  givenName: 'Michelangelo',
  familyName: 'Amoruso Manzari',
  alternateName: ['Michelangelo Amoruso', 'Michelangelo AM'],
  initials: 'MAM',
  email: 'michelangeloam98@gmail.com',
  location: { city: 'Rome', cityIt: 'Roma', region: 'Lazio', country: 'IT', countryName: 'Italy' },
  jobTitle: { en: 'Senior AI & ML Engineer', it: 'Senior AI & ML Engineer' },
  tagline: {
    en: 'AI & Machine Learning Engineer who turns company data into models, agents and decisions that move business performance.',
    it: 'AI & Machine Learning Engineer che trasforma i dati aziendali in modelli, agenti e decisioni che migliorano le performance del business.',
  },
  since: 2020,
  links: {
    linkedin: 'https://www.linkedin.com/in/michelangelo-amoruso-manzari-011114141/',
    github: 'https://github.com/MichelangeloAM',
    medium: 'https://medium.com/@michelangeloam98',
    unsplash: 'https://unsplash.com/@michelangeloam',
    appstore: 'https://apps.apple.com/ie/developer/michelangelo-amoruso-manzari/id1825414876',
  },
  apps: [
    {
      name: 'TravelSwipe',
      url: 'https://apps.apple.com/ie/app/travelswipe/id6753014719',
      tagline: { en: 'Stop arguing, start swiping.', it: 'Basta discutere, inizia a fare swipe.' },
      desc: {
        en: 'Native iOS app (SwiftUI + Firebase) that helps solo travellers and groups decide where to go next: everyone swipes destinations in real time and the app finds the match.',
        it: 'App iOS nativa (SwiftUI + Firebase) che aiuta viaggiatori singoli e gruppi a decidere la prossima meta: ognuno fa swipe sulle destinazioni in tempo reale e l’app trova il match.',
      },
    },
    {
      name: 'Frosted Survival Quest',
      url: 'https://apps.apple.com/ie/app/frosted-survival-quest/id6819890561',
      tagline: { en: 'Cosy idle tycoon: chop & fish.', it: 'Idle tycoon rilassante: taglia e pesca.' },
      desc: {
        en: 'A cosy idle tycoon game for iPhone and iPad, designed, built and shipped end to end, including monetisation and release management.',
        it: 'Un idle tycoon rilassante per iPhone e iPad, progettato, sviluppato e pubblicato end to end, inclusi monetizzazione e gestione dei rilasci.',
      },
    },
  ],
  languages: [
    { code: 'it', name: { en: 'Italian', it: 'Italiano' }, level: { en: 'Native', it: 'Madrelingua' } },
    { code: 'en', name: { en: 'English', it: 'Inglese' }, level: { en: 'Native (C2)', it: 'Madrelingua (C2)' } },
    { code: 'es', name: { en: 'Spanish', it: 'Spagnolo' }, level: { en: 'B2', it: 'B2' } },
  ],
  knowsAbout: [
    'Artificial intelligence',
    'Machine learning',
    'Agentic AI',
    'AI agents',
    'Large language models',
    'Retrieval-augmented generation',
    'Document AI',
    'Natural language processing',
    'Computer vision',
    'Deep learning',
    'Predictive analytics',
    'Fraud detection',
    'Anomaly detection',
    'Time-series forecasting',
    'Insurance claims analytics',
    'Feature engineering',
    'Gradient boosting (LightGBM, XGBoost)',
    'Data mining',
    'MLOps',
    'Python',
    'SQL',
    'Docker',
    'Celery',
    'Google Cloud Platform',
    'AI project management',
  ],
  skills: {
    ml: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'LightGBM', 'XGBoost', 'Deep learning', 'Feature engineering', 'Statistics', 'Time-series forecasting', 'Fraud & anomaly detection'],
    ai: ['Agentic AI', 'LLMs / generative AI', 'NLP', 'Document extraction', 'Computer vision'],
    eng: ['SQL', 'Docker', 'Celery', 'GCP', 'Git', 'Java', 'Spring Boot', 'Swift / SwiftUI', 'Firebase'],
    delivery: ['Project management', 'Agile', 'Stakeholder management', 'Team coordination', 'Presenting to business stakeholders', 'ClickUp'],
  },
} as const;

export type Lang = 'en' | 'it';
type L = { en: string; it: string };

export interface Role {
  id: string;
  org: string;
  orgDetail?: L;
  title: L;
  start: string; // ISO yyyy-mm
  end: string | null; // null = ongoing
  period: L;
  bullets: { en: string[]; it: string[] };
  stack: string[];
}

export const experience: Role[] = [
  {
    id: 'groupama',
    org: 'Alecsandria Digital × Groupama Assicurazioni',
    orgDetail: { en: 'Insurance', it: 'Assicurazioni' },
    title: { en: 'ML & AI Engineer (lead ML developer)', it: 'ML & AI Engineer (lead ML developer)' },
    start: '2026-04',
    end: null,
    period: { en: 'Apr 2026 – present', it: 'apr 2026 – oggi' },
    bullets: {
      en: [
        'Main machine learning developer on the modernisation of Groupama’s insurance claims process.',
        'Builds ML models that predict and identify crash costs and other components of policies, documentation and calculations, reducing human effort on the key steps of claims handling.',
        'Coordinates 20+ people across 3 companies: presents and implements solutions, and steers data acquisition and organisation.',
      ],
      it: [
        'Principale sviluppatore machine learning nel progetto di modernizzazione del processo sinistri di Groupama.',
        'Sviluppa modelli di ML che stimano e identificano i costi dei sinistri auto e altre componenti di polizze, documentazione e calcoli, riducendo il lavoro manuale nelle fasi chiave della gestione sinistri.',
        'Coordina oltre 20 persone in 3 aziende: presenta e implementa le soluzioni e guida l’acquisizione e l’organizzazione dei dati.',
      ],
    },
    stack: ['Python', 'LightGBM', 'XGBoost', 'scikit-learn', 'Document extraction', 'SQL'],
  },
  {
    id: 'imbued',
    org: 'Imbued',
    orgDetail: { en: 'AI platform', it: 'Piattaforma AI' },
    title: { en: 'Project Manager & AI Engineer', it: 'Project Manager & AI Engineer' },
    start: '2025-10',
    end: '2026-10',
    period: { en: 'Oct 2025 – Oct 2026', it: 'ott 2025 – ott 2026' },
    bullets: {
      en: [
        'Designed and built the core agentic AI algorithms powering the platform, with Docker, Python, Celery, machine learning and computer vision, delivering scalable, production-ready AI assets.',
        'A key driver of the platform’s technical maturity.',
        'From Feb 2026 also Project Manager of the IT division: operational progress, team workflows and milestones, bridging engineering and business objectives.',
      ],
      it: [
        'Ha progettato e sviluppato gli algoritmi di agentic AI alla base della piattaforma, con Docker, Python, Celery, machine learning e computer vision, per asset AI scalabili e pronti per la produzione.',
        'Uno dei principali motori della maturità tecnica della piattaforma.',
        'Da febbraio 2026 anche Project Manager della divisione IT: avanzamento operativo, flussi di lavoro e milestone del team, collegando sviluppo tecnico e obiettivi di business.',
      ],
    },
    stack: ['Python', 'Agentic AI', 'LLMs', 'Docker', 'Celery', 'Computer vision'],
  },
  {
    id: 'almaviva',
    org: 'AlmavivA S.p.A.',
    orgDetail: { en: 'IT services & public sector', it: 'Servizi IT e PA' },
    title: { en: 'Data Scientist', it: 'Data Scientist' },
    start: '2024-02',
    end: '2025-10',
    period: { en: 'Feb 2024 – Oct 2025', it: 'feb 2024 – ott 2025' },
    bullets: {
      en: [
        'European research project on plastic recycling using computer vision.',
        'Machine learning models to detect fraud in INAIL’s database.',
        'Large language models for automatic email summarisation and categorisation.',
        'AI models to predict electricity consumption from multiple datasets.',
      ],
      it: [
        'Progetto di ricerca europeo sul riciclo della plastica con algoritmi di computer vision.',
        'Modelli di machine learning per il rilevamento di frodi nel database INAIL.',
        'Large language model per la sintesi e la classificazione automatica delle email.',
        'Modelli AI per prevedere i consumi di energia elettrica a partire da più dataset.',
      ],
    },
    stack: ['Python', 'Computer vision', 'scikit-learn', 'LLMs', 'Time series', 'GCP'],
  },
  {
    id: 'alecsandria',
    org: 'Alecsandria Digital',
    orgDetail: { en: 'Pharma (Angelini)', it: 'Pharma (Angelini)' },
    title: { en: 'Software Engineer', it: 'Software Engineer' },
    start: '2023-10',
    end: '2024-02',
    period: { en: 'Oct 2023 – Feb 2024', it: 'ott 2023 – feb 2024' },
    bullets: {
      en: ['Angelini’s AiD project, an authentication system for medical professionals: feature implementation and integration in Java and Spring Boot.'],
      it: ['Progetto AiD di Angelini, un sistema di autenticazione per professionisti sanitari: implementazione di funzionalità e integrazione in Java e Spring Boot.'],
    },
    stack: ['Java', 'Spring Boot'],
  },
  {
    id: 'immoveo',
    org: 'Immoveo',
    orgDetail: { en: 'Proptech, Switzerland', it: 'Proptech, Svizzera' },
    title: { en: 'Data Mining Algorithm Developer', it: 'Sviluppatore di algoritmi di data mining' },
    start: '2020-01',
    end: '2023-12',
    period: { en: '2020 – 2023', it: '2020 – 2023' },
    bullets: {
      en: ['Core member of the technical team since launch: built and implemented the platform from the ground up in Python and SQL.'],
      it: ['Membro chiave del team tecnico fin dal lancio: ha costruito la piattaforma da zero in Python e SQL.'],
    },
    stack: ['Python', 'SQL', 'Data mining'],
  },
];

export const education = [
  {
    org: 'Sapienza University of Rome',
    orgIt: 'Sapienza Università di Roma',
    url: 'https://www.uniroma1.it/',
    title: { en: 'MSc in Engineering in Computer Science (English track): Project Management and AI/ML', it: 'Laurea magistrale in Engineering in Computer Science (in inglese): Project Management e AI/ML' },
    period: { en: '2024 – ongoing', it: '2024 – in corso' },
  },
  {
    org: 'Datamasters',
    orgIt: 'Datamasters',
    url: 'https://datamasters.it/',
    title: { en: 'Master in AI / Machine Learning', it: 'Master in AI / Machine Learning' },
    period: { en: '2024', it: '2024' },
  },
  {
    org: 'Polytechnic University of Marche',
    orgIt: 'Università Politecnica delle Marche',
    url: 'https://www.univpm.it/',
    title: { en: 'BSc in Computer and Automation Engineering', it: 'Laurea in Ingegneria Informatica e dell’Automazione' },
    period: { en: '2019 – 2023', it: '2019 – 2023' },
  },
  {
    org: 'Politecnico di Milano',
    orgIt: 'Politecnico di Milano',
    url: 'https://www.polimi.it/',
    title: { en: 'Computer Engineering (first two years)', it: 'Ingegneria Informatica (primi due anni)' },
    period: { en: '2017 – 2018', it: '2017 – 2018' },
  },
];

/** Factual stats only: each one is derivable from the CV. */
export const stats = [
  { value: 6, prefix: '', suffix: '+', label: { en: 'years shipping data & AI products (since 2020)', it: 'anni di prodotti data e AI in produzione (dal 2020)' } },
  { value: 20, prefix: '', suffix: '+', label: { en: 'stakeholders coordinated across 3 companies', it: 'stakeholder coordinati in 3 aziende' } },
  { value: 6, prefix: '', suffix: '', label: { en: 'industries: insurance, public sector, energy, pharma, recycling, proptech', it: 'settori: assicurazioni, PA, energia, pharma, riciclo, proptech' } },
  { value: 2, prefix: '', suffix: '', label: { en: 'iOS apps designed, built and shipped', it: 'app iOS progettate, sviluppate e pubblicate' } },
];

export const marquee = [
  'Groupama Assicurazioni',
  'Alecsandria Digital',
  'AlmavivA',
  'INAIL',
  'Angelini',
  'Imbued',
  'Immoveo',
  'Sapienza',
];

export const stackMarquee = ['Python', 'LightGBM', 'XGBoost', 'scikit-learn', 'Deep learning', 'pandas', 'LLMs', 'Agents', 'RAG', 'Computer vision', 'Docker', 'Celery', 'GCP', 'SQL', 'SwiftUI'];
