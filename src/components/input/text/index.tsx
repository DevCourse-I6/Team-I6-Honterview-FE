'use client';

import React from 'react';

import { IProps } from './types';

/**
 * @brief Input-Text
 * @description 입력 요소 역할, style 추가 수정 가능
 * @param value
 * @param placeholder
 * @param onChange
 * @param onKeyUp
 */

const Text = ({ placeholder, value, onChange, onKeyUp, ...props }: IProps) => {
  return (
    <input
      className="placeholder-text-40 outline-none "
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      style={{ ...props.style }}
    />
  );
};

export default Text;
