import { ICategory } from '../../types';

export interface IProps {
  questionId: number;
  questionTitle: string;
  categoryNames: string[];
  updateModalVisible: boolean;
  categories: ICategory[];
  toggleUpdateModalVisible: () => void;
}
