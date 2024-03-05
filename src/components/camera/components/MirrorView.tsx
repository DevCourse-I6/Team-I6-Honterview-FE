import '../style/camera.css';

import { useEffect, useRef } from 'react';

import Loading from '@/components/loading';

import { VideoPreviewProps } from '../type';
import CameraErrorView from './CameraErrorView';

const MirrorView = ({
  stream,
  isLoading,
  error,
  ...rest
}: VideoPreviewProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <CameraErrorView error={error} />;
  }

  if (!stream) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      {...rest}
      autoPlay
    >
      <track kind="captions" />
    </video>
  );
};

export default MirrorView;
