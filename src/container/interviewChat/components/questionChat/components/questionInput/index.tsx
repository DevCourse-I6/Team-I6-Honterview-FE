'use client';

import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import Button from '@/components/button';
import { notify } from '@/components/toast';

import { IProps } from './type';

const QuestionInput = ({ setQuestionsAndAnswers }: IProps) => {
  const [questionInput, setQuestionInput] = useState('');

  const handleSubmit = async () => {
    const inputLength = questionInput.trim().length;
    if (inputLength === 0) {
      return notify('warning', '입력 부탁드립니다.');
    }

    setQuestionsAndAnswers((prevState) => {
      const lastItem = prevState[prevState.length - 1];
      const updatedLastItem = {
        ...lastItem,
        answerContent: questionInput,
      };
      return [...prevState.slice(0, -1), updatedLastItem];
    });

    setQuestionInput('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex w-full gap-[1rem]">
      <TextareaAutosize
        value={questionInput}
        onChange={(e) => setQuestionInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-grow resize-none items-center justify-center rounded-lg border px-[1rem] py-[1rem] text-[1.6rem] focus-within:border-primaries-primary"
        placeholder="답변을 입력해주세요."
        maxRows={5}
      />
      <Button
        onClick={handleSubmit}
        className="mt-auto h-[46px] w-auto px-[1rem] py-[0.5rem] text-small text-white md:text-medium"
      >
        답변 완료
      </Button>
    </div>
  );
};

export default QuestionInput;
