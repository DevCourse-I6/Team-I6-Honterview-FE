'use client';

import { useEffect } from 'react';

import useInterviewProgress from '@/stores/interviewProgress';

import useAnswerTimer from './hooks/useAnswerTimer';
import { IProps } from './types';

const AnswerTimeProgress = ({
  defaultTime,
  timer,
  enabled,
  onEnded,
}: IProps) => {
  const { time } = useAnswerTimer({ defaultTime, timer, enabled, onEnded });
  const setInterview = useInterviewProgress((state) => state.setInterview);
  const progressWidth = (time / timer) * 100;
  const commonStyle = 'rounded-2xl bg-primaries-primary border';
  const animationStyle = `${enabled ? 'animate-pulse' : ''}`;

  useEffect(() => {
    if (enabled) {
      setInterview({ progressingTime: time });
    }
  }, [enabled, setInterview, time]);

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
