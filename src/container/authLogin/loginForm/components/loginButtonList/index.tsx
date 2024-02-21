import { v4 } from 'uuid';

import LoginButtonItem from '../loginButtonItem';
import { LOGIN_BUTTONS } from './constants/loginButtons';

const LoginButtonList = () => {
  return (
    <ul className="mt-20 flex flex-col items-center justify-center gap-12 text-medium">
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
