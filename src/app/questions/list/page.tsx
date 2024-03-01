'use client';

import { useState } from 'react';

import Pagination from '@/components/pagination';
import { notify } from '@/components/toast';
import QuestionFilter from '@/container/questions/components/questionFilter';
import QuestionInput from '@/container/questions/components/questionInput';
import QuestionList from '@/container/questions/components/questionList';

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
        <QuestionInput />

        <QuestionFilter
          handleTagClick={handleTagClick}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <QuestionList handleTagClick={handleTagClick} />
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
