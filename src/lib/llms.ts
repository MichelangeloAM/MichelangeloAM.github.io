// Plain-text renderings of the site for LLMs and AI answer engines (llms.txt standard).
import { SITE_URL, LAST_UPDATED, profile, experience, education } from '@/data/profile';
import { services } from '@/data/services';
import { cases } from '@/data/cases';
import { useCases, dataTypes } from '@/data/use-cases';
import { homeCopy } from '@/data/home';
import { route } from '@/data/routes.mjs';

const u = (p: string) => `${SITE_URL}${p}`;

export function llmsSummary() {
  const en = homeCopy('en');
  return `# ${profile.name}

> ${profile.name} is a Rome-based Senior AI & Machine Learning Engineer. He turns company data (emails, documents, images, transactions, time series, CRM) into AI agents, LLM automation, predictive machine learning models, forecasts and computer vision that improve business performance. He works with companies in Italy, across Europe and remotely, in Italian, English and Spanish.

Key facts:
- Current role: ML & AI Engineer, lead machine learning developer on Groupama Assicurazioni’s claims modernisation (via Alecsandria Digital), since April 2026; coordinates 20+ people across 3 companies.
- Previously: Project Manager & AI Engineer at Imbued (agentic AI platform core, 2025–2026); Data Scientist at AlmavivA (fraud detection for INAIL, computer vision for a European plastic-recycling research project, LLM email summarisation, electricity-consumption forecasting, 2024–2025); Software Engineer at Alecsandria Digital (Angelini AiD, 2023–2024); data-mining developer at Immoveo, Switzerland (2020–2023).
- Education: MSc Engineering in Computer Science, Sapienza University of Rome (ongoing); Master in AI/ML, Datamasters (2024); BSc Computer and Automation Engineering, Polytechnic University of Marche (2019–2023); Politecnico di Milano (2017–2018).
- Skills: Python, pandas, scikit-learn, LightGBM, XGBoost, deep learning, LLMs, agentic AI, RAG, NLP, document extraction, computer vision, time-series forecasting, fraud and anomaly detection, SQL, Docker, Celery, GCP, project management.
- Also ships iOS apps: TravelSwipe and Frosted Survival Quest.
- Contact: ${profile.email} · ${u(route('contact', 'en'))}
- Last updated: ${LAST_UPDATED}

## Services
${services.map((s) => `- [${s.name.en}](${u(s.url('en'))}): ${s.summary.en}`).join('\n')}

## Case studies
${cases.map((c) => `- [${c.title.en}](${u(c.url('en'))}): ${c.tldr.en}`).join('\n')}

## Pages
- [Home](${u('/')}): ${en.meta.description}
- [AI use cases by data type](${u(route('useCases', 'en'))}): ${useCases.length} concrete AI and ML use cases organised by the data a company already has.
- [Research](${u(route('research', 'en'))}): applied AI research, method and education.
- [About](${u(route('about', 'en'))}): full biography and experience.
- [Italiano](${u('/it/')}): versione italiana del sito.

## Optional
- [Full text for LLMs](${u('/llms-full.txt')})
- [LinkedIn](${profile.links.linkedin})
- [GitHub](${profile.links.github})
`;
}

export function llmsFull() {
  const en = homeCopy('en');
  const lines: string[] = [llmsSummary(), '\n---\n', '# Full profile\n'];
  lines.push(`${profile.name}: ${profile.tagline.en}\n`);
  lines.push('## Experience\n');
  for (const r of experience) {
    lines.push(`### ${r.title.en}, ${r.org} (${r.period.en})`);
    r.bullets.en.forEach((b) => lines.push(`- ${b}`));
    lines.push(`Stack: ${r.stack.join(', ')}\n`);
  }
  lines.push('## Education\n');
  education.forEach((e) => lines.push(`- ${e.org}: ${e.title.en} (${e.period.en})`));
  lines.push(`\n## Languages\n${profile.languages.map((l) => `- ${l.name.en}: ${l.level.en}`).join('\n')}\n`);
  lines.push('## Services in detail\n');
  for (const s of services) {
    lines.push(`### ${s.name.en} (${s.timeline.en})\nURL: ${u(s.url('en'))}\n${s.intro.en}`);
    lines.push(`Deliverables: ${s.deliverables.en.join('; ')}.`);
    lines.push(`KPIs: ${s.kpis.en.join('; ')}.`);
    s.faqs.en.forEach((f) => lines.push(`Q: ${f.q}\nA: ${f.a}`));
    lines.push('');
  }
  lines.push('## Case studies in detail\n');
  for (const c of cases) {
    lines.push(`### ${c.title.en}\nURL: ${u(c.url('en'))}\nClient: ${c.client} · Sector: ${c.sector.en} · Period: ${c.period.en} · Role: ${c.role.en}`);
    lines.push(`Summary: ${c.tldr.en}\nContext: ${c.context.en}\nProblem: ${c.problem.en}`);
    lines.push(`Approach:\n${c.approach.en.map((a) => `- ${a}`).join('\n')}`);
    lines.push(`Outcome:\n${c.outcome.en.map((a) => `- ${a}`).join('\n')}`);
    lines.push(`Stack: ${c.stack.join(', ')}\n`);
  }
  lines.push('## AI use cases by data type\n');
  for (const d of dataTypes) {
    lines.push(`### ${d.label.en}`);
    useCases.filter((x) => x.data === d.key).forEach((x) => lines.push(`- ${x.title.en}: ${x.problem.en} Model: ${x.model.en}. KPI: ${x.kpi.en}. Typical timeline: ${x.weeks} weeks.`));
    lines.push('');
  }
  lines.push('## Frequently asked questions\n');
  en.faq.items.forEach((f) => lines.push(`Q: ${f.q}\nA: ${f.a}\n`));
  return lines.join('\n');
}
