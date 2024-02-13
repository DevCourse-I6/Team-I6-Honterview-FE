'use client';

import React from 'react';

import { IProps } from './types';

/**
 * @brief Button 컴포넌트
 * @description label 필수, type defalut = 1
 * @param label
 * @param disabled
 * @param type 1(Primary), 2(PrimaryAlternate), 3(Secondary), 4(SecondaryAlternate), 5(Disabled), 6(DisabledAlternate)
 * @param onClick
 */

const Button = ({
  label,
  disabled = false,
  type = 1,
  onClick,
  ...props
}: IProps) => {
  const baseStyle =
    'relative flex h-[48px] w-[182px] flex-col items-stretch justify-center rounded-lg border';

  // 각 버튼 타입에 따른 추가 스타일
  const typeStyles = {
    1: 'bg-primaries-primary border-primaries-primary p-6 text-text-20 hover:bg-primaries-hover active:bg-primaries-active',
    2: 'bg-text-20 border-primaries-primary p-6 text-primaries-primary',
    3: 'bg-secondary-primary border-secondary-primary p-6 text-text-20 hover:bg-secondary-hover active:bg-secondary-active',
    4: 'bg-text-20 border-secondary-primary p-6 text-secondary-primary',
    5: 'bg-text-40 border-text-40 p-6 text-text-20',
    6: 'bg-text-20 border-text-40 p-6 text-text-40',
  };

  const buttonClass = `${baseStyle} ${typeStyles[type]}`;

  return (
    <button
      type="button"
      className={buttonClass}
      style={{ ...props.style }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
