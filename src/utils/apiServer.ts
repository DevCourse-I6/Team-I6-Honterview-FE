// eslint-disable-next-line @typescript-eslint/no-var-requires
const headers = require('next/headers');

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAccessToken = () => {
  return headers.cookies().get('accessToken')?.value || '';
};

export const getRefreshToken = () => {
  return headers.cookies().get('refreshToken')?.value || '';
};

const get = (url: string, options: RequestInit = {}) => {
  return fetch(`${API_BASE_URL}${url}`, {
    ...options,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
      Cookie: `accessToken=${getAccessToken()}; refreshToken=${getRefreshToken()}`,
    },
    credentials: 'include',
  });
};

const post = (url: string, options: RequestInit = {}) => {
  return fetch(`${API_BASE_URL}${url}`, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
      Cookie: `accessToken=${getAccessToken()}; refreshToken=${getRefreshToken()}`,
    },
    credentials: 'include',
  });
};

const put = (url: string, options: RequestInit = {}) => {
  return fetch(`${API_BASE_URL}${url}`, {
    ...options,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
      Cookie: `accessToken=${getAccessToken()}; refreshToken=${getRefreshToken()}`,
    },
    credentials: 'include',
  });
};

const del = (url: string, options: RequestInit = {}) => {
  return fetch(`${API_BASE_URL}${url}`, {
    ...options,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
      Cookie: `accessToken=${getAccessToken()}; refreshToken=${getRefreshToken()}`,
    },
    credentials: 'include',
  });
};

const patch = (url: string, options: RequestInit = {}) => {
  return fetch(`${API_BASE_URL}${url}`, {
    ...options,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
      Cookie: `accessToken=${getAccessToken()}; refreshToken=${getRefreshToken()}`,
    },
    credentials: 'include',
  });
};

export const apiServer = { get, post, put, delete: del, patch };
