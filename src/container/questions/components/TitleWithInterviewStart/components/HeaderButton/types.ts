import { ICategory } from '@/types/categories';

export interface IProps {
  questionTitle: string;
  categoryNames: string[];
  questionId: number;
  questionHeartCount: number;
  categories: ICategory[];
}
