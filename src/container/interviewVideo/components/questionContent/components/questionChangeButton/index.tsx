import Button from '@/components/button';
import { useLoadingStatus, useSubmitStatus } from '@/stores/interviewProgress';

import useQuestionChange from './hooks/useQuestionChange';

const QuestionChangeButton = () => {
  const { isPending, handleChangeQuestion } = useQuestionChange();
  const { isLoading } = useLoadingStatus();
  const { isSubmit } = useSubmitStatus();

  return (
    <Button
      type="submit"
      disabled={isPending || isLoading || isSubmit}
      className="h-auto w-auto px-[1rem] py-[0.5rem] text-small text-white md:text-medium"
      formAction={handleChangeQuestion}
    >
      현재 꼬리 질문 변경
    </Button>
  );
};

export default QuestionChangeButton;
