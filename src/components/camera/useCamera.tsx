import { useEffect, useState } from 'react';

const useCamera = (status) => {
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
    isRecording,
    isLoading,
  };
};

export default useCamera;
