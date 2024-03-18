'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { FavoriteIcon } from '@/components/icon';
import { notify } from '@/components/toast';
import { clickAnswerHeart } from '@/libs/actions/answers';
import getErrorMessage from '@/utils/getErrorMessage';

import { IProps } from './types';

const Answer = ({
  nickname,
  content,
  className,
  answerId,
  isHearted: initialIsHearted,
}: IProps) => {
  const [isHeart, setIsHeart] = useState(initialIsHearted);
  const [isLoading, setIsLoading] = useState(false);

  const handleHeartClick = async () => {
    setIsLoading(true);
    try {
      const {
        data: { isHearted },
      } = await clickAnswerHeart(answerId);
      setIsHeart(isHearted);
    } catch (error) {
      notify('error', getErrorMessage());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={twMerge(
        `rounded-lg border-[1px] border-dashed border-slate-300 bg-white p-6 ${className}`,
      )}
    >
      <div className="mb-5 flex justify-between">
        <h4 className="text-[1.8rem] font-semibold text-[#3182F6]">
          {nickname}
        </h4>
        <div>
          <button
            type="button"
            disabled={isLoading}
            onClick={handleHeartClick}
          >
            <FavoriteIcon
              className={`${isHeart ? 'fill-primaries-active' : 'fill-slate-300 hover:fill-blue-300 '} `}
            />
          </button>
        </div>
      </div>
      <p className="text-[1.8rem] font-light text-[#4e5968]">{content}</p>
    </div>
  );
};

export default Answer;
