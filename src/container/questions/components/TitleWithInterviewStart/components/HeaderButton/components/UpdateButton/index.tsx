'use client';

import { useState } from 'react';

import UpdateQuestionModal from '@/container/questions/components/UpdateQuestionModal';

import { IProps } from './types';

const UpdateButton = ({
  questionId,
  questionTitle,
  categoryNames,
  categories,
}: IProps) => {
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

  const toggleUpdateModalVisible = () => {
    setUpdateModalVisible((prev) => !prev);
  };
  return (
    <>
      <button
        onClick={toggleUpdateModalVisible}
        type="button"
        className="rounded-3xl bg-slate-100 px-5 py-2"
      >
        수정
      </button>
      <UpdateQuestionModal
        questionId={questionId}
        questionTitle={questionTitle}
        categoryNames={categoryNames}
        updateModalVisible={updateModalVisible}
        toggleUpdateModalVisible={toggleUpdateModalVisible}
        categories={categories}
      />
    </>
  );
};

export default UpdateButton;
