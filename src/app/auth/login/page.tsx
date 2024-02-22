import { v4 as v4uuid } from 'uuid';

import LoginButtonItem from '@/container/authLogin/components/loginButtonItem';
import {
  INTERVIEW_DESCRIPTION,
  INTERVIEW_HEADER,
} from '@/container/authLogin/constants/content';
import { LOGIN_BUTTONS } from '@/container/authLogin/constants/loginButtons';

const AuthLoginPage = () => {
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
        <ul className="mt-20 flex flex-col items-center justify-center gap-12 text-medium">
          {LOGIN_BUTTONS.map((button) => (
            <LoginButtonItem
              key={v4uuid()}
              {...button}
            />
          ))}
        </ul>
      </form>
    </section>
  );
};

export default AuthLoginPage;
