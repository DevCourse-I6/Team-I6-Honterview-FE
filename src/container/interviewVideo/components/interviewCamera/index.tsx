'use client';

import Loading from '@/components/loading';

import { useMediaRecorder } from './hooks/useMediaRecorder';

const InterviewCamera = () => {
  const { isRecording, videoRef } = useMediaRecorder();
  const loadingDisplayStyle = !isRecording ? 'visible' : 'invisible';
  const videoDisplayStyle = isRecording ? 'visible' : 'invisible';

  return (
    <div className="relative flex h-1/2 w-full items-center justify-center bg-black md:h-full md:w-1/2">
      <div className={`${loadingDisplayStyle} h-full w-full`}>
        <Loading />
      </div>
      <video
        className={`${videoDisplayStyle} absolute left-0 top-0 h-full w-full scale-x-[-1] object-fill`}
        ref={videoRef}
        autoPlay
      >
        <track kind="captions" />
      </video>
    </div>
  );
};

export default InterviewCamera;
