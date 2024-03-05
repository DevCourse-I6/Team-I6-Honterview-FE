'use client';

import { useEffect, useState } from 'react';

import { getCategories } from '@/app/api/questionsList/getCategories';
import { getQuestionsList } from '@/app/api/questionsList/getQuestionsList';
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

  const [categories, setCategories] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    const categoriesData = async () => {
      const response = await getCategories();
      setCategories(response.data);
    };
    const questionsListData = async () => {
      const response = await getQuestionsList();
      setQuestionsList(response.data.data);
    };

    categoriesData();
    questionsListData();
  }, []);

  return (
    <section>
      <div className="flex min-w-[40rem] flex-col gap-8 px-20 py-8">
        <QuestionInput />
        <QuestionFilter
          handleTagClick={handleTagClick}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          categories={categories}
        />
        <QuestionList
          handleTagClick={handleTagClick}
          questionsList={questionsList}
        />
      </div>
      <Pagination
        className="justify-center pb-10"
        defaultPage={1}
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
