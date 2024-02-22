import { MirrorView } from '@/components/camera';

import useSettingCameraScene from './useSettingCameraScene';

const SettingCameraScene = () => {
  const { previewStream, isLoading, error } = useSettingCameraScene();

  return (
    <div className="mt-[1rem]">
      <MirrorView
        stream={previewStream}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default SettingCameraScene;
