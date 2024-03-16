import Link from 'next/link';

import DividerVertical from '@/components/dividerVertical';
import { getUserAuth } from '@/libs/services/auth';

import LogoutButton from './components/logoutButton';

const LinkButtons = async () => {
  const loginData = await getUserAuth();

  if (loginData) {
    return (
      <div className="flex items-center justify-end gap-6 text-medium">
        <LogoutButton />
        <DividerVertical />
        <Link href="/mypage">마이페이지</Link>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-end gap-6 text-medium">
      <Link href="/auth/login">로그인</Link>
    </div>
  );
};

export default LinkButtons;
