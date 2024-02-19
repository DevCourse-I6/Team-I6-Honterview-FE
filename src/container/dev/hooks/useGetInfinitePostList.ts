import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchPosts } from '../api';
import { ICharactersResponse } from '../types/Characters';

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
      return lastPage.results.length < allPages[0].results.length
        ? undefined
        : nextPage;
    },
    select: (selectData) => ({
      pages: selectData?.pages.flatMap((page) => page.results),
    }),
  });
};

export default useGetInfinitePostList;
