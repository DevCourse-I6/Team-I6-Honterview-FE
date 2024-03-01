import { IInterview } from '@/types/interview';

export interface IProps extends Pick<IInterview, 'questions' | 'categories'> {
  firstQuestion: string;
}
