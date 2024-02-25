import { useRouter } from 'next/navigation';

import Button from '@/components/button';
import { ButtonType } from '@/components/button/types';

import useStepStore from '../../stores/useStepStore';

const PreSettingButtonSection = () => {
  const { currentStep, increaseStep, decreaseStep, isNextButtonOn } =
    useStepStore();
  const router = useRouter();

  const handlePrevButton = () => {
    if (currentStep > 1) {
      decreaseStep();
    } else {
      router.back();
    }
  };

  const handleNextButton = () => {
    if (currentStep < 4) {
      increaseStep();
    } else {
      router.push('/interview'); // TODO: 화상 인터뷰 url로 교체
    }
  };

  return (
    <div className="absolute bottom-0 flex gap-[1rem]">
      <Button
        styleType={ButtonType.Type3}
        className="bottom-[2.86rem]"
        onClick={handlePrevButton}
        style={{ height: '4rem', width: '9rem' }}
      >
        이전
      </Button>
      <Button
        className="bottom-[2.86rem]"
        onClick={handleNextButton}
        style={{ height: '4rem', width: '9rem' }}
        disabled={!isNextButtonOn}
      >
        {currentStep === 4 ? '시작' : '다음'}
      </Button>
    </div>
  );
};

export default PreSettingButtonSection;
