import { useEffect, useRef, useState } from 'react';

import {
  useInterview,
  useProgressingTime,
  useTimeout,
} from '@/stores/interviewProgress';

import { IProps } from './types';

const useAnswerTimer = ({ defaultTime, enabled }: IProps) => {
  const [time, setTime] = useState(defaultTime);
  const { limitTimer } = useInterview();
  const { enableTimeout } = useTimeout();
  const { setProgressingTime } = useProgressingTime();
  const prevTimeRef = useRef(time);
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
    if (time === prevTimeRef.current) {
      return;
    }

    if (time >= limitTimer) {
      setProgressingTime(time);
      return enableTimeout();
    }

    setProgressingTime(time);
    prevTimeRef.current = time;
  }, [time, limitTimer, setProgressingTime, enableTimeout]);

  return { time, progressWidth };
};

export default useAnswerTimer;
