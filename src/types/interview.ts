import { IQuestion } from './question';

export interface IInterview {
  interviewId: string;
  questionContent: string;
  questionCount: number;
  timer: number;
  questions: IQuestion[];
  categories: string[];
}
