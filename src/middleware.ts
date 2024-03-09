import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const cookiesList = cookies();
  const hasRefreshToken = cookiesList.has('refreshToken');

  if (pathname.startsWith('/auth/login') && hasRefreshToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
};

export const config = {
  matcher: ['/auth/login'],
};
