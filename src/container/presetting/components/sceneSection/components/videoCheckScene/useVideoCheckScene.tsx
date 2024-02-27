/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { useCamera } from '@/components/camera';
import useStepStore from '@/container/presetting/stores/useStepStore';

const useVideoCheckScene = () => {
  const {
    status,
    isLoading,
    isRecording,
    startRecording,
    previewStream,
    error,
    pauseRecording,
  } = useCamera();

  const { setNextButtonOn, setNextButtonOff } = useStepStore();

  useEffect(() => {
    startRecording();
  }, []);

  useEffect(() => {
    if (isRecording || status === 'paused') {
      setNextButtonOn();
      pauseRecording();
    } else {
      setNextButtonOff();
    }
  }, [isRecording]);

  return {
    previewStream,
    isLoading,
    status,
    error,
  };
};

export default useVideoCheckScene;
