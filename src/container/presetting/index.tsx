'use client';

import Divider from '@/components/divider';

import PreSettingButtonSection from './components/buttonSection';
import PreSettingSceneSection from './components/sceneSection';
import StepSection from './components/stepSection';

const PreSetting = () => {
  return (
    <div className="flex h-[70rem] w-full max-w-[80rem] flex-col items-center rounded-3xl bg-text-20 bg-opacity-20 text-medium shadow-xl backdrop-blur-xl">
      <StepSection />
      <Divider className="mt-[2.6rem] w-[75rem]" />
      <PreSettingSceneSection />
      <PreSettingButtonSection />
    </div>
  );
};

export default PreSetting;
