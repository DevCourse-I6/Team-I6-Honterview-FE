import { useCallback, useEffect, useTransition } from 'react';

import { notify } from '@/components/toast';
import {
  changeQuestionByAnswer,
  changeQuestionByCategories,
} from '@/libs/actions/question';
import useInterviewProgress from '@/stores/interviewProgress';

import { IProps } from './types';

const useQuestionChange = ({ questions, categories }: IProps) => {
  const {
    questionContent,
    setInterview,
    questionChangeCounter,
    increaseQuestionChangeCounter,
  } = useInterviewProgress((state) => ({
    questionContent: state.interview.questionContent,
    setInterview: state.setInterview,
    questionChangeCounter: state.questionChangeCounter,
    increaseQuestionChangeCounter: state.increaseQuestionChangeCounter,
  }));
  const [isPending, startTransition] = useTransition();

  const handleChangeQuestion = useCallback(() => {
    if (questions.length === 0) {
      return notify('warning', '첫 질문은 변경이 불가능 합니다');
    }

    if (questionChangeCounter >= 1) {
      return notify('warning', '질문 변경은 최대 1회 입니다.');
    }

    const { answerContent } = questions[questions.length - 1];

    if (answerContent) {
      startTransition(async () => {
        const { data } = await changeQuestionByAnswer(answerContent);

        setInterview(data);
        increaseQuestionChangeCounter();
      });
    }

    if (!answerContent) {
      startTransition(async () => {
        const { data } = await changeQuestionByCategories(categories);

        setInterview(data);
        increaseQuestionChangeCounter();
      });
    }
  }, [
    categories,
    increaseQuestionChangeCounter,
    questionChangeCounter,
    questions,
    setInterview,
  ]);

  useEffect(() => {
    if (questions.length !== 0 && !questionContent) {
      handleChangeQuestion();
    }
  }, [handleChangeQuestion, questionContent, questions.length]);

  return { isPending, handleChangeQuestion };
};

export default useQuestionChange;
