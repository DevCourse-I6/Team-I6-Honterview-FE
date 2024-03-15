import { ReactNode } from 'react';

import { ICategory } from '@/types/categories';

export interface IProps {
  children: ReactNode;
  questionTitle: string;
  categoryNames: string[];
  questionId: number;
  heartsCount: number;
  categories: ICategory[];
}
