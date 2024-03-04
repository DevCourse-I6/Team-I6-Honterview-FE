import { twMerge } from 'tailwind-merge';

import { FavoriteIcon } from '@/components/icon';

import { IProps } from './types';

const Answer = ({ isBlur, className }: IProps) => {
  return (
    <div
      className={twMerge(
        `${isBlur && 'cursor-pointer select-none blur-[5px]'} ${className}`,
      )}
    >
      <div className="mb-5 flex justify-between">
        <h4 className="text-[1.8rem] font-semibold text-[#3182F6]">
          토스페이먼츠소속 | 기술면접마스터
        </h4>
        <FavoriteIcon />
      </div>
      <p className="pl-14 text-[1.8rem] font-light text-[#4e5968]">
        저는 React를 선호합니다. 이유는 React가 사용자 인터페이스 구축과 관리를
        쉽게 할 수 있는 사용자 측 라이브러리이기 때문입니다. 또한, 리액트
        컴포넌트는 모듈화를 통해서 개발 생산성을 높이고, 코드 유지 보수성을 높일
        수 있습니다.
      </p>
    </div>
  );
};

export default Answer;
