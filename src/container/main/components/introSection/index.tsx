import './style.css';

import { ArrowDownSecondaryIcon } from '@/components/icon';

import { goldenPlainsFont } from '../../utils/mainFont/mainFont';

const MainIntroSection = () => {
  return (
    <div className="bg-gradient wrap flex w-full flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 p-[2rem] text-[4.4rem] tablet:text-[6rem]">
      <h2 className="flex flex-col justify-center font-bold xl:flex-row xl:gap-[1rem]">
        <p>
          <span className="text-primaries-primary">예상 질문</span>부터
        </p>
        <p>
          <span className="text-primaries-primary">모의 면접</span>까지
        </p>
      </h2>
      <h2 className="flex w-full justify-center font-bold">
        개발 면접의 모든 것
      </h2>
      <p className={`text-[8rem] xl:text-[9rem] ${goldenPlainsFont.className}`}>
        Honterview
      </p>
      <ArrowDownSecondaryIcon className="arrow_down absolute bottom-[2rem] h-[5rem]" />
    </div>
  );
};

export default MainIntroSection;
