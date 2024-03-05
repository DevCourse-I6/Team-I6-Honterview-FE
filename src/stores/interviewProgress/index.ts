import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import LOCAL_STORAGE_KEY from '@/constants/localStorageKey';

import { IInterviewProgress, IUseInterviewProgress } from './types';

const useInterviewProgress = create(
  persist<IUseInterviewProgress>(
    (set) => ({
      id: null,
      progressingTime: 0,
      questionContent: '',
      answerContent: '',
      questionChangeCounter: 0,

      setInterview: (newInterview: Partial<IInterviewProgress>) =>
        set((state) => ({
          ...state,
          ...newInterview,
        })),
      increaseQuestionChangeCounter: () =>
        set((state) => ({
          ...state,
          questionChangeCounter: state.questionChangeCounter + 1,
        })),
      reset: () =>
        set(() => ({
          id: null,
          progressingTime: 0,
          questionContent: '',
          answerContent: '',
          questionChangeCounter: 0,
        })),
    }),
    {
      name: LOCAL_STORAGE_KEY.INTERVIEW_PROGRESS,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useInterviewProgress;
