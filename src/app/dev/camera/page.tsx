'use client';

import { MirrorView, useCamera, VideoView } from '@/components/camera';
import CameraErrorView from '@/components/camera/components/CameraErrorView';

const CamerExample = () => {
  const {
    isLoading,
    isRecording,
    startRecording,
    stopRecording,
    previewStream,
    mediaBlobUrl,
    error,
  } = useCamera();

  if (error) {
    return <CameraErrorView error={error} />;
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
          <MirrorView
            stream={previewStream}
            isLoading={isLoading}
            error={error}
          />
        ) : (
          mediaBlobUrl && (
            <VideoView
              videoUrl={mediaBlobUrl}
              error={error}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CamerExample;
