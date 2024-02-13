import { FormEvent, HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  onClick?: (() => void) | ((e: FormEvent) => void);
}
