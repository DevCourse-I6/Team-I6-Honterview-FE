import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import LOCAL_STORAGE_KEY from '@/constants/localStorageKey';

import { IInterviewProgress, IUseInterviewProgress } from './types';

const useInterviewProgress = create(
  persist<IUseInterviewProgress>(
    (set) => ({
      interview: {
        id: null,
        progressingTime: 0,
        questionContent: '',
        answerContent: '',
      },
      questionChangeCounter: 0,

      setInterview: (newInterview: Partial<IInterviewProgress>) =>
        set((state) => ({
          ...state,
          interview: { ...state.interview, ...newInterview },
        })),
      increaseQuestionChangeCounter: () =>
        set((state) => ({
          ...state,
          questionChangeCounter: state.questionChangeCounter + 1,
        })),
      reset: () =>
        set(() => ({
          interview: {
            id: null,
            progressingTime: 0,
            questionContent: '',
            answerContent: '',
            number: 0,
          },
        })),
    }),
    {
      name: LOCAL_STORAGE_KEY.INTERVIEW_PROGRESS,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useInterviewProgress;
