import type { APIRoute } from 'astro';
import { SITE_URL } from '@/data/profile';

// Explicitly welcome classic search engines and AI answer engines (GEO).
const agents = [
  'Googlebot', 'Bingbot', 'DuckDuckBot', 'Applebot', 'Applebot-Extended', 'Google-Extended',
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User', 'CCBot', 'cohere-ai', 'Meta-ExternalAgent', 'Amazonbot', 'MistralAI-User',
];

export const GET: APIRoute = () => {
  const body = [
    '# Michelangelo Amoruso Manzari · AI & ML Engineer',
    '# Humans and AI assistants are welcome. See /llms.txt for a concise summary.',
    '',
    ...agents.flatMap((a) => [`User-agent: ${a}`, 'Allow: /', '']),
    'User-agent: *',
    'Allow: /',
    'Disallow: /404/',
    '',
    `Sitemap: ${SITE_URL}/sitemap-index.xml`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
