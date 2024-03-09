'use client';

import Loading from '@/components/loading';

import { useMediaRecorder } from './hooks/useMediaRecorder';

const InterviewCamera = () => {
  const { isSetting, isRecording, videoRef } = useMediaRecorder();

  if (!isSetting || !isRecording) {
    return (
      <div className="flex h-1/2 items-center justify-center rounded-2xl bg-background-20 md:h-full md:basis-1/2">
        <Loading />
      </div>
    );
  }

  return (
    <div className="relative flex h-1/2 w-full items-center justify-center bg-black md:h-full md:w-1/2">
      <video
        className="absolute left-0 top-0 h-full w-full scale-x-[-1] object-fill"
        ref={videoRef}
        autoPlay
      >
        <track kind="captions" />
      </video>
    </div>
  );
};

export default InterviewCamera;
