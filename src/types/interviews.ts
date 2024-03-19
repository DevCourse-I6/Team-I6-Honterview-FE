// getInterviewInformation
export interface IInterview {
  interviewId: number;
  timer: number;
  answerType: 'TEXT' | 'RECORD';
  questionCount: number;
  status: 'IN_PROGRESS' | 'COMPLETED';
  questionsAndAnswers: IQuestionAndAnswer[];
  categoryNames: string[];
}

export interface IQuestionAndAnswer {
  questionId: number;
  questionContent: string;
  answerId: number;
  answerContent: string;
  processingTime: number;
  videoId?: number;
}

// patchInterviewVisibility
export interface IInterviewId {
  interviewId: number;
}

// saveQuestionAndAnswer
export interface IQuestionAndAnswerId {
  questionId: number;
  answerId: number;
}
