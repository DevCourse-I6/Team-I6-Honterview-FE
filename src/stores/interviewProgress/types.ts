import { IQuestion } from '@/types/question';

export interface IInterviewStore {
  id: number;
  questionCount: number;
  limitTimer: number;
  questionsAndAnswers: IQuestion[];
  categories: string[];
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
  questionContent: string;
  setQuestionContent: (content: string) => void;
}

export interface IAnswerContentStore {
  answerContent: string;
  setAnswerContent: (content: string) => void;
}

export interface IMediaBlobUrlStore {
  mediaBlobUrl: Blob[];
  setMediaBlobUrl: (videoChunks: Blob[]) => void;
}
