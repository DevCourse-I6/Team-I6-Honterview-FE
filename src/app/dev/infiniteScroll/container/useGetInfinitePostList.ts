import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchPosts } from './api';
import { ICharactersResponse } from './types';

const useGetInfinitePostList = ({
  initialData,
}: {
  initialData: ICharactersResponse;
}) => {
  return useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam }) => fetchPosts(pageParam),
    initialPageParam: 1,
    initialData: { pages: [initialData], pageParams: [] },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.results.length === 0 ? undefined : nextPage;
    },
    select: (selectData) => ({
      pages: selectData?.pages.flatMap((page) => page.results),
    }),
  });
};

export default useGetInfinitePostList;
