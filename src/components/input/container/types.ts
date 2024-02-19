import { HTMLAttributes, ReactNode } from 'react';

export enum SelectType {
  Type1 = 1,
  Type2 = 2,
  Type3 = 3,
}
export interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  styleType?: SelectType;
  className?: string;
}
