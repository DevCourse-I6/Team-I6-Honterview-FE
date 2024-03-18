'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/button';
import { patchInterviewStatus } from '@/libs/actions/interview';

import { IProps } from './type';

const QuestionEndButton = ({ interviewId }: IProps) => {
  const router = useRouter();
  const handleEndInterview = () => {
    patchInterviewStatus(interviewId);
    router.push(`/interview/result/${interviewId}`);
  };
  return (
    <Button
      onClick={handleEndInterview}
      className="px-4 py-2"
    >
      면접 종료
    </Button>
  );
};

export default QuestionEndButton;
