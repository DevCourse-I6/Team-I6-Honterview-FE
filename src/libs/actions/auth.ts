'use server';

import { redirect } from 'next/navigation';

import { IAdminAuthState } from '@/app/admin/(auth)/types';
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

export const signUpAdmin = async (_: IAdminAuthState, formData: FormData) => {
  const signUpData = {
    name: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const response = await apiServer.post('api/v1/auth/admin/signUp', {
    body: JSON.stringify(signUpData),
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      status: response.status,
      message: data.errorMessage,
    };
  }

  return {
    status: 'ok',
    message: data.data,
  };
};
