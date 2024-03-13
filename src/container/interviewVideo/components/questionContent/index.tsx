'use client';

import { useRef } from 'react';

import useAutoScroll from '@/hooks/useAutoScroll';
import { useQuestionContent } from '@/stores/interviewProgress';

import QuestionChangeButton from './components/questionChangeButton';

const QuestionContent = () => {
  const { questionContent } = useQuestionContent();
  const contentRef = useRef<HTMLTextAreaElement>(null);
  useAutoScroll(contentRef, [questionContent]);

  return (
    <div className="flex h-1/2 flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-large font-semibold md:text-doubleLarge">
          질문 내용
        </h3>
        <QuestionChangeButton />
      </div>
      <textarea
        readOnly
        ref={contentRef}
        className="solid grow resize-none overflow-y-auto rounded-2xl bg-background-20 px-4 py-2 text-medium font-medium outline-none"
        value={questionContent ?? ''}
      />
    </div>
  );
};

export default QuestionContent;
