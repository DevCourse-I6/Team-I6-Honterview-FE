export interface IGetInterviewResult {
  message: string;
  data: IInterviewData;
}

export interface IPatchInterviewVisibility {
  message: string;
  data: {
    interviewId: number;
  };
}

export interface IPatchInterviewVisibilityRequestBody {
  answerId: number;
  visibility: 'PUBLIC' | 'PRIVATE';
}

export interface IInterviewData {
  interviewId: number;
  timer: number;
  answerType: 'TEXT' | 'RECORD';
  questionCount: number;
  questionsAndAnswers: IInterviewAnswer[];
  categoryNames: string[];
}

export interface IInterviewAnswer {
  questionId: number;
  questionContent: string;
  answerId: number;
  answerContent: string;
  processingTime: number;
  videoId?: number;
}
