'use client';

import { useReactMediaRecorder } from 'react-media-recorder';

import MirrorView from '@/components/camera/MirrorView';
import useCamera from '@/components/camera/useCamera';
import VideoView from '@/components/camera/VideoView';
import Spinner from '@/components/spinner';

const CamerExample = () => {
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
    <div className="flex flex-col items-center justify-center">
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

export default CamerExample;
