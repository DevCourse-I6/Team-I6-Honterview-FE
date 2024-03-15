export interface IResponsePostTailQuestion {
  message: string;
  data: {
    id: string;
    tailQuestionContent: string;
  };
}

export interface IResponseRePostTailQuestion {
  message: string;
  data: {
    id: string;
    tailQuestionContent: string;
  };
}
