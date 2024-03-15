import './style.css';

import Link from 'next/link';

import { goldenPlainsFont } from '../../utils/mainFont/mainFont';

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
    <div className="flex h-[calc(100vh-9rem)] flex-col items-center justify-center">
      <h2 className="font-mono text-[2rem]">everything is possible,</h2>
      <p className={`text-[10rem] ${goldenPlainsFont.className}`}>Honterview</p>
      <h2 className="text-[4rem] font-bold">지금 경험해 보세요</h2>
      <ul className="flex justify-center gap-10 p-[3rem]">
        {navigation.map((item) => (
          <Link
            href={item.url}
            replace={item.replace}
            scroll={item.scroll}
            key={item.title}
            className="outro_link rounded-xl bg-black p-[2rem] text-[2rem] font-semibold text-white"
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MainOutroSection;
