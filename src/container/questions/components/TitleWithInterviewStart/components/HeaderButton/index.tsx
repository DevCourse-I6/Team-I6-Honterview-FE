'use client';

import BookmarkButton from './components/BookmarkButton';
import DeleteButton from './components/DeleteButton';
import HeartButton from './components/HeartButton';
import UpdateButton from './components/UpdateButton';
import { IProps } from './types';

const HeaderButton = ({
  questionId,
  questionTitle,
  categoryNames,
  categories,
  questionHeartCount,
}: IProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <UpdateButton
          questionId={questionId}
          questionTitle={questionTitle}
          categoryNames={categoryNames}
          categories={categories}
        />
        <DeleteButton questionId={questionId} />
      </div>
      <div className="flex items-center gap-5">
        <HeartButton
          questionId={questionId}
          isHearted={false}
          questionHeartCount={questionHeartCount}
        />
        <BookmarkButton
          questionId={questionId}
          isBookmarked={false}
        />
      </div>
    </div>
  );
};

export default HeaderButton;
