'use client';

import React, { ChangeEvent, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from './types';

const CheckBox = ({ checkId, onChange, initialChecked }: IProps) => {
  const [checked, setChecked] = useState(initialChecked);
  const placeHolderCheck =
    'after:absolute after:h-[7px] after:w-[10px] after:rotate-[-45deg] after:border-[2px] after:border-r-0 after:border-t-0 after:border-gray after:left-[11px] after:bottom-[13px]';
  const check =
    'after:absolute after:h-[7px] after:w-[10px] after:rotate-[-45deg] after:border-[2px] after:border-r-0 after:border-t-0 after:border-white after:left-[11px] after:bottom-[13px]';
  const circle = `before:absolute before:left-[6px] before:top-[5px] before:h-8 before:w-8 before:rounded-full before:border-[1px] before:bg-white ${checked && 'before:bg-blue-500'}`;

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { id },
    } = e;

    setChecked(!checked);

    if (onChange) {
      onChange({ checked, id });
    }
  };
  return (
    <div className="relative min-h-[30px] min-w-[79.57px] select-none">
      <input
        type="checkbox"
        id={checkId?.toString()}
        className="hidden"
        checked={checked}
        onChange={handleClick}
      />
      <label
        htmlFor={checkId?.toString()}
        className={twMerge(
          `absolute w-fit cursor-pointer rounded-3xl bg-[#F2F2F2] py-3 pl-14 pr-4 shadow-sm before:content-[''] after:content-[''] ${placeHolderCheck} ${circle} ${checked && check}`,
        )}
      >
        답변공개
      </label>
    </div>
  );
};

export default CheckBox;
