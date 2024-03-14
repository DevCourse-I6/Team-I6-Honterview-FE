import { NavigationSectionProps } from './type';

const NavigationSection = ({ activeMenu, onClick }: NavigationSectionProps) => {
  const isResultActive = activeMenu === 'result';

  return (
    <div className="w-screen tablet:w-[50rem]">
      <nav className="flex w-full justify-center gap-[10rem] pb-[1rem] text-[1.7rem] tablet:w-[50rem] tablet:gap-[15rem] tablet:pb-[2rem] tablet:text-[2rem]">
        <button
          type="button"
          className={`${isResultActive ? 'font-medium text-primaries-primary underline underline-offset-[0.7rem]' : 'text-text-60'}`}
          onClick={() => onClick('result')}
        >
          연습 기록
        </button>
        <button
          type="button"
          className={`${!isResultActive ? 'font-medium text-primaries-primary underline underline-offset-[0.57rem]' : 'text-text-60'}`}
          onClick={() => onClick('bookmark')}
        >
          북마크한 질문
        </button>
      </nav>
    </div>
  );
};

export default NavigationSection;
