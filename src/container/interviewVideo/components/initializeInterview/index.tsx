'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { notify } from '@/components/toast';
import {
  useAnswerContent,
  useInterview,
  useLoadingStatus,
  useMediaBlobUrl,
  useQuestionChangeCounter,
  useQuestionContent,
  useSubmitStatus,
  useTimeout,
} from '@/stores/interviewProgress';

import { IProps } from './types';

const InitializeInterview = ({ interviewId, interviewData }: IProps) => {
  const { timer, questionCount, questionsAndAnswers, status } = interviewData;
  const { setMediaBlobUrl } = useMediaBlobUrl();
  const { setInterview } = useInterview();
  const { stopSubmit } = useSubmitStatus();
  const { stopLoading } = useLoadingStatus();
  const { disableTimeout } = useTimeout();
  const { setQuestionContent } = useQuestionContent();
  const { setAnswerContent } = useAnswerContent();
  const { setQuestionChangeCounter } = useQuestionChangeCounter();
  const router = useRouter();

  useEffect(() => {
    const { length } = questionsAndAnswers;
    const lastQuestion = questionsAndAnswers[length - 1].questionContent;
    const lastAnswer = questionsAndAnswers[length - 1].answerContent;
    let currentIndex = 0;

    if (lastQuestion && lastAnswer === null) {
      currentIndex = length - 1;
    }

    if (lastQuestion && lastAnswer !== null) {
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
    stopLoading();
    stopSubmit();
    disableTimeout();
    setMediaBlobUrl([]);
    stopLoading();
    stopSubmit();
    disableTimeout();
    setQuestionChangeCounter(0);
    setQuestionContent(question);
    setAnswerContent(answer);
  }, [
    interviewId,
    questionCount,
    questionsAndAnswers,
    timer,
    setMediaBlobUrl,
    stopSubmit,
    stopLoading,
    disableTimeout,
    setAnswerContent,
    setInterview,
    setQuestionChangeCounter,
    setQuestionContent,
  ]);

  useEffect(() => {
    if (status === 'COMPLETED') {
      notify('info', '이미 종료된 면접 입니다');
      router.back();
    }
  }, [router, status]);

  return null;
};

export default InitializeInterview;
