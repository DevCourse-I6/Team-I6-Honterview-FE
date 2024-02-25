import { useState } from 'react';

import { ArrowDown, ArrowUp } from '@/components/icon';

import { TimePickerProps } from './type';

const TimePicker = ({ type, timeRange, onChange, value }: TimePickerProps) => {
  const [idx, setIdx] = useState(timeRange.indexOf(value));

  const handleUpButton = () => {
    if (idx + 1 >= timeRange.length) {
      return;
    }
    onChange(timeRange[idx + 1]);
    setIdx(idx + 1);
  };

  const handleDownButton = () => {
    if (idx - 1 < 0) {
      return;
    }
    onChange(timeRange[idx - 1]);
    setIdx(idx - 1);
  };

  return (
    <div className="inline-flex flex-col items-center justify-around">
      <button
        type="button"
        className="flex cursor-pointer items-center justify-center"
        onClick={handleUpButton}
      >
        <ArrowUp />
      </button>
      <div className="flex w-[4rem] items-center justify-center text-medium text-zinc-700">
        {value}
        {type === 'min' ? '분' : '초'}
      </div>
      <button
        type="button"
        className="flex cursor-pointer items-center justify-center"
        onClick={handleDownButton}
      >
        <ArrowDown />
      </button>
    </div>
  );
};

export default TimePicker;
