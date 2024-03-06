const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const get = (url: string, options: RequestInit = {}) => {
  return fetch(`${API_BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
    method: 'GET',
  });
};

const post = (url: string, options: RequestInit = {}) => {
  return fetch(`${API_BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
    method: 'POST',
  });
};

const put = (url: string, options: RequestInit = {}) => {
  return fetch(`${API_BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
    method: 'PUT',
  });
};

const del = (url: string, options: RequestInit = {}) => {
  return fetch(`${API_BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
    method: 'DELETE',
  });
};

const patch = (url: string, options: RequestInit = {}) => {
  return fetch(`${API_BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
    method: 'PATCH',
  });
};

export const apiClient = { get, post, put, delete: del, patch };
