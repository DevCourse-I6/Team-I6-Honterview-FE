import { IInterview, IQuestionAndAnswer } from '@/types/interviews';

export interface IProps {
  questionAndAnswerData: IQuestionAndAnswer;
  answerType: Pick<IInterview, 'answerType'>['answerType'];
}
