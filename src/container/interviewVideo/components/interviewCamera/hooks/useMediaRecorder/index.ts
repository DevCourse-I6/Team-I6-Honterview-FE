import { useCallback, useEffect, useRef, useState } from 'react';

import { notify } from '@/components/toast';
import { useLoadingStatus, useMediaBlobUrl } from '@/stores/interviewProgress';

export const useMediaRecorder = () => {
  const [blob, setBlob] = useState<Blob[]>([]);
  const { startLoading, stopLoading } = useLoadingStatus();
  const { setMediaBlobUrl } = useMediaBlobUrl();
  const [isSetting, setIsSetting] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);

  const getMediaPermission = useCallback(async () => {
    try {
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

        setBlob((prev) => [...prev, e.data]);
      };

      recorder.onstart = () => {
        notify('success', '녹화 기능 활성화');
      };

      mediaRecorder.current = recorder;
      setIsSetting(true);
    } catch (error) {
      notify('error', '미디어 장치 권한 허용하여 다시 시도해주세요');
    }
  }, []);

  useEffect(() => {
    getMediaPermission();

    return () => {
      if (mediaRecorder.current && mediaRecorder.current.stream) {
        mediaRecorder.current.stream
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, [getMediaPermission]);

  useEffect(() => {
    if (isSetting && !isRecording) {
      mediaRecorder.current?.start(500);
      setIsRecording(true);
    }

    return () => {
      if (isSetting && isRecording) {
        mediaRecorder.current?.stop();
        setIsRecording(false);
      }
    };
  }, [isSetting, isRecording]);

  useEffect(() => {
    if (!isRecording) {
      return startLoading();
    }

    stopLoading();
  }, [isRecording, startLoading, stopLoading]);

  useEffect(() => {
    setMediaBlobUrl(blob);
  }, [blob, setMediaBlobUrl]);

  return {
    isRecording,
    videoRef,
  };
};
