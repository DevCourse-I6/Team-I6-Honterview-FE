'use client';

import { FormEvent } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage';

const LocalStorageDev = () => {
  const { value, setItem, removeItem } = useLocalStorage('dev_test', '');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input');
    if (input) {
      const inputValue = input.value;
      setItem(inputValue);
      input.value = '';
    }
  };

  return (
    <div className="flex gap-20">
      <div className="inline-flex flex-col">
        <div>
          <div className="text-3xl">setItem </div>
          <form
            className="border-1 border-black"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="small-input"
              className="mr-1 rounded-lg border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mb-2 me-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              입력
            </button>
          </form>
        </div>
        <div>
          <div className="text-3xl">removeItem </div>
          <button
            type="submit"
            className="mb-2 me-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            onClick={removeItem}
          >
            Remove
          </button>
        </div>
      </div>

      <div>
        <div className="text-3xl">value </div>
        <div className="h-10">{value}</div>
      </div>
    </div>
  );
};

export default LocalStorageDev;
