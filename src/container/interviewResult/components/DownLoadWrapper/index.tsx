'use client';

import { DownLoadIcon } from '@/components/icon';

import { IProps } from './types';

// TODO: sangmin // 바로 다운로드 되도록, 인터넷 다운로드 목록에 추가 되게끔
// TODO: sangmin // mp4로 변환해야될까?

const DownLoadWrapper = ({ interviewVideoUrl }: IProps) => {
  return (
    <button
      onClick={() => window.open(interviewVideoUrl)}
      type="button"
      className="mt-[1px] h-[30px] w-[18px] cursor-pointer"
    >
      <DownLoadIcon className="fill-slate-500" />
    </button>
  );
};

export default DownLoadWrapper;
