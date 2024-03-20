import { IInterview } from '@/types/interviews';

export interface IProps {
  interviewId: number;
  interviewData: IInterview;
}

export interface IQuestionAndAnswer {
  questionId: number | null;
  questionContent: string | null;
  answerId: number | null;
  answerContent: string | null;
}
