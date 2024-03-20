'use client';

import { DownLoadIcon } from '@/components/icon';

import useCreateVideoDownloadUrl from '../../hooks/useCreateVideoDownloadUrl';
import { IProps } from './types';

const DownLoadWrapper = ({ interviewVideoUrl }: IProps) => {
  const downloadUrl = useCreateVideoDownloadUrl(interviewVideoUrl);

  return (
    <a
      href={downloadUrl}
      download="interview_video.webm"
      className="mt-[1px] block h-[30px] w-[18px] cursor-pointer "
    >
      <DownLoadIcon className="fill-slate-500" />
    </a>
  );
};

export default DownLoadWrapper;
