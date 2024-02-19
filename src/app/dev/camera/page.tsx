'use client';

import { MirrorView, useCamera, VideoView } from '@/components/camera';
import { SpinnerIcon } from '@/components/icon';

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

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <SpinnerIcon />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          에러가 발생했습니다. 다시 시도해주세요.
        </div>
        <div className="flex items-center justify-center">ERROR: {error}</div>
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
