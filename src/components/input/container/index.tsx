'use client';

import React from 'react';

import { ErrorIcon, SuccessIcon } from '@/components/icon';

import { IProps } from './types';

/**
 * @brief Input-Container
 * @description 입력 요소를 감싸는 컨테이너 역할, 입력 요소와 스타일을 적용가능
 * @param children 입력 요소 (1 - default, 2 - succeess, 3 - Error)
 * @param className tailwind 요소
 */

const Container = ({
  className,
  styleType = 1,
  children,
  ...props
}: IProps) => {
  const baseStyle = `relative flex items-center justify-between rounded-lg border p-4 ${className}`;

  // 각 인풋 타입에 따른 추가 스타일
  const typeStyles = {
    1: 'focus-within:border-primaries-primary',
    2: '',
    3: 'border-[#C20000]',
  };

  const inputClass = `${baseStyle} ${typeStyles[styleType]}`;

  return (
    <div
      className={inputClass}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
      {styleType === 2 && (
        <div className="flex-shrink-0 pl-2">
          <SuccessIcon />
        </div>
      )}
      {styleType === 3 && (
        <div className="flex-shrink-0 pl-2">
          <ErrorIcon />
        </div>
      )}
    </div>
  );
};

export default Container;
