import { IQuestion } from '@/types/questionsList/questionsList';

export interface IProps {
  handleTagClick: (tag: string) => void;
  questionsList: IQuestion[];
}

export interface QuestionTagProps {
  tag: string;
  handleTagClick: (tag: string) => void;
}

export interface QuestionTitleProps {
  content: string;
}
