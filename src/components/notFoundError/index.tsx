import { useRouter } from 'next/navigation';

import Button from '../button';

const NotFoundError = () => {
  const route = useRouter();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[1rem]">
      <h1 className="text-[2rem]">존재하지 않는 페이지입니다</h1>
      <Button
        className="p-[1rem]"
        onClick={() => route.push('/')}
      >
        메인으로
      </Button>
    </div>
  );
};

export default NotFoundError;
