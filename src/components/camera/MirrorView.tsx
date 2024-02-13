import { useEffect, useRef, VideoHTMLAttributes } from 'react';

interface VideoPreviewProps extends VideoHTMLAttributes<HTMLVideoElement> {
  stream: MediaStream | null;
}

const MirrorView = ({ stream, width, height }: VideoPreviewProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (!stream) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      width={width}
      height={height}
      autoPlay
    >
      <track kind="captions" />
    </video>
  );
};

export default MirrorView;
