import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const refreshToken = cookies().get('refreshToken');

  if (pathname.startsWith('/auth/login')) {
    if (refreshToken) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (pathname.startsWith('/interview/video')) {
    if (!refreshToken) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }
};

export const config = {
  matcher: ['/auth/login', '/interview/video/:interviewId*'],
};
