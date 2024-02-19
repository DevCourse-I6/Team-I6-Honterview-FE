import { ReactNode } from 'react';

export interface IPaginationContext {
  currentPage: number;
  totalPages: number;
  handleSelectPage: (newPage: number) => void;
  handleMovePrevPage: () => void;
  handleMoveNextPage: () => void;
}

export interface IPaginationProviderProps {
  defaultPage: number;
  limit: number;
  total: number;
  onPageChange: (newPage: number) => void;
  children: ReactNode;
}
