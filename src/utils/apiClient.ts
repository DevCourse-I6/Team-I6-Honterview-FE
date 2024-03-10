/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { cookies } from 'next/headers';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getAccessToken = () => {
  const accessToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('accessToken='))
    ?.split('=')[1];

  return accessToken || '';
};

const get = (url: string, options: RequestInit = {}) => {
  let accessToken = null;

  if (typeof window === 'undefined') {
    const cookieStore = cookies();

    accessToken = cookieStore.get('accessToken');
  }

  return fetch(`${API_BASE_URL}${url}`, {
    ...options,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
    credentials: 'include',
  });
};

const post = (url: string, options: RequestInit = {}) => {
  let accessToken = null;

  if (typeof window === 'undefined') {
    const cookieStore = cookies();
    accessToken = cookieStore.get('accessToken');
  }

  return fetch(`${API_BASE_URL}${url}`, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
    credentials: 'include',
  });
};

const put = (url: string, options: RequestInit = {}) => {
  let accessToken = null;

  if (typeof window === 'undefined') {
    const cookieStore = cookies();
    accessToken = cookieStore.get('accessToken');
  }

  return fetch(`${API_BASE_URL}${url}`, {
    ...options,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
    credentials: 'include',
  });
};

const del = (url: string, options: RequestInit = {}) => {
  let accessToken = null;

  if (typeof window === 'undefined') {
    const cookieStore = cookies();
    accessToken = cookieStore.get('accessToken');
  }

  return fetch(`${API_BASE_URL}${url}`, {
    ...options,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
    credentials: 'include',
  });
};

const patch = (url: string, options: RequestInit = {}) => {
  let accessToken = null;

  if (typeof window === 'undefined') {
    const cookieStore = cookies();
    accessToken = cookieStore.get('accessToken');
  }

  return fetch(`${API_BASE_URL}${url}`, {
    ...options,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
    credentials: 'include',
  });
};

export const apiClient = { get, post, put, delete: del, patch };
