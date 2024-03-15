'use client';

import { useState } from 'react';

import Pagination from '@/components/pagination';

import DataSection from './components/dataSection';
import NavigationSection from './components/navigationSection';

const ContentSection = () => {
  const [activeMenu, setActiveMenu] = useState<'result' | 'bookmark'>(
    'bookmark',
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemCount, setItemCount] = useState(10);

  return (
    <div className="flex flex-col items-center">
      <NavigationSection
        activeMenu={activeMenu}
        onClick={setActiveMenu}
      />
      <DataSection
        activeMenu={activeMenu}
        onFetchData={setItemCount}
        currentPage={currentPage}
      />
      <Pagination
        defaultPage={1}
        limit={5}
        total={itemCount}
        onPageChange={setCurrentPage}
      >
        <Pagination.PrevButton className="w-[1rem]" />
        <Pagination.PageButtons className="h-[3rem] min-w-[3rem] py-0" />
        <Pagination.NextButton />
      </Pagination>
    </div>
  );
};

export default ContentSection;
