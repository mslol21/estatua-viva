import type { MetadataRoute } from 'next';
import { OFFICIAL_DOMAIN as SITE_URL } from '@/lib/site-config';

const pages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/estatua-viva-para-eventos', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/estatua-viva-para-casamento', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/estatua-viva-para-eventos-corporativos', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/personagens-para-festas', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/equipe', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/bio', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/perguntas-frequentes', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/natal', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/privacidade', priority: 0.3, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date('2026-11-13');
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: lastMod,
    changeFrequency,
    priority,
  }));
}
