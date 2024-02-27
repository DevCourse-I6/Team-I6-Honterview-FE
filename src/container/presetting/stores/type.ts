export interface StepState {
  totalStep: number;
  currentStep: number;
  isNextButtonOn: boolean;
  increaseStep: () => void;
  decreaseStep: () => void;
  setCameraStep: () => void;
  setChattingStep: () => void;
  setNextButtonOn: () => void;
  setNextButtonOff: () => void;
}

export interface PresettingDataState {
  firstQuestionTag: string[];
  firstQuestion: string;
  questionCount: number;
  interviewType?: 'camera' | 'chatting';
  answerTime: { minute: number; second: number };
  addFirstQuestionTag: (tag: string) => void;
  removeFirstQuestionTag: (tag: string) => void;
  setFirstQuestion: (question: string) => void;
  setQuestionCount: (count: number) => void;
  setInterviewTypeCamera: () => void;
  setInterviewTypeChatting: () => void;
  setTimeMinute: (minute: number) => void;
  setTimeSecond: (second: number) => void;
}
