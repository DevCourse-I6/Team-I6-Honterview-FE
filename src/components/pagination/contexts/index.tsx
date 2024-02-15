/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import { createContext, useState } from 'react';

import { IPaginationContext, IPaginationProviderProps } from './types';

export const PaginationContext = createContext<IPaginationContext>({
  currentPage: 0,
  totalPages: 0,
  handleSelectPage: () => {},
  handleMovePrevPage: () => {},
  handleMoveNextPage: () => {},
});

export const PaginationProvider = ({
  defaultPage,
  limit,
  total,
  onPageChange,
  children,
}: IPaginationProviderProps) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const totalPages = Math.ceil(total / limit);

  const handleSelectPage = (newPage: number) => {
    onPageChange(newPage);
    setCurrentPage(newPage);
  };

  const handleMovePrevPage = () => {
    if (currentPage > 1) {
      handleSelectPage(currentPage - 1);
    }
  };

  const handleMoveNextPage = () => {
    if (currentPage + 1 <= totalPages) {
      handleSelectPage(currentPage + 1);
    }
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        totalPages,
        handleSelectPage,
        handleMoveNextPage,
        handleMovePrevPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
