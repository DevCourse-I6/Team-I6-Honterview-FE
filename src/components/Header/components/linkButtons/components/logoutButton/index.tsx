import { logOut } from '@/libs/actions/auth';

const LogoutButton = () => {
  return (
    <form>
      <button
        type="submit"
        formAction={logOut}
      >
        로그아웃
      </button>
    </form>
  );
};

export default LogoutButton;
