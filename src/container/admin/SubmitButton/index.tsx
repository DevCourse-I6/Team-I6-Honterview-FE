'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import Button from '@/components/button';
import { notify } from '@/components/toast';
import { logInAdmin, signUpAdmin } from '@/libs/actions/auth';

import { IProps } from './types';

const SubmitButton = ({ authType }: IProps) => {
  const currentPath = usePathname().split('/')[2];

  const authAction = {
    login: logInAdmin,
    signup: signUpAdmin,
  };

  const content = {
    login: '관리자 로그인',
    signup: '관리자 회원가입',
  };

  const { pending } = useFormStatus();
  const router = useRouter();
  const [state, formAction] = useFormState(authAction[authType], {
    status: 0,
    message: '',
  });

  useEffect(() => {
    if (state.status === 0) return;
    if (state.status === 'ok')
      router.push(`${currentPath === 'signup' ? '/admin/login' : '/admin'}`);
    else {
      notify('info', state.message);
    }
  }, [state, router, currentPath]);

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      className="w-full"
      formAction={formAction}
    >
      {content[authType]}
    </Button>
  );
};

export default SubmitButton;
