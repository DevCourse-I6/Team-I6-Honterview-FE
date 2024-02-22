import useStepStore from '../../stores/useStepStore';
import StepBar from './components/stepBar';
import StepCircle from './components/stepCircle';
import { TITLE_LIST } from './constants/stepTitle';
import { StepNumber } from './type';

const StepSection = () => {
  const { currentStep } = useStepStore();

  return (
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
            title={TITLE_LIST[step as StepNumber]}
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
  );
};

export default StepSection;
