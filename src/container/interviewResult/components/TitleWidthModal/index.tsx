'use client';

import { useState } from 'react';

import { XIcon } from '@/components/icon';
import Modal from '@/components/modal';
import { Answer } from '@/container/questions/components';

const TitleWidthModal = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleVisible}
        className="mb-10 inline-block cursor-pointer text-extraLarge font-bold underline decoration-blue-300 hover:decoration-blue-600"
      >
        {/* TODO: 더보기가 존재할 경우 underline, color blue */}
        브라우저 렌더링 원리에 대해서 설명해보세요.
      </button>

      <Modal
        visible={visible}
        onClose={toggleVisible}
        className="relative h-[70%] w-[70%] rounded-3xl bg-slate-300 px-16 py-10 shadow-2xl"
      >
        <button
          type="button"
          onClick={toggleVisible}
          className="absolute right-0 top-0 rounded-full p-2 transition-all hover:bg-primaries-hover"
        >
          <XIcon className="h-[30px] w-[30px] stroke-white" />
        </button>
        <h1 className="mb-10 text-doubleLarge">
          브라우저 렌더링 원리에 대해서 설명해보세요.
        </h1>
        <div className="h-[calc(100%-2.5rem-90px)] overflow-auto">
          <Answer className=" mb-5 rounded-2xl bg-slate-200 p-10 shadow-xl" />
          <Answer className=" mb-5 rounded-2xl bg-slate-200 p-10 shadow-xl" />
          <Answer className=" mb-5 rounded-2xl bg-slate-200 p-10 shadow-xl" />
          <Answer className=" rounded-2xl bg-slate-200 p-10 shadow-xl" />
        </div>
      </Modal>
    </>
  );
};

export default TitleWidthModal;
