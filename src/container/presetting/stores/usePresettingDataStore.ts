import { create } from 'zustand';

import { PresettingDataState } from './type';

const usePresettingDataStore = create<PresettingDataState>((set) => ({
  firstQuestionTags: [],
  firstQuestion: undefined,
  questionCount: 0,
  interviewType: undefined,
  answerTime: { minute: 0, second: 0 },
  addFirstQuestionTag: (tag) => {
    set(({ firstQuestionTags }) => {
      firstQuestionTags.push(tag);
      return {
        firstQuestionTags,
      };
    });
  },
  removeFirstQuestionTag: (tag) => {
    set(({ firstQuestionTags }) => {
      firstQuestionTags.splice(firstQuestionTags.indexOf(tag));
      return {
        firstQuestionTags,
      };
    });
  },
  setFirstQuestion: (question) => {
    set(() => ({
      firstQuestion: question,
    }));
  },
  setQuestionCount: (count) => {
    set(() => ({
      questionCount: count,
    }));
  },
  setInterviewTypeCamera: () => {
    set(() => ({
      interviewType: 'camera',
    }));
  },
  setInterviewTypeChatting: () => {
    set(() => ({
      interviewType: 'chatting',
    }));
  },
  setTimeMinute: (minute) => {
    set(({ answerTime }) => ({
      answerTime: { ...answerTime, minute },
    }));
  },
  setTimeSecond: (second) => {
    set(({ answerTime }) => ({
      answerTime: { ...answerTime, second },
    }));
  },
}));

export default usePresettingDataStore;
