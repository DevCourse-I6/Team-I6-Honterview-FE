import { IQuestion } from './question';

export interface IInterview {
  interviewId: number;
  timer: number;
  answerType: string;
  questionCount: number;
  questionsAndAnswers: IQuestion[];
  categories: string[];
}

export interface IRequestInterviewForm {
  questionContent: string;
  answerContent: string;
  videoId: number;
  processingTime: number;
}
