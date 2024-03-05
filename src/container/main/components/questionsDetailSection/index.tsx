import Image from 'next/image';

import QuestionDetailImage from '@/container/main/images/questionDetailImage.png';

import ChatBubble from '../chatBubble';

const MainQuestionDetailSection = () => {
  return (
    <div className="relative flex h-screen items-center justify-center gap-[5rem] bg-gradient-to-b from-pink-50 via-white via-70% to-white">
      <ChatBubble
        className="chat_bubble1 left-[15rem] top-[5rem]"
        isAnswer
      >
        호이스팅이란 변수 및 함수 선언문이 스코프 내의 최상단으로 끌어올려지는
        현상을 말합니다
      </ChatBubble>
      <ChatBubble
        className="chat_bubble2 bottom-[15rem] left-[5rem]"
        isAnswer
      >
        OSI 7계층은 네트워크 통신을 구성하는 요소들 7개의 계층으로 표준화 한
        것입니다
      </ChatBubble>
      <ChatBubble
        className="chat_bubble3 right-[15rem] top-[10rem]"
        isAnswer
      >
        컨테이너에서 타입을 이용해 의존 대상 객체를 검색하고, 할당할 수 있는 빈
        객체를 찾아 주입합니다
      </ChatBubble>
      <ChatBubble
        className="chat_bubble4 bottom-[5rem] left-[45%]"
        isAnswer
      >
        두 개 이상의 스레드를 사용할 때의 동기화 이슈를 차단하기 위해 Looper와
        Handler를 사용합니다
      </ChatBubble>
      <ChatBubble
        className="chat_bubble5 bottom-[15rem] right-[10rem]"
        isAnswer
      >
        Class는 참조 타입이고, Struct는 값 타입입니다
      </ChatBubble>
      <div>
        <h2 className="relative text-[5rem] font-bold">
          <p className="absolute right-[4rem] flex items-end text-extraSmall text-text-40">
            *
          </p>
          모범 답변과
        </h2>
        <p className=" text-text-40">* 좋아요를 많이 받은 다른 사용자의 답변</p>
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        <p className="text-medium text-text-60">면접 질문 상세</p>
        <Image
          src={QuestionDetailImage}
          alt=""
          className="w-[50rem]"
        />
      </div>
      <h2 className="text-[5rem] font-bold">꼬리 질문까지</h2>
    </div>
  );
};

export default MainQuestionDetailSection;
