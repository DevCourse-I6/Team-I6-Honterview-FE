import { useEffect } from 'react';

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
    <div className="relative flex h-[10rem] items-center justify-between gap-[3rem] px-[7rem] font-semibold">
      {Array.from({ length: totalStep }, (_, i) => i + 1).map((step) => (
        <div
          key={`step-div-${step}`}
          className="flex flex-row items-center gap-[3rem]"
        >
          <StepCircle
            key={`step-circle-${step}`}
            number={step}
            isPassed={currentStep >= step}
            title={TITLE_LIST[step as StepNumber]}
            isCurrent={currentStep === step}
          />
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
