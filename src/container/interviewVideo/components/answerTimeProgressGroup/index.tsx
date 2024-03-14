'use client';

import { v4 as uuidv4 } from 'uuid';

import {
  useInterview,
  useLoadingStatus,
  useSubmitStatus,
} from '@/stores/interviewProgress';

import AnswerTimeProgress from './components/answerTimeProgress';

const AnswerTimeProgressGroup = () => {
  const {
    currentQuestionIndex,
    questionCount,
    questionsAndAnswers,
    limitTimer,
  } = useInterview();
  const { isLoading } = useLoadingStatus();
  const { isSubmit } = useSubmitStatus();
  const progressArray = Array.from(
    { length: questionCount },
    (_, index) =>
      questionsAndAnswers[index] && questionsAndAnswers[index].processingTime,
  );

  return (
    <ul className="flex h-[1rem] gap-1">
      {progressArray.map((processingTime, index) => {
        const defaultTime = processingTime || 0;
        const enabled =
          currentQuestionIndex === index && processingTime !== limitTimer;

        return (
          <AnswerTimeProgress
            key={uuidv4()}
            defaultTime={defaultTime}
            enabled={enabled && !isLoading && !isSubmit}
          />
        );
      })}
    </ul>
  );
};

export default AnswerTimeProgressGroup;
