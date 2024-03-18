'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { notify } from '@/components/toast';
import { deleteQuestion } from '@/libs/actions/question';
import getErrorMessage from '@/utils/getErrorMessage';

import { IProps } from './types';

const DeleteButton = ({ questionId }: IProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteClick = async () => {
    setIsLoading(true);
    try {
      await deleteQuestion(questionId);
      notify('success', '질문이 삭제되었습니다.');
      router.back();
      router.refresh();
    } catch (error) {
      notify('error', `Error: ${getErrorMessage()}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDeleteClick}
      disabled={isLoading}
      type="button"
      className="rounded-3xl bg-slate-100 px-5 py-2"
    >
      삭제
    </button>
  );
};

export default DeleteButton;
