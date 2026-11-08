import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://estatuaviva.konnexy.com.br';
  return ['', '/estatua-viva-para-eventos', '/estatua-viva-para-casamento', '/estatua-viva-para-eventos-corporativos', '/personagens-para-festas'].map(path => ({ url: `${base}${path}` }));
}
