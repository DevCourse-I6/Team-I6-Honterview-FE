'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Button from '@/components/button';
import Logo from '@/components/logo';
import { notify } from '@/components/toast';
import { IErrorPageProps } from '@/types/errorPage';

const Error = ({ error, reset }: IErrorPageProps) => {
  const router = useRouter();

  const handlePrevPage = () => {
    router.back();
  };

  useEffect(() => {
    notify('error', error.message);
  }, [error]);

  return (
    <div className="fit-wrap flex flex-col items-center justify-center gap-16">
      <Logo
        width={150}
        height={150}
      />
      <h1 className="text-center text-tripleLarge">인터뷰 페이지 오류 발생</h1>
      <div className="flex items-center gap-16">
        <Button
          onClick={handlePrevPage}
          className="h-auto w-auto px-[1rem] py-[0.5rem] text-small text-white md:text-medium"
        >
          이전 페이지
        </Button>
        <Button
          onClick={reset}
          className="h-auto w-auto px-[1rem] py-[0.5rem] text-small text-white md:text-medium"
        >
          재시도
        </Button>
      </div>
    </div>
  );
};

export default Error;
