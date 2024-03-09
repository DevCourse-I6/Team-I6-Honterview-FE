import { cookies } from 'next/headers';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
      Authorization: `Bearer ${accessToken}`,
    },
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
      Authorization: `Bearer ${accessToken}`,
    },
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
      Authorization: `Bearer ${accessToken}`,
    },
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
      Authorization: `Bearer ${accessToken}`,
    },
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
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const apiClient = { get, post, put, delete: del, patch };
