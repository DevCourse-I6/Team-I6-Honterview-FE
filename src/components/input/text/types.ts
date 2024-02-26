import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  [key: string]: unknown;
}
