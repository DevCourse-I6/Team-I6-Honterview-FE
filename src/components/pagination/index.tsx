'use client';

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
  return (
    <PaginationProvider
      defaultPage={defaultPage}
      limit={limit}
      total={total}
      onPageChange={onPageChange}
    >
      <div className={`flex gap-1 text-lg ${rest.className}`}>{children}</div>
    </PaginationProvider>
  );
};

Pagination.PrevButton = PrevButton;
Pagination.NextButton = NextButton;
Pagination.PageButtons = PageButtons;

export default Pagination;
