'use client';

import { useEffect, useState } from 'react';

import { SpinnerIcon } from '@/components/icon';

const LoadingDev = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (isLoading) {
    return (
      <div
        className="flex h-full w-full items-center justify-center"
        role="status"
      >
        <SpinnerIcon />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setIsLoading(!isLoading);
      }}
    >
      로딩중 On
    </button>
  );
};

export default LoadingDev;
