import { FavoriteIcon } from '@/components/icon';

import { IProps } from './types';

const Answer = ({ isBlur, nickname, content }: IProps) => {
  return (
    <div className={`${isBlur && 'cursor-pointer select-none blur-[5px]'}`}>
      <div className="mb-5 flex justify-between">
        <h4 className="text-[1.8rem] font-semibold text-[#3182F6]">
          {nickname}
        </h4>
        <FavoriteIcon />
      </div>
      <p className="pl-14 text-[1.8rem] font-light text-[#4e5968]">{content}</p>
    </div>
  );
};

export default Answer;
