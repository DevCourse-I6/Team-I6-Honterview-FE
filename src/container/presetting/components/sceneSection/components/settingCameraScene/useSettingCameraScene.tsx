/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { useCamera } from '@/components/camera';
import useStepStore from '@/container/presetting/stores/useStepStore';

const useSettingCameraScene = () => {
  const {
    status,
    isLoading,
    isRecording,
    startRecording,
    previewStream,
    error,
    pauseRecording,
  } = useCamera();

  const { setNextButton } = useStepStore();

  useEffect(() => {
    startRecording();
  }, []);

  useEffect(() => {
    if (isRecording || status === 'paused') {
      setNextButton(true);
      pauseRecording();
    } else {
      setNextButton(false);
    }
  }, [isRecording]);

  return {
    previewStream,
    isLoading,
    status,
    error,
  };
};

export default useSettingCameraScene;
