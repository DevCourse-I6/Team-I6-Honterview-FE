import { useState } from 'react';

import Select from '@/components/select';

const QuestionSort = () => {
  const [listSort, setListSort] = useState('최신순');
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
