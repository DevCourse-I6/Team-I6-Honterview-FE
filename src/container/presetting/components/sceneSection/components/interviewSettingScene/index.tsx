import React, { useEffect, useState } from 'react';

import usePresettingDataStore from '@/container/presetting/stores/usePresettingDataStore';
import useStepStore from '@/container/presetting/stores/useStepStore';

import CountSection from './components/countSection';
import InterviewTypeSection from './components/interviewTypeSection';
import TimerSection from './components/timerSection';

const InterviewSettingScene = () => {
  const { setNextButtonOn, setNextButtonOff } = useStepStore();
  const { questionCount, answerTime, interviewType } = usePresettingDataStore();
  const [isTypeVisible, setIsTypeVisible] = useState(!!questionCount);
  const [isTimeVisible, setIsTimeVisible] = useState(!!interviewType);

  useEffect(() => {
    const { minute, second } = answerTime;
    if (
      questionCount &&
      (interviewType === 'TEXT' || !(minute === 0 && second === 0))
    ) {
      setNextButtonOn();
      return;
    }
    setNextButtonOff();
  }, [
    answerTime,
    interviewType,
    questionCount,
    setNextButtonOff,
    setNextButtonOn,
  ]);

  return (
    <div className="relative flex h-[50rem] w-[19rem] flex-col gap-[4rem] pt-[5rem]">
      <CountSection setNextItemOn={() => setIsTypeVisible(true)} />
      {isTypeVisible && (
        <InterviewTypeSection setNextItemOn={() => setIsTimeVisible(true)} />
      )}
      {isTimeVisible && <TimerSection />}
    </div>
  );
};

export default InterviewSettingScene;
