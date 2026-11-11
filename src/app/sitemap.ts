import type { MetadataRoute } from 'next';

const BASE_URL = 'https://estatuaviva.konnexy.com.br';

const pages = [
  { path: '', priority: 1 },
  { path: '/bio', priority: 0.9 },
  { path: '/estatua-viva-para-eventos', priority: 0.8 },
  { path: '/estatua-viva-para-casamento', priority: 0.8 },
  { path: '/estatua-viva-para-eventos-corporativos', priority: 0.8 },
  { path: '/personagens-para-festas', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: 'monthly',
    priority,
  }));
}
