'use client';

import { useQuestionContent } from '@/stores/interviewProgress';

import QuestionChangeButton from './components/questionChangeButton';

const QuestionContent = () => {
  const { questionContent } = useQuestionContent();

  return (
    <div className="flex h-1/2 flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-large font-semibold md:text-doubleLarge">
          질문 내용
        </h3>
        <QuestionChangeButton />
      </div>
      <p className="grow overflow-y-auto rounded-2xl bg-background-20 px-4 py-2 text-medium font-medium">
        {questionContent}
      </p>
    </div>
  );
};

export default QuestionContent;
