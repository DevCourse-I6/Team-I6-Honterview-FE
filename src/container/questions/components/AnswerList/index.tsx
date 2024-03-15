'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { v4 as uuidv4 } from 'uuid';

import { getQuestionByIdClient } from '@/libs/services/questions';

import { Answer } from '..';
import BlurAnswer from '../BlurAnswer';
import { IProps } from './types';

const AnswerList = ({ initialData, questionId, isModalLoad }: IProps) => {
  const [isInvisible, setIsInvisible] = useState(false);

  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['answers', questionId],
    queryFn: ({ pageParam }) =>
      getQuestionByIdClient({ questionId, page: pageParam, size: 5 }),
    initialPageParam: 1,
    initialData: { pages: [initialData], pageParams: [] },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.data.answers.hasNextPage ? nextPage : undefined;
    },
    select: (selectData) => ({
      pages: selectData.pages.flatMap((page) => page.data.answers.data),
    }),
    staleTime: Infinity,
  });

  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView && hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isLoading]);

  useEffect(() => {
    if (data.pages.length - (isModalLoad ? 1 : 0) > 3) setIsInvisible(true);
    // eslint-disable-next-line
  }, []);

  const handleBlurAnswerClick = () => {
    setIsInvisible(false);
  };

  const startIndex = isModalLoad ? 1 : 0;
  let endIndex;
  if (isModalLoad) endIndex = isInvisible ? 4 : data.pages.length;
  if (!isModalLoad) endIndex = isInvisible ? 3 : data.pages.length;

  return (
    <>
      {data.pages
        .slice(startIndex, endIndex)
        .map(({ nickname, content, id, heartsCount }) => (
          <Answer
            key={uuidv4()}
            answerId={id}
            nickname={nickname}
            content={content}
            heartsCount={heartsCount}
            isHearted={false}
          />
        ))}
      {isInvisible && (
        <button
          type="button"
          onClick={handleBlurAnswerClick}
          className=" text-left"
        >
          <BlurAnswer />
        </button>
      )}
      {!isInvisible && <div ref={ref} />}
    </>
  );
};

export default AnswerList;
