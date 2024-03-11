import { type NextRequest } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/auth/login')) {
    // 서버에 인증 확인 후 redirect 처리
    // return NextResponse.redirect(new URL('/', request.url));
  }
};

export const config = {
  matcher: ['/auth/login'],
};
