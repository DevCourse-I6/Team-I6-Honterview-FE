'use client';

import { useEffect } from 'react';

import {
  useAnswerContent,
  useInterview,
  useMediaBlobUrl,
  useQuestionChangeCounter,
  useQuestionContent,
} from '@/stores/interviewProgress';

import { IProps } from './types';

const InitializeInterview = ({ interviewId, interviewData }: IProps) => {
  const { timer, questionCount, questionsAndAnswers } = interviewData;
  const { setInterview } = useInterview();
  const { setQuestionContent } = useQuestionContent();
  const { setAnswerContent } = useAnswerContent();
  const { setMediaBlobUrl } = useMediaBlobUrl();
  const { setQuestionChangeCounter } = useQuestionChangeCounter();

  useEffect(() => {
    const { length } = questionsAndAnswers;
    const lastQuestion =
      questionsAndAnswers[length - 1].questionContent ?? undefined;
    const lastAnswer =
      questionsAndAnswers[length - 1].answerContent ?? undefined;
    let currentIndex = 0;

    if (lastQuestion && !lastAnswer) {
      currentIndex = length - 1;
    }

    if (lastQuestion && lastAnswer) {
      if (length + 1 <= questionCount) {
        currentIndex = length;
      }
      if (length + 1 > questionCount) {
        currentIndex = length - 1;
      }
    }

    const question = questionsAndAnswers[currentIndex]?.questionContent ?? '';
    const answer = questionsAndAnswers[currentIndex]?.answerContent ?? '';

    setInterview({
      id: Number(interviewId),
      questionCount,
      limitTimer: timer,
      questionsAndAnswers,
      currentQuestionIndex: currentIndex,
    });
    setMediaBlobUrl([]);
    setQuestionChangeCounter(0);
    setQuestionContent(question);
    setAnswerContent(answer);
  }, [
    interviewId,
    questionCount,
    questionsAndAnswers,
    setAnswerContent,
    setInterview,
    setMediaBlobUrl,
    setQuestionChangeCounter,
    setQuestionContent,
    timer,
  ]);

  return null;
};

export default InitializeInterview;
