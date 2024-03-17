import useStepStore from '../../stores/useStepStore';
import FirstQuestionScene from './components/firstQuestionScene';
import InterviewSettingScene from './components/interviewSettingScene';
import TermsScene from './components/termsScene';
import VideoCheckScene from './components/videoCheckScene';

const PreSettingSceneSection = () => {
  const { currentStep } = useStepStore();

  return (
    <div className="flex h-[calc(100%-11.5rem)] w-full items-center justify-center tablet:h-[calc(100%-18rem)]">
      {currentStep === 1 && <FirstQuestionScene />}
      {currentStep === 2 && <InterviewSettingScene />}
      {currentStep === 3 && <TermsScene />}
      <VideoCheckScene />
    </div>
  );
};

export default PreSettingSceneSection;
