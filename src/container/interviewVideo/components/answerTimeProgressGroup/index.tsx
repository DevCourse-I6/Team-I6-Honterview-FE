'use client';

import { v4 as uuidv4 } from 'uuid';

import { useInterview } from '@/stores/interviewProgress';

import AnswerTimeProgress from './components/answerTimeProgress';

const AnswerTimeProgressGroup = () => {
  const { questionCount, questions } = useInterview();
  const progressArray = Array.from(
    { length: questionCount },
    (_, index) => questions[index] && questions[index].processingTime,
  );

  return (
    <ul className="flex h-[1rem] gap-1">
      {progressArray.map((progressingTime, index) => {
        const defaultTime = progressingTime || 0;
        const enabled = questions.length === index;

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
