import { useCallback, useEffect, useState, useTransition } from 'react';

import { notify } from '@/components/toast';
import {
  changeQuestionByAnswer,
  changeQuestionByCategories,
} from '@/libs/actions/question';
import { useInterview, useQuestionContent } from '@/stores/interviewProgress';

const useQuestionChange = () => {
  const { questions, categories } = useInterview();
  const { questionContent, setQuestionContent } = useQuestionContent();
  const [isPending, startTransition] = useTransition();
  const [changeCounter, setChangeCounter] = useState(-1);

  const handleChangeQuestion = useCallback(() => {
    if (questions.length === 0) {
      return notify('warning', '첫 질문은 변경이 불가능 합니다');
    }

    if (changeCounter >= 1) {
      return notify('warning', '질문 변경은 최대 1회 입니다.');
    }

    const { answerContent } = questions[questions.length - 1];

    if (answerContent) {
      startTransition(async () => {
        const { data } = await changeQuestionByAnswer(answerContent);

        setQuestionContent(data.questionContent);
        setChangeCounter((prev) => prev + 1);
      });
    }

    if (!answerContent) {
      startTransition(async () => {
        const { data } = await changeQuestionByCategories(categories);

        setQuestionContent(data.questionContent);
        setChangeCounter((prev) => prev + 1);
      });
    }
  }, [categories, changeCounter, questions, setQuestionContent]);

  useEffect(() => {
    if (questions.length !== 0 && !questionContent) {
      handleChangeQuestion();
    }
  }, [handleChangeQuestion, questionContent, questions.length]);

  return { isPending, handleChangeQuestion };
};

export default useQuestionChange;
