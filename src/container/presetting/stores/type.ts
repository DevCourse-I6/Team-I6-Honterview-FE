import { AutocompleteDataType } from '../../../components/autocompleteSearch/type';

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
  firstQuestionTags: AutocompleteDataType[];
  firstQuestion?: AutocompleteDataType;
  questionCount: number;
  interviewType?: 'camera' | 'chatting';
  answerTime: { minute: number; second: number };
  addFirstQuestionTag: (tag: AutocompleteDataType) => void;
  removeFirstQuestionTag: (tag: AutocompleteDataType) => void;
  setFirstQuestion: (question: AutocompleteDataType) => void;
  setQuestionCount: (count: number) => void;
  setInterviewTypeCamera: () => void;
  setInterviewTypeChatting: () => void;
  setTimeMinute: (minute: number) => void;
  setTimeSecond: (second: number) => void;
}
