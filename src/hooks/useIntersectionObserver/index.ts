'use client';

import { useCallback, useEffect, useState } from 'react';

import { IuseIntersectionObserverProps } from './types';

/**
 * @brief intersection observer custom hook
 * @param threshold target의 가시성 퍼센티지 (0.1 = 10%)
 * @param hasNextPage ReactQuery의 useInfiniteQuery에서 받아올 값
 * @param fetchNextPage ReactQuery의 useInfiniteQuery에서 받아올 값
 * @returns 관찰할 요소를 지정하는 setTarget을 반환
 */
const useIntersectionObserver = ({
  threshold = 0.1,
  hasNextPage,
  fetchNextPage,
}: IuseIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    },
    [fetchNextPage, hasNextPage],
  );

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [observerCallback, threshold, target]);

  return { setTarget };
};

export default useIntersectionObserver;
