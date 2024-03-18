import '../style.css';

import QuestionListImage from '@/container/main/images/questionListImage.png';

import ChatBubble from '../../chatBubble';
import MainQuestionsSection from '../components/MainQuestionsSection';

const MainQuestionListSection = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-blue-100 to-white">
      <MainQuestionsSection
        imageSrc={QuestionListImage}
        title1="다양한 개발 분야"
        title2="면접 질문을 한눈에"
        imageTitle="면접 질문"
      >
        <ul className="chatbubble-infinite-scroll flex justify-items-center gap-[0.5rem] laptop:hidden">
          <ChatBubble>호이스팅(hoisting)에 대해서 설명해주세요</ChatBubble>
          <ChatBubble>네트워크에서 OSI 7계층이란 무엇인가요?</ChatBubble>
          <ChatBubble>
            Spring의 Autowiring 과정에 대해서 설명해주세요
          </ChatBubble>
          <ChatBubble>
            안드로이드의 Thread간 통신방법에 대해 설명해주세요
          </ChatBubble>
          <ChatBubble>Swift에서 Class와 Struct의 차이는 무엇인가요?</ChatBubble>
        </ul>
        <ul
          className="chatbubble-infinite-scroll flex justify-items-center gap-[0.5rem] laptop:hidden"
          aria-hidden
        >
          <ChatBubble>호이스팅(hoisting)에 대해서 설명해주세요</ChatBubble>
          <ChatBubble>네트워크에서 OSI 7계층이란 무엇인가요?</ChatBubble>
          <ChatBubble>
            Spring의 Autowiring 과정에 대해서 설명해주세요
          </ChatBubble>
          <ChatBubble>
            안드로이드의 Thread간 통신방법에 대해 설명해주세요
          </ChatBubble>
          <ChatBubble>Swift에서 Class와 Struct의 차이는 무엇인가요?</ChatBubble>
        </ul>

        <ul className="hidden laptop:flex">
          <ChatBubble className="chat_bubble1 left-[15rem] top-[5rem]">
            호이스팅(hoisting)에 대해서 설명해주세요
          </ChatBubble>
          <ChatBubble className="chat_bubble2 bottom-[15rem] left-[5rem]">
            네트워크에서 OSI 7계층이란 무엇인가요?
          </ChatBubble>
          <ChatBubble className="chat_bubble3 right-[15rem] top-[10rem]">
            Spring의 Autowiring 과정에 대해서 설명해주세요
          </ChatBubble>
          <ChatBubble className="chat_bubble4 bottom-[5rem] left-[45%]">
            안드로이드의 Thread간 통신방법에 대해 설명해주세요
          </ChatBubble>
          <ChatBubble className="chat_bubble5 bottom-[15rem] right-[10rem]">
            Swift에서 Class와 Struct의 차이는 무엇인가요?
          </ChatBubble>
        </ul>
      </MainQuestionsSection>
    </div>
  );
};

export default MainQuestionListSection;
