import Spinner from '@/components/spinner';

const Loading = () => {
  return (
    <div
      className="flex h-screen w-screen items-center justify-center"
      role="status"
    >
      <Spinner />
    </div>
  );
};

export default Loading;
