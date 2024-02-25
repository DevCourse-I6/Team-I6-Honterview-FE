import '../style/camera.css';

import { VideoViewProps } from '../type';
import CameraErrorView from './CameraErrorView';

const VideoView = ({ videoUrl, width, height, error }: VideoViewProps) => {
  if (error) {
    return <CameraErrorView error={error} />;
  }

  return (
    <video
      controls
      src={videoUrl}
      width={width}
      height={height}
    >
      <track kind="captions" />
    </video>
  );
};

export default VideoView;
