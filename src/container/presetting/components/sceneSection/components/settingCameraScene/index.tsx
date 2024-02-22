import { MirrorView } from '@/components/camera';
import { SpinnerIcon } from '@/components/icon';

import useSettingCameraScene from './useSettingCameraScene';

const SettingCameraScene = () => {
  const { previewStream, isLoading } = useSettingCameraScene();

  if (isLoading) {
    return (
      <div className="flex w-full justify-center">
        <SpinnerIcon />
      </div>
    );
  }

  return (
    <>
      <MirrorView stream={previewStream} />
    </>
  );
};

export default SettingCameraScene;
