'use client';

import { useCallback, useEffect, useRef } from 'react';

import { IuseIntersectionObserverProps } from './types';

/**
 * @brief intersection observer custom hook
 * @param threshold target의 가시성 퍼센티지 (0.1 = 10%)
 * @param hasNextPage ReactQuery의 useInfiniteQuery에서 받아올 값
 * @param fetchNextPage ReactQuery의 useInfiniteQuery에서 받아올 값
 * @returns 관찰할 요소를 지정할 수 있는 useRef객체 반환
 */
const useIntersectionObserver = ({
  threshold = 0.1,
  hasNextPage,
  fetchNextPage,
}: IuseIntersectionObserverProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

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
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });

    observer.observe(targetRef.current);

    const temporaryTargetRef = targetRef.current;
    return () => observer.unobserve(temporaryTargetRef);
  }, [observerCallback, threshold, targetRef]);

  return targetRef;
};

export default useIntersectionObserver;
