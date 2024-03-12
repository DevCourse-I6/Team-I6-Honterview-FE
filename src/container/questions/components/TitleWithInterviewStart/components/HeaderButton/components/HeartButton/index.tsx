'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { FavoriteIcon } from '@/components/icon';
import { clickQuestionHeart } from '@/libs/services/questions';

import { IProps } from './types';

const HeartButton = ({
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
    <div className="flex gap-2">
      <span className="text-large">{heartsCount}</span>
      <button
        type="button"
        onClick={() => mutate()}
      >
        <FavoriteIcon
          className={`${isHearted ? 'fill-primaries-active' : 'fill-slate-300 hover:fill-blue-300'}`}
        />
      </button>
    </div>
  );
};

export default HeartButton;
