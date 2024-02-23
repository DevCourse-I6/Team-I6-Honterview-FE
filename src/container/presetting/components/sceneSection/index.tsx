import useStepStore from '../../stores/useStepStore';
import InterviewTypeScene from './components/interviewTypeScene';
import QuestionScene from './components/questionScene';
import SettingCameraScene from './components/settingCameraScene';
import TermsScene from './components/termsScene';

const PreSettingSceneSection = () => {
  const { currentStep } = useStepStore();
  return (
    <div className="h-[50rem]">
      {currentStep === 1 && <QuestionScene />}
      {currentStep === 2 && <InterviewTypeScene />}
      {currentStep === 3 && <TermsScene />}
      {currentStep === 4 && <SettingCameraScene />}
    </div>
  );
};

export default PreSettingSceneSection;
