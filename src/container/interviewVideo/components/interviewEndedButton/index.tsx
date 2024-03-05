import Link from 'next/link';

import { IProps } from './types';

const InterviewEndedButton = ({ interviewId }: IProps) => {
  return (
    <Link
      className="h-auto w-auto rounded-lg bg-primaries-primary px-[1rem] py-[0.5rem] text-small text-white md:text-medium"
      href={`/interview/result/${interviewId}`}
    >
      면접 종료
    </Link>
  );
};

export default InterviewEndedButton;
