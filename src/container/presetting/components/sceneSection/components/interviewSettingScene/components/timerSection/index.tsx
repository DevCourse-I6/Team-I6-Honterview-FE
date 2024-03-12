import { useState } from 'react';

import usePresettingDataStore from '@/container/presetting/stores/usePresettingDataStore';

import TimePicker from './components/timePicker';
import { minuteData, secondData } from './constants';

const TimerSection = () => {
  const { setTimeMinute, setTimeSecond, interviewType, answerTime } =
    usePresettingDataStore();
  const [isSecondDisabled, setIsSecondDisabled] = useState(
    answerTime.minute === minuteData[minuteData.length - 1],
  );

  if (interviewType === 'TEXT') {
    return;
  }

  const handleMinuteChange = (newMinute: number) => {
    setTimeMinute(newMinute);
    if (newMinute === minuteData[minuteData.length - 1]) {
      setIsSecondDisabled(true);
      setTimeSecond(0);
      return;
    }
    setIsSecondDisabled(false);
  };

  return (
    <div>
      <h1 className="text-large font-semibold">질문당 답변 시간</h1>
      <p className="mb-[1rem] w-[30rem] text-extraSmall text-text-60">
        한 질문당 답변 제한 시간을 선택해주세요 (최대 10분)
      </p>
      <div className="inline-flex w-[13rem] select-none items-center justify-center gap-[1rem] rounded-xl bg-white py-[1rem] shadow">
        <TimePicker
          type="minute"
          timeRange={minuteData}
          onChange={(minute: number) => handleMinuteChange(minute)}
          index={minuteData.indexOf(answerTime.minute)}
        />
        <div className="text-large text-text-80">:</div>
        <TimePicker
          type="second"
          timeRange={secondData}
          onChange={(second: number) => setTimeSecond(second)}
          index={secondData.indexOf(answerTime.second)}
          isArrowDisabled={isSecondDisabled}
        />
      </div>
    </div>
  );
};

export default TimerSection;
