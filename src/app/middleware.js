import {NextResponse} from 'next/server'

export function middleware(req) {
    console.log(`Path: ${req.nextUrl.pathname}`);
    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
}