import usePresettingDataStore from '@/container/presetting/stores/usePresettingDataStore';

import TimePicker from './components/timePicker';
import { minuteData, secondData } from './constants';

const TimerSection = () => {
  const { setAnswerTimeMin, setAnswerTimeSec, interviewType, answerTime } =
    usePresettingDataStore();

  if (interviewType === 'chatting') {
    return;
  }

  return (
    <div>
      <h1 className="text-large font-semibold">질문당 답변 시간</h1>
      <p className="mb-[1rem] w-[30rem] text-extraSmall text-text-60">
        질문당 제한 시간을 선택해주세요 (최대 5분 50초)
      </p>
      <div className="inline-flex w-[13rem] select-none items-center justify-center gap-[1rem] rounded-xl bg-white py-[1rem] shadow">
        <TimePicker
          type="min"
          timeRange={minuteData}
          onChange={(min: number) => setAnswerTimeMin(min)}
          value={answerTime[0]}
        />
        <div className="text-large text-text-80">:</div>
        <TimePicker
          type="sec"
          timeRange={secondData}
          onChange={(sec: number) => setAnswerTimeSec(sec)}
          value={answerTime[1]}
        />
      </div>
    </div>
  );
};

export default TimerSection;
