'use client';

import React, { useState } from 'react';

import MirrorView from '@/components/camera/components/MirrorView';
import { DisabledCamera } from '@/components/icon';
import Toggle from '@/components/toggle';
import useVideoCheckScene from '@/container/presetting/components/sceneSection/components/videoCheckScene/useVideoCheckScene';

const InterviewCamera = () => {
  const { previewStream, isLoading, error } = useVideoCheckScene();
  const [camerraToggle, setCamerraToggle] = useState(true);

  return (
    <div className="relative h-[20rem] w-[40rem] rounded-2xl bg-background-20">
      {!isLoading && camerraToggle ? (
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <DisabledCamera className="h-[5rem] w-[5rem]" />
          </div>
          <div className="absolute bottom-0 right-0 m-2">
            <Toggle onChange={() => setCamerraToggle(!camerraToggle)} />
          </div>
        </div>
      ) : (
        <>
          <MirrorView
            stream={previewStream}
            isLoading={isLoading}
            error={error}
          />
          <div className="absolute bottom-0 right-0 m-2">
            <Toggle onChange={() => setCamerraToggle(!camerraToggle)} />
          </div>
        </>
      )}
    </div>
  );
};

export default InterviewCamera;
