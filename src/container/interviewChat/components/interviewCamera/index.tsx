'use client';

import { MirrorView, useCamera } from '@/components/camera';
import { DisabledCamera } from '@/components/icon';

const InterviewCamera = () => {
  const { isLoading, isRecording, previewStream } = useCamera();

  // TODO: 반드시 카메라를 켜야 진행이 된다
  if (!isLoading && !isRecording) {
    return (
      <div className="center flex h-1/3 w-full items-center justify-center rounded-2xl bg-background-20 md:h-1/3 md:w-2/5 ">
        <DisabledCamera className="h-[5rem] w-[5rem]" />
      </div>
    );
  }

  return (
    <MirrorView
      stream={previewStream}
      className="h-full w-full"
      isLoading={false}
    />
  );
};

export default InterviewCamera;
