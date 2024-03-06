import './style.css';

import { ArrowDownSecondaryIcon } from '@/components/icon';

import { goldenPlainsFont } from '../../utils/mainFont/mainFont';

const MainIntroSection = () => {
  return (
    <div className="bg-gradient flex h-[calc(100vh-7rem)] w-full flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100">
      <h2 className="text-[6rem] font-bold">
        <span className="text-primaries-primary">예상 질문</span>부터
        <span className="text-primaries-primary"> 모의 면접</span>까지
      </h2>
      <h2 className="text-[6rem] font-bold">개발 면접의 모든 것</h2>
      <p className={`text-[9rem] ${goldenPlainsFont.className}`}>Honterview</p>
      <ArrowDownSecondaryIcon className="arrow_down absolute bottom-[2rem] h-[5rem]" />
    </div>
  );
};

export default MainIntroSection;
