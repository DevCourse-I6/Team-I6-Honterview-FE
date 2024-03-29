'use client';

import { useState } from 'react';

import { XIcon } from '@/components/icon';
import Modal from '@/components/modal';
import AnswerList from '@/container/questions/components/AnswerList';

import { IProps } from './types';

const QuestionWidthModal = ({
  questionContent,
  questionInitialData,
  questionId,
}: IProps) => {
  const [visible, setVisible] = useState(false);
  const hasMoreQuestions = questionInitialData.data.answers.data.length >= 2;

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        disabled={!hasMoreQuestions}
        onClick={toggleVisible}
        className={`mb-10 inline-block text-left text-extraLarge font-bold ${hasMoreQuestions && 'cursor-pointer underline decoration-blue-300 hover:decoration-blue-600'}`}
      >
        {questionContent}
      </button>

      <Modal
        visible={visible}
        onClose={toggleVisible}
        className=" relative h-fit max-h-[50rem] w-[50%] rounded-3xl  bg-white px-16 py-10 shadow-2xl "
      >
        <button
          type="button"
          onClick={toggleVisible}
          className="absolute right-0 top-0 rounded-full p-2 transition-all hover:bg-primaries-hover"
        >
          <XIcon className="h-[30px] w-[30px] stroke-black" />
        </button>
        <h1 className="mb-10 text-doubleLarge">
          {questionInitialData.data.content}
        </h1>
        <div className="flex max-h-[310px] flex-col gap-4 overflow-auto">
          <AnswerList
            initialData={questionInitialData}
            questionId={questionId}
            isModalLoad={hasMoreQuestions}
          />
        </div>
      </Modal>
    </>
  );
};

export default QuestionWidthModal;
