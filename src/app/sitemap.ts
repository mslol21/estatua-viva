import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://estatuaviva.konnexy.com.br';
  return [
    '',
    '/bio',
    '/estatua-viva-para-casamento',
    '/estatua-viva-para-eventos-corporativos',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : path === '/bio' ? 0.9 : 0.8,
  }));
}
