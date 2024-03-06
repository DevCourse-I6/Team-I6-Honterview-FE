import Image from 'next/image';

import InterviewVideoImage from '@/container/main/images/interview_video.png';

const MainCamerScreenSection = () => {
  return (
    <div className="flex h-screen w-full  items-center justify-center">
      <div className="flex gap-[3rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-medium text-text-60">모의 면접 - 화상모드</p>
          <Image
            src={InterviewVideoImage}
            alt=""
            className="w-[70rem]"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-[4rem] font-bold">
            <span className="text-primaries-primary">카메라</span>로 촬영하고
          </h2>
          <h2 className="text-[4rem] font-bold">
            <span className="text-primaries-primary">마이크</span>로 답변하는
          </h2>
          <h2 className="text-[4rem] font-bold">나만의 면접 리허설</h2>
        </div>
      </div>
    </div>
  );
};

export default MainCamerScreenSection;
