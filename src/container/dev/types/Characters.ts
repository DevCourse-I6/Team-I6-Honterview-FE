export interface IPageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IOriginAndLocation {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown';
  origin: IOriginAndLocation;
  location: IOriginAndLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharactersResponse {
  info: IPageInfo;
  results: ICharacter[];
}
