'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { FavoriteIcon } from '@/components/icon';
import { clickAnswerHeart } from '@/libs/services/answers';

import { IProps } from './types';

const Answer = ({
  nickname,
  content,
  className,
  answerId,
  heartsCount: initialHeartsCount,
  isHearted: initialIsHearted,
}: IProps) => {
  // TODO: sangmin // 유저 정보 isHearted 적용하기
  const [isHearted, setIsHearted] = useState(initialIsHearted);
  const [heartsCount, setHeartsCount] = useState(initialHeartsCount);

  const { mutate, isPending } = useMutation({
    mutationFn: () => clickAnswerHeart(answerId),
    onSuccess: () => {
      setIsHearted(!isHearted);
      setHeartsCount(isHearted ? heartsCount - 1 : heartsCount + 1);
    },
  });

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
            disabled={isPending}
            onClick={() => mutate()}
          >
            <FavoriteIcon
              className={`${isHearted ? 'fill-primaries-active' : 'fill-slate-300 hover:fill-blue-300 '} `}
            />
          </button>
          <span>{heartsCount}</span>
        </div>
      </div>
      <p className="text-[1.8rem] font-light text-[#4e5968]">{content}</p>
    </div>
  );
};

export default Answer;
