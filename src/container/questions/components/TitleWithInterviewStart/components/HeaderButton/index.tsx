'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { BookmarkIcon } from '@/components/icon';
import { clickQuestionHeart } from '@/container/questions/services';

import { IProps } from './types';

const HeaderButton = ({
  questionId,
  isHearted: initialIsHearted,
  questionHeartCount: initialHeartsCount,
}: IProps) => {
  const [isHearted, setIsHearted] = useState(initialIsHearted);
  const [heartsCount, setHeartsCount] = useState(initialHeartsCount);

  const { mutate } = useMutation({
    mutationFn: () => clickQuestionHeart(questionId),
    onSuccess: () => {
      setIsHearted(!isHearted);
      setHeartsCount(isHearted ? heartsCount - 1 : heartsCount + 1);
    },
  });

  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <button
          type="button"
          className="rounded-3xl bg-slate-100 px-5 py-2"
        >
          수정
        </button>
        <button
          type="button"
          className="rounded-3xl bg-slate-100 px-5 py-2"
        >
          삭제
        </button>
      </div>
      <div className="flex items-center gap-1">
        <span className=" text-large">{heartsCount}</span>

        <button
          type="button"
          onClick={() => mutate()}
        >
          <BookmarkIcon
            className={`${isHearted ? 'fill-primaries-active' : 'fill-slate-300 hover:fill-blue-300'}`}
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderButton;
