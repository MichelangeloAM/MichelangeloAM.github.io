// AI use-case library, organised by the data a company already has.
// Feeds the homepage "What could AI do with your data?" finder and the /ai-use-cases/ hub.
type L = { en: string; it: string };

export type DataType = 'emails' | 'documents' | 'images' | 'transactions' | 'timeseries' | 'crm';
export type Industry = 'insurance' | 'public' | 'health' | 'energy' | 'manufacturing' | 'realestate' | 'retail' | 'finance';

export const dataTypes: { key: DataType; label: L; hint: L; tile: number }[] = [
  { key: 'emails', label: { en: 'Emails & tickets', it: 'Email e ticket' }, hint: { en: 'Shared inboxes, support tickets, chats', it: 'Caselle condivise, ticket, chat' }, tile: 0 },
  { key: 'documents', label: { en: 'Documents & PDFs', it: 'Documenti e PDF' }, hint: { en: 'Claims, contracts, invoices, reports', it: 'Sinistri, contratti, fatture, report' }, tile: 1 },
  { key: 'images', label: { en: 'Images & video', it: 'Immagini e video' }, hint: { en: 'Photos, cameras, scans, inspections', it: 'Foto, telecamere, scansioni, ispezioni' }, tile: 2 },
  { key: 'transactions', label: { en: 'Transactions & records', it: 'Transazioni e record' }, hint: { en: 'Payments, claims history, orders, ledgers', it: 'Pagamenti, storico sinistri, ordini, registri' }, tile: 3 },
  { key: 'timeseries', label: { en: 'Time series & sensors', it: 'Serie temporali e sensori' }, hint: { en: 'Consumption, demand, IoT, logs', it: 'Consumi, domanda, IoT, log' }, tile: 4 },
  { key: 'crm', label: { en: 'Customer & CRM data', it: 'Dati clienti e CRM' }, hint: { en: 'Accounts, interactions, churn, sales', it: 'Account, interazioni, churn, vendite' }, tile: 5 },
];

export const industries: { key: Industry; label: L }[] = [
  { key: 'insurance', label: { en: 'Insurance', it: 'Assicurazioni' } },
  { key: 'finance', label: { en: 'Banking & fintech', it: 'Banche e fintech' } },
  { key: 'public', label: { en: 'Public sector', it: 'Pubblica amministrazione' } },
  { key: 'health', label: { en: 'Healthcare & pharma', it: 'Sanità e pharma' } },
  { key: 'energy', label: { en: 'Energy & utilities', it: 'Energia e utility' } },
  { key: 'manufacturing', label: { en: 'Manufacturing & recycling', it: 'Manifattura e riciclo' } },
  { key: 'realestate', label: { en: 'Real estate', it: 'Real estate' } },
  { key: 'retail', label: { en: 'Retail & consumer', it: 'Retail e consumer' } },
];

export interface UseCase {
  id: string;
  data: DataType;
  industries: Industry[];
  title: L;
  problem: L;
  model: L;
  kpi: L;
  weeks: string;
  proof?: string; // CASE_SLUGS key when Michelangelo has done it before
}

