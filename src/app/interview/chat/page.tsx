'use client';

import Button from '@/components/button';
import Input from '@/components/input';
import InterviewCamera from '@/container/interviewChat/components/interviewCamera';
import QuestionContent from '@/container/interviewChat/components/questionContent';

const InterviewChatPage = () => {
  return (
    <section className="flex h-[80rem] min-w-[40rem] flex-col gap-8  px-20 py-8">
      <div className="flex grow flex-col items-center gap-4 px-5 py-8">
        <InterviewCamera />
        <QuestionContent />
        <div className="w-full items-center rounded-2xl md:w-1/2">
          <Input className="w-full gap-[1rem] bg-white ">
            <Input.Text
              className="py-0"
              placeholder="궁금한 점을 검색해보세요."
            />
            <Button className="w-[8rem] px-4 py-2">보내기</Button>
          </Input>
        </div>
        <div className="flex justify-center gap-8">
          <Button className="px-4 py-2">면접 종료</Button>
        </div>
      </div>
    </section>
  );
};

export default InterviewChatPage;
