import { useEffect } from 'react';

import { useCamera } from '@/components/camera';

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

  useEffect(() => {
    startRecording();
  }, [startRecording]);

  useEffect(() => {
    if (isRecording) {
      pauseRecording();
    }
  }, [isRecording, pauseRecording]);

  return {
    previewStream,
    isLoading,
    status,
  };
};

export default useSettingCameraScene;
