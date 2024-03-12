import { IPatchInterviewVisibilityPayload } from '@/libs/types/payload';

export interface IUseVisibilityCheckStore {
  answerIdList: IPatchInterviewVisibilityPayload[];
  setInitialAnswerList: (answerLength: number) => void;
  setAnswerIdList: (questionId: number) => void;
}
