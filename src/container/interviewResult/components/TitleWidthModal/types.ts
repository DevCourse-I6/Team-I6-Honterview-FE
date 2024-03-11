import { IGetQuestionById } from '@/libs/types/response';

export interface IProps {
  questionContent: string;
  questionInitialData: IGetQuestionById;
  questionId: number;
}
