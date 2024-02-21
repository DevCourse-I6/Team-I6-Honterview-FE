'use client';

import { useState } from 'react';

import Button from '@/components/button';
import { ButtonType } from '@/components/button/types';
import Divider from '@/components/divider';

import { StepBar, StepCircle } from './step';

const PreSettingLayout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handlePrevButton = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      console.log('이전 페이지로 이동');
    }
  };

  const handleNextButton = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('면접 페이지로 이동');
    }
  };

  const titleList = [
    '첫 질문 선택',
    '면접 방식 선택',
    '사전 동의',
    '카메라 설정',
  ];

  return (
    <div className="mt-[5rem] flex h-screen justify-center  bg-opacity-10">
      <div className="flex h-[70rem] w-[80rem] flex-col items-center rounded-3xl bg-text-20 bg-opacity-20 shadow-xl backdrop-blur-xl">
        <div className="relative flex h-[10rem] items-center justify-between gap-[3rem] px-[7rem] font-semibold">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={`step-div-${step}`}
              className="flex flex-row items-center gap-[3rem]"
            >
              <StepCircle
                key={`step-circle-${step}`}
                number={step}
                isPassed={currentStep >= step}
                title={titleList[step - 1]}
                isCurrent={currentStep === step}
              />
              {step !== 4 && (
                <StepBar
                  key={`step-bar-${step}`}
                  isPassed={currentStep > step}
                />
              )}
            </div>
          ))}
        </div>
        <Divider className="mt-[2.6rem] w-[75rem]" />
        <div className="absolute bottom-0 flex gap-[1rem]">
          <Button
            styleType={ButtonType.Type3}
            className="bottom-[2.86rem] text-2xl"
            onClick={handlePrevButton}
            style={{ height: '4rem', width: '9rem' }}
          >
            이전
          </Button>
          <Button
            type="button"
            className="bottom-[2.86rem] text-2xl"
            onClick={handleNextButton}
            style={{ height: '4rem', width: '9rem' }}
          >
            {currentStep === 4 ? '시작' : '다음'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreSettingLayout;
