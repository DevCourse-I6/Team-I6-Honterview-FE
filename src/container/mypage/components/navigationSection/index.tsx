'use client';

import { useState } from 'react';

const NavigationSection = () => {
  const [isResultActive, setIsResultActive] = useState(true);

  return (
    <nav className="mb-[2rem] flex w-full justify-around text-[2rem] laptop:justify-center laptop:gap-[25rem]">
      <button
        type="button"
        className={`tablet:flex tablet:w-[11rem] tablet:justify-end ${isResultActive ? 'font-medium text-primaries-primary' : 'text-text-60'}`}
        onClick={() => setIsResultActive(true)}
      >
        연습 기록
      </button>
      <button
        type="button"
        className={`w-[11rem] ${!isResultActive ? 'font-medium text-primaries-primary' : 'text-text-60'}`}
        onClick={() => setIsResultActive(false)}
      >
        북마크한 질문
      </button>
    </nav>
  );
};

export default NavigationSection;
