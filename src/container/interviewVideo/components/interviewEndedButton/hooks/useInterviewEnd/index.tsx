import { useRouter } from 'next/navigation';
import { useEffect, useTransition } from 'react';

import { patchInterviewStatus } from '@/libs/actions/interview';
import { useInterview, useLoadingStatus } from '@/stores/interviewProgress';

const useInterviewEnd = () => {
  const { id } = useInterview();
  const { isLoading, startLoading } = useLoadingStatus();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleInterviewEnd = () => {
    startTransition(async () => {
      patchInterviewStatus(id);
      router.push(`/interview/result/${id}`);
    });
  };

  useEffect(() => {
    if (isPending) {
      startLoading();
    }
  }, [isPending, startLoading]);

  return { disabled: isPending || isLoading, handleInterviewEnd };
};

export default useInterviewEnd;
