'use client';

import { useRef } from 'react';

import useAutoScroll from '@/hooks/useAutoScroll';

import useSpeechToText from './hooks/useSpeechToText';

const AnswerContent = () => {
  const { answerContent, listening, handleTextChange } = useSpeechToText();
  const contentRef = useRef<HTMLTextAreaElement>(null);
  useAutoScroll(contentRef, [answerContent]);

  return (
    <div className="flex h-1/2 flex-col gap-2">
      <h3 className="text-large font-semibold md:text-doubleLarge">
        답변 내용
      </h3>
      <textarea
        ref={contentRef}
        disabled={!listening}
        title="음성 인식 활성화 중"
        placeholder="음성 입력 시 자동으로 텍스트가 입력됩니다."
        value={answerContent ?? ''}
        onChange={handleTextChange}
        className="solid grow resize-none overflow-y-auto rounded-2xl bg-background-20 px-4 py-2 text-medium font-medium outline-none"
      />
    </div>
  );
};

export default AnswerContent;
