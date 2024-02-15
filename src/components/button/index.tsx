'use client';

import React from 'react';

import { IProps } from './types';

/**
 * @brief Button 컴포넌트
 * @description children 필수, type defalut = 1
 * @param children
 * @param styleType 1(Primary), 2(PrimaryAlternate), 3(Secondary), 4(SecondaryAlternate), 5(Disabled), 6(DisabledAlternate)
 * @param className tailwind 요소
 */

const Button = ({ children, styleType = 1, className, ...props }: IProps) => {
  const baseStyle = `${className} relative flex h-[48px] w-[182px] flex-col items-stretch justify-center rounded-lg border`;

  // 각 버튼 타입에 따른 추가 스타일
  const typeStyles = {
    1: 'bg-primaries-primary border-primaries-primary p-6 text-text-20 hover:bg-primaries-hover active:bg-primaries-active hover:border-primaries-hover active:border-primaries-active disabled:bg-text-40 disabled:text-text-20 disabled:text-opacity-50 disabled:border-text-40',
    2: 'bg-text-20 border-primaries-primary p-6 text-primaries-primary disabled:text-text-40 disabled:border-text-40',
    3: 'bg-secondary-primary border-secondary-primary p-6 text-text-20 hover:bg-secondary-hover active:bg-secondary-active disabled:bg-text-40 disabled:text-text-20 disabled:text-opacity-50 disabled:border-text-40',
    4: 'bg-text-20 border-secondary-primary p-6 text-secondary-primary disabled:text-text-40 disabled:border-text-40',
  };

  const buttonClass = `${baseStyle} ${typeStyles[styleType]}`;

  return (
    <button
      type="button"
      className={buttonClass}
      style={{ ...props.style }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
