// getQuestionById
export interface IQuestionAndAnswers {
  id: number;
  content: string;
  categoryNames: string[];
  heartsCount: number;
  isHearted: boolean;
  isBookmarked: boolean;
  answers: IAnswersPage;
}

export interface IAnswersPage {
  currentPage: number;
  pageSize: number;
  totalElements: number;
  startIndex: number;
  endIndex: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  data: IAnswer[];
}

export interface IAnswer {
  id: number;
  content: string;
  nickname: string;
  heartsCount: number;
}

// getRandomQuestionsByCategories
export interface ITailQuestion {
  id: number;
  content: string;
}

// clickQuestionHeart
export interface IQuestionHeart {
  questionHeartCount: number;
  isHearted: boolean;
}

// createQuestion
export interface IQuestionAndCategoryIds {
  content: string;
  categoryIds: number[];
}

// getQuestionsByCategory
export interface IQuestion {
  id: number;
  content: string;
}
