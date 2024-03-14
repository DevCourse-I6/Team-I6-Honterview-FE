'use client';

import Button from '@/components/button';
import { useSubmitStatus } from '@/stores/interviewProgress';

import useInterviewEnd from './hooks/useInterviewEnd';

const InterviewEndedButton = () => {
  const { disabled, handleInterviewEnd } = useInterviewEnd();
  const { isSubmit } = useSubmitStatus();

  return (
    <Button
      disabled={disabled || isSubmit}
      className="h-auto w-auto px-[1rem] py-[0.5rem] text-small text-white md:text-medium"
      onClick={handleInterviewEnd}
    >
      면접 종료
    </Button>
  );
};

export default InterviewEndedButton;
