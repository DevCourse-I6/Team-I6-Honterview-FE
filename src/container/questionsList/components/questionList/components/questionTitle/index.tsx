import Link from 'next/link';

import { QuestionTitleProps } from '../../types';

const QuestionTitle = ({ content }: QuestionTitleProps) => {
  return (
    <Link
      href="/"
      className="text-doubleLarge font-semibold"
    >
      <span className="text-text-40">Q.</span> {content}
    </Link>
  );
};

export default QuestionTitle;
