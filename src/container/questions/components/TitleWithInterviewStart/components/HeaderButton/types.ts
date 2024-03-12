import { ICategory } from '@/types/categories';

export interface IProps {
  questionTitle: string;
  categoryNames: string[];
  questionId: number;
  isHearted: boolean;
  questionHeartCount: number;
  categories: ICategory[];
}
