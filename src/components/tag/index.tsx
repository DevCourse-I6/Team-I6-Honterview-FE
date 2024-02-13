'use client';

import React from 'react';

import { IProps } from './types';

/**
 * @brief Tag 컴포넌트
 * @description label 필수, style 추가 수정 가능
 * @param label
 * @param onClick
 */

const Tag = ({ label, onClick, ...props }: IProps) => {
  return (
    <div
      className="flex h-[32px] w-[55px] items-center justify-center rounded-lg border-primaries-primary bg-primaries-primary text-text-20 hover:bg-primaries-hover active:bg-primaries-active"
      style={{ ...props.style }}
    >
      {label}

      {/* TODO: 추후 ICON으로 수정 */}
      <button
        type="button"
        onClick={onClick}
        className="ml-2"
      >
        X
      </button>
    </div>
  );
};

export default Tag;
