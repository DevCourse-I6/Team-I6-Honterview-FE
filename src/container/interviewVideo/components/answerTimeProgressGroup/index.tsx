'use client';

import { v4 as uuidv4 } from 'uuid';

import { useInterview } from '@/stores/interviewProgress';

import AnswerTimeProgress from './components/answerTimeProgress';

const AnswerTimeProgressGroup = () => {
  const { currentQuestionIndex, questionCount, questionsAndAnswers } =
    useInterview();
  const progressArray = Array.from(
    { length: questionCount },
    (_, index) =>
      questionsAndAnswers[index] && questionsAndAnswers[index].progressingTime,
  );

  return (
    <ul className="flex h-[1rem] gap-1">
      {progressArray.map((progressingTime, index) => {
        const defaultTime = progressingTime || 0;
        const enabled = currentQuestionIndex === index;

        return (
          <AnswerTimeProgress
            key={uuidv4()}
            defaultTime={defaultTime}
            enabled={enabled}
          />
        );
      })}
    </ul>
  );
};

export default AnswerTimeProgressGroup;
