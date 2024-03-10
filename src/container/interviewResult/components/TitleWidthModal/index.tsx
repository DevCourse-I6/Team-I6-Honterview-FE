'use client';

import { useState } from 'react';

import { XIcon } from '@/components/icon';
import Modal from '@/components/modal';
import AnswerList from '@/container/questions/components/AnswerList';

import { IProps } from './types';

// TODO: Title 다른 질문 존재 조건문 처리

const TitleWidthModal = ({
  questionContent,
  questionInitialData,
  questionId,
}: IProps) => {
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
        {questionContent}
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
          {questionInitialData.data.content}
        </h1>
        <div className="h-[calc(100%-2.5rem-90px)] overflow-auto">
          <AnswerList
            initialData={questionInitialData}
            questionId={questionId}
          />
        </div>
      </Modal>
    </>
  );
};

export default TitleWidthModal;
