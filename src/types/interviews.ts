// getInterviewInformation
export interface IInterview {
  interviewId: number;
  timer: number;
  answerType: 'TEXT' | 'RECORD';
  questionCount: number;
  status: 'IN_PROGRESS' | 'COMPLETED';
  videoId?: number;
  questionsAndAnswers: IQuestionAndAnswer[];
  categoryNames: string[];
}

export interface IQuestionAndAnswer {
  questionId: number;
  questionContent: string;
  answerId: number;
  answerContent: string;
  processingTime: number;
  visibility: 'PRIVATE' | 'PUBLIC';
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
