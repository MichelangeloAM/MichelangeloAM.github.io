import { serviceUrl, SERVICE_SLUGS } from './routes.mjs';
import type { Lang } from './profile';

type L = { en: string; it: string };
type LL = { en: string[]; it: string[] };

export interface Service {
  key: keyof typeof SERVICE_SLUGS;
  glyph: number; // index into the 3D glyph sheet
  name: L;
  short: L;
  summary: L;
  serviceType: string;
  intro: L;
  problems: LL;
  deliverables: LL;
  kpis: LL;
  steps: { en: { t: string; d: string }[]; it: { t: string; d: string }[] };
  stack: string[];
  timeline: L;
  cases: string[]; // CASE_SLUGS keys
  faqs: { en: { q: string; a: string }[]; it: { q: string; a: string }[] };
  url: (lang: Lang) => string;
}

const S = (s: Omit<Service, 'url'>): Service => ({ ...s, url: (lang) => serviceUrl(s.key, lang) });

export const services: Service[] = [
  S({
    key: 'audit',
    glyph: 0,
    name: { en: 'AI Opportunity Audit', it: 'AI Opportunity Audit' },
    short: { en: 'Find where your data can move your KPIs.', it: 'Scopri dove i tuoi dati possono muovere i KPI.' },
    summary: {
      en: 'A focused two-week assessment of your data, processes and goals that ends with a prioritised, costed roadmap of AI and machine learning opportunities.',
      it: 'Un’analisi mirata di due settimane su dati, processi e obiettivi che si conclude con una roadmap prioritizzata e stimata delle opportunità di AI e machine learning.',
    },
    serviceType: 'AI strategy and data assessment',
    intro: {
      en: 'Most companies already own the raw material for AI: claims, emails, documents, transactions, sensor readings, CRM history. The AI Opportunity Audit maps that data against the numbers you care about and tells you, honestly, which AI or ML projects will pay back, which need better data first, and which are not worth doing.',
      it: 'La maggior parte delle aziende possiede già la materia prima per l’AI: sinistri, email, documenti, transazioni, letture di sensori, storico CRM. L’AI Opportunity Audit mette in relazione quei dati con i numeri che contano per te e ti dice, con onestà, quali progetti di AI o ML ripagheranno l’investimento, quali richiedono prima dati migliori e quali non vale la pena fare.',
    },
    problems: {
      en: ['You know AI matters but not where to start.', 'Data is scattered across tools, teams and spreadsheets.', 'Previous pilots never reached production.', 'You need a business case before you can get budget.'],
      it: ['Sai che l’AI è importante ma non da dove partire.', 'I dati sono sparsi tra strumenti, team e fogli di calcolo.', 'I pilota precedenti non sono mai arrivati in produzione.', 'Ti serve un business case prima di ottenere il budget.'],
    },
    deliverables: {
      en: ['Data inventory and quality scorecard', 'Use-case shortlist ranked by impact, feasibility and risk', 'KPI impact tree linking each use case to a business metric', 'Architecture sketch and build-vs-buy recommendation', 'Costed 90-day roadmap and a ready-to-run pilot plan'],
      it: ['Inventario dei dati e scorecard di qualità', 'Shortlist di casi d’uso ordinati per impatto, fattibilità e rischio', 'Albero di impatto sui KPI che collega ogni caso d’uso a una metrica di business', 'Schema architetturale e raccomandazione build-vs-buy', 'Roadmap a 90 giorni con stime e un piano pilota pronto da avviare'],
    },
    kpis: { en: ['Time-to-first-value', 'Projected cost savings', 'Projected revenue or risk impact'], it: ['Tempo al primo valore', 'Risparmi stimati', 'Impatto stimato su ricavi o rischio'] },
    steps: {
      en: [
        { t: 'Listen', d: 'Interviews with business owners and the people doing the work today.' },
        { t: 'Inspect', d: 'Hands-on look at samples of your real data: volume, quality, labels, access.' },
        { t: 'Size', d: 'Each opportunity is scored on impact, feasibility, data readiness and risk.' },
        { t: 'Decide', d: 'You get a roadmap, a pilot plan and a clear go / no-go per use case.' },
      ],
      it: [
        { t: 'Ascolto', d: 'Interviste con i responsabili di business e con chi svolge il lavoro oggi.' },
        { t: 'Ispezione', d: 'Analisi diretta di campioni dei tuoi dati reali: volume, qualità, etichette, accessi.' },
        { t: 'Stima', d: 'Ogni opportunità viene valutata per impatto, fattibilità, maturità dei dati e rischio.' },
        { t: 'Decisione', d: 'Ricevi una roadmap, un piano pilota e un go / no-go chiaro per ogni caso d’uso.' },
      ],
    },
    stack: ['Python', 'SQL', 'pandas', 'Data profiling', 'Workshops'],
    timeline: { en: '2 weeks', it: '2 settimane' },
    cases: ['groupama-claims', 'inail-fraud', 'energy-forecast'],
    faqs: {
      en: [
        { q: 'Do I need clean data before the audit?', a: 'No. Assessing how usable your data really is, and what it would take to fix it, is part of the audit.' },
        { q: 'What happens after the audit?', a: 'You can run the pilot with me, with your own team, or with another vendor. The roadmap is yours either way.' },
      ],
      it: [
        { q: 'Servono dati puliti prima dell’audit?', a: 'No. Valutare quanto i tuoi dati siano davvero utilizzabili, e cosa servirebbe per sistemarli, fa parte dell’audit.' },
        { q: 'Cosa succede dopo l’audit?', a: 'Puoi realizzare il pilota con me, con il tuo team o con un altro fornitore. La roadmap resta comunque tua.' },
      ],
    },
  }),
  S({
    key: 'agents',
    glyph: 1,
    name: { en: 'Agentic AI development', it: 'Sviluppo di agenti AI' },
    short: { en: 'AI agents that do real work, safely.', it: 'Agenti AI che svolgono lavoro reale, in sicurezza.' },
    summary: {
      en: 'Design and build of production AI agents that plan, call your tools and APIs, and complete multi-step tasks with guardrails, monitoring and a human in the loop where it matters.',
      it: 'Progettazione e sviluppo di agenti AI in produzione che pianificano, usano i tuoi strumenti e le tue API e completano attività multi-step con guardrail, monitoraggio e supervisione umana dove serve.',
    },
    serviceType: 'AI agent development',
    intro: {
      en: 'An agent is only useful if it is reliable. I build agentic systems the way I built the core agentic AI algorithms at Imbued: clear task boundaries, deterministic tools, queue-based orchestration (Docker, Celery), evaluation sets, and logs you can audit.',
      it: 'Un agente è utile solo se è affidabile. Costruisco sistemi agentici come ho fatto per gli algoritmi di agentic AI di Imbued: confini chiari dei compiti, tool deterministici, orchestrazione su code (Docker, Celery), set di valutazione e log verificabili.',
    },
    problems: {
      en: ['Teams lose hours on repetitive multi-step work across tools.', 'Chatbot pilots answer questions but cannot act.', 'Agents demo well but break on real data.'],
      it: ['I team perdono ore in attività ripetitive multi-step tra più strumenti.', 'I chatbot pilota rispondono alle domande ma non agiscono.', 'Gli agenti funzionano in demo ma si rompono sui dati reali.'],
    },
    deliverables: {
      en: ['Agent architecture and tool design', 'Production agent service (API, workers, queues)', 'Evaluation suite and regression tests', 'Guardrails, permissions and audit logs', 'Monitoring dashboard and runbook'],
      it: ['Architettura dell’agente e progettazione dei tool', 'Servizio agente in produzione (API, worker, code)', 'Suite di valutazione e test di regressione', 'Guardrail, permessi e log di audit', 'Dashboard di monitoraggio e runbook'],
    },
    kpis: { en: ['Hours saved per week', 'Task completion rate', 'Escalation rate'], it: ['Ore risparmiate a settimana', 'Tasso di completamento dei task', 'Tasso di escalation'] },
    steps: {
      en: [
        { t: 'Map the task', d: 'Break the workflow into steps, decisions and tools.' },
        { t: 'Build tools first', d: 'Reliable functions over your systems before any prompting.' },
        { t: 'Orchestrate', d: 'Planner, workers and queues with retries and timeouts.' },
        { t: 'Evaluate & ship', d: 'Test sets, guardrails and staged rollout with monitoring.' },
      ],
      it: [
        { t: 'Mappa del compito', d: 'Scomposizione del flusso in passaggi, decisioni e strumenti.' },
        { t: 'Prima i tool', d: 'Funzioni affidabili sui tuoi sistemi prima di qualsiasi prompt.' },
        { t: 'Orchestrazione', d: 'Planner, worker e code con retry e timeout.' },
        { t: 'Valutazione e rilascio', d: 'Set di test, guardrail e rilascio graduale con monitoraggio.' },
      ],
    },
    stack: ['Python', 'LLMs', 'Tool calling', 'Docker', 'Celery', 'Computer vision'],
    timeline: { en: '4–10 weeks', it: '4–10 settimane' },
    cases: ['imbued-agents', 'email-llm'],
    faqs: {
      en: [
        { q: 'What is the difference between an AI agent and a chatbot?', a: 'A chatbot answers. An agent plans and acts: it calls tools and APIs, reads and writes data, and completes a multi-step task, ideally with checks and a human approving the risky steps.' },
        { q: 'Which LLMs do you use?', a: 'Whichever fits the task, budget and data-residency constraints: frontier hosted models or open-weight models deployed privately. The architecture keeps the model swappable.' },
      ],
      it: [
        { q: 'Che differenza c’è tra un agente AI e un chatbot?', a: 'Un chatbot risponde. Un agente pianifica e agisce: usa tool e API, legge e scrive dati e completa un compito multi-step, idealmente con controlli e un umano che approva i passaggi rischiosi.' },
        { q: 'Quali LLM utilizzi?', a: 'Quello più adatto a compito, budget e vincoli di residenza dei dati: modelli frontier in cloud o modelli open-weight installati privatamente. L’architettura mantiene il modello sostituibile.' },
      ],
    },
  }),
  S({
    key: 'llm',
    glyph: 2,
    name: { en: 'LLM automation, document AI & RAG', it: 'Automazione con LLM, document AI e RAG' },
    short: { en: 'Read, extract, summarise and route, at scale.', it: 'Leggere, estrarre, sintetizzare e smistare, su larga scala.' },
    summary: {
      en: 'Large language model pipelines that summarise and classify emails, extract fields from documents and answer questions over your knowledge base with citations.',
      it: 'Pipeline basate su large language model che sintetizzano e classificano email, estraggono campi dai documenti e rispondono a domande sulla tua knowledge base con citazioni.',
    },
    serviceType: 'LLM integration and document AI',
    intro: {
      en: 'Unstructured text is where most company knowledge hides. At AlmavivA I used LLMs to summarise and categorise email automatically; for insurance claims I work on extracting what matters from documentation. The goal is always the same: fewer manual reads, faster routing, structured data you can analyse.',
      it: 'Il testo non strutturato è dove si nasconde gran parte della conoscenza aziendale. In AlmavivA ho usato gli LLM per sintetizzare e classificare automaticamente le email; nei sinistri assicurativi lavoro sull’estrazione delle informazioni rilevanti dalla documentazione. L’obiettivo è sempre lo stesso: meno letture manuali, smistamento più rapido, dati strutturati da analizzare.',
    },
    problems: {
      en: ['Shared inboxes overflow and urgent items get missed.', 'People re-type data from PDFs into systems.', 'Internal knowledge is hard to find.'],
      it: ['Le caselle condivise traboccano e le urgenze si perdono.', 'Le persone ricopiano dati dai PDF nei sistemi.', 'La conoscenza interna è difficile da trovare.'],
    },
    deliverables: {
      en: ['Email / ticket triage pipeline', 'Document extraction to structured fields', 'RAG assistant with source citations', 'Accuracy evaluation on your own samples', 'Privacy-aware deployment (cloud or private)'],
      it: ['Pipeline di triage per email e ticket', 'Estrazione da documenti a campi strutturati', 'Assistente RAG con citazione delle fonti', 'Valutazione dell’accuratezza sui tuoi campioni', 'Deployment attento alla privacy (cloud o privato)'],
    },
    kpis: { en: ['Handling time', 'Routing accuracy', 'Manual data entry removed'], it: ['Tempo di gestione', 'Accuratezza di smistamento', 'Inserimento manuale eliminato'] },
    steps: {
      en: [
        { t: 'Sample', d: 'Collect and label a representative slice of real messages or documents.' },
        { t: 'Prototype', d: 'Prompting, extraction schemas and retrieval tested against the labels.' },
        { t: 'Harden', d: 'Validation, fallbacks, confidence thresholds and human review queues.' },
        { t: 'Integrate', d: 'Connect to your inbox, DMS or CRM and monitor quality over time.' },
      ],
      it: [
        { t: 'Campione', d: 'Raccolta ed etichettatura di un campione rappresentativo di messaggi o documenti reali.' },
        { t: 'Prototipo', d: 'Prompt, schemi di estrazione e retrieval testati sulle etichette.' },
        { t: 'Robustezza', d: 'Validazione, fallback, soglie di confidenza e code di revisione umana.' },
        { t: 'Integrazione', d: 'Collegamento a casella email, DMS o CRM e monitoraggio della qualità nel tempo.' },
      ],
    },
    stack: ['Python', 'LLMs', 'Embeddings', 'Vector search', 'NLP', 'GCP'],
    timeline: { en: '3–8 weeks', it: '3–8 settimane' },
    cases: ['email-llm', 'groupama-claims'],
    faqs: {
      en: [
        { q: 'Is my data safe with LLMs?', a: 'Designs follow GDPR principles: data minimisation, EU hosting or private models when needed, no training on your data by third parties, and access logging.' },
        { q: 'What is RAG?', a: 'Retrieval-augmented generation: the model first retrieves relevant passages from your documents, then answers using only those passages, citing them. It reduces hallucinations and keeps answers current.' },
      ],
      it: [
        { q: 'I miei dati sono al sicuro con gli LLM?', a: 'I progetti seguono i principi del GDPR: minimizzazione dei dati, hosting UE o modelli privati quando serve, nessun addestramento di terzi sui tuoi dati e log degli accessi.' },
        { q: 'Che cos’è la RAG?', a: 'Retrieval-augmented generation: il modello recupera prima i passaggi pertinenti dai tuoi documenti, poi risponde usando solo quelli e li cita. Riduce le allucinazioni e mantiene le risposte aggiornate.' },
      ],
    },
  }),
  S({
    key: 'ml',
    glyph: 3,
    name: { en: 'Machine learning & predictive analytics', it: 'Machine learning e analisi predittiva' },
    short: { en: 'Predict costs, catch fraud, score risk.', it: 'Prevedere costi, scovare frodi, valutare il rischio.' },
    summary: {
      en: 'Supervised and unsupervised machine learning on your tabular data: cost and severity prediction, fraud and anomaly detection, scoring and segmentation, with explainability built in.',
      it: 'Machine learning supervisionato e non supervisionato sui tuoi dati tabellari: previsione di costi e severità, rilevamento di frodi e anomalie, scoring e segmentazione, con spiegabilità integrata.',
    },
    serviceType: 'Machine learning development',
    intro: {
      en: 'Classic machine learning still delivers most of the measurable value in enterprises. I build gradient-boosting and deep-learning models on real operational data: crash-cost prediction for Groupama’s claims, fraud detection on INAIL’s database. Feature engineering, honest validation and explainability come first.',
      it: 'Il machine learning “classico” genera ancora gran parte del valore misurabile nelle aziende. Sviluppo modelli di gradient boosting e deep learning su dati operativi reali: previsione dei costi dei sinistri per Groupama, rilevamento frodi sul database INAIL. Feature engineering, validazione onesta e spiegabilità vengono prima di tutto.',
    },
    problems: {
      en: ['Estimates depend on a few experts and vary case by case.', 'Fraud and leakage are found too late, by chance.', 'Dashboards show the past but not what will happen.'],
      it: ['Le stime dipendono da pochi esperti e variano caso per caso.', 'Frodi e perdite emergono troppo tardi, per caso.', 'Le dashboard mostrano il passato ma non cosa succederà.'],
    },
    deliverables: {
      en: ['Feature pipeline over your data sources', 'Validated model (LightGBM / XGBoost / deep learning)', 'Explainability report (feature importance, SHAP-style drivers)', 'Scoring API or batch job', 'Drift and performance monitoring'],
      it: ['Pipeline di feature sulle tue sorgenti dati', 'Modello validato (LightGBM / XGBoost / deep learning)', 'Report di spiegabilità (importanza delle feature, driver in stile SHAP)', 'API di scoring o job batch', 'Monitoraggio di drift e prestazioni'],
    },
    kpis: { en: ['Estimate error vs. experts', 'Fraud caught / € leakage', 'Manual review effort'], it: ['Errore di stima vs. esperti', 'Frodi intercettate / € di perdite', 'Sforzo di revisione manuale'] },
    steps: {
      en: [
        { t: 'Frame', d: 'Define the decision, the target and the cost of each type of error.' },
        { t: 'Engineer', d: 'Join, clean and engineer features from the data you already have.' },
        { t: 'Model', d: 'Baselines first, then boosted trees or deep learning, validated out-of-time.' },
        { t: 'Operate', d: 'Deploy scoring, explain decisions, monitor drift, retrain on schedule.' },
      ],
      it: [
        { t: 'Inquadramento', d: 'Definizione della decisione, del target e del costo di ogni tipo di errore.' },
        { t: 'Feature', d: 'Unione, pulizia e costruzione delle feature dai dati che già possiedi.' },
        { t: 'Modello', d: 'Prima le baseline, poi alberi boosted o deep learning, validati out-of-time.' },
        { t: 'Esercizio', d: 'Scoring in produzione, spiegazione delle decisioni, monitoraggio del drift, retraining programmato.' },
      ],
    },
    stack: ['Python', 'pandas', 'scikit-learn', 'LightGBM', 'XGBoost', 'Deep learning', 'SQL'],
    timeline: { en: '4–12 weeks', it: '4–12 settimane' },
    cases: ['groupama-claims', 'inail-fraud'],
    faqs: {
      en: [
        { q: 'Do I need big data for machine learning?', a: 'Rarely. Thousands of well-labelled historical cases are often enough for a useful tabular model. Data quality and a clear target matter more than volume.' },
        { q: 'Can the model explain its decisions?', a: 'Yes. Every model ships with global and per-case explanations so experts can see which factors drove a prediction and challenge it.' },
      ],
      it: [
        { q: 'Servono big data per il machine learning?', a: 'Raramente. Spesso bastano alcune migliaia di casi storici ben etichettati per un modello tabellare utile. Qualità dei dati e un target chiaro contano più del volume.' },
        { q: 'Il modello sa spiegare le sue decisioni?', a: 'Sì. Ogni modello include spiegazioni globali e per singolo caso, così gli esperti vedono quali fattori hanno guidato una previsione e possono contestarla.' },
      ],
    },
  }),
  S({
    key: 'forecasting',
    glyph: 4,
    name: { en: 'Time-series forecasting', it: 'Previsione di serie temporali' },
    short: { en: 'Know demand, load and spend before they happen.', it: 'Conosci domanda, carichi e costi prima che accadano.' },
    summary: {
      en: 'Forecasting models for consumption, demand and capacity that combine historical series with external drivers such as weather and calendar, with uncertainty you can plan around.',
      it: 'Modelli di previsione per consumi, domanda e capacità che combinano serie storiche e fattori esterni come meteo e calendario, con un’incertezza su cui poter pianificare.',
    },
    serviceType: 'Forecasting and predictive analytics',
    intro: {
      en: 'At AlmavivA I built AI models that predict electricity consumption from multiple datasets. The same approach works for sales, call volumes, inventory and staffing: merge the right signals, model seasonality and events, and always report a confidence band, not a single line.',
      it: 'In AlmavivA ho sviluppato modelli AI che prevedono i consumi di energia elettrica a partire da più dataset. Lo stesso approccio funziona per vendite, volumi di chiamate, magazzino e personale: unire i segnali giusti, modellare stagionalità ed eventi e riportare sempre una banda di confidenza, non una sola linea.',
    },
    problems: {
      en: ['Planning relies on last year plus a gut feeling.', 'Over- and under-provisioning both cost money.', 'External factors (weather, holidays) are ignored.'],
      it: ['La pianificazione si basa sull’anno scorso più l’intuito.', 'Sovra e sotto-dimensionamento costano entrambi.', 'I fattori esterni (meteo, festività) vengono ignorati.'],
    },
    deliverables: {
      en: ['Data fusion of internal and external signals', 'Forecast models with prediction intervals', 'Backtesting report against your current method', 'Automated daily / weekly forecast job', 'Planner-friendly dashboard or export'],
      it: ['Fusione di segnali interni ed esterni', 'Modelli di previsione con intervalli', 'Report di backtesting rispetto al metodo attuale', 'Job automatico di previsione giornaliero / settimanale', 'Dashboard o export pensati per chi pianifica'],
    },
    kpis: { en: ['Forecast error (MAPE / MAE)', 'Stock-outs and waste', 'Energy or capacity spend'], it: ['Errore di previsione (MAPE / MAE)', 'Rotture di stock e sprechi', 'Spesa energetica o di capacità'] },
    steps: {
      en: [
        { t: 'Collect', d: 'History plus drivers: weather, calendar, prices, promotions, events.' },
        { t: 'Baseline', d: 'Measure your current method so improvement is provable.' },
        { t: 'Model', d: 'Statistical and ML models, ensembles, prediction intervals.' },
        { t: 'Automate', d: 'Scheduled forecasts with monitoring and alerting.' },
      ],
      it: [
        { t: 'Raccolta', d: 'Storico più fattori: meteo, calendario, prezzi, promozioni, eventi.' },
        { t: 'Baseline', d: 'Misura del metodo attuale, per dimostrare il miglioramento.' },
        { t: 'Modello', d: 'Modelli statistici e di ML, ensemble, intervalli di previsione.' },
        { t: 'Automazione', d: 'Previsioni programmate con monitoraggio e alert.' },
      ],
    },
    stack: ['Python', 'pandas', 'LightGBM', 'Time series', 'SQL', 'GCP'],
    timeline: { en: '3–8 weeks', it: '3–8 settimane' },
    cases: ['energy-forecast'],
    faqs: {
      en: [
        { q: 'How much history do I need?', a: 'Ideally two full seasonal cycles (for yearly patterns, two years). Less can work when strong external drivers are available.' },
        { q: 'Why a confidence band?', a: 'Because every forecast is uncertain. A band lets you plan for the likely range instead of trusting a single number.' },
      ],
      it: [
        { q: 'Quanto storico serve?', a: 'Idealmente due cicli stagionali completi (per pattern annuali, due anni). Ne basta meno se sono disponibili fattori esterni significativi.' },
        { q: 'Perché una banda di confidenza?', a: 'Perché ogni previsione è incerta. Una banda ti permette di pianificare sull’intervallo probabile invece di fidarti di un solo numero.' },
      ],
    },
  }),
  S({
    key: 'vision',
    glyph: 5,
    name: { en: 'Computer vision', it: 'Computer vision' },
    short: { en: 'Turn images and video into decisions.', it: 'Trasformare immagini e video in decisioni.' },
    summary: {
      en: 'Detection, classification and inspection models for images and video: from sorting plastic waste on a conveyor to assessing damage from photos.',
      it: 'Modelli di rilevamento, classificazione e ispezione per immagini e video: dallo smistamento dei rifiuti plastici su nastro alla valutazione dei danni da foto.',
    },
    serviceType: 'Computer vision development',
    intro: {
      en: 'I worked on computer vision in a European research project on plastic recycling and used it inside Imbued’s agentic platform. Vision projects succeed on data strategy (what to capture, how to label, which edge cases matter) as much as on model choice.',
      it: 'Ho lavorato sulla computer vision in un progetto di ricerca europeo sul riciclo della plastica e l’ho integrata nella piattaforma agentica di Imbued. I progetti di visione riescono grazie alla strategia sui dati (cosa acquisire, come etichettare, quali casi limite contano) tanto quanto alla scelta del modello.',
    },
    problems: {
      en: ['Visual checks are slow, tiring and inconsistent.', 'Photos are collected but never analysed.', 'Sorting or inspection lines need higher throughput.'],
      it: ['I controlli visivi sono lenti, faticosi e incoerenti.', 'Le foto vengono raccolte ma mai analizzate.', 'Le linee di smistamento o ispezione richiedono più throughput.'],
    },
    deliverables: {
      en: ['Data capture and labelling plan', 'Detection / classification model', 'Evaluation on real edge cases', 'Edge or cloud inference service', 'Feedback loop for continuous improvement'],
      it: ['Piano di acquisizione ed etichettatura dei dati', 'Modello di rilevamento / classificazione', 'Valutazione su casi limite reali', 'Servizio di inferenza edge o cloud', 'Ciclo di feedback per il miglioramento continuo'],
    },
    kpis: { en: ['Detection precision / recall', 'Throughput per hour', 'Manual inspections avoided'], it: ['Precisione / recall del rilevamento', 'Throughput orario', 'Ispezioni manuali evitate'] },
    steps: {
      en: [
        { t: 'Capture', d: 'Define cameras, lighting and the classes that matter.' },
        { t: 'Label', d: 'Efficient labelling with clear guidelines and quality checks.' },
        { t: 'Train', d: 'Fine-tune proven architectures; measure per class.' },
        { t: 'Deploy', d: 'Run at the edge or in the cloud, and learn from mistakes.' },
      ],
      it: [
        { t: 'Acquisizione', d: 'Definizione di camere, illuminazione e classi rilevanti.' },
        { t: 'Etichettatura', d: 'Labelling efficiente con linee guida chiare e controlli di qualità.' },
        { t: 'Addestramento', d: 'Fine-tuning di architetture consolidate; misure per classe.' },
        { t: 'Deployment', d: 'Esecuzione edge o cloud, imparando dagli errori.' },
      ],
    },
    stack: ['Python', 'Deep learning', 'Computer vision', 'Docker'],
    timeline: { en: '6–14 weeks', it: '6–14 settimane' },
    cases: ['plastic-cv', 'imbued-agents'],
    faqs: {
      en: [
        { q: 'How many images do I need?', a: 'It depends on the number of classes and their variability; with modern pre-trained models a few hundred labelled examples per class is often a good start.' },
        { q: 'Can it run without the cloud?', a: 'Yes. Models can be optimised to run on edge devices next to the camera when latency or privacy require it.' },
      ],
      it: [
        { q: 'Quante immagini servono?', a: 'Dipende dal numero di classi e dalla loro variabilità; con i moderni modelli pre-addestrati qualche centinaio di esempi etichettati per classe è spesso un buon inizio.' },
        { q: 'Può funzionare senza cloud?', a: 'Sì. I modelli possono essere ottimizzati per girare su dispositivi edge accanto alla camera quando latenza o privacy lo richiedono.' },
      ],
    },
  }),
  S({
    key: 'research',
    glyph: 6,
    name: { en: 'Applied AI research & R&D', it: 'Ricerca applicata e R&D in AI' },
    short: { en: 'From paper to prototype to production.', it: 'Dal paper al prototipo alla produzione.' },
    summary: {
      en: 'Applied research for companies and funded projects: literature and state-of-the-art reviews, benchmarks on your data, proofs of concept and the bridge to production.',
      it: 'Ricerca applicata per aziende e progetti finanziati: analisi della letteratura e dello stato dell’arte, benchmark sui tuoi dati, proof of concept e il ponte verso la produzione.',
    },
    serviceType: 'Applied AI research and development',
    intro: {
      en: 'Research is how you de-risk an ambitious AI idea before betting on it. I contributed to a European research project on plastic recycling with computer vision and I am completing an MSc in Computer Science at Sapienza focused on AI/ML and project management. I bring academic rigour with a delivery mindset.',
      it: 'La ricerca è il modo per ridurre il rischio di un’idea AI ambiziosa prima di puntarci. Ho contribuito a un progetto di ricerca europeo sul riciclo della plastica con la computer vision e sto completando una laurea magistrale in Computer Science alla Sapienza con focus su AI/ML e project management. Porto rigore accademico con una mentalità orientata alla consegna.',
    },
    problems: {
      en: ['You are not sure a problem is solvable with today’s AI.', 'You need evidence for a grant, an investor or a board.', 'Vendors promise results without benchmarks.'],
      it: ['Non sai se un problema è risolvibile con l’AI di oggi.', 'Ti servono evidenze per un bando, un investitore o un CdA.', 'I fornitori promettono risultati senza benchmark.'],
    },
    deliverables: {
      en: ['State-of-the-art review', 'Benchmark of candidate methods on your data', 'Proof of concept with documented results', 'Technical sections for grant or R&D proposals', 'Production roadmap'],
      it: ['Analisi dello stato dell’arte', 'Benchmark dei metodi candidati sui tuoi dati', 'Proof of concept con risultati documentati', 'Sezioni tecniche per bandi o proposte R&D', 'Roadmap verso la produzione'],
    },
    kpis: { en: ['Evidence quality', 'Time to decision', 'Technical risk retired'], it: ['Qualità delle evidenze', 'Tempo alla decisione', 'Rischio tecnico eliminato'] },
    steps: {
      en: [
        { t: 'Question', d: 'Turn the idea into a testable hypothesis and success metric.' },
        { t: 'Survey', d: 'Review literature, open models and prior art.' },
        { t: 'Experiment', d: 'Tracked experiments and fair benchmarks on your data.' },
        { t: 'Transfer', d: 'Document, present and plan the path to production.' },
      ],
      it: [
        { t: 'Domanda', d: 'Trasformare l’idea in un’ipotesi verificabile con una metrica di successo.' },
        { t: 'Rassegna', d: 'Analisi di letteratura, modelli open e stato dell’arte.' },
        { t: 'Esperimenti', d: 'Esperimenti tracciati e benchmark equi sui tuoi dati.' },
        { t: 'Trasferimento', d: 'Documentare, presentare e pianificare il percorso verso la produzione.' },
      ],
    },
    stack: ['Python', 'Experiment tracking', 'Deep learning', 'Statistics'],
    timeline: { en: '4–16 weeks', it: '4–16 settimane' },
    cases: ['plastic-cv', 'energy-forecast'],
    faqs: {
      en: [
        { q: 'Do you work on EU-funded projects?', a: 'Yes. I have worked inside a European research project and can support consortia on the technical work packages.' },
        { q: 'Who owns the results?', a: 'You do, as agreed in the contract. Code, data and reports are delivered to you.' },
      ],
      it: [
        { q: 'Lavori su progetti finanziati dall’UE?', a: 'Sì. Ho lavorato in un progetto di ricerca europeo e posso supportare i consorzi nei work package tecnici.' },
        { q: 'Di chi sono i risultati?', a: 'Tuoi, come previsto dal contratto. Codice, dati e report vengono consegnati a te.' },
      ],
    },
  }),
];

export const serviceByKey = (key: string) => services.find((s) => s.key === key)!;
