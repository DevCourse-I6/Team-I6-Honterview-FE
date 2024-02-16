'use client';

import React from 'react';

import { IProps } from './types';

/**
 * @brief Input-Container
 * @description 입력 요소를 감싸는 컨테이너 역할, 입력 요소와 스타일을 적용가능
 * @param children 입력 요소
 * @param className tailwind 요소
 */

const Container = ({ className, children, ...props }: IProps) => {
  return (
    <div
      className={`${className} relative flex h-[50px] w-[350px] flex-col items-stretch justify-center rounded-lg border border-text-40 p-6 focus-within:border-primaries-primary`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
