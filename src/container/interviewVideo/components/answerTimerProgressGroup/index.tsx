'use client';

import { v4 as uuidv4 } from 'uuid';

import AnswerTimerProgress from './components/answerTimerProgress';

const AnswerTimerProgressGroup = () => {
  const answerData = [
    {
      limitTime: 5,
    },
    {
      limitTime: 10,
    },
    {
      limitTime: 9,
    },
  ];

  return (
    <ul className="flex h-[1rem] shrink-0 gap-1">
      {answerData.map(({ limitTime }) => {
        return (
          <AnswerTimerProgress
            key={uuidv4()}
            limitTime={limitTime}
          />
        );
      })}
    </ul>
  );
};

export default AnswerTimerProgressGroup;
