import { useEffect, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

const useCamera = () => {
  const {
    status,
    startRecording,
    stopRecording,
    previewStream,
    mediaBlobUrl,
    clearBlobUrl,
    error,
    pauseRecording,
  } = useReactMediaRecorder({ video: true });
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === 'acquiring_media') {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (status === 'recording') {
      setIsRecording(true);
    } else {
      setIsRecording(false);
    }
  }, [status]);

  return {
    status,
    startRecording,
    pauseRecording,
    stopRecording,
    previewStream,
    mediaBlobUrl,
    clearBlobUrl,
    isRecording,
    isLoading,
    error,
  };
};

export default useCamera;
