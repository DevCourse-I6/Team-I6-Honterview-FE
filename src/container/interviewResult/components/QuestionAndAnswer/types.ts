import { IInterviewAnswer } from '../../types/interviews';

export interface IProps {
  questionAndAnswerData: IInterviewAnswer;
  answerType: 'TEXT' | 'RECORD';
}
