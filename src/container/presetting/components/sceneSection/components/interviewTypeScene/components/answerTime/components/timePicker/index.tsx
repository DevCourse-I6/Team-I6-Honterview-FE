import { useState } from 'react';

import { ArrowDown, ArrowUp } from '@/components/icon';

import { TimePickerProps } from './type';

const TimePicker = ({ type, timeRange, onChange, value }: TimePickerProps) => {
  const [idx, setIdx] = useState(0);

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
      <div className="flex cursor-pointer items-center justify-center">
        <ArrowUp onClick={handleUpButton} />
      </div>
      <div className="flex w-[4rem] items-center justify-center text-medium text-zinc-700">
        {value}
        {type === 'min' ? '분' : '초'}
      </div>
      <div className="flex cursor-pointer items-center justify-center">
        <ArrowDown onClick={handleDownButton} />
      </div>
    </div>
  );
};

export default TimePicker;
