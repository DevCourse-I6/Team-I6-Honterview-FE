import Pagination from '@/components/pagination';

import { QuestionPageinationProps } from '../../types';

const QuestionPageination = ({
  totalSize,
  nowPage,
  setNowPage,
}: QuestionPageinationProps) => {
  const pageHandler = (page: number) => {
    setNowPage(page);
  };

  return (
    <Pagination
      className="justify-center pb-10"
      defaultPage={nowPage}
      limit={5}
      total={totalSize}
      onPageChange={pageHandler}
    >
      <Pagination.PrevButton />
      <Pagination.PageButtons />
      <Pagination.NextButton />
    </Pagination>
  );
};

export default QuestionPageination;
