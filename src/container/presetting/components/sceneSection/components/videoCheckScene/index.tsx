import { MirrorView } from '@/components/camera';

import useVideoCheckScene from './useVideoCheckScene';

const VideoCheckScene = () => {
  const { previewStream, isLoading, error } = useVideoCheckScene();

  return (
    <div className="mt-[1rem] h-full w-full">
      <MirrorView
        stream={previewStream}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default VideoCheckScene;
