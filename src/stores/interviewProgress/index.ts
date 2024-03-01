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
      setInterview: (newInterview: Partial<IInterviewProgress>) =>
        set((state) => ({
          interview: { ...state.interview, ...newInterview },
        })),
      reset: () =>
        set(() => ({
          interview: {
            id: null,
            progressingTime: 0,
            questionContent: '',
            answerContent: '',
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
