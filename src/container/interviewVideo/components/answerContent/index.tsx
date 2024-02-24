'use client';

import { ChangeEvent, useState } from 'react';

const AnswerContent = () => {
  const [answerText, setAnswerText] = useState(
    '뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼뽑아줍쇼',
  );

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswerText(e.target.value);
  };

  return (
    <div className="flex h-1/2 flex-col gap-2">
      <h3 className="text-large font-semibold md:text-doubleLarge">
        답변 내용
      </h3>
      <textarea
        value={answerText}
        onChange={handleTextChange}
        className="solid grow resize-none overflow-y-auto rounded-2xl bg-background-20 px-4 py-2 text-medium font-medium outline-none"
      />
    </div>
  );
};

export default AnswerContent;
