'use server';

import { redirect } from 'next/navigation';

import { apiServer } from '@/utils/apiServer';

export const reissueAccessToken = async <T>(callback: () => Promise<T>) => {
  const response = await apiServer.post('api/v1/auth/reissue');

  if (response.status === 401) {
    return redirect('/auth/login');
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return callback();
};
