'use client';

import { useEffect } from 'react';

import {
  useAnswerContent,
  useInterview,
  useQuestionContent,
} from '@/stores/interviewProgress';

import { IProps } from './types';

const InitializeInterview = ({ interviewId, interviewData }: IProps) => {
  const { timer, questionCount, questionsAndAnswers, categories } =
    interviewData;
  const { currentQuestionIndex, setInterview } = useInterview();
  const { setQuestionContent } = useQuestionContent();
  const { setAnswerContent } = useAnswerContent();

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

    setInterview({
      id: Number(interviewId),
      questionCount,
      limitTimer: timer,
      questionsAndAnswers,
      categories,
      currentQuestionIndex: currentIndex,
    });
  }, [
    interviewId,
    setInterview,
    questionCount,
    timer,
    categories,
    questionsAndAnswers,
  ]);

  useEffect(() => {
    const answer =
      questionsAndAnswers[currentQuestionIndex].answerContent ?? '';

    if (answer) {
      setAnswerContent(answer);
    }
  }, [currentQuestionIndex, questionsAndAnswers, setAnswerContent]);

  useEffect(() => {
    const question =
      questionsAndAnswers[currentQuestionIndex].questionContent ?? '';

    if (question) {
      setQuestionContent(question);
    }
  }, [setQuestionContent, questionsAndAnswers, currentQuestionIndex]);

  return null;
};

export default InitializeInterview;
