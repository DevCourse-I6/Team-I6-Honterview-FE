import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/button';

const QuestionContent = () => {
  const testList = [
    { left: '님' },
    { right: '네?' },
    { left: '님' },
    { right: '네?' },
    { left: '님' },
    { right: '네?' },
    { left: '님' },
    { right: '네?' },
    { left: '님' },
  ];

  return (
    <div className="flex w-full flex-grow flex-col gap-4 overflow-scroll md:w-1/2">
      {testList.map((item) => (
        <div
          key={uuidv4()}
          className={`w-fit rounded-lg border bg-background-20 px-4 py-2 text-[1.6rem] ${
            item.left ? 'text-left' : 'self-end text-right'
          }`}
        >
          {item.left || item.right}
        </div>
      ))}
      <Button className="w-fit px-4 py-2">현재 꼬리 질문 변경</Button>
    </div>
  );
};

export default QuestionContent;
