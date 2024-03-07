'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { v4 as uuidv4 } from 'uuid';

import { getQuestionById } from '../../services';
import { Answer } from '..';
import BlurAnswer from '../BlurAnswer';
import { IProps } from './types';

const AnswerList = ({ initialData, questionId }: IProps) => {
  const [isInvisible, setIsInvisible] = useState(false);

  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['answers'],
    queryFn: ({ pageParam }) =>
      getQuestionById({ questionId, page: pageParam, size: 5 }),
    initialPageParam: 2,
    initialData: { pages: [initialData], pageParams: [] },
    getNextPageParam: (lastPage, allPages) => {
      // TODO: 백엔드 API에 맞춰서 수정?
      const nextPage = allPages.length + 1;
      return lastPage.data.answers.data.length <
        allPages[0].data.answers.data.length
        ? undefined
        : nextPage;
    },
    select: (selectData) => ({
      pages: selectData.pages.flatMap((page) => page.data.answers.data),
    }),
  });

  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView && hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isLoading]);

  useEffect(() => {
    if (data.pages.length >= 3) setIsInvisible(true);
    // eslint-disable-next-line
  }, []);

  const handleBlurAnswerClick = () => {
    setIsInvisible(false);
  };

  return (
    <>
      {data.pages
        .slice(0, isInvisible ? 3 : data.pages.length)
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
