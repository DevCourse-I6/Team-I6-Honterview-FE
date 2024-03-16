import { IQuestion } from './question';

export type TAnswerType = 'IN_PROGRESS' | 'COMPLETED';

export interface IInterview {
  interviewId: number;
  timer: number;
  answerType: TAnswerType;
  questionCount: number;
  videoId: number;
  questionsAndAnswers: IQuestion[];
  status: string;
  categoryNames: string[];
}

export interface IRequestInterviewForm {
  questionContent: string;
  answerContent: string;
  processingTime: number;
}
