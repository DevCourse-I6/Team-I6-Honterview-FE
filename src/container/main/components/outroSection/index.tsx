import './style.css';

import Link from 'next/link';
import React from 'react';

import { goldenPlainsFont } from '../../utils/mainFont/mainFont';
import MainSectionAnimationWrapper from '../animationWrapper/MainSectionAnimationWrapper';

const navigation = [
  {
    title: '면접 질문 바로가기',
    url: '/questions/list',
    replace: false,
    scroll: false,
  },
  {
    title: '모의 면접 바로가기',
    url: '/interview/presetting',
    replace: false,
    scroll: false,
  },
];

const MainOutroSection = () => {
  return (
    <MainSectionAnimationWrapper>
      <div className="main-section flex h-screen flex-col items-center justify-center p-[2rem] xl:p-0">
        <h2 className="font-mono text-[2rem]">everything is possible,</h2>
        <p
          className={`text-[8rem] tablet:text-[10rem] ${goldenPlainsFont.className}`}
        >
          Honterview
        </p>
        <h2 className="text-[3rem] font-bold tablet:text-[4rem]">
          지금 경험해 보세요
        </h2>
        <ul className="mt-[1rem] flex justify-center gap-10 p-[1rem] tablet:mt-0 tablet:p-[3rem]">
          {navigation.map((item) => (
            <Link
              href={item.url}
              replace={item.replace}
              scroll={item.scroll}
              key={item.title}
              className="outro_link rounded-xl bg-black p-[1.5rem] text-[1.5rem] font-semibold text-white tablet:p-[2rem] tablet:text-[2rem]"
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
    </MainSectionAnimationWrapper>
  );
};

export default MainOutroSection;
