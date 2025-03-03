import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Define routes that require authentication
const publicRoutes = ['/login', '/onboarding', '/forgot', '/reset'];

export async function middleware(req: NextRequest) {

    const token = (req.cookies.get('authToken'));

    const { pathname } = req.nextUrl;

    // Redirect unauthenticated users from protected routes
    if (!publicRoutes.includes(pathname) && !token) {
        const url = new URL('/login', req.url);
        return NextResponse.redirect(url);
    }

    // Prevent authenticated users from accessing login/signup
    if (publicRoutes.includes(pathname) && token) {
        const url = new URL('/organizations', req.url);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$|.*\\.json$|.*\\.txt$).*)',
    ],
};