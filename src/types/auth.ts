export interface IAccessAndRefreshToken {
  accessToken: string;
  refreshToken: string;
}

export interface IGetLoginUserResponse {
  id: number;
  role: string;
}
