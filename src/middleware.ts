import { type NextRequest, NextResponse } from 'next/server';

import { getUserAuth } from './libs/services/auth';

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const loginData = await getUserAuth();

  if (pathname.startsWith('/auth/login')) {
    if (loginData) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (pathname.startsWith('/interview/video')) {
    if (!loginData) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  if (pathname.startsWith('/dev/')) {
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (pathname.startsWith('/interview/chat')) {
    if (!loginData) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  if (pathname.startsWith('/interview/presetting')) {
    if (!loginData) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  if (pathname.startsWith('/mypage')) {
    if (!loginData) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  if (
    pathname.startsWith('/admin/login') ||
    pathname.startsWith('/admin/signup')
  ) {
    if (loginData && loginData.data?.role[0].authority === 'ROLE_ADMIN') {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  if (pathname === '/admin') {
    if (!loginData || loginData.data?.role[0].authority !== 'ROLE_ADMIN') {
      const targetURL = !loginData ? '/admin/login' : '/';
      return NextResponse.redirect(new URL(targetURL, request.url));
    }
  }
};

export const config = {
  matcher: [
    '/auth/login',
    '/interview/video/:interviewId*',
    '/dev/:path*',
    '/interview/chat/:interviewId*',
    '/interview/presetting/:firstQuestionId',
    '/mypage',
    '/admin/:path*',
  ],
};
