import { IAnswerHeart } from '@/types/answers';
import { ICategory } from '@/types/categories';
import { IDownLoadUrl } from '@/types/files';
import { IInterview, IInterviewId } from '@/types/interviews';
import {
  IQuestionAndAnswers,
  IQuestionHeart,
  ITailQuestion,
} from '@/types/questions';

// questions
export interface IGetQuestionById {
  message: string;
  data: IQuestionAndAnswers;
}

export interface IGetRandomQuestionsByCategories {
  message: string;
  data: ITailQuestion[];
}

export interface IClickQuestionHeart {
  message: string;
  data: IQuestionHeart;
}

// interviews
export interface IGetInterviewResult {
  message: string;
  data: IInterview;
}

export interface IPatchInterviewVisibility {
  message: string;
  data: IInterviewId;
}

// gpt

// categories
export interface IGetCategories {
  message: string;
  data: ICategory[];
}

// auth

// answers
export interface IClickAnswerHeart {
  message: string;
  data: IAnswerHeart;
}

// files
export interface IGetInterviewVideoUrl {
  message: string;
  data: IDownLoadUrl;
}
