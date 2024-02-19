import { HTMLAttributes, ReactNode } from 'react';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  visible: boolean;
  wrapperClassName?: string;
  onClose: () => void;
}
