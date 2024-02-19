import { fetchPosts } from '@/container/dev/api';
import PostList from '@/container/dev/components/PostList';

const InfiniteScroll = async () => {
  const initialData = await fetchPosts(1);

  return <PostList initialData={initialData} />;
};

export default InfiniteScroll;
