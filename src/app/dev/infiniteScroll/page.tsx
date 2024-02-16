import { fetchPosts } from './container/api';
import PostList from './container/PostList';

const InfiniteScroll = async () => {
  const initialData = await fetchPosts(1);

  return <PostList initialData={initialData} />;
};

export default InfiniteScroll;
