import { twMerge } from 'tailwind-merge';

import { IProps } from './types';

const LoginButtonItem = ({
  // eslint-disable-next-line unused-imports/no-unused-vars
  provider,
  name,
  icon,
  backgroundColor,
  textColor,
  ...rest
}: IProps) => {
  const buttonStyle = twMerge(
    `border-#e1e2e4 flex h-[5rem] w-full items-center justify-center gap-4 rounded-2xl border border-solid px-4 ${backgroundColor} ${textColor} ${rest.className}`,
  );

  return (
    <li className="flex w-full justify-center">
      <button
        type="submit"
        className={`${buttonStyle}`}
      >
        {icon}
        <p>{name}</p>
      </button>
    </li>
  );
};

export default LoginButtonItem;
