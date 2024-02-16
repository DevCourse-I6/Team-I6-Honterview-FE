'use client';

import Spinner from '@/components/spinner';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import { ICharactersResponse } from './types';
import useGetInfinitePostList from './useGetInfinitePostList';

const PostList = ({ initialData }: { initialData: ICharactersResponse }) => {
  const { data, hasNextPage, fetchNextPage, isFetching } =
    useGetInfinitePostList({ initialData });

  const target = useIntersectionObserver({ hasNextPage, fetchNextPage });

  return (
    <>
      {data?.pages.map((page) => (
        <img
          key={page.id}
          src={page.image}
          alt={page.name}
        />
      ))}
      <div ref={target} />
      {isFetching && <Spinner />}
    </>
  );
};

export default PostList;
