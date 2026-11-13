import { NextRequest, NextResponse } from 'next/server';

/**
 * Host-aware indexing protection and canonical domain normalization:
 * - Redirects apex domain (estatuavivaproducoes.com.br) to official canonical www.
 * - Protects staging / preview environments with noindex headers.
 */
export function middleware(request: NextRequest) {
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '').split(':')[0].toLowerCase();
  
  // 1. Canonical 301 redirect from apex to www
  if (host === 'estatuavivaproducoes.com.br') {
    const canonicalUrl = new URL(request.url);
    canonicalUrl.host = 'www.estatuavivaproducoes.com.br';
    canonicalUrl.protocol = 'https';
    return NextResponse.redirect(canonicalUrl, 301);
  }

  const official = host === 'www.estatuavivaproducoes.com.br';
  const response = NextResponse.next();

  // 2. Protect non-official domains (Vercel previews, staging) from accidental indexing
  if (!official && host !== 'localhost' && !host.startsWith('127.0.0.1')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }

  return response;
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
