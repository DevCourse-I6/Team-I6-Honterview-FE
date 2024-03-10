import { create } from 'zustand';

import { IUseVisibilityCheckStore } from './types';

export const useVisibilityCheckStore = create<IUseVisibilityCheckStore>(
  (set) => ({
    answerIdList: [],
    setInitialAnswerList: (answerLength) =>
      set(() => ({
        answerIdList: Array.from({ length: answerLength }, (_, i) => ({
          answerId: i + 1,
          visibility: 'PRIVATE',
        })),
      })),
    setAnswerIdList: (answerId) =>
      set((state) => {
        const answerIndex = state.answerIdList.findIndex(
          (answerInformation) => answerInformation.answerId === answerId,
        );

        const newVisibility =
          state.answerIdList[answerIndex].visibility === 'PRIVATE'
            ? 'PUBLIC'
            : 'PRIVATE';

        const newAnswerIdList = state.answerIdList.map((answer, index) =>
          index === answerIndex
            ? { ...answer, visibility: newVisibility as 'PUBLIC' | 'PRIVATE' }
            : answer,
        );

        return { answerIdList: newAnswerIdList };
      }),
  }),
);
