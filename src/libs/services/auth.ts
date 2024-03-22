import { apiClient } from '@/utils/apiClient';
import { apiServer } from '@/utils/apiServer';

export const getUserAuth = async () => {
  const response = await apiServer.get('api/v1/auth/me', {
    cache: 'no-store',
    next: { tags: ['userAuth'] },
  });

  if (response.status === 401) {
    return { status: 401, data: null };
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return { status: 200, data };
};

export const logOut = async () => {
  const { status, ok } = await apiClient.post('api/v1/auth/logout');

  if (status === 400) {
    return;
  }

  // if (status === 401) {
  //   return reissueAccessToken<Promise<void>, void>(logOut, () =>
  //     revalidateTag('userAuth'),
  //   );
  // }

  if (!ok) {
    throw new Error(`HTTP error! status: ${status}`);
  }
};
