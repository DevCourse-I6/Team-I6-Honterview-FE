import { create } from 'zustand';

import { PresettingDataState } from './type';

const usePresettingDataStore = create<PresettingDataState>((set) => ({
  firstQuestionTag: [],
  firstQuestion: '',
  questionCount: 0,
  interviewType: undefined,
  answerTime: [0, 0],
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
  setAnswerTimeMin: (min) => {
    set(({ answerTime }) => ({
      answerTime: [min, answerTime[1]],
    }));
  },
  setAnswerTimeSec: (sec) => {
    set(({ answerTime }) => ({
      answerTime: [answerTime[0], sec],
    }));
  },
}));

export default usePresettingDataStore;
