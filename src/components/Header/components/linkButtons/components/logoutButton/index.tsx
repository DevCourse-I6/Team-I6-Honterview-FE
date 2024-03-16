import { logOut } from '@/libs/actions/auth';

const LogoutButton = () => {
  return (
    <button
      type="submit"
      formAction={logOut}
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
