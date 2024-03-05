'use client';

import { useState } from 'react';

import { BookmarkIcon } from '@/components/icon';
import { clickQuestionHeart } from '@/container/questions/services';

import { IProps } from './types';

const HeaderButton = ({
  questionId,
  isHearted,
  questionHeartCount,
}: IProps) => {
  const [heartData, setHeartData] = useState({
    isHearted,
    questionHeartCount,
  });

  const clickHeart = async () => {
    const {
      data: {
        isHearted: newIsHearted,
        questionHeartCount: newQuestionHeartCount,
      },
    } = await clickQuestionHeart(questionId);

    setHeartData({
      isHearted: newIsHearted,
      questionHeartCount: newQuestionHeartCount,
    });
  };

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
        <span className=" text-large">{heartData.questionHeartCount}</span>

        <button
          type="button"
          onClick={clickHeart}
        >
          <BookmarkIcon
            className={`${heartData.isHearted ? 'fill-primaries-active' : 'fill-slate-300'}`}
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderButton;
