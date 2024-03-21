import { IPatchInterviewVisibilityPayload } from '@/libs/types/payload';

export interface IUseAnswerVisibilityStatusStore {
  answerIdList: IPatchInterviewVisibilityPayload[];
  setInitialAnswerList: (
    answerLength: number,
    visibility: 'PRIVATE' | 'PUBLIC',
  ) => void;
  setAnswerIdList: (questionId: number) => void;
  clearAnswerIdList: () => void;
}
