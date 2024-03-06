import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  questionTitle: string;
  categoryNames: string[];
  questionId: number;
  heartsCount: number;
}
