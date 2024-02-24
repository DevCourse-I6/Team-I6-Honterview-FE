'use client';

import { twMerge } from 'tailwind-merge';

import { PaginationProvider } from './contexts';
import NextButton from './nextButton';
import PageButtons from './pageButtons';
import PrevButton from './prevButton';
import { IProps } from './types';

const Pagination = ({
  defaultPage,
  limit,
  total,
  onPageChange,
  children,
  ...rest
}: IProps) => {
  const style = twMerge(`flex gap-6 text-large ${rest.className}`);

  return (
    <PaginationProvider
      defaultPage={defaultPage}
      limit={limit}
      total={total}
      onPageChange={onPageChange}
    >
      <div className={style}>{children}</div>
    </PaginationProvider>
  );
};

Pagination.PrevButton = PrevButton;
Pagination.NextButton = NextButton;
Pagination.PageButtons = PageButtons;

export default Pagination;
