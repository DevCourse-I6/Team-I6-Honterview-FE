import './style.css';

import { twMerge } from 'tailwind-merge';

import { ChatBubbleProps } from './type';

const ChatBubble = ({ children, className, isAnswer }: ChatBubbleProps) => {
  return (
    <li
      className={twMerge(
        `leading-1.5 static z-10 h-[13rem] w-[20rem] rounded-[3rem] tablet:h-[15rem] tablet:w-[25rem] laptop:absolute laptop:block laptop:w-[30rem] laptop:rounded-ss-[0rem] ${isAnswer ? 'bg-pink-600' : 'bg-primaries-primary'}  ${className}`,
      )}
    >
      <div className="flex flex-col gap-[1rem] p-[2rem] text-[1.2rem] text-white tablet:text-[1.5rem] laptop:text-[1.8rem]">
        <p>{isAnswer ? 'A' : 'Q'}.</p>
        <p>{children}</p>
      </div>
    </li>
  );
};

export default ChatBubble;
