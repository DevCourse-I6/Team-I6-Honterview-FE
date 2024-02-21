import LoginButtonList from './components/loginButtonList';
import { INTERVIEW_DESCRIPTION, INTERVIEW_HEADER } from './constants/content';

const LoginForm = () => {
  return (
    <form className="wrap flex flex-col items-center justify-center gap-5 px-8 py-20">
      <h1 className="text-center text-tripleLarge font-bold">
        {INTERVIEW_HEADER}
      </h1>
      <p className="text-center text-extraLarge text-text-60">
        {INTERVIEW_DESCRIPTION.part1}
        <br />
        {INTERVIEW_DESCRIPTION.part2}
      </p>
      <LoginButtonList />
    </form>
  );
};

export default LoginForm;
