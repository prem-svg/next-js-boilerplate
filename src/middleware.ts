import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from "next-intl/middleware";

// Define routes that do not require authentication
const publicRoutes = ['/login', '/onboarding', '/forgot', '/reset'];

const intlMiddleware = createMiddleware({
  locales: ["en", "ta"], // Supported languages
  defaultLocale: "en",   // Default language
});

export async function middleware(req: NextRequest) {
  // Apply next-intl middleware first
  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;

  const token = true;
  const { pathname } = req.nextUrl;

  // Redirect unauthenticated users from protected routes
  if (!publicRoutes.includes(pathname) && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Prevent authenticated users from accessing login/signup pages
  if (publicRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/organizations', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$|.*\\.json$|.*\\.txt$).*)",
    "/(ta|en)/:path*"
  ],
};
