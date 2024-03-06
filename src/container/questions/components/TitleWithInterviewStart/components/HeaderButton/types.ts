import { ICategory } from '@/container/questions/types';

export interface IProps {
  questionTitle: string;
  categoryNames: string[];
  questionId: number;
  isHearted: boolean;
  questionHeartCount: number;
  categories: ICategory[];
}
