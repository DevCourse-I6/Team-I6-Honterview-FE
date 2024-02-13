import { ChangeEvent, SelectHTMLAttributes } from 'react';

export interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  defaultValue?: string;
  options: string[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
