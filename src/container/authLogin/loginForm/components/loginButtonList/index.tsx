import { v4 } from 'uuid';

import LoginButtonItem from '../loginButtonItem';
import { LOGIN_BUTTONS } from './constants/loginButtons';

const LoginButtonList = () => {
  return (
    <ul className="mt-20 flex w-full max-w-[40rem] flex-col items-center gap-12 text-medium">
      {LOGIN_BUTTONS.map((button) => (
        <LoginButtonItem
          key={v4()}
          {...button}
        />
      ))}
    </ul>
  );
};

export default LoginButtonList;
