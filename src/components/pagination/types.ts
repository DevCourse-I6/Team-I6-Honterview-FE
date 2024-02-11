import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  defaultPage: number;
  limit: number;
  total: number;
  onPageChange: (newPage: number) => void;
}
