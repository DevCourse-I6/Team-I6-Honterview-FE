'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import Button from '@/components/button';
import { notify } from '@/components/toast';
import { patchInterviewVisibility } from '@/libs/services/interview';

import { useVisibilityCheckStore } from '../../stores';
import { IProps } from './types';

// TODO: sangmin // useVisibilityCheckStore 변수명 변경하기 answerId => {id, visibility}를 나타낼 수 있는 이름으로

const ButtonWrapper = ({ interviewId }: IProps) => {
  const router = useRouter();
  const { answerIdList } = useVisibilityCheckStore();
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
