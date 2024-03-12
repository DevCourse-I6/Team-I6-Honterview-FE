'use client';

import { useState } from 'react';

import UpdateQuestionModal from '../../../UpdateQuestionModal';
import HeartButton from './components/HeartButton';
import { IProps } from './types';

const HeaderButton = ({
  questionId,
  questionTitle,
  categoryNames,
  categories,
  isHearted,
  questionHeartCount,
}: IProps) => {
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

  const toggleUpdateModalVisible = () => {
    setUpdateModalVisible((prev) => !prev);
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <button
          onClick={toggleUpdateModalVisible}
          type="button"
          className="rounded-3xl bg-slate-100 px-5 py-2"
        >
          수정
        </button>
        <button
          type="button"
          className="rounded-3xl bg-slate-100 px-5 py-2"
        >
          삭제
        </button>
      </div>
      <div className="flex items-center gap-1">
        <HeartButton
          questionId={questionId}
          isHearted={isHearted}
          questionHeartCount={questionHeartCount}
        />
      </div>
      <UpdateQuestionModal
        questionId={questionId}
        questionTitle={questionTitle}
        categoryNames={categoryNames}
        updateModalVisible={updateModalVisible}
        toggleUpdateModalVisible={toggleUpdateModalVisible}
        categories={categories}
      />
    </div>
  );
};

export default HeaderButton;
