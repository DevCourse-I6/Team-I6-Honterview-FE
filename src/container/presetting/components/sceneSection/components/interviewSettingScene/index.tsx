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
    <div className="flex h-full w-[19rem] flex-col justify-center gap-[4rem]">
      <CountSection setNextItemOn={() => setIsTypeVisible(true)} />
      <InterviewTypeSection
        isVisible={isTypeVisible}
        setNextItemOn={(value) => setIsTimeVisible(value)}
      />
      <TimerSection isVisible={isTimeVisible} />
    </div>
  );
};

export default InterviewSettingScene;
