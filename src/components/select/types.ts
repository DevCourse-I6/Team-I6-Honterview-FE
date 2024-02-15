import { SelectHTMLAttributes } from 'react';

export interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  value: string;
  className?: string;
}
