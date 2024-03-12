'use client';

import { useEffect, useState } from 'react';

import { notify } from '@/components/toast';
import QuestionFilter from '@/container/questionsList/components/questionFilter';
import QuestionInput from '@/container/questionsList/components/questionInput';
import QuestionList from '@/container/questionsList/components/questionList';
import QuestionPageination from '@/container/questionsList/components/questionList/components/questionPagination';
import { getCategories, getQuestionsList } from '@/libs/services/questionsList';

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
      const response = await getQuestionsList(1, 5, '', '', 'recent');
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
      <QuestionPageination />
    </section>
  );
};

export default QuestionsListPage;
