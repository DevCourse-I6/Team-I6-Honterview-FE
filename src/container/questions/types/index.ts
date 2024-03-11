// TODO: sangmin // 도메인별로 타입 정리

export interface IProps {
  params: {
    questionId: string;
  };
}

export interface IGetQuestionById {
  message: string;
  data: IQuestion;
}

export interface IGetRandomQuestionsByCategories {
  message: string;
  data: ITailQuestion[];
}

export interface IClickQuestionHeart {
  message: string;
  data: IQuestionHeart;
}

export interface IPatchQuestionRequestBody {
  content: string;
  categoryIds: number[];
}

export interface IGetCategories {
  message: string;
  data: ICategory[];
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IClickAnswerHeart {
  message: string;
  data: IAnswerHeart;
}

export interface IQuestionHeart {
  questionHeartCount: number;
  isHearted: boolean;
}

export interface IAnswerHeart {
  isHearted: boolean;
}

export interface IQuestion {
  id: number;
  content: string;
  categoryNames: string[];
  heartsCount: number;
  answers: IAnswerPage;
}

export interface ITailQuestion {
  id: number;
  content: string;
}

export interface IAnswer {
  id: number;
  content: string;
  nickname: string;
  heartsCount: number;
}

export interface IAnswerPage {
  currentPage: number;
  pageSize: number;
  totalElements: number;
  startIndex: number;
  endIndex: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  data: IAnswer[];
}
