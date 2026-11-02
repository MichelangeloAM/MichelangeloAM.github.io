// Case studies. Facts come from the CV; approach sections describe the method at a high
// level without confidential details or invented metrics. Outcomes are qualitative on purpose.
import { caseUrl, CASE_SLUGS } from './routes.mjs';
import type { Lang } from './profile';

type L = { en: string; it: string };
type LL = { en: string[]; it: string[] };

export type CoverKey =
  | 'case-claims'
  | 'case-agents'
  | 'case-fraud'
  | 'case-recycling-topdown'
  | 'case-email'
  | 'case-energy';

export interface CaseStudy {
  key: keyof typeof CASE_SLUGS;
  cover: CoverKey;
  client: string;
  sector: L;
  period: L;
  year: string;
  role: L;
  title: L;
  seoTitle: L;
  kicker: L;
  description: L; // meta description
  tldr: L;
  context: L;
  problem: L;
  approach: LL;
  outcome: LL;
  stack: string[];
  tags: string[];
  services: string[];
  url: (lang: Lang) => string;
}

const C = (c: Omit<CaseStudy, 'url'>): CaseStudy => ({ ...c, url: (lang) => caseUrl(c.key, lang) });

export const cases: CaseStudy[] = [
  C({
    key: 'groupama-claims',
    cover: 'case-claims',
    client: 'Groupama Assicurazioni (via Alecsandria Digital)',
    sector: { en: 'Insurance', it: 'Assicurazioni' },
    period: { en: 'Apr 2026 – ongoing', it: 'apr 2026 – in corso' },
    year: '2026',
    role: { en: 'Lead machine learning developer and cross-company coordinator', it: 'Lead machine learning developer e coordinatore tra aziende' },
    title: {
      en: 'Machine learning for insurance claims: predicting crash costs at Groupama',
      it: 'Machine learning per i sinistri assicurativi: stimare i costi dei sinistri auto per Groupama',
    },
    seoTitle: { en: 'Insurance Claims Machine Learning at Groupama', it: 'Machine learning per i sinistri Groupama' },
    kicker: { en: 'Claims modernisation', it: 'Modernizzazione dei sinistri' },
    description: {
      en: 'How Michelangelo Amoruso Manzari leads machine learning on Groupama’s claims modernisation: models that predict crash costs and policy components, coordinating 20+ people across 3 companies.',
      it: 'Come Michelangelo Amoruso Manzari guida il machine learning nella modernizzazione dei sinistri di Groupama: modelli che stimano i costi dei sinistri auto e componenti di polizza, coordinando oltre 20 persone in 3 aziende.',
    },
    tldr: {
      en: 'Main ML developer on a programme to modernise Groupama’s insurance claims process. I build models that predict and identify crash costs and other components of policies, documentation and calculations, so that adjusters spend less time on repetitive estimates and more on judgement.',
      it: 'Principale sviluppatore ML in un programma di modernizzazione del processo sinistri di Groupama. Sviluppo modelli che stimano e identificano i costi dei sinistri auto e altre componenti di polizze, documentazione e calcoli, così i liquidatori dedicano meno tempo alle stime ripetitive e più al giudizio esperto.',
    },
    context: {
      en: 'Groupama Assicurazioni is the Italian arm of one of Europe’s largest mutual insurance groups. Together with Alecsandria Digital it is modernising how motor claims are handled, from first notice to settlement.',
      it: 'Groupama Assicurazioni è la compagnia italiana di uno dei maggiori gruppi assicurativi mutualistici europei. Insieme ad Alecsandria Digital sta modernizzando la gestione dei sinistri auto, dalla denuncia alla liquidazione.',
    },
    problem: {
      en: 'Estimating the cost of a crash and checking the related policy components and documents is skilled but repetitive work. Every claim needs the same reading, cross-checking and calculating, which slows settlement and makes estimates vary from person to person.',
      it: 'Stimare il costo di un sinistro e verificare le componenti di polizza e i documenti collegati è un lavoro esperto ma ripetitivo. Ogni sinistro richiede le stesse letture, verifiche incrociate e calcoli, rallentando la liquidazione e rendendo le stime variabili da persona a persona.',
    },
    approach: {
      en: [
        'Mapped the claims workflow with business experts to find the steps where a model can safely assist.',
        'Coordinated data acquisition and organisation across three companies so historical claims become a usable training set.',
        'Built supervised models that predict crash costs and identify other policy and documentation components.',
        'Presented results and trade-offs to business and technical stakeholders at every iteration.',
      ],
      it: [
        'Mappatura del flusso dei sinistri con gli esperti di business per individuare i passaggi in cui un modello può affiancare le persone in sicurezza.',
        'Coordinamento dell’acquisizione e dell’organizzazione dei dati tra tre aziende, per trasformare lo storico dei sinistri in un training set utilizzabile.',
        'Sviluppo di modelli supervisionati che stimano i costi dei sinistri e identificano altre componenti di polizza e di documentazione.',
        'Presentazione di risultati e compromessi agli stakeholder tecnici e di business a ogni iterazione.',
      ],
    },
    outcome: {
      en: [
        'Machine learning now sits inside a wider programme to reduce human effort on the key components of claims.',
        'One shared data foundation across three organisations and 20+ people.',
        'A repeatable path from historical claims to models that adjusters can review and trust.',
      ],
      it: [
        'Il machine learning è parte di un programma più ampio per ridurre il lavoro manuale sulle componenti chiave dei sinistri.',
        'Una base dati condivisa tra tre organizzazioni e oltre 20 persone.',
        'Un percorso ripetibile dallo storico dei sinistri a modelli che i liquidatori possono verificare e di cui possono fidarsi.',
      ],
    },
    stack: ['Python', 'pandas', 'scikit-learn', 'LightGBM', 'XGBoost', 'SQL', 'Document extraction'],
    tags: ['Insurance ML', 'Claims cost prediction', 'Document AI', 'Stakeholder management'],
    services: ['ml', 'llm', 'audit'],
  }),
  C({
    key: 'imbued-agents',
    cover: 'case-agents',
    client: 'Imbued',
    sector: { en: 'AI platform', it: 'Piattaforma AI' },
    period: { en: 'Oct 2025 – Oct 2026', it: 'ott 2025 – ott 2026' },
    year: '2025–26',
    role: { en: 'AI Engineer, then also Project Manager of the IT division', it: 'AI Engineer, poi anche Project Manager della divisione IT' },
    title: {
      en: 'Building the agentic AI core of a production platform at Imbued',
      it: 'Costruire il cuore di agentic AI di una piattaforma in produzione per Imbued',
    },
    seoTitle: { en: 'Agentic AI Platform Case Study (Imbued)', it: 'Piattaforma di agentic AI (Imbued)' },
    kicker: { en: 'Agentic AI', it: 'Agentic AI' },
    description: {
      en: 'Michelangelo Amoruso Manzari designed and built the core agentic AI algorithms of Imbued’s platform with Python, Docker, Celery, machine learning and computer vision, then led the IT division as project manager.',
      it: 'Michelangelo Amoruso Manzari ha progettato e sviluppato gli algoritmi di agentic AI della piattaforma Imbued con Python, Docker, Celery, machine learning e computer vision, guidando poi la divisione IT come project manager.',
    },
    tldr: {
      en: 'I designed and built the core agentic AI algorithms powering Imbued’s platform, combining agents, machine learning and computer vision into scalable, production-ready AI assets, and from February 2026 also ran the IT division’s delivery as project manager.',
      it: 'Ho progettato e sviluppato gli algoritmi di agentic AI alla base della piattaforma Imbued, combinando agenti, machine learning e computer vision in asset AI scalabili e pronti per la produzione, e da febbraio 2026 ho guidato anche la delivery della divisione IT come project manager.',
    },
    context: {
      en: 'Imbued is a technology company whose platform depends on AI assets generated and processed at scale. The agentic layer is the engine of the product.',
      it: 'Imbued è un’azienda tecnologica la cui piattaforma dipende da asset AI generati ed elaborati su larga scala. Il livello agentico è il motore del prodotto.',
    },
    problem: {
      en: 'The platform needed AI that does more than answer: agents that plan multi-step jobs, call tools, process images and return reliable results, at production scale and with predictable cost.',
      it: 'La piattaforma aveva bisogno di un’AI che non si limitasse a rispondere: agenti che pianificano lavori multi-step, usano tool, elaborano immagini e restituiscono risultati affidabili, su scala produttiva e con costi prevedibili.',
    },
    approach: {
      en: [
        'Designed the agent architecture: task decomposition, tool interfaces and state handling.',
        'Built distributed execution with Python workers, Celery queues and Docker for horizontal scaling.',
        'Combined LLM-driven agents with classic machine learning and computer vision components.',
        'From Feb 2026, ran milestones, team workflows and reporting as IT project manager.',
      ],
      it: [
        'Progettazione dell’architettura degli agenti: scomposizione dei compiti, interfacce dei tool e gestione dello stato.',
        'Esecuzione distribuita con worker Python, code Celery e Docker per scalare orizzontalmente.',
        'Integrazione di agenti basati su LLM con componenti di machine learning classico e computer vision.',
        'Da feb 2026, gestione di milestone, flussi di lavoro del team e reporting come project manager IT.',
      ],
    },
    outcome: {
      en: [
        'Agentic algorithms became the core of the platform and a key driver of its technical maturity.',
        'Scalable, production-ready AI assets instead of one-off prototypes.',
        'Engineering and business objectives aligned under one delivery plan.',
      ],
      it: [
        'Gli algoritmi agentici sono diventati il cuore della piattaforma e uno dei principali motori della sua maturità tecnica.',
        'Asset AI scalabili e pronti per la produzione invece di prototipi isolati.',
        'Obiettivi tecnici e di business allineati in un unico piano di delivery.',
      ],
    },
    stack: ['Python', 'LLMs', 'Agents', 'Celery', 'Docker', 'Computer vision', 'Machine learning'],
    tags: ['Agentic AI', 'AI agents', 'MLOps', 'Project management'],
    services: ['agents', 'vision'],
  }),
  C({
    key: 'inail-fraud',
    cover: 'case-fraud',
    client: 'INAIL (via AlmavivA)',
    sector: { en: 'Public sector / social insurance', it: 'Pubblica amministrazione / previdenza' },
    period: { en: '2024 – 2025', it: '2024 – 2025' },
    year: '2024–25',
    role: { en: 'Data scientist', it: 'Data scientist' },
    title: {
      en: 'Fraud detection with machine learning on INAIL’s database',
      it: 'Rilevamento frodi con il machine learning sul database INAIL',
    },
    seoTitle: { en: 'Fraud Detection with Machine Learning (INAIL)', it: 'Rilevamento frodi con ML (INAIL)' },
    kicker: { en: 'Fraud detection', it: 'Rilevamento frodi' },
    description: {
      en: 'At AlmavivA, Michelangelo Amoruso Manzari developed machine learning models to detect fraud in the database of INAIL, Italy’s national workplace-injury insurance institute.',
      it: 'In AlmavivA, Michelangelo Amoruso Manzari ha sviluppato modelli di machine learning per il rilevamento di frodi nel database dell’INAIL, l’Istituto nazionale per l’assicurazione contro gli infortuni sul lavoro.',
    },
    tldr: {
      en: 'Machine learning models that surface potentially fraudulent cases in INAIL’s database, so investigators can focus their limited time on the records most likely to need attention.',
      it: 'Modelli di machine learning che fanno emergere i casi potenzialmente fraudolenti nel database INAIL, così gli ispettori possono concentrare il loro tempo sui record che più probabilmente richiedono attenzione.',
    },
    context: {
      en: 'INAIL is the Italian public institute that insures workers against workplace accidents and occupational diseases. AlmavivA is one of Italy’s largest IT groups serving the public sector.',
      it: 'L’INAIL è l’istituto pubblico italiano che assicura i lavoratori contro infortuni e malattie professionali. AlmavivA è uno dei maggiori gruppi IT italiani al servizio della pubblica amministrazione.',
    },
    problem: {
      en: 'Fraud is rare and hidden among a very large number of legitimate records. Manual review cannot cover everything, so the challenge is ranking where to look first.',
      it: 'La frode è rara e nascosta tra moltissimi record legittimi. La revisione manuale non può coprire tutto: la sfida è decidere dove guardare per primi.',
    },
    approach: {
      en: [
        'Explored and engineered features from the institute’s historical records.',
        'Trained machine learning models suited to rare-event, imbalanced problems.',
        'Tuned decision thresholds around the real cost of false alarms versus missed cases.',
        'Produced explainable outputs so analysts could understand why a case was flagged.',
      ],
      it: [
        'Esplorazione dei dati storici dell’istituto e costruzione delle feature.',
        'Addestramento di modelli di machine learning adatti a eventi rari e dataset sbilanciati.',
        'Calibrazione delle soglie di decisione sul costo reale di falsi allarmi e casi mancati.',
        'Output spiegabili, perché gli analisti capissero perché un caso veniva segnalato.',
      ],
    },
    outcome: {
      en: ['A data-driven way to prioritise investigations.', 'Models built to work with, not replace, expert judgement.'],
      it: ['Un modo guidato dai dati per dare priorità alle verifiche.', 'Modelli pensati per affiancare, non sostituire, il giudizio esperto.'],
    },
    stack: ['Python', 'pandas', 'scikit-learn', 'Gradient boosting', 'SQL'],
    tags: ['Fraud detection', 'Anomaly detection', 'Public sector', 'Explainable AI'],
    services: ['ml'],
  }),
  C({
    key: 'plastic-cv',
    cover: 'case-recycling-topdown',
    client: 'European research project (via AlmavivA)',
    sector: { en: 'Circular economy / recycling', it: 'Economia circolare / riciclo' },
    period: { en: '2024 – 2025', it: '2024 – 2025' },
    year: '2024–25',
    role: { en: 'Data scientist (computer vision)', it: 'Data scientist (computer vision)' },
    title: {
      en: 'Computer vision for plastic recycling in a European research project',
      it: 'Computer vision per il riciclo della plastica in un progetto di ricerca europeo',
    },
    seoTitle: { en: 'Computer Vision for Plastic Recycling', it: 'Computer vision per il riciclo della plastica' },
    kicker: { en: 'Applied research · Computer vision', it: 'Ricerca applicata · Computer vision' },
    description: {
      en: 'Michelangelo Amoruso Manzari worked on computer vision algorithms for plastic recycling within a European research project at AlmavivA.',
      it: 'Michelangelo Amoruso Manzari ha lavorato su algoritmi di computer vision per il riciclo della plastica all’interno di un progetto di ricerca europeo in AlmavivA.',
    },
    tldr: {
      en: 'Computer vision algorithms that help recognise and sort plastic waste, developed inside a European research project, bridging research methods and industrial constraints.',
      it: 'Algoritmi di computer vision che aiutano a riconoscere e smistare i rifiuti plastici, sviluppati in un progetto di ricerca europeo, tra metodo scientifico e vincoli industriali.',
    },
    context: {
      en: 'Recycling plants need to separate many kinds of plastic quickly and accurately. European research programmes fund consortia that test new technologies for this.',
      it: 'Gli impianti di riciclo devono separare molti tipi di plastica in modo rapido e accurato. I programmi di ricerca europei finanziano consorzi che sperimentano nuove tecnologie per farlo.',
    },
    problem: {
      en: 'Plastic items vary in shape, colour, dirt and deformation, which makes visual recognition hard on a moving line.',
      it: 'Gli oggetti in plastica variano per forma, colore, sporco e deformazione, il che rende difficile il riconoscimento visivo su una linea in movimento.',
    },
    approach: {
      en: [
        'Worked on image data of plastic waste and its labelling.',
        'Developed and evaluated computer vision algorithms for detection and classification.',
        'Contributed results to a multi-partner research consortium.',
      ],
      it: [
        'Lavoro sui dati immagine dei rifiuti plastici e sulla loro etichettatura.',
        'Sviluppo e valutazione di algoritmi di computer vision per rilevamento e classificazione.',
        'Contributo dei risultati a un consorzio di ricerca con più partner.',
      ],
    },
    outcome: {
      en: ['Research-grade computer vision work applied to a real environmental problem.', 'Experience translating research into industrial requirements.'],
      it: ['Computer vision di livello di ricerca applicata a un problema ambientale reale.', 'Esperienza nel tradurre la ricerca in requisiti industriali.'],
    },
    stack: ['Python', 'Deep learning', 'Computer vision', 'Image labelling'],
    tags: ['Computer vision', 'EU research', 'Circular economy', 'Object detection'],
    services: ['vision', 'research'],
  }),
  C({
    key: 'email-llm',
    cover: 'case-email',
    client: 'AlmavivA',
    sector: { en: 'Enterprise operations', it: 'Operation aziendali' },
    period: { en: '2024 – 2025', it: '2024 – 2025' },
    year: '2024–25',
    role: { en: 'Data scientist (LLMs / NLP)', it: 'Data scientist (LLM / NLP)' },
    title: {
      en: 'LLMs for automatic email summarisation and categorisation',
      it: 'LLM per la sintesi e la classificazione automatica delle email',
    },
    seoTitle: { en: 'LLM Email Summarisation & Classification', it: 'LLM per sintesi e classificazione email' },
    kicker: { en: 'LLM automation', it: 'Automazione con LLM' },
    description: {
      en: 'Michelangelo Amoruso Manzari used large language models at AlmavivA to summarise and categorise incoming emails automatically, cutting manual reading and speeding up routing.',
      it: 'Michelangelo Amoruso Manzari ha usato i large language model in AlmavivA per sintetizzare e classificare automaticamente le email in arrivo, riducendo la lettura manuale e velocizzando lo smistamento.',
    },
    tldr: {
      en: 'Large language models that read incoming emails, write a short summary and assign a category, so the right team sees the right message sooner.',
      it: 'Large language model che leggono le email in arrivo, scrivono una breve sintesi e assegnano una categoria, così il team giusto vede prima il messaggio giusto.',
    },
    context: {
      en: 'High-volume shared inboxes are common in large organisations and their clients. Every message must be read, understood and routed.',
      it: 'Le caselle condivise ad alto volume sono comuni nelle grandi organizzazioni e tra i loro clienti. Ogni messaggio va letto, compreso e smistato.',
    },
    problem: {
      en: 'Reading and sorting email by hand is slow, error-prone and does not scale with volume.',
      it: 'Leggere e smistare le email a mano è lento, soggetto a errori e non scala con i volumi.',
    },
    approach: {
      en: [
        'Defined categories and summary formats with the teams that receive the email.',
        'Built an LLM pipeline for summarisation and categorisation.',
        'Evaluated output quality on real samples before relying on it.',
      ],
      it: [
        'Definizione di categorie e formati di sintesi con i team destinatari delle email.',
        'Sviluppo di una pipeline LLM per sintesi e classificazione.',
        'Valutazione della qualità degli output su campioni reali prima dell’utilizzo.',
      ],
    },
    outcome: {
      en: ['Less time spent reading, faster routing to the right owner.', 'A reusable pattern for other unstructured-text workflows.'],
      it: ['Meno tempo speso a leggere, smistamento più rapido verso il giusto referente.', 'Un pattern riutilizzabile per altri flussi di testo non strutturato.'],
    },
    stack: ['Python', 'LLMs', 'NLP', 'Prompt engineering'],
    tags: ['LLM', 'Email triage', 'Summarisation', 'Text classification'],
    services: ['llm', 'agents'],
  }),
  C({
    key: 'energy-forecast',
    cover: 'case-energy',
    client: 'AlmavivA',
    sector: { en: 'Energy', it: 'Energia' },
    period: { en: '2024 – 2025', it: '2024 – 2025' },
    year: '2024–25',
    role: { en: 'Data scientist (forecasting)', it: 'Data scientist (forecasting)' },
    title: {
      en: 'Forecasting electricity consumption from multiple datasets',
      it: 'Prevedere i consumi di energia elettrica da più dataset',
    },
    seoTitle: { en: 'Electricity Consumption Forecasting with AI', it: 'Previsione dei consumi elettrici con l’AI' },
    kicker: { en: 'Time-series forecasting', it: 'Previsione di serie temporali' },
    description: {
      en: 'Michelangelo Amoruso Manzari built AI models at AlmavivA that predict electricity consumption by combining multiple datasets.',
      it: 'Michelangelo Amoruso Manzari ha sviluppato in AlmavivA modelli AI che prevedono i consumi di energia elettrica combinando più dataset.',
    },
    tldr: {
      en: 'AI models that forecast electricity consumption by fusing several data sources, giving planners a forward view instead of a rear-view mirror.',
      it: 'Modelli AI che prevedono i consumi elettrici fondendo più sorgenti di dati, offrendo a chi pianifica una vista in avanti invece di uno specchietto retrovisore.',
    },
    context: {
      en: 'Energy demand depends on time, weather, calendar and activity. Knowing it in advance helps buy, balance and plan.',
      it: 'La domanda di energia dipende da orario, meteo, calendario e attività. Conoscerla in anticipo aiuta ad acquistare, bilanciare e pianificare.',
    },
    problem: {
      en: 'Consumption data alone misses the drivers behind it; the signal lives across multiple datasets that must be aligned.',
      it: 'I soli dati di consumo non spiegano i fattori che li guidano; il segnale è distribuito su più dataset che vanno allineati.',
    },
    approach: {
      en: [
        'Collected and aligned multiple datasets on a common time grid.',
        'Engineered temporal and external-driver features.',
        'Trained and backtested AI forecasting models.',
      ],
      it: [
        'Raccolta e allineamento di più dataset su una griglia temporale comune.',
        'Costruzione di feature temporali e di fattori esterni.',
        'Addestramento e backtesting di modelli AI di previsione.',
      ],
    },
    outcome: {
      en: ['A forecasting pipeline grounded in multiple real data sources.', 'A template reusable for demand, capacity and cost forecasting.'],
      it: ['Una pipeline di previsione basata su più sorgenti dati reali.', 'Un modello riutilizzabile per prevedere domanda, capacità e costi.'],
    },
    stack: ['Python', 'pandas', 'Time series', 'Machine learning'],
    tags: ['Forecasting', 'Energy', 'Time series', 'Data fusion'],
    services: ['forecasting', 'research'],
  }),
];

export const caseByKey = (key: string) => cases.find((c) => c.key === key)!;
