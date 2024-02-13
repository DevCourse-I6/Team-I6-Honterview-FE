'use client';

import { useEffect, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

import MirrorView from '@/components/camera/MirrorView';

import VideoView from './VideoView';

const Example = () => {
  const { status, startRecording, stopRecording, previewStream, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (status === 'recording') {
      setIsRecording(true);
    } else {
      setIsRecording(false);
    }
  }, [status]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-10">
        <button
          type="button"
          onClick={startRecording}
          className="bg-red-300"
        >
          Start Recording
        </button>
        <button
          type="button"
          onClick={stopRecording}
          className="bg-gray-300"
        >
          Stop Recording
        </button>
      </div>

      <div>
        {isRecording ? (
          <MirrorView stream={previewStream} />
        ) : (
          mediaBlobUrl && <VideoView videoUrl={mediaBlobUrl} />
        )}
      </div>

      <p>
        {status === 'acquiring_media'
          ? 'Loading...'
          : status === 'recording' && 'Recording!!'}
      </p>
    </div>
  );
};

export default Example;
