import { useRouter } from 'next/navigation';
import { useEffect, useTransition } from 'react';

import {
  getUploadUrl,
  patchInterviewStatus,
  postInterview,
} from '@/libs/actions/interview';
import { putUploadMediaBlob } from '@/libs/services/interview';
import {
  useAnswerContent,
  useInterview,
  useMediaBlobUrl,
  useProgressingTime,
  useQuestionContent,
  useSubmitStatus,
  useTimeout,
} from '@/stores/interviewProgress';

const useSubmitInterview = () => {
  const { id, currentQuestionIndex, questionCount, limitTimer } =
    useInterview();
  const { timeout } = useTimeout();
  const { mediaBlobUrl } = useMediaBlobUrl();
  const { questionContent } = useQuestionContent();
  const { answerContent } = useAnswerContent();
  const { progressingTime } = useProgressingTime();
  const { startSubmit, stopSubmit } = useSubmitStatus();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const submitInterview = async () => {
    await postInterview(id, {
      questionContent: questionContent ?? '',
      answerContent: answerContent ?? '',
      processingTime: progressingTime,
    });

    if (currentQuestionIndex + 1 === questionCount) {
      const { data } = await getUploadUrl(id);
      const { uploadUrl } = data;

      await Promise.all([
        putUploadMediaBlob(uploadUrl, mediaBlobUrl),
        patchInterviewStatus(id),
      ]);

      return router.push(`/interview/result/${id}`);
    }

    router.refresh();
  };

  const handleSubmit = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    startTransition(async () => submitInterview());
  };

  useEffect(() => {
    if (isPending) {
      return startSubmit();
    }

    stopSubmit();
  }, [isPending, startSubmit, stopSubmit]);

  useEffect(() => {
    if (timeout && progressingTime === limitTimer) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeout, limitTimer, progressingTime]);

  return { isPending, handleSubmit };
};

export default useSubmitInterview;
