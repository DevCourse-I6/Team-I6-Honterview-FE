import { useRouter } from 'next/navigation';

import Button from '@/components/button';
import { ButtonType } from '@/components/button/types';

import usePresettingDataStore from '../../stores/usePresettingDataStore';
import useStepStore from '../../stores/useStepStore';
import usePresetting from '../../usePresetting';

const PreSettingButtonSection = () => {
  const { totalStep, currentStep, increaseStep, decreaseStep, isNextButtonOn } =
    useStepStore();
  const { firstQuestion, interviewType } = usePresettingDataStore();
  const { createFirstQuestion, createNewInterview } = usePresetting();
  const router = useRouter();

  const handlePrevButton = () => {
    if (currentStep > 1) {
      decreaseStep();
    } else {
      router.back();
    }
  };

  const handleNextButton = async () => {
    if (currentStep < totalStep) {
      increaseStep();
      return;
    }

    const isNew = firstQuestion?.id === 'new';

    const questionId = isNew ? await createFirstQuestion() : firstQuestion?.id;
    const interviewId = await createNewInterview(questionId);

    const nextUrl =
      interviewType === 'RECORD'
        ? `/interview/video/${interviewId}`
        : `interview/chat/${interviewId}`;

    router.push(nextUrl);
  };

  return (
    <div className="absolute bottom-0 flex gap-[1rem]">
      <Button
        styleType={ButtonType.Type3}
        className="mb-[3rem] h-[4rem] w-[9rem] px-[0rem]"
        onClick={handlePrevButton}
      >
        이전
      </Button>
      <Button
        className="mb-[3rem] h-[4rem] w-[9rem] px-[0rem]"
        onClick={handleNextButton}
        disabled={!isNextButtonOn}
      >
        {currentStep === totalStep ? '시작' : '다음'}
      </Button>
    </div>
  );
};

export default PreSettingButtonSection;
