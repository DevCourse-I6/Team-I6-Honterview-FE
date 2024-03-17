'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { BookmarkSimpleIcon } from '@/components/icon';
import { clickQuestionBookmark } from '@/libs/services/questions';

import { IProps } from './types';

const BookmarkButton = ({
  questionId,
  isBookmarked: initialIsBookmarked,
}: IProps) => {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);

  const { mutate, isPending } = useMutation({
    mutationFn: () => clickQuestionBookmark(questionId),
    onSuccess: () => setIsBookmarked(!isBookmarked),
  });
  return (
    <>
      <button
        type="button"
        disabled={isPending}
        onClick={() => mutate()}
      >
        <BookmarkSimpleIcon
          className={` w-[27px] ${isBookmarked ? 'fill-primaries-active' : 'fill-slate-300 hover:fill-blue-300'}`}
        />
      </button>
    </>
  );
};

export default BookmarkButton;
