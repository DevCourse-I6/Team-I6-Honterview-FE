'use client';

import { useState } from 'react';

import Pagination from '@/components/pagination';
import { notify } from '@/components/toast';
import ListFilter from '@/container/questions/components/ListFilter';
import ListInput from '@/container/questions/components/listInput';
import ListQuestions from '@/container/questions/components/ListQuestions';

const QuestionsListPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag),
      );
    } else if (selectedTags.length < 3) {
      setSelectedTags([...selectedTags, tag]);
    } else if (selectedTags.length >= 3) {
      notify('warning', '3개 이상 선택이 불가합니다');
    }
  };

  return (
    <section>
      <div className="flex min-w-[40rem] flex-col gap-8 px-20 py-8">
        <ListInput />

        <ListFilter
          handleTagClick={handleTagClick}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <ListQuestions handleTagClick={handleTagClick} />
      </div>
      <Pagination
        className="justify-center pb-10"
        defaultPage={5}
        limit={20}
        total={423}
        onPageChange={() => {}}
      >
        <Pagination.PrevButton />
        <Pagination.PageButtons />
        <Pagination.NextButton />
      </Pagination>
    </section>
  );
};

export default QuestionsListPage;
