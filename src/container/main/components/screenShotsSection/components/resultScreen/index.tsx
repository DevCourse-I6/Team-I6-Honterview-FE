import Image from 'next/image';

import InterviewResultImage from '@/container/main/images/interview_result.png';

const MainResultScreenSection = () => {
  return (
    <div className="flex h-screen w-full  items-center justify-center">
      <div className="flex gap-[3rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-small text-text-60">모의 면접 - 면접결과</p>
          <Image
            src={InterviewResultImage}
            alt=""
            className="w-[70rem]"
          />
        </div>

        <div className="flex flex-col justify-center text-[4rem] font-bold">
          <h2>
            내 <span className="text-primaries-primary">답변 기록</span>과
          </h2>
          <h2>
            영상
            <span className="text-primaries-primary"> 다운로드</span>로
          </h2>
          <h2>셀프 피드백까지</h2>
        </div>
      </div>
    </div>
  );
};

export default MainResultScreenSection;
