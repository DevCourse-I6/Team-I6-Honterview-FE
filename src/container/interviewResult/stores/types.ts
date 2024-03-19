import { IPatchInterviewVisibilityPayload } from '@/libs/types/payload';

export interface IUseAnswerVisibilityStatusStore {
  answerIdList: IPatchInterviewVisibilityPayload[];
  setInitialAnswerList: (answerLength: number) => void;
  setAnswerIdList: (questionId: number) => void;
  clearAnswerIdList: () => void;
}
