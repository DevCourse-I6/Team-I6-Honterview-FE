import { apiClient } from '@/utils/apiClient';

import { TMethod } from './types';

const fetchAPI = async (
  url: string,
  method: TMethod = 'get',
  options: RequestInit = {},
) => {
  try {
    let response;
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      cache: 'no-store',
    };

    switch (method) {
      case 'post':
        response = await apiClient.post(url, config);
        break;
      case 'delete':
        response = await apiClient.delete(url, config);
        break;
      case 'patch':
        response = await apiClient.patch(url, config);
        break;
      default:
        response = await apiClient.get(url, config);
    }

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
