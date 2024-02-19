'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Spinner from '@/components/spinner';

import useGetInfinitePostList from '../hooks/useGetInfinitePostList';
import { ICharactersResponse } from '../types/Characters';

const PostList = ({ initialData }: { initialData: ICharactersResponse }) => {
  const { data, hasNextPage, fetchNextPage, isLoading, isFetching } =
    useGetInfinitePostList({ initialData });
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView && hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isLoading]);

  return (
    <>
      {data?.pages.map((page) => (
        <img
          key={page.id}
          src={page.image}
          alt={page.name}
        />
      ))}
      <div ref={ref} />
      {(isLoading || isFetching) && <Spinner />}
    </>
  );
};

export default PostList;
