'use client';

import { v4 as uuidv4 } from 'uuid';

import AnswerTimeProgress from './components/answerTimeProgress';
import { IProps } from './types';

const AnswerTimeProgressGroup = ({
  questionCount,
  timer,
  questions,
}: IProps) => {
  const times = Array.from(
    { length: questionCount },
    (_, index) => questions[index] && questions[index].progressingTime,
  );

  return (
    <ul className="flex h-[1rem] gap-1">
      {times.map((progressingTime, index) => {
        const defaultTime = progressingTime || 0;
        const enabled = questions.length === index;
        // TODO: 타이머 만료 시 답변 완료 처리
        const onEnded = () => {};

        return (
          <AnswerTimeProgress
            key={uuidv4()}
            defaultTime={defaultTime}
            timer={timer}
            enabled={enabled}
            onEnded={onEnded}
          />
        );
      })}
    </ul>
  );
};

export default AnswerTimeProgressGroup;
