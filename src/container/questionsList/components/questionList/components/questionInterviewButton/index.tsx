'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/button';

const QuestionInterviewButton = ({ id }: { id: string }) => {
  const router = useRouter();
  return (
    <Button
      className=" h-[4rem] flex-none px-6 py-6"
      onClick={() => router.push(`/interview/presetting/${id}`)}
    >
      모의 면접 시작
    </Button>
  );
};

export default QuestionInterviewButton;
