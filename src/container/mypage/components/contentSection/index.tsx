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
          limit={5}
          total={bookmarkItemCount}
          onPageChange={setCurrentBookmarkPage}
          className={`${(!isBookmarkOn || !bookmarkItemCount) && 'hidden'} gap-[1rem] tablet:gap-6`}
        >
          {currentBookmarkPage > 1 ? (
            <Pagination.PrevButton className="w-[1rem]" />
          ) : (
            <span className="w-[3rem]" />
          )}
          <Pagination.PageButtons className="h-[3rem] min-w-[3rem] py-0" />
          {currentBookmarkPage < Math.ceil(bookmarkItemCount / 5) ? (
            <Pagination.NextButton className="flex w-[3rem] items-center justify-start" />
          ) : (
            <span className="w-[3rem]" />
          )}
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
          limit={10}
          total={resultItemCount}
          onPageChange={setCurrentResultPage}
          className={`${(!isResultOn || !resultItemCount) && 'hidden'} gap-[0.4rem] text-medium tablet:gap-6 tablet:text-large`}
        >
          {currentResultPage > 1 ? (
            <Pagination.PrevButton className="flex w-[3rem] items-center justify-end" />
          ) : (
            <span className="w-[3rem]" />
          )}
          <Pagination.PageButtons className="flex h-[3rem] min-w-[3rem] items-center justify-center py-0 " />
          {currentResultPage < Math.ceil(resultItemCount / 10) ? (
            <Pagination.NextButton className="flex w-[3rem] items-center justify-start" />
          ) : (
            <span className="w-[3rem]" />
          )}
        </Pagination>
      </>
    </div>
  );
};

export default ContentSection;
