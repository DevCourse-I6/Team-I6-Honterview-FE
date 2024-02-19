'use client';

import { useEffect, useState } from 'react';
/* eslint-disable no-console */

/**
 * @brief LocalStorage 훅
 * @params key : 스토리지 키
 * @params defaultValue : 기본값
 */

const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    try {
      const storedValue = localStorage.getItem(key);

      setValue(storedValue ? JSON.parse(storedValue) : defaultValue);
    } catch (e) {
      console.error(e);
      setValue(defaultValue);
    }
  }, [defaultValue, key]);

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
