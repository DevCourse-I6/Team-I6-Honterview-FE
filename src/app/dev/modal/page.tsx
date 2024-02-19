'use client';

import { useState } from 'react';

import Modal from '@/components/modal';

const ModalDev = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };
  // 배경 스타일 = wrapperClassName
  // children 감싸는 컨테이너 스타일 = className
  return (
    <main>
      <button
        type="button"
        onClick={toggleVisible}
      >
        모달 on off 버튼
      </button>
      <Modal
        visible={visible}
        onClose={toggleVisible}
        className="bg-blue-600 p-10"
      >
        <div>모달 안에 컨텐츠 입니다.</div>
      </Modal>
    </main>
  );
};

export default ModalDev;
