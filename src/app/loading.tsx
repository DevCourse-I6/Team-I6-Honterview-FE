import { SpinnerIcon } from '@/components/icon';

const PageLoading = () => {
  return (
    <div
      className="flex h-screen w-screen items-center justify-center"
      role="status"
    >
      <SpinnerIcon />
    </div>
  );
};

export default PageLoading;
