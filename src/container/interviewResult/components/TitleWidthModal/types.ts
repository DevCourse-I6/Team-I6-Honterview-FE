import { IGetQuestionById } from '@/container/questions/types';

export interface IProps {
  questionContent: string;
  questionInitialData: IGetQuestionById;
  questionId: number;
}
