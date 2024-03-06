import './style.css';

import { twMerge } from 'tailwind-merge';

import { ChatBubbleProps } from './type';

const ChatBubble = ({ children, className, isAnswer }: ChatBubbleProps) => {
  return (
    <div
      className={twMerge(
        `leading-1.5 absolute z-10 h-[15rem] w-[30rem] rounded-e-[3rem] rounded-es-[3rem] ${isAnswer ? 'bg-pink-600' : 'bg-primaries-primary'}  ${className}`,
      )}
    >
      <div className="flex flex-col gap-[1rem] p-[2rem] text-large text-white">
        <p>{isAnswer ? 'A' : 'Q'}.</p>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
