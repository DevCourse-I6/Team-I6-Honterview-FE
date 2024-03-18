import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import usePresettingDataStore from '../../stores/usePresettingDataStore';
import useStepStore from '../../stores/useStepStore';
import StepBar from './components/stepBar';
import StepCircle from './components/stepCircle';
import { TITLE_LIST } from './constants/stepTitle';
import { StepNumber } from './type';

const StepSection = () => {
  const { currentStep, totalStep, setCameraStep, setChattingStep } =
    useStepStore();
  const { interviewType } = usePresettingDataStore();

  useEffect(() => {
    if (interviewType === 'TEXT') {
      setChattingStep();
      return;
    }
    setCameraStep();
  }, [interviewType, setCameraStep, setChattingStep]);

  return (
    <div className="relative flex w-full justify-center text-[1.4rem] font-semibold tablet:h-[12rem] tablet:items-center tablet:px-[3rem] tablet:text-[1.6rem]">
      {Array.from({ length: totalStep }, (_, i) => i + 1).map((step) => (
        <div
          className="flex items-center justify-center"
          key={uuidv4()}
        >
          <div className="flex flex-col items-center justify-center gap-[0.5rem]">
            <StepCircle
              number={step}
              isPassed={currentStep >= step}
            />
            <span
              className={`flex w-[9.5rem] items-center justify-center 
              ${currentStep === step ? 'text-primaries-primary' : 'text-text-80'}
            `}
            >
              {TITLE_LIST[step as StepNumber]}
            </span>
          </div>
          {step !== totalStep && (
            <StepBar
              key={`step-bar-${step}`}
              isPassed={currentStep > step}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepSection;
