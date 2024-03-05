import { useMutation } from '@tanstack/react-query';
import { twMerge } from 'tailwind-merge';

import { FavoriteIcon } from '@/components/icon';

import { clickAnswerHeart } from '../../services';
import { IProps } from './types';

const Answer = ({
  isBlur,
  nickname,
  content,
  className,
  answerId,
  isHearted,
}: IProps) => {
  // TODO: 초기 좋아요 데이터 설정

  const { mutate } = useMutation({
    mutationFn: () => clickAnswerHeart(answerId),
  });

  return (
    <div
      className={twMerge(
        `${isBlur && 'cursor-pointer select-none blur-[5px]'} ${className}`,
      )}
    >
      <div className="mb-5 flex justify-between">
        <h4 className="text-[1.8rem] font-semibold text-[#3182F6]">
          {nickname}
        </h4>
        <button
          type="button"
          onClick={() => mutate()}
        >
          <FavoriteIcon
            className={`${isHearted ? 'fill-primaries-active' : 'fill-slate-300'} hover:fill-blue-300`}
          />
        </button>
      </div>
      <p className="pl-14 text-[1.8rem] font-light text-[#4e5968]">{content}</p>
    </div>
  );
};

export default Answer;
