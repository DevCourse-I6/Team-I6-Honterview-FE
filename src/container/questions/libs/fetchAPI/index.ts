import { apiClient } from '@/utils/apiClient';

const fetchAPI = async (url: string) => {
  try {
    const response = await apiClient.get(url, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error(String(error));
  }
};

export default fetchAPI;
