import { revalidateTag } from 'next/cache';
import Link from 'next/link';

import DividerVertical from '@/components/dividerVertical';
import ReissueAccessTokenComponent from '@/components/reissueAccessTokenComponent';
import { getUserAuth } from '@/libs/services/auth';

import LogoutButton from './components/logoutButton';

const LinkButtons = async () => {
  const { status, data: auth } = await getUserAuth();

  return (
    <div className="hidden min-w-[10%] items-center justify-end gap-6 md:flex">
      <ReissueAccessTokenComponent<Promise<void>, Promise<void>>
        status={status}
        callback={async () => {
          'use server';

          revalidateTag('userAuth');
        }}
        onFail={async () => {
          'use server';
        }}
      />
      {auth ? (
        <div className="flex items-center justify-end gap-6">
          <Link href="/mypage">마이페이지</Link>
          <DividerVertical />
          <LogoutButton />
        </div>
      ) : (
        <Link href="/auth/login">로그인</Link>
      )}
    </div>
  );
};

export default LinkButtons;
