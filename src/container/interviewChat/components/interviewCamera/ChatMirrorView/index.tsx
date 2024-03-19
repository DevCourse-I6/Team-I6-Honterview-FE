import React, { useEffect, useRef } from 'react';

import { notify } from '@/components/toast';

import { IProps } from './type';

const ChatMirrorView = ({ camerraToggle }: IProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let stream: MediaStream | undefined;

    const fetchMediaStream = async () => {
      if (camerraToggle) {
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          if (videoRef.current) videoRef.current.srcObject = stream;
        } catch (error) {
          notify('error', '카메라 접근에 실패했습니다.');
        }
      } else if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };

    fetchMediaStream();

    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [camerraToggle]);

  return (
    <div className="w-[24rem]">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ transform: 'scaleX(-1)' }}
      >
        <track kind="captions" />
      </video>
    </div>
  );
};

export default ChatMirrorView;
