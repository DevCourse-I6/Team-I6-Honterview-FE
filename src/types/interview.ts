import { IQuestion } from './question';

export interface IInterview {
  interviewId: number;
  timer: number;
  answerType: string;
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
