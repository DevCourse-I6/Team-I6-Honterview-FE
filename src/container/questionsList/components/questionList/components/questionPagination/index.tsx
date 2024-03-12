import Pagination from '@/components/pagination';

const QuestionPageination = () => {
  return (
    <Pagination
      className="justify-center pb-10"
      defaultPage={1}
      limit={4}
      total={5}
      onPageChange={() => {}}
    >
      <Pagination.PrevButton />
      <Pagination.PageButtons />
      <Pagination.NextButton />
    </Pagination>
  );
};

export default QuestionPageination;
