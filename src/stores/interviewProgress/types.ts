export interface IInterviewProgress {
  id: string | null;
  progressingTime: number;
  questionContent: string;
  answerContent: string;
}

export interface IUseInterviewProgress {
  interview: IInterviewProgress;
  questionChangeCounter: number;
  setInterview: (newInterview: Partial<IInterviewProgress>) => void;
  increaseQuestionChangeCounter: () => void;
  reset: () => void;
}
