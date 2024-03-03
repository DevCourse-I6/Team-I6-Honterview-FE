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
    <div className="flex h-full flex-col justify-center gap-[5rem]">
      <div>
        <p className="text-text-60">
          선택한 질문과 이에 대한 꼬리질문들로 면접이 진행됩니다
        </p>
      </div>
      <div className="flex flex-col justify-center gap-[5rem]">
        <TagSection />
        <div className="h-[14rem]">
          {firstQuestionTags.length > 0 && <QuestionSection />}
        </div>
      </div>
    </div>
  );
};

export default FirstQuestionScene;
