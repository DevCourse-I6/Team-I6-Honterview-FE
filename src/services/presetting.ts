import { notify } from '@/components/toast';
import { apiClient } from '@/utils/apiClient';

type PresettingMehodType = 'GET' | 'POST' | 'PATCH' | 'DELETE';

interface CreateInterviewByChatProps {
  questionCount: number;
  firstQuestionId: number;
}

interface CreateInterviewByVideoProps {
  questionCount: number;
  answerTime: { minute: number; second: number };
  firstQuestionId: number;
}

export const presettingAPI = async (
  method: PresettingMehodType,
  url: string,
  options?: RequestInit,
) => {
  try {
    let response;

    switch (method) {
      case 'GET':
        response = await apiClient.get(url, options);
        break;
      case 'POST':
        response = await apiClient.post(url, options);
        break;
      case 'PATCH':
        response = await apiClient.patch(url, options);
        break;
      case 'DELETE':
        response = await apiClient.delete(url, options);
        break;
      default:
        response = await apiClient.get(url, options);
        break;
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      notify('error', error.message);
    } else {
      notify('error', String(error));
    }
  }
};

export const getCategoryList = () => presettingAPI('GET', 'api/v1/categories');
export const getQuestionListByCategories = (categories: string) =>
  presettingAPI('GET', `api/v1/questions/by-category?categories=${categories}`);
export const createQuestion = (content: string, categoryIds: number[]) =>
  presettingAPI('POST', 'api/v1/questions', {
    body: JSON.stringify({
      content,
      categoryIds,
    }),
  });

export const createInterviewByChat = ({
  questionCount,
  firstQuestionId,
}: CreateInterviewByChatProps) => {
  return presettingAPI('POST', 'api/v1/interviews', {
    body: JSON.stringify({
      answerType: 'TEXT',
      questionCount,
      questionId: firstQuestionId,
    }),
  });
};

export const createInterviewByVideo = ({
  questionCount,
  answerTime,
  firstQuestionId,
}: CreateInterviewByVideoProps) => {
  const { minute, second } = answerTime!;

  return presettingAPI('POST', 'api/v1/interviews', {
    body: JSON.stringify({
      answerType: 'RECORD',
      questionCount,
      timer: minute * 60 + second,
      questionId: firstQuestionId,
    }),
  });
};
