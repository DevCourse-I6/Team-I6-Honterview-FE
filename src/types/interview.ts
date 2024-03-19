import { IQuestion } from './question';

export type TStatus = 'IN_PROGRESS' | 'COMPLETED';
export type TAnswerType = 'TEXT' | 'RECORD';

export interface IInterview {
  interviewId: number;
  timer: number;
  answerType: TAnswerType;
  questionCount: number;
  videoId: number;
  questionsAndAnswers: IQuestion[];
  status: TStatus;
  categoryNames: string[];
}

export interface IRequestInterviewForm {
  questionContent: string;
  answerContent: string;
  processingTime: number;
}
