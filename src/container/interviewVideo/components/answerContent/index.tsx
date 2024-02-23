'use client';

import { ChangeEvent, useState } from 'react';

const AnswerContent = () => {
  const [answerText, setAnswerText] = useState('뽑아줍쇼');

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswerText(e.target.value);
  };

  return (
    <div className="flex basis-3/6 flex-col gap-2">
      <h3 className="text-extraLarge font-semibold md:text-tripleLarge">
        답변 내용
      </h3>
      <textarea
        value={answerText}
        onChange={handleTextChange}
        className="solid max-h-[11.6rem] grow resize-none overflow-y-auto rounded-2xl border-solid border-transparent bg-background-20 p-6 align-text-top text-large font-medium outline-none md:max-h-[25.8rem]"
      />
    </div>
  );
};

export default AnswerContent;
