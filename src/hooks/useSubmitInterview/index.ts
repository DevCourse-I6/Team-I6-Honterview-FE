import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { getUploadUrl, postInterview } from '@/libs/actions/interview';
import { postUploadMediaBlob } from '@/libs/services/interview';
import {
  useAnswerContent,
  useInterview,
  useMediaBlobUrl,
  useProgressingTime,
  useQuestionContent,
} from '@/stores/interviewProgress';

const useSubmitInterview = () => {
  const { id, currentQuestionIndex, questionCount } = useInterview();
  const { mediaBlobUrl } = useMediaBlobUrl();
  const { questionContent } = useQuestionContent();
  const { answerContent } = useAnswerContent();
  const { progressingTime } = useProgressingTime();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const submitInterview = () => {
    startTransition(async () => {
      const { data } = await getUploadUrl(id);
      const { videoId, uploadUrl } = data;

      await Promise.all([
        postUploadMediaBlob(uploadUrl, mediaBlobUrl),
        postInterview(id, {
          questionContent: questionContent ?? '',
          answerContent: answerContent ?? '',
          videoId,
          processingTime: progressingTime,
        }),
      ]);

      if (currentQuestionIndex + 1 === questionCount) {
        return router.push(`/interview/result/${id}`);
      }

      router.refresh();
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    submitInterview();
  };

  return { isPending, submitInterview, handleSubmit };
};

export default useSubmitInterview;
