import Image from 'next/image';

import QuestionListImage from '@/container/main/images/questionListImage.png';

import ChatBubble from '../chatBubble';

const MainQuestionListSection = () => {
  return (
    <div className="relative flex h-screen items-center justify-center gap-[5rem] bg-gradient-to-b from-blue-100 to-white">
      <ChatBubble className="chat_bubble1 left-[15rem] top-[5rem]">
        호이스팅(hoisting)에 대해서 설명해주세요
      </ChatBubble>
      <ChatBubble className="chat_bubble2 bottom-[15rem] left-[5rem]">
        네트워크에서 OSI 7계층이란 무엇인가요?
      </ChatBubble>
      <ChatBubble className="chat_bubble3 right-[15rem] top-[10rem]">
        Spring에서 Autowiring 과정에 대해서 설명해주세요
      </ChatBubble>
      <ChatBubble className="chat_bubble4 bottom-[5rem] left-[45%]">
        안드로이드의 Thread간 통신방법에 대해 설명해주세요
      </ChatBubble>
      <ChatBubble className="chat_bubble5 bottom-[15rem] right-[10rem]">
        Swift에서 Class와 Struct의 차이는 무엇인가요?
      </ChatBubble>
      <h2 className="text-[5rem] font-bold">다양한 개발 분야</h2>
      <div className="flex flex-col gap-[0.5rem]">
        <p className="text-medium text-text-60">면접 질문</p>
        <Image
          src={QuestionListImage}
          alt=""
          className="w-[50rem] shadow-xl backdrop-blur-xl"
        />
      </div>

      <h2 className="text-[5rem] font-bold">면접 질문을 한눈에</h2>
    </div>
  );
};

export default MainQuestionListSection;
