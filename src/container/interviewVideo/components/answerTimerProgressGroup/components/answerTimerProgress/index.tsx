'use client';

import { useEffect, useState } from 'react';

import { IProps } from './types';

const AnswerTimerProgress = ({ limitTime }: IProps) => {
  const [timer, setTimer] = useState(0);
  const progressTime = (timer / limitTime) * 100;
  const commonStyle =
    'rounded-2xl border border-solid border-transparent bg-primaries-primary';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        const newTimer = prevTimer + 0.1;

        if (newTimer >= limitTime) {
          clearInterval(intervalId);
          return limitTime;
        }

        return newTimer;
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [limitTime]);

  return (
    <li className={`h-full w-full bg-opacity-20 ${commonStyle}`}>
      <div
        className={`linear transition-width h-full duration-500 will-change-[width] ${commonStyle}`}
        style={{ width: `${progressTime}%` }}
      />
    </li>
  );
};

export default AnswerTimerProgress;
