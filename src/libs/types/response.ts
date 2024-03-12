import { IAnswerHeart } from '@/types/answers';
import { IAccessAndRefreshToken, IGetLoginUserResponse } from '@/types/auth';
import { ICategory } from '@/types/categories';
import { IDownLoadUrl, IUploadUrl } from '@/types/files';
import { IGptTailQuestion } from '@/types/gpt';
import {
  IInterview,
  IInterviewId,
  IQuestionAndAnswerId,
} from '@/types/interviews';
import {
  IQuestion,
  IQuestionAndAnswers,
  IQuestionAndCategoryIds,
  IQuestionHeart,
  ITailQuestion,
} from '@/types/questions';

// questions
export interface IGetQuestionById {
  message: string;
  data: IQuestionAndAnswers;
}

export interface ICreateQuestion {
  message: string;
  data: IQuestionAndCategoryIds;
}

export interface IGetRandomQuestionsByCategories {
  message: string;
  data: ITailQuestion[];
}

export interface IGetQuestionsByCategory {
  message: string;
  data: IQuestion[];
}

export interface IClickQuestionBookmark {
  message: string;
}
export interface IClickQuestionHeart {
  message: string;
  data: IQuestionHeart;
}

// interviews
export interface ICreateInterview {
  message: string;
  data: number;
}

export interface IGetInterviewInformation {
  message: string;
  data: IInterview;
}

export interface ISaveQuestionAndAnswer {
  message: string;
  data: IQuestionAndAnswerId;
}

export interface IPatchInterviewVisibility {
  message: string;
  data: IInterviewId;
}

// gpt
export interface ICreateGptTailQuestion {
  message: string;
  data: IGptTailQuestion;
}

export interface IRecreateGptTailQuestion {
  message: string;
  data: IGptTailQuestion;
}

// categories
export interface IGetCategories {
  message: string;
  data: ICategory[];
}

export interface ICreateCategory {
  message: string;
  data: number;
}

export interface IPatchCategory {
  message: string;
  data: ICategory;
}

// auth
export interface IReissueToken {
  message: string;
  data: IAccessAndRefreshToken;
}

export interface ISignUpAdmin {
  message: string;
  data: number;
}

export interface IGetLoginUser {
  message: string;
  data: IGetLoginUserResponse;
}

// answers
export interface IClickAnswerHeart {
  message: string;
  data: IAnswerHeart;
}

// files
export interface IGetVideoDownLoadUrl {
  message: string;
  data: IDownLoadUrl;
}

export interface IGetVideoUploadUrl {
  message: string;
  data: IUploadUrl;
}
