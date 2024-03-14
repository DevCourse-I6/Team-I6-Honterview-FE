import { create } from 'zustand';

import {
  IAnswerContentStore,
  IInterviewStore,
  ILoadingStatusStore,
  IMediaBlobUrlStore,
  IProgressingTimeStore,
  IQuestionChangeCounterStore,
  IQuestionContentStore,
  ISubmitStatusStore,
  ITimeoutStore,
} from './types';

const useInterview = create<IInterviewStore>((set) => ({
  id: 0,
  questionCount: 0,
  limitTimer: 0,
  questionsAndAnswers: [],
  currentQuestionIndex: -1,
  setInterview: (partial) => set((state) => ({ ...state, ...partial })),
}));

const useProgressingTime = create<IProgressingTimeStore>((set) => ({
  progressingTime: 0,
  setProgressingTime: (newTime: number) =>
    set(() => ({ progressingTime: newTime })),
}));

const useQuestionContent = create<IQuestionContentStore>((set) => ({
  questionContent: null,
  setQuestionContent: (content: string) =>
    set(() => ({ questionContent: content })),
}));

const useAnswerContent = create<IAnswerContentStore>((set) => ({
  answerContent: null,
  setAnswerContent: (content: string) =>
    set(() => ({ answerContent: content })),
}));

const useMediaBlobUrl = create<IMediaBlobUrlStore>((set) => ({
  mediaBlobUrl: [],
  setMediaBlobUrl: (videoChunks: Blob[]) =>
    set(() => ({ mediaBlobUrl: videoChunks })),
  appendMediaBlobUrl: (newVideoChunk: Blob) =>
    set((state) => ({ mediaBlobUrl: [...state.mediaBlobUrl, newVideoChunk] })),
}));

const useQuestionChangeCounter = create<IQuestionChangeCounterStore>((set) => ({
  questionChangeCounter: 0,
  increaseQuestionChangeCounter: () =>
    set((state) => ({
      questionChangeCounter: state.questionChangeCounter + 1,
    })),
  setQuestionChangeCounter: (value: number) =>
    set(() => ({ questionChangeCounter: value })),
}));

const useTimeout = create<ITimeoutStore>((set) => ({
  timeout: false,
  enableTimeout: () => set({ timeout: true }),
  disableTimeout: () => set({ timeout: false }),
}));

const useLoadingStatus = create<ILoadingStatusStore>((set) => ({
  isLoading: false,
  startLoading: () => set({ isLoading: true }),
  stopLoading: () => set({ isLoading: false }),
}));

const useSubmitStatus = create<ISubmitStatusStore>((set) => ({
  isSubmit: false,
  startSubmit: () => set({ isSubmit: true }),
  stopSubmit: () => set({ isSubmit: false }),
}));

export {
  useAnswerContent,
  useInterview,
  useLoadingStatus,
  useMediaBlobUrl,
  useProgressingTime,
  useQuestionChangeCounter,
  useQuestionContent,
  useSubmitStatus,
  useTimeout,
};
