import { useEffect, useState } from 'react';

import useSubmitInterview from '@/hooks/useSubmitInterview';
import { useInterview, useProgressingTime } from '@/stores/interviewProgress';

import { IProps } from './types';

const useAnswerTimer = ({ defaultTime, enabled }: IProps) => {
  const { isPending, submitInterview } = useSubmitInterview();
  const { setProgressingTime } = useProgressingTime();
  const { limitTimer } = useInterview();
  const [time, setTime] = useState(defaultTime);
  const progressWidth = (time / limitTimer) * 100;

  useEffect(() => {
    if (!enabled || isPending) {
      return;
    }

    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime + 1;

        if (newTime >= limitTimer) {
          submitInterview();
          clearInterval(intervalId);

          return limitTimer;
        }

        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [enabled, isPending, limitTimer, submitInterview]);

  useEffect(() => {
    setProgressingTime(time);
  }, [time, setProgressingTime]);

  return { time, progressWidth };
};

export default useAnswerTimer;
