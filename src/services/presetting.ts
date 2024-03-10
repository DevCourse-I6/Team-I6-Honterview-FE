import { notify } from '@/components/toast';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAPI = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
      method: 'GET',
    });

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

export const getCategoryList = () => getAPI('api/v1/categories');
export const getQuestionListByCategories = (categories: string) =>
  getAPI(`api/v1/questions/by-category?categories=${categories}`);
