import { IQuestion } from '@/types/question';

export interface IInterviewStore {
  id: number;
  questionCount: number;
  limitTimer: number;
  questionsAndAnswers: IQuestion[];
  currentQuestionIndex: number;
  setInterview: (partial: Partial<IInterviewStore>) => void;
}

export interface IIsSubmitStore {
  isSubmit: boolean;
  setIsSubmit: (value: boolean) => void;
}

export interface IProgressingTimeStore {
  progressingTime: number;
  setProgressingTime: (newTime: number) => void;
}

export interface IQuestionContentStore {
  questionContent: string | null;
  setQuestionContent: (content: string) => void;
}

export interface IAnswerContentStore {
  answerContent: string | null;
  setAnswerContent: (content: string) => void;
}

export interface IMediaBlobUrlStore {
  mediaBlobUrl: Blob[];
  setMediaBlobUrl: (videoChunks: Blob[]) => void;
  appendMediaBlobUrl: (newVideoChunk: Blob) => void;
}

export interface IQuestionChangeCounterStore {
  questionChangeCounter: number;
  increaseQuestionChangeCounter: () => void;
  setQuestionChangeCounter: (value: number) => void;
}
