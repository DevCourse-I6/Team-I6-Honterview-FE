'use client';

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { IProps } from './types';

const LoginButtonItem = ({
  provider,
  name,
  icon,
  backgroundColor,
  textColor,
  ...rest
}: IProps) => {
  const router = useRouter();
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const buttonStyle = twMerge(
    `border-#e1e2e4 flex h-[5rem] w-full items-center justify-center gap-4 rounded-2xl border border-solid px-4 ${backgroundColor} ${textColor} ${rest.className}`,
  );

  const handleRedirectToSocialLogin = () => {
    router.push(`${API_BASE_URL}oauth2/authorization/${provider}`);
  };

  return (
    <li className="flex w-full justify-center">
      <button
        type="button"
        onClick={handleRedirectToSocialLogin}
        className={`${buttonStyle}`}
      >
        {icon}
        <p>{name}</p>
      </button>
    </li>
  );
};

export default LoginButtonItem;
