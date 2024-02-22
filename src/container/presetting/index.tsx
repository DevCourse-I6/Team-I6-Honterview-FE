'use client';

import Button from '@/components/button';
import { ButtonType } from '@/components/button/types';
import Divider from '@/components/divider';

import StepSection from './components/step';
import useStepStore from './stores/useStepStore';

const PreSetting = () => {
  const { currentStep, increaseStep, decreaseStep } = useStepStore();

  const handlePrevButton = () => {
    if (currentStep > 1) {
      decreaseStep();
    } else {
      console.log('이전 페이지로 이동');
    }
  };

  const handleNextButton = () => {
    if (currentStep < 4) {
      increaseStep();
    } else {
      console.log('면접 페이지로 이동');
    }
  };

  return (
    <div className="flex h-[70rem] w-full max-w-[80rem] flex-col items-center rounded-3xl bg-text-20 bg-opacity-20 shadow-xl backdrop-blur-xl">
      <StepSection />
      <Divider className="mt-[2.6rem] w-[75rem]" />
      <div className="absolute bottom-0 flex gap-[1rem]">
        <Button
          styleType={ButtonType.Type3}
          className="text-medium bottom-[2.86rem]"
          onClick={handlePrevButton}
          style={{ height: '4rem', width: '9rem' }}
        >
          이전
        </Button>
        <Button
          className="text-medium bottom-[2.86rem]"
          onClick={handleNextButton}
          style={{ height: '4rem', width: '9rem' }}
        >
          {currentStep === 4 ? '시작' : '다음'}
        </Button>
      </div>
    </div>
  );
};

export default PreSetting;
