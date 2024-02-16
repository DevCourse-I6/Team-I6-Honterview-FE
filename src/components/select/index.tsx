'use client';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IProps } from './types';
/**
 * @brief Select 컴포넌트
 * @description
 * @param value
 * @param options String List
 * @param className tailwind 요소
 */

const Select = ({ value, options, className, ...props }: IProps) => {
  return (
    <select
      value={value}
      className={`${className} relative h-[32px] cursor-pointer items-center justify-center rounded-lg border border-primaries-primary bg-text-20  text-text-80 outline-none`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {options.map((option) => (
        <option
          key={uuidv4()}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
