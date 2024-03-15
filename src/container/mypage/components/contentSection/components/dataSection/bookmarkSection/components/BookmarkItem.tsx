import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { BookmarkSimpleIcon } from '@/components/icon';
import { clickQuestionBookmark } from '@/libs/services/questions';

import { MyPageBookmarkDataType } from '../type';

const BookmarkItem = ({
  id,
  content: title,
  categoryNames: categoryList,
}: MyPageBookmarkDataType) => {
  const [isBookmarked, setIsBookmarked] = useState(true);
  const route = useRouter();
  const handleBookmarkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsBookmarked((state) => !state);
    clickQuestionBookmark(id);
  };

  return (
    <div
      onClick={() => route.push(`/questions/${id}`)}
      className="flex cursor-pointer items-center gap-[2rem] p-[1rem]"
      role="presentation"
    >
      <div className="flex flex-col gap-[0.8rem] rounded-lg">
        <div className="flex gap-[1rem]">
          {categoryList?.map((category) => (
            <div
              key={uuidv4()}
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-background-20 px-[1rem] py-[0.5rem] text-[1rem] text-black tablet:text-[1.2rem]"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="flex pl-[0.5rem] text-[1.5rem] tablet:text-[1.7rem]">
          <span className="whitespace-pre text-text-60">Q. </span>
          <div className="flex justify-start">{title}</div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <button
          type="button"
          onClick={handleBookmarkClick}
        >
          <BookmarkSimpleIcon
            className={`h-[2.5rem] w-[2.5rem] stroke-primaries-primary ${isBookmarked && 'fill-primaries-primary'}`}
          />
        </button>
      </div>
    </div>
  );
};

export default BookmarkItem;
