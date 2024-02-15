/* eslint-disable no-console */

'use client';

import { useState } from 'react';

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
