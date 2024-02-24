import {
  AnotherQuestions,
  Answer,
  TitleWithInterviewStart,
} from '@/container/questions/components';

const Page = () => {
  return (
    <div className="m-auto max-w-[800px]">
      <div className=" mb-20">
        <TitleWithInterviewStart />
      </div>
      <div className="flex flex-col gap-16">
        <Answer />
        <Answer />
        <Answer />
        <Answer isBlur />
      </div>
      <hr className="my-20" />
      <AnotherQuestions />
    </div>
  );
};

export default Page;
