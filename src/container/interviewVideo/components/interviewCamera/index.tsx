'use client';

import { MirrorView, useCamera } from '@/components/camera';
import { DisabledCamera } from '@/components/icon';

const InterviewCamera = () => {
  const {
    isLoading,
    isRecording,
    startRecording,
    stopRecording,
    previewStream,
    mediaBlobUrl,
    error,
  } = useCamera();

  // TODO: 반드시 카메라를 켜야 진행이 된다
  if (!isLoading && !isRecording) {
    return (
      <div className="flex basis-3/6 items-center justify-center rounded-2xl bg-background-20">
        <DisabledCamera />
      </div>
    );
  }

  return (
    <MirrorView
      stream={previewStream}
      className="w-ful h-full"
    />
  );
};

export default InterviewCamera;
