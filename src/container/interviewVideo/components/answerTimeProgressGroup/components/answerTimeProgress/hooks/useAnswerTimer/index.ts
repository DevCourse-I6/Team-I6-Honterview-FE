import { useEffect, useState } from 'react';

import { IProps } from './types';

const useAnswerTimer = ({ defaultTime, timer, enabled, onEnded }: IProps) => {
  const [time, setTime] = useState(defaultTime);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const intervalId = setInterval(() => {
      setTime((prevTimer) => {
        const newTimer = prevTimer + 1;

        if (newTimer >= timer) {
          onEnded && onEnded(timer);
          clearInterval(intervalId);
          return timer;
        }

        return newTimer;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, enabled, onEnded]);

  return { time };
};

export default useAnswerTimer;
