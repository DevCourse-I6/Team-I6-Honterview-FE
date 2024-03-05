import Button from '@/components/button';

import useQuestionChange from './hooks/useQuestionChange';
import { IProps } from './types';

const QuestionChangeButton = ({ questions, categories }: IProps) => {
  const { isPending, handleChangeQuestion } = useQuestionChange({
    questions,
    categories,
  });

  return (
    <Button
      type="submit"
      disabled={isPending}
      className="h-auto w-auto px-[1rem] py-[0.5rem] text-small text-white md:text-medium"
      formAction={handleChangeQuestion}
    >
      현재 꼬리 질문 변경
    </Button>
  );
};

export default QuestionChangeButton;
