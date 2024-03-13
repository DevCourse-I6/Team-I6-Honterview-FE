import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

import { getUserAuth } from './libs/services/auth';
import { getInterviewInfo } from './libs/services/interview';

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const refreshToken = cookies().get('refreshToken');

  if (pathname.startsWith('/auth/login')) {
    if (refreshToken) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    await getUserAuth();
  }

  if (pathname.startsWith('/interview/video')) {
    const interviewId = request.nextUrl.pathname.split('video/')[1];
    const { data } = await getInterviewInfo(interviewId);
    const { status } = data;

    if (status === 'COMPLETED') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
};

export const config = {
  matcher: ['/auth/login', '/interview/video/:interviewId*'],
};
