import Link from 'next/link';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { BookmarkSimpleIcon } from '@/components/icon';

import { ContentType } from '../type';

const BookmarkItem = ({ id, title, categoryList }: ContentType) => {
  const [isBookmarked, setIsBookmarked] = useState(true);
  return (
    <Link
      href={`/questions/${id}`}
      className="flex gap-[2rem] p-[1rem]"
    >
      <div className="flex flex-col gap-[0.8rem] rounded-lg">
        <div className="flex gap-[1rem]">
          {categoryList.map((category) => (
            <div
              key={uuidv4()}
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-background-20 px-[1rem] py-[0.5rem] text-[1rem] text-black tablet:text-[1.2rem]"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="pl-[0.5rem] text-[1.5rem] tablet:text-[1.7rem]">
          <span className="whitespace-pre text-text-60">Q. </span>
          {title}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <button
          type="button"
          onClick={() => setIsBookmarked((state) => !state)}
        >
          <BookmarkSimpleIcon
            className={`h-[2.5rem] w-[2.5rem] stroke-primaries-primary ${isBookmarked && 'fill-primaries-primary'}`}
          />
        </button>
      </div>
    </Link>
  );
};

export default BookmarkItem;
