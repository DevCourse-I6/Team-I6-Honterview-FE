import { IPatchInterviewVisibilityRequestBody } from '../types/interviews';

export interface IUseVisibilityCheckStore {
  answerIdList: IPatchInterviewVisibilityRequestBody[];
  setInitialAnswerList: (answerLength: number) => void;
  setAnswerIdList: (questionId: number) => void;
}
