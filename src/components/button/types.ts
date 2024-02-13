import { FormEvent, HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  type?: 1 | 2 | 3 | 4 | 5 | 6;
  onClick?: (() => void) | ((e: FormEvent) => void);
}
