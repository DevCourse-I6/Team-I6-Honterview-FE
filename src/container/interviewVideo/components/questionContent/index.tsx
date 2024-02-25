import Button from '@/components/button';

const QuestionContent = () => {
  const questionText =
    '왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜왜지원왜지원왜지원왜지원왜원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원왜지원원왜지원원왜지원원왜지원';

  return (
    <div className="flex h-1/2 flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-large font-semibold md:text-doubleLarge">
          질문 내용
        </h3>
        <Button
          style={{ width: 'auto', height: 'auto', padding: '0.5rem 0.5rem' }}
          className="text-[1rem] md:text-medium"
        >
          현재 꼬리 질문 변경
        </Button>
      </div>
      <p className="grow overflow-y-auto rounded-2xl bg-background-20 px-4 py-2 text-medium font-medium">
        {questionText}
      </p>
    </div>
  );
};

export default QuestionContent;
