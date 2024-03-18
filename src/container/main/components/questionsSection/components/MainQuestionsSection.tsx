import Image from 'next/image';

import { MainQuestionsSectionProps } from './type';

const MainQuestionsSection = ({
  children: chatBubbleChildren,
  imageSrc,
  title1,
  title2,
  title1Detail,
  imageTitle,
}: MainQuestionsSectionProps) => {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center gap-[3rem] p-[2rem] text-[3rem] laptop:hidden laptop:p-0">
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-[1rem] text-text-60">{imageTitle}</p>
          <Image
            src={imageSrc}
            alt=""
            className="w-[30rem] shadow-xl backdrop-blur-xl tablet:w-[50rem]"
          />
        </div>
        <div className="flex w-full flex-col items-center tablet:text-[4rem]">
          <h2 className="font-bold">{title1}</h2>
          <h2 className="font-bold">{title2}</h2>
        </div>
        <div className="inline-flex w-screen flex-nowrap gap-[0.5rem] overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_105%)] tablet:[mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_105%)]">
          {chatBubbleChildren}
        </div>
      </div>

      <div className="relative hidden h-full items-center justify-center gap-[5rem] laptop:flex">
        {chatBubbleChildren}
        <div>
          <h2 className="text-[5rem] font-bold">{title1}</h2>
          {title1Detail && <p className="text-text-40">{title1Detail}</p>}
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-small text-text-60">{imageTitle}</p>
          <Image
            src={imageSrc}
            alt=""
            className="w-[50rem] shadow-xl backdrop-blur-xl"
          />
        </div>
        <h2 className="text-[5rem] font-bold">{title2}</h2>
      </div>
    </>
  );
};

export default MainQuestionsSection;
