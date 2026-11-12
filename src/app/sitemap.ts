import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/site-config';

const pages = [
  { path: '', priority: 1 },
  { path: '/bio', priority: 0.9 },
  { path: '/perguntas-frequentes', priority: 0.8 },
  { path: '/equipe', priority: 0.7 },
  { path: '/privacidade', priority: 0.2 },
  { path: '/estatua-viva-para-eventos', priority: 0.8 },
  { path: '/estatua-viva-para-casamento', priority: 0.8 },
  { path: '/estatua-viva-para-eventos-corporativos', priority: 0.8 },
  { path: '/personagens-para-festas', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly',
    priority,
  }));
}
