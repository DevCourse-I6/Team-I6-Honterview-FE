import Link from 'next/link';

import { QuestionTitleProps } from '../../types';

const QuestionTitle = ({ content }: QuestionTitleProps) => {
  return (
    <Link
      href="/"
      className="mr-[3rem] text-doubleLarge font-semibold"
    >
      <div className="flex items-start">
        <span className="text-text-40">Q.</span>
        <span className="line-clamp-2 overflow-hidden text-ellipsis break-words px-3">
          {content}
        </span>{' '}
      </div>
    </Link>
  );
};

export default QuestionTitle;
