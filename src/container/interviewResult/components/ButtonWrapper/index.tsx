'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import Button from '@/components/button';
import { notify } from '@/components/toast';
import { patchInterviewVisibility } from '@/libs/services/interview';

import { useAnswerVisibilityStatusStore } from '../../stores';
import { IProps } from './types';

const ButtonWrapper = ({ interviewId }: IProps) => {
  const router = useRouter();
  const { answerIdList } = useAnswerVisibilityStatusStore();
  const { mutate, isPending } = useMutation({
    mutationFn: () => patchInterviewVisibility(interviewId, answerIdList),
    onSuccess: () => {
      notify('success', '답변 공개 여부가 저장되었습니다.');
    },
    onError: (error) => {
      notify('error', error.message);
    },
  });

  return (
    <>
      <Button onClick={() => router.push('/')}>메인으로</Button>
      <Button
        disabled={isPending}
        onClick={() => mutate()}
      >
        저장하기
      </Button>
    </>
  );
};

export default ButtonWrapper;
