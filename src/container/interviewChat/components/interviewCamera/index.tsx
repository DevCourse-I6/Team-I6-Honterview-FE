'use client';

import React, { useState } from 'react';

import { DisabledCamera } from '@/components/icon';
import Toggle from '@/components/toggle';

import ChatMirrorView from './ChatMirrorView';

const InterviewCamera = () => {
  const [camerraToggle, setCamerraToggle] = useState(false);

  return (
    <div className="relative mb-[2rem] mt-4 h-[15rem] w-[25rem] rounded-2xl bg-background-20">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="absolute">
          {camerraToggle ? (
            <ChatMirrorView camerraToggle={camerraToggle} />
          ) : (
            <DisabledCamera className="h-[5rem] w-[5rem]" />
          )}
        </div>
        <div className="absolute bottom-0 right-0 m-2">
          <Toggle onChange={() => setCamerraToggle(!camerraToggle)} />
        </div>
      </div>
    </div>
  );
};

export default InterviewCamera;
