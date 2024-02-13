'use client';

import React from 'react';

import { IProps } from './types';

/**
 * @brief Select 컴포넌트
 * @description
 * @param defaultValue option 추가 되는것, 필수 값 아님
 * @param options String List
 * @param value
 * @param onChange
 */

const Select = ({
  defaultValue,
  options,
  value,
  onChange,
  ...props
}: IProps) => {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{ ...props.style }}
      className="relative flex h-[32px] w-[55px] cursor-pointer items-center justify-center rounded-lg border border-primaries-primary bg-text-20 text-primaries-primary outline-none"
    >
      {defaultValue && <option value="none">{defaultValue}</option>}
      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
