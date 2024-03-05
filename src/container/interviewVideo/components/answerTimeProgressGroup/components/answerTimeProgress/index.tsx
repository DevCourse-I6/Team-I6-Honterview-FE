'use client';

import useAnswerTimer from './hooks/useAnswerTimer';
import { IProps } from './types';

const AnswerTimeProgress = ({
  defaultTime,
  timer,
  enabled,
  onEnded,
}: IProps) => {
  const { progressWidth } = useAnswerTimer({
    defaultTime,
    timer,
    enabled,
    onEnded,
  });
  const commonStyle = 'rounded-2xl bg-primaries-primary border';
  const animationStyle = `${enabled ? 'animate-pulse' : ''}`;

  return (
    <li className={`h-full w-full bg-opacity-20 ${commonStyle}`}>
      <div
        className={`linear transition-width h-full duration-1000 ease-in-out will-change-[width] ${commonStyle} ${animationStyle}`}
        style={{ width: `${progressWidth}%` }}
      />
    </li>
  );
};

export default AnswerTimeProgress;
