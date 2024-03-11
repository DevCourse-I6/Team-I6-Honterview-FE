import {
  AutocompleteCreatedDataType,
  AutocompleteDataType,
} from '../../../components/autocompleteSearch/type';

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
  firstQuestion?: AutocompleteCreatedDataType;
  questionCount: number;
  interviewType?: 'RECORD' | 'TEXT';
  answerTime: { minute: number; second: number };
  addFirstQuestionTag: (tag: AutocompleteDataType) => void;
  removeFirstQuestionTag: (tag: AutocompleteDataType) => void;
  setFirstQuestion: (question: AutocompleteCreatedDataType | undefined) => void;
  setQuestionCount: (count: number) => void;
  setInterviewTypeCamera: () => void;
  setInterviewTypeChatting: () => void;
  setTimeMinute: (minute: number) => void;
  setTimeSecond: (second: number) => void;
}
