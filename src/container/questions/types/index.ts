export interface IProps {
  params: {
    questionId: string;
  };
}

export interface IQuestion {
  id: number;
  content: string;
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
