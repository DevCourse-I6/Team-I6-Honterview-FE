import { create } from 'zustand';

import {
  IAnswerContentStore,
  IInterviewStore,
  IIsSubmitStore,
  IMediaBlobUrlStore,
  IProgressingTimeStore,
  IQuestionContentStore,
} from './types';

const useInterview = create<IInterviewStore>((set) => ({
  id: 0,
  questionCount: 0,
  limitTimer: 0,
  questionsAndAnswers: [],
  categories: [],
  currentQuestionIndex: 0,
  setInterview: (partial) => set((state) => ({ ...state, ...partial })),
}));

const useIsSubmit = create<IIsSubmitStore>((set) => ({
  isSubmit: false,
  setIsSubmit: (value: boolean) => set(() => ({ isSubmit: value })),
}));

const useProgressingTime = create<IProgressingTimeStore>((set) => ({
  progressingTime: 0,
  setProgressingTime: (newTime: number) =>
    set(() => ({ progressingTime: newTime })),
}));

const useQuestionContent = create<IQuestionContentStore>((set) => ({
  questionContent: '',
  setQuestionContent: (content: string) =>
    set(() => ({ questionContent: content })),
}));

const useAnswerContent = create<IAnswerContentStore>((set) => ({
  answerContent: '',
  setAnswerContent: (content: string) =>
    set(() => ({ answerContent: content })),
}));

const useMediaBlobUrl = create<IMediaBlobUrlStore>((set) => ({
  mediaBlobUrl: [],
  setMediaBlobUrl: (videoChunks: Blob[]) =>
    set(() => ({ mediaBlobUrl: videoChunks })),
}));

export {
  useAnswerContent,
  useInterview,
  useIsSubmit,
  useMediaBlobUrl,
  useProgressingTime,
  useQuestionContent,
};
