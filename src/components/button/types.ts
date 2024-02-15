import { ButtonHTMLAttributes, ReactNode } from 'react';

enum ButtonType {
  Type1 = 1,
  Type2 = 2,
  Type3 = 3,
  Type4 = 4,
}
export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  styleType?: ButtonType;
  className?: string;
}
