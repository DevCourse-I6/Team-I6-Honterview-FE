export interface IInterviewProgress {
  id: string | null;
  progressingTime: number;
  questionContent: string;
  answerContent: string;
}

export interface IUseInterviewProgress {
  interview: IInterviewProgress;
  setInterview: (newInterview: Partial<IInterviewProgress>) => void;
  reset: () => void;
}
