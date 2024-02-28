'use client';

import { useEffect } from 'react';

import Button from '@/components/button';
import { notify } from '@/components/toast';
import { IErrorPageProps } from '@/types/errorPage';

const Error = ({ error, reset }: IErrorPageProps) => {
  useEffect(() => {
    notify('error', error.message);
  }, [error]);

  return (
    <div className="fit-wrap flex flex-col items-center justify-center gap-6 text-tripleLarge">
      <h2>인터뷰 화상 면접 페이지에 문제가 발생했습니다.</h2>
      <Button
        style={{ width: 'auto', height: 'auto', padding: '0.5rem 1rem' }}
        className="h-auto w-auto px-[0.5] py-4 text-medium text-white md:text-medium"
        onClick={() => reset()}
      >
        재시도
      </Button>
    </div>
  );
};

export default Error;
