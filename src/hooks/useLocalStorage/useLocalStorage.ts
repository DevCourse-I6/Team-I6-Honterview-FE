/* eslint-disable no-console */

'use client';

import { useState } from 'react';

/**
 * @brief LocalStorage 훅
 * @description 사용할 때 value를 바로 렌더링할 수 없다 (https://nextjs.org/docs/messages/react-hydration-error)<br>
 * 사용처에서 1.상태를 선언 2.useEffect에서 storage value 값으로 상태값 set 3. 해당 상태를 값으로 써야 함(dev page 참고)<br>
 *
 */

const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        return JSON.parse(storedValue);
      }
    } catch (e) {
      console.error(e);
    }

    return defaultValue;
  });

  const setItem = (newValue: T) => {
    try {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (e) {
      console.error(e);
    }
  };

  const removeItem = () => {
    setValue(defaultValue);
    localStorage.removeItem(key);
  };

  return { value, setItem, removeItem };
};

export default useLocalStorage;
