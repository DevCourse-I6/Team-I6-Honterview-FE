'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { notify } from '@/components/toast';
import { deleteQuestion } from '@/libs/services/questions';

import { IProps } from './types';

const DeleteButton = ({ questionId }: IProps) => {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteQuestion(questionId),
    onSuccess: () => {
      notify('success', '질문이 삭제되었습니다.');
      router.back();
      router.refresh();
    },
    onError: (error) => notify('error', error.message),
  });
  return (
    <button
      onClick={() => mutate()}
      disabled={isPending}
      type="button"
      className="rounded-3xl bg-slate-100 px-5 py-2"
    >
      삭제
    </button>
  );
};

export default DeleteButton;