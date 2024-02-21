import LoginButtonList from './components/loginButtonList';
import { INTERVIEW_DESCRIPTION, INTERVIEW_HEADER } from './constants/content';

const LoginForm = () => {
  return (
    <section className="flex w-full max-w-[40rem] flex-col gap-5 px-8 py-20">
      <h1 className="text-center text-tripleLarge font-bold">
        {INTERVIEW_HEADER}
      </h1>
      <p className="text-center text-extraLarge text-text-60">
        {INTERVIEW_DESCRIPTION.part1}
        <br />
        {INTERVIEW_DESCRIPTION.part2}
      </p>
      <form>
        <LoginButtonList />
      </form>
    </section>
  );
};

export default LoginForm;
