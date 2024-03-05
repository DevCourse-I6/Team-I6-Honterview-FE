import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  categoryNames: string[];
  questionId: string;
}
