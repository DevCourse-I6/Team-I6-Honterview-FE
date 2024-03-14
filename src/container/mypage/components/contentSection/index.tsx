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

  const isPaginationVisible =
    (activeMenu === 'bookmark' && bookmarkItemCount) ||
    (activeMenu === 'result' && resultItemCount);

  return (
    <div className="flex flex-col items-center">
      <NavigationSection
        activeMenu={activeMenu}
        onClick={setActiveMenu}
      />

      <BookmarkSection
        setItemCount={setBookmarkItemCount}
        currentPage={currentBookmarkPage}
        isVisible={activeMenu === 'bookmark'}
      />
      <ResultSection
        setItemCount={setResultItemCount}
        currentPage={currentResultPage}
        isVisible={activeMenu === 'result'}
      />
      {isPaginationVisible && (
        <Pagination
          defaultPage={1}
          limit={activeMenu === 'bookmark' ? 10 : 5}
          total={
            activeMenu === 'bookmark' ? bookmarkItemCount : resultItemCount
          }
          onPageChange={
            activeMenu === 'bookmark'
              ? setCurrentBookmarkPage
              : setCurrentResultPage
          }
        >
          <Pagination.PrevButton className="w-[1rem]" />
          <Pagination.PageButtons className="h-[3rem] min-w-[3rem] py-0" />
          <Pagination.NextButton />
        </Pagination>
      )}
    </div>
  );
};

export default ContentSection;
