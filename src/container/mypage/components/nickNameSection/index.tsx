'use client';

import { useEffect, useState } from 'react';

import { ThreeDotsIcon } from '@/components/icon';
import { notify } from '@/components/toast';
import useClickAway from '@/hooks/useClickAway';
import { getMyInfo } from '@/services/mypage';

const NickNameSection = () => {
  const [nickname, setNickname] = useState('');
  const [isPopoverOn, setIsPopoverOn] = useState(false);
  const ref = useClickAway(() => setIsPopoverOn(false));
  const onPopoverClick = () => {
    setIsPopoverOn(true);
  };

  useEffect(() => {
    getMyInfo()
      .then(({ data }) => {
        setNickname(data?.nickname);
      })
      .catch((e) => notify('error', e.message));
  }, []);

  return (
    <div className="relative mb-[2rem] flex h-[10rem] w-full flex-col items-center justify-center whitespace-pre text-[2.3rem] tablet:w-[50rem] tablet:flex-row tablet:text-[3rem]">
      <div className="flex gap-[0.3rem]">
        <span className="font-bold">{nickname}</span>
        님의
      </div>
      <span> 면접을 응원합니다 💪</span>
      <button
        type="button"
        className="absolute right-[6rem] top-[2rem] flex w-[1rem] flex-col gap-[0.5rem] tablet:right-[-1rem]"
        onClick={onPopoverClick}
        ref={ref}
      >
        <ThreeDotsIcon className="h-[1.5rem] w-fit" />
        <div
          className={`${!isPopoverOn && 'hidden'} z-10 flex h-[3rem] w-[10rem] translate-x-[-40%] items-center justify-center rounded-lg border-[0.1rem] border-gray-200 bg-gray-700 text-[1.2rem] text-white shadow-sm tablet:translate-x-0`}
          role="presentation"
        >
          닉네임 변경
        </div>
      </button>
    </div>
  );
};

export default NickNameSection;
