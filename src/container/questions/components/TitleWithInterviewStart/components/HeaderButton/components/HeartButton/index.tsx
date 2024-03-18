'use client';

import { useState } from 'react';

import { FavoriteIcon } from '@/components/icon';
import { notify } from '@/components/toast';
import { clickQuestionHeartAction } from '@/libs/actions/question';

import { IProps } from './types';

const HeartButton = ({
  questionId,
  isHearted: initialIsHearted,
  questionHeartCount: initialHeartsCount,
}: IProps) => {
  const [isHeart, setIsHeart] = useState(initialIsHearted);
  const [heartsCount, setHeartsCount] = useState(initialHeartsCount);
  const [isLoading, setIsLoading] = useState(false);

  const handleHeartClick = async () => {
    setIsLoading(true);
    try {
      const {
        data: { isHearted, questionHeartCount },
      } = await clickQuestionHeartAction(questionId);
      setIsHeart(isHearted);
      setHeartsCount(questionHeartCount);
    } catch (error) {
      if (typeof error === 'string') {
        notify('error', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-2">
      <span className="text-large">{heartsCount}</span>
      <button
        type="button"
        disabled={isLoading}
        onClick={handleHeartClick}
      >
        <FavoriteIcon
          className={`${isHeart ? 'fill-primaries-active' : 'fill-slate-300 hover:fill-blue-300'}`}
        />
      </button>
    </div>
  );
};

export default HeartButton;
