import Button from '@/components/button';

const QuestionContent = () => {
  const questionText =
    '왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요왜 지원했나요';

  return (
    <div className="flex basis-3/6 flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-extraLarge font-semibold md:text-tripleLarge">
          질문 내용
        </h3>
        <Button
          style={{ width: 'auto', height: 'auto', padding: '0.5rem 1rem' }}
          className="text-large"
        >
          현재 꼬리 질문 변경
        </Button>
      </div>
      <p className="max-h-[11.6rem] grow overflow-y-auto rounded-2xl bg-background-20 p-6 text-large font-medium md:max-h-[25.8rem]">
        {questionText}
      </p>
    </div>
  );
};

export default QuestionContent;
