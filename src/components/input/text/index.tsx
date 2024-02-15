'use client';

import React from 'react';

import { IProps } from './types';

/**
 * @brief Input-Text
 * @description 입력 요소 역할, style 추가 수정 가능
 * @param className tailwind 요소
 */

const Text = ({ className, ...props }: IProps) => {
  return (
    <input
      className={`${className} placeholder-text-40 outline-none`}
      style={{ ...props.style }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

export default Text;
