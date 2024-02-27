import { create } from 'zustand';

import { PresettingDataState } from './type';

const usePresettingDataStore = create<PresettingDataState>((set) => ({
  firstQuestionTag: [],
  firstQuestion: '',
  questionCount: 0,
  interviewType: undefined,
  answerTime: { minute: 0, second: 0 },
  addFirstQuestionTag: (tag) => {
    set(({ firstQuestionTag }) => {
      firstQuestionTag.push(tag);
      return {
        firstQuestionTag,
      };
    });
  },
  removeFirstQuestionTag: (tag) => {
    set(({ firstQuestionTag }) => {
      firstQuestionTag.splice(firstQuestionTag.indexOf(tag));
      return {
        firstQuestionTag,
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