export const useCases: UseCase[] = [
  {
    id: 'email-triage', data: 'emails', industries: ['insurance', 'finance', 'public', 'health', 'energy', 'retail', 'realestate', 'manufacturing'],
    title: { en: 'Inbox triage & summaries', it: 'Triage e sintesi delle email' },
    problem: { en: 'Teams read every message to decide who should handle it.', it: 'I team leggono ogni messaggio per decidere chi deve gestirlo.' },
    model: { en: 'LLM summarisation + classification with confidence thresholds', it: 'Sintesi e classificazione con LLM e soglie di confidenza' },
    kpi: { en: 'Handling time ↓, first-response time ↓', it: 'Tempo di gestione ↓, tempo di prima risposta ↓' },
    weeks: '3–6', proof: 'email-llm',
  },
  {
    id: 'reply-agent', data: 'emails', industries: ['retail', 'finance', 'insurance', 'energy'],
    title: { en: 'Draft-reply agent', it: 'Agente per bozze di risposta' },
    problem: { en: 'Repetitive requests get the same hand-written answers.', it: 'Richieste ripetitive ricevono sempre le stesse risposte scritte a mano.' },
    model: { en: 'Agent with retrieval over policies + human approval', it: 'Agente con retrieval sulle policy + approvazione umana' },
    kpi: { en: 'Tickets per agent ↑, resolution time ↓', it: 'Ticket per operatore ↑, tempo di risoluzione ↓' },
    weeks: '4–8',
  },
  {
    id: 'doc-extraction', data: 'documents', industries: ['insurance', 'finance', 'public', 'health', 'realestate'],
    title: { en: 'Document extraction to structured data', it: 'Estrazione da documenti a dati strutturati' },
    problem: { en: 'People re-type fields from PDFs, forms and reports.', it: 'Le persone ricopiano campi da PDF, moduli e report.' },
    model: { en: 'Document AI / LLM extraction with validation rules', it: 'Document AI / estrazione con LLM e regole di validazione' },
    kpi: { en: 'Manual data entry ↓, errors ↓', it: 'Inserimento manuale ↓, errori ↓' },
    weeks: '4–8', proof: 'groupama-claims',
  },
  {
    id: 'knowledge-rag', data: 'documents', industries: ['insurance', 'finance', 'public', 'health', 'energy', 'manufacturing', 'retail', 'realestate'],
    title: { en: 'Internal knowledge assistant (RAG)', it: 'Assistente sulla conoscenza interna (RAG)' },
    problem: { en: 'Answers are buried in manuals, procedures and wikis.', it: 'Le risposte sono sepolte in manuali, procedure e wiki.' },
    model: { en: 'Retrieval-augmented generation with source citations', it: 'Retrieval-augmented generation con citazione delle fonti' },
    kpi: { en: 'Search time ↓, onboarding speed ↑', it: 'Tempo di ricerca ↓, velocità di onboarding ↑' },
    weeks: '3–6',
  },
  {
    id: 'damage-photos', data: 'images', industries: ['insurance', 'realestate'],
    title: { en: 'Damage assessment from photos', it: 'Valutazione dei danni da foto' },
    problem: { en: 'Experts inspect every photo to estimate damage.', it: 'Gli esperti esaminano ogni foto per stimare il danno.' },
    model: { en: 'Computer vision detection + cost-regression model', it: 'Rilevamento con computer vision + modello di regressione dei costi' },
    kpi: { en: 'Time to estimate ↓, consistency ↑', it: 'Tempo di stima ↓, coerenza ↑' },
    weeks: '8–14',
  },
  {
    id: 'visual-sorting', data: 'images', industries: ['manufacturing', 'energy', 'retail'],
    title: { en: 'Visual sorting & quality inspection', it: 'Smistamento visivo e controllo qualità' },
    problem: { en: 'Manual visual checks are slow and inconsistent.', it: 'I controlli visivi manuali sono lenti e incoerenti.' },
    model: { en: 'Object detection and classification on the line', it: 'Rilevamento e classificazione di oggetti in linea' },
    kpi: { en: 'Throughput ↑, defects missed ↓', it: 'Throughput ↑, difetti non rilevati ↓' },
    weeks: '6–14', proof: 'plastic-cv',
  },
  {
    id: 'claims-cost', data: 'transactions', industries: ['insurance'],
    title: { en: 'Claim cost & severity prediction', it: 'Previsione di costo e severità dei sinistri' },
    problem: { en: 'Reserves and estimates vary by adjuster and arrive late.', it: 'Riserve e stime variano per liquidatore e arrivano tardi.' },
    model: { en: 'Gradient boosting on historical claims + explainability', it: 'Gradient boosting sullo storico sinistri + spiegabilità' },
    kpi: { en: 'Estimate error ↓, handling time ↓', it: 'Errore di stima ↓, tempo di gestione ↓' },
    weeks: '6–12', proof: 'groupama-claims',
  },
  {
    id: 'fraud', data: 'transactions', industries: ['insurance', 'finance', 'public', 'health', 'retail'],
    title: { en: 'Fraud & anomaly detection', it: 'Rilevamento di frodi e anomalie' },
    problem: { en: 'Fraud is rare, hidden and found too late.', it: 'La frode è rara, nascosta e scoperta troppo tardi.' },
    model: { en: 'Supervised + unsupervised models with cost-aware thresholds', it: 'Modelli supervisionati e non, con soglie basate sui costi' },
    kpi: { en: 'Fraud caught ↑, € leakage ↓, false alarms ↓', it: 'Frodi intercettate ↑, € di perdite ↓, falsi allarmi ↓' },
    weeks: '6–12', proof: 'inail-fraud',
  },
  {
    id: 'pricing', data: 'transactions', industries: ['retail', 'realestate', 'insurance', 'finance'],
    title: { en: 'Pricing & valuation models', it: 'Modelli di pricing e valutazione' },
    problem: { en: 'Prices and valuations rely on rules of thumb.', it: 'Prezzi e valutazioni si basano su regole empiriche.' },
    model: { en: 'Regression / boosting on transactions and features', it: 'Regressione / boosting su transazioni e feature' },
    kpi: { en: 'Margin ↑, valuation error ↓', it: 'Margine ↑, errore di valutazione ↓' },
    weeks: '4–10',
  },
  {
    id: 'consumption-forecast', data: 'timeseries', industries: ['energy', 'manufacturing', 'public', 'realestate'],
    title: { en: 'Consumption & load forecasting', it: 'Previsione di consumi e carichi' },
    problem: { en: 'Energy buying and planning react to the past.', it: 'Acquisti energetici e pianificazione reagiscono al passato.' },
    model: { en: 'Time-series ML with weather & calendar drivers', it: 'ML su serie temporali con meteo e calendario' },
    kpi: { en: 'Forecast error ↓, energy spend ↓', it: 'Errore di previsione ↓, spesa energetica ↓' },
    weeks: '3–8', proof: 'energy-forecast',
  },
  {
    id: 'demand-forecast', data: 'timeseries', industries: ['retail', 'manufacturing', 'health'],
    title: { en: 'Demand & staffing forecasting', it: 'Previsione di domanda e personale' },
    problem: { en: 'Over-stock, stock-outs and under-staffed shifts.', it: 'Eccesso di scorte, rotture di stock e turni scoperti.' },
    model: { en: 'Hierarchical forecasting with prediction intervals', it: 'Forecasting gerarchico con intervalli di previsione' },
    kpi: { en: 'Stock-outs ↓, waste ↓, overtime ↓', it: 'Rotture di stock ↓, sprechi ↓, straordinari ↓' },
    weeks: '4–8',
  },
  {
    id: 'predictive-maintenance', data: 'timeseries', industries: ['manufacturing', 'energy'],
    title: { en: 'Predictive maintenance', it: 'Manutenzione predittiva' },
    problem: { en: 'Machines fail unexpectedly and stop production.', it: 'Le macchine si guastano all’improvviso e fermano la produzione.' },
    model: { en: 'Anomaly detection on sensor streams', it: 'Rilevamento di anomalie sui flussi dei sensori' },
    kpi: { en: 'Unplanned downtime ↓', it: 'Fermi non pianificati ↓' },
    weeks: '6–12',
  },
  {
    id: 'churn', data: 'crm', industries: ['insurance', 'finance', 'energy', 'retail'],
    title: { en: 'Churn prediction & retention', it: 'Previsione del churn e retention' },
    problem: { en: 'Customers leave without warning.', it: 'I clienti se ne vanno senza preavviso.' },
    model: { en: 'Propensity model + next-best-action rules', it: 'Modello di propensione + regole di next-best-action' },
    kpi: { en: 'Retention ↑, customer lifetime value ↑', it: 'Retention ↑, customer lifetime value ↑' },
    weeks: '4–8',
  },
  {
    id: 'lead-scoring', data: 'crm', industries: ['finance', 'realestate', 'retail', 'insurance'],
    title: { en: 'Lead scoring & sales prioritisation', it: 'Lead scoring e priorità commerciali' },
    problem: { en: 'Sales time goes to leads that will not convert.', it: 'Il tempo commerciale va su lead che non convertiranno.' },
    model: { en: 'Classification on CRM history and interactions', it: 'Classificazione su storico CRM e interazioni' },
    kpi: { en: 'Conversion rate ↑, sales cycle ↓', it: 'Tasso di conversione ↑, ciclo di vendita ↓' },
    weeks: '3–6',
  },
  {
    id: 'segmentation', data: 'crm', industries: ['retail', 'finance', 'insurance', 'energy', 'health', 'public'],
    title: { en: 'Customer segmentation & insights', it: 'Segmentazione clienti e insight' },
    problem: { en: 'Everyone gets the same offer and message.', it: 'Tutti ricevono la stessa offerta e lo stesso messaggio.' },
    model: { en: 'Clustering + LLM-written segment profiles', it: 'Clustering + profili dei segmenti scritti con LLM' },
    kpi: { en: 'Campaign response ↑, cost per acquisition ↓', it: 'Risposta alle campagne ↑, costo di acquisizione ↓' },
    weeks: '3–6',
  },
];
