import React, { useEffect, useState } from 'react';

import usePresettingDataStore from '@/container/presetting/stores/usePresettingDataStore';
import useStepStore from '@/container/presetting/stores/useStepStore';

import AnswerTimeSection from './components/answerTime';
import InterviewTypeSection from './components/interviewType';
import QuestionCountSection from './components/questionCount';

const InterviewTypeScene = () => {
  const { setNextButtonOn, setNextButtonOff } = useStepStore();
  const { questionCount, answerTime, interviewType } = usePresettingDataStore();
  const [isTypeVisible, setIsTypeVisible] = useState(!!interviewType);
  const [isTimeVisible, setIsTimeVisible] = useState(
    !(answerTime[0] === 0 && answerTime[1] === 0),
  );

  useEffect(() => {
    if (questionCount && !(answerTime[0] === 0 && answerTime[1] === 0)) {
      setNextButtonOn();
      return;
    }
    setNextButtonOff();
  }, [answerTime, questionCount, setNextButtonOff, setNextButtonOn]);

  return (
    <div className="relative flex h-[50rem] w-[19rem] flex-col gap-[4rem] pt-[5rem]">
      <QuestionCountSection setNextItemOn={() => setIsTypeVisible(true)} />
      {isTypeVisible && (
        <InterviewTypeSection setNextItemOn={() => setIsTimeVisible(true)} />
      )}
      {isTimeVisible && <AnswerTimeSection />}
    </div>
  );
};

export default InterviewTypeScene;
