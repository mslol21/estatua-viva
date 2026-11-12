import { NextRequest, NextResponse } from 'next/server';
/** Host-aware indexing protection: never expose staging to search engines. */
export function middleware(request: NextRequest) {
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '').split(':')[0].toLowerCase();
  const official = host === 'estatuavivaproducoes.com.br' || host === 'www.estatuavivaproducoes.com.br';
  const response = NextResponse.next();
  if (!official) response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  return response;
}
export const config = { matcher: ['/((?!_next/static|_next/image).*)'] };
