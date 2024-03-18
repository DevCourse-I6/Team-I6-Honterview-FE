'use client';

import { useState } from 'react';

import Button from '@/components/button';
import { notify } from '@/components/toast';
import { patchInterviewVisibility } from '@/libs/actions/interview';
import getErrorMessage from '@/utils/getErrorMessage';

import { useAnswerVisibilityStatusStore } from '../../stores';
import { IProps } from './types';

const ButtonWrapper = ({ interviewId }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { answerIdList } = useAnswerVisibilityStatusStore();

  const handleSubmitClick = async () => {
    setIsLoading(true);
    try {
      await patchInterviewVisibility(interviewId, answerIdList);
      notify('success', '답변 공개 여부가 저장되었습니다.');
    } catch (error) {
      notify('error', getErrorMessage());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className="w-full"
      disabled={isLoading}
      onClick={handleSubmitClick}
    >
      저장하기
    </Button>
  );
};

export default ButtonWrapper;
