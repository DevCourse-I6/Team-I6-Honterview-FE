'use client';

import { useEffect } from 'react';

import { MirrorView, useCamera } from '@/components/camera';
import { DisabledCamera } from '@/components/icon';

const InterviewCamera = () => {
  const { isLoading, startRecording, previewStream, error } = useCamera();

  useEffect(() => {
    startRecording();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoading && !previewStream) {
    return (
      <div className="flex h-1/2 items-center justify-center rounded-2xl bg-background-20 md:h-full md:basis-1/2">
        <DisabledCamera className="h-[5rem] w-[5rem]" />
      </div>
    );
  }

  return (
    <div className="relative flex h-1/2 w-full items-center justify-center md:h-full md:w-1/2">
      <MirrorView
        stream={previewStream}
        isLoading={isLoading}
        error={error}
        className="absolute left-0 top-0 h-full w-full scale-x-[-1] rounded-2xl object-fill"
      />
    </div>
  );
};

export default InterviewCamera;
