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
  answerTime: [number, number];
  addFirstQuestionTag: (tag: string) => void;
  removeFirstQuestionTag: (tag: string) => void;
  setFirstQuestion: (question: string) => void;
  setQuestionCount: (count: number) => void;
  setInterviewTypeCamera: () => void;
  setInterviewTypeChatting: () => void;
  setAnswerTimeMin: (min: number) => void;
  setAnswerTimeSec: (sec: number) => void;
}
