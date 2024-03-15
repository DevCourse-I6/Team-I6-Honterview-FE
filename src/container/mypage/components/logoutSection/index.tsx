'use client';

import { logoutAPI } from '@/services/mypage';

const LogoutSection = () => {
  return (
    <button
      type="button"
      className="text-[1.5rem] text-text-40"
      onClick={() => logoutAPI()}
    >
      로그아웃
    </button>
  );
};

export default LogoutSection;
