import { IQuestionAndAnswer } from '../../type';

export interface IProps {
  questionsAndAnswers: IQuestionAndAnswer[];
  interviewId: number;
  // setQuestionsAndAnswers: (value: IQuestionAndAnswer[]) => void;
  setQuestionsAndAnswers: (
    value: React.SetStateAction<IQuestionAndAnswer[]>,
  ) => void;
  reQuestionCount: number;
  // setReQuestionCount: (value: number) => void;
  setReQuestionCount: (value: React.SetStateAction<number>) => void;
}
