// questions
export interface IPatchQuestionPayload {
  content: string;
  categoryIds: number[];
}

// interviews
export interface ICreateInterviewPayload {
  answerType: 'TEXT' | 'RECORD';
  questionCount: number;
  timer: number;
  questionId: number;
}

export interface ISaveQuestionAndAnswerPayload {
  questionContent: string;
  answerContent: string;
  videoId: number;
  processingTime: number;
}

export interface IPatchInterviewVisibilityPayload {
  answerId: number;
  visibility: 'PUBLIC' | 'PRIVATE';
}

// gpt
export interface ICreateGptTailQuestionPayload {
  prevQuestion: string;
  prevAnswer: string;
}

export interface IRecreateGptTailQuestionPayload {
  prevQuestion: string;
}

// categories
export interface ICreateCategoryPayload {
  categoryName: string;
}

export interface IPatchCategoryPayload {
  categoryName: string;
}

// auth
export interface ISignUpAdminPayload {
  email: string;
  password: string;
  name: string;
}

export interface ILoginAdminPayload {
  email: string;
  password: string;
}
// answers

// files
