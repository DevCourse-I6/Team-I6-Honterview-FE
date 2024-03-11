import { IInterviewAnswer, IInterviewData } from '../../types/interviews';

export interface IProps {
  questionAndAnswerData: IInterviewAnswer;
  answerType: Pick<IInterviewData, 'answerType'>['answerType'];
}
