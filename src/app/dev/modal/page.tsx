'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

// 브라우저에서만 렌더링 되도록 동적 import
const Modal = dynamic(() => import('@/components/modal'), { ssr: false });

const ModalDev = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  // 배경 스타일 = wrapperClassName
  // children 감싸는 컨테이너 스타일 = className
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
