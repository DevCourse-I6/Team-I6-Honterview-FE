'use client';

import Link from 'next/link';

import { useInterview } from '@/stores/interviewProgress';

const InterviewEndedButton = () => {
  const { id } = useInterview();

  return (
    <Link
      className="flex h-auto w-auto items-center rounded-lg bg-primaries-primary px-[1rem] py-[0.5rem] text-medium text-white"
      href={`/interview/result/${id}`}
    >
      면접 종료
    </Link>
  );
};

export default InterviewEndedButton;
