import type { MetadataRoute } from 'next';
import { OFFICIAL_DOMAIN } from '@/lib/site-config';
/** Robots.txt is host-specific: the staging hostname is always blocked. */
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', disallow: '/' }, sitemap: `${OFFICIAL_DOMAIN}/sitemap.xml` };
}
