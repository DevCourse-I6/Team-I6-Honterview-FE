import { useEffect } from 'react';

import usePresettingDataStore from '@/container/presetting/stores/usePresettingDataStore';
import useStepStore from '@/container/presetting/stores/useStepStore';

import QuestionSection from './components/questionSection';
import TagSection from './components/tagSection';

const FirstQuestionScene = () => {
  const { setNextButtonOn, setNextButtonOff } = useStepStore();
  const { firstQuestionTags, firstQuestion } = usePresettingDataStore();

  useEffect(() => {
    if (firstQuestionTags.length && firstQuestion) {
      setNextButtonOn();
      return;
    }
    setNextButtonOff();
  }, [
    firstQuestion,
    firstQuestionTags.length,
    setNextButtonOff,
    setNextButtonOn,
  ]);

  return (
    <div className="flex h-full w-full flex-col items-center gap-[4.5rem]">
      <p className="flex justify-center pt-[3rem] text-[1.4rem] text-text-80 underline decoration-primaries-primary underline-offset-[1rem] tablet:text-[1.6rem]">
        <b className="text-black">선택한 질문</b>과 이에 대한
        <b className="whitespace-pre text-black"> 꼬리 질문</b>들로 면접이
        진행됩니다
      </p>
      <div className="flex w-full max-w-[35.9rem] flex-col justify-center gap-[3rem] tablet:gap-[5rem]">
        <TagSection />
        <div className="h-[14rem]">
          {firstQuestionTags.length > 0 && <QuestionSection />}
        </div>
      </div>
    </div>
  );
};

export default FirstQuestionScene;
