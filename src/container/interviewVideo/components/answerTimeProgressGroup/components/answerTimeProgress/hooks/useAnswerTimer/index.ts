import { useEffect, useState } from 'react';

import useInterviewProgress from '@/stores/interviewProgress';

import { IProps } from './types';

const useAnswerTimer = ({ defaultTime, timer, enabled, onEnded }: IProps) => {
  const setInterview = useInterviewProgress((state) => state.setInterview);
  const [time, setTime] = useState(defaultTime);
  const progressWidth = (time / timer) * 100;

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime + 1;

        if (newTime >= timer) {
          onEnded && onEnded(timer);
          clearInterval(intervalId);
          return timer;
        }

        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, enabled, onEnded]);

  useEffect(() => {
    if (enabled) {
      setInterview({ progressingTime: time });
    }
  }, [enabled, setInterview, time]);

  return { progressWidth };
};

export default useAnswerTimer;
