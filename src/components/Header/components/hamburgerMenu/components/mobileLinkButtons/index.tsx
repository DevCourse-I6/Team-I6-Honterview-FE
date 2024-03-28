import Link from 'next/link';

import { getUserAuth } from '@/libs/services/auth';

import MobileLogoutButton from '../mobileLogOutButton';

const MobileLinkButtons = async () => {
  const { data: auth } = await getUserAuth();

  return (
    <div className="flex flex-col items-center">
      {auth ? (
        <>
          <Link
            href="/mypage"
            className="w-full px-10 py-4 text-center hover:bg-background-20"
          >
            마이페이지
          </Link>
          <MobileLogoutButton />
        </>
      ) : (
        <Link
          href="/auth/login"
          className="w-full px-10 py-4 text-center hover:bg-background-20"
        >
          로그인
        </Link>
      )}
    </div>
  );
};

export default MobileLinkButtons;
