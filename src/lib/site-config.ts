/** Set NEXT_PUBLIC_SITE_URL=https://estatuavivaproducoes.com.br only after DNS, SSL and production deployment are verified. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://estatuaviva.konnexy.com.br').replace(/\/$/, '');
export const OFFICIAL_DOMAIN = 'https://estatuavivaproducoes.com.br';
