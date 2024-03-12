'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { notify } from '@/components/toast';
import { deleteQuestion } from '@/libs/services/questions';

import UpdateQuestionModal from '../../../UpdateQuestionModal';
import BookmarkButton from './components/BookmarkButton';
import HeartButton from './components/HeartButton';
import { IProps } from './types';

const HeaderButton = ({
  questionId,
  questionTitle,
  categoryNames,
  categories,
  questionHeartCount,
}: IProps) => {
  const router = useRouter();
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const { mutate } = useMutation({
    mutationFn: () => deleteQuestion(questionId),
    onSuccess: () => {
      notify('success', '질문이 삭제되었습니다.');
      router.back();
    },
    onError: (error) => notify('error', error.message),
  });

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
          onClick={() => mutate()}
          type="button"
          className="rounded-3xl bg-slate-100 px-5 py-2"
        >
          삭제
        </button>
      </div>
      <div className="flex items-center gap-5">
        <HeartButton
          questionId={questionId}
          isHearted={false}
          questionHeartCount={questionHeartCount}
        />
        <BookmarkButton
          questionId={questionId}
          isBookmarked={false}
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
