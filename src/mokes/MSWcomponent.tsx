'use client';

import { useEffect } from 'react';
import { initializeMocking } from '.';

const isMocking = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

if (isMocking) {
  initializeMocking();
}

const MSWComponent = () => {
  useEffect(() => {
    if (isMocking) {
      initializeMocking();
    }
  }, []);

  return null;
};

export default MSWComponent;
