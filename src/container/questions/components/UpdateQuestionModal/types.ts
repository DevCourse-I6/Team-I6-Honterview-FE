import { RefObject } from 'react';

import { ICategory } from '@/types/categories';

export interface IProps {
  questionId: number;
  questionTitle: string;
  categoryNames: string[];
  updateModalVisible: boolean;
  categories: ICategory[];
  toggleUpdateModalVisible: (
    inputElement?: RefObject<HTMLInputElement>,
  ) => void;
  inputElement: RefObject<HTMLInputElement>;
}
