'use client';

import { useState } from 'react';

import { BookmarkSimpleIcon } from '@/components/icon';
import { notify } from '@/components/toast';
import { clickQuestionBookmarkAction } from '@/libs/actions/question';

import { IProps } from './types';

const BookmarkButton = ({
  questionId,
  isBookmarked: initialIsBookmarked,
}: IProps) => {
  const [isBookmark, setIsBookmark] = useState(initialIsBookmarked);
  const [isLoading, setIsLoading] = useState(false);

  const handleBookmarkClick = async () => {
    setIsLoading(true);
    try {
      const {
        data: { isBookmarked },
      } = await clickQuestionBookmarkAction(questionId);
      setIsBookmark(isBookmarked);
    } catch (error) {
      if (typeof error === 'string') {
        notify('error', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        disabled={isLoading}
        onClick={handleBookmarkClick}
      >
        <BookmarkSimpleIcon
          className={` w-[27px] ${isBookmark ? 'fill-primaries-active' : 'fill-slate-300 hover:fill-blue-300'}`}
        />
      </button>
    </>
  );
};

export default BookmarkButton;
