export interface IInterviewProgress {
  id: string | null;
  progressingTime: number;
  questionContent: string;
  answerContent: string;
  questionChangeCounter: number;
}

export interface IUseInterviewProgress {
  id: string | null;
  progressingTime: number;
  questionContent: string;
  answerContent: string;
  questionChangeCounter: number;
  setInterview: (newInterview: Partial<IInterviewProgress>) => void;
  increaseQuestionChangeCounter: () => void;
  reset: () => void;
}
