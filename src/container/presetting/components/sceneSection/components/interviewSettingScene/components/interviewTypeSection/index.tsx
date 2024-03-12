import Button, { ButtonType } from '@/components/button';
import usePresettingDataStore from '@/container/presetting/stores/usePresettingDataStore';
import useStepStore from '@/container/presetting/stores/useStepStore';

import { InterviewTypeSectionProps } from './type';

const InterviewTypeSection = ({ setNextItemOn }: InterviewTypeSectionProps) => {
  const { setInterviewTypeCamera, setInterviewTypeChatting, interviewType } =
    usePresettingDataStore();
  const { setNextButtonOn } = useStepStore();

  const handleCameraButton = () => {
    setNextItemOn();
    setInterviewTypeCamera();
  };

  const handleChatButton = () => {
    setNextItemOn();
    setInterviewTypeChatting();
    setNextButtonOn();
  };

  return (
    <div>
      <h1 className="text-large font-semibold">면접 모드</h1>
      <p className="mb-[1rem] text-extraSmall text-text-60">
        연습 진행 방식을 선택해주세요
      </p>
      <div className="flex gap-[2rem]">
        <Button
          styleType={
            interviewType === 'RECORD' ? ButtonType.Type1 : ButtonType.Type2
          }
          onClick={handleCameraButton}
          className="h-[4rem] w-[9.5rem] px-[0rem]"
        >
          화상
        </Button>
        <Button
          styleType={
            interviewType === 'TEXT' ? ButtonType.Type1 : ButtonType.Type2
          }
          onClick={handleChatButton}
          className="h-[4rem] w-[9.5rem] px-[0rem]"
        >
          채팅
        </Button>
      </div>
    </div>
  );
};

export default InterviewTypeSection;
