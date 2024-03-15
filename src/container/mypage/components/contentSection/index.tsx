'use client';

import { useState } from 'react';

import Pagination from '@/components/pagination';

import BookmarkSection from './components/dataSection/bookmarkSection';
import ResultSection from './components/dataSection/resultSection';
import NavigationSection from './components/navigationSection';

const ContentSection = () => {
  const [activeMenu, setActiveMenu] = useState<'result' | 'bookmark'>(
    'bookmark',
  );
  const [currentBookmarkPage, setCurrentBookmarkPage] = useState(1);
  const [currentResultPage, setCurrentResultPage] = useState(1);

  const [bookmarkItemCount, setBookmarkItemCount] = useState(0);
  const [resultItemCount, setResultItemCount] = useState(0);

  const isBookmarkOn = activeMenu === 'bookmark';
  const isResultOn = activeMenu === 'result';

  return (
    <div className="flex flex-col items-center">
      <NavigationSection
        activeMenu={activeMenu}
        onClick={setActiveMenu}
      />
      <>
        <BookmarkSection
          setItemCount={setBookmarkItemCount}
          currentPage={currentBookmarkPage}
          isVisible={isBookmarkOn}
        />
        <Pagination
          defaultPage={currentBookmarkPage}
          limit={10}
          total={bookmarkItemCount}
          onPageChange={setCurrentBookmarkPage}
          className={`${(!isBookmarkOn || !bookmarkItemCount) && 'hidden'} `}
        >
          <Pagination.PrevButton className="w-[1rem]" />
          <Pagination.PageButtons className="h-[3rem] min-w-[3rem] py-0" />
          <Pagination.NextButton />
        </Pagination>
      </>
      <>
        <ResultSection
          setItemCount={setResultItemCount}
          currentPage={currentResultPage}
          isVisible={isResultOn}
        />
        <Pagination
          defaultPage={currentResultPage}
          limit={5}
          total={resultItemCount}
          onPageChange={setCurrentResultPage}
          className={`${(!isResultOn || !resultItemCount) && 'hidden'}`}
        >
          <Pagination.PrevButton className="w-[1rem]" />
          <Pagination.PageButtons className="h-[3rem] min-w-[3rem] py-0" />
          <Pagination.NextButton />
        </Pagination>
      </>
    </div>
  );
};

export default ContentSection;
