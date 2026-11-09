import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://estatuaviva.konnexy.com.br';
  return [
    '',
    '/bio',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date('2026-11-09'),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : path === '/bio' ? 0.9 : 0.8,
  }));
}
