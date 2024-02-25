'use client';

import { useState } from 'react';

import { Search } from '@/components/icon';
import Input from '@/components/input';
import Pagination from '@/components/pagination';
import { notify } from '@/components/toast';
import ListFilter from '@/container/questions/components/ListFilter';
import ListQuestions from '@/container/questions/components/ListQuestions';

const QuestionsListPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [listSort, setListSort] = useState('최신순');

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

  const printPageChange = (page: number) => {
    console.log(page);
  };

  return (
    <section>
      <div className="flex min-w-[40rem] flex-col gap-8 px-20 py-8">
        <div className="flex flex-col items-center gap-10 py-10">
          <h1 className="text-tripleLarge font-bold">질문검색</h1>
          <Input className="w-[50rem] gap-5 rounded-full pl-12 pr-5 ">
            <Input.Text placeholder="질문 내용을 검색하세요." />
            <div className="flex h-[40px] w-[40px] flex-none cursor-pointer items-center justify-center rounded-full bg-primaries-primary">
              <Search className="text-white " />
            </div>
          </Input>
        </div>

        <ListFilter
          handleTagClick={handleTagClick}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <ListQuestions
          data={[{ content: '인생이란 무엇일까요', name: 'Next.js' }]}
          listSort={listSort}
          setListSort={setListSort}
          handleTagClick={handleTagClick}
        />
      </div>
      <Pagination
        className="justify-center pb-10"
        defaultPage={5}
        limit={20}
        total={423}
        onPageChange={printPageChange}
      >
        <Pagination.PrevButton />
        <Pagination.PageButtons />
        <Pagination.NextButton />
      </Pagination>
    </section>
  );
};

export default QuestionsListPage;
