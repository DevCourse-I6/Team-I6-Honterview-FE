import { useCallback, useEffect, useTransition } from 'react';

import { notify } from '@/components/toast';
import {
  changeQuestionByAnswer,
  changeQuestionByCategories,
} from '@/libs/actions/question';
import useInterviewProgress from '@/stores/interviewProgress';

import { IProps } from './types';

const useQuestionChange = ({ questions, categories }: IProps) => {
  const [isPending, startTransition] = useTransition();
  const { questionContent, setInterview } = useInterviewProgress((state) => ({
    questionContent: state.interview.questionContent,
    setInterview: state.setInterview,
  }));

  const handleChangeQuestion = useCallback(() => {
    if (questions.length === 0) {
      return notify('warning', '첫 질문은 변경이 불가능 합니다');
    }

    const { answerContent } = questions[questions.length - 1];

    if (answerContent) {
      startTransition(async () => {
        const { data } = await changeQuestionByAnswer(answerContent);

        setInterview(data);
      });
    }

    if (!answerContent) {
      startTransition(async () => {
        const { data } = await changeQuestionByCategories(categories);

        setInterview(data);
      });
    }
  }, [categories, questions, setInterview]);

  useEffect(() => {
    if (questions.length !== 0 && !questionContent) {
      handleChangeQuestion();
    }
  }, [handleChangeQuestion, questionContent, questions.length]);

  return { isPending, handleChangeQuestion };
};

export default useQuestionChange;
