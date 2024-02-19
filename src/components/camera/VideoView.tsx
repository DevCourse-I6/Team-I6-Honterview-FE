import './camera.css';

import { VideoHTMLAttributes } from 'react';

interface VideoViewProps extends VideoHTMLAttributes<HTMLVideoElement> {
  videoUrl: string;
}

const VideoView = ({ videoUrl, width, height }: VideoViewProps) => {
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
