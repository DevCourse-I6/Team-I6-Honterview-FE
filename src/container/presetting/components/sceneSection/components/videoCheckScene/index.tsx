import { MirrorView } from '@/components/camera';

import useVideoCheckScene from './useVideoCheckScene';

const VideoCheckScene = () => {
  const { previewStream, isLoading, error, currentStep } = useVideoCheckScene();

  return (
    <div
      className={`mt-[1rem] flex items-center justify-center ${currentStep !== 4 && 'hidden'}`}
    >
      <MirrorView
        stream={previewStream}
        isLoading={isLoading}
        error={error}
        className="h-[45rem]"
      />
    </div>
  );
};

export default VideoCheckScene;
