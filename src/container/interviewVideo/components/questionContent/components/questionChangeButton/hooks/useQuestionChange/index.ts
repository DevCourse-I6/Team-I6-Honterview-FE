import { useCallback, useEffect, useTransition } from 'react';

import { notify } from '@/components/toast';
import { postTailQuestion, rePostTailQuestion } from '@/libs/actions/question';
import {
  useInterview,
  useLoadingStatus,
  useQuestionChangeCounter,
  useQuestionContent,
} from '@/stores/interviewProgress';

const useQuestionChange = () => {
  const { startLoading, stopLoading } = useLoadingStatus();
  const { id, currentQuestionIndex, questionsAndAnswers } = useInterview();
  const { questionContent, setQuestionContent } = useQuestionContent();
  const [isPending, startTransition] = useTransition();
  const { questionChangeCounter, increaseQuestionChangeCounter } =
    useQuestionChangeCounter();

  const handleChangeQuestion = useCallback(() => {
    if (currentQuestionIndex === 0) {
      return notify('warning', '첫 질문은 변경이 불가능 합니다');
    }

    if (questionChangeCounter >= 1) {
      return notify('warning', '질문 변경은 최대 1회 입니다.');
    }

    const { questionContent: prevQuestion, answerContent: prevAnswer } =
      questionsAndAnswers[currentQuestionIndex - 1];

    if (questionContent !== '') {
      startTransition(async () => {
        const { data } = await rePostTailQuestion(id, prevQuestion);

        increaseQuestionChangeCounter();
        setQuestionContent(data.tailQuestionContent);
      });
    }

    if (questionContent === '') {
      startTransition(async () => {
        const { data } = await postTailQuestion(
          id,
          prevQuestion,
          prevAnswer || prevQuestion,
        );

        setQuestionContent(data.tailQuestionContent);
      });
    }
  }, [
    currentQuestionIndex,
    id,
    increaseQuestionChangeCounter,
    questionChangeCounter,
    questionContent,
    questionsAndAnswers,
    setQuestionContent,
  ]);

  useEffect(() => {
    if (questionContent === '') {
      handleChangeQuestion();
    }
  }, [questionContent, handleChangeQuestion]);

  useEffect(() => {
    if (isPending) {
      return startLoading();
    }

    stopLoading();
  }, [isPending, startLoading, stopLoading]);

  return { isPending, handleChangeQuestion };
};

export default useQuestionChange;
