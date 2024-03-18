import { IResponseGetUserAuth } from '@/types/Response/auth';
import { apiServer } from '@/utils/apiServer';

import { reissueAccessToken } from '../actions/auth';

export const getUserAuth = async (): Promise<IResponseGetUserAuth | null> => {
  const response = await apiServer.get('api/v1/auth/me', {
    cache: 'no-store',
    next: { tags: ['userAuth'] },
  });

  if (response.status === 401) {
    return reissueAccessToken<Promise<IResponseGetUserAuth | null>, null>(
      getUserAuth,
      () => null,
    );
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
