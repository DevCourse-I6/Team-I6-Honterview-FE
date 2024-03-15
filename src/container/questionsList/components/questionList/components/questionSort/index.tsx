import Select from '@/components/select';

import { QuestionSortProps } from '../../types';

const QuestionSort = ({ listSort, setListSort }: QuestionSortProps) => {
  return (
    <div className="flex justify-end">
      <Select
        options={['최신순', '좋아요순']}
        value={listSort}
        className="py-1 "
        onChange={(e) => setListSort(e.target.value)}
      />
    </div>
  );
};

export default QuestionSort;
