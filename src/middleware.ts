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

  if (pathname.startsWith('/interview/chat')) {
    if (!loginData) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }
};

export const config = {
  matcher: ['/auth/login', '/interview/video/:interviewId*'],
};
