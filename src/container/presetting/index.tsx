'use client';

import { useEffect, useState } from 'react';

import Divider from '@/components/divider';
import Loading from '@/components/loading';
import NotFoundError from '@/components/notFoundError';
import { getQuestionInfo } from '@/services/presetting';

import PreSettingButtonSection from './components/buttonSection';
import PreSettingSceneSection from './components/sceneSection';
import StepSection from './components/stepSection';
import usePresettingDataStore from './stores/usePresettingDataStore';
import useStepStore from './stores/useStepStore';
import { PreSettingProps } from './type';

const PreSetting = ({ firstQuestionId }: PreSettingProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isQuestionError, setIsQuestionError] = useState(false);
  const { setFirstQuestion } = usePresettingDataStore();
  const { setSettingStep } = useStepStore();

  useEffect(() => {
    setIsLoading(true);
    if (firstQuestionId) {
      getQuestionInfo(firstQuestionId).then((res) => {
        if (!res) {
          setIsQuestionError(true);
        }
      });
      setSettingStep();
      setFirstQuestion({
        name: '',
        id: firstQuestionId,
      });
    }
    setIsLoading(false);
  }, [firstQuestionId, setFirstQuestion, setSettingStep]);

  if (isLoading) {
    return <Loading />;
  }

  if (isQuestionError) {
    return <NotFoundError />;
  }

  return (
    <div className="flex h-[70rem] w-full max-w-[80rem] flex-col items-center rounded-3xl bg-text-20 bg-opacity-20 text-medium shadow-xl backdrop-blur-xl">
      <StepSection />
      <Divider className="mt-[2.6rem] w-[75rem]" />
      <PreSettingSceneSection />
      <PreSettingButtonSection fromQuestionPage={!!firstQuestionId} />
    </div>
  );
};

export default PreSetting;
