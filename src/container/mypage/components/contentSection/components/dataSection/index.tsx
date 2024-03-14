import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import BookmarkItem from './components/BookmarkItem';
import ResultItem from './components/ResultItem';
import { dummyBookmarks, dummyInterview } from './dummyData';
import { ContentType, DataSectionProps } from './type';

const DataSection = ({ activeMenu }: DataSectionProps) => {
  const [contents, setContents] = useState<ContentType[] | null>(null);

  useEffect(() => {
    setContents([]);
    if (activeMenu === 'result') {
      const results = dummyInterview.data.data.map(
        ({ interviewId, firstQuestionContent, categoryNames, createdAt }) => ({
          id: interviewId,
          title: firstQuestionContent,
          categoryList: categoryNames,
          createdDate: createdAt,
        }),
      );
      setContents(results.slice(0, 5));
      return;
    }

    const results = dummyBookmarks.data.data.map(
      ({ id, content, categoryNames }) => ({
        id,
        title: content,
        categoryList: categoryNames,
      }),
    );
    setContents(results.slice(0, 10));
  }, [activeMenu]);

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-[1rem] p-[1rem] pb-[3rem] tablet:w-[50rem]">
      {contents?.map((content) => {
        return (
          <div
            className="flex w-full flex-col gap-[1rem] rounded-xl border border-dotted"
            key={uuidv4()}
          >
            {activeMenu === 'result' ? (
              <ResultItem
                id={content.id}
                title={content.title}
                categoryList={content.categoryList}
                createdDate={content.createdDate}
              />
            ) : (
              <BookmarkItem
                id={content.id}
                title={content.title}
                categoryList={content.categoryList}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DataSection;
