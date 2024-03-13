import { NavigationSectionProps } from './type';

const NavigationSection = ({ activeMenu, onClick }: NavigationSectionProps) => {
  const isResultActive = activeMenu === 'result';

  return (
    <nav className="mb-[2rem] flex w-full justify-around text-[2rem] laptop:justify-center laptop:gap-[25rem]">
      <button
        type="button"
        className={`tablet:flex tablet:w-[11rem] tablet:justify-end ${isResultActive ? 'font-medium text-primaries-primary' : 'text-text-60'}`}
        onClick={() => onClick('result')}
      >
        연습 기록
      </button>
      <button
        type="button"
        className={`w-[11rem] ${!isResultActive ? 'font-medium text-primaries-primary' : 'text-text-60'}`}
        onClick={() => onClick('bookmark')}
      >
        북마크한 질문
      </button>
    </nav>
  );
};

export default NavigationSection;
