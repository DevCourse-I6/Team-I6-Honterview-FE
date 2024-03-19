import { getUserAuth } from '@/libs/services/auth';

import BookmarkButton from './components/BookmarkButton';
import DeleteButton from './components/DeleteButton';
import HeartButton from './components/HeartButton';
import UpdateButton from './components/UpdateButton';
import { IProps } from './types';

const HeaderButton = async ({
  questionId,
  questionTitle,
  categoryNames,
  categories,
  questionHeartCount,
  isHearted,
  isBookmarked,
}: IProps) => {
  const userAuth = await getUserAuth();
  const isAdmin = userAuth?.data?.role === 'ROLE_ADMIN';

  return (
    <div className={`flex ${isAdmin ? 'justify-between' : 'justify-end'}`}>
      {isAdmin && (
        <div className="flex gap-4">
          <UpdateButton
            questionId={questionId}
            questionTitle={questionTitle}
            categoryNames={categoryNames}
            categories={categories}
          />
          <DeleteButton questionId={questionId} />
        </div>
      )}
      <div className="flex items-center justify-center">
        <HeartButton
          questionId={questionId}
          isHearted={isHearted}
          questionHeartCount={questionHeartCount}
        />
        <BookmarkButton
          questionId={questionId}
          isBookmarked={isBookmarked}
        />
      </div>
    </div>
  );
};

export default HeaderButton;
