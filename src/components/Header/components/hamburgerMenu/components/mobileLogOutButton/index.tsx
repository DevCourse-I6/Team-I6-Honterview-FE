import { logOut } from '@/libs/actions/auth';

const MobileLogoutButton = () => {
  return (
    <button
      type="submit"
      formAction={logOut}
      className="w-full px-10 py-4 text-center hover:bg-background-20"
    >
      로그아웃
    </button>
  );
};

export default MobileLogoutButton;
