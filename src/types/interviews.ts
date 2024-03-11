// getInterviewResult
export interface IInterview {
  interviewId: number;
  timer: number;
  answerType: 'TEXT' | 'RECORD';
  questionCount: number;
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
