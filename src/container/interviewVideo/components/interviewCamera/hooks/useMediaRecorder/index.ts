import { useCallback, useEffect, useRef, useState } from 'react';

import { notify } from '@/components/toast';
import { useMediaBlobUrl } from '@/stores/interviewProgress';

export const useMediaRecorder = () => {
  const { appendMediaBlobUrl } = useMediaBlobUrl();
  const [isLoading, setIsLoading] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);

  const getMediaPermission = useCallback(async () => {
    try {
      setIsSetting(false);
      setIsLoading(true);
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      const videoStream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = videoStream;
      }

      const combinedStream = new MediaStream([
        ...videoStream.getVideoTracks(),
        ...audioStream.getAudioTracks(),
      ]);

      const recorder = new MediaRecorder(combinedStream, {
        mimeType: 'video/webm',
      });

      recorder.ondataavailable = (e) => {
        if (typeof e.data === 'undefined') {
          return;
        }
        if (e.data.size === 0) {
          return;
        }

        appendMediaBlobUrl(e.data);
      };

      mediaRecorder.current = recorder;
      setIsSetting(true);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(String(error));
      }
    }
  }, [appendMediaBlobUrl]);

  const startRecording = useCallback(() => {
    mediaRecorder.current?.start(1000);
    setIsRecording(true);
  }, []);

  const stopRecording = useCallback(() => {
    mediaRecorder.current?.stop();
    setIsRecording(false);
  }, []);

  useEffect(() => {
    if (errorMessage) {
      notify('error', errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    getMediaPermission();
  }, [getMediaPermission]);

  useEffect(() => {
    if (isSetting && !isRecording) {
      startRecording();
    }

    return () => {
      if (isSetting && isRecording) {
        stopRecording();
      }
    };
  }, [isRecording, isSetting, startRecording, stopRecording]);

  return {
    isSetting,
    isLoading,
    isRecording,
    videoRef,
  };
};
