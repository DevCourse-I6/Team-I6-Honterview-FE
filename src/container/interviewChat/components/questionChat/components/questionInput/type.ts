import { IQuestionAndAnswer } from '../../type';

export interface IProps {
  setQuestionsAndAnswers: React.Dispatch<
    React.SetStateAction<IQuestionAndAnswer[]>
  >;
}
