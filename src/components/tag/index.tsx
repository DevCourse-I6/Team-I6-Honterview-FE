'use client';

import React from 'react';

import { IProps } from './types';

/**
 * @brief Tag 컴포넌트
 * @description label 필수, style 추가 수정 가능
 * @param label 제목
 * @param children 아이콘 같은 것 넣으면 될 것 같음
 * @param className tailwind 요소
 */

const Tag = ({ label, children, className, ...props }: IProps) => {
  return (
    <div
      className={`${className} flex h-[32px] w-[55px] items-center justify-center rounded-lg border-primaries-primary bg-primaries-primary text-text-20 hover:bg-primaries-hover active:bg-primaries-active`}
      style={{ ...props.style }}
    >
      {label}
      {children}
    </div>
  );
};

export default Tag;
