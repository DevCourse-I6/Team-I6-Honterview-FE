'use client';

import { useEffect, useState } from 'react';

import Modal from '@/components/modal';
import { notify } from '@/components/toast';
import { getMyInfo } from '@/services/mypage';

import NicknameEditSection from './components/NicknameEditSection/nicknameEditSection';

const NickNameSection = () => {
  const [nickname, setNickname] = useState('');
  const [editNicknameModalOn, setEditNicknameModalOn] = useState(false);

  useEffect(() => {
    getMyInfo()
      .then(({ data }) => {
        setNickname(data?.nickname);
      })
      .catch((e) => notify('error', e.message));
  }, []);

  return (
    <div className="mb-[2rem] flex h-full w-full justify-center whitespace-pre text-[1.9rem] tablet:min-h-[10rem] tablet:w-[60rem] tablet:gap-[2rem] tablet:text-[3rem]">
      <div className="relative flex flex-col items-center justify-center laptop:flex-row">
        <div className="flex gap-[0.5rem]">
          <button
            type="button"
            className="font-bold underline underline-offset-4"
            onClick={() => setEditNicknameModalOn(true)}
          >
            {nickname}
          </button>
          님의
        </div>
        <span> 면접을 응원합니다 💪</span>
      </div>
      <Modal
        visible={editNicknameModalOn}
        onClose={() => setEditNicknameModalOn(false)}
      >
        <NicknameEditSection
          currentNickname={nickname}
          closeModal={() => setEditNicknameModalOn(false)}
          onChangeNickname={(name) => setNickname(name)}
        />
      </Modal>
    </div>
  );
};

export default NickNameSection;
