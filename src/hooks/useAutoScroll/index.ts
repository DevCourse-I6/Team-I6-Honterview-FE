import { RefObject, useEffect } from 'react';

const useAutoScroll = <T extends HTMLElement, D>(
  ref: RefObject<T>,
  dependency: D[],
) => {
  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.scrollTop = element.scrollHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, ...dependency]);
};

export default useAutoScroll;
