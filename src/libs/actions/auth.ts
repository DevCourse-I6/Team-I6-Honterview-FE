'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { IAdminAuthState } from '@/app/admin/(auth)/types';
import { apiServer } from '@/utils/apiServer';

export const reissueAccessToken = async <T, F>(
  callback: () => T,
  onFail?: () => F,
) => {
  const { status, ok } = await apiServer.post('api/v1/auth/reissue');

  if (status === 400 || status === 401) {
    if (onFail) {
      return onFail();
    }

    revalidateTag('userAuth');
    redirect('/auth/login');
  }

  if (!ok) {
    throw new Error(`HTTP error! status: ${status}`);
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

export const logInAdmin = async (_: IAdminAuthState, formData: FormData) => {
  const logInData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const response = await apiServer.post('api/v1/auth/admin/login', {
    body: JSON.stringify(logInData),
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      status: response.status,
      message: data.errorMessage,
    };
  }

  cookies().set('accessToken', data.data.accessToken);
  cookies().set('refreshToken', data.data.refreshToken);

  return {
    status: 'ok',
    message: '로그인 성공',
  };
};
