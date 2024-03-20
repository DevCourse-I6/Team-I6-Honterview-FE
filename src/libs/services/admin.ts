import { apiClient } from '@/utils/apiClient';

import { reissueAccessToken } from '../actions/auth';
import {
  ICreateCategoryPayload,
  ICreateQuestionPayload,
  IPatchCategoryPayload,
  IPatchQuestionPayload,
} from '../types/payload';
import {
  ICreateCategory,
  ICreateQuestion,
  IGetCategories,
  IPatchCategory,
} from '../types/response';

export const createQuestionAdmin = async (
  body: ICreateQuestionPayload,
): Promise<ICreateQuestion> => {
  const response = await apiClient.post(`api/v1/admin/questions`, {
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  if (response.status === 401) {
    return reissueAccessToken(() => createQuestionAdmin(body));
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getCategoriesAdmin = async (): Promise<IGetCategories> => {
  const response = await apiClient.get(`api/v1/admin/categories`, {
    cache: 'no-store',
  });

  if (response.status === 401) {
    return reissueAccessToken(() => getCategoriesAdmin());
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const createCategoryAdmin = async (
  body: ICreateCategoryPayload,
): Promise<ICreateCategory> => {
  const response = await apiClient.post(`api/v1/admin/categories`, {
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  if (response.status === 401) {
    return reissueAccessToken(() => createCategoryAdmin(body));
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const deleteCategoryAdmin = async (
  categoryId: number,
): Promise<undefined> => {
  const response = await apiClient.delete(
    `api/v1/admin/categories/${categoryId}`,
    {
      cache: 'no-store',
    },
  );

  if (response.status === 401) {
    return reissueAccessToken(() => deleteCategoryAdmin(categoryId));
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

export const patchCategoryAdmin = async (
  categoryId: number,
  body: IPatchCategoryPayload,
): Promise<IPatchCategory> => {
  const response = await apiClient.patch(
    `api/v1/admin/categories/${categoryId}`,
    {
      body: JSON.stringify(body),
      cache: 'no-store',
    },
  );

  if (response.status === 401) {
    return reissueAccessToken(() => patchCategoryAdmin(categoryId, body));
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const patchQuestionAdmin = async (
  questionId: number,
  body: IPatchQuestionPayload,
): Promise<undefined> => {
  const response = await apiClient.patch(
    `api/v1/admin/questions/${questionId}`,
    {
      body: JSON.stringify(body),
      cache: 'no-store',
    },
  );

  if (response.status === 401) {
    return reissueAccessToken(() => patchQuestionAdmin(questionId, body));
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

export const deleteQuestionAdmin = async (
  questionId: number,
): Promise<undefined> => {
  const response = await apiClient.delete(
    `api/v1/admin/questions/${questionId}`,
    {
      cache: 'no-store',
    },
  );

  if (response.status === 401) {
    return reissueAccessToken(() => deleteQuestionAdmin(questionId));
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};
