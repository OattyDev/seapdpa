import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    return NextResponse.next();
  }
  
  if (pathname === '/') {
    const preferredLocale = request.cookies.get('preferred-locale')?.value;
    const locale = preferredLocale && isValidLocale(preferredLocale) 
      ? preferredLocale 
      : defaultLocale;
    
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};