import { ICategory } from '@/types/categories';

export interface IProps {
  questionTitle: string;
  categoryNames: string[];
  questionId: number;
  questionHeartCount: number;
  isHearted: boolean;
  isBookmarked: boolean;
  categories: ICategory[];
}
