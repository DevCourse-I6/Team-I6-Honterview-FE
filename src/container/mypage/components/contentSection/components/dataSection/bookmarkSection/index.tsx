import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { getMyBookmarkQuestions } from '@/services/mypage';

import BookmarkItem from './components/BookmarkItem';

const BookmarkSection = ({
  setItemCount,
  currentPage,
  isVisible,
}: DataSectionProps) => {
  const [bookmarkDatas, setBookmarkDatas] = useState<
    MyPageBookmarkDataType[] | null
  >(null);

  useEffect(() => {
    getMyBookmarkQuestions(currentPage).then(({ data }) => {
      setBookmarkDatas(data.data);
      setItemCount(data.totalElements);
    });
  }, [currentPage, setItemCount]);

  return (
    <div
      className={`tablet:w-[50rem] ${!isVisible && 'hidden'} flex w-full flex-1 flex-col items-center gap-[2rem] p-[1rem] pb-[3rem]`}
    >
      {bookmarkDatas?.map((content) => (
        <div
          className="flex w-full flex-col gap-[1rem] rounded-xl border border-dotted border-gray-300"
          key={uuidv4()}
        >
          <BookmarkItem
            id={content.id}
            content={content.content}
            categoryNames={content.categoryNames}
          />
        </div>
      ))}
    </div>
  );
};

export default BookmarkSection;
