'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { BookmarkIcon } from '@/components/icon';
import { clickQuestionBookmark } from '@/libs/services/questions';

import { IProps } from './types';

const BookmarkButton = ({
  questionId,
  isBookmarked: initialIsBookmarked,
}: IProps) => {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);

  const { mutate } = useMutation({
    mutationFn: () => clickQuestionBookmark(questionId),
    onSuccess: () => setIsBookmarked(!isBookmarked),
  });
  return (
    <>
      <button
        type="button"
        onClick={() => mutate()}
      >
        <BookmarkIcon
          className={`${isBookmarked ? 'fill-primaries-active' : 'fill-slate-300 hover:fill-blue-300'}`}
        />
      </button>
    </>
  );
};

export default BookmarkButton;
