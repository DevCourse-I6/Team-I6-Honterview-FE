import { notify } from '@/components/toast';
import { reissueAccessToken } from '@/libs/actions/auth';
import { apiClient } from '@/utils/apiClient';

type MethodType = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export const mypageAPI = async (
  method: MethodType,
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

    if (response.status === 401) {
      reissueAccessToken(() => mypageAPI(method, url, options));
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

export const getMyInterview = (page: number) =>
  mypageAPI('GET', `api/v1/mypage/interviews?page=${page}`);
export const getMyBookmarkQuestions = (page: number) =>
  mypageAPI('GET', `api/v1/mypage/bookmarks?page=${page}`);
export const getMyInfo = () => mypageAPI('GET', 'api/v1/mypage/me');
export const editMyNickname = (nickname: string) =>
  mypageAPI('PATCH', 'api/v1/mypage/me', {
    body: JSON.stringify({
      nickname,
    }),
  });
