import { ICharactersResponse } from '../types/Characters';

export const fetchPosts = async (
  page: number,
): Promise<ICharactersResponse> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`,
  );
  if (!response.ok) {
    throw new Error('network error');
  }
  return response.json();
};
