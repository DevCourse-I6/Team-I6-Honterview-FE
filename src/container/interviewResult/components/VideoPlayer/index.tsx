import { IProps } from './types';

const VideoPlayer = ({ src }: IProps) => {
  return (
    // eslint-disable-next-line
    <video
      width="100%"
      height="100%"
      controls
    >
      <source
        src={src}
        type="video/mp4"
      />
      <track />
    </video>
  );
};

export default VideoPlayer;
