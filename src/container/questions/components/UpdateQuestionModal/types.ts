import { ICategory } from '@/types/categories';

export interface IProps {
  questionId: number;
  questionTitle: string;
  categoryNames: string[];
  updateModalVisible: boolean;
  categories: ICategory[];
  toggleUpdateModalVisible: () => void;
}
