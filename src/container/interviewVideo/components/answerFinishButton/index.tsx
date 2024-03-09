'use client';

import Button from '@/components/button';
import useSubmitInterview from '@/hooks/useSubmitInterview';

const AnswerFinishButton = () => {
  const { isPending, handleSubmit } = useSubmitInterview();

  return (
    <Button
      type="submit"
      disabled={isPending}
      onClick={handleSubmit}
      className="h-auto w-auto px-[1rem] py-[0.5rem] text-small text-white md:text-medium"
    >
      답변 완료
    </Button>
  );
};

export default AnswerFinishButton;
