'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import Button from '@/components/button';
import Input from '@/components/input';
import { notify } from '@/components/toast';
import { logInAdmin } from '@/libs/actions/auth';

const AdminLogInPage = () => {
  const router = useRouter();
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(logInAdmin, {
    status: 0,
    message: '',
  });

  useEffect(() => {
    if (state.status === 0) return;
    if (state.status === 'ok') router.push('/');
    else {
      notify('info', state.message);
    }
  }, [state, router]);
  return (
    <div className="w-[500px]">
      <form
        className="space-y-6"
        action={formAction}
      >
        <div>
          <label
            htmlFor="email"
            className=" text-medium font-medium text-gray-700"
          >
            Email
          </label>
          <Input className="w-full">
            <Input.Text
              type="email"
              name="email"
              id="email"
              required
            />
          </Input>
        </div>
        <div>
          <label
            htmlFor="password"
            className=" text-medium font-medium text-gray-700"
          >
            Password
          </label>
          <Input className="w-full">
            <Input.Text
              type="password"
              name="password"
              id="password"
              required
            />
          </Input>
        </div>
        <div>
          <Button
            type="submit"
            aria-disabled={pending}
            className="w-full"
          >
            관리자 로그인
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogInPage;
