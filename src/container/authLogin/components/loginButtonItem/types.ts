import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {
  provider: string;
  name: string;
  icon: React.ReactNode;
  backgroundColor: string;
  textColor: string;
}
