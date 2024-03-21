'use client';

import { useRouter } from 'next/navigation';

import { logOut } from '@/libs/services/auth';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    await logOut();
    router.refresh();
  };

  return (
    <form>
      <button
        type="submit"
        onClick={handleLogOut}
      >
        로그아웃
      </button>
    </form>
  );
};

export default LogoutButton;
