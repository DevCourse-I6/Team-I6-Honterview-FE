import { useEffect, useState } from 'react';

import { IProps } from './types';

const useAnswerTimer = ({ defaultTime, timer, enabled, onEnded }: IProps) => {
  const [time, setTime] = useState(defaultTime);

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

  return { time };
};

export default useAnswerTimer;
