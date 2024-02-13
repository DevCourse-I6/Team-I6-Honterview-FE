'use client';
import { PropsWithChildren, useEffect, useState } from 'react';

const isMocking = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

const MSWComponent = ({ children }: PropsWithChildren) => {
  const [isInitialized, setIsInitialized] = useState(!isMocking);

  useEffect(() => {
    const init = async () => {
      if (isMocking) {
        const { initializeMocking } = await import('@/mocks');

        await initializeMocking();
      }
      setIsInitialized(true);
    };

    init();
  }, []);

  if (!isInitialized) {
    return null;
  }

  return <>{children}</>;
};

export default MSWComponent;
