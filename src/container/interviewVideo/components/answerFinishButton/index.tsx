'use client';

import Button from '@/components/button';
import useSubmitInterview from '@/container/interviewVideo/components/answerFinishButton/hooks/useSubmitInterview';
import { useLoadingStatus, useSubmitStatus } from '@/stores/interviewProgress';

const AnswerFinishButton = () => {
  const { handleSubmit } = useSubmitInterview();
  const { isLoading } = useLoadingStatus();
  const { isSubmit } = useSubmitStatus();

  return (
    <Button
      type="submit"
      disabled={isLoading || isSubmit}
      onClick={handleSubmit}
      className="h-auto w-auto px-[1rem] py-[0.5rem] text-small text-white md:text-medium"
    >
      답변 완료
    </Button>
  );
};

export default AnswerFinishButton;
