import { notify } from '@/components/toast';
import {
  createInterviewByChat,
  createInterviewByVideo,
  createQuestion,
} from '@/services/presetting';

import usePresettingDataStore from './stores/usePresettingDataStore';

const usePresetting = () => {
  const {
    firstQuestion,
    firstQuestionTags,
    setFirstQuestion,
    interviewType,
    questionCount,
    answerTime,
  } = usePresettingDataStore();

  const createFirstQuestion = async () => {
    if (!firstQuestion) {
      notify('warning', '첫 질문을 올바르게 선택해주세요');
      return;
    }

    return createQuestion(
      firstQuestion.name,
      firstQuestionTags.map(({ id }) => id as number),
    )
      .then(({ data }) => {
        setFirstQuestion({
          id: data.id,
          name: data.content,
        });
        return data.id;
      })
      .catch((e) => notify('error', e.message));
  };

  const createNewInterview = async (firstQuestionId: number) => {
    if (!interviewType || !questionCount) {
      notify('warning', '설정 값은 필수입니다');
      return;
    }

    if (interviewType === 'TEXT') {
      return createInterviewByChat({
        questionCount,
        firstQuestionId,
      })
        .then((res) => {
          return res.data;
        })
        .catch((e) => notify('error', e.message));
    }

    return createInterviewByVideo({
      questionCount,
      answerTime,
      firstQuestionId,
    })
      .then(({ data }) => {
        return data;
      })
      .catch((e) => notify('error', e.message));
  };

  return { createFirstQuestion, createNewInterview };
};

export default usePresetting;
