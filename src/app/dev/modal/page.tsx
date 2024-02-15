'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const Modal = dynamic(() => import('@/components/modal'), { ssr: false });

const ModalDev = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <button type="button">모달 on off 버튼</button>
      <Modal
        visible={visible}
        onClose={toggleVisible}
        className="bg-blue-600 p-10"
      >
        <div>모달 안에 컨텐츠 입니다.</div>
      </Modal>
    </>
  );
};

export default ModalDev;
