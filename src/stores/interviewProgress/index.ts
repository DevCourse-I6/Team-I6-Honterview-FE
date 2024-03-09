import { create } from 'zustand';

import {
  IAnswerContentStore,
  IInterviewStore,
  IMediaBlobUrlStore,
  IProgressingTimeStore,
  IQuestionChangeCounterStore,
  IQuestionContentStore,
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

export {
  useAnswerContent,
  useInterview,
  useMediaBlobUrl,
  useProgressingTime,
  useQuestionChangeCounter,
  useQuestionContent,
};
