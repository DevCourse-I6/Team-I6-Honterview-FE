import { HTMLAttributes, ReactNode } from 'react';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  children?: ReactNode;
  className?: string;
}
