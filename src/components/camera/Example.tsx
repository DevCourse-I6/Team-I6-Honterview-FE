'use client';

import { useReactMediaRecorder } from 'react-media-recorder';

import MirrorView from '@/components/camera/MirrorView';

import Spinner from '../spinner';
import useCamera from './useCamera';
import VideoView from './VideoView';

const Example = () => {
  const { status, startRecording, stopRecording, previewStream, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
  const { isLoading, isRecording } = useCamera(status);

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex  h-screen w-screen flex-col items-center justify-center">
      <div className="flex gap-10">
        {isRecording ? (
          <button
            type="button"
            onClick={stopRecording}
            className="bg-gray-300"
          >
            Stop Recording
          </button>
        ) : (
          <button
            type="button"
            onClick={startRecording}
            className="bg-red-300"
          >
            Start Recording
          </button>
        )}
      </div>

      <div>
        {isRecording ? (
          <MirrorView stream={previewStream} />
        ) : (
          mediaBlobUrl && <VideoView videoUrl={mediaBlobUrl} />
        )}
      </div>
    </div>
  );
};

export default Example;
