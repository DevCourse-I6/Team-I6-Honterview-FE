import { IProps } from './types';

const LoginButtonItem = ({
  provider,
  name,
  icon,
  backgroundColor,
  textColor,
}: IProps) => {
  return (
    <li className="flex w-full justify-center">
      <button
        type="submit"
        className={`border-#e1e2e4 flex h-[5rem] w-full items-center justify-center gap-4 rounded-2xl border border-solid px-4 ${backgroundColor} ${textColor}`}
      >
        {icon}
        <p>{name}</p>
      </button>
    </li>
  );
};

export default LoginButtonItem;
