'use client';

import { useState } from 'react';

import DividerHorizontal from '@/components/dividerHorizontal';

import NavigationSection from './components/navigationSection';

const ContentSection = () => {
  const [activeMenu, setActiveMenu] = useState<'result' | 'bookmark'>('result');
  //   const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <NavigationSection
        activeMenu={activeMenu}
        onClick={(menu) => setActiveMenu(menu)}
      />
      <DividerHorizontal />
      {/* <Pagination /> */}
    </>
  );
};

export default ContentSection;
