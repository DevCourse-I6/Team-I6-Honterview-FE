import { FormEvent, HTMLAttributes } from 'react';

enum ButtonType {
  Type1 = 1,
  Type2 = 2,
  Type3 = 3,
  Type4 = 4,
  Type5 = 5,
  Type6 = 6,
}
export interface IProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: ButtonType;
  onClick?: (() => void) | ((e: FormEvent) => void);
  className?: string;
}
