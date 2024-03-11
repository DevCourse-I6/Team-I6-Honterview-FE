'use client';

import useStepStore from '../../stores/useStepStore';
import FirstQuestionScene from './components/firstQuestionScene';
import InterviewSettingScene from './components/interviewSettingScene';
import TermsScene from './components/termsScene';
import VideoCheckScene from './components/videoCheckScene';

const PreSettingSceneSection = () => {
  const { currentStep } = useStepStore();
  return (
    <div className="h-[50rem]">
      {currentStep === 1 && <FirstQuestionScene />}
      {currentStep === 2 && <InterviewSettingScene />}
      {currentStep === 3 && <TermsScene />}
      {currentStep === 4 && <VideoCheckScene />}
    </div>
  );
};

export default PreSettingSceneSection;
