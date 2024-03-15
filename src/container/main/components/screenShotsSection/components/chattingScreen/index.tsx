import Image from 'next/image';

import InterviewChattingImage from '@/container/main/images/interview_chatting.png';

const MainChattingScreenSection = () => {
  return (
    <div className="flex h-screen w-full  items-center justify-center">
      <div className="flex gap-[3rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-small text-text-60">모의 면접 - 채팅모드</p>
          <Image
            src={InterviewChattingImage}
            alt=""
            className="w-[70rem]"
          />
        </div>

        <div className="flex flex-col justify-center text-[4rem] font-bold">
          <h2>
            <span className="text-primaries-primary">AI 면접관</span>의
          </h2>
          <h2>
            <span className="text-primaries-primary">꼬리 질문</span>으로
          </h2>
          <h2>생동감 있는 연습</h2>
        </div>
      </div>
    </div>
  );
};

export default MainChattingScreenSection;
