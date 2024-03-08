import { useCallback, useEffect, useState, useTransition } from 'react';

import { notify } from '@/components/toast';
import {
  changeQuestionByAnswer,
  changeQuestionByCategories,
} from '@/libs/actions/question';
import { useInterview, useQuestionContent } from '@/stores/interviewProgress';

const useQuestionChange = () => {
  const { id, currentQuestionIndex, questionsAndAnswers, categories } =
    useInterview();
  const { questionContent, setQuestionContent } = useQuestionContent();
  const [isPending, startTransition] = useTransition();
  const [changeCounter, setChangeCounter] = useState(0);

  const handleChangeQuestion = useCallback(() => {
    if (currentQuestionIndex === 0) {
      return notify('warning', '첫 질문은 변경이 불가능 합니다');
    }

    if (changeCounter >= 1) {
      return notify('warning', '질문 변경은 최대 1회 입니다.');
    }

    const { questionContent: prevQuestion, answerContent: prevAnswer } =
      questionsAndAnswers[currentQuestionIndex - 1];

    if (prevAnswer) {
      startTransition(async () => {
        const { data } = await changeQuestionByAnswer(
          id,
          prevQuestion,
          prevAnswer,
        );

        if (questionContent) {
          setChangeCounter((prev) => prev + 1);
        }
        setQuestionContent(data.tailQuestionContent);
      });
    }

    if (!prevAnswer) {
      startTransition(async () => {
        const { data } = await changeQuestionByCategories(categories);

        if (questionContent) {
          setChangeCounter((prev) => prev + 1);
        }
        setQuestionContent(data.questionContent);
      });
    }
  }, [
    categories,
    changeCounter,
    currentQuestionIndex,
    id,
    questionContent,
    questionsAndAnswers,
    setQuestionContent,
  ]);

  useEffect(() => {
    if (currentQuestionIndex > 0 && !questionContent) {
      handleChangeQuestion();
    }
  }, [currentQuestionIndex, handleChangeQuestion, questionContent]);

  return { isPending, handleChangeQuestion };
};

export default useQuestionChange;
