import { useEffect, useState } from 'react';

import { useInterview, useProgressingTime } from '@/stores/interviewProgress';

import { IProps } from './types';

const useAnswerTimer = ({ defaultTime, enabled }: IProps) => {
  const { limitTimer } = useInterview();
  const { setProgressingTime } = useProgressingTime();
  const [time, setTime] = useState(defaultTime);
  const progressWidth = (time / limitTimer) * 100;

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime + 1;

        if (newTime >= limitTimer) {
          clearInterval(intervalId);

          return limitTimer;
        }

        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [enabled, limitTimer]);

  useEffect(() => {
    setProgressingTime(time);
  }, [time, setProgressingTime]);

  return { time, progressWidth };
};

export default useAnswerTimer;
