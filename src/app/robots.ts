import type { MetadataRoute } from 'next';
import { OFFICIAL_DOMAIN } from '@/lib/site-config';
/** The official domain remains crawlable. Non-official hosts are blocked via robots meta and X-Robots-Tag. */
export default function robots(): MetadataRoute.Robots {
  return { rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
    ], sitemap: `${OFFICIAL_DOMAIN}/sitemap.xml` };
}
